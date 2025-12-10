const container = document.querySelector("#container");

data.forEach((product) => {
  // Create card element
  const card = document.createElement('div');
  card.className = 'card';
  
  // Use Math.floor() not Math.round()
  const rating = Math.floor(product.rating.rate);

  // Create star HTML
  let innerStarHTML = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      innerStarHTML += '<span class="star__filled">&#9733;</span>';
    } else {
      innerStarHTML += '<span class="star__notfilled">&#9734;</span>';
    }
  }

  // Set card content
  card.innerHTML = `<div class="details">
    <span class="product__name">${product.title}</span>
    <br>
    <span class="product__category">${product.category}</span>
    <div class="all__star">
      ${innerStarHTML}
    </div>
    <div class="rating__count">Rating Count : <span>${product.rating.count}</span></div>
  </div>
  <div class="btn">
    <button class="btn__buy">Buy Now</button>
  </div>`;

  // Append to container
  container.appendChild(card);
});
