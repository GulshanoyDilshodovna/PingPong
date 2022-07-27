//===============PING PONG GAME=================//
const score1El = document.getElementById('score1'),
  score2El = document.getElementById('score2'),
  selectEl = document.getElementById('select'),
  player1Btn = document.getElementById('player-one__btn'),
  player2Btn = document.getElementById('player-two__btn'),
  resetBtn = document.getElementById('reset__btn')

let score1 = 0,
  score2 = 0,
  play = true,
  selectValue = +selectEl.value;

// function reset
function reset() {
  score1 = score2 = 0
  score1El.textContent = score2El.textContent = 0
  score1El.style.color = score2El.style.color = 'aqua'
  play = true
}
// function addevent listener player 1 click
function player1Listener(){
  if (play) {
    score1++
    score1El.textContent = score1
    if (score1 >= selectValue) {
      score1El.style.color = 'green'
      score2El.style.color = 'red'
      play = false
    }
  }
}
// function addevent listener player 2 click
function player2Listener(){
  if (play) {
    score2++
    score2El.textContent = score2
    if (score2 >= selectValue) {
      score1El.style.color = 'red'
      score2El.style.color = 'green'
      play = false
    }
  }
}
//add event listner
selectEl.addEventListener('change', () => {
  selectValue = selectEl.value
  reset()
})
resetBtn.addEventListener('click', reset)
player1Btn.addEventListener('click', player1Listener)
player2Btn.addEventListener('click', player2Listener)