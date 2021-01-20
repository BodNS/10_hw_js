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
//task2 
/*
//task3 вывести элементы массива после первого нуля
const arr2 = [1,7,-9,5,-3,0,2,1,-4,0,4,77];
console.log(arr2.slice(arr2.indexOf(0)+1));
*/
//task4 
