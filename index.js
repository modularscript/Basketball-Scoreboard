let homeStartScore = 0
let guestStartScore = 0
let onePoint = 1
let twoPoints = 2
let threePoints = 3

const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')


function addHome1() {
  homeStartScore += 1;
  homeScore.textContent = homeStartScore;
}

function addHome2() {
  homeStartScore += 2;
  homeScore.textContent = homeStartScore;
}

function addHome3() {
  homeStartScore += 3;
  homeScore.textContent = homeStartScore;
}



function addGuest1() {
  guestStartScore += 1;
  guestScore.textContent = guestStartScore;
}

function addGuest2() {
  guestStartScore += 2;
  guestScore.textContent = guestStartScore;
}

function addGuest3() {
  guestStartScore += 3;
  guestScore.textContent = guestStartScore;
}
