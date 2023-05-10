class ApiUrlService {
  // Client API URLs
  getAllClients = "/client/list";
  getClientById = "/client/";
  addClient = "/client/save";
  getAllFramework ="/framework/list"
  updateClient = "/client/";
  deleteClient = "/client/";
  


  // Assignment API URLs
  getAllAssignments = "/assignment/list";
  getAssignmentById = "/assignment/";
  getAllTypeofassignment ="/assignmentype/list"
  getAllYear ="/year/list"
  addAssignment = "/assignment/save";
  updateAssignment = "/assignment/";
  deleteAssignment = "/assignment/delete/";
  getAssignmentsByClientId = "/assignment/findByClientId/";

  // Milestone API URLs
  getAllMilestones = "/milestone/list";
  getMilestoneById = "/milestone/";
  addMilestone = "/milestone/save";
  updateMilestone = "/milestone/";
  deleteMilestone = "/milestone/delete/";
  getMilestonesByClientId = "/milestone/findByClientId/";

  // Plan API URLs
  getAllPlans = "/plan/list";
  getPlanById = "/plan/";
  addPlan = "/plan/save";
  updatePlan = "/plan/";
  deletePlan = "/plan/";


  // Users API URLs

getAllUser = "/auth/list";
getUserById = "/auth/";
addUser = "/auth/signup";
getUser = "/auth/names";
}

export default new ApiUrlService();
