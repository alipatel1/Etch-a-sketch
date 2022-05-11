let color = 'black';
let click = true;

function populateBoard(size) {
  let board = document.querySelector(".board") //grabbed the board class
  let squares = board.querySelectorAll('div') //within board there are divs created which this selects. This is to clear out existing divs
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)` //states that it will make the amount specified of columns and each column will have an equal width of the container. The size statement makes it able to be changed.
  board.style.gridTemplateRows = `repeat(${size} , 1fr)` //basically the same as above but for rows

  let amount = size * size;
  for (let i = 0; i<amount; i++) {
    let square = document.createElement('div')
    square.addEventListener('mouseover', colorSquare) ;
    square.style.backgroundColor = 'white'
    board.insertAdjacentElement('beforeend', square); //appending the created squares to the board
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >=2 && input <= 100) {
    populateBoard(input);
  } else {
    alert('Number has to be between 2 and 100')
  }
}

function colorSquare() {
 if (click) {
  if (color === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
  this.style.backgroundColor = color
  }
 }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".board") //grabbed the board class
  let squares = board.querySelectorAll('div') //within board there are divs created which this selects. This is to clear out existing divs
  squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.tagName != 'BUTTON') {
    click = !click;
  if(click) {
    document.querySelector('.mode').textContent = 'Mode: Coloring'
  } else {
    document.querySelector('.mode').textContent = 'Mode: Not Coloring'
  }
  }
});
