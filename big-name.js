
const names =['adom', 'amin', 'alamin', 'fuad', 'mijanur'];

let bigNameCharacters = 0;
let bigName;

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const characters = name.length;
    if (characters> bigNameCharacters) {
        bigNameCharacters = characters;
        bigName = name;
        
    }

    
}
console.log(bigName);