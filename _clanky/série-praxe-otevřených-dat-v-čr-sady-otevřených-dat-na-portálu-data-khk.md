---
layout: post
detail: true
title: "Série Praxe otevřených dat v ČR: Sady otevřených dat na portálu Data KHK"
ref: série-praxe-otevřených-dat-v-ČR-sady-otevřených-dat-na-portálu-data-khk
lang: cs
image: /přílohy/články/sady-otevřených-dat-na-portálu-data-khk/Sady-otevřených-dat-KHK.webp
author: lenka_kováčová
date: 2022-06-30 07:00:00 +02:00
---
Odbor analýz a podpory řízení Krajského úřadu Královéhradeckého kraje spravuje datový portál Data KHK, jehož nedílnou součástí je i katalog otevřených dat, ve kterém jsou veřejně publikovány sady otevřených dat, které mají územní působnost v rámci celého Královéhradeckého kraje.
Náš článek pojednává o procesu vzniku publikování otevřených dat na krajských webových stránkách až po současnost, kdy publikujeme 54 sad otevřených dat, a to na uživatelsky vhodném datovém portálu Data KHK, ve kterém je tato data možné stahovat v několika formátech a pokud je to možné, tak je jejich součástí i mapový výstup.
Publikování sad otevřených dat prošlo dynamickým vývojem a my bychom se chtěli podělit o naše zkušenosti.

<!--more-->

## Základní informace
Sady otevřených dat jsou obsaženy v katalogu otevřených dat, který je součástí Datového portálu Královéhradeckého kraje Data KHK.
Tento katalog otevřených dat je napojen na vlastní automatizovaný a soběstačný Lokální katalog otevřených dat Královéhradeckého kraje (dále jen „LKOD“). 
Aby se skutečně jednalo o otevřená data, musejí být jednotlivé datové sady zveřejněny způsobem umožňujícím dálkový přístup v otevřeném a strojově čitelném formátu a evidovány v Národním katalogu otevřených dat (dále jen „NKOD“), což je splněno, neboť s využitím nástroje a platformy Vercel se LKOD dostane na správnou URL adresu a NKOD tak může data harvestovat dle potřeby.

{% include image.html url="../přílohy/články/sady-otevřených-dat-na-portálu-data-khk/Sady-otevřených-dat-KHK.webp" description="Data KHK" %}

## Historický vývoj
Královéhradecký kraj své sady otevřených dat začal publikovat v roce 2018. 
Požadavek na jejich poskytování široké veřejnosti vzešel z Komise Rady Královéhradeckého kraje pro otevřenost (dále jen „Komise“).
Podkladem a jakousi inspirací se stal Vzorový publikační plán pro kraje uveřejněný na webových stránkách [https://opendata.gov.cz]. 
Díky tomu jsme získali představu, jaká data bychom měli veřejně publikovat a jaké atributy by měla obsahovat. 
Komise získala od Odboru analýz a podpory řízení (dále jen „APR“) doporučení, jaká data z odborů krajského úřadu mohou být veřejně publikována. 
Následně APR oslovil všechny odbory Královéhradeckého kraje, u kterých bylo zřejmé, že mají k dispozici taková data, která je vhodné poskytnout veřejnosti. 
S těmito odbory byla nastolena spolupráce, kdy každý odbor nominoval do nově vzniklé pracovní skupiny svého zástupce, který dostal na starost poskytování dat odboru APR. 
Z několika desítek datových sad Komise vybrala, jaká data se budou publikovat veřejnosti a toto následně ve svém usnesení dala jako doporučení Radě Královéhradeckého kraje, která svým usnesením rozhodla, jaké datové sady budou na krajských webových stránkách publikovány.

## Současná podoba
Od počátku publikování datových sad na krajských webových stránkách do dnešní doby došlo k výrazné proměně způsobu jejich publikace.
Momentálně jsou sady otevřených dat obsaženy v katalogu otevřených dat, který může široká veřejnost najít na Data KHK.
Data jsou vytvářena buď ve formátu CSV, nebo jako vektorová data .shp v programu ArcGIS Pro a následně jsou nahrána do cloudového prostředí ArcGIS Online, kde se publikují jako hostované vrstvy, nebo hostované tabulky.
Tato data jsou pak ještě doplněna o nezbytné informace týkající se jejich popisu včetně metadat a následně jsou v rámci cloudového prostředí ArcGIS Online přiřazena do katalogu otevřených dat, který je, jak již bylo výše uvedeno, součástí datového portálu.
Jednou denně dochází k aktualizaci katalogu otevřených dat přes načtený skript do LKOD, který pak tuto aktualizaci zaznamená i v NKOD.
Na toto důmyslné, a přitom zcela jednoduché napojení jsme velice pyšni, přičemž toto řešení vytvořil softwarový vývojový pracovník, který je naším externím spolupracovníkem.

Nová data získáváme od většiny odborů krajského úřadu. 
Po počátečních „porodních bolestech“ jsme rádi, že je spolupráce nastavena na velice dobré úrovni.
Ostatní odbory si postupně zvykají, že ke svojí činnosti mohou využívat právě náš datový portál, což je patrné např. při různých jednáních či konferencích, kdy je možné po připojení k internetu a zobrazení datového portálu Data KHK využívat veřejně přístupné výstupy, a to ve formě interaktivních grafů či webových mapových aplikací.
Zástupci jednotlivých odborů tak nemusejí na svých schůzkách používat pouze „statické“ tabulky či grafy, ale mohou pracovat se svými daty, které předali APR a které svojí vizualizací splňují nároky na stále více se rozvíjející informační technologie.
Dobře nastavené spolupráci s odbory nahrává i skutečnost, že je datový portál na poli veřejné správy stále více sledován, neboť zvítězil v soutěži Egovernment The Best 2021, a to v kategorii krajů a velkou odměnou je pro náš tým 1. místo v soutěži Zlatý erb 2022 v kategorii nejinovativnější elektronická služba. 
V červnu 2022 jsme získali i Cenu Ministerstva vnitra za inovaci ve veřejné správě, čehož si velice vážíme.

## Proces tvorby otevřených dat
Nové datové sady, které po schválení příslušnými odbory krajského úřadu chceme publikovat v katalogu otevřených dat, musíme předložit Radě Královéhradeckého kraje ke schválení. 
Po jejím kladném usnesení pak můžeme novou datovou sadu upravit dle požadavků otevřených formálních norem, které představují syntaktickou a sémantickou podobu datových sad. 
Celý proces schválení konkrétní sady otevřených dat po její publikování v katalogu otevřených dat tak představuje přesně stanovenou proceduru.
Je nám velikou ctí, že byla nastavena spolupráce se společností CzechInvest, která nám poskytne některá svá zajímavá data, která budeme publikovat jako otevřená data.
Do budoucna je možné nastavit spolupráci např. s velkými městy Královéhradeckého kraje, která by svá otevřená data mohla publikovat na našem datovém portálu Data KHK. 
Neustále se snažíme tento portál rozvíjet a přicházet s dalšími nápady, jak široké veřejnosti umožnit co nejlepším způsobem získat možnost přístupu k datům z Krajského úřadu Královéhradeckého kraje a z jeho příspěvkových organizací.

*Negativa, s jakými jsme se setkali:*
- počáteční politická neochota vytvořit datový portál 
- ne všechny odbory chtěly s námi spolupracovat
- složitější přístup k datům
- nejednotná struktura poskytnutých dat
- časová náročnost při úpravě poskytnutých dat

*Pozitiva, s jakými jsme se setkali:*
- politická vůle datový portál rozvíjet
- většina odborů poskytuje svá data
- kladná odezva na výstupy interaktivních grafů a webových mapových aplikací, které jsou vytvářeny nejen z otevřených dat
- spolupráce se školskými zařízeními: Univerzitou Hradec Králové a Střední průmyslovou školou Otty Wichterleho
- možnost tvorby webových aplikací nad otevřenými daty pro střední školy na HACKATHONU 
- využití otevřených dat pro potřeby politického vedení kraje, novináře, studenty
- dokázali jsme přesvědčit většinu odborů krajského úřadu, že datový portál má svůj význam a že jeho neustálý rozvoj přináší pozitivní výsledky pro celý krajský úřad
- jsme nadšeni, že výsledky naší práce usnadňují získávání dat pro širokou veřejnost
- zisk tří ocenění zvyšující prestiž Královéhradeckého kraje

## Shrnutí
Z otevřených dat Královéhradeckého kraje, která byla původně publikována pouze na krajských webových stránkách, se stal fenomén, a to díky jejich umístění do katalogu otevřených dat na datovém portálu Data KHK. 
V něm je vše přehledné a snadno dohledatelné. 
Je zřejmé, že když je patřičný pověřený odbor schopen od ostatních odborů dané municipality získat zajímavá data, mít kvalitní tým pracovníků a nezbytnou technologii, tak lze i data dané municipality prezentovat pro širokou veřejnost nejen vysoce profesionálním způsobem, ale zároveň i zábavnou formou.

### Autoři
Ing. Janka Kačerová, Mgr. Tomáš Slezák, analytici, Královéhradecký kraj.

[https://opendata.gov.cz]: https://opendata.gov.cz "https://opendata.gov.cz" 
