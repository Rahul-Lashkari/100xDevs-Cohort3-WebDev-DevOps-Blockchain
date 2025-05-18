import useIsOnline from "./hooks/useIsOnline";

function App() {
  const isOnline = useIsOnline();

  return (
    <div>
      <h1>Custom Hook - useIsOnline</h1> 

      <h3>You are currently {isOnline ? "Online🟢" : "Offline🔴"}</h3>
    </div>
  );
}

export default App; 