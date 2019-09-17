import React, {useEffect, useState} from 'react';
import uuid from 'uuid'
function Tasks() {

    const [taskText, setTaskText] =  useState('');
    const [tasks, setTasks] = useState([]);
    const [completedTask, setCompletedTasks] = useState([])

  const  setTaskOnchange = event => {
        setTaskText(event.target.value)
    }


const addTask = event => {
    console.log(taskText);
    setTasks([...tasks, {taskText, id:uuid()}])
    setTaskText('')
}

const taskWithEnter = event => {
    if(event.key ==='Enter') {
        setTasks([...tasks, {taskText, id:uuid()}])
        setTaskText('')
    }
}

// const addComplete = complttask => () => {
//     setCompletedTasks([...completedTask, complttask])
//     setTasks(tasks.filter(t => t.id !==complttask.id))
// }
const addComplete = complttask => {
    setCompletedTasks([...completedTask, complttask])
    setTasks(tasks.filter(t => t.id !==complttask.id))
}

return(
    <div className="all-task">
        <input type="text" name="task" value={taskText}  onKeyPress={taskWithEnter} onChange={setTaskOnchange} />
        <button onClick={addTask}>Add Task</button>
        <div className="task-item">
            {tasks.map(task => {
                let {id, taskText} = task;
                return(
                    <li onClick={() =>addComplete(task)} key={id}>{taskText}</li>
                )
            })}
        </div>

        <hr/>
        <h1>Completed Tasks</h1>
        {completedTask.map(task => {
            let {id, taskText} = task
            return (
                <li key={id}>{taskText}</li>
            )
        })}
    </div>
)

}


export default Tasks
