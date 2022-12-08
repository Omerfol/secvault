import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Login from './pages/Login';
import PanelUzytkownik from './pages/PUzytkPliki';
import Help from './pages/Help';
import Polubione from "./pages/upanel/Polubione";
import Udostepnione from "./pages/upanel/Udostepnione";
import Kosz from "./pages/upanel/Kosz";
import Ustawienia from "./pages/upanel/Ustawienia";

const App = () => {
  return(
      <Router>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path='/main' element={<PanelUzytkownik/>}/>
            <Route path="/help" element={<Help/>}></Route>
            <Route path='/favourite' element={<Polubione/>}/>
            <Route path='/share' element={<Udostepnione/>}/>
            <Route path='/bin' element={<Kosz/>}/>
            <Route path='/settings' element={<Ustawienia/>}/>

        </Routes>
      </Router>
  )
}

export default App;
