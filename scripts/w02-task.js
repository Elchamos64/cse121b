/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Oscar Ramos";
let currentYear = 2023;
let profilePicture = 'w02-task/images/bioPicture.jpg';



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture)

imageElement.setAttribute('alt', `Profile picture of ${fullName}`)


/* Step 5 - Array */
let favoriteFoods = ['Pizza', 'Rice and Beans', 'Flan', 'Curry'];

let foodsText = favoriteFoods.join('\n');

foodElement.textContent = foodsText;

const singleFood = 'Apple pie';

favoriteFoods.push(singleFood);

foodElement.innerHTML += `<br> ${favoriteFoods}`;

favoriteFoods.shift (favoriteFoods);

foodElement.innerHTML += `<br> ${favoriteFoods}`;

favoriteFoods.pop (favoriteFoods);

foodElement.innerHTML += `<br> ${favoriteFoods}`;





