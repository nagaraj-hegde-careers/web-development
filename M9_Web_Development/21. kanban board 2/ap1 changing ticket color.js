let ticket = document.querySelector(".ticket-cont");
let colors = ["lightpink", "lightgreen", "lightblue", "black"];


handleColor(ticket)



function handleColor(ticket) {
    let ticketColorBand = ticket.querySelector(".ticket-color");
  
    ticketColorBand.addEventListener("click", function () {
      // Get the current color class
      let currentColor = null;
      for (let i = 0; i < colors.length; i++) {
        if (ticketColorBand.classList.contains(colors[i])) {
          currentColor = colors[i];
          break;
        }
      }
      
      // Find the index of current color
      let currentIndex = colors.indexOf(currentColor);
      
      // Calculate the next index (loop back to 0 if at the end)
      let nextIndex = (currentIndex + 1) % colors.length;
      
      // Get the next color
      let nextColor = colors[nextIndex];
      
      // Remove all color classes first
      colors.forEach(function(color) {
        ticketColorBand.classList.remove(color);
      });
      
      // Add the next color class
      ticketColorBand.classList.add(nextColor);
    });
}
