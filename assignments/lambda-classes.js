// CODE here for your Lambda Classes
class Person{
    constructor(properties){
        this.name = properties.name;
        this.age = properties.age;
        this.location = properties.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
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
        console.log("My favorite subjects are: ");
        return this.favSubjects;
    }
    PRassignment(Student, subject){
        return `${Student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(Student, subject){
        return `${Student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Instructor{
    constructor(properties){
        super(properties);
        this.gradClassName = properties.gradClassName;
        this.favInstructor = properties.favInstructor;
        }
        standUp(name, channel){
            return `${this.name} announces to ${channel}, @channel standy times!`
        }
        debugsCode(name, Student, subject){
            return `${this.name} debugs ${Student.name}'s code on ${subject}`
        }
    }
const brit = new Instructor({
    name: 'Brit',
    age: 31,
    location: 'Canada',
    specialty: 'HTML, CSS, JS',
    favLang: 'JavaScript',
    catchPhrase: 'Everyone else spells "colour" wrong',

});
const jon = new Student({
    name: 'Jon',
    age: '22',
    location: 'usa',
    previousBackground: 'Construction',
    className: 'web23',
    favSubjects: ['HTML', 'CSS', 'JS']
});
const itel = new ProjectManagers({
    name: 'Itel',
    age: 28,
    location: 'Texas',
    specialty: 'Full-Stack Web Dev',
    favLang: 'CSS',
    gradClassName: 'Web18',
    favInstructor: 'Josh Knell'
});
console.log(brit.demo('JavaScript'));
console.log(brit.grade(jon, 'CSS'));
console.log(jon.PRassignment(jon,'JavaScript III'));
console.log(jon.listsSubjects());
console.log(jon.sprintChallenge(jon, 'JavaScript Fundamentals'));
console.log(itel.standUp(itel, 'web_25 itel'));
console.log(itel.debugsCode(itel, jon, 'JavaScript'));
console.log(jon.speak());