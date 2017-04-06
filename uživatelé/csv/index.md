---
layout: default
title: CSV
---

# {{ page.title }}

CSV (Comma-Separated Values) je otevřený formát pro tabulková data. 
Jeho [specifikace (RFC 4180)](https://tools.ietf.org/html/rfc4180) je velice jednoduchá, i tak ji ale spousta CSV souborů na webu neodpovídá.

## Stručná specifikace CSV

1.   Kódování CSV souboru je UTF-8
2.   Řádky se oddělují symbolem nové řádky ```\n```
3.   Sloupečky se oddělují čárkou ```,```
4.   Pokud se v hodnotě buňky vyskytuje čárka ```,``` nebo symbol nové řádky ```\n```, celá hodnota je uzavřena do uvozovek ```"```
5.   Pokud se v hodnotě buňky vyskytuje uvozovka ```"```, je zapsána zdvojeně ```""```

## Nejčastější prohřešky proti specifikaci

### Kódování není UTF-8
Typicky se projeví tím, že české, případně jiné národní znaky se ukazují špatně.
### Separátorem není čárka, ale například středník
Nástroje zpracovávající CSV pak špatně oddělují sloupečky.
### Separátor se nachází v hodnotě buňky a hodnota není v uvozovkách
Nástroje zpracovávající CSV pak špatně oddělují sloupečky.

## Nástroje pro práci s CSV

### Validace

*   [CSVLint](http://csvlint.io/) je validátor CSV

### Prohlížení a tvorba

*   CSV soubory se dají prohlížet v běžných textových editorech, jako je například [Notepad++](https://notepad-plus-plus.org/) či [nano](https://www.nano-editor.org/).
*   S CSV soubory lze pracovat v běžných tabulkových editorech jako [Google Sheets](https://www.google.com/sheets/about/) či [Apache OpenOffice Calc](https://www.openoffice.org/product/calc.html).
*   CSV soubory lze nahrávat přímo jako tabulky do relačních databází jako [MySQL](https://www.mysql.com/) či [PostgreSQL](https://www.postgresql.org/)
*   CSV soubory lze také přímo získat z tabulek v relačních databázích

### Práce s CSV v Microsoft Excel

[Microsoft Excel](https://products.office.com/cs-CZ/excel) se při práci s CSV soubory nechová korektně. 
Jako separátor CSV souborů bere oddělovač prvků seznamů, který se dá nastavit v prostředí Windows. 
V českém prostředí je to středník ```;```, což je zdrojem většiny problémů s CSV soubory, jelikož uložený soubor není správné CSV a správné CSV se špatně otevře.
Správný CSV soubor lze v Excelu otevřít přes vložení externích dat z textu, kde lze nastavit jako oddělovač čárku.
Bohužel, Excel v českém prostředí neumožňuje správné CSV uložit.
Pro tvorbu CSV tedy lze použít jiné nástroje, například [Google Sheets](https://www.google.com/sheets/about/).

## Schémata

CSV soubory na webu je vhodné popisovat jejich schématy, případně je mezi sebou propojovat. 
K tomu existuje sada standardů [CSV on the Web](https://www.w3.org/standards/techs/csv), která umožňuje CSV soubory dále popisovat pomocí JSON souborů specifikujících datové typy položek, cizí klíče atd.

## Datové typy hodnot buněk
Datové typy jednotlivých buněk v CSV by měly odpovídat [datovým typům definovaných pro XML Schema](https://www.w3.org/TR/xmlschema-2/).
Zejména tedy:

1.   Datum odpovídá ```xsd:date```, tedy například ```2017-04-06```, nikoliv ```6. dubna 2017```
2.   Oddělovačem desetinných míst v číslech je tečka ```.```, tedy například ```20.42```, nikoliv čárka
3.   V číslech se neoddělují řády, tedy například ```1000000```, nikoliv ```1 000 000```
