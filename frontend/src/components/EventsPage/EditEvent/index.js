import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import EditEvent from "./EditEvent";

const EditEventModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="edit-modal" onClick={() => setShowModal(true)}>
        Edit 
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditEvent onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
};

export default EditEventModal;