import { Modal, Button } from "rsuite";

const ModalComponent = (props) => {
  return (
    <div className="modal-container">
      <Modal open={props.open} onClose={props.handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>{/* <Paragraph /> */}</Modal.Body>
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
