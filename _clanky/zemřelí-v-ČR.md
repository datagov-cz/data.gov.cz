---
layout: post
detail: true
lang: true
lang: cs
icon: list
ref: ZemřelívČR
author: robert_spál
date: 2020-03-21 12:00:00
title: Zdravotní příčiny úmrtí v ČR
---

Český statistický úřad (ČSÚ) každoročně publikuje v [Národním katalogu otevřených dat](https://data.gov.cz/datov%C3%A9-sady) (NKOD) počty zemřelých za celou ČR. Data zachycují nejen samotnou příčinu úmrtí, ale také další zajímavé atributy jako například pohlaví zemřelých anebo kategorizaci nemocí. 

Samotná surová data však nejsou příliš přistupná analytické práci a laická veřejnost jen stěží dokáže s těmito daty jednoduše pracovat. Rozhodli jsme se proto vytvořit nástroj, který široké veřejnosti umožní získat ucelený obrázek o celkové situaci v této oblasti. Nástroj by měl být přístupný, jednoduše ovladatelný a vizuálně přitažlivý tak, aby se s ním potenciálním uživatelům dobře pracovalo a aby byli schopni rychle a jednoduše získat informace, které potřebují. Z těchto důvodů jsme se proto rozhodli vytvořit filtrovací analytický nástroj pomocí technologie [Power BI](https://powerbi.microsoft.com/en-us/).
<!--more-->

<iframe width="933" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiMzY2NTRjNjYtYzIyZC00OGFlLTgwMTgtNzY2ZGJiYzY2MjI3IiwidCI6ImI4MDRlNTE5LTFjYzYtNDk3ZC1hOTVmLWUwMDIwNGMwMzhlZSIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>

##Použitá data

[Data](https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2Fhttp---vdb.czso.cz-pll-eweb-package_show-id-130143), která byla použita pro vytvoření nástroje jsou agregována jak za celou ČR, tak i na kraje a okresy a umožňují nám získat unikátní pohled na vývoj zdraví českých občanů od roku 2006. 

##Postup zpracování

Výhodou využití nástroje Power BI je, že si umí zapamatovat kroky, které vedly k vytvoření dashboardu, a proto do něj při další aktualizaci stačí jednoduše data nahrát a všechny vizualizace, statistiky a filtry se automaticky upraví. ČSÚ každoročně tuto datovou sadu aktualizuje ve stejné podobě, takže je využití Power BI díky této vlastnosti velmi pohodlné. 

Pokud byste tedy někdy měli zájem vytvořit sami si podobný filtrovací nástroj, tak by byl postup analogický tomu našemu: Prvním krokem bylo stažení dat samotných. Jak už bylo řečeno, data jsou dostupná v Národním katalogu otevřených dat. Následně jsme data "učesali" v programu Microsoft Excel. Uživatelům, kteří nemají přístup k placené verzi Microsoft Excel doporučujeme využít službu Google Sheets anebo samotné Power BI. Jak Google Sheets tak Power BI jsou produkty, které je možné využívat zdarma. U [Google Sheets](https://www.google.com/sheets/about/) stačí mít webový prohlížeč. [Power BI](https://powerbi.microsoft.com/en-us/) je nutno nainstalovat na váš desktopový počítač.    

Z dat byly následně odstraněny některé nedůležité atributy jako například kódy různých číselníků. Ze souboru byla také odstraněna data za celou ČR a kraje. Zůstaly nám tak jenom údaje za okresy, což je nejvyšší možná granularita tohoto souboru. Také byl filtrován i rok úmrtí. Data za rok 2019 nebyla v době psaní tohoto článku k dispozici, a proto jsme se rozhodli pracovat s desetiletým  časovým intervalem 2009 až 2018. Zajímaly nás také jenom zdravotní příčiny úmrtí a proto byly odstraněny nezdravotní příčiny úmrtí, jako například dopravní nehody anebo pracovní úrazy. 

Po očištění dat následovala tvorba samotného nástroje. Tato fáze probíhala plně v prostředí Power BI, které je intuitivní a není nijak složité. Pro ty, co se s tímto nástrojem nikdy nepotkali, doporučujeme využít [návod na youtube](https://www.youtube.com/watch?v=AGrl-H87pRU) pro začátečníky. Data byla tedy nahrána do Power BI query editoru odkud byla následně bez nutnosti dalšího zásahu poslána do dashboard editoru. V prostředí dashboard editoru pak byly kombinovány jednotlivé typy vizualizací a nástrojů dle potřeby. 

##Výsledek
A kolik času nám to zabralo? Práce na vytvoření tohoto [dashboardu](https://app.powerbi.com/view?r=eyJrIjoiMzY2NTRjNjYtYzIyZC00OGFlLTgwMTgtNzY2ZGJiYzY2MjI3IiwidCI6ImI4MDRlNTE5LTFjYzYtNDk3ZC1hOTVmLWUwMDIwNGMwMzhlZSIsImMiOjh9) nám trvala zhruba pět hodin. Dashboard obsahuje dvě karty - shrnující data za celou ČR a data za jednotlivé okresy ČR. V datech za celou ČR je možné vidět, jak se příčiny úmrtí měnily v průběhu času a jak jsou tyto příčiny distribuovány dle pohlaví nebo kategorie nemoci. 

V kartě za jednotlivé okresy se pak nachází filtrovací okno, ve kterém je možné zvolit si požadovanou statistiku. Panely s daty pak zobrazí podle zadaných parametrů požadované výsledky. Můžeme tak sledovat a srovnávat jednotlivé okresy nebo zjistit, jak konkrétní nemoc nebo kategorie nemoci zasáhla vybraný okres. Také můžeme sledovat vývoj příčin úmrtí v čase. Jednoduše se tak kdokoliv a kdykoliv dostane k informacím, které předtím musel složitě zjišťovat nebo dohledávat. 

##Další použití
Takto vytvořený dashboard lze dále obohatit, například o další data ČSÚ publikována v NKOD, jako jsou [Naděje dožití v okresech ČR](https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2Fhttp---vdb.czso.cz-pll-eweb-package_show-id-130140) anebo [Práceneschopnost v okresech ČR](https://data.gov.cz/datov%C3%A1-sada?iri=https%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2Fhttp---vdb.czso.cz-pll-eweb-package_show-id-250169r19). Dalším rozšířením o tyto datasety pak dokážeme získat komplexnější pohled na problematiku zdraví v České republice. To už ale necháváme na vás.

Zpracování dat v nástroji [Power BI](https://powerbi.microsoft.com/en-us/) proto může sloužit pro vizualizaci celé řady dalších datových sad a může tedy být zajímavou volbou pro začátečníky jako vhodné startovací prostředí pro získání základů ve zpracování dat.

##Použité nástroje a zdroje:

- Microsoft Excel - placená služba nebo Google Sheets - aplikace dostupná zdarma nebo LibreOffice Calc - open source
- Power BI - aplikace dostupná zdarma

##Autor:

[Robert Spál](spal.robert@gmail.com)