'use strict';
console.log('Hello World!!!');

/*
01. VARIABLES AND DATA TYPES
02. VARIABLE MUTATION AND TYPE COERCION
03. LET, CONST, VAR
04. OPERATORS
05. OPERATOR PRECEDENCE
06. STRINGS AND TEMPLATE LITERALS
07. IF/ELSE STATEMENTS
08. TYPE CONVERSIONS AND COERCION
09. TRUTHY FALSY VALUES
10. EQUALITY OPERATORS == VS ===
11. LOGICAL OPERATORS
12. SWITCH STATEMENTS
13. STATEMENTS AND EXPRESSIONS
14. CONDITIONAL OPERATOR
15. STRICT MODE
16. FUNCTIONS
17. FUNCTION DECLARATION VS EXPRESSIONS
18. ARROW FUNCTION 
19. FUNCTIONS CALLING OTHER FUNCTIONS
20. FUNCTION REVIEW
*/

//HOW TO DECLARE A VARIABLE
//7 DIFFERENT KINDS OF VARIABLE (NUMBER, STRING, BOOLEAN, UNDEFINED, NULL)
//NUMBER
//STRINGS = CHARACTERS
//BOOLEAN = TRUE OR FALSE
//UNDEFINED = DATA TYPE OF VARIABLE THAT DOESNT HAVE A VALUE YET
//NULL = ALMOST NON-EXISTENT
//SYMBOL = VALUE THAT IS UNIQUE AND CANNOT BE CHANGED (NOT USEFUL FOR NOW) (ES2015)
//BIGINT = LARGE INTEGERS THAN THE THE NUMBER TYPE CAN HOLD (ES2020)
//var 3years = 3; Cant start a variable name with a number. Only use _ or $
//CANNOT USE RESERVED KEYWORDS SUCH AS IF, DELETE, FUNCTION. USE MADE UP WORDS

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 

// (1) VARIABLES AND DATA TYPES
/*
var firstName = 'John';
console.log(firstName); //WILL PRINT JOHN ON CONSOLE

var lastName = 'Smith';
var age = 28; 

var fullAge = true; //Boolean example
console.log(fullAge);

var job;
console.log(job); //Undefined example

job = 'teacher'; //Can only add data AFTER the variable name
console.log(job);
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 

// (2) VARIABLE MUTATION AND TYPE COERCION
/*
//TYPE COERCION
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age); //TYPE COERCION 

var job, isMarried; //DECLARE MULTIPLE VALUES ON ONE LINE
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//VARIABLE MUTATION
age = 'twenty eight'; //WILL CHANGE THE VARIABLE ABOVE
console.log(age);

job = 'driver';
console.log(job);

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried); 

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName); //WILL STORE DATA IN THE CONSOLE
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 

// (3) LET, CONST, VAR
//LET TO DECLARE VARIABLES THAT CAN CHANGE LATER
//CONST DECLARES VARIABLES THAT CANNOT BE CHANGED
/*
let age = 30;
age = 31;

const birthYear = 1991;
//const job; //INITIAL VALUE NEEDED WHEN USING CONST

var job = 'programmer';
job = 'teacher';
console.log(job);
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 

// (4) OPERATORS
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 MEANS 2 TO THE POWER OF 3

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//ASSIGNMENT OPERATORS (=, +=, *=, -=, /=, ++, --)

let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; // x = x + 1;
console.log(x);

//COMPARISON OPERATORS (>, <, >=, <=, =)
//WILL PRODUCE BOOLEAN VALUES
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >=18;

console.log(now - 1991 > now - 2018);
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 

// (5) OPERATOR PRECEDENCE (GROUP EQUATIONS JUST TO BE SAFE)
//CHECK MDN FOR REFERENCE
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log((now - 1991) > (now - 2018));

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

//CODING CHALLENGE 1

/*
MARK AND JOHN ARE TRYING TO COMPARE THEIR BMI (BODY MASS INDEX), WHICH IS CALCULATED USING THE FORMULA BELOW

BMI = MASS / HEIGHT ** 2 = MASS / (HEIGHT * HEIGHT) (HEIGHT SQUARED)

1. STORE MARK'S AND JOHN'S MASS AND HEIGHT IN VARIABLES
2. CALCULATE BOTH THEIR BMIS USING THE FORMULA
3. CREATE A BOOLEAN VARIABLE 'markHigherBMI' CONTAINING INFORMATION ABOUT WHETHER MARK HAS A HIGHER BMI THAN JOHN 

TEST DATA 1: 
    MARK WEIGHT: 78 KG
    MARK HEIGHT: 1.69 M 

    JOHN WEIGHT: 92 KG
    JOHN HEIGHT: 1.95 M

TEST DATA 2: 
    MARK WEIGHT: 95 KG
    MARK HEIGHT: 1.88 M 

    JOHN WEIGHT: 85 KG
    JOHN HEIGHT: 1.76 M
*/

//SOLUTION

/*
const weight = ' kg';
const height = ' m'

const markWeight = 78;
const markHeight = 1.69;
//markWeight = 78;
//markHeight = 1.88;

const johnWeight = 92;
const johnHeight = 1.95;
//johnWeight = 85;
//johnHeight = 1.76;

const bmiMark = (markWeight / (markHeight ** 2));
const bmiJohn = (johnWeight / (johnHeight ** 2));
console.log(bmiMark, bmiJohn);

const markHigherBMI = (bmiMark > bmiJohn);
console.log(markHigherBMI);
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (6) STRINGS AND TEMPLATE LITERALS
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job;
console.log(jonas);

//TEMPLATE LITERALS ES6 TECH
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);

console.log(`Just a regular string`);

//ES6 FOR MULTI LINE STRINGS (NO MORE USIG \n\)
console.log(`String 
with 
multiple
lines`);
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (7) IF ELSE STATEMENTS

/*
//PROGRAM TO CHECK FROR AGE
const age = 19;

//IF ELSE CONTROL STRUCTURE - 1
if (age >= 18) {
    console.log('Sarah can start driving license 😬');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is not old enough to drive. Wait another ${yearsLeft} years.`);
}
//IF ELSE CONTROL STRUCTURE - 1

//IF ELSE CONTROL STRUCTURE - 2
const birthYear = 2012;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
//IF ELSE CONTROL STRUCTURE - 2
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

//CODING CHALLENGE 2

/*
MARK AND JOHN ARE TRYING TO COMPARE THEIR BMI (BODY MASS INDEX), WHICH IS CALCULATED USING THE FORMULA BELOW

BMI = MASS / HEIGHT ** 2 = MASS / (HEIGHT * HEIGHT) (HEIGHT SQUARED)

1. STORE MARK'S AND JOHN'S MASS AND HEIGHT IN VARIABLES
2. CALCULATE BOTH THEIR BMIS USING THE FORMULA
3. CREATE A BOOLEAN VARIABLE 'markHigherBMI' CONTAINING INFORMATION ABOUT WHETHER MARK HAS A HIGHER BMI THAN JOHN 

TEST DATA 1: 
    MARK WEIGHT: 78 KG
    MARK HEIGHT: 1.69 M 

    JOHN WEIGHT: 92 KG
    JOHN HEIGHT: 1.95 M

TEST DATA 2: 
    MARK WEIGHT: 95 KG
    MARK HEIGHT: 1.88 M 

    JOHN WEIGHT: 85 KG
    JOHN HEIGHT: 1.76 M
*/
/*
//SOLUTION

const weight = ' kg';
const height = ' m'

const markWeight = 78;
const markHeight = 1.69;
//markWeight = 78;
//markHeight = 1.88;

const johnWeight = 92;
const johnHeight = 1.95;
//johnWeight = 85;
//johnHeight = 1.76;

const bmiMark = (markWeight / (markHeight ** 2));
const bmiJohn = (johnWeight / (johnHeight ** 2));
console.log(bmiMark, bmiJohn);

//REPLACED markHigherBMI VARIABLE
if (bmiMark > bmiJohn) {
    console.log (`Mark's BMI is higher than John's at ${bmiMark}`);
} else {
    console.log (`John's BMI is higher than Mark's at ${bmiJohn}`);
}
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (8) TYPE CONVERSIONS AND COERCION
/*
//CONVERSIONS
const inputYear = '1991';
console.log(Number(inputYear), inputYear); //WILL CONVERT STRINGS TO NUMBERS
console.log(inputYear + 18); //WILL CONSOLE 199118 SINCE ITS A STRING
console.log(Number(inputYear) + 18); //WILL CONSOLE 2009 SINCE IT GOT CONVERTED TO A NUMBER
console.log(Number('Jonas')); //WILL CONSOLE NAN MEANING NOT A NUMBER 
console.log(String(23)); //WILL CONSOLE 23 BUT IT WOULD BE A STRING TYPE

//COERCION
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); //STRINGS CONVERTED TO NUMBERS
console.log('23' + '10' + 3); //WILL OUTPUT 23103
console.log('23' * '2'); //OUTPUT 46
console.log('23' > '18'); //OUTPUT TRUE
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (9) TRUTHY FALSY VALUES

//FALSY VALUES = 5 FALSY VALUES (0, ' ', UNDEFINED, NULL, NAN)
//CONVERTING TO BOOLEAN WILL MAKE IT FALSE
/*
console.log(Boolean(0)); //FALSE
console.log(Boolean(undefined)); //FALSE
console.log(Boolean('Jonas')); //TRUE
console.log(Boolean({})); //TRUE
console.log(Boolean('')); //FALSE

const money = 0;
if(money) {
    console.log("dont spend it all");
} else {
    console.log("you should get a job");
}

//HOW TO CHECK UNDEFINED VARIABLES, FALSY VALUE WILL RUN THE ELSE BLOCK
let height;
if (height) {
    console.log('YAY Height is defined');
} else {
    console.log('Height is undefined');
}
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (10) EQUALITY OPERATORS == VS ===
/*
//STRICT EQUALITY OPERATOR ONLY TRUE IF EXACTLY THE SAME VALUE, DOES NOT DO TYPE COERCION ===
//USE THIS AS DEFAULT
const age = 18;
if(age === 18) console.log('you just became an adult');

//LOOSE EQUALITY OPERATOR DOES TYPE COERCION ==
if (age == 18) console.log ("you just became an adult");

const favorite = prompt('Whats your favorite number');
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
    console.log('Cool! 23 is an amazing number');
}

//DIFFERENT OPERATOR
if (favorite != 23) console.log('Why not 23?');
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (11) LOGICAL OPERATORS

//RUN NO MORE THAN 1 PROGRAM AT A TIME TO AVOID BUGS
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); 
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// IF ELSE PROGRAM - 1S  
const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive) {
    console.log('Paul should be able to drive');
} else {
    console.log('Someone else should drive');
}
// IF ELSE PROGRAM - 1E  

// IF ELSE PROGRAM - 2S
const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Paul should be able to drive');
} else {
    console.log('Someone else should drive');
}
// IF ELSE PROGRAM - 2E
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

//CODING CHALLENGE 3

/*

1. CALCULATE THE AVG SCORE FOR EACH TEAM, USING THE DATA BELOW

2. COMPARE THE TEAMS AVG SCORES TO DETERMINE THE WINNER OF THE COMPETITION, 
    AND PRINT IT TO THE CONSOLE. DONT FORGET THAT THERE CAN BE A DRAW, SO TEST 
    FOR THAT AS WELL (DRAW MEANS THEY HAVE THE SAME AVERAGE SCORE).

3. BONUS 1: INCLUDE A REQUIREMENT FOR A MINIMUM SCORE OF 100. WITH THIS RULE, 
    A TEAM ONLY WINS IF IT HAS A HIGHER SCORE THAN THE OTHER TEAM, AND THE SAME TIME
    A SCORE OF AT LEAST 100 POINTS. HINT:USE A LOGICAL OPERATOR TO TEST FOR MINIMUM SCORE,
    AS WELL AS MULTIPLE IF/ELSE BLOCKS

4. BONUS 2: MINIMUM SCORE ALSO APPLIES TO A DRAW! SO A DRAW ONLY 
    HAPPENS WHEN BOTH TEAMS HAVE THE SAME 
    SCORE AND BOTH HAVE A SCORE GREATER OR EQUAL 100 POINTS. OTHERWISE, NO TEAM WINS THE TROPHY

TEST DATA: 
    DOLPHINS SCORE 96, 108, AND 89. 
    KOALAS SCORE 88, 91, AND 110.

TEST DATA BONUS:
    DOLPHINS SCORE 97, 112, AND 101
    KOALAS SCORE 109, 95, 106



const dolphinsA = 88;
const dolphinsB = 310;
const dolphinsC = 91;

const koalasA = 88;
const koalasB = 91;
const koalasC = 310;

const dolphinsAverage = (dolphinsA + dolphinsB + dolphinsC) / 3;
const koalasAverage = (koalasA + koalasB + koalasC) / 3;

const over100 = dolphinsAverage >= 100 || koalasAverage >= 100;  

const dolphinWon = dolphinsAverage > koalasAverage && over100;
const koalasWon = koalasAverage > dolphinsAverage && over100;
const tiedUp = dolphinsAverage === koalasAverage && over100;

function whoWon() {
    if (dolphinWon) {
        document.write('Dolphins won');
    } else if (tiedUp) {
        document.write('Dolphins and Koalas are tied up');
    }   else if (koalasWon) {
        document.write('Koalas won')
    }   else {
        document.write('Neither teams won');
    }
}
whoWon();
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (12) SWITCH STATEMENTS
//WITHOUT BREAKS, IT WILL EXECUTE CODE UNTIL IT FINDS A BREAK

//const day = whatToDoToday(monday);

/*
    const day = 'friday';

switch(day) {
    case 'monday': // DAY === 'MONDAY'
        document.write('Plan course structure');
        document.write('Go to coding meetup');
        break;
    case 'tuesday':
        document.write('Prepare theory videos');
        break;
    case 'wednesday': //CONDITION WILL BE RAN ON BOTH WEDNESDAY AND THURSDAY VARIABLE
    case 'thursday':
        document.write('Write code examples');
        break;
    case 'friday':
        document.write('Record Videos');
    case 'saturday':
    case 'sunday':
        document.write('Enjoy the weekend');
        break;
    default:
        document.write('Thats not a valid day');
}      

    if(day === 'monday') {
        document.write('Plan course structure and go to coding meetup');
    }   else if(day === 'tuesday') {
        document.write('Prepare theory videos');
    }   else if(day === 'wednesday' || day === 'thursday') {
        document.write('Write code examples');
    }   else if(day === 'friday') {
        document.write('Record Videos');
    }   else if(day === 'satuday' || day === 'sunday') {
        document.write('Enjoy the weekend');
    }   else {
        document.write('That is not a valid day');
    }
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (13) STATEMENTS AND EXPRESSIONS

//EXPRESSION IS A PIECE OF CODE THAT PRODUCES A VALUE (3 + 4), (181), (TTRUE, FALSE, !TRUE)

//STATEMENTS IS A BIGGER PIECE OF CODE IS EXECUTED THAT DOESNT PRODUCE A VALUE BY ITSELF
//STATEMENT EXAMPLE
/*
if (23 > 10) {
    String str = '23 is the number';
}
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (14) CONDITIONAL OPERATOR
//TERNARY OPERATOR = CONDITION, IF , ELSE
/*
const age = 23;
age >= 18 ? console.log('I like to drink wine') : 
console.log('I like to drink water'); 

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >=18) {
    drink2 = 'wine';
}   else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`i like to drink ${drink}`);
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

//CODING CHALLENGE 4

/*
STEVEN WANTS TO BUILD A VERY SIMPLE TIP CALCULATOR FOR WHENEVER HE GOES EATING IN A 
RESTAURANT. IN HIS COUNTRY, ITS USUAL TO TIP 15% IF THE BILL VLAUE IS BETWEEN 50 AND 300.
IF THE BILL VALUE IS DIFFERENT, THE TIP IS 20%

1. YOUR TASK IS TO CALCULATE THE TIP, DEPENDING ON THE BILL VALUE. CREATE A VARIABLE CALLED 'TIP'
FOR THIS. IT'S NOT ALLOWED TO USA AN IF/ELSE STATEMENT.
!!!!! USE A TERNARY OPERATOR !!!!!

2. PRINT A STRING TO THE CONSOLE CONTAINING THE BILL VALUE, TIP, AND THE FINAL VALUE (BILL + TIP).
EXAMPLE: 'THE BILL WAS 275, THE TIP WAS 41.25, AND THE TOTAL VALUE 316.25'

TEST DATA: TEST FOR BILL VALUES 275, 40, AND 430

const bill = 430;
const currency = '$';
const tip = bill >= 50 && bill <= 300 ? (bill * 0.15) :
(bill * .2);
const totalValue = `The bill was ${currency + bill} which means the tip is ${currency + tip}, therefore the total value is ${currency}${bill + tip}`;
console.log(totalValue);
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (15) STRICT MODE 
//MODE TO WRITE MORE SECURE JAVASCRIPT CODE
//TO AVOID ACCIDENTAL ERRORS
//('use strict';) - TYPE AS THE VERY FIRST LINE TO ACTIVATE 
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversicense = true;
if (hasDriversLicense) console.log(`i can drive`);

//const interface = 'Audio'; RESERVED WORDS
//const private = 534; RESERVED WORDS
//cosnst if = 23; RESERVESD WORDS
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (16) FUNCTIONS
/*
function logger() {
    console.log(`my name is paul`);
}

logger(); //HOW TO CALL/RUN/INVOKE A FUNCTION
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); //CAN BE WRITTEN BEFORE AND AFTER THE FUNCTION
                                         //NEED TO SAVE INTO A VARIABLE TO SHOW THE STRING
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleJuice, appleOrangeJuice);
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (17) FUNCTION DECLARATION VS EXPRESSIONS
/*
//DECLARATION 
//DECLARATIONS CAN BE CALLED BEFORE OR AFTER THE VARIABLE
function calcAge1(birthYear) {
    return 2020 - birthYear;
}
calcAge1(1996); //WILL CALCULATE THE VALUE BUT NOT STORE IT
const age1 = calcAge1(1996); //WILL CALCULATE THE VALUE AND STORE
console.log(age1);

//EXPRESSION 
//EXPRESSIONS WILL NOT WORK IF YOU CALL THE FUNCTION BEFORE IT IS WRITTEN
//GOOD PRACTICE TO WRITE OUT ALL THE FUNCTIONS AT THE TOP OF THE EDITOR SO TRY TO USE THIS
const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}
const age2 = calcAge2(1996);
console.log(age1, age2);
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (18) ARROW FUNCTION 
/*
//EXPRESSIONS
const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}
const age2 = calcAge2(1996);

//ARROW
const calcAge3 = birthYear => 2020 - birthYear;

const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996));
console.log(yearsUntilRetirement(1996, 'Paul'));
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (19) FUNCTIONS CALLING OTHER FUNCTIONS
/*
//GOOD EXAMPLE OF DRY PRINCIPLE
//IF FRUIT MACHINE DECIDED TO CUT BY 3 THEN YOU DONT HAVE TO REPLACE ALL THE CODE INSIDE THE FUNCTION
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

// (20) FUNCTIONS REVIEW
/*
const calcAge = function(birthYear) { //BIRTHYEAR ON THIS IS A DIFFERENT PARAMETER TO THE ONE BELOW
    return 2020 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} will retire in ${retirement} years`);
        return retirement; //MAKE SURE RETURN IS AFTER THE FACT SINCE WE WANT THE RETURN TO EXIT THE BLOCK LAST
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1896, 'Paul'));

//TYPES OF FUNCTIONS 

    //DECLARATION
    //CAN BE USED BEFORE BEING DECLARED
function calcAge(birthYear) {
    return 2020 - birthYear;
}
    //EXPRESSION
    //A FUNCTION STORED IN A VARIABLE 
const calcAge = function (birthYear) {
    return 2020 - birthYear;
}
    //ARROW
    //GOOD FOR QUICK ONE-LINE FUNCTIONS (HAS NO THIS KEYWORD)
const calcAge = birthYear => 2020 - birthYear;
*/

/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/ 
/*----------------------------------------------------------------------------------------------------*/

//CODING CHALLENGE 

/*

~EACH TEAM COMPETES 3 TIMES, AND THEN THE AVERAGE OF THE 3 SCORES IS CALCULATED (1 AVERAGE SCORE PET TEAM)
~A TEAM ONLY WINS IF IT HAS AT LEAST DOUBLE THE AVERAGE SCORE OF THE OTHER TEAM.

1. CREATE AN ARROW FUNCTION 'CALCAVERAGE' TO CALCULATE THE AVERAGE OF 3 SCORES
2. USE THE FUNCTION TO CALCULATE THE AVERAGE FOR BOTH TEAMS
3. CREATE A FUNCTION 'CHECKWINNER' THAT TAKES THE AVERAGE SCORE OF EACH TEAM AS PARAMETERS (AVGDOLPHINS AND AVGKOALAS)
    AND THEN LOGS THE WINNER TO THE CONSOLE, TOGETHER WITH THE VICTORY POINTS, ACCORDING TO THE RULE ABOVE.
        EXAMPLE: "KOALAS WIN (30 V 13)"
4. USE THE 'CHECKWINNER' FUNCTION TO DETERMINE THE WINNER FOR BOTH DATA 1 AND DATA 2
5. IGNORE DRAWS THIS TIME 

TEST DATA 1: DOLPHINS SCORE 44, 23, AND 71. KOALAS SCORE 65, 54, AND 49
TEST DATA 2: DOLPHINS SCORE 85, 54, AND 41. KOALAS SCORE 23, 34, AND 27

*/

const calcAverage = (score1,  score2,  score3) => (score1 + score2 + score3) / 3;
let dolphinAvg = calcAverage(200, 200, 200);
let koalaAvg = calcAverage(100, 100, 100);

function checkWinner(avgDolphin, avgKoala) {

    if (avgDolphin >= (2* avgKoala)) {
        return `Dolphins won by an average of ${dolphinAvg} because ${dolphinAvg} is double of ${koalaAvg}.`;
    } else if (avgKoala >= (2 * avgDolphin)) {
        return `Koalas won by an average of ${koalaAvg} because ${koalaAvg} is double of ${dolphinAvg}.`;
    } else {
        return `Nobody wins because neither average is double of the other`;
    }
}
console.log(checkWinner(dolphinAvg, koalaAvg));

//MUTATION EXAMPLE
dolphinAvg = calcAverage(200, 200, 200); 
koalaAvg = calcAverage(400, 400, 400);
console.log(checkWinner(dolphinAvg, koalaAvg));