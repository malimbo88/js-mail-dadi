//MyJavaScript

//Dado da 6
var dado = [1, 2, 3, 4, 5, 6]
console.log("tiro dei dadi ", dado)

//Due sfidanti
var cpu = Math.floor(Math.random() * 6) + 1;
var uman = Math.floor(Math.random() * 6) + 1;
console.log("punteggio cpu ", cpu)
console.log("punteggio uman ", uman)

//lancio dei dadi
for (var i = 0; i < 6; i++) {
  console.log("lancio ", i)
}
