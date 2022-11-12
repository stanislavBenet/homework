           /*          Task 1
Людина вводить номер місяця, ви виводите пору року
1,2,12 - winter
3,4,5 - spring
6,7,8, - summer
9,10,11 - fall
404 try again
виконати 2 варіантами: через switch та if...else if...else
 */



//Version with use switch;


// const seasons = prompt("Enter number of month:");

// switch (seasons) {
//   case "1":
//   case "12":
//   case "2":
//     console.log("Winter");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     console.log("spring");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     console.log("summer");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     console.log("autumn");
//     break;
//   default:
//     console.log("error 404");
// }



//Version with use if..else..if..else;



// const seasons = prompt("Enter number of month:");

// if (seasons === '12'||seasons === '1' || seasons === '2') {
//   console.log("Winter");
// } else if (seasons === '11' || seasons === '10' || seasons === '9') {
//   console.log("autumn");
// } else if (seasons === '6' || seasons === '7' || seasons === '8') {
//   console.log("summer");
// } else if (seasons === '5' || seasons === '4' || seasons === '3') {
//   console.log("spring");
// }  else {
//     console.log('Please, enter only number!')
// }


            /*                  Task 2
Людина вводить вік (привести до числа), ви виводите класифікацію за віком:
[0 - 2) baby
[2 - 6) kinder
[6 - 12) child
[12 - 18) teenager
[18 - 65) adult
[65 - 100) oldmen
[100 - 150) super!
404 try again
оберіть самі потрібну конструкцію */



                //Version with use if...else; 


                   //First variant
// const inputUserAge = prompt("Enter age:");

// const leadToNumber = function (value) {
//   if (isNaN(Number(value)) || value === null || value === "" || value === " ") {
//     return NaN;
//   }
//   return Number(value);
// };

// let getUserNumber = leadToNumber(inputUserAge);

// if (getUserNumber >= 0 && getUserNumber < 2) {
//   console.log("baby");
// } else if (getUserNumber >= 2 && getUserNumber < 6) {
//   console.log("kinder");
// } else if (getUserNumber >= 6 && getUserNumber < 12) {
//   console.log("child");
// } else if (getUserNumber >= 12 && getUserNumber < 18) {
//   console.log("teenager");
// } else if (getUserNumber >= 18 && getUserNumber < 65) {
//   console.log("adult");
// } else if (getUserNumber >= 65 && getUserNumber < 100) {
//   console.log("oldmen");
// } else if (getUserNumber >= 100 && getUserNumber < 150) {
//   console.log("super");
// } else if (getUserNumber >= 150) {
//   console.log("Dead man");
// } else {
//   console.log("404 try again");
// }

                        

                       //Second variant
// const inputUserAge = prompt("Enter age:");

// const leadToNumber = function (value) {
//   if (isNaN(Number(value)) || value === null || value === "" || value === " ") {
//     return NaN;
//   }
//   return Number(value);
// };

// if (leadToNumber(inputUserAge) >= 0 && leadToNumber(inputUserAge) < 2) {
//   console.log("baby");
// } else if (leadToNumber(inputUserAge) >= 2 && leadToNumber(inputUserAge) < 6) {
//   console.log("kinder");
// } else if (leadToNumber(inputUserAge) >= 6 && leadToNumber(inputUserAge) < 12) {
//   console.log("child");
// } else if (
//   leadToNumber(inputUserAge) >= 12 &&
//   leadToNumber(inputUserAge) < 18
// ) {
//   console.log("teenager");
// } else if (
//   leadToNumber(inputUserAge) >= 18 &&
//   leadToNumber(inputUserAge) < 65
// ) {
//   console.log("adult");
// } else if (
//   leadToNumber(inputUserAge) >= 65 &&
//   leadToNumber(inputUserAge) < 100
// ) {
//   console.log("oldmen");
// } else if (
//   leadToNumber(inputUserAge) >= 100 &&
//   leadToNumber(inputUserAge) < 150
// ) {
//   console.log("super");
// } else if (leadToNumber(inputUserAge) >= 150) {
//   console.log("Dead man");
// } else {
//   console.log("404 try again");
// }

            /*                Task 3
 Людина вводить годину([0-23]), ви виводите привітання
[7 - 11) - good morning
[11 - 18) - good day
[18 - 23) - good evening
усе інше - good night
усе невірне - 404 try again
виконати 2 варіантами: через switch та if...else if...else і скажете який краще!!! */


//Version with use switch;
  


//const userInputTimeOfDay = prompt("Enter time:");

// switch (userInputTimeOfDay) {
//   case "7":
//   case "8":
//   case "9":
//   case "10":
//     console.log("Good morning!");
//     break;
//   case "11":
//   case "12":
//   case "13":
//   case "14":
//   case "15":
//   case "16":
//   case "17":
//     console.log("Good day!");
//     break;
//   case "18":
//   case "19":
//   case "20":
//   case "21":
//   case "22":
//     console.log("Good evening!");
//     break;
//   case "23":
//   case "24":
//   case "00":
//   case "01":
//   case "02":
//   case "03":
//   case "04":
//   case "05":
//   case "06":
//   case "6":
//   case "5":
//   case "4":
//   case "3":
//   case "2":
//   case "1":
//   case "0":
//     console.log("Good night!");
//     break;
//   default:
//     console.log("404 try again");
// }



//Version with use if...else;


// const userInputTimeOfDay = prompt("Enter time:");

// if (userInputTimeOfDay>=7&&userInputTimeOfDay<11) {
//     console.log('Good morning!')
// } else if (userInputTimeOfDay>=11&&userInputTimeOfDay<18) {
//     console.log('Good day!');
// }else if (userInputTimeOfDay>=18&&userInputTimeOfDay<23) {
//     console.log('Good evening!');
// }else if (userInputTimeOfDay===23||userInputTimeOfDay===24||userInputTimeOfDay>=0||userInputTimeOfDay<7) {
//     console.log('Good night!');
// } else {
//     console.log ('404 try again')
// }
