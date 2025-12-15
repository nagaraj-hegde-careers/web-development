/*
==================================================
STAR RATING COMPONENT
==================================================
This script makes an interactive 5-star rating system
where users can hover and click to rate
==================================================
*/

// Step 1: Get all star elements from the HTML
// querySelectorAll returns all elements with class "star"
const stars = document.querySelectorAll('.star');

// Step 2: Get the count display element
// This shows the current rating (0-5)
const countDisplay = document.getElementById('count');

// Step 3: Create a global variable to store the selected rating
// Default is 0 (no stars selected)
// This persists when user hovers/leaves
let selectedRating = 0;

/*
==================================================
HELPER FUNCTION: Update star colors
==================================================
This function colors stars based on a given number
- Fills stars up to 'rating' with yellow ('star-filled' class)
- Removes 'star-filled' class from stars beyond 'rating'
*/
function updateStars(rating) {
  // Loop through all 5 stars
  stars.forEach((star, index) => {
    // index is 0-4, but data-index in HTML is 1-5
    // So we compare (index + 1) with rating
    
    if (index + 1 <= rating) {
      // This star should be yellow
      // Add the 'star-filled' class to turn it yellow
      star.classList.add('star-filled');
    } else {
      // This star should be grey
      // Remove the 'star-filled' class to turn it grey
      star.classList.remove('star-filled');
    }
  });
}

/*
==================================================
MOUSEOVER EVENT: When user hovers over a star
==================================================
*/
stars.forEach((star) => {
  star.addEventListener('mouseover', function() {
    // Get the data-index attribute from the hovered star
    // data-index="1" means this is the 1st star
    const hoverRating = parseInt(this.getAttribute('data-index'));
    
    // Call helper function to fill stars up to hoverRating
    // This shows which stars would be selected if user clicks
    updateStars(hoverRating);
  });
});

/*
==================================================
CLICK EVENT: When user clicks a star
==================================================
*/
stars.forEach((star) => {
  star.addEventListener('click', function() {
    // Get the data-index of the clicked star
    const clickedRating = parseInt(this.getAttribute('data-index'));
    
    // Step 1: Update global variable with the selected rating
    selectedRating = clickedRating;
    
    // Step 2: Update the stars to show the new rating
    updateStars(selectedRating);
    
    // Step 3: Update the count display to show rating
    // If user clicks 3rd star, count becomes "3"
    countDisplay.textContent = selectedRating;
  });
});

/*
==================================================
MOUSELEAVE EVENT: When user moves mouse away
==================================================
*/
stars.forEach((star) => {
  star.addEventListener('mouseleave', function() {
    // When mouse leaves, reset stars to show selectedRating
    // This is important because selectedRating is the last clicked value
    // If user clicked 3 stars and hovers over 5, when they leave,
    // it should go back to showing 3 stars
    updateStars(selectedRating);
  });
});

/*
==================================================
EXECUTION FLOW EXAMPLE
==================================================

Initial state:
- All stars: grey (no 'star-filled' class)
- Count: 0
- selectedRating: 0

User hovers over 4th star:
- updateStars(4) is called
- Stars 1,2,3,4 get 'star-filled' class → yellow
- Star 5 has class removed → grey
- Count still shows 0 (not updated yet)

User moves mouse away (mouseleave):
- updateStars(0) is called (selectedRating is still 0)
- All stars have 'star-filled' removed → all grey
- Count still shows 0

User clicks 3rd star:
- selectedRating = 3 (stored globally)
- updateStars(3) is called
- Stars 1,2,3 get 'star-filled' class → yellow
- Stars 4,5 have class removed → grey
- Count updates to 3

User hovers over 5th star:
- updateStars(5) is called
- All 5 stars get 'star-filled' class → yellow
- Count still shows 3 (not updated)

User moves mouse away:
- updateStars(3) is called (selectedRating is 3)
- Stars 1,2,3 get 'star-filled' class → yellow
- Stars 4,5 have class removed → grey
- Count still shows 3

==================================================
*/
