import React from "react";
import Alert from "./AlertComponent"
import { Stack } from "@mui/material";

function AlertManagerComponent({ alerts, dispatchAlert }) {
  return (
    <Stack spacing={2}>
      {alerts.map((alert) => (
        <Alert alert={alert} dispatchAlert={dispatchAlert} key={alert.id} />
      ))}
    </Stack>
  );
};

export default AlertManagerComponent;
