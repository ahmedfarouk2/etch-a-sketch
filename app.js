const buttons = document.querySelectorAll('.button');
const audio = document.querySelector('audio');
const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.button-1')
const eraserButton = document.querySelector('.button-2');
const blackButton = document.querySelector('.button-3');
let countGridContainerClicks = 0;

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', (e) => {
        audio.currentTime = 0;
        audio.play()
    })
};


function resetFunction (e){
    const gridBoxes = document.querySelectorAll('.grid')
    for (let i = 0; i < gridBoxes.length; i++){
        gridBoxes[i].style.backgroundColor = 'salmon';
    }
}


function eraseFunction (e){
    if (e.target.classList.contains('grid')){
        e.target.style.backgroundColor = 'salmon';
    }
    }



function blackDrawingFunction (e){
    countGridContainerClicks++;
    gridContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid') && countGridContainerClicks % 2 !== 0){
        e.target.style.backgroundColor = 'black';
    }
    else if (e.target.classList.contains('grid') && countGridContainerClicks % 2 == 0) {
        if (e.target.classList.contains('grid')){
            console.log('You just paused drawing!');
        }
    }
    })
}


const windowLoadingFunction = function (e){
    const requestedGridNumbers = prompt("What's the numbers of grids would you like bro/sis?", "");
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
}


window.addEventListener('load', windowLoadingFunction)
gridContainer.addEventListener('click', blackDrawingFunction)
gridContainer.addEventListener('mouseover', eraseFunction)
resetButton.addEventListener('click', resetFunction)

