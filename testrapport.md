# Testrapport

| Test | Beskrivning               | Utfall PASS/FAIL |
|------|---------------------------|------------------|
| UC1 | Starta applikationen och se om man kommer till startsidan. |  Pass  |
| UC2 | Testar att skriva in en text och se om den analyserar texten som skrivs/skrivits.|  Pass  |
| UC3 | Testar att skriva in en kodsnutt.|  Pass  |
| UC4 | Testar att kopiera in massa text. |  Pass  |

<br>

### UC1
<b>Beskrivning:</b> Starta applikationen och se om man kommer till startsidan.

<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.

<b>Förväntad resultat:</b>
Nu borde startsidan av applikationen visas.

<hr>

### UC2
<b>Beskrivning:</b> Testar att skriva in en text och se om den analyserar texten som skrivs/skrivits.

<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.
4. Klicka i textfältet och börja skriva.


<b>Förväntad resultat:</b>
Texten ska börja analyseras i realtid och du ska kunna se antalet ord, tecken, meningar och vilket det längsta ordet i din text är.

<hr>

### UC3
<b>Beskrivning:</b> Testar att skriva in en kodsnutt.

<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.
4. Klicka i textfältet och skriv in följande kodsnutt:


<b>Förväntad resultat:</b>
Du bör direkt få ett meddelande som säger att det inte är tillåtet att använda dessa tecken < >.

<hr>

### UC4
<b>Beskrivning:</b> Testar att kopiera in massa text.

<b>Testinstruktioner:</b>
1. Öppna upp terminalen i visual studio code.
2. Skriv in `npm run dev`
3. Öppna URL:en som finns liknande detta exempel: `Local:   http://localhost:5173/` i en webbläsare.
4. Klicka i textfältet och kopiera in följande kodsnutt 20 gånger: <br>
"Mauris vel fermentum sapien. Vestibulum dignissim est non metus fermentum, a fermentum metus bibendum. Praesent nec justo ligula. Fusce scelerisque suscipit libero, eu convallis eros euismod et. Vestibulum posuere augue at erat feugiat vestibulum. Vivamus bibendum quam at aliquet hendrerit. Maecenas tristique nisl ut purus volutpat, non vulputate odio aliquet. In hac habitasse platea dictumst. Maecenas non sagittis ligula. Suspendisse ut est non ante suscipit volutpat. Integer placerat, dui non hendrerit ultrices, justo nisl hendrerit mi, ac volutpat leo velit at nisl. Vestibulum at fermentum tellus. Integer et nisl vitae augue gravida iaculis a eget justo. Sed malesuada metus eu ipsum mattis, ut faucibus purus fringilla"


<b>Förväntad resultat:</b>
Du bör få ett meddelande som säger att det inte är tillåtet att skriva mer än 2000 ord.

# Kodkvalitetskrav - Namngivning (kapitel 2)

| Namn och förklaring | Reflektion och regler från Clean Code               |  |
|------|---------------------------|------------------|
| <b>validateInput</b> <br>Namnet på den metod som validerar inmatningstexten för ogiltiga tecken och gränser för ordantal.| <b>Avoid Disinformation</b><br> Namnet säger att den validerar en input, men inte vilken input eller om det är flera input. Kan vara vilseledande då det inte är mera specifikt vilken input den validerar. Kanske validateUserInput hade varit bättre?| 
| <b>findLongestWord</b> <br> Namnet på den metod som hittar det längsta ordet i inmatningstexten.|<b>Add Meaningful Context</b><br> Genom att använda find i början av metodnamnet så ger det ett sammanhang till vad metoden gör, den hittar något. I detta fall det längsta ordet.|
| <b>countWords</b> <br>Namnet på den metod som räknar antalet ord i inmatningstexten och uppdaterar det visade ordantalet.| <b>Use Intention-Revealing Names</b><br> Metodnamnet säger vad den gör, räknar ord. Det uppstår inga vidare frågor kring vad metoden gör. Jag upplever att det står just words i plural som gör det lite extra tydligt.|
| <b>countCharacters</b> <br>Namnet på den metod som räknar antalet tecken i inmatningstexten och uppdaterar det visade teckenantalet.|  <b>Don’t Add Gratuitous Context</b><br> Detta metodnamn är tydligt och hade inte behövt något mer beskrivande namn. Hade jag döpt metoden till countAllCharactersInTheText hade det varit onödigt, tydligt men onödigt i detta sammanhang.|
| <b>countSentences</b> <br>Namnet på den metod som räknar antalet meningar i inmatningstexten och uppdaterar det visade meningsantalet.|<b>Method Names</b><br> Metodnamn bör ha ett verb i sig, för att beskriva vad metoden gör. Det har jag fösökt sträva efter i alla mina metodnamn. Dock inte bara ett verb.<br> Enligt <b>Don’t Pun</b> regeln så kan det ställa till det om man bara hade haft count i metodnamnet då det kan lätt bli svårt att hålla koll på <i>vad</i> den gör.|

### Reflektion över kapitel 2
Jag uppfattar kapitel 2 som lättläst. Jag förstår vad författaren vill få fram och exemplen som ges är tydliga. Det har varit lite snack om namngivning i tidigare kurser men inte i denna utsträckning. Jag har alltid tyckt att det är svårt att komma på variabelnamn och de tips jag fick i boken kommer hjälpa mig med detta. Jag har ändrat mina namn flera gånger i detta projekt för att hitta så passande namn som möjligt och ofta kommer det längs med hur utvecklingen går. Jag började med att namnge mitt projekt "my-word-counter", sen ju mer jag expanderade och lade till fler funktioner så fick jag ändra namn och ge det ett mer omfattande namn "my-text-alanysis". Jag uppfattade det som mer beskrivande över vad mitt projekt gör. Jag läste sedan i boken att man inte ska vara rädd för att göra detta så länge det är för det bättre. Vilket jag hoppas att detta namnbyte var. 

Jag tyckte det var intressant med regeln "Use Pronounceable Names", det är ingenting jag reflekterat över tidigare men ändå så självklart. Författaren skriver "If you can’t pronounce it, you can’t discuss it without sounding like an idiot." Och det är så man känner sig när man stackar sig fram på ord som man inte kan uttala och man kanske även missuppfattar vad det betyder.

Sen kan jag förstå vad författaren menar med "Don’t Be Cute", men jag tycker ändå att det ska finnas utrymme för lite humor när man programerar.

# Kodkvalitetskrav - Funktioner (kapitel 3)

| Namn och förklaring | Reflektion och regler från Clean Code               |  |
|------|---------------------------|------------------|
| <b>validateInput</b> <br>Namnet på den metod som validerar inmatningstexten för ogiltiga tecken och gränser för ordantal.| <b>Avoid Disinformation</b><br> Namnet säger att den validerar en input, men inte vilken input eller om det är flera input. Kan vara vilseledande då det inte är mera specifikt vilken input den validerar. Kanske validateUserInput hade varit bättre?| 
| <b>findLongestWord</b> <br> Namnet på den metod som hittar det längsta ordet i inmatningstexten.|<b>Add Meaningful Context</b><br> Genom att använda find i början av metodnamnet så ger det ett sammanhang till vad metoden gör, den hittar något. I detta fall det längsta ordet.|
| <b>countWords</b> <br>Namnet på den metod som räknar antalet ord i inmatningstexten och uppdaterar det visade ordantalet.| <b>Use Intention-Revealing Names</b><br> Metodnamnet säger vad den gör, räknar ord. Det uppstår inga vidare frågor kring vad metoden gör. Jag upplever att det står just words i plural som gör det lite extra tydligt.|
| <b>countCharacters</b> <br>Namnet på den metod som räknar antalet tecken i inmatningstexten och uppdaterar det visade teckenantalet.|  <b>Don’t Add Gratuitous Context</b><br> Detta metodnamn är tydligt och hade inte behövt något mer beskrivande namn. Hade jag döpt metoden till countAllCharactersInTheText hade det varit onödigt, tydligt men onödigt i detta sammanhang.|
| <b>countSentences</b> <br>Namnet på den metod som räknar antalet meningar i inmatningstexten och uppdaterar det visade meningsantalet.|<b>Method Names</b><br> Metodnamn bör ha ett verb i sig, för att beskriva vad metoden gör. Det har jag fösökt sträva efter i alla mina metodnamn. Dock inte bara ett verb.<br> Enligt <b>Don’t Pun</b> regeln så kan det ställa till det om man bara hade haft count i metodnamnet då det kan lätt bli svårt att hålla koll på <i>vad</i> den gör.|
