---
layout: post
detail: true
title: "Sčítání lidu: Od císaře pána k otevřeným datům"
ref: sčítání-lidu-od-císaře-pána-k-otevřeným-datům
lang: cs
image: ../přílohy/články/sčítání-lidu-od-císaře-pána-k-otevřeným-datům/images/main.webp
author: michal_škop
date: 2022-06-26 07:00:00 +02:00
---
Český statistický úřad začal v minulých měsících zveřejňovat [výsledky Sčítání lidu, domů a bytů z roku 2021][link_csu_scitani], a rovnou také jako [otevřená data][link_nkod_scitani]. Sčítání má více jak 150 letou tradici, počátky sahají do Rakouska-Uherska a tak se přímo nabízí ukázkové srovnání s jižními sousedy.

<!--more-->
První “moderní” sčítání lidu se na území ČR uskutečnilo už před více než 150 lety, v roce 1869, sčítání proběhlo v celém Rakousku-Uhersku. [Příkaz z 29. 3. 1869 o sčítání lidu nese podpis císaře Františka Josefa I][link_befel]. Tento befel také nastavil periodicitu sčítání na 10 let, což prakticky přetrvává dodnes. Prvních 5 českých sčítání, do roku 1910, tedy bylo součástí sčítání rakousko-uherských.

{% include image.html url="../přílohy/články/sčítání-lidu-od-císaře-pána-k-otevřeným-datům/images/befel_480.webp" description="Příkaz z 29. 3. 1869 o sčítání lidu zdroj: Österreichische Nationalbibliothek" %}

Díky statistickým úřadům obou zemí jsou výsledky sčítání poměrně dobře dostupné ve velkém detailu. Můžeme si tedy porovnat, jak se oněch 150 let obě tyto země s částečně společnou historií vyvíjely. 

Pro ilustraci použití dat ze sčítání si **vytvoříme mapu ČR a v Rakousku a znázorníme na ni, jak se za těch 150 let změnil počet obyvatel v jednotlivých obcích**. Uvidíme, jestli se jevy jako urbanizace, rozvoj průmyslu a služeb, industrializace zemědělství projeví stejně. A jak se kupříkladu dodnes projevuje vyhnání sudetských Němců z území dnešního ČR na počet obyvatel dotčených obcí.

## Použitá data
Pro vyhledání potřebných dat - data ze sčítání a geodata - nám dobře poslouží katalogy otevřených dat obou zemí - [Národní katalog otevřených dat][link_nkod] a [Open Data Österreich - Katalog][link_odo] - stejně jako stránky obou statistických úřadů.

1. Český statistický úřad: [Výsledky sčítání 2021 - otevřená data][link_csu_scitani_od] nebo v [Národním katalogu otevřených dat][link_nkod_scitani]
2. Český statistický úřad: [Historický lexikon obcí České republiky 1869 - 2011][link_csu_lexikon].
3. Český úřad zeměměřický a katastrální: [RUIAN Stát - SHP][link_nkod_ruian]
4. Statistik Austria: [Bevölkerung seit 1869 für Gemeinden][link_odo_population]
5. Statistik Austria: [Bevölkerungsstand 2022][link_odo_population_2022] 
6. Statistik Austria: [Gliederung Österreichs in Gemeinden][link_odo_maps]

Data ze sčítání i geodata jsou obecně dostupná jako otevřená; narazíme jen na dílčí zádrhele: 

Vzhledem k tomu, že v Rakousku se budou data z loňského sčítání publikovat teprve v roce 2023, použijeme [aktuální data z registrů][link_odo_population_2022] (data o počtech obyvatel se nyní v Rakousku, narozdíl od ČR, čerpají přímo z registrů obyvatel).

V České republice naopak se musíme spokojit s neotevřenými daty (ve formátu Excelu v [Historickém lexikonu obcí][link_csu_lexikon]) u dat za starší sčítání.

To jsou ale vcelku běžné problémy, velký kus práce za nás statistické úřady už udělaly např. v tom, že data jsou již přepočtena na dnešní obce.

## Postup zpracování
Pro geografickou část - přípravu map obcí ČR a Rakouska - postupujeme podle článku [Kartogram ČR (choropleth, choropletová mapa)][link_kartogram]. Z původních souborů typu shapefile (můžeme si ČR a Rakousko rovnou spojit např. v programu QGIS) tak získáme soubor ve formátu geojson.

Údaje o počtech lidí si jen upravíme do tabulky např. pomocí kontingenční tabulky (použijeme např. _Libreoffice Calc_, _Excel_, programovací jazyk _Python_ s knihovnou _Pandas_). A nakonec jednoduše vydělíme nejnovější údaj o počtu lidí v obci s údajem z roku 1869 a pro jednoduchost převedeme na procenta. Získáme tedy procentní údaj, jaký je dnes počet obyvatel obce v porovnání s dobou před 150 lety. A tento údaj znázorníme v mapě.

Obce obarvíme podle toho, zda v nyní v nich žije <span style="color:red">méně lidí než v roce 1869</span>, <span style="color:gray">zhruba stejně</span>, nebo <span style="color:blue">více lidí dnes než v roce 1869</span>. Použijeme škálu červená-bílá-modrá, aby výsledek byl přístupný i lidem s [barvoslepostí][link_barvoslepost].

## Výsledek
Přestože jde v první řadě o ukázku, jak lze použít otevřená data ze sčítání, výsledná mapa je sama o sobě zajímavá. 

Stěhování do měst a jejich okolí je společným trendem ČR i Rakouska. Ale na první pohled vidíme, že zatímco v Čechách při tom souběžně dochází k vylidňování venkova, na většině Moravy a většině Rakouska venkov zůstává zhruba stejně obydlen jako před 150 lety a města pobírají spíše celkový nárůst obyvatel.

V ČR je vidět i důsledek vzniku průmyslových oblastí Ostravska a severozápadních Čech. U pánve severozápadních Čech (oblast zhruba od Kadaně po Ústí nad Labem) se tím jasně přebil efekt vyhnání sudetských Němců - dnes v dané oblasti žije násobně více lidí než před 150 lety.

{% include image.html url="../přílohy/články/sčítání-lidu-od-císaře-pána-k-otevřeným-datům/images/map_960.webp" description="Počet dnešních obyvatel v obcích ČR a Rakouska ve srovnání s rokem 1869 (procentuální vyjádření)." %}

## Další použití
Podobným postupem se dají zobrazit mnohé další informace ze sčítání lidu, které se právě v této době postupně zveřejňují. Zároveň zde byla ukázka, že pokud jsou data dostupná alespoň srovnatelně ve více zemích, stojí za to je porovnat a získat tak další pohled na vlastní data.

Jiný pohled (který je pravda trochu více _geeky_) na vývoj počtu obyvatel (pro přehlednost v detailu za obce s rozšířenou působností/ORP v ČR a okresy/bezirke v Rakousku) ukazuje následující mapa, kde je pomocí [sparkline][link_sparkline] zachycen vývoj počtu obyvatel v čase v dané ORP nebo okrese od roku 1869 po současnost - každá čára-sparkline (zleva doprava) odpovídá jednomu regionu a ukazuje průběh počtu obyvatel v čase. (Tato mapa také vznikla během tvorby tohoto článku.)

{% include image.html url="../přílohy/články/sčítání-lidu-od-císaře-pána-k-otevřeným-datům/images/sparkle_480.webp" description="Změny v počtu obyvatel v ORP (ČR) a okresech (Rakousko) mezi roky 1869 a současností podle sčítání obyvatel. Vývoj v každém regionu je znázorněn pomocí sparkline. Barva sparkline odpovídá procentuální změně počtu obyvatel a tloušťka odpovídá počtu lidí." %}

## Použité nástroje a zdroje
- [Kartogram ČR (choropleth, choropletová mapa)][link_kartogram]
- [Python][link_python] + [Pandas][link_pandas] - open source a zdarma
- [D3.js][link_d3js] - open source a zdarma
- [The Globe and Mail Library of Congress Catalog][link_congress]



[link_kartogram]: /články/kartogram-choropleth "Kartogram ČR (choropleth, choropletová mapa)"
[link_nkod_scitani]: /datov%C3%A9-sady?dotaz=s%C4%8D%C3%ADt%C3%A1n%C3%AD%202021 "Národní katalog otevřených dat: SLDB 2021"
[link_csu_scitani]: https://www.czso.cz/csu/scitani2021 "Sčítání lidu, domů a bytů 2021"
[link_befel]: https://alex.onb.ac.at/cgi-content/alex?aid=rgb&datum=1869&size=45&page=341 "Příkaz z 29. 3. 1869 o sčítání lidu nese podpis císaře Františka Josefa I."
[link_nkod]: /datov%C3%A9-sady "Národní katalog otevřených dat"
[link_odo]: https://www.data.gv.at/suche/ "Open Data Österreich - Katalog"
[link_csu_scitani_od]: https://www.czso.cz/csu/czso/vysledky-scitani-2021-otevrena-data "Výsledky sčítání 2021 - otevřená data"
[link_csu_lexikon]: https://www.czso.cz/csu/czso/historicky-lexikon-obci-1869-az-2015 "Historický lexikon obcí České republiky 1869 - 2011"
[link_nkod_ruian]: /datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F00025712%2Fe0fe186c71d535aeb8effc5e212364ae "RUIAN Stát - SHP"
[link_odo_population]: https://www.data.gv.at/katalog/dataset/1dd64998-6836-3871-ac89-443f742bdc68 "Bevölkerung seit 1869 für Gemeinden"
[link_odo_population_2022]: https://data.statistik.gv.at/web/meta.jsp?dataset=OGD_bevstandjbab2002_BevStand_2022 "Bevölkerungsstand 2022"
[link_odo_maps]: https://data.statistik.gv.at/web/meta.jsp?dataset=OGDEXT_GEM_1 "Gliederung Österreichs in Gemeinden"
[link_barvoslepost]: https://cs.wikipedia.org/wiki/Barvoslepost "Barvoslepost"
[link_sparkline]: https://en.wikipedia.org/wiki/Sparkline "Sparkline"
[link_python]: https://www.python.org/ "Programovací jazyk Python"
[link_pandas]: https://pandas.pydata.org/ "Knihovna Pandas"
[link_d3js]: https://d3js.org/ "Knihovna D3.js"
[link_congress]: https://lccn.loc.gov/2014684706 "The Globe and Mail Library of Congress Catalog"