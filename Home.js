// Adding Javascript to our project
let count = 0;
window.onload = function() {
    const value = document.getElementById("value");
    const Incbtn = document.getElementById("Increase");
    const Resetbtn = document.getElementById("Reset");
    const Decbtn = document.getElementById("Decrease");
    Incbtn.addEventListener('click',function(event){
        count++;
        value.innerHTML = count;
        if(count>0){
            value.style.color="green";
        }
    })
    Decbtn.addEventListener('click',function(event){
        count--;
        value.innerHTML=count;
        if(count<0){
            value.style.color="red";
        }
    })
    Resetbtn.addEventListener('click',function(event){
        count=0;
        value.innerHTML=count;
        if(count===0){
            value.style.color="black";
        }
    })
};
