let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let taskArea = document.querySelector(".textArea-cont");

let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let allPriorityColors = document.querySelectorAll(".priority-color");

let modalPriorityColor = colors[colors.length - 1];
let ticketID = 0;

// TICKET IS CREATED WHEN SHIFT IS PRESSED
modalCont.addEventListener("keydown", function (e) {
  let key = e.key;

  if (key == "Shift") {
    createTicket(taskArea.value, modalPriorityColor);
    modalCont.style.display = "none";
    addFlag = false;
    taskArea.value = "";
  }
});

// ADDING TICKET TO DOM
function createTicket(ticketTask, ticketColor) {
  // Write code here ==
  // Create the main ticket container
  let ticketCont = document.createElement("div");
  ticketCont.classList.add("ticket-cont");
  
  // Create ticket color div
  let colorDiv = document.createElement("div");
  colorDiv.classList.add("ticket-color", ticketColor);
  
  // Create ticket ID div
  let idDiv = document.createElement("div");
  idDiv.classList.add("ticket-id");
  idDiv.textContent = `#${ticketID}`;
  
  // Create task area div
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task-area");
  taskDiv.textContent = ticketTask;
  
  // Create ticket lock div with icon
  let lockDiv = document.createElement("div");
  lockDiv.classList.add("ticket-lock");
  lockDiv.innerHTML = '<i class="fa-solid fa-lock"></i>';
  
  // Append all child elements to ticket container
  ticketCont.appendChild(colorDiv);
  ticketCont.appendChild(idDiv);
  ticketCont.appendChild(taskDiv);
  ticketCont.appendChild(lockDiv);
  
  // Add the ticket to main container
  mainCont.appendChild(ticketCont);
  
  // Increment ticket ID for next ticket
  ticketID++;
}
