let trackArea = document.getElementById("main");
let pointer = document.querySelector(".mouseTrack");
let playnowBtn =document.getElementById("playNow");


trackArea.addEventListener("mousemove", function(dets) {
    pointer.style.top = dets.y+"px";
    pointer.style.left = dets.x+"px";
})



playnowBtn.addEventListener("mouseenter", function(){
    pointer.style.height = "200px";
    pointer.style.width = "200px"
    pointer.style.backgroundColor = "rgba(255, 255, 255, 0.352)";
    pointer.style.border = "1px solid rgba(255, 255, 255, 0.723)";
    pointer.style.boxShadow=  "0 0 30px rgba(255, 255, 255, 0.848)";
})
playnowBtn.addEventListener("mouseleave", function(){
    pointer.style.height = "100px";
    pointer.style.width = "100px"
    pointer.style.backgroundColor = "rgba(255, 255, 19, 0.352)";
    pointer.style.border = "1px solid rgba(255, 255, 0, 0.723)";
    pointer.style.boxShadow=  "0 0 30px rgba(255, 255, 0, 0.848)";
})




// Redirect page to game window.

playnowBtn.addEventListener("click", function(){
    window.location.href = "index.html"
})