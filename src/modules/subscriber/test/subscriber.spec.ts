import app from "../../../server";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";

chai.use(chaiHttp);
const router = () => chai.request(app);

describe("MyBrand backend subscriber test cases", () => {

  // Test for creating subscription
  it("Should be able to create subscription", (done) => {
    router()
      .post("/api/subscribers/createSubscriber")
      .send({
        email: "aime@gmail.com",
      })
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an("object");
        expect(response.body).to.have.property("data");
        expect(response.body.data).to.have.property("email", "aime@gmail.com");
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

});
