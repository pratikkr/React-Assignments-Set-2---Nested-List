import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function Towns(props) {
  return (
    <List>
      {props.towns.map((town, index) => (
        <ListItem key={town.name} id={`town${index + 1}`}>
          <ListItemText primary={town.name} />
        </ListItem>
      ))}
    </List>
  );
}
