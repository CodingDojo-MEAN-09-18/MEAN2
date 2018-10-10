var myString = 'string content';
// myString = 345345;
var array = ['cat', 'dog'];
array.push('a string');
array.push(345);
array.push(true);
var first = array[0];
function isString(value) {
    return typeof value === 'string';
}
if (isString(first)) {
    console.log(first.toUpperCase());
}
// const person: Person = {
//   age: 234
// };
// person.name = 'Jason';
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user = new User('Jason', 234234);
