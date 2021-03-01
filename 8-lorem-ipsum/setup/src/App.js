import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleCountSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count, 10);
    if (amount <= 0) {
      amount = 1;
    }

    if (amount > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };
  return (
    <section className='section-center'>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className='lorem-form' onSubmit={handleCountSubmit}>
        <label htmlFor='amount'>paragraphs</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      <div className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </section>
  );
}

export default App;
