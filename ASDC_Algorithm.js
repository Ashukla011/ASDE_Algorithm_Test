function canAbhimanyuCrossChakravyuha(p, powers, a, b) {
  let skips = a;
  let recharges = b;
  let currentPower = p;

  for (let i = 0; i < powers.length; i++) {
    let enemyPower = powers[i];// Enemy Power

    // Check if Abhimanyu can defeat the enemy
    if (currentPower >= enemyPower) {
      currentPower -= enemyPower;// Remaining Power
    } else if (skips > 0) {
      skips--;
    } else if (recharges > 0) {
      recharges--;
      currentPower = p - enemyPower;
    } else {
      return false;
    }

    // Handle the special regeneration case for k3 and k7
    if (i === 2 || i === 6) {
      let regeneratedPower = Math.floor(enemyPower / 2);
      if (currentPower < regeneratedPower) {
        if (skips > 0) {
          skips--;
        } else if (recharges > 0) {
          recharges--;
          currentPower = p - regeneratedPower;
        } else {
          return false;
        }
      }
    }
  }

  return true;
}

// Test Cases-1

var p = 100;
var powers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
var a = 2;
var b = 1;
// Test Cases-1
var p2 = 50;
var powers2 = [2, 4, 8, 10, 12, 14, 16, 18, 20, 22];
var a2 = 3;
var b2 = 2;

console.log(canAbhimanyuCrossChakravyuha(p, powers, a, b));
console.log(canAbhimanyuCrossChakravyuha(p2, powers2, a2, b2));

// Time complexity 

// The main loop runs 11 times, once for each circle
//  Each condition involves constant time operations , 
// Handling the special cases for enemies at circle 3 and 7 also involves constant time operations, as the are just simple arithmetic and conditional checks;
// since all operations inside the loops are constant time operation 
// and the loop runs a fixed numner of time the time complexity is O(1)

// if we generalize the problem to have n circles instead of a fixed number
// the time complxity world be O(n) where n is the number of circles 