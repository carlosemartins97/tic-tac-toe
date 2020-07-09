var quadrados = document.querySelectorAll(".quadrados");
var resetButton = document.querySelector("#reset");
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetDisplay = document.querySelector("#resetDisplay");
var input = document.querySelector("input")
var jogos = document.querySelector("#jogos")
var jogada = 0;
var p1 = 0;
var p2 = 1;
var p1Score = 0;
var p2Score= 0;
var gameOver = false;
var winningScore = 5;


//Lógica
for(var i = 0; i < quadrados.length; i++){
    quadrados[i].addEventListener("click", function(){
        console.log(jogada, i);
        if(this.style.backgroundColor === "red" || this.style.backgroundColor === "green"){
            jogada = jogada;
            i = i;
        } else{
            if(jogada%2 === 0){
                this.style.backgroundColor = "red";
                jogada++;
            } else{
                this.style.backgroundColor = "green";
                jogada++;
            }
        } 
    });
};

//Resetar
resetButton.addEventListener("click", function(){
    jogada = 0;
    for(var i = 0; i < quadrados.length; i++){
        quadrados[i].style.backgroundColor = "steelblue";
    }
});

//Display



p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add("winner")
        }
    }
    p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            p2Display.classList.add("winner")
        }
    }
    p2Display.textContent = p2Score;
});

resetDisplay.addEventListener("click", function (){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
});

input.addEventListener("change", function(){
    jogos.textContent = input.value;
    winningScore = Number(input.value);
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
};