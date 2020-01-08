// existing arraySurname
var arraySurname = ['Rossi', 'Verdi', 'Serafini', 'Pronti', 'Protti', 'Tonti', 'Tonini', 'Magnani', 'Verducci', 'Esati'];
var arraySurnameUlUnsortedList = document.getElementById('unsorted-list');
for (var i = 0; i < arraySurname.length; i++) {
  arraySurname[i] = arraySurname[i].toUpperCase();
  arraySurnameUlUnsortedList.innerHTML = arraySurnameUlUnsortedList.innerHTML + '<li>' + arraySurname[i] + '</li>';
}

// ask userSurname
var userSurname = prompt("Insert your surname");
userSurname = userSurname.toUpperCase();

// insert inside an existing array
arraySurname.push(userSurname);

// print array sorted alphabetically inside the console
arraySurname.sort();
console.log('=====');
for (var i = 0; i < arraySurname.length; i++) {
  console.log(arraySurname[i]);
}
console.log('=====');

// print array sorted alphabetically inside the html
var arraySurnameUlSortedList = document.getElementById('sorted-list');
for (var i = 0; i < arraySurname.length; i++) {
  arraySurnameUlSortedList.innerHTML = arraySurnameUlSortedList.innerHTML + '<li>' + arraySurname[i] + '</li>';
  if (userSurname === arraySurname[i]) {
    arraySurnameUlSortedList.innerHTML = arraySurnameUlSortedList.innerHTML + '<li class="red">' + arraySurname[i] + '</li>';
  }
}

// print the surname position of the user
var userPosition;
var userPositionPosition = document.getElementById('position');
for (var i = 0; i < arraySurname.length; i++) {
  if (userSurname === arraySurname[i]) {
    userPosition = i + 1;
    console.log("userPosition is " + userPosition);
    userPositionPosition.innerHTML = userPosition;
    userPositionPosition.classList.add('red');
  }
}
