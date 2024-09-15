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
        const response = await axios.get("http://localhost:4000/api/postView", {
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
   <div className="page-content">
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0">Dashboard</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><a href="javascript:void(0);">Upcube</a></li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
 
        <div className="row">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-body pb-0">
                <div className="float-end d-none d-md-inline-block">
                  <div className="dropdown card-header-dropdown">
                    <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="text-muted">Report<i className="mdi mdi-chevron-down ms-1" /></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">Export</a>
                      <a className="dropdown-item" href="#">Import</a>
                      <a className="dropdown-item" href="#">Download Report</a>
                    </div>
                  </div>
                </div>
                <h4 className="card-title mb-4">Email Sent</h4>
                <div className="text-center pt-3">
                  <div className="row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="d-inline-flex">
                        <h5 className="me-2">25,117</h5>
                        <div className="text-success font-size-12">
                          <i className="mdi mdi-menu-up font-size-14"> </i>2.2 %
                        </div>
                      </div>
                      <p className="text-muted text-truncate mb-0">Marketplace</p>
                    </div>{/* end col */}
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="d-inline-flex">
                        <h5 className="me-2">$34,856</h5>
                        <div className="text-success font-size-12">
                          <i className="mdi mdi-menu-up font-size-14"> </i>1.2 %
                        </div>
                      </div>
                      <p className="text-muted text-truncate mb-0">Last Week</p>
                    </div>{/* end col */}
                    <div className="col-sm-4">
                      <div className="d-inline-flex">
                        <h5 className="me-2">$18,225</h5>
                        <div className="text-success font-size-12">
                          <i className="mdi mdi-menu-up font-size-14"> </i>1.7 %
                        </div>
                      </div>
                      <p className="text-muted text-truncate mb-0">Last Month</p>
                    </div>{/* end col */}
                  </div>{/* end row */}
                </div>
              </div>
              <div className="card-body py-0 px-2">
                <div id="area_chart" className="apex-charts" dir="ltr" />
              </div>
            </div>{/* end card */}
          </div>{/* end col */}

          <div className="col-xl-6">
            <div className="card">
              <div className="card-body pb-0">
                <div className="float-end d-none d-md-inline-block">
                  <div className="dropdown">
                    <a className="text-reset" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="text-muted">This Years<i className="mdi mdi-chevron-down ms-1" /></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">Today</a>
                      <a className="dropdown-item" href="#">Last Week</a>
                      <a className="dropdown-item" href="#">Last Month</a>
                      <a className="dropdown-item" href="#">This Year</a>
                    </div>
                  </div>
                </div>
                <h4 className="card-title mb-4">Revenue</h4>
                <div className="text-center pt-3">
                  <div className="row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div>
                        <h5>17,493</h5>
                        <p className="text-muted text-truncate mb-0">Marketplace</p>
                      </div>
                    </div>{/* end col */}
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div>
                        <h5>$44,960</h5>
                        <p className="text-muted text-truncate mb-0">Last Week</p>
                      </div>
                    </div>{/* end col */}
                    <div className="col-sm-4">
                      <div>
                        <h5>$29,142</h5>
                        <p className="text-muted text-truncate mb-0">Last Month</p>
                      </div>
                    </div>{/* end col */}
                  </div>{/* end row */}
                </div>
              </div>
              <div className="card-body py-0 px-2">
                <div id="column_line_chart" className="apex-charts" dir="ltr" />
              </div>
            </div>{/* end card */}
          </div>{/* end col */}
        </div>{/* end row */}

        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-end">
                  <a href="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="javascript:void(0);" className="dropdown-item">Sales Report</a>
                    <a href="javascript:void(0);" className="dropdown-item">Export Report</a>
                    <a href="javascript:void(0);" className="dropdown-item">Profit</a>
                    <a href="javascript:void(0);" className="dropdown-item">Action</a>
                  </div>
                </div>
                <h4 className="card-title mb-4">Latest Transactions</h4>
                <div className="table-responsive">
                  <table className="table table-centered mb-0 align-middle table-hover table-nowrap">
                    <thead className="table-light">
                      <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th style={{ width: 120 }}>Salary</th>
                      </tr>
                    </thead>{/* end thead */}
                    <tbody>
                    { products &&  products.map((product, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <div className={`font-size-13 ${product.status === 'Active' ? 'text-success' : 'text-warning'}`}>
                  <i className={`ri-checkbox-blank-circle-fill font-size-10 ${product.status === 'Active' ? 'text-success' : 'text-warning'} align-middle me-2`} />
                  {product.status}
                </div>
              </td>
              <td>{product.age}</td>
              <td>{product.startDate}</td>
              <td>${product.salary}</td>
            </tr>
          ))}
                
                    </tbody>
                  </table> 
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="card">
              <div className="card-body">
                <div className="float-end">
                  <select className="form-select shadow-none form-select-sm">
                    <option selected>Apr</option>
                    <option value={1}>Mar</option>
                    <option value={2}>Feb</option>
                    <option value={3}>Jan</option>
                  </select>
                </div>
                <h4 className="card-title mb-4">Monthly Earnings</h4>
                <div className="row">
                  <div className="col-4">
                    <div className="text-center mt-4">
                      <h5>3475</h5>
                      <p className="mb-2 text-truncate">Market Place</p>
                    </div>
                  </div>{/* end col */}
                  <div className="col-4">
                    <div className="text-center mt-4">
                      <h5>458</h5>
                      <p className="mb-2 text-truncate">Last Week</p>
                    </div>
                  </div>{/* end col */}
                  <div className="col-4">
                    <div className="text-center mt-4">
                      <h5>9062</h5>
                      <p className="mb-2 text-truncate">Last Month</p>
                    </div>
                  </div>{/* end col */}
                </div>{/* end row */}
                <div className="mt-4">
                  <div id="donut-chart" className="apex-charts" />
                </div>
              </div>
            </div>{/* end card */}
          </div>{/* end col */}
        </div>{/* end row */}
      </div>
    </div>
    </div>

  );
}

export default Home;
