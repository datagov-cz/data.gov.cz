---
layout: contained
title: Nejčastější obsahové chyby
ref: ŠpatnáPraxe-ObsahovéChyby
lang: cs
---

## Žádné nebo nejednoznačné identifikátory
Častým problémem v datových sadách jsou odkazy na nedostatečně identifikované entity. Příkladem může být datová sada příjemců dotací, kde příjemce dotace je identifikován pouze názvem, nikoliv pomocí IČO, nebo identifikace adresy několika textovými poli místo IRI adresního místa.

**Řešení**

Řešením je si nejprve rozmyslet, na které entity (firmy, školy, adresy, …) se v datové sadě odkazuji, nejlépe formou konceptuálního modelu dat ([ER model](https://cs.wikipedia.org/wiki/Entity-relationship_model) či [UML diagram tříd](https://cs.wikipedia.org/wiki/Diagram_t%C5%99%C3%ADd)), který je následně součástí dokumentace datové sady. Druhým krokem je zjistit, jak se tyto entity obvykle jednoznačně identifikují, a tyto identifikátory v datové sadě použít.

Nejlepším řešením je použít globální jednoznačné identifikátory ve formě IRI tam, kde je primární správce dat o tomto typu entit již zadefinoval. Příklady:
* Registr územní identifikace, adres a nemovitostí RÚIAN, který pro každý ú  zemní prvek definuje jednoznačné IRI v metadatovém profilu, např. **https://linked.cuzk.cz/resource/ruian/adresni-misto/16135661**
* Registr práv a povinností, který definuje mimo jiné identifikátory pro Orgány veřejné moci, např. **https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/00007064**
  
Tam, kde správce ještě nedefinoval IRI pro globální jednoznačnou identifikaci jeho entit, je třeba o tuto definici správce požádat a do té doby prozatimně použít lokální identifikátor, např. **00007064** pro IČO, který je pro daný typ běžně používaný.

### Výhody identifikace entit pomocí IRI
  * Identifikátor je globální - datové sady, které ho používají, jsou automaticky integrovatelné.
  * Není třeba vysvětlovat, čemu daný identifikátor náleží - je to jasné přímo z něj.
  * V případě správné implementace lze v případě zájmu získat o dané entitě další informace pouze na základě jejího identifikátoru.

## Nesmyslné hodnoty pro označení nekonečna
Obzvláště v případě datumů se můžeme setkat s tím, že je třeba zaznamenat, že nějaká hodnota ještě není známa.

Příkladem může být platnost záznamu, která se obvykle uvádí jako dvojice datumů - od a do, tedy třeba od 2**019-01-01** do **2021-02-21**. Problém ale nastane, pokud je třeba zaznamenat, že nějaká položka stále platí, tedy datum platnosti do ještě není známo. V tu chvíli se začínají na místě datumu do objevovat různé pokusy o zaznamenání nekonečné hodnoty. Stejně to mimochodem platí pro záporné nekonečno, tedy *datum tak dávné, že je každému jasné, že to znamená „odjakživa“*. Příklady z praxe:
  * 9999-09-09
  * 3333-03-03
  * 1900-01-01
  * 1970-01-01
  * 2222-02-22
    
Všechny tyto hodnoty jsou samozřejmě špatně, a znesnadňují práci s takovýmito daty.

**Řešení**

Řešením je opravit návrh systému, který neumožňuje říci, že datum ještě není známo a nenutit uživatele si vymýšlet „nekonečné“ hodnoty.
