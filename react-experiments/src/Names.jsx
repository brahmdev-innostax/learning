import { memo } from "react";

const Names = ({ namesList, addName }) => {
  console.log("Names component re-rendered.");
  return (
    <div>
      <div>
        {namesList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </div>
      <div>
        <button onClick={addName}>Add name</button>
      </div>
    </div>
  );
};

export default memo(Names);
