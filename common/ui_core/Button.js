import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button as MuiButton } from "@material-ui/core";

const ButtonDefault = withStyles(() => ({}))(MuiButton);

function Button(props) {
  const { ...other } = props;

  return <ButtonDefault variant="contained" color="primary" {...other} />;
}

export default Button();
