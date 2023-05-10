import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import UserService from "../../services/user.service";
import apiUrlsService from "../../services/apiUrls.service";
import swal from "sweetalert";
import { BsFillTrash3Fill,BsPencilSquare } from "react-icons/bs";

const Milestone = () => {
  const [milestones, setMilestones] = useState();



  function deleteMilestone(id) {
    UserService.deleteById(apiUrlsService.deleteMilestone + id).then((response) => {
      if (response) {
        swal("Success", "Milestone deleted succesfully..!", "success");
        getAllMilestones();
      }
    });
  }


  
  useEffect(() => {
    getAllMilestones();
  }, []);

  function getAllMilestones() {
    UserService.getAll(apiUrlsService.getAllMilestones).then(
      (response) => {
        if (response) {
          setMilestones(response.data);
        }
      },
      (error) => {
        if (error.response && error.response.status === 403) {
          //EventBus.dispatch("logout");
        }
      }
    );
  }

 

  return (
    <div className="">
      <Navbar />

      <div className="container-fluid">
        <h1>My Milestone</h1>
        <Link className="btn btn-primary text-right" to="/milestone/add">
          Add Milestone
        </Link>
        <table className="table border shadow">
          <thead className="thead-lite">
            <tr>
              <th scope="col">S No</th>
              <th scope="col">Milestone Name </th>
              <th scope="col">Checker</th>
              <th scope="col">Team </th>
            
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Client Name</th>
              <th scope="col">Assigment Name</th>
            
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {milestones
              ? milestones.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{item.milestoneName}</td>
                      <td>{item.checkerUser.username}</td>
                      {/* <td>{item.team.username}</td> */}
                      <td>{item.team.map(abc => {
                    
                              return ( <div >
                                      {abc.username}                 
                                      </div>
                                      )
                            })
                          }</td>
                        {/* {item.team?.username || 'NA'} {(item.team?.id)} */}
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>
                        {/* {item.client?.name || 'NA'} {(item.client?.id)} */}
                        {item.client.name} ({item.client.id})
                      </td>
                      <td>
                        {/* {item.assignment?.assignmentName || 'NA'} {(item.assignment?.id)}{" "} */}
                        {item.assignment.assignmentName} ({item.assignment.id})

                      </td>
                      
                      <td>
                        {/* <Link
                          class="btn btn-dark mr-2"
                          to={`/users1/${item.id}`}
                        >
                          View
                        </Link> */}
                        <Link
                          class="btn btn-warning mr-1 lg-sm"
                          to={`/milestone/edit/${item.id}`}
                        >
                          <BsPencilSquare/>
                        </Link>
                        <Link className="btn danger mr-1"
                             
                           onClick={() => deleteMilestone(item.id)}
                        >
                         <BsFillTrash3Fill/>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : "No Data found"}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Milestone;
