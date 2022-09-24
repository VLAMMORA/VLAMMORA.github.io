document.getElementById('formTask').addEventListener('submit',savetask )



function savetask(e) {
  
  
    let tittle = document.getElementById('title').value;
    let description =document.getElementById('description').value;

    console.log(tittle+description)

    let task ={

        tittle,
        description

    };

    console.log(task)

    if (localStorage.getItem("tasks")===null) {
        let tasks =[]

        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks))


    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks))

    }
    getTask();
    console.log(localStorage.getItem('tasks'))
    document.getElementById('formTask').reset();
    e.preventDefault();
}


function getTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    let taskview = document.getElementById('tasks')

    taskview.innerHTML = '';

    for (let index = 0; index < tasks.length; index++) {
      
        let title = tasks[index].tittle ;
        let description =tasks[index].description ;


        taskview.innerHTML += `
        <div class="card mb-3">
                <div class="card-body">
                  <p>
                    ${title} - ${description}
                    <a href="#" onclick="Delete('${title}')"  class="btn btn-danger ml-5">Eliminar</a>

                 </p>
        </div>
      </div>`;
        
    }
}


function Delete(title) {
    console.log(title)
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    for (let index = 0; index < tasks.length; index++) {
        
        if (tasks[index].tittle== title) {
            tasks.splice(index,1)
        }
        
    }
    localStorage.setItem('tasks',JSON.stringify(tasks))
    getTask();

}

getTask();


fetch('https://randomuser.me/api/')
.then(Response => Response.json())
.then(Response =>{

console.log(Response)

})
.catch(errror=>{

    console.warn("ayudaaaaaaaaaaaaaaaa")
})


// let savetask = () => {
    
// }

// const savetask = (e) => {
    
// }


// const savetask = () => alert("hola") expresiones lamdba 
