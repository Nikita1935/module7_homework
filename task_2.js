// Модуль 7.3 Задание 2

/*
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

function obj () {

    const value = {
    color: 'red',
    age: 123
}

console.log('color' in value);
console.log('name' in value);
}

console.log(obj())