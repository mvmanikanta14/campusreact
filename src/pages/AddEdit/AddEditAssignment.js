import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import Select from 'react-select';
import { MultiSelect } from "react-multi-select-component";
import React, { useEffect, useState } from "react";
//import Navbar from "../dashboard/Navbar";
import UserService from "../../services/user.service";
import Navbar from "../Navbar";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import apiUrlsService from "../../services/apiUrls.service";



const AddEditAssignment = () => {
  const [clients, setClients] = useState();
  const [typeofassignments, setType] = useState();
  const [years, setYear] = useState();
  const [engagementpartner, setEngagementpartner] = useState();
  const [reviewpartner, setReviewpartner] = useState();
  const [user, setUser] = useState();
  const [selectedOptions, setSelectedOptions] = useState();
  const [selected, setSelected] = useState([]);



  const [title, setTitle] = useState("Add");

  const {id} = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    getClients();
    getUsers();
    getAllTypeofassignment();
    getAllYear();
    getAllUser();
    if (id) {
      setTitle("Update");
      getAssignmentDetails(id);
    }
  }, []);


   // Array of all options
  //  function handleSelect(data) {
  //   setSelectedOptions(data);
  // }
  function getClients() {
    UserService.getAll(apiUrlsService.getAllClients).then((response) => {
      if (response) {
        setClients(response.data);
      }
    });
  }

  function getAllTypeofassignment() {
    UserService.getAll(apiUrlsService.getAllTypeofassignment).then((response) => {
      if (response) {
        setType(response.data);
      }
    });
  }

  function getAllYear() {
    UserService.getAll(apiUrlsService.getAllYear).then((response) => {
      if (response) {
        setYear(response.data);
      }
    });
  }

  function getAllUser() {
    UserService.getAll(apiUrlsService.getAllUser).then((response) => {
      if (response) {
        
        // console.log(response.data)

        // console.log(user,"this is user")
        setReviewpartner(response.data);
        setEngagementpartner(response.data);
        
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

  // console.log(options,"this are the options")
  // const handleChange = (options) => {
  //   setSelectedOptions(options);
  // };
  const handleChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => ({ id: option.value }));
    setValue("users", selectedIds);
  };
//   const onSubmit = (formData, event) => {
//     console.log("Form Data: ", formData)
//     console.log("Selected Options: ", selectedOptions)
//  }

 
  console.log(user,"this is user")
 


  function getAssignmentDetails(id){
    UserService.getById(apiUrlsService.getAssignmentById + id).then((response) => {
      if (response) {
        setValue("assignmentName", response.data.assignmentName);
        setValue("typeofAssignment",  response.data.typeofAssignment.id);
        setValue("client", response.data.client.id);
        setValue("year", response.data.year.id);
        setValue("engagementPartner", response.data.engagementPartner.id);
        setValue("reviewPartner", response.data.reviewPartner.id);
        setValue("users", response.data.users.id);
        setValue("value", response.data.value);
        setValue("startDate", response.data.startDate);
        setValue("endDate", response.data.endDate);
      }
    });
  }

  const navigate = useNavigate();

  const onSubmit = (data,formData, event) => {
    data.client = {id: data.client};
    data.typeofAssignment = {id: data.typeofAssignment};
    data.year = {id: data.year};
    data.engagementPartner = {id: data.engagementPartner};
    data.reviewPartner = {id: data.reviewPartner};
    data.user = selectedOptions
    console.log("Form Data: ", formData)
     console.log("Selected Options: ", selectedOptions)


    if (!id) {
      UserService.add(apiUrlsService.addAssignment, data).then(
        (response) => {
          if (response) {
           navigate('/assignment');
            swal("Success", "Assignment added succesfully..!", "success");
          }
        },
        (error) => {
          if (error.response && error.response.status === 403) {
            // EventBus.dispatch("logout");
          }
        }
      );
    } else {
      data.id = id;
      UserService.update(apiUrlsService.updateAssignment + id, data).then(
        (response) => {
          if (response) {
            navigate("/assignment");
            swal("Success", "Assignment Updated succesfully..!", "success");
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
        <h2 className="text-center mb-4 mt-4">{title} Assigment</h2>
        <div className="col-md-12 col-sm-12">
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            <div className="form-group col-sm-6">
              <label>Assignment Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter name"
                {...register("assignmentName", { required: true })}
              />
              {errors.assignmentName && (
                <span className="text-danger">This is required</span>
              )}
            </div>
            <div className="form-group col-sm-6">
              <label>Type of Assignment</label>
             
              <select {...register("typeofAssignment")} className="form-control">
                <option>---select---</option>
                {typeofassignments &&
                  typeofassignments.map((h, i) => (
                    <option key={i} value={h.id}>
                      {h.typeofAssignment}
                    </option>
                  ))}
              </select>
              {errors.typeofAssignment && (
                <span className="text-danger">This is required</span>
              )}
          </div>
             <div className="form-group col-sm-6">
              <label>Year</label>
             
              <select {...register("year")} className="form-control">
                <option>---select Year---</option>
                {years &&
                  years.map((h, i) => (
                    <option key={i} value={h.id}>
                      {h.year}
                    </option>
                  ))}
              </select>
              {errors.year && (
                <span className="text-danger">This is required</span>
              )}
          
            

            </div>
            <div className="form-group col-sm-6">
              <label>Client</label>
              <select {...register("client")} className="form-control">
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
              <label>Engagement Partner </label>
              <select {...register("engagementPartner")} className="form-control">
                <option>---Select---</option>
                {engagementpartner &&
                  engagementpartner.map((h, i) => (
                    <option key={i} value={h.id}>
                      {h.username}
                    </option>
                  ))}
              </select>
              {errors.engagementPartner && (
                <span className="text-danger">This is required</span>
              )}
            </div>
            
           
           
            <div className="form-group col-sm-6">
              <label>Review Partner </label>
              <select {...register("reviewPartner")} className="form-control">
                <option>---select ---</option>
                {reviewpartner &&
                  reviewpartner.map((h, i) => (
                    <option key={i} value={h.id}>
                      {h.username}
                    </option>
                  ))}
              </select>
              {errors.reviewPartner && (
                <span className="text-danger">This is required</span>
              )}
            </div>


            <div className="form-group col-sm-6">
              <label>Users</label>
              {/* <Select className="form-control">
                <option>---select ---</option>
                {user &&
                  user[0].map((h, i) => (
                    <option key={i} value={h.id}>
                      {h.name}
                      
                    </option>
                  ))
                  }
                   
              </Select> */}

          
                      <Select {...register("users")}
                      isMulti = {true}
                      options={options}
                      closeMenuOnSelect={false}
                      onChange={handleChange}/>
               {/* <select
                  options={user}
                  placeholder="Select User"
                  value={selectedOptions}
                  onChange={handleSelect}
                  isSearchable={true}
                  isMulti
                />  */}
              {errors.users && (
                <span className="text-danger">This is required</span>
              )}
            </div>
            <div className="form-group col-sm-6">
              <label>Value</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter value"
                {...register("value", { required: true })}
              />
              {errors.value && (
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

export default AddEditAssignment;
