import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../pages/dashboard/Navbar";
import UserService from "../services/user.service";
import { useHistory } from "react-router-dom";


export default class Clients extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        id: this.props.match.params.id,
        content: [],
        clients: []
      };
      // this.addEmployee = this.addEmployee.bind(this);
      // this.editEmployee = this.editEmployee.bind(this);
      this.deleteClient = this.deleteClient.bind(this);
    }

    
    deleteClient(id){
      console.log(id,"this is id");
      
      UserService.deleteClient(id).then( this.setState({clients: this.state.clients.filter(item => item.id !== id)})
      ).then((result)=>{        
        console.log(result.data,"this is result");
        alert(result.data);
    },
    
    
    // window.location.reload(true),
    // UserService.getClients()

      )
    // this.props.history.push('/clients');
    // this.forceUpdate();
    // UserService.getClients();
  }
    componentDidMount() {
      UserService.getPlans().then(
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

    
    render() {
  return (
    <div className="">
       <Navbar/>
      <div className="container-fluid">
        <h1>Plans</h1>
        <Link className="btn btn-success" to="/AddEditAssignment/addplans">Add Plans </Link>&nbsp;&nbsp;&nbsp;
        {/* <Link className="btn btn-secondary" to="">Excel Upload</Link> */}

         
        <table class="table border shadow">
        
          <thead class="thead-dark">
            <tr>
        <th scope="">S.No</th>
        <th scope="">Date</th>
        <th scope="">Plan Hours</th>
        <th scope="">Descripation</th>
       <th scope="">Client Name</th>
       <th scope="">Milestone Name</th>
       <th scope="">Assigment Name</th>
       <th scope="">Actions</th>

      
              

            
            </tr>
          </thead>
          <tbody>
          

          {
                        this.state.content.map((item, index)=> {
                            return(
                              <tr >
                              <th>{index + 1}</th>
                              <td>{item.date}</td>
                              <td>{item.planHour}</td>
                              <td>{item.planDesc}</td>
                              <td>{item.client.name} ({item.client.id})</td>
                              <td>{item.milestone.milestoneName} ({item.milestone.id})</td>
                              <td>{item.assignment.assignmentName} ({item.assignment.id}) </td>   
                              <td>
                                <Link
                                  className="btn btn-dark mr-2"
                                  to={`/users1/${item.id}`}
                                >
                                  View
                                </Link>
                                <Link
                                  className="btn btn-outline-warning mr-2"
                                  to={`/AddEdit/edit/${item.id}`}
                                >
                                  Edit
                                </Link>
                                <Link
                                  className="btn btn-danger"
                                  onClick={() => this.deleteClient(item.id)}
                                >
                                  Delete
                                </Link>
                              </td>
                            </tr>
                            )
                        })
                    }

          {/* {this.state.content.length > 0 && this.state.content.map(item => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.phoneNo}</td>
                <td>{item.email}</td>
                <td>{item.fileNo}</td>
                <td>{item.financialFramework}</td>
               
                <td>
                  <Link class="btn btn-dark mr-2" to={`/users1/${item.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-warning mr-2"
                    to={`/AddEdit/edit/${item.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={ () => this.deleteClient(item.id)}
                  >
                    Delete
                  </Link>
                 
                </td>
                
              </tr>
            );
          })} */}



         
          </tbody>
         
        </table>
       
      </div>
      
    </div>
     
  );
 }
};

