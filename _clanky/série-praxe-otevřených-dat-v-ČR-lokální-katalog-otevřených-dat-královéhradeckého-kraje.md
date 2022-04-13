---
layout: post
detail: true
title: "Série Praxe otevřených dat v ČR: Lokální katalog otevřených dat Královéhradeckého kraje"
ref: série-praxe-otevřených-dat-v-ČR-lokální-katalog-otevřených-dat-královéhradeckého-kraje
lang: cs
image: /přílohy/články/série-praxe-otevřených-dat-v-ČR-lokální-katalog-otevřených-dat-královéhradeckého-kraje/Schéma-LKOD-Královéhradeckého-kraje.webp
author: lenka_kováčová
date: 2022-04-13 07:00:00 +02:00
---
Datové sady otevřených dat Královéhradeckého kraje se v rámci realizace [datového portálu Data KHK][Data KHK] dočkaly svého lokálního katalogu. 
Jsou zde umístěny k využití pro širokou veřejnost a bonusem navíc je jejich inovativní zobrazení v několika formátech, z nichž nejzajímavější pro občany jsou mapové výstupy.
V této formě otevřená data kraje dostaly status přívětivého formátu, který jednoduchou formou přibližuje celé téma otevřených dat všem občanům a posouvá veřejnost k lepšímu pochopení celé problematiky otevřených dat, která již zcela neodmyslitelně patří do naší budoucnosti.
Toto řešení je inspirací nejen pro další vyšší územně samosprávné celky jako jsou kraje, ale pro celou oblast veřejné správy.

<!--more-->

## LKOD

Lokální katalog otevřených dat, ve kterém probíhá tzv. katalogizace sad otevřených dat, je nutno uvést do provozu, jehož součástí je jeho registrace v [Národním katalogu otevřených dat][NKOD] (NKOD).
Zprovoznění lokálního katalogu není povinné.
Poskytovatel může katalogizovat svoje datové sady přímo v NKOD.

## Poučení z vlastní praxe

V roce 2018 bylo Královéhradeckým krajem otevřeno celkem 48 datových sad.
Kraj je následně publikoval přímo v NKOD.
Lokální katalog v té době nebyl vytvořen, na ten správný a efektivní jsme si museli počkat.
Jednak jsme neměli potřebné znalosti a zkušenosti v této problematice, celkové podpory rozvoje celého procesu otevřených dat se nám dostalo v roce 2021.
Tehdy byla schválena realizace [datového portálu Data KHK][Data KHK], jehož součástí bylo vytvoření lokálního katalogu otevřených dat.
Náš záměr byl jednoznačný, a to vytvoření automatizovaného lokálního katalogu otevřených dat, který bude plně zdarma.
Ve spolupráci s členy realizačního týmu datového portálu nyní Královéhradecký kraj provozuje svůj plně soběstačný a automatizovaný lokální katalog otevřených dat, známý pod zkratkou LKOD, postavený na moderní open source technologii.

Funkčnost lokálního katalogu je patrná na následujícím schématu:

{% include image.html url="../přílohy/články/série-praxe-otevřených-dat-v-ČR-lokální-katalog-otevřených-dat-královéhradeckého-kraje/Schéma-LKOD-Královéhradeckého-kraje.webp" description="Schéma lokálního katalogu Královéhradeckého kraje" %}

LKOD se nachází na adrese [https://open.datakhk.cz][LKOD KHK] a obsahuje důležité informace o datových sadách, distribucích datových sad, popisky a kontaktní údaje.
Všechny tyto informace se berou z [datového portálu Data KHK][Data KHK], který slouží jako zdroj pravdy.
Pro správu dat se používá nástroj ArcGIS Online, díky němuž je správa datových sad velmi jednoduchá. 

Každý den, kolem jedné hodiny ráno, se spustí automatizovaný script, který je uložený na platformě GitHub a podle definice začne stahovat aktuální informace z datového portálu.
ArcGIS poskytuje JSON API pro načtení a stažení datových sad, ale je v jiném formátu, než je potřeba pro NKOD.

V tento moment je nutné stažené datové sady transformovat podle Otevřené formální normy (OFN) do správné formátu.
Po transformování jsou jednotlivé datové sady uloženy taktéž na platformu GitHub. 
Po dokončení synchronizace dat z datového portálu do GitHubu je proveden deployment (nahrání) LKOD na jeho veřejnou adresu [https://open.datakhk.cz][LKOD KHK].
LKOD je staticky generovaná stránka (static site), a proto se pro deployment skvěle hodí platforma Vercel.
S využitím nástroje a platformy Vercel se LKOD dostane na správnou URL adresu a NKOD tak může data harvestovat dle potřeby.

LKOD v Královéhradeckém kraji je kompletně veřejný a scripty pro jeho sestavení jsou uveřejněny jako open source software na platformě GitHub.
Díky tomu lze využít řadu benefitů, které GitHub, Vercel a další platformy nabízejí.
To vše díky myšlence open source.
Provoz je tak automatický, resp. bez zásahu člověka.
A může sloužit jako inspirace ostatním krajům a institucím.

## Shrnutí
Tímto článkem bychom chtěli podpořit vznik lokálních katalogů otevřených dat v této inovativní formě pro další subjekty veřejné správy.
A také podpořit celou oblast otevřených dat a realizaci digitalizace veřejné správy ke kvalitnějšímu životu občanů a zároveň zkvalitnění přístupnosti a použití dat z této oblasti. 

#### Autoři
Milan Šulc, webový vývojář, specialista na open source, člen realizačního týmu [datového portálu Data KHK][Data KHK].

Ing. Radmila Velnerová, vedoucí odboru analýz a podpory řízení, koordinátorka otevřených dat kraje a realizace aktivit [datového portálu Data KHK][Data KHK].

[Data KHK]: https://www.datakhk.cz/ "Data KHK"
[LKOD KHK]: https://open.datakhk.cz "LKOD KHK"
[NKOD]: https://data.gov.cz/datové-sady "NKOD"
