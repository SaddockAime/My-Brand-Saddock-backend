import app from "../../../server";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";

chai.use(chaiHttp);
const router = () => chai.request(app);

let subscriberId: any = '';

describe("MyBrand backend subscriber test cases", () => {

  // Test for creating subscription
  it("Should be able to create subscription", (done) => {
    router()
      .post("/api/subscribers/createSubscriber")
      .send({
        email: "patrick@gmail.com",
      })
      .end((error, response: any) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an("object");
        expect(response.body).to.have.property("data");
        expect(response.body.data).to.have.property("email", "patrick@gmail.com");
        subscriberId = response._body.data._id;
        done(error);
      });
  });

  // Test for viewing subscribers
  it("Should be able to get all subscribers", (done) => {
    router()
      .get("/api/subscribers/viewSubscribers")
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("data");
        expect(response.body.message).to.be.a("string");
        done(error);
      });
  });

  // Test for deleting a subscriber
  it("Should be able to delete a susbcriber by ID", (done) => {
    router()
      .delete(`/api/subscribers/deleteSubscriber/${subscriberId}`)
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an("object");
        expect(response.body.message).to.be.a("string");
        done(error);
      });
  });

  it("Should be able to give an error", (done) => {
    router()
      .delete(`/api/subscribers/deleteSubscriber/${subscriberId}`)
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body).to.be.an("object");
        done(error);
      });
  });


});
