import { Link, Outlet } from "react-router-dom";
import "../styles/layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="" width="36" height="36" />
          <span className="logo-text">Design bloggen</span>
        </Link>
        <nav className="nav">
          <Link to="/about" className="nav-link">
            Om oss
          </Link>
          <Link to="/how-we-design" className="nav-link">
            Slik designar vi
          </Link>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Design bloggen. Laga av Vilde og
          Øyvind.
        </p>
      </footer>
    </div>
  );
}
