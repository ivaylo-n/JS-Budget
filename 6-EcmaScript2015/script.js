// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/*
// ES5
function driverLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driverLicence5(true);

// ES6
function driverLicence6(passedTest) {
    
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1992;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driverLicence6(true);



let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

*/


// Lecture: Blocks and IIFEs

/*
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);


// ES5
(function() {
    var c = 3;
})();
//console.log(c);
*/

// Lecuture: Strings 

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOFBirth = 1992;
function calcAge(year) {
    return 2017 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOFBirth + '. Today, he is ' + calcAge(yearOFBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOFBirth}. Today, he is ${calcAge(yearOFBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/

// Lecture: Arrow functions

/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2017 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2017 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}.`);
console.log(ages6);
*/

// Lecture: Arrow functions 2

/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();
*/

/*
function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6

Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => 
    `${this.name} is friends with ${el}`);
        
    console.log(arr);
}
new Person('Sara').myFriends6(friends);
*/

// Lecture: Destructuring

// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);  

const {firstName:a , lastName: b} = obj;
console.log(a);
console.log(b);  


function calcAgeRerirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRerirement(1990);
console.log(age2);
console.log(retirement);