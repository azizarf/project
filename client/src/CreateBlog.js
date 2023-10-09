import React, { useState } from 'react';
import './CreateBlog.css'; 

function CreateBlog({handleSubmit}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

 

  return (
    <div>
      <h2>Create New Blog Post</h2>
      <form onSubmit={(e)=>{handleSubmit(e,title,content);setContent("");setTitle("")}}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={handleContentChange} />
        </div>
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;