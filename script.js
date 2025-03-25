// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log sound message
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Dog class inheriting from Animal
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Cat class inheriting from Animal
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
