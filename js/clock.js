let clock = document.querySelector("#saat")     
document.body.style.transition="all 0.8s"       
setInterval(() => {    
    
    let d = new Date(); 
    let hours = d.getHours();       
    let mins = d.getMinutes();      
    let secs = d.getSeconds();    
    hours = hours < 10 ? "0" + hours : hours 
    mins = mins < 10 ? "0" + mins : mins            
    secs = secs < 10 ? "0" + secs : secs            
    clock.innerHTML = `${hours} : ${mins} : ${secs}`
    clock.style.color =  `rgb(${hours*10},${mins*4},${secs*4})`   
    document.body.style.background = `rgba(${hours *10},${mins * 4  },${secs *  4 },0.85)`
    
}, 1000);   

let day = document.querySelector("#text3")      
var today = new Date();     
var dd = String(today.getDate()).padStart(2, '0');      
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();                         

today = mm + '/' + dd + '/' + yyyy;     

setTimeout(() => {  
    day.innerHTML = today + " tarihinde"    
}, 3000);   

let getName = prompt("Lütfen adınızı girin.")           
let selectName = document.querySelector("#myName")      
selectName.innerHTML = `${getName}`