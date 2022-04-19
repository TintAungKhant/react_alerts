import { useRef } from "react";

function AlertExample({ dispatchAlert }) {
  const alertTitle = useRef("");
  const text = useRef("");
  const link = useRef("");
  const timeLimit = useRef("");
  const alertType = useRef("");

  const addAlert = function () {
    dispatchAlert("add", {
      timeLimit: timeLimit.current.value,
      text: text.current.value,
      link: link.current.value,
      alertType: alertType.current.value,
      alertTitle: alertTitle.current.value,
    });
  };

  return (
    <div>
      <div>
        <label>
          Alert Title <input type="text" ref={alertTitle} />
        </label>
      </div>
      <div>
        <label>
          Text <input type="text" ref={text} />
        </label>
      </div>
      <div>
        <label>
          Link <input type="text" ref={link} />
        </label>
      </div>
      <div>
        <label>
          Time Limit <input type="text" ref={timeLimit} />
        </label>
      </div>
      <div>
        <label>
          Alert Type
          <select ref={alertType}>
            <option value=""></option>
            <option value="error">error</option>
            <option value="warning">warning</option>
            <option value="info">info</option>
            <option value="success">success</option>
            <option value="random_string">random_string</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={addAlert}>Add</button>
      </div>
    </div>
  );
}

export default AlertExample;
