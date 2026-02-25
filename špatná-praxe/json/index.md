---
layout: contained
title: Nejčastější chyby při použití formátu JSON
ref: ŠpatnáPraxe-JSON
lang: cs
---

## Data nevalidní vůči schématu
O tom, že mají být data [opatřena schématem](https://data.gov.cz/pro-poskytovatele/otevřená-data/technické-standardy-stupeň-otevřenosti-3/), není třeba diskutovat. V celé řadě případů ale, i když schéma existuje a je i odkazováno v metadatech datové sady v NKOD, data nejsou vůči schématu validní. To způsoje problémy jak konzumentům dat, jelikož se na schéma nemohou spolehnout, tak samotným poskytovatelům, jelikož to ukazuje problém s datovou kvalitou a s kvalitou procesu publikace dat. Národní katalog otevřených dat zatím validitu dat vůči schématu nekontroluje, je to povinnost poskytovatelů.

Nevalidní data lze odhalit jednoduše, a proces validace při publikaci dat by měl být ideálně automatizován. Validátorů, které jsou přístupné online, nebo jsou ve formě programu ke spuštění na serveru či jiném počítači, je pro otevřené formáty celá řada.
  * Pro RDF popsané pomocí SHACL lze použít např. [https://shacl-playground.zazuko.com/](https://shacl-playground.zazuko.com).
  * Pro JSON lze využít např. [https://www.jsonschemavalidator.net/](https://www.jsonschemavalidator.net/) nebo [https://tryjsonschematypes.appspot.com/#validate](https://tryjsonschematypes.appspot.com/#validate).
  * Pro XML Schema lze využít např. [https://www.freeformatter.com/xml-validator-xsd.html](https://www.freeformatter.com/xml-validator-xsd.html).
  * Pro CSV lze využít např. [https://csvw.opendata.cz/](https://csvw.opendata.cz/).
    
Příklad validace pomocí [https://www.jsonschemavalidator.net/](https://www.jsonschemavalidator.net/):

{% include image.html url="../../přílohy/špatná-praxe/jsonvalidator.webp" description="JSON Schema Validator" %}
