import React, { useState, useEffect } from "react";
import axios from "axios";
import { useShop } from "../../../Components/Context/Shop-Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSection2.css'

const Electronics = () => {
  const [electronicsData, setElectronicsData] = useState([]);
  const { addToCart } = useShop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./product.json");
        if (Array.isArray(response.data.productData)) {
          const electronicsCategory = response.data.productData.find(category => category.cat_name === "Electronics");
          if (electronicsCategory && Array.isArray(electronicsCategory.items)) {
            setElectronicsData(electronicsCategory.items);
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
    slidesToScroll: 1
  };

  return (
    <div>
      <h2>Electronics</h2>
      <Slider {...settings}>
  {electronicsData.map((item) => (
    <div key={item.cat_name}>
      {Array.isArray(item.products) && item.products.length > 0 ? (
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
</Slider>

    </div>
  );
};

export default Electronics;
