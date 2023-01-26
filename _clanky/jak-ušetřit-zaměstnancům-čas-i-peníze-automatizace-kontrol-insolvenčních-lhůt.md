---
layout: post
detail: true
title: "Jak ušetřit zaměstnancům čas i peníze:  Automatizace kontrol insolvenčních lhůt"
ref: jak-ušetřit-zaměstnancům-čas-i-peníze-automatizace-kontrol-insolvenčních-lhůt
lang: cs
image: /přílohy/články/jak-ušetřit-zaměstnancům-čas-i-peníze-automatizace-kontrol-insolvenčních-lhůt/Insolvence_titulka.webp
author: david_havlík
date: 2023-01-26 10:00:00 +02:00
---
V roce 2022 bylo v České republice vyhlášeno celkem 700 bankrotů obchodních společností, což představuje meziroční pokles o 41 bankrotů.
Zároveň se meziročně snížil i počet krachujících fyzických osob podnikatelů, a to konkrétně na 5 135 a počet osobních bankrotů klesl na 13 259. 
Vyplývá to z analýzy dat portálu [www.informaceofirmach.cz] , kterou provedla společnost CRIF – Czech Credit Bureau. 
Následující článek popisuje, jak pomocí informací publikovaných v Národním katalogu otevřených dat usnadnit zaměstnancům vyhledávání klíčových lhůt pro uplatnění nesplacených mzdových nároků u zaměstnavatelů v insolvenci.

<!--more-->

Co mají společného cukrárna, internetová kavárna, autobazar a stavební firma z Prahy s cateringovou společností z Ostravy a dopravní firmou z vesnice na Trutnovsku v Královéhradeckém kraji?
Všechny se v uplynulých měsících objevily ve veřejné databázi Ministerstva práce a sociálních věcí [Insolventní zaměstnavatelé evidovaní Úřadem práce České republiky].

## Použitá data

Tento unikátní seznam obsahuje informace o všech zaměstnavatelích v České republice, na které bylo v inkriminované době vyhlášeno moratorium před zahájením insolvenčního řízení anebo byl podán insolvenční návrh a u kterých může zaměstnanec čili věřitel uplatňovat mzdové nároky tj. žádat o uspokojení splatných mzdových nároků nevyplacených zaměstnanci zaměstnavatelem, který je v platební neschopnosti. Z údajů za uplynulý měsíc tj. prosinec 2022 vyplývá, že věřitelé-zaměstnanci mohou mzdové nároky nově uplatňovat u 393 dlužníků-zaměstnavatelů.
Úřady práce denně aktualizovaná databáze insolventních zaměstnavatelů je dostupná na [Portálu otevřených dat] Ministerstva vnitra, a to ve formátu JSON. 

Kromě názvu, identifikačního čísla, sídla či dalších známých adres insolventního zaměstnavatele obsahuje rovněž začátek a konec rozhodného období za které lze uplatňovat mzdové nároky a především lhůtu tj. klíčové datum do kdy je možné mzdové nároky uplatnit u insolvenčního soudu. 
Datová sada obsahuje pouze insolvence, pro které ještě lhůta pro uplatnění neuplynula.
Obecně se jedná o období 5 měsíců a 15 dní před aktuálním dnem do současnosti, v závislosti na lhůtě pro uplatnění mzdových nároků, která je 5 měsíců a 15 dní od zveřejnění návrhu v ISIR, čili Insolvenčním rejstříku. 

## Postup zpracování

Usnadnit zaměstnancům vyhledávání klíčových lhůt pro uplatnění jejich mzdových nároků má za cíl jednoduchá webová služba, kterou lze nad otevřenými daty úřadů práce vytvořit a nahlížet tak na data komfortněji než v původním formátu JSON.
Pomocí návodu z článku autora Roberta Spála [“Jak na automatické aktualizace “dashboardu”, i když neumím programovat”] jsme veřejnou databázi Insolventní zaměstnavatelé evidovaní Úřadem práce České republiky publikovanou Ministerstvem práce a sociálních věcí v NKOD ve formátu JSON nejprve napojili na tabulkový procesor. 
My jsme zvolili službu Google Sheets tj. Tabulky Google. 
Podobně ale fungují i tabulkové procesory jiných dodavatelů, například produkty Excel od firmy Microsoft anebo bezplatný tabulkový procesor LibreOffice od vývojáře The Document Foundation. 

Následně jsme data přidali do vizualizační aplikace. 
My jsme opět zvolili službu od Google Looker Studio (dříve Google Data Studio).
Ovšem stejně jako v případě tabulkových procesorů existuje konkurence i na trhu vizualizace dat. 
Nástroje pro business intelligence, jak se tomuto oboru budoucnosti říká nabízí i Microsoft (Power BI) či firmy Tableau (Tableau) a QlikTech International AB (Qlik Sense).
Hlavním přínosem vizualizace je, že se zobrazovaná data při každé změně zdroje dat sama aktualizují.
Bez programování tak vznikl “Dahsboard“, který uživateli poskytuje základní statistický přehled o vývoji počtu Insolventních zaměstnavatelů evidovaných úřadem práce, včetně možnosti vyhledávat insolventní zaměstnavatele podle základních identifikačních údajů jako je název, identifikační číslo, sídlo a zároveň ověřovat lhůtu, tj. klíčové datum, do kdy je možné uplatnit mzdové nároky u insolvenčního soudu. 

## Návod na vyhledání informací podle insolventního zaměstnavatele

1. Přejděte na webovou službu pro vyhledávání insolventních zaměstnavatelů a kontrolu klíčových lhůt pro uplatnění nesplacených mzdových nároků na URL adrese [https://datastudio.google.com/u/0/reporting/49a144fe-ddf0-4409-87c2-d695d8f37b5b/page/G6Y9C].

2. Vyberte možnost vyhledávání podle zaměstnavatele, identifikačního čísla nebo adresy zaměstnavatele.

{% include image.html url="../přílohy/články/jak-ušetřit-zaměstnancům-čas-i-peníze-automatizace-kontrol-insolvenčních-lhůt/Krok2.webp" description="Krok 2" %}

3. Zadejte požadované informace do vyhledávacího pole. 

{% include image.html url="../přílohy/články/jak-ušetřit-zaměstnancům-čas-i-peníze-automatizace-kontrol-insolvenčních-lhůt/Krok3.webp" description="Krok 3" %}

4. Služba vám nabídne seznam výsledků, které odpovídají vašemu vyhledávání. 

{% include image.html url="../přílohy/články/jak-ušetřit-zaměstnancům-čas-i-peníze-automatizace-kontrol-insolvenčních-lhůt/Krok4.webp" description="Krok 4" %}

5. Prohlédněte si výsledky a vyberte volbu, kterou hledáte.

{% include image.html url="../přílohy/články/jak-ušetřit-zaměstnancům-čas-i-peníze-automatizace-kontrol-insolvenčních-lhůt/Krok5.webp" description="Krok 5" %}

6. Volbu potvrďte klikem myši mimo vyhledávací pole.

{% include image.html url="../přílohy/články/jak-ušetřit-zaměstnancům-čas-i-peníze-automatizace-kontrol-insolvenčních-lhůt/Krok6.webp" description="Krok 6" %}

7. V tabulce uprostřed se zobrazí  informace o vybraném zaměstnavateli, včetně dat o insolvenci a klíčové lhůty pro uplatnění nesplacených mzdových nároků.

{% include image.html url="../přílohy/články/jak-ušetřit-zaměstnancům-čas-i-peníze-automatizace-kontrol-insolvenčních-lhůt/Krok7.webp" description="Krok 7" %}

8. Uložte si informace o zaměstnavateli a důležité lhůty pro budoucí potřebu. 

Například, v úvodu zmiňovaná dopravní firma z Trutnovska v Královéhradeckém kraji. 
Insolvenční řízení bylo s touto firmou zahájeno 15. listopadu 2022, a to na návrh věřitele.
Podle zveřejněného insolvenčního návrhu dluží dvěma bývalým zaměstnancům, a to řidiči nákladního automobilu a dispečerovi mzdu za čtyři měsíce.
Z našeho “Dashboardu” insolventních zaměstnavatelů evidovaných úřadem práce vyplývá, že v tomto případě uplyne lhůta pro uplatnění nesplacených mzdových nároků 2. května 2023. 
Obdobná lhůta je i u ostatních zaměstnavatelů, které jsme zmiňovali v úvodu a s nimiž bylo insolvenční řízení zahájeno v listopadu 2022. 

Pomocí karty *Vyberte časové rozmezí* lze vyhledávat i historické údaje, které se zobrazují tak, že je lze srovnat s předchozím obdobím.
Daleko nejzajímavější se ovšem jeví informace o insolventních zaměstnavatelích, u kterých uplyne lhůtu pro uplatnění nesplacených mzdových nároků právě dnes, v aktuálním či příštím měsíci nebo o insolventních zaměstnavatelích, u kterých klíčová lhůta již uplynula nebo u kterých mají zaměstnanci na uplatnění nesplacených mzdových nároků ještě dostatek času. 

## Návod na vyhledání informací podle insolvenčních lhůt

1. Přejděte na webovou službu pro vyhledávání insolventních zaměstnavatelů a kontrolu klíčových lhůt pro uplatnění nesplacených mzdových nároků na URL adrese [https://datastudio.google.com/u/0/reporting/49a144fe-ddf0-4409-87c2-d695d8f37b5b/page/G6Y9C].

2. Na ovládacím panelu tabulky uprostřed klikněte na ikonu volitelné metriky a zaškrtněte políčka *Lhůta uplyne dnes*, *Lhůta uplyne tento měsíc*, *Lhůta uplyne nejdříve příští měsíc*, *Lhůta již uplynula*.

{% include image.html url="../přílohy/články/jak-ušetřit-zaměstnancům-čas-i-peníze-automatizace-kontrol-insolvenčních-lhůt/Krok2a.webp" description="Krok 2" %}

3. Klikněte na příslušnou barevnou kartu *Lhůta uplyne dnes*, *Lhůta uplyne tento měsíc*, *Lhůta uplyne nejdříve příští měsíc*, *Lhůta již uplynula*.

{% include image.html url="../přílohy/články/jak-ušetřit-zaměstnancům-čas-i-peníze-automatizace-kontrol-insolvenčních-lhůt/Krok3a.webp" description="Krok 3" %}

4. V tabulce se zobrazí  informace o insolventních zaměstnavatelích podle požadovaných kritérií.

{% include image.html url="../přílohy/články/jak-ušetřit-zaměstnancům-čas-i-peníze-automatizace-kontrol-insolvenčních-lhůt/Krok4a.webp" description="Krok 4" %}

5. Uložte si informace o zaměstnavateli a důležité lhůty pro budoucí potřebu. 

Závěrem upozorňujeme, že v lednu 2023 uplyne dle zveřejněných údajů lhůta pro uplatnění mzdových nároků u celkem 412 insolventních zaměstnavatelů. 
Netýká se to i pohledávek za Vaším zaměstnavatelem? 
Zjistíte z našeho “Dashboardu”.

## Další užití
Veřejný a insolvenční rejstřík včetně informací o insolventních zaměstnavatelích dlouhodobě sledují specializované forenzní agentury či watchdogové organizace. 
Například firma [Surveilligence], která zveřejňuje pravidelné měsíční zprávy o vývoji konkurzů a restrukturalizací v České republice a na Slovensku nebo projekt [Hlídač státu], který provádí veřejnou kontrolu státních a veřejných institucí i pomocí insolvenčního rejstříku.  

## Použité nástroje a zdroje

[Tabulky Google] - bezplatný tabulkový procesor od firmy Google

[The Document Foundation Looker Studio (dříve Google Data Studio)] - bezplatný online nástroj pro vizualizaci dat 

[Insolvenční rejstřík] - informace Ministerstva spravedlnosti ČR o subjektech v insolvenci 

[Veřejný rejstřík a Sbírka listin] - informace Ministerstva spravedlnosti ČR o firmách 

[Národní katalog otevřených dat (NKOD) - sada Insolventní zaměstnavatelé evidovaní Úřadem práce ČR] - seznam zaměstnavatelů v centrální databázi, na které bylo vydáno moratorium před zahájením insolvenčního řízení nebo insolvenčního řízení a kde lze uplatnit mzdové nároky



[www.informaceofirmach.cz]: https://www.informaceofirmach.cz/ "www.informaceofirmach.cz"
[Insolventní zaměstnavatelé evidovaní Úřadem práce České republiky]: https://data.mpsv.cz/web/data/insolventni-zamestnavatele-evidovani-uradem-prace-cr "Insolventní zaměstnavatelé evidovaní Úřadem práce České republiky"
[“Jak na automatické aktualizace “dashboardu”, i když neumím programovat”]: /články/neziskovky-automatizace-dashboardu "Jak na automatické aktualizace “dashboardu”, i když neumím programovat"
[https://datastudio.google.com/u/0/reporting/49a144fe-ddf0-4409-87c2-d695d8f37b5b/page/G6Y9C]: https://datastudio.google.com/u/0/reporting/49a144fe-ddf0-4409-87c2-d695d8f37b5b/page/G6Y9C "Dashboard"
[Surveilligence]: https://www.surveilligence.com/cs "Surveilligence"
[Hlídač státu]: https://www.hlidacstatu.cz/ "Hlídač státu"
[Tabulky Google]: https://www.google.cz/intl/cs/sheets/about/ "Tabulky Google"
[The Document Foundation Looker Studio (dříve Google Data Studio)]: https://datastudio.google.com "The Document Foundation Looker Studio" 
[Insolvenční rejstřík]: https://isir.justice.cz/isir/common/index.do "Insolvenční rejstřík"
[Veřejný rejstřík a Sbírka listin]: https://or.justice.cz/ias/ui/rejstrik "Veřejný rejstřík a Sbírka listin"
[Národní katalog otevřených dat (NKOD) - sada Insolventní zaměstnavatelé evidovaní Úřadem práce ČR]: https://data.gov.cz/datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatové-sady%2F00551023%2F77b26516ed9616a5f6675a1d2f8eac4f "sada Insolventní zaměstnavatelé evidovaní Úřadem práce ČR"
[Portálu otevřených dat]: https://data.gov.cz/ "Portál otevřených dat"



