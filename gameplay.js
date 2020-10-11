let score = [0,1,2,3,4,5,6];
var turn ;

var team1 = {
	name: "Arsenal",
	runs: [],
	score: 0
};

var team2 = {
	name: "Manchester City",
	runs: [],
	score: 0
};

var team3 = {
	name: "Liverpool",
	runs: [],
	score: 0
};

var team4 = {
	name: "Watford",
	runs: [],
	score: 0
};

var team5 = {
	name: "Manchester United",
	runs: [],
	score: 0
};

var team6 = {
	name: "Liverpool",
	runs: [],
	score: 0
};

window.onload = () => {
    selectTurn();
    updateButtonText();
    updateScore();
    updateNames();
}

let selectTurn = () => {
    turn = Math.round(Math.random())+1;
}

let updateButtonText = () => {
    var button1 = document.getElementById("shoot-button-1");
    var result1 = document.getElementById("result-1");
    result1.style.visibility = "";
    button1.textContent = `${turn ===1 ? team1.name: team2.name} Shoot`;

    var button2 = document.getElementById("shoot-button-2");
    var result2 = document.getElementById("result-2");
    result2.style.visibility = "";
    button2.textContent = `${turn ===1 ? team3.name: team4.name} Shoot`;

    var button3 = document.getElementById("shoot-button-3");
    var result3 = document.getElementById("result-3");
    result3.style.visibility = "";
    button3.textContent = `${turn ===1 ? team5.name: team6.name} Shoot`;
}

let updateScore = () =>{
	document.getElementById("team-1-score").textContent = team1.score;
	document.getElementById("team-2-score").textContent = team2.score;
  document.getElementById("team-3-score").textContent = team3.score;
	document.getElementById("team-4-score").textContent = team4.score;
  document.getElementById("team-5-score").textContent = team5.score;
	document.getElementById("team-6-score").textContent = team6.score;
}

var updateNames = () => {
	document.getElementById("team-1-name").textContent = team1.name;
	document.getElementById("team-2-name").textContent = team2.name;
  document.getElementById("team-3-name").textContent = team3.name;
	document.getElementById("team-4-name").textContent = team4.name;
  document.getElementById("team-5-name").textContent = team5.name;
	document.getElementById("team-6-name").textContent = team6.name;
};
