import React, { useState } from "react";
import Backdrop from "../backdrop/Backdrop";
import Modal from "../modal/Modal";

const Todos = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteHandler = () => {
    setIsModalOpen(true);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpen && <Backdrop onClose={closeModalHandler} />}
      {isModalOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
    </div>
  );
};

export default Todos;
