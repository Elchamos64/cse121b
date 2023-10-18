/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Oscar Ramos",
    photo: "images/bioPicture.jpg",
    favoriteFoods: [
        "pizza", 
        "tacos",
        "Rice and Beans", 
        "Flan", 
        "Apple pie"
    ],
    hobbies: [
        "Soccer", 
        "Hike",
        "Watch Movies",
    ],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "San Pedro Sula, HN",
        length: "20 years"
    }, 
    {
        place: "Salt Lake City, UT",
        length: "2 years"
    }, 
    {
        place: "Rexburg, ID",
        length: "1 year"
    }
)


/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(function(placeInfo) {
    let dtElement = document.createElement('dt');
    dtElement.textContent = placeInfo.place;
    document.querySelector('#places-lived').appendChild(dtElement);

    let ddElement = document.createElement('dd');
    ddElement.textContent = placeInfo.length;
    document.querySelector('#places-lived').appendChild(ddElement);
});

