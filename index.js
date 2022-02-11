let names = prompt("Lütfen adınızı giriniz")

let idName = document.querySelector('#name')

idName.innerHTML = names

let saat = new Date()


let navbars = document.querySelector('#navbar')

navbars.innerHTML = saat.getHours() + ":" + saat.getMinutes() + ":" + saat.getSeconds()