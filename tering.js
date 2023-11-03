// Get references to the button and the hidden division
var toggleButton = document.getElementById("toggleButton");
var hiddenDivision = document.getElementById("hiddenDivision");

// Add a click event listener to the button
toggleButton.addEventListener("click", function() {
    // Toggle the visibility of the hidden division
    if (hiddenDivision.style.display === "none") {
        hiddenDivision.style.display = "block";
    } else {
        hiddenDivision.style.display = "none";
    }
});