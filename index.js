function createSquare(squareWidth) {
    //add square in the dom
    let square = document.createElement('div');
    square.classList.add("square");
    //arrange the width of the square
    square.style.width = squareWidth -2 + 'px';
    square.style.height = squareWidth -2 + 'px';
    return square;
}

function createGrid(squareNumberPerSide) {
    const box = document.querySelector(".box");
    const boxWidth = box.clientWidth;
    const squareWidth = (boxWidth/squareNumberPerSide);
    const totalSquareNumber = squareNumberPerSide**2;
    const squareElements = [];
    for (let i = 0; i < totalSquareNumber; i++) {
        const square = createSquare(squareWidth);
        squareElements.push(square);
    };
    box.replaceChildren(...squareElements);
}

function arrangeGridSize() {
    const rangeSlider = document.querySelector(".slider");
    const valueOutput = document.querySelector(".value");
    valueOutput.innerHTML = rangeSlider.value;
    rangeSlider.oninput = function() {
        valueOutput.innerHTML = rangeSlider.value;
        squareNumberPerSide = (Number(rangeSlider.value));
        createGrid(squareNumberPerSide);
        addHoverEvent();
    }
}

function addHoverEvent() {
    const squareElements = document.querySelector(".box").children;
    for (let i = 0; i < squareElements.length; i++) {
        squareElements[i].addEventListener("mouseover", () => {
            squareElements[i].style.backgroundColor = createColor();
        });
    }
}

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random()*256);
    return randomNumber;
}

function createColor() {
    const r = getRandomNumber();
    const g = getRandomNumber();
    const b = getRandomNumber();
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

arrangeGridSize();