import useOnlineStatus from "./useOnlineStatus";

const App = () => {
  const onlineStatus = useOnlineStatus(navigator.onLine);
  return (
    <div style={{ marginTop: "200px", marginLeft: "300px", fontSize: "20px" }}>
      Hello!
      <div>You are currently {onlineStatus ? "ONLINE" : "OFFLINE"}</div>
      <button disabled={!onlineStatus} onClick={() => alert("Data sent!")}>
        Send data
      </button>
    </div>
  );
};

export default App;
