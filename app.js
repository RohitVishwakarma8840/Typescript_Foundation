var message = "Hello, TypeScript!";
console.log(message);
var username = "Rohit";
var age = 21;
var isActive = true;
console.log(username, age, isActive);
var fruits = ["apple", "banana"];
fruits.push("mango"); // ✅ allowed
// fruits.push(123);      // ❌ Error: 
var names = ["Aarav", "Virat"];
names.push("Aaditya");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]) << " ";
}
