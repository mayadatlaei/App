const numbers = [10, 20, 30, 40, 50]
numbers.forEach((val, index) => {
    console.log(val)

})
const temperatuesCelsius = [0, 15, 25, 35];
const tempF = temperatuesCelsius.map((val, index) =>
    val * 9 / 5 + 32
)
console.log(tempF);
const users = [
    {name: "Alice", age: 22},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 28}
  ];
  
const bob = users.find((user)=> user.name=="Bob")
console.log =(bob)
