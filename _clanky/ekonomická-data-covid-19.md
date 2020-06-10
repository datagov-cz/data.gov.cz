---
layout: post
detail: true
title: Ekonomická data k analýze dopadů Covid 19
ref: Ekonomická data Covid 19
lang: cs
image: ../attachments/články/ekonomická-data-covid-19/images/icon.svg
author: michal_škop
date: 2020-06-10 03:14:15
---
Pandemie Covid-19 mj. ukázala, jak důležité je mít dostupná různá aktuální data. Zde se podíváme speciálně na sledování stavu ekonomiky.
<!--more-->

Pokud bychom se chtěli podívat na aktuální situaci způsobenou pandemií nemoci COVID-19 z hlediska sdílení informací, dat a znalostí, dospěli bychom pravděpodobně k názoru, že tento "obor" zaznamenal velmi pozitivní růst. Tedy že aktuální krize vlastně přispěla k rozvoji tohoto odvětví a zejména poukázala na důležitost dostupnosti kvalitních dat pro možnosti rozvoje vědeckého poznání a zejména pro rozhodování o dalších preventivních i pomocných opatřeních (rozhodování na základě faktů neboli "evidence-based policymaking").

Prakticky ve stejnou dobu jak vznikla poptávka po datech dokládající vývoj epidemiologické situace, vznikla potřeba začít postupně analyzovat ekonomické dopady současné situace. Jak státní správa, tak i novináři a další datoví nadšenci začali zpracovávat různé analýzy, které se zaměřovaly na ekonomickou stránku věci. Jelikož tyto analýzy budou vznikat ještě dlouhou dobu i po odeznění aktuálního nouzového stavu, říkali jsme si, že bychom také měli přidat něco do diskuze. Sepsali jsme proto seznam aktuálně již dostupných (otevřených i neotevřených) datových sad, které je možné využít pro tyto účely včetně malé ukázky, jak s nimi pracovat. Navíc jsme ale sepsali také několik modelových situací, jaké analýzy by bylo možné do budoucna dělat, kdyby byla jako otevřená data zveřejněny další údaje veřejné správy. Více informací naleznete v článku. Budeme rádi za zpětnou vazbu a zejména tipy na doplnění těchto modelových situací do budoucna.

## Aktuálně dostupná data pro účely ekonomické analýzy
Jako první si představíme datové sady, které jsou již nyní dostupné pomocí několika vizualizací, které ukazují jejich význam pro analýzu ekonomických dopadů nemoci COVID-19.

Bohužel, až na výjimky, data nejsou dostupná jako otevřená data ani jako “skoro otevřená data”.

### Výběr daní
Jednou ze základních datových sad o stavu ekonomiky je přehled o celkovém výběru daní. Na tom závisí nejen státní rozpočet, ale také např. rozpočty samospráv - obcí a krajů.

MF ČR dnes jednou měsíčně publikuje plnění státního rozpočtu, kde je též informace o celkovém výběru daní.

Problémem je, že data nejsou otevřená, jsou publikována jako tabulky v Excelu a pro další práci s nimi je třeba je ručně zpracovávat.

{% include image.html url="../attachments/články/ekonomická-data-covid-19/images/mesicni_pokladni_plneni_05_2020.png" description="Měsíční pokladní plnění za leden až květen 2020" %}

{% include image.html url="../attachments/články/ekonomická-data-covid-19/images/prijmy_statni_rozpoctu_05_2020.png" description="Přijmy státního rozpočtu za leden až květen 2020" %}

#### Použité zdroje
- Ministerstvo financí: [Měsíční pokladní plnění státního rozpočtu][link_plneni_rozpoctu]

### Makroekonomická predikce
Makroekonomickou predikci produkuje Ministerstvo financí jednou za čtvrt roku, což v současné kritické době není pro mnohé aktéry dostačující.

Jednou z aplikací těchto dat jsou Kalkulačky RUD pro rok 2020 od Sdružení měst a obcí ČR a Sdružení místních samospráv ČR.

Problémem je, že data nejsou otevřená, jsou publikována jako tabulky v Excelu a pro další práci s nimi je třeba je ručně zpracovávat.

{% include image.html url="../attachments/články/ekonomická-data-covid-19/images/ekonomicka_predikce.png" description="Ekonomická predikce 04/2020: růst reálného HDP" %}

#### Použité zdroje
- [Makroekonomická predikce MFČR][link_makroekonomicka_predikce]
- [SMO ČR: Kalkulačka RUD na rok 2020][link_kalkulacka_rud_smocr]
- [SMS ČR: RUD - Předpokládané výnosy obce][link_kalkulacka_rud_smscr]

### Nezaměstnanost
MPSV ČR a ČSÚ zpracovávají údaje o nezaměstnanosti. MPSV ČR je publikuje měsíčně v detailním přehledu až na úroveň obcí.

Nicméně z Twitteru ministryně je zřejmé, že existují i denní data.

Opět je zde problém, že data nejsou publikována jako otevřená - nejsou k dispozici jako data, jen jsou v tabulkách na webu.

{% include image.html url="../attachments/články/ekonomická-data-covid-19/images/nezamestnanost_novinky.png" description="Novinky.cz: Nezaměstnanost v ČR" %}

{% include image.html url="../attachments/články/ekonomická-data-covid-19/images/nezamestnanost_skop.png" description="Vývoj nezaměstnanosti v ČR dle ORP 2014-2020 (vlastní zpracování)" %}

#### Použité zdroje
- [MPSV: Nezaměstnanost][link_mpsv_nezamestnanost]
- [Twitter ministryně Jany Maláčové][link_malacova_twitter]
- [Novinky.cz: Nezaměstnanost v ČR][link_novinky_nezamestnanost]
- [Nezaměstnanost v ČR dle ORP][link_skop_nezamestnanost]

### Burza cenných papírů Praha
Burza cenných papírů Praha (podobně i další důležité burzy pro ČR) přináší další důležité ekonomické indikátory.

BCPP poskytuje data ke zpracování v podobě blízké otevřeným datům, i zdarma a de facto real-time (zdarma jsou se zpožděním 2 hodin).

{% include image.html url="../attachments/články/ekonomická-data-covid-19/images/kurzy_burza.png" description="Hodnota indexu Burzy cenných papírů Praha, kurzy.cz" %}

#### Použité zdroje
- [Burza cenných papírů Praha: data ke stažení][link_pse]
- [Kurzy.cz][link_kurzy_cz]

### Inflace
Inflaci sleduje Český statistický úřad a publikuje ji jednou měsíčně.

Tato data jsou ve Veřejné databázi ČSÚ k dispozici také po jednotlivých odvětvích a ke stažení v několika formátech.

{% include image.html url="../attachments/články/ekonomická-data-covid-19/images/inflace_csu.png" description="ČSÚ: Měsíční vývoj meziročního indexu spotřebitelských cen" %}

#### Použité zdroje
- [ČSÚ - Inflace, spotřebitelské ceny][link_csu_inflace]

## Aktuálně nedostupná ale do budoucna potřebná otevřená data pro účely ekonomické analýzy

Jako druhé si představíme modelové vizualizace, které by bylo možné vytvořit a na základě nich provádět analýzu ekonomických dopadů nemoci COVID-19, pokud by došlo k otevření datových sad, které aktuálně nejsou publikována jako otevřená data některou z institucí veřejné správy. Na závěr této sekce je možné nalézt opět seznam další datových sad již bez vizualizací, které by bylo možné využít pro tuto analýzu.

### Elektronická evidence tržeb
Data z EET zpracovává Finanční správa a tato data by mohla dát real-time detailní přehled o ekonomické situaci dle jednotlivých oborů i dle regionů.

Parlament ovšem na konci března rozhodl o pozastavení EET do konce roku 2020.

Bohužel data jsou i v běžném provozu dostupná velmi omezeně, jen díky soukromému projektu Data z EET, který je ale aktualizován jen zřídka.

Na Slovensku data z eKasy (slovenská oboba EET) byla použita např. v komentáři Institutu finanční politiky MFSR:

{% include image.html url="../attachments/články/ekonomická-data-covid-19/images/ekasa.png" description="Pokles spotřeby domácností na Slovensku dle eKasa" %}

#### Použité zdroje
- [Data z EET][link_datazeet]
- [MFČR: eTržby][link_etrzby]
- [Inštitút finančnej politiky: Koronavírus nakazí aj slovenskú ekonomiku][link_ekasa]

### Kontrolní hlášení
Kontrolní hlášení zpracovává Finanční správa, podnikatelé je musejí předkládat měsíčně. Bylo by možné z nich sledovat ekonomický vývoj jak po oborech činnosti, tak po regionech.

Žádná data z kontrolních hlášení nejsou dostupná.

### Spotřeba elektřiny
Spotřeba elektřiny je jedním z nepřímých ukazatelů ekonomické aktivity. Data mají jednotlivé společnosti dodávající elektřinu (např. většinově státem vlastněný ČEZ) nebo ČEPS, který se stará o přenosovou soustavu.

Tato data nejsou běžně dostupná.

{% include image.html url="../attachments/články/ekonomická-data-covid-19/images/elektrina_cr.png" description="Průměrná spotřeba elektrické energie v ČR" %}

{% include image.html url="../attachments/články/ekonomická-data-covid-19/images/elektrina_slovensko.png" description="Průměrná spotřeba elektrické energie na Slovensku" %}

#### Použité zdroje
- [ČNB: První odhad dopadů pandemie COVID-19 na ekonomiku ČR][link_cnb]
- [Inštitút finančnej politiky: Koronavírus nakazí aj slovenskú ekonomiku][link_ekasa]

### Doprava
Nepřímým ekonomickým ukazatelem je intenzita dopravy. Zde může jít o vcelku různá data, např.:

- Data z mýtných bran - ŘSD
- Dopravní kamery - Policie ČR, obce, kraje
- Data o regionální hromadné přepravě - kraje, dopravci (např. státní ČD)
- Data o linkové hromadné přepravě celkem - dopravci (např. státní ČD)
- MHD - města
- Spotřební daň - MF ČR

Tato data jsou dostupná jen výjimečně (viz Použité zdroje).

{% include image.html url="../attachments/články/ekonomická-data-covid-19/images/doprava_ul.png" description="Pokles dopravy v Ústí nad Labem" %}

#### Použité zdroje
- [ČHMÚ Brno: Pokles dopravy a změna mobility během nouzového stavu][link_doprava_ul]
- [Plzeňský kraj - data z dopravních kamer kraje][link_doprava_plzensky]
- [MF ČR: spotřební daň (v rámci Přehledu plnění státního rozpočtu)][link_plneni_rozpoctu]

### Výdaje nemocnic / zdravotních pojišťoven
Vzhledem k logickým dopadům pandemie na zdravotnictví by bylo dobré sledovat i ekonomiku nemocnic a zdravotních pojišťoven, ale zde aktuální/průběžná data nejsou dostupná.

### Seznam dalších aktuálně otevřeně nedostupných datových sad, které by bylo možné využít pro účely ekonomické analýzy dopadů nemoci COVID-19

Již jen heslovitě další data, která by bylo možné sledovat:

1. Náklady v domech pro seniory
2. Ceny ropy
3. Ceny nemovitostí
4. Čekací doby na hraničních přechodech
5. Znečištění ovzduší
6. Hledání termínů jako “úřad práce” ve vyhledávačích
7. Počet přenocování hostů
8. Počet nově přiznaných důchodů
9. Počet vyplacených dávek
10. Platby platebními kartami

## Závěr
Článek poukázal na roli a potřebnost otevřených dat v kontextu dnešní společnosti a na případu aktuální pandemie způsobené nemocí COVID-19 představil možnosti využití otevřených dat pro účely analýzy ekonomických dopadů situací jako je ta, kterou prožíváme v těchto dnech. Jak je patrné, otevřená data nepůsobí pouze zpětně pro následné analýzy, ale na jejich základě je možné rozhodovat i aktuální situace na základě dostupných faktů a rozvíjet tak moderní formu strategického řízení (tzv. "evidence-based policymaking").

Chybí Vám v našem výčtu některá otevřená datová sada, která je dnes již dostupná a je podle Vás důležitá pro účely ekonomické analýzy? Nebo naopak máte návrh na otevření datové sady pro účely ekonomické analýzy, kterou nyní disponuje některá z institucí veřejného sektoru, ale není zatím publikována jako otevřená data? Neváhejte nám napsat na otevrenadata@mvcr.cz. Do předmětu prosím uveďte "_ekonomika COVID-19_" a my se pokusíme otevřenou datovou sadu zařadit nebo získat pro potřeby další verze tohoto článku na našem portálu [Národního katalogu otevřených dat][link_nkod].

_<small>Použitá grafika: "virus and economy" by tulpahn from the Noun Project, Creative Commons Attribution</small>_

[link_nkod]: https://data.gov.cz/ "Národní katalog otevřených dat"
[link_doprava_plzensky]: https://doprava.plzensky-kraj.cz/opendata/doprava/den/ "Plzeňský kraj - data z dopravních kamer kraje"
[link_doprava_ul]: https://chmibrno.org/blog/2020/05/17/pokles-dopravy-a-zmena-mobility-behem-nouzoveho-stavu/ "ČHMÚ Brno: Pokles dopravy a změna mobility během nouzového stavu"
[link_cnb]: https://www.cnb.cz/cs/o_cnb/cnblog/Prvni-odhad-dopadu-pandemie-COVID-19-na-ekonomiku-CR-aktualizovano-18.-5./ "ČNB: První odhad dopadů pandemie COVID-19 na ekonomiku ČR"
[link_ekasa]: https://www.mfsr.sk/sk/financie/institut-financnej-politiky/publikacie-ifp/komentare/komentare-z-roku-2020/3-koronavirus-nakazi-aj-slovensku-ekonomiku.html "Inštitút finančnej politiky: Koronavírus nakazí aj slovenskú ekonomiku"
[link_etrzby]: https://www.etrzby.cz/cs/index "MFČR: eTržby"
[link_datazeet]: https://www.datazeet.cz/ "Data z EET"
[link_csu_inflace]: https://www.czso.cz/csu/czso/inflace_spotrebitelske_ceny "ČSÚ - Inflace, spotřebitelské ceny"
[link_pse]: https://www.pse.cz/en/technology/download-files "Burza cenných papírů Praha: data ke stažení"
[link_kurzy_cz]: https://www.kurzy.cz/?af=1&mf=1&mp=2+dny&ap=1+rok "Kurzy.cz"
[link_mpsv_nezamestnanost]: https://www.mpsv.cz/web/cz/nezamestnanost "MPSV: Nezaměstnanost"
[link_malacova_twitter]: https://twitter.com/JMalacova "Twitter ministryně Jany Maláčové"
[link_skop_nezamestnanost]: https://observablehq.com/@michalskop/uneployment-cz-orps "Vývoj nezaměstnanosti v ČR dle ORP 2014-2020 (vlastní zpracování)"
[link_novinky_nezamestnanost]: https://www.novinky.cz/ekonomika/clanek/nezamestnanost-v-kvetnu-vzrostla-na-36-procenta-40326543 "Novinky.cz: Nezaměstnanost v ČR"
[link_kalkulacka_rud_smscr]: https://www.smscr.cz/kalkulacka/rud/ "SMS ČR: RUD - Předpokládané výnosy obce"
[link_kalkulacka_rud_smocr]: https://www.smocr.cz/cs/novinky/a/kalkulacka-rud-na-rok-2020 "SMO ČR: Kalkulačka RUD na rok 2020"
[link_makroekonomicka_predikce]: https://www.mfcr.cz/cs/verejny-sektor/makroekonomika/makroekonomicka-predikce/2020/makroekonomicka-predikce-duben-2020-38089 "MFČR: Makroekonomická predikce - duben 2020"
[link_plneni_rozpoctu]: https://www.mfcr.cz/cs/verejny-sektor/statni-rozpocet/plneni-statniho-rozpoctu/2020/mesicni-pokladni-plneni-statniho-rozpoct-37413 "MFČR: Měsíční plnění státního rozpočtu"
