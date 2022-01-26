
import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreatePost from './components/CreatePost';
import Home from "./components/Home";
import NavBar from './components/NavBar';
// import Button from './Button';


export default class App extends Component {
  render() {
    return ( 
    <BrowserRouter>
        <div className='container'>
          <NavBar />
          {/* <Button /> */}
          
          {/* <Route path="/" exact Component={Home}></Route>
          <Route path="/add" exact Component={CreatePost}></Route> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<CreatePost />}></Route>
        </Routes>
          
        </div>
    </BrowserRouter>
    
    );
  }
}
