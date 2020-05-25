//MyJavaScript
// Indirizzi mail registrati
var iscritti = ["Marco@gmail.com", "Luca@gmail.com", "Paola@gmail.com", "Ernesto@gmail.com", "Francesca@gmail.com"];

//Registrazione mail utente
var mail = prompt("✉ Inserisci il tuo indirizzo Email");
iscritti.push(mail);
console.log("mail di registrazione", mail);
console.log("elenco iscritti", iscritti);

//login utente
var login = prompt("⏩ Fai login");
console.log("mail di login:", login);

//Variabile di appogg
var validazioneLogin = false;

//messaggio di eventuale errore a schermo
var messaggio = document.getElementById("messaggio")

//Controllo se la mail inserita é tra gli indirizzi disponibili
for (var i = 0; i < iscritti.length; i++ ) {
  console.log("indice:", i);
  console.log("indirizzi riconosciuti:", iscritti[i]);
  if (iscritti[i] === login) {
    validazioneLogin = true;
  }
}

//validazione Login
if (validazioneLogin) {
  messaggio.innerHTML = "Ciao 👌 " + login;
}else {
  messaggio.innerHTML = "Errore " + login + " ⚠️ utente non riconosciuto";
}
