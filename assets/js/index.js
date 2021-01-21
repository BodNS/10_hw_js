/*
//task1 создать класс, выводящий массив используя Symbol.iterator
class ArrIterator {
  constructor (arr) {
    this._arr = arr;
    this._start = 0;
  }

  getArr () {
    return this._arr;
  }

   next () {
     if (this._start >= this._arr.length) {
       return {
         value: undefined,
         done: true,
       };
     }
    
    return {value: this._arr[this._start++],
            done: false,
  } 
 }

  printArr () {
    for (const i of this._arr) {
    console.log(this.next().value);
    }
  }
}

const arr1 = new ArrIterator ([1,2,3,4,5]);
*/
//task2 создать класс Stud который наследует класс User(name, surname) и имеет свойство year-год поступления в вуз. Реализовать getFullName() (наследуется от User)содержит еще метод getCourse() - вывод курса студента от 1 до 5 и вычисляется как текущий год минус год поступления. Текущий год получить самостоятельно
//2* подсчитать количество студентов (через static)
/*
class User {
  constructor(name, surname) {
    if (typeof name != "string" || typeof surname != "string") {
      throw new Error("The name & surname must be a string");
    }

    this._name = name;
    this._surname = surname;
  }

  set name(value) {
    if (typeof value != "string") {
      throw new Error("The name must be a string");
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set surname(value) {
    if (typeof value != "string") {
      throw new Error("The surname must be a string");
    }
    this._surname = value;
  }

  get surname() {
    return this._surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Stud extends User {
  static count = 0;
  constructor(name, surname, year) {
    if (typeof year != "number" || isNaN(year)) {
      throw new Error("The year must be a number");
    }

    super(name, surname);
    this._year = year; //год поступления
    Stud.count++;
  }

  set year(value) {
    if (typeof value != "number" || isNaN(value)) {
      throw new Error("The surname must be a number");
    }
    this._year = value;
  }

  get year() {
    return this._year;
  }

  getFullName() {
    return super.getFullName();
  }

  getCourse() {
    const course = new Date().getFullYear() - this.year;
    return ((course) => 1 && course <= 5)
      ? course
      : "The student dosen't study";
  }
}

const stud1 = new Stud("Vasia", "Ivanov", 2020);
*/
/*
//task3 вывести элементы массива после первого нуля
const arr2 = [1,7,-9,5,-3,0,2,1,-4,0,4,77];
console.log(arr2.slice(arr2.indexOf(0)+1));
*/
//task4 [1,2,3,[4,5,[6,7,8,9],10,11,12],13,14,15]
//добыть 5, 8
//добыть [6,7,8,9]
//добыть все кроме 1,2,3  
const arr = [1,2,3,[4,5,[6,7,8,9],10,11,12],13,14,15];
const [,,,[,five,[,,eight]]] = arr;
console.log(five, eight);
const [,,,[,,[...arr2]]] = arr;
console.log (arr2);
console.log('******');
const [,,,...arr3] = arr;
console.log ('arr3 ', arr3);
const [[,,...arr4],...arr5] = arr3;
console.log ('arr4 ',arr4, 'arr5 ',arr5);
const [,,,...[four, five2,[arr22],...arr33],...arr44] = arr;
console.log(four,five2,...arr22,...arr33,...arr44);
