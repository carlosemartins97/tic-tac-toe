var quadrados = document.querySelectorAll(".quadrados");
var resetButton = document.querySelector("#reset");
var jogada = 0;
var p1 = 0;
var p2 = 1;


for(var i = 0; i < quadrados.length; i++){
    quadrados[i].addEventListener("click", function(){
        if(jogada%2 === 0){
            this.style.backgroundColor = "red";
            jogada++;
        } else {
            this.style.backgroundColor = "green";
            jogada++;
        };
        
    });
};



