---
layout: post
detail: true
title: Využití otevřených dat Zeměměřického úřadu pro povolování dočasných staveb - část 3
ref: data50-3
lang: cs
image: ../přílohy/články/využití-data-50/screen_vysledku.webp
author: michal_med
date: 2021-03-26 01:12:23
---

Dokončení série článků o využití otevřených dat Zeměměřického úřadu se zabývá využitím dat upravených v předchozí části v aplikaci pro povolování dočasných staveb v okolí letiště. Také rozebírá možná rozšíření a problémy řešení i další využití.

<!--more-->
## Úvod a shrnutí
V [prvních][MiMe-clanek-1] [dvou][MiMe-clanek-2] částech článku bylo popsáno zjednodušení procesu povolování dočasných staveb v prostoru ochranných pásem Letiště Václava Havla v Praze. Na základě použití [datové sady Data50][nkod_data50_link] a pravidel popsaných v [Leteckém předpisu L14 - letiště][link_l14] byl vytvořen digitální model reliéfu v okolí letiště a model jeho ochranných pásem. V poslední části se podíváme na to, co je vlastně výsledkem a jak tyto výsledky využít na letišti i jinde.


## Výsledek

Zpracování dat slouží pouze jako prostředek k získání požadovaného výsledku. Tím je vedle samotných dat především webová aplikace, která s těmito daty pracuje.

### Data
Výstupem z interpolačních úloh je jeden soubor s digitálním modelem reliéfu v okolí 15 kilometrů od letiště a sada souborů s ochrannými pásmy. Bylo by možné ochranná pásma sjednotit do jednoho souboru, ale ve výsledku to není nutné. Kromě toho, že na funkci aplikace to nemá vliv (pokud se ochranná pásma překrývají, pro výpočet použijeme ochranné pásmo s nižší nadmořskou výškou), jsme díky zachování samostatných souborů schopni uživateli rovnou oznámit, které konkrétní ochranné pásmo se nachází v daném bodě.

### Aplikace
Aplikace, výstižně nazvaná Altimeter, slouží ke zjištění nadmořské výšky reliéfu a jejímu porovnání s výškou ochranného pásma v místě, kde by měla stát stavba. Největší část okna aplikace zabírá mapové okno (k vizualizaci mapy je použit [React Leaflet][react-leaflet], tedy integrace javascriptové knihovny `Leaflet` pro framework `React`). Mapové podklady jsou použity dílem [OpenStreetMap][openstreetmap] a dílem ze služby [Web Map Service (WMS) pro datovou sadu INSPIRE Parcely][wms-cp], poskytovanou Českým úřadem katastrálním a zeměměřickým (ta se dá ve spodní liště přepínačem vypnout). Kombinací OpenStreetMap a vrstvy s hranicemi katastrálních parcel vzniká tato podkladová mapa:

{% include image.html
   url="../přílohy/články/využití-data-50/podkladová-mapa.webp"
   description="Podkladová mapa v aplikaci Altimeter."
%}

Základní funkce aplikace spočívá ve vybrání místa kliknutím do mapy a stisknutím tlačítka `Ověřit`. V pravé části aplikačního okna se objeví informace o vybraném bodu.

{% include image.html
   url="../přílohy/články/využití-data-50/informace-o-překážkách.webp"
   description="Výsledky měření v aplikaci Altimeter."
%}

Kromě informace o maximální výšce překážky, tedy rozdílu mezi nejníže položeným ochranným pásmem a nadmořskou výškou reliéfu v daném bodě, aplikace poskytuje i informaci o nadmořské výšce reliéfu a určujícím ochranném pásmu. V horní části této sekce jsou zobrazeny souřadnice vybraného bodu v souřadnicovém systému WGS-84. Ty je možné zobrazit ve formátu celých stupňů nebo stupňů, vteřin a sekund. Stejným způsobem lze souřadnice i zadávat. Marker v mapě je pak zobrazen na místě zadaných souřadnic.

### Rozšíření
Ze strany letiště přišla celá řada požadavků na další vylepšení. Samotné zobrazení katastrální podkladové mapy je jedním z nich. Katastrální data jsou však využita i pro zajímavější funkci, a sice pro zadávání vstupního bodu jako definičného bodu parcely. V pravé části aplikace je vedle záložky `Poziční data` záložka `Katastr`. Ta obsahuje pole `Katastrální území` a `Číslo parcely`. Po jejich vyplnění je marker zobrazen v definičním bodu vybrané parcely a kliknutím na `Ověřit` je zobrazena maximální nadmořská výška stavby na dané parcele. Data jsou získávána pomocí dotazu `GetFeatureInfo` WMS služby INSPIRE Parcely.

Po ověření výšky je možné zobrazit `Protokol k tisku`. Zatím se jedná o vygenerované PDF obsahující stejné informace, které jsou zobrazeny v aplikaci, ale do budoucna je možné dokument naformátovat tak, aby ho stačilo vytisknout, podepsat, orazítkovat a použít jako potvrzení o schválení výšky ze strany letiště. Jako další rozšíření se nabízí dodělat další ochranná pásma, tedy ornitologická, proti klamavým světlům, omezení staveb vzdušných vedení a se zákazem laserových zařízení.

### Problémy

Během testování jsme narazili na několik problémů. Jako nejzávažnější se ukázal být problém, kdy na některých místech v mapě je výrazně vyšší hodnota maximální výšky stavby, než by dávalo smysl. Po podrobnějším prozkoumání dat jsme zjistili, že to způsobuje rozlišení výstupních rastrů. Na následujícím obrázku jsou vidět ochranná pásma dráhy a přechodové plochy, každé vizualizované v jiné barevné škále (kvůli kontrastu).

{% include image.html
   url="../přílohy/články/využití-data-50/díry.webp"
   description="Vizualizace 'děr' mezi jednotlivými ochrannými pásmy."
%}

Zubaté okraje pásem jsou způsobeny zvoleným rozlišením a maskou, kdy některé části území nejsou zahrnuty ani v jednom polygonu. V těchto 'pixelech' nebude prázdná hodnota, ale hodnota nejnižšího ochranného pásma nad nimi, tedy pravděpodobně vnitřní vodorovná plocha. Tento problém se dá vyřešit poměrně triviálně rozšířením masky polygonů ochranných pásem o vhodně zvolený buffer. V případě rozlišení deset metrů bude právě deset metrů stačit.

## Další využití

Aplikace tohoto typu má řadu dalších způsobů, jak by se dala využít, např.:

 * měření výšky budov v okolí dalších letišť,
 * postupné zavedení dalších ochranných pásem a použití pro plánování letových drah dronů,
 * zanesení výškových omezení výstavby dle územního plánu a využití pro developery a úředníky při vyřizování stavebních povolení.

## Použité nástroje a zdroje

- [Grass GIS][grass]
- [QGIS][qgis]
- [React Leaflet][react-leaflet]
- [GNU Octave][octave]
- [Data50][metadata_data50]
- [OpenStreetMap][openstreetmap]
- [WMS služba INSPIRE Parcely][wms-cp]

[MiMe-clanek-1]: https://data.gov.cz/články/využití-data-50-část-1
[MiMe-clanek-2]: https://data.gov.cz/články/využití-data-50-část-2
[link_l14]: https://aim.rlp.cz/predpisy/predpisy/dokumenty/L/L-14/data/print/L-14_cely.pdf "Letecký předpis L14 - Letiště"
[link_dmr]: https://geoportal.cuzk.cz/Default.aspx?mode=TextMeta&side=vyskopis&metadataID=CZ-CUZK-DMR5G-V&head_tab=sekce-02-gp&menu=302 "Digitální model reliéfu 5. generace"
[ceník_ZÚ_link]: https://geoportal.cuzk.cz/Dokumenty/Cenik.pdf "Ceník produktů Zeměměřického úřadu"
[nkod_data50_link]: https://data.gov.cz/datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F60458500%2F671714680 "Záznam datové sady Data50 v Národním katalogu otevřených dat"
[shapefile_spec]: https://www.esri.com/library/whitepapers/pdfs/shapefile.pdf "Technický popis formátu ESRI Shapefile"
[metadata_data50]: https://geoportal.cuzk.cz/getHTML.aspx?mode=Metadata&fnc=getRecord&identifierid=CZ-CUZK-DATA50-RELIEF-V "Metadata vrstvy Reliéf datové sady Data50"
[octave]: https://www.gnu.org/software/octave/index "Programovací jazyk GNU Octave"
[qgis]: https://www.qgis.org/en/site/ "Stránky porjektu QGIS"
[grass]: https://grass.osgeo.org/ "Stránky projektu Grass GIS"
[react-leaflet]: https://react-leaflet.js.org/ "React komponenty pro mapy v Leafletu"
[openstreetmap]: http://openstreetmap.org "Otevřená databáze prostorových dat"
[wms-cp]: https://geoportal.cuzk.cz/Default.aspx?lng=CZ&mode=TextMeta&side=INSPIRE_dSady&metadataID=CZ-00025712-CUZK_WMS-MD_CP&metadataXSL=metadata.sluzba&menu=416&head_tab=sekce-04-gp "Webová služba poskytující obrazová data Parcel harmonizovaná a poskytovaná dle směrnice INSPIRE"
