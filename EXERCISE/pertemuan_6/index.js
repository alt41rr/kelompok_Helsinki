// Array Exercises
// Name: Kandou, David Samuel Engelbert
// ---------------------------------------------------------------- //

// // Nomor 1
// let people = ["Greg", "Mary", "Devon", "James"];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// // Nomor 2
// people.forEach(person => {
//     console.log(person);
// });

// // Nomor 3
// people.splice(0, 1);
// console.log(people);

// // Nomor 4
// people.pop();
// console.log(people);

// // Nomor 5
// people.unshift("Matt");
// console.log(people);

// // Nomor 6
// people.push("David");
// console.log(people);

// // Nomor 7
// for (let i = 0; i < people.length; i++) 
// {
//     console.log(people[i]);
//     if (people[i] === "Mary") 
//     {
//         break;
//     }
// }

// // Nomor 8
// let copy = people.slice(2);
// console.log(copy);

// // Nomor 9
// people.splice(2, 1, "Elizabeth", "Artie");
// console.log(people);

// // Nomor 10
// let withBob = people.concat("Bob");
// console.log(withBob);

// ---------------------------------------------------------------- //
// Object Exercises
// ---------------------------------------------------------------- //

// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// // Nomor 1
// programming.languages.push("Go");
// console.log(programming.languages);

// // Nomor 2
// programming["difficulty"] = 7;
// console.log(programming.difficulty);

// // Nomor 3
// delete programming.jokes;
// console.log(programming);

// // Nomor 4
// programming.isFun = true;
// console.log(programming);

// // Nomor 5
// let updatedLanguage = programming.languages.map(function(language, index) {
//     return index + " - " + language;
// });

// console.log(updatedLanguage);