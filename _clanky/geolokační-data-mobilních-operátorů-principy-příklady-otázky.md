---
layout: post
title: Geolokační data mobilních operátorů - principy, příklady, otázky
detail: true
ref: geolokační-data-mobilních-operátorů-principy-příklady-otázky
lang: cs
author: martin_dvořák
date: 2020-10-07T18:46:01.316Z
---
Článek se zaměřuje na podstatu fungování geolokačních dat mobilních operátorů s cílem přiblížit tato data veřejnosti a nastínit možnosti vlastní analýzy, včetně praktické ukázky. Zároveň bude cílem poukázat na potenciál publikace těchto dat v Národním katalogu otevřených dat.

<!--more-->

## Úvod - mobilita obyvatelstva

Mobilita obyvatelstva je jedním ze základních rysů novodobé společnosti. Především v urbanizovaných územích dosahuje mobilita osob vysokých intenzit a má zásadní dopady na fungování měst a metropolitních regionů. Současně s rostoucí mobilitou osob zároveň dochází k proměnám v dělbě přepravní práce, rytmech každodenní dojížďky či v délce dojížďkových vzdáleností. Důsledky vysoce mobilní společnosti mají typické projevy v podobě kongescí, nevyhovujících kapacit veřejné dopravy (VD), zatížené dopravní infrastruktury či nebezpečných dopravních úseků. Na základě výše uvedeného se významně zvyšuje i zájem tato data o mobilitě společnosti sledovat a analyzovat.

[Český statistický úřad][ČSÚ] standardně zjišťuje dojížďku a vyjížďku do zaměstnání a škol - tato data však zjišťuje pouze 1x za 10 let při [Sčítání lidu, domů a bytů][SLDB]. Další várku těchto dat tedy budeme znát za rok 2021 tedy budeme znát v roce 2022/23. Přestože tato data mají své limity (nízká četnost zjišťování, neuvedení místa dojížďky od respondentů, chybějící informace o nepravidelné dojížďce), stále se jedná o nejrelevantnější zdroj informací o dopravních vztazích v území. Dalším zdrojem dat o mobilitě je sčítání dopravy realizované [Ředitelstvím silnic a dálnic][ŘSD] zpravidla 1x za 5 let (v roce 2020 sčítání probíhá). Sčítání dopravy nám poskytne informace o dopravní intenzitě na vybraných profilech silnic zejména vyšší třídy, avšak tato data nám neřeknou nic o dopravních vazbách. Pokud pomineme nákladné vlastní výzkumy a šetření, tak nám zbývá obrátit se na soukromé společnosti, jako je např. Google, který vazby typu origin-destination (ve vztahu dvou lokalit se jedná o "počátek" a "cíl") sleduje, avšak neposkytuje.

Kromě konvenčních statistických zdrojů dat tak bylo až donedávna prakticky nemožné zjistit základní prostorové vzorce různých typů dojížďkových proudů. V poslední době se však v důsledku technologického pokroku a téměř totální penetrace společnosti mobilními technologiemi začala využívat zbytková signalizační data mobilních operátorů jako alternativní zdroj dat poskytující obraz o mobilitě osob. Výhodou těchto dat je celoplošné pokrytí zájmového území (cca 95 % obyvatel využívá mobilní telefon), zachycení časových průběhů cest, možnost poměrně přesného zachycení výchozích a cílových oblastí (v závislosti na hustotě urbanizovaného území, hustotě sítě základních převodních stanic či konfiguraci terénu) a především postihnutí dalších účelů cest kromě pracovní (školní) dojížďky, ačkoliv účel cesty lze jen hrubě odhadovat.

## Co jsou to geolokační data?

Jedná se o signalizační data, která vysílá SIM karta a jejichž prostřednictvím se SIM připojuje do systému pozemních přenosových antén, tzv. síť BTS (basic transmitter stations). Každá anténa je schopna pokrýt prostorově omezené území a obsloužit omezený počet uživatelů. Mobilní operátoři proto vytvářejí síť těchto BTS tak, aby dosáhli co největšího pokrytí signálem a zajistili obslužnost všech uživatelů, a to i v časech „komunikačních špiček“.

Interaktivní mapu stanic BTS je možné nalézt na webu [GSMweb][GSM], kde jsou zmapované stanice kategorizovány dle jednotlivých poskytovatelů. Níže na obrázku je výřez mapy sítí BTS společnosti T-Mobile v Brně. Data jsou na webu i ke stažení.

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/1.GSM.png" description="BTS od T-Mobile v Brně" %}

V praxi mobilní telefon při komunikaci s přenosovou sítí neustále shromažďuje a analyzuje informace o počtu antén ve svém okolí a síle jejich signálu. Na základě aktuální polohy antén si pak pro komunikaci se sítí vybírá zpravidla tu nejbližší s nejsilnějším signálem. Z geografického hlediska je pak možné území rozdělit do oblastí (cells/buněk), které obsluhují jednotlivé antény.

Identifikační údaje o právě využívané anténě a další doplňkové informace jsou uloženy v paměti telefonu a mohou tak být využity k detekci jeho přibližné polohy. Obdobně při přenosu informací mezi mobilním telefonem a sítí je v databázi operátora uložena informace o anténě, přes kterou telefon se sítí komunikoval. Tyto lokalizační informace jsou snadno dostupné, jelikož identifikace základnové stanice, s níž mobilní telefon právě komunikuje, je nezbytná pro samotné fungování sítě GSM. Identifikační údaje základnových stanic (CGI – Cell global identity) představují nejjednodušší a nejsnadněji využitelný způsob získání a využití lokalizačních údajů mobilních telefonů.

## Kalibrace dat

Mobilní operátor v rámci svého finálního produktu neposkytuje surová data ve smyslu pohybu určité osoby v území (ID SIM karty). Z pohledu uživatele dat (např. zástupce VS) mnohdy není žádoucí získat data o určitých osobách jednoho operátora, jelikož většinou chce znát komplexní profil svého území, tedy data o všech obyvatelích. Zde tedy přichází na řadu kalibrace. V České republice působí 3 hlavní poskytovatelé geolokačních dat - O2, Vodafone a T-Mobile, přičemž každý má na telekomunikačním trhu určitý podíl (T-Mobile cca 40 %, O2 cca 40 %, Vodafone 20 %). Je ale nutné vzít v úvahu, že se tento podíl liší napříč územím. Například může nastat situace, kdy v nějaké části města sídlí velká firma, ve které mají všichni zaměstnanci firemní tarify od určitého poskytovatele (nelze tedy použít republikové podíly). Do kalibrační fáze tedy v zásadě vstupují tyto faktory:
* podíl na trhu v daném území
* počet obyvatel v daném území
* rozložení BTS stanic
* sdílení BTS napříč operátory
* geomorfologie terénu (členitý terén znesnadňuje přenos signálu)
* očištění dat od zařízení, které rovněž komunikují skrz BTS (smart zařízení)
* intenzita připojování SIM do sítě BTS (minimálně 1x za 30 minut - častěji, pokud jsou aktivní data, volání či sms)

Těmito kalibračními kroky tedy dostaneme model, který co nejvíce odpovídá realitě rozložení obyvatelstva v území. 

## Výstupy z kalibrace dat

Výstupy se samozřejmě liší dle jednotlivých typů analýz. Níže v textu jsou popsány dva typy analýz, a sice "přítomné obyvatelstvo v území" a "pohyby obyvatel". Pokud bychom chtěli zjišťovat “pouze” počet přítomných obyvatel v území, může výstup vypadat například takto:

kod_obec_p,day,hour,users
506699,weekend,0,327
506699,weekend,1,347
506699,weekend,2,341
506699,weekend,3,326
506699,weekend,4,333

kde “kod_obec_p" znamená kód obce; “day” znamená pracovní den/víkend; “hour” znamená denní doba 0-24h; “users” značí počet uživatelů (SIM v území).

Výsledek [Přítomné obyvatelstvo v obcích Jihomoravského kraje][Přítomní] vizualizovaný v programu [Carto][Carto]. Zdrojový kód stránky je možné nalézt na [Gitlabu][GitLab].

Na základě těchto dat pak lze s určitou mírou (ne)přesnosti vizualizovat časoprostorové rytmy v obcích. Na základě příkladu výše tak máme rámcový přehled o vývoji počtu přítomných obyvatel v 672 obcích Jihomoravského kraje. Největší přidanou hodnotou těchto dat je pak srovnání s údaji ČSÚ o počtu obyvatel, který se samozřejmě v čase nemění. S ohledem na rozvoj samospráv nebo územní plánování, ale třeba i na Rozpočtové určení daní (RUD), mohou tato data pomoci lépe pochopit dané území.

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/2.PROFIL.png" description="Denní rytmus území obce Hodonín" %}

Případně je možné stejná data kategorizovat dle typologie osob, tedy zda je daný uživatel v území rezident, pracující či návštěvník, viz tabulka.

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/3.TAB_KAT.png" description="Rozdělení dle rezidentů, návštěvníků a pracujících" %}

Druhým typem dat jsou data o dojížďce, tedy samotné vztahy v území. Tento typ dat je lepší pro znázorňování nejvýznamnějších dopravních proudů. Je samozřejmě nutné si stanovit parametry, které pohyby chceme sledovat, v jakém rozsahu, po jak dlouhou dobu apod. Dodaný výstup tak může vypadat například takto:

| start_cas | cil_cas | start_level | start_kod | cil_level | cil_kod | pocet_kalibrovano |
| --------- | ------- | ----------- | --------- | --------- | ------- | ----------------- |
| 0         | 1       | 1           | 608505    | 1         | 608505  | 7.87              |
| 0         | 1       | 1           | 610003    | 1         | 610003  | 8.27              |
| 0         | 1       | 1           | 610089    | 1         | 610089  | 2.55              |
| 0         | 1       | 1           | 610186    | 1         | 610186  | 2.55              |
| 0         | 1       | 1           | 610208    | 1         | 610208  | 2.55              |

Kde položka “start_cas” a cil_cas” nabývá hodnot 0-23, “start_level” a “cil_level” jsou úrovně administrativní jednotek (katastr, obec, so orp, kraj) “start_kod” a “cil_kod” zase konkrétní kódy administrativních celků, “pocet_kalibrovano” je počet osob přepravených mezi danými územími.

## Příklady - co s daty dělat?

V této ukázce budou vizualizovány základní přepravní proudy ve městě Brně prostřednictvím open source geografického nástroje [QGIS][QGIS]. Cílem bude zobrazit hlavní přepravní proudy mezi katastrálními územími (48 jednotek) a zjistit tak, které katastrální vazby jsou v Brně nejsilnější. Níže v mapě vidíte, k jakému výsledku chceme dojít.

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/4.VYSLEDEK_PROUDY.png" description="Nejintenzivnější přepravní vazby mezi KÚ v Brně" %}

Jako podklad použijeme dataset [Pohyb obyvatel na základě dat mobilního operátora][Dataset] za průměrnou středu. Tento dataset obsahuje 10 atributů. Pro výsledek práce, kde nás zajímají pouze dopravní proudy mezi katastry Brna, můžeme smazat veškeré časové atributy (`start_cas`, `cil_cas`) i sloupce `day` či `pocet`. Jelikož nás zajímají pouze KÚ Brna (48 jednotek), zapneme si filtr nad sloupci `start_level` a `cil_level`, které označují úrovně administrativních celků (1=KÚ v Brně, 2=obce v okrese Brno-venkov, 3=SO ORP v Jihomoravském kraji, 4=kraje v ČR). Vybereme pouze “1”. Pro práci je ještě vhodné data katastrálních území obohatit o centroidy (souřadnice X, Y). Ty získáme ze souboru “Číselník katastrálních území v Brně”. Připojení pak může proběhnout přes funkci `SVYHLEDAT` přímo v excelu nebo další funkcí `JOIN` v jiném nástroji. Společným atributem jsou kódy jednotlivých katastrů. 

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/5.STRUKTURA.png" description="Struktura dat" %}

Nyní už máme data nachystaná pro práci v programu QGIS. Po spuštění vybereme z horní lišty “vrstva”-->”přidat vrstvu”-->”přidat textový soubor s oddělovači” a posléze vybereme upravený soubor avg_day_2_wednesday. V dialogovém okně si pak pohlídáme oddělovač (čárka), správně vyplněné souřadnice XY (centroidy KÚ) a souřadnicový systém (EPSG:4326 WGS 84)a klikneme “přidat”.

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/6.QGIS_VLOŽIT.png" description="Načtení dat do QGIS" %}

Do mapy se nám tak přidalo 48 bodů (centroidy KÚ). Pro lepší práci je vhodné zvolit podkladovou mapu, např. orfofoto ČR. Z výběru “vrstva”-->”přidat vrstvu”-->”přidat WMS/WMTS vrstvu”. V dialogovém okně pak klikneme na “nové” a z geoportálu [ČÚZK][ČÚZK] vybereme WMS vrstvu ortofoto a nahrajeme ji do položky URL. Zavřeme a zvolíme “připojit” a následně “přidat”. Okno zavřeme.

Cílem projektu je transformace bodů na linie s využitím sloupce `pocet_kalibrovano`, který vyjadřuje intenzitu přepravních proudů. Při kliknutí na vrstvu v levém panelu se otevře symbologie dané vrstvy. Body změníme z kategorie “jednoduchý symbol” na “odstupňovaný” a následně klikneme na samotný symbol. V dialogovém okně pak klikneme na “jednoduchá značka” a v sekci “Typ vrstvy symbolů” vybereme “generátor geometrie”. V “typ geometrie” pak vybereme “LineString/Multilinestring”.

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/7.QGIS_GEOM.png" description="Postup výpočtu geometrie" %}

Cílem je změnit vzhled bodových vrstev na linie, respektive vizualizovat dopravní proudy mezi KÚ. Toho docílíme v generátoru geometrie (fialové epsilon). Ve vyhledávači je třeba nalézt funkci `make_line`, která nám vytvoří liniovou geometrii ze série bodů.

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/8.GEOM_GEN.png" description="Postup tvorby linií" %}

Syntax posléze musíme doplnit ještě o atributy, ze kterých se má linie vytvářet. Tedy cílové souřadnice XY. Do syntaxe tedy doplníme ještě `make_point` a zadáme centroidy katastrů.

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/9.GEOM_SYNT.png" description="Syntax výpočtu geometrie" %}

Dostaneme tak příkaz `make_line( $geometry, make_point( "cil_X", "cil_Y" ))`. Klikneme na “použít”.

Nyní zbývá nastavit sílu dopravních vazeb. V symbologii v sekci “value” vybereme `pocet_kalibrovano` a vlevo dole vybereme klasifikaci dle Přirozených zlomů (natural breaks). Vpravo dole poté nastavíme počet tříd na 10. Nejméně významné proudy pak odškrtneme a necháme jen linie nad 80 osob. 

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/10.QGIS_SYMB.png" description="Změna symbologie" %}

Tímto docílíme výsledné mapy z úvodu. Takto vizualizovaná data pak mohou rámcově sloužit pro strategické účely městu, například při dimenzování městské dopravy.

## Potenciál katalogizace v NKOD

Data mobilních operátorů nejsou (až na výjimky) veřejná, natož katalogizována v Národním katalogu otevřených dat. Všechny příklady pocházejí z konkrétních zakázek, byť data jsou zveřejněna na lokálních datových katalozích. Přesto však, a zvláště v současné covidové době, se ukazuje, jak by tato data byla potřebná pro efektivnější plánování a minimálně pro veřejnou správu by měla být v nějaké podobě přístupná.

Nařízení vlády o nouzovém stavu vyhlášeném 12. 3. 2020 kvůli pandemii COVID-19 měla vliv na každodenní rutinu občanů Česka. Opatření vlády se zaměřovala zejména na omezení styku více lidí na jednom místě, což mělo významný vliv na omezení každodenní mobility, ať už do práce, školy, za službami či rekreací.

V prvním grafu je zobrazen pokles mobility obyvatelstva v krajích ČR oproti průměrnému týdnu před nouzovým stavem. Druhý graf zase ukazuje pokles zahraničních SIM na území ČR po zavedení nouzového stavu. Právě tato data na národní, resp. krajské úrovni by měla být dostupná pro analytické účely veřejné správy. Pokud by byla katalogizována v NKOD, mohou sloužit i firmám v různých oblastech podnikání a občanům. Veřejná správa by na operátory mohla v tomto ohledu více tlačit i například proto, že Český telekomunikační úřad poskytuje operátorům frekvence pro komunikace.

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/11.MOBILITA_KRAJE.png" description="Pokles mobility v krajích ČR" %}

{% include image.html url="../attachments/články/geolokační-data-mobilních-operátorů-principy-příklady-otázky/obrázky/12.SIM_ZAHR.png" description="Pokles zahraničních SIM v ČR" %}

## Další využití dat, vizualizací a zdrojů

Geolokační data se postupně začleňují do rozvojových koncepcí veřejné správy a k většímu rozšíření by pomohlo jejich zpřístupnění. Tato data tak využívají standardně větší města, která mají finanční, ale i technické dovednosti, aby tato data zpracovávala. V ukázce byl představen jeden z možných výstupů, nicméně z dat je možné vytvářet řadu dalších výstupů i podle toho, jakou otázku bychom chtěli zodpovědět.

[ČSÚ]: https://www.czso.cz/ "Český statistický úřad"
[SLDB]: https://www.czso.cz/csu/scitani2021 "Sčítání lidu, domů a bytů"
[ŘSD]: https://www.rsd.cz/wps/portal/ "Ředitelství silnic a dálnic"
[GSM]: https://gsmweb.cz "GSMweb"
[Přítomní]: http://jmk.brno.ml/ "Přítomné ob. v JMK"
[Carto]: https://carto.com/ "Carto"
[GitLab]: https://bitbucket.org/blue4world/brno_data_operatoru/src/master "Gitlab projekt"
[QGIS]: https://qgis.org "QGIS"
[Dataset]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2Fhttps---kod.brno.cz-api-action-package_show-id-pohyb-obyvatel "Podklad pro vizualizaci"
[ČÚZK]: https://www.cuzk.cz/ "Český úřad zeměměřičský a katastrální"
