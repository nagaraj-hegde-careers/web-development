/*
==================================================
ACCORDION COMPONENT FUNCTIONALITY
==================================================
This script makes accordion items expand/collapse
when users click on the headers.
==================================================
*/

// Step 1: Get all accordion buttons
// querySelectorAll returns a list of ALL elements with class "accordion-button"
const accordionButtons = document.querySelectorAll('.accordion-button');

/*
==================================================
TOGGLE FUNCTIONALITY
==================================================
For each button, add a click event listener
When clicked, toggle the visibility of the content below it
*/
accordionButtons.forEach((button) => {
  button.addEventListener('click', function() {
    // Step 1: Get the parent accordion-item div
    // this.parentElement gets the <div class="accordion-item"> that contains this button
    const accordionItem = this.parentElement;

    // Step 2: Get the accordion-content div inside this item
    // querySelector searches ONLY within the accordion-item
    // This finds the <div class="accordion-content"> sibling of the button
    const accordionContent = accordionItem.querySelector('.accordion-content');

    // Step 3: Check current display state and toggle it
    // If display is "none" (hidden), change to "block" (visible)
    // If display is "block" (visible), change to "none" (hidden)
    if (accordionContent.style.display === 'none' || accordionContent.style.display === '') {
      // Content is hidden, so show it
      accordionContent.style.display = 'block';
    } else {
      // Content is visible, so hide it
      accordionContent.style.display = 'none';
    }
  });
});

/*
==================================================
EXECUTION FLOW EXAMPLE
==================================================

INITIAL STATE (page loads):
- All accordion-content has display: none (hidden by CSS)
- User sees 3 buttons but no content

USER CLICKS "Section 1" BUTTON:
- Event listener triggers
- Gets the accordion-content inside Section 1 item
- Checks: is it "none"? YES
- Sets display = "block" → content becomes visible
- User sees content for Section 1

USER CLICKS "Section 1" BUTTON AGAIN:
- Event listener triggers
- Gets the accordion-content inside Section 1 item
- Checks: is it "block"? YES
- Sets display = "none" → content becomes hidden
- User sees Section 1 button only

USER CLICKS "Section 2" BUTTON:
- Event listener triggers
- Gets the accordion-content inside Section 2 item
- Checks: is it "none"? YES
- Sets display = "block" → content becomes visible
- Now both Section 1 and Section 2 are expanded
- (Both can be open at the same time)

==================================================
*/
