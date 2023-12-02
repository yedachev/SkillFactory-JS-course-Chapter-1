// Создайте произвольный массив Map. 
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.


// Задаем ассоциативные массивы разными способовами
// Способ №1
let motorbike_1= {
    'Manufacturer': "Suzuki",
    'Model': "Hayabusa",
    'Engine displacement': 1300,
    'Kill features': "Inheritance",
    };
    
    // Способ №2
    let motorbike_2 = new Map();
    motorbike_2.set("Manufacturer", "Kawasaki");
    motorbike_2.set("Model", "H2 SX");
    motorbike_2.set("Engine displacement", 998);
    motorbike_2.set("Kill features", "Supercharged");
    
    // Способ №3
    let motorbike_3 = new Map();
    motorbike_3.set("Manufacturer", "BMW")
    motorbike_3.set("Model", "K1300S")
    motorbike_3.set("Engine displacement", 1300)
    motorbike_3.set("Kill features", "Front suspension")
    
    // Пробуем вывести в консоль
    // почему работает по разному?
    console.log(motorbike_1);
    console.log(motorbike_2);
    console.log(motorbike_3);
    
    // почему код для motorbike_1 не работает??
    // console.log("Выводим значения ассоциативного массива motorbike_1")
    // for(let [key, value] of motorbike_1){
    //   console.log(`Ключ — ${key}, значение — ${value}`);
    // }
    
    console.log("Выводим значения ассоциативного массива motorbike_2")
    for(let [key, value] of motorbike_2){
      console.log(`Ключ — ${key}, значение — ${value}`);
    }
    
    console.log("Выводим значения ассоциативного массива motorbike_3")
    for(let [key, value] of motorbike_3){
      console.log(`Ключ — ${key}, значение — ${value}`);
    }