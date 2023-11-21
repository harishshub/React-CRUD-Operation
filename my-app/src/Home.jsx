import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (regno)=>{
    axios.delete('http://localhost:8081/delete/'+regno)
    .then(res =>{
        navigate('/')
    })
    .catch(err => console.log(err));
  }
  return (
    <div className="d-flex flex-column text-white bg-warning bg-gradient vh-100 justify-content-center align-items-center">
      <div className="bg-dark bg-gradient w-50 rounded p-3 ">
        <h2>Student List</h2>
        <div className="d-flex justify-content-end">
            <Link to={'/create'} className="btn btn-success">Create +</Link>
        </div>
        <table>
          <thead>
            <tr >
              <th >Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr key={index}>
                <td>{student.regno}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phno}</td>

                <td>
                  <Link to={`/read/${student.regno}`} className="btn btn-sm btn-info">Read</Link>
                  <Link to={`/edit/${student.regno}`} className="btn btn-sm btn-success mx-2">Edit</Link>
                  <button onClick={()=>{handleDelete(student.regno)}} className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
