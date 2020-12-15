---
layout: post
title: Výběr katalogizačního systému pro město Brno
detail: true
ref: výběr-katalogizačního-systému-pro-město-Brno
lang: cs
author: robert_spál
date: 2020-12-13T07:00:00 +01:00
---
Článek se zaměřuje na různé aspekty výběru datového katalogu v prostředí české samosprávy. Na příkladu města Brna jsou zde do hloubky srovnány hlavně dva katalogizační systémy - CKAN a ArcGIS HUB. Specifikace a popsané funcionality těchto dvou systémů mohou posloužit jako vodítko při výběru vhodného systému i dalším organizacím.

<!--more-->

## Výběr katalogizačního systému pro město Brno

Řeší vaše město výběr vhodného katalogizačního systému pro otevřená data? Jste na vážkách, jaký systém vybrat? Má vaše město už vybráno a běží vše hladce nebo se potýkáte s překážkami a problémy spojenými s vybraným systémem? To, že proces výběru vhodného systému není nic jednoduchého, Vám chceme ukázat na příkladu města Brna. V tomto článku se dočtete, jak k výběru město přistoupilo a také to, že výběr jednoho systému nemusí být vždy výběrem konečným.

Kolem roku 2015 se problematika otevřených dat začala v Česku dostávat do popředí, a to i na úrovni krajských měst.  Města, jako byla například Praha, začala svoje data postupně otevírat. Každé z nich se však potýkalo na této cestě ke skutečnému otevření dat s celou řadou problémů a překážek. Jednou z hlavních otázek, na kterou je nutné hned na začátku celého procesu najít odpověď, je výběr vhodného katalogizačního systému. Bez něj by se správa otevřených dat stala velmi neefektivním a časově náročným procesem. Nebylo by možné data třídit, ukládat, registrovat nebo vyplňovat jim metadata. I pro uživatele je katalog důležitý, neboť jim umožňuje jednoduše vyhledat jak požadované datové sady a informace k nim, tak i například podmínky jejich užití.

Je nutno podotknout, že zhruba polovina českých krajských měst problematiku otevřených dat (zatím) neřeší, a proto se otázkou katalogizačního systému nemusí zabývat. Přístup druhé poloviny měst se případ od případu značně liší. Od Prahy, která má v podstatě tři druhy portálů otevřených dat ([CKAN][PRHCKN], [Golemio][GOLEMIO], [Geoportál][GEOPORTAL]), přes [Ostravu][OSTRAVU], která si vybudovala vlastní portál, až po [Plzeň][PLZEN], která převzala [CKAN][CKAN].

A jak je to v případě Brna? Po vzoru dalších měst se Brno v roce 2016 rozhodlo, že svá data také otevře. Tak jako mnohá další města v ČR, i Brno si zvolilo pro svůj katalogizační systém otevřených dat Comprehensive Knowledge Archive Network (dále jen CKAN). CKAN je open source platforma určená pro ukládání, správu a katalogizaci dat, včetně jejich následného poskytování veřejnosti. Systém CKAN byl zvolen, protože splňoval tři hlavní kritéria: nízkou finanční náročnost, rozsáhlou paletu podporovaných formátů pro ukládání dat, a možnost napojení do Národního katalogu otevřených dat (i když tady je situace složitější, jak bude textu ještě zmíněno). V neposlední řadě byl CKAN zvolen také proto, že jde o velice široce využívanou platformu, a to jak v českém prostředí, tak i v zahraničí. Využívají jej například město [Glasgow][GLASGOW] nebo [kanadská vláda][KANADSKA]. V českém prostředí pak zase města jako je [Plzeň][PLZEN], [Olomouc][OLOMOUC] nebo [Hradec Králové][HRADEC].

{% include image.html url="../attachments/články/výběr-katalogizačního-systému-pro-město-Brno/obrázky/tabulka.webp" description="Obr. č.1: Srovnání krajských měst ČR" %}

Pro detailní představu dodáváme, že architektura CKANu je modulární, což umožňuje vlastní vývoj pro další rozšíření a úpravy celého systému. Systém CKAN je tvořen Pythonem na backendu a Javascriptem na frontendu. Pro objektově relační mapování využívá Pylons web framework a SQLAlchemy. Databáze je v PostgreSQL a vyhledávání využívá technologii Apache Solr. I navzdory této a dalším už výše uvedeným výhodám se však po určité době ukázalo, že CKAN není pro Brno zcela nejvhodnějším řešením, a to z následujících důvodů.

Původní požadavky na systém nebyly ani zdaleka konečné a bez dalších rozsáhlých upgradů CKANu by další provoz nedával smysl. Mezi novými požadavky se například objevila potřeba exportů dat v rozličných formátech. Základní verze CKANu umožňuje export jenom ve formátech, ve kterých byla data nahrána. Další požadavek, který se časem objevil, se týkal rozhraní API, jež by mělo pro udržované datasety zajišťovat tok dat (feed). Také dodáváme, že většinu kontinuálně aktualizovaných a udržovaných dat si město Brno vede ve formě služeb umožňujících sdílení primárně geografických informací. Pro tyto datové sady však nebylo možné v CKANu zajistit rozhraní, které by umožňovalo jednoduché napojení těchto dat do jiných aplikací a systémů. Stažení filtrovaných dat, náhled do atributů před samotným stažením nebo publikace senzorických dat patřily mezi další nové požadavky na funkční správu otevřených dat. Dále se ukázalo, že CKAN není vhodný pro napojení na [Národní katalog otevřených dat][NKOD] (NKOD), přičemž registrace v NKOD je zákonnou podmínkou pro poskytování otevřených dat. CKAN totiž nepodporuje [Otevřenou formální normu][OFN] (OFN) rozhraní katalogů otevřených dat, která je založena na evropském standardu pro interoperabilitu mezi datovými katalogy (DCAT-AP), na němž staví právě NKOD

CKAN také nabízí jenom velmi osekanou základní webovou nadstavbu, a proto bylo původně nutné vybudovat si nad tímto katalogem vlastní web. Časem se ukázalo, že správa těchto dvou systémů je náročnější, než se na začátku předpokládalo. S každou změnou CKANu bylo nutné tuto změnu reflektovat také na webu - každá úprava se tak musela dělat dvakrát, což prodražovalo a zpomalovalo práce spojené se správou a publikací otevřených dat. Typickým příkladem bylo přidání možnosti přiřazení dat k tematické kategorii. Nejdříve bylo nutné upravit CKAN tak, aby data mohla být přiřazena ke kategorii a následně byl upraven také web, aby uživatelé mohli data dle kategorie filtrovat. Dva rozliční dodavatelé tyto práce řešili víc jak měsíc a celkově vyšly náklady na téměř 50 tis. Kč.

{% include image.html url="../attachments/články/výběr-katalogizačního-systému-pro-město-Brno/obrázky/plzeň.webp" description="Obr. č.2: Výchozí vizuál webové nadstavby CKAN" %}

Zhruba po roce provozu CKANu, tak bylo nutné vypořádat se těmito požadavky a nedostatky. Nabízely se tři základní scénáře vývoje:
1. Upgrade a customizace stávajícího CKANu.
2. Postavení vlastního systému splňujícího všechny požadavky.
3. Výběr jiného katalogizačního systému.

S ohledem na omezené finanční možnosti města Brna, byly první dvě možnosti vyřazeny. Vybudování si vlastního systému nebo provedení rozsáhlé customizace CKANu a také následná údržba by vyžadovaly značné finanční náklady v řádu milionů korun. Jako jediná schůdná cesta se proto ukázal výběr nového katalogizačního systému, který by splňoval všechny nebo alespoň velkou část nároků a zároveň by byl finančně relativně málo náročný. Po delší době, kdy bylo zvažováno několik jiných řešení jako například [Entryscape][ENTRYSCAPE], [DataPress][DATAPRESS] nebo [Data.World][DATAWORLD], byl jako náhrada za CKAN vybrán [ArcGIS HUB][ARCGISHUB] (dále jenom HUB). Výběr HUBu řešil podstatnou většinu problémů a požadavků při dodržení minimální finanční zátěže.

Pro prostorové datové sady ve formě služeb, je v HUBu prostřednictvím REST API automaticky generován JSON feed a 5 dodatečních formátů - KML, CSV, Shapefile, File Geodatabase a GeoJSON. To umožňuje jak pohodlné stažení dat do požadovaného formátu, tak přímé napojení dat do aplikací. Je však třeba poznamenat že tyto výhody HUB přináší jen těm organizacím, které mají podstatnou část svých prostorových dat ve službách. Generování JSON feedu je omezeno na prostorová data a tabulární data. Datasety je také možné filtrovat a až následně si je stáhnout nebo se na ně napojit. Je umožněn i náhled na data, kdy je možné prohlížet si jejich strukturu. Prostorová data se navíc rovnou zobrazí i s atributy v mapě, a poskytnou tak svým uživatelům ucelenější pohled na problematiku. Samotný HUB má i API, což umožňuje automatizovanou registraci dat do katalogu. Přímé napojení HUBu na městský server pro zpracování senzorických dat zase vyřešilo požadavky města na publikaci senzorických dat. Na datovém portálu města [data.brno.cz][DATABRNO] tak uživatelé ihned od spuštění mohou najít [data například z aplikace Waze][WAZE], která sem proudí v 2 minutových intervalech. V příštím roce je naplánováno napojení dalších senzorických dat, jako jsou například polohy vozidel MHD nebo live počty cyklistů na stezkách.

Další nezanedbatelnou výhodou je, že HUB umožňuje postavit nad katalogem pokročilou webovou nadstavbu bez potřeby jakýchkoliv IT zručností. Web je tvořen pomocí série nástrojů založených na principu “what you see is what you get” (WYSIWYG), což umožňuje nejen jeho rychlé a jednoduché sestavení, ale i jeho správu.

V neposlední řadě, finanční nároky na HUB jsou ze strany města Brna při zohlednění pokročilosti katalogu jen minimální. HUB je totiž poskytován v rozsáhlém balíčku s mnoha jinými nástroji v rámci celopodnikové licence, kterou si Brno platí. Pravidelné aktualizace, upgrady a odstraňování bugů nejen pro Brno ale také pro uživatele z celého světa se provádí v týdenních intervalech. Odpadá tedy potřeba vynakládání jakýchkoliv dodatečných finančních prostředků na údržbu a upgrady systému ze strany města. Pro samosprávy, které takovýto balíček nemají zakoupen, může být naopak samostatné zakoupení ArcGIS HUB relativně drahým řešením.

{% include image.html url="../attachments/články/výběr-katalogizačního-systému-pro-město-Brno/obrázky/silnice.webp" description="Obr. č.3: Detail datové sady v HUBu" %}

Tak jako každé jiné řešení ani ArcGIS HUB není dokonalý a má své nevýhody. Například problémy s dvojjazyčností musely být řešeny samostatným webem s vlastní URL. HUB také neumí zpracovat některé neprostorové formáty jako například formát generovaný programem SPSS (Statistical Package for the Social Sciences) nebo formát XML. Problémy se také vyskytly při komunikaci s Národním katalogem otevřených dat (NKOD), kdy HUB stejně jako CKAN nepodporuje [OFN rozhraní katalogů otevřených dat][OFN]. Katalogizačních systémů existuje celá řada a každý z nich posílá informace o svém obsahu v jiném formátu. Pro zajištění kompatibility mezi nimi byl proto vytvořen standard DCAT-AP, ze kterého OFN rozhraní katalogů otevřených dat vychází. Vzhledem k různým specifikům, jako jsou v českém prostředí například rozdílné požadavky na podmínky užití datové sady, však není možné očekávat, že zahraniční katalogizační systémy budou automaticky kompatibilní s katalogy vyšší úrovně, jako je například NKOD. Proto je vždy  třeba počítat s prostředky na úpravu rozhraní libovolného řešení dle OFN a s prostředky na rozvoj tohoto rozhraní, které je cca jednou ročně aktualizováno dle vývoje standardů DCAT a DCAT-AP. HUB například využívá [amerického][AMERICKEHO] rozšíření standardu DCAT. Před spuštěním HUBu bylo proto nutné naprogramovat aplikaci, která zajistí kompatibilitu mezi ním a NKODem. Aplikace je napsaná v pythonu a v principu funguje tak, že vždy, když NKOD pošle do HUBu dotaz na metadata, aplikace vezme výchozí DCAT HUBu, přetransformuje jej do [podoby, kterou požaduje NKOD][OFN], a pošle mu ji. Pro případné zájemce je volně dostupný zdrojový kód k dalšímu použití [v repozitáři na GitHubu][GITHUB].

Co dodat na závěr? Výběr vhodného katalogizačního systému je náročnou disciplínou. Častokrát je těžké si správně vybrat bez předešlých zkušeností a detailní znalosti problematiky  Někdy se stane, že si samospráva (jako například v případě Brna) napoprvé nevybere pro svoje potřeby nejvhodnější technologii. Tímto samozřejmě netvrdíme, že CKAN nebo jiný systém je horší než systém HUB. Při výběru je totižto nutné vzít v potaz technologická, personální nebo finanční specifika každého města a ta pak určují, jaký systém je nejvhodnější. ArcGIS HUB například určitě není vhodným řešením pro organizace, které nemají podstatnou část svých dat ve službách nebo geodatabázích postavených nad architekturou od ESRI.

Pro Brno však bylo toto řešení nejlepší z možných, neboť funkcionality a pokročilé technologické řešení popsané výše umožňují poskytovat odborné veřejnosti otevřená data bez nutnosti vynaložení velkých finančních prostředků. Kromě Brna, jako jediného většího města v ČR, využívá v současnosti ArcGIS HUB pro publikaci open dat ještě [Agentura ochrany přírody a krajiny][AOPK]. V zahraničí je užívání ArcGIS HUBu mnohem rozšířenější - využívají jej například města jako [Sydney][SYDNEY], [Washington D.C.][WASHINGTON] nebo [Pařížská metropolitní oblast][PARIS]. 

Pokud Vás zajímá problematika správy otevřených dat v kontextu města Brna ještě podrobněji, neváhejte se na Brno obrátit se svým dotazem, a to na e-mail [data@brno.cz][MAILTO].

[PRHCKN]: https://https://opendata.praha.eu/ "Katalogizační systém CKAN"
[GOLEMIO]: https://golemio.cz/ "Portál otevřených dat Golemio"
[GEOPORTAL]: https://https://www.geoportalpraha.cz/cs/data/otevrena-data/seznam "Geoportál hl. města Prahy"
[OSTRAVU]: https://opendata.ostrava.cz/ "Portál otevřených dat města Ostravy"
[PLZEN]: https://opendata.plzen.eu/ "Portál otevřených dat města Plzeň"
[CKAN]: https://ckan.org/ "Katalogizační systém CKAN"
[GLASGOW]: http://data.glasgow.gov.uk/dataset?q= "Portál otevřených dat města Glasgow"
[KANADSKA]: https://open.canada.ca/en/open-data "Portál otevřených dat kanadské vlády"
[OLOMOUC]: https://data.olomouc.eu/ "Portál otevřených dat Olomouc"
[HRADEC]: http://opendata.mmhk.cz/ "Portál otevřených dat města Hradec Králové"
[NKOD]: https://data.gov.cz/datové-sady?dotaz= "Národní katalog otevřených dat"
[OFN]: https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/draft/ "Otevřená formální norma Rozhraní katalogů otevřených dat"
[ENTRYSCAPE]: https://entryscape.com/en/ "Katalogizační systém Entryscape"
[DATAPRESS]: https://datapress.com/ "Katalogizační systém DataPress"
[DATAWORLD]: https://data.world/ "Katalogizační systém Data.World"
[ARCGISHUB]: https://www.esri.com/en-us/arcgis/products/arcgis-hub/overview "ArcGIS HUB"
[DATABRNO]: https://data.brno.cz/ "Portál otevřených dat města Brna"
[WAZE]: https://data.brno.cz/search?collection=Dataset&q=waze "Otevřená data z aplikace WAZE za město Brno"
[AMERICKEHO]: https://project-open-data.cio.gov/v1.1/schema/ "Americký standard DCAT"
[GITHUB]: https://github.com/opendatabrno/HUBtoNKOD "Repozitář datového odělení města Brna na GitHubu"
[AOPK]: https://gis-aopkcr.opendata.arcgis.com/ "Agentura ochrany přírody a krajiny"
[SYDNEY]: https://data.cityofsydney.nsw.gov.au/ "Portál otevřených dat města Sydney"
[WASHINGTON]: https://opendata.dc.gov/ "Portál otevřených dat města Washington D.C."
[PARIS]: https://data-iau-idf.opendata.arcgis.com/ "Portál otevřených dat Pařížské metropolitní oblasti"
[MAILTO]: data@brno.cz "Kontaktní email protálu otevřených dat Brna"