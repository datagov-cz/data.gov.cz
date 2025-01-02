---
layout: contained
title: Znalostní báze
ref: DataModelling-KnowledgeBase
lang: cs
---

Zde najdete odpovědi na časté dotazy a řešení specifických situací, se kterými se během popisu dat můžete setkat. Tato stránka bude průběžně rozšiřována během sbírání zkušeností a zpětné vazby z praxe.

### Doplňující informace
Dokument uvádí popis dat jako důležitý aspekt správy dat, motivaci k jeho tvorbě (včetně možných využití), základní teorii a postup popisu dat ve formě slovníku.

[alternativníPojmy]


[souvisejícíZdroje]


[ekvivalentníPojmy]
Pro případy, kdy existují dva pojmy ve dvou slovnících, které mají stejnou definici (tedy popisují přesně to samé), mluvíme o ekvivalentních pojmech (pojem A je ekvivalentní pojmu B). Je důležité, aby ekvivalentní pojmy měly skutečně identický význam ve všech oblastech, tj. pojem A se dá plně zaměnit za pojem B a nemá to na zbytek slovníku/ů žádný dopad. Někdy se stejné pojmy nezávisle na sobě definují například v různých zákonech, nebo se z jednoho ustanovení úmyslně přebírají do jiného (například jako transpozice směrnic Evropské unie do české legislativy).
Ekvivalentní pojem není to samé, co alternativní název (neboli v běžné mluvě synonym), jelikož pojem není pouze název, ale především definice/popis, která je názvem označena.
Ekvivalentní pojmy lze ukázat na pojmu „Obecní úřad obce s rozšířenou působností“, jelikož se jedná o obecní úřad obce s rozšířenou působností, který je definován v § 66 zákona č. 128/2000 Sb. o obcích. Pojem „Obecní úřad obce s rozšířenou působností“ ze zákona o obcích je tedy plně zaměnitelný za pojem „Obecní úřad obce s rozšířenou působností“ ze zákona o silničním provozu.
Ekvivalentní pojmy se snažte používat jen zřídkakdy – pokud je pojem plně převzatý z jiného slovníku a zavedením stejného pojmu se význam převzatého pojmu nijak neobjasňuje, je správným postupem se na takový pojem odkázat podle kapitoly Využití pojmů z jiných slovníků.

[datovéTypy]
Pokud máte k dispozici informační systém, technickou specifikaci nebo formulář, který určuje, jak přesně se má vlastnost vyplňovat (pamatujte, že vlastnost je analogická k políčku formuláře), můžete k vlastnostem uvádět datový typ. Datový typ upřesňuje přijatelné hodnoty pro individuální vlastnosti. Uvedení datových typů je vhodným doplněním obzvláště při využití slovníků pro tvorbu datových specifikací.
Častým (ale ne jediným) zdrojem datových typů pro slovníky jsou jednoduché datové typy specifikované pro otevřené formální normy:
* Ano či ne (také známé jako Booleovská hodnota) se hodí pro reprezentaci vlastností, které mohou mít pouze dvě hodnoty. Například „zaplaceno“, „publikováno“,
* Datum, 
* Čas,
* Datum a čas,
* Celé číslo,
* Desetinné číslo,
* URI, IRI, URL: odkaz na web, například zdroj,
* Řetězec: jakákoliv množina znaků, například kód agendy, 
* Text: narozdíl od řetězce může být ve více jazycích: například název, definice, popis.



#### Situace nastávající během popisu

[role]
Při popisování subjektů, které mohou mít podobu různých typů osob (právnické, fyzické, podnikající fyzické) byste si měli dávat pozor na to, jestli se tyto typy od sebe odlišují i vlastnostmi a vztahy. Pokud ne, není třeba pro tyto typy používat různé pojmy – můžete k tomuto pojmu jen přiřadit nadřazený pojem „Osoba“.
Pokud se však odlišují i vlastnostmi a vztahy, jde o „stejný“ pojem, ale s jinými vlastnostmi a vztahy (např., právnické osoby mají vlastnost IČO a fyzické osoby rodné číslo). Doporučujeme proto pojem rozdělit podle jednotlivých typů na „X jako pojem“, „Y jako pojem“ apod., které jsou poté nadřazeny zastřešujícímu pojmu a případně i pojmu, který zastřešuje specifický typ.
  {% include image.html url="../../přílohy/správa-dat/Způsoby%20zajištění%20správy%20systémů%20a%20dat.webp" description="Způsoby zajištění správy systémů a dat" %}
V tomto obrázku obdélníky znázorňují pojmy s vlastnostmi a šipky znázorňují nadřazenosti. Pojmy s přerušovanými obdélníky jsou použity z jiného slovníku. Všimněte si, že „Právnická osoba jako provozovatel“ a „Fyzická osoba jako provozovatel“ nemají uvedeny žádné vlastnosti. Mohou totiž využívat vlastnosti nadřazených pojmů a jejich uvedení do podřazených pojmů by bylo duplicitní.
Při určení nadřazenosti si dávejte pozor, aby podřazený pojem byl skutečně jedním z typů všech nadřazených pojmů. Například „Fyzická osoba“ a „Právnická osoba“ nemohou být nadřazenými pojmy pro stejný pojem – znamenalo by to, že tento pojem je zároveň fyzická a právnická osoba.

[druhy]
Máte-li mezi vlastnostmi nějakého pojmu vlastnost označující výčet „druhů“ daného pojmu (například vlastnost „Typ školy“ pro rozdělení škol na základní, střední, vysoké atd.), zamyslete se nad tím, jaké hodnoty pro tuto vlastnost očekáváte (tj. možné individuální vlastnosti). Pokud platí pro jednotlivé „druhy“ pojmů různé charakteristiky (specifické vztahy, vlastnosti, zdroje, definice, popisy), tak je vhodné pro každý druh vytvořit oddělené pojmy, pro které je původní pojem nadřazený („Základní škola“, „Vysoká škola“ apod.).   Naopak pokud používáte například „Typ studia“ (prezenční, kombinované apod.) pro pojem „Studium“, které nemá vliv na způsob evidence v datech (tj. typ studia je pouhé „políčko ve formuláři“, z čehož nevyplývají specifické vlastnosti ani vztahy), tak ho stačí evidovat jako vlastnost (případně jako položky číselníku).

#### Popisování určitých prvků

[číselníky]
U evidence vlastností jste mohli narazit na to, že vám datový typ nemusel přesně popsat to, co se od vlastnosti očekává, například datový typ vlastnosti „okres“ je sice řetězec, ale je to řetězec omezený na konečný počet možností podle konečného množství okresů, jejichž počet se mění jen výjimečně. Takové hodnoty se dají popsat číselníkem. Jednoduše řečeno, číselník je předem definovaný seznam hodnot (položek číselníku), který se přiřazuje k pojmu přes vztahy a určuje obor hodnot dané vlastnosti pojmu. 
Číselníky se nepropojují pomocí vlastností. Místo toho jsou konkrétní číselníky a položky číselníku objekty práva podřazené „obecným“ objektům „Číselník“ a „Položka číselníku“ ze slovníku číselníků. Je to tak proto, že číselníky jsou navrženy pro používání více pojmy z různých slovníků, zatímco vlastnosti se vážou na konkrétní pojmy a používat mezi více pojmy se tedy nedají. Ten samý číselník může být využíván více slovníky z různých důvodů – například „Číselník států“ pro stát narození, stát vydání, stát úmrtí apod. Upřesnění tohoto využití se vyjadřuje pomocí vztahu mezi daným pojmem a položkou číselníku.   
Pro využití položek číselníku ve slovníku stačí vytvořit vztahy mezi daným pojmem a položkou číselníku – například „Řidičský průkaz byl vydán státem „Stát“ (což je položka číselníku „Číselník států“). Dané objekty „Stát“ a „Číselník států“ jsou podřazenými pojmy objektů „Položka číselníku“ a „Číselník“ ze slovníku číselníků.  Další pojmy mohou „Stát“ využívat podobným způsobem. 
 {% include image.html url="../../přílohy/správa-dat/Způsoby%20zajištění%20správy%20systémů%20a%20dat.webp" description="Způsoby zajištění správy systémů a dat" %} 
Před použitím číselníku se ujistěte, že požadované položky nejsou ve skutečnosti vlastní pojmy. Například se může zdát, že zkoušku z řízení motorového vozidla pořádá „Autoškola“ jako položka číselníku autoškol. Nicméně: 1) Jak bylo zmíněno výše, konkrétní položky číselníku se mění jen ve výjimečných případech. Nehodí se tedy pro autoškoly, jejichž počet se neustále mění. 2) Autoškola má své vlastnosti a vztahy, které nelze vyjádřit položkami číselníků – dají se jen navázat na daný pojem, jak je popsáno výše. 
Proto v tomto případě doporučujeme autoškolu evidovat jako samostatný objekt práva bez nadřazenosti na „Položku číselníku“.
Pro číselníky a jejich položky byla vytvořena otevřená formální norma, nicméně znovu připomínáme, že pro využívání existujících číselníků není znalost OFN potřeba. 


