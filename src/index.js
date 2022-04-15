import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Boxes from './Boxes.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Boxes titleSize={40} label='Big box' cssClass='big'/>
    <Boxes titleSize={30}label='Medium box' cssClass='medium'/>
    <Boxes titleSize={20} label='Small box'cssClass='small'/>
  </React.StrictMode>
);


