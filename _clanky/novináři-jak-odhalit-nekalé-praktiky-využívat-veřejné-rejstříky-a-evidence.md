---
layout: post
detail: true
title: "Novináři! Jak odhalit nekalé praktiky? Využívat veřejné rejstříky a evidence"
ref: novináři-jak-odhalit-nekalé-praktiky-využívat-veřejné-rejstříky-a-evidence
lang: cs
image: /přílohy/články/novináři-jak-odhalit-nekalé-praktiky-využívat-veřejné-rejstříky-a-evidence/článek-novináři-ilustrační-obrázek.webp
author: david_havlík
date: 2023-04-14 07:00:00 +01:00
---

V dnešní době, kdy jsou informace velmi cenným zbožím, je schopnost využívat veřejně přístupná a otevřená data stále důležitější.
Nedávný [unikátní výzkum mezi poskytovateli, zpracovateli a uživateli otevřených dat] ukázal, že veřejně přístupná data mohou být velmi prospěšná i pro novináře.
V následujícím článku se dozvíte, jak mohou novináři využít informace z veřejných zdrojů k nalezení nových a exkluzivních témat. 
Jak mohou být úspěšní u čtenářů, posluchačů či diváků nejen díky zpravodajskému instinktu či investigativním schopnostem, ale i díky moderním technologiím a digitálním dovednostem. 
Jak veřejné zdroje mohou novinářům pomoci odhalovat korupční praktiky, zneužívání moci a další veřejně prospěšná témata klíčová pro udržení demokratických procesů v naší zemi a společnosti.

<!--more-->

Každodenní novinářská práce vyžaduje neustálé hledání nových a zajímavých témat, která budou dostatečně přitažlivá pro čtenáře, posluchače či diváka.
V dnešní době je však stále těžší najít skutečně původní příběh, který ještě nebyl médii zpracován.
S rozvojem moderních technologií a digitalizace ale dostali novináři k dispozici nový robustní nástroj, který může být pro objevování nových témat velmi důležitý a užitečný - jsou to veřejné rejstříky a evidence. 

Je důležité si hned v úvodu uvědomit, že veřejné rejstříky a evidence se od otevřených dat liší.
Otevřená data se často týkají širšího spektra témat, jako jsou například národohospodářské, ekologické nebo zdravotní údaje.
Na rozdíl od veřejně přístupných rejstříků a evidencí bývají jen zřídkakdy spojena s konkrétními subjekty, ale spíše poskytují široký přehled o dané oblasti. 
Otevřená data zpravidla poskytuje stát jeho organizace či úřady místních samospráv, zatímco veřejně přístupné rejstříky a evidence mohou spravovat též subjekty soukromého práva. 

## Klíčové je propojování informací

Pro včasné odhalení bezpečnostních rizik včetně korupce je propojování informací klíčové. 

Pro názornou ukázku použijeme informace z veřejných rejstříků a evidencí, které spravuje stát. 
[Rejstřík trestů právnických osob] obsahuje seznam organizací pravomocně odsouzených za úmyslné trestné činy. 
Je dostupný v uživatelsky přívětivém formátu CSV, stejně jako [Registr nespolehlivých plátců DPH], [Registr osob, které závažným způsobem porušili svoje daňové povinnosti] či [Insolvenční rejstřík], který je stažitelný pro změnu v Excelu.
Vše jsou veřejné informační zdroje, které obsahují zpravodajsky cenné informace o osobách, které se v Česku ocitly na některé z pomyslných “černých listin”. 
Mezi další patří [Rejstřík osob se zákazem plnění veřejných zakázek], [Sbírky rozhodnutí ÚOHS], [Evidence úpadců], [Pravomocná rozhodnutí České národní banky] či [Centrální evidence exekucí].

## Podezřelí partneři veřejného sektoru

Unikátní identifikační čísla pravomocně odsouzených organizací jsme po stažení do tabulkového procesoru spárovali pomocí vyhledávací funkce [XLOOKUP] s identifikačními čísly partnerů veřejného sektoru v [Registru smluv] a identifikačními čísly sponzorů politiků a politických stran v jejich [výročních zprávách], které jsou rovněž dostupné v CSV formátu.
Tento druh párování umožňuje novinářům rychle odhalit podezřelé vztahy mezi politickými stranami a podnikatelskými subjekty, což může být pro identifikaci korupčních rizik a praktik velmi cenné.


|P.č.   |Organizace                        |IČ      |Rozsudek                  |Poslední smlouva|Počet smluv|Hodnota smluv        |Sponzoring|
|:-----:|:--------------------------------:|:------:|:------------------------:|:--------------:|:---------:|:-------------------:|:--------:|
|1      |[Metrostav a.s.]                  |00014915|[21.6.2022][21.6.2022-1]  |[16.2.2023]     |[2 501]    |[311 690 112 433 Kč] |[X]       |
|2      |[Metrostav Infrastructure a.s.]   |24204005|[21.6.2022][21.6.2022-2]  |[27.2.2023]     |[326]      |[20 355 682 514 Kč]  |[X]       |
|3      |[Energie - stavební a báňská a.s.]|45146802|[24.3.2022]               |[10.2.2023]     |[451]      |[19 304 214 141 Kč]  |[X]       |
|4      |[HOSPIMED, spol. s r.o.]          |00676853|[21.6.2022][21.6.2022 - 3]|[27.2.2023]     |[2 059]    |[2 060 256 497 Kč]   |[X]       |
|5      |[Žatecká teplárenská, a.s.]       |64650871|[9.4.2021]                |[1.3.2023]      |[1205]     |[1 418 714 371 Kč]   |          |
|6      |[AGPI, a.s.]                      |00112836|[14.8.2021]               |[1.2.2022]      |[24]       |[452 339 076 Kč]     |          |
|7      |[H.K.U., spol. s r.o.]            |25515161|[7.11.2022]               |[23.2.2022]     |[315]      |[370 272 434 Kč]     |[X]       |
|8      |[PTV, spol. s r.o.]               |00222640|[2.10.2019]               |[5.4.2022]      |[29]       |[89 213 942 Kč]      |          |
|9      |[Wassa s.r.o.]                    |27317421|[26.4.2022]               |[5.12.2022]     |[118]      |[66 414 868 Kč]      |          |
|10     |[DenisOil s.r.o.]                 |04317106|[17.4.2020]               |[21.6.2021]     |[6]        |[65 255 300 Kč]      |          |
|50     |[KT Bau s.r.o.]                   |28333004|[9.2.2017]                |[13.5.2020]     |[1]        |[0 Kč]               |          |
|Celkem |50                                |50      |50                        |50              |7503       |356 017 777 438 Kč   |10|
{: .table .table-striped}
*Údaje platné ke dni 5.3.2023*

Mezi 941 pravomocně odsouzenými právnickými osobami jsme identifikovali celkem 151 partnerů veřejného sektoru. 
U padesáti partnerů, tedy u třetiny jsme identifikovali, že  veřejný sektor s nimi uzavíral smlouvy i po jejich odsouzení. 
Tito pravomocně odsouzení partneři uzavřeli s veřejným sektorem celkem 7 503 smluv v hodnotě 356 017 777 438 Kč.
Mezi 151 odsouzenými partnery veřejného sektoru jsme identifikovali celkem 67 sponzorů politiků, stran a hnutí. 
S deseti z nich uzavíral veřejných sektor smlouvy i poté, co byli pravomocně odsouzení.
Mezi odsouzenými partnery veřejného sektoru jsme též identifikovali jednoho insolventního zaměstnavatele a 41 osob, které závažným způsobem porušili svoje daňové povinnosti. 

Upozorňujeme, že v úterý dne 7. března 2023 oznámil tehdejší Prezident republiky Miloš Zeman, že udělit milost obchodní firmě Energie - stavební a báňská a.s. a prominul jí zbytek trestu zákazu plnění veřejných zakázek nebo účasti na veřejné soutěži, který byl firmě uložen za zločin zjednání výhody při zadání veřejné zakázky, při veřejné soutěži a veřejné dražbě. 
Prezident republiky přihlédl k tomu, že trest nepříznivě dopadá především na zaměstnance dané obchodní firmy a tomu, že významnou část trestu omilostněná společnost již vykonala.


Uvedené informace mohou být důležité pro novináře, kteří se snaží rozkrýt korupční praktiky ve veřejné sféře. 
Zároveň však platí, že práce s daty vyžaduje určitou znalost právních předpisů a etických zásad.
Novináři musí být pečliví a dbát na to, aby jejich práce byla založena na faktech a nevytvářela neopodstatněná obvinění.
Pokud jsou veřejné rejstříky využívány odpovědně mohou poskytnout novinářům cenné nástroje pro odhalování pravdy a boj proti korupci. 

## Kde hledat zpravodajsky cenné informace?

Zpravodajsky hodnotné informace o konkrétních lidech, podnikatelích, politicích a jinak exponovaných osobách obsahuje i [Katastr nemovitostí], [Obchodní rejstřík], [Administrativní registr ekonomických subjektů], [Portál živnostenského podnikání], [Seznam držitelů datových schránek], [Evidence skutečných majitelů], [Hledaní a pohřešovaní], [Volební seznamy], [Majetková přiznání politiků a úředníků], profesní seznamy jako [Seznam advokátů], [Seznam exekutorů], [Seznam insolvenčních správců], [Seznam mediátorů], [Seznam notářů], [Seznam rozhodců], [Seznam znalců, tlumočníků a překladatelů], [Seznam akreditovaných osob], [Seznam soudců], [Seznam státních zástupců], evidence z činnosti bývalého komunistického režimu jako, [Seznam soudců a státních zástupců s komunistickou minulostí], či  [Vyhledávání v archivních a registračních protokolech StB].  

Forma a podmínky užití se mohou lišit v závislosti na konkrétním rejstříku nebo evidenci.
Obvykle jsou informace poskytovány zdarma v elektronické podobě umožňující dálkový přístup a vyhledávání přes internet.
V ojedinělých případech může správce registru účtovat manipulační poplatek ([Centrální evidence exekucí], [Nahlížení do katastru nemovitostí]) anebo poskytnutí informace podmínit sepsáním žádostí podle příslušného zákona ([Centrální registr oznámení]).
Upozorňujeme, že dokumenty získané přes internet mají většinou pouze informativní charakter.

Avšak využití veřejných zdrojů k vyhledávání nových témat není pouze pro novináře, ale může být prospěšné i běžným občanům v jejich každodenním životě či podnikání.
Chtějí-li vědět víc o věcech, jevech a událostech v jejich nejbližším i vzdáleném okolí mohou využít [Informační systém EIA] o posuzování vlivu nových staveb na životní prostředí. 
[Evidence vozidel] přijde vhod motoristům nejen při dopravní nehodě ale i [Pátrání po vozidlech a registračních značkách] v případě krádeže. 
A nemusí jít nutně pouze o automobil ale třeba též o [Odcizené mobilní telefony]. 
V době současné energetické krize se může hodit také [Přehled údajů o licencích udělených ERÚ] neboli Energetickým regulačním úřadem.   

## Veřejné rejstříky a evidence

Následuje výčet veřejných rejstříků a evidencí, které jsme při přípravě tohoto článku identifikovali na internetu a použili včetně takzvaných agregátorů informací jako je například veřejně prospěšný projekt [Hlídač státu], jehož cílem je veřejná kontrola státních a veřejných institucí prostřednictvím Registru smluv, burzovní portál [Kurzy.cz], informační portál České kanceláře pojistitelů [Vyhledávání vozidla dle SPZ].
Agregátor informací je podle internetové encyklopedie Wikipedia označení pro internetové stránky nebo speciální počítačové programy, které na jednom místě shromažďují jeden typ informace z různých internetových zdrojů. 

1. [Administrativní registr ekonomických subjektů]
2. [Centrální evidence exekucí]
3. [Centrální registr oznámení]
4. [Evidence skutečných majitelů]
5. [Evidence svěřenských fondů]
6. [Evidence úpadců]
7. [Hlídač státu]
8. [Informační systém EIA]
9. [Insolvenční rejstřík]
10. [Kurzy.cz]
11. [Nahlížení do katastru nemovitostí]
12. [Nespolehlivé osoby]
13. [Nespolehliví plátci DPH]
14. [Odcizené mobilní telefony]
15. [Otevřená data pro volební výsledky]
16. [Pátrání po osobách]
17. [Pátrání po uměleckých předmětech]
18. [Pátrání po vozidlech a registračních značkách]
19. [Portál živnostenského podnikání]
20. [Pravomocná rozhodnutí České národní banky]
21. [Přehled údajů o licencích udělených ERÚ]
22. [Registr smluv]
23. [Rejstřík osob se zákazem plnění veřejných zakázek]
24. [Rejstřík trestů právnických osob]
25. [Rizikové weby]
26. [Sbírky rozhodnutí ÚOHS]
27. [Seznam advokátů]
28. [Seznam akreditovaných osob]
29. [Seznam držitelů datových schránek]
30. [Seznam exekutorů]
31. [Seznam insolvenčních správců]
32. [Seznam mediátorů]
33. [Seznam notářů]
34. [Seznam rozhodců]
35. [Seznam soudců]
36. [Seznam soudců a státních zástupců s komunistickou minulostí]
37. [Seznam státních zástupců]
38. [Seznam znalců, tlumočníků a překladatelů]
39. [Veřejný rejstřík a Sbírka listin]
40. [Vyhledávání v archivních a registračních protokolech StB]
41. [Vyhledávání vozidla dle SPZ]
42. [Výroční zprávy a zprávy o financování volebních kampaní]

Vzhledem k velkému množství dat bývá ruční shromáždění, zpracování a analýza informací z veřejných rejstříků a evidencí na internetu často obtížné a časově velmi náročné.
Řešením může být umělá inteligence (AI) která pomůže automatizovat sběr a analýzu dat z webů a sociálních sítí.
Data lze pak zpracovat mnohem rychleji a efektivněji, ale o tom až někdy příště.








[unikátní výzkum mezi poskytovateli, zpracovateli a uživateli otevřených dat]: https://data.gov.cz/články/veřejnost-a-otevřená-data-v-čr-výsledky-unikátního-průzkumu "Veřejnost a otevřená data v ČR: Výsledky unikátního průzkumu"
[Rejstřík trestů právnických osob]: https://eservice-po.rejtr.justice.cz/public/odsouzeni;jsessionid=9AAAC6408F390E6D25EAF8651C3AE9BA.pocluster2?0 "Rejstřík trestu právnických osob"
[Registr nespolehlivých plátců DPH]: https://adisspr.mfcr.cz/dpr/DphReg "Nespolehlivý plátci DPH"
[Registr osob, které závažným způsobem porušili svoje daňové povinnosti]: https://adisspr.mfcr.cz/dpr/DphReg "Nespolehlivé osoby"
[Insolvenční rejstřík]: https://isir.justice.cz/isir/common/index.do "Insolvenční rejstřík"
[Rejstřík osob se zákazem plnění veřejných zakázek]: https://www.uohs.cz/cs/hospodarska-soutez/zakazane-dohody/rejstrik-osob-se-zakazem-plneni-verejnych-zakazek.html "Rejstřík osob se zákazem plnění veřejných zakázek"
[Sbírky rozhodnutí ÚOHS]: https://www.uohs.cz/cs/hospodarska-soutez/sbirky-rozhodnuti.html "Sbírky rozhodnutí ÚOHS"
[Evidence úpadců]: https://upadci.justice.cz/p_i8.php "Evidence úpadců"
[Pravomocná rozhodnutí České národní banky]: https://www.cnb.cz/cs/dohled-financni-trh/vykon-dohledu/pravomocna-rozhodnuti/ "Pravomocná rozhodnutí České národní banky"
[Centrální evidence exekucí]: https://www.ceecr.cz/ "Centrální evidence exekucí"
[XLOOKUP]: https://office.lasakovi.com/excel/funkce-nove/XLOOKUP-vyhledavaci-funkce-Excel/ "XLOOKUP"
[Registru smluv]: https://smlouvy.gov.cz/vyhledavani "Registr smluv"
[výročních zprávách]: https://zpravy.udhpsh.cz/zpravy/vfz2022 "Výroční finanční zpráva politické strany/hnutí"
[Metrostav a.s.]: https://www.hlidacstatu.cz/Subjekt/00014915 "Metrostav a.s. - Hlídač Státu"
[21.6.2022-1]: https://www.hlidacstatu.cz/data/Hledat/rejstrik-trestu-pravnickych-osob?q=00014915 "Rejstřík trestů právnických osob - Hlídač Státu"
[16.2.2023]: https://www.hlidacstatu.cz/hledatSmlouvy?Q=ico%3a00014915&order=5 "Smlouvy - Hlídač Státu"
[2 501]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=00014915 "Hledání - Hlídač Státu"
[311 690 112 433 Kč]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=00014915 "Hledání - Hlídač Státu"
[X]: https://www.hlidacstatu.cz/sponzori "Sponzoři politických stran a hnutí - Hlídač Státu"
[Metrostav Infrastructure a.s.]: https://www.hlidacstatu.cz/Subjekt/24204005 "Metrostav Infrastructure a.s. - Hlídač Státu"
[21.6.2022-2]: https://www.hlidacstatu.cz/data/Hledat/rejstrik-trestu-pravnickych-osob?q=24204005 "Rejstřík trestů právnických osob - Hlídač Státu"
[27.2.2023]: https://www.hlidacstatu.cz/hledatSmlouvy?Q=ico%3a24204005&order=5 "Smlouvy - Hlídač Státu"
[326]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=24204005 "Hledání - Hlídač Státu"
[20 355 682 514 Kč]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=24204005 "Hledání - Hlídač Státu"
[Energie - stavební a báňská a.s.]: https://www.hlidacstatu.cz/Subjekt/45146802 "Energie - stavební a báňská a.s. - Hlídač Státu"
[24.3.2022]: https://www.hlidacstatu.cz/data/Hledat/rejstrik-trestu-pravnickych-osob?q=45146802 "Rejstřík trestů právnických osob - Hlídač Státu"
[10.2.2023]: https://www.hlidacstatu.cz/hledatSmlouvy?Q=ico%3a45146802&order=5 "Smlouvy - Hlídač Státu"
[451]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=45146802 "Hledání - Hlídač Státu"
[19 304 214 141 Kč]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=45146802 "Hledání - Hlídač Státu"
[HOSPIMED, spol. s r.o.]: https://www.hlidacstatu.cz/Subjekt/00676853 "HOSPIMED, spol. s r.o.- Hlídač Státu"
[21.6.2022 - 3]: https://www.hlidacstatu.cz/data/Hledat/rejstrik-trestu-pravnickych-osob?q=00676853 "Rejstřík trestů právnických osob - Hlídač Státu"
[27.2.2023]: https://www.hlidacstatu.cz/hledatSmlouvy?Q=ico%3a00676853&order=5 "Smlouvy - Hlídač Státu"
[2 059]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=00676853 "Hledání - Hlídač Státu"
[2 060 256 497 Kč]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=00676853 "Hledání - Hlídač Státu"
[Žatecká teplárenská, a.s.]: https://www.hlidacstatu.cz/Subjekt/64650871 "Žatecká teplárenská, a.s. - Hlídač Státu"
[9.4.2021]: https://www.hlidacstatu.cz/data/Hledat/rejstrik-trestu-pravnickych-osob?q=64650871 "Rejstřík trestů právnických osob - Hlídač Státu"
[1.3.2023]: https://www.hlidacstatu.cz/hledatSmlouvy?Q=ico%3a64650871&order=5 "Smlouvy - Hlídač Státu"
[1205]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=64650871 "Hledání - Hlídač Státu"
[1 418 714 371 Kč]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=64650871 "Hledání - Hlídač Státu"
[AGPI, a.s.]: https://www.hlidacstatu.cz/Subjekt/00112836 "AGPI, a.s. - Hlídač Státu"  
[14.8.2021]: https://www.hlidacstatu.cz/data/Hledat/rejstrik-trestu-pravnickych-osob?q=00112836 "Rejstřík trestů právnických osob - Hlídač Státu"
[1.2.2022]: https://www.hlidacstatu.cz/hledatSmlouvy?Q=ico%3a00112836&order=5 "Smlouvy - Hlídač Státu"
[24]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=00112836 "Hledání - Hlídač Státu"
[452 339 076 Kč]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=00112836 "Hledání - Hlídač Státu"
[H.K.U., spol. s r.o.]: https://www.hlidacstatu.cz/Subjekt/25515161 "H.K.U., spol. s r.o. - Hlídač státu"         
[7.11.2022]: https://www.hlidacstatu.cz/data/Hledat/rejstrik-trestu-pravnickych-osob?q=25515161 "Rejstřík trestů právnických osob - Hlídač Státu"
[23.2.2022]: https://www.hlidacstatu.cz/hledatSmlouvy?Q=ico%3a25515161&order=5 "Smlouvy - Hlídač Státu"
[315]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=25515161 "Hledání - Hlídač Státu"
[370 272 434 Kč]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=25515161 "Hledání - Hlídač Státu"
[PTV, spol. s r.o.]: https://www.hlidacstatu.cz/Subjekt/00222640 "PTV, spol. s r.o. - Hlídač státu"            
[2.10.2019]: https://www.hlidacstatu.cz/data/Hledat/rejstrik-trestu-pravnickych-osob?q=00222640 "Rejstřík trestů právnických osob - Hlídač Státu"
[5.4.2022]: https://www.hlidacstatu.cz/hledatSmlouvy?Q=ico%3a00222640&order=5 "Smlouvy - Hlídač Státu"
[29]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=00222640 "Hledání - Hlídač Státu"       
[89 213 942 Kč]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=00222640 "Hledání - Hlídač Státu"  
[Wassa s.r.o.]: https://www.hlidacstatu.cz/Subjekt/27317421 "Wassa s.r.o. - Hlídač státu"                 
[26.4.2022]: https://www.hlidacstatu.cz/data/Hledat/rejstrik-trestu-pravnickych-osob?q=27317421 "Rejstřík trestů právnických osob - Hlídač Státu"
[5.12.2022]: https://www.hlidacstatu.cz/hledatSmlouvy?Q=ico%3a27317421&order=5 "Smlouvy - Hlídač Státu"
[118]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=27317421 "Hledání - Hlídač Státu" 
[66 414 868 Kč]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=27317421 "Hledání - Hlídač Státu"     
[DenisOil s.r.o.]: https://www.hlidacstatu.cz/Subjekt/04317106 "DenisOil s.r.o. - Hlídač Státu"                 
[17.4.2020]: https://www.hlidacstatu.cz/data/Hledat/rejstrik-trestu-pravnickych-osob?q=04317106 "Rejstřík trestů právnických osob - Hlídač Státu"
[21.6.2021]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=04317106 "Smlouvy - Hlídač Státu"
[6]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=04317106 "Hledání - Hlídač Státu"        
[65 255 300 Kč]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=04317106 "Hledání - Hlídač Státu"  
[KT Bau s.r.o.]: https://www.hlidacstatu.cz/Subjekt/28333004 "KT Bau s.r.o. - Hlídač Státu"             
[9.2.2017]: https://www.hlidacstatu.cz/data/Hledat/rejstrik-trestu-pravnickych-osob?q=28333004 "Rejstřík trestů právnických osob - Hlídač Státu"
[13.5.2020]: https://www.hlidacstatu.cz/hledatSmlouvy?Q=ico%3a28333004&order=5 "Smlouvy - Hlídač Státu"
[1]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=28333004 "Hledání - Hlídač Státu"      
[0 Kč]: https://www.hlidacstatu.cz/Home/HledatFirmy?q=28333004 "Hledání - Hlídač Státu" 
[Katastr nemovitostí]: https://nahlizenidokn.cuzk.cz/ "Nahlížení do katastru nemovitostí"
[Obchodní rejstřík]: https://or.justice.cz/ias/ui/rejstrik "Veřejný rejstřík a Sbírka listin" 
[Administrativní registr ekonomických subjektů]: https://wwwinfo.mfcr.cz/ares/ares_es.html.cz "ARES"
[Portál živnostenského podnikání]: https://www.rzp.cz/cgi-bin/aps_cacheWEB.sh?VSS_SERV=ZVWSBJFND "Živnostenský rejstřík"
[Seznam držitelů datových schránek]: https://www.mojedatovaschranka.cz/sds/search "Seznam držitelů datových schránek"
[Evidence skutečných majitelů]: https://esm.justice.cz/ias/issm/rejstrik "Evidence skutečných majitelů"
[Hledaní a pohřešovaní]: https://aplikace.policie.cz/patrani-osoby/DiteVOhrozeni.aspx "Pátrání po osobách"
[Volební seznamy]: https://www.volby.cz/opendata/opendata.htm "Otevřená data pro volební výsledky"
[Majetková přiznání politiků a úředníků]: https://cro.justice.cz/ "Centrální registr oznámení"
[Seznam advokátů]: https://vyhledavac.cak.cz/ "Seznam advokátů"
[Seznam exekutorů]: https://ekcr.cz/seznam-exekutoru "Seznam exekutorů"
[Seznam insolvenčních správců]: https://isir.justice.cz/InsSpravci/public/seznamFiltr.do "Seznam insolvenčních správců"
[Seznam mediátorů]: https://mediatori.justice.cz/MediatorPublic/Public/FR003_ZverejneniVybranychUdaju.aspx "Seznam mediátorů"
[Seznam notářů]: https://www.nkcr.cz/seznam-notaru "Seznam notářů"
[Seznam rozhodců]: https://rozhodci.justice.cz/ "Seznam rozhodců"
[Seznam znalců, tlumočníků a překladatelů]: https://seznat.justice.cz/ "Seznam znalců, tlumočníků a překladatelů"
[Seznam akreditovaných osob]: https://sako.justice.cz/ "Seznam akreditovaných osob"
[Seznam soudců]: https://rejc.justice.cz/soudci;jsessionid=7FPap_UxSdrjt59vWIXqgtI6UdxJCGrbvLBuDfOp.rejcextapl01?0 "Seznam soudců" 
[Seznam státních zástupců]: https://rejc.justice.cz/statniZastupci?1 "Seznam státních zástupců"
[Seznam soudců a státních zástupců s komunistickou minulostí]: https://justice.cz/web/msp/clenstvi-v-ksc1 "Seznam soudců a státních zástupců s komunistickou minulostí"
[Vyhledávání v archivních a registračních protokolech StB]: https://www.abscr.cz/jmenne-evidence/ "Vyhledávání v archivních a registračních protokolech StB"  
[Nahlížení do katastru nemovitostí]: https://nahlizenidokn.cuzk.cz/ "Nahlížení do katastru nemovitostí"
[Centrální registr oznámení]: https://cro.justice.cz/ "Centrální registr oznámení"
[Informační systém EIA]: https://portal.cenia.cz/eiasea/view/eia100_cr "Informační systém EIA"
[Evidence vozidel]: https://ic.ckp.cz/ICwww/servlet?_page=searchSPZ "Vyhledávání vozidla dle SPZ" 
[Pátrání po vozidlech a registračních značkách]: https://aplikace.policie.cz/patrani-vozidla/ "Pátrání po vozidlech a registračních značkách"
[Odcizené mobilní telefony]: https://aplikace.policie.cz/patrani-mobily/ "Odcizené mobilní telefony"
[Přehled údajů o licencích udělených ERÚ]: https://www.eru.cz/vyhledavac-licenci "Přehled údajů o licencích udělených ERÚ"
[Hlídač státu]: https://www.hlidacstatu.cz/ "Hlídač Státu"
[Kurzy.cz]: https://www.kurzy.cz/ "Kurzy.cz"
[Vyhledávání vozidla dle SPZ]: https://ic.ckp.cz/ICwww/servlet?_page=searchSPZ "Vyhledávání vozidla dle SPZ"
[Evidence svěřenských fondů]: https://esf.justice.cz/ias/isesf/rejstrik "Evidence svěřenských fondů"
[Nespolehlivé osoby]: https://adisspr.mfcr.cz/dpr/DphReg "Nespolehlivé osoby"
[Nespolehliví plátci DPH]: https://adisspr.mfcr.cz/dpr/DphReg "Nespolehliví plátci DPH"
[Otevřená data pro volební výsledky]: https://www.volby.cz/opendata/opendata.htm "Otevřená data pro volební výsledky"
[Pátrání po osobách]: https://aplikace.policie.cz/patrani-osoby/DiteVOhrozeni.aspx "Pátrání po osobách"
[Pátrání po uměleckých předmětech]: https://pseud.policie.cz/PSEUD_Internet/Vyhledani.aspx "Pátrání po uměleckých předmětech"
[Registr smluv]: https://smlouvy.gov.cz/vyhledavani "Registr smluv"
[Rizikové weby]: https://www.coi.cz/userdata/files/dokumenty-ke-stazeni/open-data/rizikove.csv "Rizikové weby"
[Veřejný rejstřík a Sbírka listin]: https://or.justice.cz/ias/ui/rejstrik "Veřejný rejstřík a Sbírka listin" 
[Výroční zprávy a zprávy o financování volebních kampaní]: https://zpravy.udhpsh.cz/zpravy/vfz2022 "Výroční zprávy a zprávy o financování volebních kampaní"



