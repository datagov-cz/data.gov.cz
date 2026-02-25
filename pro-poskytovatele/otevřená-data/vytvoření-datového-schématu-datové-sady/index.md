---
layout: poskytovatelé-otevřená-data-level-2
title: Vytvoření datového schématu datové sady
ref: ProPoskytovatele-VytvořeníDatovéhoSchématu
lang: cs
---

Datové schéma určuje, jak jsou strukturovány jednotlivé záznamy v datové sadě.
Struktura datové sady by měla být vyjádřena v podobě strojově čitelného datového schématu.
Je to běžnou praxí ve světě databází a výměny dat mezi softwarovými systémy.
Protože se řada typů datových sad často opakuje napříč různými orgány veřejné správy (OVS), má navíc smysl datová schémata pro tyto typy datových sad předpřipravit a nabídnout všem OVS k využití. To výrazně zvyšuje potenciál otevřených dat.
Pokud někdo vytvoří softwarovou aplikaci, která rozumí danému datovému schématu, bude z toho profitovat každá organizace, která dané datové schéma použije pro svoji datovou sadu, neboť s ní bude aplikace fungovat. 

## Datová schémata doporučených datových sad 
Pro vybrané datové sady uvedené ve vzorových publikačních plánech jsou datová schémata postupně připravována formou [otevřených formálních norem](https://ofn.gov.cz/). 

Připravená datová schémata obsahují: 
  * výchozí konceptuální schéma řešené datové oblasti,
  * výčet a definice všech souvisejících atributů,
  * definice všech vazeb na jiné potenciální externí datové oblasti,
  * technologickou reprezentaci datového schématu v závislosti na zvoleném publikačním formátu datové sady. 

Výčet a definice atributů i vazeb datové sady jsou uváděny v maximalistické (plně zachycující celý kontext řešené datové oblasti) podobě, pro vlastní použití připraveného schématu je ale vždy rozhodující pohled publikující organizace, výběr publikovaných atributů je tedy plně v její kompetenci, ale musí vždy platit, že: 
  * výsledná (redukovaná) množina vybraných atributů k publikaci reprezentuje stále smysluplnou a použitelnou datovou sadu pro její opětovné využití a zhodnocování,
  * je dodržena standardizované struktura schématu datové sady, včetně názvů a použitých datových typů (s výjimkou nevyužitých atributů a vazeb),
  * výsledné datové schéma je pravdivě zachyceno i v doprovodné dokumentaci. 

V případě zjištění, že některý důležitý atribut v připraveném datovém schématu schází, je nutné kontaktovat autory příslušné [otevřené formální normy](https://ofn.gov.cz/) za účelem její doplnění. 

## Vytvoření nového datového schématu 
Postup přípravy datového schématu se liší v závislosti na zvoleném stupni otevřenosti. 

## Technické standardy vytváření datových schémat pro datové sady na stupni otevřenosti 3 
Na stupni otevřenosti 3 by měly mít distribuce datových sad přiřazeno datové schéma, které popisuje požadovanou syntaktickou strukturu distribucí.
Pro vyjádření datového schématu je nutno zvolit vhodný jazyk pro jeho vyjádření. 
Jazyk závisí na datovém formátu, který byl zvolen pro vyjádření distribuce. 

* V případě formátu CSV je nutno schéma vyjádřit dle webového standardu [CSV on the Web](https://www.w3.org/TR/tabular-metadata/).
* V případě formátu XML je nutno schéma vyjádřit v jazyku [XML Schema](https://www.w3.org/XML/Schema).
* V případě formátu JSON je nutno schéma vyjádřit v jazyku [JSON Schema](https://json-schema.org) a validovat pomocí validátoru, např. [https://tryjsonschematypes.appspot.com/#validate](ttps://tryjsonschematypes.appspot.com/#validate) či [https://www.jsonschemavalidator.net/](https://www.jsonschemavalidator.net/).

Při návrhu datových schémat dodržujte následující pravidla: 
* Pro primitivní datové typy používejte datové typy jazyka XML Schema (i v případě CSV a JSON souborů).
* Schéma každé distribuce musí být volně dostupné ke stažení v síti WWW.
* Distribuce se stejnou strukturou mají společné schéma.

### Definice vlastního schématu pro data v CSV 
Při práci s formátem CSV se nejprve seznamte s [nejčastějšími chybami při použití formátu CSV](špatná-praxe/csv/). 
Pro řadu datových sad formát CSV není vhodný a je lepší je publikovat v některém ze strukturovanějších formátů, viz [Otevřené formální normy](https://data.gov.cz/ofn/). 

Prvním krokem k tvorbě schématu pro CSV data je určení toho, jak se budou jmenovat jednotlivé sloupce CSV souboru, jaké budou mít datové typy a jaký budou mít význam.
Pro dosažení maximální míry interoperability postupujte v následujících krocích: 
1. Stanovte si jmenné konvence pro sloupce, např.
    * název v češtině
    * všechna písmena malá (lower case)
    * víceslovné názvy spojené podtržítkem **_**
    * hierarchickou vazbu reprezentujte také podtržítkem **_**, např. **pokutovaný_ič, pokutovaný_název**

2. Pro sloupce použijte vhodný datový typ jazyka XML Schema.

3. Význam sloupců popište slovně. 

Jako jazyk pro definici schématu pro data v CSV použijte standard [Metadata Vocabulary for Tabular Data](https://www.w3.org/TR/tabular-metadata/) z rodiny standardů W3C [CSV on the Web](https://www.w3.org/standards/techs/csv#w3c_all) (CSVW). Standard říká, jak má být CSV soubor publikovaný na webu popsán pomocí přídavného JSON-LD souboru, který je publikován spolu s CSV souborem.

### Metadata Vocabulary for Tabular Data (CSV on the Web, CSVW)
Použití CSVW schématu si ilustrujeme na zjednodušeném příkladu pro následující dvousloupcové CSV: 

```
"idhod","hodnota" 
"747627675","14.91" 
"747628556","14.96"
```

Jednoduchý CSVW deskriptor (JSON soubor) pro tento CSV soubor může vypadat například takto:
```
{ 
  "@context": ["http://www.w3.org/ns/csvw",{"@language": "cs"}], 
  "url": "012052-17data091517.csv", 
  "tableSchema": { 
    "columns": [{ 
      "name": "idhod", 
      "titles": "idhod", 
      "dc:description":"unikátní identifikátor údaje Veřejné databáze ČSÚ", 
      "required": true, 
      "datatype": "string" 
    }, { 
      "name": "hodnota", 
      "titles": "hodnota", 
      "dc:description":"zjištěná hodnota", 
      "required": true, 
      "datatype": "number" 
    }], 
    "primaryKey": "idhod" 
  } 
} 
```
Jednotlivé položky v JSON deskriptoru mají následující význam: 
  * Položka **@context** musí obsahovat minimálně URL [http://www.w3.org/ns/csvw](http://www.w3.org/ns/csvw), v tomto případě obsahuje ještě specifikaci češtiny jakožto výchozího jazyka textových položek schématu.
  * Položka **url** musí obsahovat (relativní či absolutní) URL popisovaného CSV souboru. Každý CSV soubor má tedy vlastní JSON deskriptor.
  * Položka **tableSchema** musí obsahovat buďto URL jiného JSONu se samotným schématem, což je použitelné pro sdílení jednoho schématu více CSV soubory a jejich JSON deskriptory, nebo přímo schéma samotné.
  * Položka **columns** obsahuje pole s popisky jednotlivých sloupců.
  * Položka **primaryKey** obsahuje identifikaci primárního klíče v CSV tabulce. To může být buďto jeden sloupec, nebo pole sloupců.
  * Položka **name** specifikuje *identifikátor* sloupce v CSV souboru jakožto objektu. Nejedná se o název sloupce v souboru, ten je popsán dále jako jedna z jeho vlastností. Musí to být validní část URI, případná diakritika zde tak musí být zakódovaná pomocí procentového kódování.
  * Položka **titles** obsahuje jeden či více (jako pole) názvů sloupců v CSV. Lze tedy použít jedno schéma pro více CSV souborů, které mají dokonce různé názvy sloupců, případně v hlavičce používají různé jazyky.
  * Položka **dc:description** obsahuje textový popis významu sloupce.
  * Položka **required** specifikuje, zda je hodnota v tomto sloupci povinná či nikoliv.
  * Pro datové typy v položce **datatype** lze použít [hodnoty založené na datových typech XML Schema](https://www.w3.org/TR/tabular-metadata/#datatypes). 

Vystavený JSON deskriptor dle CSVW by pak měl být poskytován s HTTP hlavičkou **Content-Type: application/csvm+json; charset=utf-8** a pojmenován podle popisovaného souboru, tedy pro **xxx.csv** to bude **xxx.csv-metadata.json.** 

Toto je jen minimalistický příklad toho, co lze popsat pomocí CSVW. Pro využití všech možností je třeba postupovat dle [specifikace](https://www.w3.org/TR/tabular-metadata/). 

### Sdílené schéma pro více CSV souborů 
Deskriptor CSV souboru lze oddělit od schématu, pokud schéma chceme použít pro více CSV souborů. Pak budeme mít JSON soubor **schema.json** se schématem samotným: 

```
{ 
  "@context": ["http://www.w3.org/ns/csvw",{"@language": "cs"}], 
  "columns": [{ 
    "name": "idhod", 
    "titles": "idhod", 
    "dc:description":"unikátní identifikátor údaje Veřejné databáze ČSÚ", 
    "required": true, 
    "datatype": "string" 
  }, { 
    "name": "hodnota", 
    "titles": "hodnota", 
    "dc:description":"zjištěná hodnota", 
    "required": true, 
    "datatype": "number" 
  }], 
  "primaryKey": "idhod" 
}
```
A deskriptor každého CSV souboru se na něj bude odkazovat (nejspíše však pomocí plného, absolutního URL): 

```
{ 
  "@context": ["http://www.w3.org/ns/csvw",{"@language": "cs"}], 
  "url": "012052-17data091517.csv", 
  "tableSchema": "schema.json" 
}
```

### Validace CSVW 
CSV popsané pomocí CSVW lze nejjednodušeji validovat nástrojem [csvw-validator](https://csvw.opendata.cz/).
Ten má jednak sdílené webové rozhraní, a také lze spustit z příkazové řádky nebo použít jako webovou službu. 

CSV popsané pomocí CSVW lze validovat například pomocí nástroje [rdf-tabular](https://github.com/ruby-rdf/rdf-tabular), který stačí nasměrovat na CSV soubor, a v případě nedodržení doporučeného pojmenování JSON deskriptoru i na tento deskriptor.
Tedy **rdf validate xxx.csv** 

CSV popsané pomocí CSVW lze validovat například pomocí knihovny [csvlint.rb](https://github.com/theodi/csvlint.rb), kterou stačí spustit a nasměrovat na JSON deskriptor, který pak ukazuje na CSV data, případně schéma.
Tedy **csvlint -s schema.json** pro lokální schéma v souboru v souborovém systému, nebo s plným URL deskriptoru, např. **csvlint - s** [https://data.mvcr.gov.cz/soubory/czechpoint/2007.json](https://data.mvcr.gov.cz/soubory/czechpoint/2007.json). 
Webové rozhraní [csvlint](https://csvlint.io/) doporučení CSV on the Web neumí! 

### Definice vlastního schématu pro data v XML
Pro popis XML schématu se používá jazyk XML Schema. 

Prvním krokem k tvorbě schematu pro XML data je určení toho, jak se budou jmenovat a jak budou zanořeny jednotlivé elementy v XML souboru, jaké budou mít datové typy a jaký budou mít význam.
Pro dosažení maximální míry interoperability postupujte v následujících krocích: 
1. Podívejte se na [již existující standardy](https://data.gov.cz/pro-poskytovatele/otevřená-data/technické-standardy-stupeň-otevřenosti-3/) pro datové sady.
    * Pokud se některá datová sada shoduje s daty, které chcete publikovat, použijte její předpřipravené schéma. Existující schéma nemusíte daty pokrývat celé, všechny položky jsou volitelné.
    * Pokud se žádná existující datová sada neshoduje s daty, které chcete publikovat, vytvořte nové schéma. 
2. Pokud některá datová sada pokrývá data, která chcete publikovat pouze částečně, použijte v novém schématu pro pokryté položky XML elementy s datovými typy z existujícího XML schématu.
3. Dosud nepokryté elementy, tj. ty, jejichž význam neodpovídá žádnému datovému typu v žádné existující datové sadě ze vzorových publikačních plánů, pojmenujte dle stejných jmenných konvencí. Tj.
    * vytvořte si vlastní XML namespace
    * názvy elementů či atributů v češtině
    * všechna písmena malá (lower case)
    * žádná diakritika
    * víceslovné názvy spojené podtržítkem **_**
    * hierarchickou vazbu reprezentujte vnořeným XML elementem 
4. Pro nově definované elementy použijte vhodný datový typ jazyka XML Schema. 

## Technické standardy vytváření datových schémat pro datové sady na stupni otevřenosti 5
Obdobou datového schématu pro datové sady na stupni otevřenosti 5 jsou tzv. ontologie (někdy též zvané slovníky). 
Zatímco však ve světě tabulkových či XML dat popisuje datové schéma striktní syntaxi např. CSV či XML distribucí datových sad, ontologie popisuje datovou sadu na konceptuální úrovni.
Konkrétně definuje třídy a vlastnosti, které lze v RDF distribucích datových sad použít.

### Standardy pro vyjádření a zápis ontologií
Standardem pro zápis ontologií jsou jazyky RDF Schema ([RDFS](ttp://www.w3.org/TR/rdf-schema/)) a Web Ontology Language ([OWL]( http://www.w3.org/TR/owl)). 
Oba jazyky přepokládají ontologii reprezentovanou v datovém modelu RDF a umožňují využít pro zápis ontologie libovolný formát pro zápis RDF datového modelu (viz [Otevřená formální norma pro Propojená data](https://ofn.gov.cz/propojená-data/)).

### Standardy pro tvorbu ontologií
Primárním cílem při návrhu tříd a vlastností použitých v RDF distribuci datové sady musí být maximální znovupoužitelnost údajů v distribuci napříč různými SW aplikacemi. 
Proto je standardem co nejvíce využívat tříd a vlastností z již existujících ontologií. Datový model RDF je připraven k tomu, aby bylo možné v jedné RDF distribuci kombinovat třídy a vlastnosti z několika různých ontologií. 
V rámci různých iniciativ již vznikla v mezinárodním kontextu celá řada ontologií, které jsou katalogizovány např. v projektu Linked Open Vocabularies ([LOV](http://lov.okfn.org)).

Při návrhu tříd a vlastností použitých v RDF distribuci je proto standardem postupovat následovně:
* Identifikujeme typy entit vyskytujících se v datové sadě a jejich atributy a vztahy mezi nimi. (Jinými slovy tvoříme konceptuální schéma datové sady.)
* Vybereme třídy a vlastnosti definované existujícími ontologiemi, jejichž sémantika přímo odpovídá sémantice typů entit a jejich atributům a vztahům mezi nimi, které jsme identifikovali v kroku 1.
* V případě, že se v kroku 2 nepodařilo pro některé typy entit, resp. jejich atributy nebo vztahy mezi nimi nalézt odpovídající třídy či vlastnosti z existujících ontologií, vybereme třídy a vlastnosti definované existujícími ontologiemi, jejichž sémantika je obecnější než sémantika těchto zbylých typů entit, resp. jejich atributů nebo vztahů mezi nimi. Pro tyto zbylé typy entit, resp. jejich atributy a vztahy mezi nimi vytvoříme nové třídy, resp. vlastnosti v naší vlastní ontologii a propojíme je s vybranými třídami a vlastnostmi z existujících ontologií s obecnější sémantikou pomocí ISA vazby (pro technické vyjádření ISA vazby viz dále).
* V případě, že se v kroku 3 nepodařilo pro některé typy entit, resp. jejich atributy nebo vztahy mezi nimi nalézt třídy či vlastnosti z existujících ontologií s obecnější sémantikou, vytvoříme pro ně nové třídy, resp. vlastnosti v naší vlastní ontologii.
* V případě, že po vypublikování RDF distribuce zjistíme, že jsme v kroku 2 udělali chybu a zavedli jsme třídu či vlastnost pro typ entity, resp. atribut či vztah, pro níž existuje sémantický ekvivalent v existující ontologii, nebo zjistíme, že se objevila nová ontologie s takovým sémantickým ekvivalentem, propojíme naši třídu či vlastnost s jejím nalezeným sémantickým ekvivalentem pomocí ekvivalenční vazby (pro technické vyjádření ekvivalenční vazby viz dále).
* V případě, že po vypublikování RDF distribuce zjistíme, že jsme v kroku 3 udělali chybu a neidentifikovali jsme ISA vazbu, nebo se objevila nová ontologie pro kterou ISA vazba existuje, tuto ISA vazbu vytvoříme (pro technické vyjádření ISA vazby viz dále).

Standardem je využívání především následujících ontologií:
* [DCMI Metadata Terms](http://purl.org/dc/terms/)
* [Simple Knowledge Organization System](http://www.w3.org/2004/02/skos/core#)
* [Schema.org](http://schema.org/)
* [Data Cube Vocabulary](http://www.w3.org/TR/vocab-data-cube/)
* [Friend-of-a-Friend](http://xmlns.com/foaf/0.1/)
* [The organization ontology](http://www.w3.org/TR/vocab-org/)
* [FRBR-aligned bibliographic ontology](http://purl.org/spar/fabio/)
  
### Standardy propojování prvků ontologií
Mezi prvky ontologií (tj. mezi třídami nebo mezi vlastnostmi) mohou existovat sémantické vazby. Může se jednat o vazby mezi prvky stejné ontologie nebo mezi prvky dvou různých ontologií. Tyto vazby je nutno v ontologiích vyjádřit. Vazbu vždy vyjádříme v ontologii, která definuje prvek, pro který chceme vazbu vyjádřit. 

Pro vyjádření vazby postupujeme podle následujícího standardu:
* pro vyjádření ISA vazby mezi třídami A a B, kdy třída A má specifičtější sémantiku a třída B má obecnější sémantiku, vytvoříme v zápisu ontologie následující trojici:
  * subjekt : IRI třídy A
  * predikát : **<code>http://www.w3.org/2000/01/rdf-schema#subClassOf</code>**
  objekt : IRI třídy B
* pro vyjádření ISA vazby mezi vlastnostmi A a B, kdy vlastnost A má specifičtější sémantiku a vlastnost B má obecnější sémantiku, vytvoříme v zápisu ontologie následující trojici
  * subjekt : IRI vlastnosti A
  * predikát : **<code>http://www.w3.org/2000/01/rdf-schema#subPropertyOf</code>**
  * objekt : IRI vlastnosti B
* pro vyjádření ekvivalenční vazby mezi třídami A a B, kdy sémantika třídy A je ekvivalentní sémantice třídy B, vytvoříme v zápisu ontologie následující trojici
  * subjekt : IRI třídy A
  * predikát : **<code>http://www.w3.org/2002/07/owl#equivalentClass</code>**
  objekt : IRI třídy B
* pro vyjádření ekvivalenční vazby mezi vlastnostmi A a B, kdy sémantika vlastnosti A je ekvivalentní sémantice vlastnosti B, vytvoříme v zápisu ontologie následující trojici
  * subjekt : IRI vlastnosti A
  * predikát : **<code>http://www.w3.org/2002/07/owl#equivalentProperty</code>**
  * objekt : IRI vlastnosti B

### Standardy tvorby IRI tříd a vlastností definovaných v ontologiích
V případě, že poskytovatel dat definuje vlastní predikáty či třídy v podobě ontologie, potom pro ně musí volit IRI ve tvaru URL v následující podobě:

* v případě, že poskytovatel zavádí pouze jednu ontologii, má ontologie IRI ve tvaru **{základ-IRI}/ontology**, kde **{základ-IRI}** je základ IRI poskytovatele dat (viz [Otevřená formální norma pro Propojená data](https://ofn.gov.cz/propojená-data/));
* v případě, že poskytovatel zavádí více ontologií, mají ontologie IRI ve tvaru **{základ-IRI}/ontology/{určení-ontologie}** kde **{určení-ontologie}** je validní část IRI, která jednoznačně určuje ontologii v kolekci ontologií definovaných poskytovatelem;
* třídy mají IRI ve tvaru **{IRI-ontologie)/{NázevTřídy}** kde **{IRI-ontologie}** je IRI ontologie, ve které je třída definována a **{NázevTřídy}** je název třídy unikátní v rámci kolekce všech tříd zavedených v ontologii zapsaný v CamelCase notaci (tj. jednotlivá slova tvořící název třídy jsou spojena za sebe, první znak každého slova je velký a všechny ostatní znaky jsou malé);
* predikáty mají IRI ve tvaru **{IRI-ontologie)/{názevPredikátu}** kde **{IRI-ontologie}** je IRI ontologie, ve které je třída definována a **{názevPredikátu}** je název predikátu unikátní v rámci kolekce všech predikátů zavedených v ontologii zapsaný v camelCase notaci (tj. jednotlivá slova tvořící název třídy jsou spojena za sebe, první znak každého slova kromě prvního slova je velký a všechny ostatní znaky jsou malé).
