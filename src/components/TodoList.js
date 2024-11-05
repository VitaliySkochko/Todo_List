// TodoList відповідає за відображення списку завдань. Він отримує todos як пропси та відображає TodoItem для кожного завдання.

import React from 'react';
import TodoItem from './TodoItem'
import '../style/TodoList.css'

const TodoList = ({todos, filter, onEdit, onDelete}) => {
const filteredTodos = filter ? todos.filter(todo => todo.category === filter) : todos;

    return (
        <ul>
            {filteredTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete}/>
            ))}
        </ul>
       
    );
};

export default TodoList;

