let value = prompt("Введите число")
value = + value

if (isNaN(value)) {
  console.log("Упс, кажется, вы ошиблись")
} else {
  if (value%2 == 0) {
      console.log("Вы ввели четное число")
  } else {
    console.log("Вы ввели нечетное число")
  }
}
