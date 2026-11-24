// ============================================================
// UPPGIFT 8: PRIMITIVA DATATYPER OCH TYPEOF (NIVÅ 1)
// Modul: 2 | Moment: 02 | Nivå: 1 (Svårighetsgrad: ⭐ 1/5)
// Krav:
// 1. Aktivera strikt läge med "use strict"; högst upp.
//    (Ledtråd: skriv "use strict"; som första kodrad.)
// 2. Skapa fem variabler/konstanter av olika primitiva typer:
//    - const appTitle = "SecurityMonitor"; (String)
//    - const portNumber = 8080; (Number)
//    - const isEnabled = true; (Boolean)
//    - let nextToken; (undefined – inget värde tilldelat ännu)
//    - const activeSession = null; (null – avsiktligt tomt värde)
//    (Ledtråd: använd const när värdet inte ändras och let för nextToken.)
// 3. Skriv ut varje värde och dess typ med console.log() och typeof.
//    (Ledtråd: typeof variabelnamn ger typen som en sträng, t.ex. typeof portNumber.)
// 4. Lägg till kommentarer på svenska med // som förklarar varje steg.
// ============================================================

// === STEG 1 (Krav 1–2): STRICT MODE OCH PRIMITIVA VARIABLER ===

"strict mode"; // Aktiverar strict mode som innebär variabler inte ändras utanför deklarationena.

const appTitle = "SecurityMonitor"; // Deklarerar en const med titeln för applikationen, en textsträng.
const portNumber = 8080; // Deklarerar en const med portnumret för applikationen, ett heltal
const isEnabled = true; // Deklarerar en const med en boolean som anger om applikationen är aktiverad.

let nextToken; // denna variabel har inte initierat ett värde och kommer att ge ett avsikligt ett tomt värde

const activeSession = null; // Deklarerar en const med null som anger att det inte finns något objekt eller värde.

// === STEG 2 (Krav 3–4): KONTROLLERA OCH SKRIV UT TYPER MED TYPEOF ===

console.log("appTitle:", appTitle, "| typeof:", typeof appTitle); // Skriver ut typen för appTitle.
console.log("portNumber:", portNumber, "| typeof:", typeof portNumber); // Skriver ut typen för portNumber.
console.log("isEnabled:", isEnabled, "| typeof:", typeof isEnabled); // Skriver ut typen för isEnabled.
console.log("nextToken:", nextToken, "| typeof:", typeof nextToken); // Skriver ut typen för nextToken.
console.log("activeSession:", activeSession, "| typeof:", typeof activeSession); // Skriver ut typen för activeSession.