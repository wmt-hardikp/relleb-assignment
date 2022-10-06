import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import client from "./config";

function App() {

  const getWatches = async (searchString = "Aldo Accessories") => {
    client.search({
      index: "watches",  
      body: {
        query: {
          multi_match: {
            query: searchString,
            fields: ["name","brand_name"],
          },
        },
      },
  }).then(function (resp) {
      console.log(resp.hits.hits);
  }, function (err) {
      console.log(err.message);
  });
  }
  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
