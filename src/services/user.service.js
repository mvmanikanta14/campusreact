import api from "./api";

class UserService {
  getAll(apiUrl) {
    return api.get(apiUrl).then((response) => {
      return response;
    });
  }

  getById(apiUrl) {
    return api.get(apiUrl).then((response) => {
      return response;
    });
  }

  add(apiUrl, inputObj) {
    return api.post(apiUrl, inputObj).then((response) => {
      return response;
    });
  }

  update(apiUrl, inputObj) {
    return api.put(apiUrl, inputObj).then((response) => {
      return response;
    });
  }

  deleteById(apiUrl) {
    return api.delete(apiUrl).then((response) => {
      return response;
    });
  }
}

export default new UserService();
