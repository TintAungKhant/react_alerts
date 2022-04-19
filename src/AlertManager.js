import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

const alertReducer = function (state, { type, payload }) {
    console.log(type);
  switch (type) {
    case "add":
      return [
        ...state,
        {
          id: uuid(),
          text: payload.text,
          title: payload.title,
        },
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

  return [state, dispatch];
};

export { alertReducer, useAlertReducer };
