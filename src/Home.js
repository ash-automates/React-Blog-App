import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't retrieve Blogs, try again later.");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setBlogs(data);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <h3>{error}</h3>}
      {isPending && <h3>Loading...</h3>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
