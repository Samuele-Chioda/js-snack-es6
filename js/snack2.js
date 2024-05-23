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
    const nomeMaiuscolo = nome.toUpperCase();
    nomiMaiuscolo.push(nomeMaiuscolo);
};

console.log(nomiStudenti);
