---
layout: poskytovatelé-otevřená-data-level-2
title: Příprava dat k otevření
ref: ProPoskytovatele-OtevřenáData-PřípravaDatKOtevření
lang: cs
---

Po vytvoření publikačního plánu je nutné postupně jednotlivé datové sady publikovat dle stanoveného harmonogramu.
Postup publikace datové sady v otevřené podobě v sobě zahrnuje její analýzu a návrh technické podoby její publikace, přípravu datové sady do navržené podoby, její publikaci a katalogizaci.

## Analýza datové sady a návrh technického způsobu jejího zveřejnění
Před samotnou publikací datové sady je nutné ji analyzovat. 
Analýzu zajišťuje její Kurátor dat. 
Analyzuje obsah a strukturu datové sady. Na základě analýzy pak (ve spolupráci s IT specialistou) navrhuje:
* věcný obsah datové sady;
* stupeň otevřenosti, na kterém bude datová sada zveřejněna;
* datové schéma určující strukturu, ve které bude datová sada zveřejněna.
* záznam o datové sadě.
Při provádění vlastní analýzy by měl Kurátor dat nejprve určit věcný obsah datové sady, tj. o jakých entitách datová sada bude.
Příkladem mohou být Faktury, kde kurátor bude chtít publikovat jejich položky, dodavatele a odběratele.

Pokud pro danou množinu dat již existuje [Otevřená formální norma](https://data.gov.cz/ofn/), lze ji pro definici obsahu datové daty použít, případně rozšířit. 

Dále by měl Kurátor dat určit stupeň otevřenosti datové sady.
Minimální stupeň otevřenosti je stupeň 3.

Dále je třeba pro datovou sadu navrhnout její strojově čitelné datové schéma.
Datové schéma popisuje strukturu jednotlivých položek datové sady.
Jeho tvorba je technickou záležitostí.
Pokud nemá Kurátor dat dostatečné technické znalosti, musí tuto činnost převzít určený IT specialista.
Přístup k tvorbě schématu datové sady se liší dle zvoleného stupně otevřenosti.

V posledním kroku analýzy připraví Kurátor záznam o datové sadě, který bude při jejím zveřejnění publikován v datovém katalogu - viz Katalogizace otevřených dat. 

## Příprava datové sady k publikaci
Po provedení analýzy Kurátor dat připraví datovou sadu k publikaci.
To znamená připravit distribuci datové sady (příp. více distribucí, pokud se Kurátor při analýze rozhodl rozdělit obsah datové sady do více distribucí či publikovat obsah datové sady ve více různých formátech).
Příprava distribuce znamená buď vytvořit novou distribuci, nebo aktualizovat již jednou publikovanou.
Připravenou distribuci Kurátor dat předá Koordinátorovi otevírání dat spolu s připraveným záznamem o datové sadě k formální kontrole a k zajištění zveřejnění.

Při přípravě distribuce je nutno dodržet pravidla zvoleného stupně otevřenosti a datového formátu a také strukturu danou zvoleným či vytvořeným datových schématem.
Často se stává, že data tvořící datovou sadu již existují v datových souborech.
Ty však nelze přímo zveřejnit, protože jejich formát odpovídá nižšímu stupni otevřenosti, než byl zvolen pro publikaci.

Distribuci či distribuce datové sady je nutno pravidelně aktualizovat dle nastavené periodicity aktualizace v záznamu o datové sadě.
Aktualizace znamená buď aktualizace již jednou publikované distribuce, nebo vytvoření nové distribuce obsahující aktualizaci (tj. nově přidané záznamy, změny v již publikovaných záznamech včetně informace o odstranění existujících záznamů). Přípravu datového souboru lze zajistit ručně nebo ji lze automatizovat.
Možnosti automatizace by měl Kurátor dat konzultovat s IT specialistou.

Poté, co je datový soubor připraven, by měl Kurátor dat zkontrolovat, že formát datového souboru je v pořádku a že jeho struktura odpovídá navrženému datovému schématu.
Kontrolu nazýváme validace datového souboru.
Jedná se o technickou záležitost.
Pokud nemá Kurátor dat dostatečné technické znalosti, je třeba, aby validaci provedl IT specialista.

Dále může být potřeba aktualizovat atributy záznamu o datové sadě
Datový soubor je v záznamu o datové sadě reprezentován jako distribuce datové sady.
Pokud existuje pro datovou sadu pouze jeden aktualizovaný datový soubor, je třeba aktualizovat atributy příslušné distribuce.
Pokud je v každé periodě vytvářen nový datový soubor, je třeba rozšířit záznam o datové sadě o novou distribuci.

## Zajištění zveřejnění datové sady
Poté, co Koordinátor otevírání dat zkontroloval datovou sadu připravenou Kurátorem dat k publikaci, zajistí její samotné zveřejnění.

V případě, že Poskytovatel dat zveřejňuje datové soubory tvořící datové sady na svých webových stránkách, pověří Koordinátor otevírání dat IT specialistu zveřejněním následujících souborů na webu:
* datový soubor s obsahem datové sady či datový soubor s aktualizací obsahu datové sady,
* soubor s definicí datového schématu datové sady.

Dále Koordinátor otevírání dat pověří Správce katalogu otevřených dat založením (v případě prvního zveřejnění datové sady) či úpravou (v případě opakovaného zveřejnění) katalogizačního záznamu v určeném katalogu.

