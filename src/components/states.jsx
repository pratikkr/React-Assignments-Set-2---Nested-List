import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function States(props) {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">State</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.selectedState}
        onChange={props.onChange}
      >
        {props.states.map((state, index) => (
          <MenuItem key={state.name} value={state.name} id={`state${++index}`}>
            {state.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
