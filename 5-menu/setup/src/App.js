import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(new Set([1, 1, 2, 3, 5, 5]));

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    console.log(category);
    if (category === 'all') {
      setMenuItems(items);

      return;
    }

    const newItems = items.filter((item) => item.category === category);
    // console.log(newItems);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} onFilterItems={filterItems} />
        <div className='section-center'>
          {menuItems.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
