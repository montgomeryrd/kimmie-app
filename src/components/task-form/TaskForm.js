import React from 'react';

const TaskForm = (props) => {
    return (
        <div className="task-form-container">
            <form action="/dashboard" method="post" onSubmit={props.handleSubmitTasks}>
                <input
                    type="text"
                    id="task"
                    name="task"
                    value={props.task}
                    onChange={props.handleChangeTasks}
                    required={true}
                    autoComplete="off"
                    placeholder="input task..."
                />
                <button className="submit" type="submit" onSubmit={props.handleSubmitTasks}>add task</button>
            </form>
        </div>
    )
}
export default TaskForm;