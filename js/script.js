let num = 266219
let number = num.toString();
console.log(number.split('').reduce((acc, item) => acc * item, 1))
const result1 = number.split('').reduce((acc, item) => acc * item, 1)
const result2 = result1 ** 3
console.log(result2)
const result3 = result2
console.log(result2.toString().slice(0, 2))
