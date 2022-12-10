// Crea una lista no ordenada con el nombre de cada usuario.
const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];

let ul = document.createElement('ul');

document.body.appendChild(ul);

users.forEach((user) => {
    ul.innerHTML += '<li>' + user.name + '</li>';
});

// Resalta con el background-color gold a los usuarios premium.
let liItems = document.querySelectorAll('li');

for(let i = 0; i < liItems.length; i++) {
    if(users[i].isPremium) {
        liItems[i].style.backgroundColor = 'gold';
    }
}

// Añade también el atributo title con el valor Usuario premium a los usuarios premium.

liItems.forEach(li => {
    if(li.style.backgroundColor === 'gold'){
        li.setAttribute('title', 'Usuario premium');
    }
});

console.log(document.body);