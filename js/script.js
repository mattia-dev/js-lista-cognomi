var output = document.getElementById('output');

var surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var userSurname = prompt("Qual è il tuo cognome?");

surnames.push(userSurname);

surnames.sort();

var i = 0;

while (i < surnames.length) {
    output.innerHTML += surnames[i] + "</br>";
    i++;
}

var position = surnames.indexOf(userSurname) + 1;

output.innerHTML += "Il tuo congome si trova in posizione " + position + " in ordine alfabetico.";