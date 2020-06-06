import React from 'react';

class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            task : "",
            item : "",
            tasks : [],
            items : [],
            completedTasks : [],
            completedItems : []
        }
        this.handleChangeTasks=this.handleChangeTasks.bind(this);
        this.handleSubmitTasks=this.handleSubmitTasks.bind(this);
        this.handleChangeItems=this.handleChangeItems.bind(this);
        this.handleSubmitItems=this.handleSubmitItems.bind(this);

    }
    handleChangeTasks = (e) => {
        this.setState({task : e.target.value});
    }
    handleSubmitTasks = (e) => {
        e.preventDefault();
        this.addTask(this.state);
        this.setState({task : ""});
    }
    handleChangeItems = (e) => {
        this.setState({item : e.target.value});
    }
    handleSubmitItems = (e) => {
        e.preventDefault();
        this.addItem(this.state);
        this.setState({item : ""});
    }
    // Task functions -----------------------
    addTask = (task) =>{
        task.id = Math.random() * 10;
        task.status = true;
        task.content = this.state.task;
        this.setState({tasks : [...this.state.tasks, task]});
    }
    removeTask = (id) => {
        const tasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({tasks : tasks})
    }
    completeTask = (id) => {
        const task = this.state.tasks.filter(task => task.id === id)
        
    }
    clearCompletedTasks = () => {

    }
    // Item functions -----------------------
    addItem = () => {

    }
    removeItem = () => {

    }
    completeItem = () => {

    }
    clearCompletedItems = () => {

    }

    render() {
        return (
            <div className="dashboard-container">
                <div>
                    <span>tasks page</span>
                    <span>shopping list</span>
                </div>
            </div>
        )
    }
}
export default Dashboard;