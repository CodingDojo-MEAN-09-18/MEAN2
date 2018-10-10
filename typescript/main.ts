let myString: string = 'string content';

// myString = 345345;

const array: boolStrNum[] = ['cat', 'dog'];


array.push('a string');
array.push(345);

array.push(true);
// array.push({});

type boolStrNum = boolean | string | number;

const first = array[0];


function isString(value: any): value is string {
  return typeof value === 'string';
}

if (isString(first)) {
  console.log(first.toUpperCase());
}

interface Person {
  name: string;
  age: number;
}

// const person: Person = {
//   age: 234
// };

// person.name = 'Jason';



// function User(name, age) {
//   this.name = name;
//   this.age = age;

// }

class User implements Person {
  constructor(public name: string, public age: number) {
  }
}

const user = new User('Jason', 234234);


class Child extends User {
  constructor(name: string, age = 10) {
    super(name, age);
  }

  sayHello(name: string): void {
    console.log(`Hello ${name}, from ${this.name}`);
  }
}

const child = new Child('Bob');


child.sayHello(user.name);
