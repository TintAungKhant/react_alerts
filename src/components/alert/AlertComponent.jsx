import React from "react";
import { Alert, AlertTitle, Link, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function AlertComponent({ alert, dispatchAlert }) {
  return (
    <Alert
      severity={alert.alertType}
      action={
        <IconButton
          onClick={() => dispatchAlert("remove", alert.id)}
          aria-label="remove"
        >
          <CloseIcon />
        </IconButton>
      }
    >
      {alert.alertTitle && <AlertTitle>{alert.alertTitle}</AlertTitle>}
      {alert.text}
      {alert.link && (
          <strong>
            <Link href={`//${alert.link}`}> check it out!</Link>
          </strong>
      )}
    </Alert>
  );
}

export default AlertComponent;
