import React,{useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';


function Edit() {
    const navigate = useNavigate();
    const { regno } = useParams();
    const [values, setValues] = useState({
        regno: '',
        name: '',
        email: '',
        phno: '',
      });
      const handleInput = (event) => {
        setValues((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
      };

      useEffect(() => {
        // Check if regno is available before making the API call
        if (regno) {
            axios.get(`http://localhost:8081/read/${regno}`)
                .then(res => {
                    console.log(res);
                    setValues({...values, regno:res.data[0].regno, name:res.data[0].name, email:res.data[0].email, phno:res.data[0].phno});
                })
                .catch(err => console.log(err));
        }
    }, [regno]); 

    const handleEdit = (event) =>{
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+regno,values)
        .then(res =>{
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }
  return (
    <div className="d-flex flex-column text-white bg-warning bg-gradient vh-100 justify-content-center align-items-center">
      <div className="bg-dark bg-gradient w-50 rounded p-3 ">
        <form onSubmit={handleEdit}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <label htmlFor="">Registration Number</label>
            <input
              onChange={handleInput}
              name="regno"
              className="form-control"
              type="text"
              placeholder="Enter the Registration Number"
              value={values.regno}
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
              value={values.name}
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
              value={values.email}
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
              value={values.phno}
            />
          </div>
          <button className="btn btn-success mt-2">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Edit