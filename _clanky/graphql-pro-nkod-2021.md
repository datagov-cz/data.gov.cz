---
layout: post
title: "GraphQL pro NKOD"
detail: true
ref: graphql-pro-nkod
lang: cs
image: ../attachments/články/znalostní-grafy/znalostní-grafy-03.webp
author: petr_škoda
---
V současné době je možné využít GraphQL pro dotazování nad [Národním katalogem otevřených data](https://data.gov.cz/datové-sady).
Co ale GraphQL je, jak vypadá dotaz v tomto jazyce a jaká data je možné získat? 
Právě na tyto otázky se snaží odpovědět tento článek.

<!--more-->

<style type="text/css" scoped>
  div.highlight { padding: 1rem; }
  pre.highlight { margin: 0; }
  .figures { display: flex; flex-wrap: wrap; justify-content: space-between; }
  .figures figure { width: 30% }
</style>

GraphQL bylo vytvořeno v roce 2012 a zveřejněno o tři roky později.
Pro zajištění neutrality dalšího rozvoje byla jeho správa v roce 2019 předána [nadaci GraphQL](https://graphql.org/foundation/).
Členové této nadace nejen že rozvíjejí specifikaci GraphQL, ale také přispívají do jejího bohatého ekosystému.

GraphQL je nezávislé na konkrétním programovacím jazyce a je možné na něj nahlížet z pohledu klienta či serveru. 
V tomto článku se budeme věnovat pouze pohledu ze strany klienta, pro kterého je GraphQL zejména dotazovacím jazykem.

## JSON
GraphQL je jazykem pro zpřístupnění dat zejména webovým aplikacím.
Za tímto účelem je zcela běžné předávat data ve formátu [JSON](https://www.rfc-editor.org/info/rfc8259).
Než budeme pokračovat pojďme si krátce tento formát představit v několika příkladech.

JSON je textový formát, který umí reprezentovat jednoduché hodnoty, pole a kolekce klíč-hodnota, tzv. objekty.
Jednoduchou hodnotou je třeba číslo či textový řetězec.
Pole je kolekcí jednoduchých hodnot, polí nebo objektů. 
V následujícím příkladu je pole, které obsahuje číslo a dva textové řetězce.
~~~~~~json
[1, "dvě", "3"]
~~~~~~~~~~~~
Jak je z příkladu vidět, v poli je možné hodnoty libovolně kombinovat.

Další konstrukcí formátu JSON je objekt. 
Objekt je tvořen kolekcí dvojic klíč a hodnota, kde ke každému klíči je přiřazena právě jedna hodnota. 
Klíče jsou textové řetězce, které musí být v objektu unikátní, jinými slovy nemohou se opakovat.  
Hodnotou může být jednoduchá hodnota, pole nebo další objekt. 
Dobrým příkladem objektu může být třeba nákupní seznam.
V tomto seznamu máme pro každou položku uloženou informaci, jaké množství chceme koupit.
~~~~~~json
{
 "banán": 3,
 "mléko": 2
}
~~~~~~~~~~~~

Zjevnou nevýhodou tohoto seznamu je, že není jasné co dané množství znamená.
Tento nedostatek je možné vyřešit třeba přidáním informace o jednotce.
Tedy zda-li chceme koupit litr mléka, jedno balení, či jeden kartón.
Upravený nákupní seznam by pak mohl vypadat následovně:
~~~~~~json
{
 "banán": {
   "počet": 3,
   "jednotka": "balení"
 }
 "mléko": {
   "počet": 2,
   "jednotka": "litry"
 }
}
~~~~~~~~~~~~

Podobně složitým příkladem je úryvek z reprezentace datové sady [Agendy](https://data.gov.cz/datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2F00007064%2F9c73b802263c5e0ccf5542f10fbc35bb).
~~~~~~json
{
  "iri": "https://data.gov.cz/zdroj/datové-sady/00007064/9c73b802263c5e0ccf5542f10fbc35bb",
  "název": {
    "česky": "Agendy"
  },
  "popis": {
    "česky": "Agendy evidované v Registru práv a povinností ve smyslu § 51 zákona č. 111/2009 Sb. o základních registrech."
  }
}
~~~~~~~~~~~~
V tomto příkladu je kromě IRI datové sady možné najít také její `název` a `popis` v českém jazyce.

## První dotaz v GraphQL
GraphQL dotaz je vlastně popisem očekávané struktury výsledku.
Výsledkem GraphQL dotazu je dokument ve formátu JSON.
Ačkoliv by zde bylo možné citovat ze [specifikace](https://spec.graphql.org/) raději si ukážeme základy na několika dotazech pro GraphQL Národního katalogu otevřených dat.

Prvním příkladem je dotaz na seznam datových sad.
Naším cílem je pro každou datovou sadu získat pouze IRI, neboli identifikátor.
~~~~~~graphql
query {
  datasets {
    data {
      iri
    }
  }
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/graphql?query=%7B%0A%20%20datasets%20%7B%0A%20%20%20%20data%20%7B%0A%20%20%20%20%20%20iri%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

Než se podíváme na výsledek, pojďme si daný dotaz rozebrat.
Na prvním řádku se pomocí klíčového slova `query` specifikuje, že se jedná o dotaz pro získání dat.
Použití toho klíčového slova v tomto případě není nutné.
Důvodem existence klíčového slova `query `je skutečnost, že GraphQL podporuje i jiné typy dotazů.
Například mutace, které je možné použít pro modifikaci dat.
V tomto článku se však jinými typy dotazů nebudeme zabývat.

Zbytek dotazu ke pak specifický pro Národní katalog otevřených dat. 
Již od pohledu je vidět, že se budeme ptát na datové sady a jejich IRI.

Výsledek dotazu, dle aktuálního obsahu Národního katalogu otevřených dat, vypadá následovně. 
~~~~~~json
{
  "data": {
    "datasets": {
      "data": [
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00006947/0f352af848d522696c0d8adc1b9f95d6"
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00006947/0c6cce0e6c77738d68f4e11cc1fc5084"
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00006947/3e5f40668f4ab122cade395a9880c542"
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00006947/c92eb754a516fe3faac664ff4dd1f785"
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00006947/c0ceba553c597d9a697d20a7fb225949"
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00006947/af9a9c37834114cb496fea29bd4bf7fb"
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00006947/fc6df4bb0668ff83f70800606e5d01a6"
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00006947/a77f25e1dfee2b3ec4be09f02c5fc197"
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00006947/d1c1bd05b7b309254bc1a6c973e8bffd"
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00006947/4e4762f06ca63a491efc360e793abc09"
        }
      ]
    }
  }
}
~~~~~~~~~~~~
<br/>

Je možné si všimnou podobnosti struktury mezi dotazem a výsledkem. 
Zejména z hlediska struktury `datasets`, `data` a `iri`. 
Tato není náhoda a jedná se o jednu ze základních vlastností GraphQL. 
Skrze dotaz si klient vybírá nejen jaká data chce získat ale současně tím také specifikuje strukturu odpovědi.
Tato vlastnost GraphQL umožňuje klientovi snadno získat požadovaná data v očekávané struktuře, což ulehčuje následné zpracování získaných dat.

Další důležitou vlastností GraphQL je, že ignoruje bíle znaky, například mezery a konce řádků, v dotazu. 
Je tedy zcela na uživateli zda-li se rozhodne dotaz vizuálně strukturovat, či se zbaví zbytečných bílých znaků za účelem snížení velikosti dotazu.
Předchozí dotaz by tedy šel zapsat třeba následovně:
~~~~~~graphql
{datasets{data{iri}}}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/graphql?query=query%7Bdatasets%7Bdata%7Biri%7D%7D%7D)

## Filtry v jazyce GraphQL 
Výsledkem předchozích dotazů jsou údaje o deseti datových sadách, nabízí se otázka proč zrovna deset a jak získat informaci o zbývajících datových sadách.
Odpovědí na první otázku je, že omezení velikosti výsledku na deset datových sad je výchozím nastavením na straně serveru.
Jak je možné tuto hodnotu změnit z pozice dotazu?
Odpovědí na tuto otázkou jsou filtry.

Filtry jsou způsobem jakým je možné v dotazu předat informace, které mají ovlivnit vyhodnocení dotazu.
Následující dotaz je rozšířením dotazů předchozích:
~~~~~~graphql
query {
  datasets(offset: 2, limit: 2) {
    data {
      iri
    }
  }
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/graphql?query=query%20%7B%20datasets(offset%3A%202%2C%20limit%3A%202)%20%7B%20data%20%7B%20iri%20%7D%20%7D%20%7D)

Porovnáním s prvním dotazem je vidět, že filtry jsou specifikovány v kulatých závorkách.
Filtry jsou použité na objektu `datasets` a to konkrétně nastavením hodnot `offset` a `limit` na hodnoty 2 a 3.
V případě GraphQL pro Národní katalog otevřených tak dotaz vrátí přeskočí první dvě datové sady a vrátí tři následující.
Tento přístup k omezení vrácených dat, neboli stránkování, je běžný pro různé dotazovací jazyky, například SQL. 

Filtry je možné použít i za jiným účelem. 
Na následujícím příkladu je ilustrováno využití filtrů k získání datových sad od [vybraného poskytovatele](https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/00007064).
~~~~~~graphql
{
  datasets (
    filters: {
      publisherIri: "https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/00007064"
    }
  ) {
    data {
      iri
    }
  }
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/graphql?query=%7B%0A%20%20datasets%20(%0A%20%20%20%20filters%3A%20%7B%0A%20%20%20%20%20%20publisherIri%3A%20%22https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forg%C3%A1n-ve%C5%99ejn%C3%A9-moci%2F00007064%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20data%20%7B%0A%20%20%20%20%20%20iri%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

Konkrétní možnosti využití filtrů, stejně tak jako formulace zbytku dotazu jsou omezeny konkrétním GraphQL schématem.


## Specifika GraphQL v českém prostředí
Než se budeme věnovat tomu, odkud se data berou a na co se uživatel může ptát, je třeba zmínit několik omezení GraphQL.

Hlavní nevýhodou je omezení klíčů, které se používají ve schématu i dotazu. 
Příkladem těchto klíčů z předchozího dotazu jsou hodnoty `datasets`, `data` a `iri`. 
Použité klíče bohužel nemohou, zjednodušeně řečeno, obsahovat písmena s diakritikou.
Ačkoliv v současné době existuje několik návrhů na úpravu GraphQL specifikace tak, aby bylo toto omezení odstraněno, jedná se zatím pouze o návrhy.

Není tedy možné v dotazu uvést klíč `název` ale pouze `nazev`.
Toto omezení se projevilo v GraphQL schématu Národního katalogu otevřených dat.
Místo `cestiny` bylo raději v definici schématu použito angličtiny. 
A co, že je to vlastně to schéma?

## GraphQL schéma
Základem každého GraphQL rozhraní je schéma, které určuje jaké dotazy je možné vykonávat.
Z pohledu dotazů pro získání dat (`query`), schéma specifikuje o jaká data a s jakými filtry si může klient požádat.
Neb by úplný popise možností specifikace GraphQL schématu vydal na několik článků, omezíme se zde pouze na nutné minimum, nutné pro navigaci schématem GraphQL Národního katalogu otevřených dat.

Schéma je silně typované a mimo samotných dat umožňuje i specifikaci filtrů.
Silná typovost znamená, že je každé položce přiřazený nějaký datový typ.
Počet stránek je tedy například celé číslo, název v českém jazyce je textovým řetězcem, datové sada je objektem.

Jak ale schéma vypadá, kde je možné ho najít a odkud se vůbec vzalo? 
Schéma GraphQl pro Národní katalog otevřených dat je založené na otevřené formální normě pro [katalogy otevřených dat](https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/2021-01-11/).
K prozkoumání GraphQL schématu slouží tzv. introspection, která uživateli umožňuje se dotazovat na samotným schématem opět pomocí jazyka GraphQL.
Samotné dotazy a jejich výsledky však nejsou snadno čitelné, důvodem je, že nejsou určeny lidem ale aplikacím pro strojové zpracování.
Pro jejich zobrazení je vhodné využit některého z bohaté sady nástrojů ekosystému kolem GraphQL. 

Je tak možné využít například nástroj [GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager) pro vizualizaci schématu.
Samotný nástroj nabízí, po troše klikání a kopírování, interaktivní pohled na schéma. 
Pro naše potřeby však stačí jeho statická verze.

{% include image.html 
   url="../attachments/články/graphql-pro-nkod-2021/graphql-voyager.svg"
   description="GraphQL schéma Národního katalogu otevřených dat"
%}

Schéma je nutné prohlížet zleva doprava. 
Vstupním bodem je `Query` ve kterém jsou definovány tři dotazy:
 * `dataset` - slouží k získání informací o jedné datové sadě
 * `datasets` - slouží k získání seznamu datových sad
 * `datasetsWithDistribution` - slouží k získání seznamu datových sad filtrovaných dle distribucí

Pro každý dotaz je na pravé straně specifikován datový typ. 
Například pro `datasets` je to `DatasetContainer`. 
Odpovídající šipka nás pak dovede k vizualizaci daného datového typu. 
Můžeme tedy vidět, že `DatasetContainer` obsahuje dva klíče `data` a  `pagination`.
První klíč, `data`, obsahuje pole datových sad. 
Druhý klíč, `pagination`, nese informaci o stránkování, konkrétně celkový počet datových sad odpovídající specifikovaným filtrům.

Pokud se na schéma pozorně podíváme, je možné v něm najít náš původní dotaz. 
Tedy z levé strany skrze `datasets`, `data`, `iri`.

Představme si situaci, kdy bychom rádi kromě IRI datové sady získali i její název, tedy `title`. 
Ze schématu je vidět, že `title` je reprezentován objektem, který má dva klíče `cs` a `en`.
Důvodem pro tuto skutečnost je, že datové sady mohou mít volitelně kromě českého názvu i název v anglickém jazyce.
S touto znalostí schématu jsme nyní schopni upravit dotaz tak, aby vracel nejen IRI ale i název v českém jazyce. 
~~~~~~graphql
query {
  datasets {
    data {
      iri
	  title {
	    cs
	  }	  
    }
  }
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/graphql?query=query%20%7B%0A%20%20datasets%20%7B%0A%20%20%20%20data%20%7B%0A%20%20%20%20%20%20iri%0A%09%20%20title%20%7B%0A%09%20%20%20%20cs%0A%09%20%20%7D%09%20%20%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=IntrospectionQuery)

výsledek na tento dotaz může vypadat, dle náplně Národního katalogu otevřených dat, následovně:
~~~~~~json
{
  "data": {
    "datasets": {
      "data": [
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00006599/869775980",
          "title": {
            "cs": "IS VaVaI: Číselník stavů uplatnění výsledku VaVaI"
          }
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/49370227/942853164",
          "title": {
            "cs": "Přehled příspěvků ČR mezinárodním organizacím v roce 2011 a 2018"
          }
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00025712/90195e72c409a72df1106ffce3702c65",
          "title": {
            "cs": "INSPIRE téma Adresy (AD)"
          }
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00025712/efb1991fdce883ba25bfcca677f6f7ad",
          "title": {
            "cs": "INSPIRE téma Budovy (BU)"
          }
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00025712/7be8acad87b452a3f0112ecef98eb870",
          "title": {
            "cs": "INSPIRE téma Rozšířené Parcely (CPX)"
          }
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00025712/165a95981c3f2f74d508d14c8d9fbafd",
          "title": {
            "cs": "INSPIRE téma Parcely (CP)"
          }
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00025712/fc2a4e7bdd8df139e5bd2b168987b0ed",
          "title": {
            "cs": "Geometrické plány ve formátu VFK distribuované po katastrálních územích"
          }
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00025712/9bc6bf4d40e1aa9aae897fc00eba3bb7",
          "title": {
            "cs": "Katastrální mapa ČR ve formátu DXF distribuovaná po katastrálních územích"
          }
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00025712/0e58a3865c7cab329401748512694c29",
          "title": {
            "cs": "Katastrální mapa ČR ve formátu SHP distribuovaná po katastrálních územích"
          }
        },
        {
          "iri": "https://data.gov.cz/zdroj/datové-sady/00025712/833131929f536e67688acc2bd3bf35da",
          "title": {
            "cs": "Katastrální mapa ČR ve formátu VFK distribuovaná po katastrálních územích"
          }
        }
      ]
    }
  }
}
~~~~~~~~~~~~
<br/>

Vizualizace schématu je vhodným nástrojem pro získání celkového přehledu.
Bohužel neobsahuje však všechny informace o schématu, chybí třeba informace o filtrech.

## GraphiQL
Řešením může být použití dalšího nástroje [GraphiQL](https://github.com/graphql/graphiql).
Tento nástroj slouží jako webový klient pro GraphQL a v případě Národního katalogu otevřených dat je možné ho najít na adrese [https://data.gov.cz/graphql](https://data.gov.cz/graphql).

{% include image.html 
   url="../attachments/články/graphql-pro-nkod-2021/graphiql.png"
   description="Rozhraní nástroje GraphiQL"
%}

Uživatelské rozhraní nástroje se skládá z několika hlavních částí. 
První částí (1) je textové pole, kam je možné vložit GraphQL dotaz.
V další částí (2) je  zobrazen výsledek dotazu. 
Dotaz je možné spustit pomocí tlačítka se šipkou (3) případně kombinací kláves ctrl+enter v oblasti textového pole (1).
Posledním částí rozhraní, které se budeme věnovat, je tlačítko pro zobrazení dokumentace (4).
Po jeho stisknutí se zobrazí panel s dokumentací schématu na pravé straně obrazovky.
Pojďme se nyní na tento panel zaměřit a vysvětlit si, jak je ho možné použít k prozkoumání schématu.

<div class="figures">

{% include image.html 
   url="../attachments/články/graphql-pro-nkod-2021/document-explorer.png"
   description="Obrázek 1: Panel s dokumentací v nástroji GraphiQL"
%}

{% include image.html 
   url="../attachments/články/graphql-pro-nkod-2021/document-explorer-query.png"
   description="Obrázek 2: Panel s dokumentací pro query v nástroji GraphiQL"
%}

{% include image.html 
   url="../attachments/články/graphql-pro-nkod-2021/document-explorer-datasetsfilter.png"
   description="Obrázek 3: Panel s dokumentací pro DatasetFilter v nástroji GraphiQL"
%}

</div>

Po jeho otevření můžeme vidět seznam `root types` (Obrázek 1) , ve kterém je pouze jedna položka `query : Query`.
Na klíčové slovo `query` jsem již narazili dříve a jeho přítomnost nás tedy nepřekvapí.
Za dvojtečkou je pak název datového typu `Query`.
Po kliknutí na název typu se nám zobrazí jeho definice.
V případě, že jde o objekt, či pole, se zobrazí jeho obsah.
V našem případě jde jde o seznam se třemi položkami (Obrázek 2): `dataset`, `datasets` a `datasetsWithDistribution`.

Zde je obsah jednotlivých položek seznamu již trochu složitější, rozeberme si tedy jeho význam na příkladu: 
~~~~~~
datasets(
  filters: [DatasetsFilter]
  offset: Int
  limit: Int
): DatasetContainer
~~~~~~~~~~~~
Na prvním řádku je název, který je možné použít v dotazu.
Následuje ve složených závorkách trojice klíčů `filters`, `offset` a `limit`.
Pro každý klíč je za dvojtečkou uveden datový typ, tedy seznam `DistributionFilter` pro `filters` a `Int`, tedy celé číslo, pro `offset` a `limit`.
Po ukončení závorky je uveden, za dvojtečkou, návratový typ `DatasetContainer`.
Zde je možné si kliknutím na libovolný datový typ zobrazit jeho definici. 

Můžeme se například kliknutím na `DatasetsFilter` podívat na definici obsahu filtru (Obrázek 3).
Zde si můžeme mimo jiné všimnout položky `publisherIri` s hodnotou `string`, tedy textový řetězec. 
Této položku už jsme využili v jednom z předchozích příkladů. 

GraphiQL nejen že umí zobrazit uživateli schéma, ale současně ho umí využít k napovídání při psaní dotazu v textovém poli (1).
Ukažme si to na příkladu. 
Pokud do (1) začneme psát dotaz, máme možnost stisknutím kombinací kláves ctrl a mezerník vyvolat menu se seznamem použitelných hodnot, viz. obrázek níže.
{% include image.html 
   url="../attachments/články/graphql-pro-nkod-2021/query-datasets-filter-suggestion.png"
   description="Našeptávání dotazu v nástroji GraphiQL"
%}
Díky této funkcionalitě a postrannímu panelu má tak uživatel možnost schéma interaktivně procházet bez nutnosti jeho úplné znalosti.

## Složitější dotaz v GraphQL
Pro demonstraci složitějšího dotazu si představme následující situaci. 
Jakožto uživatelé Národního katalogu otevřených dat chceme získat seznam datových sad, které obsahují data z úředních desek.
Datové sady s tímto obsahem obsahují distribuce, jenž deklarují kompatibilitu s otevřenou formální normou [Úřední desky](https://ofn.gov.cz/úřední-desky/2021-07-20/).
Jedním z možných řešení je položení následujícího dotazu pomocí GraphQL.
~~~~~~graphql
query {
  datasets (
    limit: 100
    filters: {
      conformsTo: "https://ofn.gov.cz/úřední-desky/2021-07-20/"
    }
  ) {
    data {
      iri
      title {
        cs
      }
      publisher {
        title {
          cs
        }
      }
      distribution {
        accessURL
        format
      }
    }
    pagination {
      totalCount
    }
  }
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/graphql?query=query%20%7B%0A%20%20datasets%20(%0A%20%20%20%20limit%3A%20100%0A%20%20%20%20filters%3A%20%7B%0A%20%20%20%20%20%20conformsTo%3A%20%22https%3A%2F%2Fofn.gov.cz%2F%C3%BA%C5%99edn%C3%AD-desky%2F2021-07-20%2F%22%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20data%20%7B%0A%20%20%20%20%20%20iri%0A%20%20%20%20%20%20title%20%7B%0A%20%20%20%20%20%20%20%20cs%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20publisher%20%7B%0A%20%20%20%20%20%20%20%20title%20%7B%0A%20%20%20%20%20%20%20%20%20%20cs%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20distribution%20%7B%0A%20%20%20%20%20%20%20%20accessURL%0A%20%20%20%20%20%20%20%20format%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20pagination%20%7B%0A%20%20%20%20%20%20totalCount%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

Obdoba tohoto dotazu byla použita v ukázkové aplikaci [úředních desek](https://ofn.gov.cz/úřední-desky/2021-07-20/aplikace/úřední-desky.html).
Neb byla aplikace již popsána v [jiném článku](https://data.gov.cz/články/nová-éra-úředních-desek) necháme zde aplikaci bez dalšího popisu.

Použitý dotaz pak svou složitostí nepředstavuje nic nového.
Ve filtrech je omezen počet vrácených záznamů na hodnotu 100, dále pak všechny vrácené datové sady musí odpovídat konkrétní otevřené formální normě. 
Z hlediska dat samotných si pak pro každou datovou sadu necháme vrátit její IRI, název, název poskytovatel, a URL distribuce s daty.

Součástí dotazu je i informace o celkovém počty datových sad, které odpovídají požadovaným filtrům.
Pokud by jich bylo více než 100 bylo by nutné provést další dotaz s vhodně nastavenými filtry `limit` a `ofset`.

Z posledního odstavce plyne jisté omezení pro využití GraphQL. 
To bylo totiž navrženo jako alternativní rozhraní pro webové aplikace.
Takové aplikace budou zcela přirozeně obsahovat nějakou formu stránkování, což přesně sedí na možnosti jaké nám zde GraphQL dává.

Na druhou stranu, omezení velikosti výsledku nemusí být vhodné pro získání dat k dávkovému zpracování. 
Za tímto účelem může být vhodnější využít třeba [JSON dumpu](https://data.gov.cz/soubor/nkod.json) obsahu Národního katalogu otevřených dat.

