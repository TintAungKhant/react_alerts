import { useAlertReducer } from "./AlertManager.js";

function Alert({ alert, dispatchAlert }) {
  return (
    <div style={{backgroundColor: "lightblue", borderBottom: "1px solid black", borderTop: "1px solid black", margin: "20px 0"}}>
      <div>{alert.id}</div>
      <h5>{alert.title}</h5>
      <div>{alert.text}</div>
      <button onClick={() => dispatchAlert("remove", alert.id)}>Remove</button>
    </div>
  );
}

function Alerts({ alerts, dispatchAlert }) {
  return (
    <div>
      {alerts.map((alert) => (
        <Alert alert={alert} dispatchAlert={dispatchAlert} key={alert.id} />
      ))}
    </div>
  );
}

function App() {
  const [alerts, dispatchAlert] = useAlertReducer([]);

  const add = function () {
    let alert = {
      title: "Title",
      text: "Text",
    };
    dispatchAlert("add", alert);
  };

  return (
    <div>
      <Alerts alerts={alerts} dispatchAlert={dispatchAlert}/>
      <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
