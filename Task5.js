//Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
// Вариант решения №1
let arr = [1, 'b', 3, 'd', 5, 'f', 7];
console.log("Длина массива равна " + arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log("Эллемента массива номер " + (i+1) + " равен " + arr[i])
}

// Вариант решения №2
//let arr = [1, 'b', 3, 'd', 5, 'f', 7];
console.log("Длина массива равна " + arr.length);


arr.forEach(function(item, index){
  console.log("Элемента массива номер " + (index+1) + " равен " + item)
})