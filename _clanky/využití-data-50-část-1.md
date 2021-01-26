---
layout: post
detail: true
title: Využití Data50 -část 1
ref: data50-1
lang: cs
image: ../attachments/články/využití-data-50/screen_vysledku.webp
author: Michal Med
date: 2021-01-18 03:14:15
---
První ze série článků o využití otevřených dat Zeměměřického úřadu se zabývá hledáním problému, který by otevřená data pomohla vyřešit, a výběrem vhodných datových sad.

<!--more-->

# Využití open dat Zeměměřického úřadu pro povolování dočasných staveb - část 1

## Úvod
V dubnu 2019 Zeměměřický úřad otevřel datové sady Data200 a Data50. Databáze Data200 je digitální geografický model území ČR odpovídající přesností a stupněm generalizace měřítku 1:200 000. Data50 jsou pak digitálním geografickým modelem území ČR odvozeným z kartografické databáze pro Základní mapu ČR 1:50 000. Zamysleli jsme se nad tím, jak data využít ke zjednodušení procesu povolování dočasných staveb v ochranných pásmech letiště.

{% include image.html
   url="../attachments/články/využití-data-50/screen_vysledku.webp"
   description="Aplikace Altimeter zobrazující možná výšková omezení dočasných staveb v okolí letiště."
%}

## Popis problému
Letiště Václava Havla má hodně práce se schvalováním dočasných staveb v okolí letiště. Na letišti, nad ním a v jeho okolí se nachází celá řada ochranných pásem, které mají různá omezení, ať už se jedná o bezletové zóny, zóny s omezeným vstupem nebo zóny se stavebním omezením. Ochranná pásma jsou definována v [Leteckém předpisu L14 - letiště][link_l14], schváleným Ministerstvem dopravy ČR a zpracovaným Úřadem pro civilní letectví.

Zmíněný problém se dotýká schvalování dočasných staveb, které výškově mohou zasahovat do Ochranného pásma leteckých staveb (popsaných v hlavě 11 dokumentu L14), především stavebních jeřábů. Většina staveb v okolí letiště do ochranného pásma nezasahuje --  jedná se často o výrobní nebo překladní haly -- při jejich výstavbě je však potřeba využití jeřábů, které by do ochranných pásem zasáhnout mohly. V každém takovém případě musí dát stavební firma k posouzení letišti, zda se jejich jeřáb pod limit ochranného pásma vejde, nebo ne. Případů nebývá tolik, jsou však řešeny geodetickou nivelací na místě měřením nadmořské výšky povrchu a jeho porovnáním s výškou ochranných pásem. To je časově docela náročné. Nadmořská výška terénu je přitom měřena a poskytována Zeměměřickým úřadem.

Cílem je tedy použít data Zeměměřického úřadu k vytvoření digitálního modelu terénu, vytvořit si modely ochranných pásem letiště a v aplikaci nadmořské výšky těchto objektů porovnávat. Letiště tak může stavitelům většinu staveb schválit nebo domítnout pouhým kliknutím v aplikaci a geodeti budou vyjíždět do terénu pouze v mezních případech (vstupní data budou mít pouze omezenou přesnost).

## Použitá data
Data pocházející minimálně ze dvou zdrojů slouží k tvorbě digitálního modelu reliéfu a k modelu ochranných pásem.

### Data výškopisu
Nejpodrobnějšími daty obsahujícími nadmořskou výšku reliéfu poskytovanými veřejnými institucemi (avšak nikoli veřejně) v ČR je [Digitální model reliéfu][link_dmr], který obsahuje data pořízená laserovým skenováním. Tato datová sada ovšem nepatří mezi otevřené datové sady a její pořizovací cena odpovídá [ceníku][ceník_ZÚ_link].

Dalšími datovými sadami s informacemi o povrchu jsou datové sady Data50 a Data200, které jsou od dubna 2019 zařazeny mezi [otevřené datové sady][nkod_data50_link]. Datová sada Data50 je odvozená z kartografické databáze Základní mapy 1:50 000 a obsahuje digitální geografický model ČR odpovídající přesností a stupněm generalizace měřítku 1:50 000. Databáze obsahuje 59 typů geografických objektů (feature), které jsou rozděleny do osmi tématických oblastí. Podle těchto oblastí je datová sada rozdělena do podskupin. Každá podskupina obsahuje soubory ve [formátu SHP][shapefile_spec] pro každý typ geografického objektu. Nadmořská výška je součástí tématického celku Reliéf v souboru `Vrstevnice.shp`.

Kvalita dat by měla být popsána v [metadatech][matadata_data50] a jelikož kvalitou je i jejich přesnost, pak nás zajímá přesnost vrstevnic. Ta je udávaná v metrech jako výškový rozdíl dvou vrstevnic vedle sebe. V metadatech tato informace není, z dalších dokumentů Zeměměřického úřadu a dat samotných však vyplývá, že data obsahují tři typy vrstevnic:
- **základní**, které jsou rozlišeny po deseti metrech,
- **doplňkové**, které jsou uváděny s přesností na pět metrů a zhušťují síť základních vrstevnic především v plošších územích,
- **zdůrazněné**, které jsou rozlišeny po 50 metrech a pravděpodobně slouží pouze k tomu, aby byly v mapě zobrazeny silnější čarou.

Přesnost 10 (respektive 5) metrů je potřeba vzít v úvahu i v aplikaci při zjišťování maximální možné výšky dočasné stavby. Pokud tedy bude výška požadované stavby blíže než 5 metrů k výškovému omezení ochranného pásma, pak by měli maximální povolenou výšku přeměřit geodeti v terénu.

Data200 obsahují také informace o reliéfu, jedná se však o data odvozená z datové sady Data50 generalizovaná na přesnost 50 (respektive 25) metrů.

### Data ochranných pásem

Ochranná pásma leteckých staveb jsou definována v hlavě 11 Předpisu L14. Na základě definic uvedených v textu jsme se rozhodli data vymodelovat.

V druhé části článku se podíváme na to, jak data zpracovat.

## Použité nástroje a zdroje

- [Grass GIS][grass]
- [QGIS][qgis]
- [React Leaflet][react-leaflet]
- [GNU Octave][octave]
- [Data50][metadata_data50]
- [OpenStreetMap][openstreetmap]
- [WMS služba INSPIRE Parcely][wms-cp]

[link_l14]: https://aim.rlp.cz/predpisy/predpisy/dokumenty/L/L-14/data/print/L-14_cely.pdf "Letecký předpis L14 - Letiště"
[link_dmr]: https://geoportal.cuzk.cz/Default.aspx?mode=TextMeta&side=vyskopis&metadataID=CZ-CUZK-DMR5G-V&head_tab=sekce-02-gp&menu=302 "Digitální model reliéfu 5. generace"
[ceník_ZÚ_link]: https://geoportal.cuzk.cz/Dokumenty/Cenik.pdf "Ceník produktů Zeměměřického úřadu"
[nkod_data50_link]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2FZmmerickyU%2F671714680 "Záznam datové sady Data50 v Národním katalogu otevřených dat"
[shapefile_spec]: https://www.esri.com/library/whitepapers/pdfs/shapefile.pdf "Technický popis formátu ESRI Shapefile"
[metadata_data50]: https://geoportal.cuzk.cz/getHTML.aspx?mode=Metadata&fnc=getRecord&identifierid=CZ-CUZK-DATA50-RELIEF-V "Metadata vrstvy Reliéf datové sady Data50"
[octave]: https://www.gnu.org/software/octave/index "Programovací jazyk GNU Octave"
[qgis]: https://www.qgis.org/en/site/ "Stránky porjektu QGIS"
[grass]: https://grass.osgeo.org/ "Stránky projektu Grass GIS"
[react-leaflet]: https://react-leaflet.js.org/ "React komponenty pro mapy v Leafletu"
[openstreetmap]: http://openstreetmap.org "Otevřená databáze prostorových dat"
[wms-cp]: https://geoportal.cuzk.cz/Default.aspx?lng=CZ&mode=TextMeta&side=INSPIRE_dSady&metadataID=CZ-00025712-CUZK_WMS-MD_CP&metadataXSL=metadata.sluzba&menu=416&head_tab=sekce-04-gp "Webová služba poskytující obrazová data Parcel harmonizovaná a poskytovaná dle směrnice INSPIRE"
