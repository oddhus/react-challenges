import { useEffect, useState } from "react";

export default function Challenge33() {
  const [, triggerRerender] = useState(0);

  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => {
      connection.disconnect();
    };
  });

  return (
    <div>
      <p>
        Open the console and view the output. Every rerender a connection is
        created. Fix this issue.
      </p>
      <button onClick={() => triggerRerender((n) => n + 1)}>
        Trigger rerender
      </button>
    </div>
  );
}

function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log("✅ Connecting...");
    },
    disconnect() {
      console.log("❌ Disconnected.");
    },
  };
}
