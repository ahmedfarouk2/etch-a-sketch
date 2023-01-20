const buttons = document.querySelectorAll('.button');
const audio = document.querySelector('audio');
const gridContainer = document.querySelector('.grid-container');


for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', (e) => {
        audio.currentTime = 0;
        audio.play()
    })
};

window.addEventListener('load', (e) => {
    const requestedGridNumbers = prompt("What's the numbers of grids would you like Bro/Sis", "");
    let gridBoxHeight = 550/`${requestedGridNumbers}`
    let gridBoxWidth  = 550/`${requestedGridNumbers}`
    for (let i = 0; i < requestedGridNumbers; i++){
    const row = document.createElement('div');
    gridContainer.append(row);
    row.classList.add('row');
    for (let i = 0; i < requestedGridNumbers; i++){
        const gridBox = document.createElement('div');
        row.append(gridBox);
        gridBox.classList.add('grid');
        gridBox.style.height = `${gridBoxHeight}px`;
        gridBox.style.width  = `${gridBoxWidth}px`;
    }
    }
})