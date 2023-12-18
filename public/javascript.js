let card = document.getElementById('projet');
let cardHid = document.getElementById('projet_hid');
let anim = document.getElementById('animRotate');
let buttonLeave = document.getElementById('buttonLeave');
let emailButton = document.getElementById('emailButton')
let time = 500; 
let timerAnim = 0.5;
let flag = false;




anim.addEventListener('mouseover', async function (event) {
    timerAnim = 0.5;
    if (cardHid.checkVisibility() == false) {
        card.style.animation = "rotateAnimation 0.5s linear";
        await setTimeout (function () {
            cardHid.style.display = "block"; 
            card.style.display = "none";
        }, time);
        if (!anim.matches(":hover"))  timerAnim = 0.;
        cardHid.style.animation = "rotateAnimation1 " + timerAnim + "s linear";  
    } 
    })


anim.addEventListener('mouseout', async function(event) {
    if (!anim.matches(":hover")) {
        cardHid.style.animation = "rotateAnimation " + timerAnim + "s linear";
        setTimeout (function () {
        card.style.display = "block";
        cardHid.style.display = "none";
        }, 500);
            card.style.animation = "rotateAnimation1 0.5s linear";
    }     
    })

buttonLeave.addEventListener('click', async function(event) {
        cardHid.style.animation = "rotateAnimation " + timerAnim + "s linear";
        setTimeout (function () {
        card.style.display = "block";
        cardHid.style.display = "none";
        }, 500);
            card.style.animation = "rotateAnimation1 0.5s linear";
    })


function  upStat () {
    if (flag) return;
     console.log("coucou");   
    if (document.getElementById("stat").innerHTML == 0) {
        return;
    }
    flag = true; 
    if (document.getElementById("stat").innerHTML == 200) {
        document.getElementById("emailButton").innerHTML = '<p id="sentMessageT" className=" text-center text-lime-600 text-[1.5em] border-lime-600 border-solid border-2">Merci pour votre message ✓</p>'
    }
    
    else if (document.getElementById("stat").innerHTML == 500) {
        document.getElementById("emailButton").innerHTML = '<p id="sentMessageF" className=" text-center text-red-800 text-[1.5em] border-red-800 border-solid border-2">Votre message ne s\'est pas envoyé</p>' 
    }  
}


window.setInterval(upStat, 500);

 




