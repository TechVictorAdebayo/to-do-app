const readline = require ('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todos = [];

// diplay menu
function displayMenu(){
    console.log(`\nChoose an option:
        1. Add a Task
        2. Remove a Task
        3. Diplay Tasks
        4. Mark as complete
        5. Quit\n`);
    
}

//Add task

function addTodo(){
    rl.question('Enter a new task: ', (task) => {
        todos.push({task,  completed: false});  
        console.log(`${task} added!`);
        showMenu();
    });
    
}

// remove a task using its index
function removeTodo(){
    displayTodo();
    rl.question('Enter the index of the task to remove: ', (num) =>{
        const index = parseInt(num) - 1;
        if (index >= 0 && index < todos.length){
            const removed = todos.splice(index, 1);
            console.log(`${removed[0].task} removed!`);
            
        } else {
            console.log('Invalid index.');
            
        }
        showMenu();
    });

}

//display all the things to do

function displayTodo(){
    if (todos.length === 0){
        console.log('No tasks available');
        
    }else{
        console.log('\nYour tasks:');
        todos.forEach((t, index) => {
            const status = t.completed ? '[completed]' : '[Incomplete]';
            console.log(`${index + 1}. ${t.task} ${status}`);
            
            
        });
        
    }
    // showMenu(); 
}

//mark as complete

function markComplete (){
    displayTodo();
    rl.question('Enter the number of the task to mark complete: ', (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < todos.length){
            todos[index].completed = true;
            console.log(`Tasks "${todos[index].task}" marked as complete`);
        }
        else {
            console.log('Invalid task number.');
            
        }
        showMenu();
    });

}
function showMenu(){
    displayMenu();
    rl.question('What do you want to do (1 - 5): ', (choice) =>{
        switch (choice){
            case '1': 
                addTodo();
                break;

            case '2':
                removeTodo();
                break;

            case '3':
                displayTodo();
                break;

            case '4':
                markComplete();
                break;

            case '5':
                rl.close();
                console.log('Goodbye!');
                break;

            default:
                console.log("Invalid choice, pls chooose between 1 to 5");
                showMenu();
                
        }
    });
}

showMenu();

