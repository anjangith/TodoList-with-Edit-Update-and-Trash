import React, {useState} from 'react';
import Todo from './Todo';
import Todoform from './Todoform';
import Trash from './Trash';

function Todolist() {

    const [todos, setTodos] = useState([]);
    const [trash, setTrash] = useState([]);

    const addTodo = todo => {
        //check for whitespace and unnecessary todos
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo,...todos];
        setTodos(newTodos);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = id => {
        
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);

        //moving todo to trash
        const obj = todos.find(obj => obj.id == id);
        console.log(obj);
        setTrash([...trash,obj]);
        
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
        //moving todo to trash
        const obj = todos.find(obj => obj.id == id);
        console.log(obj);
        setTrash([...trash,obj]);

    }

    return (
        <div>
            <h1> Add Your Tasks</h1>
            <Todoform onSubmit={addTodo} />
            <Todo 
            todos={todos}
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
            <h1>Trash and Completed Tasks</h1>
            <Trash trashes={trash} />

        </div>
    )
}

export default Todolist
