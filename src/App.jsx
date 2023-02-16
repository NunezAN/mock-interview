import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [fetchMore, setFetchMore] = useState(0);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://randomuser.me/api");
      // F
      setFetchedData(data.data.results);
    };
    fetchData();
  }, []);

  const handleFetchMore = async () => {
    setFetchMore((current) => current + 1);
    const fetchedData = await axios.get(
      `https://randomuser.me/api?$page=${fetchMore}`
    );
    console.log(fetchedData.data.results[0]);
    setFetchedData((current) => [...current, fetchedData.data.results[0]]);
  };
  function handleAddition() {
    setCounter((current) => current + 1);
  }
  function handleSubtraction() {
    setCounter((current) => current - 1);
  }
  return (
    <div className=" max-w-sm mx-auto p-4 flex flex-col gap-8">
      <div className="flex flex-row items-center justify-between">
        <button
          onClick={handleSubtraction}
          className="p-2 bg-slate-400 rounded-xl"
        >
          -
        </button>
        <span className="text-3xl">{counter}</span>
        <button
          onClick={handleAddition}
          className="p-2 bg-slate-400 rounded-xl"
        >
          +
        </button>
      </div>
      <button
        onClick={handleFetchMore}
        className="p-2 bg-slate-400 rounded-xl mx-auto w-fit block"
      >
        Fetch More People
      </button>
      <div>
        <h1 className="text-center p-4">Api Results</h1>
        {fetchedData.map((data, id) => {
          return (
            <div key={id} className="flex flex-col">
              <span>
                {data.name.first} {data.name.last}
              </span>
              <img src={data.picture.large} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
