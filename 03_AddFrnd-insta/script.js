const isstatus = document.querySelector('h5');

const add = document.querySelector('.add');
flag = 0
const change = document.querySelector("button")

add.addEventListener("click", function(){
    if(flag == 0){
        isstatus.innerHTML = "Friends"
        isstatus.style.color = "green"
        change.style.backgroundColor = "grey"
        change.innerHTML = "Remove Friend"
        flag = 1
    }else{
        isstatus.innerHTML = "Stranger"
        isstatus.style.color = "Red"
        change.style.backgroundColor = "cadetblue"
        change.innerHTML = "Add Friend"
        flag = 0
    }  
})
