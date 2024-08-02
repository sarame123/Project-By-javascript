var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");


var allCounter=document.querySelectorAll(".count");
var icons=document.querySelectorAll("#icon");
var azkarElsabah=document.getElementById("azkarElsabah");
var azkarElmasa=document.getElementById("azkarElmasa");
console.log(btn1);

btn1.addEventListener("click",()=>{
    console.log(azkarElsabah);
    azkarElsabah.style.display="block";
    azkarElmasa.style.display="none";
})
btn2.addEventListener("click",()=>{
    azkarElmasa.style.display="block";
    azkarElsabah.style.display="none";
})
allCounter.forEach((Counter)=>{
    let theFirst=parseInt(Counter.innerHTML)
    localStorage.setItem("count",theFirst)
  Counter.addEventListener("click",()=>{
    var currentCounter=parseInt(Counter.innerHTML);
let pastValue=currentCounter;
    if(currentCounter>0){
        currentCounter--;
        Counter.innerHTML=currentCounter;
    }
    if(currentCounter===0){
        Counter.style.backgroundColor="#3498DB"
    }
  })
  icons.forEach((icon)=>{
  icon.addEventListener("click",()=>{
    var currentCounter=parseInt(Counter.innerHTML);
    if(currentCounter===0){
    let result=localStorage.getItem("count")
      Counter.innerHTML=theFirst;
      Counter.style.backgroundColor="#157347"
    }
    
})
})
})
