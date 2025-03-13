"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
        if (this.constructor === Person)
            Person.list.push(name);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    info() {
        console.log(`INFO:${this.constructor.name} - ${this.name} - ${this.age}`);
    }
}
Person.list = [];
class Teacher extends Person {
    constructor(name, age, materia) {
        super(name, age);
        this.materia = materia;
        this.materia = materia;
        if (this.constructor === Teacher)
            Teacher.list.push(name);
    }
    getMateria() {
        return this.materia;
    }
    setMateria(materia) {
        this.materia = materia;
    }
    info() {
        console.log(`INFO:${this.constructor.name} - ${this.name} - ${this.age} - ${this.materia}`);
    }
}
Teacher.list = [];
const p1 = new Person('Adrian', 21);
const t1 = new Teacher('Emilia', 20, 'English');
const p2 = new Person('Carla', 31);
const p3 = new Person('Maria', 41);
console.log(Person.list);
console.log(Teacher.list);
