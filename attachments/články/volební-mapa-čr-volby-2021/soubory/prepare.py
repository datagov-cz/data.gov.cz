"""Prepare data."""

import numpy as np
import pandas as pd

path = "" # define your path

df = pd.read_csv(path + "okrsky_2021.csv")

cocodf = pd.read_csv(path + 'pscoco.csv')	# soubor z https://volby.cz/opendata/ps2021/csv_od/pst4p_csv_od.zip
cocodf['diff'] = cocodf['MAXOKRSEK1'] > cocodf['MINOKRSEK1']

pretty = pd.read_csv(path + "pretty_names.csv")	# vlastní soubor s "hezkými jmény"
pretty['is_pretty'] = pretty['Název'].apply(lambda x: x.find("(") > -1)

cocodf = cocodf.merge(pretty, how="left", left_on="OBEC_PREZ", right_on="Kód obce")

# cocodf.to_csv(path + "pscoco_test.csv", index=False)

cocodf['pretty_name'] = np.where((cocodf['is_pretty']) | (cocodf['is_pretty'].isna()), cocodf['Název'], cocodf['NAZEVOBCE'])

cocodf['MOMC'] = np.where(cocodf['OBEC'] == cocodf['OBEC_PREZ'], '', cocodf['NAZEVOBCE'])

# cocodf.to_csv(path + "pscoco_test.csv", index=False)

cnumdf = pd.read_csv("cnumnuts_2021.csv")	# soubor z https://volby.cz/opendata/ps2021/csv_od/pst4p_csv_od.zip

# kraje, okresy
df = df.merge(cocodf.loc[:, ['KRAJ', 'OKRES', 'CPOU', 'ORP', 'OBEC', 'VOLKRAJ', 'OBEC_PREZ']], how="left", left_on="OBEC", right_on="OBEC")

df = df.merge(cnumdf.loc[:, ['NUMNUTS', 'NUTS', 'NAZEVNUTS']], how="left", left_on="KRAJ", right_on="NUMNUTS").rename(columns={"NAZEVNUTS": "NAZEVKRAJ", 'NUTS': 'ISOKRAJ'})
# zahranici
df.loc[:, 'ISOKRAJ'].fillna('CZZZZ', inplace=True)
df.loc[:, 'NAZEVKRAJ'].fillna('Zahraničí', inplace=True)
del df['NUMNUTS']

df = df.merge(cnumdf.loc[:, ['NUMNUTS', 'NUTS', 'NAZEVNUTS']], how="left", left_on="OKRES", right_on="NUMNUTS").rename(columns={"NAZEVNUTS": "NAZEVOKRES", 'NUTS': 'ISOOKRES'})

# zahranici
df.loc[:, 'ISOKRAJ'].fillna('CZZZZZ', inplace=True)
df.loc[:, 'NAZEVKRAJ'].fillna('Zahraničí', inplace=True)
del df['NUMNUTS']


# pretty names
df = df.merge(cocodf.loc[:, ["OBEC", "NAZEVOBCE", "is_pretty", "Název", "diff", "MOMC"]], how="left", left_on="OBEC", right_on="OBEC").rename(columns={"Název": "pretty_name"})


# pretty name
df['tname'] = np.where(df['diff'], df['pretty_name'] + ' - okrsek ' + df['OKRSEK'].astype(str), df['pretty_name'])
df['name'] = np.where(df['MOMC'] != '', df['tname'] + " (" + df['MOMC'] + ")", df['tname'])
del df['tname']

# zahranici
psrzvo = pd.read_csv(path + "psrzvo.csv")

df.loc[len(df) - len(psrzvo):len(df), 'name'] = (psrzvo['NAZEVZEME'] + ' - ' + psrzvo['NAZEVOKRSK']).tolist()

# non-voters
df['HLASY_00'] = df['VOL_SEZNAM'] - df['PL_HL_CELK']

# save
df.to_csv(path + "okrsky_2021_prepared.csv", index=False)

