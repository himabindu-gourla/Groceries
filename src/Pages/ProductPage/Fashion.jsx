// import React, { useState, useEffect } from "react";
// import Navbar from "../../Components/Navbar/Navbar";
// import "./Fashion.css";
// import { useShop } from "../../Components/Context/Shop-Context";

// const Groceries = () => {
//   const [data, setData] = useState([]);
//   const [number, setNumber] = useState(2);
//   const { addToCart, cartItem } = useShop();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/product.json");
//         const jsonData = await response.json();
//         const dataArray = Object.entries(jsonData).map(([key, value]) => ({
//           key,
//           value,
//         }));
//         setData(dataArray[0].value[number]);
        
//       } catch (error) {
//         console.error(error);
//         setData([]);
//       }
//     };
//     fetchData();
//   }, [number]);
//   //   console.log(data)
//   Object.entries(data).map(([key, value]) => {
//     Object.entries(value).map(([key, value]) => {
//       console.log(value);
      
//     });
//   });
//   return (
//     <>
//       <Navbar />
//       <div className="fashion">
//         {Object.entries(data).map(([key, value]) => (
//           <div key={key} className="list">
//             <h1>{key === "cat_name" && value}</h1>
//             {Object.entries(value).map(([key, value]) => (
//               <div className="Fashion-list">
//                 {value.products &&
//                   value.products.map((item) => (
//                     <div className="list-items">
//                       <img src={item.catImg} alt="" width={200} />
//                       <h4>{item.productName}</h4>
//                       <p>{item.description}</p>
//                        <h4>Rating : {item.rating}</h4> 
//                        <button onClick={() => addToCart(item)}>
//                         Add to Cart
//                       </button>
//                     </div>
//                   ))}
//               </div>
//             ))} 
//             </div>
//         ))}

        
  
//           </div>
       
      
//     </>
//   );
// };

// export default Groceries;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../../Components/Navbar/Navbar";
// import "./Fashion.css";
// import { useShop } from "../../Components/Context/Shop-Context";

// const Fashion = () => {
//   const [fashionProducts, setFashionProducts] = useState([]);
//   const { addToCart } = useShop();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/product.json");
//         if (response.data && Array.isArray(response.data.fashionProducts)) {
//           setFashionProducts(response.data.fashionProducts);
//         } else {
//           console.error("Fashion products data is missing or not an array");
//         }
//       } catch (error) {
//         console.error("Error fetching fashion products:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <h2>Fashion Products</h2>
//       <div className="fashion-products">
//         {fashionProducts.map((product) => (
//           <div key={product.id} className="fashion-product">
//             <h3>{product.productName}</h3>
//             <p>Price: {product.price}</p>
//             <p>Brand: {product.brand}</p>
//             <p>Type: {product.type}</p>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Fashion;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import { useShop } from "../../Components/Context/Shop-Context";

const Fashion = () => {
  const [fashionData, setFashionData] = useState([]);
  // const [cart, setCart] = useState([]);
  const { addToCart } = useShop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./product.json");
        if (Array.isArray(response.data.productData)) {
          const fashionCategory = response.data.productData.find(category => category.cat_name === "Fashion");
          if (fashionCategory && Array.isArray(fashionCategory.items)) {
            setFashionData(fashionCategory.items);
          } else {
            console.error("Fashion category or its items are missing or not in the expected format:", fashionCategory);
          }
        } else {
          console.error("Product data is not an array:", response.data.productData);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  return (
    <div>
      <Navbar />
      <h2>Fashion</h2>
      {fashionData.map((item) => (
        <div className="category" key={item.cat_name}>
          {Array.isArray(item.products) ? (
            item.products.map((product) => (
              <div className="products" key={product.id}>
                <h3>{product.productName}</h3>
                <img src={product.catImg} alt={product.productName} width={200} />
                <p>Price: {product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No fashion products available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Fashion;
