console.log("Hallo Winc Academy Studenten");


// Checking if a number is big 
// Produce Something (true/false)
const checkNumber = function (numberA) {
    if (numberA > 100) {
        return true;
    } else return false;
};

const result = checkNumber(111);
console.log(result);
// true

const result2 = checkNumber(99);
console.log(result2);
// false


//Bouncer at a club
/*
Three sentences:
* Come in
* It's too busy now, come back later
* This is a club for adults

Following arguments:
* The maximum number of people in the club  === 1000
* The current number of people in the club
* The age of the person wanting to enter the club
*/

// Function that does something -> log something to console (or bouncer stops someone)
const bouncerBrenda = function (numberMax, numberCurrent, agePerson) {
    if (numberMax = 1000 && numberCurrent <= 1000 && agePerson >= 18) {
        return "Come in";
    } else if (numberCurrent > 1000) {
        return "It's too busy now, come back later";
    }
    else {
        return "This is a club for adults";
    }
}

const brendaSays1 = bouncerBrenda(1000, 1000, 19);
const brendaSays2 = bouncerBrenda(1000, 1001, 19);
const brendaSays3 = bouncerBrenda(1000, 1000, 17);
console.log(brendaSays1);
console.log(brendaSays2);
console.log(brendaSays3);

// Calculating the average
// Function that produces something

const averageGrades = function (numbers) {
    const total = numbers.reduce((acc, c) => acc + c, 0);
    return total / numbers.length;
};

const grades = [1, 2, 3, 4, 5];

const avgG = averageGrades(grades);
console.log(Math.round(avgG));


const ages = [17, 19, 21, 25, 33];

const avgA = averageGrades(ages);
console.log(Math.round(avgA));


const peopleInSchoolMenVsWomen = [100, 125];

const avgP = averageGrades(peopleInSchoolMenVsWomen);
console.log(Math.round(avgP));
