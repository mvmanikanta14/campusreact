import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../pages/dashboard/Navbar";
import UserService from "../services/user.service";



export default class Milestone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      // content: {},
    
      content:[]
    };
  }

  componentDidMount() {
    UserService.getMilestone().then(
      response => {
        this.setState({
          content: response.data
        });
      
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 403) {
          //EventBus.dispatch("logout");
        }
      }
    );
  }

render(){


  return (
    <div className="">
        <Navbar />
       
      <div className="container-fluid">
        <h1>My Milestone</h1>
        <Link className="btn btn-success" to="/users1/add">Add Milestone</Link>
       
         
        <table class="table border shadow">
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">S No</th>
            
            
          
              <th scope="col">Assignment Name </th>
              <th scope="col">Type of Assignment</th>
              <th scope="col">Milestone Name</th>
              <th scope="col">checker</th>
              <th scope="col">Team </th>
              <th scope="col">startdate </th>
              <th scope="col">enddate </th>

              


             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

                              {/* {this.state.content.map((item , index) => {
                              return (
                              
                                <tr>
                                <th>{index + 1}</th>
                              <td>{item.milestoneName}</td>
                              <td>{item.checkerUser}</td>
                              <td>{item.team}</td>
                              <td>{item.startDate}</td>
                              <td>{item.endDate}</td>
                              <td>{item.client.name} ({item.client.id})</td>
                              <td>{item.assignment.assignmentName} ({item.assignment.id}) </td>                                   

                              <td>
                                <Link class="btn btn-dark mr-2" to={`/users1/${item.id}`}>
                                  View
                                </Link>
                                <Link
                                  class="btn btn-outline-warning mr-2"
                                  to={`/users1/edit/${item.id}`}
                                >
                                  Edit
                                </Link>
                                <Link
                                  class="btn btn-danger"
                                  // onClick={() => deleteUser(user.id)}
                                >
                                  Delete
                                </Link>
                                
                              </td>
                            </tr>
                              
                              )
                            })} */}


          {/* {this.state.content.length > 0 && this.state.content.map(item => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.assignmentname}</td>
                <td>{item.typeofassignment}</td>
                <td>{item.milestonename}</td>
                <td>{item.checkeruser}</td>
                <td>{item.team}</td>
                <td>{item.startdate}</td>
                <td>{item.enddate}</td>
               


                

                <td>
                  <Link class="btn btn-dark mr-2" to={`/users1/${item.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-warning mr-2"
                    to={`/users1/edit/${item.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    // onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                 
                </td>
              </tr>
            );
          })}
          */}
          </tbody>
         
        </table>
       
      </div>
      
    </div>
     
  );
            };
};

