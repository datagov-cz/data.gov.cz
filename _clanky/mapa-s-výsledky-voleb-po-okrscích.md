---
layout: post
detail: true
title: Mapa s výsledky voleb po okrscích
ref: mapa-s-vysledky-voleb-po-okrscich-kraje-2020
lang: cs
image: ../attachments/články/mapa-s-výsledky-voleb-po-okrscích/images/map.png
author: michal_škop
date: 2020-11-24 07:00:00 +01:00
---
Mapy s volebními výsledky jsou již tradiční součástí volebního servisu mnoha médií. Ale poněvadž při letošních krajských volbách 2020 žádné médium celou tuto mapu nedělalo, vytvoříme si ji sami - sami si potom můžete postup zopakovat např. při příštích volbách. 
<!--more-->

Zároveň jde o ukázkové použití a spojování otevřených dat z různých zdrojů.

## Výsledek: Krajské volby 2020 v mapě

{% include image.html url="../attachments/články/mapa-s-výsledky-voleb-po-okrscích/images/map.png" description="Krajské volby 2020 po volebních okrscích: barva odpovídá vítězné straně v daném volebním okrsku: ANO (fialová), ODS a koalice (modrá), STAN a koalice (zelená), KDU-ČSL a koalice (žlutá), Piráti a koalice (černá), ČSSD a koalice (oranžová), KSČM (rudá), SPD (červená), ostatní barvy jsou lokální strany." %}

Volební výsledky jsou v ČR dostupné až na úroveň volebních okrsků (volebních místností), což vedlo ke vzniku velmi podrobných map v několika médiích, např. v [Rozhlase][link_rozhlas] nebo v [Lidovkách][link_lidovky]

Při letošních krajských volbách ale trochu překvapivě žádné mapy za celou ČR nevznikly (existují jen trochu jinak dělané [mapy po krajích][link_volebniatlas]).

Naší ambicí zde není kreslit [real-time mapy pro statisíce lidí pro přímé použití v médiích][link_sulek], ale spíš ukázat směr, jakým postupovat při přípravě takové mapy.

Pro tento případ použijeme mapu v D3, alternativou je např. [vykreslení mapy v QGIS][link_choropleth_qgis] nebo [s mapovým pozadím v Leafletu][link_leaflet].

### Použitá data
Data použitá pro tento projekt si najdeme v [NKOD - Národním katalogu otevřených dat][link_nkod]:

- Pro geografickou část použijeme data z RÚIANu od ČÚZK: [RUIAN Stát - SHP][link_ruian].
- Pro data o volebních výsledcích použijeme data ČSÚ: [Volební výsledky][link_csu].
- Číselníky k volbám opět zveřejňuje ČSÚ: [Číselníky k volbám][link_csu_2].
- Na barvy stran použijeme [vlastní seznam politických stran][link_political_parties].

### Postup zpracování
S přípravou mapových podkladů budeme postupovat podle [návodu][link_choropleth] a volební data zpracujeme sami nově.

Nejprve tedy připravíme mapové podklady dle [instalace][link_choropleth_install] a [návodu][link_choropleth_maps] Pouze místo obcí a ORP jako v příkladě výše použijeme volební okrsky (soubory `VU.xxx`)

Nejprve odstraníme z mapy přebytečné atributy v QGIS ([návod][link_attributes]) a získáme soubor `volebni_okrsky.shp` (a další).

Musíme ještě vyřešit problém jednoznačného id pro oba zdroje dat (RÚIAN a ČSÚ). S tím, že ve volebních datech jsou okrsky dle kódů pro obce, ale v případě velkých měst dělených na části, je to dle těchto městských částí. Vytvoříme si tedy vlastní proměnnou id stylu `oooooo-vu`, např. `559351-2` si označíme okrsek `Plasy 2` (kód ČSÚ pro Plasy je 559351), tedy

- `oooooo` je šestimístný kód ČSÚ pro obce - pokud má obec čtvrti, je to kód čtvrti, pokud ne, je to kód obce, a
- `vu` je číslo okrsku.

V souboru `volebni_okrsky.dbf` to např. můžeme udělat snadno i ručně přidáním nového sloupce (název odpovídající .dbf: `PLACE_ID,C,40`) a vzorcem `=IF(D2="",CONCAT(C2,"-",B2+1-1),CONCAT(D2,"-",B2+1-1))`

Volební data si zpracujeme do tabulky statistics.csv pomocí vlastního krátkého skriptu v Pythonu [transform.py](../attachments/články/mapa-s-výsledky-voleb-po-okrscích/data/transform.py).

A poté už můžeme postupovat [podle návodu][link_choropleth_maps].

Tj.

    shp2json -n --encoding=utf-8 volebni_okrsky.shp | ndjson-map 'd.id = d.properties.PLACE_ID, d' > volebni_okrsky.ndjson
    geo2topo -n tracts=volebni_okrsky.ndjson > volebni_okrsky-topo.json
    toposimplify -P 0.05 -f < volebni_okrsky-topo.json > volebni_okrsky-simple-topo.json
    topo2geo < volebni_okrsky-simple-topo.json tracts=volebni_okrsky-simple.json
    ndjson-split 'd.features' < volebni_okrsky-simple.json > volebni_okrsky-simple.ndjson
    csv2json -n statistics.csv > statistics.ndjson
    ndjson-join --left 'd.id' volebni_okrsky-simple.ndjson statistics.ndjson | ndjson-map 'Object.assign(d[0], Object.assign(d[0].properties, d[1]))' > volebni_okrsky-simple-data.ndjson
    geo2topo tracts=volebni_okrsky-simple-data.json > volebni_okrsky-simple-data-topo.json

Ještě si připravíme soubor s barvami politických stran, použijeme vlastní krátký skript `join_parties.py` a přidáme [barvy][link_political_parties].

A nyní již jen vše použijeme do výsledného html souboru, kde mírně upravíme [index.html](https://data.gov.cz/attachments/%C4%8Dl%C3%A1nky/kartogram-choropleth/data/index.html) z [Kartogram ČR][link_choropleth]: Nový [index.html](../attachments/články/mapa-s-výsledky-voleb-po-okrscích/data/index.html).

### Další užití
Volební mapy lze použít prakticky pro libovolné volby, referenda, apod. 

Detailní mapa např. umožňuje i pohled dovnitř měst, např. zde jsou zobrazeny výsledky krajských voleb 2020 v Plzni a nejbližším okolí, kde jsou zřetelně vidět ostrůvky - sídliště - v moři modré (ODS), kde vyhrávalo fialové ANO.

{% include image.html url="../attachments/články/mapa-s-výsledky-voleb-po-okrscích/images/plzen_popisy.png" description="Plzeň a okolí - krajské volby 2020 po volebních okrscích: barva odpovídá vítězné straně v daném volebním okrsku: ANO (fialová), ODS + TOP 09 (modrá), STAN + SZ + PRO Plzeň (zelená), Piráti (černá). Je zde vidět, že ANO vyhrávalo hlavně na sídlištích." %}

### Použité nástroje a zdroje:
- [Kartogram ČR (choropleth, choropletová mapa)][link_choropleth]
- [TopoJSON-simplify][link_simplify]
- [NDJSON-CLI][link_cli]
- [TopoJSON-client][link_client]
- [TopoJSON-server][link_server]
- [Streming Shapefile Parser][link_parser]
- [D3.js][link_d3]

### Závěr
Článek ukazuje jednu z metod, jak jednoduše vykreslit mapu s volebními výsledky voleb na úrovni volebních okrsků. Zároveň demonstruje, jak používat volební otevřená data z ČSÚ a mapová otevřená data z RÚIAN.


[link_rozhlas]: https://www.irozhlas.cz/volby/jak-volili-vasi-sousedi-prohlednete-si-nejpodrobnejsi-mapu-volebnich-vysledku_1710220940_pek "Jak volili vaši sousedi. Prohlédněte si nejpodrobnější mapu volebních výsledků."
[link_lidovky]: https://www.lidovky.cz/prezidentske-volby-2018.aspx?k=vysledky-druhe-kolo&t=okrsky-mapa "Prezidentské volby 2018."
[link_volebniatlas]: https://volebniatlas.cz/ "Volební atlas"
[link_sulek]: https://marcel.sulek.eu/2018/02/05/volebni-mapy.html "Volební mapy"
[link_choropleth_qgis]: ../kartogram-choropleth#postup-zpracování-mapa-v-qgis "Kartogram ČR (choropleth, choropletová mapa): Postup zpracování v QGIS"
[link_leaflet]: https://leafletjs.com/examples/choropleth/ "Leaflet: Choropleth"
[link_nkod]: https://data.gov.cz/datové-sady "NKOD"
[link_ruian]: https://data.gov.cz/datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2Fhttps---atom.cuzk.cz-api-3-action-package_show-id-cz-00025712-cuzk_ruian-staty-shp_1 "NKOD - RÚIAN - SHP - soubor obce ČR"
[link_csu]: https://data.gov.cz/datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2Fhttp---vdb.czso.cz-pll-eweb-package_show-id-kz2020okrsky "NKOD - ČSÚ - výsledky voleb"
[link_csu_2]: https://data.gov.cz/datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2Fhttp---vdb.czso.cz-pll-eweb-package_show-id-kz2020cis "NKOD - ČSÚ - číselníky k volbám"
[link_political_parties]: https://github.com/michalskop/political_parties/blob/master/cz/parties.csv "Political parties CZ"
[link_choropleth]: ../kartogram-choropleth "Kartogram ČR (choropleth, choropletová mapa)"
[link_choropleth_install]: ../kartogram-choropleth#instalace-potřebných-programů "Kartogram ČR (choropleth, choropletová mapa): Instalace potřebných programů"
[link_choropleth_maps]: ../kartogram-choropleth#postup-zpracování-mapa-v-d3 "Kartogram ČR (choropleth, choropletová mapa): Postup zpracování - mapa v D3"
[link_attributes]: https://gis.stackexchange.com/questions/12329/how-to-delete-fields-in-qgis "How to delete fields in QGIS"

[link_simplify]: https://github.com/topojson/topojson-simplify "TopoJSON-simplify"
[link_cli]: https://github.com/mbostock/ndjson-cli "NDJSON-CLI"
[link_client]: https://github.com/topojson/topojson-client "TopoJSON-client"
[link_server]: https://github.com/mbostock/topojson-server "TopoJSON-server"
[link_parser]: https://github.com/mbostock/shapefile "Streaming Shapefile Parser"

[link_d3]: https://d3js.org/ "D3.js"




