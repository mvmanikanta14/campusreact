import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import UserService from "../../services/user.service";
import swal from "sweetalert";
import apiUrlsService from "../../services/apiUrls.service";

const Clients = () => {
  const [clients, setClients] = useState("");

  function deleteClient(id) {
    UserService.deleteById(apiUrlsService.deleteClient + id).then((response) => {
      if (response) {
        swal("Success", "Client deleted succesfully..!", "success");
        getAllClients();
      }
    });
  }

  useEffect(() => {
    getAllClients();
  }, []);

  function getAllClients() {
    UserService.getAll(apiUrlsService.getAllClients).then(
      (response) => {
        if (response) {
          setClients(response.data);
        }
      },
      (error) => {
      
      }
    );
  }

  return (
    <div className="">
      <Navbar />
      <div className="container-fluid">
        <h1>Clients</h1>
        <Link className="btn btn-success" to="/clients/add">
          Add Client
        </Link>
        &nbsp;&nbsp;&nbsp;
        {/* <Link className="btn btn-secondary" to="">Excel Upload</Link> */}
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="">S.No</th>
              <th scope="">Client Name</th>
              <th scope="">Phone No</th>
              <th scope="">Email</th>
              <th scope="">File No</th>
              <th scope="">Financial Framework</th>
              <th scope="">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients
              ? clients.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.phoneNo}</td>
                      <td>{item.email}</td>
                      <td>{item.fileNo}</td>
                      <td>
                        {item.framework.financialFramework} ({item.framework.id})
                      </td>

                      <td>
                        <Link
                          className="btn btn-dark mr-2"
                          to={`/users1/${item.id}`}
                        >
                          View
                        </Link>
                        <Link
                          className="btn btn-outline-warning mr-2"
                          to={`/clients/edit/${item.id}`}
                        >
                          Edit
                        </Link>
                        <Link
                          className="btn btn-danger"
                          onClick={() => deleteClient(item.id)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : "No Data Available"}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clients;
