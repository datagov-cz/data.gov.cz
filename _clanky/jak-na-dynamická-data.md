--- 
layout: post 
detail: true 
title: "Jak na dynamická data?"
ref: jak-na-dynamická-data
lang: cs 
image: ../přílohy/články/jak-na-dynamická-data/Dynamicka-data.webp
author: lenka_kováčová
date: 2024-11-16 12:00:00 +02:00 
--- 
Směrnice o otevřených datech přinesla požadavek na publikaci dynamických dat - dat, které podléhají průběžné aktualizaci nebo aktualizaci v reálném čase, zejména z důvodu jejich významné proměnlivosti nebo rychlého zastarávání.
 Netušíte, jestli se právě vás povinnost týká? 
 Tápete v tom, co je rychlé zastarávánívíte?
 Nevíte, co si představit pod bezodkladnou publikací, nebo nepřiměřenou zátěží? 
 Připravili jsme pro vás rozhodovací strom, který vám  pomůže rychle a snadno zjistit, zda se tato povinnost týká i vašich dat. 

 <!--more-->

Proč dynamická data v kontextu otevírání dat vůbec řešit? Především, pokud se za veřejné prostředky sbírají dynamická data, měla by být zpřístupněna všem, pokud pro opak není zákonný důvod. 
Zejména se nesmí stát, aby někdo těžil ze situace, ve které úřad sbírá dynamická data, ale včas, tj. s nezměněnou hodnotou, k nim má přístup jen on, nebo vybraný dodavatel.

Poskytování dynamických dat je pro povinné subjekty zákonnou povinnosti. Relevantní předpisy, které se jimi zabývají jsou:
- [§ 3a odst. 6 zákona  č. 106/1999 Sb.] - co jsou dynamická data
- [§ 5a odst. 3 zákona  č. 106/1999 Sb.] - povinnost zveřejňovat
- [Open Data Směrnice, důvody (4), (8)] - proč zveřejňovat dynamická data
- [Open Data Směrnice, důvody (31)] - hospodářská hodnota dynamických dat
- [Open Data Směrnice, důvody (31), (32)] - co znamená bezprostředně po shromáždění
- [Open Data Směrnice, čl. 1, odst. 8)] - co jsou dynamická data
- [Open Data Směrnice, čl. 5, odst. 5)] - co znamená bezprostředně po shromáždění
- [Open Data Směrnice, čl. 5, odst. 6)] - co znamená neúměrné úsilí a kdy dochází k nepřiměřeně omezené využitelnosti

V kontextu dynamický dat se často setkáváme s několik pojmy. 
Obecně jsou dynamická data data, která se mění, když jsou k dispozici nové informace, nikoliv v předem definovaných intervalech.
Často se můžete setkat i s pojmem real-time data, co jsou data, která se mění velmi často, například několikrát za minutu.
Přístup k oběma typům dat je nejčastěji poskytován pomocí API (datových služeb).

Samotná Open Data směrnice označuje pojmem dynamická data průběžně aktualizované údaje, mnohdy i v reálném čase, které by subjekty veřejného sektoru a veřejné podniky měly zpřístupnit pro opakované použití bezprostředně po jejich shromáždění prostřednictvím vhodných rozhraní pro programování aplikací a tam, kde je to relevantní, též s možností stažení kompletní datové sady, vyjma případů, kdy by jejich zpřístupnění vyžadovalo nepřiměřeně velké úsilí (…) včetně environmentálních údajů, dopravních údajů, družicových dat, meteorologických údajů a dat získaných senzory (…).

Do české legislativy se dynamická data dostala novelou zákona č. 106/1999 Sb., který je definuje jako informace v elektronické podobě, které podléhají průběžné aktualizaci nebo aktualizaci v reálném čase, zejména z důvodu jejich významné proměnlivosti nebo rychlého zastarávání.
Povinné subjekty zveřejňují dynamická data, (…) zejména prostřednictvím rozhraní pro programování aplikací jako otevřená data, bezprostředně po jejich shromáždění. 

Neurčitost obou definicí stěžuje poskytovatelům určit, jestli se jich povinnost týká.
Vytvořili jsme proto rozhodovací strom, který jim může pomoci se rozhodnout.
Poskytovatelé, kteří k publikaci dynamických dat přistoupí, je můžou tímto příznakem označit i přímo v metadatech v NKOD. 

{% include image.html url="../přílohy/články/jak-na-dynamická-data/Dynamicka_data_rozhodovaci_strom.webp" description="Rozhodovací strom" %}


[§ 3a odst. 6 zákona  č. 106/1999 Sb.]: https://www.e-sbirka.cz/eli/cz/sb/1999/106/2024-01-01/dokument/norma/cast_1/par_3a/odst_6 "§ 3a odst. 6 zákona  č. 106/1999 Sb."
[§ 5a odst. 3 zákona  č. 106/1999 Sb.]: https://www.e-sbirka.cz/eli/cz/sb/1999/106/2024-01-01/dokument/norma/cast_1/par_5a/odst_3 "§ 5a odst. 3 zákona  č. 106/1999 Sb."
[Open Data Směrnice, důvody (4), (8)]: https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32019L1024 "Open Data Směrnice, důvody (4), (8)"
[Open Data Směrnice, důvody (31)]: https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32019L1024 "Open Data Směrnice, důvody (31)"
[Open Data Směrnice, důvody (31), (32)]: https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32019L1024 "Open Data Směrnice, důvody (31), (32)"
[Open Data Směrnice, čl. 1, odst. 8)]: https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32019L1024 "Open Data Směrnice, čl. 1, odst. 8)"
[Open Data Směrnice, čl. 5, odst. 5)]: https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32019L1024 "Open Data Směrnice, čl. 5, odst. 5)"
[Open Data Směrnice, čl. 5, odst. 6)]: https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32019L1024 "Open Data Směrnice, čl. 5, odst. 6)"

