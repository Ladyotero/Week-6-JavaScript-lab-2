'use strict'

const restaurants = [
    {
        name: 'McDonald',
        cuisine: 'American-Fast Food',
        location: 'Global',
        rating: 2
    },
    {
        name: 'Chick-Fill-A',
        cuisine: 'American-Fast Food',
        location: 'Only US and PR',
        rating: 8.0,
    },
    {
        name: 'Taco Bell',
        cuisine: 'Mexican-American-Fast Food',
        location: 'Only US and PR',
        rating: 3.5
    }
];

function renderRestaurants() {
    const table = document.getElementById('restaurantsTable');
    table.innerHTML = '';

    restaurants.forEach(restaurant => {
        const row = document.createElement('tr');
        row.innerHTML = `
     <td>${restaurant.name}</td> 
     <td>${restaurant.cuisine}</td> 
     <td>${restaurant.location}</td> 
     <td>${restaurant.rating}</td>`


        table.appendChild(row);
    });
}

renderRestaurants();
