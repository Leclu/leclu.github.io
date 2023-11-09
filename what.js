var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function doSomething () {
  // (A) DISABLE THE BUTTON
  document.getElementById("myButton").disabled = true;

  // (B) DO YOUR PROCESSING HERE
  alert("Something is done!");

  // (C) RE-ENABLE AFTER PROCESSING IF YOU WANT
  // document.getElementById("myButton").disabled = false;
}