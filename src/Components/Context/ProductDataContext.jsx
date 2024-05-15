// ProductDataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductDataContext = createContext();

export const ProductDataProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('./product.json');
        if (Array.isArray(response.data.productData)) {
          setProductData(response.data.productData);
        } else {
          console.error('Product data is not an array:', response.data.productData);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductDataContext.Provider value={productData}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductDataContext;
