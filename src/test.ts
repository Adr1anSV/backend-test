class Person {
  static list: string[] = []
  constructor(protected name: string, protected age: number) {
    this.name = name
    this.age = age
    if (this.constructor === Person) Person.list.push(name)
  }

  getName() {
    return this.name
  }
  setName(name: string) {
    this.name = name
  }
  getAge() {
    return this.age
  }
  setAge(age: number) {
    this.age = age
  }

  info() {
    console.log(`INFO:${this.constructor.name} - ${this.name} - ${this.age}`)
  }
}

class Teacher extends Person {
  static list: string[] = []
  constructor(name: string, age: number, private materia: string) {
    super(name, age)
    this.materia = materia
    if (this.constructor === Teacher) Teacher.list.push(name)
  }

  getMateria() {
    return this.materia
  }
  setMateria(materia: string) {
    this.materia = materia
  }

  override info(): void {
    console.log(`INFO:${this.constructor.name} - ${this.name} - ${this.age} - ${this.materia}`)
  }
}

const p1 = new Person('Adrian', 21)
const t1 = new Teacher('Emilia', 20, 'English')
const p2 = new Person('Carla', 31)
const p3 = new Person('Maria', 41)
console.log(Person.list)
console.log(Teacher.list)
