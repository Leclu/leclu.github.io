const barrelRollButton = document.getElementById('barrelRollButton');
let rotation = 360;

barrelRollButton.addEventListener('click', () => {
    rotation += 360;
    document.body.style.transition = 'transform 2s';
    document.body.style.transform = `rotate(${rotation}deg)`;
});