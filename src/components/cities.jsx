import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function Cities(props) {
  // console.log(props.cities);
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Cities</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.selectedCity}
        onChange={props.onChange}
      >
        {props.cities.map((city, index) => (
          <MenuItem key={city.name} value={city.name} id={`city${index + 1}`}>
            {city.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
