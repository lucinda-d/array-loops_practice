var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books",
];

//Ex.1
//Log out the console the elements in the array in even numbered indexes.

// stuff.forEach(function (item, index) {
//   if (index % 2 === 0) {
//     console.log(item);
//   }
// });

//Ex.2
//create a function expression that removes an element from an array.

// var removeItem = function (array, item) {
//   var remove = array.indexOf(item);
//   if (remove === -1) {
//     console.log(`Sorry, this item is not here.`);
//   } else {
//     array.splice(remove, 1);
//     console.log(`Removed ${item}.`);
//   }
// };
// removeItem(stuff, "coffee");
// console.log(stuff);
// removeItem(stuff, "blue");
// console.log(stuff);

//Ex.3
//Log out an array with all the elements from stuff that contains the letter "s".
//Using the "filter"
// var stuffWithS = stuff.filter(function (item) {
//   return item.includes("s");
// });
// console.log(stuffWithS);

//using an empty array and a for..Of loop
var sList = [];
for (var item of stuff) {
  if (item.includes("s")) {
    sList.push(item);
  }
}
console.log(sList);
