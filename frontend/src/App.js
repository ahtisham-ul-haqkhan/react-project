import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Homea from './pages/Homea';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './pages/layout';
import Post from './pages/Post/View';
import PostCreate from './pages/Post/Create';
import RefreshHandler from './RefreshHandler';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  // PrivateRouter for protecting routes
  const PrivateRouter = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <RefreshHandler setAuthenticated={setAuthenticated} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<PrivateRouter element={<Home />} />} />
                <Route path="/homea" element={<PrivateRouter element={<Homea />} />} />
                <Route path="/postsview" element={<PrivateRouter element={<Post />} />} />
                {/* <Route path="/create" element={<PrivateRouter element={<PostCreate />} />} /> */}
        <Route path="postsview/create" element={<PostCreate />} />

                {/* Add other routes that require layout here */}
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
