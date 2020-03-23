---
layout: post
detail: true
title: Kartogram ČR - Zobrazení v mapách (choropletová mapa)
ref: Choroplet
lang: cs
author: michal_škop
date: 2020-02-10 03:14:15
---
<img src="../attachments/články/kartogram-choropleth/images/map4.png" width="350">

Jednou ze základních vizualizací jsou choropletové mapy.

<!--more-->
V češtině jsou trochu nešťastně zvané kartogramy (neboť [cartogram][link_wiki_cartogram] v angličtině a mnoha jiných jazycích je něco jiného)

## Zobrazení v mapách: Obce a ORP v ČR - hustota obyvatel
Cílem je zhotovit takovouto mapu zobrazující hustotu obyvatel v obcích a obdobnou v [ORP][link_wiki_orp] ("malé okresy") v ČR. Hustota obyvatel je tu zvolená na ukázku, stejně tak lze zobrazit leccos jiného.

{% include image.html url="../attachments/články/kartogram-choropleth/images/map4.png" description="Hustota obyvatel v obcích ČR." %}

Zkusíme tu více postupů, jak se k výsledné mapě dostat:

- pomocí [javascriptové knihovny D3][link_d3]
- v GISovém programu [QGIS][link_qgis]

### Použitá data
Data použitá pro tento projekt si najdeme v [NKOD - Národním katalogu otevřených dat][link_nkod].

- Pro geografickou část použijeme data z RÚIANu od ČÚZK: [RUIAN Stát - SHP][link_ruian_shp].

- Pro data o počtu obyvatel a rozloze území použijeme data ČSÚ: [Statistická data pro územně analytické podklady][link_stat_data].

### Instalace potřebných programů

Pro přípravu dat pro `D3` si naistalujeme potřebné programy, které jsou _open source a zdarma_: `ndjson-cli`, `topojson-server`, `topojson-simplify`, `topojson-client`, `shapefile`, `d3-tsv` (možná je třeba užít `sudo`):

    npm install ndjson-cli
    npm install topojson-server
    npm install topojson-simplify
    npm install topojson-client
    npm install shapefile
    npm install -g d3-dsv # note: this did not work without the -g

Pro přípravu dat a pro vykreslení v QGISu potřebujeme samozřejmě nainstalovat [QGIS][link_qgis], který je _open source a zdarma_.

### Postup zpracování: Mapa v D3

#### Příprava dat

##### Standardizace geodat
Z RÚIANu si [stáhneme data][link_ruian_data] a ze souboru `1.zip` extrahujeme do svého pracovního adresáře všechny soubory začínající `OBCE_P` (obce) a `ORP_P` (ORP).

Tyto `SHP` soubory mají zatím několik problémů:
- Nejsou v kódování UTF-8, ale v českém Win-1250
- Jsou ve speciálním česko-slovenském souřadnicovém systému S-JTSK a ne v daleko běžnějším WGS 84.

Oba tyto problémy pořešíme projednou ručně - v LibreOffice a v QGISu. Jiné postupy pro geo-kódování jsou navržené [třeba zde][link_twitter_geocoding].

UTF-8:
- Otevřeme `OBCE_P.dbf` v `LibreOffice Calcu` (vybereme kódování `Eastern Europe (Windows-1250/WinLatin2`)
- Dáme `File->Save As...`, zvolíme opět `OBCE_P.dbf` a vlevo dole zaškrtneme `Edit filter settings`.
- Zvolíme kódování `Unicode (UTF-8)` a uložíme.

WGS 84:
- Otevřeme `OBCE_P.shp` v `QGIS`.

Rovnou se při načtení nabídne transformace do `WGS 84` (`EPSG:4326`)

- V Panelu `Layers` kliknutím pravým na `OBCE_P` otevřeme kontextové menu, dáme `Export->Save Features As ...`.
- Zadáme `File name` jako `<pracovní adresář>/obce.shp` a jako `CRS` dáme `WGS 84` a uložíme.

Podobně si přetransformujeme i ORP do souborů `<pracovní adresář>/orp.shp` (a další `orp.` se vytvoří).

{% include image.html url="../attachments/články/kartogram-choropleth/images/save_vector_layer_as.png" description="Uložení přetransformovaných souborů." %}

##### Příprava statistických dat
Z ČSÚ [stáhneme data][link_csu_data] a extrahujeme do svého pracovního adresáře soubor `UAP01_2018` (příp. novější rok). Z něj vyfiltrujeme (opět např. ručně v `LibreOffice Calc`) řádky, které v sloupci `vuk_txt` mají hodnoty `Celková výměra (v hektarech)` a `Počet obyvatel`. A vytvoříme si nový soubor `<pracovní adresář>/obce_hustota.csv`, a dopočteme si hustotu obyvatel na 1 km2. Vyplatí se nám původní soubor nejprve seřadit dle `vuk_txt` a `uzemi_kod` (což je kód obce). Můžeme se vyhnout některým možným problémům při zobrazování dat v budoucnu, pokud tu hustotu zaokrouhlíme (tj. `=round(počet obyvatel / výměra * 100)`). Tabulka bude vypadat nějak takto, pro budoucí potřeby si kód obce (`uzemi_kod`) označíme jako `id` (budeme potřebovat slupce `id` a `hustota`):

id    | Celková výměra (v hektarech) | Počet obyvatel | hustota | uzemi_txt
----- | -----                        | -----          | -----   | -----
500011| 1603                         | 1865           | 116     | Želechovice nad Dřevnicí
500020| 1209                         | 1224           | 101     | Petrov nad Desnou
...   | ...                          | ...            | ...     | ...

Např. pomocí `Pivot tables` (`Kontingenční tabulky`) rovnou v `LibreOffice Calc` (`Insert->Pivot Table...`) si vytvoříme obdobný soubor `orp_hustota.csv`, kde budeme mít minimálně `prislorp_kod` a vypočtený sloupec `hustota`.

{% include image.html url="../attachments/články/kartogram-choropleth/images/pivot.png" description="Nastavení Pivot tables (kontingenčních tabulek)." %}

Bohužel kódy ORP v těchto datech a datech z RÚIANu nejsou shodné, tak je ještě musíme sjednotit. Takže opět použijeme [Národní katalog otevřených dat][link_csu_ciselnik] a najdeme si `Číselník obcí s rozšířenou působností`. Přímo se nám nabízí stažení jenom v `XML`, což by znamenalo další práci navíc. Naštěstí NKOD má odkaz i na zdrojovou stránku s dokumentací (`Zobrazit dokumentaci`) a [na této stránce][link_csu_orp] skočíme na `Ke stažení` a [tady][link_csu_orp_2] už si můžeme vybrat i formát `CSV`. Dáme [stáhnout][link_csu_orp_soubor] a máme soubor `CIS0065_CS.csv`.

Z toho nás zajímají sloupce `CHODNOTA` (alias kód ORP dle ČSÚ) a `KOD_RUIAN` (alias kód ORP dle RÚIANu).

A upravíme náš finální soubor `orp_hustota.csv` do takovéhoto stavu, kde `id` je přejmenovaný `KOD_RUIAN`.

id    | Celková výměra (v hektarech) | Počet obyvatel | hustota | prislorp_txt | prislorp_kod
----- | -----                        | -----          | -----   | -----   | -----
19    | 49621                        | 1308632        | 2637    | Praha   | 1000
27    | 1209                         | 1224           | 88      | Benešov | 2101
...   | ...                          | ...            | ...     | ...     | ...


##### Tranformace z SHP do TopoJSONu

Pro použití v `D3` potřebujeme přetransformovat data z formátu `SHP`. Půjdeme zde hlavně podle [tutoho tutoriálu od autora knihovny D3 Mike Bostocka][link_tutorial].

Během tohoto postupu budeme také chtít zjednodušit hranice území. Je to proto, že jsou z RÚIANu příliš podrobné pro naše účely a tím pádem je ten soubor dost velký (`obce.shp` má 85 MB).

Transformace `SHP` -> `geo(ND)JSON` (`Newline Delimited JSON`) + přidáme `KOD` (území) jako naše `id`:

    cd <náš pracovní adresář>
    shp2json -n --encoding=utf-8 obce.shp | ndjson-map 'd.id = d.properties.KOD, d' > obce.ndjson
    shp2json -n --encoding=utf-8 orp.shp | ndjson-map 'd.id = d.properties.KOD, d' > orp.ndjson

Transformace `geo(ND)JSON` -> `TopoJSON` už nám zmenší velikost souboru sama o sobě (`obce.ndjson` má 208 MB, `obce-topo.json` jen 108 MB bez ztráty informace):

    geo2topo -n tracts=obce.ndjson > obce-topo.json
    geo2topo -n tracts=orp.ndjson > orp-topo.json

Zjednodušíme hranice obcí a ORP. Parametr `P` vyzkoušíme tak, aby se nám to zdálo tak akorát pro požadované použití (čím nižší, tím více zjednodušené hranice a menší soubory), zde použijeme 0.05:

    toposimplify -P 0.05 -f < obce-topo.json > obce-simple-topo.json
    toposimplify -P 0.05 -f < orp-topo.json > orp-simple-topo.json

Vrátíme zpátky do `geo(ND)JSONu` (protože tento formát poté použijeme na spojení se statistickými daty):

    topo2geo < obce-simple-topo.json tracts=obce-simple.json
    ndjson-split 'd.features' < obce-simple.json > obce-simple.ndjson
    topo2geo < orp-simple-topo.json tracts=orp-simple.json
    ndjson-split 'd.features' < orp-simple.json > orp-simple.ndjson

Statistická data přetransformujeme do `NDJSONu`:

    csv2json -n obce_hustota.csv > obce_hustota.ndjson
    csv2json -n orp_hustota.csv > orp_hustota.ndjson

Spojíme geo a statistická data:

    ndjson-join --left 'd.id' obce-simple.ndjson obce_hustota.ndjson | ndjson-map 'Object.assign(d[0], Object.assign(d[0].properties, d[1]))' > obce-simple-data.ndjson
    ndjson-join --left 'd.id' orp-simple.ndjson orp_hustota.ndjson | ndjson-map 'Object.assign(d[0], Object.assign(d[0].properties, d[1]))' > orp-simple-data.ndjson

Přetransformujeme je z `geoNDJSONu` do `geoJSONu`:

    cat obce-simple-data.ndjson | ndjson-reduce 'p.features.push(d), p' '{type: "FeatureCollection", features: []}' > obce-simple-data.json
    cat orp-simple-data.ndjson | ndjson-reduce 'p.features.push(d), p' '{type: "FeatureCollection", features: []}' > orp-simple-data.json

A konečně je přetransformujeme do `TopoJSONu`, které použijeme pro samotné mapy:

    geo2topo tracts=obce-simple-data.json > obce-simple-data-topo.json
    geo2topo tracts=orp-simple-data.json > orp-simple-data-topo.json

#### Mapa - zobrazení
Na zobrazení mapy potřebujeme webový server, jedna možnost je spustit si ho v našem adresáři pomocí:

    cd <náš pracovní adresář>
    python3 -m http.server 80

Na adrese `localhost` v prohlížeči už můžeme sledovat, jak mapu vytváříme (nezapomínáme reloadovat).

Vytvoříme _kostru_ našeho souboru `<pracovní adresář>/index.html`, kam vložíme potřebné skripty k `D3` a základní `<svg>` element, do kterého mapu vykreslíme:

``` html
<!DOCTYPE html>
<html lang="cs">
<meta charset="utf-8" />
<svg width="960" height="520"></svg>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
<script src="https://d3js.org/topojson.v2.min.js"></script>

<script>

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

// sem budeme přidávat další kód

</script>
</html>
```

Zobrazíme naše připravená data (v `TopoJSON`) co nejjednodušeji. Použijeme projekci Mercator. Přidáme:

``` js
var projection = d3.geoMercator()
    .translate([width / 2, height / 2]) // posuneme do středu SVG

var path = d3.geoPath()
    .projection(projection);

// sem potom přidáme barvu

// sem potom přidáme měřítko

d3.json("obce-simple-data-topo.json", function(error, data) {
  if (error) throw error;

  var subunits = topojson.feature(data, data.objects.tracts) // obce

  // vykreslíme obce
  svg.selectAll(".subunit")
      .data(subunits.features)
    .enter().append("path")
      .attr("d", path)
});
```
A dostaneme první mapu, něco takovéhoto:

{% include image.html url="../attachments/články/kartogram-choropleth/images/map1.png" description="Mapa ČR." %}

Zvětšíme ji a vycentrujeme na střed ČR (zhruba 49.75N, 15.34E)

``` js
var projection = d3.geoMercator()
    .center([15.34, 49.75]) //střed ČR
    .scale(7000) // měřítko, nastavíme dle potřeb
    .translate([width / 2, height / 2]) // posuneme do středu SVG
```

{% include image.html url="../attachments/články/kartogram-choropleth/images/map2.png" description="Větší mapa ČR." %}

Obarvíme obce dle hustoty:
``` js
// měřítko - barevná škála
// nejmenší hustota v obcích je 0 (volenské újezdy), největší 2637 v Praze
var color = d3.scaleThreshold()
  .domain([0, 25, 50, 75, 100, 200, 500, 1000, 2637])
  .range(d3.schemeOrRd[9]);

d3.json("obce-simple-data-topo.json", function(error, data) {
    if (error) throw error;

    var subunits = topojson.feature(data, data.objects.tracts) // obce

    // vykreslíme obce
    svg.selectAll(".subunit")
        .data(subunits.features)
      .enter().append("path")
        .attr("class", function(d) { return "subunit " + d.id; })
        .attr("fill", function(d) { return color(d.properties.hustota); })
        .attr("stroke", "#888")
        .attr("stroke-dasharray", "1,5")
        .attr("stroke-linejoin", "round")
        .attr("d", path)
});
```

{% include image.html url="../attachments/články/kartogram-choropleth/images/map3.png" description="Mapa ČR obarvená dle hustoty obyvatel." %}

Přidáme měřítko - legendu:

``` js
var x = d3.scaleSqrt()
    .domain([31, 2637])
    .rangeRound([100, 750]);

var g = svg.append("g")
  .attr("class", "key")
  .attr("transform", "translate(0,490)");

g.selectAll("rect")
  .data(color.range().map(function(d) {
    d = color.invertExtent(d);
    if (d[0] == null) d[0] = x.domain()[0];
    if (d[1] == null) d[1] = x.domain()[1];
    return d;
  }))
  .enter().append("rect")
    .attr("height", 8)
    .attr("x", function(d) { return x(d[0]); })
    .attr("width", function(d) { return x(d[1]) - x(d[0]); })
    .attr("fill", function(d) { return color(d[0]); });

g.append("text")
  .attr("class", "caption")
  .attr("x", x.range()[0])
  .attr("y", -6)
  .attr("fill", "#000")
  .attr("text-anchor", "start")
  .attr("font-weight", "bold")
  .text("Hustota obyvatel na 1 km2");

g.call(d3.axisBottom(x)
   .tickSize(13)
   .tickValues(color.domain()))
 .select(".domain")
   .remove();
```

A máme výslednou mapu hustoty obyvatel v obcích ČR:

{% include image.html url="../attachments/články/kartogram-choropleth/images/map4.png" description="Hustota obyvatel v obcích ČR." %}

[Celý soubor index.html](../attachments/články/kartogram-choropleth/data/index.html).

Jenom změníme vstupní soubor `orp-simple-data-topo.json` na `orp-simple-data-topo.json`, upravíme měřítko (nejmenší hustota v ORP je 31) a máme i mapu dle ORP:

{% include image.html url="../attachments/články/kartogram-choropleth/images/map5.png" description="Hustota obyvatel v ORP v ČR." %}

### Postup zpracování: Mapa v QGIS

Jako vstupní použijeme připravené soubory `obce.shp` (a jím odpovídající soubory `obce.`) a `obce_hustota.csv` (+ `orp.shp` a `orp_hustota.csv`) - dle postupu popsaném k D3.

Ještě si připravíme (např. v Notepadu, Geditu, Atomu, apod.) jeden soubor v našem pracovním adresáři: `obce_hustota.csvt`. V něm jsou typy proměnných u sloupců v `obce_hustota.csv`. Pokud máme např. v `obce_hustota.csv` sloupce `id`, `Celková výměra (v hektarech)`, `Počet obyvatel`, `hustota` a `uzemi_txt`, tak bude soubor `obce_hustota.csvt` vypadat následovně:

    "String","String","String","Integer","String"

A obdobně vytvoříme soubor `orp_hustota.csvt`.

Otevřeme `obce.shp` v QGISu. Změníme projekci na lepší pro ČR: V dialogu `Project Properties` (úplně vpravo, nikoliv vlevo, dole) nastavíme `EPSG:32633`.

Přidáme data o hustotě: `Layer->Add Layer->Add Vector Layer ...` vybereme `<pracovní adresář>/obce_hustota.csv`.

V kontextovém menu u `Layers - obce` (pravým tlačítkem myši) vybereme `Properties...` a dostaneme dialog `Layer Properties`. Vybereme `Joins` a přidáme (Tlačítko `+`) nový Join, spojíme `id` s `KOD`, neboli připojíme data o hustotě k mapě.

{% include image.html url="../attachments/články/kartogram-choropleth/images/join.png" description="Join v QGIS." %}

V `Layer Properties` teď vybereme `Symbology` a jdeme obarvovat mapu dle hustoty. Např. takto:

{% include image.html url="../attachments/články/kartogram-choropleth/images/symbology.png" description="Obarvování mapy v QGIS." %}

Teď už nám chybí jenom připravit jako obrázekbundle exec jekyll serve (pokud nechceme rovnou udělat screenshot) a přidat legendu.

Vytvoříme nový `Layout`: `Project->Layout Manager ...`. Odklikáme a máme nové okno `Layout 1`.

V tomto okně `Add Item->Add Map` a myší označíme celou tu připravenou stránku. A mápe mapu v Layoutu. Přidáme legendu `Add Item->Add Legend` a myší zase označíme, kam ji chceme. Jsme v zhruba takovémto stavu:

{% include image.html url="../attachments/články/kartogram-choropleth/images/layout.png" description="Layout v QGIS." %}

Legendu si můžeme doupravit (pravým v Layoutu legendy: `Item properties ...`) dle svého.

Výsledek si můžeme vyexportovat v `SVG` nebo `PNG`, ..., např. `Layout->Export as Image...`

{% include image.html url="../attachments/články/kartogram-choropleth/images/obce_qgis.png" description="Hustota obyvatel dle obcí v ČR - vytvořeno v QGIS." %}

A obdobně bychom mohli udělat mapu pro ORP.

{% include image.html url="../attachments/články/kartogram-choropleth/images/orp_qgis.png" description="Hustota obyvatel dle ORP v ČR - vytvořeno v QGIS." %}

### Použité soubory
- [index.html](../attachments/články/kartogram-choropleth/data/index.html)
- [obce_hustota.csv](../attachments/články/kartogram-choropleth/data/obce_hustota.csv)
- [obce_hustota.csvt](../attachments/články/kartogram-choropleth/data/obce_hustota.csvt)
- [obce-simple-data-topo.json](../attachments/články/kartogram-choropleth/data/obce-simple-data-topo.json)
- [orp_hustota.csv](../attachments/články/kartogram-choropleth/data/orp_hustota.csv)
- [orp_hustota.csvw](../attachments/články/kartogram-choropleth/data/orp_hustota.csvt)
- [orp-simple-data-topo.json](orp-simple-data-topo.json)

### Další užití
Obdobně se dají zobrazit další a další mapy, např. zde zcela stejných postupem vytvořená mapa průměrného věku v obcích ČR:

{% include image.html url="../attachments/články/kartogram-choropleth/images/map6.png" description="Průměrný věk obyvatel dle obcí v ČR." %}


### Použité nástroje a zdroje:
#### D3
- [California Population Density - Michael Bostock][link_california]
- [Tutoriál Command-Line Cartography - Michael Bostock][link_tutorial]
- [Tento tutoriál zjednodušeně v Observable][link_tutorial_observable]
- [TopoJSON-simplify][link_sipmlify]
- [NDJSON-CLI][link_cli]
- [TopoJSON-client][link_client]
- [TopoJSON-server][link_server]
- [Streming Shapefile Parser][link_parser]

#### QGIS
- [Creating a choropleth / heat map](https://www.youtube.com/watch?v=rG6UphZGmg4)
- [Projekce pro ČR](https://www.zive.cz/poradna/problem-s-georeferencovanim/sc-20-cq-633325/default.aspx?consultanswers=1)


[link_wiki_cartogram]: https://en.wikipedia.org/wiki/Cartogram "Cartogram"
[link_wiki_orp]: https://cs.wikipedia.org/wiki/Obec_s_roz%C5%A1%C3%AD%C5%99enou_p%C5%AFsobnost%C3%AD "ORP"
[link_d3]: https://d3js.org/ "D3"
[link_qgis]: https://www.qgis.org/ "QGIS"
[link_nkod]: https://data.gov.cz/datov%C3%A9-sady "NKOD"
[link_ruian_shp]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2Fhttp---atom.cuzk.cz-api-3-action-package_show-id-cz-00025712-cuzk_ruian-staty-shp_1 "NKOD - RÚIAN - SHP soubor obce ČR"
[link_stat_data]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2Fhttp---vdb.czso.cz-pll-eweb-package_show-id-340129 "NKOD - ČSÚ - Statistická data pro územně analytické podklady"
[link_ruian_data]: http://services.cuzk.cz/shp/stat/epsg-5514/1.zip) "RÚIAN - SHP soubor obce ČR"
[link_twitter_geocoding]: https://twitter.com/skopmichal/status/1215398869867036672 "Twitter - diskuse o geokódování"
[link_csu_data]: https://www.czso.cz/documents/62353418/114658260/340129-19data062819.zip "ČSÚ - data o obcích"
[link_csu_ciselnik]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2Fhttp---vdb.czso.cz-pll-eweb-package_show-id-cis65 "Číselník obcí s rozšířenou působností"
[link_csu_orp]: https://apl.czso.cz/iSMS/cisinfo.jsp?kodcis=65 "ČSÚ - ORP"
[link_csu_orp_2]: https://apl.czso.cz/iSMS/cisdata.jsp?kodcis=65 "ČSÚ - ORP - soubory"
[link_csu_orp_soubor]:https://apl.czso.cz/iSMS/cisexp.jsp?kodcis=65&typdat=0&cisvaz=80007_97&datpohl=25.01.2020&cisjaz=203&format=2&separator=%2C "ČSÚ - ORP - CSV"
[link_tutorial]: https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c "Tutoriál Command-Line Cartography - Michael Bostock"
[link_california]: https://bl.ocks.org/mbostock/5562380 "California Population Density - Michael Bostock"
[link_tutorial_observable]: https://observablehq.com/@michalskop/kartogram-choropleth-choropletova-mapa "Tento tutoriál zjednodušeně v Observable"

[link_sipmlify]: https://github.com/topojson/topojson-simplify "TopoJSON-simplify"
[link_cli]: https://github.com/mbostock/ndjson-cli "NDJSON-CLI"
[link_client]: https://github.com/topojson/topojson-client "TopoJSON-client"
[link_server]: https://github.com/mbostock/topojson-server "TopoJSON-server"
[link_parser]: https://github.com/mbostock/shapefile "Streming Shapefile Parser"
