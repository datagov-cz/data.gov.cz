"""CZ prepare data for matrix chart."""

import csv
import datetime
import pandas

path = "NÁŠ_PRACOVNÍ_ADRESÁŘ"

# download data
url = "https://onemocneni-aktualne.mzcr.cz/api/v1/covid-19/osoby.csv"
source_data = pandas.io.parsers.read_csv(url)

# pivot table from source data
grouped_data = source_data.groupby(['datum_hlaseni', 'kraj'])['datum_hlaseni'].count().reset_index(name='value')

# dates
first_day = datetime.datetime.strptime(grouped_data.min()['datum_hlaseni'], "%Y-%m-%d")
last_day = datetime.datetime.strptime(grouped_data.max()['datum_hlaseni'], "%Y-%m-%d")
difference = last_day - first_day

# full table with all dates and all regions
full_zero_data = pandas.DataFrame(columns=grouped_data.columns)
codes = grouped_data['kraj'].unique()
for i in range(0, difference.days + 1):
    this_day = first_day + datetime.timedelta(i)
    for code in codes:
        item = {
            'datum_hlaseni': datetime.datetime.strftime(this_day, "%Y-%m-%d"),
            'kraj': code
        }
        full_zero_data = full_zero_data.append(item, ignore_index=True)

# join the tables -> all dates and regions with values
full_grouped_data = pandas.merge(full_zero_data, grouped_data, how='left', on=['datum_hlaseni', 'kraj'])
full_grouped_data.fillna(0, inplace=True)
full_grouped_data = full_grouped_data.drop(['value_x'], axis=1)
full_grouped_data.columns = grouped_data.columns

# cumulative data
cumulative_data = {}
header = ['date', 'code', 'value']
with open(path + "cz_regions_infected.csv", "w") as fout:
    dr = csv.DictWriter(fout, header)
    dr.writeheader()
    for index, row in full_grouped_data.iterrows():
        this_day = datetime.datetime.strptime(row['datum_hlaseni'], "%Y-%m-%d")
        this_yesterday = this_day - datetime.timedelta(1)
        this_yesterday_text = datetime.datetime.strftime(this_yesterday, "%Y-%m-%d")
        try:
            last = cumulative_data[this_yesterday_text][row['kraj']]
        except Exception:
            last = 0
        if row['datum_hlaseni'] not in cumulative_data.keys():
            cumulative_data[row['datum_hlaseni']] = {}
        cumulative_data[row['datum_hlaseni']][row['kraj']] = last + int(row['value'])
        item = {
            'date': row['datum_hlaseni'],
            'code': row['kraj'],
            'value': cumulative_data[row['datum_hlaseni']][row['kraj']]
        }
        dr.writerow(item)
