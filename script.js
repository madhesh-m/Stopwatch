function timef(time){
    let diffh=time/3600000;
    let hh=Math.floor(diffh)

    let diffm=(diffh-hh)*60;
    let mm=Math.floor(diffm)

    let diffs=(diffm-mm)*60;
    let ss=Math.floor(diffs)

    let diffms=(diffs-ss)*100;
    let ms=Math.floor(diffms)

    let newmm=mm.toString().padStart(2,"0");
    let newss=ss.toString().padStart(2,"0");
    let newms=ms.toString().padStart(2,"0");

    return `${newmm}:${newss}:${newms}`;
}

let starttime;
let elapsedtime=0;
let timerintervel;

function  print(txt){
    document.getElementById("display").innerHTML=txt;
}

function start(){
    starttime=Date.now()-elapsedtime;
    timerintervel=setInterval(function printtime(){
        elapsedtime=Date.now()-starttime;
        print(timef(elapsedtime));
    },10);
    showButton("PAUSE");
}
function pause(){

    clearInterval(timerintervel);
    showButton("PLAY");
}
function reset(){
    clearInterval(timerintervel);
    print("00:00:00");
    elapsedtime=0;
    showButton("RESET");
    showButton("PLAY");
}
function showButton(buttonKey){
    const buttons=buttonKey=="PLAY"? playbutton:pausebutton;
    const buttonh=buttonKey=="PLAY"? pausebutton:playbutton;
    buttons.style.display="block";
    buttonh.style.display="none";
}
let playbutton=document.getElementById("playbutton");
let pausebutton=document.getElementById("pausebutton");
let resetbutton=document.getElementById("resetbutton");

playbutton.addEventListener("click",start);
pausebutton.addEventListener("click",pause);
resetbutton.addEventListener("click",reset);