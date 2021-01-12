import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ScheduleForm from './ScheduleForm';


function ButtonPanel() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="btn-group-vertical btn-panel">
          <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              onClick={handleShow}
              >
              <i class="fas fa-faucet fa-2x"> Start</i>
          </button>

         <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Set Watering Schedule</Modal.Title>
            </Modal.Header>
            <Modal.Body><ScheduleForm/></Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Submit Schedule
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            </Modal.Footer>
          </Modal>


          <button
              type="button"
              className="btn btn-primary btn-lg btn-block">
              <i class="fas fa-book-reader fa-2x"> History</i>
          </button>

          <button
              type="button"
              className="btn btn-primary btn-lg btn-block">
              <i class="fas fa-cogs fa-2x"> Settings</i>
          </button>
      </div>
  </div>
  )
}

export default ButtonPanel;
