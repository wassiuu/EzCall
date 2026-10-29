import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting...");

  useEffect(() => {
    async function checkBackend() {
      try {
        const response = await fetch("/api/health");

        if (!response.ok) {
          throw new Error("Backend request failed");
        }

        const data = await response.json();
        setMessage(data.message);
      } catch {
        setMessage("Could not connect to the backend.");
      }
    }

    checkBackend();
  }, []);

  return (
    <main>
      <h1>EzCall</h1>
      <p>{message}</p>
    </main>
  );
}

export default App;