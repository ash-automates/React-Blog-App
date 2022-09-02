import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  return (
    <div className="blog-details">
      {error && <h3>{error}</h3>}
      {isPending && <h3>Loading...</h3>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
