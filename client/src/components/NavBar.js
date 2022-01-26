import React, { Component } from 'react';
import "./css/Navbar.css";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://dcassetcdn.com/design_img/10150/16906/16906_294312_10150_image.jpg"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <i className="fas fa-search header__searchIcon"></i>
      </div>

      <div className="header__nav">
        
          <div  className="header__option">
            <span className="header__optionLineOne">Hello </span>
            <span className="header__optionLineTwo">Welcome</span>
          </div>

        
        

        <button className="header__option header__option__button ">
          <a href='/add' className="header__optionLineOne__button">ADD</a>
          <a href='/add' className="header__optionLineOne__button">RECIPE</a>
        </button>

        
          
        
      </div>
    </div>
    );
  }
}
