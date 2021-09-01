---
layout: post
title: Důležitost datové kvality datových sad s vysokou hodnotou
detail: true
ref: důležitost-datové-kvality-datových-sad-s-vysokou-hodnotou
lang: cs
author: michal_kubáň
---

Publikace takzvaných datových sad s vysokou hodnotou, což je termín, který zavádí evropská směrnice o otevřených datech (2019/1024), nesplní očekávání, pokud nebude společně s jejich seznamem řádně řešena i jejich datová kvalita.

<!--more-->

Je nezbytně nutné, aby pro každou datovou sadu na seznamu existovala technická specifikace a sada vyžadovaných atributů datové kvality. Musí být vynucováno dodržování technické specifikace a specifikovaných atributů datové kvality poskytovateli dané datové sady v jednotlivých členských státech, jinak datové sady nebudou interoperabilní a jejich hodnota zůstane nevyužitelná. V tomto dokumentu identifikujeme relevantní atributy datové kvality a navrhujeme, jak by mohly být definovány a vyhodnocovány. Žádáme, aby byla každá budoucí definice datové sady s vysokou hodnotou doprovázena svou technickou specifikací, sadou vyžadovaných atributů datové kvality a mechanismem jejich sledování a vynucování jejich dodržování.

Požadavky v tomto dokumentu budou relevantní v okamžiku, kdy budou datové sady s vysokou hodnotou identifikovány. Pro zajištění přeshraniční interoperability poskytovaných dat tvořících jednu datovou sadu s vysokou hodnotou od jejich poskytovatelů v jednotlivých členských státech je naprosto nedostačující datovou sadu pouze identifikovat. Je třeba zajistit, že pro každou takovou datovou sadu vznikne řádná technická specifikace a jsou definovány požadované atributy datové kvality tak, aby členské státy mohly začít publikovat příslušná data interoperabilním způsobem, tak, aby data specifikaci a atributy dodržovaly. [Komentáře a návrhy](https://github.com/opendata-mvcr/opendata-mvcr.github.io/issues) jsou vítány. V případě dotazů nás neváhejte [kontaktovat](https://opendata.gov.cz/kontakt:start). 

---

## Datové sady s vysokou hodnotou

[Směrnice Evropského parlamentu a Rady (EU) 2019/1024 ze dne 20. června 2019 o otevřených datech a opakovaném použití informací veřejného sektoru](https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELLAR%3Aa6ef4c41-97eb-11e9-9369-01aa75ed71a1) zavádí tzv. datové sady s vysokou hodnotou. Jedná se o datové sady, jejichž opakované použití různými zpracovateli dat bude mít zajímavé přínosy pro evropskou ekonomiku a společnost. V současné době je připravován jejich seznam. Po jeho schválení budou muset být datové sady uvedené v seznamu publikovány ve všech členských státech EU jako otevřená data, tj. ve strojově čitelném a otevřeném formátu, bez omezujících podmínek užití, volně na internetu a bezplatně.

Koncept datových sad s vysokou hodnotou se týká vyjmenovaných oblastí, kterými v současnosti jsou:

* Geoprostorové údaje 
* Pozorování Země a životní prostředí 
* Meteorologie 
* Statistika 
* Společnosti a vlastnictví společností 
* Mobilita

Pro naplnění cíle směrnice 2019/1024/EU a celého konceptu datových sad s vysokou hodnotou je zcela nezbytné, aby prováděcí akt stanovil nejen jaké datové sady mají být členskými státy poskytovány, ale rovněž, aby stanovil minimální požadavky na vlastnosti publikovaných dat tak, aby byla zajištěna kvalita těchto dat ve smyslu právě uvedených kategorií. Požadavky, které samotná směrnice klade na publikovaná data (tedy otevřený a strojově čitelný formát), jsou příliš obecné na to, aby dostatečně zaručily kompatibilitu datových zdrojů pocházejících z různých členských států. Vzniklé rozdíly by pak prakticky zabránily efektivnímu využívání celoevropských dat a významně tak podryly cíle, kterých se v kontextu jednotného digitálního trhu směrnice 2019/1024/EU snaží dosáhnout. Součástí prováděcích aktů přijatých podle čl. 14 směrnice 2019/1024/EU tak musí být rovněž datová specifikace, která zaručí dostatečnou technickou harmonizaci a tím společnou kvalitu celoevropsky poskytovaných dat.

Členské státy EU díky směrnici učiní první krok k vytvoření jednotného otevřeného datového prostoru EU, ve kterém mohou zpracovatelé dat vytvářet služby použitelné napříč celou EU. To by byl zajímavý pokrok oproti současnému stavu, kdy je vytváření podobných služeb velmi náročné. Často se stává, že datová sada poskytovaná v jedné zemi EU není v jiných zemích poskytována vůbec nebo není poskytována jako otevřená data (je např. zpoplatněna). Zatímco se v jiných oblastech (např. v oblasti ochrany spotřebitelů) daří jednotný prostor vytvářet se všemi z toho plynoucími výhodami, ke sjednocení prostoru otevřených dat je nutno učinit ještě mnoho kroků. Současnou roztříštěnost otevřených dat lze z tohoto důvodu chápat jako stav odporující principům jednotného trhu EU.

Bez sjednocené úrovně kvality datových sad s vysokou hodnotou nemůže směrnice k vytvoření jednotného datového prostoru přispět. Dočkali bychom se sice toho, že členské státy sice formálně poskytují všechny povinné datové sady, ale každý by je poskytoval rozdílným způsobem. Nad heterogenními datovými sadami by bylo i nadále velmi obtížné vytvářet služby fungující napříč všemi zeměmi EU, neboť většinu svých zdrojů by zpracovatelé museli investovat do datové integrace místo do vytváření hodnotných služeb. 

Než začneme uvažovat nad sjednocováním úrovně kvality datových sad, je nejprve nutné se zamyslet nad pojmem kvalita dat. Kvalita dat je široký pojem, který lze ale shrnout jednoduchou definicí. Kvalitní data jsou data, která jsou dobře připravená ke zpracování zpracovateli. Dobře připravená data jsou data, která se dají snadno nalézt a u kterých se zpracovatel může spolehnout na správnost jejich obsahu a na neměnnost podoby jejich poskytování v čase a prostoru. Podoba poskytování dat může mít mnoho atributů. Patří mezi ně struktura dat, jejich sémantika, úplnost či granularita, propojení s jinými daty, formáty, ve kterých jsou data poskytována, technické rozhraní pro přístup k datům, podoba katalogizačního záznamu o datové sadě v Evropském datovém portálu, atd. Neměnnost podoby poskytování v čase znamená, že poskytovatel nemění v průběhu času jednotlivé atributy, případně provádí jen nutné zpětně kompatibilní změny za účelem zvyšování kvality. Neměnnost podoby poskytování v prostoru znamená, že atributy jsou shodné napříč jednotlivými poskytovateli dané datové sady. Často jsou tyto atributy shrnuty do 4 základních principů, tzv. FAIR data (Findability, Accessibility, Interoperability, Reusability).

Požadujeme proto, aby všechny členské státy EU a Evropská komise vyvinuly maximální úsilí k dosažení jednotné definice kvality datových sad s vysokou hodnotou. Jelikož je ale pojem velmi široký, je nutné, aby definice poskytovala jasný výčet těch atributů, které jsou důležité z pohledu vytváření jednotného otevřeného datového prostoru v rámci EU. Dále požadujeme, aby definice kvality byla aplikována na každou stanovenou datovou sadu s vysokou hodnotou. To znamená určit konkrétní naplnění jednotlivých atributů definice kvality pro každou jednotlivou datovou sadu.

## Důležité atributy datové kvality

Navrhujeme, aby definice kvality zahrnovala atributy uvedené v následující tabulce a dále aby byly pro každou datovou sadu naplněny způsobem, uvedenýn níže.

Struktura a sémantika
: Stanovena ontologií vyjádřenou ve všech EU jazycích v maximální možné míře založené na ISA2 Core Vocabularies a na dalších existujících ontologiích a slovnících.

Úplnost 
: Povinnost zveřejňovat úplný výčet všech instancí všech prvků ontologie stanovující strukturu a sémantiku.

Granularita 
: Povinnost zveřejňovat data na úrovni granularity odpovídající ontologii bez jakékoliv agregace instancí stanovených prvků ontologie.

Propojení s jinými daty
: Používat předepsané číselníky z webu EU Vocabularies, přičemž tyto číselníky jsou aktivně rozšiřovány pro potřeby datových sad s vysokou hodnotou; významové (věcné) souvislosti s jinými datovými sadami jsou vyjádřeny jak na úrovni ontologie tak na úrovni konkrétních entit kódovaných v datové sadě.

Formáty 
: Definován 1 nebo více formátů pomocí logických schémat (např. RDF schémat, XML schémat, JSON schémat apod.), přičemž datová sada je zpřístupněna minimálně v jednom z těchto formátů; k vyjádření propojení s jinými daty jsou využívány principy propojených dat (Linked Data), především koncept IRI; prvky logického schématu využívají nebo jsou mapovány na prvky ontologie, čímž je definována jejich sémantika.

Rozhraní pro přístup k datům
: Předepsáno požadované rozhraní, kterým je bulk download nebo API nebo obojí; v případě bulk download je předepsáno povinné rozdělení obsahu datové sady do datových souborů a tyto soubory dodržují stanovenou ontologii (viz atribut struktura a sémantika) a logické schéma (viz atribut formáty); v případě API je předepsána povinná technická podoba API, která dodržuje ontologii (viz atribut struktura a sémantika) a logické schéma (viz atribut formáty). API navíc musí zajistit možnost pohodlného stažení kompletní datové sady.

Dokumentace 
: Připravena jednotná dokumentace ve všech jazycích EU aplikovatelná na datové sady ze všech zemí publikujících danou datovou sadu. Dokumentace musí obsahovat vzorový návod pro uživatele, jak s datovými sadami pracovat, začínající od jejich nalezení v Evropském datovém portálu a končící u vzorové Proof of Concept aplikace.

Katalogizace 
: Předepsán katalogizační záznam odpovídající aktuální verzi slovníku DCAT-AP pro účely povinné katalogizace v Evropském datovém portálu.

Podmínky užití
: Předepsány otevřené podmínky užití ve všech jazycích EU s garancí jejich kompatibility napříč právními systémy publikujících členských států.

Vytvořená definice stanovuje požadavky na minimální podobu datové sady. Každý poskytovatel bude povinen definici při publikaci datové sady dodržet. Může jí ale libovolným avšak zpětně kompatibilním způsobem rozšířit. Zpětná kompatibilita znamená, že poskytovatel musí zajistit, že libovolný správně fungující způsob softwarového zpracování datové sady dle stanovené jednotné definice funguje správně též nad rozšířenou definicí stanovenou poskytovatelem.

Dále požadujeme, aby byly na úrovni EU vytvořeny jasně definované, zdokumentované a replikovatelné automatizované a manuální mechanismy pro kontrolu kvality poskytovaných datových sad v jednotlivých výše zmíněných atributech. Testy kvality by měly probíhat v pravidelných intervalech, a jejich výsledky by měly být zveřejňovány na k tomu určeném webu, případně i v Evropském datovém portálu. Zveřejňování výsledků pak vytvoří tlak na poskytovatele, kteří požadované kvality publikace nedosahují a poskytuje pozitivní zpětnou vazbu pro poskytovatele, kteří kvalitní data publikují. Manuální testy se musí řídit jasně definovanou metodikou. Automatizované testy musí probíhat výhradně za použití open-source nástrojů a musí být zdokumentovány tak, aby si je každý mohl ověřit, tzn. u sebe zprovoznit.

## Návrhované způsoby testování datové kvality

V následujícím přehledu navrhujeme, jakým způsobem by mohly být jednotlivé atributy testovány:

Struktura a sémantika
: Struktura může být testována automatickými nástroji na kontrolu validity dat (SHACL, XML Schema, CSV on the Web validator). Sémantika může být testována ručně posouzením zobrazení dat z jednotlivých zemí v Proof of Concept (PoC) aplikaci. PoC aplikace by byla tvořena současně se specifikací datové sady autory specifikace. Sloužila by poskytovatelům dat k jako nástroj k ověření správnosti jejich poskytovaných dat.

Úplnost 
: Pro monitoring úplnosti dat by bylo vhodné ke každé datové sadě vědět například kolik má mít záznamů, a pak automaticky kontrolovat, zda poskytovaná data tento počet záznamů opravdu obsahují.

Granularita
: Pro monitoring granularity poskytovaných dat může sloužit sada databázových dotazů nad poskytovanými daty, které budou měřit počty výskytů jednotlivých tříd a vlastností napříč datovými sadami poskytovanými jednotlivými poskytovateli. Ručně je pak třeba výsledky vyhodnotit, například v kontextu jiných datových sad, zda se nevyskytují nějaké nevysvětlené anomálie.

Propojení s jinými daty
: Lze vytvořit automatizovaný nástroj měřící počty, druhy a dostupnost odchozích linků napříč datovými sadami od jednotlivých poskytovatelů. Ručně je pak třeba výsledky vyhodnotit, například v kontextu jiných datových sad, zda se nevyskytují nějaké nevysvětlené anomálie.

Formáty 
: Na základě metadatového záznamu datových sad v Evropském datovém portálu lze automaticky bude prováděn monitoring datových formátů, ve kterých je datová sada poskytována, včetně validace jednotlivých distribucí.

Rozhraní pro přístup k datům
: Na základě metadatového záznamu datových sad v Evropském datovém portálu lze automaticky provádět monitoring dostupnosti API i dat ke stažení, monitoring správnosti HTTP hlaviček a dostupnost a validita dokumentace API ve standardu OpenAPI.

Dokumentace 
: Na základě metadatového záznamu datových sad v Evropském datovém portálu lze automaticky kontrolovat, zda datové sady odkazují na jednotnou dokumentaci datové sady.

Katalogizace 
: Na základě metadatového záznamu datových sad v Evropském datovém portálu lze automaticky kontrolovat jeho validitu dle DCAT-AP v2.0.0 či vyšším.

Podmínky užití
: Na základě metadatového záznamu datových sad v Evropském datovém portálu lze automaticky kontrolovat, zda záznam odkazuje na stanovené podmínky užití a ty jsou dostupné.

Dále je třeba pro datové sady s vysokou hodnotou pravidelně provádět průzkum použitelnosti dat. Ten může být prováděn například dotazníkovým šetřením mezi známými uživateli těchto datových sad. Tito uživatelé by se mohli k užívání datových sad dobrovolně hlásit. Vyloučeno musí být jakékoliv nedobrovolné sledování uživatelů těchto datových sad formou vynucování registrací.
