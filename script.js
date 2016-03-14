 function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
 }

 var numbers = document.querySelectorAll('.numbers');

 var messageDisplay = function(text) {
   var message = document.getElementById("hippy").innerHTML = text;
 }


 function elements() {

   var numbers = document.getElementsByClassName('numbers');
   var messages = [];

   for (var i = 0; i < numbers.length; i++) {
     numbers[i].classList.remove('highlight');
   }

   for (var i = 0; i < numbers.length; i++) {
     numbers[i].innerHTML = getRandomInt(1, 9);
   }

   if (numbers[0].innerHTML === numbers[1].innerHTML) {
     numbers[0].classList.add("highlight");
     numbers[1].classList.add("highlight");
     messages.push(numbers[0].innerHTML + " and " + numbers[1].innerHTML +
       " first row down match ");
   }

   if (numbers[1].innerHTML === numbers[2].innerHTML) {
     numbers[1].classList.add("highlight");
     numbers[2].classList.add("highlight");
     messages.push(numbers[1].innerHTML + " and " + numbers[2].innerHTML +
       " first row down match ");
   }

   if (numbers[0].innerHTML === numbers[2].innerHTML) {
     numbers[0].classList.add("highlight");
     numbers[2].classList.add("highlight");
     messages.push(numbers[0].innerHTML + " and " + numbers[2].innerHTML +
       " first row down match ");
   }

   //first row down matches
   if (numbers[3].innerHTML === numbers[4].innerHTML) {
     numbers[3].classList.add("highlight");
     numbers[4].classList.add("highlight");
     messages.push(numbers[3].innerHTML + " and " + numbers[4].innerHTML +
       " second middle row down match ");
   }

   if (numbers[4].innerHTML === numbers[5].innerHTML) {
     numbers[4].classList.add("highlight");
     numbers[5].classList.add("highlight");
     messages.push(numbers[4].innerHTML + " and " + numbers[5].innerHTML +
       " second middle row down match ");
   }

   if (numbers[3].innerHTML === numbers[5].innerHTML) {
     numbers[3].classList.add("highlight");
     numbers[5].classList.add("highlight");
     messages.push(numbers[3].innerHTML + " and " + numbers[5].innerHTML +
       " second middle row down match ");
   }

   // second row down matches
   if (numbers[6].innerHTML === numbers[7].innerHTML) {
     numbers[6].classList.add("highlight");
     numbers[7].classList.add("highlight");
     messages.push(numbers[6].innerHTML + " and " + numbers[7].innerHTML +
       " third row down match ");
   }

   if (numbers[7].innerHTML === numbers[8].innerHTML) {
     numbers[7].classList.add("highlight");
     numbers[8].classList.add("highlight");
     messages.push(numbers[7].innerHTML + " and " + numbers[8].innerHTML +
       " third row down match ");
   }

   if (numbers[6].innerHTML === numbers[8].innerHTML) {
     numbers[6].classList.add("highlight");
     numbers[8].classList.add("highlight");
     messages.push(numbers[6].innerHTML + " and " + numbers[8].innerHTML +
       " third row down match ");
   }

   //third row down matches
   if (numbers[0].innerHTML === numbers[3].innerHTML) {
     numbers[0].classList.add("highlight");
     numbers[3].classList.add("highlight");
     messages.push(numbers[0].innerHTML + " and " + numbers[3].innerHTML +
       " first column top match ");
   }

   if (numbers[3].innerHTML === numbers[6].innerHTML) {
     numbers[3].classList.add("highlight");
     numbers[6].classList.add("highlight");
     messages.push(numbers[3].innerHTML + " and " + numbers[6].innerHTML +
       " first column top match ");
   }

   if (numbers[0].innerHTML === numbers[6].innerHTML) {
     numbers[0].classList.add("highlight");
     numbers[6].classList.add("highlight");
     messages.push(numbers[0].innerHTML + " and " + numbers[6].innerHTML +
       " first column top match ");
   }

   //first diagonal column
   if (numbers[1].innerHTML === numbers[4].innerHTML) {
     numbers[1].classList.add("highlight");
     numbers[4].classList.add("highlight");
     messages.push(numbers[1].innerHTML + " and " + numbers[4].innerHTML +
       " second middle column match ");
   }

   if (numbers[4].innerHTML === numbers[7].innerHTML) {
     numbers[4].classList.add("highlight");
     numbers[7].classList.add("highlight");
     messages.push(numbers[4].innerHTML + " and " + numbers[7].innerHTML +
       " second middle column match ");
   }

   if (numbers[1].innerHTML === numbers[7].innerHTML) {
     numbers[1].classList.add("highlight");
     numbers[7].classList.add("highlight");
     messages.push(numbers[1].innerHTML + " and " + numbers[7].innerHTML +
       " second middle column match ");
   }

   //second diagonal column
   if (numbers[2].innerHTML === numbers[5].innerHTML) {
     numbers[2].classList.add("highlight");
     numbers[5].classList.add("highlight");
     messages.push(numbers[2].innerHTML + " and " + numbers[5].innerHTML +
       " third bottom column match ");
   }

   if (numbers[5].innerHTML === numbers[8].innerHTML) {
     numbers[5].classList.add("highlight");
     numbers[8].classList.add("highlight");
     messages.push(numbers[5].innerHTML + " and " + numbers[8].innerHTML +
       " third bottom column match ");
   }

   if (numbers[2].innerHTML === numbers[8].innerHTML) {
     numbers[2].classList.add("highlight");
     numbers[8].classList.add("highlight");
     messages.push(numbers[2].innerHTML + " and " + numbers[8].innerHTML +
       " third bottom column match ");
   }

   //first diagonal row
   if (numbers[6].innerHTML === numbers[4].innerHTML) {
     numbers[6].classList.add("highlight");
     numbers[4].classList.add("highlight");
     messages.push(numbers[6].innerHTML + " and " + numbers[4].innerHTML +
       " first diagonal row match ");
   }

   if (numbers[4].innerHTML === numbers[2].innerHTML) {
     numbers[4].classList.add("highlight");
     numbers[2].classList.add("highlight");
     messages.push(numbers[4].innerHTML + " and " + numbers[2].innerHTML +
       " first diagonal row match ");
   }

   if (numbers[6].innerHTML === numbers[2].innerHTML) {
     numbers[6].classList.add("highlight");
     numbers[2].classList.add("highlight");
     messages.push(numbers[6].innerHTML + " and " + numbers[2].innerHTML +
       " first diagonal row match ");
   }

   //second diagonal row
   if (numbers[0].innerHTML === numbers[4].innerHTML) {
     numbers[0].classList.add("highlight");
     numbers[4].classList.add("highlight");
     messages.push(numbers[0].innerHTML + " and " + numbers[4].innerHTML +
       " second diagonal row match ");
   }

   if (numbers[4].innerHTML === numbers[8].innerHTML) {
     numbers[4].classList.add("highlight");
     numbers[8].classList.add("highlight");
     messages.push(numbers[4].innerHTML + " and " + numbers[8].innerHTML +
       " second diagonal row match ");
   }

   if (numbers[0].innerHTML === numbers[8].innerHTML) {
     numbers[0].classList.add("highlight");
     numbers[8].classList.add("highlight");
     messages.push(numbers[0].innerHTML + " and " + numbers[8].innerHTML +
       " second diagonal row match ");

   }

   var msg = messages.join("<br>");
   return msg;
 }

 function btn() {
   messageDisplay(elements());
 }

 elements();
