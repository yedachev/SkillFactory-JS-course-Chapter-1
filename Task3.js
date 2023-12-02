//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let word = prompt("Введите слово");
let wordLength = word.length;
console.log("Вы ввели слово " + word);

let lastIndex;
let prelastIndex;
let result = '';

for (let i = 0; i < wordLength; i++) {
lastIndex = wordLength - i;
prelastIndex = lastIndex - 1; 
result = result + word.slice(prelastIndex,lastIndex)
}
console.log("Если написать его в обратном порядке, то получится " + result)
