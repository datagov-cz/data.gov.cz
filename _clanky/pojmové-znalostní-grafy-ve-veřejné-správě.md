---
layout: post
detail: true
title: "Pojmové znalostní grafy ve veřejné správě"
ref: pojmové-znalostní-grafy-ve-veřejné-správě
lang: cs
image: ../attachments/články/pojmové-znalostní-grafy-ve-veřejné-správě/ssp.png
author: petr_křemen
date: 2021-06-25 11:38:00 +02:00
---

Věděli jste, že se slovo 'budova' vyskytuje v zákonech v různých významech? 
Například v [Zákoně č. 406/2000 Sb. (Zákon o hospodaření energií)][zhe] označuje vyhřívané objekty, zatímco v [Zákoně č. 256/2013 Sb. (Zákon o katastru nemovitostí)][zkn] označuje i objekty nevyhřívané.
<!--more-->
Když se poté dostanete k nějaké datové sadě o budovách (např. pražská otevřená datová sada [Energeticky šetrné budovy][esb]) nevíte, o kterých budovách tato datová sada mluví.
A nejedná se jen o vás - neví to ani vyhledávače datových sad, takže Vám nemohou pomoci vybrat datovou sadu přesně dle vaší potřeby.
A tak, chcete-li vědět, zda v datové sadě naleznete třeba skladové haly, či autobusové zastávky, nezbývá Vám, než jednotlivé záznamy datové sady prozkoumat jednotlivě.

K tomu, abychom jednotlivé významy pojmů od sebe odlišili, můžeme s výhodou využít *znalostní grafy* (vizte [předchozí článek na toto téma][zgs]).
Uzly znalostního grafu reprezentují pojmy, tedy slova nebo sousloví spolu se svými synonymy, nejvýše jednou definicí a zdrojem této definice.
Díky tomu jsou pojmy mnohem jednoznačnější než slova samotná.
A aby pojmům lépe rozuměl stroj, jsou pojmy vzájemně propojeny významovými vazbami, které umožňují pojmům sdílet stejné charakteristiky (třeba *druh konstrukce*, nebo *funkční využití* jako charakteristiky všech typů budov) a také kontrolovat, že pojmy nejsou ve vzájemném rozporu.

## Od jednotlivých pojmů ke znalostnímu grafu
Pojďme se teď blíž podívat na příklady různých významů slova budova.
Když se na definice obou pojmů podíváme blíž, vidíme, že mají některé rozdílné (vyznačené zeleně a modře) a některé společné charakteristiky (ty vyznačené nejsou):

{% include image.html url="../attachments/články/pojmové-znalostní-grafy-ve-veřejné-správě/image7.svg" description="Dva významy slova 'budova' z české legislativy." %}

První, čeho si všimneme je, že oba pojmy odvozují svůj význam od slova "stavba”.
Vzhledem k tomu, že žádný z obou zákonů pojem stavba nedefinuje, lze se pouze domnívat, že jsou oba významy slova "stavba” stejné, a to například ve smyslu [Zákona č. 183/2006 Sb. (Zákon o územním plánování a stavebním řádu)][sz].
Vybereme-li z definic obou pojmů další klíčové charakteristiky (které jsou v tomto případě opět v daných zákonech blíže nedefinované), můžeme je znázornit v podobě *znalostních grafů*:

{% include image.html url="../attachments/články/pojmové-znalostní-grafy-ve-veřejné-správě/image5.svg" description="Pojmové znalostní grafy různých definic slova 'budova'." %}

Pozorný čtenář jistě zaznamenal, že tyto znalostní grafy mají speciální podobu oproti grafům představeným [v úvodním článku o znalostních grafech][zgu], neboť jednotlivé uzly označují výhradně typy či kategorie věcí (např. *Budova*), nikoliv věci samotné (např. *Chrám sv. Víta*).
Takovým znalostním grafům budeme říkat *pojmové*.
Typy věcí lze uspořádat do hierarchií dle obecnosti - ve výše uvedených grafech jsou tyto hierarchie vytvářeny hranami s koncem ve tvaru prázdného trojúhelníku.
Např. každá budova ve smyslu zákona č. 256/2013 je speciálním případem Stavby a dědí tak od ní její vlastnosti.
Těmi mohou být např. *lokalizační údaje*, které jsou popsány v [Zákoně č. 111/2009 Sb. (Zákon o základních registrech)][zzr], avšak pro jednoduchost je ve výše uvedených příkladech neuvádíme.

## Vyhledávání dat pomocí pojmových znalostních grafů
Uvedené dva významy slova 'budova' nejsou nijak vyčerpávající.
Jistě i každý z nás slovu 'budova' přiřadí trochu jiný význam.
Představme si nyní zájemce o datovou sadu o budovách, pod kterými zájemce rozumí "stavby, které jsou vytápěné":

{% include image.html url="../attachments/články/pojmové-znalostní-grafy-ve-veřejné-správě/image6.svg" description="Definice budovy jako vytápěné stavby." %}

Spojením všech tří příkladů znalostních grafů dohromady vidíme vztahy mezi jednotlivými významy slova 'budova':

{% include image.html url="../attachments/články/pojmové-znalostní-grafy-ve-veřejné-správě/image4.svg" description="Znalostní graf vzniklý spojením tří definic slova 'budova'." %}

Aniž bychom šli do detailů logického aparátu znalostních grafů, lze intuitivně vysledovat, že zájemce o datovou sadu chápe slovo 'budova' ve významu užším, než pojem Budova (dle Zákona č. 406/2000 Sb.) - to je v grafu znázorněno oranžovou šipkou.
Pokud bychom využili tento znalostní graf pro vyhledávání datových sad, mohl by právě této oranžové šipky vyhledávač využít, aby zájemci nabídl datovou sadu o budovách ve smyslu Zákona č. 406/2000 Sb., tedy např. zmíněnou datovou sadu [Energeticky šetrné budovy][esb].

## Sémantický slovník pojmů veřejné správy
Výše uvedený příklad pochází ze znalostního grafu pro veřejný sektor, který vytváříme na MVČR pod názvem *[Sémantický slovník pojmů (SSP)][ssp]*.
V uvedených příkladech si lze všimnout, že některé pojmy jsou v legislativě dobře definované (např. právě oba pojmy *Budova*), zatímco jiné nikoliv.
Legislativní pojmy samotné pak pocházejí z různých zákonů a vyhlášek.
Proto se SSP skládá z menších vzájemně propojených slovníků, které jsou uspořádány do hierarchické struktury.
Ukažme si ji na příkladu:

{% include image.html url="../attachments/články/pojmové-znalostní-grafy-ve-veřejné-správě/image3.svg" description="Ukázka sémantického slovníku pojmů souvisejících s pojmem 'budova'." %}

Uprostřed diagramu vidíme již dobře známé pojmy *Budova* v úrovni legislativních slovníků.
V našem případě by tato úroveň obsahovala tři slovníky - pro každý z uvedených zákonů jeden (pro přehlednost diagramu v něm neuvádíme pojmy Nadzemní stavba či Nadzemní stavba a její podzemní části a specializační vazby zkracujeme přímo vazbou obou Budov na pojem Stavba).
Vlevo od legislativní úrovně jsou pojmy obecnější - slovník veřejného sektoru popisuje pojmy konsensuální, běžně užívané ve veřejném sektoru, bez vazby na konkrétní legislativu.
Zastavme se zejména u druhého pojmu *Stavba* - tento pojem není v uvedených zákonech definován a popisuje samotnou stavební činnost, nikoliv její výsledek.
Úplně vlevo se pak nachází základní slovník - ten obsahuje tzv. *ontologické kategorie*, tedy pojmy, které popisují základní zákonitosti reálného světa a platí i mimo oblast veřejného sektoru.
V našem příkladě vidíme pojem *Objekt* (jako entitu, která mění své vlastnosti s časem), pojem *Událost* (jako entitu, které je v čase neměnná a může např. tvořit objekty či měnit jejich vlastnosti), pojem *Vlastnost* (entita, která je závislá na objektu) a pojem *Vztah* (entita závislá na dvou a více objektech).
Podrobnější popis tohoto slovníku je nad rámec tohoto úvodního textu a čtenáře odkazujeme na další díly této série.

Abychom poskytli vyhledávači datových sad informaci o významu dat, potřebujeme jej popsat.
Podívejme se nyní na použití SSP pro popis datové sady [Energeticky šetrné budovy][esb], distribuované v podobě tabulky (např. ve formátu CSV).

{% include image.html url="../attachments/články/pojmové-znalostní-grafy-ve-veřejné-správě/image1.svg" description="Příklad datové sady." %}

Pro tento účel nás zajímá zejména pravá část výše uvedeného diagramu.
V agendové vrstvě nalezneme pojmy, které nejsou zákonem definovány, ale jsou používané při výkonu jednotlivých agend registru práv a povinností (v našem příkladě takový pojem nemáme).
Poslední úrovní jsou pak pojmy vyskytující se v popisu datové sady, či datového rozhraní.
Například pojem *Název budovy* označující jeden ze sloupců datové sady, není v zákoně popsán, je tedy součástí datového slovníku dané datové sady.

## Shrnutí
Ukázali jsme si na příkladech jak použít Sémantický slovník pojmů pro zpřesnění vyhledávání dat.
Škála použití SSP je však mnohem širší.

{% include image.html url="../attachments/články/pojmové-znalostní-grafy-ve-veřejné-správě/image2.svg" description="Semantický slovník pojmů." %}

Znalost zachycenou formálními vazbami mezi jedinečně definovanými pojmy lze dále využít např. pro automatické generování datových schémat, jejich dokumentace či formulářů pro efektivní sběr dat.
Jako "vedlejší produkt” můžeme rovněž snadno automaticky vygenerovat běžný výkladový slovník pojmů dané oblasti.
SSP je distribuován v podobě propojených dat, a v souladu se standardy [RDF][rdf], [OWL][owl], [SKOS][skos] a [SPARQL][sparql] konzorcia W3C.

V dalších dílech série se pak budeme zabývat jak podrobnějším popisem technik konceptuálního modelování znalostí pro tvorbu SSP, tak i nástroji, kterými lze SSP rozvíjet a spravovat.

[zhe]: https://aplikace.mvcr.cz/sbirka-zakonu/ViewFile.aspx?type=c&id=3503
[zkn]: https://aplikace.mvcr.cz/sbirka-zakonu/ViewFile.aspx?type=z&id=26722
[sz]: https://aplikace.mvcr.cz/sbirka-zakonu/ViewFile.aspx?type=c&id=4909
[zzr]: https://aplikace.mvcr.cz/sbirka-zakonu/ViewFile.aspx?type=c&id=5470
[esb]: https://opendata.praha.eu/dataset/udrzitelna-energetika/resource/e49f30cf-d207-427d-8298-0d6a71fd8558
[zgs]: znalostní-grafy-03-sparql
[zgu]: znalostní-grafy-01-úvod
[ssp]: https://slovník.gov.cz
[rdf]: https://www.w3.org/TR/rdf11-concepts/#bib-RDF11-PRIMER
[owl]: https://www.w3.org/TR/2012/REC-owl2-overview-20121211/
[skos]: https://www.w3.org/TR/2009/REC-skos-reference-20090818/
[sparql]: https://www.w3.org/TR/sparql11-query/