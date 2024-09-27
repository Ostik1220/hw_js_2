let dgrees = 3;
console.log(dgrees)
dgrees *= 1.8;
dgrees += 32;
console.log(dgrees)


let february = 28;
console.log(february)
february *= 24;
console.log(february)
february *= 60;
console.log(february)


let health = 100;
let energy = 100;

let damage = 20;
let energyLoss = 15;

health -= damage;
energy -= energyLoss;
console.log("Поточний рівень здоров'я гравця: " + health);
console.log("Поточний рівень енергії гравця: " + energy);


let purchaseAmount = 968; 
let discount = 0.2; //я знаю що тут має бути 10 але я вирішив дотати щось своє
let finalAmount = purchaseAmount * (1 - discount);
console.log("Сума покупки після знижки: " + parseInt(finalAmount) + " грн");

let number = 1324.94;
console.log(Math.floor(number))

const text = "12345678.9"
console.log(Number.parseFloat(text))

const hawk = "898123"
console.log(Number.parseInt(hawk))

const root = 36
console.log(Math.sqrt(root))


let easterEgg = 42;       
let westernEgg = "1928374655";      
let southEgg = parseInt(westernEgg);
console.log(southEgg);
let numberAsString = easterEgg.toString();
console.log(numberAsString);
