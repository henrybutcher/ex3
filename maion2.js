function createPerson(lastname, firstname, age) {
    let person = {};
    person.lastname = lastname;
    person.firstname = firstname;
    person.age = age;
    return person;
  }
  
  // Create multiple person objects using the createPerson function
  let person1 = createPerson("Doe", "John", 30);
  let person2 = createPerson("Smith", "Jane", 25);
  
  // Access and modify the values of the person objects
  console.log(person1.lastname);  // Output: "Doe"
  console.log(person2.firstname); // Output: "Jane"
  
  person1.age = 31;
  console.log(person1.age);       // Output: 31