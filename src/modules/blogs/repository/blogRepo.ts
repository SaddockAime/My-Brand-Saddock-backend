import Blogs from "../../../database/models/blogs"

const createBlog = async (body: any) => {
    //console.log(body)
    return await Blogs.create(body);
}

const getAllBlogs = async () => {
    return await Blogs.find();
}

const getBlogById = async (id: string) => {
    return await Blogs.findOne({_id: id});
}

const deleteBlogById = async (id: string) => {
    return await Blogs.deleteOne({_id: id});
}

export { createBlog, getAllBlogs, getBlogById, deleteBlogById }
