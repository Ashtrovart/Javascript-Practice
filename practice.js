// String type Variable
var firstName= 'Abdul';
var lastName= 'Kareem';
var fullName= [firstName+" "+lastName]
console.log(fullName);

// Number type variable (Integer)
var Age= 31;

// Number type variable (float) 
var WeightInKG= 75.6;

// Boolean type variable 
var married= true;
var haveKids= false;

//Variable name lekhar khetre shurute Number Use kora jabeNA ; like -- var 11Player... but chaile seshe use kora jabe; like- player11
// Variable name er majhkhane 'Space' ba '-' dash dewa jabe na. kintu Underscore dewa jabe. tobe lowerCase_upperCase mix kore lekha prefferable; like 'studentName' 'MyFathersName'



// Array [writting a list of items under a variable name]
var tableItems =['Bottle', 'Marker', 'Pen', 'Diary', 'Mobile Stand']

// get items 
var Item3 = tableItems[3];

// findout index number of any item 
var DiaryIndex= tableItems.indexOf('Diary')
console.log(DiaryIndex)

// set items (change the value of previously named item from the list) 
tableItems[4]= 'Pen Stand'
console.log(tableItems)
// Push = Add item in end of the List 
// Unshift = Add item in the Begining
// Pop = Remove item from the End of the list
// Shift = Remove item from the begining

// Conditionals

if(tableItems.length >5){console.log('Table is full');}
else if(tableItems[4]='Pen'){console.log('Pen is available');}
else{console.log('Table is not full');}
