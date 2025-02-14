import React from 'react';
import Product from './Product';

const ProductSection = ({ backgroundColor, products }) => {
  
  const sectionStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <section className="product-section" style={sectionStyle}>
      {products.map((prod, index) => (
        <Product
          key={index}
          image={prod.image}
          name={prod.name}
          price={prod.price}
        />
      ))}
    </section>
  );
};

export default ProductSection;