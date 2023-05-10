import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import Clients from "./pages/listing/Clients";
import AddClients from "./pages/AddEdit/AddEditClient";
import Assigments from "./pages/listing/Assignment";
import AddAssignment from "./pages/AddEdit/AddEditAssignment";
import Milestone from "./pages/listing/Milestone";
import AddMilestone from "./pages/AddEdit/AddEditMilestone";
import Plans from "./pages/listing/Plans";
import AddEditPlan from "./pages/AddEdit/AddEditPlans";
import RequireAuth from "./pages/RequireAuth";
import User from "./pages/listing/User";
import AddEditUser from "./pages/AddEdit/AddEditUser";


function App(props) {
  return (

    <Routes>

      {/* Unprotected Routes */}
      <Route path="/" element={<LoginPage />} />
         {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/assignment" element={<Assigments />} />
          <Route path="/assignment/add" element={<AddAssignment />} />
          <Route path="/assignment/edit/:id" element={<AddAssignment />} />

          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/add" element={<AddClients />} />
          <Route path="/clients/edit/:id" element={<AddClients />} />

          <Route path="/milestone" element={<Milestone />} />
          <Route path="/milestone/add" element={<AddMilestone />} />
          <Route path="/milestone/edit/:id" element={<AddMilestone />} />

          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/add" element={<AddEditPlan />} />
          <Route path="/plans/edit/:id" element={<AddEditPlan />} />

          <Route path="/user" element={<User/>} />
          <Route path="/user/add" element={<AddEditUser/>} />



      </Route>
    </Routes>
  );
}

export default App;
