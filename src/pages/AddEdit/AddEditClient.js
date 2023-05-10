import React, { useState, useEffect } from "react";
import Navbar from "../../pages/Navbar";
import UserService from "../../services/user.service";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import ApiUrls from "../../services/apiUrls.service";
import apiUrlsService from "../../services/apiUrls.service";



export default function AddEditClient() {

  const [title, setTitle] = useState("Add");
  const [clients, setClients] = useState();


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
    getClients();
    if (id) {
      setTitle("Update");
      getClientDetails(id);
    }
  }, []);

  function getClients() {
    UserService.getAll(apiUrlsService.getAllFramework).then((response) => {
      if (response) {
        setClients(response.data);
      }
    });
  }

  async function getClientDetails(id) {
    UserService.getById(ApiUrls.getClientById + id).then((response) => {
      if (response) {
        setValue("name", response.data.name);
        setValue("phoneNo", response.data.phoneNo);
        setValue("email", response.data.email);
        setValue("fileNo", response.data.fileNo);
       // setValue("financialFramework", response.data.financialFramework);
        setValue("framework", response.data.framework.id);
        
      }
    });
  }


  const onSubmit = (data) => {
    data.framework = {id: data.framework};
    if (!id) {
      UserService.add(ApiUrls.addClient, data).then(
        (response) => {
          if (response) {
           navigate('/clients');
            swal("Success", "Client added succesfully..!", "success");
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
      UserService.update(ApiUrls.updateClient + id, data).then(
        (response) => {
          if (response) {
            navigate("/clients");
            swal("Success", "Client Updated succesfully..!", "success");
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
      <div className="">
        <Navbar />
        <div className="container client-form">
          <h2 className="text-center mb-4 mt-4">{title} Client</h2>
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
                {errors.phoneNo && (
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
                {errors.fileNo && (
                  <span className="text-danger">This is required</span>
                )}
              </div>

              <div className="form-group col-sm-6">
                <label htmlFor="FinancialFramework">Financial Framework</label>
               
              <select {...register("framework")} className="form-control">
                <option>---select---</option>
                {clients &&
                  clients.map((h, i) => (
                    <option key={i} value={h.id}>
                      {h.financialFramework}
                    </option>
                  ))}
              </select>
              {errors.framework && (
                <span className="text-danger">This is required</span>
              )}
            </div>
              
                {errors.financialFramework && (
                  <span className="text-danger">This is required</span>
                )}
            

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
