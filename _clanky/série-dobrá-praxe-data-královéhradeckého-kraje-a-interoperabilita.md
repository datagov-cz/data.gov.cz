---
layout: post
detail: true
title: "Série Dobrá praxe: Data Královéhradeckého kraje a interoperabilita"
ref: série-dobrá-praxe-data-královéhradeckého-kraje-a-interoperabilita
lang: cs
image: ../přílohy/články/série-dobrá-praxe-data-královéhradeckého-kraje-a-interoperabilita/KHK_Portál.webp
author: lenka_kováčová
date: 2022-03-11 02:00:00 +01:00
---
Otevřená data Královéhradeckého kraje se díky téměř čtyřleté historii publikování postupně vyvinula do podoby, jakou mají nyní na [datovém portálu Data KHK][Data KHK].
Díky jejich sjednocení došlo k posílení jejich interoperability nejen pro potřeby veřejnosti, ale i pro potřeby [NKOD][NKOD].
Královéhradecký kraj se díky tomu stal lídrem v oblasti poskytování otevřených dat mezi kraji v ČR a zároveň pro ně i inspirací. 
Tento článek ukazuje naši cestu.

<!--more-->

{% include image.html url="../přílohy/články/série-dobrá-praxe-data-královéhradeckého-kraje-a-interoperabilita/KHK_Portál.webp" description="" %}

## Interoperabilita dat
Interoperabilita dat neboli jejich vzájemná provázanost patří mezi nejdůležitější aspekty otevřených dat, bez kterých si nelze představit jejich další strojové zpracování.
Pro potřeby zajištění standardizace dat vznikla tzv. „Otevřená formální norma (OFN)“, což je legislativní nástroj pro stanovení technických doporučení.
Cílem OFN je, aby stejná data publikovaná různými poskytovateli byla technicky otevřená, a tudíž interoperabilní. 
Takto standardizovaná data navíc uživateli umožňují se lépe zorientovat v otevřených datových sadách a pochopit jejich vzájemnou propojenost.

## Poučení ze špatné praxe
Ve druhé polovině roku 2018 bylo na podnět Komise pro otevřenost Rady Královéhradeckého kraje otevřeno celkem 48 otevřených datových sad Královéhradeckého kraje.
Následně je kraj publikoval i v Národním katalogu otevřených dat (NKOD).
V této době byl portál Otevřená data v počátcích svého fungování a první technické standardy pro otevřená data, tzv. OFN, teprve zpracovávány.
Neexistovalo tedy vodítko, kterým bychom se mohli řídit. 
Úředníci krajského úřadu, kteří otevírání krajských dat měli na starost, se následně koncem roku 2018 obrátili na opendatový tým působící na odboru hlavního architekta egovernmentu Ministerstva vnitra ČR ke spolupráci.
Ten měl jednak obecné připomínky k otevřeným datům a webu a také k technickému provedení u konkrétních datových sad. Explicitně lze jmenovat tyto vybrané připomínky:

- neexistence samostatných www stránek pro jednotlivé sady
- nepřehledné popisky dat
- chybějící podmínky užití
- některé datové sady obsahovaly implicitní číselníky, jež nebyly samostatně publikovány
- špatné kódování CSV souborů (Windows-1250)
- nejednotné strukturování adres
- telefonní čísla uvedená ve formátu 123 456 789

## Normalizace otevřených dat Královéhradeckého kraje
Připomínky týmu národního koordinátora otevřených dat vzali pracovníci krajského úřadu na vědomí, avšak v blízké době došlo jen k dílčím úpravám.
V březnu 2019 pořádal Královéhradecký kraj hackathon nad jeho otevřenými daty. 
Zpětná vazba od účastníků hackathonu byla právě k interoperabilitě těchto otevřených datových sad, jejich nesourodé kvalitě a nejednotnosti výstupních formátů, částečně způsobené chybějícími specifickými požadavky na výstupy z jednotlivých odborů krajského úřadu.
Zásadní změna přišla s tvorbou nového krajského datového portálu Data KHK, který dal impuls k první komplexní aktualizaci otevřených datových sad kraje.
V rámci této aktualizace došlo k vyjmutí některých nevyhovujících sad, které nesplňovaly požadavky na otevřená data, a zejména k revizi dat.
Ta spočívala v časově náročné práci zahrnující aktualizaci všech ponechaných datových sad a jejich sjednocení. 
Konkrétně byly provedeny tyto úkoly:

- každé datově sadě byla přidána vlastní www stránka s popisem, atributovou tabulkou a metadaty
- všechna otevřená data Královéhradeckého kraje jsou publikována pod licencí CC0 (data externích subjektů budou publikována pod licencí CC BY 4.0)
- byly kompletně sjednoceny názvy atributových sloupců u všech datových sad
- každý záznam dostal vlastní unikátní ID, a to ve formátu akronym nebo zkratka sady a číslo, např. SOKHK1 v datové sadě Seznam organizací Královéhradeckého kraje
- kódování Windows-1250 v CSV souborech bylo nahrazeno UTF-8
- adresy byly upraveny dle [OFN u adres][OFN Adresy]
- k názvům obcí, správních obvodů ORP a okresů byly doplněny kódy z Registru územní identifikace, adres a nemovitostí (RÚIAN) ve formě IRI
- telefonní čísla byla dle doporučení upravena na formát +420123456789
- vzáznamech se již nenacházejí hodnoty „null“, prázdná hodnota je nyní skutečně prázdná
- souřadnice byly upraveny dle [OFN u prostorových dat][OFN Prostorová data], k bodovým objektům byla přidána reprezentace ve WKT ve formátu POINT(50.0000 15.0000), do metadat byl navíc doplněn EPSG kód použitého souřadnicového systému (buď 4326 u WGS84 nebo 5514 u S-JTSK / Krovak East North)

## Naše motivace
Jaká byla naše motivace, abychom se vydali výše uvedeným směrem?
Cílem našeho počínání bylo jednak udržení kroku s aktuálními trendy v oblasti otevřených dat, ale zejména snaha o co nejvyšší kvalitu poskytovaných otevřených dat. 
Dostali jsme několik zpětných vazeb na naše data, ty jsme reflektovali a data upravili do podoby, aby se s nimi dalo dobře pracovat.
Za největší počin považujeme právě ono sjednocení, které má velký potenciál k propojení našich dat i dat v NKOD.
Velmi nám pomohlo i aplikační rozhraní Katalogu otevřených dat Královéhradeckého kraje, které umožňuje běžným uživatelům unikátní pohled na otevřené datové sady, aniž by uživatel musel cokoliv stahovat a otevírat. 

## Shrnutí
Tímto článkem bychom chtěli vyzvat uživatele portálu Data KHK k tomu, aby si vyzkoušeli práci s Katalogem otevřených dat Královéhradeckého kraje a použili je ve svých vlastních projektech, např. pro zpracování analytických prací či jako podkladové vrstvy v mapových aplikacích. 
Současné otevřené sady kraje, včetně jejich kompatibility s daty v NKOD, budou otestovány studenty středních a vysokých škol v rámci připravovaného hackathonu nad otevřenými daty, který se uskuteční 13. října 2022 na půdě Univerzity Hradec Králové.

#### Autor
Mgr. Tomáš Merta, Královéhradecký kraj a Centrum investic, rozvoje a inovací, člen realizačního týmu [datového portálu Data KHK][Data KHK]

{% include image.html url="../přílohy/články/série-dobrá-praxe-data-královéhradeckého-kraje-a-interoperabilita/Data_KHK_logo.webp" description="" %}
{% include image.html url="../přílohy/články/série-dobrá-praxe-data-královéhradeckého-kraje-a-interoperabilita/KHK_Chytrý_region.webp" description="" %}

[Data KHK]: https://www.datakhk.cz/ "Data KHK"
[NKOD]: https://data.gov.cz/datové-sady "NKOD"
[OFN Adresy]: https://ofn.gov.cz/adresy/2020-07-01/ "OFN Adresy"
[OFN Prostorová data]: https://ofn.gov.cz/prostorová-data/2019-08-22/ "OFN Prostorová data"
