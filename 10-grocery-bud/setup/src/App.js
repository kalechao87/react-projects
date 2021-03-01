import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');

  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

  const handleGrocerySubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
      return;
    }

    // 编辑
    if (isEditing && name) {
      const newList = list.map((item) => {
        if (item.id === editID) {
          item.title = name;
        }

        return item;
      });
      setList(newList);
      setEditID(null);
      setIsEditing(false);
      setName('');
      showAlert(true, 'success', '编辑成功');
      return;
    }

    // 添加
    showAlert(true, 'success', '添加成功');
    const newItem = { id: new Date().getTime().toString(), title: name };
    setList([...list, newItem]);
    setName('');
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const deleteItem = (id) => {
    console.log(id);

    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
    showAlert(true, 'success', '删除成功');
  };

  const editItem = (id) => {
    // console.log(id);
    const editItem = list.filter((item) => item.id === id)[0];
    // console.log(editItem);
    setIsEditing(true);
    setEditID(id);
    setName(editItem.title);
  };

  const handleClearClick = () => {
    setList([]);
    showAlert(true, 'success', '全部清除完毕');
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleGrocerySubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} onDelete={deleteItem} onEdit={editItem} />
          <button className='clear-btn' onClick={handleClearClick}>
            clear list
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
