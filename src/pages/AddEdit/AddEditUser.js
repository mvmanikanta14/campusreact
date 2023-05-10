import React, { useState, useEffect } from "react";
import Navbar from "../../pages/Navbar";
import UserService from "../../services/user.service";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Select from 'react-select';
import {Form} from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import ApiUrls from "../../services/apiUrls.service";
import apiUrlsService from "../../services/apiUrls.service";



export default function AddEditUser() {

  const [title, setTitle] = useState("Add");
  const [user, setUser] = useState();
  const [selectedOptions, setSelectedOptions] = useState({
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    role: []
  });



  const {id} = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // getUser();
    if (id) {
      setTitle("Update");
      getUserDetails(id);
    }
  }, []);

  // const { role} = role;
  // const onInputChange = e => {
  //   setUser({ ...role, [e.target.name]: e.target.value });
  // };
  async function getUserDetails(id) {
    UserService.getById(ApiUrls.getUserById + id).then((response) => {
      if (response) {
        setValue("username", response.data.username);
        setValue("email", response.data.email);
        setValue("password", response.data.password);
        setValue("phoneNo", response.data.phoneNo);
        setValue("role", response.data.role);
        // setValue("role", response.data.role.id);
        
      }
    });
  }
  //  const options = options 
  // const fields = { label: 'username', value: 'id' };

  // const handleChange = (selectedOptions) => {
  //   if (Array.isArray(selectedOptions)) {
  //     const selectedIds = selectedOptions.map((option) => ({ id: option.value }));
  //     setValue(selectedIds);
  //   }
  // };
  const optionList = [
    { value: "", label: "---select---" },
                                  { value: "Audit Manager", label: "Audit Manager" },
                                  { value: "Audit Incharge", label: "Audit Incharge" },
                                  { value: "Senior", label: "Senior" },
                                  { value: "Junior", label: "Junior" },
  ];
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  const onSubmit = (data,formData) => {
     data.role = data.role
    // data.role = selectedOptions
    // console.log("Form Data: ", formData)
    //  console.log("Selected Options: ", selectedOptions)
    if (!id) {
      UserService.add(ApiUrls.addUser, data).then(
        (response) => {
          if (response) {
           navigate('/user');
            swal("Success", "User added succesfully..!", "success");
          }
        },
        (error) => {
          if (error.response && error.response.status === 403) {
            // EventBus.dispatch("logout");
          }
        }
      );
    } 
    // else {
    //   data.id = id;
    //   UserService.update(ApiUrls.updateUser + id, data).then(
    //     (response) => {
    //       if (response) {
    //         navigate("/user");
    //         swal("Success", "User Updated succesfully..!", "success");
    //       }
    //     },
    //     (error) => {
    //       if (error.response && error.response.status === 403) {
    //         // EventBus.dispatch("logout");
    //       }
    //     }
    //   );
    // }
  };

  return (
    <div className="">
      <div className="">
        <Navbar />
        <div className="container client-form">
          <h2 className="text-center mb-4 mt-4">{title} Users</h2>
          <div className="col-sm-12">
            <form onSubmit={handleSubmit(onSubmit)} className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  className="form-control"  
                  placeholder="enter user name"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="text-danger">This is required</span>
                )}
              </div>

              <div className="form-group col-sm-6">
                <label htmlFor="phoneNo">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="enter phone number"
                  {...register("phoneNo", {
                    required: true,
                    pattern: /[0-9]{10}/,
                    maxLength: 10,
                  })}
                />
                {errors.phoneNo && (
                  <span className="text-danger">Enter 10 digits only</span>
                )}
              </div>

              <div className="form-group col-sm-6">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <span className="text-danger">Enter Valid Email</span>
                )}
              </div>

              <div className="form-group col-sm-6">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your Password"
                  {...register("password", {
                    required: true,
                    pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$",
                  })}
                />
                {errors.password && (
                  <span className="text-danger">This is required</span>
                )}
              </div>

            

                      <div className="form-group col-sm-6">
                        <label htmlFor="role">Roles</label>
                        <Select
                                {...register("role")}
                                options={optionList
                               
                                }
                                defaultValue=""
                                onChange={(selectedOption) => {
                                  if (Array.isArray(selectedOption)) {
                                    const selectedValues = selectedOption.map((option) => option.value);
                                    setValue("role", selectedValues);
                                  } else {
                                    setValue("role", [selectedOption.value]);
                                  }
                                }}
                              />

                              {/* <Select
                              options={optionList}
                              placeholder="Select color"
                              value={selectedOptions}
                              onChange={handleSelect}
                              isSearchable={true}
                              isMulti
                            /> */}
                        {errors.role && (
                          <span className="text-danger">This is required</span>
                        )}
                      </div>

              
                {/* {errors.financialFramework && (
                  <span className="text-danger">This is required</span>
                )}  */}

              <div className="form-group col-sm-12 text-center mt-4">
                <button className="btn btn-primary col-sm-3">{title} </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
