---
layout: post
detail: true
title: "Český uličník aneb ulice jako ukázková geodata"
ref: český-uličník-aneb-ulice-jako-ukázková-geodata
lang: cs
image: ../přílohy/články/český-uličník-aneb-ulice-jako-ukázková-geodata/main.webp
author: michal_škop
date: 2022-10-19 07:00:00 +01:00
---
Geodata (prostorová data) patří mezi nejpoužívanější otevřená data. Nejrůznější mapové aplikace mají za základ právě tato otevřená data. Geodata v sobě skrývají i nejrůznější zajímavosti, jedním ze zajímavých zdrojů jsou jména ulic. 

<!--more-->
### Názvy ulic v sobě můžou zrcadlit historii
Známá je například plzeňská “_Třída politických omylů_”, s dnešním názvem _Americká_ ulice. Ta vznikla v roce 1868 jako _Stodolní_. Od té doby měla postupně názvy, ať už celá, nebo jedna z polovin ulice: _Jungmannova_, _Františka Josefa I._, _Wilsonova_, _Karla IV._, _Vítězství_, _Stalinova_, _Wilsonova_, _Stalinova_ (nyní již celá ulice), _Moskevská_, _Ludvíka Svobody_, opět _Moskevská_ až po dnešní název _Americká_.

{% include image.html url="../přílohy/články/český-uličník-aneb-ulice-jako-ukázková-geodata/Dobové_razítko_Věrčiny_školy.webp" description="Za druhé světové války se jednu dobu dnešní Americká ulice jmenovala Třídou Vítězství. Vzhledem k následné prohře nacistického režimu šlo o jeden z mnoha politických omylů, které daly této důležité plzeňské ulici jméno. Zdroj: Sanki 2010, CC BY-SA 4.0, via Wikimedia Commons" %}

Další ukázkou historie obtisklé do jmen ulic jsou ulice pojmenované dle data osvobození a osvobozujících armád v roce 1945. Tento příklad byl zpracován [v článku v Seznamu Zprávách][link_sz]. Je zde vidět postup osvobozujících armád v dubnu a květnu přes ČR od Hodonína s ulicí _12. dubna_ až po Milín u Příbrami, kde byly poslední výstřely druhé světové války na českém území a kde je ulice _11. května_. Také pak je na mapě podle jmen ulic snadno vidět, kterou část ČR osvobodila která zahraniční armáda - sovětská, americká, ale i polská a rumunská.

### Nejčastější ulice, ulice pojmenované po osobnostech
[Deník][link_denik] se zabýval tím, jaké ulice jsou v ČR nejčastější. Nejvíce ulic v ČR nese jméno _Zahradní_, _Krátká_, _Nádražní_, _Polní_ a _Školní_. Z osobností je nejčastěji zastoupen Jan Amos Komenský, Jan Hus a Miroslav Tyrš.

[Rozhlas][link_rozhlas] pro změnu upozornil na obrovskou genderovou nerovnost v pojmenování ulic, kde naprostá většina ulic pojmenovaných po osobnostech v největších třech městech ČR nese jméno podle muže, zatímco podle ženy je to zhruba 10x (Praha) až 20x (Brno, Ostrava) méně. Z žen je nejčastěji ulice pojmenovaná po Boženě Němcové.

### “Barevné ulice”
V tomto článku si ukážeme jednoduchý příklad zobrazení “barevných ulic” na mapě ČR. Tedy ulic, které jsou pojmenované po barvách. Důležitější pro nás bude cesta než samotný cíl - jde nám hlavně o to ukázat jednu možnost, jak s českými geodaty pracovat.

## Použitá data
[Registr územní identifikace, adres a nemovitostí][link_ruian] (RÚIAN) spravovaný Českým úřadem zeměměřičským a katastrálním (ČÚZK) obsahuje mimo jiné [informace o všech adresních místech v ČR][link_nkod_ruian], tedy o všech adresách domů, které mají číslo popisné (běžné domy) nebo evidenční (chaty, chalupy). Ke každé adrese potom eviduje mj. název ulice, obce, katastrálního území a geografické souřadnice.

Tato data jsou dostupná jako otevřená data. Je možné je získat z RÚIANu dokonce více různými způsoby - minimálně jako datová součást souborů GIS (mapy) nebo jako [seznam adresních míst][link_ruian_list], obojí kvůli velikosti souborů je rozděleno po jednotlivých obcích ČR. Tato data lze najít také pomocí [Národního katalogu otevřených dat][link_nkod_ruian].

Druhým zdrojem informací o ulicích může být [Český statistický úřad][link_nkod_csu], který poskytuje seznam ulic také jako otevřená data. Ovšem v tomto případě nejsou k dispozici geografické souřadnice.

Alternativně by bylo možné použít také data z mezinárodní OpenStreetMap, odkud jsou data také velmi dostupná (ač úplně nesplňují podmínku otevřenosti dle [zákonné definice otevřených dat v ČR][link_od]. Tato průběžně aktualizovaná data jsou dostupná např. z [Geofabrik][link_geofabrik].

## Postup zpracování
### Geodata
Neboť chceme mít možnost výsledek zobrazit na mapu, použijeme data z RÚIAN, která obsahují i geografické souřadnice.

Neboť RÚIAN neobsahuje přímo seznam ulic (s geografickými souřadnicemi), musíme si poradit jinak. Namísto přímo ulic použijeme adresní místa, u kterých je údaj jak o ulici, tak geografická souřadnice (adresní místa jsou zjednodušeně adresy domů, chat, apod.).

Nejprve tedy stáhneme a rozbalíme [soubor se všemi adresními místy v ČR][link_ruian_list]. Získáme tak zvláštní soubor ve formátu CSV pro každou obec v ČR (více jak 6000 souborů).

[Jednoduchým skriptem][link_script1] si poté vytvoříme tabulku všech ulic v ČR. Neboť pro náš případ nepotřebujeme celý průběh ulice, každou ulici pro jednoduchost bude geograficky reprezentovat průměrný bod (těžiště) ze všech adres, které jsou v této ulici.

Ještě musíme vyřešit jeden problém. Česká veřejná geodata jsou obvykle v zobrazení [S-JTSK Křovák][link_epsg1] a nejinak je tomu v našem případě. Ovšem pro zobrazování do map se prakticky vždy používá zobrazení [WGS 84][link_epsg2] známé i z GPS, které používá běžnou zeměpisnou šířku a délku. Transformaci souřadnic z jednoho zobrazení do druhého lze opět snadno provést např. pomocí [skriptu][link_script1], v programech pro GIS jako je [QGIS][link_qgis], atd.

### Ulice
Nyní už se můžeme vrhnout na samotné “barevné ulice”. Seznam barev můžeme získat např. z [Wikidat][link_wikidata] pomocí [dotazu SPARQL][link_sparql].

Ze seznamu barev vyloučíme v našem případě ty, které by odpovídaly spíše něčemu jinému než samotné barvě. Např. ulice _Růžová_ bude daleko spíše pojmenována po růžích než po růžové barvě. Naopak si přidáme _Duhovou_, která obsahuje více barev. U některých názvů je to samozřejmě sporné, je _Vínová_ podle barvy nebo podle vína? Leckdy je to vidět podle okolních ulic, pokud mají společné téma. Takto jsou “barevné ulice” např. ve Zruči-Senci, v uzavřeném satelitu u Plzně (tam je právě _Vínová_ hned vedle _Platinové_, _Azurové_, _Lososové_ a _Olivové_). Nakonec si tedy [vyfiltrujeme seznam “barevných ulic”][link_script2] ze seznamu všech ulic.

Přímo ze seznamu vidíme, že nejčastější “barevná ulice” v ČR je _Zelená_, která se v ČR vyskytuje 90x. Naopak _Hnědá_ je jen jedna (ve slezském Petřvaldu) stejně jako již zmíněné _Azurová_, _Lososová_, _Olivová_ nebo _Platinová_ v Senci (části Zruče-Sence). _Fialové_ a _Vínové_ jsou potom dvě (v Brně a Chebu, resp. v Březí a Zruči-Senci), _Oranžové_ tři. Existují např. i ulice _Černé_ a _Bílé_, nikoliv však _Šedé_ nebo _Šedivé_.

Jako poslední krok je zobrazení našeho vytvořeného seznamu “barevných ulic” v mapě. K tomu lze použít nejrůznějších postupů, např. v [D3][link_d3_map] nebo [QGIS][link_qgis_map].

### Výsledek
Výsledná mapa ukazuje i některé zajímavé regionální rozdíly. Na Vysočině z “barevných ulic” je zastoupena pouze _Zelená_. Naopak v Olomouckém a Plzeňském kraji je více _Duhových_ ulic než _Zelených_.

Největší koncentrace _Černých_/_Hnědých_ ulic je v českém Slezsku, jsou zde 4 z celkového počtu 11 v celé ČR.

V celém Plzeňském kraji kromě samotné Plzně a jejího nejbližšího okolí není jediná “barevná ulice”.

Nejzápadnější česká “barevná ulice” je _Zelená_ v Aši, nejvýchodnější _Černá_ v Třinci.

{% include image.html url="../přílohy/články/český-uličník-aneb-ulice-jako-ukázková-geodata/map.webp" description="Mapa “barevných ulic” v ČR. Barva bodu vždy odpovídá jménu ulice, Duhové ulice jsou označeny růžovým bodem." %}

### Další užití
Samozřejmě vizualizace jmen ulic je hlavně ukázka, jak relativně snadno lze použít otevřená geografická data v ČR. Tato data jsou již použitá v mnoha aplikacích, asi nejznámější jsou mapové aplikace jako [OpenStreetMap][link_openstreetmap], [Mapy.cz][link_mapycz] nebo [Mapy od Google][link_googlemaps].

Nicméně i další potenciál geodat je stále obrovský. Speciálně ve spojení s dalšími daty, ať již otevřenými nebo ne. Tomu ostatně odpovídá i to, že geodata jsou součástí [připravované evropské regulace směřující k povinnému zveřejňování dat s vysokou hodnotou][link_eu]. Konkrétně jsou vyjmenovány právě geodata obsahující všechny budovy (ty byly základ pro výše uvedenou ukázku “barevných ulic”) a pozemkové parcely. Pokud vše půjde dobře, tak takovéto mapy tedy bude možné vytvářet pro celou EU. Čím více se otevřou i další geodata, kterými veřejná správa disponuje, tím lépe.


[link_qgis_map]: https://www.scrapehero.com/how-to-plot-location-data-from-a-csv-file-as-points-on-qgis/ "How to plot location data from a CSV file as points on QGIS"
[link_d3_map]: https://stackoverflow.com/questions/47917730/d3-line-and-points-on-map-from-csv-data/47918133#47918133 "d3 line and points on map from csv data"
[link_eu]: https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/12111-Open-data-availability-of-public-datasets_en "Regulace EU o zveřejňování dat"
[link_mapycz]: https://mapy.cz/ "Mapy.cz"
[link_openstreetmap]: https://www.openstreetmap.org/ "OpenStreetMap"
[link_googlemaps]: https://www.google.com/maps "Google Maps"
[link_d3]: https://d3js.org/ "D3"
[link_sparql]: https://data.gov.cz/%C4%8Dl%C3%A1nky/znalostn%C3%AD-grafy-03-sparql "Série Znalostní grafy: Díl 3: SPARQL"
[link_wikidata]: https://query.wikidata.org/#%23Colors%0ASELECT%20%3Fcolor%20%3FcolorLabel%20%0AWHERE%20%0A%7B%0A%20%20%3Fcolor%20wdt%3AP31%20wd%3AQ1075%20%3B%0A%20%20%20%20%20%20%20%20%20rdfs%3Alabel%20%3FcolorLabel%20.%0A%0A%20%20FILTER%28langMatches%28LANG%28%3FcolorLabel%29%2C%20%22cs%22%29%29%0A%7D "Wikidata: názvy barev"
[link_qgis]: https://www.qgis.org/ "QGIS"
[link_epsg2]: https://epsg.io/4326 "WGS 84"
[link_epsg1]: https://epsg.io/5514 "S-JTSK Křovák"
[link_script2]: ../přílohy/články/český-uličník-aneb-ulice-jako-ukázková-geodata/filter.py "Skript pro filtrování tabulky ulic"
[link_script1]: ../přílohy/články/český-uličník-aneb-ulice-jako-ukázková-geodata/streets.py "Skript pro vytvoření tabulky ulic"
[link_geofabrik]: https://download.geofabrik.de/europe.html "Geofabrik.de: Europe"
[link_od]: https://data.gov.cz/informace/z%C3%A1klady-otev%C5%99en%C3%BDch-dat-pro-z%C3%A1jemce/ "Základy otevřených dat"
[link_nkod_csu]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F00025593%2F9b993fc8711e87abaea565a06258d247 "Národní katalog otevřených dat: Vazba mezi číselníky ČSÚ: CISOB (kód 43) - ULICE (kód 66)"
[link_ruian_list]: https://nahlizenidokn.cuzk.cz/StahniAdresniMistaRUIAN.aspx "Adresní místa RÚIAN ve formátu CSV"
[link_nkod_ruian]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F00025712%2F7c8358777b22d4c43143b7995c4e099a "Národní katalog otevřených dat: RÚIAN csv - adresy - stát"
[link_ruian]: https://www.cuzk.cz/ruian/RUIAN.aspx "Registr územní identifikace, adres a nemovitostí"
[link_sz]: https://www.seznamzpravy.cz/clanek/fakta-jak-se-cesko-osvobozovalo-od-nacismu-poznate-to-dodnes-podle-nazvu-ulic-201419 "Jak se Česko osvobozovalo od nacismu, poznáte dodnes podle názvů ulic"
[link_denik]: https://data.denik.cz/data/po-kom-je-pojmenovano-nejvic-ulic-v-zemi-komensky-vitezi-nad-husem-a-tyrsem-20180201.html "Po kom je pojmenováno nejvíc ulic v zemi: Komenský vítězí nad Husem a Tyršem"
[link_rozhlas]: https://www.irozhlas.cz/zpravy-domov/ulice-pojmenovane-po-zenach-vzacnost-interaktivni-mapa-ukazuje-jak-drtiva-je_1806170605_cib "Ulice pojmenované po ženách: Vzácnost. Interaktivní mapa ukazuje, jak drtivá je nerovnost"