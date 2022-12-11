import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import Login from './components/User/LogIn';
// import { Button } from 'bootstrap';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/footer';


function App() {

  const [user, setUser] = useState(null)

  const [myProjects, setMyProjects] = useState([])
  const [allProjects, setAllProjects] = useState([])

  useEffect(() => {
    if (user) {
	    fetch(`/users/${user.id}`)
	    .then(res => res.json())
	    .then(data => setMyProjects(data.projects))
    }
  },[user])

  useEffect(() => {
    fetch(`/projects`)
    .then(res => res.json())
    .then(setAllProjects)
  },[])

  return (
    <BrowserRouter>
      <NavBar setUser={setUser} user={user} />
      <Routes >
        <Route exact path="/" element={<Home allProjects={allProjects} user={user} setUser={setUser} />} />
        <Route exact path="/myprojects"  element={user ? <MyProjects myProjects={myProjects} user={user} /> : <Login setUser={setUser} user={user} />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
