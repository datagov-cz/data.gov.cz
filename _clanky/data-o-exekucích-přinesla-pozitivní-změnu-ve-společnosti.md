---
layout: post
detail: true
title: "Data o exekucích přinesla pozitivní změnu ve společnosti"
ref: data-o-exekucích-přinesla-pozitivní-změnu-ve-společnosti
lang: cs
image: ../přílohy/články/data-o-exekucích-přinesla-pozitivní-změnu-ve-společnosti/images/main.webp
author: michal_škop
date: 2023-04-19 07:00:00 +02:00
---
Když poslanci ODS, KDU-ČSL, US a ČSSD 26. 1. 2001 [odhlasovali změnu exekučního řádu][link_psp_24502] zavádějícího soukromé exekutory dle [poslaneckého návrhu skupiny poslanců pod vedením tehdy už ministra Pavla Němce][link_psp_725], většina z nich asi netušila, že tento zákon bude devastující pro stovky tisíc lidí v ČR. A že jeho neblahé důsledky se budou muset řešit i v roce 2023. A byla to právě data, která stála na začátku pozitivních změn v posledních letech.
<!--more-->

{% include image.html url="../přílohy/články/data-o-exekucích-přinesla-pozitivní-změnu-ve-společnosti/images/main.webp" description="Socha před Nejvyšším správním soudem. Foto Alkhimov Maxim" %}

Pod zástěrkou univerzální mantry “dluhy se mají platit” vznikl v nultých letech business v řádu desítek až stovek miliard korun ročně, který ale měl devastující dopad na [finanční situaci a psychické zdraví mnoha jednotlivců i rodin][link_aktualne]. A přeneseně i na celou společnost. Přesto, že neziskový sektor i média od počátku ukazovala na problémy, jejich hlas nebyl v té době dostatečně silný na změnu. Až zveřejnění detailní [Mapy exekucí][link_mapa_exekuci] v dubnu 2017 dodalo konečný dostatečný impuls k pozitivním změnám. V mapě bylo najednou vidět, kolik exekucí je v každé obci a že třeba i v bohaté Praze má exekuci každý dvanáctý obyvatel a průměrná exekuce tam dosahuje skoro 1 milionu korun. V Ústí nad Labem, Mostě nebo Chomutově byl v exekuci ale už každý pátý obyvatel.

Díky tomu se v posledních letech legislativa regulující proces exekucí podstatně změnila a nové exekuce jsou již řešeny výrazně lépe. Je i snaha řešit ty staré (“milostivé léto”, ukončování bagatelních exekucí). A nakonec došlo i k tomu, že Exekutorská komora, která dlouho měla takřka monopol na interpretaci dat o exekucích a roky [zveřejňovala data jen v souborech pdf][link_exekomora_pdf] nesplňující definici otevřených dat, je díky [novele exekučního řádu][link_novela] povinna data o exekucích od letošního roku zveřejňovat jako [otevřená data][link_nkod].

Tato nová otevřená data zde prozkoumáme.

## Přehled exekutorů
Prvním datovým souborem je přehled exekutorů a kolik řeší exekucí. Zde snadno zjistíme, že v ČR je aktuálně 157 exekutorských úřadů a více jak 4 miliony exekucí. A exekuční business je značně koncentrován, neboť polovinu všech exekucí provádí jen 16 největších úřadů.

{% include image.html url="../přílohy/články/data-o-exekucích-přinesla-pozitivní-změnu-ve-společnosti/images/exekutori.webp" description="Přehled exekutorů v ČR, duben 2023." %}

## Přehled lidí v exekucích
Ve věkových skupinách mezi 30 a 60 lety věku je aktuálně v exekuci vždy více jak 10 % obyvatel. To lze zjistit z druhého datového souboru.

{% include image.html url="../přílohy/články/data-o-exekucích-přinesla-pozitivní-změnu-ve-společnosti/images/lide.webp" description="Věková pyramida obyvatel ČR a podíl lidí v exekuci, duben 2023." %}

## Mapa exekucí
Třetí datová sada obsahuje údaje o exekucích za jednotlivé obce. Takováto mapa v roce 2017, tehdy ještě z těžko získaných uzavřených dat, pomohla dotlačit zákonodárce k úpravám exekučních zákonů.

{% include image.html url="../přílohy/články/data-o-exekucích-přinesla-pozitivní-změnu-ve-společnosti/images/mapa.webp" description="Mapa exekucí z dubna 2023. Podíl obyvatel v exekuci v jednotlivých obcích. Čím červenější, tím vyšší podíl." %}

# Použitá data
K našich jednoduchým analýzám postupně využijeme všechny [otevřené datové sady][link_nkod], které Exekutorská komora České republiky od letošního roku poskytuje. Tedy
- Počet exekucí vedených jednotlivými exekutorskými úřady
- Fyzické osoby v exekuci - členění podle obcí, vymáhané částky a věkového intervalu
- Fyzické osoby v exekuci v obcích, počet exekucí

Data o [věkové struktuře celé populace ČR][link_csu_struktura] a o [počtech obyvatel obcí][link_csu_obce] získáme z dat Českého statistického úřadu.

# Postup zpracování
## První graf - Přehled exekutorů
Zde je postup velmi jednoduchý. Po stažení dat si jen stačí data seřadit a sloučit těch 139 exekutorů, kteří dohromady mají na starost ½ exekucí. Nakonec jen vykreslit koláčový graf např. v některém z tabulkových procesorů (zde byl použit Libre Office Calc).

Už zde narazíme na to, že v otevřených data z Exekutorské komory jsou chyby. Zde jen malé v tom, že někteří exekutoři jsou v datech 2x, ale to jde snadno vyřešit.

## Druhý graf - Přehled lidí v exekucích
Zde si opět vystačíme s tabulkovým procesorem. Data o počtu lidí v exekuci v každé věkové skupině získáme pomocí kontingenční tabulky.

Opět narazíme na očividné chyby v datech, kdy u skoro 10 000 lidí v exekuci je uvedeno, že jsou ve věku mezi 0 a 5 lety. Ač před několika lety exekuce u takto malých dětí byla smutná realita, dnes již jich je minimum (po změně zákonů i soudního rozhodování). Nejspíše se jedná o lidi, u kterých v datech není věk a Exekuční komora jim přiřadila věk 0. Ty tedy z analýzy vyřadíme a budeme to mít na paměti při používání výsledků.

ČSÚ poskytuje data o populaci ČR za stejné věkové skupiny, takže tato dvoje data lze jednoduše dát vedle sebe a po malých úpravách rovnou vykreslit graf opět v tabulkovém procesoru.

## Třetí graf - Mapa exekucí
Tady jde o nejsložitější postup, ale stále vcelku jednoduchý. Data z Exekutorské komory o počtech exekucí v obcích i geografická data z ČÚZK používají shodné kódy pro označení obcí, takže spojení těchto dat je otázkou jednoho joinu např. v knihovně [Pandas][link_pandas].

Na samotné vytvoření mapy potom použijeme postup z [předchozího článku][link_choropeth]. Barvy použijeme s ohledem na [barvoslepost][link_barvoslepost].

Nejpozději z mapy odhalíme další chyby v datech Exekutorské komory. U obcí se stejným jménem jsou často zjevně některé exekuce přiřazeny ke špatné obci. Např. někteří lidé s exekucí žijící v jihočeském Písku jsou reportováni v Písku u Frýdku-Místku. Ze 101 lidí žijících v Chlumci v okrese Český Krumlov jich opravdu 99 nemá exekuci, jak je v datech uvedeno. To jenom nejspíše některé případy z Chlumce v okrese Ústí nad Labem jsou mylně zapsány tam.

# Výsledek
Výše zmíněné ukázkové vizualizace nových otevřených dat o exekucích od Exekutorské komory ČR ukazují, že se jedná o složitou problematiku, která ovlivňuje mnoho lidí a jejich finanční situaci.

Výsledky této vizualizace ukazují, že se v ČR každoročně řeší tisíce exekucí, které mohou mít dramatický dopad na životy obyčejných lidí. Pro mnoho lidí se stává exekuce finanční pastí, ze které se těžko dostávají, a mohou vést k trvalým finančním potížím a dokonce ke ztrátě majetku.

Vzhledem k tomu, že exekuce jsou tak složitou a často emotivní problematikou, je důležité je analyzovat a diskutovat na základě skutečných faktů, dat. Vizualizace dat a jejich analýza je jedním z nástrojů, které umožňují lépe pochopit složitost a dopad exekucí v ČR.

Zároveň jsme už zde narazili na některé limity nově otevřených dat Exekutorské komory. Jedním z nich jsou chyby v datech ukazující nejspíše na nedostatečnou kontrolu jejich kvality, což se snad časem zlepší. Dalším limitem je nemožnost porovnání jistiny a příslušenství, což by ale nejspíše znamenalo změnou zákona přikázat Exekutorské komoře takové rozlišení poskytnout také a nejspíše se tedy toho v brzké době nedočkáme.

# Další užití
Exekutorská komora publikuje otevřená data ze zákona na pravidelné bázi, což poskytuje možnost sledovat vývoj v čase. Tyto data lze využít pro různé účely, například pro analýzu statistických trendů nebo pro srovnání výkonů exekutorů v různých regionech.

Díky tomu, že jsou tato data veřejně přístupná, mohou je využívat jak jednotlivci, tak i organizace a firmy. Pro výzkumné účely mohou být data z Exekutorské komory velmi cenným zdrojem informací, které mohou pomoci odhalit nové trendy nebo přinést nové poznatky o fungování exekutorského systému.

Analýzy na základě těchto dat by měly sloužit i jako podklady pro další legislativní regulaci exekucí v ČR.

# Použité nástroje a zdroje
- [Kartogram ČR - choropleth][link_choropeth]
- [Národní katalog otevřených dat][link_nkod]
- [ČSÚ][link_csu_obce]
- [RÚIAN][link_ruian]
- [Pandas][link_pandas] - knihovna pro práci s daty v Pythonu, open-source a zdarma
- [LibreOffice][link_libreoffice] - open-source kancelářský balík, zdarma
- [Socha před Nejvyšším správním soudem][link_sochapredns] - fotografie Autor Alkhimov Maxim


[link_sochapredns]: https://commons.wikimedia.org/wiki/File:%D0%9F%D0%BE%D0%BB%D0%BD%D1%8B%D0%B9_%D0%BA%D1%83%D0%B1%D0%B8%D0%B7%D0%BC_-_panoramio.jpg "Socha před Nejvyšším správním soudem. Autor Maxim Alkhimov"
[link_libreoffice]: https://www.libreoffice.org/ "LibreOffice"
[link_ruian]: https://vdp.cuzk.cz/vymenny-format/ruian/ "RÚIAN"
[link_barvoslepost]: https://visualisingdata.com/2019/08/five-ways-to-design-for-red-green-colour-blindness/ "Five ways to design for red-green colour blindness"
[link_choropeth]: https://data.gov.cz/%C4%8Dl%C3%A1nky/kartogram-choropleth "Kartogram ČR - choropleth"
[link_pandas]: https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.merge.html "Pandas - merge"
[link_csu_struktura]: https://vdb.czso.cz/vdbvo2/faces/index.jsf?page=vystup-objekt&z=T&f=TABULKA&katalog=33156&pvo=DEMD003&str=v1525&c=v3~2__RP2021MP12DP31#w= "Struktura obyvatelstva ČR"
[link_csu_obce]: https://www.czso.cz/csu/czso/statisticka-data-pro-uzemne-analyticke-podklady "Statistická data pro územní a analytické podklady"
[link_nkod]: https://data.gov.cz/datov%C3%A9-sady?poskytovatel=https%3A%2F%2Frpp-opendata.egon.gov.cz%2Fodrpp%2Fzdroj%2Forg%C3%A1n-ve%C5%99ejn%C3%A9-moci%2F70940517 "Národní katalog otevřených dat: Exekutorská komora"
[link_novela]: https://www.e-sbirka.cz/sb/2021/286/2024-01-01 "Novela exekučního řádu"
[link_exekomora_pdf]: https://statistiky.ekcr.info/o-projektu "'Otevřená data o exekucích'"
[link_mapa_exekuci]: http://mapaexekuci.cz/ "Mapa exekucí"
[link_aktualne]: https://zpravy.aktualne.cz/domaci/chude-cesko/r~e8ce002ca06411e890620cc47ab5f122/ "Chudé Česko"
[link_psp_725]: https://www.psp.cz/sqw/historie.sqw?T=725&O=3 "Poslanecký návrh skupiny poslanců pod vedením Pavla Němce"
[link_psp_24502]: https://www.psp.cz/sqw/hlasy.sqw?G=24502 "Hlasování v Poslanecké sněmovně 32. schůze, 224. hlasování, 26. ledna 2001, 16:02"