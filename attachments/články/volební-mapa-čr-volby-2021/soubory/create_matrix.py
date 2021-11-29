"""Creates sample distance matrix and other matrices."""

# quite long: 
# https://stackoverflow.com/questions/29723560/distance-matrix-for-rows-in-pandas-dataframe

# Variant 2: without non-voters
# Variant 1: with non-voters

import datetime
from typing_extensions import TypeVarTuple
import dcor
import pandas as pd
import numpy as np
from scipy.spatial import distance_matrix

path = ""	# set path
nparties = 22

nonvoters = False

data = pd.read_csv(path + "okrsky_2021_prepared.csv")

# randomly select target okrseks
# proportion = 0.1
target = 7000

total = data['VOL_SEZNAM'].sum()  # total number of voters

# save raw matrix districts
ddata = pd.DataFrame()
if nonvoters:
    start = 0
    voters_string = "_nonvoters"
else:
    start = 1
    voters_string = ""
for i in range(start, nparties + 1):
    ddata['HLASY_' + str(i).zfill(2)] = data['HLASY_' + str(i).zfill(2)]
ddata.to_csv(path + "districts.csv", index=False)

# save other levels
levels = {
    '6': {'name': 'MOMC', 'code': 'MOMC'},
    '5': {'name': 'name', 'code': 'OBEC_PREZ'},
    '4': {'name': 'ORP', 'code': 'ORP'},
    '3': {'name': 'NAZEVOKRES', 'code': 'OKRES'},
    '2': {'name': 'NAZEVKRAJ', 'code': 'KRAJ'}
}

cparties = []
for i in range(start, nparties + 1):
    cparties.append('HLASY_' + str(i).zfill(2))

header = ['code', 'name'] + cparties

for level in levels:
    t = pd.DataFrame(data[levels[level]['code']].replace(np.nan, '').unique().tolist())
    ldata = pd.pivot_table(data, values=cparties, index=[levels[level]['code']], aggfunc=np.sum).reset_index()
    ldata = ldata.merge(t, how='left', left_on=levels[level]['code'], right_on=0).rename(columns={0: 'name'})
    ddata.to_csv(path + "regions_" + level + voters_string + ".csv", index=False)


# random select
randoms = pd.DataFrame(index=np.arange(total))
randoms['random'] = np.random.rand(total)
randoms['select'] = randoms['random'] < target / total

data['cumulative'] = data['VOL_SEZNAM'].cumsum()
data['cumulative_prev'] = data['cumulative'].shift(1).fillna(0)

randompeople = np.array(randoms[randoms['select']]['select'].index.tolist())

data['random_counts'] = data.apply(lambda x: np.count_nonzero(np.array(randompeople) < x['cumulative']) - np.count_nonzero(np.array(randompeople) < x['cumulative_prev']), axis=1)

selected = data[data['random_counts'] > 0]

# save selected
sdata = pd.DataFrame()
for i in range(start, nparties + 1):
    sdata['HLASY_' + str(i).zfill(2)] = selected['HLASY_' + str(i).zfill(2)]
sdata.to_csv(path + "raw_matrix_" + str(target) + voters_string + ".csv", index=False)

# percentages
pdata = pd.DataFrame()
for i in range(start, nparties + 1):
    pdata['p_' + str(i).zfill(2)] = selected['HLASY_' + str(i).zfill(2)] / selected['VOL_SEZNAM']


distance = lambda x, y: np.sqrt(np.sum((x - y) ** 2))

distance = lambda column1, column2: pd.np.linalg.norm(column1 - column2)

# distance_matrix(pdata, pdata)


start = datetime.datetime.now()
# see https://stackoverflow.com/questions/29723560/distance-matrix-for-rows-in-pandas-dataframe/69995518#69995518
# result = pdata.apply(lambda x: pdata.apply(lambda y: distance(x, y), axis=1), axis=1)
# result = distance_matrix(pdata, pdata)
result = dcor.distances.pairwise_distances(pdata)
end = datetime.datetime.now()
print("time: ", end - start)

result = pd.DataFrame(result)
result.to_csv(path + "distance_matrix_" + str(target) + voters_string + ".csv", index=False)
