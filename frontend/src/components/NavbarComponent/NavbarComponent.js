import { Navbar, Nav, Dropdown } from "rsuite";
import { useState } from "react";
import ModalComponent from "../Modal/ModalComponent";
import LoginModalBody from "../Modal/LoginModalBody/LoginModalBody";
import "./Navbar.css";
import UserBadgeIcon from "@rsuite/icons/UserBadge";

function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ModalComponent
        open={open}
        handleClose={handleClose}
        title="Enter your login details"
        body={<LoginModalBody />}
      />
      <Navbar>
        <Navbar.Brand href="#">
          <h5>
            <i className="fas fa-robot"></i> PC_Hub
          </h5>
        </Navbar.Brand>
        {/* <ButtonToolbar>
        <Button onClick={handleOpen}> Open</Button>
      </ButtonToolbar> */}

        <Nav pullRight style={{ height: "100%" }}>
          <Dropdown icon={<UserBadgeIcon />} title="Account">
            <Dropdown.Item onClick={handleOpen}>Login</Dropdown.Item>
            <Dropdown.Item>Register</Dropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
