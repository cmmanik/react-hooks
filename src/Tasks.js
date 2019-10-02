import React, { useState, useEffect } from "react";
import uuid from 'uuid'

// set task in local storge
const TASK_KEY = 'TASK_KEY';
    const setTaskLocalStroge = tasks => {
        localStorage.setItem(TASK_KEY, JSON.stringify(tasks))   
    }

// read the localstorge task
    const readTask = () => {
        let taskMap = JSON.parse(localStorage.getItem(TASK_KEY));
        return taskMap ? taskMap : {tasks:[],completedTasks:[] }
    }
function Tasks() {
    const alltask = readTask();
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState(alltask.tasks);
    const [completedTasks, setCompletedTasks] = useState(alltask.completedTasks);
    
    // set item localstroge
        useEffect(() => {
            setTaskLocalStroge({tasks,completedTasks })
        })
    
    // handle task text
    const taskTextHandler = e => {
        setTaskText(e.target.value)
    }
    
    // Add tasks 
    const addTask = () => {
        setTaskText('')
        setTasks([{ taskText, id: uuid() }, ...tasks])
    }

    // add completd task 
    const addCompleted = id => {
        setTasks(tasks.filter(task => task.id !== id))
        let completedTask = tasks.filter(task => task.id === id)
        setCompletedTasks([completedTask[0], ...completedTasks])
    }

    // Delete Task
    const deltetask = id => {
        setCompletedTasks(completedTasks.filter(task => task.id !== id))
    }

    return (
        <div>
            <h3>Tasks</h3>
            <div className="form">
                <input type="text" value={taskText} onChange={taskTextHandler} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <hr />
            <div className="task-list">
                {
                    tasks.length === 0 ? <p>No Task Available</p>
                        :
                        tasks.map(({ taskText, id }) => {
                            return (
                                <div key={id}> 
                                {taskText} ----><span onClick={() => addCompleted(id)}>Complted</span>
                                </div>
                            )
                        })
                }
            </div>
            <div className="completed-list">
                {
                    completedTasks.map(task => <div key={task.id}>{task.taskText} <span title="Delte Task" style={{cursor:'pointer'}} onClick={() => deltetask(task.id)}> X </span> </div> )
                }
            </div>

        </div>
    )
}
export default Tasks;