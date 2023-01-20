//Constructor function

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName
    this.dob = new Date(dob);
    this.getBirthYear = function (){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    
}


//Instance Object

const person1 = new Person('mani', 'kanta', '4-1-90');

const person2 = new Person('saad', 'xelp', '4-1-2000');

console.log(person1);

console.log( person2.dob.getFullYear());

console.log(person1.getBirthYear());

console.log(person1.getFullName());