---
layout: post
detail: true
lang: cs
icon: list
ref: ČlánekDoporučováníNKOD
author: martin_víta
date: 2020-03-26 12:00:00
title: Kterou další ještě mohu využít? ...aneb o doporučování podobných datových sad z NKOD
---

V současné době registruje [Národní katalog otevřených dat (NKOD)][link nkod] přes 135 000 datových sad, další stále přibývají. Získat a udržet si přehled o takovémto množství sad je samozřejmě náročné. Z hlediska uživatele-vývojáře, který chce s datovými sadami pracovat, je klíčové mít přehled o tom, jaké další datové sady od jiných poskytovatelů jsou k dispozici a které lze s vybranými datovými sadami propojit. Národní katalog otevřených dat nabízí facetové vyhledávání/filtrování, nicméně i tak se může stát, že relevantní sadu dotyčný vývojář nenajde. Připravili jsme proto jednoduchý doporučovací systém, který pro danou datovou sadu vrátí trojici nejpodobnějších sad jiných poskytovatelů.
<!--more-->
## Použitá data

Tento nástroj pracuje s [Datovými sadami (CSV)][link data], které jsou registrovány v Národním katalogu otevřených dat (jedná se tedy v podstatě o metadata k sadám, které jsou dostupné prostřednictvím NKOD), přičemž sama tato data jsou poskytována jako otevřená.

## Postup zpracování

Každá datová sada byla reprezentována textem, který vznikl spojením (konkatenací) názvu datové sady, jejího popisu a příslušných klíčových slov. (Jednalo se o plaintext v kódování UTF-8 v českém jazyce.)

Stanovení podobnosti dvou datových sad jsme převedli na problém stanovení podobnosti dvou textů, které reprezentují příslušné datové sady. Tyto texty byly nejprve předzpracovány (byl proveden preprocessing), který se skládal z:

* “lowercasování”, tj. převodu na malá písmena,
* byla odstraněna interpunkce,
* byla odstraněna čísla,
* byla odstraněna [stop-slova][link stopslova] (slova nenesoucí význam, jako např. spojky, ...)
* byly odstraněny přebytečné bílé znaky.

Takto očištěné texty byly následně reprezentovány jako vektory v [DTM matici][link dtm], přičemž bylo použito [TF-IDF][link tfidf] váhování. Podobnost dvou textů je pak dána jejich [kosinovou podobností][link cosine] (“blízkostí”). Ke každé dvojici sad tedy máme reálné číslo (mezi nulou a jedničkou), přičemž nula znamená neexistenci společných výrazů v textech, jednička se vyskytuje v případě identických textů.

Ke každé sadě jsme určili trojici nejpodobnějších sad (ve smyslu kosinové podobnosti příslušných textů), omezili jsme se ovšem na dvojice sad od různých poskytovatelů a vynechali jsme [datové sady poskytované ČÚZK][link cuzk]. Nakonec jsme se omezili na sady, pro které platí, že jim nejbližší sada má podobnost alespoň alespoň 0.3 (obecně jakýkoliv threshold mezi nulou a jedničkou). Výsledkem je seznam xxx projektů, k nimž jsou přidány trojice nejpodobnějších datových sad.

V případě dalšího vývoje by bylo možné do preprocessingu zařadit též lemmatizaci (převod slov na základní tvar (např. ze slova *psů* získáme lemmatizací slovo *pes* atp.) a snížit dimenzi vektorů s nimiž pracujeme prostřednictvím [LSA (latentní sémantické analýzy)][link bloglsa]. Jiným přístupem by bylo využití vektorových reprezentací vzniklých na základě word embeddingů (FastText, GloVe, FastText, ...).

## Výsledek

Tento jednoduchý [doporučovací systém si lze přímo vyzkoušet][link recom] – stačí zadat několik písmen z názvu uvažované datové sady.


## Další užití

Podobný princip lze využít pro prozkoumávání/doporučování jakýchkoliv jiných katalogů či jejich částí (kde jednotlivé položky mají svůj název, popis a klíčová slova), může jít jak o katalogy otevřených dat v jiných zemích, ale třeba i knihovnické záznamy atp.

Pro případné začlenění do funkcionality NKOD by byla zvolena adekvátní implementace založena na tomto přístupu.

Vedlejším efektem je, že tímto přístupem získáme též _baseline_ pro další vývoj v oblasti doporučování – můžeme připravit ručně anotovaná data (k dané sadě ručně připravit pořadí top-n nejbližších datových sad) a následně počítat *P@n* (v našem případě *n* = 3), přičemž výsledky sofistikovanější přístupů (např. s využitím ontologií aj.) můžeme porovnat s výsledky tohoto prezentovaného přístupu.

## Použité nástroje a zdroje

Klíčová část (výpočty podobnosti) byla realizována v systému [R][link rproj], resp. [RStudio][link rstudio] s využitím široce rozšířených knihoven readr (pro načítání CSV dat), tm pro preprocessing textu, lsa pro výpočet kosinové podobnosti a dplyr pro filtrování.

Z tabulky podobností byl následně ručně připraven HTML kód s obslužným JavaScriptem ([JS: How TO - Filter/Search Table][link js]).

* [R project][link rproj] (open source aplikace)
* [knihovna lsa][link lsa] (open source aplikace)
* [knihovna tm][link tm] (open source aplikace)
* [knihovna readr][link readr] (open source aplikace)
* [knihovna dplyr][link dplyr] (open source aplikace)

[link nkod]: https://data.gov.cz/datové-sady "NKOD"
[link data]: https://data.gov.cz/soubor/datové-sady.csv "Datové sady"
[link recom]: https://www.martinvita.eu/podobne_datove_sady_nkod.html "Doporučovací systém"
[link stopslova]: https://nlp.fi.muni.cz/cs/StopList "Stop slova v ČR"
[link dtm]: https://en.wikipedia.org/wiki/Document-term_matrix "Document-term matrix"
[link tfidf]: https://en.wikipedia.org/wiki/Tf%E2%80%93idf "TF-IDF"
[link cosine]: https://en.wikipedia.org/wiki/Cosine_similarity "Cosine similarity"
[link cuzk]: https://data.gov.cz/datové-sady?poskytovatel=https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forgán-veřejné-moci%2F00025712 "ČÚZK"
[link bloglsa]: https://blog.seznam.cz/2011/10/semanticka-analyza-textu-4/ "LSA blog"
[link rstudio]: https://rstudio.com/ "RStudio"
[link rproj]: https://www.r-project.org/ "R project"
[link lsa]: https://cran.r-project.org/web/packages/lsa/lsa.pdf "lsa"
[link tm]: https://cran.r-project.org/web/packages/tm/tm.pdf "tm"
[link readr]: https://cran.r-project.org/web/packages/readr/readr.pdf "readr"
[link dplyr]: https://cran.r-project.org/web/packages/dplyr/dplyr.pdf "dplyr"
[link js]: https://www.w3schools.com/howto/howto_js_filter_table.asp "JS: How TO"