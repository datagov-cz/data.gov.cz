"""Filter streets from RUIAN."""

import pandas as pd

path = "./"

df = pd.read_csv(path + "streets.csv")

filter = ['žlutá', 'zelená', 'písková', 'šarlatová', 'modrá', 'tmavě hnědá', 'bílá', 'světle zelená', 'indigo', 'šedá', 'barevná', 'Ultramarin červená', 'lila', 'žluto-oranžová', 'Egyptská modř', 'karmínová', 'šafránová', 'krémová', 'bronzová', 'hnědá', 'černá', 'azurová', 'okrová', 'falunská červeň', 'rajčatová', 'bledost', 'temně fialová', 'granátová', 'magenta', 'barva diamantů', 'rumělková', 'Rudá', 'akvamarínová', 'azurová', 'růžová', 'červená', 'olivově hnědá', 'růžovo-hnědá', 'purpurovo-černá', 'purpurovo-hnědá', 'žluto-hnědá', 'tmavě zelená', 'tyrkysová', 'vínová', 'švestková', 'zlatá barva', 'oranžová', 'skořicová', 'burgundská', 'černobílá', 'čokoládová', 'kadmium červené', 'smaragdová', 'kadmium oranžové', 'modrozelená', 'khaki', 'bordó', 'kaštanová', 'lososová', 'blankytně modrá', 'tmavě modrá', 'šedozelená', 'purpurová', 'olivová', 'neapolská žluť světlá', 'siena pálená', 'dělovina', 'umbra', 'béžová', 'britská závodní zelená', 'fialová', 'světle hnědá', 'ecru']

out = pd.DataFrame()
for f in filter:
  out = pd.concat([out, df[df['Název ulice'].str.contains(f, case=False)]])

out.to_csv(path + "filtered.csv")
