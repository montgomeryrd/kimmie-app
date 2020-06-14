import React from 'react';

const TaskForm = (props) => {
    return (
        <div className="task-form-container">
            <form action="/dashboard" method="post" onSubmit={props.handleSubmitTasks}>
                <textarea
                    type="text"
                    id="task"
                    name="task"
                    rows="10"
                    cols="50"
                    value={props.task}
                    onChange={props.handleChangeTasks}
                    required={true}
                    autoComplete="off"
                    placeholder="input task..."
                />
                <button className="submit" type="submit" onSubmit={props.handleSubmitTasks}>Create My List</button>
            </form>
        </div>
    )
}
export default TaskForm;