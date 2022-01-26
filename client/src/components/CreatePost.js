import React, { Component } from 'react';
import axios from 'axios';
import "./css/CreatePost.css"

export default class CreatePost extends Component {

  constructor(props) {
    super(props);
    this.state={
      title:"",
      message:"",
      link:""
    }
  }

  handleInputChange=(e)=>{
    const {name, value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  };

  onSubmit=(e)=>{
    e.preventDefault();

    const {title, message, link}=this.state;

    const data = {
      title:title,
      message:message,
      link:link
    }
    console.log(data);

    axios.post("http://localhost:4000/post/save", data).then((res)=>{
      if(res.data.success) {
        this.setState (
          {
            title:"",
            message:"",
            link:""
          }
        )
      }
    })
alert("Your form is submitted");
  }

  render() {
    return (
    
    <div className='create__post__container'>
    <div className='form__section'>
      <div className="post__type">
        <h3 className=' text-lg'>Food Name</h3>
        <input maxlength = "50" required placeholder='Enter the Food Dame' className="post__typeInput" value={this.state.title} onChange={this.handleInputChange} type="text" name='title' />
      </div>

      <div className="post__type">
        <h3 className=' text-lg'>Food Description</h3>
        <input maxlength = "50" required placeholder='Enter the Food Description' className="post__typeInput" value={this.state.message} onChange={this.handleInputChange} type="text" name='message' />
      </div>

      <div className="post__type">
        <h3 className=' text-lg'>Image Link</h3>
        <input className="post__typeInput" placeholder='Enter the Image Link' value={this.state.link} onChange={this.handleInputChange} type="text" name='link' />
      </div>
      </div>
      <button onClick={this.onSubmit} type="submit" className="bg-blue-600 create__post__button">Submit</button>

    </div>
    );
  }
}
