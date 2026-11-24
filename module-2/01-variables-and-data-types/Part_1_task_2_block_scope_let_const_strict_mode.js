// ============================================================
// UPPGIFT 6: BLOCK-SCOPE, LET/CONST & STRICT MODE
// Modul: 2 | Moment: 01 | Nivå: 2 (Svårighetsgrad: ⭐⭐ 2/5)
// Krav:
// 1. Aktivera strikt läge med "use strict"; högst upp i programmet.
//    (Ledtråd: skriv "use strict"; innan du deklarerar några variabler.)
// 2. Deklarera const courseCode = "JSE1"; och let completedModules = 1; i yttre scope.
//    (Ledtråd: använd const för kurskoden och let för antalet avklarade moduler.)
// 3. Skapa ett kodblock med { ... } (krav 3) där du deklarerar en lokal let blockStatus = "In progress";
//    och skriver ut både completedModules och blockStatus med console.log().
//    (Ledtråd: måsvingar { ... } skapar ett nytt block-scope.)
// 4. Öka completedModules med 1 efter blocket och skriv ut completedModules i konsolen.
//    (Ledtråd: completedModules += 1; uppdaterar värdet i yttre scope.)
// 5. Lägg till kommentarer på svenska med // som förklarar varje steg.
// ============================================================

// === STEG 1 (Krav 1–2): STRICT MODE OCH YTTRE VARIABLER ===

"use strict"; // Aktivera strikt läge


// # Konstant kurskod som inte ska ändras under körningen
const courseCode = "JS101"; // Yttre variabel

// # Variabel för antal avklarade moduler som kan uppdateras
let completedModules = 1; // Yttre variabel


// === STEG 2 (Krav 3): BLOCK-SCOPE MED LET ===

// klammerparanteserna indikierar på att all kod inom klammerna är inom lokal scope

{  

    // # Skriver ut värden som är åtkomliga inuti blocket
    let blockStatus = "In progress";
    
    console.log("Completed modules: (inside block):", completeModules);
    console.log("Block status", blockStatus);
    
}




// === STEG 3 (Krav 4–5): UPPDATERING EFTER BLOCKET OCH KOMMENTARER ===

completedModules += 1; // sammansatt operator som ökar värdet med 1

console.log("Completed modules (after block", completedModules); // skriver ut värdet efter uppdatering
