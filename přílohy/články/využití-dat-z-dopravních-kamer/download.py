"""Download data from all stations, extract them and filter the most important information."""

import datetime
import io
import pandas as pd
import requests
import zipfile

# data since and until dates
startdate = datetime.date(2016, 1, 1)
enddate = datetime.date.today()
d = startdate

# column names in the csv files
columns = ["id_detector", "timestamp", "intenzita", "intenzita_n", "obsazenost", "speed", "stav", "type", "trvani100", "speed_history", "type_10"]

# download, extract, filter and save for every day
while d < enddate:
    # some days are missing, so we use 'try'
    try:
        # dstring is for example 20200225 for 2020-02-25
        dstring = d.strftime("%Y%m%d")
        print(dstring)
        
        # download the zipped file
        url = "https://doprava.plzensky-kraj.cz/opendata/doprava/den/DOPR_D_" + dstring + ".zip"
        r = requests.get(url)

        with zipfile.ZipFile(io.BytesIO(r.content)) as z:
            with z.open("DOPR_D_" + dstring + ".csv") as f:
                df = pd.read_csv(f, header=None, delimiter="|")

        # name columns
        df.columns = columns

        # create device and direction variables
        df['device'] = 'PK' + df['id_detector'].astype(str).str.slice(2, 5)
        df['direction'] =  df['id_detector'].astype(str).str.slice(7, 8)

        # save filtered (columns) file
        df.loc[:, ['device', 'direction', 'timestamp', 'speed', 'type']].to_csv('data/data_' + d.isoformat() + '.csv', index=False)
    except Exception as e:
        print(e)

    # next day
    d = d + datetime.timedelta(days=1)
