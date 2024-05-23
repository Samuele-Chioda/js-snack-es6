let nomiStudenti = [
    'Giuseppina della Rovere',
    'Paola Cortellessa',
    'Andrea Mantegna',
    'Gaia Borromini',
    'Luigi Grimaldello',
    'Piero della Francesca',
    'Francesca da Polenta'
];

const nomiMaiuscolo = [];

for (let index = 0; index < nomiStudenti.length; index++) {
    const nome = nomiStudenti[index];
    const nomeMaiusc = nome.toUpperCase();
    nomiMaiuscolo.push(nomeMaiusc);
};

console.log(nomiMaiuscolo);



const studenti = [
    { id: 101, nomeStudenti: 'Giuseppina della Rovere', totaleVoti: 85 },
    { id: 102, nomeStudenti: 'Paola Cortellessa', totaleVoti: 55 },
    { id: 103, nomeStudenti: 'Andrea Mantegna', totaleVoti: 78 },
    { id: 104, nomeStudenti: 'Gaia Borromini', totaleVoti: 90 },
    { id: 105, nomeStudenti: 'Luigi Grimaldello', totaleVoti: 65 },
    { id: 106, nomeStudenti: 'Piero della Francesca', totaleVoti: 45 },
    { id: 107, nomeStudenti: 'Francesca da Polenta', totaleVoti: 72 }
];

const studentiVotoAlto = [];
for (let index = 0; index < studenti.length; index++) {
    const studente = studenti[index];
    if (studente.totaleVoti > 70) {
        studentiVotoAlto.push(studente);
    }
};

for (let index = 0; index < studentiVotoAlto.length; index++) {
    const studente = studentiVotoAlto[index];
    let nomeStudente = studente.nomeStudenti;
    let risultato = "Lo studente " + nomeStudente + " ha voti sopra la media.";
    console.log(risultato);
};

