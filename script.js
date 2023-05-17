"use strict";

/*
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const statement = fruitProcessor(2, 3);
console.log(statement);
*/

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinAvg = calcAverage(44, 23, 71);
// const koalaAvg = calcAverage(65, 54, 49);
const dolphinAvg = calcAverage(85, 54, 41);
const koalaAvg = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins / 2 >= avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas / 2 >= avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(
      `Draw as neither team won with at least double the opponent's score.`
    );
  }
}

checkWinner(dolphinAvg, koalaAvg);
*/

//.pop() removes last
//.shift() removes first
//.push() adds last
//.unshift() adds first
//.indexOf() returns index of object
//.includes() returns boolean of object

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44
*/

/*

const bills = [125, 555, 44];
const totals = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill + bill * 0.15;
  } else if (bill > 300) {
    return bill + bill * 0.2;
  } else {
    return bill;
  }
}

console.log(
  `Total for $${bills[0]} is $${calcTip(bills[0])} with a $${
    calcTip(bills[0]) - bills[0]
  } tip.`
);
console.log(
  `Total for $${bills[1]} is $${calcTip(bills[1])} with a $${
    calcTip(bills[1]) - bills[1]
  } tip.`
);
console.log(
  `Total for $${bills[2]} is $${calcTip(bills[2])} with a $${
    calcTip(bills[2]) - bills[2]
  } tip.`
);

totals.push(calcTip(bills[0]));
totals.push(calcTip(bills[1]));
totals.push(calcTip(bills[2]));
console.log(totals);

*/

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  // age: 2037 - 1991,
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // hasLicense: function () {
  //   if (this.hasDriversLicense) {
  //     return "has a driver's license.";
  //   } else {
  //     return "doesn't have a driver's license.";
  //   }
  // },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(
  `${jonas.firstName} has ${jonas["friends"].length} friends, and his best friend is ${jonas["friends"][0]}.`
);

console.log(jonas.getSummary());
*/

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

/*

const john = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.weight / (this.height * 2);
    return this.BMI;
  },
};

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.firstName}'s BMI (${john.BMI}) is higher than ${mark.firstName}'s BMI (${mark.BMI})`
  );
} else {
  console.log(
    `${mark.firstName}'s BMI (${mark.BMI}) is higher than ${mark.firstName}'s BMI (${john.BMI})`
  );
}

console.log(
  `${
    john.calcBMI() > mark.calcBMI()
      ? `${john.firstName}'s BMI (${john.BMI}) is higher than ${mark.firstName}'s BMI (${mark.BMI})`
      : `${mark.firstName}'s BMI (${mark.BMI}) is higher than ${mark.firstName}'s BMI (${john.BMI})`
  }`
);

*/

/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 54];
let tips = [];
let totals = [];

//no tip for 50> | 15% for 50 - 300 | 20% for more
function calcTip(bill) {
  if (bill > 300) {
    return bill * 0.2;
  } else if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return 0;
  }
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(bills, tips, totals);
console.log(calcAverage(totals));
