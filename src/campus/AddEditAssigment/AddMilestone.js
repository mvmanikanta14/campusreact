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
      this.onChangeassignmentid = this.onChangeassignmentid.bind(this)
     
  

                  
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
                                id:""
                              }
                        },
                    client_list:"",
                   assignment_list:"",

                   
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
                              }
                              


                              
      
                             
                               
                             
                        

                        // componentDidMount = (e) => {console.log(e,"tharyun")
                        //     this.populateAssignment();
                        //   };
  
                        //   populateAssignment() { 
                        //     console.log(UserService.getAssignment_client())
                        //     UserService.getAssignment_client()
                        //     .then(response=>response.aid)
                        //         // console.log(response.data[0].name, "djhhdhdg")
                                
                        //         .then(aid=>{
                        //           this.setState({assignment_list:aid});
                                  
                        //       });
                                 
                                
                        // }


                        onChangeclientid(e) {
                        

                          this.setState(prevState => {
                            let milestone = Object.assign({}, prevState.milestone);  // creating copy of state variable jasper
                            var cid  = ""
                            milestone.client.id = e.target.value;   
                            cid = milestone.client.id 
                            console.log(cid,"stop over here")  

                            // console.log(milestone)                   // update the name property, assign a new value                 
                            return { milestone }; 
                                                                  // return new object jasper object
                          })
                        }

                        onChangeassignmentid(e) { 
                          console.log(e,"this is e")
                          
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
        <h2 className="text-center mb-4">Add Milestone</h2>
        <div className="col-md-12">

       
        <form
            onSubmit={this.handleAssignment} 
          >
        
         
        <div className="form-group">
            <b>Milestone Name:</b>&nbsp;
            <input
                    type="text"
                    className="form-control"
                    name="milestoneName"
                    value={this.state.milestone.milestoneName}
                    onChange={this.onChangemilestoneName}
            />
          </div>
         
          <div className="form-group">
            <b>Checker User</b>&nbsp;
            <input
             type="text"
             className="form-control"
             name="checkerUser"
             value={this.state.milestone.checkerUser}
             onChange={this.onChangecheckerUser}
            />
          </div>



                <div>
                <b>Client Name</b>
                        <select className="form-control" name="client_id"
                        type = "number"
                        onChange={this.onChangeclientid}
                        >

                        
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
                        <select className="form-control" name="assignment_id"
                        type = "number"
                        onChange={this.onChangeassignmentid(
                          
                        )}>
                            
                        <option>---select---</option>
                            {
                            this.state.assignment_list &&
                            this.state.assignment_list.map((h, i) => 
                            (<option key={i} value={h.id}>{h.assignmentName}</option>))
                            }

                </select>
                </div>


          {/* <Form.Group controlId="type" className="col-md-6 form-group">
                        <b>Client Name</b>
                        <Form.Control as="select" 
                        onChangeclientname
                        >
                       
                      {this.state.deps.map(dep=>
                            <option key={dep.id}>{dep.name}
                            ({dep.id})</option>)}
                            
                        </Form.Control>
                    </Form.Group> */}
          {/* <div className="form-group">
            <b>clientname</b>&nbsp;

            <select
             type="text"
             className="form-control"
             name="clientname"
            //  value={this.onChangeclientname}
             onClick={this.onChangeclientname}
             value={client_list}
            /> */}
          
          <div className="form-group">
            <b>Team:</b>&nbsp;
            <input
             type="text"
             className="form-control"
             name="team"
             value={this.state.milestone.team}
             onChange={this.onChangeteam}
            />
          </div>
         

          

          
         


          <div className="form-group">
            <b>Start Date:</b>&nbsp;
            <input
              type="date"
             className="form-control"
             name="startDate"
             value={this.state.milestone.startDate}
             onChange={this.onChangestartDate}
            />
          </div>
           <div className="form-group">
            <b>End Date:</b>&nbsp;
            <input
              type="date"
             className="form-control"
             name="endDate"
             value={this.state.milestone.endDate}
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


// const AddAssignment = () => {
//     // let history = useHistory();
//     const [user, setUser] = useState({
       
//         assignmentname: "",
//         typeofassignment:"",
//         typeofassignment:"",
//         clientname:"",
//         financialyear:"",
//         engagementpartner:"",
//         reviewpartner:"",
//         users:"",
//         value:"",
//         startdate:"",
//         enddate:"" 
//     });
  
//     const { assignmentname,typeofassignment,clientname,financialyear,engagementpartner,reviewpartner,users,value,startdate,enddate } = user;
//     const onInputChange = e => {
//       setUser({ ...user, [e.target.name]: e.target.value });
//     };
  
//     const onSubmit = async e => { console.log(user.assignmentname)
//       e.preventDefault();
//     //   this.setState({
//     //     message: ""
        
//     //   });
//       UserService.addAssignment(user
//         // user.assignmentname,
//         // user.typeofassignment,
//         // user.clientname,
//         // user.financialyear,
//         // user.engagementpartner,
//         // user.reviewpartner,
//         // user.users,
//         // user.value,
//         // user.startdate,
//         // user.enddate

//       ).then(
//         response => {
//           console.log("this one", response)
//           this.setState({
            
//             message: response.assignmentname,
            
//           }
//           )
//           alert("Assignment added successfully");
//           this.props.history.push('/assignment');
//         },
//         error => {
//         //   this.setState({
//         //     content:
//         //       (error.response &&
//         //         error.response.data &&
//         //         error.response.data.message) ||
//         //       error.message ||
//         //       error.toString()
             
//         //   },
//         //   alert("Client not added"),);
// console.log(error,"this is the error")
//           if (error.response && error.response.status === 403) {
//             // EventBus.dispatch("logout");
//           }
//         }
//       );
//     //   await axios.post("http://127.0.0.1:8000/type", user)
//     //   .then(res=>res.json())
//     //   .then((result)=>{
//     //       alert(result);
  
//     //   },
//     //   (error)=>{
//     //       alert('Added Sucessfully');
//     //   });
//     //   history.push("/types");
//     };
//     return (
//       <div className="container">
//         <div className="w-75 mx-auto shadow p-5">
//           <h2 className="text-center mb-4">Product Types</h2>
//           <center>
//           <form onSubmit={e => onSubmit(e)}>
          
           
//             <div className="form-group">
//               <b>Name:</b>
//               <input
//                 type="text"
               
//                 placeholder="Enter Your name"
//                 name="assignmentname"
//                 value={assignmentname}
//                 onChange={e => onInputChange(e)}
//               />
//             </div>

//             <div className="form-group">
//               <b>typeofassignment:</b>
//               <input
//                 type="text"
               
//                 placeholder="Enter Your name"
//                 name="typeofassignment"
//                 value={typeofassignment}
//                 onChange={e => onInputChange(e)}
//               />
//             </div>

//             <div className="form-group">
//               <b>clientname:</b>
//               <input
//                 type="text"
               
//                 placeholder="Enter Your name"
//                 name="clientname"
//                 value={clientname}
//                 onChange={e => onInputChange(e)}
//               />
//             </div>

//             <div className="form-group">
//               <b>financialyear:</b>
//               <input
//                 type="text"
               
//                 placeholder="Enter Your name"
//                 name="financialyear"
//                 value={financialyear}
//                 onChange={e => onInputChange(e)}
//               />
//             </div>

//             <div className="form-group">
//               <b>engagementpartner:</b>
//               <input
//                 type="text"
               
//                 placeholder="Enter Your name"
//                 name="engagementpartner"
//                 value={engagementpartner}
//                 onChange={e => onInputChange(e)}
//               />
//             </div>

//             <div className="form-group">
//               <b>reviewpartner:</b>
//               <input
//                 type="text"
               
//                 placeholder="Enter Your name"
//                 name="reviewpartner"
//                 value={reviewpartner}
//                 onChange={e => onInputChange(e)}
//               />
//             </div>

//             <div className="form-group">
//               <b>users:</b>
//               <input
//                 type="text"
               
//                 placeholder="Enter Your name"
//                 name="users"
//                 value={users}
//                 onChange={e => onInputChange(e)}
//               />
//             </div>

//             <div className="form-group">
//               <b>value:</b>
//               <input
//                 type="text"
               
//                 placeholder="Enter Your name"
//                 name="value"
//                 value={value}
//                 onChange={e => onInputChange(e)}
//               />
//             </div>

//             <div className="form-group">
//               <b>startdate:</b>
//               <input
//                 type="text"
               
//                 placeholder="Enter Your name"
//                 name="startdate"
//                 value={startdate}
//                 onChange={e => onInputChange(e)}
//               />
//             </div>

//             <div className="form-group">
//               <b>enddate:</b>
//               <input
//                 type="text"
               
//                 placeholder="Enter Your name"
//                 name="enddate"
//                 value={enddate}
//                 onChange={e => onInputChange(e)}
//               />
//             </div>

          
            
            
            
//             <button className="btn btn-primary ">Submit </button>
            
//           </form>
//           </center>
//         </div>
//       </div>
//     );
//   };
  
//   export default AddAssignment;


