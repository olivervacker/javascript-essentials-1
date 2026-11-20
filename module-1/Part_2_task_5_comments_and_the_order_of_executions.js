// ============================================================
// UPPGIFT 3: KOMMENTARER OCH EXEKVERINGSORDNING
// Modul: 1 | Moment: 02 | Nivå: 1 (Svårighetsgrad: ⭐ 1/5)
// Krav:
// 1. Skriv en flerradig kommentar (/* ... */) på svenska som förklarar vad filen testar.
//    (Ledtråd: börja med /* och avsluta med */ – allt däremellan ignoreras.)
// 2. Skriv en console.log("First step") och en radkommentar (//) på svenska före den.
// 3. Skriv en console.log("Second step") direkt efter första utskriften.
//    (Ledtråd: ordningen på raderna avgör ordningen i konsolen.)
// 4. Kommentera bort en testrad med console.log("Skipped step") med // så den inte körs.
// 5. Kör filen med Node.js i terminalen och kontrollera utskriften.
// ============================================================


// Denna fil testar hur JavaScript hanterar blockkommentarer, 
// radkommentarer samt i vilken ordning satser körs.

// // = En kommentar som sträcker sig från // till slutet av raden. Används för korta förklaringar på en enskild rad.

// 7* */ = En kommentar som kan skriva över flera rader mellan /* och */. Används när du vill skriva en längre förklaring eller tillfälligt kommentera bort flera rader kod.


// === STEG 1: FLERRADIG KOMMENTAR ===

/* filen testar att skriva ut olika texter i konsolen */

console.log("First step");

console.log("Second step");



// === STEG 2: EXEKVERINGSORDNING OCH BORTKOMMENTERAD RAD ===

// console.log("Skipped step");