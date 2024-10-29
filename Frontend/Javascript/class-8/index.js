// concatenation :
let flowers = ["rose","acacia","basil","lotus"];
let flower = (["marigold","sunflower"]);
let flw = flowers.concat(flower);
console.log(flw);
console.log(flowers.includes("marigold"));

let slice = flower.slice(1);
console.log(slice);
let bb=flowers.slice(1,4);
console.log(bb);
 const months = ["jan","march","april","june","oct"];
months.splice(3,2,"dec","nov");
 console.log(months);
 // For loop
 let arr = [1,2,3,4,5]
 for(let i=0; i<arr.length; i++){
    const display = arr[i]*2;
    arr[i] = display;
    console.log(display);
 }