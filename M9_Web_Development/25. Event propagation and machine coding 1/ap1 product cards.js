/*
==================================================
PRODUCT CARD GENERATOR
==================================================
This script reads the data array and creates
visual product cards with star ratings.
==================================================
*/

// Step 1: Get the container element where cards will be added
// querySelector("#container") finds the div with id="container"
const container = document.querySelector("#container");

/*
Step 2: Loop through each product in the data array
forEach() runs the function once for each product
*/
data.forEach((product) => {
  
  // Step 3: Create a new div element for the card
  const card = document.createElement('div');
  // Give it the CSS class "card" so styling applies
  card.className = 'card';

  /*
  Step 4: Calculate star rating
  
  Math.floor() rounds DOWN to nearest integer
  Examples:
  - 3.9 → 3 (floor removes decimal)
  - 4.1 → 4 (floor removes decimal)
  - 2.2 → 2 (floor removes decimal)
  
  This is different from Math.round() which rounds to nearest:
  - 3.9 → 4 (rounds up)
  - 4.1 → 4 (rounds down)
  */
  const rating = Math.floor(product.rating.rate);

  /*
  Step 5: Create the star HTML
  
  We need to create 5 stars total:
  - First 'rating' stars are FILLED (★)
  - Remaining (5 - rating) stars are EMPTY (☆)
  
  Example: if rating = 3
  - Loop 1: i=0,1,2 (first 3 iterations) → add filled stars
  - Loop 2: i=0,1 (next 2 iterations) → add empty stars
  - Result: ★★★☆☆
  */
  let innerStarHTML = '';
  
  // Loop 5 times (for each of 5 stars)
  for (let i = 0; i < 5; i++) {
    
    // If current position is less than rating, add filled star
    if (i < rating) {
      // &#9733; is the HTML code for filled star (★)
      // class="star__filled" is for CSS styling
      innerStarHTML += '<span class="star__filled">&#9733;</span>';
    } 
    // Otherwise add empty star
    else {
      // &#9734; is the HTML code for empty star (☆)
      // class="star__notfilled" is for CSS styling
      innerStarHTML += '<span class="star__notfilled">&#9734;</span>';
    }
  }

  /*
  Step 6: Build the complete card HTML
  
  Template includes:
  - Product title (product.title)
  - Category (product.category)
  - Star ratings (innerStarHTML we just created)
  - Rating count (product.rating.count people who rated it)
  - Buy Now button
  
  ${variable} syntax is called "template literals"
  It inserts JavaScript values into strings
  */
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

  /*
  Step 7: Add the card to the page
  
  appendChild() adds the card element as a child of the container
  This makes it visible on the page
  */
  container.appendChild(card);
});

/*
==================================================
EXECUTION FLOW SUMMARY
==================================================

1. HTML loads with empty container
2. data.js loads → data array is available
3. script.js runs:
   - Finds container element
   - For each product in data:
     a) Create a div
     b) Calculate star rating (floor)
     c) Create star HTML (filled + empty)
     d) Create card HTML (title, category, stars, count, button)
     e) Add card to container
4. Result: Page shows grid of 20 product cards with stars

Example for product with rating 3.9:
- Math.floor(3.9) = 3
- Create 3 filled stars (★★★) + 2 empty stars (☆☆)
- Display: ★★★☆☆

==================================================
*/
