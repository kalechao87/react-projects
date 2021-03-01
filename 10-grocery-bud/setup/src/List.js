import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, onDelete, onEdit }) => {
  console.log(items);
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;

        return (
          <div key={id} className='grocery-item'>
            {title}
            <div>
              <button className='edit-btn' onClick={() => onEdit(id)}>
                <FaEdit />
              </button>

              <button className='delete-btn' onClick={() => onDelete(id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
