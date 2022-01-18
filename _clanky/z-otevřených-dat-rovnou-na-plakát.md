---
layout: post
detail: true
title: Z otevřených dat rovnou na plakát
ref: z-otevřených-dat-rovnou-na-plakát
lang: cs
image: ../přílohy/články/z-otevřených-dat-rovnou-na-plakát/images/main.webp
author: michal_škop
date: 2021-05-04 07:00:00 +01:00
---
Jak kvalitně, rychle a levně informovat občany nebo turisty? Díky otevřeným datům si lze usnadnit práci. Jak přesně to funguje, předvádí ukázková aplikace pro vedení obcí na přípravu letáků o turistických cílech a sportovištích v obci.

<!--more-->
Jedním z problémů u obcí při otevírání dat je nedostatečná motivace jejich správců. Lidé ve vedení obcí často nevidí přínos otevírání vlastních dat - mnohdy argumentují tím, že jim to přinese jen víc práce. Zároveň je pro ně leckdy obtížné rozlišit samotná otevřená data od aplikace, která s těmito daty pracuje.

Na pomoc s překonáváním těchto problémů vznikla ukázková aplikace, která demonstruje dopad otevření dat přímo do off-line prostředí, do „reálného světa“.

Mnoho obcí či regionů si nechává tisknout informačně-propagační letáky – ať již pro turisty nebo pro vlastní občany. Je to tedy věc, na kterou jsou lidé z vedení obcí zvyklí. Principiálně jde o činnost, která se neustále opakuje - typicky se nemusí měnit design letáku, mění se ale vždy jeho obsah. Jinými slovy: mění se data.

Pokud budou obce tato data připravovat podle určitých společných pravidel, tzv. [otevřených formálních norem][link_klimek], a publikovat je v [Národním katalogu otevřených dat][link_nkod], mohou být tato data jednoduše využita pro nejrůznější aplikace a webové služby. Naše aplikace slouží jako ukázka praktického využití správně publikovaných dat – zatím v testovacím prostředí.

Aplikace ukazuje princip, kdy se dokonce jedno obecné řešení může použít v mnoha obcích. Stačí, když obce dodají data – ve standardním formátu a standardně je zaregistrují v Národním katalogu otevřených dat. Při využití aplikace si poté mohou vygenerovat leták ve formátu pdf pro tisk (v několika barevných variantách): s turistickými cíly, s přehledem sportovišť pro vlastní občany.

{% include image.html url="../přílohy/články/z-otevřených-dat-rovnou-na-plakát/images/sport.webp" description="Vzhled ukázkové aplikace na vygenerování pdf pro tisk letáků se seznamem sportovišť." %}

### Použitá data
Kde vzít data? Pro naši ukázkovou aplikaci čerpáme z několika zdrojů:
- [ukázková data o turistických cílech (brněnský Špilberk) z Otevřené formální normy pro Turistické cíle][link_ofn_spilberk] 
- [data o sportovištích na Praze 11 z Národního katalogu otevřených dat][link_nkod_praha11]
- ukázková data přímo vytvořená pro tuto aplikaci 

Aplikace dále umožňuje přidat vlastní data, např. s použitím Národního katalogu otevřených dat (sportoviště nebo turistické cíle) 
- [NKOD: Turistické cíle][link_nkod_turisticke_cile]
- [NKOD: Sportoviště][link_nkod_sportoviste]

### Postup zpracování
Ukázková aplikace má předem nastavených několik vybraných turistických cílů a sportovišť. Zároveň ale také umožňuje nahrát vlastní data, takže je možné si rovnou vyzkoušet, jak to bude vypadat na míru konkrétní obci. Stačí data zveřejnit v patřičném formátu, v tomto případě `json`.

Ten musí odpovídat předepsaným standardům, aby vše bez potíží fungovalo. Vytvořit potřebný formát je snadné [podle návodu][link_ofn_priklady].

Pro pomoc či konzultaci je možné obrátit se na [tým otevřených dat MV ČR][link_kontakt_mvcr].

Co se souborem dál? URL adresa aplikace pak výsledný soubor s daty jednoduše načte tím, že se do parametru `dataurl` vloží URL konkrétního souboru. 

Na závěr je doporučeno dát o svém souboru ke stažení vědět. K tomu slouží Národní katalog otevřených dat (NKOD).


#### Ukázky
##### Vlastní seznam turistických cílů nebo turistický cíl:

- [https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https://oha03.mvcr.gov.cz/soubory/více-cílů.jsonld][link_app_cile] (Ukázkový seznam turistických cílů)
- [https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https://michalskop.gitlab.io/ofnapp/data/skala.json][link_app_skala] (Ukázka jednoho turistického cíle)

##### Přímé zobrazení turistického cíle:
- [https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https://oha03.mvcr.gov.cz/soubory/více-cílů.jsonld&iri=https://www.spilberk.cz/Vícecílový2][link_app_spilberk] (Ukázka jednoho vybraného turistického cíle ze seznamu)

###### Parametry URL
- `dataurl` - URL souboru JSON s jedním nebo více turistickými cíli
- `iri` - IRI prvku na zobrazení

#### Interaktivní úpravy designu
Aplikace umožňuje také přímou editaci a přidávání vlastních textů nebo fotek, pokud např. některé informace nejsou v originálních datech.

{% include image.html url="../přílohy/články/z-otevřených-dat-rovnou-na-plakát/images/details.webp" description="Interaktivní úpravy plakátku" %}

### Výsledek
Ukázková aplikace běží na adresách: 
- [https://opendata-mvcr.github.io/app-ofn-plakaty/#/][link_app] (Turistické cíle)
- [https://opendata-mvcr.github.io/app-ofn-plakaty/#/sport][link_app_sport] (Sportoviště)

Její zdrojový kód a popis je dostupný jako [open source na GitHubu][link_github].

{% include image.html url="../přílohy/články/z-otevřených-dat-rovnou-na-plakát/images/double.webp" description="Ukázkové letáky ve dvou různých barevných variantách vygenerovaných ze stejných otevřených dat - zajímavý turistický cíl v okolí." %}

### Další užití
Stejná data se ale potom mohou použít mnoha dalšími způsoby, což např. popisuje tento článek [Otevřená data a otevřené formální normy][link_klimek]

Samotná aplikace slouží jako ukázka, jak lze postupovat při využívání [otevřených formálních norem][link_ofn] a dat z [Národního katalogu otevřených dat][link_nkod].

### Použité nástroje a zdroje
#### Nástroje
- [Framework Nuxt.js][link_nuxtjs] - open source a zdarma, použitý jako základ aplikace
- [html2canvas][link_html2canvas] - open source a zdarma, vygenerování obrázku z aktuálně nastaveného plakátku v html
- [jsPDF][link_jspdf] - open source a zdarma, vygenerování PDF z obrázku
- [Leaflet][link_leaflet] - open source a zdarma, mapa na plakátku

#### Zdroje
- [Otevřená formální norma Turistické cíle][link_ofn_spilberk]
- [Otevřená formální norma Sportoviště][link_ofn_sportoviste]
- [Katalog otevřených dat - Turistické cíle][link_nkod_turisticke_cile]
- [Katalog otevřených dat - Sportoviště][link_nkod_sportoviste] 


[link_nkod_praha11]: https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2Fhttp---opendata.praha.eu-api-3-action-package_show-id-seznam-verejne-pristupnych-workout-a-fitness-hrist-na-uzemi-mc-praha-11 "Národní katalog otevřených dat: data o sportovištích na Praze 11"
[link_ofn_spilberk]: https://ofn.gov.cz/turistick%C3%A9-c%C3%ADle/2020-07-01/ "Otevřená formální norma pro Turistické cíle"
[link_nkod_sportoviste]: https://data.gov.cz/datov%C3%A9-sady?dotaz=Sportovi%C5%A1t%C4%9B "Národní katalog otevřených dat: Sportoviště"
[link_nkod_turisticke_cile]: https://data.gov.cz/datov%C3%A9-sady?dotaz=Turistick%C3%A9%20c%C3%ADle  "Národní katalog otevřených dat: Turistické cíle"
[link_app]: https://opendata-mvcr.github.io/app-ofn-plakaty/ "Ukázková aplikace k Otevřeným formálním normám: Turistické cíle"
[link_app_sport]: https://opendata-mvcr.github.io/app-ofn-plakaty/#/sport "Ukázková aplikace k Otevřeným formálním normám: Sportoviště"
[link_github]: https://github.com/opendata-mvcr/app-ofn-plakaty/ "Zdrojový kód a popis: Ukázková aplikace k Otevřeným formálním normám"
[link_klimek]: https://data.gov.cz/%C4%8Dl%C3%A1nky/otev%C5%99en%C3%A9-form%C3%A1ln%C3%AD-normy-01-%C3%BAvod "Otevřená data a otevřené formální normy"
[link_nuxtjs]: https://nuxtjs.org/ "Framework Nuxt.js"
[link_html2canvas]: https://html2canvas.hertzen.com/ "html2canvas"
[link_jspdf]: https://rawgit.com/MrRio/jsPDF/master/docs/index.html "jsPDF"
[link_leaflet]: https://leafletjs.com/ "Leaflet"
[link_ofn_sportoviste]: https://ofn.gov.cz/sportovi%C5%A1t%C4%9B/2020-07-01/ "Otevřená formální norma Sportoviště"
[link_app_cile]: https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Foha03.mvcr.gov.cz%2Fsoubory%2Fv%C3%ADce-c%C3%ADl%C5%AF.jsonld "Ukázková aplikace k Otevřeným formálním normám: Seznam turistických cílů"
[link_app_skala]: https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Fmichalskop.gitlab.io%2Fofnapp%2Fdata%2Fskala.json "Ukázková aplikace k Otevřeným formálním normám: Vybraný turistický cíl"
[link_app_spilberk]: https://opendata-mvcr.github.io/app-ofn-plakaty/#/?dataurl=https%3A%2F%2Foha03.mvcr.gov.cz%2Fsoubory%2Fv%C3%ADce-c%C3%ADl%C5%AF.jsonld&iri=https%3A%2F%2Fwww.spilberk.cz%2FV%C3%ADcec%C3%ADlov%C3%BD2 "Ukázková aplikace k Otevřeným formálním normám: Vybraný turistický cíl ze seznamu"
[link_nkod]: https://data.gov.cz/datov%C3%A9-sady "Národní katalog otevřených dat"
[link_ofn_priklady]: https://ofn.gov.cz/turistick%C3%A9-c%C3%ADle/2020-07-01/#p%C5%99%C3%ADklady "Otevřená formální norma Turistické cíle: Příklady" 
[link_kontakt_mvcr]: mailto:otevrenadata@mvcr.cz "Open data team MV ČR"
[link_ofn]: https://ofn.gov.cz/ "Otevřené formální normy" 