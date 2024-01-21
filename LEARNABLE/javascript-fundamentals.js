// var, let, const
//let company = "Genesys"

// console.log(company)

 // const first_name = "John" , last_name = "Doe"

 // console.log(first_name, last_name)

 //const name = "John";
 //const age = 34.5;
 //const isTall = true;
 //const house = null;
 // const relationship = undefined;

 // console.log(typeof relationship)

//let str1 = "Hello";
//let str2 = " World";
//let result = str1 + str2;
//console.log(result);

//let firstName = "John";
//let lastName = "Doe";
//let fullName = firstName + " " + lastName;
//console.log(fullName);

//let name = "Alice";
//let age = 30;
//let message = 'My name is alice and i am 30 years old.';

//console.log(message);

// With concatenation write My name is damilola and i'm 29 years old.

//const name = "damilola";
//const age = "29";

//console.log("My name is " + name + " and i'm " + age + "years old");
//console.log(`My name is ${name} and i'm ${age} years old`)

//console.log("Hello World".length)
//console.log("Hello World".toUpperCase())
//console.log("Hello World".substring(6))

//const scores = new Array(20,34,82)
//const scores = [20, 34, 82]
//console.log(scores)

//console.log(typeof scores)
//console.log(Array.isArray(scores))

//console.log(scores[0])

//scores.push(90)
//scores.unshift(73)
//scores.pop()
//console.log(scores)
//console.log(scores.indexOf(34))

//const person = {
   // name: "John",
   // age: 34,
    //isTall: true,
    //address: {
      //  street: 'No 1 Genesys street',
      //  city: "Enugu"
    //}
//}

//console.log(person.address.city)

// destructuring
//const [name, age] = scores

//console.log(age)

//const myObject = {
   // key1: 10,
  //  key2: 20
    // ...additional key-value pairs
 // }

 // console.log(myObject.key2)

 //Arithmetic operators
 //console.log("Addition", 1+1)
 //console.log("Substraction", 4-2)
 //console.log("Multiplication", 4*2)
 //console.log("Division", 100/5)
 //console.log("Remainder", 14%5)
 //console.log("Exponential", 3**4)

 //Logical operators
 //console.log("Not", !true)
 //console.log("And", 1 && 2)
 //console.log("Or", 1 || 0)

 //console.log("Greater than", 3 > 4)
 //console.log("Less than", 3 < 4)
 //console.log("Greater than equals to", 3 >= 4)
 //console.log("Less than equals to", 3 <= 4)
 //console.log("Equals", 3=="3")
 //console.log("Not Equals", 4!= 3)

 //Flow Control
 //const scores = 50
 //if( scores <= 100 && scores >= 70 )
 //{console.log("A")}
 // if( scores <= 80 && scores >= 60 )
 //{console.log("P")}
 //else if( scores <= 60 && scores >= 70)
 //{console.log("P")}
 //else {
  //  console.log("F")
 //}

//const age = 13;
//if ( age >= 54){
//    console.log(true)
//}else{
//    console.log(false)
//}

//OR

//const age = 15
//const isAdult = age >= 10 ? true : false;
//console.log(isAdult)

//const dayOfTheWeek = 7
//switch (dayOfTheWeek){
 //   case 2:
//        console.log("Its not weekend")
///        break;
//    case 5:
 //       console.log("Its not weekend")
//       break;
 //   default:
 //       console.log("Its weekend")
//}

//loops
//const countries = ["Nigeria", "Ghana","Kenya"]
//for (let i = 0; i < countries.length; i++){
//    countries[i] = countries[i].toLocaleLowerCase()
//}
//console.log(countries)

//for while loops
//let i = 0
//while(20 > i){
//  console.log( i % 2 == 0 ? i:"")
//  i++}

//for...of array
//const names =["John", "Doe", "King"]
//for(const i of names){
 // console.log(i.toLocaleUpperCase())}

 //For...in objects
 //const players = {
 // "Nkunku" : {
 //   goals: 15,
 //   assist: 10
  //},
  //"Jackson" : {
  //  goals: 18,
  //  assist: 6
  //},
  //"Mudryk" : {
  //  goals: 15,
  //  assists: 10
  //}
 //}
 //let sum = 0
 //for (const player in players){
  //sum =+ players[player].goals
 //}
 //console.log(sum)

 function add( x=0, y=0) {
  return x + y
 }
 console.log(add(2,4))