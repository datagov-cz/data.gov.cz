---
layout: contained
title: Znalostní báze popisu dat
ref: DataModelling-KnowledgeBase-Situation-Roles
lang: cs
---
### Role (varianty) pojmu

Při popisování subjektů, které mohou mít podobu různých typů osob (právnické, fyzické, podnikající fyzické) byste si měli dávat pozor na to, jestli se tyto typy od sebe odlišují i vlastnostmi a vztahy. Pokud ne, není třeba pro tyto typy používat různé pojmy – můžete k tomuto pojmu jen přiřadit nadřazený pojem „Osoba“.
Pokud se však odlišují i vlastnostmi a vztahy, jde o „stejný“ pojem, ale s jinými vlastnostmi a vztahy (např., právnické osoby mají vlastnost IČO a fyzické osoby rodné číslo). Doporučujeme proto pojem rozdělit podle jednotlivých typů na „X jako pojem“, „Y jako pojem“ apod., které jsou poté nadřazeny zastřešujícímu pojmu a případně i pojmu, který zastřešuje specifický typ.
  {% include image.html url="../../../přílohy/popis-dat/znalostní-báze/role.webp" description="V tomto obrázku obdélníky znázorňují pojmy s vlastnostmi a šipky znázorňují nadřazenosti. Pojmy s přerušovanými obdélníky jsou použity z jiného slovníku. Všimněte si, že „Právnická osoba jako provozovatel“ a „Fyzická osoba jako provozovatel“ nemají uvedeny žádné vlastnosti. Mohou totiž využívat vlastnosti nadřazených pojmů a jejich uvedení do podřazených pojmů by bylo duplicitní." %}\

Při určení nadřazenosti si dávejte pozor, aby podřazený pojem byl skutečně jedním z typů všech nadřazených pojmů. Například „Fyzická osoba“ a „Právnická osoba“ nemohou být nadřazenými pojmy pro stejný pojem – znamenalo by to, že tento pojem je zároveň fyzická a právnická osoba.
