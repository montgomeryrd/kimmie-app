import React, { useState } from 'react';
import TaskForm from '../task-form/TaskForm';

const TaskPage = (props) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    const today = new Date().toLocaleString('en-us', {  weekday: 'long' }).toLowerCase();
    const total = props.tasks.length - props.completedTasks.length;
    
    const list = !props.tasks ? window.location.reload(true) : props.tasks.length ? (
        props.tasks.map((task, index) => {
            return (
                <div className="task" key={index}>
                    <span className="task-complete" style={{opacity : props.completedTasks.includes(task) ? .2 : 1}} onClick={() => {props.completeTask(index)}}>
                        {task.task}
                    </span>
                </div>
            )
        })
    ) : ( 
        <div>

        </div>
    )
    return (
        <div className="task-page-container">
            <h1>{today}'s tasks {total}</h1>
            { show ?
                <div className="task-view" unselectable="on">
                    <span onClick={toggle}>add tasks</span>
                </div>
            : 
                <div>
                    <span onClick={toggle}>hide form</span>
                    <TaskForm
                        task = {props.task}
                        handleChangeTasks = {props.handleChangeTasks}
                        handleSubmitTasks = {props.handleSubmitTasks}
                    />
                </div>
            }
            <div>
                {list}
                <button onClick={props.clearCompletedTasks}>clear</button>
            </div>
        </div>
    )
}
export default TaskPage;