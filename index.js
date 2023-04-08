let red= Math.floor((Math.random() * 3));
let blue= Math.floor((Math.random() * 3));
let green= Math.floor((Math.random() * 3));
let yellow= Math.floor((Math.random() * 3));
let gamestate="start";
let curr="red";
let level=1;
/* This is Shree ganesha of my first game*/
document.getElementsByClassName("green")[0].addEventListener("click",()=>{
    buttonAnimation("green");
    check_mode("green");
    console.log("green");
})
document.getElementsByClassName("red")[0].addEventListener("click",()=>{
    buttonAnimation("red");
    check_mode("red");
    console.log("red");
})
document.getElementsByClassName("yellow")[0].addEventListener("click",()=>{
    buttonAnimation("yellow");
    check_mode("yellow");
    console.log("yellow");
})
document.getElementsByClassName("blue")[0].addEventListener("click",()=>{
    buttonAnimation("blue");
    check_mode("blue");
    console.log("blue");
})
function check_mode(btn_prsd){
  if(gamestate=="start")
    {   reset();
        gamestate="running";
        red= Math.floor((Math.random() * level)+1);
        blue= Math.floor((Math.random() * level)+1);
        green= Math.floor((Math.random() * level)+1);
        yellow= Math.floor((Math.random() * level)+1);
        console.log(red,blue,green,yellow);
        show_animation(red,blue,green,yellow);
        check_curr();
        gamestate="running";
    }
    else if(gamestate=="running")
    {
        console.log(red,blue,green,yellow);
        console.log("button pressed:",btn_prsd," ",curr);
        if(btn_prsd==curr)
        {
            if(curr=="red")
            {
                red--;
                check_curr();
            }
            else if(curr=="blue")
            {
                blue--;
                check_curr();
            }
            else if(curr=="green")
            {
                green--;
                check_curr();
            }
            else if(curr=="yellow")
            {
                yellow--;
                check_curr();
                if(yellow<0)
                gameover();
            }
        }
        else
        {
            gameover();
        }
    }
}
function buttonAnimation(key){
    var action=document.querySelector("."+key);
    action.classList.add("pressed");
    var audio=new Audio(key+".mp3");
    audio.play();
    setTimeout(function(){
        action.classList.remove("pressed");
    },100);
}
async function show_animation(red,blue,green,yellow)
{
        await sleep(500);
        for(let i=0;i<red;i++)
        {
            buttonAnimation("red");
            await sleep(500);
        }
        await sleep(500);
        for(let i=0;i<blue;i++)
        {
            buttonAnimation("blue");
            await sleep(500);
        }
        await sleep(500);
        for(let i=0;i<green;i++)
        {
            buttonAnimation("green");
            await sleep(500);
        }
        await sleep(500);
        for(let i=0;i<yellow;i++)
        {
            buttonAnimation("yellow");
            await sleep(500);
        }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function gameover(){
    document.querySelector("body").style.background="rgb(194,5,5)";
    setInterval(function(){
    document.querySelector("body").animate({backgroundColor: "red"}, 500);
    document.querySelector(".container").animate({backgroundColor: "red"},500);
    },500);
    document.querySelector(".container").style.background="rgb(194,5,5)";
    document.querySelector(".heading").innerHTML="Game-Over,Press A Key to start";
    gamestate="start";
    level=1;
    await sleep(3000);
    location.reload();
}
async function check_curr()
{
        if(red==0 && curr=="red")
        curr="blue";
        else if(blue==0 && curr=="blue")
        curr="green";
        else if(green==0 && curr=="green")
        curr="yellow";
        else if(yellow==0 && curr=="yellow")
        {
            curr="red";
            level++;
            gamestate="start";
            if(level!=1)
            document.querySelector(".heading").innerHTML="Level-"+level;
            await sleep(2000);
            check_mode("red");
        }
}
async function reset(){
    await sleep(500);
    document.querySelector("body").style.background=" rgb(14, 15, 83)";
    document.querySelector(".container").style.background=" rgb(14, 15, 83)";
    if(level==1)
    document.querySelector(".heading").innerHTML="Level-"+level;
}