/* LESSON 3 - Programming Tasks */
let photoElement = document.querySelector(`#photo`);
/* Profile Object  */
let myProfile = {
    name: "Caleb Tubbs",
    photo: {
        src:"images/IMG_8307.jpg",
        alt: "My Progile Picture"
    },
    favoriteFoods: ['Banana', 'Carrot', 'Pizza', 'Salmon', 'Chocolate','Chicken'],
    hobbies: ['Fishing', 'Hunting', 'Basketball', 'Football'],
    placesLived: [],
};

myProfile.placesLived.push(
    {
        place: 'Helena, Mt',
        length: '1 year'
    }
);


/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */
document.querySelector("#name").innerHTML = `My name is <em>${myProfile.name}</em>`;
/* Name */

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item =>{
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(item =>{
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#hobbies").appendChild(li);
});
/* Places Lived DataList */

let dtElement = document.createElement('dt');
  dtElement.textContent = placeObject.place;

  // Create <dd> element
function addPlaceToHTML(placeObject) {
    let ddElement = document.createElement('dd');
    ddElement.textContent = placeObject.length;
    let dlElement = document.getElementById('places-lived');
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
};
myProfile.placesLived.forEach(addPlaceToHTML);
