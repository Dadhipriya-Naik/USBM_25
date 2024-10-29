let newArray = [];
console.log(newArray);
console.log(typeof newArray);

let userArray = ["pablo","60","criminal","true"];
console.log(userArray);


let newNumber = new Array(1,2,3,4,5);
console.log(newNumber);


//Create the array and check the length
let arr5 = ["Priya"];
console.log(arr5.length);

//Accessing
let cities = ["Bhubaneswar","Cuttack","Balesore","Jajpur","Bhadrak"];
console.log(cities[0]); //Bhubaneswar
console.log(cities[4]); //Bhadark

//last element ;
let lastcity = cities.length -1; //4
console.log(cities[lastcity]);

//Balesore
console.log(cities[2]);

//Modify :
console.log(cities);
let modifyCity ="Kendrapada";
cities[2] = modifyCity;
console.log(cities);

//Add element :
//push():
console.log(cities);
let addCity = "Jagatsinghpur";
cities.push(addCity);
console.log(cities);

//Remove :
//pop ():
console.log(cities);
cities.pop();
console.log(cities);

//shift():
console.log(cities);
cities.shift();
console.log(cities);

//unshift() :
console.log(cities);
cities.unshift();
console.log(cities);




