---
layout: contained
title: Nejčastější chyby při použití formátu XML
ref: ŠpatnáPraxe-XML
lang: cs
---

## Chybějící odkaz na XML schéma
V kořenovém elementu XML dokumentu chybí odkaz na schéma, vůči kterému má být dokument validní. Dokument může vypadat například takto:

```
<pracovni_mista>
  <pracovni_misto>
    <id>7408976</id>
    <poptavajici>
      <ic>00025593</ic>
      <nazev>Český statistický úřad</nazev>
    </poptavajici>
...
```

XML validátor pak neví, vůči kterému schématu má dokument validovat. Do takového dokumentu je tedy třeba odkaz na schéma přidat, včetně definice příslušných jmenných prostorů. Datové typy používané ve standardech uvedených na tomto webu používají jmenný prostor http://data.gov.cz/schema/xsd/typy/, konkrétní schémata jsou pak v adresáři https://data.gov.cz/_media/ a odkazy na ně jsou na stránkách příslušných standardů.

Po přidání odkazu na XML schéma může dokument vypadat například takto:

```
<pracovni_mista xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://data.gov.cz/schema/xsd/typy/ https://data.gov.cz/_media/datova-sada:obsazovana-pracovni-mista-datove-schema-xml.xsd"
                xmlns="http://data.gov.cz/schema/xsd/typy/">
  <pracovni_misto>
    <id>7408976</id>
    <poptavajici>
      <ic>00025593</ic>
      <nazev>Český statistický úřad</nazev>
    </poptavajici>
...
```

## Data nevalidní vůči schématu
O tom, že mají být data [opatřena schématem](https://data.gov.cz/pro-poskytovatele/otevřená-data/technické-standardy-stupeň-otevřenosti-3/), není třeba diskutovat. V celé řadě případů ale, i když schéma existuje a je i odkazováno v metadatech datové sady v NKOD, data nejsou vůči schématu validní. To způsoje problémy jak konzumentům dat, jelikož se na schéma nemohou spolehnout, tak samotným poskytovatelům, jelikož to ukazuje problém s datovou kvalitou a s kvalitou procesu publikace dat. Národní katalog otevřených dat zatím validitu dat vůči schématu nekontroluje, je to povinnost poskytovatelů.

Nevalidní data lze odhalit jednoduše, a proces validace při publikaci dat by měl být ideálně automatizován. Validátorů, které jsou přístupné online, nebo jsou ve formě programu ke spuštění na serveru či jiném počítači, je pro otevřené formáty celá řada.
  * Pro RDF popsané pomocí SHACL lze použít např. [https://shacl-playground.zazuko.com/](https://shacl-playground.zazuko.com).
  * Pro JSON lze využít např. [https://www.jsonschemavalidator.net/](https://www.jsonschemavalidator.net/) nebo [https://tryjsonschematypes.appspot.com/#validate](https://tryjsonschematypes.appspot.com/#validate).
  * Pro XML Schema lze využít např. [https://www.freeformatter.com/xml-validator-xsd.html](https://www.freeformatter.com/xml-validator-xsd.html).
  * Pro CSV lze využít např. [https://csvw.opendata.cz/](https://csvw.opendata.cz/).
    
Příklad validace pomocí [https://www.jsonschemavalidator.net/](https://www.jsonschemavalidator.net/):

{% include image.html url="../../přílohy/špatná-praxe/jsonvalidator.webp" description="JSON Schema Validator" %}

