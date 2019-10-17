/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }

    destroy() {
        return `${this.name} was killed`
    }
}

class CharacterStats extends GameObject{
    constructor(attributes) {
        super(attributes);
        this.healthPoints = attributes.healthPoints;
        this.skillPoints = attributes.skillPoints;
        this.level = attributes.level;
        this.experience = attributes.experience;
        this.name = attributes.name;
    }
    takeDamage(){
        return `${this.name} took damage`
    }
}

class Humanoid extends CharacterStats{
    constructor(attributes) {
        super(attributes);
        this.guild = attributes.guild;
        this.faction = attributes.faction;
        this.language = attributes.language;
        this.weapons = attributes.weapons;
    }
    greet(){
        return `${this.name} says "prepare for battle" in ${this.language}`
    }
}

class Oracle extends Humanoid{
    constructor(attributes){
        super(attributes);
        this.manaPoints = attributes.manaPoints;
        this.magicPower = attributes.magicPower;
    }
    spellHeal(Humanoid){
        return `${this.name} uses Healing spell to regenerate life to ${Humanoid.name}`
    }
    spellRes(Humanoid){
        return `${this.name} casts resurrection spell on ${Humanoid.name}`
    }
}

class Warrior extends Humanoid{
    constructor(attributes){
        super(attributes);
        this.rage = attributes.rage;
        this.attackPower = attributes.attackPower;
    }
    heavyBlow(){
        return `${this.name} deals a heavy blow.`
    }
}

const oracle = new Oracle({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    level: 1,
    experience: 0,
    healthPoints: 5,
    skillPoints: 3,
    manaPoints: 10,
    magicPower: 7,
    name: 'Yuui',
    guild: 'Legion',
    faction: 'Union of Fury',
    weapons: ['Optare Rogar II'],
    language: 'Vail',
});

const KhaosSlayer = new Warrior({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    level: 1,
    experience: 0,
    healthPoints: 15,
    skillPoints: 8,
    rage: 18,
    attackPower: 11,
    name: 'KhaosSlayer',
    guild: 'Legion',
    faction: 'Union of Fury',
    weapons: ['Mellan Skia II'],
    language: 'Nordein',
});

const ranger = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    level: 1,
    experience: 0,
    healthPoints: 10,
    skillPoints: 6,
    name: 'Lilith',
    guild: 'Forest Kingdom',
    faction: 'Alliance of Light',
    weapons: ['Artraiya Adein'],
    language: 'Human Common',
});

console.log(oracle.createdAt); // Today's date
console.log(ranger.dimensions); // { length: 1, width: 2, height: 4 }
console.log(KhaosSlayer.healthPoints); // 15
console.log(oracle.name); // Yuui
console.log(KhaosSlayer.faction); // Union of Fury
console.log(oracle.weapons); // Optare Rogar II
console.log(ranger.language); // Vail
console.log(KhaosSlayer.guild); //KhaosSlayer's Guild
console.log(ranger.greet()); // Lilith offers a greeting in common.
console.log(oracle.greet());
console.log(oracle.takeDamage()); // Yuui took damage.
console.log(oracle.spellHeal(KhaosSlayer));
console.log(KhaosSlayer.destroy()); // KhaosSlayer was killed.
console.log(oracle.spellRes(KhaosSlayer));
console.log(KhaosSlayer.heavyBlow());


// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!