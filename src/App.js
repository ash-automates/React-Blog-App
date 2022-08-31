import "./App.css";

function App() {
  const title = "Welcome to my BLOG!";
  const link = "https://www.google.com/";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>
          <a href={link} target="blank">
            Google Website
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
