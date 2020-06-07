import React, { useState } from 'react';
import TaskForm from '../task-form/TaskForm';

const TaskPage = (props) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    const today = new Date().toLocaleString('en-us', {  weekday: 'long' });

    const list = props.tasks.length ? (
        props.tasks.map((task, index) => {
            return (
                <div className="task" key={task.id = index}>
                    <span className="task-complete" style={{opacity : task.status ? 1 : .3}} onClick={() => {props.completeTask(task.id)}}>
                        {task.content}
                        <span className="remove-task" onClick={() => {props.removeTask(index)}}>
                            undo
                        </span>
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
            <h1>{today}'s Tasks</h1>
            { show ? <span onClick={toggle}>add tasks</span> : <span onClick={toggle}>hide form</span> }
            { show ?
                <div className="task-view" unselectable="on">
                    {list}
                </div>
            : 
                <TaskForm />
            }
            
        </div>
    )
}
export default TaskPage;