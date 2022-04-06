---
layout: post
detail: true
title: Uprchlíci v datech
ref: uprchlíci-v-datech
lang: cs
image: ../přílohy/články/uprchlíci-v-datech/images/main.webp
author: michal_škop
date: 2022-04-06 07:00:00 +01:00
---
Kolik ukrajinských válečných uprchlíků je v ČR, v našem kraji, v naší obci? Díky aktuálním datům a jejich analýze víme, kam směřují, a umíme vysvětlit proč.

<!--more-->
{% include image.html url="../přílohy/články/uprchlíci-v-datech/images/main_480.webp" description="Pomoc uprchlíkům na pražském Hlavním nádraží Foto CC BY-SA 3.0 Jan Beránek 2.3.2022" %}

Ministerstvo vnitra začalo v březnu 2022 pravidelně uvolňovat data, kde se v ČR přihlašují uprchlíci z Ukrajiny. Ta jsou na úrovni okresů i jednotlivých obcí, je možné z nich sestavovat mapy a podrobně je analyzovat.

Zásadní důležitost aktuálních dat jsme už viděli během stále probíhající pandemie covidu. Vláda, regionální správy, ale i podnikatelé nebo školy musely často pružně reagovat na aktuální místní situaci. Podobně nyní vyvstala potřeba mít aktuální data ohledně válečných uprchlíků z Ukrajiny napadené Ruskem, aby bylo možné co nejlépe reagovat na mnoha úrovních - od vlády až po obce.

Pomocí dostupných dat se budeme snažit odpovědět na 2 otázky:
1. Kolik uprchlíků a kam v ČR směřuje?
2. Proč uprchlíci směřují právě do těchto oblastí?

## Použitá data
1. Ministerstvo vnitra ČR: [Počty osob s uděleným pobytovým oprávněním v souvislosti s válkou na Ukrajině][link_mvcr_data]
2. Český statistický úřad: [Cizinci podle státního občanství, věku a pohlaví - rok 2020][link_csu_2020]
3. Český statistický úřad: [Obyvatelstvo podle pětiletých věkových skupin a pohlaví v krajích a okresech][link_csu_okresy]
4. Český úřad zeměměřický a katastrální: [RUIAN Stát - SHP][link_ruian]

Datové sady 2 až 4 jsou publikovány jako otevřená data - tj. je např. možné si je vyhledat v Národním katalogu otevřených dat. 

Datová sada 1 s počty uprchlíků je publikována pouze ve formátu XLS(X) v souborech, které se každý den vyměňují za nový s proměnným názvem. Tento způsob samozřejmě zdaleka není optimální a způsobuje zbytečné problémy při dalším zpracování (např. médiím, která tato data používají). Na druhou stranu je však pozitivní, že tato data byla poměrně rychle veřejně dostupná alespoň tímto způsobem.

## Postup zpracování
### 1. Kolik uprchlíků kam v ČR směřuje?
Cíl: Vytvoříme mapy okresů a jednotlivých obcí, kde zobrazíme kolik uprchlíků tam získalo pobytové oprávnění - vztaženo na počet obyvatel (tj. počet uprchlíků v poměru s počtem dosavadních obyvatel).

Nejprve si připravíme data za jednotlivé okresy a obce. Upravíme si data z ČSÚ o počtech obyvatel v obcích a okresech - zde můžeme např. použít postup z článku [Kartogram ČR (choropleth, choropletová mapa)][link_kartogram].

Data z MVČR o počtech uprchlíků (lidí, kterým bylo uděleno pobytové oprávnění) jsou poskytována po obcích. Pouze je tedy ještě agregujeme podle okresů (např. pomocí kontingenčních tabulek v tabulkových procesorech Libre Office, Excel, Google Sheets, apod.)

Samotné vytvoření mapy uděláme např. opět podle postupu popsaného v článku [Kartogram ČR (choropleth, choropletová mapa)][link_kartogram].

{% include image.html url="../přílohy/články/uprchlíci-v-datech/images/okresy_640.webp" description="Počty uprchlíků vzhledem k počtu obyvatel v okresech ČR (stav k 31.3.2022)" %}

{% include image.html url="../přílohy/články/uprchlíci-v-datech/images/obce_640.webp" description="Počty uprchlíků vzhledem k počtu obyvatel v obcích ČR (stav k 31.3.2022)" %}
 
Z obou map je vidět, že nejvíce uprchlíků směřuje do velkých měst (Praha, Brno, Plzeň), což se dá očekávat, neboť je zde obecně snazší nalézt bydlení či práci a zároveň je praktické mít na jednom místě úřady, lékaře nebo školské zařízení.

Na první pohled překvapivé ale může být, že více uprchlíků směřuje do Čech než na Moravu a do Slezska. Speciálně potom na úplnou západní hranici ČR, což jsou ale místa nejvzdálenější od Ukrajiny, z hranic Ukrajiny je to do Karlových Varů zhruba 2x tak daleko jako do Ostravy. A přitom počet uprchlíků je v Karlových Varech vyšší než v 6x lidnatější Ostravě.

Přejděme tedy k druhé části, kde se zaměříme na možné vysvětlení tohoto zdánlivého paradoxu.

### 2. Proč uprchlíci směřují právě do těchto oblastí?
Cíl: Porovnáme počty uprchlíků směřujících do jednotlivých regionů ČR s počty Ukrajinců, kteří tam již žijí (resp. žili před začátkem války).

Pro tuto analýzu je nutné připravit také přehledy o počtech cizinců žijících v ČR. Tato data poskytuje ČSÚ nejpodrobněji po okresech a poslední dostupné údaje jsou k přelomu let 2020 a 2021. Opět nám bude stačit jednoduché agregování pomocí kontingenčních tabulek v některém z tabulkových procesorů.

Pro grafické zobrazení můžeme použít např. webovou open source aplikaci RAWGraphs (ale obdobně bychom mohli použít i jiné nástroje).

{% include image.html url="../přílohy/články/uprchlíci-v-datech/images/scatter.svg" description="Srovnání počtu Ukrajinců žijících v jednotlivých okresech ČR s počty ukrajinských válečných uprchlíků v těchto okresech (přepočteno na počet obyvatel). Velikost bodů odpovídá počtu válečných uprchlíků, barva potom rozdělení západní Čechy, zbytek Čech a Morava a Slezsko." %}

Vidíme jasný trend: Čím více lidí z Ukrajiny již žilo v daném okrese, tím více válečných uprchlíků tam směřuje.

## Výsledek
Z map v první části jsme zjistili, že nejvíce uprchlíků směřuje do největších měst a větších průmyslových center v Čechách, v podstatě jedinou výjimkou na Moravě je město Brno. Nadprůměrně uprchlíků míří na úplný západ ČR.

Z grafu ve druhé části jsme viděli, že čím více Ukrajinců již žilo v nějakém okrese, tím více válečných uprchlíků tam dnes směřuje. Je to nakonec logické - uprchlíci jedou tam, kde už mají nějaké zázemí (např. rodinné příslušníky, známé), ale i informace. Tento výklad potvrzuje i to, že pokud bychom stejný graf vytvořili pro jiné větší skupiny cizinců v ČR (země Slovensko, Vietnam, Rusko, Německo, Polsko), tak se tento trend v grafu neprojeví.

Vidíme tedy možnou odpověď na “paradox” toho, že více lidí utíká do Čech než na Moravu a do Slezska. V Čechách totiž bylo více Ukrajinců už před válkou, speciálně v průmyslovějších okresech.

Podařilo se nám tak najít možné vysvětlení i části českého západu - existující průmyslové zóny se svým zázemím ubytoven i pracovních agentur zaměřených na cizince (plzeňská Borská pole, Bor u Tachova, apod.).

A co okresy Karlovy Vary a Cheb? Zde se nabízí vysvětlení, že přestože Ukrajina byla napadena Ruskem, mezi obyvateli Ukrajiny a Ruska existuje mnoho rodinných a přátelských vazeb. A je notoricky známo, že západočeské lázně jsou mezi Rusy oblíbené a že přímo v nich i v okolí žijí nebo vlastní nemovitosti. A skutečně právě do lázeňských měst zamířilo výrazně nadprůměrné množství ukrajinských uprchlíků, jak vidíme třeba z výše zobrazené mapy po obcích. 

Na konci března 2022 evidují Karlovy Vary zhruba 4000 lidí, Mariánské Lázně (okres Cheb) 2000 a Františkovy Lázně (okres Cheb) 500 uprchlíků. Data tedy tomuto vysvětlení odpovídají. Proti Ukrajincům válčí Rusko, ne Rusové žijící v ČR.

{% include image.html url="../přílohy/články/uprchlíci-v-datech/images/scatter3.svg" description="Srovnání počtu Ukrajinců a Rusů žijících v jednotlivých okresech ČR s počty ukrajinských válečných uprchlíků v těchto okresech (přepočteno na počet obyvatel). Velikost bodů odpovídá počtu válečných uprchlíků, barva potom rozdělení západní Čechy, zbytek Čech a Morava a Slezsko." %}

## Další užití
V tomto článku jsme se zaměřili na aktuální otázku válečných uprchlíků z Ukrajiny. Ale už v průběhu analýzy bylo vidět, že většina částí našeho postupu by našla použití i v mnoha jiných analýzách.

Typicky jde o propojení 
- populačních dat z ČSÚ na různých geografických úrovních (obce, ORP, okresy, kraje, apod.) nebo dle pohlaví a věku (věk byl např. velmi důležitý údaj u analýz šíření nemoci Covid-19),
- mapových podkladů poskytovaných ČÚZK v RÚIAN.

Tato data pak slouží jako základ pro nejrůznější další analýzy - válečných uprchlíků (tento článek), [hustota nebo stáří obyvatel][link_kartogram], [volební analýzy][link_volby], atd.

## Použité nástroje a zdroje
- [Libre Office Calc][link_libreoffice] - open source a zdarma
- [RAWGraphs][link_rawgraphs] - open source a zdarma
- [Kartogram ČR (choropleth, choropletová mapa)][link_kartogram]



[link_mvcr_data]: https://www.mvcr.cz/clanek/informativni-pocty-obyvatel-v-obcich.aspx "Počty osob s uděleným pobytovým oprávněním v souvislosti s válkou na Ukrajině"
[link_csu_2020]: /datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F00025593%2F1e6e7cbf1d5791e93de9fc3e46b80413 "Cizinci podle státního občanství, věku a pohlaví - rok 2020"
[link_csu_okresy]: /datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F00025593%2Fa129a5408e8e5fd99497e9a22c39775e "Obyvatelstvo podle pětiletých věkových skupin a pohlaví v krajích a okresech"
[link_ruian]: /datová-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2F00025712%2Fe0fe186c71d535aeb8effc5e212364ae "RUIAN Stát - SHP"
[link_kartogram]: /články/kartogram-choropleth "Kartogram ČR (choropleth, choropletová mapa)"
[link_volby]: /články/mapa-s-v%C3%BDsledky-voleb-po-okrsc%C3%ADch "Mapa s výsledky voleb po okrscích"
[link_rawgraphs]: https://app.rawgraphs.io/ "RAWGraphs"
[link_libreoffice]: https://www.libreoffice.org/ "LibreOffice"
