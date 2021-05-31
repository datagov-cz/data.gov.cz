---
layout: post
title: Využití otevřených dat v mezipředmětové výuce
detail: true
ref: MiMraz_Využití-otevřených-dat-v-mezipředmětové-výuce
lang: cs
image: ../attachments/články/MiMraz_Využití-otevřených-dat/uvod.webp
author: miroslav_mraz
date: 2021-05-30 07:00:00 +01:00
---
Článek popisuje, jak lze s otevřenými daty pracovat ve výuce již na základní škole. Miroslav Mráz z brněnské ZŠ Labyrinth představuje projekt, na kterém pracoval se žáky 7. třídy.

<!--more-->

Na začátku školního roku 2020/2021 jsme s žáky 7. ročníku [ZŠ Labyrinth][Labyrinth] začali v hodinách IVT a fyziky pracovat na projektu využívajícím otevřená data a propojující témata elektromobility, kvality ovzduší v Brně a práce s daty. Projekt vznikl díky zapojení naší školy do programu [Chytrá škola O2][O2], během kterého jsme se zabývali online světem, příležitostmi a hrozbami, které přináší a oblastí kritického myšlení a práce s daty.

Cílem projektu bylo, aby žáci dostali příležitost:

* zjistit, co jsou otevřená data, k čemu je mohou využít a také říct si o ně
* zpracovat otevřená data, vizualizovat je a ověřit díky nim hypotézu
* zjistit, jak najít data o kvalitě ovzduší v Brně a které faktory vstupují do hry
* zjistit, zda by elektromobilita zkvalitnila ovzduší a zda je elektroauto skutečně „čistější” než auto se spalovacím motorem
* navštívit datové odborníky z [Oddělení dat, analýz a evaluací města Brno][Data Brno]

## Úvodní hypotéza

*Během COVID krize se zlepšila kvalita ovzduší v Brně díky snížené veřejné a soukromé dopravě. Pokud bychom zvýšili počet elektroaut, dala by se kvalita ovzduší udržet na vysoké úrovni i v současnosti bez omezení mobility obyvatel.*

## 1. Motivace do tématu

Každý, kdo rozjíždí projekt (nejen) s žáky ví, jak důležitá je úvodní, průběžná a závěrečná motivace. Jedním z mých učitelských cílů je nabídnout žákům to, co bych zpětně u sebe na základní a střední škole uvítal více — propojení témat probíraných v lavicích s reálným světem. Jako idealista také věřím, že generace mých dětí bude mít k dispozici pro své rozhodování a participaci ve společnosti více a lépe dostupných dat, podle kterých se bude lépe orientovat i rozhodovat.

Osobní motivace učitele byla tedy splněna. Jak ale zajistit to hlavní — osobní motivaci žáků? Uvažoval jsem o heslech „datová analýza je oborem 21. století”, „data jsou sexy”, ale mám takový pocit, že na tato hesla slyší hlavně dospělí lidé, co se chtějí rekvalifikovat z méně odborné na více odbornou pozici a rozhodně takto nepřemýšlí dospívající děti na základní škole. Daleko více věřím v přenos [„feynmanovského” nadšení][Feynman] z poznání světa kolem sebe a poskytnutí možností, jak nahlédnout pod pokličku lidem, kteří se v tématu pohybují. Proto máme v plánu (kvůli covid19 jsme zatím neměli příležitost) navštívit Oddělení dat, analýz a evaluací města Brno, kde žáci uvidí, jak se s daty pracuje v rámci města. Neodpustil jsem si také žákům pustit [ukázku ze dne v životě datového analytika][datový analytik] a zeptat se jich, jestli by se jim tato práce líbila.

obrázek

{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/datový analytik.webp" 
description="Odpovědi žáků, možnosti 1=vůbec, 5=boží. Při tomto výsledku mě napadá učitelské moudro, že stačí zapálit oheň poznání alespoň u jednoho žáka, aby to mělo smysl." %}

## 2. Co jsou otevřená data, k čemu jsou a jak si o ně říct. Volba datasetů

* Pro základní představení otevřených dat jsme využili stránku [(open)DATA PRO VŠECHNY][DATA].
* Poté jsme si určili, podle čeho budeme definovat kvalitu ovzduší. Dospěli jsme k tomu, že nás zajímají částice PM2,5, PM10 a NO2 v intervalu od 1.1.2020 do 31.8. 2020. O vlivu těchto částic na lidské zdraví jsme se dozvěděli ze stránek [Můžu dýchat][můžu dýchat].
* Data o [mobilitě obyvatel][mobilita obyvatel] jsem našel na portálu [data.brno.cz][Data Brno], který je registrován v [Národním katalogu otevřených dat (NKOD)][NKOD]. Rozhodl jsem se použít data uživatelů aplikace Waze, protože a) byly dostupné narozdíl od dat ze SIM karet v delším časovém horizontu (ačkoli jsem je musel potupně přepsat ručně z grafu Pokles mobility obyvatelstva v Brně v [tomto článku] a popravdě nevím, proč není v tomto časovém období také v csv.) a b) narozdíl od regionálních Google Mobility reportů se týkaly Brna.
* Kde seženeme data ke kvalitě ovzduší? Touto otázkou jsem se zabýval při plánování projektu ještě o prázdninách. Weby s daty o kvalitě ovzduší, na které jsem narazil ([Můžu dýchat][můžu dýchat] a [brněnské ovzduší][brněnskéovzduší]), čerpaly z dat [Českého hydrometeorologického ústavu][CHMI]. Jenže tam jsem dohledal pouze aktuální denní hodnoty a data z roku 2019 (později jsem se dozvěděl, že je to proto, že data z ČHMÚ prochází validací a jsou uveřejněna se zpožděním, tzn. data za rok 2020 se uveřejňují v první polovině roku 2021). Rozhodl jsem se tedy obrátit s prosbou na Můžu dýchat a k mému příjemnému překvapení jsem o pár dnů později obdržel dataset ve formátu csv.
    
{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/zadání pro žáky.webp" 
description="Zadání pro žáky" %}

* Po žácích jsem chtěl, aby si o data sami řekli. Pro většinu z nich to bylo poprvé, co si o něco říkali nějaké instituci. Níže jsou ukázky jejich emailů.

{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/žádost o otevřená data 1.webp" 
description="Ukázka méně formálního psaného projevu žáků" %}
{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/žádost o otevřená data 2.webp" 
description="Ukázka méně formálního psaného projevu žáků" %}

## Intermezzo — Zjišťuju, že nevím, že nevím

Nevím už ani proč, ale někdy v půlce října v sobotu (ano — skoro měsíc po zahájení projektu!) mě napadlo přece jen si říct o data Českému hydrometeorologickému ústavu, konkrétně vedoucímu [brněnské pobočky][CHMI Brno] (možná to bylo tím, že jsem chtěl zjistit, proč se data z webů brněnského ovzduší, Můžu dýchat a ČHMÚ trochu liší). O 24 minut později mi [Jáchym Brzezina][Jáchym] odepsal a o pár hodin později po cca 20 minutovém telefonátu mi pomohl se lépe zorientovat v tématu, poukázal na možná úskalí, nabrífoval a poradil jakým směrem jít dál, za což mu velmi děkuji.

Původně jsme měli v úmyslu postavit vizualizaci na částicích PM10, nicméně ty jsou z 59% způsobeny lokálním vytápěním domácností a pouze 7% dopravou. Naopak NO2 je ze 34% způsoben dopravou a je tedy relevantnějším ukazatelem pro náš záměr. Pokud bychom se zaměřili na PM10, dospěli bychom k závěru, že omezení dopravy způsobilo zhoršení kvality ovzduší. Proč? Začátek roku 2020 byl teplotně nadprůměrný a panovaly příznivé meteorologické podmínky (nadprůměrná rychlost větru — částice jsou „rozfoukány”). Přesně v době vyhlášení nouzového stavu však došlo k výraznému ochlazení. V kombinaci s vládními omezeními a sníženou mobilitou lidé pobývali více doma a více vytápěli, což vedlo k zvýšení podílu PM10 v ovzduší a tudíž horší kvalitě vzduchu.

{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/doprava březen.webp" 
description="" %}
{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/kvalita ovzduší.webp" 
description="Paradox, na který mě upozornil vedoucí brněnské pobočky ČHMÚ a seznam článků k nastudování. Poté jsem nabrífoval také žáky." %}

## 3. Ověření první části hypotézy — Vedl pokles mobility k lepšímu ovzduší?

Žáci v první části projektu zkombinovali datasety s mobilitou uživatelů Waze a vývojem částic NO2 v Brně v období 1.3. — 31.5. 2020 a vyšel jim graf níže. Poté měli zvolit, co jim vyšlo.

{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/závěr první části.webp" 
description="Zadání 1. části projektu" %}

{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/počet uživatelů WAZE.webp" 
description="Výsledky žáků v 1. části projektu" %}

{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/co ti vychází.webp" 
description="Výsledky žáků v 1. části projektu" %}

Na závěr této části projektu jsem chtěl zdůraznit toto:

* Snížil se objem NO2 -> pozitivní efekt na kvalitu ovzduší
* Snížil se objem dopravy -> pozitivní efekt na kvalitu ovzduší
* Do hry však vstupuje mnoho dalších významných faktorů, které jsme nebrali v potaz (meteorologické podmínky, přítomnost dalších částic v ovzduší způsobené např. zvýšeným vytápěním vzhledem k nižší teplotě a paradoxně nižší mobilitě, apod.)

## 4. Ověření druhé části hypotézy — Vysoká úroveň mobility a kvalitní ovzduší pomocí elektroaut?

V druhé části projektu jsme přidali fyziku (téma energetiky). S kolegyněmi fyzikářkami jsme o prázdninách a během září sladili témata tak, aby do sebe zapadaly a mohli tak pracovat paralelně. Cílem bylo žákům ukázat rozdíly mezi auty se spalovacími motory a elektromobily a pokusit se trochu doplnit obraz „elektroauta jsou cool”. Zejména jsem chtěl na příkladu dvou srovnatelných typů vozidla stejné značky (Ford Focus s benzinovým motorem vs Elektro) představit následující:

* Automobil se spalovacím motorem má „druhý” výfuk (na výrobu 1l benzínu je potřeba 1kWh, což obnáší emise cca 600 gCO2)
* Elektroauto si s sebou nese „uhlíkový batoh” z výroby baterie, který postupně maže během provozu

{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/energetika.webp" 
description="Zadání 2. části projektu" %}
{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/zadání2.webp" 
description="Zadání 2. části projektu" %}

Žáci na základě dostupných dat porovnali celkové emise obou aut a vypočítali, po kolika kilometrech elektroauto smaže svůj uhlíkový batoh z výroby baterie.

{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/srovnání.webp" 
description="Výsledky žáků v 2. části projektu" %}
{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/porovnání.webp" 
description="Výsledky žáků v 2. části projektu" %}

Na závěr této části projektu jsem chtěl zdůraznit toto:

* Elektroauto, které jsme zkoumali, je lokálně čistější než benzínové auto, co se týče výfukových emisí. Nicméně výfukové emise tvoří podle některých studií pouze 20% emisí auta (tento významný fakt zmínil během brífovacího telefonátu J. Brzezina, ale nezahrnul jsem ho do projektu, protože jsem nedohledal studii pro vybrané modely aut). Zbytek jsou nevýfukové (otěry brzdových destiček, spojky, resuspenze, apod.). U elektroaut mohou být tyto emise vyšší kvůli větší váze auta. Druhá část hypotézy tedy platí pouze pro výfukové emise a pro její potvrzení/vyvrácení bychom potřebovali započíst data pro nevýfukové emise vybraných modelů, které jsem nedohledal.
* Elektroauto si s sebou nese „uhlíkový” dluh z výroby baterií oproti autu s benzinovým motorem, který v našem případě splatí až po 53 tis. km
* Existují ekologičtější možnosti — jezdi šalinou nebo choď pěšky

## 5. Vyhodnocení projektu aneb k čemu jsme došli?

Na závěr měli žáci na základě svých výsledků napsat, k čemu došli a zda se potvrdila úvodní hypotéza:
*Během COVID krize se zlepšila kvalita ovzduší v Brně díky snížené veřejné a soukromé dopravě. Pokud bychom zvýšili počet elektroaut, dala by se kvalita ovzduší udržet na vysoké úrovni i v současnosti bez omezení mobility obyvatel.*

{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/co jsi zjistil.webp" 
description="Závěr projektu — k čemu přišli žáci" %}

Na závěr projektu jsem doplnil závěry žáků následovně:

{% include image.html url="../attachments/články/MiMraz_Využití-otevřených-dat/hypotéza.webp" 
description="Potvrdila se úvodní hypotéza? aneb Co jsme zkoumali a co ne." %}

## Poučení

* Velmi důležitá úvodní a průběžná motivace žáků
* Zapojení partnerů pro konzultaci, možnost exkurze vybraných stanic/analytického města odboru přispívá k větší motivaci žáků
* Mezipředmětovost, zapojení více kolegů a průběžná komunikace k tématu podporuje projektovou výuku
* Obtížná témata vyžadují podrobnou znalost oblastí, kterých se týká — tohle jsem trochu podcenil.
* Komplexní témata je třeba uzavřít přestože *„Co není obklopeno nejistotou, nemůže být pravda.“*


V případě, že je nutná velmi častá aktualizace, např. každý den, je možné nastavit na vašem počítači automatické spouštění skriptu pomocí [Task Scheduler][PLANOVAC].


[Labyrinth]: https://labyrinthschool.cz/ "ZŠ Labyrinth"
[O2]: https://www.o2chytraskola.cz/ "Chytrá škola O2"
[Data Brno]: https://data.brno.cz/ "Data Brno"
[Feynman]: https://videacesky.cz/video/richard-feynman-premyslej-jako-martan?fbclid=IwAR1wxn62knYpPEoRSZUBL9d0_S4D5wWW9t8o6VRX_rBS9NU6CLM0WEPnkzk "Feynman"
[datový analytik]: https://www.youtube.com/watch?v=3JP_RVq3Ngk "ukázka - datový analytik"
[DATA]: https://dataprovsechny.cz/ "Data pro všechny"
[můžu dýchat]: https://muzudychat.cz/ "Můžu dýchat"
[mobilita obyvatel]:https://data.brno.cz/dataset/?id=covid-19 "Mobilita obyvatel"
[NKOD]: https://data.gov.cz/datov%C3%A9-sady "NKOD"
[článek Brno]:https://data.brno.cz/mobilita-a-covid19/  "článek - Data Brno"
[brněnskéovzduší]: https://www.brnenskeovzdusi.cz "Brněnské ovzduší"
[CHMI]: https://www.chmi.cz/ "ČHMÚ"
[CHMI Brno]: https://chmibrno.org/blog/2020/11/04/nova-mapa-kvality-ovzdusi/ "ČHMÚ Brno"
[Jáchym]: https://twitter.com/Jachym "Jáchym Brzezina"


