"""Get historical data from CHMU."""

import csv
import io
from re import I
import pandas as pd
import requests
import zipfile

url = "https://www.chmi.cz/files/portal/docs/meteo/ok/open_data/MDATA/T/__REGION__/__CODE___T_N.csv.zip"  # temperature
# url = "https://www.chmi.cz/files/portal/docs/meteo/ok/open_data/MDATA/SRA/__REGION__/__CODE___SRA_N.csv.zip"  # rain

region = 'Plzensky'
code = 'L2KRAL01'
region = 'Ustecky'
code = 'U1ULKO01'
region = 'Jihocesky'
code = 'C1CHUR01'

r = requests.get(url.replace('__REGION__', region).replace('__CODE__', code))
fzip = zipfile.ZipFile(io.BytesIO(r.content))
fzip.extractall('data/')

startline = 0
with open('data/' + code + '_T_N.csv', encoding='cp1250') as fin: # temeprature
# with open('data/' + code + '_SRA_N.csv', encoding='cp1250') as fin: # rain
  csvr = csv.reader(fin, delimiter=';')
  i = 0
  for row in csvr:
    if (len(row) > 0) and (row[0].strip() == 'Rok'):
      startline = i
      break
    i += 1

df = pd.read_csv('data/' + code + '_T_N.csv', encoding='cp1250', delimiter=';', decimal=',', header=startline-6)  # temperature
# df = pd.read_csv('data/' + code + '_SRA_N.csv', encoding='cp1250', delimiter=';', decimal=',', header=startline-6)  # rain

# temperature:
# df[df['Statistika'] == 'AVG'].loc[:, ['Rok', 'Hodnota červen']].to_csv(code + '_06.csv')
# df[df['Statistika'] == 'AVG'].loc[:, ['Rok', 'Hodnota prosinec']].to_csv(code + '_12.csv')
# df[df['Statistika'] == 'MIN'].loc[:, ['Rok', 'Hodnota prosinec']].to_csv(code + '_12_min.csv')
df[df['Statistika'] == 'AVG'].loc[:, ['Rok', 'Hodnota rok']].to_csv(code + '_year.csv')

# rain:
# df[df['Statistika'] == 'SUM'].loc[:, ['Rok', 'Hodnota červen']].to_csv(code + '_rain_06.csv')