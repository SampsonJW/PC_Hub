import { Navbar, Nav, Dropdown } from "rsuite";
import { useState } from "react";
import ModalComponent from "../Modal/ModalComponent";

function NavbarComponent(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Navbar>
      <ModalComponent
        open={open}
        handleClose={handleClose}
        title="Enter your login details"
        body={props.body}
      />
      <Navbar.Brand href="#">PC_Hub</Navbar.Brand>
      {/* <ButtonToolbar>
        <Button onClick={handleOpen}> Open</Button>
      </ButtonToolbar> */}
      <Nav pullRight>
        <Dropdown title="Account">
          <Dropdown.Item onClick={handleOpen}>Login</Dropdown.Item>
          <Dropdown.Item>Register</Dropdown.Item>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
