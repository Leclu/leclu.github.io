var toggleButton = document.getElementById("toggleButton");
var hiddenDivision = document.getElementById("hiddenDivision");

toggleButton.addEventListener("click", function() {
    if (hiddenDivision.style.display === "none") {
        hiddenDivision.style.display = "block";
    } else {
        hiddenDivision.style.display = "none";
    }
});