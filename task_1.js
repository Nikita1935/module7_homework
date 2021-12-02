// Модуль 7.3 Задание 1
/*
Написать, функцию, которая принимает в качестве аргумента объект и 
выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
*/

function people() {
    const person = {
        firstname: 'Dima',
        age: 30,
        leave: 'Spain'
    }
    for (let key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(key)
        }
    }
}
console.log(people())
