//MyJavaScript
// Indirizzi mail registrati
var iscritti = ["Marco@gmail.com", "Luca@gmail.com", "Paola@gmail.com", "Ernesto@gmail.com", "Francesca@gmail.com"];

//Registrazione mail utente
var mail = prompt("Inserisci il tuo indirizzo Email");
iscritti.push(mail);
console.log("mail di registrazione", mail);
console.log("elenco iscritti", iscritti);

//login utente
var login = prompt("Fai login");
console.log("mail di login:", login);

//Controllo se la mail inserita é tra gli indirizzi disponibili
for (var i = 0; i < iscritti.length; i++ ) {
  console.log("indice:", i);
  console.log("indirizzi riconosciuti:", iscritti[i]);

  // pongo come istruzione condizionale che la mail inserita sia contenuta nel mio Array
  if (iscritti[i] === login) {
    console.log("indirizzo esatto:", login);
    alert("Indirizzo esatto!");
  }else {
    console.log("indirizzo sbagliato:", login);
    var errore = document.getElementById('errore')
    errore.innerHTML = "errore"
  }
}
