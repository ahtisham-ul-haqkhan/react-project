import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

function Sidebar() {

  const [loggedInUser, setLoginInfo] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoginInfo(user);
    }
  }, []);
  return (
    <div className="vertical-menu">
      <div className="h-100">
        {/* User details */}
        <div className="user-profile text-center mt-3">
          <div>
            <img src="assets/images/users/avatar-1.jpg" alt="User Avatar" className="avatar-md rounded-circle" />
          </div>
          <div className="mt-3">
          <h4 className="font-size-16 mb-1">{`Welcome, ${loggedInUser}!`}</h4>
            <span className="text-muted">
              <i className="ri-record-circle-line align-middle font-size-14 text-success" /> Online
            </span>
          </div>
        </div>

        {/* Sidemenu */}
        <div id="sidebar-menu">
          {/* Left Menu Start */}
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menu</li>
            <li>
              <a href="index.html" className="waves-effect">
                <i className="ri-dashboard-line" />
                <span className="badge rounded-pill bg-success float-end">3</span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
            <Link className='waves-effect' to="/postsview">
      <i className="ri-calendar-2-line" />
      <span>Posts</span>
    </Link>
            </li>
            <li>
          <Link className="has-arrow waves-effect" to="#">
            <i className="ri-mail-send-line" />
            <span>Email</span>
          </Link>
          <ul className="sub-menu" aria-expanded="false">
            <li><Link to="/email-inbox">Inbox</Link></li>
            <li><Link to="/email-read">Read Email</Link></li>
          </ul>
        </li>

   
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
