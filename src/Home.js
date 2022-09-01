import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <h3>{error}</h3>}
      {isPending && <h3>Loading...</h3>}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
