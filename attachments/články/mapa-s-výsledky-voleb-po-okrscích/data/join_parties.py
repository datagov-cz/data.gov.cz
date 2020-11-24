"""Join info about parties."""

import copy
import csv
import json
import random

kparties = {}
with open("election_parties.csv") as fin:
    dr = csv.DictReader(fin)
    for row in dr:
        print(row)
        kparties[row['KSTRANA']] = row
        
colors = {}
with open("parties.csv") as fin:
    dr = csv.DictReader(fin)
    for row in dr:
        colors[row['volby.cz']] = row

def random_color():
    return '#' + str(random.randint(3, 9)) + str(random.randint(3, 9)) + str(random.randint(3, 9))

for k in kparties:
    color = random_color()
    for c in colors:
        if kparties[k]['VSTRANA'] == c:
            color = colors[c]['color']
    kparties[k]['color'] = color

with open("parties.json", "w") as fout:
    json.dump(kparties, fout, ensure_ascii=False, indent=2)

print(kparties)