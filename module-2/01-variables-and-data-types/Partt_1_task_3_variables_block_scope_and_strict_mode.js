// ============================================================
// UPPGIFT 7: VARIABLER, BLOCK-SCOPE & STRICT MODE (NIVÅ 3)
// Modul: 2 | Moment: 01 | Nivå: 3 (Svårighetsgrad: ⭐⭐⭐ 3/5)
// Krav:
// 1. Aktivera strikt läge med "use strict"; högst upp i filen.
//    (Ledtråd: se till att "use strict"; står som allra första satsen.)
// 2. Skapa konstanterna const maxAttempts = 3; och const serviceName = "AuthService";
//    samt variabeln let currentAttempt = 1;.
//    (Ledtråd: använd const för värden som är fasta och let för räknaren.)
// 3. Skapa ett block { ... } som skriver ut serviceName och currentAttempt och ökar
//    currentAttempt med 1.
//    (Ledtråd: inuti blocket kan du även deklarera en lokal let blockTag = "Block A";.)
// 4. Skapa ett andra separat block { ... } med en egen lokal variabel let blockTag = "Block B";
//    och skriv ut currentAttempt samt blockTag.
//    (Ledtråd: eftersom blockTag är deklarerad med let inuti respektive block krockar de inte.)
// 5. Lägg till kommentarer på svenska med // som förklarar varje steg.
// ============================================================

// === STEG 1 (Krav 1–2): STRICT MODE OCH VARIABLER ===

"use strict"; // Aktivera strict mode för att försäkra att du inte gör något fel i din kod.


// Konstanter för maximalt antal försök och tjänstens namn

const maxAttempts = 3;

const serviceName = "AuthService";

let currentAttempt = 1; // Räknarer för aktuell försök kommer att ökas med 1 (currentAttempt = currentAttempt + 1).


// === STEG 2 (Krav 3): FÖRSTA BLOCKET ===

{ // lokal variabel som bara existerar i det första blocket

    let blockTag = "Block A";

    console.log(serviceName, currentAttempt); // Skriv ut currentAttempt och blockTag.

    currentAttempt += 1; // Compound assignment operator. Uppdatera currentAttempt med 1 (+= = currentAttempt + 1).

}




// === STEG 3 (Krav 4–5): ANDRA BLOCKET OCH KOMMENTARER ===

{ // andra blocket

    let blockTag = "Block B";
    
    console.log(currentAttempt, blockTag); // Skriv ut currentAttempt och blockTag.

}