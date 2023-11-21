import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    regno: "",
    name: "",
    email: "",
    phno: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/student", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-column text-white bg-warning bg-gradient vh-100 justify-content-center align-items-center">
      <div className="bg-dark bg-gradient w-50 rounded p-3 ">
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="">Registration Number</label>
            <input
              onChange={handleInput}
              name="regno"
              className="form-control"
              type="text"
              placeholder="Enter the Registration Number"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              name="name"
              onChange={handleInput}
              className="form-control"
              type="text"
              placeholder="Enter the Name of the Candidate"
            />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              name="email"
              onChange={handleInput}
              className="form-control"
              type="email"
              placeholder="Enter the Email Address"
            />
          </div>
          <div className="mb-2">
            <label>Phone Number</label>
            <input
              name="phno"
              onChange={handleInput}
              className="form-control"
              type="number"
              placeholder="Enter the Phone Number"
            />
          </div>
          <button className="btn btn-success mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
