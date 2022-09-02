import { Link } from "react-router-dom";

const BlogList = (props) => {
  return (
    <div className="blog-list">
      <h2>{props.title}</h2>
      {props.blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
            </Link>
            <p>Written by {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
