import { useState } from "react";
import { save } from "./locationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box, TextField } from "@material-ui/core";

const App = () => {
  // a state variable to store location entered by user
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSave = () => {
    const ifPresent = locations.includes(location);
    if (location !== undefined && !ifPresent) {
      dispatch(save(location));
    }
    setLocation("");
  };

  return (
    <Box>
      <Box>
        <TextField
          onChange={handleChange}
          value={location}
          label="Enter location name"
        />
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          color="primary"
          onClick={handleSave}
        >
          Add
        </Button>
      </Box>
      <Box>
        <h3>List of locations:</h3>
      </Box>
      <Box>
        {locations.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Box>
    </Box>
  );
};

export default App;
