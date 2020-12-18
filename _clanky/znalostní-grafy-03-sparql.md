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
Pro jednoduchost se v tomto článku budeme zabývat pouze dotazy, které vrací tabulku.

Tento článek je pouze přehledem principů a možností dotazovacího jazyka SPARQL.
Nejedná se o kompletní referenční příručku.
Pro přehled všechn jednotlivých konstruktů jazyka SPARQL ze sémantického i syntaktického hlediska doporučujeme [materiály konzorcia W3C][sparql11].

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
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0APREFIX+schema%3A+<http%3A%2F%2Fschema.org%2F>%0D%0A%0D%0ASELECT+%3Fnázev%0D%0AWHERE+{%0D%0A++++ovm%3A00025593++schema%3Aname+%3Fnázev+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

## Dotazování nad skutečným úložištěm RDF dat

Máme tedy dotaz vyjádřený v jazyku SPARQL.
Jak jej můžeme nyní použít a dotázat se na konkrétní znalostní graf?
RDF úložiště nabízejí webovou službu zvanou *SPARQL endpoint*, které můžete svůj SPARQL dotaz zaslat a služba vám zašle odpověď.
Tuto možnost pro dotazování využijeme.
Nejprve je nutno mít znalostní graf vyjádřený v modelu RDF někde uložen.
Pokud máme k dispozici pouze export dat v podobě RDF dumpu, můžeme si jej stáhnout a nahrát do vlastního RDF úložiště.
Někdy má ale poskytovatel dat data uložena ve vlastním RDF úložišti a SPARQL endpoint k němu zpřístupní veřejně.

Příklad znalostního grafu výše je součástí většího znalostního grafu, který již je uložen v RDF úložišti s [veřejně přístupným][nkod-ep]) SPARQL endpointem.
Jedná se RDF úložiště [Národního katalogu otevřených dat (NKOD)][nkod].
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
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+ds%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2F>%0D%0A%0D%0ASELECT+%3Fposkytovatel%0D%0AWHERE+{%0D%0A++++ds%3Ahttp---vdb.czso.cz-pll-eweb-package_show-id-290038r19+dct%3Apublisher+%3Fposkytovatel+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

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
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+schema%3A+<http%3A%2F%2Fschema.org%2F>%0D%0APREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+ds%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2F>%0D%0A%0D%0ASELECT+%3Fposkytovatel+%3FnázevPoskytovatele+%0D%0AWHERE+{%0D%0A++++ds%3Ahttp---vdb.czso.cz-pll-eweb-package_show-id-290038r19+dct%3Apublisher+%3Fposkytovatel+.%0D%0A%0D%0A++++%3Fposkytovatel+schema%3Aname+%3FnázevPoskytovatele+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

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
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+schema%3A+<http%3A%2F%2Fschema.org%2F>%0D%0APREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+ds%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2F>%0D%0A%0D%0ASELECT+%3Fposkytovatel+%3Fnázev+%3FidentifikátorDatovéSchránky%0D%0AWHERE+{%0D%0A++++ds%3Ahttp---vdb.czso.cz-pll-eweb-package_show-id-290038r19+dct%3Apublisher+%3Fposkytovatel+.%0D%0A%0D%0A++++%3Fposkytovatel+schema%3Aname+%3Fnázev+.%0D%0A++++%3Fposkytovatel+ovm%3AdatováSchránka+%3FdatováSchránka+.%0D%0A%0D%0A++++%3FdatováSchránka+skos%3Anotation+%3FidentifikátorDatovéSchránky+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

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
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+schema%3A+<http%3A%2F%2Fschema.org%2F>%0D%0APREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+ds%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2F>%0D%0A%0D%0ASELECT+%3Fposkytovatel+%3Fnázev+%3FidentifikátorDatovéSchránky%0D%0AWHERE+{%0D%0A++++ds%3Ahttp---vdb.czso.cz-pll-eweb-package_show-id-290038r19+dct%3Apublisher+%3Fposkytovatel+.%0D%0A%0D%0A++++%3Fposkytovatel+schema%3Aname+%3Fnázev+%3B%0D%0A++++++ovm%3AdatováSchránka+%3FdatováSchránka+.%0D%0A%0D%0A++++%3FdatováSchránka+skos%3Anotation+%3FidentifikátorDatovéSchránky+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Další zkrácení je možné pomocí konstruktu *cesty*.
Protože nepotřebujeme proměnnou `?datováSchránka`, můžeme ji v grafovém vzoru vynechat a specifikovat cestu v grafu k identifikátoru datové schránky.
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
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+schema%3A+<http%3A%2F%2Fschema.org%2F>%0D%0APREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+ds%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2F>%0D%0A%0D%0ASELECT+%3Fposkytovatel+%3Fnázev+%3FidentifikátorDatovéSchránky%0D%0AWHERE+{%0D%0A++++ds%3Ahttp---vdb.czso.cz-pll-eweb-package_show-id-290038r19+dct%3Apublisher+%3Fposkytovatel+.%0D%0A%0D%0A++++%3Fposkytovatel+schema%3Aname+%3Fnázev+%3B%0D%0A++++++ovm%3AdatováSchránka%2Fskos%3Anotation+%3FidentifikátorDatovéSchránky+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Pojďme nyní dotaz otočit a místo na poskytovatele konkrétní datové sady se zeptejme na datové sady daného poskytovatele.
Můžeme zůstat u ČSÚ.
Nejprve se zeptejme na seznam datových sad ČSÚ.

~~~~~~
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX ovm: <https://data.gov.cz/zdroj/ovm/>

SELECT ?datováSada ?název
WHERE {
    ?datováSada dct:publisher ovm:00025593 ;
        dct:title ?názevDatovéSady .
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+schema%3A+<http%3A%2F%2Fschema.org%2F>%0D%0APREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0A%0D%0ASELECT+%3FdatováSada+%3Fnázev%0D%0AWHERE+{%0D%0A++++%3FdatováSada+dct%3Apublisher+ovm%3A00025593+%3B%0D%0A++++++++dct%3Atitle+%3Fnázev+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Dotaz je jednoduchý, výsledek je bohatší - obsahuje všechny datové sady ČSÚ.
Datové sady jsou v NKOD opatřeny klíčovými slovy.
Klíčové slovo je k datové sadě připojeno pomocí hrany označené predikátem `dcat:keyword`, kde `dcat:` je prefixem pro slovník [DCAT][dcat], který spravuje konsorcium [W3C][w3c] a na kterém je postaven evropský aplikační profil [DCAT-AP][dcatap].
Zkusme získat seznam klíčových slov, které ČSÚ používá pro svoje datové sady.

~~~~~~
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX ovm: <https://data.gov.cz/zdroj/ovm/>

SELECT ?slovo
WHERE {
    ?datováSada dct:publisher ovm:00025593 ;
        dcat:keyword ?slovo .
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0A%0D%0ASELECT+%3Fslovo%0D%0AWHERE+{%0D%0A++++%3FdatováSada+dct%3Apublisher+ovm%3A00025593+%3B%0D%0A++++++++dcat%3Akeyword+%3Fslovo+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Výsledek není úplně takový, jaký bychom chtěli, protože klíčová slova se v něm opakují.
Pomocí klíčového slova `DISTINCT` můžeme v dotazu specifikovat, že chceme z výsledku odstranit duplicitní řádky.
Navíc můžeme chtít pro přehlednost seznam setřídit podle abecedy, k čemuž můžeme použít dolňující klauzili `ORDER BY`.
Klíčové slovo `DISTINCT` i klauzuli `ORDER BY` je nutno používat s opatrností, neboť odstranění duplicit zejména nebo třídění může být výpočetně náročnější, zejména pokud se dotýká více sloupců.

~~~~~~
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX ovm: <https://data.gov.cz/zdroj/ovm/>

SELECT DISTINCT ?slovo
WHERE {
    ?datováSada dct:publisher ovm:00025593 ;
        dcat:keyword ?slovo .
}
ORDER BY ?slovo
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+dcat%3A+<http%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23>%0D%0APREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0A%0D%0ASELECT+DISTINCT+%3Fslovo%0D%0AWHERE+{%0D%0A++++%3FdatováSada+dct%3Apublisher+ovm%3A00025593+%3B%0D%0A++++++++dcat%3Akeyword+%3Fslovo+.%0D%0A}%0D%0AORDER+BY+%3Fslovo&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

V klíčových slovech si můžeme všimnout, že ČSÚ používá pro označení některých svých datových sad klíčové slovo *číselník* a *číselníky*.
Pokud chceme vybrat pouze ty datové sady, které jsou označeny tímto klíčovým slovem, musíme specifikovat filtr.
K tomu slouží konstrukce `FILTER` specifikující výrok, který srovnává nebo jinak testuje hodnoty proměnných pomocí různých operátorů.
Může také kombinovat srovnání a testy pomocí logických spojek.
Následující dotaz využívá filtrování k získání číselníků ČSÚ.

~~~~~~
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX ovm: <https://data.gov.cz/zdroj/ovm/>

SELECT DISTINCT ?datováSada ?názevDatovéSady
WHERE {
    ?datováSada dct:publisher ovm:00025593 ;
        dcat:keyword ?slovo ;
        dct:title ?názevDatovéSady .

    FILTER(?slovo = "číselník" || ?slovo = "číselník")
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+dcat%3A+<http%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23>%0D%0APREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0A%0D%0ASELECT+DISTINCT+%3FdatováSada+%3FnázevDatovéSady%0D%0AWHERE+{%0D%0A++++%3FdatováSada+dct%3Apublisher+ovm%3A00025593+%3B%0D%0A++++++++dcat%3Akeyword+%3Fslovo+%3B%0D%0A++++++++dct%3Atitle+%3FnázevDatovéSady+.%0D%0A%0D%0A++++FILTER(%3Fslovo+%3D+"číselník"+||+%3Fslovo+%3D+"číselník")%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Na tomto místě poznáme, zda si dotazy opravdu zkoušíte pustit.
Pokud zkoušíte, asi se divíte, proč je dotaz prázdný.
Změnila se snad nějak struktura dat v úložišti od doby, kdy jsme napsali tento článek?
Ne, problém je jinde.
Zkuste se vrátit k výsledku předchozího dotazu, který vracel seznam klíčových slov.
Podívejte se detailně na výsledek.
Uvidíte, že na řádcích nejsou prosté řetězce, ale řetězce opatřené ještě kódem jazyka, ve kterém je řetězec uveden.
Jedná se tak o jiný datový typ, jehož hodnoty nelze přímo porovnávat z prostými řetězcí.
Máme dvě možnosti.
Můžeme aplikovat na proměnnou `?slovo` [SPARQL funkci](https://www.w3.org/TR/2013/REC-sparql11-query-20130321/#SparqlOps) `STR`, která hodnotu proměnné převede na prostý řetězec.
Pro jazykový řetězec to znamená prosté odhození kódu jazyka z hodnoty.
Nebo můžeme jako porovnávací hodnotu uvést řetězec i s kódem jazyka.
Následující oprava dotazu uvádí obě možnosti.

~~~~~~
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX ovm: <https://data.gov.cz/zdroj/ovm/>

SELECT DISTINCT ?datováSada ?názevDatovéSady
WHERE {
    ?datováSada dct:publisher ovm:00025593 ;
        dcat:keyword ?slovo ;
        dct:title ?názevDatovéSady .

    FILTER(STR(?slovo) = "číselník" || ?slovo = "číselník"@cs)
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+dcat%3A+<http%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23>%0D%0APREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0A%0D%0ASELECT+DISTINCT+%3FdatováSada+%3FnázevDatovéSady%0D%0AWHERE+{%0D%0A++++%3FdatováSada+dct%3Apublisher+ovm%3A00025593+%3B%0D%0A++++++++dcat%3Akeyword+%3Fslovo+%3B%0D%0A++++++++dct%3Atitle+%3FnázevDatovéSady+.%0D%0A%0D%0A++++FILTER(STR(%3Fslovo)+%3D+"číselník"+||+%3Fslovo+%3D+"číselník"%40cs)%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Nyní už výsledek vypadá správně.
Ve výsledku nám ale mohou vadit datové sady, které nejsou číselníky, ale datovými sadami s vazbami mezi číselníky.
Když se podíváme na vybranou datovou sadu s vazbami, např. [`https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-cis69vaz44`](https://data.gov.cz/zdroj/datové-sady/http---vdb.czso.cz-pll-eweb-package_show-id-cis69vaz44), můžeme si všimnout, že používá klíčové slovo *vazba*.
Pojďme si je tedy z výsledku dotazu odfiltrovat.

~~~~~~
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX ovm: <https://data.gov.cz/zdroj/ovm/>

SELECT DISTINCT ?datováSada ?názevDatovéSady
WHERE {
    ?datováSada dct:publisher ovm:00025593 ;
        dcat:keyword ?slovo ;
        dct:title ?názevDatovéSady .

    FILTER((STR(?slovo) = "číselník" || ?slovo = "číselník"@cs) && ?slovo != "vazba"@cs)
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+dcat%3A+<http%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23>%0D%0APREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0A%0D%0ASELECT+DISTINCT+%3FdatováSada+%3FnázevDatovéSady%0D%0AWHERE+{%0D%0A++++%3FdatováSada+dct%3Apublisher+ovm%3A00025593+%3B%0D%0A++++++++dcat%3Akeyword+%3Fslovo+%3B%0D%0A++++++++dct%3Atitle+%3FnázevDatovéSady+.%0D%0A%0D%0A++++FILTER((STR(%3Fslovo)+%3D+"číselník"+||+%3Fslovo+%3D+"číselník"%40cs)+%26%26+%3Fslovo+!%3D+"vazba"%40cs)%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Doufáme, že už si dotazy opravdu zkoušíte.
Ve výsledku vazby stále vidíme.
Jak je to možné, když je filtrujeme pryč?
Odpověď je jednoduchá - nefiltrujeme je.
Vysvětlení je ale trochu složitější.
Nesouvisí s dotazovacím jazykem SPARQL ale s logikou.
Vyhodnocení dotazu znamená, že jsou ve znalostním grafu vyhledávány části, které odpovídají grafovému vzoru.
Jistě jste si pro datové sady s vazbami všimli, že nejsou označeny pouze klíčovým slovem *vazba*, ale i jinými klíčovými slovy, např. právě *číselník* nebo *ČSÚ*.
A proto se podaří pro grafový vzor najít část, která odpovídá datové sadě ČSÚ s klíčovým slovem, které není slovem *vazba* a datová sada s vazbami je vrácena ve výsledku.

Pro řešení tohoto problému nám nestačí filtrování pomocí jednoduché výrokové logiky, ale potřebujeme existenční kvantifikátor.
Ten nám umožní rozšířit předchozí vzor tak, abychom mohli říci, že chceme pouze takové datové sady, pro které *neexistuje* klíčové slovo *vazba*.
Předchozí dotaz toto neříká.
Ten říká, že chceme takové datové sady, pro kterou nějaké její klíčové slovo není slovem *vazba*.
A to je podstatný logický rozdíl.
Neexistenci můžeme vyjádřit pomocí konstrukce `FILTER NOT EXISTS`, která uvádí grafový vzor (můžeme říkat *podvzor*), který *nesmí* být naplněn.

~~~~~~
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX ovm: <https://data.gov.cz/zdroj/ovm/>

SELECT DISTINCT ?datováSada ?názevDatovéSady
WHERE {
    ?datováSada dct:publisher ovm:00025593 ;
        dcat:keyword ?slovo ;
        dct:title ?názevDatovéSady .

    FILTER((STR(?slovo) = "číselník" || ?slovo = "číselník"@cs))
    FILTER NOT EXISTS {
        ?datováSada dcat:keyword ?jinéSlovo .
        FILTER(?jinéSlovo = "vazba"@cs)
    }
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+dcat%3A+<http%3A%2F%2Fwww.w3.org%2Fns%2Fdcat%23>%0D%0APREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0A%0D%0ASELECT+DISTINCT+%3FdatováSada+%3FnázevDatovéSady%0D%0AWHERE+{%0D%0A++++%3FdatováSada+dct%3Apublisher+ovm%3A00025593+%3B%0D%0A++++++++dcat%3Akeyword+%3Fslovo+%3B%0D%0A++++++++dct%3Atitle+%3FnázevDatovéSady+.%0D%0A%0D%0A++++FILTER((STR(%3Fslovo)+%3D+"číselník"+||+%3Fslovo+%3D+"číselník"%40cs))%0D%0A++++FILTER+NOT+EXISTS+{%0D%0A++++++++%3FdatováSada+dcat%3Akeyword+%3FjinéSlovo+.%0D%0A++++++++FILTER(%3FjinéSlovo+%3D+"vazba"%40cs)%0D%0A++++}%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Zde jsme se dostali až k samotným logickým základům dotazování, které se hodí i při používání jiných dotazovacích jazyků.
Chtěli jsme pouze demonstrovat podobnost síly jazyka SPARQL s jinými dotazovacími jazyky, např. SQL.

## Agregační dotazy ve SPARQL

V jazyku SPARQL můžeme také zapisovat tzv. agregační dotazy.
Jedná se o dotazy, které nevrací prvky, ale jejich počty, průměry jejich číselných vlastností apod.
SPARQL je v tomto stejný.
Existuje zde klauzule [`GROUP BY`](https://www.w3.org/TR/2013/REC-sparql11-query-20130321/#aggregates), pomocí které speficifikujeme, že se části znalostního grafu, které odpovídají grafovému vzoru, seskupí podle hodnoty nějaké proměnné, tzv. *agregační proměnné*.
Jedna skupina obsahuje ty části znalostního grafu, pro které má agregační proměnná stejnou hodnotu.
Ve specifikaci výsledku potom můžeme uvést buď agregační proměnnou, agregaci nějaké neagregační proměnné, např. pomocí agregační funkce `AVG` pro průměr nebo spočítáním počtů prvků ve skupině pomocí agregační funkce `COUNT`.
Uveďme si agregace pouze na příkladu.
Chceme vědět počet datových sad podle poskytovatele.

~~~~~~
PREFIX dct: <http://purl.org/dc/terms/>

SELECT DISTINCT ?poskytovatel (COUNT(?datováSada) AS ?početDatovýchSad)
WHERE {
    ?datováSada dct:publisher ?poskytovatel .
}
GROUP BY ?poskytovatel
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0A%0D%0ASELECT+DISTINCT+%3Fposkytovatel+(COUNT(%3FdatováSada)+AS+%3FpočetDatovýchSad)%0D%0AWHERE+{%0D%0A++++%3FdatováSada+dct%3Apublisher+%3Fposkytovatel+.%0D%0A}%0D%0AGROUP+BY+%3Fposkytovatel&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Zkusme výsledek trochu vylepšit.
Nejprve výsledek seřaďme.
Klauzule `ORDER BY` je aplikována až po agregaci.
Dále si přidejme název poskytovatele do výsledku.
Protože do výsledku může jít pouze agregační proměnná, musíme mít dvě agregační proměnné.
Princip je ale stejný.

~~~~~~
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX schema: <http://schema.org/>

SELECT DISTINCT ?poskytovatel ?názevPoskytovatele (COUNT(?datováSada) AS ?početDatovýchSad)
WHERE {
    ?datováSada dct:publisher ?poskytovatel .

    ?poskytovatel schema:name ?názevPoskytovatele .
}
GROUP BY ?poskytovatel ?názevPoskytovatele
ORDER BY ?početDatovýchSad
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+dct%3A+<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%0D%0APREFIX+schema%3A+<http%3A%2F%2Fschema.org%2F>%0D%0A%0D%0ASELECT+DISTINCT+%3Fposkytovatel+%3FnázevPoskytovatele+(COUNT(%3FdatováSada)+AS+%3FpočetDatovýchSad)%0D%0AWHERE+{%0D%0A++++%3FdatováSada+dct%3Apublisher+%3Fposkytovatel+.%0D%0A%0D%0A++++%3Fposkytovatel+schema%3Aname+%3FnázevPoskytovatele+.%0D%0A}%0D%0AGROUP+BY+%3Fposkytovatel+%3FnázevPoskytovatele%0D%0AORDER+BY+%3FpočetDatovýchSad&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

## Dotazy na strukturu znalostního grafu

Abychom byly schopni konstruovat dotazy nad znalostním grafem, musíme znát jeho strukturu nebo-li schéma, stejně jako musíme znát strukturu tabulek v relační databázi, pokud chceme zapsat dotaz v jazyku SQL.
Struktura znalostního grafu ale může být, a typicky je, složitá a heterogenní, a nemusí tak být jednoduché strukturu poznat a vyznat se v ní.
Výhoda datového modelu RDF spočívá v možnosti zakódování schématu přímo v datech.
Tj. schéma není definováno explicitně, ale vyplývá implicitně z tvaru samotných dat.
Určitá omezení na strukturu nebo předepsaná doporučená struktura sice může být dána pomocí slovníku nebo ontologie, ale není striktní (viz např. slovník [schema.org](https://schema.org/docs/full.html), který používáme i v našich příkladech.
To dává znalostním grafou zajímavou míru flexibility, ale může být potíží, pokud se chceme v datech vyznat a zapsat dotaz.
Toto ale není vlastností modelu RDF nebo jazyka SPARQL.
Jedná se o to, že ve znalostních grafech reprezentujeme složitá data ve velké míře detailu.
Vysoká složitost datového schématu se pak projeví v jakémkoliv datovém modelu.

Dotazovací jazyk SPARQL nám umožňuje se na strukturu dat ptát.
Můžeme tak využít síly jazyka SPARQL při samotné konstrukci SPARQL dotazů.
Jak jsme řekli na začátku článku, proměnnou můžeme použít nejenom na místě subjektu nebo objektu, ale také na místě predikátu.
A tak se můžeme např. zeptat na to, jaké všechny vlastnosti jsou popsány pro ČSÚ.

~~~~~~
PREFIX ovm: <https://data.gov.cz/zdroj/ovm/>

SELECT DISTINCT ?vlastnost
WHERE {
    ovm:00025593 ?vlastnost [] .
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0APREFIX+schema%3A+<http%3A%2F%2Fschema.org%2F>%0D%0A%0D%0ASELECT+DISTINCT+%3Fvlastnost%0D%0AWHERE+{%0D%0A++++ovm%3A00025593++%3Fvlastnost+[]+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Povšimněte si konstruktu `[]`.
Ten říká, že je nám jedno, co je v dané odpovídají části znalostního grafu za hodnotu, nepřiřazujeme ji do proměnné a tudíž ji ani nebudeme chtít ve výsledku.
Obvykle ale necheme vlastnosti pospané pro jednu konkrétní entitu, ale pro všechny entity daného typu.
Můžeme se tak nejprve zeptat, jakého typu je ČSÚ.

~~~~~~
PREFIX ovm: <https://data.gov.cz/zdroj/ovm/>

SELECT DISTINCT ?typ
WHERE {
    ovm:00025593 a ?typ .
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0APREFIX+schema%3A+<http%3A%2F%2Fschema.org%2F>%0D%0A%0D%0ASELECT+DISTINCT+%3Ftyp%0D%0AWHERE+{%0D%0A++++ovm%3A00025593+a+%3Ftyp+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Můžeme si pak vybrat jeden typ, abychom zjistitli, jaké vlastnosti jsou ve znalostním grafu používány pro entity tohoto typu.
Vyberme si např. `schema:Organization`.

~~~~~~
PREFIX ovm: <https://data.gov.cz/zdroj/ovm/>
PREFIX schema: <http://schema.org/>

SELECT DISTINCT ?vlastnost
WHERE {
  [] a schema:Organization ;
    ?vlastnost [] .
}
~~~~~~~~~~~~
[(zkusit dotaz)](https://data.gov.cz/sparql?default-graph-uri=&query=PREFIX+ovm%3A+<https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fovm%2F>%0D%0APREFIX+schema%3A+<http%3A%2F%2Fschema.org%2F>%0D%0A%0D%0ASELECT+DISTINCT+%3Fvlastnost%0D%0AWHERE+{%0D%0A++[]+a+schema%3AOrganization+%3B%0D%0A++++%3Fvlastnost+[]+.%0D%0A}&format=text%2Fhtml&timeout=0&debug=on&run=+Run+Query+)

Výsledek nám pomůže při psaní SPARQL dotazů na poskytovatele ve znalostním grafu NKOD.
S dotazy na strukturu dat ale opatrně.
Snažte se vždy výsledky nějak omezovat, tj. ukotvit v nějakém bodě.
Přílišná obecnost dotazu může vést na výpočetně náročnou exploraci znalostního grafu.
Pokud se ptáte na veřejný SPARQL endpoint, může se stát, že nebude z důvodu jeho omezení schopen na dotaz odpovědět.

## Závěr

V tomto článku jsme se seznámili se základními principy dotazování nad znalostními grafy pomocí dotazovacího jazyka SPARQL.
Zjistili jsme, že dotazování je založeno na grafových vzorech a vyhledávání částí znalostního grafu, které grafovým vzorům odpovídají.
Viděli jsme řadu příkladů, které nám ukazovali jednoduché i složitější dotazy vyjádřené v jazyku SPARQL, jejichž základem jsou právě grafové vzory.
Seznámili jsme se se základními i některými pokročilými konstrukty jazyka SPARQL, jako jsou např. agregace výsledků nebo dotazování na strukturu znalostního grafu.
Všechny příklady SPARQL dotazů jsou dotazy nad znalostním grafem [Národního katalogu otevřených dat (NKOD)][nkod].
Každý lze přímo spustit nad veřejným [SPARQL endpointem NKOD][nkod-ep]].
Čeká nás několik dílů tohoto seriálu, kde představíme další veřejné SPARQL endpointy.
Uvidíme také např. že v jednom SPARQL dotazu se můžeme dotázat i do více SPARQL endpointů najednou.

[link_previous]: https://data.gov.cz/články/znalostní-grafy-02-rdf "Minulý díl"
[sparql11]: https://www.w3.org/TR/sparql11-overview/ "SPARQL 1.1. Overview"
[nkod]: https://data.gov.cz "Národní katalog otevřených dat (NKOD)"
[nkod-ep]: https://data.gov.cz/sparql "SPARQL endpoint NKOD" 
[dcat]: https://www.w3.org/TR/vocab-dcat-2/ "Data Catalog Vocabulary (DCAT) - Version 2" 
[dcatap]: https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe "DCAT Application Profile for data portals in Europe (DCAT-AP)" 
[w3c]: https://www.w3.org/ "World Wide Web Consortium" 