// existing arraySurname
var arraySurname = ['Rossi', 'Verdi', 'Serafini', 'Pronti', 'Protti', 'Tonti', 'Tonini', 'Magnani', 'Verducci', 'Esati'];
// for (var i = 0; i < arraySurname.length; i++) {
//   console.log(arraySurname[i]);
// }
// console.log('=====');

// ask userSurname
var userSurname = prompt("Insert your surname");
// console.log(userSurname);
// console.log('=====');

// insert inside an existing array
arraySurname.push(userSurname);
// for (var i = 0; i < arraySurname.length; i++) {
//   console.log(arraySurname[i]);
// }
// console.log('=====');

// print array sorted alphabetically html ul li
arraySurname.sort();
for (var i = 0; i < arraySurname.length; i++) {
  console.log(arraySurname[i]);
}
console.log('=====');

// print the surname position of the user
var check = false;
var userPosition;
for (var i = 0; i < arraySurname.length; i++) {
  if (userSurname === arraySurname[i]) {
    check = true;
    userPosition = i + 1;
    console.log("userPosition is " + userPosition);
  }
}
if (check === false) {
  console.log("Can this happen??") // nope
}
