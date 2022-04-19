import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

let timer;

const accessible_types = ["success", "info", "warning", "error"];

function isAccessibleType(type){
  return accessible_types.includes(type);
}

function getType(type){
  return isAccessibleType(type) ? type : "success";
}

const alertReducer = function (state, { type, payload }) {
  switch (type) {
    case "add":
      return [
        {
          timeLimit: payload.timeLimit ? payload.timeLimit : 10,
          text: payload.text,
          link: payload.link ? payload.link : "",
          alertType: payload.alertType ? getType(payload.alertType) : "success",
          id: payload.id ? payload.id : uuid(),
          alertTitle: payload.alertTitle,
          created_at: Date.now(),
        },
        ...state,
      ];

    case "remove":
      return state.filter((alert) => alert.id != payload);

    default:
      return state;
  }
};

const useAlertReducer = function (init_state) {
  const [state, setState] = useState(init_state);

  const dispatch = useCallback(
    (type, payload) => {
      setState(alertReducer(state, { type, payload }));
    },
    [state, setState]
  );

  if (timer) {
    clearInterval(timer);
  }

  if (state.length) {
    timer = setInterval(() => {
      state.map((alert) => {
        if (Date.now() - alert.created_at >= alert.timeLimit * 1000) {
          setState(alertReducer(state, { type: "remove", payload: alert.id }));
        }
      });
    }, 1000);
  }

  return [state, dispatch];
};

export { alertReducer, useAlertReducer };
