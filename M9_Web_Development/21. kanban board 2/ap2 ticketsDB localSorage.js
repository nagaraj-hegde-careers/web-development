let ticketsArr = [
  {
    ticketTask: "Task 1",
    ticketColor: "lightpink",
    ticketID: 0,
  },
];

// Write Code Here =====================
// Convert ticketsArr to JSON string and store in localStorage
localStorage.setItem("ticketsDB", JSON.stringify(ticketsArr));