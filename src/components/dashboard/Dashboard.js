import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import TaskPage from '../task-page/TaskPage';
import ShoppingList from '../shopping-list/ShoppingList';
import add from '../../assets/add.svg';
import shopping from '../../assets/shopping-cart.svg';
import '../../styles/styles.css';

class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            task : "",
            item : "",
            tasks : [],
            items : [],
            completedTasks : [],
            completedItems : [],
            done : false
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
        this.setState({tasks : [...this.state.tasks, task]});
    }
    completeTask = (index) => {
        if(this.state.completedTasks.includes(this.state.tasks[index])) {
            const i = this.state.completedTasks.indexOf(this.state.tasks[index]);
            let completedTasks = this.state.completedTasks;
            completedTasks.splice(i, 1);
            this.setState({completedTasks : completedTasks});
        } else {
            let completedTasks = [...this.state.completedTasks, this.state.tasks[index]];
            this.setState({completedTasks : completedTasks});
        }
    }
    clearCompletedTasks = () => {
        let tasks = [], completedTasks = [];
        this.state.tasks.forEach(task => !this.state.completedTasks.includes(task) ? tasks.push(task) : task);
        this.setState({tasks : tasks});
        this.setState({completedTasks : completedTasks});
        this.setState({done : true});
    }
    // Item functions -----------------------
    addItem = (item) => {
        this.setState({items : [...this.state.items, item]});
    }
    completeItem = (index) => {
        if(this.state.completedItems.includes(this.state.items[index])) {
            const i = this.state.completedItems.indexOf(this.state.items[index]);
            let completedItems = this.state.completedItems;
            completedItems.splice(i, 1);
            this.setState({completedItems : completedItems});
        } else {
            let completedItems = [...this.state.completedItems, this.state.items[index]];
            this.setState({completedItems : completedItems});
        }
    }
    clearCompletedItems = () => {
        let items = [], completedItems = [];
        this.state.items.forEach(item => !this.state.completedItems.includes(item) ? items.push(item) : item);
        this.setState({items : items});
        this.setState({completedItems : completedItems});
    }

    render() {

        return (
            <div className="dashboard-container">
                <Router>
                    <div className="top">
                        <NavLink to="/tasks" style={{ textDecoration: 'none' }}>
                            <img src={add} width="40px" alt="task page"/>
                        </NavLink>
                        <NavLink to="/shopping" style={{ textDecoration : 'none' }}>
                            <img src={shopping} width="40px" alt="shopping page"/>
                        </NavLink>
                    </div>
                    <Route path="/tasks" render={props =>
                        (<TaskPage 
                            task = {this.state.task}
                            tasks = {this.state.tasks}
                            completedTasks = {this.state.completedTasks}
                            done = {this.state.done}
                            completeTask = {this.completeTask}
                            clearCompletedTasks = {this.clearCompletedTasks}
                            handleChangeTasks = {this.handleChangeTasks}
                            handleSubmitTasks = {this.handleSubmitTasks}
                        />)
                    }/>
                    <Route path="/shopping" render={props =>
                        (<ShoppingList
                            item = {this.state.item}
                            items = {this.state.items}
                            completedItems = {this.state.completedItems}
                            completeItem = {this.completeItem}
                            clearCompletedItems = {this.clearCompletedItems}
                            handleChangeItems = {this.handleChangeItems}
                            handleSubmitItems = {this.handleSubmitItems}
                        />)
                    }/>
                </Router>
                <div className="footer"></div>
            </div>
        )
    }
}
export default Dashboard;