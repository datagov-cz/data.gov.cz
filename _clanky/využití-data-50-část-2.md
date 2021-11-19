---
layout: post
detail: true
title: Využití otevřených dat Zeměměřického úřadu pro povolování dočasných staveb - část 2
ref: data50-2
lang: cs
image: ../attachments/články/využití-data-50/r.surf.contour-output.webp
author: michal_med
date: 2021-03-25 03:14:15 +01:00
---
Pokračování série článků o využití otevřených dat Zeměměřického úřadu se zabývá postupem zpracování dat pro tvorbu modelu ochranných pásem a rasterizaci vrstevnic za účelem tvorby digitálního modelu reliéfu.

<!--more-->
## Shrnutí a úvod
V [první části článku][MiMe-clanek-1] byl identifikován problém složitých postupů povolování dočasných staveb v prostoru ochranných pásem Letiště Václava Havla v Praze. Proces by mělo zjednodušit vytvoření modelu ochranných pásem a jeho porovnání s digitální mapou reliéfu. Pro vytvoření modelu je možné použít otevřená data, konkrétně datovou sadu [Data50][nkod_data50_link]. Model ochranných pásem je možné vymodelovat podle pravidel popsaných v [Leteckém předpisu L14 - letiště][link_l14]. V této části článku se podíváme na to, jak data zpracovat.

## Postup zpracování
Pro porovnání nadmořské výšky plánované stavby a ochranného pásma je potřeba vytvořit rastrové vrstvy s digitálním modelem reliéfu a s ochrannými pásmy letiště. Pro ochranná pásma je nejprve potřeba vytvořit podkladová vektorová data. Na to byl použit [GNU Octave][octave], skriptovací jazyk podobný Matlabu. Digitální model reliéfu byl vytvořen v programu [QGIS][qgis] s využitím pluginu pro podporu knihoven z programu [Grass][grass] z vrstevnic datové sady Data50.

### Tvorba ochranných pásem
Ochranná pásma (OP) jsou v Leteckém předpisu L14 rozdělena na několik druhů. Pro naše účely jsou zásadní OP se zákazem staveb a OP s výškovým omezením staveb. Předpis definuje ochranná pásma relativním vztahem k ose dráhy v závislosti na kódovém číslu letiště (řekněme, že kódové číslo označuje velikost letiště). Ochranné pásmo se zákazem staveb je pro dráhu definováno následovně:

{% include image.html
   url="../attachments/články/využití-data-50/OP_zakaz_staveb.webp"
   description="Definice ochranného pásma se zákazem staveb dle Leteckého předpisu L14."
%}

V tomto pásmu je úplný zákaz výstavby. V ochranných pásmech s výškovým omezením staveb nesmí nové stavby přesahovat definovaná ochranná pásma. V pásmech tedy nezáleží jen na poloze, ale i na výšce. Ochranných pásem s výškovým omezením staveb je několik. Jejich výška se obecně zvyšuje se vzdáleností od dráhy, ve směru vzletu a přistání výrazně pomaleji.

{% include image.html
   url="../attachments/články/využití-data-50/OP_vyskove_omezeni_staveb.webp"
   description="Náčrt ochranných pásem s výškovým omezením staveb dle Leteckého předpisu L14."
%}

Každé OP s výškovým omezením staveb je opět definováno relativně vůči koncovým bodům dráhy, případně vůči OP se zákazem staveb. Kromě velikosti však udává i sklon, pod kterým stoupá, případně výšku (relativně vůči dalším OP). Dobře je to vidět u OP vzletových a přibližovacích prostorů.

{% include image.html
   url="../attachments/články/využití-data-50/OP_vzlet.webp"
   description="Popis OP vzletových a přibližovacích prostorů podle Leteckého předpisu L14."
%}

Letecký předpis L14 platí obecně pro všechna letiště. Každé letiště má pak definovány souřadnice koncových bodů osy dráhy (v souřadnicovém systému S-JTSK) a kódové číslo letiště. Letiště Václava Havla má dráhy dvě a každá má vlastní koncové body osy dráhy, označené RWY06-RWY24 a RWY12-RWY30.

Definice drah z Leteckého předpisu lze převést do matematických rovnic. Jedinými proměnnými jsou souřadnice koncových bodů osy dráhy a kódové číslo letiště. Matematické rovnice byly zapsány v jazyce Octave. Výstupem ze skriptu jsou soubory ve formátu CSV obsahující geometrii polygonů vyjádřených pomocí Well-Known Text (WKT) zápisu i s jejich nadmořskou výškou (jako třetí souřadnice každého lomového bodu). Jeden z lichoběžníkových polygonů Letiště Václava Havla je v CSV vyjádřen následovně:

| id | geometry |
| 1 | POLYGON((-756875.39 -1039339.98 366.40,-756787.55 -1039626.83 366.40,-756699.72 -1039913.68 366.40,-765252.18 -1044003.13 516.40,-770383.65 -1046456.80 516.40,-771130.25 -1044018.54 516.40,-771876.84 -1041580.29 516.40,-766251.30 -1040740.168 516.40,-756875.39 -1039339.97 366.40))|

Části některých ochranných pásem jsou tvořeny kružnicovými oblouky. Ty WKT neumožňuje vyjádřit. Kružnicové oblouky jsou proto nahrazeny lomenou čarou za pomoci funkce, která kružnicový oblouk nahradí předem definovaným počtem trojúhelníkových výsečí. Polovina kružnice je ve výstupních datech aproximována 90 lomovými body.

Cílem dalšího kroku je připravit pro tzv. rasterizaci vektorových dat. V praxi to znamená, že z polygonů vyjádřených lomovými body vznikne "síť" pixelů, kde každý pixel obsahuje informaci o své nadmořské výšce (a samozřejmě i informace o poloze). K tomu je potřeba data aproximovat. V software QGIS i Grass Gis existuje celá řada modulů, které aproximaci umožňují. Různé způsoby aproximace jsou vhodné pro různé účely. Mezi nejčastěji používané metody tvorby rastrů z vektorových dat s výškou patří buď aproximace z bodových mračen vzniklých laserovým skenováním, nebo z vrstevnic. Pro bodová mračna je důležité, aby bylo dostatečně husté a rovnoměrně rozdělené. K výpočtu nadmořské výšky je pak často využívána metoda IDW (Inverse Distance Weighted), kdy do výpočtu vstupuje mnoho okolních bodů a jejich váha je tím menší, čím jsou vzdálenější právě počítanému pixelu. Pro tuto metodu se lomové body polygonu vůbec nehodí. Proto je potřeba vytvořit isolinie se shodnou nadmořskou výškou. Vzhledem k tomu, že ochranná pásma stoupají rovnoměrně a jejich lomové body jsou jasně popsány v L14, lze pomocí Octave skriptu snadno vygenerovat i data s liniemi vrstevnic:

| id | geometry | elevation |
| 1 | LINESTRING(-756875.387673 -1039339.972338,-756699.718968 -1039913.680021) | 366.400000 |
| 2 | LINESTRING(-766251.293902 -1040740.167983,-765252.177851 -1044003.131394) | 516.400000 |
| 3 | LINESTRING(-771876.837640 -1041580.285370,-770383.653181 -1046456.802217) | 516.400000 |

V Grass GIS (a prostřednictvím pluginu i v QGIS) je možné převádět vrstevnice do Digital Elevation Model (DEM) mnoha způsoby. Řada z nich je detailně popsána v [uživatelském návodu Grass GIS](https://grasswiki.osgeo.org/wiki/Contour_lines_to_DEM), včetně vhodnosti jejich použití na různá vstupní data. Tento způsob není vhodný jen pro rasterizaci ochranných pásem, ale - jak pozorný čtenář již tuší - i pro tvorbu DEM z vrstevnic [Data50][nkod_data50_link].

### Postupy rasterizace vrstevnic v QGIS
Následující postup platí stejně pro rasterizaci ochranných pásem i pro tvorbu DEM z vrstevnic datové sady Data50. Vstupem jsou vektorová data v libovolném formátu, který je možné načíst do QGISu. Ochranná pásma jsou v CSV, vrstevnice v shapefile. Data jsou zpracována v programu QGIS s pluginem Grass. Při spuštění Grass pluginu je potřeba nastavit si tzv. LOCATION a MAPSET (jak se v Grass říká projektům a jeho adresářům).

#### Načtení dat do QGISu a Grass pluginu
Z Data source manager (`Layer -> Data Source Manager`, nebo `Ctrl + L`) lze načíst do QGIS všechny typy vektorových i rastrových dat. Pro vrstevnice v shapefile stačí načítat přes `Vector`, CSV soubory s vrstevnicemi a polygony ochranných pásem je potřeba načíst přes `Delimited text`. V případě CSV je potřeba vybrat souřadnicový referenční systém (EPSG:5514 - S-JTSK / Krovak East North) a zvolit oddělovač, pokud je jiný než čárka `,`. To v našem případě je, je to středník `;`, protože čárkou jsou odděleny dvojice (nebo trojice) souřadnic - pozornému čtenáři připomínáme, že při práci s jiným typem dat, než jsou geo data, je třeba se při přípravě dat k publikaci používání středníku `;` jakožto oddělovače vyhnout, viz [chybný oddělovač údajů][chybný_oddělovač_údajů_link]. Data budou načtena stisknutím tlačítka `Add`.

{% include image.html
   url="../attachments/články/využití-data-50/add_csv.webp"
   description="Načtení CSV dat do QGISu."
%}

U obecných vektorových dat je souřadnicový systém většinou uveden v datech. Pokud ne, QGIS se Vás na něj zeptá.

Pro načtení dat do Grass GIS stačí mít data načtená v QGISu ve vektorovém nebo rastrovém formátu. Grass umí načítat i CSV data, ale stejně tak je možné CSV jednou načtené do QGISu převést do vektorového formátu. Zvolil jsem formát `gpkg` (GeoPackage). Po kliknutí pravým tlačítkem na datovou vrstvu importovanou z CSV jsem zvolil možnost `Export -> Save Feature As...` a ve vyskakovacím okně vyberu formát (GeoPackage), umístění a název souboru a název vrstvy (jeden `gpkg` soubor může obsahovat řadu vektorových i rastrových vrstev). Samozřejmostí je volba souřadnicového referenčního systému a tlačítkem `OK` uložení souboru potvrdím.

K načtení vektorových dat z QGIS do Grass pluginu slouží modul `v.in.ogr.qgis`. V Grass pluginu ho můžu vyhledat mezi moduly. Vstupem je vektorová vrstva načtená do QGIS a název vrstvy, jak bude načtena do Grass pluginu.

{% include image.html
   url="../attachments/články/využití-data-50/v.in.ogr.webp"
   description="Načtení vektorových dat z QGISu do Grass pluginu."
%}

#### 1. Nastavení regionu a masky

Grass plugin, stejně jako samotný Grass Gis, operuje s tzv. regionem. Ten je definován rozsahem souřadnic v definovaném souřadnicovém systému (v našem případě EPSG:5514 S-JTSK / East North) a s daným rozlišením. Rozlišení se týká rastrových dat a je pro nás důležité, protože definuje velikost pixelu ve výsledném DEM. Pro Letiště Václava Havla pracujeme s rozlišením 10, tedy 10 metrů jako délka hrany jednoho pixelu. Region je možné nastavit v záložce Region Grass pluginu.

Dalším konstruktem Grassu, který se nám bude hodit je maska. Maska se nastavuje pomocí modulu `r.mask` (jedná se tedy o rastr) a definuje výřez, ve kterém budou probíhat další výpočty. Tento krok je velice důležitý vzhledem k rychlosti celého výpočtu. Interpolace poměrně velkého území na základě vrstevnic s rozlišením 10 metrů je velice nákladná operace a pomocí masky je možné výrazně omezit rozsah dat, pro která bude výpočet probíhat, a tím i výrazně zkrátit dobu výpočtu. Jako masku pro ochranná pásma jsme použili polygony těchto pásem (přece jenom k něčemu jsou). Při výpočtu DEM z vrstevnic Data50 jsme jako masku použili buffer o poloměru 15 kilometrů od obou drah Letiště Václava Havla. Buffer jde snadno udělat v QGISu (`Vector -> Geoprocessing Tools -> Buffer`) i v Grass GIS (`v.buffer` a následnou rasterizací).

#### 2. Převod do rasteru a výpočet DEM

Pro výpočet DEM použijeme modul `r.surf.contour`, jehož použití je popsáno v již [zmiňované stránce uživatelského návodu Grass GIS](https://grasswiki.osgeo.org/wiki/Contour_lines_to_DEM). Z názvu modulu je patrné, že se jedná o modul pro práci s rastrovými daty. Proto je potřeba vrstevnice nejprve převést do rastru. K tomu použijeme modul `v.to.rast.attr`, tedy převod vektorové vrstvy do rastrové na základě hodnoty atributu. Tím atributem bude samozřejmě nadmořská výška, tedy `elevation`.

{% include image.html
   url="../attachments/články/využití-data-50/v.to.rast.attr.webp"
   description="Převod vrstevnic z vektoru do rastru."
%}

Výsledná rastrová vrstva bude vstupem do modulu `r.surf.contour`. Před spuštěním modulu se ujistěte, že máte nastavenou masku a region, včetně požadovaného rozlišení.

{% include image.html
   url="../attachments/články/využití-data-50/r.surf.contour.webp"
   description="Výpočet DEM z vrstevnic."
%}

Připravte se na to, že výpočet může trvat i několik desítek minut. Výstup si poté můžete zobrazit v kanvasu pomocí tlačítka `View output`.

{% include image.html
   url="../attachments/články/využití-data-50/r.surf.contour-output.webp"
   description="Výsledný DEM."
%}

#### 3. Uložení výstupu do souboru

Posledním krokem je uložení výstupu do souboru. Z rastrových formátů jsme zvolili formát GeoTIFF. Soubor je možné uložit z Grass pluginu rovnou do souboru ve formátu GeoTIFF pomocí modulu `r.out.gdal.gtiff`.

{% include image.html
   url="../attachments/články/využití-data-50/r.out.gdal.gtiff.webp"
   description="Export rastrového DEM do souboru ve formátu GeoTIFF."
%}

Tento postup lze samozřejmě do určitě míry zautomatizovat. Je potřeba provést ho pro všechna ochranná pásma i pro vrstevnice z Data50 pro celé okolí letiště.

V poslední části článku se podíváme na to, co je vlastně výsledkem celé práce a jak  tyto výsledky využít na letišti i jinde.

## Použité nástroje a zdroje

- [Grass GIS][grass]
- [QGIS][qgis]
- [React Leaflet][react-leaflet]
- [GNU Octave][octave]
- [Data50][metadata_data50]
- [OpenStreetMap][openstreetmap]
- [WMS služba INSPIRE Parcely][wms-cp]
- [chybný oddělovač údajů][chybný_oddělovač_údajů_link]

[MiMe-clanek-1]: https://data.gov.cz/články/využití-data-50-část-1 "První část článku o využití otevřených dat Zeměměřického úřadu"
[link_l14]: https://aim.rlp.cz/predpisy/predpisy/dokumenty/L/L-14/data/print/L-14_cely.pdf "Letecký předpis L14 - Letiště"
[link_dmr]: https://geoportal.cuzk.cz/Default.aspx?mode=TextMeta&side=vyskopis&metadataID=CZ-CUZK-DMR5G-V&head_tab=sekce-02-gp&menu=302 "Digitální model reliéfu 5. generace"
[ceník_ZÚ_link]: https://geoportal.cuzk.cz/Dokumenty/Cenik.pdf "Ceník produktů Zeměměřického úřadu"
[nkod_data50_link]: https://data.gov.cz/datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F60458500%2F671714680 "Záznam datové sady Data50 v Národním katalogu otevřených dat"                    
[nkod_data200_link]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F60458500%2F671715799 "Záznam datové sady Data200 v Národním katalogu otevřených dat"
[shapefile_spec]: https://www.esri.com/library/whitepapers/pdfs/shapefile.pdf "Technický popis formátu ESRI Shapefile"
[metadata_data50]: https://geoportal.cuzk.cz/getHTML.aspx?mode=Metadata&fnc=getRecord&identifierid=CZ-CUZK-DATA50-RELIEF-V "Metadata vrstvy Reliéf datové sady Data50"
[octave]: https://www.gnu.org/software/octave/index "Programovací jazyk GNU Octave"
[qgis]: https://www.qgis.org/en/site/ "Stránky porjektu QGIS"
[grass]: https://grass.osgeo.org/ "Stránky projektu Grass GIS"
[react-leaflet]: https://react-leaflet.js.org/ "React komponenty pro mapy v Leafletu"
[openstreetmap]: http://openstreetmap.org "Otevřená databáze prostorových dat"
[wms-cp]: https://geoportal.cuzk.cz/Default.aspx?lng=CZ&mode=TextMeta&side=INSPIRE_dSady&metadataID=CZ-00025712-CUZK_WMS-MD_CP&metadataXSL=metadata.sluzba&menu=416&head_tab=sekce-04-gp "Webová služba poskytující obrazová data Parcel harmonizovaná a poskytovaná dle směrnice INSPIRE"
[chybný_oddělovač_údajů_link]: https://opendata.gov.cz/standardy:csv:chybn%C3%BD-odd%C4%9Blova%C4%8D
