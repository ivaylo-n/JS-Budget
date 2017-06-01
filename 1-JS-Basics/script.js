// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;


//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old '
            + job + ' . Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old '
            + job + ' . Is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old '
            + job + ' . Is he married? ' + isMarried + '.');
*/

// Lecture: operators
/*
var now = 2017;
var bitrhYear = now - 26;

bitrhYear = now - 26 * 2;
//2017 - 52
//1965

console.log(bitrhYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6; 
//ageJohn = ageMark = 26
// ageJohn = 26

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + ' is marred');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;

if (isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if (isMarried) {
    console.log('YES!');
} 

if ( 23 === "23") {
    console.log('Something to print...');
}
*/

// Lecture : boolean logic and switch
/*
var age = 35;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.')
} else {
    console.log('John is a man.');
}

var job = 'teacher'

job = prompt('What does John do?')

switch (job) {

    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in NY.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default: 
        console.log('John does something else.');
} 
*/

// Lecture: Coding Challenge 1
/*
var heightJoht = 180;
var heightMike = 178;
var heightMary = 158;

var ageJohn = 26;
var ageMike = 29;
var ageMary = 31;

var scoreJohn = heightJoht + ageJohn * 5;
var scoreMike = heightMike + ageMike * 5;
var scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scoreMike && scoreJohn && scoreMary) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary wins the game with ' + scoreMary + ' points!');
} else {
    console.log('It\'s a draw.');
}
*/

// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1967);
var ageMary = calculateAge(1948);


function yearsUnitRetirement(name, yearOfBirth) {
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;
    
    if(retirement >= 0) {
    console.log(name + ' retires in ' + retirement  + ' years.');
    } else {
        console.log(name + ' is already retired');
    }
}

yearsUnitRetirement('John', 1990);
yearsUnitRetirement('Mike', 1967);
yearsUnitRetirement('Mary', 1948);
*/

// Lecture: Statements and expressions
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if(john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.')
}
*/

// Lecture: Obejcts
/*
var john =  {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1940;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

// Lecture: Objects and methods

/*
//v1.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2017 - this.yearOfBirth;
    }
};


//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/
/*
//v 2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2017 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);


var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2017 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/

// Lecture: Loops

/*
for ( var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


// while loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
} 

for (var i = 1; i <= 5; i++) {
    console.log(i);
    
    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    
    console.log(i);
}
*/

// Coding Challenge 2

/*
function printFullAges(years) {
    
    var ages = [];
    var fullAges = [];

    for (i = 0; i < years.length; i++) {
        ages[i] = 2017 - years[i];
    }

    for (i= 0; i< ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }
    return fullAges;
    
}

var years = [1950, 1960, 1970, 2005, 2010];

var full_1 = printFullAges(years);
var full_2 = printFullAges([2011, 2005, 1995]);
*/