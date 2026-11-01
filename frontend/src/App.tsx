import { useEffect, useState } from "react";

const contacts = [
  { id: 1, name: "Sarah", relationship: "Daughter" },
  { id: 2, name: "Michael", relationship: "Son" },
];

function App() {
  const [message, setMessage] = useState("Connecting...");
  const [callingContact, setCallingContact] = useState<
  (typeof contacts)[number] | null
  >(null);


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

  if (callingContact !== null) {
  return (
    <main>
      <h1>Calling {callingContact.name}…</h1>
      <p>This is a preview. No real call is being made yet.</p>

      <button
        type="button"
        onClick={() => setCallingContact(null)}
      >
        Cancel
      </button>
    </main>
  );
}
  return (
    <main>
      <h1>EzCall</h1>
      <p>{message}</p>
      <h2>Who would you like to call?</h2>

<div>
  {contacts.map((contact) => (
    <article key={contact.id}>
      <h3>{contact.name}</h3>
      <p>{contact.relationship}</p>

      <button
        type="button"
        onClick={() => setCallingContact(contact)}
      >
        Call {contact.name}
      </button>
    </article>
  ))}
</div>


    </main>
  );
}

export default App;