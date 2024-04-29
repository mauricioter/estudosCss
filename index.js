function click(){

    const icon = document.querySelector("#icon");
    
    icon.onclick = () => {
        icon.classList.toggle("filled");
        console.log(Math.random(),icon.classList)
    }; 
} 
click()   