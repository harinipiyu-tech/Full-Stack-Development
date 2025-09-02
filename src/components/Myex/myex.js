import React from "react";

function Myex() {
  return (
    <>
      <header>
        <h1>Parivarthana Mart</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <main>
        <section className="products">
          <div className="product-card">
            <img src=" " alt="Stationeries" />
            <h2>Stationeries</h2>
            <p>$19.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h2>Groceries</h2>
            <p>$29.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h2>Cosmetics</h2>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Parivarthana Mart. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Myex;