let images = ["dc1.jpg", 
"dc2.jpg", 
"dc3.jpg", 
"dc4.jpg",
"dc5.jpg ", 
"dc6.jpg"] ;
let dice = document.querySelectorAll("img"); 

function roll(){ 
    dice.forEach(function(die){
        die.classList.add("shake"); 
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6)
        ; 
        let dieTwoValue = Math.floor(Math.random()*6)
        ; 
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute 
        ("src", images[dieOneValue]); 
        document.querySelector("#die-2").setAttribute 
        ("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = 
        "Your dice is... " + ( (dieOneValue +1) + 
        (dieTwoValue + 1) ); 
    }, 
    1000
    );
} 
roll();

