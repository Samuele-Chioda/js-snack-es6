const biciDaCorsa = [
    { nome: 'biciUno', peso: 5 },
    { nome: 'biciDue', peso: 10 },
    { nome: 'biciTre', peso: 15 },
    { nome: 'biciQuattro', peso: 30 },
    { nome: 'biciCinque', peso: 17 }
];

let biciLeggera = biciDaCorsa[0];
for (let i = 0; i < biciDaCorsa.length; i++) {
    if (biciDaCorsa[i].peso < biciLeggera.peso) {
    biciLeggera = biciDaCorsa[i];
    }
}
const { nome, peso } = biciLeggera;
console.log(`La bici più leggera è ${nome} e pesa ${peso} kg.`);