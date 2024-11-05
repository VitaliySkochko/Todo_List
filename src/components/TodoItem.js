// Окремий елемент списку з можливістю редагування та видалення.

import React, { useState } from "react";
import '../style/TodoItem.css';

const TodoItem = ({ todo, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onEdit(todo.id, editedTodo); // Передаємо оновлені дані
    setIsEditing(false);
  };

  return (
    <div className="todoItem">
      <li>
        <div className="tags">
          <p className="tag">{todo.category}</p>
        </div>
        <div className="content">
          {isEditing ? (
            <>
              <input
                name="title"
                value={editedTodo.title}
                onChange={handleEditChange}
              />
              <textarea
                name="desc"
                value={editedTodo.desc}
                onChange={handleEditChange}
              />
            </>
          ) : (
            <>
              <h2 className="title">{todo.title}</h2>
              <p className="desc">{todo.desc}</p>
            </>
          )}
        </div>
        <div className="button-conteiner">
          {isEditing ? (
            <button onClick={handleSave}>Зберегти</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Редагувати</button>
          )}
          <button onClick={() => onDelete(todo.id)}>Очистити</button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;

