import { Modal } from "rsuite";
import LoginModalBody from "./LoginModalBody/LoginModalBody";

const ModalComponent = (props) => {
  let modalBody;
  if (props.type === "login") {
    modalBody = <LoginModalBody handleClose={props.handleClose} />;
  }
  return (
    <div className="modal-container">
      <Modal open={props.open} onClose={props.handleClose}>
        <Modal.Header style={{ textAlign: "center" }}>
          <h4>{props.title}</h4>
        </Modal.Header>
        {modalBody}
      </Modal>
    </div>
  );
};

export default ModalComponent;
