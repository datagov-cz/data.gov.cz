"""Prepare data for chart."""

import numpy as np
import pandas as pd

# municipalities names
muni = pd.read_csv("kzcoco.csv", delimiter=";", encoding="cp1250")

# statistics + id
statistics = pd.read_csv("kzt6.csv", delimiter=";", encoding="cp1250")
statistics['id'] = statistics['OBEC'].astype(str) + '-' + statistics['OKRSEK'].astype(str)

# results
results = pd.read_csv("kzt6p.csv", delimiter=";", encoding="cp1250")
results['id'] = results['OBEC'].astype(str) + '-' + results['OKRSEK'].astype(str)

# parties
parties = pd.read_csv("kzrkl.csv", delimiter=";", encoding="cp1250")


s = statistics[['id', 'VOL_SEZNAM', 'PL_HL_CELK']]

r = pd.pivot_table(results, values='POC_HLASU', index=['id'], columns=['KSTRANA'], aggfunc=np.sum, fill_value=0)

r = r.merge(s, left_on='id', right_on='id')

r.to_csv("statistics.csv", index=False)









