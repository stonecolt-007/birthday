const nameText = "✨ Baviya ✨";

let index = 0;

function typeName(){

    if(index < nameText.length){

        document.getElementById("name").innerHTML +=
        nameText.charAt(index);

        index++;

        setTimeout(typeName,200);

    }

}

typeName();

/* Audio Elements */
const bgMusic = document.getElementById("bgMusic");
const voice = document.getElementById("voice");

document
.getElementById("giftBtn")
.addEventListener("click",()=>{

    document
    .getElementById("intro")
    .style.display="none";

    document
    .getElementById("birthdayPage")
    .style.display="block";

    /* Start Background Music */
    bgMusic.volume = 0.15;
    bgMusic.play();

    confetti({
        particleCount:400,
        spread:180
    });

    startBalloons();
    startHearts();

    typeMessage();

});

function startBalloons(){

    setInterval(()=>{

        const balloon=document.createElement("div");

        balloon.className="balloon";
        balloon.innerHTML="🎈";

        balloon.style.left=Math.random()*100+"vw";
        balloon.style.bottom="-100px";

        document.body.appendChild(balloon);

        setTimeout(()=>{
            balloon.remove();
        },8000);

    },400);

}

function startHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";
        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";
        heart.style.bottom="-20px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    },300);

}

/* Voice Button */
document
.getElementById("voiceBtn")
.addEventListener("click",()=>{

    /* Lower music while voice plays */
    bgMusic.volume = 0.05;

    voice.play();

    voice.onended = ()=>{

        /* Restore music volume */
        bgMusic.volume = 0.15;

    };

});

/* Blow Candle */
document
.getElementById("blowBtn")
.addEventListener("click",()=>{

    document
    .getElementById("flame")
    .style.display="none";

    confetti({
        particleCount:600,
        spread:360
    });

});

const birthdayMessage =
"Happy Birthday Baviya ❤️ sorry indha time v2 laa ungha kooda birthday celebrate panna mudiyala. neraya namma sanda pottu irukkom ana idhu varaikkum kochikitu illa endha ego um illa and naa idhuvarai paatha pengalla true ahhna oru good soul naa adhu amma um neeyum mattum thaan. I don't want to see any tears ever in your face. Unn corporate dream sekkaram kedaikka all the best. 🎂✨";

let m = 0;

function typeMessage(){

    if(m < birthdayMessage.length){

        document
        .getElementById("message")
        .innerHTML +=
        birthdayMessage.charAt(m);

        m++;

        setTimeout(typeMessage,50);

    }

}