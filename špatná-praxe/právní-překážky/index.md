---
layout: contained
title: "Přístup k otevřeným datům: Právní překážky"
ref: ŠpatnáPraxe-PrávníPřekážky
lang: cs
---

## Přístup k datům podmíněný smlouvou nebo registrací
Pokud je přístup k datům podmíněný uzavřením smlouvy či registrací, nejedná se o otevřená data.

Takto zpřístupněná data totiž typicky postrádají minimálně 3 základní vlastnosti otevřených dat:
1. Neumožňují volné sdílení a znovupoužití dat. Obsahem smlouvy bývá klauzule, která sdílení a znovupoužití zakazuje, nebo opět podmiňuje uzavřením smlouvy. Jediné přípustné omezení při znovupoužití otevřených dat však může být podmínka uvedení autora.
2. Zpřístupnění je diskriminační. Neumožňuje data užívat uživatelům, kteří nechtějí být registrováni, nebo nejsou schopni (např. kvůli jazykové bariéře) či ochotni (např. kvůli její složitosti či hrozbám sankcí) smlouvu uzavřít. Takto přístupná data neumožňují automatizované nalezení a použití dat.
3. Data typicky nejsou přímo ke stažení na webu pod přímým odkazem.

Časté argumenty pro podmínění přístupu k datům smlouvou nebo registrací:

1. Kontrola přístupu - mylný argument. Má-li se jednat o otevřená data, jejich sdílení je cílem a tedy nedává smysl ho omezovat.
2. Zabezpečení autoritativnosti dat - mylný argument. Integritu dat lze zabezpečit pomocí přístupu zabezpečeným protokolem HTTPS v kombinaci s hashováním či dokonce digitálním podepisováním souborů ke stažení.
3. Ochrana před přetížením serverů - mylný argument. Každý registrovaný uživatel, nebo skupina uživatelů, může server vytížit stejně, jako kdyby registrováni nebyli.

## Užívání licencí tam, kde není třeba
Licence je nástroj autorského práva (aplikovatelný i na zvláštní práva poskytovatele databáze), který umožňuje užití díla dalšími osobami, než je autor, nebo jiná doposud oprávněná osoba. Prostá data, tedy většina obsahu, který je poskytovaný jako otevřená data, však nepožívají žádné formy ochrany právy duševního vlastnictví a není tak přítomný žádný obsah, který by bylo možné licencovat. To platí i v případech, kdy se na dílo vztahuje výjimka úředního díla.

**Symptomy**

Použití licence, aniž by byl přítomný licencovatelný obsah, mate koncové uživatele, a navíc nemá žádnou právní relevanci.

**Řešení**

Analýza obsahu právním oddělením a licencování opravdu jen takového obsahu, který je možné licencovat.

Pokud není žádná část poskytovaného obsahu chráněna právy duševního vlastnictví, je vhodné tuto informaci uvést. Obecně je v datových sadách možné nalézt tři druhy ochrany duševního vlastnictví - autorská díla jako součast datové sady, databáze chráněná jako autorské dílo a databáze chráněná zvláštním právem pořizovatele databáze. Je vhodné výslovně uvést, že poskytovaná datová sada není zatížena žádným z těchto práv. Doporučeným způsobem je využití [registračního formuláře](https://data.gov.cz/formulář/registrace-datové-sady), v jehož [druhém kroku](https://data.gov.cz/formulář/registrace-datové-sady?krok=2) nastavíte u všech tří kategorií, že nejsou nikterak chráněny.

Ukázka správného nastavení:

{% include image.html url="../../přílohy/špatná-praxe/bez_ochrany.webp" description="Bez ochrany" %}

## Generické licence
Při licencování obsahu musí být naprosto jednoznačné, jaký obsah je licencován a za jakých podmínek. Pokud toto pravidlo není dodrženo, není jasné, jakého obsahu (děl, dat) se daná licenční ujednání týkají, což vede ke snížení právní jistoty a praktické využitelnosti otevřených dat.

První úroveň problému představuje, když není jasné, jaký obsah je licencován. Datová sada může zahrnovat až tři režimy ochrany právy duševního vlastnictví. Mohou v ní být obsažena autorskoprávně chráněná díla, samotná poskytovaná databáze může být chráněna jako dílo (pak ji nazýváme originální databáze) a nebo může být databáze chráněna zvláštním právem pořizovatele databáze. Pokud toto není jednoznačně rozlišeno, může situace vést ke snížení právní jistoty příjemců dat.

Druhá úroveň problému spočívá v tom, když není jasné, jaká licence je použita. Příkladem takové praxe je využívání odkazů jako je [https://opendefinition.org/licenses/cc-by/](https://opendefinition.org/licenses/cc-by/). Ačkoli poskytovatel, který tento odkaz použije, jedná v dobré víře, že licencuje pod CC BY, není vůbec jasné, jaké je konkrétní znění licence. Byť jde o licence z jedné „rodiny“, konkrétní podmínky se verzi od verze mohou lišit.

**Symptomy**
Generické umístění odkazu na licenci do metadat distribuce datové sady bez specifikace, k jakému obsahu se daný odkaz vztahuje.

Umístění generického odkazu na „rodinu“ licencí, bez jasného určení o kterou se jedná. Příklad: [https://opendefinition.org/licenses/cc-by/](https://opendefinition.org/licenses/cc-by/). 

**Řešení**
Přesné uvedení v metadatech distribuce datové sady, k jakému obsahu se vztahuje daná konkrétní licence. Využijte náš návod na [Stanovení podmínek užití otevřených dat](https://opendata.gov.cz/cinnost:stanoveni-podminek-uziti).

V [průvodci registrací datové sady](https://data.gov.cz/formulář/registrace-datové-sady) je toto rozdělení zaneseno. Pokud zjistíte, že vámi poskytovaná datová sada obsahuje některý z uvedených režimů ochrany, je možné přesně stanovit jak a za jakých podmínek je daná část licencována.

Příklad: Následující obrázek ukazuje situaci, kdy je poskytována datová sada, která neobsahuje autorská díla, ale samotná databáze je autorskoprávně chráněna a požívá též ochrany právy pořizovatele databáze. V tomto případě se poskytovatel dat rozhodl, že autorskoprávní ochranu bude licencovat pod licencí CC BY 4.0 a zvláštních práv pořizovatele se vzdá.

{% include image.html url="../../přílohy/špatná-praxe/různé_režimy.webp" description="Různé režimy" %}

## Užívání vlastních licenčních podmínek
Obecně platí, že každý poskytovatel dat si může stanovit vlastní podmínky, pod kterými bude data poskytovat. To může mít dvě základní podoby:
1. Licencování obsahu chráněného právy duševního vlastnictví. V takovém případě platí vše, co je obecně řečeno o licencování obsahu. Poskytovatel dat se může odchýlit od obvykle užívaných a doporučovaných licencí. Pokud však vlastní licenční ustanovení typově odpovídají známějším a obecně užívaným licencím (CC BY 4.0), silně doporučujeme použít právě více používané licence CC. Dobrým důvodem je například jejich strojová čitelnost.
2. Připojování smluvních podmínek vzhledem k přístupu a následnému užití obsahu, který není chráněn právy duševního vlastnictví. Poskytovatel dat může i v takovém případě podmínit přístup k datům nebo jejich následné užití smluvně. V takovém případě je třeba pamatovat na to, že se závazek týká jen příjemce dat a není možné skrze něj zavázat další osobu. Tento způsob stanovení podmínek silně nedoporučujeme pro jeho nesystémovost.
3. 
Pro oba případy platí, že je nezbytné pečlivě naformulovat text podmínek, aby bylo příjemcům dat jasné, jak a za jakých okolností mohou s daty nakládat.

Příkladem nevhodné formulace je např. „pravidla upravující opakované použití dokumentů poskytovatele neplatí pro dokumenty, na něž se vztahují práva duševního vlastnictví třetích stran“ – takové dokumenty by se v první řade neměly vůbec jako otevřená data v datové sadě objevit.

**Symptomy**
Nejasný význam podmínek užití, absence strojové čitelnosti, vnášení externích prvků do systému otevřených dat, přílišná až nezákonná limitace příjemce dat (např. smluvní ustanovení, které by omezovalo komerční užití dat).

Problém použití vlastních licencí je dobře viditelný, pokud se na takovou datovou sadu podíváme do NKOD. Jak ukazuje následující obrázek, aby se přijemce dat mohl seznámit s tím, o jakou licenci se jedná, musí si nejprve rozkliknout odkazy. To zásadně znesnadňuje automatické využívání dat.

{% include image.html url="../../přílohy/špatná-praxe/vlastní_licence.webp" description="Vlastní licence" %}

**Řešení**
Pro stanovení podmínek užití otevřených dat postupujte dle našeho návodu  [Stanovení podmínek užití otevřených dat](https://opendata.gov.cz/cinnost:stanoveni-podminek-uziti).

Doporučeným řešením je postupovat podle [průvodce registrací datové sady](https://data.gov.cz/formulář/registrace-datové-sady), a využít předpřipravených záznamů standardních licencí, které nabízí.

{% include image.html url="../../přílohy/špatná-praxe/různé_režimy.webp" description="Různé režimy" %}

## Vzdání se odpovědnosti
V podmínkách užití se může objevit formulace vzdání se odpovědnosti za škodu způsobenou užíváním dat. Poskytovatel dat se ovšem nemůže vzdát absolutně vší odpovědnosti za svá data. Příkladem je situace, kdy poskytovatel data poskytuje na základě zákonné povinnosti. V takovém případě se jedná o úřední úkon a je presumována jeho správnost. Pokud by vznikla škoda z důvodu chyby v datové sadě, nesl by za ni poskytovatel dat odpovědnost ve smyslu [zákona č. 82/1998 Sb., o odpovědnosti za škodu způsobenou při výkonu veřejné moci rozhodnutím nebo nesprávným úředním postupem](https://www.e-sbirka.cz/sb/1998/82/1998-05-15).

**Symptomy**
Jednotná stránka obsahující text vzdání se odpovědnosti, na kterou odkazují metadata všech distribucí poskytovatele. Takový stav může způsobit zmatení koncového uživatele a uvést jej v omyl.

**Řešení**
Před uvedením textu, kterým se poskytovatel dat vzdává odpovědnosti je třeba zpracovat právní analýzu a vyhodnotit, zda je možné se odpovědnosti plně vzdát. Pokud tomu tak v některých případech není, podmínky užití tento fakt musí reflektovat.

Je třeba ale zdůraznit, že vzdání se odpovědnosti, krom toho že v naprosté většině případů není možné, představuje nestandardní krok, protože vyžaduje vytvoření vlastních podmínek užití. To samo o sobě není doporučený postup, protože výrazně znesnadňuje automatické zpracování otevřených dat.

## Chybné užití licencí Creative Commons
Licence Creative Commons je třeba užívat ve správných případech a korektním způsobem.

Licence je možné užít jen v případech, že je poskytovaný nějaký autorskoprávně chráněný obsah, nebo databáze chráněná zvláštními právy pořizovatele databáze. V případech, kdy není žádný obsah, který by bylo možné licencovat doložka CC nikoho a nijak nezavazuje.

Použít licence Creative Commons je možné také jen v případě, že poskytovatel dat má oprávnění tímto způsobem s dílem nakládat (např. je v dostatečném rozsahu oprávněn udělovat podlicence, nebo se jedná o jeho zaměstnanecká díla).

Chyby se stávají rovněž ve formulaci licenční doložky. Korektní vyjádření jsou například:
  * Pro dílo: Pokud datová sada obsahuje typově jedno dílo (jde například o mapový podklad) je možné licencovat přímo. Dílo je jednoznačně identifikováno distribucí, jméno autora je uvedeno v položce “Autor” a odkaz na konkrétní licenci je uveden v položce “Licence”.
  * Pro autorskoprávně chráněnou databázi: Dílo (databáze) je jednoznačně identifikováno distribucí, název organizace nebo jméno autora je uvedeno v položce “Autor” a odkaz na konkrétní licenci je uveden v položce “Licence”.
  * Pro databázi chráněnou zvláštními právy pořizovatele databáze: Databáze a pořizovatel databáze jsou již jednoznačně identifikováni distribucí a odkaz na konkrétní licenci je uveden v položce “Licence”, např. [https://creativecommons.org/publicdomain/zero/1.0/](https://creativecommons.org/publicdomain/zero/1.0/).
Je rovněž nutné odkazovat na konkrétní vyjádření vybrané licence. Ideální je odkazovat na pro lidi srozumitelná zkrácená znění licencí (tzv. „deed“). Odkaz na náhodné stránky (např. [http://www.opendefinition.org/licenses/cc-by-sa](http://www.opendefinition.org/licenses/cc-by-s)), které neobsahují konkrétní licenci není korektní.

**Symptomy**
Různé chyby při aplikaci licencí Creative Commons.

**Řešení**
Vyvarovat se chyb a použít náš návod [Stanovení podmínek užití otevřených dat](https://opendata.gov.cz/cinnost:stanoveni-podminek-uziti).


