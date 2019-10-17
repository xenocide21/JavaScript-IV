// CODE here for your Lambda Classes
class Person{
    constructor(properties){
        this.name = properties.name;
        this.age = properties.age;
        this.location = properties.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(properties){
        super(properties);
        this.specialty = properties.specialty;
        this.favLang = properties.favLang;
        this.catchPhrase = properties.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(Student, subject){
        return `${Student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(properties){
        super(properties);
        this.previousBackground = properties.previousBackground;
        this.className = properties.className;
        this.favSubjects = properties.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`
    }
    PRassignment(subject){
        return `${Student.name} has submitted a PR for ${subject}`
    }
}
