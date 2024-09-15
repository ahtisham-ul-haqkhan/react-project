import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function View() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:4000/api/postView1', {
          headers: {
            'Authorization': token,
          },
        });
        setPosts(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4">Latest Transactions</h4>
           
              <div className="table-responsive">
                <table className="table table-centered mb-0 align-middle table-hover table-nowrap">
                  <thead className="table-light">
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Start date</th>
                      <th style={{ width: 420 }}>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post, index) => (
                      <tr key={index}>
                        <td>{post.title}</td>
                        <td>{post.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link className='btn btn-info btn-sm' to="create">Add Post</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
