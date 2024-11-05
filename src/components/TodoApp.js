// Це головний компонент, який буде об’єднувати всі інші. Він містить стан і логіку для управління списком справ.

import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import '../style/TodoApp.css'

const TodoApp = () => {

    const[todos,setTodos] = useState([]);
    const[filter,setFilter] = useState('');

     // Функція для додавання нового завдання
     const addTodo = (newTodo) => {
        setTodos([...todos, {...newTodo, id: Date.now()}])
     };

     // Функція для редагування завдання
     const editTodo = (id, updatedTodo) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...updatedTodo, id } : todo)));
    };

     // Функція для видалення завдання
     const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
     }

    return (
        <div>
            <TodoForm onAdd={addTodo}/>
            <CategoryFilter setFilter={setFilter}/>
            <TodoList todos={todos} filter={filter} onEdit={editTodo} onDelete={deleteTodo}/>
        </div>
    );
};

export default TodoApp;