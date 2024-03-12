let game=[];
let user=[];
let btns=["pink","orange","blue",'purple'];

let started=false;
let level=0;
let h2=document.querySelector('h2');
document.addEventListener("keypress",function(event){
if(started==false){
console.log("started");
started=true;
levelup();
}
});
function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    user=[];
    level++;
   
    h2.innerText=`Level ${level}`;
    let random_idx=Math.floor(Math.random()*3);
    let color=btns[random_idx];
    let randbtn=document.querySelector(`.${color}`);
    game.push(color);
    flashbtn(randbtn);
}
function check(idx){
 //  let idx=level-1;
   if(user[idx]===game[idx])
   {
    if(user.length==game.length){
    setTimeout(levelup,1000);
    }
   }
   else{
   h2.innerHTML=`Game over! Your score is <b>${level}</b><br> press any key to start`;
  
   document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
   },1050);
   reset();
   }
}
function btnpress(){
let btn=this;
userflash(btn);
usercolor= btn.getAttribute("id");
user.push(usercolor);
check(user.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    game=[];
    user=[];
    level=0;
    }