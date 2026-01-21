---
layout: post
title: Vybrané techniky analýzy datové kvality a jejich aplikace na data z Centrální evidence projektů VaVaI
detail: true
ref: techniky-analýzy-datové-kvality-cep
lang: cs
image: ../přílohy/články/techniky-analýzy-datové-kvality-cep/0-datová-kvalita-cep.webp
author: martin_víta
date: 2021-10-29 06:00:00 +01:00
---
Jedním z přínosů otevřených dat je poskytnutí možnosti participace odborné veřejnosti na monitorování datové kvality, případně na aktivitách typu čištění dat (*„data cleansing“*). Tyto aktivity mají smysl jak směrem k uživatelům dat – poskytnou-li ti, kteří data čistí, výsledky své činnosti dalším uživatelům, kteří tak mohou následně pracovat s kvalitnějšími daty, tak směrem k tvůrcům otevřených dat, kteří na základě toho mohou podniknout kroky ke zvyšování datové kvality na úrovni „zdroje“. V tomto článku stručně zmíníme některé pojmy a techniky spadající do řízení datové kvality a následně je aplikujeme na příkladě dat o projektech výzkumu, vývoje a inovacích, které jsou finacovány ze státního, příp. krajských rozpočtů. Naznačené přístupy mohou být využity i u řady dalších datových sad jiných poskytovatelů otevřených dat.
<!--more-->

Doplňme ještě na úvod, že pohled na kvalitu otevřených dat z jiné perspektivy je k dispozici v příslušné sekci [Portálu pro poskytovatele][link_pod_data_quality]. My se zde zaměříme zejména na “obsah datové sady”.

Otázka datové kvality je v prostředí otevřených dat klíčová, neboť koncept otevřených dat vychází z potřeb znovupoužitelnosti a propojování s dalšími daty. Chyba v primárních, resp. zdrojových datech se tak může propisovat dále a snižovat kvalitu dalších výstupů, které jsou na těchto datech založeny.

Ještě dodejme, že samotný Národní katalog otevřených dat (NKOD) datovou kvalitu jednotlivých datových sad ve smyslu tohoto článku nekontroluje – to by mimochodem znamenalo, že by musel pracovat se samotnými daty, kdežto NKOD pracuje pouze s metadaty příslušných datových sad, ty kontroluje a zároveň kontroluje dostupnost dat. Datová kvalita jednotlivých sad je však odpovědností pouze jejich poskytovatelů.

Jednou z prvních aktivit řízení kvality dat je data profiling. Jde v zásadě o soubor technik, jejichž cílem je získat prvotní vhled do struktury dat a hodnot atributů, případné zjištění přítomnosti anomálií atd. 

*Informace získané při data profilingu pak mohou být dále využity pro definování objektivních metrik, které se uplatňují při charakterizování vlastností dat (míra nevyplněnosti záznamů v daném atributu, který je povinný, podíl rodných čísel v daném sloupci tabulky, který nesplňuje určité syntaktické kritérium, atp.). Více o vlastnostech dat v kontextu řízení datové kvality se lze dozvědět např. v [dizertační práci Davida Pejčocha][link_phd_pejcoch].*

*Na data profiling zpravidla navazují různé aktivity v oblasti verifikace a validace dat. Zkrácený přehled způsobů validace dat je k dispozici opět [v dizertační práci D. Pejčocha][link_phd_pejcoch]. Zhruba řečeno, u jednotlivých hodnot atributů entit v distribuci datové sady můžeme kontrolovat splnění nejrůznějších pravidel (např. syntaktických typu regulární výrazy či sémantických typu kontrola podle referenčního zdroje, …). Na tuto fázi pak navazují samotné aktivity čištění dat, potažmo zvyšování datové kvality.*

## Příklad z praxe, aneb validujeme otevřená data CEP
Jelikož cílem tohoto článku není podat systematický výklad přístupů k řízení datové kvality, podíváme se nyní na konkrétní datový zdroj – přesněji, na *konkrétní distribuci jedné datové sady* a pro některé atributy provedeme data profiling, zjistíme hodnoty některých metrik a také si budeme demonstrovat některé validační techniky.

### Centrální evidence projektů – součást IS VaVaI
[Centrální evidence projektů][link_cep], zkráceně CEP, je jednou z klíčových součástí [Informačního systému výzkumu, vývoje a inovací][link_isvavai] (IS VaVaI), který provozuje Úřad vlády ČR na základě [Nařízení vlády č. 367/2009 Sb.][link_narizeni] Zhruba řečeno, obsahuje základní (meta)data o projektech výzkumu, vývoje a inovací, které byly financovány z veřejných prostředků, prostřednictvím poskytovatelů z ČR. Bude-li například fakulta XY řešit výzkumný projekt, jehož poskytovatelem je Technologická agentura ČR (organizační složka státu), objeví se tento projekt mezi položkami CEP. ISVaV poskytuje již řadu let informace prostřednictvím webového rozhraní, viz obrázek.

{% include image.html url="../přílohy/články/techniky-analýzy-datové-kvality-cep/1-isvavai.webp" description="Webové rozhraní IS VaVaI" %}

V souladu s Nařízením vlády je CEP jakožto součást ISVaVu poskytován jako [otevřená data][link_od_cep]. Implementace tohoto Nařízení vyústila v možnost stáhnout si CSV distribuce vybraných částí dat, které jsou spravovány v rámci ISVaV. Jednou z takových distribucí je CSV dataset CEPu, ten je opatřen navíc [schématem][link_od_cep_schema].

Dataset obsahuje (k 20.10.2021) 53713 záznamů s 51 atributy (mezi jinými např. kód projektu, poskytovatel, název projektu (originální, v AJ) atd. – kompletní přehled je dán zmíněným schématem.

Data do CEPu jsou předávána (především) poskytovateli podpory, Úřad vlády provozující ISVaV není původcem dat, pouze je agreguje a spravuje.

## Vybrané aktivity data profilingu nad datasetem CEP
V rámci data profilingu bychom měli získat základní představu o charakteristikách hodnot jednotlivých atributů. Podíváme se nejprve na míru vyplnění jednotlivých sloupců.

V našem případě budeme pracovat v prostředí [RStudio][link_rstudio] s využitím několika balíčků.
Nejprve si načteme data s využitím knihovny [readr][link_readr] (balíček pro práci s tabulárními daty) a zjistíme počet řádků / záznamů.

~~~
library(readr)
raw.cep <- read_csv("CEP-projekty.csv", progress = T, guess_max = 50000)
nrow(raw.cep)
~~~

Zjistíme, že záznamů je v tabulce 53713 (což je zhruba o tisícovku projektů méně, než je aktuálně evidováno v databázi CEP přístupné přes webové rozhraní. Existují tedy projekty, které nejsou k dispozici v “CSV distribuci otevřených dat CEP”.) V současné době komunikujeme s poskytovatelem ohledně tohoto stavu.
Následně se podíváme na míru nevyplněnosti jednotlivých atributů: pro každý sloupec tabulky určíme počet “hodnot” NA. To můžeme provést například následovně:

~~~
as.data.frame(sapply(colnames(raw.cep), FUN = function(x) return(sum(is.na(raw.cep[, x])))))
~~~

Tento stručný zápis si zaslouží komentář: funkce sapply nám na každou položku ze seznamu colnames(raw.cep), čili názvů jednotlivých sloupců, provede funkci, která vrací počet položek daného sloupce, jejichž hodnota je NA, tedy “nevyplněno”. (Znalci lambda kalkulu či funkcionálního programování v zápise jistě vidí tzv. lambda funkci.). Výsledek je zobrazen jako data frame (“tabulka”).

Podívejme se na několik prvních výsledků tohoto reportu:

~~~
poradi	0
odkaz_na_isvavai.cz	0
kod_projektu	0
poskytovatel	0
kategorie_vav	17396
kod_programu	108
nazev_projektu_originalni	0
nazev_projektu_anglicky	773
stupen_duvernosti	0
rok_zahajeni	0
rok_ukonceni	0
datum_zahajeni	22880
datum_ukonceni	22880
~~~
(...)


Vidíme, že identifikační údaje jako kód projektu, poskytovatel, název projektu originální, odkaz na IS VaVaI, stejně jako rok zahájení či ukončení nebo stupeň důvěrnosti vykazují nulovou nevyplněnost, v dalších položkách se již určitá míra nevyplněnosti vyskytuje. Vynikne to zejména u data zahájení/ukončení, která nejsou vyplněna u necelé poloviny záznamů. Nevyplněnost samozřejmě nelze automaticky pokládat za chybu, např. v případě položky organizační jednotka jistě může být nevyplnění hodnoty záměrné – např. v situaci, kdy organizace se na organizační jednotky nečlení atp. Co by si ale rozhodně zasloužilo bližší pozornost, jsou projekty, ve kterých je nevyplněná položka “hlavní příjemce” (hlavni_prijemce). Těch je právě 99. Na straně provozovatele IS VaVaI by tedy bylo vhodné zjistit důvod, proč k tomu došlo.

Dále se v rámci data profilingu můžeme věnovat distribuci hodnot ve vybraných sloupcích. Podívejme se např. na rok zahájení.

~~~
as.data.frame(table(raw.cep$rok_zahajeni))
~~~
Výstup má takovouto podobu:
~~~
1985    1
1988    1
1989    3
1990    7
1991  879
1992  532
1993 1670
1994 1381
1995 1495
…
2019 2146
2020 1872
~~~

Je-li rok nižší než 1989, jedná se patrně o chybu, neboť v období nemohlo docházet k financování projektů způsobem, který je zaznamenáván v CEP. Používá-li někdo tato data v dalších aplikacích bez rozmyslu, můžou se tyto typy chyb propagovat dále, viz např. v aplikaci [STARFOS][link_starfos].

{% include image.html url="../přílohy/články/techniky-analýzy-datové-kvality-cep/2-starfos.webp" description="Webové rozhraní STARFOS" %}

Podíváme-li se na distribuci hodnot ve sloupci zeme_sidla (mimo NA položky)

~~~
as.data.frame(table(raw.cep$zeme_sidla))
~~~
získáme následující tabulku:

| Stát | Počet |
|------|-------|
| CZ   | 53404 |
| DE   |     1 |
| CH   |     1 |
| SK   |     1 |


Vidíme, že až na 3 výjimky máme co do činění pouze s českými organizacemi.
Jedním z klíčových identifikátorů používaných ve veřejné správě, je IČO. Tento identifikátor prodělal v průběhu historie určitý vývoj, v současné době by se měla používat IČO v podobě osmimístného čísla s tím, že dřívější kratší IČO mají být zleva doplněna nulami.

Při prozkoumávání IČO z hlediska distribuce délky (ve smyslu počtu znaků) 
~~~
table(sapply(raw.cep$ico, nchar))
~~~
dostaneme následující výstup:

| Délka | Počet záznamů |
|-------|---------------|
| 1     | 57            |
| 3     | 191           |
| 4     | 124           |
| 5     | 4674          |
| 6     | 7919          |
| 7     | 5             |
| 8     | 40434         |

Zjevně tedy CEP využívá IČO proměnlivých délek, nikoliv pevnou délku 8 znaků (IČO o délce 8 znaků však výrazně převažují). To je třeba vzít v úvahu při dalším zpracování.
Vzhledem k tomu, že CEP obsahuje i položky, jejichž jazykem má být angličtina můžeme se podívat, kolik hodnot pro daný atribut je česky. Využít k tomu můžeme knihovnu [cld3 společnosti Google][link_google_cld3], jejíž funkcionalitu v R zprostředkovává [stejnojmenný balíček][link_r_cld3].

~~~
library(cld3)
subset.in.czech <- raw.cep[detect_language(raw.cep$klicova_slova_anglicky)=="cs" & !is.na(detect_language(raw.cep$klicova_slova_anglicky)),]
~~~

I přes to, že příslušná funkce nefunguje stoprocentně (tedy nestanoví jazyk textu vždy správně), pracuje vzhledem k češtině korektně: jestliže funkce označí vzorek jako český, pak skutečně v češtině je. Záznamů, které mají “česky klíčová slova, která by měla být v angličtině” je dle této funkce 3702 (počet řádků data frame subset.in.czech). Po bližším prozkoumání zjistíme, že se typicky jedná o vyplnění této položky českými klíčovými slovy.

Podobně bychom mohli postupovat i u dalších položek.

### Validace vybraných položek datasetu CEP
Během data profilingu jsme získávali základní představu o datech v našem datasetu. Nyní se můžeme pokusit definovat kritéria, která mají hodnoty jednotlivých atributů splňovat, budeme tedy provádět validaci položek.

Kritéria, která se týkají jednotlivých atributů, mohou mít syntaktický nebo sémantický charakter.

Za syntaktická kritéria můžeme považovat např. to, že daný řetězec odpovídá (či neodpovídá) určitému regulárnímu výrazu. Konkrétním příkladem pak může být pravidlo, že PSČ se skládá pouze z pětice číslic, případně trojice a dvojice číslic oddělených mezerou (či bílým znakem). Jiným příkladem může být např. dělitelnost rodného čísla jedenácti (reálně je pravidlo na kontrolu RČ poněkud složitější, dělitelnost jedenácti má své výjimky).

Podívejme se proto na jednoduchý příklad: 

~~~
library(stringr)
sum(str_detect(raw.cep$psc_sidla,"^[0-9]{3}\\s?[0-9]{2}$"), na.rm = T)
~~~

Výsledkem je číslo 48063, čili zhruba 5 tis. záznamů nemá PSČ v tomto tvaru.

Příkladem sémantického kritéria může být to, zda je daná pětice číslic reálným PSČ, čili zda existuje v ČR obec, které toto PSČ přináleží. Sémantická kritéria typicky ověřujeme porovnáním s jiným datovým zdrojem, který považujeme za autoritativní.

Ukázkovým příkladem může být např. srovnání IČO vzhledem k registru. Zde si můžeme pomoci datovou sadou s názvem [Datový soubor s daty Identifikačních čísel (IČ) a dalších atributů pro potřeby kontrol partnerů v rámci sběru Pomocného analytického přehledu (PAP)][link_pap_data], který sice není poskytován v souladu s principy otevřených dat v ČR, nicméně patří k těm nejkompletnějším. Je poskytován jako zip archiv, v němž se nachází jediný textový soubor, jehož každý řádek odpovídá jednomu záznamu (společnosti). Položky v záznamu jsou oddělovány “svislítkem”, přičemž IČO je vždy první položkou daného záznamu (řádku). Dle [průvodního textu][link_pap_pruvodni] obsahuje platná všechna platná IČ + IČ, u kterých došlo k jejich zániku v průběhu roku 2013.

Seznam IČO získaných z tohoto zdroje opět doplníme na 8 znaků zleva nulami a následně zjistíme, která IČO z CEP se vyskytují v seznamu ze soubou Státní pokladny. Provedeme to takto:

~~~
# z našeho souboru, který kontrolujeme vybereme IČO a doplníme je zleva nulami právě tehdy, když mají méně než osm znaků.
paddovana.ico <- str_pad(raw.cep$ico, 8, side="left", pad="0")
# ze souboru ze Státní pokladny načteme jednotlivé záznamy / řádky
sp.ico <- readLines("PAP-IC-2021-09-30-v01.unl")
# připravíme si funkci, která z každého řádku extrahuje první položku oddělenou svislítkem
extract.ico <- function(item) {
  return(strsplit(item, split = "|", fixed = T)[[1]][1])
}
# na každý řádek, který jsme načetli, aplikujeme funkci na extrakci # IČO.
extrahovana.ico <- sapply(X = sp.ico, FUN = extract.ico)
# extrahovaná IČO také doplníme zleva nulami
sp.paddovana.ico <- str_pad(extrahovana.ico, 8, side="left", pad="0")
# A zjistíme počet těch, které 
sum(paddovana.ico %in% sp.ipaddovana.ico)
~~~

Výsledkem je krásné kulaté číslo 51000, což znamená, že jen zhruba 5 procent záznamů nemá IČO, které je obsaženo v dané kolekci Státní podkladny. Podíváme-li se na počet unikátních IČO, které ve “Státní pokladně nenajdeme”, což zjistíme pomocí následujícího příkazu:

~~~
# Délka seznamu unikátních IČO z našeho datasetu, které NEjsou obsažené v seznamu IČO ze Státní pokladny.
length(unique(paddovana.ico[!(paddovana.ico %in% sp.paddovana.ico)]))
~~~

Aktuálně dospějeme k číslu 574. Jedná se převážně o IČO vymazané před rokem 2013 atp. (např. fyzických osob, ústavů, které byly zrušeny aj.) Jde však o počet, který lze efektivně manuálně zkontrolovat.

## Závěr
Tento článek není detailní analýzou datasetu projektů evidovaných v CEP z hlediska datové kvality. Je především poukazem na to, že u otevřených dat *má smysl zabývat se datovou kvalitou.*

Může být podnětem pro zahájení monitorování datové kvality – definování metrik charakterizujících vlastnosti jednotlivých atributů v rámci datasetu a sledování hodnot těchto metrik v průběhu času.

Na tyto úvahy může navázat analýza vzniku chyb – v případě tohoto datasetu zjištění, v jakých situacích (a proč) dochází k vzniku chyb a podnětem k jejich odstranění. V případě systémů jako IS VaVaI, které získávají data importem od předem dané množiny může být vhodným doporučením zavedení [data quality firewallu][link_dqf], který neumožní importovat data, která nesplňují stanovené požadavky na kvalitu. Vzniká tím přirozený životní cyklus, v rámci kterého na zavedená opatření naváže další opakované měření kvality pomocí definovaných metrik, čímž se cyklus uzavírá.

## Použité nástroje a zdroje
- [RStudio][link_rstudio] - RStudio
- [readr][link_readr] - Balíček readr
- [cld3][link_r_cld3] - Balíček cld3 (Google's Compact Language Detector 3)

[link_pod_data_quality]: /datová-kvalita/ "Datová kvalita (nejen) v oblasti otevřených dat"
[link_phd_pejcoch]: https://vskp.vse.cz/44713_komplexni-rizeni-kvality-dat-a-informaci "Komplexní řízení kvality dat a informací – dizertační práce"
[link_cep]: https://www.isvavai.cz/cep/ "Centralní evidence projektů IS VaVaI"
[link_isvavai]: https://www.isvavai.cz "IS VaVaI"
[link_narizeni]: https://www.e-sbirka.cz/sb/2009/397?zalozka=text "Nařízení vlády č. 397/2009 Sb., o informačním systému výzkumu, experimentálního vývoje a inovací"
[link_od_cep]: https://data.gov.cz/datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2F00006599%2F841711772 "Datová sada CEP"
[link_od_cep_schema]: https://www.isvavai.cz/dokumenty/open-data/CEP-projekty.csv-metadata.json "Datové schéma CEP"
[link_starfos]: https://www.starfos.cz "STARFOS"
[link_google_cld3]: https://github.com/google/cld3 "Knihovna Google's Compact Language Detector 3"
[link_r_cld3]: https://cran.r-project.org/web/packages/cld3/cld3.pdf "Balíček Google's Compact Language Detector 3"
[link_pap_data]: https://www.statnipokladna.cz/assets/cs/media/IISSP-CSUIS_Ciselniky_2021-05-31_PAP-IC-2021-05-31-v01.zip "Seznam IČ ze statnipokladna.cz"
[link_pap_pruvodni]: https://www.statnipokladna.cz/cs/csuis/sprava-ciselniku "Správa číselníků - pro potřeby kontrol partnerů v rámci sběru Pomocného analytického přehledu (PAP)"
[link_dqf]: https://en.wikipedia.org/wiki/Data_quality_firewall "Data quality firewall – heslo Wikipedia"
[link_rstudio]: https://www.rstudio.com/ "RStudio"
[link_readr]: https://cran.r-project.org/web/packages/readr/index.html "readr"