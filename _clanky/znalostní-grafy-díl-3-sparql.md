---
layout: post
title: "Série Znalostní grafy: Díl 3: SPARQL"
detail: true
ref: série-znalostní-grafy-díl-3-sparql
lang: cs
image: ../attachments/články/znalostní-grafy/znalostní-grafy-02.jpg
author: martin_nečaský
date: 2020-09-11T13:27:01.144Z
---
V [minulém dílu][link_previous] seriálu jsme se seznámili s datovým modelem RDF, který je vhodný pro sdílení znalostních grafů ve strojově zpracovatelné podobě otevřených dat.
V tomto dílu si ukážeme, jak můžeme se znalostními grafy reprezentovanými v modelu RDF pracovat pomocí dotazovacího jazyka SPARQL.

<!--more-->

## Co je SPARQL?

[SPARQL][sparql11] je dotazovací jazyk určený pro dotazování do dat reprezentovaných v [datovém modelu RDF][link_previous].
Je podobný dotazovacímu jazyku SQL, který je určený pro dotazování do dat reprezentvaných v relačním datovém modelu, tj. v podobě tabulek uložených v relační databázi.
Rozdíl je právě v datovém modelu.
V SQL popisujeme z jakých tabulek chceme extrahovat jaké řádky pomocí podmínek, které musí tyto řádky splňovat.
Ve SPARQL popisujeme jaké části dotazovaného znalostního grafu chceme extrahovat pomocí pomocí podmínek, které musí uzly extrahovaných částí splňovat.
Pomocí dotazu v jazyku SQL konstruujeme tabulku s výsledky.
Pomocí dotazu v jazyku SPARQL konstruujeme buď znalostní graf s výsledky nebo tabulku s výsledky.

## Co je grafový vzor?

Připomeňme si příklad reprezentace znalostního grafu o Českém statistickém úřadu (ČSÚ) v RDF modelu z minulého článku.
Znalostní graf nám o ČSÚ např. říká, že se jedná o veřejnou organizaci a říká nám jaká je právní forma ČSÚ.
Také nám říká, jakou má datovou schránku a že ČSÚ publikuje datovou sadu.

{% include image.html 
   url="../attachments/články/znalostní-grafy/rdf-čsú-03.svg"
   description="Znalostní graf o ČSÚ v modelu RDF"
%}

Grafový vzor je matematický graf stejně jako i samotný znalostní graf.
Pouze některé uzly v něm nejsou fixovány na konkrétní IRI nebo datovou hodnotu, ale mají přiřazenu proměnnou.
Stejně tak některé hrany nemají přiřazeno fixní IRI určující konkrétní predikát, ale místo predikátu je zde proměnná.
Proměnné jsou v grafových vzorech uvozeny otazníkem.
Proměnnou tak je např. `?název` nebo `?organizace`.

Pokud proměnné v grafovém vzoru zafixujeme na konkrétní IRI nebo datové hodnoty, získáváme znalostní graf.
Grafový vzor specifikuje dotaz do znalostního grafu, jehož vyhodnocení spočívá ve vyhledání částí znalostního grafu, které odpovídají nějakému zafixování grafového vzoru.
Uvažme např. grafový vzor na následujícím obrázku.
Skládá se z jednoho uzlu, který je fixován na kontrétní IRI [`https://data.gov.cz/zdroj/ovm/00025593`](https://data.gov.cz/zdroj/ovm/00025593), jednoho uzlu, který není fixován na žádné IRI ani hodnotu, ale má přiřazenu proměnnou `?název`, a hrany, která má přiřazen konkrétní predikát [`http://schema.org/name`](http://schema.org/name).

{% include image.html 
   url="../attachments/články/znalostní-grafy/sparql-čsú-01.svg"
   description="Grafový vzor odpovídající znalostnímu grafu s názvem ČSÚ"
%}

Pokud tento grafový vzor použijeme jako dotaz nad znalostním grafem, odpovídá každé části tohoto znalostního grafu, která obsahuje uzel s IRI [`https://data.gov.cz/zdroj/ovm/00025593`](https://data.gov.cz/zdroj/ovm/00025593), hranu s predikátem [`http://schema.org/name`](http://schema.org/name) vedoucí z tohoto uzlu do jiného uzlu.
Tento jiný uzel není grafovým vzorem specifikován.
Pokud jej tedy použijeme na znalostní graf z příkladu výše, odpovídá grafový vzor části zobrazené na následujícím obrázku.

Složitější grafové vzory si ukážeme na příkladech později v tomto článku.
Nyní se podívejme, jak můžeme grafové vzory použít k vyjádření dotazů v dotazovacím jazyku SPARQL.

## Základní dotaz v jazyku SPARQL

Znalostní grafy můžeme vyjadřovat v datovém modelu RDF v podobě trojic.
Grafové vzory vyjadřujeme stejně.
Pouze v místech, kde je proměnná místo IRI uvádíme proměnnou.
Grafový vzor z předchozího příkladu tak můžeme zapsat následovně:

~~~~~~
ovm:00025593  schema:name ?název .
~~~~~~~~~~~~

Příklad využívá prefixy, které jsme si zavedli v minulém díle.
Jak je zavést v jazyku SPARQL si ukážeme za chvíli.

V minulém díle jsme si ukazovali, že RDF trojice můžeme číst jako jednoduché oznamovací věty.
Trojice zapisující jednotlivé části grafového vzoru můžeme číst jako jednoduché tázací věty.
Výše uvedenou trojici zapisující grafový vzor z našeho příkladu můžeme číst jako "Jak se jmenuje entita `ovm:0002593`?".
Odpovědí je hodnota, kterou můžeme dosadit za proměnnou `?název` tak, že výsledná trojice se vyskytuje v RDF zápisu našeho znalostního grafu.
V našem případě se jedná o dosazení `?název` = `"Český statistický úřad"@cs`

Samotný zápis grafového vzoru ještě není validním SPARQL dotazem.
SPARQL dotaz ještě musí specifikovat, jakým způsobem mají být strukturovány výsledky dotazu, tj. výsledky dosazení konkrétních hodnot do grafového vzoru.
Nejjednodušší je strukturování do tabulky, kdy vyjmenujeme, jaké proměnné v grafovém vzoru dotazu tvoří sloupečky výsledné tabulky.
SPARQL dotaz má dvě klauzule, podobně jako základní dotaz v jazyku SQL: `SELECT` a `WHERE`.
Klauzule `WHERE` obsahuje grafový vzor uzavřený ve složených závorkách.
Klauzule `SELECT` obsahuje seznam proměnných z grafového vzoru, jejichž dosazené hodnoty pro jednotlivé části znalostního grafu odpovídající grafovému vzoru chceme mít ve výsledku.
Následují příklad je SPARQL dotazem, který vrací tabulku s jedním sloupčkem odpovídajícím proměnné `?název`.
Každý řádek tabulky odpovídá právě jedné části znalostního grafu, která odpovídá znalostnímu grafu.
Pro náš znalostní graf bude mít tabulka jeden řádek, protože se dotazujeme na název konkrétní organizace, která má navíc pouze jeden název.

~~~~~~
SELECT ?název
WHERE {
    ovm:00025593  schema:name ?název .
}
~~~~~~~~~~~~

Výraz dotazu ještě není kompletní, protože používáme prefixy.
Stejně jako v zápisu RDF trojic musíme i zde prefixy definovat.
V jazyku SPARQL k tomu slouží klauzule `PREFIX`.
Pozor na to, že se jedná o jinou syntaxi než syntaxe používaná pro zápis RDF trojic.
Následující příklad je už správným výrazem dotazu.

~~~~~~
PREFIX ovm: <https://data.gov.cz/zdroj/ovm/>
PREFIX schema: <http://schema.org/>

SELECT ?název
WHERE {
    ovm:00025593  schema:name ?název .
}
~~~~~~~~~~~~

## Dotazování nad skutečným úložištěm RDF dat

Máme tedy dotaz vyjádřený v jazyku SPARQL.
Jak jej můžeme nyní použít a dotázat se na konkrétní znalostní graf?
RDF úložiště nabízejí webovou službu zvanou *SPARQL endpoint*, které můžete svůj SPARQL dotaz zaslat a služba vám zašle odpověď.
Tuto možnost pro dotazování využijeme.
Nejprve je nutno mít znalostní graf vyjádřený v modelu RDF někde uložen.
Pokud máme k dispozici pouze export dat v podobě RDF dumpu, můžeme si jej stáhnout a nahrát do vlastního RDF úložiště.
Někdy má ale poskytovatel dat data uložena ve vlastním RDF úložišti a SPARQL endpoint k němu zpřístupní veřejně.

Příklad znalostního grafu výše je součástí většího znalostního grafu, který již je uložen v RDF úložišti s [veřejně přístupným](https://data.gov.cz/sparql) SPARQL endpointem.
Zkuste ze svého prohlížeče ke SPARQL endpointu otevřít.
Prohlížeč zobrazí formulář, kde do pole *Query Text* zkopírujte příklad kompletního SPARQL dotazu výše.
Potom stiskněte tlačítko *Run Query*.
Pokud jste na mobilu nebo se vám nechce kopírovat, můžete si dotaz spustit [rovnou](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0APREFIX+schema%3A+<http%3A%2F%2Fschema.org%2F>%0D%0A%0D%0ASELECT+%3Fnázev%0D%0AWHERE+{%0D%0A++++ovm%3A00025593++schema%3Aname+%3Fnázev+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+).

Výsledkem je tabulka s jedním sloupcem a jedním řádkem (nepočítáme-li hlavičku tabulky), kde je uveden výsledek dotazu.
Asi se divíte divné hlavičce.
To je chyba daného SPARQL endpointu, pro HTML výpis špatně pracuje s kódováním.
Vraťte se ale na stránku s formulářem.
Všimněte si možnosti výbru formátu v poli *Results Format*.
Vyberte formát CSV a spusťte dotaz znovu.
Získáte CSV soubor s výsledkem, kde je již kódování v pořádku.
Tento výstup je zřejmě výstup, který potřebujete pro další strojové zpracování výsledku ve svém oblíbeném nástroji, který pracuje s tabulkovými daty v podobě CSV souborů.

## Pokročilejší SPARQL dotazování

Nyní již znáte podstatu dotazování do znalostních grafů pomocí dotazovacího jazyka SPARQL.
Pojďme se podívat na složitější dotazy a některé další konstrukty tohoto jazyka.
Na principech ale už nic měnit nebudeme.

Začněme se složitějšími grafovými vzory.
Vraťme se k příkladu na prvním obrázku článku.
Ukazuje nám datovou sadu s IRI [`https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19`](https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-290038r19).
Datová sada má pokytovatele, který je k ní připojen pomocí hrany označené predikátem [`http://purl.org/dc/terms/publisher`](http://purl.org/dc/terms/publisher).
Předpokládejme, že známe IRI datové sady a chceme se zeptat na jejího poskytovatele.
Dotaz vyjádříme ve SPARQL následujícím způsbem.

~~~~~~
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX ds: <https://data.gov.cz/zdroj/datové-sady/>

SELECT ?poskytovatel
WHERE {
    ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19 dct:publisher ?poskytovatel .
}
~~~~~~~~~~~~

Samotné IRI poskytovatele stačí, pokud máme nástroj, který je schopen IRI dereferencovat a získat o něm údaje.
Pokud ale chceme jako výsledek SPARQL dotazu získat CSV soubor a s ním pracovat v nástroji, který neumí s IRI pracovat, potřebujeme dostat údaje o poskytovateli přímo do CSV souboru.
Následující SPARQL dotaz rozšiřuje grafový vzor o hranu, pomocí které získáme název poskytovatele.

~~~~~~
PREFIX schema: <http://schema.org/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX ds: <https://data.gov.cz/zdroj/datové-sady/>

SELECT ?poskytovatel ?názevPoskytovatele 
WHERE {
    ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19 dct:publisher ?poskytovatel .

    ?poskytovatel schema:name ?názevPoskytovatele .
}
~~~~~~~~~~~~

Můžeme chtít získat další údaje o poskytovateli, např. údaje o jeho datové schránce.

~~~~~~
PREFIX schema: <http://schema.org/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX ds: <https://data.gov.cz/zdroj/datové-sady/>

SELECT ?poskytovatel ?název ?identifikátorDatovéSchránky
WHERE {
    ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19 dct:publisher ?poskytovatel .

    ?poskytovatel schema:name ?název .
    ?poskytovatel ovm:datováSchránka ?datováSchránka .

    ?datováSchránka skos:notation ?identifikátorDatovéSchránky .
}
~~~~~~~~~~~~

Všimněme si, že u tohoto dotazu neuvádíme v klauzuli `SELECT` všechny proměnné použité v grafovém vzoru.
IRI datové schránky ve výsledku nechceme a proto proměnnou `?datováSchránka` neuvádíme.

Podobně jako jsme mohli syntakticky zkracovat zápis RDF trojic se stejným subjektem, můžeme zkracovat i části grafového vzoru.
V předchozím dotazu máme dvě trojice grafového vzoru se stejným subjektem (začátkem).
Můžeme je zkrátit následujícím způsobem.

~~~~~~
PREFIX schema: <http://schema.org/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX ds: <https://data.gov.cz/zdroj/datové-sady/>

SELECT ?poskytovatel ?název ?identifikátorDatovéSchránky
WHERE {
    ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19 dct:publisher ?poskytovatel .

    ?poskytovatel schema:name ?název ;
      ovm:datováSchránka ?datováSchránka .

    ?datováSchránka skos:notation ?identifikátorDatovéSchránky .
}
~~~~~~~~~~~~

Další zkrácení je možné pomocí konstruktu *cesty*.
Protože nepotřebujeme proměnnou ?datováSchránka, můžeme ji v grafovém vzoru vynechat a specifikovat cestu v grafu k identifikátoru datové schránky.
Cesta sestává z IRI predikátů oddělených lomitkem `/`, které nahrazuje nepotřebnou proměnnou.

~~~~~~
PREFIX schema: <http://schema.org/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX ds: <https://data.gov.cz/zdroj/datové-sady/>

SELECT ?poskytovatel ?název ?identifikátorDatovéSchránky
WHERE {
    ds:http---vdb.czso.cz-pll-eweb-package_show-id-290038r19 dct:publisher ?poskytovatel .

    ?poskytovatel schema:name ?název ;
      ovm:datováSchránka/skos:notation ?identifikátorDatovéSchránky .
}
~~~~~~~~~~~~


## Závěr

Tento článek je zatím o ničem, ale snad se brzy dočkáme opravdového průlomu SPARQL do světa webových vývojářů.