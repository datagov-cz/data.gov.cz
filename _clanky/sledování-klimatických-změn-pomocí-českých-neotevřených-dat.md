---
layout: post
detail: true
title: "Sledování klimatických změn pomocí českých (neotevřených) meteorologických dat"
ref: sledování-klimatických-změn-pomocí-českých-neotevřených-dat
lang: cs
image: ../přílohy/články/sledování-klimatických-změn-pomocí-českých-neotevřených-dat/images/main.webp
author: michal_škop
date: 2022-08-16 07:00:00 +02:00
---
Požáry v Českosaském Švýcarsku opět důrazně připomněly potřebu sledovat jak změnu klimatu tak i aktuální počasí.

„_Pouze na základě podrobných informací o životním prostředí je veřejnost schopna poznat jeho stav, uvědomovat si v čase jeho proměny, přijmout odpovědnost za jeho kvalitu a činit kvalifikovaná rozhodnutí k jeho ochraně,_“ konstatoval [Městský soud v Praze v roce 2018 ve sporu o historická data o teplotách a srážkách][link_denik] mezi novinářem ČRo Janem Cibulkou a Českým hydrometeorologickým ústavem (ČHMÚ). Díky tomuto soudnímu rozhodnutí jsou alespoň základní data o počasí v ČR dnes dostupná zdarma.

<!--more-->
{% include image.html url="../přílohy/články/sledování-klimatických-změn-pomocí-českých-neotevřených-dat/images/main_480.webp" description="Lesní požár v Českosaském Švýcarsku v červenci 2022 s grafem teplot. Autoři Daniel Vičan & Michal Škop" %}

ČHMÚ, který je základní veřejnou institucí, která se v ČR zabývá měřením klimatických dat, je znám svým postojem proti otevírání dat veřejnosti (získaná data prodává). Není tedy divu, že v [Národním katalogu otevřených dat na dotaz teplota][link_nkod_teplota] žádná data od nich nezískáme, najdeme jen celoevropská data z programu Copernicus a lokální data z Bohumína a Brna. Je to rozdílný přístup oproti např. sousednímu Německu, kde [Deutscher Wetterdienst poskytuje zdarma][link_dwd] k dalšímu použití velké množství klimatických dat, které pořizuje.


### Budoucnost
Meteorologická data jsou bezpochyby data s dalším velkým potenciálem - ať již přímo ekonomickým nebo dalším. Což mimochodem znamená promyslet politiku přístupnosti těchto dat. Např. pro ČHMÚ je to otázka, zda zůstanou vůbec relevantním zdrojem. Již dnes i české aplikace berou data “od Norů”, tj. z Norského meteorologického institutu, např. [aplikace Klara][link_klara] od stejných autorů, jako jsou “oficiální” aplikace ČHMÚ [Meteor][link_meteor] a [Aladin][link_aladin]. Norský zdroj se používá právě proto, že [poskytuje data zdarma pro celou Zemi][link_norove]. Asi největší meteorologická aplikace s českými kořeny - [Windy.com][link_windy] - kombinuje velké množství zdrojů, ale [ČHMÚ mezi nimi není][link_windy_sources].

Meteorologická data byla zařazena mezi [veřejně přístupná data s vysokou hodnotou v připravované regulaci Evropské komise][link_komise], rýsuje se zde tedy možnost, že právě touto cestou se česká meteorologická data více otevřou.

Dalším směrem jsou levné amatérské stanice, které dokáží pokrýt i místa, která profesionální (veřejné) instituce pokrýt nedokáží - zde největší je [Sensor.community][link_sensor], která se rozrůstá i v ČR a už dnes poskytuje data z více míst než ČHMÚ, samozřejmě kvalita dat je zde nižší. Ale pro mnoho účelů stačí “dostatečně dobrá data”, není nutné mít velmi kvalitní.

### Příklad použití českých meteorologických dat
Jako ukázku použití meteorologických dat si pokusíme zobrazit historické teploty v létě co nejblíže Českosaského Švýcarska a bude nás zajímat, zda tyto teploty v posledních letech rostou. Data zobrazíme pomocí tzv. [Warming stripes][link_stripes]. Cílem bude tedy srovnání teplot za poslední měsíc (červen v době psaní článku) za celou dobu, kdy jsou data k dispozici.

Warming stripes jsou populárním způsobem zobrazení rostoucích teplot, jde totiž o snadno pochopitelný graf, který lze použít v nejrůznějších kontextech, viz příklad následující fotografie, kdy byl tento graf použit pro design stánku na konferenci.

{% include image.html url="../přílohy/články/sledování-klimatických-změn-pomocí-českých-neotevřených-dat/images/stanek.webp" description="Warming stripes na Konferenci UN o klimatické změně 2019. Autor Englart, John on flickr" %}

## Použitá data
Pro naše potřeby tedy použijeme data z ČHMÚ, ač nejsou otevřená (tj. nesplňují [zákonnou definici otevřených dat v ČR][link_definice]). 

ČHMÚ poskytuje historická data z [mnoha meteorologických stanic][link_chmi_data] (např. 41 v Ústeckém kraji, z toho 13 stále aktivních), ale [aktuální pouze z několika][link_chmi_aktualni] (v Ústeckém kraji 3). Použijeme tedy nejbližší meteorologickou stanici od Hřenska, pro kterou jsou dostupná data i za letošní rok, a to je v našem případě stanice v Ústí nad Labem.

## Postup zpracování
Data získáme z webu ČHMÚ buďto manuálně nebo v případě většího použití programově (např. [zde je skript použitý při tvorbě tohoto článku][link_script]). Problém tvoří aktuální data, protože ČHMÚ má v historických datech vždy jen data do loňského roku, nikoliv ta z roku aktuálního. Aktuální data je tedy třeba přidat např. manuálně.

Samotné grafy - Warming stripes - potom vytvoříme s pomocí [Javascriptové knihovny D3][link_d3] a upraveného [open source skriptu od Santiaga Espinosy][link_saigesp].

Tím získáme grafy ve formátu SVG, které můžeme upravovat v grafických editorech (např. Adobe Illustrator nebo open source Inkscape) dle vlastních potřeb.

## Výsledek
Vytvoříme graf Warming stripes pro průměrné teploty v červnu v Ústí nad Labem, tedy nejblíže požárům v Českosaském Švýcarsku jak geograficky tak časově. Abychom viděli, jaké počasí jim předcházelo.

Graf ukazuje, že podobně jako v mnoha jiných místech, poslední roky jsou v Ústí nad Labem převážně nadprůměrně teplé. Což je samozřejmě [rizikový faktor pro vznik požárů][link_aktualne] jako je ten letošní v nedalekém Českosaském Švýcarsku.

{% include image.html url="../přílohy/články/sledování-klimatických-změn-pomocí-českých-neotevřených-dat/images/usti.webp" description="Ústí nad Labem, průměrná teplota v červnu 1975-2022" %}

Stejný typ grafu můžeme použít i pro _srážky_ v červnu, kde ale na první pohled již větší anomálie nevidíme.

{% include image.html url="../přílohy/články/sledování-klimatických-změn-pomocí-českých-neotevřených-dat/images/usti_srazky.webp" description="Ústí nad Labem, srážky v červnu 1978-2022" %}

## Další užití
Podobně si můžeme vytvořit grafy pro další meteorologické stanice, z kterých ČHMÚ data poskytuje. A opět nejen pro teplotu (pro kterou byl původně tento typ grafu navržen), ale i pro další typy měření, jako je objem srážek.
Jako ilustraci si můžeme ukázat Warming stripes pro stanici, na které v ČR probíhá nejdelší měření - v pražském Klementinu:

{% include image.html url="../přílohy/články/sledování-klimatických-změn-pomocí-českých-neotevřených-dat/images/klementinum_yearly.webp" description="Klementinum, Praha, průměrná teplota v letech 1775-2021" %}

Jako protiklad k Praze (kde se může projevovat efekt tepelných ostrovů) si můžeme ukázat např. šumavský Churáňov:

{% include image.html url="../přílohy/články/sledování-klimatických-změn-pomocí-českých-neotevřených-dat/images/churanov_yearly.webp" description="Churáňov, Šumava, průměrná teplota v letech 1961-2021" %}

V obou případech vidíme obdobný nárůst (zde celoroční) průměrné teploty v posledních letech jako v případě Ústí nad Labem.

## Použité nástroje a zdroje

- [Warming stripes][link_stripes]
- [Evropská komise: Veřejně přístupná data: Dostupnost veřejných datových souborů][link_komise]
- [Historická data ČHMÚ][link_chmi_data]
- [Aktuální data ČHMÚ][link_chmi_aktualni]
- [Daniel Vičan: Bohemian-Saxon Switzerland Fire 2022][link_vican]
- [Englart, John on flickr -  Source: Englart, John Kooky the climate activist Kookaburra visits the UNFCCC pavillion. flickr.com (6 December 2019). Archived from the original on 17 December 2019. Photo of warming stripes at COP25 (2019 United Nations Climate Change Conference). Peoples' faces have been digitally blurred by uploader.][link_englart]
- [Python][link_python] + [Pandas][link_pandas] - open source a zdarma
- [D3.js][link_d3] - open source a zdarma

[link_englart]: https://en.wikipedia.org/wiki/Warming_stripes#/media/File:20191206_Warming_stripes_at_COP25_-_John_Englart_flickr.jpg "Englart, John on flickr -  Source: Englart, John Kooky the climate activist Kookaburra visits the UNFCCC pavillion. flickr.com (6 December 2019). Archived from the original on 17 December 2019. Photo of warming stripes at COP25 (2019 United Nations Climate Change Conference). Peoples' faces have been digitally blurred by uploader."
[link_vican]: https://commons.wikimedia.org/wiki/Category:Bohemian-Saxon_Switzerland_Fire_2022#/media/File:Bohemian-Saxon_Switzerland_Fire_2022,_helicopter_(IMG_1977).jpg "Bohemian-Saxon Switzerland Fire 2022"
[link_python]: https://www.python.org/ "Programovací jazyk Python"
[link_pandas]: https://pandas.pydata.org/ "Knihovna Pandas"
[link_aktualne]: https://nazory.aktualne.cz/komentare/ohen-v-narodnim-parku-desi-protoze-spaluje-touhu-po-casech-k/r~16600a740f9411ed93abac1f6b220ee8/ "Aktuálně.cz: Oheň v národním parku děsí, protože spaluje touhu po časech, které mizí v nenávratnu"
[link_saigesp]: https://github.com/Saigesp/d3graphs "Santiago Espinosa: D3graphs"
[link_d3]: https://d3js.org/ "D3.js"
[link_script]: ../přílohy/články/sledování-klimatických-změn-pomocí-českých-neotevřených-dat/files/get_data.py "Michal Škop: Get historical data from CHMU."
[link_chmi_aktualni]: https://www.chmi.cz/historicka-data/pocasi/mesicni-data/mesicni-prehledy-pozorovani "Aktuální data ČHMÚ"
[link_chmi_data]: https://www.chmi.cz/historicka-data/pocasi/mesicni-data/mesicni-data-dle-z.-123-1998-Sb# "Historická data ČHMÚ"
[link_definice]: /informace/z%C3%A1klady-otev%C5%99en%C3%BDch-dat-pro-z%C3%A1jemce/ "Základy otevřených dat pro zájemce"
[link_stripes]: https://en.wikipedia.org/wiki/Warming_stripes "Wikipedia: Warming stripes"
[link_sensor]: https://sensor.community/cz/ "Sensor.community"
[link_komise]: https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/12111-Verejne-pristupna-data-dostupnost-verejnych-datovych-souboru_cs "Evropská komise: Veřejně přístupná data: Dostupnost veřejných datových souborů"
[link_windy_sources]: https://community.windy.com/topic/12/what-source-of-weather-data-windy-use "Windy.com - What sources of weather data Windy use?"
[link_windy]: https://www.windy.com/ "Windy.com"
[link_norove]: https://developer.yr.no/featured-products/forecast/ "Norský meteorologický institut: předpovědi počasí"
[link_aladin]: https://play.google.com/store/apps/details?id=org.androworks.meteorgram "Aplikace Aladin"
[link_meteor]: https://play.google.com/store/apps/details?id=org.androworks.meteor "Aplikace Meteor"
[link_klara]: https://play.google.com/store/apps/details?id=org.androworks.klara "Aplikace Klara"
[link_dwd]: https://www.dwd.de/EN/ourservices/cdc/cdc.html "Deutscher Wetterdienst"
[link_nkod_teplota]: /datov%C3%A9-sady?dotaz=teplota "Národní katalog otevřených dat - dotaz 'teplota'"
[link_denik]: https://www.denik.cz/ekonomika/soud-rozhodl-meteorologove-musi-zdarma-zverejnit-historicka-data-20180703.html "Deník.cz: Soud rozhodl, meteorologové musí zdarma zveřejnit historická data"

