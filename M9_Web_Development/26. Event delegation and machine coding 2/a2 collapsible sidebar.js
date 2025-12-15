/*
==================================================
COLLAPSIBLE SIDEBAR FUNCTIONALITY
==================================================
This script toggles the sidebar between expanded (250px)
and collapsed (80px) states, and adjusts the main content area.
==================================================
*/

// Step 1: Get the HTML elements we need to work with
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggle-button');
const mainContent = document.getElementById('main-content');

// Step 2: Create a state variable to track if sidebar is collapsed
// false = expanded (default), true = collapsed
let isCollapsed = false;

/*
==================================================
TOGGLE FUNCTIONALITY
==================================================
When user clicks the toggle button:
1. Switch the isCollapsed state
2. Add/remove 'collapsed' class from sidebar
3. Add/remove 'collapsed-main' class from main content
4. CSS animations handle the width changes
*/
toggleButton.addEventListener('click', function() {
  // Toggle the boolean value
  // If it was false (expanded), make it true (collapsed)
  // If it was true (collapsed), make it false (expanded)
  isCollapsed = !isCollapsed;

  // If collapsed, add classes; otherwise remove them
  if (isCollapsed) {
    // COLLAPSED STATE: sidebar is 80px, main content padding is 80px
    sidebar.classList.add('collapsed');
    mainContent.classList.add('collapsed-main');
    // Optional: Change button text to indicate action
    toggleButton.textContent = 'Expand';
  } else {
    // EXPANDED STATE: sidebar is 250px, main content padding is 80px
    sidebar.classList.remove('collapsed');
    mainContent.classList.remove('collapsed-main');
    // Optional: Change button text back
    toggleButton.textContent = 'Collapse';
  }
});

/*
==================================================
EXECUTION FLOW
==================================================

INITIAL STATE (page loads):
- isCollapsed = false
- Sidebar width: 250px
- Main content padding-left: 80px
- Button text: "Toggle Sidebar"

FIRST CLICK (user clicks button):
- isCollapsed = true (was false)
- Add 'collapsed' class to sidebar
- Add 'collapsed-main' class to main content
- CSS changes: sidebar → 80px width
- Button text: "Expand"

SECOND CLICK (user clicks button again):
- isCollapsed = false (was true)
- Remove 'collapsed' class from sidebar
- Remove 'collapsed-main' class from main content
- CSS changes: sidebar → 250px width
- Button text: "Collapse"

Pattern repeats on every click...

==================================================
*/

/*
How it works:

Initial State(Expanded)
┌─────────────────┬──────────────────────────────┐
│   SIDEBAR       │                              │
│   (250px)       │    MAIN CONTENT              │
│                 │    (padding-left: 80px)      │
│ [Toggle] ◄──┐   │                              │
│ Content     │   │  Lorem ipsum dolor sit...    │
│             │   │                              │
└─────────────────┴──────────────────────────────┘

After clicking Toggle(Collapsed)
┌────┬─────────────────────────────────────────┐
│ ▶  │                                        │
│ S  │    MAIN CONTENT (padding-left: 80px)    │
│ I  │                                         │
│ D  │ Lorem ipsum dolor sit amet, consectetur │
│ E  │ adipiscing elit...                      │
│ B  │                                         │
│ A  │                                         │
│ R  │                                         │
│    │                                         │
│(80px)                                        │
└────┴─────────────────────────────────────────┘

*/