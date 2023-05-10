import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
//import Navbar from "../dashboard/Navbar";
import UserService from "../../services/user.service";
import Navbar from "../../pages/dashboard/Navbar";





export default class AddMilestone extends Component {
    constructor(props) {
     
      super(props);
      this.state = {deps:[]};
      // const navigation = useNavigation()
      this.handleMilestone = this.handleMilestone.bind(this);
      this.onChangemilestoneName = this.onChangemilestoneName.bind(this);
      this.onChangecheckerUser = this.onChangecheckerUser.bind(this);
      //this.onChangeclientname = this.onChangeclientname.bind(this);
      this.onChangeteam = this.onChangeteam.bind(this);
      this.onChangestartDate = this.onChangestartDate.bind(this);
      this.onChangeendDate = this.onChangeendDate.bind(this);
      this.onChangeclientid = this.onChangeclientid.bind(this);
      //this.onChangeassignmentaid = this.onChangeassignmentaid.bind(this)
     
  
  
                  
                  this.state = {
                    milestone:
                        {
                            
                            milestoneName: "",
                            checkerUser: "",
                            team: "",
                            startDate: "",
                            endDate: "",
                            client:{
                              id:"",
                              
                            },
                            assignment:{
                                aid:""
                              }
                        },
                    client_list:"",
                    // assignment_list:"",

                   
                  }
                }
    
                onChangemilestoneName(e) {
                          


                         // this.setState({...this.state.assignment, assignmentName:  e.target.value});


                      


                      this.setState(prevState => {
                        let milestone = Object.assign({}, prevState.milestone);  // creating copy of state variable jasper
                        milestone.milestoneName = e.target.value;                     // update the name property, assign a new value                 
                        return { milestone };                                 // return new object jasper object
                      })



                        }
  
                        onChangecheckerUser(e) {
                          // this.setState({
                          //   assignment: e.target.value
                          // });

                          this.setState(prevState => {
                            let milestone = Object.assign({}, prevState.milestone);  // creating copy of state variable jasper
                            milestone.checkerUser = e.target.value;                     // update the name property, assign a new value                 
                            return { milestone };                                 // return new object jasper object
                          })
                        }



                        componentDidMount = (e) => {
                            this.populateClients();
                          };
  
                         populateClients() { 
                            console.log(UserService.getClients())
                            UserService.getClients()
                            .then(response=>response.data)
                                // console.log(response.data[0].name, "djhhdhdg")
                                
                                
                                .then(data=>{
                                    this.setState({client_list:data});
                                    
                                });
                                UserService.getAssignment()
                                    .then(response=>response.data)
                                        // console.log(response.data[0].name, "djhhdhdg")
                                        
                                        
                                        .then(data=>{
                                            this.setState({assignment_list:data});
                                            
                                        });
                                
                        }

                        componentDidMount = (e) => {
                            this.populateAssignment();
                          };
  
                          populateAssignment() { 
                            console.log(UserService.getAssignment_client())
                            UserService.getAssignment_client()
                            .then(response=>response.aid)
                                // console.log(response.data[0].name, "djhhdhdg")
                                
                                .then(aid=>{
                                  this.setState({assignment_list:aid});
                                  
                              });
                                 
                                
                        }

                        onChangeclientid(e) {
                        

                          this.setState(prevState => {
                            let milestone = Object.assign({}, prevState.milestone);  // creating copy of state variable jasper
                            milestone.client.id = e.target.value;                     // update the name property, assign a new value                 
                            return { milestone };                                 // return new object jasper object
                          })
                        }

                        // onChangeassignmentaid(e) {
                        

                        //     this.setState(prevState => {
                        //       let milestone = Object.assign({}, prevState.milestone);  // creating copy of state variable jasper
                        //       milestone.assignment.aid = e.target.value;                     // update the name property, assign a new value                 
                        //       return { milestone };                                 // return new object jasper object
                        //     })
                        //   }


                        onChangeteam(e) {
                          // this.setState({
                          //   assignment: e.target.value
                          // });

                          this.setState(prevState => {
                            let milestone = Object.assign({}, prevState.milestone);  // creating copy of state variable jasper
                            milestone.team = e.target.value;                     // update the name property, assign a new value                 
                            return { milestone };                                 // return new object jasper object
                          })
                        }
                        onChangestartDate(e) {
                          // this.setState({
                          //   assignment: e.target.value
                          // });

                          this.setState(prevState => {
                            let milestone = Object.assign({}, prevState.milestone);  // creating copy of state variable jasper
                            milestone.startDate = e.target.value;                     // update the name property, assign a new value                 
                            return { milestone };                                 // return new object jasper object
                          })
                        }

                        onChangeendDate(e) {
                            // this.setState({
                            //   assignment: e.target.value
                            // });

                            this.setState(prevState => {
                              let milestone = Object.assign({}, prevState.milestone);  // creating copy of state variable jasper
                              milestone.endDate = e.target.value;                     // update the name property, assign a new value                 
                              return { milestone };                                 // return new object jasper object
                            })
                          }

                          
  
                        handleMilestone(e) {
                          e.preventDefault();
  
                          this.setState({
                            message: ""
                          });
  
                            console.log("VVVV", this.state)
                            UserService.addMilestone(
                                this.state.milestone,
                                
                        
                             
  
                            ).then(
                              response => {
                                console.log("this one", response)
                                this.setState({
                                  message: response.data.message,
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
                                  // EventBus.dispatch("logout");
                                }
                              }
                            );
                            // navigation("/clients");
                  }
render(){
  return (
    <div className="">
         <Navbar/>
       
      <div className="container-fluid">
        <h2 className="text-center mb-4">Add Plans</h2>
        <div className="col-md-12">

       
        <form
            onSubmit={this.handleAssignment} 
          >
        

             <div>
                <b>Client Name</b>
                        <select className="form-control" name="client_id"
                        type = "number"
                        onChange={this.onChangeclientid}>
                            
                        <option>---select---</option>
                            {
                            this.state.client_list &&
                            this.state.client_list.map((h, i) => 
                            (<option key={i} value={h.id}>{h.name}</option>))
                            }

                </select>
                </div>

              

                <div>
                <b>Assigment Name</b>
                        <select className="form-control" name="assignment_aid"
                        type = "number"
                        onChange={this.onChangeassignmentid}>
                            
                        <option>---select---</option>
                            {
                            this.state.assignment_list &&
                            this.state.assignment_list.map((h, i) => 
                            (<option key={i} value={h.aid}>{h.assignmentName}</option>))
                            }

                </select>
                </div>

                <div>
                <b>Milestone Name</b>
                        <select className="form-control" name="client_id"
                        type = "number"
                        onChange={this.onChangeclientid}>
                            
                        <option>---select---</option>
                            {
                            this.state.client_list &&
                            this.state.client_list.map((h, i) => 
                            (<option key={i} value={h.id}>{h.name}</option>))
                            }

                </select>
                </div>
        
                 
          <div className="form-group">
            <b>Date:</b>&nbsp;
            <input
              type="date"
             className="form-control"
             name="startDate"
             value={this.state.milestone.startDate}
             onChange={this.onChangestartDate}
            />
          </div>
          <div>
                <b>User Name</b>
                        <select className="form-control" name="assignment_aid"
                        type = "number"
                        onChange={this.onChangeassignmentid}>
                            
                        <option>---select---</option>
                            {
                            this.state.user_list &&
                            this.state.user_list.map((h, i) => 
                            (<option key={i} value={h.aid}>{h.assignmentName}</option>))
                            }

                </select>
                </div>

            <div className="form-group">
            <b>Estimated Hrs</b>&nbsp;
            <input
             type="number"
             className="form-control"
             name="checkerUser"
             value={this.state.milestone.checkerUser}
             onChange={this.onChangecheckerUser}
            />
          </div>

          <div className="form-group">
            <b>Descripation</b>&nbsp;
            <input
             type="text"
             className="form-control"
             name="checkerUser"
             value={this.state.milestone.checkerUser}
             onChange={this.onChangecheckerUser}
            />
          </div>
         
          
          
          <button className="btn btn-primary ">Submit </button>
          
        </form>

                

        </div>
      </div>
    </div>
  );
        }
}





