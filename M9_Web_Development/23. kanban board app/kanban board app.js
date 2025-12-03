/* ************************************************************************************************** */
const toolBoxColors = document.querySelectorAll('.color');
const addBtn = document.querySelector('.add-btn');
const removeBtn = document.querySelector('.remove-btn');

const mainCont = document.querySelector('.main-cont');
const allTickets = document.querySelectorAll('.ticket-cont');

const modalCont = document.querySelector('.modal-cont');
const textArea = document.querySelector('.textArea-cont');
const allPriorityColors = document.querySelectorAll('.priority-color');

// Show modal flag
let addTaskFlag = false;

// Remove ticket flag
let removeTaskFlag = false;

// Lock flags
const lockClose = 'fa-lock';
const lockOpen = 'fa-lock-open';
/* ************************************************************************************************** */

/* ************************************************************************************************** */
 // Local Storage iplementation
 const ticketsArr = JSON.parse(localStorage.getItem('tickets')) || [];
 console.log(ticketsArr);

 // For every reload fetch from LS (in starting)
 // Retrieval from LS flow
 function init() {
    // It will see data from LS
    // If something is present, it will call createTicket() to render UI 
    if (localStorage.getItem("tickets")) {
        ticketsArr.forEach(function (ticket) {
            createTicket(ticket.ticketColor, ticket.ticketId, ticket.taskContent);
        })
    }
 }

 init();

 function updateLocalStorage() {
    // To set the LS from local array
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
 }

 function getTicketArrIndex(id) {
     // Give me index from array which is getting affected
    let foundIdx = ticketsArr.findIndex(function (tkt) {
        return id === tkt.ticketId
    });
    return foundIdx;
 }

/* ************************************************************************************************** */

/* ************************************************************************************************** */
//Toggle Modal visibility on clicking add button
addBtn.addEventListener('click', function () {
    addTaskFlag = !addTaskFlag;  

    if (addTaskFlag) {
        modalCont.style.display = 'flex';
    } else {
        modalCont.style.display = 'none';
    }
});

//Toggle Remove ticket mode on clicking remove button
removeBtn.addEventListener('click', function () {
    removeTaskFlag = !removeTaskFlag;

    if (removeTaskFlag) {
        alert("Ticket Delete Mode Activated. Click on a ticket to remove it.");
        removeBtn.style.color = 'red';
    } else {
        removeBtn.style.color = 'white';
    }
});
/* ************************************************************************************************** */

/* ************************************************************************************************** */
// Function to create a new ticket
function createTicket(ticketColor, ticketId, ticketTask) {
    // create a new ticket container element
    const ticketCont = document.createElement('div');
    ticketCont.classList.add('ticket-cont'); // or use ticketCont.setAttribute('class', 'ticket-cont');
    ticketCont.innerHTML = `
        <div class = "ticket-color" style = "background-color: ${ticketColor}"></div>
        <div class = "ticket-id">${ticketId}</div>
        <div class = "task-area">${ticketTask}</div>
        <div class = "ticket-lock">
            <i class = "fa-solid fa-lock"></i>
        </div>
    `
    mainCont.appendChild(ticketCont);
    
    handleRemoval(ticketCont);
    handleColor(ticketCont);
    handleLock(ticketCont);
}

// Add event to save/call create ticket function
textArea.addEventListener('keydown', function (ev) {
    const key = ev.key;
    if (key === 'Shift') {
        const ticketId = shortid();
        const taskContent = textArea.value;

        createTicket(modalPriorityColor, ticketId, taskContent);

        // Using Local Storage in create flow
        ticketsArr.push({ticketColor: modalPriorityColor, ticketId, taskContent});
        updateLocalStorage();

        //clearing modal and hiding it after pressing shift
        modalCont.style.display = 'none';
        textArea.value = '';
    }
})

// Adding events to colors in modal
let modalPriorityColor = 'black';

allPriorityColors.forEach(function (colorElem) {
    colorElem.addEventListener('click', function () {
        console.log(colorElem);

        // remove active class from all colors
        allPriorityColors.forEach(function (priorityColorElem) {
            priorityColorElem.classList.remove('active');
        });

        colorElem.classList.add('active');
        modalPriorityColor = colorElem.classList[0];
    });
});

// Handle ticket removal function
function handleRemoval(ticketElem) {
    const idElem = ticketElem.querySelector(".ticket-id");
    const id = idElem.innerText;

    ticketElem.addEventListener('click', function () {
        if (removeTaskFlag) {
            ticketElem.remove();

            // Remove from local storage as well
            const tktIdx = getTicketArrIndex(id);
            ticketsArr.splice(tktIdx, 1);
            updateLocalStorage();
        }
    });
};
allTickets.forEach(function (ticket) {
    handleRemoval(ticket);
})

// Handle ticket color change function
const colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];

function handleColor(ticketElem) {
    const ticketColorBand = ticketElem.querySelector('.ticket-color');
    const idElem = ticketElem.querySelector('.ticket-id');

    ticketColorBand.addEventListener('click', function () {
        const ticketIdx = getTicketArrIndex(idElem.innerText);

        const currentColor = ticketColorBand.style.backgroundColor;
        console.log(currentColor);

        let currentColorIndexInColorsArray = colors.findIndex(function (col) {
            return currentColor === col;
        });

        currentColorIndexInColorsArray++;

        const newTicketColorIndex = currentColorIndexInColorsArray % colors.length;
        const newTicketColor = colors[newTicketColorIndex];

        ticketColorBand.style.backgroundColor = newTicketColor;

        ticketsArr[ticketIdx].ticketColor = newTicketColor;

        updateLocalStorage();
    })
}

// handle lock/unlock of ticket editing
function handleLock(ticketElem) {
    const ticketLockElem = ticketElem.querySelector('.ticket-lock');
    const ticketLockIcon = ticketLockElem.children[0];
    console.log("ticketLockElem", ticketLockElem);
    console.log("ticketLockIcon", ticketLockIcon);
    const ticketTaskArea = ticketElem.querySelector('.task-area');

    const idElem = ticketElem.querySelector('.ticket-id');
    const id = idElem.innerText;

    ticketLockIcon.addEventListener('click', function () {
        const idx = getTicketArrIndex(id);

        if (ticketLockIcon.classList.contains(lockClose)) {
            // right now lock is there
            // remove lock and show unlock
            ticketLockIcon.classList.remove(lockClose);
            ticketLockIcon.classList.add(lockOpen);
            ticketTaskArea.setAttribute('contenteditable', 'true');
        } else {
            ticketLockIcon.classList.add(lockClose);
            ticketLockIcon.classList.remove(lockOpen);
            ticketTaskArea.setAttribute('contenteditable', 'false');
        }

        ticketsArr[idx].taskContent = ticketTaskArea.innerText;
        updateLocalStorage();
    });
}
/* ************************************************************************************************** */

/* ************************************************************************************************** */
  toolBoxColors.forEach(function (colorElem) {
    colorElem.addEventListener('click', function () {
        const selectedColor = colorElem.classList[0];
        console.log({selectedColor});
        const allTickets = document.querySelectorAll('.ticket-cont');
        console.log(allTickets);
        allTickets.forEach(function (ticketElem) {
            const ticketColorBand = ticketElem.querySelector('.ticket-color');
            if (ticketColorBand.style.backgroundColor === selectedColor) {
                // It's a match, show it
                ticketElem.style.display = 'block';
            } else {
                ticketElem.style.display = 'none';
            }
        });
    });

    // Double click to reset the filter
    colorElem.addEventListener('dblclick', function () {
        const allTickets = document.querySelectorAll('.ticket-cont');
        allTickets.forEach(function (ticketElem) {
            ticketElem.style.display = 'block';
        });
    });
  });
/* ************************************************************************************************** */