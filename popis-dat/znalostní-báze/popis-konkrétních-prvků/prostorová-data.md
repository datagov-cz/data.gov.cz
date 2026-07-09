---
layout: contained
title: Znalostní báze popisu dat
ref: DataModelling-KnowledgeBase-Aspect-Geospatial-Data
lang: cs
---

### Zachycení prostorových informací v popisu dat
Tento postup je relevantní, pokud vytváříte popis dat, které zahrnují prostorovou/lokalizační složku. Jde tedy o situaci, kdy některý z pojmů (objektů) zachycených ve slovníku je prostorově určen, tzn. přímo či nepřímo odkazuje na určitou polohu nebo zeměpisnou oblast. 

Takový objekt má zpravidla lokalizaci určenou nějakým typem geometrického objektu. Následující diagram znázorňuje (jako specializace obecného nadřazeného pojmu Geometrický objekt) nejčastější typy těchto geometrických objektů, kterými jsou bod, linie, polygon, prostorový objekt a rastrový obraz:

{% include image.html url="../../../přílohy/popis-dat/znalostní-báze/prostorová-data-model.webp" %}

Geometrický objekt obecně a všechny jeho typy mají klíčovou vlastnost Souřadnice, která v sobě nese přesné prostorové určení objektu. K jeho zachycení se obvykle používají zavedené standardy pro vyjádření geometrických objektů, jako jsou např. WKT (Well-Known Text) nebo GML (Geography Mark-up Language). Více k tomu viz [otevřená formální norma pro prostorová data].

Z hlediska využití prostorových dat je důležité poskytnout spolu s nimi také informaci o tom, v jakém souřadnicovém systému jsou souřadnice vedeny (např. S-JTSK, ETRS89, WGS 84, Bpv) a s jakou přesnosti (např. 3. třída přesnosti, 0,14 m). Souřadnicový systém a přesnost mohou být různé pro polohovou a výškovou složku. U prostorových objektů se navíc určuje také úroveň podrobnosti modelu (Level of detail, např. LOD 1, LOD 2, LOD 3), která vyjadřuje úroveň propracovanost informačního modelu budovy a definuje jak grafickou podrobnost modelu (úroveň detailu), tak i to, jaké informace (data, materiály, vlastnosti) model obsahuje.

Následují příklady možných způsobů zachycení prostorových informací v závislosti na tom, jakou podobu tyto informace mají v popisované doméně.

#### Příklad 1: Obecné zachycení lokalizace

{% include image.html url="../../../přílohy/popis-dat/znalostní-báze/prostorová-data-příklad-1.webp" %}

Tento způsob zachycení odpovídá situaci, kdy má lokalizace objektu různé podoby a nelze striktně specifikovat typ geometrie (např. zda jde o bod nebo polygon. V sémantickém popisu je tedy vytvořen vztah mezi **Objektem v popisované doméně** a obecným pojmem **Geometrický objekt**.

Samotné prostorové určení je pak uloženo ve vlastnosti **Souřadnice**, která je přiřazena ke Geometrickému objektu. Hodnota souřadnic může být v datové vrstvě uložena v jednom ze standardizovaných formátů (např. WKT).

Ostatní vlastnosti a vztahy Geometrického objektu (např. souřadnicové systémy a přesnosti) nejsou v tomto příkladu zachyceny jako samostatné objekty, protože v datech popisované domény se vždy používá jeden souřadnicový systém a jedna přesnost. Tuto skutečnost včetně určení používaného souřadnicového systému a přesnosti by měl v takovém případě tvůrce zaznamenat do popisu vlastnosti „Souřadnice“, aby bylo možné data správně interpretovat.

#### Příklad 2: Specifické zachycení lokalizace (Polygon)

 {% include image.html url="../../../přílohy/popis-dat/znalostní-báze/prostorová-data-příklad-2.webp" %}

Tento případ představuje situaci, kdy lokalizace objektu je vždy reprezentována konkrétním typem geometrie – v tomto případě polygonem. Vztah objektu proto nevede k obecnému pojmu Geometrický objekt, ale přímo k objektu **Polygon**.

Díky tomu, že Polygon je specializací (podtypem) Geometrického objektu, přebírá automaticky všechny jeho charakteristiky. Pro samotné určení polohy se tedy i v tomto případě využívá vlastnost **Souřadnice**, v tomto případě připojená přímo k objektu Polygon.  


#### Příklad 3: Zachycení lokalizace pomocí diskrétních souřadnic

{% include image.html url="../../../přílohy/popis-dat/znalostní-báze/prostorová-data-příklad-3.webp" %}

Tento případ demonstruje situaci, kdy není lokalizace zachycena standardním geometrickým objektem s komplexní vlastností Souřadnice, ale skrze specifický prvek nazvaný Definiční bod.

Klíčovým rozdílem zde je způsob zápisu polohy: místo jedné společné vlastnosti jsou souřadnice rozloženy do dvou samostatných atributů – **Souřadnice X** definičního bodu a **Souřadnice Y** definičního bodu. Tento model odpovídá strukturám, kde jsou prostorové údaje v datech uloženy jako dva nezávislé údaje.

#### Příklad 4: Zachycení lokalizace pomocí adresního místa RÚIAN

{% include image.html url="../../../přílohy/popis-dat/znalostní-báze/prostorová-data-příklad-4.webp" %}

Tento příklad představuje odlišný přístup k lokalizaci, kdy není poloha objektu definována pomocí geometrie nebo souřadnic, ale pomocí odkazu na registr RÚIAN. Objekt v popisované doméně je zde propojen s prvkem **Adresní místo RÚIAN**.

Lokalizace je zde tedy dána referencí na oficiální adresní místo. Klíčovým identifikátorem pro toto určení polohy je vlastnost **Kód adresního místa RÚIAN**, která slouží jako unikátní klíč pro propojení s národním registrem.


[otevřená formální norma pro prostorová data]: https://ofn.gov.cz/prostorová-data/ "Otevřená formální norma pro prostorová data"
