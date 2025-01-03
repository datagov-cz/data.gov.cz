---
layout: contained
title: Znalostní báze popisu dat
ref: DataModelling-KnowledgeBase-Aspect-CodeLists
lang: cs
---

### Číselníky
U evidence vlastností jste mohli narazit na to, že vám datový typ nemusel přesně popsat to, co se od vlastnosti očekává, například datový typ vlastnosti „okres“ je sice řetězec, ale je to řetězec omezený na konečný počet možností podle konečného množství okresů, jejichž počet se mění jen výjimečně. Takové hodnoty se dají popsat číselníkem. Jednoduše řečeno, číselník je předem definovaný seznam hodnot (položek číselníku), který se přiřazuje k pojmu přes vztahy a určuje obor hodnot dané vlastnosti pojmu. 

Číselníky se nepropojují pomocí vlastností. Místo toho jsou konkrétní číselníky a položky číselníku objekty práva podřazené „obecným“ objektům „Číselník“ a „Položka číselníku“ ze slovníku číselníků. Je to tak proto, že číselníky jsou navrženy pro používání více pojmy z různých slovníků, zatímco vlastnosti se vážou na konkrétní pojmy a používat mezi více pojmy se tedy nedají. Ten samý číselník může být využíván více slovníky z různých důvodů – například „Číselník států“ pro stát narození, stát vydání, stát úmrtí apod. Upřesnění tohoto využití se vyjadřuje pomocí vztahu mezi daným pojmem a položkou číselníku.   

 {% include image.html url="../../../přílohy/popis-dat/znalostní-báze/číselníky.webp" description="Pro využití položek číselníku ve slovníku stačí vytvořit vztahy mezi daným pojmem a položkou číselníku – například „Řidičský průkaz byl vydán státem „Stát“ (což je položka číselníku „Číselník států“). Dané objekty „Stát“ a „Číselník států“ jsou podřazenými pojmy objektů „Položka číselníku“ a „Číselník“ ze slovníku číselníků.  Další pojmy mohou „Stát“ využívat podobným způsobem. " %} \

Před použitím číselníku se ujistěte, že požadované položky nejsou ve skutečnosti vlastní pojmy. Například: může se zdát, že zkoušku z řízení motorového vozidla pořádá „Autoškola“ jako položka číselníku autoškol. Nicméně: 
* Jak bylo zmíněno výše, konkrétní položky číselníku se mění jen ve výjimečných případech. Nehodí se tedy pro autoškoly, jejichž počet se neustále mění. 2) 
* Autoškola má své vlastnosti a vztahy, které nelze vyjádřit položkami číselníků – dají se jen navázat na daný pojem, jak je popsáno výše. 

Proto v tomto případě doporučujeme autoškolu evidovat jako samostatný objekt práva bez nadřazenosti na „Položku číselníku“.
Pro číselníky a jejich položky byla vytvořena [otevřená formální norma], nicméně znovu připomínáme, že pro využívání existujících číselníků není znalost OFN potřeba. 

[otevřená formální norma]: https://ofn.gov.cz/číselníky/  "Otevřená formální norma pro číselníky"
