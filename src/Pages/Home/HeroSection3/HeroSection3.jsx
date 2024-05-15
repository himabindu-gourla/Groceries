import React, { useState, useEffect } from "react";
import axios from "axios";
// import Navbar from "../../Components/Navbar/Navbar";
import { useShop } from "../../../Components/Context/Shop-Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./Groceries.css";

const Groceries = () => {
  const [groceriesData, setGroceriesData] = useState([]);
  const { addToCart } = useShop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./product.json");
        if (Array.isArray(response.data.productData)) {
          const groceriesCategory = response.data.productData.find(
            (category) => category.cat_name === "Groceries"
          );
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* <Navbar /> */}
      <h2>Groceries</h2>
      <Slider {...settings}>
        {groceriesData.map((item) => (
          <div className="grocery-item" key={item.cat_name}>
            {Array.isArray(item.products) ? (
              item.products.map((product) => (
                <div className="product" key={product.id}>
                  <h3>{product.productName}</h3>
                  <img src={product.catImg} alt={product.productName} />
                  <p>Price: {product.price}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              ))
            ) : (
              <p>No groceries available</p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Groceries;
