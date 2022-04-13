import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Text from './Text';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Text text='123' size="101" textColor={'red'} underline='true'/>
    <Text text='123' size='63' color={'blue'} underline={false}/>
    <Text text='123' size={21} color={'green'} underline />
    <Text text='123' size={160} color={'lime'} />
  </React.StrictMode>
);


