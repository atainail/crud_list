let add = document.querySelector(".button");
let toDoList = document.querySelector("i");

add.addEventListener('click', function(e) {
    let input = document.querySelector(".form-control");
    let today = new Date();
    let date = (today.getMonth() + 1) + "-" + today.getDate() + '-' +today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;

    let full = 
    `<div class="toDo">      
         <i class="bi bi-dash-circle"> ${input.value} | added on ${dateTime}</i> 
     </div>`;

    let complete = document.createElement("p");
    complete.innerHTML = full;

    toDoList.appendChild(complete);  
    input.value = " ";
    
});

toDoList.addEventListener('click', function (e){
    e.target.remove();  
});