let bottomPanel = document.querySelector(".bottomPanel");
let bubble = document.querySelectorAll(".bubble");
let hitVal;
let score = 0;


function toCreatBubbles (){
let clutter = "";
for(let i = 1; i < 103; i++){
    clutter += `<div class="bubble">${generateRandomNum()}</div>`;
}

bottomPanel.innerHTML = clutter;
};

function generateRandomNum(){
    return Math.floor(Math.random()*10);
};

function timer(){
    let time = 60;
    
         let timeLoop = setInterval(function(){
            if(time > 0){
                time--
                document.getElementById("timeBox").textContent = time;
            }
            else{
                clearInterval(timeLoop);
                document.getElementById("hitVal").textContent = "--";
                if(score > 100){
                    bottomPanel.innerHTML = `Well Played!, your score is ${score}`;
                }
                else{
                    bottomPanel.innerHTML = `I guess you need to focus more, your score is  ${score}`;
                }
            }
        }, 1000)
};

function hitNumGenerator(){
    hitVal = Math.floor(Math.random()*10);
    document.getElementById("hitVal").textContent = hitVal;
}


bottomPanel.addEventListener("click", function(dets){
    let clickedBubble = dets.target.innerHTML;
    if(clickedBubble == hitVal){
        score += 10;
        document.getElementById("score").textContent = score;
        toCreatBubbles();
        hitNumGenerator();
    } 
})



hitNumGenerator();
timer();
toCreatBubbles();