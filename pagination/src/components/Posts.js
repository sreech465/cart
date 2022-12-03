import React from 'react'

function Posts({posts , loading}) {

    if(loading){
        return <h2>loading....</h2>;
    }
  return <ul className='list-group mb-4'>
    {posts.map(post =>(
      

        <li key={post.id} className='list-group-item'>
          <img style={{width:'100px'}} src={post.picture}></img> <p style={{color:'red'}}>id:{post.id}</p>   <p style={{paddingLeft:'20px',color:'greenyellow'}}>title: {post.title}</p>   <p style={{paddingLeft:'20px',color:'hotpink'}}>firstName:{post.firstName}</p>
          <p style={{paddingLeft:'20px',color:'green'}}>lastName:{post.lastName}</p>
        </li>


    ))}
  </ul>
    
  
}

export default Posts