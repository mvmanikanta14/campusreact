import React, { useEffect, useState } from "react";
import UserService from "../../services/user.service";
import Select from 'react-select';
import Navbar from "../../pages/Navbar";
import { useParams, useNavigate, HashRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import apiUrlsService from "../../services/apiUrls.service";
import useAuth from "../hooks/useAuth";

const AddMilestone = () => {
  const [clients, setClients] = useState();
  const [assignments, setAssignments] = useState();
  const [checker, setChecker] = useState();
  const [selectedOptions, setSelectedOptions] = useState();
  const [user, setUser] = useState();



  const [title, setTitle] = useState("Add");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getClients();
    getUser();
    getUsers();
    if (id) {
      setTitle("Update");
      getMilestone();
    }
  }, []);

  function getMilestone() {
    UserService.getById(apiUrlsService.getMilestoneById + id).then((response)=>{
      if (response) {
        getAssignment(response.data.client?.id, response.data.assignment?.id);
        setValue('milestoneName', response.data.milestoneName);
        setValue('checkerUser', response.data.checkerUser?.id);
        setValue('client', response.data.client?.id);
        setValue('assignment', response.data.assignment?.id);
        setValue('team', response.data.team);
        setValue('startDate', response.data.startDate);
        setValue('endDate', response.data.endDate);
      }
    });
        
   }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
  });


 async function getAssignment(clientId, assignmentId) {
  console.log(clientId, assignmentId);
      UserService.getById(apiUrlsService.getAssignmentsByClientId + clientId).then((response) => {
        if (response) {
          setAssignments(response.data);
          if (assignmentId) {
            setValue('assignment', assignmentId);
          }
        }
      }, []);
  }


  function getClients() {
    UserService.getAll(apiUrlsService.getAllClients).then((response) => {
      if (response) {
        setClients(response.data);
      }
    });
  }

  function getUser() {
    UserService.getAll(apiUrlsService.getAllUser).then((response) => {
      if (response) {
        
        // console.log(response.data)

         console.log(response.data,"this is user")
        setChecker(response.data);
       
      }
    });
  }

  function getUsers() {
    UserService.getAll(apiUrlsService.getUser).then((response) => {
      if (response) {
        
        // console.log(response.data)
        // data = [response.data]
        setUser(response.data);
        console.log(response.data,"this is user")

      }
    });
  }
  const options = user
  const fields = { label: 'username', value: 'id' };

  const handleChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => ({ id: option.value }));
    setValue("users", selectedIds);
  };


  const onSubmit = (data,formData) => {
    //console.log(data,"tharun")

    data.client = {id: data.client};
    data.assignment = {id: data.assignment};
    data.checkerUser = {id: data.checkerUser};
    data.user = selectedOptions
    console.log("Form Data: ", formData)
     console.log("Selected Options: ", selectedOptions)

    if (!id) {
      // console.log("00reached here")
      UserService.add(apiUrlsService.addMilestone, data).then(
        (response) => {
          if (response) {
            navigate("/milestone");
            swal("Success", "Milestone added succesfully..!", "success");
          }
        },
        (error) => {
          if (error.response && error.response.status === 403) {
            // EventBus.dispatch("logout");
          }
        }
      );
    } else {
      console.log("00reached here")
      data.id = id;
      UserService.update(apiUrlsService.updateMilestone + id, data).then(
        (response) => {
          if (response) {
            navigate("/milestone");
            swal("Success", "Milestone Updated succesfully..!", "success");
          }
        },
        (error) => {
          if (error.response && error.response.status === 403) {
            // EventBus.dispatch("logout");
          }
        }
      );
    }
  };

  return (
    <div className="">
      <Navbar />

      <div className="container">
        <h2 className="text-center mb-4 mt-4">Add Milestone</h2>
        <div className="col-md-12">
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Milestone Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter milestone name"
                {...register("milestoneName", { required: true })}
              />
              {errors.milestoneName && (
                <span className="text-danger">This is required</span>
              )}
            </div>
            {/* <div className="form-group col-sm-6">
              <label htmlFor="name">Checker User</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter checker user"
                {...register("checkerUser", { required: true })}
              />
              {errors.checkerUser && (
                <span className="text-danger">This is required</span>
              )}
            </div> */}

            <div className="form-group col-sm-6">
              <label>Select Checker User</label>
              <select
               {...register('checkerUser', {
                onChange: (e) => 
                getAssignment(e.target.value, '')
              })}
                className="form-control" 
              >
                <option>---select---</option>
                {checker &&
                  checker.map((h, i) => (
                    <option key={i} value={h.id}>
                      {h.username}
                    </option>
                  ))}
              </select>
              {errors.checkerUser && (
                <span className="text-danger">This is required</span>
              )}
            </div>

            <div className="form-group col-sm-6">
              <label>Select Client</label>
              <select
               {...register('client', {
                onChange: (e) => 
                getAssignment(e.target.value, '')
              })}
                className="form-control" 
              >
                <option>---select---</option>
                {clients &&
                  clients.map((h, i) => (
                    <option key={i} value={h.id}>
                      {h.name}
                    </option>
                  ))}
              </select>
              {errors.client && (
                <span className="text-danger">This is required</span>
              )}
            </div>
            <div className="form-group col-sm-6">
              <label>Select Assigment</label>
              <select {...register("assignment")} className="form-control">
                <option>---select---</option>
                {assignments &&
                  assignments.map((h, i) => (
                    <option key={i} value={h.assignment_id}>
                      {h.assignment_name}
                    </option>
                  ))}
              </select>
              {errors.assignment && (
                <span className="text-danger">This is required</span>
              )}
            </div>

            {/* <div className="form-group col-sm-6">
              <label htmlFor="name">Team</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter team"
                {...register("team", { required: true })}
              />
              {errors.team && (
                <span className="text-danger">This is required</span>
              )}
            </div> */}

             <div className="form-group col-sm-6">
              <label>Team</label>
          
                      <Select {...register("team")}
                      isMulti = {true}
                      options={options}
                      closeMenuOnSelect={false}
                      onChange={handleChange}/>
              
              {errors.users && (
                <span className="text-danger">This is required</span>
              )}
            </div>
            <div className="form-group col-sm-6">
              <label>Start Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="enter start date"
                {...register("startDate", { required: true })}
              />
              {errors.startDate && (
                <span className="text-danger">This is required</span>
              )}
            </div>
            <div className="form-group col-sm-6">
              <label>End Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="enter start date"
                {...register("endDate", { required: true })}
              />
              {errors.endDate && (
                <span className="text-danger">This is required</span>
              )}
            </div>
            <div className="form-group col-sm-12 text-center mt-4">
              <button className="btn btn-primary col-sm-3">{title}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMilestone;


