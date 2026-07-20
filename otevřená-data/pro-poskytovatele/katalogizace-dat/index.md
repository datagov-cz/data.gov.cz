---
layout: poskytovatelé-otevřená-data-level-2
title: Katalogizace dat
ref: ProPoskytovatele-OtevřenáData-KatalogizaceDat
lang: cs
---

Zásadní vlastností otevřených dat je, že jsou veřejností snadno dohledatelná. 
Katalog otevřených dat je prostředek, který dohledatelnost významně usnadňuje.
Je důležité, aby všechny datové sady poskytovatele byly katalogizovány v alespoň jednom datovém katalogu.

Povinná pro každého Poskytovatele dat je katalogizace v [Národním katalogu otevřených dat (NKOD)](https://data.gov.cz/datové-sady), který provozuje Digitální a informační agentura.

Poskytovatel může na svých WWW stránkách provozovat svůj vlastní lokální katalog otevřených dat, ve kterém bude katalogizovat svoje datové sady.
Pokud navíc lokální katalog splňuje technické parametry popsané v těchto standardech, nemusí poskytovatel předávat záznamy do NKOD ručně.
Je možné zajistit automatickou synchronizaci obsahu lokálního katalogu s NKOD.

Při rozhodování o způsobu katalogizace doporučujeme spolupracovat s IT specialistou a postupovat podle [Otevřené formální normy pro rozhraní katalogů otevřených dat](https://ofn.gov.cz/dcat-ap-cz-rozhraní-katalogů-otevřených-dat/2024-05-28/) a podle následujících kritérií:
* Pokud poskytujete jen malé množství datových sad (do 10), zvolte možnost přímé katalogizace datovch sad přímo v Národním katalogu otevřených dat (NKOD).
* Pokud poskytujete více datových sad, provozujte vlastní lokální katalog otevřených dat.
  
## Přímá katalogizace datových sad
V případě, že poskytovatel neprovozuje vlastní lokální katalog, využívá pro katalogizaci datových sad přímo NKOD.
Při práci postupuje podle toho, zda se jedná o katalogizaci nové sady nebo úpravu existujícího záznamu datové sady.

Správa záznamu datové sady v NKOD je prováděna zasíláním registračních dokumentů ve formě samostatné přílohy datové zprávy s předmětem „NKOD“ do datové schránky s identifikátorem m3hp53v „Národní katalog otevřených dat (NKOD)“ spravované Digitální a informační agenturou.
Tyto dokumenty lze získat pomocí [formulářů](https://data.gov.cz/formulář/registrace-datové-sady) dostupných v NKOD přes odkaz „Registrovat novou datovou sadu“ v patičce NKOD, či pomocí symbolu editace či mazání na detailu datové sady.
Dokumenty jsou ve formátu JSON-LD (s příponou .jsonld.txt kvůli omezení na typy příloh datových zpráv) a řídí se [Otevřenou formální normou Rozhraní katalogů otevřených dat](https://ofn.gov.cz/dcat-ap-cz-rozhraní-katalogů-otevřených-dat/2024-05-28/). 
Zpracování došlých zpráv na straně NKOD probíhá jednou denně, z pravidla v noci. 
**Každý dokument zašlete jako jedinou přílohu samostatné datové zprávy, jinak bude zpráva ignorována.**

### Katalogizace nové datové sady
Postup:
1. Na [https://data.gov.cz/](https://data.gov.cz/) kliknout v patičce na „Registrovat novou datovou sadu“;
2. V následujících krocích pro datovou sadu a distribuce vyplnit záznam o datové sadě připravený Kurátorem dat;
3. V posledním kroku formuláře je třeba výsledný dokument poslat datovou schránkou (například přes spisovou službu Poskytovatele) jako přílohu datové zprávy s předmětem „NKOD“ a adresovat ji na datovou schránku Národní katalog otevřených dat (NKOD) s ID m3hp53v.
   
### Úprava záznamu o datové sadě
Pokud poskytovatel používá pro katalogizaci datových sad NKOD a datovou sadu upravuje, tj. v NKOD již pro ní existuje záznam, postupuje takto:
1. V Národním katalogu otevřených dat nalézt záznam pro upravovanou datovou sadu a v jejím detailu kliknout na symbol editace vedle jejího názvu;
2. V následujících krocích pro datovou sadu a distribuce upravit záznam o datové sadě připravený Kurátorem dat;
3. V posledním kroku formuláře je třeba výsledný dokument poslat datovou schránkou (například přes spisovou službu Poskytovatele) jako přílohu datové zprávy s předmětem „NKOD“ a adresovat ji na datovou schránku Národní katalog otevřených dat (NKOD) s ID m3hp53v.
   
### Zrušení záznamu o datové sadě
V případě rušení datové sady se postupuje takto:
1. V Národním katalogu otevřených dat nalézt datovou sadu ke zrušení a v jejím detailu kliknout na symbol smazání vedle jejího názvu;
2. V posledním kroku formuláře je třeba výsledný dokument poslat datovou schránkou (například přes spisovou službu Poskytovatele) jako přílohu datové zprávy s předmětem „NKOD“ a adresovat ji na datovou schránku Národní katalog otevřených dat (NKOD) s ID m3hp53v.

## Katalogizace pomocí lokálního katalogu
Pokud budete provozovat vlastní lokální katalog otevřených dat, nemusíte navíc ručně katalogizovat jednotlivé datové sady v NKOD.
Tento způsob katalogizace tak šetří agendu spojenou s posíláním datových zpráv do NKOD pro každou datovou sadu a zároveň umožňuje prezentovat data Poskytovatele v rámci jeho webové prezentace
Lokální katalog Poskytovatele se do NKOD načítá celý (všechny datové sady).
Při zrušení záznamu o registraci lokálního katalogu dojde i ke zrušení záznamů datových sad z tohoto katalogu.

Pokud jste schopni metadatové záznamy generovat podle standardu DCAT-AP a poskytovat je ve SPARQL endpointu či alespoň jako statické soubory obsahující DCAT-AP záznamy, toto je preferované řešení pro NKOD.
Stačí dodržet [Otevřenou formální normou Rozhraní katalogů otevřených dat](https://ofn.gov.cz/dcat-ap-cz-rozhraní-katalogů-otevřených-dat/2024-05-28/).
V současnosti ale neexistuje jednotné nasaditelné řešení, které by zajišťovalo i sběr metadat o datových sadách a management jejich záznamů.
To je v této variantě ponecháno na poskytovateli, který se může inspirovat například [referenční implementací LKOD](https://github.com/opendata-mvcr/lkod).

Pro registraci je nutný přístup k datové schránce Poskytovatele dat nebo možnost datovou schránkou poslat registrační soubor jako přílohu datové zprávy s předmětem „NKOD“.

Správa záznamu lokálního katalogu v NKOD je prováděna zasíláním registračních dokumentů ve formě přílohy datové zprávy s předmětem „NKOD“ do datové schránky s identifikátorem m3hp53v „Národní katalog otevřených dat (NKOD)“ spravované Digitální a informační agenturou.
Tyto dokumenty lze získat pomocí formulářů dostupných na [https://data.gov.cz/](https://data.gov.cz/) přes odkaz [Registrovat nový lokální katalog](/data.gov.cz/formulář/registrace-lokálního-katalogu), či pomocí symbolu mazání na detailu datové sady v případě mazání lokálního katalogu
Vždy zasílejte pouze jednu přílohu jednou datovou zprávou, jinak bude zpráva ignorována.
Dokumenty jsou ve formátu JSON-LD (s příponou .jsonld.txt kvůli omezení na typy příloh datových zpráv).

### Registrace lokálního katalogu
Postup registrace lokálního katalogu v NKOD je následující:
1. Otevřít [registrační formulář](/data.gov.cz/formulář/registrace-lokálního-katalogu);
2. Vyplnit všechny údaje dle popisu ve formuláři
    * Název lokálního katalogu otevřených dat (povinný atribut)
      * Tento název rozlišuje mezi jednotlivými katalogy otevřených dat dané instituce. Pokud má jeden, může to být třeba 'Katalog otevřených dat XXX'
    * Jméno a email správce katalogu (povinné atributy)
      * Jméno a email správce lokálního katalogu otevřených dat, se kterým lze komunikovat o případných problémech s katalogem. To může být třeba problém s formátem API, přístupností rozhraní, apod.
    * Typ API lokálního katalogu (povinný atribut)
      * Stanovuje typ API (rozhraní) registrovaného katalogu. Více viz [Otevřené formální norma Rozhraní katalogů otevřených dat](https://ofn.gov.cz/dcat-ap-cz-rozhraní-katalogů-otevřených-dat/2024-05-28/).
    * URL API lokálního katalogu (povinný atribut)
      * Stanovuje URL API katalogu dle [Otevřené formální norma Rozhraní katalogů otevřených dat](https://ofn.gov.cz/dcat-ap-cz-rozhraní-katalogů-otevřených-dat/2024-05-28/).
    * Domácí stránka katalogu (volitelný atribut)
      * Uveďte URL domácí stránky vašeho katalogu, pokud existuje. Váš lokální katalog může obsahovat větší množství informací a souvislostí, než se dostane do Národního katalogu otevřených dat. Proto můžete chtít, aby se uživatelé po nalezení vaší datové sady v NKOD mohli podívat i do vašeho katalogu.
3. V posledním kroku formuláře je třeba výsledný dokument poslat datovou schránkou (například přes spisovou službu Poskytovatele) jako přílohu datové zprávy s předmětem „NKOD“ a adresovat ji na datovou schránku Národní katalog otevřených dat (NKOD) s ID m3hp53v.
   
### Zrušení registrace lokálního katalogu
Registraci lokálního katalogu otevřených dat je možno zrušit zasláním dokumentu, který lze získat pomocí formuláře pro smazání lokálního katalogu.
Postup zrušení je následující:
1. V [Seznamu lokálních katalogů v NKOD](https://data.gov.cz/lokální-katalogy) nalézt rušený lokální katalog a v jeho detailu kliknout na symbol smazání.
2. Ve formuláři je třeba výsledný dokument poslat datovou schránkou (například
přes spisovou službu Poskytovatele) jako přílohu datové zprávy s předmětem „NKOD“ a adresovat ji na datovou schránku Národní katalog otevřených dat (NKOD) s ID m3hp53v.
