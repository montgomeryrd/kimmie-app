import React, { useState } from 'react';
import TaskForm from '../task-form/TaskForm';
import like from '../../assets/like.svg';

const TaskPage = (props) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    const today = new Date().toLocaleString('en-us', {  weekday: 'long' }).toLowerCase();
    const total = props.tasks.length - props.completedTasks.length;
    
    const list = !props.tasks ? window.location.reload(true) : props.tasks.length ? (
        props.tasks.map((task, index) => {
            return (
                <div className="task" unselectable="on" key={index}>
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
            <h1 className="title">{today}'s tasks: {total}</h1>
            { show ?
                <div className="task-view" unselectable="on">
                    <span className="subtitle" onClick={toggle}>...add tasks</span>
                </div>
            : 
                <div>
                    <span className="subtitle" onClick={toggle}>...hide form</span>
                    <TaskForm
                        task = {props.task}
                        handleChangeTasks = {props.handleChangeTasks}
                        handleSubmitTasks = {props.handleSubmitTasks}
                    />
                </div>
            }
            <div className="list-container">
                {list}
                { props.tasks.length ?
                    <button className="clear-btn" onClick={props.clearCompletedTasks}>clear completed tasks</button>
                : props.done ? 
                    <img className="like" width="25%" src={like} alt="thumbs up"/> 
                : 
                    <p className="empty">empty list</p>
                }
            </div>
        </div>
    )
}
export default TaskPage;