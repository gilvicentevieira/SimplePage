import React, { useState } from 'react';
import './Header.css'; // You can create a separate CSS file for styling
import {UserFilled} from '@carbon/icons-react'
import logo from '../../assets/logo.png'
import AppSwitcher from '../AppSwitcher/AppSwitcher';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <>
    <div className='header'>
      <div className='leftSection'>
        <Menu/>
        <div className='logo'>
          <img src={logo} width={100}></img>
        </div>
      </div>
      <div className='rightSection'>
        <AppSwitcher></AppSwitcher>
        <div className='user'>
          <UserFilled size={32}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
