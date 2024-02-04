---
layout: post
detail: true
title: "Proč a jak modelovat legislativu"
ref: proč-a-jak-modelovat-legislativu
lang: cs
image: ../přílohy/články/proč-a-jak-modelovat-legislativu/images/main.webp
author: Michal Med
date: 2022-07-26 07:00:00 +02:00
---

Aktuální znění [zákona č. 106/1999 Sb., o svobodném přístupu k informacím][link_106_1999], definuje otevřená data podle odstavce (11) paragrafu 3 jako informace zveřejňované způsobem umožňujícím dálkový přístup v otevřeném a strojově čitelném formátu, jejichž způsob ani účel následného využití není omezen a které jsou evidovány v národním katalogu otevřených dat. Paragraf 4b stejného zákona říká, že (je-li to možné a vhodné), zveřejní povinný subjektspolu s infomracemi též metadata, která se k ní vztahují. Formát i metadata by měly co nejvíce splňovat [otevřené formální normy][link_ofn]. Otevřená formální norma je technické doporučení, které zajišťuje, že stejná data publikovaná různými poskytovateli budou interoperabilní.
<!--more-->

## Otevřené formální normy

Na stránce https://data.gov.cz/ je seznam otevřených formálních norem pro konkrétní datové sady, jedná se například o Registr práv a povinností, Pracovní místa, Nádoby na tříděný odpad, Sběrné dvory, Sportoviště, Turistické cíle nebo Úřední desky. Otevřené formální normy definují strukturu dat, tedy typy objektů, které jsou zveřejňovány, typy jejich atributů a typy vztahů mezi těmito objekty. Na následujícím obrázku je diagram otevřené formální normy Sportoviště.

{% include image.html url="../přílohy/články/proč-a-jak-modelovat-legislativu/images/sportoviště.webp" description="Diagram otevřené formální normy pro Sportoviště." %}

Diagram ukazuje typ objektu "Sportoviště" s atributy "podmínky užívání" a "provozní řád" a řadou vazeb na další typy objektů., např. "otevírací doba" propojuje sportoviště s typem objektu "časová specifikace" nebo typy vazeb "provozovatel" a "vlastník" propojují sportoviště s typy objektů "člověk či osoba".

Poskytovatel dat má podle zákona "co nejvíce splňovat otevřenou formální normu", což v praxi udělá tak, že poskytovatel k datům dodá i mapování ve struktuře jím poskytovaných dat na strukturu danou otevřenou formálním normou (například prostřednictvím kontextu ve formátu JSON-LD).

<!-- proč -->
## Sémantický slovník pojmů

Nabízí se, aby pojmy používané v otevřených formálních normách byly jasně a srozumitelně definované, aby při mapování nedocházelo k nejednoznačnostem. K těm dochází především kvůli tomu, že pojmy se stejným názvem jsou používány v různých významech. Pro zachycení pojmů v různých významech je využíván [Sémantický slovník pojmů][link_ssp]. Ten sdružuje slovníky na různých úrovních, od základního slovníku (Z-SGov -- obsahuje především pojmy pro popis ostatních slovníků) přes slovník veřejné správy (V-SGov), který obsahuje pojmy používané napříč veřejnou správu až po slovníky popisující konkrétní agendy, datové sady nebo dokumenty, včetně těch legislativních. Pojmy ze sémantického slovníku pojmů jsou využívány v otevřených formálních normách a ty, které nejsou definovány v jiných slovnících jsou s publikací otevřené formální normy vloženy do sémantického slovníku pojmů jako součást slovníku konkrétní otevřené formální normy. Jedná se o tzv. generické slovníky a do budoucna se počítá s tím, že všechny tyto pojmy by měly být přesunuty do agedových nebo legislativních slovníků.

Příkladem nejednoznačně definovaného pojmu v české legislatvě může být pojem "budova". Ta je v zákoně č. 256/2013 Sb., o katastru nemovistostí definována jako _"nadzemní stavba spojená se zemí pevným základem, která je prostorově soustředěna a navenek převážně uzavřena obvodovými stěnami a střešní konstrukcí"_, ale v zákoně č. 406/2000 Sb., o hospodaření energií je definována jako _"nadzemní stavba a její podzemní části, prostorově soustředěná a navenek převážně uzavřená obvodovými stěnami a střešní konstrukcí, v níž se používá energie k úpravě vnitřního prostředí za účelem vytápění nebo chlazení"_. Význam budovy se v kontextu obou zákonů liší. Poskytovatel dat, například obec nebo městksá část, která chce zveřejnit datovou sadu s budovami, může mít problém. Jak jsme si vysvětlili výše, datové sady by měly být publikovány v co největším souladu s otevřenýžmi formálními normami, přeneseně tedy můžeme říct, že by objekt datové sady měl být popsán pomocí pojmu ze sémantického slovníku pojmů. V případě použití klíčového slova "budova" ale není jasné, zda se jedná o budovu ve významu zákona o katastru nemovitostí, zákona o hospodaření energií, nebo dokonce v nějakém jiném významu. Přitom je tato informace zásadní pro další práci s touto datovou sadou -- autobusové zastávky, velké skladovací prostory nebo některé chaty jsou budovami podle katastrálního zákona, ale ne podle zákona hospodaření energií a pro analýzy o dodávkách energie nebo její spotřebě jsou bezpředmětné.

K jednoznačnému rozlišení kontextu budovy potřebujeme vytvořit otevřenou formální normu, která bude reflektovat typ budovy podle konkrétního využití, a tedy využívat pojem "budova" v kontextu konkrétního zákona. K vytvoření takové otevřené formální normy je potřeba vytvořit (nebo přepoužít již vytvořené) slovníky legislativních dokumentů a vytvořit konceptuální model pro konkrétní oblast využití datových sad.

<!-- jak? -->
## Modelování konceptuálních modelů pro sémantický slovník pojmů
Pro vytváření slovníků byla vytvořena tzv. [Výrobní linka konceptuálních modelů][link_výrobní_linka]. Na adrese https://onto.fel.cvut.cz/modelujeme se nachází demo této výrobní linky pro uživatelské testování.

| Uživatelské jméno | <code>testuser@email.com</code> |
| heslo | <code>testuser</code> |

Součástí výrobní linky je několik nástrojů, které umožňují tvorbu a editaci konceptuálního modelu jako slovníku, jehož součástí je glosář (tezaurus) a model. Glosář je seznam pojmů slovníku se základní hierarchií (nadřazené a podřazené pojmy) s jednoznačnou (jednou) definicí a jejím zdrojem (např. paragraf 2, odstavec 1, písmeno f zákona č. 183/2006 Sb.) a s možností volně definovat vztahy k dalším pojmům. Pojmy jsou vztaženy k jednomu slovníku a jsou užívány v kontextu dném tímto slovníkem. Model tyto pojmy formalizuje za pomoci formálního jazyka OntoUML založeném na ontologii UFO (Unified Foundational Ontology) a specifikuje i vztahy mezi nimi, včetně typu vztahů a jejich kardinality.

{% include image.html url="../přílohy/články/proč-a-jak-modelovat-legislativu/images/showit.webp" description="Ukázka zobrazení pojmů se stejným názvem, ale s různým významem v prohlížečce sémantického slovníku pojmů ShowIt." %}

Hotový slovník, tedy hotový tezaurus s formalizovanými pojmy a vztahy mezi nimi, je poté prostřednictvím výrobní linky publikován a stává se součástí sémantického slovníku pojmů a je viditelný v [prohlížečce sémantického slovníku pojmů ShowIt][link_showit]. Prohlížečka umožňuje rozlišovat mezi pojmy se stejným názvem a různým významem, jak je vidět na obrázku výše. Pojmy sémantického slovníku pojmů mohou být použity k tvorbě otevřených formálních norem, v souladu s nimi budou publikována další data. Takto publikovaná data jsou přímo navázána na pojmy a tím jsou zasazena do kontextu.

<!-- k čemu dalšímu je to dobré? -->
## Využití konceptuálních modelů
Pokud jsou data publikována v souladu s otevřenými formálními normami, mohou uživatelé tato data vyhledávat podle jejich přesného významu. Uživatelé i další poskytovatelé vidí, s jakými daty jsou tato data propojena a mohou je tak využívat. Data mohou být sbírána v takové struktuře, která nejlépe odpovídá jejich významu a kontextu. Vývojáři mohou vyvíjet aplikace pro data v různých formátech od různých poskytovatelů, pokud jsou schopni strojově rozpoznat význam těchto dat. A to je možné díky otevřeným formálním normám a sémantickému slovníku pojmů. A konečně, konceptuální model může posloužit i jako silný nástroj k uspořádání názvosloví v rámci firmy nebo instituce a k revizi interních nařízení nebo legislativy.


<!-- konec -->

## Použité nástroje a zdroje
- [Národní katalog otevřených dat][link_nkod]
- [Otevřené formální normy][link_ofn]
- [Sémantický slovník pojmů][link_ssp]
- [Výrobní linka konceptuálních modelů - demo][link_výrobní_linka_demo]
- [Výrobní linka konceptuálních modelů][link_výrobní_linka]
- [Prohlížečka sémantického slovníku pojmů ShowIt][link_showit]


[link_106_1999]: https://www.zakonyprolidi.cz/cs/1999-106 "Zákon č. 106/1999 Sb., o svobodném přístupu k informacím"
[link_ofn]: https://data.gov.cz/ofn/ "Otevřené formální normy"
[link_ssp]: https://github.com/opendata-mvcr/ssp "Sémantický slovník pojmů"
[link_výrobní_linka]: https://slovník.gov.cz/modelujeme "Výrobní linka konceptuálních modelů"
[link_výrobní_linka_demo]: https://onto.fel.cvut.cz/modelujeme "Demo verze výrobní linky konceptuálních modelů"
[link_showit]: https://slovník.gov.cz/prohlížíme/ "Prohlížečka sémantického slovníku pojmů ShowIt"
[link_nkod]: https://data.gov.cz/datasets "Národní katalog otevřených dat"
