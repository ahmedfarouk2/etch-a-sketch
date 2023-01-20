const buttons = document.querySelectorAll('.button');
const audio = document.querySelector('audio');
const gridContainer = document.querySelector('.grid-container');
const buttonPink = document.querySelector('.button-3');
let countGridContainerClicks = 0;

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', (e) => {
        audio.currentTime = 0;
        audio.play()
    })
};

window.addEventListener('load', (e) => {
    const requestedGridNumbers = prompt("What's the numbers of grids would you like Bro/Sis", "");
    let gridBoxHeight = 600/`${requestedGridNumbers}`
    let gridBoxWidth  = 600/`${requestedGridNumbers}`
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
    };
    };
})

buttonPink.addEventListener('click', (e) => {
    gridContainer.addEventListener('click', (e) => {
        countGridContainerClicks++;
        gridContainer.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('grid') && countGridContainerClicks % 2 !== 0){
            e.target.style.backgroundColor = 'black';
        }
        else if (e.target.classList.contains('grid') && countGridContainerClicks % 2 == 0) {
            if (e.target.classList.contains('grid')){
                console.log('You just paused drawing!')
            }
        }
        })
    })
})