import React, { useState } from 'react';
import './Header.css'; // You can create a separate CSS file for styling
import {UserFilled} from '@carbon/icons-react'
import logo from '../../assets/logo.png'
import AppSwitcher from '../AppSwitcher/AppSwitcher';
import Menu from '../Menu/Menu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [label, setLabel] = useState('DE');

  const updateLabel = (e)=>{
    setLabel(e.target.value)
  }

  return (
    <header>
      <nav className='header'>
        <div className='leftSection'>
          <Menu/>
          <div className='logo'>
            <img src={logo} width={100}></img>
          </div>
        </div>
        <div className='rightSection'>
          <div className="custom-select">
            <div className="select-label">{label}</div>
            <FontAwesomeIcon icon={faAngleDown} className='select-arrow'/>
            <select id="mySelect" onChange={updateLabel}>
                <option value="DE">DE</option>
                <option value="FR">FR</option>
                <option value="IT">IT</option>
                <option value="EN">EN</option>
            </select>
          </div>
          <AppSwitcher></AppSwitcher>
          <div className='user'>
            <UserFilled size={32}/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
