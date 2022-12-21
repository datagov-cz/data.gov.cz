---
layout: post
detail: true
title: "Otevřená data a otevřené formální normy"
ref: otevrene-formalni-normy-01-uvod
lang: cs
author: jakub_klímek
date: 2020-10-02 06:00:00 +02:00
---

Pro mnoho veřejných institucí se poskytování otevřených dat stalo běžným způsobem sdílení informací s veřejností.
S rostoucím počtem poskytovatelů otevřených dat a s různorodostí dat, která jsou takto poskytována, se ukazuje, že nutným předpokladem použitelnosti dat je sjednocování jejich podoby.
Na to pamatuje i legislativa, která v zákoně 106/1999 Sb. o svobodném přístupu k informacím zavádí pojem [otevřené formální normy (OFN)][ofn-def] jako písemně vydanou specifikaci požadavků na zajištění schopnosti různých programových vybavení vzájemně si poskytovat služby a efektivně spolupracovat.

V tomto článku pojem otevřené formální normy rozvedeme.
Ukážeme, proč jsou OFN v praxi důležité na příkladu cestování po ČR a popíšeme, jak k OFN přistupuje Ministerstvo vnitra jako koordinátor oblasti otevřených dat veřejné správy v ČR.
<!--more-->

## Motivace

Průzkum iniciativy Zachraňme turismus „Dovolená v Česku 2020“ zjistil, že dovolenou v Česku plánuje 9 z 10 občanů, že nejoblíbenější formou dovolené jsou poznávací výlety, a že při jejím výběru je pro 83 % dotázaných rozhodující lokalita, stravování a možnosti provozování dalších aktivit, tedy turistické cíle.
Obce by rády návštěvníky přivítaly ve svých zařízeních a turistických lokalitách.
K tomu ale musí potenciální návštěvníky co nejlépe informovat a zajistit, aby se o zajímavých místech dozvěděli.
Turisté získávají informace o tom, co je kde zajímavého, z portálů, jako např. [Mapy.cz][mapy-cz], [Mapy Google][google-maps], [Kudy z nudy][kudy-z-nudy], [Tip na výlet][tip-na-výlet], atd.
Stávající praxe naplňování těchto portálů je bohužel taková, že každý portál používá jinou podobu zveřejňovaných informací.
Obce tak musí turistické cíle zaznamenávat ručně na každý portál zvlášť, což bývá pro ně často velmi pracné.
Praktickým řešením tohoto problému je publikace dat o turistických cílech v podobě otevřených dat.
Obce mohou snížit své náklady na šíření informací tím, že svá otevřená data budou katalogizovat v Národním katalogu otevřených dat (NKOD).
Ten provozovatelům portálů umožní snadno (automatizovaně) zjistit, jaké obce otevřená data o turistických cílech poskytují.
NKOD obsahuje též informaci, jak k datům přistoupit a strojově je konzumovat. Publikovaná data tedy mohou provozovatelé jednotlivých portálů přebírat, aniž by obce musely připravovat a dodávat data jednotlivým portálům.
Aby bylo sdílení informací pro obce i poskytovatele portálů možné, je nutná jednotnost i v samotné publikaci otevřených dat.
Bez jednotné definice požadavků na podobu (strukturu, sémantiku, granularitu, atd.) poskytovaných dat o turistických cílech by každá obec publikovala data ve své vlastní podobě. Provozovatel služby, který by mohl data využít, by tak musel pro každou obec zpracovávat data speciálním způsobem, což by bylo pro většinu zpracovatelů dat drahé a neudržitelné.

Řešení je jednoduché a spočívá v tom, že všichni poskytovatelé dat o turistických cílech (např. všechny obce) poskytnou data v jednotné, předem dohodnuté podobě.
K jejímu zajištění jsou určeny právě OFN, které specifikují strukturu publikovaných informací, jejich význam a vazby na jiné (publikované) související informace.
Součástí OFN jsou také předepsané informace nutné k registraci do NKOD sloužící k dohledání publikovaných dat.
Takovým sjednocením bude zajištěno, že obce budou s minimálními náklady a jednoduchým způsobem poskytovat data různým zpracovatelům, kteří informace o zajímavých turistických cílech dostanou k široké veřejnosti prostřednictvím jimi provozovaných služeb (webových portálů, mobilních aplikací, navigačních systémů v automobilech, atd.).

Tento přístup není omezen pouze na turistické cíle, ale je vhodný pro jakákoliv data určená veřejnosti a je plně v duchu [definice OFN v zákoně 106/1999 Sb.][ofn-def], která hovoří o OFN jako o nástroji pro zajištění schopnosti vzájemně si poskytovat služby a efektivně spolupracovat.

{% include image.html 
   url="../přílohy/články/otevřené-formální-normy-01-úvod/přehled.svg"
   description="Obrázek 1 – Národní katalog otevřených dat a OFN propojují poskytovatele a zpracovatele dat a minimalizují jejich náklady"
%}

## Přístup Ministerstva vnitra k OFN a možnost účasti na jejich tvorbě

Teoreticky můžeme jako OFN chápat každou písemně vydanou specifikaci, kterou může vydat jak MV ČR, tak i jiný subjekt.
Při zveřejnění velkého množství různých specifikací by se v nich poskytovatelé otevřených dat vyznali jen obtížně.
Proto z komunikace MV ČR se zástupci několika obcí vzešel jasný požadavek, aby MV ČR koordinovalo tvorbu a doporučování OFN a sjednotilo jejich podobu napříč různými doménami, od turistických míst, přes sportoviště a pořádané akce až po aktuality nebo úřední desky.
Obce požadují jednoduché a návodné řešení, které pro daný typ dat (např. turistická místa) stanoví jasné doporučení podoby dat, ve které mají být poskytována.

V reakci na tento požadavek MV ČR vytvořilo na [Portálu otevřených dat (POD)][pod] [sekci věnovanou OFN][ofn] a stanovilo podobu OFN doporučovaných MV ČR.
Jako další krok byl vytvořen návrh čtyř OFN: [Turistické cíle][turistické-cíle], [Sportoviště][sportoviště], [Události][události] a [Aktuality][aktuality].
Návrhy byly připomínkovány obcemi a po zapracování připomínek je MV ČR vydalo jako první OFN v rámci koordinace prostředí otevřených dat v ČR.
V současné době pracuje několik obcí na přípravě publikace dat dle těchto OFN.

## Co obsahuje otevřená formální norma

Vydané OFN mají jednotnou formu, kterou bude MV ČR aplikovat i u všech dalších vydávaných OFN.
Každá OFN začíná popisem důležitých pojmů pro danou datovou sadu, čímž sjednocuje to, jak data chápeme.
Pro turistické cíle je to jistě samotný pojem Turistický cíl a jeho vlastnosti, jako kapacita či veřejná přístupnost.
Dále to jsou pojmy jako např. Umístění turistického cíle či Vstupné.
Zde využíváme standardní prostředek softwarového inženýrství zvaný konceptuální modelování.
Důležité pojmy jsou znázorněny v podobě konceptuálního schématu, který pojmy modeluje jako třídy, jejich vlastnosti a vztahy mezi nimi.
Také je graficky znázorňuje.
Tímto způsobem je sjednocena základní sémantika dat.

{% include image.html 
   url="../přílohy/články/otevřené-formální-normy-01-úvod/turistický-cíl.svg"
   description="Obrázek 2 – Konceptuální model Otevřené formální normy Turistické cíle"
%}

Důležitou vlastností OFN je, že třídy, které se vyskytují ve více různých OFN, např. Kontakt, Vstupné či Umístění, jsou specifikovány na jednom místě, v tzv. [sdílených specifikacích][sdílené-specifikace].
To zajistí, že např. vstupné na festival (událost) bude reprezentováno stejně, jako vstupné na hrad či zámek (turistický cíl), což usnadní zpracování dat dle různých OFN.
Dále využití těchto sdílených specifikací umožňuje publikovat data, pro která ještě OFN neexistuje, alespoň podobným způsobem.
V Obrázku 2 jsou třídy vyskytující se ve více různých OFN označeny šedým rámečkem.
Můžeme zde vidět i třídu Vstupné označenou šedým rámečkem.
To znamená, že třída Vstupné je specifikována ve sdílené specifikaci a v OFN pro turistické cíle je přepoužita, stejně jako v jiných OFN, které potřebují pracovat se vstupným.

Již existující pojmy lze dále specifikovat.
To je vidět na příkladu v Obrázku 2, kde vlastnosti, které má téměř každá třída, jako třeba identifikátor či název, jsou popsány ve třídě Věc.
Specifičtější třídy, jako např. Turistický cíl, pak specializují obecnější třídu Věc a tím získávají její vlastnosti.
Toto reprezentujeme vazbou s trojúhelníkovou šipkou na jednom konci.
Jedná se o běžný prostředek konceptuálního modelování zvaný generalizace (někdy také specializace nebo dědičnost).

{% include image.html 
   url="../přílohy/články/otevřené-formální-normy-01-úvod/aktualita.svg"
   description="Obrázek 3 – Konceptuální model Otevřené formální normy Aktuality"
%}

Dále OFN sjednocuje datový formát a konkrétní datové struktury.
V našem příkladu specifikuje, že turistické cíle mají být poskytovány ve formátu [JSON-LD][json-ld] a určuje konkrétní JSON strukturu pro reprezentaci turistických cílů a souvisejících pojmů dle konceptuálního schématu ve formě [JSON schématu][json-schema], které lze použít pro validaci dat.
Tím sjednocuje syntaxi a zajišťuje plnou syntaktickou interoperabilitu.

Použití formátu JSON-LD také sjednocuje sémantiku a zajišťuje plnou sémantickou interoperabilitu díky tomu, že formát JSON-LD je jedním z formátů datového modelu [RDF (Resource Description Framework)][rdf-primer], který sémantický popis umožňuje pomocí navázání jednotlivých položek na slovníky široce používané na Webu.
Příkladem takového slovníku může být [Schema.org][schema-org], kterému rozumí webové vyhledávače, které pak umožňují data lépe zobrazit v jejich výsledcích.

OFN také poskytuje vzorový katalogizační záznam do Národního katalogu otevřených dat tak, aby záznamy o datech turistických cílů jednotlivých poskytovatelů vypadaly stejně a bylo je možné stejným způsobem vyhledávat.

## Publikace otevřených dat dle otevřených formálních norem

Při poskytování informací podle zákona 106/1999 Sb. má formát [co nejvíce splňovat OFN][ofn-splňování].
To se týká i poskytování informací v podobě otevřených dat.
Aby byl maximalizován užitek otevřených dat, doporučuje MV ČR postupovat [dle vydávaných OFN][ofn].
Není ale samozřejmě možné a ani účelné vydat najednou OFN pro všechny typy dat ve všech doménách, ve kterých je možné otevřená data poskytovat.
OFN proto vznikají na základě poptávky poskytovatelů nebo konzumentů otevřených dat, kteří také dávají požadavky na jejich podobu.
Při publikaci dat dle OFN má tak poskytovatel jistotu, že formátuje svá data správně, jednotně s ostatními poskytovateli a očekávatelně pro zpracovatele.

{% include image.html 
   url="../přílohy/články/otevřené-formální-normy-01-úvod/sportoviště.svg"
   description="Obrázek 4 – Konceptuální model Otevřené formální normy Sportoviště"
%}

Pokud poskytovatel dat, např. obec, plánuje publikaci otevřených dat nějakého typu, např. o turistických cílech, zjistí na POD, zda pro taková data již OFN existuje.
Pokud ano, poskytne data tak, jak OFN definuje.
Může se stát, že nemůže publikovat všechny údaje popsané v OFN.
Potom poskytne pouze část, kterou publikovat může.
Jednotlivé části formátu popsaného v OFN jsou totiž nepovinné.
Musí ale počítat s tím, že přílišné omezení poskytovaných údajů datovou sadu znehodnotí.
Poskytovatel také může chtít publikovat data nad rámec toho, co je v OFN sjednocené.
Pak může datovou strukturu rozšířit za předpokladu, že tak učiní v souladu s existujícími sdílenými specifikacemi a že své rozšíření vhodně zdokumentuje formou webové stránky a strojově čitelných schémat tak, aby jeho rozšíření bylo snadno pochopitelné a validovatelné.
Struktura takové dokumentace je pak stejná, jako struktura OFN.

## Možnost účasti na tvorbě otevřených formálních norem

Tvorba a konzultace OFN probíhá na [platformě GitHub][ofn-gh], což je verzovací systém běžně používaný vývojáři softwaru a autory webových stránek.
OFN lze tedy jednak sledovat v celém průběhu její tvorby, a také lze její podobu aktivně ovlivnit.
To je možné buď formou diskuze o konkrétním problému (GitHub Issue), nebo přímo příspěvkem do kódu či textu (Pull Request). 
Stejným způsobem může libovolný poskytovatel požádat o tvorbu nové OFN, kterou ve spolupráci s MV ČR vytvoří.
Alternativně může publikovat datovou sadu i bez konzultace s MV ČR.
V takovém případě ale je nutné využívat sdílené specifikace, které již pro některé části dat existují stejně jako v případě publikace dat nad rámec již existující OFN.
I v tomto případě je nutné vzniklou datovou sadu řádně zdokumentovat tak, aby mohla sloužit alespoň jako základ pro budoucí OFN.

{% include image.html 
   url="../přílohy/články/otevřené-formální-normy-01-úvod/událost.svg"
   description="Obrázek 5 – Konceptuální model Otevřené formální normy Události"
%}

## Zpracování otevřených dat dle OFN

Zpracovatelé dat, jako například portály s informacemi o turistických cílech, mohou všechny datové sady odpovídající OFN najít strojově, automatizovaně a opakovaně pomocí API [Národního katalogu otevřených dat][pod].
Dohromady s jednotným formátem, který specifikuje OFN, je pak již snadné data od jednotlivých poskytovatelů pravidelně stahovat a zpracovávat.
MV ČR připravuje ukázkovou, open-source aplikaci, která tento proces a následné využití dat dle OFN názorně ukáže.

## Závěr

Otevřené formální normy (OFN) jsou specifikace syntaktické a sémantické podoby datových sad publikovaných jako otevřená data, které se řídí moderními webovými standardy.
Jejich využíváním benefitují jak poskytovatelé dat, kteří svá data musí publikovat pouze jednou, tak jejich zpracovatelé, kteří dostanou data od mnoha poskytovatelů ve stejné podobě, a tedy je nemusí složitě integrovat.
Ministerstvo vnitra publikovalo OFN pro 4 datové sady - [Turistické cíle][turistické-cíle] (Obrázek 2), [Aktuality][aktuality] (Obrázek 3), [Sportoviště][sportoviště] (Obrázek 4) a [Události][události] (Obrázek 5), a koordinuje tvorbu OFN i pro další datové oblasti.
Do tvorby OFN se může zapojit libovolný poskytovatel či zpracovatel dat pomocí [GitHubu][ofn-gh].
Více informací naleznete na [webu OFN][ofn].

[ofn-def]: https://www.zakonyprolidi.cz/cs/1999-106#p3a-3 "Definice Otevřené formální normy"
[ofn-splňování]: 	https://www.zakonyprolidi.cz/cs/1999-106#p4b-1 "Otevřená data mají splňovat OFN"
[ofn]: https://ofn.gov.cz "Otevřené formální normy"
[ofn-gh]: https://github.com/opendata-mvcr/otevrene-formalni-normy "Otevřené formální normy na GitHubu"
[mapy-cz]: https://mapy.cz "Mapy.cz"
[google-maps]: https://maps.google.com "Mapy Google"
[pod]: https://data.gov.cz "Portál otevřených dat"
[turistické-cíle]: https://ofn.gov.cz/turistické-cíle/2020-07-01/ "OFN Turistické cíle"
[události]: https://ofn.gov.cz/události/2020-07-01/ "OFN Události"
[aktuality]: https://ofn.gov.cz/aktuality/2020-07-01/ "OFN Aktuality"
[sportoviště]: https://ofn.gov.cz/sportoviště/2020-07-01/ "OFN Sportoviště"
[kudy-z-nudy]: https://www.kudyznudy.cz/ "Kudy z nudy"
[tip-na-výlet]: http://tipnavylet.cz/ "Tip na výlet"
[sdílené-specifikace]: /ofn/#sdílené-specifikace "Sdílené specifikace"
[schema-org]: http://schema.org "Schema.org"
[json-ld]: https://www.w3.org/TR/json-ld11/ "JSON-LD 1.1"
[json-schema]: https://json-schema.org/ "JSON Schema"
[rdf-primer]: https://www.w3.org/TR/rdf11-primer/ "RDF Primer"