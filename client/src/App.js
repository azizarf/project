import React,{useState,useEffect} from 'react';
import BlogList from './BlogList';
import CreateBlog from './CreateBlog';
import axios from 'axios';


function App() { 
  const [blogs, setBlogs] = useState([]);
  const [update,setUpdate] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:4000/api/blog/all')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, [update]);
  const handleRemmove=async(id)=>{
    try {
      const res=axios.delete(`http://localhost:4000/api/blog/${id}`)
      console.log(res);
      setUpdate(!update)
    } catch (e) {
      console.log(e);
    }
  }
  const handleUpdae=async(id,body)=>{
    console.log(id);
    console.log(body);
    try {
      const res=await axios.patch(`http://localhost:4000/api/blog/${id}`,body)
      console.log(res);
      setUpdate(!update)
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = (event,title,content) => {
    event.preventDefault();
    axios
      .post('http://localhost:4000/api/blog/cre', { title, content })
      .then((response) => {
        setUpdate(!update)
        console.log('Blog post created:', response.data);
      })
      .catch((error) => {
        console.error('Error creating blog post:', error);
      });
  };
  return (
    <div className="App">
      <h1>My Blogging App</h1>
      <CreateBlog handleSubmit={handleSubmit} />
      <BlogList handleUpdae={handleUpdae} handleRemmove={handleRemmove} blogs={blogs} />
    </div>
  );
}

export default App;
