import React, { useState, useEffect } from "react";
import Navbar from "../../pages/dashboard/Navbar";
import UserService from "../../services/user.service";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

export default function AddClients(props) {
  
  const [title, setTitle] = useState("Add");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
  });
  

  useEffect(() => {
    if (props.match.params.id) {
      setTitle("Update");
      getClientDetails(props.match.params.id);
    }
  }, []);

  async function getClientDetails(clientId) {
    UserService.getClients_individual(clientId).then((response) => {
      if (response) {
        console.log(response);
        setValue("name", response.data.name);
        setValue("phoneNo", response.data.phoneNo);
        setValue("email", response.data.email);
        setValue("fileNo", response.data.fileNo);
        setValue("financialFramework", response.data.financialFramework);
      }
    });
  }

  const onSubmit = (data) => { 
    if (!props.match.params.id) {
      UserService.addClient(data).then(
        (response) => {
          props.history.push("/clients");
          swal("Success", "Client added succesfully..!", "success");
        },
        (error) => {
          if (error.response && error.response.status === 403) {
            // EventBus.dispatch("logout");
          }
        }
      );
    } else {
      UserService.editClient(props.match.params.id, data).then( 
        (response) => {  
          props.history.push("/clients");
         
          swal("Success", "Client Updated succesfully..!", "success");
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
      <div className="">
        <Navbar />
        <div className="container client-form">
          <h2 className="text-center mb-4">{title} Client</h2>
          <div className="col-sm-12">
            <form onSubmit={handleSubmit(onSubmit)} className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">This is required</span>
                )}
              </div>

              <div className="form-group col-sm-6">
                <label htmlFor="phoneNo">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="enter phone number"
                  {...register("phoneNo", {
                    required: true,
                    pattern: /[0-9]{10}/,
                    maxLength: 10,
                  })}
                />
                {errors.phoneno && (
                  <span className="text-danger">This is required</span>
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
                  <span className="text-danger">This is required</span>
                )}
              </div>

              <div className="form-group col-sm-6">
                <label htmlFor="fileNo">File No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your file number"
                  {...register("fileNo", { required: true })}
                />
                {errors.fileno && (
                  <span className="text-danger">This is required</span>
                )}
              </div>

              <div className="form-group col-sm-6">
                <label htmlFor="FinancialFramework">Financial Framework</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" enter financial framework"
                  {...register("financialFramework", { required: true })}
                />
                {errors.financialframework && (
                  <span className="text-danger">This is required</span>
                )}
              </div>

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
