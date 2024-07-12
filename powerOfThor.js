/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

var thorX = initialTx;
var thorY = initialTy;

// game loop
while (true) {
    var remainingTurns = parseInt(readline());

    var directionX = "";
    var directionY = "";
    
    if (thorY > lightY) {
        directionY = "N";
        thorY--;
    } else if (thorY < lightY) {
        directionY = "S";
        thorY++;
    }

    if (thorX > lightX) {
        directionX = "W";
        thorX--;
    } else if (thorX < lightX) {
        directionX = "E";
        thorX++;
    }  
    print(directionY.concat(directionX));
}
