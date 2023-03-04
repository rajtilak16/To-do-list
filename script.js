const toDoItems = document.getElementsByClassName("to_do_items")[0];

const input = document.getElementById("input");

// const trashIcon = document.getElementById("trash");

input.addEventListener("keydown",function(event){
    if(event.key === "Enter")
    additem();
})

function additem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "items";
    divParent.innerHTML = '<div>'+input.value+'</div>';   

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color= "lightgray";
    checkIcon.addEventListener("click",function(){
        checkIcon.style.color="limegreen";
    })
     
    divChild.appendChild(checkIcon);
     
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "red";
    trashIcon.addEventListener("click", ()=>{
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);
    
    toDoItems.appendChild(divParent);
    input.value = '';
}