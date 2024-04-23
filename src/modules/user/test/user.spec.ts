import app from "../../../server";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";

chai.use(chaiHttp);
const router = () => chai.request(app);

let token: any  = '';
let userId: any = '';

describe("MyBrand backend user test cases", () => {

  // Test for login
  it("Should be able to log in an existing user", (done) => {
    router()
      .post("/api/users/login")
      .send({
        email: "saddock@gmail.com",
        password: "Saddock_2000"
      })
      .end((error, response: any) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an("object");
        expect(response.body).to.have.property("data");
        token = response._body.data.token;
        done(error);
      });
  });

  it("Should be able to give an error", (done) => {
    router()
      .post("/api/users/login")
      .send({
        email: "saddock@gmail.com",
        password: "Saddock_20000000"
      })
      .end((error, response: any) => {
        expect(response).to.have.status(404);
        expect(response.body).to.be.an("object");
        done(error);
      });
  });

  // Test for creating user
  it("Should be able to create user", (done) => {
    router()
      .post("/api/users/signup")
      .send({
        username: "King",
        email: "king@gmail.com",
        password: "King_2000"
      })
      .end((error, response: any) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an("object");
        expect(response.body).to.have.property("data");
        expect(response.body.data).to.have.property("username", "King");
        expect(response.body.data).to.have.property("email", "king@gmail.com");
        userId = response._body.data._id;
        done(error);
      });
  });

  it("Should be able to give an error ", (done) => {
    router()
      .post("/api/users/signup")
      .send({
        username: "King",
        email: "king@gmail.com",
        password: "King_2000"
      })
      .end((error, response: any) => {
        expect(response).to.have.status(404);
        expect(response.body).to.be.an("object");
        done(error);
      });
  });

  it("Should be able to give an error ", (done) => {
    router()
      .post("/api/users/signup")
      .end((error, response: any) => {
        expect(response).to.have.status(404);
        expect(response.body).to.be.an("object");
        done(error);
      });
  });



  // Test for view users
  it("Should be able to get all users", (done) => {
    router()
      .get("/api/users/viewusers")
      .set("Authorization", `Bearer ${token}`)
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("data");
        expect(response.body.message).to.be.a("string");
        done(error);
      });
  });

  // Test for deleting a user
  it("Should be able to delete a user by ID", (done) => {
    // Replace 'userId' with an actual user ID from your database
    router()
      .delete(`/api/users/deleteUser/${userId}`)
      .set("Authorization", `Bearer ${token}`)
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an("object");
        expect(response.body.message).to.be.a("string");
        done(error);
      });
  });

  it("Should be able to give an error", (done) => {
    router()
      .post("/api/users/login")
      .send({
        email: "king@gmail.com",
        password: "King_2000"
      })
      .end((error, response: any) => {
        expect(response).to.have.status(404);
        expect(response.body).to.be.an("object");
        done(error);
      });
  });

  it("Should be able to give an error", (done) => {
    // Replace 'userId' with an actual user ID from your database
    router()
      .delete(`/api/users/deleteUser/${userId}`)
      .set("Authorization", `Bearer ${token}`)
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body).to.be.an("object");
        done(error);
      });
  });


  
});
