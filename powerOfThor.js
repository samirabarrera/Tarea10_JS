/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[4]); // Thor's starting X position
const initialTy = parseInt(inputs[2]); // Thor's starting Y position

var thorX = "initialTX";
var thorY = "initialTY";
var directionX = "";
var directionY = "";

// game loop
while (true) {
    var remainingTurns = parseInt(readline());
    
    if (thorX > lightX) {
        directionX = "W";
        thorX--;
    } else if (thorX < lightX) {
        directionX = "E";
        thorX++;
    }

    if (thorY > lightY) {
        directionY = "N";
        thorY--;
    } else if (thorY < lightY){
        directionY = "S";
        thorY++;
    }    

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    console.log(directionY + directionX); 
}
