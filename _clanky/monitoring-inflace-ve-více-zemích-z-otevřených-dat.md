---
layout: post
detail: true
title: "Monitoring inflace ve více zemích z otevřených dat"
ref: monitoring-inflace-ve-více-zemích-z-otevřených-dat
lang: cs
image: ../přílohy/články/monitoring-inflace-ve-více-zemích-z-otevřených-dat/main.webp
author: michal_škop
date: 2022-12-18 07:00:00 +01:00
---
Inflace je opět realitou posledních několika let. Dopadá prakticky na každého a média se jí začala opět věnovat. Detailní mezinárodní data nám umožní inflace rozebrat na jednotlivé složky a zasadit je do širšího kontextu okolních zemí.

<!--more-->
Inflace je míra zvýšení cen zboží a služeb v průběhu času. V ČR a sousedních zemích se inflace měří pomocí indexu spotřebitelských cen.

V českém prostředí se obecně málo používá srovnání se zahraničím a to platí i o inflaci. Přitom data k tomu existují. V tomto případě (a nejen v tomto) jsou díky Eurostatu, statistickému úřadu EU, i dobře mezinárodně porovnatelná.

Zkusme se tedy podívat na českou inflaci za pomocí srovnání se sousedními zeměmi. Naší snahou bude tedy zjistit, zda se česká inflace liší od okolních zemí ať již výší nebo složením. Zároveň ukážeme i několik způsobů, jak taková data vizualizovat.

## Použitá data
Data o inflaci v České republice sbírá a spravuje Český statistický úřad (ČSÚ). Ten má na starost i sestavování “modelu” inflace, tj. nastavení vah spotřebního koše, jednotlivých součástí, z kterých se výsledná inflace poté spočte.

Data o inflaci jsou dostupná jako [otevřená data][link_nkod]. Tato data zahrnují několik ukazatelů jak v měsíční tak v roční frekvenci. Podrobná jsou potom na úroveň hlavních 12 sledovaných skupin výrobků a služeb.

Další potřebná data o složení spotřebního koše už ČSÚ neposkytuje jako otevřená data, nýbrž v [excelovských souborech][link_csu].

Evropská data poskytuje Eurostat také jako [otevřená data][link_eurostat]. Jsou součástí [prohlížeče dat Eurostatu][link_eurostat_data_browser] (Data Browser). Tam si lze následně vybrat i přesně data, která člověk zrovna potřebuje. Eurostat také používá stejné skupiny jako ČSÚ (tedy 12 hlavních skupin výrobků a služeb).

Stojí za zaznamenání, že složení spotřebního koše a váhy jednotlivých produktů a služeb v něm jsou v každé zemi trochu jiné a dokonce se liší i pro ČR přímo u ČSÚ a u Eurostatu, takže míra inflace v ČR se mírně liší, když je reportovaná ČSÚ a když je reportovaná Eurostatem.

## Postup zpracování
Postup přípravy grafů je vcelku přímočarý. Data jsou dostupná z Eurostatu (z Data Browseru) ke stažení jako CSV. Stačí si tedy vyfiltrovat jen to, co potřebujeme, a stáhnout k dalšímu použití.

Soubor poté vyžaduje trochu čištění, mezi daty jsou např. zamíchána písmena označující poznámky pod čarou, která je tedy nutno smazat, ale není to nějak výrazně obtížné.

Samotný liniový graf je vcelku standardní a lze jej vytvořit mnoha různými způsoby, např. klasicky v tabulkových softwarech (Libre Office, Excel, Google sheet). Vždy je jen nutné data různě přeskládat tak, aby odpovídala tomu, jak jsou potřeba na zobrazení grafů.

Další složitější graf lze např. vytvořit pomocí open source aplikace [RawGraphs][link_rawgraphs].

## Výsledek
### Srovnání více zemí
Je známo, že inflace je v poslední době v celé Evropě. Ale i základní graf vývoje inflace v ČR a sousedních zemích dokáže ukázat, zda průběh inflace je v okolních zemích obdobný či nikoliv. A vidíme, že v ČR je spolu s Polskem o podstatný kus vyšší než v Německu a Rakousku. Také vidíme velký skok u české inflace na začátku roku 2022, který se v okolních zemích nekonal.

{% include image.html url="../přílohy/články/monitoring-inflace-ve-více-zemích-z-otevřených-dat/srovnani.webp" description="Porovnání vývoje inflace od 1.1.2020 v ČR a sousedních zemích" %}

### Detailní vývoj
Už vcelku jednoduché porovnání základních složek inflace v ČR a okolních zemích přináší zajímavé výsledky. Pro ilustraci si porovnejme inflaci v ČR a u jižního souseda Rakouska v období od začátku 2020, tedy těsně “před covidem”.

Ceny bydlení a energií a ceny dopravy stoupaly v obou zemích obdobně. Ceny potravin už ale přispěly k inflaci v ČR zhruba 2x více jak v Rakousku. A např. alkoholické nápoje a tabák, rekreace a kultura nebo odívání v Rakousku prakticky nestouply, zatímco v ČR také přispěly k celkové inflaci.

{% include image.html url="../přílohy/články/monitoring-inflace-ve-více-zemích-z-otevřených-dat/cz.webp" %}

{% include image.html url="../přílohy/články/monitoring-inflace-ve-více-zemích-z-otevřených-dat/at.webp" description="Srovnání inflace od 1.1.2020 v České republice a v Rakousku s rozkladem na základní složky produktů a služeb. Váhy jednotlivých složek jsou dle vah Eurostatu pro obě země v říjnu 2022." %}


### Porovnání složek inflace mezi zeměmi
Jiný pohled je zase srovnání jednotlivých složek inflace v ČR a sousedních zemích bez ohledu na to, jakou měrou se podílejí na celkové inflaci. Snadno vidíme, které skupiny výrobků a služeb zdražily v ČR více než v sousedních zemích.

{% include image.html url="../přílohy/články/monitoring-inflace-ve-více-zemích-z-otevřených-dat/details.webp" description="Srovnání změny cen z října 2022 oproti 1. 1. 2020 za jednotlivé složky produktů a služeb. ČR (zvýrazněna) a sousední země." %}

## Další užití
Inflace je dlouhodobě sledována specializovanými médii jako jsou např. [peníze.cz][link_penize] nebo [kurzy.cz][link_kurzy]. V době současné zvýšené inflace se tématu začala podrobněji věnovat i obecně zaměřená média.

Např. Rozhlas se věnoval [dlouhodobému vývoji inflace v ČR][link_rozhlas]. Hospodářské noviny publikují [detailní rozklad roční inflace][link_hn].

Inflace se dostala i do různých dashboardů jako je ten na [Seznamu Zprávy][link_sz]. Nakonec inflace je také na [dashboardu nejdůležitějších informací Eurostatu][link_eurostat_dashboard], který vznikl na konci roku 2020 ke sledování hlavních ekonomických ukazatelů s ohledem na pandemii Covidu 19.
{% include image.html url="../přílohy/články/monitoring-inflace-ve-více-zemích-z-otevřených-dat/sz.webp" description="Inflace jako jeden z ukazatelů na dashboardu Seznam Zpráv.
" %}
{% include image.html url="../přílohy/články/monitoring-inflace-ve-více-zemích-z-otevřených-dat/eurostat.webp" description="Inflace jako jeden z ukazatelů na European Statistical Recovery Dashboard
" %}

Samozřejmě zde byla inflace použita jako příklad jednoho ukazatele, který momentálně v ČR získal na důležitosti.

Ale podobný postup lze používat i obecně - zasazení nějakého ukazatele do mezinárodního kontextu často pomůže lépe “nasvítit” i situaci přímo v ČR. Zde je další velký potenciál otevřených dat, které již dnes jsou k dispozici i mezinárodně.

## Použité nástroje a zdroje
- [Libre Office Calc][link_loc] - open source a zdarma
- [RAWGraphs][link_rawgraphs] - open source a zdarma
- [ČSÚ][link_csu] - Český statistický úřad: Spotřební koš
- [Eurostat][link_eurostat] - Eurostat: Open Data - Inflation
- [NKOD][link_nkod] - Národní katalog otevřených dat
- [Ilustrační obrázek][link_banknote]: Reserve Bank of Zimbabwe - Self-scan by (Marianian) followed by minor Photoshop enhancements to improve appearance and reduce size. Second version scan by (Camp0s) with original color preserved. Transferred from en.wikipedia to Commons by User:Avicennasis using CommonsHelper.


[link_eurostat_dashboard]: https://ec.europa.eu/eurostat/cache/recovery-dashboard/ "Eurostat: Recovery Dashboard"
[link_sz]: https://web.archive.org/web/20221201013759/https://www.seznamzpravy.cz/ "Seznam Zprávy 1. 12. 2022 (archivovaná verze)"
[link_hn]: https://byznys.hn.cz/c1-67136660-panorama-ceske-inflace-pripomina-manhattan-mrakodrap-elektriny-se-mimoradne-propadly "Hospodářské noviny: Panorama české inflace připomíná Manhattan: Mrakodrap Elektřiny se mimořádně propadl"
[link_rozhlas]: https://data.irozhlas.cz/inflace/ "Rozhlas: Inflace jako popletený Jánošík, boj o moc i ztráta paměti. Jak si spočítat, o kolik zdražil život právě vám?"
[link_kurzy]: https://www.kurzy.cz/makroekonomika/inflace/ "Kurzy.cz: Inflace"
[link_penize]: https://www.penize.cz/inflace "Peníze.cz: Inflace"
[link_nkod]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F00025593%2F790624c7263aca615ce9ddd24e7db464 "Národní katalog otevřených dat: Index spotřebitelských cen"
[link_csu]: https://www.czso.cz/csu/czso/spotrebni_kos_archiv "ČSÚ: Spotřební koš"
[link_eurostat]: https://data.europa.eu/data/datasets?query=inflation&locale=en&publisher=http%3A%2F%2Fpublications.europa.eu%2Fresource%2Fauthority%2Fcorporate-body%2FESTAT&page=1 "Eurostat: Open Data - Inflation"
[link_eurostat_data_browser]: https://ec.europa.eu/eurostat/databrowser/product/view/PRC_HICP_AIND "Eurostat: Data Browser"
[link_loc]: https://www.libreoffice.org/ "Libre Office Calc"
[link_rawgraphs]: https://rawgraphs.io/ "RAWGraphs"
[link_banknote]: https://commons.wikimedia.org/wiki/File:Zimbabwe_$100_trillion_2009_Obverse.jpg "Ilustrační obrázek: Reserve Bank of Zimbabwe - Self-scan by (Marianian) followed by minor Photoshop enhancements to improve appearance and reduce size. Second version scan by (Camp0s) with original color preserved. Transferred from en.wikipedia to Commons by User:Avicennasis using CommonsHelper."