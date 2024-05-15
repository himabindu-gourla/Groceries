import React from 'react'
import "./Footer.css"
import app from './assets/appicon.jpg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="all">
            <h2>All Categories</h2>
            <p>Grocery</p>
            <p>Electronics</p>
            <p>Fashion</p>
            <p>Beauty</p>
            <p>Home &Kitchen</p>
            <p>Premium Fruits</p>
            <p>Books</p>
            <p>Furniture</p>
            
        </div>
        <div className="ca">
<h2>Customer Account</h2>
<p>My Account</p>
<p>Wishlist</p>
<p>Payment Methods</p>
<p>Delivery Addresses</p>
<p>My Orders</p>
<p>wallet</p>
        </div>
        <div className="help">
            <h2>Help & Support</h2>
            <p>About us</p>
            <p>FAQ</p>
            <p>Terms & Conditions</p>
            <p>Privacy and Policy</p>
            <p>E-Waste policy</p>
            <p>Cancellation & Retturn Policy</p>
            <p>Shipping & Delivery Policy</p>
            <p></p>
            <p></p>
        </div>
        <div className="contact">
            <h2>Contact Us</h2>
            <p>whatsapp us:123456678</p>
            <p>call us :1800 890 1222</p>
            <p>8:00 AMM to 8:00PM,365days</p>
        </div>
        <div className="download">
            <h2>Download the app</h2>
            <img src={app} alt="" />
        </div>
    </div>
  )
}

export default Footer