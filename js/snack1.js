// array invitati
const guestName = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'George Clooney',
    'Amal Clooney',
    'Fedez',
    'Amadeus',
    'Fiorello'
];

const tableName = 'Table Vip';
const place = [];

for (let index = 0; index < guestName.length; index++) {
    const guest = guestName[index];
    const postoAlTavolo = {
        tableName: tableName,
        guest: guest,
        place: index + 1 
    };
    place.push(postoAlTavolo);
};
console.log(place);