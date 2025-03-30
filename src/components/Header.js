import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.jpg';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/" style={{color:'#fff'}}><img src={logo} alt="Mohini Enterprise" style={styles.image} /></Link>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/home-improvements" style={styles.navLink}>Home Improvements</Link>
        <Link to="/gifts" style={styles.navLink}>Gifts</Link>
        <Link to="/new-arrivals" style={styles.navLink}>New Arrivals</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  image: {
    width: "100%",
    height: "40px",
    objectFit: "contain",
    borderRadius: "5px",
  },
  logo: {fontSize: "24px", color:'#fff', fontWeight: "bold" },
  nav: { display: "flex", gap: "20px" },
  navLink: { color: "#fff", textDecoration: "none" },
};

export default Header;