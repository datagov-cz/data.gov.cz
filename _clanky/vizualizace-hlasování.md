---
layout: post
detail: true
title: Vizualizace hlasování
ref: Hlasování
lang: cs
image: ../attachments/články/vizualizace-hlasovani/images/chart_1.png
author: michal_škop
date: 2020-03-26 03:14:15
---
Přehledné zobrazení výsledku hlasování je užitečné pro novináře a jejich čtenáře, pro politiky nebo pro nejrůznější lobby.

<!--more-->
### Úvod
_Rychlý odkaz: <a href="https://michalskop.gitlab.io/votings_vue/" target="_blank">Demo aplikace</a>_

Poslankyně Olga Richterová [dala na Instagram obrázek tabulky výsledku hlasování][link_instagram]. Je to tabulka, která je _vlevo dole_ u každého hlasování v Poslanecké sněmovně (konkrétně toto hlasování je [zde][link_psp_hlasovani]).

{% include image.html url="../attachments/články/vizualizace-hlasovani/images/iphone_tabulka.png" description="Tabulka jednoho výsledku hlasování na Instagramu" %}

Ovšem ukázat _hezky přehledně_ výsledek hlasování je docela užitečná věc nejen pro poslankyni. Může to být pro novináře ze Sněmovny, může to být na obci, může to být prostě leckde.

Abychom neměli jenom takovou tabulku (i když díky i za ní), koukneme, jak to dělají ti nejlepší a zkusíme uvařit zobrazení výsledků hlasování podle [Guardianu][link_guardian]. Naším cílem bude vytvořit obrázek pro Instagram, na Facebook, na Twitter.

Naším cílem bude takovýto obrázek:

{% include image.html url="../attachments/články/vizualizace-hlasovani/images/chart_1.png" description="Vizualizace jednoho výsledku hlasování" %}

## Data
### Běžně dostupné suroviny
- [Otevřená data z hlasování z Národního katalogu otevřených dat][link_nkod_hlasovani]

### Suroviny, které musíme trochu hledat
- [Hlasování a otevřená data ze Sněmovny][link_psp_opendata]
- [Barvy pro politické strany][link_barvy]
- [Některá starší hlasování z obcí][link_obce]

## Postup
### Příprava dat - standardizace
V katalogu otevřených dat zjistíte, že zas tak moc těch hlasování tam není. A už vůbec ne aktuálních. Ale spousta - alespoň těch větších - obcí dneska ta data má z hlasovacího zařízení, jenom je nedává jako otevřená ven. Takže pokud vás zajímá nějaká konkrétní obec, zkuste to napřímo se zeptat na radnici (nebo třeba pomocí [formuláře přes infozákon][link_infoprovsechny]).

Pokud se ale koukneme na to, co máme k dispozici - starší Prahu 6, Hradec Králové, Děčín z Katalogu otevřených dat nebo další odjinud (Sněmovnu, z Hlasovali.cz) - viďíme, že všechna ta hlasování mají zcela jiný formát. Takže prvně si je převedeme do jednotného formátu, abychom je mohli snadno použít.

K tomu si budeme muset ještě dodat pár věcí - barvu strany, aby graf byl co nejpřehlednější, nebo `requirement`, tj. jak se výsledek hlasování počítá. Taky si u stran přidáme `abbreviation`, tedy zkratku strany kvůli legendě. Náš soubor by měl nakonce vypadat takto v JSONu:
```JSON
{
    "motion": {
        "name": "Prodej budovy základní školy "
    },
    "end_date": "2015-12-09",
    "requirement": "Nadpoloviční většina všech členů",
    "voters": [
        {
            "voter": {
                "name": "Škop Petr"
            },
            "group": {
                "name": "Nezávislí pro Plasko",
                "abbreviation": "NzP",
                "color": "#a7f63d"
            },
            "option": "no"
        },
        ... atd. (další zastupitelé nebo poslanci) ...
    ]
}
```

Tohle je trochu otravná práce, tak pro inspiraci, jak se na to dá jít:
- Praha 6: nejprve si z open dat v XML udělat [seznam zastupitelů][link_praha6_seznam] a ručně doplnit strany (v těch XML nejsou), potom z vybraného hlasování se udělá [tabulka][link_praha6_tabulka] a z tabulky (a z tabulky [barev stran][link_barvy]) už [výsledný JSON][link_praha6_json]
- Brno, Brno-střed nebo Plasy: tato data jsou z [hlasovali.cz][link_obce], kde jsou v tabulce (nakopíruje se to z webu do tabulky a doplní hlavička, např. [Brno][link_brno_csv]). A to se potom (pomocí [skriptu][link_csv2json] převede to [výsledného JSONu][link_brno_json])
- Sněmovna je trochu složitější. Nejprve [stáhneme a rozbalíme data][link_psp_downloader], potom [vytáhneme hlasy][link_psp_extract]. Trochu si ušetříme práci tím, že info o aktuálních poslancích si stáhneme z [Napište jim!][link_napistejim]. Potom si [vytvoříme datapackage][link_psp_create]. A nakonec zase pomocí [posledního skriptu][link_psp_createjson] dostaneme kýžený [JSON][link_psp_json]. Nesmíme zapomenout taky správně nastavit `requirement`, který může být ve Sněmovně různý (ústavní hlasování, běžné, atd.)

### Grafy, obrázky
Grafy si vytvoříme pomocí Vue.js v SVG. V takovém případě se vcelku automaticky nabízí použít [D3.js][link_d3], ale tady chceme jenom čtverečky a zvládnem to i přímo v Javascriptu s pomocí toho Vue.js, D3 by tady byl zbytečný overkill.

Nejprve si [přetrasformujeme data, jak potřebujeme][link_wrapper](../attachments/články/vizualizace-hlasovani/src/components/Wrapper.vue) (na 2 až 3 skupiny). A tuty přetransformovaný data [vykreslíme do SVG](../attachments/články/vizualizace-hlasovani/src/components/Grid.vue)

Tohle rozdělení na 2 kroky je dobré proto, že ze stejných přetransformovaných dat můžeme snadno udělat ještě další graf:

{% include image.html url="../attachments/články/vizualizace-hlasovani/images/chart_2.png" description="Malá vizualizace jednoho výsledku hlasování" %}

Můžeme také využít reaktivity Vue.js a vytvořit si [CELOU MINIAPLIKACI][link_app]. Můžeme si tam snadno měnit velikosti všecho na grafu a taky měnit rovnou i samotná data.

Do ní ještě zabudujeme tlačítko, které pomocí Canvg vygeneruje z vektorového SVG obrázek-bitmapu v PNG. A můžeme ho konečně dát na všechny sociální sítě ❤.

## Výsledek

A závěrečné srovnání - stejné ústavní hlasování, kde byla potřeba 120 hlasů, vlevo pomocí tabulky z webu Sněmovny, vpravo co jsme z toho ukuchtili:

{% include image.html url="../attachments/články/vizualizace-hlasovani/images/iphone_comparison.png" description="Srovnání vizualizace jednoho výsledku hlasování na psp.cz a dle zde popsaného postupu." %}

(A jen poznámka na závěr: `zdržet se` má na výsledek hlasování úplně stejný vliv jako `hlasovat ne`. U takovýchto ústavních hlasování dokonce i neučást je stejná jako `ne` - není to prostě `podpora návrhu`)

## Další užití

Obdobně lze vyzualizovat nejrůznější hlasování: z jiných parlamentů, ze zastupitelstev, apod. Jako např. zde ze _zastupitelstva města Plasy_:

{% include image.html url="../attachments/články/vizualizace-hlasovani/images/chart_plasy.png" description="Vizualizace jednoho výsledku hlasování v zastupitelstvu města Plasy." %}


## Použité nástroje a zdroje
(ale jde to mnoha způsoby, záleží, s čím jsem zvyklí dělat)
- [Vue.js][link_vue] - v tom budeme vařit - _open source a zdarma_
- [Canvg][link_canvg] - na vykouzlení konečných obrázků - _open source a zdarma_
- [Python][link_python] - pomocí toho si zpracováváme ta surová data - _open source a zdarma_
- [Výsledná miniaplikace][link_app] - _open source a zdarma_


[link_instagram]: https://www.instagram.com/p/B5aGaDDnnQX/ "Richterová - Instagram - hlasování"
[link_psp_hlasovani]: http://www.psp.cz/sqw/hlasy.sqw?g=71631&l=cz "Hlasování v PSP"
[link_guardian]: https://www.theguardian.com/politics/ng-interactive/2019/mar/12/how-did-your-mp-vote-in-the-march-brexit-votes "Guardian - Brexit votes"
[link_ofn_hlasovani]: https://ofn.gov.cz/hlasování/draft/ "Otevřená formální norma Hlasování"
[link_nkod_hlasovani]: https://data.gov.cz/datové-sady?dotaz=Hlasov%C3%A1n%C3%AD%20zastupitelstva "Otevřená data z hlasování z Národního katalogu otevřených dat"
[link_psp_opendata]: http://www.psp.cz/sqw/hp.sqw?k=1300 "Hlasování a otevřená data ze Sněmovny"
[link_barvy]: https://github.com/michalskop/political_parties/blob/master/cz/parties.csv "Barvy pro politické strany"
[link_obce]: https://hlasovali.cz "Některá starší hlasování z obcí"
[link_infoprovsechny]: https://infoprovsechny.cz "Informace pro všechny"
[link_praha6_seznam]: https://gitlab.com/michalskop/votings_vue/-/tree/master/preparation/praha6/praha6_list.csv "Praha 6 - seznam zastupitelů"
[link_praha6_tabulka]: https://gitlab.com/michalskop/votings_vue/-/tree/master/preparation/praha6/praha6_ve.csv "Praha 6 - tabulka hlasování"
[link_praha6_json]: https://gitlab.com/michalskop/votings_vue/-/tree/master/src/data/praha6.json "Praha 6 - data"
[link_brno_csv]: https://gitlab.com/michalskop/votings_vue/-/tree/master/preparation/brno_plasy/brno.csv "Brno - data hlasování"
[link_csv2json]: https://gitlab.com/michalskop/votings_vue/-/tree/master/preparation/brno_plasy/csv2json.py "Skript CSV2JSON"
[link_brno_json]: https://gitlab.com/michalskop/votings_vue/-/tree/master/src/data/brno.json "Brno - data JSON"
[link_psp_downloader]: https://gitlab.com/michalskop/votings_vue/-/tree/master/preparation/psp/downloader.py "PSP - stahovač dat"
[link_psp_extract]: https://gitlab.com/michalskop/votings_vue/-/tree/master/preparation/psp/extract_votes.py "PSP - extraktor hlasovaní"
[link_napistejim]: https://napistejim.cz "Napište Jim!"
[link_psp_create]: https://gitlab.com/michalskop/votings_vue/-/tree/master/preparation/psp/create_datapackage.py "PSP - vytvoř datapackage"
[link_psp_createjson]: https://gitlab.com/michalskop/votings_vue/-/tree/master/preparation/psp/create_json.py "PSP - Datapackage2JSON"
[link_psp_json]: "https://gitlab.com/michalskop/votings_vue/-/tree/master/src/data/psp.json" "PSP - data JSON"
[link_d3]: https://d3js.org/ "D3"
[link_app]: https://michalskop.gitlab.io/votings_vue/ "Aplikace Vizualizace hlasování"
[link_vue]: https://vuejs.org/v2/guide/ "Vue.js"
[link_canvg]: https://github.com/canvg/canvg "Canvg.js"
[link_python]: https://docs.python.org/3/ "Python 3"
