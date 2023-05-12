interface Person {
    name: string;
    age: number;
    email?: string;
  };

function printPersonInfo(person: Person) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  if (person.email) {
    console.log(`Email: ${person.email}`);
  }
};

const person: Person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
};


function main() {
    printPersonInfo(person);
};
main();