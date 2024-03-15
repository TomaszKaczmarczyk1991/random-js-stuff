class Musician{
    constructor(firstName, lastName, instrument){
        this.firstName = firstName;
        this.lastName = lastName;
        this.instrument = instrument;
    }
}

const drummer = new Musician('Chad', 'Smith', 'Drums');
const guitarist = new Musician('John', 'Frusciante', 'Electric Guitar');
const bassist = new Musician('Michael', 'Balzary', 'Bass Guitar');
const vocalist = new Musician('Anthony', 'Kiedys');

console.log(drummer, guitarist, bassist, vocalist);