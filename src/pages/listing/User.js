import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import UserService from "../../services/user.service";
import apiUrlsService from "../../services/apiUrls.service";

import swal from "sweetalert";

const User = () => {
  const [user, setUser] = useState("");

  function deleteUser(id) {
    console.log(id, "this is id");
    UserService.deleteUser(id).then((response) => {
      if (response) {
         swal("Success", "User deleted succesfully..!", "success");
      }
    });
  }

  useEffect(() => {
    getAllUser();
  }, []);

  function getAllUser()  {
    UserService.getAll(apiUrlsService.getAllUser).then(
      (response) => {
        setUser(response.data);
        console.log(response.data,"tharunlist")
      },
      (error) => {
        
      }
    );
  }
      

  return (
    <div className="">
      <Navbar />
      <div className="container-fluid">
        <h1>User</h1>
        <Link className="btn btn-success" to="/user/add">
          Add User
        </Link>
        &nbsp;&nbsp;&nbsp;
        {/* <Link className="btn btn-secondary" to="">Excel Upload</Link> */}
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="">S.No</th>
              <th scope="">User Name</th>
              <th scope="">Email</th>
              <th scope="">Phone Number</th>
              {/* <th scope="">Roles</th> */}

              <th scope="">Actions</th>
            </tr>
          </thead>
          <tbody>
            {user
              ? user.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.username}</td>
                      {/* <td>{item.password}</td> */}
                      <td>{item.email}</td>
                      <td>{item.phoneNo}</td>
                      {/* <td>{item.role.name}</td> */}
                       {/* {item.roles?.name || 'NA'} {(item.roles?.id)}{" "} */}


                     

                      <td>
                        <Link
                          className="btn btn-dark mr-2"
                          to={`/users1/${item.id}`}
                        >
                          View
                        </Link>
                        <Link
                          className="btn btn-outline-warning mr-2"
                          to={`/user/edit/${item.id}`}
                        >
                          Edit
                        </Link>
                        <Link
                          className="btn btn-danger"
                          onClick={() => deleteUser(item.id)}
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

export default User;
