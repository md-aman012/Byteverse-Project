let button=document.querySelector("button");
let form=document.querySelector(".form");
let audio=document.querySelector(".list");
let Amsg=document.querySelector("h4");
let msg=document.querySelector("h3");
let inputs=document.querySelectorAll("input");

button.addEventListener("click",(e)=>{
Amsg.innerHTML="Call On +19 90349560i060 for further information"
msg.innerText="your  will get a appointment soon"


e.target.parentElement.remove();

})

