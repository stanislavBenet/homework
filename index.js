/* Запитувати у користувача число до тих пір, доки воно буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
В користувача є 3 спроби

зробити двома способами через while і for

* це повинна бути функція(можливо і не одна)
 */

//              c помощью while

const NUMBER_CONDITIONS = function (val) {
  return val >= 15 && val <= 35 && val % 6 === 0;
};

let count = 1;
while (true) {
  const inputUserNumber = prompt("Enter number: ");
  if (NUMBER_CONDITIONS(inputUserNumber)) {
    console.log("You win");
    break;
  }
  if (count === 3) {
    console.log("You lose");
    break;
  }
  count++;
}

//              c помощью for ;

const NUMBER_CONDITIONS = function (val) {
  return val >= 15 && val <= 35 && val % 6 === 0;
};

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

//                *функция с while

const NUMBER_CONDITIONS = function (val) {
  return val >= 15 && val <= 35 && val % 6 === 0;
};

function chekInputNumber(n) {
  let count = n;
  return function counter() {
    while (true) {
      const inputUserNumber = prompt("Enter number: ");
      if (NUMBER_CONDITIONS(inputUserNumber)) {
        console.log("You win");
        break;
      }
      if (count === 1) {
        console.log("You lose");
        break;
      }
      count--;
    }
  };
}

const doFunc = chekInputNumber(3);

doFunc();

//                     *функция с for

const NUMBER_CONDITIONS = function (val) {
  return val >= 15 && val <= 35 && val % 6 === 0;
};

function chekInputNumber(n) {
  let count = n;
  return function () {
    for (n; n > 0; n--) {
      const inputUserNumber = prompt("Enter number: ");
      if (NUMBER_CONDITIONS(inputUserNumber)) {
        console.log("You win");
        break;
      }
      if (count === 1) {
        console.log("You lose");
      }
    }
  };
}

const doFunc = chekInputNumber(3);

doFunc();
