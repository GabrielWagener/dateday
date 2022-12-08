var day = new Date("12/07/2022");

var dayOfWeek = day.getDay()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
var stringDay = day.toLocaleDateString("pt-BR", options).split(",")

console.log(stringDay[0])