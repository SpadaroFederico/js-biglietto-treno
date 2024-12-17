// Costanti
const PREZZO_AL_KM = 0.21;
const SCONTO_MINORI = 0.20;  // 20% di sconto
const SCONTO_OVER65 = 0.40;  // 40% di sconto

// Input dell'utente
let km = prompt("Quanti chilometri vuoi percorrere?");
let eta = prompt("Qual è la tua età?");

  // Calcolo del prezzo base
  let prezzoBase = km * PREZZO_AL_KM;

  // Applicazione sconto in base all'età
  let sconto = 0;

  if (eta < 18) {
    sconto = prezzoBase * SCONTO_MINORI;
    alert(` è stato applicato uno sconto del 20% `);
  
} else if (eta > 65) {
    
    sconto = prezzoBase * SCONTO_OVER65;
    alert(` è stato applicato uno sconto del 40% `);
  }

  // Calcolo del prezzo finale
  const prezzoFinale = prezzoBase - sconto;

  // Output del prezzo con massimo due decimali
  alert(`Il prezzo totale del viaggio è: €${prezzoFinale.toFixed(2)}`);

