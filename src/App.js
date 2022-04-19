import { useAlertReducer } from "./AlertManager.js";
import AlertManagerComponent from "./components/alert/AlertManagerComponent";
import AlertExample from "./AlertExample.jsx";

import "./App.css";

function App() {
  const [alerts, dispatchAlert] = useAlertReducer([]);

  return (
    <div>
      <div className="alerts">
        <AlertManagerComponent alerts={alerts} dispatchAlert={dispatchAlert} />
      </div>
      <AlertExample dispatchAlert={dispatchAlert} />
    </div>
  );
}

export default App;
