// import React, { useState, useEffect } from "react";
// import Navbar from "../../Components/Navbar/Navbar";
// import "./Electronics.css";
// import { useShop } from "../../Components/Context/Shop-Context";

// const Electronics = () => {
//   const [data, setData] = useState([]);
//   const [number, setNumber] = useState(1);
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
//       <div className="electronics">
//         {Object.entries(data).map(([key, value]) => (
//           <div key={key} className="list">
//             <h1>{key === "cat_name" && value}</h1>
//             {Object.entries(value).map(([key, value]) => (
//               <div className="electronics-list">
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

// export default  Electronics;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import { useShop } from "../../Components/Context/Shop-Context";


const Electronics = () => {
  const [ElectronicsData, setElectronicsData] = useState([]);
  // const [cart, setCart] = useState([]);
  const { addToCart } = useShop();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./product.json");
        if (Array.isArray(response.data.productData)) {
          const ElectronicsCategory = response.data.productData.find(category => category.cat_name === "Electronics");
          if (ElectronicsCategory && Array.isArray(ElectronicsCategory.items)) {
            setElectronicsData(ElectronicsCategory.items);
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
      <h2>Electronics</h2>
      {ElectronicsData.map((item) => (
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
            <p>No Electronics available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Electronics;
