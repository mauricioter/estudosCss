function click(){

    const icon = document.querySelector("#icon");
    
    icon.onclick = () => {
        icon.classList.toggle("filled");
        console.log(Math.random(),icon.classList)
    };  
} 
click()     
function click2( ) { 
    const icon = document.querySelector("#icon2");
    
    icon.onclick = () => {
        icon.classList.toggle("filled");
        console.log(Math.random(),icon.classList)
} 
} 
click2()  

function click3( ) { 
    const icon = document.querySelector("#icon3");
    
    icon.onclick = () => {
        icon.classList.toggle("filled");
        console.log(Math.random(),icon.classList)
} 
} 
click3()