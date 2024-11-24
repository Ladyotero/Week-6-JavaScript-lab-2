'use strict'

const products = [
  {
    name: 'Rice',
    category: 'Grains',
    price: 3.99,
    inStock: true
  },
  {
    name: 'Toilet Paper',
    category: 'Household',
    rice: 7.99,
    inStock: true
  },
  {
    name: 'Eggs',
    category: 'Bakery',
    price: 3.00,
    inStock: true
  }
]

function renderProducts() {
  const list = document.getElementById('productLists');
  list.innerHTML = '';

  products.forEach(product => {
    const listItem = document.createElement('li');

    listItem.innerHTML =
      `<h5>${product.name}</h5>
    <p>Category: ${product.category}</p>
    <p>Price: ${product.price}</p>
    <p>In Stock: ${product.inStock}</p>`
    list.appendChild(listItem);
  });


}
renderProducts();

