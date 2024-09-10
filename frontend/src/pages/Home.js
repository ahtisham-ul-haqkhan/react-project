import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../toats';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

function Home() {
  const [loggedInUser, setLoginInfo] = useState('');
  const [products, setProducts] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setLoginInfo(localStorage.getItem('loggedInUser')); 
  }, []); 

  const handeLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess("User Logout");
    navigate('/login');
    setTimeout(() => {
    },1000)
  }

  useEffect(() => {
  const fetchProducts = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get("https://deploy-mern-app-1-api.vercel.app/products", {
            headers: {
                'Authorization': token
            }
        });

        const result = response.data;
        console.log(result);
        setProducts(result);
    } catch (err) {
        console.error('Error fetching products:', err);
    }
}

    fetchProducts();
}, []);
  return (
    <div>
      <h1>{`Welcome, ${loggedInUser}!`}</h1>
      <button onClick={handeLogout}>Logout</button>
      <div>
                {
                    products && products.map((item, index) => (
                        <ul key={index}>
                            <span>{item.name} : {item.price}</span>
                        </ul>
                    ))
                }
            </div>
      <ToastContainer />
    </div>

  );
}

export default Home;
