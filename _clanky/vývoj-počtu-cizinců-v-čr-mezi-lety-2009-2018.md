---
layout: post
detail: true
lang: cs
icon: list
ref: vývoj-počtu-cizinců-v-čr-mezi-lety-2009-a-2018
author: martin_dvořák
date: 2020-05-07 01:00:00
title: Vývoj počtu cizinců v ČR mezi lety 2009 a 2018
---

Česká republika se stává kosmopolitní zemí. Jde o logický vývoj společnosti, která se internacionalizuje, a to zejména z důvodů nabídky pracovních příležitostí a obecně relativně vysoké kvality života. Pojďme se podívat na tento jev podrobněji očima dat. V České republice bylo k 31.12.2018 564 000 cizinců. 
- Jaké jsou národnosti?
- Kde je cizinců nejvíce? 
- O jaké věkové skupiny se jedná?
<!--more-->

Na tyto otázky se pokusíme odpovědět s pomocí [Českého statistického úřadu][ČSÚ], který katalogizuje v [Národním katalogu otevřených dat][NKOD] datové sady o [Počtech cizinců podle státního občanství, věku a pohlaví][Source] již od roku 2004. Pro potřeby této analýzy se podíváme na dostupné datové distribuce "pouze" 10 let zpět, tedy od roku 2009. 

## K čemu chceme dojít?
Článek si klade za cíl představit práci s daty v programu [Power BI][Power BI] a vytvořit níže uvedený dashboard. Druhým cílem je pak vizualizace dat v programu [QGIS][A Free and Open Source Geographic Information System]. 

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://app.powerbi.com/view?r=eyJrIjoiY2QwMzM5YTktOTI0YS00MzQzLTkzYjMtYjI1OTQxNTgxNGZjIiwidCI6ImI4MDRlNTE5LTFjYzYtNDk3ZC1hOTVmLWUwMDIwNGMwMzhlZSIsImMiOjh9" frameborder="0" allowFullScreen></iframe>
</div>

\

## Použitá data

Primárními daty pro naši práci jsou již představená data o cizincích v distribucích od roku 2009 do roku 2018. K pochopení struktury dat a významu číselníků je nutné nahlédnout do [metodiky][Metodika počtu cizinců], která je vždy k danému datasetu k dispozici. Další úskalím, které nám ČSÚ trochu práci ztěžuje, je "zipování souborů, a to i tam, kde se nachází pouze jeden .csv soubor.
Jelikož jsou data o cizincích publikovaná do úrovně okresů, budou nás sekundárně zajímat rovněž data o počtech obyvatel v jednotlivých okresech. Zde již ČSÚ otevřená data nepublikuje, proto je nutné si je stáhnout z jejich [veřejné databáze][Veřejná databáze ČSÚ]. Třetím zdrojem dat je soubor [Správních hranic a hranic katastrálních území ČR][Data] od [ČÚZK][ČÚZK], kde budou použity .shp okresů v programu QGIS.

## Postup zpracování
V první řadě si nainstalujeme [Power BI](https://www.microsoft.com/en-us/download/details.aspx?id=58494) (dále jen PBI). Při práci v PBI budeme pracovat s více samostatnými .csv soubory. Je tedy dobré pracovat s celou složkou, kde mámem uložené jednotlivé soubory, což PBI umožňuje. Po otevření programu tedy zvolíme funkci "Get data --> Folder" a poté všechny soubory .csv zkomprimujeme do 1 souboru. 
{% include image.html
    url="../attachments/články/vývoj-počtu-cizinců-v-čr-mezi-lety-2009-2018/obrázky/1komprimace_csv.png"
    description="Komprimace souborů csv"
%}
Následně se můžeme přepnout do módu "Edit Queries", kde bude nutné data ještě upravit. V první řadě se musíme vypořádat s tím, že ČSÚ nám data podstrčil agregovaně či spíše duplicitně. V prvotním součtu totiž dojdeme k tomu, že v České republice máme 9 029 520 cizinců jen v roce 2018. Je tedy jasné, že data jsou různě agregována, a to jak za věkové skupiny, tak národnosti, pohlaví ... a to v různých měřítkách a ještě se všemi možnými kombinacemi. Cílem je tedy dostat se pouze k počtům za okresy. Toho docílíme tak, že zapneme filtraci v jednotlivých sloupcích, a to následovně: 

- Pohlavi_kod - vybereme hodnoty 1 a 2 (tím jsme odfiltrovali prázdné/agregované hodnoty) 
- Vek_kod - vypneme prázdné hodnoty
- Vuzemi_kod vypneme číslo 19 (úroveň ČR)

Číselníky (pohlavi_cis, vek_cis, ...) pro tuto ukázku nepotřebujeme, jelikož vše důležité je obsaženo v textových hodnotách. Nicméně všechny relevantní [číselníky](https://data.gov.cz/datové-sady?dotaz=číselníky&poskytovatel=Český%20statistický%20úřad) lze rovněž najít v NKOD ve formátu .xml a případně je připojit do datového modelu. 

Po dokončení úprav editor uzavřeme (tlačítko "Close & Apply") a dále pracujeme jen s vizualizačními technikami. V boxu na pravé straně máme všechny datové sady, v druhém sloupci pak možnosti vizualizací a v třetím boxu jsou filtry. Pro naše účely nejvíce využíváme "bar & column charts". Vše funguje systémem drag & drop, kde vybíráme z tabulkové části data do částí "os x a y", případně do legendy a do pole "values". Jednotlivá pole lze i posunovat přímo do vizualizačního boxu a PBI samo zvolí nejvhodnější vizualizaci. Na závěr ještě umístíme "Slicer" s jednotlivými roky. Všechna pole pak formátujeme v sekci "Format". 

První sekce je tedy hotová, přepneme na druhý list, na kterém využijeme mapovou vizualizaci pro prezentaci počtu cizinců v okresech. PBI mají základně nastavené Bing mapy (jako možnost lze využít i plugin "esri maps for PBI", které jsou však pod placenou licencí). V mapě do pole "Location" zvolíme okres, do pole "Size" pak pole "hodnota" --> "vykreslení okresů dle počtu cizinců" a použijeme pouze rok 2018. Ve finální vizualizaci došlo k chybě, kde byl okres Plzeň-sever geolokován do Francie.
{% include image.html
    url="../attachments/články/vývoj-počtu-cizinců-v-čr-mezi-lety-2009-2018/obrázky/2plzen_ve_francii.png"
    description="Chyba v geolokaci okresu Plzeň"
%}
 Z tohoto důvodu je nutné přepnout v levém panelu do tabulkové (datové) části, označit sloupec "Okres" a v druhé záložce přiřadit "Data Category: County".
{% include image.html
    url="../attachments/články/vývoj-počtu-cizinců-v-čr-mezi-lety-2009-2018/obrázky/3county.png"
    description="Oprava chyby v geolokaci"
%}
Do legendy pak přidáme atribut pohlaví. PBI pak nabízí mnoho dalších možností, jak data upravovat a vizualizovat. 

## A co v QGIS?

QGIS je volně dostupný open source software určený zejména pro prezentaci prostorových dat. V této části tak použijeme klasický kartogram pro prezentaci vývoje podílu cizinců v okresech ČR a využijeme i "plugin cartogram" pro tvorbu [anamorfované mapy](https://cs.wikipedia.org/wiki/Anamorf%C3%B3za_), kterou vizualizujeme absolutní počty cizinců v ČR. 

Výsledek anamorfované mapy.
{% include image.html
    url="../attachments/články/vývoj-počtu-cizinců-v-čr-mezi-lety-2009-2018/obrázky/4ciz_anamorf.svg"
    description="Anamorfovaná mapa"
%}

Nejprve si do QGIS nahrajeme shapefile administrativních hranic, okresů které jsme si uvedli na začátku. Z horní lišty vybereme "Vrstva" --> "Přidat vrstvu" --> "Přidat vektorovou vrstvu" a nahrajeme okresy. 
Poté je třeba do GIS nahrát data o počtech cizinců a je třeba je připojit k vrstvě .shp okresů, kterou jsme stáhli z ČÚZK.

{% include image.html
    url="../attachments/články/vývoj-počtu-cizinců-v-čr-mezi-lety-2009-2018/obrázky/5nahrat_csv.png"
    description="Přidání dat o počtech cizinců"
%}

{% include image.html
    url="../attachments/články/vývoj-počtu-cizinců-v-čr-mezi-lety-2009-2018/obrázky/6gis_JOIN.png"
    description="Připojení dat"
%}
 
Následně si stáhneme plugin cartogram  a v záložce "vektor" --> "cartogram" --> "compute cartogram" - zvolíme proměnnou absolutního počtu cizinců. 
{% include image.html
    url="../attachments/články/vývoj-počtu-cizinců-v-čr-mezi-lety-2009-2018/obrázky/7plugin.png"
    description="Plugin cartogram"
%}

Anamorfóza (ang. cartogram) nám zderformuje mapu dle zastoupení zvolené proměnné, kde samozřejmě významně dominuje Praha a dále velká krajská města. Za zmínku stojí rovněž okres Mladá Boleslav, kde je tradičně zastoupen velký počet cizinců zaměstnaných ve firmě Škoda. 

Podobně použijeme i relativní počty, tedy procentuální zastoupení cizinců na celkové populaci v daném území. Zde je důležité si data rovněž předpřipravit např. v někteérm z tabulkových editorů (např. Google Sheets, Microsoft Excel, CalC apod.) a poté je stejnou cestou nahrát do QGIS. Mapu poté dotváříme v sekci symbologie, kde byla zvolena kvantilová klasifikace.
{% include image.html
    url="../attachments/články/vývoj-počtu-cizinců-v-čr-mezi-lety-2009-2018/obrázky/8symbology.png"
    description="Dotvoření mapy v sekci symbologie"
%}
Závěrečnou editaci mapy provedeme pomocí tlačítka "nové tiskové rozvržení" v horním menu, kde postupně přidáme název, legendu a měřítko.
{% include image.html
    url="../attachments/články/vývoj-počtu-cizinců-v-čr-mezi-lety-2009-2018/obrázky/9legenda.png"
    description="Přidání názvu, legendy a měřítka"
%}

## Další užití, závěr
Ve výstupech nejsou použita jiná územní měřítka, ve kterých lze data zobrazovat. V tomto ohledu se nabízí minimálně zpracování za kraje ČR. Další možností je data obohatit o tzv. [Informativní přehledy][Info MVČR] cizinců, které publikuje Ministerstvo vnitra za obce, statutární města nebo městské části. 

Tvorba datového dashboardu v PBI (pokud nepočítáme "peripetie" z pochopení struktury dat) trvala asi 2 hodiny (pro mírně pokročilého uživatele). Vizualizace v QGIS trvaly rovněž cca 2 hodiny (pro začátečníka s QGIS). Níže uvádíme některé užitečné zdroje pro práci na obodných datech, jaké jsou uvedeny v tomto článku:
 
- [Jak připojit .csv k vrstvě .shp][Návod]
- [Tvorba kartodiagramů][Návod_2]


[ČSÚ]: https://www.czso.cz/ "Český statistický úřad"
[NKOD]: https://data.gov.cz/ "Národní katalog otevřených dat"
[Source]: https://data.gov.cz/datové-sady?dotaz=cizinci&klíčová%20slova=státní%20občanství "Zdrojové soubory"
[Data]: https://data.gov.cz/datová-sada?iri=https%253A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2FZmmerickyU%2F752310056 "Data ČÚZK pro QGIS"
[Power BI]: https://powerbi.microsoft.com/cs-cz/ "Microsoft Power BI"
[A Free and Open Source Geographic Information System]: https://qgis.org/en/site/ "QGIS"
[Metodika počtu cizinců]: (https://www.czso.cz/csu/cizinci/metodika-poctu-cizincu) "Metodika ČSÚ k počítání cizinců"
[Veřejná databáze ČSÚ]: (https://vdb.czso.cz/vdbvo2/faces/cs/index.jsf?page=home "vdb čsú"
[ČÚZK]: https://www.cuzk.cz/ "Český úřad zeměměřičský a katastrální"
[Info MVČR]: https://www.mvcr.cz/clanek/informativni-pocty-obyvatel-v-obcich.aspx "Informativní přehledy o počtech cizinců"
[Návod]: https://training.gismentors.eu/qgis-zacatecnik/vektorova_data/join.html "Návod na připojení vrstev"
[Návod_2]: https://training.gismentors.eu/qgis-pokrocily/ruzne/grafy.html "Návod na tvorbu kartodiagramů"



