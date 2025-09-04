---
layout: contained
title: Problémy s dokumentací a metadaty
ref: ŠpatnáPraxe-DokumentaceMetadata
lang: cs
---

V prostředí otevřených dat se často opakují problémové situace. Na této stránce naleznete seznam nejčastějších z nich, včetně navrhovaných řešení.
V této sekci jsou nejčastější případy špatné praxe týkající se dokumentace a metadat v NKOD.

## Dokumentace či podmínky užití ve formátu PDF či Word
Podmínky užití či dokumentace datové sady by měly být vždy ve formě webové stránky, nikoliv ve formě stažitelného souboru (PDF, DOC, DOCX, ODT apod.) Je to proto, aby uživatelé nebyli nucení pro čtení dokumentů na webu používat kromě webového prohlížeče ještě další aplikace. Formáty pro stránkované dokumenty se hodí pouze pro prostředí mimo web, kde na dokumentu spolupracuje více lidí, apod. Co se týče případného tisku, i správně formátovaná webová stránka tisk umožňuje.

**Symptomy**
Chcete si přečíst dokumentaci datové sady, a místo toho se vám stáhne soubor určený pro tisk, který se dá otevřít pouze dalším programem. Místo responzivního designu a pohodlného čtení na libovolném zařízení si užíváte listování virtuálními stránkami na obrazovce.

**Řešení**
Pište dokumentace datových sad jako běžné webové stránky, tedy v HTML. Pokud předpokládáte, že si dokumentaci bude někdo tisknout, a nejste spokojeni s tím, jak se stránka tiskne bez dalšího nastavení, použijte CSS styl pro tisk.

## Nevhodně zvolená klíčová slova
Klíčová slova jsou součástí povinných metadat datové sady, které sadu popisují v Národním katalogu otevřených dat. Uživatelům slouží k tomu, aby danou datovou sadu našli. Klíčová slova proto musí být volena tak, jak by je pro hledání použil uživatel dané datové sady. Zcela nevhodné jsou tedy libovolné interní identifikátory poskytovatele datové sady. Pomocí nich datovou sadu nebude nikdo hledat, protože je nezná, jelikož jsou interní. Naopak je vhodné datovou sadu popisovat klíčovými slovy z běžného jazyka, u kterých je vyšší pravděpodobnost, že je někdo pro hledání skutečně použije. Při hledání klíčových slov pro vaši datovou sadu se také inspirujte u podobných datových sad jiných poskytovatelů.

## Špatné dělení dat do distribucí datové sady
Častým problémem je chybné dělení dat do distribucí datové sady. Základním pravidlem je, že pokud má datová sada více distribucí, liší se pouze formou, nikoliv obsahem. Typicky tedy datová sada má pouze jednu distribuci. Více distribucí, které se liší pouze formátem, může datová sada mít pro vyšší komfort uživatele, který si může vybrat takový formát, který mu nejvíce vyhovuje. Distribuce v neotevřených či strojově nečitelných formátech je možné v NKOD mít, ale pouze v případě, že datová sada obsahuje i otevřenou a strojově čitelnou distribuci.

Metadata datové sady se řídí [Otevřenou formální normou Rozhraní katalogů otevřených dat - DCAT-AP-CZ](https://ofn.gov.cz/dcat-ap-cz-rozhraní-katalogů-otevřených-dat/2024-05-28/), která je založena na doporučení W3C, tedy webovém standardu, [DCAT - Data Catalog Vocabulary](https://www.w3.org/TR/vocab-dcat/), a jeho aplikačním profilu pro Evropu [DCAT-AP](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe). Ten určuje základní strukturu katalogizačního záznamu. Část popisu dat která je nezávislá na konkrétním technickém provedení přístupu k datům, jako třeba název, popis, periodicita aktualizace, klíčová slova, prostorové a časové pokrytí, apod. patří na úroveň datové sady. Část popisu dat která se týká konkrétního způsobu přístupu k datům, tedy kde leží data v souboru, v jakém formátu, s jakým schématem, pod jakými podmínkami užití apod., patří na úroveň distribuce datové sady.

Cílem popisu dat metadaty je, aby uživatel, ať už člověk ručně, či aplikace automatizovaně, byl schopen data, tedy soubor ke stažení, nalézt pomocí jeho metadatového popisu.

**Chybný příklad 1: Dělení do distribucí dle času, místa, oddělení apod.**

*Datová sada:* Faktury

*Jednotlivé distribuce:* Faktury 2014, Faktury 2015, Faktury 2016 apod.

*Způsobený problém:* Uživatel hledající data za rok 2014 tuto datovou sadu nenajde. Vyhledávání totiž typicky probíhá podle metadat datové sady. U distribuce Faktury 2014 ani žádná metadata o časovém pokrytí NKOD neeviduje - eviduje je u datové sady.

*Řešení:* Každá z distribucí ve skutečnosti reprezentuje samostatnou datovou sadu. Časové pokrytí či prostorové pokrytí jsou části metadat datové sady. Tedy správně by byly datové sady Faktury 2014, Faktury 2015 a Faktury 2016, kde každá z nich bude mít distribuce v jednom či více formátech (RDF Turtle, JSON, XML, CSV…)

**Chybný příklad 2: Zneužívání datové sady pro seskupování různých souborů**

*Datová sada:* Informace o turistických cílech

*Jednotlivé distribuce:* Hrady, Zámky, Infocentra apod.

*Způsobený problém:* Dle metadat (krom názvu distribuce) nelze zjistit, která distribuce obsahuje co. Tyto informace musí být na úrovni datové sady.

*Řešení:* Každá z distribucí ve skutečnosti reprezentuje samostatnou datovou sadu. Každá je o jiném typu objektu, a to se musí projevit minimálně i v názvu, popisu a klíčových slovech dané datové sady.

**Správný příklad**

*Datová sada:* Agendy

*Jednotlivé distribuce:* JSON, JSON-LD, případně XML, CSV, XLSX apod.

V každé distribuci je věcně stejný obsah. Liší se jen datový formát. Speciálním případem mohou být distribuce, které mají sice stejný formát, ale liší se vnitřní strukturou - schématem. Tedy třeba XML dle 2 různých XSD v případě, že pro jedna data existují 2 standardy.

## Chybně zaslaná registrační zpráva do NKOD
Požadavky na registrační zprávu do NKOD, které jsou uvedeny jednak v návodu na registraci a jednak přímo v registračním formuláři, jsou jednoduché:

1. Soubor stažený z formuláře zašlete jako jedinou přílohu datové zprávy (jedná se o JSON-LD soubor s příponou .txt kvůli technickému omezení ISDS)
2. Datovou zprávu zašlete do datové schránky m3hp53v s předmětem NKOD.

I přesto se často stává, že dorazí registrační zpráva s přílohou ve formátu PDF či s jiným předmětem než NKOD, a taková je pochopitelně ignorována.

**Řešení**
Je třeba instruovat všechny zaměstnance, kteří se podílejí na zasílání datových zpráv z instituce, aby přílohu needitovali a neměnili předmět datové zprávy.

**Příklady předmětů přijatých chybných datových zpráv**
  * Odeslání formuláře přihlášení sady „Dopravní informace“ do NKOD.
  * Vyhlášky obce Řitonice
  * Zaslání datových sad Otevřená data
  * MSP-79/2019-OI-SP/4
  * Katalogizace nové datové sady - Stavební úřady
  * Zaslání datových sad Otevřená data
  * Ostatní pošta

**Příklady chyb v přijatých přílohách**
  * Chybné kódování - bylo změněno na něco jiného než UTF-8
  * Příloha není validní JSON - vzniklo editací souboru mimo registrační formulář
    
## Schémata v angličtině
V oblasti IT je častá představa, že cokoliv se programuje nebo strojově zpracovává, musí být anglicky. Tuto představu živí několik důvodů, avšak většina z nich je v dnešní době již přežita. Naopak se více a více ukazují nevýhody tohoto přístupu a problémy, které způsobuje, obzvlášť když s daty mají pracovat lidé, kteří je netvořili. Projdeme si důvody tuto představu živící, a postupně si je vyvrátíme.

**Čeština se v kódu nepoužívá, protože to nefunguje**
Tvrzení, že pokud se v datech či programech použije čeština, tak „to nebude fungovat“, se týká pouze zastaralých programů, které nejsou připraveny pro práci na Webu. Datové formáty i programovací jazyky dnes používají kódování UTF-8, které bez problémů zvládá nejen češtinu, ale i čínštinu, japonštinu atd.

**Anglicky přece umí každý slušný programátor**
Ne každý a ne stejně dobře. Skutečný význam dat pak prochází dvěma překlady - z češtiny do angličtiny na straně poskytovatele, a z angličtiny zpět do češtiny na straně zpracovatele. Jednak to znamená netriviální úsilí, a navíc tak často dochází k efektu „tiché pošty“, tedy že význam dat je překlady názvů položek zbytečně pokřiven. Otevřená data často vychází z legislativy, která je česky. Odpovídající anglické výrazy pak často nejsou oficiálním odborným překladem a nelze zaručit jejich správnost, jednoznačnost a pochopitelnost uživateli.

**Když to bude anglicky, bude s tím umět i zahraniční programátor**
Pokud budou například JSON klíče nebo CSV sloupce v angličtině, zvyšuje se riziko, že zahraniční programátor bude jejich význam odvozovat právě z jejich přeloženého názvu. To je ale často zavádějící, protože význam datových položek nelze vystihnout jedním či dvěma slovy, kterými se položky typicky pojmenovávají. Pro pochopení významu dat je potřeba lidsky čitelná dokumentace. A ta, pokud existuje, je často pouze česky, a to i pro data používající anglicky pojmenované položky. Pokud tedy chceme umožnit používat data i zahraničním uživatelům, je třeba zejména zpracovat jejich dokumentaci. Samotné datové položky pak mohou zůstat česky. Těch zahraničních programátorů pracujících s českými daty bude stejně menšina. S výhodou lze pro definici položek ve více jazycích použít Propojená data, která umožňují skloubit data přímo s popisem jejich významu.

**Je to anglicky, protože používáme celosvětové či Webové standardy**
Pokud mají data splňovat zahraniční standard, pak pochopitelně budou používat anglické názvy položek. Situace je ale typicky taková, že česká data jsou do reprezentace dle zahraničního standardu exportována za účelem interoperability. Tato transformace ale bývá ztrátová, co se týče právě významu dat - mezinárodní standardy bývají záměrně obecnější, aby vyhovovaly co nejširšímu počtu uživatelů. V tomto případě je tedy vhodné data poskytovat ve dvou verzích - plnohodnotně česky, kde se neztrácí význam, a anglicky pro potřeby interoperability se zahraničním standardem.

**Závěrem**
Ať už tvoříme vlastní datové schéma v angličtině z jakéhokoliv důvodu, ve veřejné správě je třeba zajistit odborný a garantovaný a validovaný překlad termínů ve schématu a také anglickou dokumentaci. Překlad z češtiny do angličtiny programátorem rozhodne nestačí. Bez garantovaných a úplných překladů schématu i dokumentace hrozí vysoké riziko dezinterpretace dat. Dále je na zváženou, zda dává schéma v angličtině smysl v případě dat s ryze českými texty. Pokud na angličtině poskytovatel trvá, měl by pak trvat i na překladu dat samotných, ne jen jejich schémat.
