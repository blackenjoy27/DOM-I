let msTens = 0;
let msHundreds = 0;
let secondOnes = 0;
let secondTens = 0;
let counting;

function countToTen (){
    counting = setInterval(function(){
        msTens++;
        if(msTens===10){
            msTens=0;
            msHundreds++;
            if(msHundreds===10){
                msHundreds = 0;
                secondOnes++;
                if(secondOnes===10){
                    secondTens = 1;
                    secondOnes = 0;
                    msHundreds = 0;
                    msTens = 0;
                    let secT = document.querySelector("#secondTens");
                    secT.textContent = secondTens;
                    document.querySelectorAll(".digit").forEach(time=>time.classList.add("redDigit"));
                    clearInterval(counting);
                }
                let secO =document.querySelector("#secondOnes");
                secO.textContent = secondOnes;
            }
            let msH = document.querySelector("#msHundreds");
            msH.textContent = msHundreds;
        }
        let msT = document.querySelector("#msTens");
        msT.textContent = msTens;
    },10);
}




let button1 = document.createElement("button");
button1.textContent = "Reset";
button1.addEventListener("click",function(){
    if(start||pause){
        msTens = 0;
        msHundreds = 0;
        secondOnes = 0;
        secondTens = 0;
        document.querySelectorAll(".digit").forEach(div=>div.innerHTML = "-");
        document.querySelectorAll(".digit")[2].innerHTML = ":";
        clearInterval(counting);
        pause = false;
        start = false;
        if(document.querySelector(".digit").classList.contains("redDigit")){
            document.querySelectorAll(".digit").forEach(time=>time.classList.remove("redDigit"));
        }
    }
})

let start = false;
let button2 = document.createElement("button");
button2.textContent = "Start";
button2.addEventListener("click",function(){
    if(!start){
        countToTen();
        pause = false;
        start = true;
    }
})

let pause = false;
let button3 = document.createElement("button");
button3.textContent = "Pause";
button3.addEventListener("click",function(){
    if(!pause){
        clearInterval(counting);
        start = false;
        pause = true;
    }
})


document.querySelector("body").appendChild(button1);
document.querySelector("body").appendChild(button2);
document.querySelector("body").appendChild(button3);



