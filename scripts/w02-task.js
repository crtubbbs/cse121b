/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Caleb Tubbs";
const currentYear = "2024";
const profilePicture = "images/IMG_8307.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.querySelector('#food');
const  yearElement =  document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}<strong>`
yearElement.textContent = currentYear 
imageElement.setAttribute('src', profilePicture)



/* Step 5 - Array */

let favfoods = ['Banana', 'Carrot', 'Pizza', 'Salmon', 'Chocolate','Chicken'];
foodElement.innerHTML = favfoods;

let newfood = 'Burgers';
favfoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`;

let nonumberone = favfoods.shift();
foodElement.innerHTML += `<br>${favfoods}`;

let nonumberlast = favfoods.pop();
foodElement.innerHTML += `<br>${favfoods}`;

