import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './home';
import Campaigns from './campaigns';
import About from './about';


function Mynavbar() {
  return (
    <Router>
    <Navbar className="bg-black" variant="dark">
      <Container>
        
        <Nav className="ml-auto">
          <Nav.Link href="/" className="text-orange-500 hover:text-orange-400 mx-2 ">Home</Nav.Link>
          <Nav.Link href="/about" className="text-orange-500 hover:text-orange-400 mx-2">About</Nav.Link>
          <Nav.Link href="/donate" className="text-orange-500 hover:text-orange-400 mx-2">Donate</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/donate" element={<Campaigns/>}  />
    </Routes>

</Router>
  );
}

export default Mynavbar;
