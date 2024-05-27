// import React from 'react';
// import PropTypes from 'prop-types';


// const Layout = () => (
//   <div>
//     Layout Component
//   </div>
// );

// Layout.propTypes = {};

// Layout.defaultProps = {};

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/category">category</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/questions">any questions?</Link>
          </li>
          <li>
            <Link to="/helpCenter">help center</Link>
          </li>
          <li>
            <Link to="/schedule">schedule</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
