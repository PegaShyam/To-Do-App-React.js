import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    const DeleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }   
    // const time = format(new Date(), 'p, dd/MM/yyyy'); 
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed,
                }
            }
            return item; 
        }))
    }   
    return(
        <div className="todo">
            <li key={todo.timestamp} className={`todo-item ${todo.completed ? "completed" : " " }`}><h3>{text}</h3><h6>{new Date(todo.timestamp).toLocaleString()}</h6></li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={DeleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>

    );
};

export default Todo;