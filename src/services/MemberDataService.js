import http from "../http-common";

class MemberDataService {
  getAll() {
    return http.get("/Members");
  }

  get(id) {
    return http.get('/Members/' + id);
  }

  create(data) {
    return http.post("/Members", data);
  }

  update(id, data) {
    return http.put('/Members/' + id, data);
  }

  delete(id) {
    return http.delete('/Members/' + id);
  }


}

export default new MemberDataService();