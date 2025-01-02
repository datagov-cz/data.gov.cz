---
layout: contained
title: Nástroje pro tvorbu popisu dat
ref: DataModelling-Tools
lang: cs
---

Zde najdete představení nástrojů, pomocí kterých lze popisy dat vytvářet - včetně návodů a šablon. Vedle námi poskytnutých a podporovaných nástrojů níže lze využít i jiné. Jediný požadavek, který musí nástroje splnit je, že umožňují vytvořit soubor se slovníkem, který je kompatibilní s [ofn]. 

### Tabulka pro popis dat   
Tabulkové řešení jsme připravili především pro ty, kteří s popisem dat začínají a v úřadě nemají zkušenosti s nástroji na tvorbu popisu dat v grafické podobě (neboli s diagramy/pohledy). Tabulka je nejjednodušší řešení pro základní popis dat. Nevyžaduje vynaložení speciálních kapacit kromě znalce oblastí, které jste zvolili pro tvorbu slovníků. Berte však na vědomí, že s růstem počtu pojmů, vlastností a vztahů ale roste komplikovanost a klesá srozumitelnost tabulky. Šablony   jsou připraveny jednak ve formátu XLSX (pro Microsoft Excel) a CSV.

[tableTutorial]
[tableTemplateXLSX]
[tableSopvsXLSX]
[tableSampleCSV]
[tableSopvsCSV]

###	Archi
[archi] je nástroj na modelování v jazyku ArchiMate. Nástroj je zdarma ke stažení i k jakémukoliv využití (podle permisivní licence MIT)  a dostupný je pro Windows, Linux i macOS. Jazyk ArchiMate se používá pro vyjádření architektury podniku. Pro Archi jsme vytvořili šablonu pro popis dat, se kterou můžete začít nový projekt, nebo ji naimportujete do vašeho existujícího projektu.

[archiTutorial]
[archiTemplate]

### Enterprise Architect  
[ea] je oproti Archi komerční nástroj, který podporuje několik modelovacích jazyků, včetně ArchiMate a UML. Připravili jsme šablonu a MDG technologii pro popis dat, pomocí které můžete tvořit slovníky.

[eaTutorial]
[eaMDG]
[eaSample]



### Výrobní linka
Výrobní linka je sada prototypů a není tedy momentálně možné garantovat stálou dostupnost těchto nástrojů.
Výrobní linka je balíček softwarových nástrojů, vytvořený jako výstup projektu KODI (dokumentováno ve výstupech cíle 5 projektu), který slouží k vytváření slovníků a jejich následné publikaci. Jeho součástí jsou
*	nástroje na tvorbu slovníků TermIT a OntoGrapher,
*	prohlížecí nástroj ShowIT,
*	nástroj pro tvorbu datových specifikací Dataspecer.
Ukázku těchto nástrojů naleznete ve školení Modelování popisu dat ve veřejné správě. 

[ofn]: https://ofn.gov.cz/slovníky  "otevřenou formální normou pro slovníky"
[archi]: https://archimatetool.com "Archi"
[ea]: https://sparxsystems.com/products/ea/ "Sparx Enterprise Architect"
[tableTutorial]: "Návod pro popis dat pomocí tabulky"
[archiTutorial]: "Návod pro popis dat pomocí Archi"
[eaTutorial]: "Návod pro popis dat pomocí Sparx Enterprise Architect"
[eaMDG] "MDG technologie"
[eaSample] "Příkladový slovník a slovník obecných pojmů veřejné správy"
[archiTemplate] "Šablona pro Archi (obsahuje příkladový slovník a slovník obecných pojmů veřejné správy)"
[tableTemplateXLSX] "Šablona ve formátu XLSX (obsahuje příkladový slovník)"
[tableTemplateCSV] "Šablona ve formátu CSV (obsahuje příkladový slovník)"
[tableSopvsXLSX] "Slovník obecných pojmů veřejné správy ve formátu XLSX"
[tableSopvsCSV] "Slovník obecných pojmů veřejné správy ve formátu CSV"
