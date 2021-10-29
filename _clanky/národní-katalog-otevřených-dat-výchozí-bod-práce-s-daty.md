---
layout: post
detail: true
title: Národní katalog otevřených dat - výchozí bod práce s daty
ref: národní-katalog-otevřených-dat-výchozí-bod-práce-s-daty-e-gov-2021
lang: cs
author: jakub_klímek
date: 2021-10-27 07:00:00 +02:00
---
Kdykoliv v dnešní době hledáme informace na webu, typicky začínáme s některým z vyhledávačů jako je DuckDuckGo, Seznam.cz, Google nebo Bing.
Ty nám umožňují hledat webové stránky na základě jejich textového obsahu.
V době před vyhledávači se webové stránky hledaly v tzv. katalozích, kde byly zaregistrované webové stránky v různých kategoriích.
Zatímco v oblasti webových stránek byly katalogy překonány právě vyhledávači, v oblasti publikace dat na Webu tak daleko ještě nejsme, a pro hledání dat stále spoléháme na katalogy, ve kterých jsou data zaregistrována.

Pro zajištění dohledatelnosti otevřených dat v ČR slouží [Národní katalog otevřených dat (NKOD)][POD] a registrace dat v něm je jednou ze zákonných podmínek pro to, aby data mohla být nazývána otevřená.

<!--more-->

> *“Otevřenými daty se pro účely tohoto zákona rozumí informace zveřejňované způsobem umožňujícím dálkový přístup v otevřeném a strojově čitelném formátu, jejichž způsob ani účel následného využití není omezen a které jsou evidovány v národním katalogu otevřených dat.”*
> -- [§ 3 odst. 11 zákona č. 106/1999 Sb. o svobodném přístupu k informacím][106]

Dohledatelnost dat, angl. findability, je jedním z tzv. FAIR principů dat společně s jejich přístupností (accessibility), interoperabilitou, tj. snadností pracovat s více datovými zdroji dohromady, a znovupoužitelností (reusability), tj. možností používat jedna data ve více kontextech.
Dodržováním FAIR principů je zajištěna použitelnost dat, což je hlavní účel otevřených dat, tedy dat pocházejících z veřejné správy a publikovaných pro použití veřejností.

Tedy veškerá otevřená data v ČR jsou zaregistrována v NKOD a data, která v NKOD zaregistrovaná nejsou, nejsou otevřená.
Z tohoto pohledu je NKOD klíčovým informačním systémem veřejné správy.

## Uživatelské vyhledávání dat v NKOD

Národní katalog otevřených dat v červnu 2021 obsahuje datové sady 45 poskytovatelů z řad ministerstev, obcí, krajů a dalších orgánů veřejné správy.
Přes uživatelské rozhraní katalogu lze vyhledávat datové sady jednak pomocí textového hledání v jejich názvech a popisech (viz obrázek 1), ale také pomocí tzv. fasetů - tedy podle názvu poskytovatele, klíčových slov, témat datových sad a formátu datových souborů.

{% include image.html url="../attachments/články/národní-katalog-otevřených-dat-výchozí-bod-práce-s-daty/textové-vyhledávání-v-nkod.webp" description="Obrázek 1 - Textové vyhledávání v NKOD" %}

Výsledky hledání nemusí být zobrazeny pouze jako potenciálně dlouhý seznam datových sad.
Lze je seskupit podle klíčových slov nebo témat do tzv. word cloudu, kde je vidět, kolik datových sad je zařazeno pod které téma či klíčové slovo (viz obrázek 2).

{% include image.html url="../attachments/články/národní-katalog-otevřených-dat-výchozí-bod-práce-s-daty/zobrazení-výsledků-vyhledávání-podle-témat.webp" description="Obrázek 2 - Zobrazení výsledků vyhledávání podle témat datových sad" %}

Pokud jste datovou sadu nenalezli, můžete zkusit popsat, co jste hledali a nenašli, jako požadavek na otevření dat pomocí odkazu “Podnět na data k otevření” v patičce.

{% include image.html url="../attachments/články/národní-katalog-otevřených-dat-výchozí-bod-práce-s-daty/záznam-datové-sady.webp" description="Obrázek 3 - Záznam datové sady" %}

Po nalezení hledané datové sady je zobrazen její detailní záznam, tzv. metadata (viz obrázek 3).
Ten obsahuje název, popis, klíčová slova a témata, kterými je datová sada popsaná, dále pak periodicitu aktualizace datové sady, informace o tom, jakého časového úseku, případně území se datová sada týká, a pak také odkaz na dokumentaci datové sady.
V dokumentaci se nachází veškeré informace k vybrané datové sadě, včetně informací o tom, jak data nejlépe zpracovávat, nebo na co si naopak dát při jejich zpracování pozor.
Další užitečnou informací je pak kontaktní bod datové sady, kam se můžete obrátit, pokud k ní budete mít libovolné dotazy či připomínky.
Záznam datové sady dále obsahuje odkaz na specifikace a otevřené formální normy, kterými se datová sada řídí.
Právě využívání existujících specifikací a otevřených formálních norem přispívá k naplnění principu interoperability z FAIR principů dat.

Ve spodní části záznamu o datové sadě jsou pak uvedeny její distribuce (viz obrázek 4).
Distribuce datové sady představují její fyzickou podobu ve formě souborů ke stažení nebo datové služby (API).
Jedna datová sada může být k dispozici ve formě více distribucí, které se od sebe liší v případě souboru ke stažení datovým formátem, nebo se jedná o datovou službu.
Každá distribuce pak má specifikovány své podmínky užití, datový formát a, pokud je k dispozici, strojově čitelné schéma souboru ke stažení či specifikaci datové služby.
Otevřené podmínky užití pak přispívají k naplnění principu reusability z FAIR principů dat.

{% include image.html url="../attachments/články/národní-katalog-otevřených-dat-výchozí-bod-práce-s-daty/distribuce-datové-sady.webp" description="Obrázek 4 - Distribuce datové sady ve formě souborů ke stažení a webových služeb" %}

Při tvorbě záznamu o datové sadě poskytovatelé často dělají tu chybu, že jako distribuce jedné datové sady prezentují soubory s rozdílným obsahem, například rozpočet po letech, nebo soubory podle městských částí.
To je ale v rozporu s webovým standardem pro datové katalogy DCAT (Data Catalog Vocabulary), jeho evropskou adaptací DCAT-AP a českou implementací DCAT-AP-CZ v podobě otevřené formální normy, viz omezení na distribuce výše.
Správným způsobem je každý takový soubor popsat jako samostatnou datovou sadu včetně metadat o časovém či územním pokrytí.
Pro indikaci faktu, že spolu tyto datové sady věcně souvisí, lze využít tzv. datové série.
To jsou datové sady, které nemají vlastní distribuce, ale zastřešují jiné datové sady a série.
Takto lze datové sady hierarchicky uspořádat bez porušování standardů a vynechávání důležitých metadat.
U datové sady, která je součástí datové série, je toto indikováno odkazem “Tato datová sada je součástí datové série” viz obrázek 5.

{% include image.html url="../attachments/články/národní-katalog-otevřených-dat-výchozí-bod-práce-s-daty/datová-sada-součástí-datové-série.webp" description="Obrázek 5 - Datová sada součástí datové série" %}

## Kontroly kvality registrovaných datových sad
Veškeré odkazy, které jsou součástí záznamů datových sad v NKOD, jsou pravidelně kontrolovány z hlediska dostupnosti a také z hlediska dostupnosti techniky CORS, což je zjednodušeně řečeno nastavení webového serveru, které umožňuje s daty pracovat aplikacím běžícím přímo ve webových prohlížečích, kterých je poslední dobou čím dál tím více.
Pokud kontrola dopadne dobře, je vedle příslušného odkazu zobrazen zelený štítek, respektive zelený nápis HTTP.
Naopak problém je indikován červeně (viz obrázek 4).
Souhrnné statistiky s problémy jsou pak k dispozici poskytovatelům na [stránce věnované datové kvalitě][kvalita].
Tyto kontroly přispívají k naplnění vlastnosti accessibility z FAIR principů dat.

Kromě kontrol dostupnosti obsahuje záznam distribuce datové sady také indikátory ohledně podmínek užití.
Pokud daná distribuce není nijak chráněná a neobsahuje osobní údaje, pak lze data bez obav libovolně použít.
To je opět indikováno zelenými symboly u jednotlivých kategorií podmínek užití.
Pokud ale například poskytovatel indikuje, že má vlastní úpravu podmínek užití, se kterou je třeba se seznámit před samotným užitím dat, je toto indikováno oranžově.
Červený indikátor pak znamená, že podmínky užití nebyly specifikovány vůbec, a tedy se nejedná o otevřená data, nebo že data obsahují osobní údaje a na jejich zpracovatele se vztahuje regulace GDPR.


## Evropská hierarchie datových katalogů
{% include image.html url="../attachments/články/národní-katalog-otevřených-dat-výchozí-bod-práce-s-daty/evropská-hierarchie-datových-katalogů.svg" description="Obrázek 6 - Hierarchie katalogů otevřených dat" %}
Národní katalog otevřených dat je součástí hierarchie evropských datových katalogů (viz obrázek 6).
Záznamy o datových sadách získává jednak přímou registrací, ale také přebíráním těchto záznamů z Lokálních katalogů otevřených dat (LKOD) provozovaných většími poskytovateli dat, jako je např. Česká správa sociálního zabezpečení, Ministerstvo financí či Královéhradecký kraj.
Z druhé strany jsou záznamy o datových sadách z NKOD poskytovány Oficiálnímu portálu evropských dat (data.europa.eu), kde se záznamy o datech, a to nejen otevřených, sbíhají z celé Evropské unie.

## Registrace datových sad do NKOD

Registrovat datovou sadu do NKOD může poskytovatel dvěma základními způsoby.
Pro drobnější či začínající poskytovatele, jejichž záznamy o datových sadách se příliš nemění a není jich mnoho, slouží registrační formulář přímo v NKOD.
Ten provede poskytovatele vyplněním registračního záznamu pomocí nápověd a našeptávání hodnot.
Takto vyplněná registrace se pak zasílá do datové schránky NKOD.
Stejným způsobem je pak řešena aktualizace a mazání záznamů, kdy každá změna je zasílána jako samostatná datová zpráva do datové schránky NKOD, což při větším počtu záznamů či jejich časté aktualizaci bývá nepraktické.

Druhou možností registrace datové sady do NKOD pro větší či pokročilejší poskytovatele je použití Lokálního katalogu otevřených dat (LKOD).
Ten může být implementován jako libovolný software, ale podmínkou pro jeho použití s NKOD je dodržení rozhraní předepsaného [otevřenou formální normou “Rozhraní katalogů otevřených dat: DCAT-AP-CZ”][DCAT-AP-CZ], kterou se řídí i NKOD. Takovýto lokální katalog je v NKOD zaregistrován pouze jednou pomocí jedné datové zprávy, a pak se již veškeré změny záznamů odehrávají pouze v LKOD.
NKOD pak v pravidelných intervalech LKOD tzv. harvestuje - čte metadatové záznamy a tvoří jejich obraz v NKOD.
K dispozici je i referenční implementace LKOD ukazující [minimalistické řešení takového katalogu][LKOD-MIN] s využitím GitHub jakožto repozitáře a webu zdarma.

## Aplikační rozhraní pro vyhledávání v NKOD
Záznamy datových sad v NKOD lze vyhledávat ručně, jak bylo popsáno v textu výše, ale také strojově, protože samotný obsah NKOD je také poskytován jako propojená otevřená data.
A to jak ve formě souborů ke stažení ve formátu RDF TriG a v omezené podobě ve formátu CSV, tak i přes několik druhů aplikačních rozhraní API - SPARQL endpoint, Linked Data Fragments a GraphQL.
Například práci s rozhraním SPARQL endpoint se věnuje jeden ze článků na Portálu otevřených dat - [Série Znalostní grafy: Díl 3: SPARQL][SPARQL].

Tato rozhraní pak umožňují vznik aplikací třetích stran, které v NKOD automatizovaně vyhledávají datové sady, kterým rozumí a které umí zpracovávat.
Na straně poskytovatelů dat tak stačí, aby svá data správně zaregistrovali v NKOD.
Aplikace třetích stran je v NKOD automaticky najdou a zpracují je.
Příkladem takové aplikace může být [vyhledávač turistických cílů registrovaných v NKOD][vyhledávač-v-nkod], který pak nalezené turistické cíle předává [generátoru plakátů][plakáty].
Fungování těchto aplikací je možné díky dodržování příslušných [otevřených formálních norem][OFN], v tomto případě pro rozhraní katalogů otevřených dat a pro turistické cíle.

## NKOD jako inspirace pro poskytovatele dat

Národní katalog otevřených dat lze využít i jako inspiraci pro poskytovatele, kteří nevědí, jaké datové sady otevírat, nebo jejich otevírání prioritizují.
Velký přínos mají ty datové sady, které obsahově a formátem odpovídají datovým sadám, které také publikují ostatní poskytovatelé a pro které již existují otevřené formální normy specifikující, jak mají taková data vypadat.
Příkladem jsou tedy data o turistických cílech, událostech, aktualitách či sportovištích.
Uživatelům dat se totiž jejich zpracování například ve formě nové aplikace musí vyplatit.
To se nestane, pokud data o turistických cílech budou publikovat třeba jen dvě nebo tři obce, nebo budou data v nějakém novém, neznámém formátu.
Je třeba dosáhnout kritického množství interoperabilních dat, kdy nad daty vznikne zajímavá aplikace inspirující ostatní poskytovatele k publikaci podobných dat stejným způsobem, což zase podnítí vznik dalších zajímavých aplikací, atd.
Tedy pokud jako poskytovatel prioritizujete otevírání dat, použijte NKOD a podívejte se, která data se již publikují a zda pro ně existují otevřené formální normy.

## Národní katalog otevřených dat je open-source

Národní katalog otevřených dat je tvořen výhradně pomocí [open-source software][NKOD-GitHub], tedy software s volně dostupným zdrojovým kódem a licencí pro volné použití.
To umožňuje například využití částí NKOD pro tvorbu vlastních lokálních katalogů otevřených dat.
Zároveň jsou některé aplikace, ze kterých je NKOD složen, využívány v řadě jiných projektů, ze kterých je spolufinancován jejich vývoj a rozvoj.
Z toho zase zpětně těží NKOD, protože může využít funkcionality původně vyvinuté pro jiné účely, což by v případě proprietárního software s uzavřeným kódem nebylo možné.

*Tento [článek byl publikován][Egovernment-článek] také v čísle 2/2021 [magazínu Egovernment][Egovernment].*

[POD]: / "Portál otevřených dat"
[106]: https://www.zakonyprolidi.cz/cs/1999-106#p3-11 "§ 3 odst. 11 zákona č. 106/1999 Sb. o svobodném přístupu k informacím"
[kvalita]: /datová-kvalita/ "Datová kvalita"
[DCAT-AP-CZ]: https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/ "Otevřená formální norma "Rozhraní katalogů otevřených dat: DCAT-AP-CZ""
[LKOD-MIN]: https://github.com/opendata-mvcr/lkod-min "Minimalistická implementace lokálního katalogu otevřených dat"
[SPARQL]: /články/znalostní-grafy-03-sparql "Série Znalostní grafy: Díl 3: SPARQL"
[vyhledávač-v-nkod]: https://opendata-mvcr.github.io/zobrazeni-dat-nkod-dle-ofn/browser.html "Vyhledávač turistických cílů registrovaných v NKOD"
[plakáty]: https://opendata-mvcr.github.io/app-ofn-plakaty/ "Generátor plakátů turistických cílů"
[OFN]: https://ofn.gov.cz "Otevřené formální normy"
[NKOD-GitHub]: https://github.com/opendata-mvcr/nkod "Národní katalog otevřených dat na GitHubu"
[Egovernment]: https://www.egovernment.cz/ "Magazín Egovernment"
[Egovernment-článek]: https://www.egovernment.cz/soubor/magazin-egovernment-c-2-2021/ "Národní katalog otevřených dat - výchozí bod práce s daty - článek v magazínu Egovernment"