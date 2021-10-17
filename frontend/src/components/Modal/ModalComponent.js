import { Modal, Button } from "rsuite";

const ModalComponent = (props) => {
  return (
    <div className="modal-container">
      <Modal open={props.open} onClose={props.handleClose}>
        <Modal.Header style={{ textAlign: "center" }}>
          <h4>{props.title}</h4>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={props.handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
