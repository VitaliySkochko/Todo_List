// Надає фільтр для вибору категорій завдань, щоб можна було відобразити лише певні категорії.

import React from 'react'; 
import '../style/CategoryFilter.css'

const CategoryFilter = ({setFilter}) => {
    const handleCategoryChange = (e) => {
        setFilter(e.target.value)
    };

    return (
        <div className='category_filter'>
            <input
            type='radio'
            name='filter'
            value=""
            onChange={handleCategoryChange}
            />Всі
            <input
            type='radio'
            name='filter'
            value="Домашні справи"
            onChange={handleCategoryChange}
            />Домашні справи
            <input
            type='radio'
            name='filter'
            value="Робота"
            onChange={handleCategoryChange}
            />Робота
            <input
            type='radio'
            name='filter'
            value="Фітнес"
            onChange={handleCategoryChange}
            />Фітнес
        </div>
    );
};

export default CategoryFilter;