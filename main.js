// console.log('hello World!');

// three ways to say variable var, let, const
// var is not good to use often it is globally scoped
//let is good for re-assigning values

// data types 
//Strings, Numbers, Boolean, null, undefined
/*
const name = 'John';
const age - 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //also undefined
*/

/*

// Concatenation
//Old Method
console.log('My name is' + name + 'I and I am' + age);
//New Method
const hello = (`My name is ${name} and I am ${age}`);

const S = 'Hell World';

// Method is a function associated with an object

//console.log(s.length);
//console.log(s.toUpperCase());
//console.log(s.toLowerCase())();
//console.log(s.substring(0, 5));
//console.log(s.split(', '));


// Arrays - variables that hold multiple values
//Old way
//const numbers = new Array('1,2,3,4,5');
//New Way
const fruits = ['apples','oranges','pears',10,true];
 console.log(fruits);
 //Arrays are 0 based; they start with 0
 // to add to arrays 
 fruits.push{'mangos'};
 // to add to the beginning of an array
 fruits.unshift('strawberries');
 // how to check array 
 console.log(Array.isArray(fruits));
 // how to check index of array
 console.log(fruits.indexOf{'oranges'});
 */

 // Object Literals are key value pairs
/*
const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	hobbies: ['music','movies','sports'],
	address : {
		street: '50 main st',
		city:'Boston',
		state: 'MA'

	}

}
//console.log(person.hobbies[1]);

//console.log(city);

person.email ='john@gmail.com';

console.log(person);
*/

/*
const todos = [
{
	id: 1,
	text:'Take out trash',
	isCompleted: true
},
{
	id: 2,
	text:'Meeting with boss',
	isCompleted: true
},
{
	id: 3,
	text:'Dentist appt',
	isCompleted: false
}

];
*/

// JSON is a data format, it is very similar to Object literals
//const todosJSON = JSON.stringify(todos);
//console.log(todosJSON);

// For loops
/*
for (let i = 0; i <= 10; i++){
	console.log(`For Loop Number: ${i}`);
}
*/

// While Loops
/*let i = 0;
while(i<10){
 	console.log(`While Loop Number: ${i}`);
 	i++;
}
*/

/*
// Loop through an Array
for (let i = 0; i < todos.length; i++) {
	console.log(todos[i].text);
}


for(let todo of todos) {
	console.log(todo.text);
}
*/

//forEach, map, filter
/*todos.forEach(function(todo){
	console.log(todo.text);
});
*/
/*const todoText = todos.map(function(todo){
	return todo.text;
});

console.log(todoText);
*/

/*const todoCompleted = todos.filter(function(todo){
	return todo.isCompleted === true;
}).map(function(todo){
	return todo.text;
})

console.log(todoCompleted);
*/

// Conditionals

/*
const x = 10;

if(x == 10) {
	console.log('x is 10');
} else if (x > 10){
	console.log('x is greater than 10');
}else{
	console.log('x is less than 10');
}
*/
/*
const x = 4;
const y = 11;

if(x > 5 || y > 10) {
	console.log('x is more than 5 or y is more than 10');
}
*/

/*
const x = 11;

const color = 'green';

switch(color){
	case 'red':
		console.log('color is red');
		break;
	case 'blue':
		console.log('color is blue');
		break;
	default:
		console.log('color is NOT red or blue');
		break;
}
*/

//the addNums variable overrides the placeholder numbers 1 and 2
/*
const addNums = (num1 = 1, num2 = 1) => num1 + num2;


console.log(addNums(5,5));
*/

// Object Oriented Programming
// Contructor function
/*
function Person(firstName, lastName, dob){
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	}

Person.prototype.getBirthYear = function(){
	return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
	return `${this.fistName} ${this.lastName}`;
}
*/
// Class using ES6 classes to write more concise code
/*
class Person {
	constructor(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
}

	getBirthYear() {
		return this.dob.getFullYear();
	}

	getFullName(){
		return `${this.fistName} ${this.lastName}`;
	}
}

// Instantiate object
const person1 = new Person('John','Doe','4-3-1980');
const person2 = new Person('Mary','Smith','3-6-1970');

console.log(person1);
console.log(person2.getFullName());
*/




