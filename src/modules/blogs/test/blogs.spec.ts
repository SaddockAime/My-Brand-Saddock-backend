// import app from "../../../server";
// import chaiHttp from "chai-http";
// import chai, { expect } from "chai";

// chai.use(chaiHttp);
// const router = () => chai.request(app);

// let blogId: any = '';

// describe("MyBrand backend blogs test cases", () => {

//   // Test for creating message
//   it("Should be able to create blog", (done) => {
//     router()
//       .post("/api/blogs/createBlogs")
//       .send({
//         title: "Aime getz",
//         description: "aime@gmail.com",
//         content: "hello there",
//         image: "",
//       })
//       .end((error, response: any) => {
//         expect(response).to.have.status(404);
//         expect(response.body).to.be.an("object");
//         blogId = response._body.data._id;
//         done(error);
//       });
//   });
//   it("Should be able to create blog", (done) => {
//     router()
//       .post("/api/blogs/createBlogs")
//       .end((error, response: any) => {
//         expect(response).to.have.status(404);
//         expect(response.body).to.be.an("object");
//         done(error);
//       });
//   });

//   // Test for view messages
//   it("Should be able to get all blogs", (done) => {
//     router()
//       .get("/api/blogs/viewBlogs")
//       .end((error, response) => {
//         expect(response).to.have.status(200);
//         expect(response.body).to.be.a("object");
//         expect(response.body).to.have.property("data");
//         expect(response.body.message).to.be.a("string");
//         done(error);
//       });
//   });

//   it("Should be able to get a blog by Id", (done) => {
//     router()
//       .get(`/api/blogs/viewBlogById/${blogId}`)
//       .end((error, response) => {
//         expect(response).to.have.status(404);
//         expect(response.body).to.be.an("object");
//         done(error);
//       });
//   });

//   // Test for deleting a message
//   it("Should be able to delete a blog by ID", (done) => {
//     router()
//       .delete(`/api/blogs/deleteBlog/${blogId}`)
//       .end((error, response) => {
//         expect(response).to.have.status(404);
//         expect(response.body).to.be.an("object");
//         done(error);
//       });
//   });

//   it("Should be able to give an error", (done) => {
//     router()
//       .delete(`/api/blogs/deleteMessage/${blogId}`)
//       .end((error, response) => {
//         expect(response).to.have.status(404);
//         expect(response.body).to.be.an("object");
//         done(error);
//       });
//   });


// });
