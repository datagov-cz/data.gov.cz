---
layout: post
detail: true
title: "Série Znalostní grafy: Díl 2: Datový model RDF"
ref: znalostni-grafy-rdf
lang: cs
image: ../attachments/články/znalostní-grafy/znalostní-grafy-02.webp
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
Abyste si např. mohli přečíst tento článek, váš prohlížeč prostřednictvím protokolu HTTP vyhledal v prostředí webu URL `https://data.gov.cz/články/znalostní-grafy-02-rdf` a získal HTML reprezentaci článku, kterou pro vás zpracoval a zobrazil vám ji.

RDF používá IRI, většinou právě v podobě URL, pro identifikaci uzlů znalostních grafů.
Uvažme například znalostní graf Národního katalogu otevřených dat, který jsme viděli již v předchozím dílu.
Jako uzel je v něm reprezentována datová sada se statistikou cizinců podle státního občanství, věku a pohlaví za rok 2018.
Uzel má přiřazen IRI [`https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19`](https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19).
K IRI můžete přistoupit (klikněte na něj).
Váš prohlížeč prostřednictvím HTTP protokolu IRI vyhledá v prostředí webu a získá počítačovou reprezentaci údajů o datové sadě dostupnou na serveru lokalizovaném s pomocí tohoto IRI.
Díky HTTP protokolu ještě probíhá zajímavá komunikace mezi vaším prohlížečem a serverem, kterou nazýváme *HTTP content negotiation*, kdy váš prohlížeč požaduje od serveru reprezentaci údajů o datové sadě v konkrétním počítačovém formátu.
Prohlížeč je určen k tomu, aby věci zobrazoval v podobě čitelné pro člověka.
Proto požaduje reprezentaci ve formátu HTML.
Pokud by ale k IRI přistupoval jiný typ klienta, např. nějaká aplikace, která chce s reprezentací dále počítačově pracovat, požádá o jiný formát.
Formátům se budeme věnovat v závěru tohoto článku.

### Reprezentace tvrzení o věcech v podobě RDF trojic

Jak jsme si řekli v minulém dílu, ve znalostních grafech reprezentujeme věci a tvrzení o nich.
V modelu RDF vyjadřujeme tvrzení o věci ve vazbě na IRI uzlu, který věc v grafu reprezentuje.
Máme-li tedy datovou sadu z příkladu výše a uzel, který ji reprezentuje ve znalostním grafu Národního katalogu otevřených dat, můžeme na IRI [`https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19`](https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19) navázat tvrzení např. o názvu datové sady nebo o klíčových slovech, která ji charakterizují.

RDF model umožňuje vyjadřovat tvrzení o věcech v podobě jednoduchých vět, které gramaticky sestávají z podmětu, přísudku a předmětu.
Ukažme si příklady takových vět.
Pro jednoduchost budeme v příkladech datovou sadu pojmenovávat slovy "statistika cizinců" místo původního dlouhého názvu.

* Statistika cizinců má název "Cizinci podle státního občanství, věku a pohlaví - rok 2018".
* Statistika cizinců je charakterizována klíčovým slovem "státní občanství".
* Statistika cizinců je charakterizována klíčovým slovem "cizinec".

Věty se mohou zdát z češtinářského hlediska trochu kostrbaté, ale přesně takto uvažujeme v datovém modelu RDF.
Vlastně rozpadneme údaje o věcech do takto jednoduchých, můžeme říci atomických vět.
V RDF modelu je nazýváme *tvrzení* (angl. *statements*).
Tvrzení samozřejmě nevyjadřujeme jako věty v přirozeném jazyku, ale v počítačové notaci.
RDF model zavádí následující strukturu zvanou *trojice*:  

~~~~~~
subjekt predikát objekt .
~~~~~~~~~~~~

Subjekt je obdobou podmětu, predikát je obdobou přísudku a objekt je obdobou předmětu.
Výše uvedené věty tak zůstávají stejné, jenom jsou trochu více strukturované, jak ukazuje následující příklad.

~~~~~~
"Statistika cizinců"   "má název"    "Cizinci podle státního občanství, věku a pohlaví - rok 2018".
"Statistika cizinců"   "je charakterizována klíčovým slovem"   "státní občanství".
"Statistika cizinců"   "je charakterizována klíčovým slovem"   "cizinec".
~~~~~~~~~~~~

Čili např. hned v první větě je "Statistika cizinců" subjektem, "má název" predikátem a "Cizinci podle státního občanství, věku a pohlaví - rok 2018" objektem.
Možná přemýšlíte, jak výše uvedené věty souvisí se znalostními grafy, jsou to přeci jen věty.
Ve skutečnosti je souvislost zcela přirozená.
Vlastně kdykoliv používáme přirozený jazyk, vyjadřujeme svým způsobem nějaký znalostní graf.
Běžný lidský jazyk je velmi komplexní a počítač jej neumí jako grafovou strukturu reprezentovat automaticky, i když počítačová lingvistika učinila v tomto směru značný pokrok a to i v tak složitých jazycích, jakým je čeština.
Pokud si ale běžný jazyk omezíme výše uvedeným způsobem, znalostní graf je v něm patrný - každá věta popisuje hranu spojující uzly definované subjektem a objektem.
Predikát je pak pojmenováním hrany.
Tři věty uvedené výše tak popisují znalostní graf, který je graficky vyjádřen na následujícím obrázku.

{% include image.html 
   url="../attachments/články/znalostní-grafy/rdf-čsú-01.svg"
   description="Znalostní graf reprezentovaný větami o datové sadě se statistikou cizinců vyjádřeným v omezené češtině"
%}


#### Vyjádření subjektů a objektů

Výše uvedený zápis je jenom přiblížení ke správnému vyjádření tvrzení v modelu RDF.
Jak jsme si řekli výše, k identifikaci věcí nepoužívá RDF model řetězce, ale IRI.
Např. jsme si řekli, že ve znalostním grafu Národního katalogu otevřených dat má naše datová sada přiřazeno IRI [`https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19`](https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19).
V trojicích z našeho příkladu je tedy místo řetězce "Statistika cizinců" k identifikaci datové sady používáno toto IRI.
Syntakticky je IRI uváděno ve špičatých závorkách.

~~~~~~
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   "má název"    "Cizinci podle státního občanství, věku a pohlaví - rok 2018".
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   "je charakterizována klíčovým slovem"   "státní občanství".
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   "je charakterizována klíčovým slovem"   "cizinec".
~~~~~~~~~~~~

Obecně platí, že subjektem v trojici je vždy IRI věci, o které v trojici něco tvrdíme.
Objektem v trojici může být buď IRI věci nebo tzv. *literál*, což je primitivní datová hodnota uvedená v uvozovkách.
Výše uvedené tři trojice mají jako svoje objekty literály - název datové sady a klíčová slova.
Uvažujme nyní následující větu.

~~~~~~
"Národní katalog otevřených dat"   "obsahuje datovou sadu"    "Statistika cizinců".
~~~~~~~~~~~~

Zde se naše datová sada vyskytuje v místě objektu.
V této trojici bude tedy v místě objektu IRI a ne literál jako v příkladech výše.
V místě subjektu bude IRI Národního katalogu otevřených dat.
Výsledek vidíte v příkladu níže.

~~~~~~
<https://data.gov.cz/zdroj/katalog/NKOD>   "obsahuje datovou sadu"   <https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19> .
~~~~~~~~~~~~

Následující obrázek je vizuální reprezentací 4 výše uvedených trojic.

{% include image.html 
   url="../attachments/články/znalostní-grafy/rdf-čsú-02.svg"
   description="Znalostní graf reprezentovaný větami o datové sadě se statistikou cizinců s využitím IRI na místě subjektů a objektů"
%}


#### Vyjádření predikátů

Stále ale ještě nemáme správné vyjádření v modelu RDF.
IRI totiž RDF model používá i pro predikáty.
Tj. neidentifikuje vlastnosti věcí pomocí řetězců jako předchozí příklad, ale chápe vlastnosti také jako věci, které mají svá IRI.
Zatímco ale pro entity, o kterých něco tvrdíme, vytváříme vlastní IRI, např. v poddoméně `https://data.gov.cz/zdroj/`, tak pro vlastnosti vlastní IRI zavádět nemusíme.
Můžeme využívat to, co již existuje. 
Vlastnosti a jejich IRI jsou definovány v tzv. *slovnících*.
Existuje mnoho slovníků, ze kterých můžeme vybírat.
Takové přepoužívání existujících slovníků významně přispívá k interoperabilitě znalostních grafů.
Software, který rozumí nějakému slovníku, rozumí všem znalostním grafům, které tento slovník používají.
Opět je zde paralela s lidským jazykem.
Řekne-li někdo "má název", rozumíte významu takového sousloví, protože použil slova z jazyka, který znáte, tj. z češtiny.
Řekne-li ale "tiene un nombre", možná už nerozumíte, protože použil slova ze španělštiny.
Řekne-li "एक नाव आहे", pravděpodobně sáhnete po překladači.
Mimochodem, jedná se o [Maráthštinu](https://www.wikidata.org/wiki/Q1571) a tento odkaz využívá znalostní graf Wikidata k anotaci textu, čímž jej zajímavě obohacuje, ale o tom až v nějakém jiném dílu našeho seriálu.

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
* [DCAT-AP](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/news/dcat-ap-release-201) - rozšíření slovníku DCAT pro katalogizaci datových sad v rámci EU
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
Pokud se podíváte do slovníku [DCMI Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/), naleznete v něm definici vlastnosti s IRI [`http://purl.org/dc/terms/title`](http://purl.org/dc/terms/title).
Vlastnost je definována jako univerzální vlastnost pro specifikaci názvů věcí.
Ve znalostním grafu Národního katalogu otevřených dat je použita pro vyjádření názvů datových sad.

~~~~~~
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   <http://purl.org/dc/terms/title>   "Cizinci podle státního občanství, věku a pohlaví - rok 2018" .
~~~~~~~~~~~~

Pro vyjádření klíčových slov charakterizujících datovou sadu je použita vlastnost s IRI [`http://www.w3.org/ns/dcat#keyword`](http://www.w3.org/ns/dcat#keyword) ze slovníku [DCAT](http://www.w3.org/TR/vocab-dcat/).

~~~~~~
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   <http://www.w3.org/ns/dcat#keyword>   "státní občanství" .
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   <http://www.w3.org/ns/dcat#keyword>   "cizinec" .
~~~~~~~~~~~~

Poslední trojice přiřazující datovou sadu k Národnímu katalogu otevřených dat má jako predikát vlastnost s IRI [`http://www.w3.org/ns/dcat#dataset`](http://www.w3.org/ns/dcat#dataset) ze slovníku [DCAT](http://www.w3.org/TR/vocab-dcat/).

~~~~~~
<https://data.gov.cz/zdroj/katalog/NKOD>   <http://www.w3.org/ns/dcat#dataset>   <https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19> .
~~~~~~~~~~~~

Možná se ptáte, kde lze hledat existující slovníky.
Existuje nějaký katalog slovníků?
Ano, existuje např. katalog [Linked Open Vocabularies (LOV)](https://lov.linkeddata.es/dataset/lov/).

#### Přiřazování věcí do tříd

Když uvažujeme o věcech, často si je klasifikujeme podle jejich společných charakteristik.
Rozlišujeme tak např. knihy, vozidla, organizace, zvířata nebo lidi.
Možná se divíte, proč říkáme, že člověk je věc, ale chápejte prosím v kontextu tohoto článku pojem věc jako něco velmi obecného, ve smyslu cokoliv nebo kdokoliv.
Pokud o něčem víme, že je vozidlem, pak o tom uvažujeme a přemýšlíme jinak, než pokud o něčem víme, že je organizací.
Klasifikace nám udává základní charakter dané věci.
Znalost základního charakteru je důležitá i pro strojové zpracování, abychom danou věc interpretovali a zpracovali správně.
V modelu RDF tuto základní klasifikaci věcí provádíme pomocí přiřazování věcí do tzv. *tříd*.

Třída v RDF modelu je chápána jako množina věcí, které mají stejné charakteristiky.
Třídou tak může být např. množina všech datových sad.
Do této množiny patří např. naše datová sada z příkladů výše.
Z pohledu RDF modelu je třída opět věcí a má tak své IRI.
Přiřazení věci do třídy specifikujeme trojicí, kde subjektem je věc, predikátem je vlastnost definovaná přímo ve specifikaci modelu RDF `<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>` a objektem je třída.
Ve znalostním grafu Národního katalogu otevřených dat je např. použita třída ze slovníku [DCAT](http://www.w3.org/TR/vocab-dcat/) s IRI `<http://www.w3.org/ns/dcat#Dataset>`, která je množinou všech datových sad.
Konkrétně je přiřazení datové sady do třídy vyjádřeno v RDF modelu jako následující trojice.

~~~~~~
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>   <http://www.w3.org/ns/dcat#Dataset> .
~~~~~~~~~~~~

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
Např. můžeme z nějakého důvodu potřebovat vyjádřit název datové sady pomocí vlastnosti [`http://www.w3.org/2004/02/skos/core#prefLabel`](http://www.w3.org/2004/02/skos/core#prefLabel) ze slovníku [SKOS](http://www.w3.org/TR/skos-primer).
Nemusíme kvůli tomu odstraňovat již existující tvrzení o názvu.
Můžeme v datech ponechat obě trojice.

~~~~~~
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   <http://purl.org/dc/terms/title>   "Cizinci podle státního občanství, věku a pohlaví - rok 2018" .
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   <http://www.w3.org/2004/02/skos/core#prefLabel>   "Cizinci podle státního občanství, věku a pohlaví - rok 2018" .
~~~~~~~~~~~~

Model RDF také zajímavě pomáhá při zajišťování interoperability, což ve světě otevřených dat obzvlášť oceníme.
Různí zpracovatelé dat mohou rozumět různým jazykům.
Různým jazykům v modelu RDF odpovídají různé slovníky.
Jeden nástroj může rozumět slovníku [DCMI Metadata Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/), jiný pak slovníku [SKOS](http://www.w3.org/TR/skos-primer).
Výše uvedený příklad poskytuje údaje o datové sadě pro oba nástroje.
Ač se tedy může zdát, že příklad obsahuje duplicitu, zdvojení je právě z důvodu zajištění interoperability.

Jiný případ související s interoperabilitou je, když dva datové zdroje poskytují data reprezentovaná v modelu RDF a jeden zpracovatel je zpracovává.
Z obou datových zdrojů snadno vytvoříme jeden balík dat tím, že prostě slijeme trojice získané z obou datových zdrojů na jedno místo a můžeme s daty bez dalších úprav pracovat.

Ideální pro takové slévání trojic je, pokud pro stejné věci používají oba datové zdroje stejná IRI.
Představme si to na příkladu znalostního grafu Národního katalogu otevřených dat a znalostního grafu Registru práv a povinností, o kterém jsme také psali v minulém díle.
Znalostní graf Národního katalogu otevřených dat obsahuje pro datovou sadu také tvrzení o jejím poskytovateli.

~~~~~~
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   <http://purl.org/dc/terms/publisher>   <https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/00025593> .
~~~~~~~~~~~~

Jedná se o poskytovatele s IRI [`https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/00025593`](https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/00025593) a jde o Český statistický úřad (ČSÚ).
O tomto IRI ale nenajdeme ve znalostním grafu Národního katalogu otevřených dat zajímavá tvrzení, kde by byl ČSÚ na místě subjektu.
Najdeme je ale ve znalostním grafu Registru práv a povinností.
Zkuste si na uvedené IRI ČSÚ kliknout.
Dostanete se do znalostního grafu Registru práv a povinností, kde vidíte detailní sadu tvrzení o ČSÚ.
Po slití trojic z obou znalostních grafů máme pohromadě tvrzení o ČSÚ a můžeme s nimi pracovat.
Můžeme také říci, že se oba dva znalostní grafy vzájemně obohacují a nám jako zpracovatelům dat odpadá jejich pracná integrace.
Výsledek slití ukazuje následující obrázek.
Zelené šipky reprezentují RDF trojice ze znalostního grafu Národního katalogu otevřených dat.
Oranžové šipky reprezentují RDF trojice ze znalostního grafu Registru práv a povinností.

{% include image.html 
   url="../attachments/články/znalostní-grafy/rdf-čsú-04.svg"
   description="Snadné slévání RDF trojic z různých datových zdrojů"
%}

Ve skutečnosti se v obrázku vyskytuje ještě fialová barva.
Ta označuje znalostní graf Registru územních identifikátorů, adres a nemovitostí (RÚIAN).
Uvedené IRI je funkční, ale vede pouze na HTML reprezentaci adresního místa.
ČÚZK se na publikaci v modelu RDF ale připravuje.

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
<https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19>   <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>   <http://www.w3.org/ns/dcat#Dataset> ;
      <http://purl.org/dc/terms/title>   "Cizinci podle státního občanství, věku a pohlaví - rok 2018" ;
      <http://www.w3.org/ns/dcat#keyword>   "státní občanství", "cizinec" .

<https://data.gov.cz/zdroj/katalog/NKOD>   <http://www.w3.org/ns/dcat#dataset>   <https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19> .
~~~~~~~~~~~~

Dále je možné využít *prefixování*, abychom nemuseli v IRI vypisovat jejich opakující se části.
Prefix umožňuje zkrátit všechna IRI se stejným začátkem tak, že místo opakujícího se začátku uvedeme identifikátor prefixu.
Prefix je deklarován přímo jako součást zápisu RDF trojic.
Následující příklad zavedení a využití prefixů demonstruje.
Jedná se o zápis stejných dat, jako v předchozím příkladu.

~~~~~~
@prefix dct: <http://purl.org/dc/terms/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix ds: <https://data.gov.cz/zdroj/datové-sady/> .

ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19 rdf:type dcat:Dataset ;
      dct:title "Cizinci podle státního občanství, věku a pohlaví - rok 2018" ;
      dcat:keyword "státní občanství", "cizinec" .

<https://data.gov.cz/zdroj/katalog/NKOD> dcat:dataset ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19 .
~~~~~~~~~~~~

Zkrátit zápis můžeme také vyjádřením predikátu `http://www.w3.org/1999/02/22-rdf-syntax-ns#type` symbolem `a`, jak ukazuje následující zápis.

~~~~~~
@prefix dct: <http://purl.org/dc/terms/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix ds: <https://data.gov.cz/zdroj/datové-sady/> .

ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19 a dcat:Dataset ;
      dct:title "Cizinci podle státního občanství, věku a pohlaví - rok 2018" ;
      dcat:keyword "státní občanství", "cizinec" .

<https://data.gov.cz/zdroj/katalog/NKOD> dcat:dataset ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19 .
~~~~~~~~~~~~

Ve formátu Turtle lze také pohodlně zapsat další drobné detaily modelu RDF, které jsou ale v mnoha situacích potřebné.
Jedná se např. o označení jazyka, ve kterém je daný literál uveden pomocí tzv. language tagu.

~~~~~~
@prefix dct: <http://purl.org/dc/terms/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix dcat: <http://www.w3.org/ns/dcat#> .
@prefix ds: <https://data.gov.cz/zdroj/datové-sady/> .

ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19 a dcat:Dataset ;
      dct:title "Cizinci podle státního občanství, věku a pohlaví - rok 2018"@cs ;
      dcat:keyword "státní občanství"@cs, "cizinec"@cs .

<https://data.gov.cz/zdroj/katalog/NKOD> dcat:dataset ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19 .
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
Snad jen klíče `@id` a `@type` vám mohou připadat nezvyklé.
Ty JSON-LD potřebuje k rozpoznání IRI věci, o níž data v JSON zápisu zapisujeme, a k rozpoznání IRI typů.
Pokud vám v klíčích vadí `@`, můžete je v kontextu přejmenovat.

~~~~~~
{
  "@id": "http---vdb.czso.cz-pll-eweb-package_show-id-290038r19",
  "@type": "Dataset",
  "jméno": "Cizinci podle státního občanství, věku a pohlaví - rok 2018",
  "klíčová-slova": ["státní občanství", "cizinec"],
  "katalog": "https://data.gov.cz/zdroj/katalog/NKOD"
}
~~~~~~~~~~~~

A v následujícím výpisu vidíte příslušný JSON-LD kontext, jehož aplikací na JSON reprezentaci pomocí JSON-LD procesoru získáme stejné RDF trojice, jaké specifikuje výše uvedený příklad zapsaný ve formátu Turtle.
Můžete si to [vyzkoušet na hřišti](https://json-ld.org/playground/#startTab=tab-nquads&json-ld=%7B%22%40context%22%3A%7B%22%40base%22%3A%22https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F%22%2C%22Dataset%22%3A%22http%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23Dataset%22%2C%22jm%C3%A9no%22%3A%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Ftitle%22%2C%22kl%C3%AD%C4%8Dov%C3%A1-slova%22%3A%22http%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23keyword%22%2C%22katalog%22%3A%7B%22%40reverse%22%3A%22http%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23dataset%22%2C%22%40type%22%3A%22%40id%22%7D%7D%2C%22%40id%22%3A%22http---vdb.czso.cz-pll-eweb-package_show-id-290038r19%22%2C%22%40type%22%3A%22Dataset%22%2C%22jm%C3%A9no%22%3A%22Cizinci%20podle%20st%C3%A1tn%C3%ADho%20ob%C4%8Danstv%C3%AD%2C%20v%C4%9Bku%20a%20pohlav%C3%AD%20-%20rok%202018%22%2C%22kl%C3%AD%C4%8Dov%C3%A1-slova%22%3A%5B%22st%C3%A1tn%C3%AD%20ob%C4%8Danstv%C3%AD%22%2C%22cizinec%22%5D%2C%22katalog%22%3A%22https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fkatalog%2FNKOD%22%7D&context=%7B%22%40context%22%3A%7B%22%40base%22%3A%22https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F%22%2C%22Dataset%22%3A%22http%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23Dataset%22%2C%22jm%C3%A9no%22%3A%22http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Ftitle%22%2C%22kl%C3%AD%C4%8Dov%C3%A1-slova%22%3A%22http%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23keyword%22%2C%22katalog%22%3A%7B%22%40reverse%22%3A%22http%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23dataset%22%2C%22%40type%22%3A%22%40id%22%7D%7D%7D).

~~~~~~
{
  "@context": {
    "@base": "https://data.gov.cz/zdroj/datové-sady/",
    "Dataset": "http://www.w3.org/ns/dcat#Dataset",
    "jméno": "http://purl.org/dc/terms/title",
    "klíčová-slova": "http://www.w3.org/ns/dcat#keyword",
    "katalog": {
      "@reverse": "http://www.w3.org/ns/dcat#dataset",
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