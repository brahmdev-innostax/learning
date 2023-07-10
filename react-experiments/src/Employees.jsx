import { useCallback, useState } from "react";
import Names from "./Names";
import axios from "axios";

const Employees = () => {
  const [names, setNames] = useState([]);
  const [count, setCount] = useState(0);

  console.log("Employees component re-rendered.");

  // this is called using fetch api using async-await
  // const addName = useCallback(async () => {
  //   const data = await fetch("https://randomuser.me/api/");
  //   const res = await data.json();
  //   console.log(res.results);
  // }, []);

  // now, we will do it using fetch api but with then-catch
  const addName = useCallback(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        setNames([...names, res.results[0].name.first]);
      });
  }, [names]);

  // now we will do it easily using axios.get()
  // const addName = () => {
  //   axios.get("https://randomuser.me/api/").then((res) => {
  //     console.log(res.data);
  //     setNames([...names, res.data.results[0].name.first]);
  //   });
  // };

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <div>
        <Names namesList={names} addName={addName} />
      </div>
      <div>Total Employees: {count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Employees;
