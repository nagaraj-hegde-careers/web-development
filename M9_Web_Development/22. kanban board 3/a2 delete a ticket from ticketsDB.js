// FETCHING ALL THE TICKET CONTAINERS IN AN ARRAY
let ticketContArr = document.querySelectorAll(".ticket-cont");
let removeBtn = document.querySelector(".remove-btn");


let removeFlag = false;


// REMOVE BUTTON HANDLES removeFlag and creates ALERT
removeBtn.addEventListener("click", function () {
  removeFlag = !removeFlag;


  if (removeFlag === true) {
    alert("delete button has been activated");
    removeBtn.style.backgroundColor = "red";
  } else {
    removeBtn.style.backgroundColor = "inherit";
  }
});


// TRAVERSING THROUGH THAT ARRAY
for (let i = 0; i < ticketContArr.length; i++) {
  // ADDING CLICK EVENTLISTENER TO THE ICON
  ticketContArr[i].addEventListener("click", (e) => {
    if (!removeFlag) return;


    // Get the ticket ID from the ticket being deleted
    let ticketID = ticketContArr[i].querySelector(".ticket-id").innerText;
    
    ticketContArr[i].remove(); // ui Removal


    // WRITE SOLUTION HERE ============================================
    // Find the index of the ticket in ticketsArr by matching IDs
    let indexToDelete = -1;
    for (let j = 0; j < ticketsArr.length; j++) {
      if (ticketsArr[j].ticketID === ticketID) {
        indexToDelete = j;
        break;
      }
    }
    
    // Delete the ticket from ticketsArr if found
    if (indexToDelete !== -1) {
      ticketsArr.splice(indexToDelete, 1);
    }
    
    // Update the ticketsDB in localStorage with the updated array
    localStorage.setItem("ticketsDB", JSON.stringify(ticketsArr));
  });
}
