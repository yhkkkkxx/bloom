import { Outlet } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import '../styles/LayoutStyle.css';

function Layout() {
  return (
    <div className="layout-container">
      <NavigationBar />
      <div className="content container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
