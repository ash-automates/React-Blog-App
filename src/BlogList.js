const BlogList = (props) => {
  return (
    <div className="blog-list">
      <h2>{props.title}</h2>
      {props.blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button onClick={() => props.handleDelete(blog.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
