import { useState } from "react";
import { add, remove } from "./nameSlice";
import { useDispatch, useSelector } from "react-redux";

const Names = () => {
  const [name, setName] = useState("");
  const { names } = useSelector((store) => store.nameReducer);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const addName = () => {
    dispatch(add(name));
  };

  const removeName = (name) => {
    dispatch(remove(name));
  };

  return (
    <div>
      <input type="text" value={name} onInput={handleChange} />
      <button onClick={addName}>Add to list</button>
      <div>List of names:</div>
      <div>
        {names.map((name) => (
          <li key={name}>
            {name} <button onClick={() => removeName(name)}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Names;
