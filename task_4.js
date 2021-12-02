// Модуль 7.4. Задание 4

/*
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, 
подумайте, какими свойствами он обладает.
*/

function ElectroPribor() {
    this.work = 'powerSocket'
    this.name = 'branding'
}
ElectroPribor.prototype.gettakePower = function (takePower) {
    console.log(`Потребляемая мощность микроволновки ${takePower} Ватт/час`)
}

function homeElectroPribor(device, branding) {
    this.device = device,
    this.name = branding
}
homeElectroPribor.prototype = new ElectroPribor()

homeElectroPribor.prototype.gettakePower = function (takePower) {
    console.log(`Потребляемая мощность холодильника  ${takePower} Ватт/час`)
}

const microwave = new ElectroPribor('microwave', 'Samsung');
const fridge = new homeElectroPribor('fridge', 'Indesit');

microwave.gettakePower(1500)
fridge.gettakePower(300000)

console.log(microwave)
console.log(fridge)