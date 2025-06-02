let message: string = "Hello, TypeScript!";
console.log(message);


let username:string = "Rohit";
let age: number = 21;
let isActive: boolean = true;

console.log(username, age, isActive);


let fruits: string[] = ["apple", "banana"];
fruits.push("mango");  // ✅ allowed
// fruits.push(123);      // ❌ Error: 


let names: string[] = ["Aarav","Virat"];

names.push("Aaditya");


for(let i=0; i<names.length;i++){
    console.log(names[i])<<" ";
}


