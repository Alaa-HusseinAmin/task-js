let myinput = document.getElementById("myinput");
let mydiv = document.getElementById("mydiv");
let mybtn = document.getElementById("mybtn");



mybtn.addEventListener("click",function(){
    var color =myinput.value;
    mydiv.style.backgroundColor=color;
})