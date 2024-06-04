import React from 'react';
import PropTypes from 'prop-types';

const data =[{"name":"test1"},{"name":"test2"}];
const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);


const Product = () => (
  <div>
    Product 
    {listItems }
  </div>
);

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
