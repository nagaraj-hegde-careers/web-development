let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let addFlag = false;

// Write code here.
// Toggle modal visibility on add button click
addBtn.addEventListener("click", function() {
    addFlag = !addFlag; // Toggle the flag
    
    if (addFlag) {
        // Make modal visible
        modalCont.style.display = "flex";
    } else {
        // Hide modal
        modalCont.style.display = "none";
    }
});
