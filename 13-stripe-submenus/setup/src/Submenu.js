import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { isSubmenuOpen, submenu, subpos } = useGlobalContext();
  const { page, links } = submenu;
  const [columns, setColumns] = useState('col-2');
  const containerRef = useRef(null);
  // console.log(subpos);

  useEffect(() => {
    setColumns('col-2');

    if (links.length === 3) {
      setColumns('col-3');
    }

    if (links.length > 3) {
      setColumns('col-4');
    }

    const { center, bottom } = subpos;
    // console.log(containerRef.current);
    containerRef.current.style.left = center + 'px';
    containerRef.current.style.top = bottom + 'px';
  }, [submenu, page, links, subpos]);

  return (
    <aside className={`submenu ${isSubmenuOpen && 'show'}`} ref={containerRef}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, icon, url } = link;

            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
