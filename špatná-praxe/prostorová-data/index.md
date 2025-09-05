---
layout: contained
title: Nejčastější chyby při publikaci prostorových dat
ref: ŠpatnáPraxe-ProstorováData
lang: cs
---

## Souřadnice X a Y jako samostatné atributy
Častou chybou při publikaci prostorových dat je reprezentace prostorové složky tzv. GPS souřadnicemi X a Y ve dvou atributových sloupcích. Tato praxe je špatná, protože nezachycuje geometrický objekt. Kromě toho neumožňuje poskytování složitějších geometrických objektů, jako jsou například shluky bodů, linie, lomené čáry nebo polygony. Chybné jsou i podobné reprezentace, jako například sloupec s názvem „x,y“ a dvojice souřadnic jako jeho hodnota.

Správnou praxí je poskytovat prostorovou složku formou geometrického objektu, ideálně za použití některého standardizovaného formátu pro reprezentaci geometrických objektů, například **Geography Mark-up Language (GML)** nebo **Well-Known Text (WKT)**. Poskytování geografické polohy jako geometrického objektu je podrobně popsáno v [Otevřené formální normě Prostorová data](https://ofn.gov.cz/prostorová-data/2019-08-22/).

Pro ukázku uvádíme reprezentaci bodu jako geometrického objektu za použití obou výše zmíněných formátů i zde:

**Reprezentace ve WKT**

```
POINT(50.056 14.434)
```

**Reprezentace v GML**

```
<gml:Point srsName="urn:ogc:def:crs:EPSG::4326" srsDimension="2">
    <gml:pos>50.056 14.434</gml:pos>
</gml:Point>
```

## Nevhodná volba přesnosti souřadnic
Častou chybou je nevhodná volba přesnosti souřadnic pro daný účel. Samozřejmostí je, že souřadnice by měly být dostatečně přesné, aby vyhovovaly účelu, pro který byla data pořizována, ale chybou je i přílišná podrobnost souřadnic. I u ostatních prostorových objektů především záleží na účelu, ke kterému je jeho pořízení určeno. Pro plánovaní tras autem mezi městy stačí reprezentace komunikací liniemi s přesností na několik metrů, ale pro plánování cyklopruhů na městských komunikací je potřeba reprezentace polygonem a vyšší přesnost, aby bylomožno lépe odhadnout šířku silnice.

**Příklad příliš nízké přesnosti:**

Především v geodézii a v katastru nemovitostí je vyžadována vysoká přesnost. V případě bodů základního a podrobného polohového bodového pole je nutná zvýšená přesnost – body totiž slouží jako základ pro vyměřování v terénu a při výpočtu triangulací se každá chyba může až několikanásobně zvětšit.

**Příklad přílišné přesnosti souřadnic:**

V knize Novohradské Hory a Novohradské podhůří vydané nakladatelstvím Baset v roce 2006 jsou v kapitole Místopis uváděny souřadnice obcí v souřadnicovém systému S-JTSK uváděny na 5 desetinných míst, tedy na setiny milimetru. Vzhledem k tomu, že se jedná o definiční bod někde uvnitř obce, bylo by určení s přesností na metry zdaleka dostatečné.

## Chybějící souřadnicový referenční systém
Častou chybou je uvádění souřadnic bez uvedení použitého souřadnicového referenčního systému. Souřadnice jsou často udávány jako **x** a **y**, **lat** a **lon** nebo jako **GPS souřadnice**. Tato interpretace je nesprávná a matoucí. Důležité je uvádět se souřadnicemi i jejich souřadnicový referenční systém. Souřadnice, které jsou často chybně uváděny jako lat a lon nebo GPS souřadnice, tedy zeměpisná šířka a délka, jsou zpravidla v souřadnicovém systému WGS-84. Jeho zkratka v registru EPSG je 4326.

Mezi další nejčastěji používané souřadnicové referenční systémy patří Evropský terestrický referenční systém ETRS-89 s kódem 4258. Systém jednotné trigonometrické sítě katastrální S-JTSK, ve kterém je veden například Katastr nemovitostí ČR, nebo Registr územní identifikace, adres a nemovitostí (RÚIAN), bývá v GIS nejčastěji používán ve formě s převrácenými osami X a Y jako takzvaný S-JTSK / Krovak East North s EPSG kódem 5514.

Uvedení použitého souřadnicového referenčního systému záleží i na použité reprezentaci prostorových objektů. Většina formátů (GML, GeoJSON…) má definici souřadnicového refernčního systému jako součást zápisu geometrie. Následuje příklad definice souřadnicového referečního systému v GML:

```
 <ad:geometry>
    <gml:Point gml:id="P.AD.22547665" srsName="urn:ogc:def:crs:EPSG::5514" srsDimension="2">
      <gml:pos>-731037.56 -1053052.98</gml:pos>
    </gml:Point>
  </ad:geometry>
```

Jiné formáty reprezentaci souřadnicového refernčního systému tak snadno neumožǔjí. Pak je potřeba souřadnicový referenční systém uvést například jako další atributový slupec, jako v následujícím příkladu CSV:

```
WKT_Geometry,CRS
  "LINESTRING(14.450325965881346 50.05789646795757, 14.450948238372803 50.05791713211645, 14.45121645927429 50.05803422884852)",http://www.opengis.net/def/crs/EPSG/0/4258
```

V některých případech je možné zapsat souřadnicový referenční systém například v hlavičce souboru, ale je nutné si uvědomit, že v ideálním případě bude otevřených prostorových dat využito tak, aby data bylo možné zobrazit ve webových či desktopových aplikacích v mapě. Pokud nebude souřadnicový referenční systém definován, je možné, že se data vůbec nepodaří zobrazit nebo zpracovat.
