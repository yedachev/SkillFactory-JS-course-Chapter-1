let x

switch (typeof x) {
  case ("number"):
    console.log("x это number");
    break;
  case ("string"):
    console.log("x это string");
    break;
  case ("boolean"):
    console.log("x это boolean");
    break;
  default:
    console.log("Переменной Х не было присвоено значение")
}