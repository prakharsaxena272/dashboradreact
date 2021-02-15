import React from 'react';
import Charts from './components/Charts';
import HeaderComponent from './components/HeaderComponent';

import DropDown from './components/dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
import FrontLook from './components/FrontLookComponent';
const App = (props) => (

  <div>  
    <HeaderComponent/>
    <FrontLook/>
    <DropDown/>
    {/* <Charts  height="400" width="400"  /> */}
  </div>
);

export default App;