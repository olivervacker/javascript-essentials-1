// ============================================================
// UPPGIFT 5: VARIABLER, NAMNGIVNING, LET/CONST & STRICT MODE
// Modul: 2 | Moment: 01 | Nivå: 1 (Svårighetsgrad: ⭐ 1/5)
// Krav:
// 1. Aktivera strikt läge med "use strict"; högst upp i programmet.
//    (Ledtråd: skriv "use strict"; som en textsträng med semikolon innan variabler skapas.)
// 2. Skapa en konstant med namnet studentName och värdet "Oliver" samt en let-variabel
//    med namnet score och värdet 10.
//    (Ledtråd: använd const för värdet som inte ändras och let för värdet som ska ändras.)
// 3. Uppdatera score till 15 och skriv ut studentName och score med console.log().
//    (Ledtråd: skriv bara score = 15; utan att deklarera om med let.)
// 4. Lägg till kommentarer på svenska med // som förklarar varje steg.
// ============================================================



/* Ett direktiv som aktiverar strikt läge i JavaScript (ofta överst i en fil eller funktion). 
Hjälper dig fånga misstag som att råka tilldela en odeklarerad variabel.

Variabelnamn får inte börja med siffra eller vara reserverade nyckelord (let, const, class, return).

*/


// === STEG 1 (Krav 1): AKTIVERA STRICT MODE ===

"use strict"; // Aktivera strikt läge



// === STEG 2 (Krav 2): SKAPA KONSTANT OCH LET-VARIABEL ===

const studentName = "Oliver";

let score = 10; // Skriv bara score = 10; utan att deklarera om med let.


// === STEG 3 (Krav 3–4): UPPDATERA VÄRDE OCH SKRIV UT ===

score = 15; // Uppdatera värdet på score

console.log("Student", studentName);

console.log("Score", score);