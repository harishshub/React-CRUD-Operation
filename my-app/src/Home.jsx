import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (regno) => {
    axios
      .delete("http://localhost:8081/delete/" + regno)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header bg-white   ">
        <div className="row1 ">
          <div className="col-3">
            <a
              href="#"
              className="text-decoration-none text-dark  font-weight-bold h3"
            >
              <img
                className="w-25 "
                src="https://www.dsource.in/sites/default/files/resource/logo-design/logos/classic-logos-india/images/1.jpeg"
                alt="logo"
              />
              Aim School Pvt.Ltd
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-dark">
        <div className=" d-flex align-items-center justify-content-center">
          <ul className="nav" id="items">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <i className="fa fa-home" aria-hidden="true"></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-street-view" aria-hidden="true"></i>Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-sign-in" aria-hidden="true"></i>Sign Out
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner bg-white  d-flex align-items-center justify-content-center ">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTks1iX-QtGBFt8vvtmfxdLLFZ0K0fyanZeBA&usqp=CAU"
            alt="Banner"
          />
        </div>
      </div>

      {/* Content */}
      <div className="content d-flex flex-column text-white  justify-content-center align-items-center">
        <div className="bg-white  text-black d-flex justify-content-center">
          <p>
            {" "}
            Aim School is pleased to offer our After School Program for those
            families that need care for their children beyond the normal school
            day. Contract rates offer substantial savings compared to the hourly
            rates, when used for the full number of hours. Early Dismissal Days,
            Parent/Teacher Conference Days, and Faculty Workdays are also
            included in the contract rate. Non-contract students will be charged
            at a rate of $9.00 per hour on these days.
            <br />
            <br />
            <strong>
              Please complete and submit one form per student being enrolled in
              the After School Program.
            </strong>
          </p>
        </div>

        <div className="bg-dark bg-gradient w-100 rounded p-3">
          <h4>Student List</h4>
          <div className="d-flex justify-content-end">
            <Link to={"/create"} className="btn btn-success">
              Create +
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
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
                    <Link
                      to={`/read/${student.regno}`}
                      className="btn btn-sm btn-info"
                    >
                      Read
                    </Link>
                    <Link
                      to={`/edit/${student.regno}`}
                      className="btn btn-sm btn-success mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(student.regno);
                      }}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container border-top text-white">
            <div className="py-5 ">
              <div className="row">
                <div className="col-6 col-md-2 mb-3">
                  <h5>Our School</h5>
                  <ul className="navv flex-column" >
                    <li className="navv-item mb-2  nav-link p-0 text-body-secondary"><a className="footitem" href="#" >About Aim School</a></li>
                    <li className="navv-item mb-2 nav-link p-0 text-body-secondary"><a href="#"className="footitem" >Visitor information</a></li>
                    <li className="navv-item mb-2 nav-link p-0 text-body-secondary"><a href="#"className="footitem" >Contact us</a></li>
                    <li className="navv-item mb-2 nav-link p-0 text-body-secondary"><a href="#"className="footitem" >Emergency contacts</a></li>
                    <li className="navv-item mb-2 nav-link p-0 text-body-secondary"><a href="#"className="footitem" >Public information</a></li>
                  </ul>
                </div>
          
                <div className="col-6 col-md-2 mb-3">
                  <h5>Our facilities</h5>
                  <ul className="navv flex-column" >
                    <li className="navv-item mb-2 nav-link p-0 text-body-secondary"><a href="#"className="footitem" >Libraries</a></li>
                    <li className="navv-item mb-2 nav-link p-0 text-body-secondary"><a href="#"className="footitem" >Conferences</a></li>
                    <li className="navv-item mb-2 nav-link p-0 text-body-secondary"><a href="#"className="footitem" >Research equipment</a></li>
                    <li className="navv-item mb-2 nav-link p-0 text-body-secondary"><a href="#"className="footitem" >Sport</a></li>
                    
                  </ul>
                </div>
          
                <div className="col-6 col-md-2 mb-3">
                  <h5>Connect with us</h5>
                  <ul className="navv flex-column" >
                    <li className="navv-item mb-2 nav-link p-0 text-body-secondary"><a href="#"className="footitem" >New students</a></li>
                    <li className="navv-item mb-2 nav-link p-0 text-body-secondary"><a href="#"className="footitem" >Alumni</a></li>
                    <li className="navv-item mb-2 nav-link p-0 text-body-secondary"><a href="#"className="footitem" >Blogs</a></li>
                  </ul>
                </div>
          
                <div className="col-md-5 offset-md-1 mb-3">
                  <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label for="newsletter1" className="visually-hidden">Email address</label>
                      <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                      <button className="btn btn-primary" type="button">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
          
              <div className="d-flex flex-column flex-sm-row justify-content-between  border-top">
                <p>© 2023 Company, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                  <li className="ms-3"><a className="link-body-emphasis" href="#"><i id="footid" className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li className="ms-3"><a className="link-body-emphasis" href="#"><i id="footid" className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                  <li className="ms-3"><a className="link-body-emphasis" href="#"><i id="footid" className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

    </footer>


    </div>
  );
}

export default Home;
