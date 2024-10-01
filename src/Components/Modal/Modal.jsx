import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <div className="heading">
        <h1>User Details Modal</h1>
            <button onClick={toggleModal} className="btn-modal">
                Open Form
            </button>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1>Fill Details</h1>
            <form action="">

            <h3 className="modal-head">Username:</h3>
            <input type="text" required/>

            <h3 className="modal-head">Email Address:</h3>
            <input type="email" />

            <h3 className="modal-head">Phone Number:</h3>
            <input type="number" />

            <h3 className="modal-head">Date of Birth:</h3>
            <input type="date" />
            <br />
            
            <button onClick={toggleModal} className="btn-close">
                Submit
            </button>

            </form>
          </div>
        </div>
      )}
      
    </>
  );
}