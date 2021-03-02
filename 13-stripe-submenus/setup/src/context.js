import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [subpos, setSubpos] = useState({});
  const [submenu, setSubmenu] = useState({ page: '', links: [] });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSubmenu = (text, position) => {
    // console.log(text, position);
    setIsSubmenuOpen(true);
    setSubpos(position);
    const menu = sublinks.find((link) => link.page === text);
    // console.log(page);
    setSubmenu(menu);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        submenu,
        subpos,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
