// // // what are variables and how many are they?
// // // tell the difference about them
// // // var/let - redeclared but not const
// // // var  can be reinitialized but not with const and let
// // // var/let can be declared without assigning a value, but not with const
// // // var supports hoisting but not with the const and let

// // // console.log(simple());

// // // global scoped
// // // var a = 10;
// // // let b = 9;
// // // const c = 7;

// // // {
// // //     var d = 6;
// // //     let e = 5;
// // //     const f = 4;
// // //     console.log(a, b ,c, d, e, f, "block scoped")
// // //     //block scoped
// // // }

// // // function simple() {
// // //     var g = 3;
// // //     let h = 2;
// // //     const i = 1;
// // //     console.log(a, b, c, d, g, h, i, "function scoped");
// // // //function scoped
// // // }

// // // // simple()
// // // console.log(a, b, c, d,"global scoped");

// // // data types: primitive and non-primitive

// // // primitive = bool, string, number, undefined, null

// // // non-primitive data types = function, arrays [], object {}

// // // pass by value => primitive
// // // pass by ref => non-primitive

// // // let a = 10; // #$8FD6738#$
// // // console.log(a);
// // // a = 5 + 10
// // // console.log(a);

// // // let c = a;

// // // let str = "hello"; //asd

// // // function greet(str) {
// // //     str[0] = 'k'
// // //     console.log(str + " world", "fn");
// // //     return
// // // }

// // // console.log(str);
// // // greet(str);

// // const arr = [1,2,3]; // q731238

// // arr[2] = [1,2,45]; // 1298217319

// // const obj = {
// //     userName: "Harikalyan",
// //     password: "123@kalyan"
// // }

// // obj.userName = "Balaji"

// // // console.log(arr, obj);

// // function morning() { // function declarion with no parameters
// //     return "Good Morning";
// // }

// // function morning2(time) { // function declarion with parameters
// //     return "Good " + time + " 2";
// // }
// // // morning(); // function call without args
// // const res = morning2("morning");

// // console.log(`${res} Harikalyan`) // good morning harikalyan

// // // function call with args

// // let str1 = "Hello";
// // str1[0] = "l"
// // // console.log(str1[0])

// // const obj1 = {
// //     "user-name": "Harikalyan",
// //     password: "HARI@123"
// // }

// // obj1["user-name"] = "balaji"
// // console.log(obj1["user-name"])

// // console.log(obj1.password)

// // // function objFunction(obj) {

// // // }

// // // objFunction(obj1);

// const data = [
//   {
//     1: "kalyan",
//     "d-o-b": {
//       month: "march",
//       date: 16,
//       year: 2000,
//     },
//   },
//   {
//     2: "hari",
//     "d-o-b": {
//       month: "june",
//       date: 5,
//       year: 2000,
//     },
//   },
//   {
//     1: "balaji",
//     "d-o-b": {
//       month: "july",
//       date: 11,
//       year: 2000,
//     },
//   },
//   {
//     1: "lakshmi",
//     "d-o-b": {
//       month: "august",
//       date: 20,
//       year: 2000,
//     },
//   },
// ];

// // function peopleData (data) {
// //     data
// // }

// // console.log(peopleData(data));

// // data.map((dataItem) => console.log(dataItem['d-o-b'].month))

// // pass by value

// let a = 10; // <x01x>
// let b = "hello" // <x03x>

// // pass by ref

// let c = [1,2,3]; // <x04x>
// // c[4] = "p" <x02x>
// c[2] = true; // <x04x>

// d = c; // [1,2,true] <x04x>

// d = [4,5,6]; // overwrite // <x05x> // new ref

// c = d; // if c is ref with d ref = 6 [ 4, 5, 6 ] [ 4, 5, 6 ]
// // with no ref // true [ 1, 2, true ] [ 4, 5, 6 ]

// console.log(c[2], c, d);

// shallow copy vs deep copy

let object1 = {
  id: 1,

  user: {
    userName: "Harikalyan",
    "D-O-B": {
      year: 2000,
      date: 16,
      month: "march",
    },
    email: "hari@gmail.com",
  },
};






let object2 = object1;



object2.id = 3;

object1.user.userName = "Balaji";




let object3 = {...object2} // copy of object2 which eventually is a copy of object 1

object3.id = 5;


object3.user.userName = "Harikalyan Balaji";




let object4 = JSON.parse(JSON.stringify(object1)); // {"id":3,"user":{"userName":"Harikalyan Balaji","D-O-B":{"year":2000,"date":16,"month":"march"},"email":"hari@gmail.com"}}

object4.user["D-O-B"].date = 17;

console.log(object1, "ref" , object2, "ref", object3, "copy", object4, "string data");

