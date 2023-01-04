import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}

          <Outlet></Outlet>
          {/* <h1>
            Welcome Here Let's make your portfolio enrich with more world
            revolutionary coin's!
          </h1> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-secondary drawer-button lg:hidden mt-6"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 lg:w-80 bg-primary text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard/order">Order </Link>
            </li>
            <li>
              <Link>Order </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
