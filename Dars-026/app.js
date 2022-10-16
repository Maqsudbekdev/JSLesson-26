// let text = ""
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audio", "BMW", "Volvo", "Saab", "Ford", "Fiat", "Audio"]
// //for loop 
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }

// for (
//     let uzunlik = 0; uzunlik < cars.length; uzunlik++
// ) {
//     console.log("for loop bilan >>>", cars[uzunlik]);
// }

// //forEach loop
// cars.forEach(item => {
//     console.log("forEach bilan >>>", item);
// })

// document.querySelector("h1").innerHTML = text
// //console.log(text)

const people = [{
    id: 1,
    fname: "John",
    lname: "Doe",
    age: 25,
    job: "accountant"
 },
 {
    id: 2,
    fname: "John2",
    lname: "Doe3",
    age: 26,
    job: "accountant2"
 },
 {
    id: 3,
    fname: "John3",
    lname: "Doe3",
    age: 27,
    job: "accountant3"
 }
];

let txt = "";
people.forEach(item => {
    console.log(item.age);
    item + "<br>"
    for(let x in item){
        txt += item[x] + "<br>";
        console.log(item[x]);
    }
})
const person = {
    id: 1,
    fname: "John",
    lname: "Doe",
    age: 25,
    job: "accountant"
 }
 for(let x in person){
    txt += person[x] + " ";
    console.log(person[x]);
 }
 document.querySelector("h1").innerHTML = txt