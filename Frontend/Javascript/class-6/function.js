//write a function to print your name.

//to do print your name 
let myName = "Priya";
function printName() {
    console.log(`My name is ${myName}`);

}
printName();

function myName(name,age,city){
    return`My name is ${name},Age is ${age},City is ${city}`;
    
}

console.log()
let output = returnName(Priya,21,Jaintgarh);
console.log(output);





//Arrow Function
//console.log(printName("Priya"));//Before  //ReferenceError

const printName = (name) => {
    return `My name is ${name}`;

}
console.log(printName("Priya"));

   