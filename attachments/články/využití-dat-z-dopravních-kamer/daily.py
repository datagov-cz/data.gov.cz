"""Read daily files, calculate statistics for every camera and day."""

import datetime
import numpy as np
import pandas as pd

pd.options.mode.chained_assignment = None  # default='warn'

# since and until dates
startdate = datetime.date(2016, 1, 1)
enddate = datetime.date.today()
d = startdate

# output dataframe
out = pd.DataFrame(columns = ['id', 'date'])

# read and calculate statistics for every day
while d < enddate:
    try:
        # read saved file
        data = pd.read_csv('data/data_' + d.isoformat() + '.csv')

        # add variable hour
        data['hour'] = data['timestamp'].str.slice(11, 13).astype(int)

        # id is device-direction, e.g. PK195-1
        data['id'] = data['device'] + '-' + data['direction'].astype(int).astype(str)

        # count of vehicles by id x hour 
        counts = data.loc[:, ['id', 'hour', 'device']].groupby(by=['id', 'hour']).count().reset_index()

        # filter all with 5-23 >0 every single hour + daily count
        filtred = counts[counts['hour'].between(5, 22)]
        f2 = filtred[filtred['device'] > 0].loc[:, ['id', 'device']].groupby(['id']).count().reset_index()
        f3 = f2[f2['device'] == 18].loc[:, ['id']]
        f3['date'] = d.isoformat()
        f3['device'] = f3['id'].str.slice(0, 5)
        f3['direction'] = f3['id'].str.slice(6, 7)
        pt = pd.pivot_table(counts, values='device', index='id', aggfunc=np.sum).reset_index()
        f3 = f3.merge(pt.rename(columns={'device': 'count'}), how='left', left_on='id', right_on='id')

        # count cars, vans and trucks
        types = [1, 2, 3, 4]
        t = data.loc[:, ['id', 'type', 'device']].groupby(['id', 'type']).count().reset_index()
        ptt = pd.pivot_table(t,index='id', columns='type', values='device').reset_index().rename(columns={1: 'type_1', 2: 'type_2', 3: 'type_3', 4: 'type_4'})

        f3 = f3.merge(ptt, how='left', left_on='id', right_on='id')

        # median speed for id; no measurement <-> speed == 0
        medians = pd.pivot_table(data[data['speed'] > 0], values='speed', index='id', aggfunc=lambda x: np.percentile(x, 50)).reset_index()
        f3 = f3.merge(medians, how='left', left_on='id', right_on='id')

        # rate >30, >40, >50, >60, >70, >80, >90, >100 km/h
        bins = [30, 40, 50, 60, 70, 80, 90, 100]
        minbins = []
        f0 = data[data['speed'] > 0]
        for bin in bins:
            minbins.append('min' + str(bin))
            f0.loc[:, 'min' + str(bin)] = (f0['speed'] > bin) * 1

        overs = pd.pivot_table(f0.loc[:, ['id'] + minbins], index='id', values=minbins)

        f3 = f3.merge(overs, how='left', left_on='id', right_on='id')

        # add to output
        out = pd.concat([out, f3])
    except Exception as e:
        everything = 'fine'

    d += datetime.timedelta(days=1)

out['day'] = pd.to_datetime(out['date']).dt.dayofweek

out.to_csv('daily_passed.csv')