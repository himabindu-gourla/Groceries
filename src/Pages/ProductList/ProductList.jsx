import React, { useState } from 'react';

const Category = ({ category }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>{category.cat_name}</h2>
      {category.items.map(item => (
        <div key={item.cat_name}>
          <h3>{item.cat_name}</h3>
          {item.products.map(product => (
            <div key={product.id}>
              <h4>{product.productName}</h4>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Category;
