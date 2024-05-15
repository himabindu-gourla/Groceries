

import React, { useState, useEffect } from "react";
import axios from "axios";
// import Navbar from "../../Components/Navbar/Navbar";
import "./Products.css";
// import { useCart } from "../../Components/Context/Shop-Context";
// import Cart from "../CartPage/Cart";
// import Category from "../ProductList/ProductList";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);

  // const {addToCart,cartItem}=useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./product.json");
        if (Array.isArray(response.data.productData)) {
          setProductData(response.data.productData);
        } else {
          console.error(
            "Product data is not an array:",
            response.data.productData
          );
        }
        // console.log(response)
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  // const data = productData.filter(category => category.cat_name === "groceries");

  return (
    <div>
      {/* <Navbar  productData={productData}/> */}
      {productData.map((category) => (
        <div key={category.id}>
          <h2>{category.cat_name}</h2>
          <img src={category.image} alt={category.groceries} />
          {/* {console.log(category)} */}
          {console.log(productData[0])}
          {/* {productData.map(item=> console.log(item))} */}
          {/* {console.log(productData[1])} */}
          {console.log(category.items)}
          {category.items.map((item) => (
            <div className="category" key={item.cat_name}>
              {Array.isArray(item.products) ? (
                item.products.map((product) => (
                  <div className="products" key={product.id}>
                    <h3>{product.productName}</h3>
                    <p>Price: {product.price}</p>
                    <p>Old Price: {product.oldPrice}</p>
                    <p>Weight: {product.weight.join(", ")}</p>
                    <img
                      src={product.catImg}
                      alt={product.productName}
                      style={{ width: "150px" }}
                    />
                    <p>Discount: {product.discount}%</p>
                    <p>Brand: {product.brand}</p>
                    <p>Type: {product.type}</p>
                    <p>Rating: {product.rating}</p>
                    {/* <p>Description: {product.description}</p> */}
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                  </div>
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Products;



// Products.js
// import React, { useContext } from 'react';
// import ProductDataContext from '../../Components/Context/ProductDataContext';

// const Products = () => {
//   const productData = useContext(ProductDataContext);

//   return (
//     <div>
//       {productData.map(category => (
//         <div key={category.id}>
//           <h2>{category.cat_name}</h2>
//           {category.items.map(item => (
//             <div className="category" key={item.cat_name}>
//               {Array.isArray(item.products) ? (
//                 item.products.map(product => (
//                   <div className="products" key={product.id}>
//                     {/* Render product details */}
//                   </div>
//                 ))
//               ) : (
//                 <p>No products available</p>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;
