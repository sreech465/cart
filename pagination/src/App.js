import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Pgination from './components/Pgination';
import 'bootstrap/dist/css/bootstrap.min.css';

import React , {useState , useEffect} from 'react';

function App() {
  const[posts , setPosts] = useState([]);

  const [loading , setLoading] = useState(false);

  const [currentPage,setCurrentPage] = useState(1);

  const [postsPerPage , setPostsPerPage] = useState(5);

  //change page

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  useEffect(()=>{
    const fetchPosts = async()=>{
      setLoading(true);
      const res = await fetch(`https://dummyapi.io/data/v1/user?page=0&limit=100`, {
        headers: {
            "app-id": "62ab4c2cedcbc2dc96d36b50"
        }
    });
    const data1 = await res.json();
    console.log(data1);
     
        // userData : data1.data
    
    setPosts(data1.data);
    setLoading(false);
    }
    fetchPosts();
  },[]);
  console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)
  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>Dummy data</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pgination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div> 
  );
}

export default App;
