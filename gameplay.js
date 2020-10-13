var score = [0,1];

var team1={
    name: "Arsenal",
    goals: [],
    score:0
}

var team2={
    name: "Manchester City",
    goals: [],
    score:0
}

var team3={
    name: "Liverpool",
    goals: [],
    score:0
}

var team4={
    name: "Watford",
    goals: [],
    score:0
}

var team5={
    name: "Manchester United",
    goals: [],
    score:0
}

var team6={
    name: "Liverpool",
    goals: [],
    score:0
}

var toss;


window.onload = () =>{
    selectToss();
    updateButtonText1();
		updateButtonText2();
		updateButtonText3();
    updateNames();
    updateScore();
}

var selectToss = () =>{
    toss = Math.round(Math.random())+1;
}

var updateButtonText1 = () =>{
    var button1 = document.getElementById("shoot-button-1");
    var result1 = document.getElementById("result-1");
    result1.style.visibility ="";
    if(team1.goals.length == 6 && team2.goals.length == 6){
        button1.remove();
        result1.textContent = team1.score === team2.score ? `It's a draw`: `${team1.score > team2.score? team1.name:team2.name} Wins`;
    }
    else{
        toss = team1.goals.length ===6 ? 2 : team2.goals.length === 6 ? 1 : toss;
    }
		button1.textContent = `${toss === 1 ? team1.name:team2.name} Shoot`;

};

var updateButtonText2 = () => {
	var button2 = document.getElementById("shoot-button-2");
	var result2 = document.getElementById("result-2");
	result2.style.visibility ="";
	if(team3.goals.length == 6 && team4.goals.length == 6){
			button2.remove();
			result2.textContent = team3.score === team4.score ? `It's a draw`: `${team3.score > team4.score? team3.name:team4.name} Wins`;
	}
	else{
			toss = team3.goals.length ===6 ? 2 : team4.goals.length === 6 ? 1 : toss;
	}
	button2.textContent = `${toss === 1 ? team3.name:team4.name} Shoot`;
};

var updateButtonText3 = () => {
	var button3 = document.getElementById("shoot-button-3");
	var result3 = document.getElementById("result-3");
	result3.style.visibility ="";
	if(team5.goals.length == 6 && team6.goals.length == 6){
			button3.remove();
			result3.textContent = team5.score === team6.score ? `It's a draw`: `${team5.score > team2.score? team5.name:team6.name} Wins`;
	}
	else{
			toss = team5.goals.length ===6 ? 2 : team6.goals.length === 6 ? 1 : toss;
	}
	button3.textContent = `${toss === 1 ? team5.name:team6.name} Shoot`;
};


var updateNames = () =>{
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
		document.getElementById("team-3-name").textContent = team3.name;
    document.getElementById("team-4-name").textContent = team4.name;
		document.getElementById("team-5-name").textContent = team5.name;
    document.getElementById("team-6-name").textContent = team6.name;
}

var updateScore = () =>{
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
		document.getElementById("team-3-score").textContent = team3.score;
    document.getElementById("team-4-score").textContent = team4.score;
		document.getElementById("team-5-score").textContent = team5.score;
    document.getElementById("team-6-score").textContent = team6.score;
    updateGoals1();
		updateGoals2();
		updateGoals3();
}


var handleShootButtonClick1 = () =>{
 var goals = score[Math.floor(Math.random()*score.length)];
 if (toss ===1)
   {
    team1.goals.push(goals);
   team1.score= calculateScore(team1.goals);

   }
   else{
    team2.goals.push(goals);
    team2.score = calculateScore(team2.goals);

   }

   updateButtonText1();
   updateScore();
}

var calculateScore = (goals) =>{

return goals.map(num =>{

return num;

}).reduce((total,num) => total + num

);

};

var handleShootButtonClick2 = () =>{
 var goals2 = score[Math.floor(Math.random()*score.length)];
 if (toss ===1)
   {
    team3.goals.push(goals2);
   team3.score= calculateScore2(team3.goals);
 }
   else{
    team4.goals.push(goals2);
    team4.score = calculateScore2(team4.goals);
   }

   updateButtonText2();
   updateScore();
}

var calculateScore2 = (goals2) =>{

return goals2.map(num =>{

return num;

}).reduce((total,num) => total + num

);

};


var handleShootButtonClick3 = () =>{
 var goals3 = score[Math.floor(Math.random()*score.length)];
 if (toss ===1)
   {
    team5.goals.push(goals3);
   team5.score= calculateScore3(team5.goals);
 }
   else{
    team6.goals.push(goals3);
    team6.score = calculateScore3(team6.goals);
   }

   updateButtonText3();
   updateScore();
}

var calculateScore3 = (goals3) =>{

return goals3.map(num =>{

return num;

}).reduce((total,num) => total + num

);

};




var updateGoals1 = () =>{
    var teamOneRunsElement = document.getElementById("team-1-round-runs").children;
    var teamTwoRunsElement = document.getElementById("team-2-round-runs").children;
    team1.goals.forEach((goal,index)=>{
        teamOneRunsElement[index].textContent = goal;
    });
    team2.goals.forEach((goal,index)=>{
        teamTwoRunsElement[index].textContent = goal;
    });
};


var updateGoals2 = () =>{
    var teamThreeRunsElement = document.getElementById("team-3-round-runs").children;
    var teamFourRunsElement = document.getElementById("team-4-round-runs").children;
    team3.goals.forEach((goal2,index2)=>{
        teamThreeRunsElement[index2].textContent = goal2;
    });
    team4.goals.forEach((goal2,index2)=>{
        teamFourRunsElement[index2].textContent = goal2;
    });
};


var updateGoals3 = () =>{
    var teamFiveRunsElement = document.getElementById("team-5-round-runs").children;
    var teamSixRunsElement = document.getElementById("team-6-round-runs").children;
    team5.goals.forEach((goal3,index3)=>{
        teamFiveRunsElement[index3].textContent = goal3;
    });
    team6.goals.forEach((goal3,index3)=>{
        teamSixRunsElement[index3].textContent = goal3;
    });
};
