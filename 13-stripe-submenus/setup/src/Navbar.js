import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSubmenu, closeSubmenu, openSidebar } = useGlobalContext();
  // console.log('xx', openSubmenu);

  const displaySubmenu = (e, page) => {
    // console.log(e, page);
    const rect = e.target.getBoundingClientRect();
    // console.log(rect);
    const center = (rect.left + rect.right) / 2;
    const bottom = rect.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className='nav-links'>
          {/* <li>
            <button className='link-btn'>products</button>
          </li>

          <li>
            <button className='link-btn'>developers</button>
          </li>

          <li>
            <button className='link-btn'>company</button>
          </li> */}
          {sublinks.map((item, index) => {
            const { page } = item;
            return (
              <li key={index}>
                <button
                  className='link-btn'
                  onMouseOver={(e) => displaySubmenu(e, page)}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>

        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
