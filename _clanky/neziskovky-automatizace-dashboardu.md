---
layout: post
title: Jak na automatické aktualizace “dashboardu”, i když neumím programovat
detail: true
ref: neziskovky-automatizace-dashboardu
lang: cs
image: ../attachments/články/neziskovky-automatizace-dashboardu/obrázky/uvod.webp
author: robert_spál
date: 2021-02-16 07:00:00 +01:00
---
Článek popisuje postup jak nad otevřenými daty vytvořit automatickou aktualizaci pro zobrazování do analytického dashboardu pomocí nástrojů zdarma a bez nutnosti umět programovat.

<!--more-->

Už delší dobu existuje řada nástrojů, které i běžnému uživateli bez znalosti IT umožňují vytvořit si nad daty reportingovou nástěnku, tzv. dashboard. 
Tyto nástroje zvládají už i poloautomatickou aktualizaci, kdy častokrát stačí data jenom získat/stáhnout, zkopírovat, nahrát a dashboard se už sám aktualizuje. 
I takto zjednodušený proces se však stává příliš náročným, pokud potřebujeme data aktualizovat na denní nebo týdenní bázi. Navíc, mnohokrát se stává, že i měsíční nebo roční aktualizace přináší pocit rutiny a zbytečně stráveného času.

Pokud byste si chtěli ulehčit práci a vytvořit nad daty z [Národního katalogu otevřených dat][NKOD] (NKOD) nebo jakéhokoliv jiného datového zdroje dashboard, který bude aktualizován i bez nutnosti trávit čas znovu nahráváním, kopírováním a úpravou souborů, máme pro Vás dobrou zprávu. 
Existuje způsob, jak se můžete k takovému automaticky aktualizovanému dashboardu dopracovat. 
Nevyžaduje navíc žádné znalosti programování, je zcela zdarma a není ani nijak zvlášť komplikovaný. 
Postup má sice velké množství kroků, avšak tyto jsou většinou velmi jednoduché a mnohé z nich je nutné udělat jenom jednou. 
Konečný proces, zbavený jednorázových kroků, je velice jednoduchý, efektivní a lehce replikovatelný na další a další datové sady. 
Následující text vám nabízíme jako menší kuchařku toho, jak se k takovému dashboardu dopracovat. Budeme pracovat v operačním programu Windows. Pro Linux nebo IOS je postup v principu stejný, i když se v dílčích částech mírně odlišuje.

**Co budeme potřebovat:**

* textový editor kódu - nástroj pro psaní a a spouštění skriptů. 
Pro to, abychom nemuseli data v dashboardu neustále ručně aktualizovat, budeme potřebovat skript, který za nás tuto práci bude sám pravidelně dělat. 
Textové editory jsou pak prostředí, kde se takovéto skripty píšou a spouští.

* programovací jazyk Python instalovaný na počítači - skript, který použijeme, je psaný v jazyku Python a aby ho náš textový editor uměl interpretovat, je nutné mít tento jazyk nainstalovaný na svém počítači. 
Můžeme si také pomoci analogií typů písma. 
Word, který jistě znáte, umí psát text v různých druzích písma jako například Arial nebo Calibri. 
Některá písma, jako například Quicksand, však nemá předinstalovaná a abychom mohli psát článek i v tomto druhu písma, je nutné si Quicksand nejdříve stáhnout a nainstalovat na počítač. 
Word už pak sám písmo rozpozná a nabídne nám možnost v tomto písmu psát. 
Stejně funguje i textový editor. 
S nainstalovaným jazykem Python získá možnost skripty v Pythonu interpretovat.

* účet Google - účet Google jistě znáte a mnozí z vás ho už i máte, protože existuje široká paleta nástrojů, které je možné s tímto účtem využívat jako například YouTube nebo Gmail. 
Pro naše účely je tento účet důležitý proto, že nám umožní zdarma využívat také služby Google Data Studio pro vytvoření dashboardu a developerskou konzoli pro komunikaci skriptu s Google Sheets.

## Editor kódu

První ingrediencí, kterou budeme potřebovat, je textový editor kódu, ve kterém budeme spouštět předpřipravený skript pro aktualizaci dat. 
Můžete použít kterýkoliv z volně dostupných editorů, jako například [Notepad++][NOTEPAD], [PyCharm][PYCHARM] nebo [Atom][ATOM]. 
Všechny jsou zdarma a fungují na všech platformách - Linux, OS X a také Windows. 
Po stažení a instalaci jste připraveni kterýkoliv z nich začít hned používat. 
My jsme využili editor [Sublime][SUBLIME], ale na tom, který si zvolíte, vůbec nezáleží.

## Python

K tomu, aby váš textový editor dokázal interpretovat, co do něj píšete, bude nutné si nainstalovat programovací jazyk [Python][PYTHON]. 
Ten si [stáhnete z úvodní obrazovky][PYTHON] a následně, po stažení, jej opět nainstalujete obdobně jako textový editor. 
Pak bude nutné přidat ještě knihovny pro rozpoznání metod a příkazů. 
Knihovny nainstalujete zapsáním příkazu do [příkazového řádku][RADEK], kde napíšete - ```pip install pandas``` a stisknete enter. 
Postup opakujte ještě dvakrát: pro příkazy ```pip install gspread``` a ```pip install gspread_dataframe```. V případě že váš editor kódu nedokáže rozpoznat, že knihovny byly nainstalovány, jak se to například může stát u editoru PyCharm, řešením je nainstalovat knihovny přímo v editoru kódu přidáním identických výrazů hned na začátek skriptu, který si později v článku stáhneme. Po doběhnutí poslední instalace jste co se týče Pythonu připraveni.

## Účet Google

[Účet Google][GOOGLE] si vytvoříte velice jednoduše a rychle. 
S velkou pravděpodobností takovýto účet už stejně máte. 
S účtem Google získáte přístup do mnoha nástrojů, avšak pro naše účely bude stačit [Google Drive][DRIVE], [Google Sheets][SHEETS], [Google Data Studio][DATASTUDIO]. 

Po aktivaci účtu Google je potřeba zajít na stránku [console.developers.google.com][CONSOLE], kde si vytvoříte nový projekt. 
Zde je nutné napsat pouze název projektu a pak stisknout tlačítko Vytvořit/Create. 
Poté bude nutné povolit také Google Drive API a Google Sheets API. 
Abyste tyto nástroje mohli povolit, je nutné být v úvodní obrazovce projektu, který jste právě vytvořili a ve vyhledávací liště zadat jak Google Drive API, tak i Google Sheets API a povolit každou zvlášť, a to kliknutím na tlačítko Povolit/Enable. 
API slouží k vzájemné komunikaci mezi skriptem, Google Sheets a Google Drive.

Posledním ale neméně důležitým krokem je vytvoření pověření/credentials. 
Z úvodní obrazovky na stránce console.developers.google.com si v levém menu zvolíme Pověření/Credentials a vybereme příkaz Vytvořit pověření/Create credentials. 
Z vyskakovacího menu si vybereme možnost Servisní účet/Service Account. 
Zde vyplníme jméno účtu, roli a vygenerujeme klíč v JSON. Pro roli si zvolíme Project>Editor. 
Po skončení celého procesu se vám do počítače stáhne JSON dokument, což je vygenerovaný klíč, který budete dále používat pro ověřování. 
Pokud se vám klíč nevygeneruje nebo ho ztratíte, je vždy možné si ho dodatečně vygenerovat v rozcestníku pověření. 
Kdyby jste se v této fázi ztratili, nebo si nevěděli rady, je dobré se také porozhlédnout na YouTube, kde je velké množství [tutoriálů][YOUTUBE], které vás krok za krokem provedou celým výše popsaným procesem.

*Tip: Je dobrou praxí změnit název JSON souboru hned po stažení. 
Nejlépe na nějaký lehce zapamatovatelný výraz, protože s názvem souboru budeme ještě pracovat.*

{% include image.html url="../attachments/články/neziskovky-automatizace-dashboardu/obrázky/developer.webp" description="Volba typu ověřování. Je zde také možnost vygenerovat si JSON klíč znovu. Tuto funkci najdete v editaci svého nově vytvořeného servisního účtu v sekci Service Account/Servisní účty." %}

## Jak na to

Nejdříve si otevřete stažený JSON klíč v textovém editoru a zkopírujte si obsah položky client_email. 
Následně si vytvořte prázdný [Google Sheet][SHEETS] a zkontrolujte, zda-li jeho první stránka má název list1. 
Pokud ne, tak ji přejmenujte. 
Pak nasdílejte Google Sheet na úrovni editor s emailem, který jste právě zkopírovali z JSON souboru.

{% include image.html url="../attachments/články/neziskovky-automatizace-dashboardu/obrázky/key.webp" description="JSON soubor s emailem pro sdílení. Sdílení emailu umožní Google Sheets API ověřit, zda jste to skutečně vy, kdo chce data aktualizovat." %}

Dalším krokem je pak [stažení python skriptu][SKRIPT], s kterým budeme dále pracovat v textovém editoru.

{% include image.html url="../attachments/články/neziskovky-automatizace-dashboardu/obrázky/skript.webp" description="Skript po otevření v textovém editoru." %}

Pro další práci jsou důležité 3 řádky - 9, 19 a 21. 
Začneme tedy řádkem číslo 9. 
Zde stačí vyměnit url adresu za adresu, na které je ke stažení CSV distribuce vaší datové sady. 
V případě, že máte jiný formát než CSV, bude nutné skript upravit nahrazením výrazu read_csv také v řádku 10.
Seznam možností a podrobný návod najdete například [zde][IMPORTOTHER]. 
V našem případě načítáme data z [NKOD][NKOD], konkrétně z datové sady [Neziskové organizace v ČR][NEZISKOVKY] a její distribuce v CSV. 
Formát CSV jsme zvolili z důvodu jednoduché manipulace a širokého využívání veřejností.

{% include image.html url="../attachments/články/neziskovky-automatizace-dashboardu/obrázky/neziskovky.webp" description="Datová sada Neziskové organizace v ČR s distribucí CSV z které skript stahuje data." %}

V řádku 19 nahradíte ještě cestu k JSON klíči tak, aby směřovala do umístění JSON souboru na vašem počítači. 
V řádku 21 pak sekvenci v závorce nahradíte vlastním ID Google Sheetu, se kterým chcete pracovat. 
Toto ID najdete v url řádku otevřeného Google Sheetu. 

{% include image.html url="../attachments/články/neziskovky-automatizace-dashboardu/obrázky/sheets.webp" description="ID Google Sheetu" %}

Tak a jste u konce! 
Jste teď připraveni automaticky aktualizovat data do velikosti 150 tisíc záznamů. 
Nástroje zdarma, jako například Google Sheets, častokrát omezují velikost dat, které je možné automatizovaně poslat v jednom požadavku pomocí skriptů. 
Je to z důvodu, aby nedošlo k přílišnému vytížení nástroje, které by ho mohlo pak znefunkčnit. 
Proto jsou také v skriptu v řádcích 27 a 29 použity dvě rozdílné metody. 
Je to z toho důvodu, že Google omezuje jeden požadavek na maximálně 75 000 záznamů a jelikož datová sada Neziskové organizace v ČR má přes 130 000 záznamů, bylo nutné je rozdělit a nahrát postupně ve dvou požadavcích/metodách. 
Abychom mohli data poslat ve dvou samostatných požadavcích, jsou nutné také řádky 14 a 15, které nejdříve rozdělují dataset na dvě části - do 75 000 záznamů a od 75 000 záznamů. 
Pokud je vaše datová sada konzistentně menší než 75 000 záznamů, tyto řádky 14 a 15 a řádek 29 nebudete vůbec potřebovat. 
Když ještě smažete číslovku 1 z řádku 27, dostanete skript schopný automatizace do počtu 75 000 záznamů.  
Naopak když máte více než 150 000 záznamů, tak stačí duplikovat a upravit řádky 15 a 29 obdobně, jako je bylo nutné upravit při prvním rozšíření na 150 000 záznamů.

*Tip: Nový prázdný Google sheet se vytvoří s rozsahem 1000 řádků. Aby Python skript fungoval korektně, je nutné manuálně Google sheet rozšířit. Tlačítko pro takové rozšíření najdete na spodní liště sheetu a zobrazí se vám po srolování se k poslední hodnotě. Zde si zvolíte počet řádků, které by váš sheet měl obsahovat, a stiskněte tlačítko Přidejte. V našem případě jsme si pro jistotu svolili hodnotu 150 000, i když jsme měli méně než 140 000 záznamů. Limit pro počet řádků je 5 milionů.*

Když teď skript spustíte (Tools>Build v editoru Sublime), automaticky se vám vaše data v Google Sheetu aktualizují. 
Spouštět skript jednoduchým zmáčknutím tlačítka můžete provádět pravidelně dle potřeby. 
V případě, že je nutná velmi častá aktualizace, např. každý den, je možné nastavit na vašem počítači automatické spouštění skriptu pomocí [Task Scheduler][PLANOVAC].

Po úspěšném nastavení skriptu se nám tak už všechna data dostávají automaticky do našeho Google Sheetu. 
V případě neziskových organizací jsou data úplná a srozumitelná - pro to, abychom je dokázali číst, nepotřebujeme žádnou dokumentaci nebo manuál. 
Může se však stát, že i po nahrání do Google Sheetu bude třeba data ještě upravovat tak, aby byla srozumitelná a prezentovatelná pro veřejnost. 
Abyste data nemuseli po každém načtení znova a znova upravovat a čistit, je dobré využít možnosti [makro][MAKRO], kterou Google Sheet nabízí. 
Jednoduše vám to umožní automatizovat čištění a úpravy, které jste už jednou dělali.

Teď, když máte tuto práci za sebou a data jsou očištěna, je potřeba je ještě vizualizovat. 
Pro tento účel je možné využít širokou paletu nástrojů zdarma jako například [Tableau Public][TABLEAU] nebo [PowerBI][POWERBI]. 
My jsme pro účely článku zvolili nástroj [Google Data Studio][DATASTUDIO]. 
Obdobně jako jiné nástroje je zdarma a nabízí široké možnosti zpracování a vizualizace dat. 
Výhodou je také velmi jednoduché a přímočaré napojení dashboardu na Google Sheets a přívětivé uživatelské rozhraní. 
Navíc s vytvořením Google účtu se vám automaticky vytvořil i účet Google Data Studio a nemusíte řešit další registrace. 
Na konci dne tak můžete mít [podobný][DASHBOARD], automaticky aktualizovaný dashboard nad daty z [NKOD][NKOD].

Konečný výsledek v podobě dashboardu si můžete prohlédnout na [samostatné stránce][DASHBOARD]. 

Nastavení a prolouskání celého postupu od začátku až po finální dashboard, který se Vám bude líbit, by vám dle složitosti a stavu dat mělo zabrat cca 1-2 dny. 
Nastavení samotné automatické aktualizace by vám nemělo zabrat víc jak hodinu. 
Výhodou takto vytvořeného dashboardu je, že vám v budoucnosti odpadne nutnost rutinní aktualizace. 
Další výhodou také je, že při replikaci postupu nad jinými daty už nebudete muset řešit instalace a vytváření klíčů a účtů. 
Samozřejmě v případě změny struktury dat ze strany publikující instituce, bude nutné tyto změny reflektovat v [dashboardu][DATASTUDIO] a [makru Google Sheets][MAKRO]. 
V případě, že jsou však publikovaná data konzistentní (jako například ty o neziskových organizacích), bude při dalších aktualizacích pouze stačit, když spustíte skript (nebo vám ho spustí sám operační systém) a dashboard se vám během několika málo minut aktualizuje sám. 
A pak už jen stačí si pochvalovat, kolik času vám automatické aktualizace ušetřily a že jste se zase něco nového naučili.

[NKOD]: https://data.gov.cz/datové-sady?dotaz= "Národní katalog otevřených dat"
[NOTEPAD]: https://notepad-plus-plus.org "Notepad++"
[PYCHARM]: https://www.jetbrains.com/pycharm/ "PyCharm"
[ATOM]: https://atom.io/ "Atom"
[SUBLIME]: https://www.sublimetext.com/ "Sublime"
[PYTHON]: https://www.python.org/downloads/ "Python"
[RADEK]: https://www.howtogeek.com/235101/10-ways-to-open-the-command-prompt-in-windows-10/ "Příkazový řádek"
[GOOGLE]: https://accounts.google.com/signin/v2/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin "Účet Google"
[DRIVE]: https://www.google.com/intl/cs/drive/ "Google Drive"
[SHEETS]: https://www.google.com/sheets/about/ "Google Sheets"
[DATASTUDIO]: https://datastudio.google.com/overview "Google Data Studio"
[CONSOLE]: https://console.developers.google.com/ "Konzole"
[YOUTUBE]: https://www.youtube.com/watch?v=T1vqS1NL89E "YouTube"
[SKRIPT]: https://drive.google.com/file/d/1JVnXqjO9O-U9MCNg1090nFfXrWGNb47g/view?usp=sharing "Skript"
[IMPORTOTHER]: https://www.datacamp.com/community/tutorials/importing-data-into-pandas "Ostatní typy dat"
[NEZISKOVKY]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2FBrno%2F855242099%2Faee8d88c79b4e167a10b57c0ce827ec5 "Neziskovky"
[PLANOVAC]: https://www.windowscentral.com/how-create-automated-task-using-task-scheduler-windows-10 "Plánovač úloh"
[MAKRO]: https://www.benlcollins.com/spreadsheets/google-sheets-macros/ "Makro"
[TABLEAU]: https://public.tableau.com/en-us/s/ "Tableau Public"
[POWERBI]: https://powerbi.microsoft.com/en-us/ "PowerBI"
[DASHBOARD]: https://datastudio.google.com/reporting/ca645c4e-c91c-4b40-8f09-98bfccb72d2d "Dashboard"