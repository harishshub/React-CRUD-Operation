import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const { regno } = useParams();
    const [student, setStudent] = useState(null); // Updated initial state to null

    useEffect(() => {
        // Check if regno is available before making the API call
        if (regno) {
            axios.get(`http://localhost:8081/read/${regno}`)
                .then(res => {
                    console.log(res);
                    setStudent(res.data[0]);
                })
                .catch(err => console.log(err));
        }
    }, [regno]); 

    return (
        <div className="d-flex flex-column text-white bg-warning bg-gradient vh-100 justify-content-center align-items-center">
            <div className="bg-dark bg-gradient w-50 rounded p-3 ">
                <h2>Student Details</h2>
                {student ? (
                    <>
                        <h3>Registration Number: {student.regno}</h3>
                        <h3>Student Name: {student.name}</h3>
                        <h3>Email Address: {student.email}</h3>
                        <h3>Phone Number: {student.phno}</h3>
                        <Link to="/" className='btn btn-primary me-5'>Back</Link>
                        <Link to={`/edit/${student.regno}`} className='btn btn-success'>Edit</Link>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Read;
