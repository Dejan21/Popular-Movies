
import './App.css';
import {BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import GetResponse from './components/GetResponse';

function App() {
  return (
    // <Router>
    //     <div>
    //       <Routes>
    //         <Route exact path="/" element={<Navigate to="/" />}/>
    //         <Route path="/" element={<GetResponse  />} />
    //         <Route path="/login" element={<Login/>} />
    //       </Routes>
    //     </div>
    //   </Router>
    <GetResponse />
    
  );
}

export default App;
