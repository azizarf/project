import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogList.css';

function BlogList({ blogs, handleRemmove, handleUpdae }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {blogs.map(blog => (
                    <div className='post'>
                        <li key={blog._id}>
                            <h3>{blog.title}</h3>
                            <p>{blog.content}</p>
                        </li>
                        <button onClick={() => handleRemmove(blog._id)}>Remove</button>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" >Update</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div className='inputs'>
                                            <input placeholder='title' onChange={ (e)=>setTitle(e.target.value)} />
                                            <input placeholder='content' onChange={ (event)=>setContent(event.target.value)}/>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleUpdae(blog._id,{title,content})}>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </ul>
        </div>
    );
}

export default BlogList;