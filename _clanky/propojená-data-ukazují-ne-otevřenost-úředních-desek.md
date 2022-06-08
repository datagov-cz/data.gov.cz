---
layout: post
title: Propojená data ukazují (ne)otevřenost úředních desek 
detail: true
ref: propojenadataurednidesky062022
lang: cs
image: ../přílohy/články/propojená-data-ukazují-ne-otevřenost-úředních-desek/ÚD-vizualizace.webp
date: 2022-06-09 06:00:00 +01:00
author: radka_domanská
---
V [minulém článku] jsme popisovali, proč je důležité otevírat data z úředních desek a jaký je aktuální stav publikace úředních desek.
Zmiňovali jsme, že ke dni 27.5.2022 mělo zveřejněnou úřední desku s vazbou na otevřenou formální normu (OFN) celkem 373 subjektů, z toho 154 obcí s rozšířenou působností, 10 krajů, 184 státních orgánů a 25 dalších organizací, na které se povinnost publikace otevřených dat nevztahovala. 
Jak jsme k číslům o stavu publikace došli a kdo publikoval otevřená data k úředním deskám správně?
Co jsou nejčastější chyby v publikaci? 
V článku se dozvíte nejen to, zejména vám ukážeme využití propojených dat pomocí SPARQL dotazů pro zjištění aktuálních dat o úřadech z Registru práv a povinností i dotazů do Národního katalogu otevřených dat, které lze využít i pro jiné analýzy.
Co je to SPARQL a jak psát dotazy jsme psali v [dřívějším článku].

<!--more-->

Přehled subjektů, které povinnost splnily a které ještě ne je uveden v [následující vizualizaci].

{% include image.html url="../přílohy/články/propojená-data-ukazují-ne-otevřenost-úředních-desek/ÚD-vizualizace.webp" description="Vizualizace" %}

## Použitá data
- Ministerstvo vnitra: [Kompletní metadata - Národní katalog otevřených dat (Přístupový bod SPARQL)]
- Ministerstvo vnitra: [Orgány veřejné moci (SPARQL Endpoint)]
- Testovací aplikace, která stahuje data ze všech úředních desek přímo do prohlížeče, tedy spotřebovává hodně dat - v době psaní článku již více jak 100 MB. Pokud jste na počítači, nebo máte neomezená data, můžete si aplikaci vyzkoušet: [Jednoduché zobrazení úředních desek pomocí Otevřené formální normy a Národního katalogu otevřených dat]

## Postup zpracování
Povinnost publikovat úřední desky jako otevřená data dopadá dle § 5a odst. 3 zákona č. 106/1999 Sb. na státní orgány, krajské úřady a obecní úřady obcí s rozšířenou působností. 
Pro identifikaci úřadů spadajících do jednotlivých skupin byla využita data z Registru práv a povinností (RPP), konkrétně kategorie orgánu veřejné moci, která určuje subjekty vykonávající stejné činnosti ([dotaz na počet organizací v jednotlivých kategoriích]).
K datu 27.5.2022 existovalo celkem 149 kategorií, přičemž u každého orgánu veřejné moci mohla být vyplněna více než jedna kategorie. 
Obcí s rozšířenou působností bylo k datu 27.5.2022 celkem 205 ([kategorie KO11] s názvem „Obce s rozšířenou působností“) a krajů bylo k datu 27.5.2022 celkem 14 ([kategorie KO12] s názvem „Kraje a hl. m. Praha“) viz [dotaz na kategorie uvedené u jednotlivých orgánů veřejné moci]. 

Identifikace všech státních orgánů je o něco náročnější. 
Již v [článku o nových povinnostech]  jsme popisovali, že pojem státní orgány není v zákoně č. 106/1999 Sb. vymezen, nicméně z ustáleného výkladu § 2 téhož zákona vyplývá, že se jedná zejména o ministerstva a další ústřední orgány státní správy ve smyslu kompetenčního zákona (zákon č. 2/1969 Sb.), stejně jako o další orgány státní správy, které jsou nějakému ministerstvu podřízeny a jsou založeny zákonem, zpravidla agendovým.
Mezi orgány státní správy se dále zpravidla řadí i soudy. 
Přestože v RPP existují [kategorie KO129] s názvem „Ministerstva a další ústřední správní úřady (§ 1 a § 2 z. 2/1969 Sb.)“ nebo [kategorie KO198] s názvem „Všechny státní orgány“, není žádná z těchto kategorií u některých státních orgánů vyplněna. 
Proto byla pro identifikaci státních orgánů využita podmínka zařazení orgánu veřejné moci do kategorie KO129 nebo do kategorie KO198 nebo mající [právní formu 325] „Organizační složka státu“ nebo [právní formu 382] „Státní fond ze zákona“.
Dle [dotazu na přehled orgánů veřejné moci splňující výše uvedené podmínky] jich bylo celkem 364. 
Nyní již víme, jak určit celkový počet subjektů, na něž výše zmíněná povinnost dopadá.

Dle [dotazu pro určení subjektů, které danou povinnost plní](tj. zveřejňují v Národním katalogu otevřených dat datovou sadu ve vazbě na OFN), jich k datu 27.5.2022 bylo 212, nicméně jak je vidět z výsledku dotazu, tak někteří poskytovatelé publikovali více datových sad k úředním deskám. 
Jednalo se o [Ministerstvo vnitra], [Ministerstvo spravedlnosti], [Ministerstvo zemědělství], [Český úřad zeměměřický a katastrální], [Státní zemědělská a potravinářská inspekce], [Statutární město Ostrava], [Statutární město Chomutov] a [Město Bílovec].
U těchto subjektů bylo nezbytné projít publikované datové sady a na základě popisu určit, zda publikují data i za jiný subjekt.
Na základě toho bylo zjištěno, že skutečný počet subjektů publikujících úřední desku jako otevřená data k datu 27.5.2022 není 212, ale 373.
Ministerstvo spravedlnosti například publikovalo úřední desky za soudy a státní zastupitelství.

A které subjekty ještě úřední desku nepublikují nebo ji publikují bez vazby na OFN? 
Přehled obcí a krajů lze opět určit celkem jednoduše. 
Obcí, které nepublikovaly úřední desku nebo ji publikovaly bez vazby na OFN, bylo 51 ([dotaz na obce neplnící povinnost]) a kraje byly 4 ([dotaz na kraje neplnící povinnost]).
U státních orgánů je zjištění nepublikujících subjektů o něco komplikovanější kvůli tomu, že některé státní orgány publikují v NKOD úřední desku i za jiné orgány. Základem byl [dotaz určující státní orgány, které nepublikují v NKOD datovou sadu k úřední desce ve vazbě na OFN pod svým jménem].
Následně byl tento přehled očištěn o státní orgány, jejichž úřední deska byla publikována jiným subjektem, přičemž zůstalo 179 státních orgánů, které úřední desku ve vazbě na OFN nepublikovaly.
K určení státních orgánů, které mají publikovanou úřední desku byla využita [testovací aplikace].

Díky testovací aplikaci bylo možné odlišit subjekty, které publikují správně, tj. subjekty, které v testovací aplikaci nevykazují žádnou z nejčastějších chyb (to však nemusí znamenat 100% správnost, vždy je třeba zkontrolovat i příklady špatné praxe, zejména IPv6, správnou implementaci HTTPS) a subjekty, které publikují úřední desku s chybami. 

To, že subjekt nepublikuje úřední desku ve vazbě na OFN může být způsobeno i tím, že v metadatech datové sady neuvedl v části specifikace odkaz na OFN.
Tyto subjekty lze identifikovat tak, že datovou sadu lze dohledat v NKOD, ale nezobrazuje se v testovací aplikaci. 
Při této analýze byly datové sady bez vazby na OFN dohledány ručně, nicméně nelze očekávat, že takto budou postupovat jiní uživatelé otevřených dat.
Špatně popsaná datová sada, tj. s neúplnými metadaty, tak komplikuje vyhledatelnost i snadné využití uživateli.

## Výsledek
Výslednou tabulku zobrazující všechny povinné subjekty s uvedením stavu publikace k datu 27.5.2022 jsme vizualizovali pomocí nástroje [infogram].
V levé části je uveden graf typu “semi circle”, který je obdobou koláčového grafu a zobrazuje počty subjektů dle plnění povinnosti publikace úřední desky. Graf byl vytvořen agregací dle sloupců Typ subjektu a Stav publikace. Graf zobrazuje počet subjektů v dané kategorii, které publikovaly úřední desku dle OFN (správně - označeno zeleně či s chybami - označeno žlutě) a počet subjektů, které úřední desku nepublikovaly (neuvedly vazbu na OFN - označeno oranžově nebo nepublikovaly vubec - označeno červeně). Pomocí šipek uvedených nad grafem je možné zobrazit grafy za ostatní kategorie povinných subjektů. V pravé části vizualizace je zobrazena zdrojová tabulka ke grafu, ve které lze jednoduše vyhledávat dle názvu subjektu a zjistit stav publikace úřední desky u konkrétního subjektu. Data použití ve vizualizaci je možné stáhnout kliknutím na “Download data”.

{% include image.html url="../přílohy/články/propojená-data-ukazují-ne-otevřenost-úředních-desek/ÚD-vyhledávání.webp" description="Vyhledávání" %}

## Časté chyby v publikaci otevřené úřední desky

{% include image.html url="../přílohy/články/propojená-data-ukazují-ne-otevřenost-úředních-desek/ÚD-Kraslice.webp" description="Kraslice" %}

Úřední desku jako otevřená data zvládly správně publikovat i menší obce s rozšířenou působností jako například Telč, Kraslice či Vizovice.
Oproti tomu řada ministerstev, krajů i statutárních měst měla v publikovaných datech chyby nebo je nezveřejnila vůbec.

{% include image.html url="../přílohy/články/propojená-data-ukazují-ne-otevřenost-úředních-desek/ÚD-Jihomoravský-kraj.webp" description="Jihomoravský-kraj" %}

Mezi nejčastější chyby, se kterými se subjekty často potýkají, patří nepodporování techniky CORS ze strany webového serveru poskytovatele.
V případě, že technika CORS není podporována, neumožní data využívat na jiné doméně než na té, na které se data původně nachází, což znemožňuje další využití otevřených dat webovým aplikacím.
Jak CORS zprovoznit se dozvíte v [návodu], který vás (nebo vašeho dodavatele) naučí webový server nakonfigurovat.
Další častou chybou je špatná validace souboru vůči JSON schématu, které je součástí [OFN pro úřední desky].
Nevalidnost s datovým schématem způsobuje problémy jak konzumentům dat, jelikož se na schéma nemohou spolehnout, tak samotným poskytovatelům, protože ukazuje problém s datovou kvalitou a procesem publikace dat. 
V neposlední řadě, poskytovatelé často zapomínají do metadat datové sady uvést v části specifikace odkaz na OFN.
Metadata mohou poskytovatelé jednoduše upravit i po zveřejnění.
Jak mají vypadat správně vyplněná metadata, ukazuje například [předpřipravený záznam].

{% include image.html url="../přílohy/články/propojená-data-ukazují-ne-otevřenost-úředních-desek/ÚD-Telč.webp" description="Telč" %}

Na desítky subjektů otevření úředních desek pořád čeká. 
Z ministerstev úřední desku k datu 27.5.2022 nepublikovalo Ministerstvo dopravy, Ministerstvo obrany, Ministerstvo průmyslu a obchodu, Ministerstvo spravedlnosti, Ministerstvo zahraničních věcí ani Ministerstvo zdravotnictví.
Ministerstvo financí, Ministerstvo práce a sociálních věcí a Ministerstvo životního prostředí sice úřední desku v NKOD zveřejnilo, ale v metadatech neuvedlo vazbu na OFN.

## Další užití a závěr
V části postup zpracování je popsáno, jak byla provedena analýza plnění povinnosti publikace úřední desky formou otevřených dat a na základě uvedeného postupu je možné ji zopakovat k jakémukoliv datu. 
Zároveň byly k analýze využity SPARQL dotazy, které slouží jako ukázka využití dynamických dat z Registru práv a povinností a Národního katalogu otevřených dat. 

Zároveň by měl článek i vizualizace sloužit povinným subjektům k ověření stavu publikace jejich otevřené úřední desky a zjištění, jak upravit případné nedostatky.
Aktuální správnost publikace úřední desky je možné si v čase ověřit díky testovací aplikaci.
Věříme, že tento článek přispěje k maximálnímu plnění povinnosti publikace úředních desek a sníží počet dotazů týkajících se nejčastějších chyb.
I nadále tým národního koordinátora otevřených dat bude poskytovat metodickou podporu všem poskytovatelům skrze email [otevrenadata@mvcr.cz]. 

[minulém článku]: /články/otevřené-úřední-desky-po-čtvrt-roce-je-jich-665 "Otevřené úřední desky - po čtvrt roce je jich 665"
[dřívějším článku]: /články/znalostní-grafy-03-sparql "Série Znalostní grafy: Díl 3: SPARQL"
[následující vizualizaci]: https://infogram.com/plneni-povinnosti-publikace-uredni-desky-jako-otevrena-data-1hzj4o35mkjl34p?live "Vizualizace plnění povinnosti publikace úřední desky"
[Kompletní metadata - Národní katalog otevřených dat (Přístupový bod SPARQL)]: /datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2F00007064%2Ffecee27b4a44fa89cbe8cc491fe5540c "SPARQL Kompletní metadata"
[Orgány veřejné moci (SPARQL Endpoint)]: /datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2F00007064%2F44a9d6abacd4d0e83a0694e74d028f51 "SPARQL OVM"
[Jednoduché zobrazení úředních desek pomocí Otevřené formální normy a Národního katalogu otevřených dat]: /články/nová-éra-úředních-desek#jednoduché-zobrazení-úředních-desek-pomocí-otevřené-formální-normy-a-národního-katalogu-otevřených-dat "Testovací aplikace"
[dotaz na počet organizací v jednotlivých kategoriích]: https://api.triplydb.com/s/LqWC1nQ7c "Dotaz na počet organizací v jednotlivých kategoriích"
[dotaz na kategorie uvedené u jednotlivých orgánů veřejné moci]: https://api.triplydb.com/s/9T1HNKTdf "Dotaz na kategorie uvedené u jednotlivých orgánů veřejné moci"
[článku o nových povinnostech]: /články/nové-povinnosti-pro-obce-kraje-a-orgány-státní-správy-v-oblasti-otevřených-dat "Nové povinnosti pro obce, kraje a orgány státní správy v oblasti otevřených dat"
[dotazu na přehled orgánů veřejné moci splňující výše uvedené podmínky]: https://api.triplydb.com/s/S2Gw7ZvXF "Dotaz na přehled orgánů veřejné moci splňující výše uvedené podmínky"
[dotazu pro určení subjektů, které danou povinnost plní]: https://api.triplydb.com/s/DotA4DY9Z "Dotaz pro určení subjektů, které danou povinnost plní"
[dotaz na obce neplnící povinnost]: https://api.triplydb.com/s/-4CzrosKo "Dotaz na obce neplnící povinnost"
[dotaz na kraje neplnící povinnost]: https://api.triplydb.com/s/Hc2mMfplA "Dotaz na kraje neplnící povinnost"
[dotaz určující státní orgány, které nepublikují v NKOD datovou sadu k úřední desce ve vazbě na OFN pod svým jménem]: https://api.triplydb.com/s/iYhKrEskv "Dotaz určující státní orgány, které nepublikují v NKOD datovou sadu k úřední desce ve vazbě na OFN pod svým jménem"
[testovací aplikace]: /články/nová-éra-úředních-desek#jednoduché-zobrazení-úředních-desek-pomocí-otevřené-formální-normy-a-národního-katalogu-otevřených-dat "Testovací aplikace"
[návodu]: https://opendata.gov.cz/špatná-praxe:chybějící-cors "Chybějící CORS"
[OFN pro úřední desky]: https://ofn.gov.cz/úřední-desky/2021-07-20/ "OFN Úřední desky"
[předpřipravený záznam]: /formulář/registrace-datové-sady?file=https%3A%2F%2Fofn.gov.cz%2Fúřední-desky%2F2021-07-20%2Fmetadata%2Fúřední-desky.jsonld "Předpřipravený záznam"
[otevrenadata@mvcr.cz]: mailto:otevrenadata@mvcr.cz "mailto:otevrenadata@mvcr.cz"
[kategorie KO11]: https://rpp-opendata.egon.gov.cz/odrpp/zdroj/kategorie-ovm/KO11 "Kategorie KO11 RPP"
[kategorie KO12]: https://rpp-opendata.egon.gov.cz/odrpp/zdroj/kategorie-ovm/KO12 "Kategorie KO12 RPP"
[kategorie KO129]:  https://rpp-opendata.egon.gov.cz/odrpp/zdroj/kategorie-ovm/KO129 "Kategorie KO129 RPP"
[kategorie KO198]: https://rpp-opendata.egon.gov.cz/odrpp/zdroj/kategorie-ovm/KO198 "Kategorie KO198 RPP"
[právní formu 325]: https://rpp-opendata.egon.gov.cz/odrpp/zdroj/právní-forma/325 "Právní forma 325 RPP"
[právní formu 382]: https://rpp-opendata.egon.gov.cz/odrpp/zdroj/právní-forma/382 "Právní forma 382 RPP"
[Ministerstvo vnitra]: /datové-sady?dotaz=úřední%20deska&poskytovatel=https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forgán-veřejné-moci%2F00007064 "Datové sady publikované k úředním deskám MV"
[Ministerstvo spravedlnosti]: /datové-sady?dotaz=úřední%20deska&poskytovatel=https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forgán-veřejné-moci%2F00025429 "Datové sady publikované k úředním deskám MSp"
[Ministerstvo zemědělství]: /datové-sady?dotaz=úřední%20deska&poskytovatel=https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forgán-veřejné-moci%2F00020478 "Datové sady publikované k úředním deskám MZe"
[Český úřad zeměměřický a katastrální]: /datové-sady?dotaz=úřední%20deska&poskytovatel=https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forgán-veřejné-moci%2F00025712 "Datové sady publikované k úředním deskám ČÚZK"
[Státní zemědělská a potravinářská inspekce]: /datové-sady?dotaz=úřední%20deska&poskytovatel=https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forgán-veřejné-moci%2F75014149 "Datové sady publikované k úředním deskám SZPI"
[Statutární město Ostrava]: /datové-sady?dotaz=úřední%20deska&poskytovatel=https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forgán-veřejné-moci%2F00845451 "Datové sady publikované k úředním deskám Statutárního města Ostrava"
[Statutární město Chomutov]: /datové-sady?dotaz=úřední%20deska&poskytovatel=https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forgán-veřejné-moci%2F00261891 "Datové sady publikované k úředním deskám Statutárního města Chomutov"
[Město Bílovec]: /datové-sady?dotaz=úřední%20deska&poskytovatel=https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forgán-veřejné-moci%2F00297755 "Datové sady publikované k úředním deskám Města Bílovec"
[infogram]: https://infogram.com/plneni-povinnosti-publikace-uredni-desky-jako-otevrena-data-1hzj4o35mkjl34p?live "Vizualizace v programu Infogram"
