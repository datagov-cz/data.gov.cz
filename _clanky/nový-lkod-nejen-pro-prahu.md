--- 
layout: post 
detail: true 
title: "Nový lokální katalog otevřených dat nabízí řešení nejen pro Prahu. Zdarma přes něj mohou svá data publikovat i další"
ref: nový-lkod-nejen-pro-prahu
lang: cs 
image: přílohy/články/nový-lkod-nejen-pro-prahu/lkod-praha.webp
author: marie_čermáková
date: 2024-01-4 12:00:00 +02:00 
--- 
Operátor ICT v loňském roce vytvořil nový lokální katalog otevřených dat. 
Rozhodl se pro vlastní open source řešení, které nyní dává k dispozici i dalším subjektům. 
Důvodů, proč se Praha rozhodla vytvořit nový lokální katalog bylo hned několik.
Jednou z motivací bylo vytvoření takového nástroje, který by pražské organizace a městské části mohly využít pro publikaci svých dat a byly přitom vedeny přímo jako jejich poskytovatelé.
Už je tedy nebudou muset publikovat prostřednictvím Hlavního města Prahy. To stávající řešení neumožňovalo.
<!--more-->

Přinášíme Vám zkušenosti přímo od Operátora, ale také z Ústeckého kraje, kde toto nové řešení implementují pro vlastní potřeby. 
Na otázky ohledně lokálního katalogu nám odpovídal Ladislav Bláha z Operátora ICT a Tomáš Kejzlar z Datového centra ÚK, kteří mají implementaci katalogu na starosti. 

**Jaké výhody Vám přineslo zavedení nového lokálního katalogu?**

LB: Implementaci a provoz má plně na starosti Operátor ICT, a.s.. 
Vyvíjíme ho v interním týmu, takže máme projekt zcela pod kontrolou a můžeme ho rozvíjet podle potřeb uživatelů.  

**Co všechno Vaše řešení LKODu umí?**

LB: Základem je vytváření, úprava a správa katalogizačních záznamů o otevřených datech.
Nový katalog je již plně kompatibilní s rozhraním DCAT-AP-CZ, které vyžaduje jak Národní katalog otevřených dat, tak Evropský datový portál. 
Toto předchozí aplikace CKAN neumožňovala. 
Nově jsme teď vyřešili napojení na ArcGIS.
Institut plánování a rozvoje hl. M. Prahy (IPR) provozuje pražský [geoportál] a v něm spravují metadata o datových sadách, které se automatický synchronizují s LKODem.  

**Jak jste vyřešili problém s registrací datový sad podřízených organizací následně do Národního katalogu otevřených dat, tak aby tam byly vidět původní poskytovatelé dat?**

LB: Technicky je to vyřešeno pomocí JSON-LD endpointu.
Každá organizace má svůj, jeho URL pak vyplní v registraci lokálního katalogu, kterou odešle ze své datové schránky.
Pak se v NKOD zobrazuje jako poskytovatel se svými datovými sadami. 
Teoreticky tak může jednu instalaci LKODu používat libovolné množství organizací.
Popis je dostupný i v [OFN pro Rozhraní katalogů otevřených dat: DCAT-AP-CZ]. 

**Proč jste se rozhodli pro open source řešení?**

LB: Protože vývoj obecně v rámci datové platformy Golemio je takto nastaven, chceme dávat k dispozici vyvinutá řešení dalším organizacím.
Myslíme si, že je to správná cesta, když se jednou investují veřejné prostředky do vývoje softwaru, tak má být k dispozici pro další použití 

**S kým jste na vývoji spolupracovali?**

Na vývoji LKODu jsme spolupracovali s odborníky z týmu Národní koordinátorky otevřených dat, Ministerstva financí, z Karlovy univerzity a Masarykovy univerzity.
V současné době na jeho rozvoji a provozu pracuje hlavně tým datové platformy Golemio. 
Aktuálně lokální katalog implementuje Ústecký kraj a Ministerstvo školství. 
Ministerstvo průmyslu a obchodu si řešení otestovalo a má také zájem o jeho implementaci. 
Operátor ICT plánuje lokální katalog dál vyvíjet a udržovat a to včetně podpory pro další subjekty.
V rámci provozu vytváří a spravuje účty organizací a poskytuje jim konzultace k použití LKODu. 

*Ústecký kraj se rozhodl pro spuštění lokálního katalogu otevřených dat především z důvodu snazší publikace datových sad.
Jde o důležitou službu, kterou má datová platforma Portabo poskytovat.* 

**Jaké výhody Vám nasazení lokálního katalogu přináší?**

TK: Věříme, že nasazením lokálního katalogu jako služby datové platformy podpoříme větší publikaci otevřených dat napříč subjekty veřejné správy v Ústeckém kraji. 

**Jaké jsou zkušenosti s implementaci?**

TK: Operátor ICT, od kterého aplikaci LKODu přebíráme, nám při implementaci maximálně vychází vstříc, reaguje na naše podněty a průběžně dělá úpravy aplikace tak, aby byla nasaditelná i pro jiné subjekty, než je samotné město Praha. 
Od prvotního testování k ostrému nasazení uběhl přibližně rok. 
Nyní jsme ve stavu, že nám katalog běží v produkčním prostředí datové platformy a jsme schopni ho poskytovat jako službu nejen samotnému kraji, ale i městům a jimi zřizovaným organizacím. 

**Máte nějaké vlastní specifikace?**

TK: Nad rámec aplikace, kterou dostáváme od kolegů z Operátora ICT, máme v plánu napojení na náš systém pro správu identit, abychom byli schopni zajistit jednotnou správu uživatelských účtů, rolí a oprávnění. 
Poslední dobou cítíme potřebu začít nějak systematicky řešit i katalogizaci vlastních dat, která sbíráme především z IoT zařízení. 
Využití LKODu je jednou z variant, nad kterou uvažujeme a to tím spíš, že se v našem případě obvykle jedná o dynamická data, která nově podléhají povinnosti publikace. 

**Plánujete své zkušenosti předávat dalším poskytovatelům?**

TK: Určitě ano. 
Již nyní komunikujeme s městy v našem kraji a ve většině případů mají o využití katalogu zájem.
Bavíme se s nimi nejen o využití katalogu samotného, ale hlavně o tom, která data zpřístupňovat a jak to technicky a organizačně řešit. 


*Nové řešení LKODu, které přináší Operátor ICT je další alternativou vedle [referenční implementace] a ArcGIS řešení, které využívají převážně kraje.
Existence lokálního katalogu výrazně snižuje administrativní zátěž při katalogizaci dat (více o katalogizaci otevřených dat najdete v našem [e-learningu]). 
Využívání nějakého řešení lokálních katalogů doporučujeme především větším úřadům, zejména ministerstvům a centrálním úřadům. 
Aktuální přehled lokálních katalogů je [k dispozici v NKOD].*



[geoportál]: https://geoportalpraha.cz/ "Geoportál Praha"
[OFN pro Rozhraní katalogů otevřených dat: DCAT-AP-CZ]: https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/2021-01-11/#dcat-ap-dokumenty-katalog "OFN Rozhraní katalogu otevřených dat"
[referenční implementace]: https://github.com/datagov-cz/lkod "Referenční implemetnace LKOD"
[e-learningu]: https://data.gov.cz/vzdělávání/e-learning/katalogizace-otevřených-dat/ "E-learning Katalogizace otevřených dat"
[k dispozici v NKOD]: https://data.gov.cz/lokální-katalogy "Seznam lokálních katalogů otevřených dat"
