---
layout: post
detail: true
title: Nová éra úředních desek
ref: nová-éra-úředních-desek
lang: cs
image: ../přílohy/články/nová-éra-úředních-desek/images/main.webp
author: michal_škop
date: 2022-02-11 07:00:00 +01:00
---
Obce s rozšířenou působností, krajské úřady a státní orgány musí od 1. února 2022 [publikovat svoje úřední desky jako otevřená data][link_nove-povinnosti]. Díky tomu se informace z úředních desek stávají daleko dostupnější. Vznikly zde podmínky pro kreativní revoluci v použití těchto informací srovnatelnou s dobou, kdy se přecházelo z čistě fyzických úředních desek na internetové.

<!--more-->
{% include image.html url="../přílohy/články/nová-éra-úředních-desek/images/main_480.webp" description="Nová éra úředních desek" %}

V současnosti v ČR existuje několik různých aplikací pro obecní úřady, které v sobě mají již zabudovanou možnost přístupu také na úřední desku.

Podobně velmi obsáhlý projekt [edesky.cz][link_edesky] umožňuje registrovaným uživatelům zasílání novinek z úředních desek na email.

My si zde ukážeme dvě jednoduché aplikace, které ukazují dva odlišné přístupy ke stejným informacím z úředních desek. V první aplikaci bude cílem co nejjednodušeji dostávat notifikace o novinkách z úřední desky na mobil. Druhá aplikace ukáže práci s úředními deskami v Národním katalogu otevřených dat.

## Použitá data
- [Úřední deska města Kadaň][link_nkod_kadan]

## <em>Novinky z úřední desky rovnou do mobilu</em>
S úředními deskami, které jsou dostupné jako otevřená data, lze zasílání informací o nových oznámeních na úředních deskách dosáhnout pomocí několika řádek kódu.

Cílem tohoto příkladu není připravit aplikaci pro širokou veřejnost, ale ukázat, že připravit základ takové aplikace může být díky otevřenosti dat velice jednoduché.

## Postup zpracování
K tomu, aby se novinky z úřední desky dostaly na náš mobil, nám pomůžou dva systémy: GitHub a Telegram. Samozřejmě, je to jen jeden z mnoha různých způsobů, jak tento problém řešit, snaha zde byla o co největší jednoduchost.

[GitHub][link_github] je známá webová služba, kde registrovaní uživatelé mohou používat verzovací systém Git. GitHub umí pravidelně spouštět různé akce, což nám pomůže v pravidelném načítání vybrané úřední desky nebo desek. Zároveň rozpozná, že se deska změnila.

Telegram je chatovací služba. My využijeme toho, že umožňuje si snadno naprogramovat automatické boty, jeden z již existujících právě umí upozornit na novou změnu v projektu na GitHubu. Touto změnou bude pro nás novinka na strojově čitelné úřední desce.

### Načítání úřední desky (GitHub)
V rámci projektu na GitHubu vytvoříme několik souborů, nejzajímavější jsou dva:
[Jednoduchý skript][link_download_py] načte úřední desku nebo úřední desky. V našem případě půjde o testovací úřední desku (dle příkladů z [otevřené formální normy Úřední desky][link_ofn_desky] a [úřední desku města Kadaň][link_deska_kadan]. Úkolem skriptu je jenom stáhnout aktuální úřední desku a uložit ji.

Jak jsme již uvedli, GitHub umožňuje pravidelně spouštět akce. Toho využijeme pro náš výše uvedený skript a necháme ho pravidelně každou hodinu stáhnout úřední desku. A zároveň v případě, že právě stažená verze úřední desky se liší od minulé, GitHub (resp. Git) provede automaticky další akci - tuto novou verzi úřední desky uloží. To vše je popsáno [tímto souborem][link_update_yml].

### Notifikace na Telegramu
[Aplikaci Telegram][link_telegram] lze nainstalovat jak na mobil, tak na klasický počítač. V několika intuitivních krocích, viz obrázky, si dokážeme připojit náš výše uvedený projekt na GitHubu. Celý proces pak netrvá ani 5 minut. Přidáme si nový kontakt - GitHub bot (`@GitHubBot`). Připojíme si projekt - a hotovo. Tím, že se spustí akce na GitHubu, tj. nová verze úřední desky se liší od předchozí, a proto se uloží, GitHub bot nás na tuto akci upozorní.

Pokud se tedy na úřední desce objeví nové oznámení, dostaneme automaticky upozornění přímo na mobil.

{% include image.html url="../přílohy/články/nová-éra-úředních-desek/images/pic1.webp" description="" %}
1. v aplikace `Telegram` si přidáme GitHub bot (`@GitHubBot`) 
2. Spustíme bot, `Start`
3. Potřebujeme se připojit k vlastnímu účtu na GitHubu, `/connect`

{% include image.html url="../přílohy/články/nová-éra-úředních-desek/images/pic2.webp" description="" %}
<ol start="4">
<li>Autorizujeme bot na vlastním účtu na GitHubu</li>
<li>Potřebujeme si přidat náš projekt z GitHubu, <code>/newintegration</code></li>
<li>Připojíme si projekt úředních desek z GitHubu</li>
</ol>

{% include image.html url="../přílohy/články/nová-éra-úředních-desek/images/pic3.webp" description="" %}
<ol start="7">
<li>Vybereme si, že chceme upozornit jen soukromě (pokud nechceme informovat více lidí)</li>
<li>Projekt z GitHubu je úspěšně připojen - to celé nám nezabralo ani 5 minut</li>
<li>Po několika hodinách nám přišlo přímo na mobil upozornění, že na úřední desce se objevilo nové oznámení!</li>
</ol>

## <em>Jednoduché zobrazení úředních desek pomocí Otevřené formální normy a Národního katalogu otevřených dat</em>
Další ukázkovou aplikací je přehled úředních desek publikovaných jako otevřená data spolu s posledními oznámeními, která se na dané úřední desce objevila.
Aplikace je ale jednoduchá, testovací a primárně zaměřená na poskytovatele a řešení jejich problémů.
Stahuje data ze všech úředních desek, kterých je čím dál tím více, přímo do prohlížeče, tedy spotřebovává hodně dat - v době psaní článku již více jak 100 MB.
[Pokud však jste na počítači, nebo máte neomezená data, můžete si aplikaci vyzkoušet][link_app].

Cílem tohoto příkladu je ukázat napojení na [Národní katalog otevřených dat (NKOD)][link_nkod] a práci s ním. Zároveň slouží i jako rychlá kontrola pro poskytovatele otevřených dat, že jejich úřední deska je publikována v pořádku (jsou zde vidět i některé počáteční problémy nově publikovaných dat - některé úřední desky např. nemají povolený [CORS][link_cors] a nejdou tedy zatím načítat přímo z takovéto aplikace).

Jedná se opět také o ukázku toho, že základní aplikaci lze nyní vytvořit velmi rychle - tato byla vytvořena jen v řádu hodin.

## Postup zpracování
Aplikace je vytvořena jako [Single Page Application (SPA)][link_spa] v jediném souboru, pouze s pomocí jazyku JavaScript a knihovny Bootstrap použité pro grafický design. [Zdrojový kód aplikace][link_app_github] je dostupný na GitHubu. 

Z hlediska struktury by se aplikace dala rozdělit na tři hlavní části: načtení informací z NKOD, stažení úředních desek a zobrazení uživatelského rozhraní.

První část implementuje metoda fetchDatasets, ta využívá [rozhraní GraphQL NKOD][link_graphql_nkod] pro získání potřebných dat ve formátu JSON. Alternativně by zde šlo použít SPARQL.

Stažení jednotlivých úředních desek je pak jen otázkou dalšího volání [Fetch API][link_fetch_api]. Získání potřebné informace z daného obsahu je, i díky použitým vlastnostem JavaScriptu, vcelku přímočené - implementaci je možné najít na začátku funkce `createEntryElement`. Zde se projevuje efekt standardizace úředních desek - není nutné zjišťovat jaká data kde jsou. Dle OFN se očekává, že v datové sadě bude to, co tam má být a bude to u všech úředních desek stejné.

Zbytek kódu se věnuje hlavně práci s [DOM][link_dom], jinými slovy práci s uživatelským prostředím. Zde by šlo alternativně použít některý z existujících frameworků, ale pro jednoduchost ukázky byl použitý čistý JavaScript. Zejména díky standardizaci a NKOD API tvoří tedy práce s daty vlastně pouze malou část zdrojového kódu. 

{% include image.html url="../přílohy/články/nová-éra-úředních-desek/images/pic4.webp" description="Ukázka z aplikace na počítači - úřední deska města Kadaň
" %}

## Výsledek
Ukázali jsme si dvě jednoduché aplikace, které mají ukázat, jak snadno se dá pracovat s úředními deskami, když jsou informace z nich nyní dostupné také jako otevřená data.

První aplikace umožňuje posílat notifikace o novinkách na úřední desce co nejjednodušeji přímo na mobil. Druhá aplikace potom ukazuje seznam úředních desek a zároveň jak pracovat s Národním katalogem otevřených dat.

Můžeme si porovnat zobrazení stejného nového oznámení (v našem příkladě jde o vyhlášku města Kadaň) v obou aplikacích:

{% include image.html url="../přílohy/články/nová-éra-úředních-desek/images/pic5.webp" description="" %}
1. Informace o novém oznámení na úřední desce doručená na mobil jako zpráva aplikace `Telegram`
2. Informace o stejném oznámení na úřední desce zobrazené na mobilu ve webové aplikaci ukazující úřední desky registrované v NKODu

## Další použití
Ukázkové aplikace naznačují potenciál využití informací z úředních desek, které jsou publikovány jako otevřená data. Jejich cílem není přímo sloužit široké veřejnosti, ale představit, jak snadno lze s daty z úředních desek pracovat.

Ukazují, že stejná informace může být zpracována velmi různými způsoby - např. lze využít již existující široce používané nástroje (jako GitHub a Telegram v prvním případě) nebo naopak jednoduše zobrazovat stejnou informaci na webu (jako v druhém případě).

## Použité nástroje a zdroje
- [Python][link_python] - open source programovací jazyk
- [GitHub][link_github] - služba zdarma po registraci (freemium)
- [Telegram][link_telegram] - služba zdarma po registraci
- [Bootstrap][link_bootstrap] - open source front-end framework
- Kuří, vývěska ŠJů (cs:ŠJů), [CC BY-SA 3.0][link_cc], via Wikimedia Commons
- [OpenClipart: Mobile Phone Silhouette][link_openclipart]

## Související informace
- [Nové povinnosti pro obce, kraje a orgány státní správy v oblasti otevřených dat][link_nove-povinnosti] 
- [Otevřená data z úředních desek již dnes][link_article_dnes]
- [Chybějící podpora Cross-Origin Resource Sharing (CORS)][link_missing_cors]
- [Videonávod jak zkontrolovat katalogizační záznam úřední desky][link_video_1]
- [Záznam z workshopu k zveřejňování úředních desek jako otevřená data][link_video_2]


[link_nove-povinnosti]: https://data.gov.cz/%C4%8Dl%C3%A1nky/nov%C3%A9-povinnosti-pro-obce-kraje-a-org%C3%A1ny-st%C3%A1tn%C3%AD-spr%C3%A1vy-v-oblasti-otev%C5%99en%C3%BDch-dat "Nové povinnosti pro obce, kraje a orgány státní správy v oblasti otevřených dat"
[link_edesky]: https://edesky.cz "EDesky.cz"
[link_nkod_kadan]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F00261912%2F988310552 "Úřední deska města Kadaň registrovaná v NKOD"
[link_download_py]: https://github.com/michalskop/uredni-desky-github/blob/main/download.py "Skript v jazyce Python, který načítá zadané úřední desky"
[link_ofn_desky]: https://ofn.gov.cz/úřední-desky "Otevřená formální norma Úřední desky"
[link_deska_kadan]: https://www.mesto-kadan.cz/1ad1f16beff952576ae7ddd76a91e163 "Úřední deska města Kadaň"
[link_github]: https://github.com "GitHub"
[link_telegram]: https://telegram.org "Telegram"
[link_update_yml]: https://github.com/michalskop/uredni-desky-github/blob/main/.github/workflows/update.yml "Soubor update.yml"
[link_app]: https://ofn.gov.cz/úřední-desky/2021-07-20/aplikace/úřední-desky.html "Aplikace Přehled publikovaných úředních desek"
[link_nkod]: https://data.gov.cz/datové-sady "Národní katalog otevřených dat (NKOD)"
[link_cors]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS "Mozilla: CORS"
[link_spa]: [https://en.wikipedia.org/wiki/Single-page_application "Single Page Application (SPA)"
[link_app_github]: https://github.com/datagov-cz/aplikace-uredni-desky/blob/main/úřední-desky.html "Zdrojový kód aplikace pro zobrazování úředních desek"
[link_graphql_nkod]: https://data.gov.cz/graphql?query=query%20%7B%20datasets%20%7B%20data%20%7B%20title%20%7B%20cs%20%7D%20%7D%20%7D%20%7D "Rozhraní GraphQL NKOD"
[link_fetch_api]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API "Mozilla: Fetch API"
[link_dom]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction "Mozilla: DOM"
[link_python]: https://python.org "Programovací jazyk Python"
[link_bootstrap]: https://getbootstrap.com "Bootstrap"
[link_openclipart]: https://freesvg.org/mobile-phone-silhouette "OpenClipart: Mobile Phone Silhouette"
[link_cc]: https://creativecommons.org/licenses/by-sa/3.0 "CC BY-SA 3.0"
[link_article_dnes]: https://data.gov.cz/2022/02/01/publikace-%C3%BA%C5%99edn%C3%ADch-desek.html "Otevřená data z úředních desek již dnes"
[link_missing_cors]: https://opendata.gov.cz/%C5%A1patn%C3%A1-praxe:chyb%C4%9Bj%C3%ADc%C3%AD-cors "Chybějící podpora Cross-Origin Resource Sharing (CORS)"
[link_video_1]: https://www.youtube.com/watch?v=eDWp5yR_tbw&t=2s "Videonávod jak zkontrolovat katalogizační záznam úřední desky"
[link_video_2]: https://www.youtube.com/watch?v=ylW2j-uDmAI&list=PL1Cp5doNb3zQc_ncuqg85b7ChdsJpBK4e&index=22&t=1s&ab_channel=MinisterstvoVnitraCR "Záznam z workshopu k zveřejňování úředních desek jako otevřená data"