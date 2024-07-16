// Task 1: Fortune Teller
function tellFortune(numChildren, partnerName, location, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`);
  }
  
  tellFortune(2, "John", "New York", "Software Engineer");
  tellFortune(3, "Emily", "London", "Doctor");
  tellFortune(1, "Michael", "Paris", "Artist");
  
  // Task 2: Pet Age Calculator
  function calculatePetAge(petAge, conversionRate = 7) {
    const humanYears = petAge * conversionRate;
    console.log(`Your kitty is ${humanYears} years old in cat years!`);
  }
  
  calculatePetAge(5);
  calculatePetAge(10, 5);
  calculatePetAge(3, 10);
  
  // Task 3: The Rectangler
  function calcPerimeter(length, width) {
    const perimeter = 2 * (length + width);
    console.log(`The perimeter is ${perimeter}`);
  }
  
  function calcArea(length, width) {
    const area = length * width;
    console.log(`The area is ${area}`);
  }
  
  calcPerimeter(4, 5);
  calcArea(4, 5);
  
  // Task 4: The Coffee Consumption Estimator
  function calculateCoffeeSupply(age, cupsPerDay) {
    const maxAge = 100;
    const totalCups = Math.round((maxAge - age) * cupsPerDay);
    console.log(`You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`);
  }
  
  calculateCoffeeSupply(25, 2);
  calculateCoffeeSupply(30, 3);
  calculateCoffeeSupply(35, 1.5);
  
  // Task 5: The Distance Converter
  function metersToFeet(meters) {
    const feet = meters * 3.281;
    console.log(`${meters} meters is equal to ${feet} feet.`);
  }
  
  function feetToMeters(feet) {
    const meters = feet * 0.3048;
    console.log(`${feet} feet is equal to ${meters} meters.`);
  }
  
  metersToFeet(10);
  feetToMeters(30);