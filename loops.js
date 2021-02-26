const color = ["yellow", "blue", "red", "orange"]
var i = 0;

// while loop
console.log("while loop");
while (i <= 3) {
    console.log(color[i]);
    i++;
}

//for loop
console.log("for loop");
for (j = 0; j < color.length; j++) {
    console.log(color[j]);
};

//forEach array
console.log("forEach array");
color.forEach(x => console.log(x));

//antwoorden:
//1. de loop zelf 5 regels, maar bij de while moet je ook eerst de i nog benoemen
//2. 1 hele regels
//3. bij de for en while loops moet je ook je i benoemen, en aangeven wanneer je stopt,
//   bij de forEach is het meteen duidelijk dat je alle elementen in je array gebruikt
//4. nee je bent niet aan het itereren, want het is 1 handeling, en wordt niet herhaald.
//   zie voorbeeld hieronder:
const persoon = {
    naam: "Sander",
    leeftijd: 48,
    lengte: 170,
    gewicht: 100,
    schoenmaat: 42,
}

const entries = Object.entries(persoon)
console.log(entries);

