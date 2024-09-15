import React from 'react'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
function layout({children}) {
  return (
  <div>
     <div>
  <div id="layout-wrapper">
  <Navbar/>
    {/* ========== Left Sidebar Start ========== */}
<Sidebar />
    {/* Left Sidebar End */}
    {/* ============================================================== */}
    {/* Start right Content here */}
    {/* ============================================================== */}
    <div className="main-content">
     {children}
   <Footer />
    </div>
  </div>

</div>

</div>

  )
}

export default layout