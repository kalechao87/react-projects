import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ info, title }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>

      {!collapsed && <p>{info}</p>}
    </article>
  );
};

export default Question;
