function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var numbers = document.querySelectorAll('.numbers');

function elements() {
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = getRandomInt(1, 9);
  }
}

elements();

// function upDate() {
//   document.getElementsByClassName('numbers')[1].classList.add(
//     'highlight');
// document.getElementsByClassName('numbers')[2].classList.add(
//   'highlight');
// document.getElementsByClassName('numbers')[3].classList.add(
//   'highlight');
// // document.getElementsByClassName('numbers')[4].classList.add(
//   'highlight');
// document.getElementsByClassName('numbers')[5].classList.add(
//   'highlight');
// document.getElementsByClassName('numbers')[6].classList.add(
//   'highlight');
// document.getElementsByClassName('numbers')[7].classList.add(
//   'highlight');
// document.getElementsByClassName('numbers')[8].classList.add(
//   'highlight');
// document.getElementsByClassName('numbers')[9].classList.add(
//   'highlight');
//}

var numbers = document.getElementsByClassName('numbers');

for (var i = 0; i < numbers.length; i++) {
  numbers[i].classList.remove('highlight');
}

if (numbers[0].innerHTML === numbers[1].innerHTML) {
  numbers[0].classList.add("highlight");
  numbers[1].classList.add("highlight");
}
if (numbers[1].innerHTML === numbers[2].innerHTML) {
  numbers[1].classList.add("highlight");
  numbers[2].classList.add("highlight");
}
if (numbers[0].innerHTML === numbers[2].innerHTML) {
  numbers[0].classList.add("highlight");
  numbers[2].classList.add("highlight");
}

//first row down matches

if (numbers[3].innerHTML === numbers[4].innerHTML) {
  numbers[3].classList.add("highlight");
  numbers[4].classList.add("highlight");
}

if (numbers[4].innerHTML === numbers[5].innerHTML) {
  numbers[4].classList.add("highlight");
  numbers[5].classList.add("highlight");
}

if (numbers[3].innerHTML === numbers[5].innerHTML) {
  numbers[3].classList.add("highlight");
  numbers[5].classList.add("highlight");
}

// second row down matches

if (numbers[6].innerHTML === numbers[7].innerHTML) {
  numbers[6].classList.add("highlight");
  numbers[7].classList.add("highlight");
}

if (numbers[7].innerHTML === numbers[8].innerHTML) {
  numbers[7].classList.add("highlight");
  numbers[8].classList.add("highlight");
}

if (numbers[6].innerHTML === numbers[8].innerHTML) {
  numbers[6].classList.add("highlight");
  numbers[8].classList.add("highlight");
}

//third row down matches

if (numbers[0].innerHTML === numbers[3].innerHTML) {
  numbers[0].classList.add("highlight");
  numbers[3].classList.add("highlight");
}

if (numbers[3].innerHTML === numbers[6].innerHTML) {
  numbers[3].classList.add("highlight");
  numbers[6].classList.add("highlight");
}

if (numbers[0].innerHTML === numbers[6].innerHTML) {
  numbers[0].classList.add("highlight");
  numbers[6].classList.add("highlight");
}

//first diagonal column

if (numbers[1].innerHTML === numbers[4].innerHTML) {
  numbers[1].classList.add("highlight");
  numbers[4].classList.add("highlight");
}

if (numbers[4].innerHTML === numbers[7].innerHTML) {
  numbers[4].classList.add("highlight");
  numbers[7].classList.add("highlight");
}

if (numbers[1].innerHTML === numbers[7].innerHTML) {
  numbers[1].classList.add("highlight");
  numbers[7].classList.add("highlight");
}

//second diagonal column

if (numbers[2].innerHTML === numbers[5].innerHTML) {
  numbers[2].classList.add("highlight");
  numbers[5].classList.add("highlight");
}
if (numbers[5].innerHTML === numbers[8].innerHTML) {
  numbers[5].classList.add("highlight");
  numbers[8].classList.add("highlight");
}

if (numbers[2].innerHTML === numbers[8].innerHTML) {
  numbers[2].classList.add("highlight");
  numbers[8].classList.add("highlight");
}

//third diagonal column

if (numbers[0].innerHTML === numbers[4].innerHTML) {
  numbers[0].classList.add("highlight");
  numbers[4].classList.add("highlight");
}

if (numbers[4].innerHTML === numbers[8].innerHTML) {
  numbers[4].classList.add("highlight");
  numbers[8].classList.add("highlight");
}

if (numbers[0].innerHTML === numbers[8].innerHTML) {
  numbers[0].classList.add("highlight");
  numbers[8].classList.add("highlight");
}

//first diagonal row

if (numbers[6].innerHTML === numbers[4].innerHTML) {
  numbers[6].classList.add("highlight");
  numbers[4].classList.add("highlight");
}

if (numbers[4].innerHTML === numbers[2].innerHTML) {
  numbers[4].classList.add("highlight");
  numbers[2].classList.add("highlight");
}

if (numbers[6].innerHTML === numbers[2].innerHTML) {
  numbers[6].classList.add("highlight");
  numbers[2].classList.add("highlight");
}

//second diagonal row

if (numbers[0].innerHTML === numbers[4].innerHTML) {
  numbers[0].classList.add("highlight");
  numbers[4].classList.add("highlight");
}

if (numbers[4].innerHTML === numbers[8].innerHTML) {
  numbers[4].classList.add("highlight");
  numbers[8].classList.add("highlight");
}

if (numbers[0].innerHTML === numbers[8].innerHTML) {
  numbers[0].classList.add("highlight");
  numbers[8].classList.add("highlight");
}
