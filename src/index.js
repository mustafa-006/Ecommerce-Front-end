import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Home from './Home';
import Tshirt from './pages/Tshirt';
import Jacket from './pages/Jacket';
import Pant from './pages/Pant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <Routes>
      <Route   path='/' element ={<Home />}   />
      {/* the pages for the clothes */}


      <Route path='/tshirt' element={<Tshirt />} />
      <Route path='/Jacket' element={<Jacket />} />
      <Route path='/Pant' element={<Pant />} />
      
    </Routes>
   </Router>
   
  </React.StrictMode>
);


reportWebVitals();
