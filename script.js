// let myheading = document.querySelector("#myh1").textContent;
// console.log(myheading);
const input = document.getElementById("myinput");

const btn = document.getElementById("btn");

const modebtn = document.getElementById("modeBtn");

const body = document.querySelector("body");

function displayHello(){
    document.getElementById("output").textContent = "Hello! " + input.value;
}

const willPrintHello = () => displayHello();
// btn.addEventListener("dblclick", hello);
btn.ondblclick = () => { 
    displayHello();
};

function changeMode(){
    
    body.classList.toggle("darkmode");
    console.log("Mode button clicked");
}
 
modebtn.addEventListener("click", function(){
    changeMode();
});