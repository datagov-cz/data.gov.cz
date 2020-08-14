---
layout: post
detail: true
title: "Série Znalostní grafy: Díl 2: Datový model RDF"
ref: znalostni-grafy-rdf
lang: cs
image: ../attachments/články/znalostní-grafy/znalostní-grafy-02.jpg
author: martin_nečaský
date: 2020-08-10 07:00:00 +02:00
---

V [minulém dílu][link_previous] seriálu jsme se seznámili s pojmem *znalostní graf* (angl. *Knowledge Graph*).
V tomto dílu si ukážeme, jakým způsobem lze znalostní grafy strojově reprezentovat v podobě vhodné pro jejich sdílení na webu jako otevřená data.

<!--more-->

## Co očekáváme od strojové reprezentace znalostních grafů?

Zatím jsme si ukazovali znalostní grafy vizualizované na obrázcích.
To je sice hezké na ukazování, ale pro jejich počítačové zpracování je to samozřejmě zcela nevhodné.
Znalostní graf potřebujeme reprezentovat v podobě, která umožní počítači s grafem provádět různé operace - např. v něm hledat uzly, procházet z jednoho uzlu na druhý prostřednictvím hran mezi uzly ve znalostním grafu nebo generovat obrázky, které jsme viděli v minulém dílu.
Protože se pohybujeme v rámci otevřených dat, chceme navíc strojovou reprezentaci, která je vhodná pro publikaci na webu a která umožňuje snadné kombinování a propojování různých znalostních grafů od různých poskytovatelů.

## Datový model RDF

[Resource Description Framework (RDF)][rdf11] je standardní model pro sdílení dat na webu.
RDF reprezentuje data v podobě grafu tvořeného uzly a hranami, které je propojují.
Je tedy přirozené jej použít i jako model pro strojovou reprezentaci znalostních grafů, které chceme sdílet na webu.
Není jediným modelem používaným pro reprezentaci znalostních grafů.
Oblíbeným je pro reprezentaci znalostních grafů také *property graph model*, který ale není modelem určeným pro sdílení dat na webu, ale spíše databázovým modelem podporovaným mnoha grafovými databázemi.
Více si o tomto databázovém modelu a jeho souvislostech s modelem RDF řekneme v jiném dílu tohoto seriálu.
V tomto dílu se zaměříme na model RDF.

### Identifikace uzlů pomocí IRI

Jak jsme si ukázali v minulém dílu, znalostní graf reprezentuje entity reálného světa jako grafové uzly.
V otevřeném prostředí webu je důležité, aby uzly byly identifikovány globálně unikátně.
To umožní, aby tvrzení o entitě mohla být uváděna v různých znalostních grafech od různých poskytovatelů.
Tím se dostáváme k prvnímu stavebnímu bloku modelu RDF, kterým je velmi dobře známý a ukotvený konstrukt [*Internationalized Resource Identifier (IRI)*][iri].
Pokud vám tento pojem nic neříká, pak vězte, že jej znáte.
Jeho speciální podobou je totiž *Uniform Resource Locator (URL)*, který všichni běžně používáme jako identifikátory webových stránek.
I webová stránka, kterou právě čtete, má svoje URL.
Uvidíte jej v horní části vašeho prohlížeče. Česky také někdy říkáme jen *adresa stránky*.

URL má pěkné vlastnosti, které se hodí i pro uzly znalostních grafů na webu.
Nejedná se totiž pouze o globální identifikátor.
URL je také tzv. *lokátorem*, protože umožňuje v prostředí webu vyhledat a získat počítačovou reprezentaci identifikované věci.
To umožňuje protokol HTTP.
Abyste si např. mohli přečíst tento článek, váš prohlížeč prostřednictvím protokolu HTTP vyhledal v prostředí webu URL https://data.gov.cz/články/znalostní-grafy-02-rdf a získal HTML reprezentaci článku, kterou pro vás zpracoval a zobrazil vám ji.

RDF používá IRI, většinou právě v podobě URL, pro identifikaci uzlů znalostních grafů.
IRI je zobecněním URL, např. je v něm možné používat české znaky (používá kódování UTF-8).
Uvažme například znalostní graf Národního katalogu otevřených dat, který jsme viděli již v předchozím dílu.
Jako uzel je v něm reprezentován Český statistický úřad (ČSÚ) jako orgán veřejné moci, který poskytuje otevřená data.
Uzel má přiřazen IRI [`https://data.gov.cz/zdroj/ovm/00025593`](https://data.gov.cz/zdroj/ovm/00025593).
K IRI můžete přistoupit (klikněte na něj).
Váš prohlížeč prostřednictvím HTTP protokolu IRI vyhledá v prostředí webu a získá počítačovou reprezentaci ČSÚ dostupnou na serveru lokalizovaném s pomocí tohoto IRI.
Záměrně neříkáme, že získá věc jako takovou, ale jen její reprezentaci.
Protože samozřejmě přistoupením k IRI nezískáte ČSÚ jako takový, ale reprezentaci nějakých údajů o ČSÚ, které jsou na příslušném serveru o ČSÚ vedeny.
Díky HTTP protokolu ještě probíhá zajímavá komunikace mezi vaším prohlížečem a serverem, kterou nazýváme *HTTP content negotiation*, kdy váš prohlížeč požaduje od serveru reprezentaci ČSÚ v konkrétním počítačovém formátu.
Prohlížeč je určen k tomu, aby věci zobrazoval v podobě čitelné pro člověka.
Proto požaduje reprezentaci ve formátu HTML.
Pokud by ale k IRI přistupoval jiný typ klienta, např. nějaká aplikace, která chce s reprezentací ČSÚ dále počítačově pracovat, požádá o jiný formát.
Formátům se budeme věnovat v závěru tohoto článku.

### Reprezentace tvrzení o věcech v podobě RDF trojic

Jak jsme si řekli v minulém dílu, ve znalostních grafech reprezentujeme věci a tvrzení o nich.
V modelu RDF vyjadřujeme tvrzení o věci ve vazbě na IRI uzlu, který věc v grafu reprezentuje.
Máme-li tedy ČSÚ z příkladu výše a uzel, který ČSÚ reprezentuje ve znalostním grafu Národního katalogu otevřených dat, můžeme na IRI [`https://data.gov.cz/zdroj/ovm/00025593`](https://data.gov.cz/zdroj/ovm/00025593) navázat tvrzení např. o názvu ČSÚ, jeho datové schránce, jakou má právní formu, nebo o tom, jaké datové sady publikuje jako otevřená data.

RDF model umožňuje vyjadřovat tvrzení o věcech v podobě jednoduchých vět, které gramaticky sestávají z podmětu, přísudku a předmětu.
Takovými větami jsou například:

* ČSÚ má název Český statistický úřad.
* ČSÚ má datovou schránku 2gfaasy.
* ČSÚ má právní formu Organizační složka státu.
* Cizinci podle státního občanství, věku a pohlaví - rok 2018 má poskytovatele ČSÚ.

Věty se mohou zdát z češtinářského hlediska trochu kostrbaté, ale přesně takto uvažujeme v datovém modelu RDF.
Vlastně rozpadneme údaje o věcech do takto jednoduchých, můžeme říci atomických vět.
V RDF modelu je nazýváme *tvrzení* (angl. *statements*).
Tvrzení samozřejmě nevyjadřujeme jako věty v přirozeném jazyku, ale v počítačové notaci.
RDF model zavádí následující strukturu zvanou *trojice*:  

~~~~~~
subjekt predikát objekt .
~~~~~~~~~~~~

Subjekt je obdobou podmětu, predikát je obdobou přísudku a objekt je obdobou podmětu.
Výše uvedené věty tak zůstávají stejné, jenom jsou trochu více strukturované, jak ukazuje následující příklad.

~~~~~~
"ČSÚ"   "má název"   "Český statistický úřad" .
"ČSÚ"   "má datovou schránku"   "2gfaasy" .
"ČSÚ"   "má právní formu"   "Organizační složka státu" 
"Cizinci podle státního občanství, věku a pohlaví - rok 2018"   "má poskytovatele"   "ČSÚ" .
~~~~~~~~~~~~

Čili např. hned v první větě je "ČSÚ" subjektem, "má název" predikátem a "Český statistický úřad" objektem.
V poslední větě je naopak "ČSÚ" objektem, subjektem je "Cizinci podle státního občanství, věku a pohlaví - rok 2018" a predikátem je "má poskytovatele".
Možná přemýšlíte, jak výše uvedené věty souvisí se znalostními grafy, jsou to přeci jen věty.
Ve skutečnosti je souvislost zcela přirozená.
Vlastně kdykoliv používáme přirozený jazyk, vyjadřujeme svým způsobem nějaký znalostní graf.
Běžný lidský jazyk je velmi komplexní a počítač jej neumí jako grafovou strukturu reprezentovat automaticky, i když počítačová lingvistika učinila v tomto směru značný pokrok a to i v tak složitých jazycích, jakým je čeština.
Pokud si ale běžný jazyk omezíme výše uvedeným způsobem, znalostní graf je v něm patrný - každá věta popisuje hranu spojující uzly definované subjektem a objektem.
Predikát je pak pojmenováním hrany.
Čtyři věty uvedené výše tak popisují znalostní graf, který je graficky vyjádřen na následujícím obrázku.

{% include image.html 
   url="../attachments/články/znalostní-grafy/rdf-čsú-01.svg"
   description="Znalostní graf reprezentovaný větami o ČSÚ vyjádřeným v omezené češtině"
%}


#### Vyjádření subjektů a objektů

Výše uvedený zápis je jenom přiblížení ke správnému vyjádření tvrzení v modelu RDF.
Jak jsme si řekli výše, k identifikaci věcí nepoužívá RDF model řetězce, ale IRI.
Např. jsme si řekli, že ve znalostním grafu Národního katalogu otevřených dat má ČSÚ přiřazeno IRI [`https://data.gov.cz/zdroj/ovm/00025593`](https://data.gov.cz/zdroj/ovm/00025593).
V trojicích z našeho příkladu je tedy místo řetězce "ČSÚ" k identifikaci Českého statistického úřadu používáno toto IRI a to na místě subjektu i objektu.
Syntakticky je IRI uváděno ve špičatých závorkách.

~~~~~~
<https://data.gov.cz/zdroj/ovm/00025593>   "má název"   "Český statistický úřad" .
<https://data.gov.cz/zdroj/ovm/00025593>   "má datovou schránku"   "2gfaasy" .
<https://data.gov.cz/zdroj/ovm/00025593>   "má právní formu"   "Organizační složka státu" .
"Cizinci podle státního občanství, věku a pohlaví - rok 2018"   "má poskytovatele"   <https://data.gov.cz/zdroj/ovm/00025593> .
~~~~~~~~~~~~

Obecně platí, že subjektem v trojici je vždy IRI věci, o které v trojici něco tvrdíme.
Poslední trojice specifikující tvrzení o datové sadě "Cizinci podle státního občanství, věku a pohlaví - rok 2018" tedy není správně.
Protože o datové sadě specifikujeme tvrzení, musíme ji chápat jako věc, které přiřadíme IRI a toto IRI pak používáme v každé trojici, která o datové sadě specifikuje nějaké tvrzení.

~~~~~~
<https://data.gov.cz/zdroj/ovm/00025593>   "má název"   "Český statistický úřad" .
<https://data.gov.cz/zdroj/ovm/00025593>   "má datovou schránku"   "2gfaasy" .
<https://data.gov.cz/zdroj/ovm/00025593>   "má právní formu"   "Organizační složka státu" .
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   "má poskytovatele"   <https://data.gov.cz/zdroj/ovm/00025593> .
~~~~~~~~~~~~

Objektem v trojici může být buď IRI věci nebo tzv. *literál*, což je primitivní datová hodnota uvedená v uvozovkách.
Hned první trojice specifikuje název ČSÚ.
Hodnotou názvu je literál "Český statistický úřad" a objekt je tedy vyjádřen jako literál.
Další trojice specifikuje datovou schránku ČSÚ.
V příkladu výše máme jako hodnotu uveden literál "2gfaasy".
RDF model nám ale neumožňuje o literálu specifikovat další tvrzení.
Protože chceme v našich datech popsat nejenom identifikátor datové schránky, ale také např. datum jejího vzniku, zda je veřejná a další, potřebujeme ji vyjádřit jako věc, která bude identifikována v trojicích svým IRI.
V našich datech můžeme pro datové schránky určit vlastní podobu IRI nebo použijeme existující z jiného znalostního grafu.
V tomto příkladu si vytvoříme vlastní.
Výsledek vidíte v příkladu níže.
Stejně přistoupíme i k právním formám. Např. právní formu "Organizační složka státu" potřebujeme chápat jako věc se svým IRI.
Na toto IRI pak v dalších trojicích navážeme další orgány veřejné správy s touto právní formou. 

~~~~~~
<https://data.gov.cz/zdroj/ovm/00025593>   "má název"   "Český statistický úřad" .
<https://data.gov.cz/zdroj/ovm/00025593>   "má datovou schránku"   <https://data.gov.cz/zdroj/datové-schránky/2gfaasy> .
<https://data.gov.cz/zdroj/ovm/00025593>   "má právní formu"   <https://data.gov.cz/zdroj/ovm/právní-forma/325> .
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   "má poskytovatele"   <https://data.gov.cz/zdroj/ovm/00025593> .
~~~~~~~~~~~~

Následující obrázek je vizuální reprezentací znalostního grafu vyjádřeného v poslední variantě tvrzení o ČSÚ.

{% include image.html 
   url="../attachments/články/znalostní-grafy/rdf-čsú-02.svg"
   description="Znalostní graf reprezentovaný větami o ČSÚ s využitím IRI na místě subjektů a objektů"
%}


#### Vyjádření predikátů

Stále ale ještě nemáme správné vyjádření v modelu RDF.
IRI totiž RDF model používá i pro predikáty.
Tj. neidentifikuje vlastnosti věcí pomocí řetězců jako předchozí příklad, ale chápe vlastnosti také jako věci, které mají svá IRI.
Zatímco ale pro entity, o kterých něco tvrdíme, jako např. ČSÚ, vytváříme vlastní IRI, např. v poddoméně `https://data.gov.cz/zdroj/`, tak pro vlastnosti IRI nezavádíme, ale snažíme se využívat to, co již existuje. 
Vlastnosti a jejich IRI jsou definovány v tzv. *slovnících*.
Existuje mnoho slovníků, ze kterých můžeme vybírat.
Takové přepoužívání existujících slovníků významně přispívá k interoperabilitě znalostních grafů.
Software, který rozumí nějakému slovníku, rozumí všem znalostním grafům, které tento slovník používají.
Opět je zde paralela s lidským jazykem.
Řekne-li někdo "má název", rozumíte významu takového sousloví, protože použil slova z jazyka, který znáte, tj. z češtiny.
Řekne-li ale "tiene un nombre", možná už nerozumíte, protože použil slova ze španělštiny.
Řekne-li "एक नाव आहे", pravděpodobně sáhnete po překladači.
Mimochodem, jedná se o [Maráthštinu](https://www.wikidata.org/wiki/Q1571) (a mimochodem tento odkaz využívá znalostní graf Wikidata k anotaci textu, čímž jej zajímavě obohacuje, ale o tom až v nějakém jiném dílu našeho seriálu).

Existují generické slovníky, které se hodí pro téměř jakýkoliv znalostní graf. Např.:

* [DCMI Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) - slovník pro popis digitálních objektů, které mají svůj název, tvůrce, vydatavele, datum vydání, datum aktualizace, apod.
* [SKOS](http://www.w3.org/TR/skos-primer) - slovník pro vyjádření znalostních struktur jako jsou např. číselníky, klasifikace, taxonomie a thesaury
* [Data Cube Vocabulary](http://www.w3.org/TR/vocab-data-cube/) - slovník pro vyjádření statistických údajů v podobě datových kostek
* [Time Ontology](https://www.w3.org/TR/owl-time/) - slovník pro vyjadřování času
* [Geo Vocabulary](http://www.w3.org/2003/01/geo/) - slovník pro základní vyjadřování geografického umístění

Existují také různé doménově specifické slovníky, které je vhodné používat v případě, že se náš znalostí graf dané domény nějakým způsobem dotýká.
Např.:

* [GoodRelations](http://www.heppnetz.de/ontologies/goodrelations/v1.html) - slovník pro znalostní grafy v oblasti e-commerce
* [DCAT](http://www.w3.org/TR/vocab-dcat/) - slovník pro popis datových sad a katalogů datových sad
* [FOAF](http://www.foaf-project.org/) - slovník pro popis lidí a vztahů mezi nimi
* [ORG](https://www.w3.org/TR/vocab-org/) - slovník pro popis organizací a jejich struktury
* [HL7 FHIR](https://www.hl7.org/fhir/rdf.html) - slovník pro zdravotnictví

A existují i slovníky, které se snaží postihnout celý svět nebo jeho významnou část.
Např.:

* [schema.org](http://schema.org) - slovník původně vyvinutý v Google pro zvýšení strojové čitelnosti webových stránek
* [bioschemas.org](https://bioschemas.org/) - slovník pro znalostní grafy v oblasti life sciences
* [ISA Core Vocabularies](https://ec.europa.eu/isa2/solutions/core-vocabularies_en) - sada slovníků pro zajištění interoperability mezi informačními systémy veřejné správy v EU

Každý slovník definuje seznam vlastností a jejich IRI.
Pro každou vlastnost typicky definuje její název a popis a také jaké typy uzlů mohou tyto vlastnosti mít a co může být jejich hodnotou.
Slovník je tak možná až příliš zjednodušující pojem, protože má také charakter datového schématu.
Jak taková definice vypadá technicky si opět ukážeme v jiném dílu našeho seriálu.

Pojďme teď některé z výše uvedených slovníků použít, abychom konečně došli ke správnému vyjádření našeho příkladu v modelu RDF.
Pokud se podíváte do slovníku [schema.org](http://schema.org), který má i jednoduché uživatelské rozhraní pro jeho procházení, naleznete v něm definici vlastnosti s IRI [`http://schema.org/name`](http://schema.org/name).
Vlastnost je definována jako univerzální vlastnost pro specifikaci jmen a názvů věcí.
Můžeme ji tak použít pro vyjádření názvu ČSÚ. Výsledná RDF trojice tak bude vypadat následovně.

~~~~~~
<https://data.gov.cz/zdroj/ovm/00025593>   <http://schema.org/name>   "Český statistický úřad" .
~~~~~~~~~~~~

Velmi oblíbeným slovníkem je slovník [DCMI Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/), který definuje vlastnost s IRI [`http://purl.org/dc/terms/publisher`](http://purl.org/dc/terms/publisher).
Je definována jako univerzální vlastnost pro specifikaci toho, kdo danou věc zveřejnil.
U trojice s datovou sadou zveřejněnou ČSÚ to znamená následující finální vyjádření.

~~~~~~
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   <http://purl.org/dc/terms/publisher>   <https://data.gov.cz/zdroj/ovm/00025593> .
~~~~~~~~~~~~

Zbylé dvě trojice z příkladu se týkají vlastností specifických pro veřejnou správu ČR, které existující slovníky nepokrývají.
V tom případě si můžeme zavést svoje vlastní nové vlastnosti s našimi vlastními IRI.
Ukazuje je následující příklad.
Jak je přesně zavést, si ukážeme v jiném dílu tohoto seriálu.

~~~~~~
<https://data.gov.cz/zdroj/ovm/00025593>   <http://schema.org/name>   "Český statistický úřad" .
<https://data.gov.cz/zdroj/ovm/00025593>   <https://data.gov.cz/slovník/ovm/datováSchránka>   <https://data.gov.cz/zdroj/datové-schránky/2gfaasy> .
<https://data.gov.cz/zdroj/ovm/00025593>   <https://data.gov.cz/slovník/ovm/právníForma>   <https://data.gov.cz/zdroj/ovm/právní-forma/325> .
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   <http://purl.org/dc/terms/publisher>   <https://data.gov.cz/zdroj/ovm/00025593> .
~~~~~~~~~~~~

Možná se ptáte, kde lze hledat existující slovníky.
Existuje nějaký katalog slovníků?
Ano, existuje např. katalog [Linked Open Vocabularies (LOV)](https://lov.linkeddata.es/dataset/lov/).

#### Přiřazování věcí do tříd

Když uvažujeme o věcech, často si je klasifikujeme podle jejich společných charakteristik.
Rozlišujeme tak např. knihy, vozidla, organizace, zvířata nebo lidi.
(Možná se divíte, proč říkáme, že člověk je věc, ale chápejte prosím v kontextu tohoto článku pojem věc jako něco velmi obecného, ve smyslu cokoliv nebo kdokoliv.)
Pokud o něčem víme, že je vozidlem, pak o tom uvažujeme a přemýšlíme jinak, než pokud o něčem víme, že je organizací.
Klasifikace nám udává základní charakter dané věci.
Znalost základního charakteru je důležitá i pro strojové zpracování, abychom danou věc interpretovali a zpracovali správně.
V modelu RDF tuto základní klasifikaci věcí provádíme pomocí přiřazování věcí do tzv. *tříd*.

Třída v RDF modelu je chápána jako množina věcí, které mají stejné charakteristiky.
Třídou tak může být např. množina všech organizací.
Do této množiny patří např. ČSÚ.
Z pohledu RDF modelu je třída opět věcí a má tak své IRI.
Přiřazení věci do třídy specifikujeme trojicí, kde subjektem je věc, predikátem je vlastnost definovaná přímo ve specifikaci modelu RDF `<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>` a objektem je třída.
Ve znalostním grafu Národního katalogu otevřených dat je např. použita třída ze slovníku schema.org s IRI `<http://schema.org/Organization>`, která je množinou všech organizací.
Konkrétně je přiřazení ČSÚ do třídy vyjádřeno v RDF modelu jako následující trojice.

~~~~~~
<https://data.gov.cz/zdroj/ovm/00025593>   <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>   <http://schema.org/Organization> .
~~~~~~~~~~~~

Věc může být přiřazena do více tříd.
To se může hodit, neboť často pro daný koncept existuje více slovníků, které pro něj zavádějí svoji třídu.
Tak např. pro označení množiny všech organizací nemusíme použít jen výše uvedenou třídu ze slovníku schema.org.
Např. slovník [Core Public Organization Vocabulary](https://joinup.ec.europa.eu/solution/core-public-organisation-vocabulary) vydaný Evropskou komisí zavádí pro organizace třídu [`http://data.europa.eu/m8g/PublicOrganisation`](http://data.europa.eu/m8g/PublicOrganisation).
ČSÚ tak můžeme přiřadit i do této třídy.

~~~~~~
<https://data.gov.cz/zdroj/ovm/00025593>   <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>   <http://schema.org/Organization> .
<https://data.gov.cz/zdroj/ovm/00025593>   <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>   <http://data.europa.eu/m8g/PublicOrganisation> .
~~~~~~~~~~~~

Výsledný příklad už je plnohodnotným vyjádřením znalostního grafu v RDF modelu.
Následující obrázek jej vizualizuje.

{% include image.html 
   url="../attachments/články/znalostní-grafy/rdf-čsú-03.svg"
   description="Znalostní graf o ČSÚ v modelu RDF"
%}

### Výhody modelu RDF

První výhodou modelu RDF je, že pro identifikaci věcí používá IRI.
Při publikaci na webu je pak doporučováno používat IRI, která jsou zároveň URL.
To umožňuje standardními nástroji IRI dereferencovat, tj. na bázi protokolu HTTP je vyhledávat a získávat jejich reprezentaci.
Jak jsme již psali výše, na každé IRI uvedené v příkladech výše můžete ze svého prohlížeče přistoupit a dereferencovat jej.

Jako hlavní výhoda modelu RDF je většinou uváděna jeho flexibilita.
Máme-li IRI věci, můžeme o ní vyjádřit v podobě RDF trojice jakékoliv tvrzení nezávisle na tom, jaká jiná tvrzení jsme my nebo někdo jiný o věci vyjádřili.
Jednoduše přidáme novou trojici nebo trojice.
Protože reprezentace tvrzení v RDF modelu není vázaná žádným schématem, není nutné cokoliv kvůli přidání nových trojic měnit.
Pokud potřebujeme přestrukturovat již vyjádřená tvrzení, můžeme původní ponechat kvůli zpětné kompatibilitě s nástroji, které je využívají, a přidat nové vyjádření v nových trojicích.
Např. můžeme z nějakého důvodu potřebovat vyjádřit název ČSÚ pomocí vlastnosti [`http://www.w3.org/2004/02/skos/core#prefLabel`](http://www.w3.org/2004/02/skos/core#prefLabel) ze slovníku SKOS.
Nemusíme kvůli tomu odstraňovat tvrzení o názvu ČSÚ vyjádřeném pomocí vlastnosti [`http://schema.org/name`](http://schema.org/name) ze slovníku schema.org.
Můžeme v datech ponechat obě trojice.

~~~~~~
<https://data.gov.cz/zdroj/ovm/00025593>   <http://schema.org/name>   "Český statistický úřad" .
<https://data.gov.cz/zdroj/ovm/00025593>   <http://www.w3.org/2004/02/skos/core#prefLabel>   "Český statistický úřad" .
~~~~~~~~~~~~

Model RDF také zajímavě pomáhá při zajišťování interoperability, což ve světě otevřených dat obzvlášť oceníme.
Různí zpracovatelé dat mohou rozumět různým jazykům.
Různým jazykům v modelu RDF odpovídají různé slovníky.
Jeden nástroj může rozumět slovníku schema.org, jiný pak slovníku SKOS.
Výše uvedený příklad poskytuje údaje o ČSÚ pro oba nástroje.
Ač se tedy může zdát, že příklad obsahuje duplicitu, zdvojení je právě z důvodu zajištění interoperability.

Jiný případ související s interoperabilitou je, když dva datové zdroje poskytují data reprezentovaná v modelu RDF a jeden zpracovatel je zpracovává.
Z obou datových zdrojů snadno vytvoříme jeden balík dat tím, že prostě slijeme trojice získané z obou datových zdrojů na jedno místo a můžeme s daty bez dalších úprav pracovat.
Jak přesně s nimi můžeme pracovat bude předmětem dalšího dílu tohoto seriálu.

Ideální pro takové slévání trojic je, pokud pro stejné věci používají oba datové zdroje stejná IRI.
Představme si to na příkladu znalostního grafu Národního katalogu otevřených dat a znalostního grafu Registru práv a povinností, o kterém jsme také psali v minulém díle.
Oba datové zdroje poskytují údaje o ČSÚ v podobě RDF trojic.
Představme si, že oba používají pro identifikaci ČSÚ IRI [`https://data.gov.cz/zdroj/ovm/00025593`](https://data.gov.cz/zdroj/ovm/00025593).
Potom po slití trojic z obou datových zdrojů máme pohromadě trojice, které mají ve svém subjektu toto IRI a můžeme s nimi rovnou pracovat jako s jedním celkem.
Výsledek slití ukazuje následující obrázek.
Zelené šipky reprezentují RDF trojice ze znalostního grafu Národního katalogu otevřených dat.
Oranžové šipky reprezentují RDF trojice ze znalostního grafu Registru práv a povinností.
Oranžové šipky vedoucí ze zeleného uzlu reprezentujícího ČSÚ značí, že znalostní graf Registru práv a povinností používá pro identifikaci ČSÚ IRI ze znalostního grafu Národního katalogu otevřených dat.

{% include image.html 
   url="../attachments/články/znalostní-grafy/rdf-čsú-04.svg"
   description="Snadné slévání RDF trojic z různých datových zdrojů"
%}

Na obrázku můžete také vidět, že znalostní graf Registru práv a povinností specifikuje adresní místo sídla ČSÚ.
Adresní místo chápe jako věc, pro níž používá IRI z domény Českého úřadu zeměměřičského a katastrálního (ČÚZK).
Fialová hrana na obrázku značí RDF trojici ze znalostního grafu RÚIAN, který spravuje ČÚZK.
Na obrázku tak vidíme trojice ze tří různých znalostních grafů.
Abychom s nimi mohli pracovat, nemusíme dělat nic víc, než je slít na jedno místo.

Výše uvedená situace ale neodpovídá skutečnosti.
Ve skutečnosti není vhodné ve znalostním grafu Registru práv a povinností používat k identifikaci ČSÚ IRI ze znalostního grafu Národního katalogu otevřených dat.
Jde např. o dereferencování.
Prostřednictvím dereferencování tohoto IRI se vždy dostaneme pouze na tvrzení ze znalostního grafu Národního katalogu otevřených dat, nikoliv na tvrzení ze znalostního grafu Registru práv a povinností.
Proto používá znalostní graf Registru práv a povinností pro identifikaci ČSÚ vlastní IRI [`https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/00025593`](https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/00025593).
Tím ale přicházíme o výhodu popsanou výše.
Jedná se o běžnou situaci, kdy různé datové zdroje identifikují stejnou věc svými vlastními a tudíž různými identifikátory.
Většina datových modelů a jazyků řeší tuto situaci obdobou klíčů a cizích klíčů.
Někde ve schématu, které je vyjádřeno jinde, v jiném jazyku a v jiném modelu, je popsáno, jakým způsobem se na sebe reprezentace věcí odkazují.
Přímo v datech tato informace obsažena není.
V modelu RDF je naopak možné ji zaznamenat přímo jako součást dat stejně jako jakékoliv jiné tvrzení a to v podobě trojice s predikátem, který je k tomu přímo určený.
Jedná se o predikát [`http://www.w3.org/2002/07/owl#sameAs`](http://www.w3.org/2002/07/owl#sameAs) ze slovníku OWL.
Pomocí něj vyjádříme, že dva různé uzly identifikované různými IRI ve skutečnosti reprezentují tutéž věc.
Situaci, kdy oba znalostní grafy identifikují ČSÚ jiným IRI, ukazuje následující obrázek.
Trojice vyjadřující, že obě IRI reprezentují ČSÚ, je součástí znalostního grafu Národního katalogu otevřených dat.

{% include image.html 
   url="../attachments/články/znalostní-grafy/rdf-čsú-05.svg"
   description="Využití vlatnosti owl:sameAs ze slovníku OWL pro propojování znalostních grafů"
%}

Pokud přistoupíte na IRI z příkladu výše, zjistíte, že vizualizovaná reprezentace již odpovídá tomu, jak skutečně oba znalostní grafy vypadají.
Zjistíte také, že znalostí graf Registru práv a povinností nezavádí vlastní IRI pro adresní místo.
V tomto případě používá IRI ze znalostního grafu RÚIAN.
Zde to stačí, protože žádné vlastní tvrzení o adresním místě, kromě jeho přiřazování jako adresy sídla, znalostní graf Registru práv a povinností neobsahuje a není potřeba při dereferencování IRI adresního místa zpřístupňovat nějaká pro Registr práv a povinností specifická tvrzení.
Znalostní graf Registru práv a povinností tak jen odkazuje do znalostního grafu RÚIAN.

Výše uvedený příklad předpokládá, že propojení různých IRI ČSÚ je s pomocí predikátu [`http://www.w3.org/2002/07/owl#sameAs`](http://www.w3.org/2002/07/owl#sameAs) vyjádřeno v jednom nebo druhém znalostním grafu.
Co když ale není?
Nezbývá nám pak než postupovat stejně jako postupujeme s jakýmikoliv jinými daty.
RDF model nám v této situaci nijak nepomůže.
Musíme zjistit, jaké jiné identifikace ČSÚ (nebo o orgánech veřejné moci obecně) máme v obou znalostních grafech k dispozici a vyzkoumat, které z nich můžeme pro integraci použít.
RDF model nám oproti jiným datovým modelům a jazykům pomáhá při exploraci neznámých dat, ale to probereme až v některém z dalších dílů seriálu.

Ve chvíli, kdy ale souvislost objevíme (např. IČO orgánů veřejné správy), RDF model je opět ve hře.
Objevené souvislosti, které nyní v nějaké podobě držíme u sebe v nějaké naší vlastní reprezentaci, můžeme vyjádřit v podobě RDF trojic s predikátem [`http://www.w3.org/2002/07/owl#sameAs`](http://www.w3.org/2002/07/owl#sameAs) a publikovat je na web, aby je ostatní mohli využít a nemuseli data integrovat tak jako my.
My jsme v této situaci svůj čas neušetřili, ale ostatní zpracovatelé dat ano.
Tuto situaci znázorňuje další obrázek, kdy trojice propojující obě IRI ČSÚ, je součástí znalostního grafu vygenerovaného někým, kdo souvislost mezi oběma IRI objevil.
Příslušná vizuální hrana je na obrázku zobrazena jako modrá přerušovaná šipka.

{% include image.html 
   url="../attachments/články/znalostní-grafy/rdf-čsú-06.svg"
   description="Integrace dvou znalostních grafů zpracovatelem dat"
%}

### Formáty pro zápis RDF modelu

Výše uvedený zápis je již validním zápisem vyjádření dat v RDF modelu.
RDF model ale můžeme zapsat v různých formátech.
Pojďme se ve zbytku článku podívat na 2 nejčastěji používané formáty pro zápis znalostních grafů vyjádřených v modelu RDF.

#### Formát Turtle

Výše uvedené příklady byly vyjádřeny ve formátu [Turtle][turtle].
Formát Turtle ale zavádí tzv. "syntaktický cukr", který zápis RDF trojic významně zkracuje.
Prvním vylepšením je, že RDF trojice se stejným subjektem, tj. tvrzení o stejné věci, můžeme seskupit a subjekt uvést pouze jednou.
Zbylé dvojice s predikátem a objektem oddělujeme středníkem.
Další seskupení můžeme provést v případě trojic se stejným subjektem i predikátem tak, že objekty uvádíme oddělené čárkou.
Výsledná notace je potom následující.

~~~~~~
<https://data.gov.cz/zdroj/ovm/00025593>   <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>   <http://schema.org/Organization>, <http://data.europa.eu/m8g/PublicOrganisation> ;
                                           <http://schema.org/name>   "Český statistický úřad" ;
                                           <https://data.gov.cz/slovník/ovm/datováSchránka>   <https://data.gov.cz/zdroj/datové-schránky/2gfaasy> ;
                                           <https://data.gov.cz/slovník/ovm/právníForma>   <https://data.gov.cz/zdroj/ovm/právní-forma/325> .
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   <http://purl.org/dc/terms/publisher>   <https://data.gov.cz/zdroj/ovm/00025593> .
~~~~~~~~~~~~

Dále je možné využít *prefixování*, abychom nemuseli v IRI vypisovat jejich opakující se části.
Prefix umožňuje zkrátit všechna IRI se stejným začátkem tak, že místo opakujícího se začátku uvedeme identifikátor prefixu.
Prefix je deklarován přímo jako součást zápisu RDF trojic.
Následující příklad zavedení a využití prefixů demonstruje.
Jedná se o zápis stejných dat, jako v předchozím příkladu.

~~~~~~
@prefix schema: <http://schema.org/> .
@prefix isa: <http://data.europa.eu/m8g/> .
@prefix sovm: <https://data.gov.cz/slovník/ovm/> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix ovm: <https://data.gov.cz/zdroj/ovm/> .
@prefix ds: <https://data.gov.cz/zdroj/datové-sady/> .
@prefix dsch: <https://data.gov.cz/zdroj/datové-schránky/> .
@prefix pf: <https://data.gov.cz/zdroj/právní-formy/> .

ovm:00025593  rdf:type  schema:Organization, isa:PublicOrganisation ;
              schema:name "Český statistický úřad" ;
              sovm:datováSchránka dsch:2gfaasy ;
              sovm:právníForma  pf:325 .
ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19  dct:publisher ovm:00025593 .
~~~~~~~~~~~~

Zkrátit zápis můžeme také vyjádřením predikátu `http://www.w3.org/1999/02/22-rdf-syntax-ns#type` symbolem `a`, jak ukazuje následující zápis.

~~~~~~
@prefix schema: <http://schema.org/> .
@prefix isa: <http://data.europa.eu/m8g/> .
@prefix sovm: <https://data.gov.cz/slovník/ovm/> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix ovm: <https://data.gov.cz/zdroj/ovm/> .
@prefix ds: <https://data.gov.cz/zdroj/datové-sady/> .
@prefix dsch: <https://data.gov.cz/zdroj/datové-schránky/> .
@prefix pf: <https://data.gov.cz/zdroj/právní-formy/> .

ovm:00025593  a  schema:Organization, isa:PublicOrganisation ;
              schema:name "Český statistický úřad" ;
              sovm:datováSchránka dsch:2gfaasy ;
              sovm:právníForma  pf:325 .
ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19  dct:publisher ovm:00025593 .
~~~~~~~~~~~~

Ve formátu Turtle lze také pohodlně zapsat další drobné detaily modelu RDF, které jsou ale v mnoha situacích potřebné.
Jedná se o datové typy literálů a označení jazyka, ve kterém je daný literál uveden.
Pro jeden literál nemůžeme oba nástroje kombinovat.
Literál označený jazykem je automaticky chápán s datovým typem řetězec.
Pro datové typy literálů RDF model přepoužívá datové typy jazyka [XML Schema Definition (XSD)](https://www.w3.org/TR/xmlschema-2/).
Oba konstrukty demonstruje následující příklad.
Ukazuje název ČSÚ v češtině a angličtině a přidává nové tvrzení o ČSÚ o datu jeho vzniku.
Datum vzniku je typován na datový typ xsd:dateTime (datový typ datum definovaný ve specifikaci XSD).

~~~~~~
@prefix schema: <http://schema.org/> .
@prefix isa: <http://data.europa.eu/m8g/> .
@prefix sovm: <https://data.gov.cz/slovník/ovm/> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix ovm: <https://data.gov.cz/zdroj/ovm/> .
@prefix ds: <https://data.gov.cz/zdroj/datové-sady/> .
@prefix dsch: <https://data.gov.cz/zdroj/datové-schránky/> .
@prefix pf: <https://data.gov.cz/zdroj/právní-formy/> .

ovm:00025593  a  schema:Organization, isa:PublicOrganisation ;
              schema:name "Český statistický úřad"@cs, "Czech statistical office"@en ;
              schema:foundingDate   "1969-01-08"^^xsd:date ;
              sovm:datováSchránka dsch:2gfaasy ;
              sovm:právníForma  pf:325 .
ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19  dct:publisher ovm:00025593 .
~~~~~~~~~~~~

#### Formát JSON-LD

Distribuce znalostních grafů ve formátu Turtle je vhodná např. pro situace, kdy chceme umožnit konzumentům pohodlné nahrání dat do jejich grafové databáze.
Formát ale nevyhovuje všem.
Např. v prostředí webových aplikací často vytvářených s využitím jazyka JavaScript se někteří programátoři s formátem Turtle neztotožňují a tvrdošíjně trvají na svém formátu pro výměnu dat prostřednictvím API, kterým je formát JSON.
RDF komunita vyšla tomuto požadavku vstříc a zavedla formát pro serializaci dat v RDF modelu JSON-LD.
Zápis RDF dat ve formátu JSON-LD má dvě části.
Jednou částí je reprezentace dat ve standardním formátu JSON.
Druhou částí je potom tzv. kontext, který definuje mapování klíčů použitých v JSON zápisu do RDF modelu.
Nebudeme zde popisovat všechny konstrukty formátu JSON-LD.
Zájemce odkazujeme na specifikaci aktuální verze [JSON-LD 1.1][json-ld11], která je protkána řadou příkladů.
Navíc pro experimentování s JSON-LD existuje [hřiště][json-ld-playground], jehož vyzkoušení určitě doporučujeme.

Uveďme si pouze příklad zápisu znalostního grafu v RDF modelu z našeho příkladu.
Na následujícím příkladu vidíte standardní JSON strukturu.
Vidíte běžnou JSON strukturu.
Snad jen klíče `@id` a `@type` vám mohou připadat nezvyklé.
Ty JSON-LD potřebuje k rozpoznání IRI věci, o níž data v JSON zápisu zapisujeme, a k rozpoznání IRI typů.
Pokud vám v klíčích vadí `@`, můžete je v kontextu přejmenovat.

~~~~~~
{
  "@id": "ovm/00025593",
  "@type": ["Organization","PublicOrganization"],
  "jméno": "Český statistický úřad",
  "založeno": "1969-01-08",
  "schránka": "datové-schránky/2gfaasy",
  "forma": "právní-forma/325",
  "datové-sady": ["datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19"]
}
~~~~~~~~~~~~

A v následujícím výpisu vidíte příslušný JSON-LD kontext, jehož aplikací na JSON reprezentaci pomocí JSON-LD procesoru získáme stejné RDF trojice, jaké specifikuje výše uvedený příklad zapsaný ve formátu Turtle.
Můžete si to [vyzkoušet na hřišti](https://json-ld.org/playground/#startTab=tab-nquads&json-ld=%7B%22%40context%22%3A%7B%22%40base%22%3A%22https%3A%2F%2Fdata.gov.cz%2Fzdroj%2F%22%2C%22Organization%22%3A%22https%3A%2F%2Fschema.org%2FOrganization%22%2C%22PublicOrganization%22%3A%22http%3A%2F%2Fdata.europa.eu%2Fm8g%2FPublicOrganization%22%2C%22jm%C3%A9no%22%3A%22https%3A%2F%2Fschema.org%2Fname%22%2C%22zalo%C5%BEeno%22%3A%7B%22%40id%22%3A%22https%3A%2F%2Fschema.org%2FfoundingDate%22%2C%22%40type%22%3A%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23date%22%7D%2C%22schr%C3%A1nka%22%3A%7B%22%40id%22%3A%22https%3A%2F%2Fdata.gov.cz%2Fslovn%C3%ADk%2Fovm%2Fdatov%C3%A1Schr%C3%A1nka%22%2C%22%40type%22%3A%22%40id%22%7D%2C%22forma%22%3A%7B%22%40id%22%3A%22https%3A%2F%2Fdata.gov.cz%2Fslovn%C3%ADk%2Fovm%2Fpr%C3%A1vn%C3%ADForma%22%2C%22%40type%22%3A%22%40id%22%7D%2C%22datov%C3%A9-sady%22%3A%7B%22%40reverse%22%3A%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Fpublisher%22%2C%22%40container%22%3A%22%40set%22%2C%22%40type%22%3A%22%40id%22%7D%7D%2C%22%40id%22%3A%22ovm%2F00025593%22%2C%22%40type%22%3A%5B%22Organization%22%2C%22PublicOrganization%22%5D%2C%22jm%C3%A9no%22%3A%22%C4%8Cesk%C3%BD%20statistick%C3%BD%20%C3%BA%C5%99ad%22%2C%22zalo%C5%BEeno%22%3A%221969-01-08%22%2C%22schr%C3%A1nka%22%3A%22datov%C3%A9-schr%C3%A1nky%2F2gfaasy%22%2C%22forma%22%3A%22pr%C3%A1vn%C3%AD-forma%2F325%22%2C%22datov%C3%A9-sady%22%3A%5B%22datov%C3%A9-sady%2Fhttp---vdb.czso.cz-pll-eweb-package_show-id-290038r19%22%5D%7D).

~~~~~~
{
  "@context": {
    "@base": "https://data.gov.cz/zdroj/",
    "Organization": "http://schema.org/Organization",
    "PublicOrganization": "http://data.europa.eu/m8g/PublicOrganization",
    "jméno": "http://schema.org/name",
    "založeno": {
      "@id": "http://schema.org/foundingDate",
      "@type": "http://www.w3.org/2001/XMLSchema#date"
    },
    "schránka": {
      "@id": "https://data.gov.cz/slovník/ovm/datováSchránka",
      "@type": "@id"
    },
    "forma": {
      "@id": "https://data.gov.cz/slovník/ovm/právníForma",
      "@type": "@id"
    },
    "datové-sady": {
      "@reverse": "http://purl.org/dc/terms/publisher",
      "@container": "@set",
      "@type": "@id"
    }
  }
}
~~~~~~~~~~~~

## Závěr

Tento článek slouží jako úvod do modelu RDF. Ten je podán jako model hodící se pro počítačově zpracovatelný zápis znalostních grafů vhodný pro publikaci na webu.
Ukázali jsme si principy modelu a také jeho výhody, které při jeho využití pro publikaci otevřených dat na webu získáme.
Ukázali jsme si také 2 nejpoužívanější formáty pro jeho zápis.
V dalším dílu si ukážeme, že data reprezentovaná v modelu RDF můžeme chápat databázově a dotazovat se nad nimi pomocí dotazovacího jazyka SPARQL.

[link_previous]: https://data.gov.cz/články/znalostní-grafy-01-úvod "Minulý díl"
[json-ld11]: https://www.w3.org/TR/json-ld11/ "JSON-LD 1.1"
[json-ld-playground]: https://json-ld.org/playground/ "JSON-LD playground"
[rdf11]: https://www.w3.org/TR/rdf11-primer/ "RDF" 
[iri]: https://ofn.gov.cz/propojen%C3%A1-data/draft/#URI-IRI-URL "IRI"
[turtle]: http://www.w3.org/TR/turtle/ "Turtle"