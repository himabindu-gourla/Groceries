
// import React from "react";
// import { useState } from "react";
// import Dropdown from "react-bootstrap/Dropdown";
// import "bootstrap/dist/css/bootstrap.css";

// const Navbar = () => {
//   const[data , setData]=useState([])
//   const filter =(e)=>{
//     setData(data.filter(f=> f.Item.toLowerCase().includes(Event.target.value)))
//   }
//   return (
//     <nav>
//       <div className="nav-wrapper d-flex gap-5 justify-content-center">
//         <form>
//           <div className="input-field">
//             <input id="search" type="search" onChange={filter}/>
//             <label className="label-icon" htmlFor="search">
//               <i className="material-icons">search</i>
//             </label>
//           </div>
//         </form>
// {/* 
//         <Dropdown>
//           <Dropdown.Toggle variant="success" id="dropdown-basic">
//             PRODUCTS
//           </Dropdown.Toggle>

//           <Dropdown.Menu>
//           <Dropdown.Item href="/all">All</Dropdown.Item>

//             <Dropdown.Item>Groceries</Dropdown.Item>
//             <Dropdown.Item>Electronics</Dropdown.Item>
//             <Dropdown.Item>Fashion</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>*/}

//         <div></div>
//       </div> 
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import {useShop} from '../Context/Shop-Context'
// import App from "../../App";
// import Products from "../../Pages/ProductPage/Products";

const Navbar = () => {
 const {cartItems}=useShop()
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  
  //   if (Array.isArray(productData)) {
  //     const results = productData.filter(product =>
  //       product.productName.includes(searchTerm.toLowerCase())
  //     );
  //     setSearchResults(results);
  //   } else {
  //     console.error("productData is undefined or not an array.");
  //   }
  // };

 

  
  return (
    <nav className="navbar">
      <div className="navbar-container">
       <h2>SMART</h2>

       
      <form >
        <input
          type="text"
          placeholder="Search for a product..."
          // value={searchTerm}
          // onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {/* <ul>
        {searchResults.map(product => (
          <li key={product.id}>
            <img src={product.catImg} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Discount: {product.discount}%</p>
            <p>Rating: {product.rating}</p>
          </li>
        ))}
      </ul> */}

       
        <div className="dropdown-container">
          <button className="dropdown-button">Products</button>
          <div className="dropdown-content">
          <Link to='/Groceries'>Groceries</Link>
          <Link to='/Fashion'>Fashion</Link>
          <Link to='/Electronics'>Electronics</Link>

          </div>
        </div>

        <div className="links-container">
          <Link to="/cart" >Cart <span>{cartItems.length}</span></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

