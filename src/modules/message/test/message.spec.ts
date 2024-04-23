import app from "../../../server";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";

chai.use(chaiHttp);
const router = () => chai.request(app);

let messageId: any = '';

describe("MyBrand backend message test cases", () => {

  // Test for creating message
  it("Should be able to create message", (done) => {
    router()
      .post("/api/messages/createMessage")
      .send({
        name: "Aime getz",
        email: "aime@gmail.com",
        message: "hello there"
      })
      .end((error, response: any) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an("object");
        expect(response.body).to.have.property("data");
        messageId = response._body.data._id;
        done(error);
      });
  });

  // Test for view messages
  it("Should be able to get all messages", (done) => {
    router()
      .get("/api/messages/viewMessages")
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("data");
        expect(response.body.message).to.be.a("string");
        done(error);
      });
  });

  // Test for deleting a message
  it("Should be able to delete a message by ID", (done) => {
    router()
      .delete(`/api/messages/deleteMessage/${messageId}`)
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an("object");
        expect(response.body.message).to.be.a("string");
        done(error);
      });
  });

  it("Should be able to give an error", (done) => {
    router()
      .delete(`/api/messages/deleteMessage/${messageId}`)
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body).to.be.an("object");
        done(error);
      });
  });


});
