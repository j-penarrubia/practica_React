import React from 'react';

const Product = ({ image, name, price }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="product-name">{name}</div>
      <div className="product-price">{price}</div>
    </div>
  );
};

export default Product;