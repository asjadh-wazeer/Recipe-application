import React, { Component } from 'react';
import axios from "axios";
import "./css/Home.css";

export default class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state ={
      posts : []
    };
  }

componentDidMount() {
  this.retrievePosts();
}

  retrievePosts() {
    // axios.get("http://localhost:4000/posts").then(res=>{
      axios.get("http://localhost:4000/posts").then(res=>{
      if(res.data.success) {
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts)
      }
    })
  }

  onDelete = (id) =>{
    axios.delete(`http://localhost:4000/post/delete/${id}`).then((res)=>{
      alert("Deleted Sucecessfully");
      this.retrievePosts();
    })
  }
  render() {
    return (

  <div className='home__section'>
    {this.state.posts.map((posts, index) =>(
        <div className='recipe__item__container item__box shadow-2xl'>
            <div className='img__image__container'>
                <img
                  className="recipe__image"
                  src={`${posts.link}`}
                  href='/'
                />
            </div>

            <div className='recipe__blank__container'></div>

            <div className='recipe__text__container'>
                <div className='mb-6'>
                  <p className='text-lg font-bold'>FOOD : </p>
                  <p className='text-lg text-gray-800'>{posts.title}</p>
                </div>
                <div className='mb-6'>
                  <p className='text-lg font-bold'>DESCRIPTION :</p>
                  <p className='text-lg '>{posts.message}</p>
                </div>
            </div>
            <div className='delete__button__container  '>
                <a className='delete__button  bg-red-500 p-4 mr-4 rounded-lg text-white text-md transition transform hover:-translate-y-1' href="#"  onClick={()=>this.onDelete(posts._id)}>
                  <i className='far fa-trash-alt'></i>
                </a>
            </div>
          </div> 
        ))};
      </div>
      );
    }
  }

