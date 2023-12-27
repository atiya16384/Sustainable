import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn';
import Login from './Login';
import ResetPassword from './ResetPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Sustainable</h1>
          <nav>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/login">Login</Link>
            <Link to="/reset-password">Reset Password</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
