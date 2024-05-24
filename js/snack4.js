const squadre = [
    { nome: 'Inter', punti: 0, falli: 0 },
    { nome: 'Juve', punti: 0, falli: 0 },
    { nome: 'Milan', punti: 0, falli: 0 },
    { nome: 'Cagliari', punti: 0, falli: 0 },
    { nome: 'Lecce', punti: 0, falli: 0 }
];

for (let index = 0; index < squadre.length; index++) {
    const squadra = squadre[index];
    squadra.punti = Math.floor(Math.random()*100);
    squadra.falli = Math.floor(Math.random()*100);
}

const nomeFalli = [];

for (let index = 0; index < squadre.length; index++) {
    let { nome, falli } = squadre[index];
    nomeFalli.push({nome, falli});
}
console.log(nomeFalli);


const nomePunti = [];

for (let x=0; x < squadre.length; x++) {
    let { nome, punti } = squadre[x];
    nomePunti.push({nome, punti});
}
console.log(nomePunti);