import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
//import Navbar from "../dashboard/Navbar";
import UserService from "../../services/user.service";
import Navbar from "../../pages/dashboard/Navbar";





export default class AddAssignment extends Component {
    constructor(props) {
     
      super(props);
      this.state = {deps:[]};
      // const navigation = useNavigation()
      this.handleAssignment = this.handleAssignment.bind(this);
      this.onChangeassignmentName = this.onChangeassignmentName.bind(this);
      this.onChangetypeofAssignment = this.onChangetypeofAssignment.bind(this);
      //this.onChangeclientname = this.onChangeclientname.bind(this);
      this.onChangefinancialYear = this.onChangefinancialYear.bind(this);
      this.onChangeengagementPartner = this.onChangeengagementPartner.bind(this);
      this.onChangereviewPartner = this.onChangereviewPartner.bind(this);
      this.onChangeusers = this.onChangeusers.bind(this);
      this.onChangevalue = this.onChangevalue.bind(this);
      this.onChangestartDate = this.onChangestartDate.bind(this);
      this.onChangeendDate = this.onChangeendDate.bind(this);
      this.onChangeclientid = this.onChangeclientid.bind(this)
     
  
  
                  /*this.state = {
                    id: "",
                    assignmentName: "",
                    typeofAssignment: "",
                    financialYear: "",
                    engagementPartner: "",
                    reviewPartner: "",
                    users: "",
                    value: "",
                    startDate: "",
                    endDate: "",
                  
                    client_list:"",
                    
                  };
                  */
                  this.state = {
                    assignment:
                        {
                            
                            assignmentName: "",
                            typeofAssignment: "",
                            financialYear: "",
                            engagementPartner: "",
                            reviewPartner: "",
                            users: "",
                            value: "",
                            startDate: "",
                            endDate: "",
                            client:{
                              id:""
                            }
                        },
                    client_list:"",
                   
                  }
                }
    
                        onChangeassignmentName(e) {                                                             

                      this.setState(prevState => {
                        let assignment = Object.assign({}, prevState.assignment);  
                        assignment.assignmentName = e.target.value;                                     
                        return { assignment };                                
                      })



                        }
  
                        onChangetypeofAssignment(e) {
                          // this.setState({
                          //   assignment: e.target.value
                          // });

                          this.setState(prevState => {
                            let assignment = Object.assign({}, prevState.assignment); 
                            assignment.typeofAssignment = e.target.value;                                      
                            return { assignment };                                 
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
                                
                        }

                        onChangeclientid(e) {
                          // this.setState({
                          //   assignment: e.target.value
                          // });

                          this.setState(prevState => {
                            let assignment = Object.assign({}, prevState.assignment);  
                            assignment.client.id = e.target.value;                                    
                            return { assignment };                                
                          })
                        }


                        onChangefinancialYear(e) {
                          // this.setState({
                          //   assignment: e.target.value
                          // });

                          this.setState(prevState => {
                            let assignment = Object.assign({}, prevState.assignment);  
                            assignment.financialYear = e.target.value;                                     
                            return { assignment };                               
                          })
                        }
                        onChangeengagementPartner(e) {
                          // this.setState({
                          //   assignment: e.target.value
                          // });

                          this.setState(prevState => {
                            let assignment = Object.assign({}, prevState.assignment);  
                            assignment.engagementPartner = e.target.value;                                     
                            return { assignment };                                 
                          })
                        }

                        onChangereviewPartner(e) {
                            // this.setState({
                            //   assignment: e.target.value
                            // });

                            this.setState(prevState => {
                              let assignment = Object.assign({}, prevState.assignment);  
                              assignment.reviewPartner = e.target.value;                    
                              return { assignment };                                 
                            })
                          }

                          onChangeusers(e) {
                            // this.setState({
                            //   assignment: e.target.value
                            // });

                            this.setState(prevState => {
                              let assignment = Object.assign({}, prevState.assignment);  
                              assignment.users = e.target.value;                                  
                              return { assignment };                               
                            })
                          }

                          onChangevalue(e) {
                            // this.setState({
                            //   assignment: e.target.value
                            // });

                            this.setState(prevState => {
                              let assignment = Object.assign({}, prevState.assignment);  
                              assignment.value = e.target.value;                                   
                              return { assignment };                                 
                            })
                          }

                          onChangestartDate(e) {
                            // this.setState({
                            //   assignment: e.target.value
                            // });

                            this.setState(prevState => {
                              let assignment = Object.assign({}, prevState.assignment);  
                              assignment.startDate = e.target.value;                                    
                              return { assignment };                                
                            })
                          }

                          onChangeendDate(e) {
                            // this.setState({
                            //   assignment: e.target.value
                            // });

                            this.setState(prevState => {
                              let assignment = Object.assign({}, prevState.assignment);  
                              return { assignment };                              
                            })
                          }
  
                        handleAssignment(e) {
                          e.preventDefault();
  
                          this.setState({
                            message: ""
                          });
  
                            console.log("VVVV", this.state)
                            UserService.addAssignment(
                                this.state.assignment,
                                
                        
                             
  
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
        <h2 className="text-center mb-4">Add Assigment</h2>
        <div className="col-md-12">

       
        <form
            onSubmit={this.handleAssignment} 
          >
        
         
        <div className="form-group">
            <b>assignmentname:</b>&nbsp;
            <input
                    type="text"
                    className="form-control"
                    name="assignmentName"
                    value={this.state.assignment.assignmentName}
                    onChange={this.onChangeassignmentName}
            />
          </div>
         
          <div className="form-group">
            <b>typeofassignment</b>&nbsp;
            <input
             type="text"
             className="form-control"
             name="typeofAssignment"
             value={this.state.assignment.typeofAssignment}
             onChange={this.onChangetypeofAssignment}
            />
          </div>



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


          
          
          <div className="form-group">
            <b>financialyear:</b>&nbsp;
            <input
             type="text"
             className="form-control"
             name="financialYear"
             value={this.state.assignment.financialYear}
             onChange={this.onChangefinancialYear}
            />
          </div>
          <div className="form-group">
            <b>engagementpartner:</b>&nbsp;
            <input
              type="text"
             className="form-control"
             name="engagementPartner"
             value={this.state.assignment.engagementPartner}
             onChange={this.onChangeengagementPartner}
            />
          </div>

          <div className="form-group">
            <b>reviewpartner:</b>&nbsp;
            <input
              type="text"
             className="form-control"
             name="reviewPartner"
             value={this.state.assignment.reviewPartner}
             onChange={this.onChangereviewPartner}
            />
          </div>

          <div className="form-group">
            <b>users:</b>&nbsp;
            <input
              type="text"
             className="form-control"
             name="reviewpartner"
             value={this.state.assignment.users}
             onChange={this.onChangeusers
            }
            />
          </div>



          <div className="form-group">
            <b>value:</b>&nbsp;
            <input
              type="text"
             className="form-control"
             name="value"
             value={this.state.assignment.value}
             onChange={this.onChangevalue}
            />
          </div>

         


          <div className="form-group">
            <b>startdate:</b>&nbsp;
            <input
              type="date"
             className="form-control"
             name="startDate"
             value={this.state.assignment.startDate}
             onChange={this.onChangestartDate}
            />
          </div>
           <div className="form-group">
            <b>enddate:</b>&nbsp;
            <input
              type="date"
             className="form-control"
             name="endDate"
             value={this.state.assignment.endDate}
             onChange={this.onChangeendDate}
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


