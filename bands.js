'use strict'

const bands = [
  {
    name: 'Imagine Dragons',
    genre: 'Pop Rock',
    formedYear: 2008,
    active: true
  },
  {
    name: 'Queen',
    genre: 'Rock',
    formedYear: 1970,
    active: false
  },
  {
    name: 'Coldplay',
    genre: 'Alternative Rock',
    formedYear: 1996,
    active: true
  }
];

function renderBands() {
  const container = document.getElementById('bandsContainer');
  container.innerHTML = '';

  bands.forEach(band => {
    const bandCard = document.createElement('div');
    bandCard.innerHTML =
      `<div class='card'>
         <div class='card-body'>
           <h3 class='card-title'>${band.name}</h3>
           <p class='card=text >Genre: ${band.genre}</p>
           <p class='card=text >Formed Year: ${band.formedYear}</p>
      </div>
    </div>
    `;
    container.appendChild(bandCard);

  })
}
renderBands();