// import React, { useState, useEffect } from "react";
// import Navbar from "../../Components/Navbar/Navbar";
// import "./Groceries.css";
// import { useShop } from "../../Components/Context/Shop-Context";

// const Groceries = () => {
//   const [data, setData] = useState([]);
//   const [number, setNumber] = useState(0);
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
//         //console.log(dataArray[0]) // array[0] means data of products and 1 for reviews
//         // console.log(dataArray[0].value[number]) // number indicates ProductList(G,E,F)
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
//       // Value gives the data list of "G"
//       //value.cat_name gives the only list of "G"
//     });
//   });
//   return (
//     <>
//       <Navbar />
//       <div className="groceries">
//         {Object.entries(data).map(([key, value]) => (
//           <div key={key} className="list">
//             <h1>{key === "cat_name" && value}</h1>
//             {Object.entries(value).map(([key, value]) => (
//               <div className="groceries-list">
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

//             {/* {Array.isArray(data) && data.map(([key, value]) => (
//   <div key={key} className="list">
//     <h1>{key === "cat_name" && value}</h1>
//     {Array.isArray(value) && value.map((item) => (
//       <div className="groceries-list">
//         {item.products &&
//           item.products.map((product) => (
//             <div className="list-items">
//               <img src={product.catImg} alt="" />
//               <h4>{product.productName}</h4>
//               <p>{product.description}</p>
//               {/* <h4>Rating : {product.rating}</h4> */}
//               {/* <button onClick={() => addToCart(product)}>
//                 Add to Cart
//               </button> */}
//             {/* </div> */}
//           {/* ))} */}
//       {/* </div> */}
  
//           </div>
       
      
//     </>
//   );
// };

// export default Groceries;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import { useShop } from "../../Components/Context/Shop-Context";


const Groceries = () => {
  const [groceriesData, setGroceriesData] = useState([]);
  // const [cart, setCart] = useState([]);
  const { addToCart } = useShop();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./product.json");
        if (Array.isArray(response.data.productData)) {
          const groceriesCategory = response.data.productData.find(category => category.cat_name === "groceries");
          if (groceriesCategory && Array.isArray(groceriesCategory.items)) {
            setGroceriesData(groceriesCategory.items);
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
      <h2>Groceries</h2>
      {groceriesData.map((item) => (
        <div className="category" key={item.cat_name}>
          {Array.isArray(item.products) ? (
            item.products.map((product) => (
              <div className="products" key={product.id}>
                <h3>{product.productName}</h3>
              <img src={product.catImg} alt="" width={200}/>

                <p>Price: {product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No groceries available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Groceries;
