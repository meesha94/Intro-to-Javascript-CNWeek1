let name = "Meesha";
let age = 27;
let favColour = "pink"; 

console.log(` My name is ${name}. I am ${age} and my favourite colour is ${favColour}.`)

name = "Tom";
age = 34;
favColour = "black";

console.log(` My name is ${name}. I am ${age} and my favourite colour is ${favColour}.`)

let breakfast = "eggs";
let lunch = "pizza";
let dinner = "pasta";

console.log (`Today for breakfast I ate ${breakfast}, for lunch I ate ${lunch} and dinner I ate ${dinner}.`)

breakfast = "porridge";
lunch = "sushi";
dinner = "burgers";

console.log (`Tomorrow for breakfast I will eat ${breakfast}, for lunch I will eat ${lunch} and dinner I will eat ${dinner}.`)


let date1 = new Date("11/21/1994");
let date2 = new Date();

let Difference_In_Time = date2.getTime() - date1.getTime();
     
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      
console.log(`Total number of days between now and your birth date is ${Difference_In_Days} days.`)


let_1 = "x"
let_2 = "o"
let_3 = "" 
let_4 = "x"
let_5 ="x"
let_6 =""
let_7 ="o"
let_8 =""
let_9 =""


console.log (`      |         |    `)
console.log (`   ${let_1}  |    ${let_2}    |    ${let_3}`)
console.log (`      |         |    `)
console.log ("- - - - - - - - - - - - -   ")
console.log (`      |         |    `)
console.log (`   ${let_4}  |    ${let_5}    |    ${let_6}`)
console.log (`      |         |    `)
console.log ("- - - - - - - - - - - - -  ")
console.log (`      |         |    `)
console.log (`   ${let_7}  |    ${let_8}     |    ${let_9}`)
console.log (`      |         |    `) 



let ages = 19;
let country = "Uk";

if (ages > 17 && country == "Uk" ) {
    console.log("Yes I can serve you");
}
else {
    console.log("You aren't old enough");
}

let topping = "pineapple";

switch(topping) {
    case "cheese":
    case "peppers":
        console.log("These are important ingredients for my pizza.");
        break;
    case "pepperoni":
    case "chicken":
        console.log(`I don’t
        mind having ${topping} on my pizza.`);
        break;
    default:
        console.log(`${topping} should not be on a pizza.`)
}


let password = "password";
let len = password.length;

if (len < 8) {
    console.log("Password is too short");
} else {
    console.log(`${password}`);
}

let num = 15;

if (num % 5 == 0)  {
    console.log ("This number is divisble by 3 or 5.");
} else if  (num % 3 == 0) {
    console.log("This number is divisble by 3 or 5.");
}
else {
    console.log("This number is not divisble by 3 or 5.");
}

let number = 3;

if (number % 5 == 0 && number % 3 == 0)  {
    console.log ("fizz buzz");
} else if  (number % 3 == 0) {
    console.log("fizz");
} else if (number % 5 == 0) {
    console.log("buzz");
}
else {
    console.log("This number is not divisble by 3 or 5.");
}


function Palindrome(num) {

    let numToStringArray = num.toString();

    var len = numToStringArray.length;

    if (len < 2) {
        return "It's a palindrome"
    }
    else {

        for (var i = 0; i < len / 2; i++) {
            if (numToStringArray[i] !== numToStringArray[len - 1 - i]) {
                return "It's not a palindrome";
            }

            return "It's a palindrome"
        }
    }

}

console.log(Palindrome(98987));


let time = 17;
let townOfHome = "work";


if (time == 7)  {
    console.log (` I am ${townOfHome}.`);
} else if  (time == 8) {
    console.log(` I am ${townOfHome}.`);
} else if (time == 9) {
    console.log(` I am ${townOfHome}.`);
}
else {
    console.log(`i don't know where I am`);
}

const vowels = ["a", "e", "i", "o", "u"]
let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let highestIndex = 0;


for (let i = 0; i < vowels.length; i++){
    
    index = string.lastIndexOf(vowels[i]);
 
if (index >= highestIndex ){
    
    highestIndex = index;
  
    lastVowel = vowels[i];
}
}
console.log(lastVowel); 

console.log(highestIndex)


let word = "reader";

if (word.charAt(0) === word.charAt(word.length-1)) {
    console.log(`True`);
} else {
    console.log(`False`);
}

let num1 = 18;
let num2 = 13;

if ((num1 + num2) % 2 == 0) {
    console.log((num1 + num2));
} else {
    console.log((num1 * num2));
}





let favSongs = [
    "Beyonce - Love on Top",
    "Adele - Hello",
    "Ariana Grande - 7 rings"
];

console.log(favSongs);

favSongs.push ("Dua Lipa - Levitating", "Harry Styles - Watermelon Sugar");

console.log(favSongs);

favSongs.pop();

console.log(favSongs);

//map() - changes each item in an array to create a new array

//shift() = takes first item away

//unshift() - adds items to the beginning of an array

//splice() - inserts an item into the array at specific point, can add in and keep array the same, or can replace an item in the array 

//unsplice() - 


let favFilms = ["Gone Girl", "Home Alone", "Despicable Me", "The Holiday", "Pitch Perfect"];

favFilms.push("Harry Potter", "Last Christmas");

for ( let i = 0; i <favFilms.length; i++) {
    console.log(favFilms[i]);
}

let randomNumber = [];
while(randomNumber.length < 6){
    let r = Math.floor(Math.random() * 50) + 1;
     randomNumber.push(r);
}
console.log(randomNumber);



let zeroNine = [];

for (let i = 0; i <= 9; i++) {
        zeroNine.push(i);
    
}
console.log(`${zeroNine.reverse()}.`)


let film = ["The Grinch", "Inception", "Coraline", "Dunkirk"];

for ( let i = 0; i <film.length; i++) {
    console.log(favFilms[i]);
}

if (film[2] == "Ghostbusters") {
    console.log("Yay it's Ghostbusters");
} else {
    console.log(`Boo! We want Ghostbusters!`);
}

let randomNumber2 = [];
while(randomNumber2.length < 6){
    let r = Math.floor(Math.random() * 30) + 1;
     randomNumber2.push(r);

if (r % 7 == 0){
    console.log(`${r} is divisible by 7.`)
} else {
    console.log(`${r} is not divisble by 7.`)
}
}

let bobsFollowers = ["Tom", "Adam", "Emma", "Sarah"];
let hannahsFollowers = ["Harry", "Melissa", "Sarah", "Tina"];


for (let i = 0; i < bobsFollowers.length; i++){
    for (let j = 0; j < hannahsFollowers.length; j++){
      if (bobsFollowers[i] == hannahsFollowers[j]){
        console.log(`${hannahsFollowers[j]}`);
      }
    }
}
  

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}
console.log(factorial(33));


let orderCount = 0;

const takeOrder = (topping1,topping2) => {
    console.log (`Pizza with ${topping1} and ${topping2}, order number ${orderCount}`);
    orderCount++;
}
takeOrder("pineapple", "ham");
takeOrder("tuna", "sweetcorn");


let actualPin = 1223;
let balance = 3000;

const cashMachine = (enteredPin, amount) => {
    if (enteredPin == actualPin && amount <= balance) {
        console.log(`Please take your requested amount of £ ${amount}.`);
    } else if (enteredPin == actualPin && amount > balance) {
        console.log(`You do not have enough funds to withdraw £ ${amount}. Your current balance is £ ${balance}`);
    } else {
        console.log(`Incorrect PIN! Please try again.`);
    }
}
cashMachine(1232,400);
cashMachine(1223, 500);
cashMachine(1223, 4000);


const person = {
    myName:"Meesha",
    age: 27,
    favSongs: [
        "Love on Top",
        "Hello"
    ], 
    sayHi (){
        if(this.myName){
            return `Hello my name is ${this.myName}`;
        }
    }
}; 
console.log(person.sayHi());

const pet = {
    petName: "Hugo",
    typeOfPet: "Dog",
    age: 10,
    colour: "brown",
    eat: false,
    drink: false,
    isEating (){
        if(this.eat) {
        return `${this.petName} is eating.`;
        } else {
            return `${this.petName} is not eating`;
        }
    },
    isDrinking (){
        if(this.drink) {
        return `${this.petName} is drinking.`;
        } else {
            return `${this.petName} is not drinking.`;
        }
    
    },
};
console.log(pet.isEating());
console.log(pet.isDrinking());


const coffeeShop = {
    branch: "Manchester",
    drinksWithPrices: [
        {drink:"Latte", price: 3.20},
        {drink:"Cortado", price: 3.00},
        {drink:"Sprite", price: 1.50},
        {drink:"Tea", price:1.90}
    ],
    foodWithPrices: [
        {item:"toast", price: 1.00},
        {item: "Blueberry Muffin", price: 2.10},
        {item:"Sandwich", price: 1.80}
    ],
    drinksOrdered (){
        return `I ordered ${this.drinksWithPrices[1].drink} and the price is ${this.drinksWithPrices[1].price}`;
         },
    foodOrdered (){
        return `I ordered ${this.foodWithPrices[2].item} and the price of is ${this.foodWithPrices[2].price}`;
        },    
    totalPrice (){
        return `The total cost is ${this.drinksWithPrices[1].price + this.foodWithPrices[2].price}` ;
    }           
        
            
    
        
}; 
console.log(coffeeShop.drinksOrdered(1));
console.log(coffeeShop.foodOrdered(2));
console.log(coffeeShop.totalPrice());