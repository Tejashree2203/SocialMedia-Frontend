import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top:'-18%',right:'0'}}></div>
        <div className="blur" style={{top:'36%' , left:'-8rem'}}></div>

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth/>}  />
          <Route path="/Profile" element={<Profile/>}  />
          <Route path="/home" element={ <Home/>}  />

        </Routes>
        
        
        </BrowserRouter>
        
       
    </div>
  );
}

export default App;
