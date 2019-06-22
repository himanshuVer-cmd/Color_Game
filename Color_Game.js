var numSquares = 6;
var colors = [];
var colorDisplay =document.querySelector("#colorDisplay");
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton =document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();
function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpSquares(){
	//modeBtn.textContent ==="Easy"?numSquares =3 : numSquares = 6;
	for(var i=0;i<numSquares ; i++){
		squares[i].addEventListener("click" , function(){
			var clickedColor = this.style.background ; 
			if(clickedColor == pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				changeColor(pickedColor);
				resetButton.textContent = "Play Again?";
				h1.style.background = pickedColor ;
			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again" ;
			}
		})
	}
}

function setUpModeButtons(){
	for(var i=0 ; i<modeBtn.length; i++){
		modeBtn[i].addEventListener("click" , function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){numSquares = 3;}
			else{numSquares = 6;}
			reset();
		})
	}

}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0 ; i<squares.length; i++){
		if(colors[i]){
		squares[i].style.background = "block";
		squares[i].style.background  = colors[i] ;
	}
		else {
			squares[i].style.background = "none";
		}
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "" ;

}

resetButton.addEventListener("click",function(){
	reset() ;
	});


function changeColor(color){
	for(var i=0 ; i<squares.length ; i++){
		squares[i].style.background = color ;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];
	for(var i = 0; i<num ; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", "+ b +")";
}