---
layout: contained
title: Neuvážená změna IRI (nejen) při přechodu na gov.cz
ref: ŠpatnáPraxe-ZměnaIRI
lang: cs
---

**Jednotná státní doména gov.cz sice přináší řád do komunikace s občany, ale v hlubších vrstvách digitální infrastruktury může napáchat nevratné škody. Neuvážená změna perzistentních identifikátorů (IRI) při migraci systémů hrozí okamžitým rozpadem ekosystému propojených dat. Jako poskytovatelé totiž nejste jedinými uživateli svých dat – na stabilitě vašich identifikátorů přímo závisí analytici, firmy i další úřady. Bez zajištění absolutní zpětné kompatibility pro ně vaše data v momentě změny fakticky přestanou existovat, což může paralyzovat fungování klíčových služeb veřejné správy i soukromého sektoru.**
<br><br>

<div style="color: #ffffff; background:#c62828; padding:10px;">
<b>DOPORUČENÍ</b><br>
<b>Neměňte IRI!</b><br>To, že váš web běží na gov.cz, neznamená, že vaše data musí změnit identitu. Ponechte původní identifikátory zachovány. <br><br>
<b>Migrujete na novou doménu?</b><br>Tu starou v žádném případě nerušte! Musí zůstat ve vašem vlastnictví a musí být technicky funkční v DNS záznamech. Pokud starou doménu necháte expirovat, všechna data, která na ni odkazovala, se v tu vteřinu stanou nepoužitelnými. Má to fatální důsledky pro kontinuitu státní správy.<br><br>
<b>Když už musíte, dělejte to správně!</b><br>Pokud je změna IRI vynucena (např. zánikem původní infrastruktury), nestačí prostý HTTP redirect (301/302) na aplikační úrovni! Zajistěte trvalé přesměrování na úrovni DNS záznamů (CNAME nebo ALIAS). Původní doména musí zůstat v DNS záznamech funkční a odkazovat na novou infrastrukturu tak, aby strojové dotazy na stará IRI zůstaly validní.
</div>
<br>
Stroj se nesmí dozvědět, že se identifikátor změnil, musí být plynule doveden k cíli.

## Rozmohl se nám tady takový nešvar
Při stěhování webu na novou doménu mají správci tendenci měnit i identifikátory datových souborů. Jenže **IRI není jen adresa, je to identita**.

Představte si to jako rodné číslo. Pokud se přestěhujete z Prahy do Brna, změní se vaše adresa, ale vaše rodné číslo zůstává stejné. Pokud by vám stát při každém stěhování změnil i rodné číslo, přestanou vás vidět banky, lékaři i úřady. Přesně to se stane vašim datům. Je potřeba mít na paměti, že vy nejste jediným uživatelem vašich dat.  To může mít zásadní vliv na chod mnoha systému ve veřejné správě. Uživatelům pak mohou přestat fungovat služby na nich postavené.

## Stroj není člověk
Když člověk klikne na starý odkaz a web ho přesměruje, obvykle to ani nepostřehne. Ale stroj? Pokud analytický software narazí na dvě různá IRI, vidí dvě různé věci. I když je tam "redirect", propojení mezi daty je přetržené.

Výsledek? Data se sice sesypou na jednu hromadu, ale už k sobě nepasují. Musíme je pak složitě a draze "lepit", což vnáší do systému chyby a duplicity.

## Zlatý standard perzistence
V moderní digitální správě existuje koncept tzv. **perzistentních identifikátorů**. Je to zlatý standard, který zajišťuje, že data najdete na stejném místě (pod stejným rodným číslem) dnes i za deset let. 

U klíčových dat, jako jsou **právní předpisy** nebo datové sady s vysokou hodnotou, je tato trvalost dokonce vyžadována zákonem. Nejde jen o „dobrou praxi“, ale o garanci stability.

<div style="color: #ffffff; background:#a6a6a6; padding:10px;">
<a href="https://eur-lex.europa.eu/content/help/eurlex-content/eli.html?locale=cs" target="_blank"><b>ELI</b> (European Legislation Identifier)</a> slouží k identifikaci právních předpisů (např. v ČR ve Sbírce zákonů a Sbírce mezinárodních smluv). Právní texty díky tomu na sebe navzájem odkazují. Pokud by se IRI měnila, rozpadly by se vazby mezi evropskou legislativou a její implementací v národních státech. Právo vyžaduje, aby „adresa“ zákona byla stejně trvalá jako zákon sám.<br>
<a href="https://data.gov.cz/%C4%8Dl%C3%A1nky/v%C5%A1e-co-jste-cht%C4%9Bli-v%C4%9Bd%C4%9Bt-o-hvd" target="_blank"><b>HVDs</b> (High-Value Datasets)</a> neboli datové sady s vysokou hodnotou  jsou podle evropského nařízení 2023/138 považovány za palivo pro digitální ekonomiku. Soukromé firmy na těchto datech staví své aplikace a služby a pokud by stát libovolně měnil identifikátory, způsobil by obrovské škody a náklady na opravu systémů. Legislativa výslovně ukládá členským státům povinnost zajistit, aby tato data byla dostupná prostřednictvím trvalých identifikátorů.</div>
<br>
Chceme, aby data veřejné správy byla dlouhodobě použitelná a aby na nich šlo stavět chytré služby?

Nechovejme se k nim jako k jednorázovým webovým stránkám, ale jako k trvalým pilířům infrastruktury. Základy digitálního státu v podobě dat se nesmí rozpadnout jen kvůli touze po "pěkné doméně" v adresním řádku.

**S trvalými identifikátory si data pamatují a stroje nezapomínají.**
<br>
