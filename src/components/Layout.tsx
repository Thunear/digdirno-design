import { Link, Outlet } from "react-router-dom";
import "../styles/layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="" width="36" height="36" />
          <span className="logo-text">
            <span className="logo-primary">digdir.no</span>
            <span className="logo-secondary">teamet</span>
          </span>
        </Link>
        <nav className="nav">
          <Link to="/arbeidsflyt" className="nav-link">
            Arbeidsflyt i GitHub
          </Link>
          <Link to="/about" className="nav-link">
            Om oss
          </Link>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} digdir.no-teamet. Laga av Vilde og
          Øyvind.
        </p>
      </footer>
    </div>
  );
}
