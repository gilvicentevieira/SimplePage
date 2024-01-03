// AppSwitcher.js
import { Switcher, FingerprintRecognition, IbmCloudEventNotification, IbmDb2Warehouse, BlockStorage, DnsServices, IbmCloudant, IbmDb2, IbmMq, IbmProcessMining, IbmTelehealth } from '@carbon/icons-react';
import React, { useRef, useState } from 'react';
import './AppSwitcher.css'; // Make sure to have a corresponding CSS file
import useOnClickOutside from '../../hooks/useOnClickOutside';

const AppSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef()

  const toggleSwitcher = (event) => {
    if(!event){
      setIsOpen(false)
    }else{
      setIsOpen(!isOpen)
    }
  };
  
  useOnClickOutside(wrapperRef, toggleSwitcher)


  return (
    <div className="app-switcher">
      <Switcher size={32} className="app-switcher-button" onClick={toggleSwitcher}>
        App Switcher
      </Switcher>
      {isOpen && (
        <div className="app-switcher-options" onClick={toggleSwitcher} ref={wrapperRef} id="app-switcher">
          <FingerprintRecognition size={42} className='option'>App 1</FingerprintRecognition>
          <IbmCloudEventNotification size={42} className='option'>App 2</IbmCloudEventNotification>
          <IbmDb2Warehouse size={42} className='option'>App 3</IbmDb2Warehouse>
          <BlockStorage size={42} className='option'>App 1</BlockStorage>
          <DnsServices size={42} className='option'>App 2</DnsServices>
          <IbmCloudant size={42} className='option'>App 3</IbmCloudant>
          <IbmDb2 size={42} className='option'>App 1</IbmDb2>
          <IbmMq size={42} className='option'>App 2</IbmMq>
          <IbmProcessMining size={42} className='option'>App 3</IbmProcessMining>
          <IbmTelehealth size={42} className='option'>App 3</IbmTelehealth>
        </div>
      )}
    </div>
  );
};

export default AppSwitcher;
