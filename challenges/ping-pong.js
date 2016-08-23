/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back and forth across a
  table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

var pingPong = function(table, speed){
  speed = speed || 1;
  var position;
  var steps;
  for(var i = 0; i < table.length; i++){
    if(table[i]){
      position = i;
      steps = table[i].steps;
    }
  }
  var remainder = steps%(table.length - 1);
  var adjustedSteps = steps - remainder;
  var goLeft = (adjustedSteps/(table.length - 1))%2;
  if(goLeft){
    table[position] = null;
    table[position-1] = {"steps":steps+1};
  }
  else{
    table[position] = null;
    table[position+1] = {"steps":steps+1};
  }
  console.log(table);
  return table;
}
var table = [{steps: 0}, null, null, null];
console.log(table);
table = pingPong(table);
table = pingPong(table); //=> [null, {steps: 1}, null, null]
table = pingPong(table); //=> [null, null, {steps: 2}, null]
table = pingPong(table); //=> [null, null, null, {steps: 3}]
table = pingPong(table); //=> [null, null, {steps: 4}, null]
table = pingPong(table); //=> [null, {steps: 5}, null, null]
table = pingPong(table); //=> [{steps: 6}, null, null, null]
pingPong(table); //=> [null, {steps: 7}, null, null]
