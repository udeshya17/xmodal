import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState({});

  const toggleModal = () => {
    setModal(!modal);
  };

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPhone("");
    setDob("");
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Phone number validation
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number");
      return;  
    }
    
    // Date of birth validation 
    const today = new Date();
    const selectedDate = new Date(dob);
    if (!dob || selectedDate > today) {
      alert("Date of birth cannot be in the future");
      return;  
    }
    
    // Validate username and email 
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert("Form submitted successfully!");

      // Reset form 
      resetForm();
    } else {
      setErrors(formErrors);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <h3 className="modal-head">Username:</h3>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {errors.username && <p className="error">{errors.username}</p>}

              <h3 className="modal-head">Email Address:</h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <h3 className="modal-head">Phone Number:</h3>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <h3 className="modal-head">Date of Birth:</h3>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
              <br />

              <button type="submit" className="btn-close">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
