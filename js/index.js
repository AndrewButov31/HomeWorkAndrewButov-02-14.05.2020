"use strict";
document.write("<br />1*. Написать функцию, которая очищает строку от всех не буквенно-цифровых символов.");
console.group('Задание 1');
    console.log("1*. Написать функцию, которая очищает строку от всех не буквенно-цифровых символов.");
        let line = "\"This., -/ is #! a ;: {} to $ % ^ & * book\"";
        console.log("    Начальная строка:",line);
        line = line.replace(/[.,-/#!;:{}$%^&* ]/g," ").replace(/\s+/g," ");
        console.log("    Очищеная строка от всех не буквенно-цифровых символов:",line);
console.groupEnd ('Задание 1');

document.write("<br />2. Напишите функцию zeros(num, len), которая дополняется нулями до указанной длины введенное числовое значение");
console.group('Задание 2');
console.log("2. Напишите функцию zeros(num, len), которая дополняется нулями до указанной длины введенное числовое значение.");
    function zeros(value, numberOfZeros) {
        if (value > 0){
            return (Array(numberOfZeros).join('0') + value).slice(-numberOfZeros);
        } else{
            value = value* (-1);
            return Array(['-'])+(Array(numberOfZeros).join('0') + value).slice(-numberOfZeros);
        }
    }
        const numb = zeros(-300, 6);
    console.log("   Число дополненное нулями:",numb);
console.groupEnd ('Задание 2');

document.write("<br />3. Напишите функцию которая переводит введенную строку в верблюжий регистр (CamelCase).");
console.group('Задание 3');
console.log("3. Напишите функцию которая переводит введенную строку в верблюжий регистр (CamelCase).");
    const str = prompt("Введите строку: ")
    console.log("   Вы ввели следующую строку -",str);
    function camelCase(str1) {
        return str1.toLowerCase().split(" ").map((currentValue,index )=> index == 0 ? currentValue : currentValue[0].toUpperCase() + currentValue.slice(1)).join('');
    }
    console.log("   Строка в верблюжем регистре (CamelCase):",camelCase(str));
console.groupEnd ('Задание 3');

document.write("<br />4*. Получить массив , элементы которого являются числами фибоначчи. Размер массива (количество элементов) задает пользователь.\n" +
    "    Для определения (вычисления) элемента создать функцию-рекурсию");
console.group('Задание 4');
    console.log("4*. Получить массив , элементы которого являются числами фибоначчи. Размер массива (количество элементов) задает пользователь.\n" +
        "    Для определения (вычисления) элемента создать функцию-рекурсию (Сделал не рекурсией)");
    let n1 = +prompt("4. Задайте размер ряда Фибоначчи - ");
    console.log(`   Вы задали размер ряда Фибоначчи = ${n1}`);
    function fib(n) {
        return (arrFib[n-1] + arrFib[n-2]);
    }
    let arrFib = [0,1];
    for (let i = 2; i <= n1; i++)
    {
        arrFib.push(fib(i));
    }
    console.log(`   Массив элементов ряда Фибоначчи -${arrFib}`);
console.groupEnd ('Задание 4');

document.write("<br />5. Создайте массив и отфильтруйте его, удалив все отрицательные и нулевые элементы.");
console.group('Задание 5');
    console.log("5. Создайте массив и отфильтруйте его, удалив все отрицательные и нулевые элементы.");
    const arr1 = [-1, 1, 2, 0, -2, 5];
    const arrayWithoutNegativeNull = arr1.filter(item => item > 0);
    console.log("   Начальный массив чисел:",arr1);
    console.log("   Отфильтрованый массив с удаленными отрицательными и нулевыми элементами: ",arrayWithoutNegativeNull);
console.groupEnd ('Задание 5');

document.write("<br />6*. Создайте классы Художник (имя, фамилия, контактные данные) и Картина (название, год, техника выполнения, размеры).\n" +
    "Реализуйте методы для создания объектов. Реализуйте свойство количество работ (у художника) и обновляйте его при\n" +
    "добавлении новой работы. Выведите информацию о художника, его работы и их количество.\n" +
    "P.S техника выполнения - акрил, масло, акварель, графика, другое.");
console.group('Задание 6');
    console.log("6*. Создайте классы Художник (имя, фамилия, контактные данные) и Картина (название, год, техника выполнения, размеры).\n" +
        "Реализуйте методы для создания объектов. Реализуйте свойство количество работ (у художника) и обновляйте его при\n" +
        "добавлении новой работы. Выведите информацию о художника, его работы и их количество.\n" +
        "P.S техника выполнения - акрил, масло, акварель, графика, другое. (Не сделал выведите работ художника)");
    class Painter {
        constructor(firstName, lastName, contactDetails){
            this.name = firstName;
            this.surname = lastName;
            this.contact = contactDetails;
        }
    }
    class Picture extends Painter{
        constructor(firstName, lastName, contactDetails, namePicture, year, technique, size){
            super(firstName, lastName, contactDetails);
            this.namePicture = namePicture;
            this.year = year;
            this.technique = technique;
            this.size = size;
            Picture.count +=1;
        }
    }
    Picture.count = 0;
    const painter1 = new Painter("name1","surname1",123456789);
    const picture1 = new Picture("name1","surname1",123456789,"namePicture1",2020, "акрил", "80x80");
    const picture2 = new Picture("name1","surname1",123456789,"namePicture2",2020, "масло", "80x80");
    const picture3 = new Picture("name1","surname1",123456789,"namePicture3",2020, "акварель", "80x80");
    const picture4 = new Picture("name1","surname1",123456789,"namePicture4",2020, "графика", "80x80");
    const picture5 = new Picture("name1","surname1",123456789,"namePicture5",2020, "другое", "80x80");
    console.log(painter1);
    console.log(picture1);
    console.log(picture2);
    console.log(picture3);
    console.log(picture4);
    console.log(picture5);
    console.log("Информация о художнике",painter1,"Количество работ =",Picture.count);
console.groupEnd ('Задание 6');
