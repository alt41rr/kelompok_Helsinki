// //IIFE
// //(Immediately Invoked Function Expresion)

// //console.log(greetings() );

// // (function () {
// //     console.log("Hello World");   //Ini fungsi yg ototmatis di jalankan
// // })();

// //Array

// // let students = ["Kevin", "jane", "bob", "peter"];
// // let kevin = ["kevin", "doe", "19", "true" ];

// // console.log(students.length);
// // console.log(students[1]);
// // console.log(kevin[1]);

// // console.log(students[students.length - 1]);

// // students[2] = "edgar";
// // console.log(Array.toString());
// // console.log(Array.join(" "));

// // Array.pop();
// // console.log(Array);
// // Array.push("Selamat pagi");
// // console.log(Array);
// // Array.shift();
// // console.log(Array);
// // Array.unshift

// //Object

// // let kevin = {
// //   firstName: "kevin",
// //   lastName: "clief",
// //   age: "20",
// //   issMarried: "false",
// //   sayHello: function () {
// //     console.log("hello my name is" + this.firstName);
// //   },
// //   address: {
// //     city: "mminut",
// //     provinsi: "sulawesi utara",
// //     postalCOde: "95167"
// //   }
// // };

// // console.log(kevin.firstName); //Dot Notation
// // console.log(kevin.lastName);
// // console.log(kevin["age"]);   //Bracket Nation

// //Arrat but method

// let students = [
//   {
//     fullName: "john DOe",
//     age: "33",
//     grade: "90",
//   },
//   {
//     fullName: "peter",
//     age: "25",
//     grade: "85",
//   },
//   {
//     fullName: "jane",
//     age: "28",
//     grade: "100",
//   },
// ];

// // for (let i = 0; i < students.length; i++) {
// //   console.log(students[i]);
// // }

// // students.forEach(function (item) {
// //     item.grade += 5;
// //     console.log(item);
// // });

// let filterStudens = students.filter(function (item) {
//   return item.grade > 90;
// });

// console.log(filterStudens);
