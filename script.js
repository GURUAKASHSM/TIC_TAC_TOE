let imageElement1 = document.querySelector('.img1')
let imageElement2 = document.querySelector('.img2')
let imageElement3 = document.querySelector('.img3')
let imageElement4 = document.querySelector('.img4')
let imageElement5 = document.querySelector('.img5')
let imageElement6 = document.querySelector('.img6')
let imageElement7 = document.querySelector('.img7')
let imageElement8 = document.querySelector('.img8')
let imageElement9 = document.querySelector('.img9')

let resultElement4 = document.querySelector('.winner')
let box1 = 0;
let box2 = 0;
let box3 = 0;
let box4 = 0;
let box5 = 0;
let box6 = 0;
let box7 = 0;
let box8 = 0;
let box9 = 0;
let userCheck = 1


let overallResult = JSON.parse(localStorage.getItem('overallResult')) || {
  player1win: 0,
  player2win: 0,
  draw: 0,
};


updateScore();

function check(no) {
  if (no === 1 && box1 != 1 && box1 != 2) {
    if (userCheck == 1) {
      box1 = 1
      imageElement1.src = 'x.png'
      userCheck = 2
      winnerCheck()
    } else {
      box1 = 2
      imageElement1.src = 'o.webp'
      userCheck = 1
      winnerCheck()
    }

  }
  if (no === 2 && box2 != 1 && box2 != 2) {

    if (userCheck == 1) {
      box2 = 1
      imageElement2.src = 'x.png'
      userCheck = 2
      winnerCheck()
    } else {
      box2 = 2
      imageElement2.src = 'o.webp'
      userCheck = 1
      winnerCheck()
    }
  }
  if (no === 3 && box3 != 1 && box3 != 2) {

    if (userCheck == 1) {
      box3 = 1
      imageElement3.src = 'x.png'
      userCheck = 2
      winnerCheck()
    } else {
      box3 = 2
      imageElement3.src = 'o.webp'
      userCheck = 1
      winnerCheck()
    }

  }
  if (no === 4 && box4 != 1 && box4 != 2) {
    if (userCheck == 1) {
      box4 = 1
      imageElement4.src = 'x.png'
      userCheck = 2
      winnerCheck()
    } else {
      box4 = 2
      imageElement4.src = 'o.webp'
      userCheck = 1
      winnerCheck()
    }

  }
  if (no === 5 && box5 != 1 && box5 != 2) {
    if (userCheck == 1) {
      box5 = 1
      imageElement5.src = 'x.png'
      userCheck = 2
      winnerCheck()
    } else {
      box5 = 2
      imageElement5.src = 'o.webp'
      userCheck = 1
      winnerCheck()
    }

  }
  if (no === 6 && box6 != 1 && box6 != 2) {
    if (userCheck == 1) {
      box6 = 1
      imageElement6.src = 'x.png'
      userCheck = 2
      winnerCheck()
    } else {
      box6 = 2
      imageElement6.src = 'o.webp'
      userCheck = 1
      winnerCheck()
    }

  }
  if (no === 7 && box7 != 1 && box7 != 2) {

    if (userCheck == 1) {
      box7 = 1
      imageElement7.src = 'x.png'
      userCheck = 2
      winnerCheck()
    } else {
      box7 = 2
      imageElement7.src = 'o.webp'
      userCheck = 1
      winnerCheck()
    }

  }
  if (no === 8 && box8 != 1 && box8 != 2) {

    if (userCheck == 1) {
      box8 = 1
      imageElement8.src = 'x.png'
      userCheck = 2
      winnerCheck()
    } else {
      box8 = 2
      imageElement8.src = 'o.webp'
      userCheck = 1
      winnerCheck()
    }

  }
  if (no === 9 && box9 != 1 && box9 != 2) {

    if (userCheck == 1) {
      box9 = 1
      imageElement9.src = 'x.png'
      userCheck = 2
      winnerCheck()
    } else {
      box9 = 2
      imageElement9.src = 'o.webp'
      userCheck = 1
      winnerCheck()
    }

  }
}
function winnerCheck() {


  if (box1 == 1 && box2 == 1 && box3 == 1) {
    resultElement4.innerHTML = `Player 1 WINS`
    overallResult.player1win++;
  }
  else if (box1 == 1 && box4 == 1 && box7 == 1) {
    resultElement4.innerHTML = `Player 1 WINS`
    overallResult.player1win++;
  }
  else if (box1 == 1 && box5 == 1 && box9 == 1) {
    resultElement4.innerHTML = `Player 1 WINS`
    overallResult.player1win++;
  }
  else if (box3 == 1 && box6 == 1 && box7 == 1) {
    resultElement4.innerHTML = `Player 1 WINS`
    overallResult.player1win++;
  }
  else if (box1 == 3 && box5 == 1 && box7 == 1) {
    resultElement4.innerHTML = `Player 1 WINS`
    overallResult.player1win++;
  }
  else if (box4 == 1 && box5 == 1 && box6 == 1) {
    resultElement4.innerHTML = `Player 1 WINS`
    overallResult.player1win++;
  }
  else if (box7 == 1 && box8 == 1 && box9 == 1) {
    resultElement4.innerHTML = `Player 1 WINS`
    overallResult.player1win++;
  }
  else if (box2 == 1 && box5 == 1 && box8 == 1) {
    resultElement4.innerHTML = `Player 1 WINS`
    overallResult.player1win++;
  }
  else if (box3 == 1 && box6 == 1 && box9 == 1) {
    resultElement4.innerHTML = `Player 1 WINS`
    overallResult.player1win++;
  }
  else if (box3 == 1 && box5 == 1 && box7 == 1) {
    resultElement4.innerHTML = `Player 1 WINS`
    overallResult.player1win++;
  }


  else if (box1 == 2 && box2 == 2 && box3 == 2) {
    resultElement4.innerHTML = `Player 2 WINS`
    overallResult.player2win++;
  }
  else if (box1 == 2 && box4 == 2 && box7 == 2) {
    resultElement4.innerHTML = `Player 2 WINS`
    overallResult.player2win++;
  }
  else if (box1 == 2 && box5 == 2 && box9 == 2) {
    resultElement4.innerHTML = `Player 2 WINS`
    overallResult.player2win++;
  }
  else if (box3 == 2 && box6 == 2 && box7 == 2) {
    resultElement4.innerHTML = `Player 2 WINS`
    overallResult.player2win++;
  }
  else if (box1 == 2 && box5 == 2 && box7 == 2) {
    resultElement4.innerHTML = `Player 2 WINS`
    overallResult.player2win++;
  }
  else if (box4 == 2 && box5 == 2 && box6 == 2) {
    resultElement4.innerHTML = `Player 2 WINS`
    overallResult.player2win++;
  }
  else if (box7 == 2 && box8 == 2 && box9 == 2) {
    resultElement4.innerHTML = `Player 2 WINS`
    overallResult.player2win++;
  }
  else if (box2 == 2 && box5 == 2 && box8 == 2) {
    resultElement4.innerHTML = `Player 2 WINS`
    overallResult.player2win++;
  }
  else if (box3 == 2 && box6 == 2 && box9 == 2) {
    resultElement4.innerHTML = `Player 2 WINS`
    overallResult.player2win++;
  }
  else if (box3 == 2 && box5 == 2 && box7 == 2) {
    resultElement4.innerHTML = `Player 1 WINS`
    overallResult.player2win++;
  }

  else if (box1 != 0 && box2 != 0 && box3 != 0 && box4 != 0 && box5 != 0 && box6 != 0 && box7 != 0 && box8 != 0 && box9 != 0) {
    resultElement4.innerHTML = `Match draw`
    overallResult.draw++;
  }

  updateScore();
  localStorage.setItem('overallResult', JSON.stringify(overallResult));

}
function resetScore() {
  localStorage.removeItem('overallResult');
  overallResult = {
    player1win: 0,
    player2win: 0,
    draw: 0,
  };
  localStorage.setItem('overallResult', JSON.stringify(overallResult));
  updateScore();
}

function updateScore() {
  // Display the win, loss, and draw counts from local storage
  document.querySelector('.result').innerHTML = `Player 1: ${overallResult.player1win}   &nbsp  &nbsp  &nbsp  Player 2: ${overallResult.player2win} &nbsp  &nbsp  &nbsp  Draws : ${overallResult.draw}`;
} 

function restartGame() {
  imageElement1.src = 'white.jpg'
  imageElement2.src = 'white.jpg'
  imageElement3.src = 'white.jpg'
  imageElement4.src = 'white.jpg'
  imageElement5.src = 'white.jpg'
  imageElement6.src = 'white.jpg'
  imageElement7.src = 'white.jpg'
  imageElement8.src = 'white.jpg'
  imageElement9.src = 'white.jpg'
  box1 = 0;
  box2 = 0;
  box3 = 0;
  box4 = 0;
  box5 = 0;
  box6 = 0;
  box7 = 0;
  box8 = 0;
  box9 = 0;
  userCheck = 1
}