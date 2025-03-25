// Animal Class
class Animal {
    constructor(species) {
        this._species = species; // Using underscore to indicate a private variable
    }

    get species() {
        return this._species; // Getter method to return species
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Cat Class (inherits from Animal)
class Cat extends Animal {
    constructor(species) {
        super(species); // Calls the parent class (Animal) constructor
    }

    purr() {
        console.log("purr");
    }
}

// Dog Class (inherits from Animal)
class Dog extends Animal {
    constructor(species) {
        super(species); // Calls the parent class (Animal) constructor
    }

    bark() {
        console.log("woof");
    }
}

// Example Usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof
