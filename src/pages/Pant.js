import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Pant() {
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (price) => {
    setTotalPrice(totalPrice + price);
  };

  const deleteFromCart = (price) => {
    if (totalPrice > 0) {
      setTotalPrice(totalPrice - price);
    }
  };

  return (
    <div>
      <Navbar />
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f4f4f4",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {/* Card 1 */}
          <div
            className="card"
            style={{
              width: "18rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src="/products/pa.webp"
              className="card-img-top"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div className="card-body" style={{ padding: "15px", textAlign: "center" }}>
              <h5
                className="card-title"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}
              >
                Classic Pants
              </h5>
              <p
                className="card-text"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  color: "#ff5722",
                  margin: "10px 0",
                }}
              >
                Price: $15
              </p>
              <button
                className="btn btn-primary"
                style={{ width: "130px", margin: "5px" }}
                onClick={() => addToCart(15)}
              >
                Add to cart
              </button>
              <button
                className="btn btn-danger"
                style={{ width: "145px", margin: "5px" }}
                onClick={() => deleteFromCart(15)}
              >
                Delete from cart
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="card"
            style={{
              width: "18rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src="/products/pb.webp"
              className="card-img-top"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div className="card-body" style={{ padding: "15px", textAlign: "center" }}>
              <h5
                className="card-title"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}
              >
                Casual Pants
              </h5>
              <p
                className="card-text"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  color: "#ff5722",
                  margin: "10px 0",
                }}
              >
                Price: $17
              </p>
              <button
                className="btn btn-primary"
                style={{ width: "130px", margin: "5px" }}
                onClick={() => addToCart(17)}
              >
                Add to cart
              </button>
              <button
                className="btn btn-danger"
                style={{ width: "145px", margin: "5px" }}
                onClick={() => deleteFromCart(17)}
              >
                Delete from cart
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="card"
            style={{
              width: "18rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src="/products/pc.avif"
              className="card-img-top"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div className="card-body" style={{ padding: "15px", textAlign: "center" }}>
              <h5
                className="card-title"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}
              >
                Trendy Pants
              </h5>
              <p
                className="card-text"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  color: "#ff5722",
                  margin: "10px 0",
                }}
              >
                Price: $19
              </p>
              <button
                className="btn btn-primary"
                style={{ width: "130px", margin: "5px" }}
                onClick={() => addToCart(19)}
              >
                Add to cart
              </button>
              <button
                className="btn btn-danger"
                style={{ width: "145px", margin: "5px" }}
                onClick={() => deleteFromCart(19)}
              >
                Delete from cart
              </button>
            </div>
          </div>
        </div>

        {/* Total price */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h4 style={{ fontFamily: "'Roboto', sans-serif" }}>
            Total Price: <span style={{ color: "#ff5722" }}>{totalPrice}$</span>
          </h4>
        </div>
      </section>
    </div>
  );
}

export default Pant;
