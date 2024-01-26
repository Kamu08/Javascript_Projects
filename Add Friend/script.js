const isstatus = document.querySelector('h5');

const add = document.querySelector('.add');
flag = 0
// const remove = document.querySelector(".remove");


add.addEventListener("click", function(){
    if(flag == 0){
        isstatus.innerHTML = "Friends"
        isstatus.style.color = "Green"
        flag = 1
    }else{
        isstatus.innerHTML = "Stranger"
        isstatus.style.color = "Red"
        flag = 0
    }
    
})

// remove.addEventListener("click", function(){
//     isstatus.innerHTML = "Stranger"
//     isstatus.style.color = "Red"
// })