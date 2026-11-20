// ============================================================
// UPPGIFT 2: VARIABLER OCH UTSKRIFTER (LET & CONST)
// Modul: 1 | Nivå: 1 (Svårighetsgrad: ⭐ 1/5)
// Krav:
// 1. Skapa en konstant med namnet courseName och värdet "JavaScript Essentials 1".
//    (Ledtråd: använd nyckelordet const och dubbla citattecken för textsträngen.)
// 2. Skapa en variabel med namnet currentModule och värdet 1.
//    (Ledtråd: använd let eftersom modulnumret kan ändras senare, och skriv 1 utan citattecken.)
// 3. Skriv ut både courseName och currentModule i konsolen med console.log().
//    (Ledtråd: du kan skicka in etikett och variabel separerade med kommatecken.)
// 4. Kommentera koden på svenska med // som förklarar vad varje steg gör.
// 5. Kör filen med Node.js i terminalen och kontrollera utskriften.
// ============================================================


// const = Deklarerar en variabel vars bindning/värde inte ska skrivas över igen.
// Används som standard när ett värde ska vara konstant under körningen.

// let = Deklarerar en variabel vars bindning/värde som kan ändras.
// Används när ett värde kan uppdateras eller ändras längre fram i koden.



// === STEG 1: DEKLARERA VARIABLER ===

// const deklarerar en konstant variabel som kan inte ändras.
// courseName är namnet på variabeln.
// '=' är operatorn som används för att assignera/ tilldela ett värde till variabeln.
// '=' initierar också en variabel med värde
// JavaScript Essentials = är själva värde på variabeln som är en sträng.


const courseName = "JavaScript Essentials 1"; 

let currentModule = 1;

// === STEG 2: SKRIV UT VÄRDEN I KONSOLEN ===

console.log( "Course: " + courseName); // Skriv ut courseName i konsolen.
console.log("Current module:", currentModule)