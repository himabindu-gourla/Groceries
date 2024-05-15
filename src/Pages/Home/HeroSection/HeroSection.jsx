// import React from 'react'
// import { useState ,useEffect } from 'react';
// import "./HeroSection.css"
// // import Navbar from '../../../Components/Navbar/Navbar';
// import { useShop } from '../../../Components/Context/Shop-Context';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HeroSection = () => {
//     const [data, setData] = useState([]);
//     const [number, setNumber] = useState(2);
//     const { addToCart, cartItem } = useShop();
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch("/product.json");
//           const jsonData = await response.json();
//           const dataArray = Object.entries(jsonData).map(([key, value]) => ({
//             key,
//             value,
//           }));
//           setData(dataArray[0].value[number]);
          
//         } catch (error) {
//           console.error(error);
//           setData([]);
//         }
//       };
//       fetchData();
//     }, [number]);
//     //   console.log(data)
//     Object.entries(data).map(([key, value]) => {
//       Object.entries(value).map(([key, value]) => {
//         console.log(value);
        
//       });
//     });
//     var settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 2
//       };
//     return (
//       <>
//         {/* <Navbar /> */}
//         <div className="fashion" style={{ backgroundColor:"black"}}>
//         {Object.entries(data).map(([key, value]) => (
//           <div style={{ width: "90vw" }}>
//             <Slider {...settings}>
//               {Object.entries(value).map(
//                 ([key, value]) =>
//                   value.products &&
//                   value.products.map((item) => (
//                     <div
//                       className="slider"
//                       style={{
//                         width: "100%",
//                         display: "flex",
                       
//                       }}
//                     >
//                       <div style={{ display: "flex" }}>
//                         <img
//                           src={item.catImg}
//                           style={{
//                             width: "400px",
//                             height: "400px",
//                             objectFit: "cover",
//                           }}
//                         />
//                       </div>
//                     </div>
//                   ))
//               )}
//             </Slider>
//           </div>
//         ))}
//               </div>
  
                   
        
//       </>
//     );
//   };

// export default HeroSection
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useShop } from "../../../Components/Context/Shop-Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";

const HeroSection = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(2);
  const { addToCart, cartItem } = useShop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
        const jsonData = await response.json();
        const dataArray = Object.entries(jsonData).map(([key, value]) => ({
          key,
          value,
        }));
        setData(dataArray[0].value[number]);
      } catch (error) {
        console.error(error);
        setData([]);
      }
    };
    fetchData();
  }, [number]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {Object.entries(data).map(([key, value]) =>
          value.products &&
          value.products.map((item) => (
            <div className="slider-item" key={item.id}>
              <img
                src={item.catImg}
                alt={item.productName}
                className="slider-image"
              />
              <div className="slider-content">
                <h3>{item.productName}</h3>
                <p>{item.description}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
};

export default HeroSection;
// // import React, { useState, useEffect } from "react";
// // import Slider from "react-slick";
// // import { useShop } from "../../../Components/Context/Shop-Context";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import "./HeroSection.css";

// // const HeroSection = () => {
// //   const [data, setData] = useState([]);
// //   const { addToCart } = useShop();

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch("/product.json");
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch data");
// //         }
// //         const jsonData = await response.json();
// //         const dataArray = Object.entries(jsonData).map(([key, value]) => ({
// //           key,
// //           value,
// //         }));
// //         setData(dataArray[0]?.value?.[2]?.products || []);
// //       } catch (error) {
// //         console.error("Error fetching product data:", error);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   var settings = {
// //     dots: false,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 4,
// //     slidesToScroll: 1,
// //   };

// //   return (
// //     <div className="hero-section">
// //       <Slider {...settings}>
// //         {data.map((item) => (
// //           <div className="slider-item" key={item.id}>
// //             <img
// //               src={item.catImg}
// //               alt={item.productName}
// //               className="slider-image"
// //             />
// //             <div className="slider-content">
// //               <h3>{item.productName}</h3>
// //               <p>{item.description}</p>
// //               <button onClick={() => addToCart(item)}>Add to Cart</button>
// //             </div>
// //           </div>
// //         ))}
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default HeroSection;
