import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { theme } from '../../styles/theme';
import Burger from './Burger/Burger';
import MenuComponent from './MenuComponent/MenuComponent';
import FocusLock from 'react-focus-lock';

const Menu = ()=> {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <MenuComponent open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>        
      </>
    </ThemeProvider>
  );
}

export default Menu;
