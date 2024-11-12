let number = document.querySelector(".number")
let i = 0
let b = 10

function countup() {
  i++
  number.innerHTML = i.toString(b)
}

function countdown() {
  i--
  number.innerHTML = i.toString(b)
}

function countreset() {
  i = 0
  number.innerHTML = i.toString(b)
}

function setbinary() {
  b = 2
  number.innerHTML = i.toString(b)
}

function setdecimal() {
  b = 10
  number.innerHTML = i.toString(b)
}

function sethexadecimal() {
  b = 16
  number.innerHTML = i.toString(b)
}