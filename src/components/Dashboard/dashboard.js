import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header>
        <h1>Dashboard</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <main>
        <section className="card">
          <h2>Users</h2>
          <p>120</p>
        </section>
        <section className="card">
          <h2>Sales</h2>
          <p>$5,000</p>
        </section>
        <section className="card">
          <h2>Performance</h2>
          <p>Good</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Dashboard Example</p>
      </footer>
    </div>
  );
}

export default Dashboard;