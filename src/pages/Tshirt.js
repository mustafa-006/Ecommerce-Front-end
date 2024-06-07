import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Tshirt() {
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (price) => {
    setTotalPrice(totalPrice + price);
  };

  const deleteFromCart = (price) => {
    if(totalPrice > 0)
    setTotalPrice(totalPrice - price);
   
  };

  return (
    <div>
      <Navbar />
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#f4f4f4", padding: "20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {/* Card 1 */}
          <div className='card' style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden" }}>
            <img src='/products/ta.webp' className='card-img-top' style={{ width: "100%", height: "300px", objectFit: "cover" }} />
            <div className='card-body' style={{ padding: "15px", textAlign: "center" }}>
              <h5 className='card-title' style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>T-shirts without stickers</h5>
              <p className='card-text' style={{ fontFamily: "'Roboto', sans-serif", color: "#ff5722", margin: "10px 0" }}>Price: $7</p>
              <button className='btn btn-primary' style={{ width: "130px", margin: "5px" }} onClick={() => addToCart(7)}>Add to cart</button>
              <button className='btn btn-danger' style={{ width: "145px", margin: "5px" }} onClick={() => deleteFromCart(7)}>Delete from cart</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className='card' style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden" }}>
            <img src='/products/tb.webp' className='card-img-top' style={{ width: "100%", height: "300px", objectFit: "cover" }} />
            <div className='card-body' style={{ padding: "15px", textAlign: "center" }}>
              <h5 className='card-title' style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>Indian T-shirts</h5>
              <p className='card-text' style={{ fontFamily: "'Roboto', sans-serif", color: "#ff5722", margin: "10px 0" }}>Price: $9.98</p>
              <button className='btn btn-primary' style={{ width: "130px", margin: "5px" }} onClick={() => addToCart(9.98)}>Add to cart</button>
              <button className='btn btn-danger' style={{ width: "145px", margin: "5px" }} onClick={() => deleteFromCart(9.98)}>Delete from cart</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className='card' style={{ width: "18rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px", overflow: "hidden" }}>
            <img src='/products/tc.webp' className='card-img-top' style={{ width: "100%", height: "300px", objectFit: "cover" }} />
            <div className='card-body' style={{ padding: "15px", textAlign: "center" }}>
              <h5 className='card-title' style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}>T-shirt with stickers</h5>
              <p className='card-text' style={{ fontFamily: "'Roboto', sans-serif", color: "#ff5722", margin: "10px 0" }}>Price: $11</p>
              <button className='btn btn-primary' style={{ width: "130px", margin: "5px" }} onClick={() => addToCart(11)}>Add to cart</button>
              <button className='btn btn-danger' style={{ width: "145px", margin: "5px" }} onClick={() => deleteFromCart(11)}>Delete from cart</button>
            </div>
          </div>
        </div>

        {/* Total price */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h4 style={{ fontFamily: "'Roboto', sans-serif" }}>Total Price: <span style={{ color: "#ff5722" }}>{totalPrice}$</span></h4>
        </div>
      </section>
    </div>
  )
}

export default Tshirt;

