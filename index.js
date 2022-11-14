/* Запитувати у користувача число до тих пір, доки воно буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
В користувача є 3 спроби

зробити двома способами через while і for

* це повинна бути функція(можливо і не одна)
 */

const NUMBER_CONDITIONS = function(val) {
  return val >= 15 && val <= 35 && val % 6 === 0;
}

// let count = 1;
// while(true) {
//    const inputUserNumber = prompt('Enter number: ')
//    if(NUMBER_CONDITIONS(inputUserNumber)){
//       console.log('You win')
//       break;
//    }
//    if(count===3) {
//       console.log('You lose')
//       break;
//    }
//    count++;
// }

for (let i = 1; i <= 3; i++) {
  const inputUserNumber = prompt("Enter number: ");
  if (NUMBER_CONDITIONS(inputUserNumber)) {
    console.log("You win");
    break;
  }
  if (i === 3) {
    console.log("You lose");
  }
}


