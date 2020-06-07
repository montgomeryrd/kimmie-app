import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

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
        this.setState({tasks : tasks});
    }
    completeTask = (id) => {
        const task = this.state.tasks.filter(task => task.id === id);
        task.status = false;
        const tasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({tasks : tasks}, () => this.setState({tasks : [...this.state.tasks, task]}));
    }
    clearCompletedTasks = () => {
        const tasks = this.state.tasks.filter(task => task.status !== false);
        this.setState({tasks : tasks});
    }
    // Item functions -----------------------
    addItem = (item) => {
        item.id = Math.random() * 10;
        item.status = true;
        item.content = this.state.item;
        this.setState({items : [...this.state.items, item]});
    }
    removeItem = (id) => {
        const items = this.state.items.filter(item => item.id !== id);
        this.setState({items : items})
    }
    completeItem = (id) => {
        const item = this.state.items.filter(item => item.id === id);
        item.status = false;
        const items = this.state.items.filter(item => item.id !== id);
        this.setState({items : items}, () => this.setState({items : [...this.state.items, item]}));
    }
    clearCompletedItems = () => {
        const items = this.state.items.filter(item => item.status !== false);
        this.setState({items : items});
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