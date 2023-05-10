import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import UserService from "../../services/user.service";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import apiUrlsService from "../../services/apiUrls.service";

const Plans = () => {
  const [clients, setClients] = useState();
  const [assignments, setAssignments] = useState();
  const [milestones, setMilestones] = useState();
  const [user, setUser] = useState();

  const [title, setTitle] = useState("Add");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getClients();
    getUsers();
    if (id) {
      setTitle("Update");
      getPlansDetails(id);
    }
  }, []);

  function getClients() {
    UserService.getAll(apiUrlsService.getAllClients).then((res) => {
      if (res) {
        setClients(res.data);
      }
    });
  }
  function getUsers() {
    UserService.getAll(apiUrlsService.getAllUser).then((response) => {
      if (response) {
        
        // console.log(response.data)
        // data = [response.data]
        setUser(response.data);
        console.log(response.data,"this is user")

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


  function getPlansDetails(id){
    UserService.getById(apiUrlsService.getPlanById + id).then((response) => {
      if (response) {
        getAssignment(response.data.client?.id, response.data.assignment?.id);
        setValue("client", response.data.client.id);
        setValue('assignment', response.data.assignment?.id);
        setValue('milestone', response.data.milestone?.id);
        setValue("user",  response.data.user?.id);
        setValue("date", response.data.date);
        setValue("planHour", response.data.planHour);
        setValue("planDesc", response.data.planDesc);


       
      }
    });
  }

  const onSubmit = (data) => {
    data.client = {id: data.client};
    data.assignment = {id: data.assignment};
    data.milestone = {id: data.milestone};
    data.user = {id: data.user};

    if (!id) {
      console.log(data,"tharun")
      UserService.add(apiUrlsService.addPlan,data).then(
        (response) => {
          if (response) {
            console.log(response,"this is response")
            navigate("/plans");
            swal("Success", "Plan added succesfully..!", "success");
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
      UserService.update(apiUrlsService.updatePlan +  id, data).then(
        (response) => {
          if (response) {
            navigate("/plans");
            swal("Success", "Plan Updated succesfully..!", "success");
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

  async function getAssignment(clientId, assignmentId) {
    UserService.getById(apiUrlsService.getAssignmentsByClientId + clientId).then((response) => {
      if (response) {
        setAssignments(response.data);
        getMilestone(clientId);
        if (assignmentId) {
          setValue("assignment", assignmentId);
        }
      }
    }, []);
  }

  async function getMilestone(clientId) {
    UserService.getById(apiUrlsService.getMilestonesByClientId + clientId).then((response) => {
      if (response) {
        setMilestones(response.data);
      }
    }, []);
  }

  return (
    <div className="">
      <Navbar />

      <div className="container">
        <h2 className="text-center mb-4 mt-4">{title} Plan</h2>
        <div className="col-md-12">
          <form onSubmit={handleSubmit(onSubmit)} className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Client Name</label>
              <select
                {...register("client", {
                  onChange: (e) => getAssignment(e.target.value, ""),
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
            <div className="form-group col-sm-6">
              <label>Select Milestone</label>
              <select {...register("milestone")} className="form-control">
                <option>---select---</option>
                {milestones &&
                  milestones.map((h, i) => (
                    <option key={i} value={h.milestone_id}>
                      {h.milestone_name}
                    </option>
                  ))}
              </select>
              {errors.milestone && (
                <span className="text-danger">This is required</span>
              )}
            </div>

            <div className="form-group col-sm-6">
              <label htmlFor="name">Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Select date"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <span className="text-danger">This is required</span>
              )}
            </div>
            <div className="form-group col-sm-6">
              <label>Select user</label>
              <select {...register("user")} className="form-control">
                <option>---select---</option>
                {user &&
                  user.map((h, i) => (
                    <option key={i} value={h.id}>
                      {h.username}
                    </option>
                  ))}
              </select>
              {errors.user && (
                <span className="text-danger">This is required</span>
              )}
            </div>
            <div className="form-group col-sm-6">
              <label>Plan Hour</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter plan hour"
                {...register("planHour", { required: true })}
              />
              {errors.planHour && (
                <span className="text-danger">This is required</span>
              )}
            </div>

            <div className="form-group col-sm-6">
              <label>Plan Descripation</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter plan description"
                {...register("planDesc", { required: true })}
              />
              {errors.planDesc && (
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

export default Plans;
