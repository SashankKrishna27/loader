import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

function App() {
  // state variable used to turn on or off the loader
  const [loading, setLoading] = useState(true);

  // state variable to store data that we get from an api call.
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const result = await fetch(url);
      result.json().then((json) => {
        setApiData(json);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          {apiData?.length
            ? apiData.map((item) => {
                return (
                  <div className="sub-container">
                    <div className="">
                      <span className="title">Title:</span>
                      <span className="info">{item.title}</span>
                    </div>
                    <div>
                      <span className="title">Body:</span>
                      <span className="info">{item.body}</span>
                    </div>
                  </div>
                );
              })
            : "No data found"}
        </div>
      )}
    </div>
  );
}

export default App;
