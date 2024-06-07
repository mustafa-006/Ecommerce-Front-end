import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Jacket() {
  const [totalPrice, setTotalPrice] = useState(0);

  const add = (price) => {
    setTotalPrice(totalPrice + price);
  };

  const remove = (price) => {
    if (totalPrice - price >= 0) {
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
              src="/products/ja.webp"
              className="card-img-top"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div className="card-body" style={{ padding: "15px", textAlign: "center" }}>
              <h5
                className="card-title"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}
              >
                T-shirts without stickers
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
                onClick={() => add(15)}
              >
                Add to cart
              </button>
              <button
                className="btn btn-danger"
                style={{ width: "145px", margin: "5px" }}
                onClick={() => remove(15)}
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
              src="/products/jb.webp"
              className="card-img-top"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div className="card-body" style={{ padding: "15px", textAlign: "center" }}>
              <h5
                className="card-title"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}
              >
                Indian T-shirts
              </h5>
              <p
                className="card-text"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  color: "#ff5722",
                  margin: "10px 0",
                }}
              >
                Price: $19.60
              </p>
              <button
                className="btn btn-primary"
                style={{ width: "130px", margin: "5px" }}
                onClick={() => add(19.60)}
              >
                Add to cart
              </button>
              <button
                className="btn btn-danger"
                style={{ width: "145px", margin: "5px" }}
                onClick={() => remove(19.60)}
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
              src="/products/jc.webp"
              className="card-img-top"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div className="card-body" style={{ padding: "15px", textAlign: "center" }}>
              <h5
                className="card-title"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "bold" }}
              >
                T-shirt with stickers
              </h5>
              <p
                className="card-text"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  color: "#ff5722",
                  margin: "10px 0",
                }}
              >
                Price: $22
              </p>
              <button
                className="btn btn-primary"
                style={{ width: "130px", margin: "5px" }}
                onClick={() => add(22)}
              >
                Add to cart
              </button>
              <button
                className="btn btn-danger"
                style={{ width: "145px", margin: "5px" }}
                onClick={() => remove(22)}
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

export default Jacket;
