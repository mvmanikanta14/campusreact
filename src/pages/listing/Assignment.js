import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import UserService from "../../services/user.service";
import apiUrlsService from "../../services/apiUrls.service";
import swal from "sweetalert";

const Assignment = () => {
  const [assignments, setAssignments] = useState();

 

  function deleteAssignment(id) {
    UserService.deleteById(apiUrlsService.deleteAssignment + id).then((response) => {
      if (response) {
        swal("Success", "Assignment deleted succesfully..!", "success");
        getAllAssignments();
      }
    });
  }

  useEffect(() => {
    getAllAssignments();
  }, []);

  function getAllAssignments() {
    UserService.getAll(apiUrlsService.getAllAssignments).then(
      (response) => {
        setAssignments(response.data);
        console.log(response.data,"tharun")
      },
      (error) => {
        
      }
    );
  }



  return (
    <div className="">
      <Navbar />

      <div className="container-fluid">
        <h1>Assigments</h1>
        <Link className="btn btn-success" to="/assignment/add">
          Add Assigment
        </Link>

        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S No</th>
              <th scope="col">Assignment Name</th>
              <th scope="col">Type of Assignment</th>
              <th scope="col">Financial Year</th>
              <th scope="col">Engagement Partner</th>
              <th scope="col">Review Partner</th>
              <th scope="col">Users</th>
              <th scope="col">Value</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Client Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments
              ? assignments.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>
                        {item.assignmentName}
                      </td>
                      {/* <td>{item.typeofAssignment}</td> */}

                      <td>{item.typeofAssignment != null ?item.typeofAssignment.typeofAssignment:''} </td>
                      <td>{item.year != null ?item.year.year:''} </td>
                      <td>{item.engagementPartner.username}</td>
                      <td>{item.reviewPartner.username}</td>
                      {/* <td>{item.users.username}</td> */}
                      <td>{item.users.map(abc => {
                    
                            return ( <div >
                                    {abc.username}                 
                                    </div>
                                    )
                          })
                        }</td>
                      <td>{item.value}</td>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>
                        {item.client.name} ({item.client.id})
                      </td>
                      <td>
                        <Link
                          class="btn btn-dark mr-2"
                          to={`/users2/${item.id}`}
                        >
                          View
                        </Link>
                        <Link
                          class="btn btn-outline-warning mr-2"
                          to={`/assignment/edit/${item.id}`}
                        >
                          Edit
                        </Link>
                        <Link
                          class="btn btn-danger"
                          onClick={() => deleteAssignment(item.id)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : "No data found"}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignment;
