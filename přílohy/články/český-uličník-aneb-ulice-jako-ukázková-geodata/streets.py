"""Extract streets."""

import numpy as np
import os
import pandas as pd
import pyproj

# list of all files in the directory
files_path = 'csv/'
files = os.listdir(files_path)

# keep only some columns
indeces = ['Kód obce', 'Název obce', 'Název MOMC', 'Název části obce', 'Název ulice']
streets = pd.DataFrame(columns=(indeces + ['Souřadnice Y', 'Souřadnice X']))

# read all municipalities and their streets
for file in files:
  df = pd.read_csv(files_path + file, delimiter=';', encoding="cp1250")
  for index in indeces:
    df[index] = df[index].fillna('none')
  try:
    pt = pd.pivot_table(data=df, values=['Souřadnice Y', 'Souřadnice X'], index=indeces, aggfunc=np.mean).reset_index()
    streets = pd.concat([streets, pt], ignore_index=True)
  except:
    print('skipping ', file)

# Change projection
sjtsk = "epsg:5514"
wgs = "epsg:4326"
transformer = pyproj.Transformer.from_crs(sjtsk, wgs)

streets['latitude'] = np.nan
streets['longitude'] = np.nan

for index, row in streets.iterrows():
  (lat, lng) = transformer.transform(-1 * row['Souřadnice Y'], -1 * row['Souřadnice X'])
  streets.loc[index, 'latitude'] = lat
  streets.loc[index, 'longitude'] = lng
  if (index % 100) == 0:
    print(index)

# save the result
streets.to_csv("streets.csv")
