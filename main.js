const m= new mathematics();
const num=document.querySelector(".numbers");
const timer=document.querySelector(".timer");
const ans=document.querySelector("#answer");
const difficulty=document.querySelector(".difficulty");
var syntax=0;
var level=1;
var l=0;
var lag=99;
var lagCount=99;
var answerTime=false;
var A=3;
var L=1;
var T=1;
timer.innerHTML=10;

const intervalID = setInterval(tickEvent, 10);

function tickEvent(a, b) {
    difficulty.innerHTML=`${A}口 ${L}桁 ${T}秒`;
    if(answerTime===true){
    if(timer.innerHTML-0.01>=0 && timer.innerHTML!=""){
    timer.innerHTML=Math.floor((timer.innerHTML-0.01)*100)/100;
    if(Math.floor(timer.innerHTML)==timer.innerHTML){
        timer.innerHTML+=".00";
    }else if(Math.floor(timer.innerHTML*10)/10==timer.innerHTML){
        timer.innerHTML+="0";
        }
    }
    }else{
        if(lagCount==lag){
            let N=callNumber();
            l++;
            if(l<=2+level){
                N+="";
                if(N.indexOf("!")!=-1){
                    let int=m.fact(N.substring(0,N.length-1));
                    syntax+=int;
                    }else{
                    N=eval(N);
        syntax+=N;
                    }
                }
            lagCount=0;
            num.innerHTML=N;
            console.log(N);
            }else{
        lagCount++;
            if(lag-lagCount==1){
                num.innerHTML="";
                }
            }
        if(l>2+level){
            num.innerHTML="";
            l=0;
            console.log(syntax);
            answerTime=true;
            }
    }
}
function check(){
    if(answerTime===true && ans.value==syntax){
        console.log("Correct");
        answerTime=false;
        T=T-((0.2)/level);
        level++;
        timer.innerHTML=10;
        syntax=0;
        A++;
        if(level>=6){
            L=2;
            }
        T=eval(T.toFixed(2));
        if(T<=0){
            T=0.01;
            }
        lag=Math.ceil(100*T-1);
        }
    answer.value="";
}
function callNumber(){
    if(level<6){
        return Math.round(Math.random()*8+1);
        }else if(level<12){
        let seed=Math.round(Math.random());
        if(seed==0){
            return Math.round(Math.random()*16+1);
            }else{
            return (-1)*Math.round(Math.random()*16+1);
            }
        }else{
            let seed=Math.round(Math.random()*2);
            if(seed==0){
            return Math.round(Math.random()*16+1);
            }else if(seed==1){
            return (-1)*Math.round(Math.random()*16+1);
            }else{
            return (Math.round(Math.random()*2+2))+"!";
            }
        }
}
window.addEventListener("keydown",(e)=>{
    if(e.code.indexOf("Digit")!=-1){
        answer.value+=e.code.substring(5);
        }else if(e.code=="Enter"){
        check();
    }else if(e.code=="Backspace"){
        answer.value=answer.value.substring(0,answer.value.length-1);
    }else if(e.code=="Minus"){
        answer.value="-"+answer.value;
        }
});