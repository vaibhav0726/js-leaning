let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let hScore = 0;
let gScore = 0;
// let winner = document.getElementById("winner");

// if(hScore>10){
//     winner.textContent = "Home wins with" +hScore;
//     hScore = 0;
//     gScore =0;
//     homeScore.textContent = hScore;
//     guestScore.textContent = gScore;
// }
// else if(gScore>10){
    
//     winner.textContent = "Guests wins with" + gScore;
//     hScore = 0;
//     gScore =0;
//     homeScore.textContent = hScore;
//     guestScore.textContent = gScore;
// }

function homeOne() {
  hScore += 1;
  homeScore.textContent = hScore;
}
function homeTwo() {
  hScore += 2;
  homeScore.textContent = hScore;
}
function homeThree() {
  hScore += 3;
  homeScore.textContent = hScore;
}

function guestOne() {
  gScore += 1;
  guestScore.textContent = gScore;
}
function guestTwo() {
  gScore += 2;
  guestScore.textContent = gScore;
}
function guestThree() {
  gScore += 3;
  guestScore.textContent = gScore;
}

function doReset(){
    hScore = 0;
    gScore =0;
    homeScore.textContent = hScore;
    guestScore.textContent = gScore;
}

