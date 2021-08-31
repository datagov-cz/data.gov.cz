---
layout: post
title: Dopravní data z navigace Waze - jak je získat a jak s nimi pracovat?
detail: true
ref: data-waze-2021
lang: cs
image: ../attachments/články/data-waze-2021/4-srovnanimest.webp
author: martin_dvořák
date: 2021-08-31 07:00:00 +01:00
---
Dopravní data jsou základním předpokladem pro efektivní plánování dopravy. Pro ucelený přehled o dopravní situaci je vždy dobré spojit více datových zdrojů, jako jsou například dopravní nehody, data z [Národního dopravního informačního systému NDIC][link_NDIC], data ze [Sčítání dopravy][link_sčítání] či v poslední době stále více populárnější data z dopravní navigace Waze. Jak a kde poslední zmíněná data získat, co nabízí a jak je využít v plánování dopravy, si ukážeme v tomto článku. 
<!--more-->

Waze je navigační software pro mobilní telefony a tablety vyvinutý izraelskou skupinou Waze Mobile a je poskytován zdarma pod licencí GNU General Public License. Společnost Waze patří od roku 2013 pod Google. Základní odlišností od komerčních produktů je tvorba mapových podkladů samotnými uživateli, stejně jako aktivní přispívání k situaci na silnicích, kdy systém Waze automaticky sbírá data o hustotě provozu a zároveň umožňuje uživatelům aktivně hlásit komplikace v dopravě. Díky široké uživatelské základně a komunitě nadšenců obsahuje systém Waze nově vznikající silnice a informace o uzavírkách na stávajících silnicích často od prvního dne vzniku, čímž překonává řadu placených navigačních systémů. 

## Jak získat data z Waze? 
Na tuto otázku existuje více odpovědí, zejména v závislosti na tom, k čemu data potřebujete.  Základní statistické přehledy poskytuje společnost Waze na stránkách [Waze Stats][link_stats]. Při rozkliknutí záložky “CZ” pak dostaneme informace o počtech aktivních uživatelů Waze pro dané místo (město, region) v daném čase. Pro přehled o vývoji dopravy ve městě se to může jevit jako dostatečná informace, která může obohatit některé z dopravních analýz. 

{% include image.html url="../attachments/články/data-waze-2021/1-wazestats.webp" description="Týdenní maxima počtu uživatelů Waze v Brně" %}

Waze však poskytuje i živá data, jež jsou určena pro územní samosprávy, a která Waze poskytuje v rámci projektu ´Waze for Cities Data´ (dále WfC), dříve ´Connected Citizens Programme´. Data z WfC jsou dostupná po registraci - uživatelům však poté nabízí mnohem širší spektrum atributů pro další analýzy, navíc se při zvolení tohoto přístupu otevírá i možnost katalogizace v lokálním katalogu (LKOD, viz dále v článku). 

### Waze for Cities Data
WfC je program pro sdílení dat, který byl společností Waze nabídnut municipalitám, aby mohly data využít pro zlepšení dopravní situace na svém území. Waze byl v tomto ohledu průkopníkem ve sdílení svých dat s veřejnou správou. V roce 2019 došlo k integraci dat Waze s Google Cloud a uživatelé tak mohou využít nástroje integrované v této platformě. Jaké kroky je tedy nutné podniknout?
* [registrace do programu Waze for Cities][link_registrace] - jedná se o klasické kontaktní údaje: název instituce, typ instituce (obec, stát, univerzita, apod.), následně vyberete požadovaná data, která chcete sdílet/sbírat (uzavírky, nehody, ...)
* následně vyberete území, pro které chcete zpracovávat data (polygonový výběr - nutno “vyklikat” v mapě)
* odešlete přihlášku a čekáte na na potvrzení (cca do týdne) 

{% include image.html url="../attachments/články/data-waze-2021/2-vyberoblasti.webp" description="Polygonový výběr oblasti" %}

Po potvrzení ze strany společnosti Waze se vám zpřístupní “Waze partner portal”, ze kterého můžete čerpat data. Ta je možné odebírat v zásadě dvěma způsoby: 
* prostřednictvím Google Data Studia, kde se nachází již zpracovaná data v podobě dashboardů 
* prostřednictvím feedu dat přímo od uživatelů Waze, kteří vysílají data o průběhu své cesty a případně nahlašují další události na cestách (nehody, uzavírky, ..) - tato data jsou k dispozici ve formátu JSON a XML

### Waze Data z Google Data Studio
Ve vyhledávači Google zadáme “Google data studio” a po užití stejných přihlašovacích údajů, kterými jsme se registrovali do programu WfC, se přihlásíme do Data studia. V adresáři se nám hned po otevření objeví dva dashboardy, které máme k dispozici, a sice “Waze for Cities Data | Key Alerts Dashboard” a “Waze Covid-19 Impact | Waze for Cities Dashboard”. 

Zvolíme základní přehled “Key Alerts Dashboard”, který obsahuje 3 jednotlivé reporty: události hlášené uživateli (alerts), dopravní nehody (accidents) a tzv. nepravidelnosti (irregularities), které vyjadřují odchýlení od běžného stavu - v tomto případě to znamená zpoždění, ke kterému dochází oproti plynulému provozu. Všechna data se načítají od uživatelů Waze, kteří projíždí vybraným územím, jež jsme odesílali v přihlášce. Obrázek níže popisuje události (alerty) podle typu (zácpy, nehody, uzavírky či nebezpečné meteorologické podmínky). Veškeré atributy vychází z [číselníku Waze for Cities Data - Data Dictionary for Alerts, Jams, and Irregularities][link_číselník]. Díky těmto předpřipraveným dashboardům tak máme základní přehled např. o problémových ulicích, kde dochází k největším zpožděním či kde dochází k největší nehodovosti, a to v libovolném časovém úseku (od doby registrace do programu WfC). 

{% include image.html url="../attachments/články/data-waze-2021/3-ciselnik.webp" description="Typy událostí v jednotlivých dnech" %}

Nevýhodou těchto dashboardů je absence mapových podkladů pro prostorovou vizualizaci dat (dají se však napojit např. použitím ´Big query Geoviz´). Je však k dispozici filtr, který v několika atributech umožňuje průzkum dat až do detailu konkrétní ulice a v libovolném čase. Data se rovněž dají z jednotlivých grafů stáhnout do formátu csv nebo nahrát do tabulek Google. 

Covidový dashboard poté ilustruje, jak se proměnila mobilita, respektive automobilová doprava ve městech či státech. Dashboard ukazuje změnu naježděných kilometrů vztažených ke dvěma únorovým týdnům roku 2020, kdy chování obyvatel nebylo Covidem-19 ovlivněno. Níže na obrázku vidíte dashboard srovnávající mobilitu v Praze, Brně a Bratislavě od března 2020 do března 2021. Únorové hodnoty se tedy pohybují v “nulovém” pásmu. Posléze hodnoty začínají variovat podle toho, kdy přišla jaká omezení pohybu. Nejvyšší nárůst automobilové mobility tak nastal v létě, kdy panovala politika rozvolnění. Na podzim a po Novém roce pak došlo opětovně k omezení mobility. Na základě těchto dat se dá rovněž konstatovat, že v Bratislavě byl pokles mobility vůči únorovým datům vyšší, než-li v Praze a Brně. 

{% include image.html url="../attachments/články/data-waze-2021/4-srovnanimest.webp" description="Mobilita ve vybraných městech" %}

### Živá data Waze
Jak již bylo řečeno, registrací do programu WfC může získat veřejná správa přístup k živým datům v podobě fomátů JSON či XML. Data z Waze feedu se přepisují každé 2 minuty, proto je důležité data ukládat do databáze, aby bylo možné analyzovat i historická data. Data, která si takto ukládáme a případně i zpracováváme, lze posléze katalogizovat v lokálním, potažmo [Národním katalogu otevřených dat (NKOD)][link_NKOD], a to ve standardech otevřených dat se všemi náležitostmi. Doposud jsou v NKOD dvě datové sady, které zde publikoval brněnský magistrát, a sice Plynulost dopravy a Události na cestách. Tyto datové sady jsou zpracovány skrz [GeoEvent server][link_geoevent] - server pro zpracování senzorických dat, včetně jejich ukládání a publikace, pro který má Waze [speciální konektor][link_konektor] včetně návodu. Výsledkem jsou datové sady katalogizované na [datovém portálu města Brna][link_databrno]. Další možností zpracování, analýzy a vizualizace waze dat nabízí například nástroj [Waze Analytics Relational-database Platform][link_wazeanalytics], jehož instalace je popsána na GitHubu. 

{% include image.html url="../attachments/články/data-waze-2021/5-databrno.webp" description="Waze datasety v LKOD data.Brno" %}

## Závěrem
Zapojením se do programu WfC se otevírá městům celá řada zajímavých možností, jak z tohoto členství benefitovat. Vyjma analýzy dat prostřednictvím Google Data Studia mohou obce či další veřejné instituce začlenit real-time (near real-time) data do svých lokálních katalogů a publikovat tak otevřená data s pravidelnou aktualizací (minutovou, hodinovou, denní, ...). Bez samotného využívání dat pak může město prostřednictvím zapojení do programu WfC například informovat občany o poloze vozidel svážejících odpad, jež dokáží dopravu zejména v úzkých ulicích značně komplikovat. Waze je tedy jednoznačně příkladem dobré praxe sdílení dat soukromého subjektu se zástupci veřejné správy, se kterými pak mohou i další uživatelé dále pracovat a využívat. 

## Použité nástroje a zdroje
- [Google Data Studio][link_googledata] - Google Data Studio
- [Waze Stats][link_stats] - Statistiky Waze pro města

[link_NDIC]: https://portal.dopravniinfo.cz/informacni-a-ridici-centra-dopravy/narodni-dopravni-informacni-centrum "Národní dopravní informační centrum"
[link_sčítání]: http://scitani2016.rsd.cz/pages/informations/default.aspx "Výsledky sčítání dopravy 2016"
[link_stats]: http://wazestats.com/ "Statistiky Waze pro města"
[link_registrace]: https://partnerdash.google.com/waze/start?pli=1#p=start&program=CCP "Registrace do programu Waze for Cities"
[link_číselník]: https://docs.google.com/spreadsheets/d/1DcUZlaM-H2Dqj2pjJ2o4NeJo70Ej9RKLXaezw6Fy6uQ/edit#gid=580809060 "Číselník pro data z Waze for Cities"
[link_NKOD]: https://data.gov.cz/ "Národní katalog otevřených dat"
[link_geoevent]: https://enterprise.arcgis.com/en/geoevent/latest/get-started/what-is-arcgis-geoevent-server.htm "Geoevent server pro zpracování senzorických dat"
[link_konektor]: https://www.arcgis.com/home/item.html?id=db18d2068d1d410595b841c3df38c280 "Konektor pro zpracování Waze dat"
[link_databrno]: https://data.brno.cz/ "Datový portál města Brna"
[link_wazeanalytics]: https://github.com/LouisvilleMetro/WazeCCPProcessor "Open source data procesor pro zpracování Wate dat"
[link_googledata]: https://datastudio.google.com/u/0/ "Google Data Studio"