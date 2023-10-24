function random255() {
    return Math.round(Math.random() * 255);
  }
  
  function setRandomColor() {
    let r = random255();
    let g = random255();
    let b = random255();
    let color = `rgb(${r}, ${g}, ${b})`;
  
    let element = document.body;
  
    element.style.backgroundColor = color;
}
