### Testrapport och kodkvalitetskrav

## Testrapport

## Kodkvalitetskrav - Namngivning
Skapa en tabell över fem namn på identifierare (Ex. namn på klasser, metoder/funktioner och variabler) Ange även en kort reflektion kring innehållet i kapitel 2.

| Namn och förklaring | Reflektion och regler från Clean Code               |  |
|------|---------------------------|------------------|
| <b>validateInput</b> <br>Namnet på den metod som validerar inmatningstexten för ogiltiga tecken och gränser för ordantal.| <b>Avoid Disinformation</b><br> Namnet säger att den validerar en input, men inte vilken input eller om det är flera input. Kan vara vilseledande då det inte är mera specifikt vilken input den validerar. Kanske validateUserInput hade varit bättre? | 
| <b>findLongestWord</b> <br> Namnet på den metod som hittar det längsta ordet i inmatningstexten.|<b>Add Meaningful Context</b><br> Genom att använda find i början av metodnamnet så ger det ett sammanhang till vad metoden gör, den hittar något. I detta fall det längsta ordet.
| <b>countWords</b> <br>Namnet på den metod som räknar antalet ord i inmatningstexten och uppdaterar det visade ordantalet.| <b>Use Intention-Revealing Names</b><br> Metodnamnet säger vad den gör, räknar ord. Det uppstår inga vidare frågor kring vad metoden gör. Jag upplever att det står just words i plural som gör det lite extra tydligt.|
| <b>countCharacters</b> <br>Namnet på den metod som räknar antalet tecken i inmatningstexten och uppdaterar det visade teckenantalet.|  <b>Don’t Add Gratuitous Context</b><br> Detta metodnamn är tydligt och hade inte behövt något mer beskrivande namn. Hade jag döpt metoden till countAllCharactersInTheText hade det varit onödigt, tydligt men onödigt i detta sammanhang.
| <b>countSentences</b> <br>Namnet på den metod som räknar antalet meningar i inmatningstexten och uppdaterar det visade meningsantalet.|<b>Method Names</b><br> Metodnamn bör ha ett verb i sig, för att beskriva vad metoden gör. Det har jag fösökt sträva efter i alla mina metodnamn. Dock inte bara ett verb.<br> Enligt <b>Don’t Pun</b> regeln så kan det ställa till det om man bara hade haft count i metodnamnet då det kan lätt bli svårt att hålla koll på <i>vad</i> den gör.
