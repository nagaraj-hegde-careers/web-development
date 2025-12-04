/* ============================================================
   KANBAN BOARD APPLICATION
   
   FEATURES:
   1. Create new tickets with task input (Press Shift)
   2. Edit ticket tasks (Lock/Unlock toggle)
   3. Delete tickets (Activate delete mode)
   4. Change ticket priority color (Click color band)
   5. Filter tickets by priority color (Click toolbox colors)
   6. Persist data in localStorage (Auto-save)
   
   ============================================================ */

// ============================================================
// DOM ELEMENTS SELECTION
// ============================================================

// Toolbox elements
const addBtn = document.querySelector('.add-btn');
const removeBtn = document.querySelector('.remove-btn');
const toolBoxColors = document.querySelectorAll('.color');

// Modal elements
const modalCont = document.querySelector('.modal-cont');
const textArea = document.querySelector('.textArea-cont');
const allPriorityColors = document.querySelectorAll('.priority-color');

// Main container
const mainCont = document.querySelector('.main-cont');

// ============================================================
// STATE & CONFIGURATION
// ============================================================

// Flag to toggle modal visibility (Add new ticket mode)
let addTaskFlag = false;

// Flag to toggle delete mode
let removeTaskFlag = false;

// Currently selected priority color for new tickets (default: black)
let modalPriorityColor = 'black';

// Lock/Unlock icon classes
const lockClose = 'fa-lock';        // Locked state
const lockOpen = 'fa-lock-open';    // Unlocked state (editable)

// Available priority colors for cycling
const colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];

// ============================================================
// LOCAL STORAGE MANAGEMENT
// ============================================================

// Get existing tickets from localStorage or initialize empty array
const ticketsArr = JSON.parse(localStorage.getItem('tickets')) || [];
console.log('Loaded tickets from localStorage:', ticketsArr);

/**
 * Initialize application by loading tickets from localStorage
 * This runs when page first loads
 */
function init() {
    if (localStorage.getItem('tickets')) {
        ticketsArr.forEach(function (ticket) {
            createTicket(ticket.ticketColor, ticket.taskContent, ticket.ticketId);
        });
    }
    console.log('App initialized with', ticketsArr.length, 'tickets');
}

/**
 * Save ticketsArr to localStorage
 * Called whenever data changes (create, edit, delete, color change)
 */
function updateLocalStorage() {
    localStorage.setItem('tickets', JSON.stringify(ticketsArr));
    console.log('Updated localStorage');
}

/**
 * Find and return index of ticket in ticketsArr by ID
 * @param {string} id - Ticket ID to search for
 * @returns {number} - Index of ticket in array, or -1 if not found
 */
function getTicketArrIndex(id) {
    return ticketsArr.findIndex(function (ticket) {
        return id === ticket.ticketId;
    });
}

// ============================================================
// TICKET CREATION
// ============================================================

/**
 * Create a ticket and add it to the DOM
 * @param {string} ticketColor - Color of the ticket (lightpink, lightgreen, lightblue, black)
 * @param {string} taskContent - Text content of the ticket
 * @param {string} ticketId - Unique identifier for the ticket
 */
function createTicket(ticketColor, taskContent, ticketId) {
    // Create main ticket container
    const ticketCont = document.createElement('div');
    ticketCont.classList.add('ticket-cont');
    
    // Store color name as data attribute for filtering
    ticketCont.setAttribute('data-color', ticketColor);

    // Build ticket HTML structure
    ticketCont.innerHTML = `
        <div class="ticket-color" style="background-color: ${ticketColor}"></div>
        <div class="ticket-id">${ticketId}</div>
        <div class="task-area">${taskContent}</div>
        <div class="ticket-lock">
            <i class="fa-solid ${lockClose}"></i>
        </div>
    `;

    // Add ticket to DOM
    mainCont.appendChild(ticketCont);

    // Attach event handlers to the new ticket
    handleRemoval(ticketCont);      // Delete functionality
    handleColor(ticketCont);        // Color cycling functionality
    handleLock(ticketCont);         // Lock/Edit functionality
}

/**
 * Handle ticket creation when user presses Shift in textarea
 * Adds new ticket to DOM and saves to localStorage
 */
textArea.addEventListener('keydown', function (event) {
    if (event.key === 'Shift') {
        const taskContent = textArea.value.trim();

        // Validate input
        if (!taskContent) {
            alert('Please enter a task before creating a ticket');
            return;
        }

        // Generate unique ID for ticket
        const ticketId = shortid();

        // Create ticket UI
        createTicket(modalPriorityColor, taskContent, ticketId);

        // Add to ticketsArr and save to localStorage
        ticketsArr.push({
            ticketId,
            taskContent,
            ticketColor: modalPriorityColor
        });
        updateLocalStorage();

        // Reset modal
        modalCont.style.display = 'none';
        addTaskFlag = false;
        textArea.value = '';

        console.log('New ticket created:', ticketId);
    }
});

// ============================================================
// ADD BUTTON FUNCTIONALITY
// ============================================================

/**
 * Toggle modal visibility when Add button is clicked
 */
addBtn.addEventListener('click', function () {
    addTaskFlag = !addTaskFlag;

    if (addTaskFlag) {
        modalCont.style.display = 'flex';
        textArea.focus();  // Auto-focus textarea
    } else {
        modalCont.style.display = 'none';
    }
});

// ============================================================
// PRIORITY COLOR SELECTION IN MODAL
// ============================================================

/**
 * Handle priority color selection in modal
 * User clicks a color to select priority for new ticket
 */
allPriorityColors.forEach(function (colorElem) {
    colorElem.addEventListener('click', function () {
        // Remove active class from all colors
        allPriorityColors.forEach(function (elem) {
            elem.classList.remove('active');
        });

        // Add active class to clicked color
        colorElem.classList.add('active');

        // Update modal priority color (first class = color name)
        modalPriorityColor = colorElem.classList[0];
        console.log('Priority color selected:', modalPriorityColor);
    });
});

// ============================================================
// DELETE FUNCTIONALITY
// ============================================================

/**
 * Toggle delete mode when Remove button is clicked
 */
removeBtn.addEventListener('click', function () {
    removeTaskFlag = !removeTaskFlag;

    if (removeTaskFlag) {
        alert('Delete mode activated... Click on a ticket to delete it');
        removeBtn.style.color = 'red';
    } else {
        removeBtn.style.color = 'white';
    }
});

/**
 * Handle ticket removal when clicked in delete mode
 * @param {HTMLElement} ticketElem - The ticket element to potentially delete
 */
function handleRemoval(ticketElem) {
    const idElem = ticketElem.querySelector('.ticket-id');
    const id = idElem.innerText;

    ticketElem.addEventListener('click', function () {
        // Only delete if delete mode is active
        if (removeTaskFlag) {
            // Remove from DOM
            ticketElem.remove();

            // Remove from ticketsArr
            const ticketIdx = getTicketArrIndex(id);
            if (ticketIdx !== -1) {
                ticketsArr.splice(ticketIdx, 1);
                updateLocalStorage();
                console.log('Ticket deleted:', id);
            }
        }
    });
}

// ============================================================
// LOCK/UNLOCK & EDIT FUNCTIONALITY
// ============================================================

/**
 * Handle lock/unlock toggle and task editing
 * Locked = read-only, Unlocked = editable
 * @param {HTMLElement} ticketElem - The ticket element
 */
function handleLock(ticketElem) {
    const ticketLockElem = ticketElem.querySelector('.ticket-lock');
    const ticketLockIcon = ticketLockElem.querySelector('i');
    const ticketTaskArea = ticketElem.querySelector('.task-area');
    const idElem = ticketElem.querySelector('.ticket-id');
    const id = idElem.innerText;

    ticketLockIcon.addEventListener('click', function (event) {
        // Prevent delete mode from triggering when clicking lock icon
        event.stopPropagation();

        const ticketIdx = getTicketArrIndex(id);

        if (ticketLockIcon.classList.contains(lockClose)) {
            // Currently LOCKED -> Unlock it
            ticketLockIcon.classList.remove(lockClose);
            ticketLockIcon.classList.add(lockOpen);
            ticketTaskArea.setAttribute('contenteditable', 'true');
            ticketTaskArea.focus();
        } else {
            // Currently UNLOCKED -> Lock it and save changes
            ticketLockIcon.classList.add(lockClose);
            ticketLockIcon.classList.remove(lockOpen);
            ticketTaskArea.setAttribute('contenteditable', 'false');

            // Save edited content to localStorage
            ticketsArr[ticketIdx].taskContent = ticketTaskArea.innerText;
            updateLocalStorage();
        }
    });
}

// ============================================================
// TICKET COLOR CYCLING
// ============================================================

/**
 * Handle color band click to cycle through priorities
 * Colors cycle: lightpink -> lightgreen -> lightblue -> black -> lightpink...
 * @param {HTMLElement} ticketElem - The ticket element
 */
function handleColor(ticketElem) {
    const ticketColorBand = ticketElem.querySelector('.ticket-color');
    const idElem = ticketElem.querySelector('.ticket-id');

    ticketColorBand.addEventListener('click', function (event) {
        // Prevent delete mode from triggering
        event.stopPropagation();

        const ticketIdx = getTicketArrIndex(idElem.innerText);
        const currentColor = ticketColorBand.style.backgroundColor;

        // Find current color in array
        let currentColorIndex = colors.findIndex(function (col) {
            return currentColor === col;
        });

        // Move to next color (loop back to 0 at end)
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        const newColor = colors[currentColorIndex];

        // Update UI and storage
        ticketColorBand.style.backgroundColor = newColor;
        ticketElem.setAttribute('data-color', newColor);
        ticketsArr[ticketIdx].ticketColor = newColor;
        updateLocalStorage();

        console.log('Ticket color changed to:', newColor);
    });
}

// ============================================================
// HELPER FUNCTION: Get color name from toolbox element
// ============================================================

/**
 * Extract the actual color name from toolbox element classes
 * Element has classes like: "color lightpink"
 * We need to find the color class (not "color" itself)
 */
function getColorNameFromElement(elem) {
    const classList = Array.from(elem.classList);
    // Find which class is a valid color (not "color" itself)
    for (let i = 0; i < classList.length; i++) {
        if (colors.includes(classList[i])) {
            return classList[i];
        }
    }
    return null;
}

// ============================================================
// FILTER BY PRIORITY COLOR
// ============================================================

/**
 * Handle filter buttons in toolbox
 * Single click = filter by that color
 * Double click = show all tickets
 */
toolBoxColors.forEach(function (colorElem) {
    // SINGLE CLICK: Filter by this color
    colorElem.addEventListener('click', function () {
        const selectedColor = getColorNameFromElement(colorElem);
        const allTickets = document.querySelectorAll('.ticket-cont');

        console.log('Filtering by color:', selectedColor);
        console.log('Tickets found:', allTickets.length);

        allTickets.forEach(function (ticketElem) {
            const ticketColor = ticketElem.getAttribute('data-color');
            console.log('Comparing:', ticketColor, '===', selectedColor, '?', ticketColor === selectedColor);

            // Show tickets that match, hide those that don't
            if (ticketColor === selectedColor) {
                ticketElem.style.display = 'flex';
                console.log('SHOWING:', ticketColor);
            } else {
                ticketElem.style.display = 'none';
                console.log('HIDING:', ticketColor);
            }
        });
    });

    // DOUBLE CLICK: Reset filter and show all tickets
    colorElem.addEventListener('dblclick', function () {
        const allTickets = document.querySelectorAll('.ticket-cont');

        allTickets.forEach(function (ticketElem) {
            ticketElem.style.display = 'flex';
        });

        console.log('Filter reset - showing all tickets');
    });
});

// ============================================================
// APPLICATION INITIALIZATION
// ============================================================

// Initialize app when DOM is loaded
init();