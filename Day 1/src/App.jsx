// App.js

import React from 'react';
import RegisterForm from './pages/register';
import Login from './pages/login';
import { BrowserRouter,Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
