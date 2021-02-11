import React, {Component} from 'react';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput : '',
            items : []
        };
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }

    addToDo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteToDo(item){
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items:array
        });
    }

    renderToDos(){
        return this.state.items.map((item => {
            return (
                <div key={item} className="item_btn">
                    {item} | <button onClick={this.deleteToDo.bind(this, item)}>X</button>
                </div>
            );
        }));  
    }

    render() {
        return(
            <div>
                <h1 className="title_1"> Ma Liste de tâches</h1>
                <form className="form_1">
                    <input 
                        value={this.state.userInput} 
                        type='text' 
                        placeholder='Entrez une tâche'
                        onChange={this.onChange.bind(this)}/>
                    <button onClick={this.addToDo.bind(this)}>Ajouter</button>
                </form>
                <div className="tasks_1">
                    <div className="tasks_2">
                        {this.renderToDos()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoList;