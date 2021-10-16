import { Navbar, Nav, Dropdown } from "rsuite";

function NavbarComponent() {
  return (
    <Navbar>
      <Navbar.Brand href="#">PC_Hub</Navbar.Brand>

      <Nav pullRight>
        <Dropdown title="Account">
          <Dropdown.Item>Login</Dropdown.Item>
          <Dropdown.Item>Register</Dropdown.Item>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
