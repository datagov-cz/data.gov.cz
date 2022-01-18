---
layout: post
detail: true
title: Využití dat z dopravních kamer
ref: využití-dat-z-dopravních-kamer
lang: cs
image: ../přílohy/články/využití-dat-z-dopravních-kamer/mapa1.webp
author: michal_škop
date: 2021-07-23 07:00:00 +01:00
---
Kolik kterým místem projíždí aut, kolik z nich jezdí nebezpečně rychle. To jsou jen některé statistiky, které lze získat z otevřených dat z dopravních kamer.
<!--more-->

Česká republika je plná kamer provozovaných jak veřejnými organizacemi (např. policií státní i městskou, obcemi, kraji, ŘSD), tak i soukromými. Jen naprosté minimum z nich ale poskytuje nějakou další službu veřejnosti nebo firmám nad rámec úzce omezeného důvodu své instalace.

Tento článek ukazuje malý kousek potenciálu, který v sobě otevřená data z existujících kamer mají. Jako příklad dalšího využití otevřených dat z dopravních kamer vznikla mapová aplikace, která vizualizuje data z dopravních kamer v Plzeňském kraji. Konkrétně zde je ukázán detailní postup tvorby mapy *Podíl vozidel překračujících 50 km/h zaznamenaných dopravními kamerami v Plzeňském kraji*.

{% include image.html url="../přílohy/články/využití-dat-z-dopravních-kamer/camera2.webp" description="Kamera v Plasích zapojená do systému sběru informací o dopravě v Plzeňském kraji (foto: Josef Škop)" %}

Takové mapy (obdobně jako grafy nebo statistiky) mohou sloužit jako jeden z podkladů pro jednání samospráv, pro plánování místních úprav nebo jako přehled o vytíženosti silnic apod. Za další průzkum stojí i propojení těchto dat z kamer (ze kterých lze získat intenzitu provozu a rychlosti vozidel) s [daty o dopravních nehodách][link_portal_nehod]. Dat o mobilitě existuje v ČR mnoho (např. použité v [Atlase mobility][link_atlas_mobility]), ovšem naprostá většina z nich není veřejně dostupná.

## Použitá data
Z mnoha veřejných kamerových systémů používaných v ČR poskytuje data veřejnosti jako otevřená data pouze Plzeňský kraj v rámci projektu [Systém sběru informací o průjezdu a měření rychlosti vozidel na území Plzeňského kraje][link_system].

Data z tohoto projektu jsou registrována v [NKOD - Národním katalogu otevřených dat][link_nkod]. Zdrojová data jsou dostupná po jednotlivých dnech v zazipovaných souborech. Podrobná data: [Open data systému][link_open_data] 

Data obsahují informaci o průjezdu každého vozidla kolem zapojené kamery o systému. Údaje jsou dostupné od roku 2016 a dnes je již do systému zapojeno přes 100 kamer rozmístěných v obcích po celém území Plzeňského kraje. Za každé vozidlo jsou k dispozici čas průjezdu, rychlost, směr, typ vozidla. Je třeba ale počítat s tím, že někdy jsou údaje neúplné (spec. u rychlosti) a někdy také mají kamery výpadky a data z nich chybějí komplet. Některé dny chybějí data úplně za všechny kamery.

## Postup zpracování
V tomto článku se zpracování ukazuje v jazyce Python 3 s velkým použitím knihovny Pandas.

### Stažení a extrakce dat
Pro práci s podrobnými daty o průjezdu každého vozidla je třeba nejprve data získat a a) buď si pořídit jejich lokální kopii nebo b) je zpracovat rovnou při stažení (a soubor neukládat). 

U obou postupů je třeba počítat s tím, že velikost zazipovaných souborů je kolem 5 - 10 MB, takže kompletní pětiletá historie znamená stažení až **20 GB** dat. Pokud u první varianty navíc rozzipujeme stažený soubor a uložíme samotná data (v .csv, aby se s nimi následně snadněji pracovalo), musíme počítat s tím, že **1 rok** zabere až nějakých **40 GB** místa na disku. Proto stojí za úvahu uložit pouze údaje, které budeme potřebovat (v případě této analýzy soubory zabíraly zhruba **80 GB**).

Ukázka hlavní části kódu, který stáhne a extrahuje data o kamerách pro jeden den `d`.

```python
dstring = d.strftime("%Y%m%d")
url = "https://doprava.plzensky-kraj.cz/opendata/doprava/den/DOPR_D_" + dstring + ".zip"
r = requests.get(url)
with zipfile.ZipFile(io.BytesIO(r.content)) as z:
  with z.open("DOPR_D_" + dstring + ".csv") as f:
    df = pd.read_csv(f, header=None, delimiter="|")
```

Celý použitý soubor: [download.py](../přílohy/články/využití-dat-z-dopravních-kamer/download.py)

## Výpočty střední rychlosti, překračování rychlosti

Vzhledem k velikosti dat si postup rozdělíme do dvou kroků.
Načteme data za každý den a pro každou kameru (a směr jízdy) spočítáme požadované statistiky (pokud jsou data v pořádku).
Spočteme statistiky za všechny dny.

### Načtení dat, výpočet statistik pro každou kameru, směr a den
V tomto kroku je potřeba vyhodnotit, zda data jsou pro danou kameru za konkrétní den úplná (jak jsme uvedli výše, nemusí to tak být). Vzhledem k povaze dat, kdy chybějící data chybějí “bez upozornění”, je třeba použít nějakou heuristiku. V případě tohoto článku šlo o nenulový počet zaznamenaných vozidel v každé hodině mimo několika nočních. Pokud tomu některá data za den a kameru nevyhověla, dále se s nimi nepracovalo.

Pro každou kameru, směr a den poté spočítáme počet vozidel, mediánovou rychlost a podíl vozidel, která jela rychleji než postupně 30, 40, ... 100 km/h.

Vzhledem k velikosti souborů se vyplatí věnovat pozornost způsobu zpracování dat - použití knihovny Pandas na hromadné zpracování souboru může ušetřit řádově sekundy u každého souboru, což se překlopí do řádů hodin u celé analýzy.

Použitý soubor: [daily.py](../přílohy/články/využití-dat-z-dopravních-kamer/daily.py)

### Celkové statistiky pro danou kameru
Pro zobrazení v mapě spočteme pro všední dny střední počet vozidel a střední podíl vozidel, která jela rychleji než 50 km/h. S ohledem na robustnost dat použijeme median a ne průměr (čímž také de facto vyřešíme problém se státními svátky připadajícími na dny pondělí až pátek, kdy je provoz logicky výrazně jiný než v pracovní dny).

Příklad kódu na výpočet středního (median) podílu vozidel, která jela rychleji než 50 km/h, pondělí až pátek, za každou kameru (jen její hlavní směr):

```python
# podíl vozidel s rychlostí > 50 km/h, Po-Pá, jen hlavní směr kamery
pd.pivot_table(daily[(daily['day'].between(0, 4)) & (daily['direction'] == 1)].dropna(), values='min50', index='id', aggfunc=lambda x: np.percentile(x, 50)).reset_index().to_csv("working_day_over50.csv")
```

Podobně bychom ale mohli spočítat další statistiky - např. podíl vozidel jedoucí rychleji než 70 km/h, statistiky po jednotlivých letech, atd. Příklady takových dalších výpočtů jsou v odkazovaném souboru.

Použitý soubor: [statistics.py](../přílohy/články/využití-dat-z-dopravních-kamer/statistics.py)

## Zobrazení v mapě

Souřadnice umístění kamer lze získat s trochou snahy přímo ze zdrojového kódu [mapy s dopravními informacemi projektu kamer][link_system_mapa].

Pro zobrazení v mapě je možné použít různé způsoby. Zde použijeme aplikaci [Flourish][link_flourish], mezi jiné způsoby by určitě patřilo zobrazení pomocí knihovny [Leaflet][link_leaflet] . Jako příklad použití Leafletu může sloužit právě [mapa projektu Plzeňského kraje][link_system_mapa].

## Výsledek

Výsledná mapa přehledně zobrazuje informace o intenzitě i rychlosti dopravy v jednotlivých místech kraje.

### Mapa: Podíl vozidel překračujících 50 km/h - Plzeňský kraj

{% include image.html url="../přílohy/články/využití-dat-z-dopravních-kamer/mapa1.webp" description="Podíl vozidel překračujících 50 km/h | Plzeňský kraj" %}

Legenda:
- Každý bod představuje jednu kameru.
- Velikost bodu odpovídá střednímu počtu vozidel, které daným místem projedou (jedním směrem).
- Barva bodu odpovídá střednímu podílu vozidel překračujících 50 km/h (žlutá málo až černá skoro všechna).

### Interaktivní verze 
[Interaktivní mapa podílu vozidel překračujících 50 km/h v Plzeňském kraji][link_interaktivni]

## Další užití

Přímo s těmito daty a výše uvedeným postupem lze zcela obdobně vytvořit mapy s jinými vypočtenými statistikami. Např. s podílem vozidel, které už významně překračují rychlostní limit a jedou rychlostí vyšší než 70 km/h. Nebo se lze zaměřit jen na časy, kdy děti chodí do a ze školy apod.

Potenciál má propojení výše provedené analýzy s dalšími daty, např. o nehodách dostupných na [Portálu nehod][link_portal_nehod].

Podobný postup se stejnými daty byl použit jako jeden z argumentů při [analýze dopadu uzavírce okresů kvůli šíření viru covid-19 na jaře 2021][link_mahdalova] - zde se ukázalo, že takto prakticky provedená uzavírka neměla na mobilitu vliv.

Analýza půjde použít i v okamžiku, kdy některé další subjekty začnou publikovat obdobná data ze svých kamer.

## Použité nástroje a zdroje

- [Pandas][link_pandas] - open source knihovna
- [Flourish][link_flourish] - služba zdarma po registraci (freemium)


[link_system]: https://doprava.plzensky-kraj.cz/ "Systém sběru informací o průjezdu a měření rychlosti vozidel na území Plzeňského kraje"
[link_open_data]: https://doprava.plzensky-kraj.cz/site/page?view=od-about "Open data informačního systému o dopravě Plzeňského kraje"
[link_system_mapa]: https://doprava.plzensky-kraj.cz/map/index "Mapa informačního systému o dopravě Plzeňského kraje" 
[link_nkod]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F70890366%2F682179464 "NKOD"
[link_portal_nehod]: https://portalnehod.cz/ "Portál nehod"
[link_atlas_mobility]: https://atlas-mobility.danse.tech/uvod.html "Atlas mobility"
[link_flourish]: https://flourish.studio "Flourish"
[link_pandas]: https://pandas.pydata.org/ "Pandas - knihovna pro Python"
[link_interaktivni]: https://public.flourish.studio/visualisation/6715109/ "Podíl vozidel překračujících 50 km/h - Plzeňský kraj - interaktivní verze"
[link_leaflet]: https://leafletjs.com/ "Leaflet - javascriptová knihovna pro práci s mapami"
[link_mahdalova]: https://www.seznamzpravy.cz/clanek/vlada-cte-spatne-vlastni-data-uzavreni-okresu-nema-na-sireni-viru-vliv-148532 "K. Mahdalová, Seznam Zprávy: Vláda čte špatně vlastní data. Uzavření okresu nemá na šíření viru vliv."