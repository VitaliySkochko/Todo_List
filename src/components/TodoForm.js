// Дозволяє додавати нові завдання. Він має поле для введення заголовка, опису, а також вибір категорії.

import React, { useState } from 'react';
import '../style/TodoForm.css'

const TodoForm = ({onAdd}) => {
    const[title,setTitle] = useState('');
    const[desc,setDesc] = useState('');
    const[category,setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({title,desc,category});
        setTitle('');
        setDesc('');
        setCategory('');
    }
     
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-conteiner'>
                <label>Категорія</label>
                <input
                type='radio'
                name='category'
                value="Домашні справи"
                onChange={() => setCategory('Домашні справи')}
                />Домашні справи
                <input
                type='radio'
                name='category'
                value='Робота'
                onChange={() => setCategory('Робота')}
                />Робота
                <input
                type='radio'
                name='category'
                value='Фітнес'
                onChange={() => setCategory('Фітнес')}
                />Фітнес
            </div>
            <div>
                <label>Заголовок</label>
                <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Опис</label>
                <textarea 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                />
            </div>
            <button type='submit'>Додати завдання</button>
        </form>
        
    );
};

export default TodoForm;