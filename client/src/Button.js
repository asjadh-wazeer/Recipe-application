import React from 'react';
import './components/css/Button.css'
function Button() {
  return (
  
  <div>
      <button className='add__button  p-3 rounded-lg text-white text-md transition transform hover:-translate-y-1'>
        <a href='/add' >Create New Post</a>
    </button>

  </div>
  );
}

export default Button;
