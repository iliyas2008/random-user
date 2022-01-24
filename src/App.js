import { useState } from 'react';
import './App.css';
import Users from './Users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetails from './UserDetails';


function App() {

  // https://randomuser.me/api/?results=10

  const [currentUser, setCurrentUser] = useState({})

  const handleClick = (resUser) =>{
    console.log(resUser);
    setCurrentUser(resUser)
}

  return (
    <div className="App">
      <header className="App-header">
       <h1>Random User</h1>
      </header>
      <section className="App-body">
        <Router>
          <Routes>
            <Route path="/" element={ <Users myFunct={handleClick} /> } />
            <Route path="/userdetails" element={ <UserDetails myData={currentUser} /> } />
          </Routes>
        </Router>

        
      </section>
    </div>
    );
}

export default App;
