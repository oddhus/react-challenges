import { useEffect, useState } from "react";

export default function Challenge33() {
  const [isChatting, setIsChatting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const connection = createChatConnection();
    connection.connect();

    return () => {
      connection.disconnect();
    };
  });

  return (
    <div className="flex flex-col">
      <p>
        For every letter the user types, a connection is created and
        disconnected. Only create a chat connection when opening the chat.
      </p>
      <button onClick={() => setIsChatting((isChatting) => !isChatting)}>
        {isChatting ? "Leave chat" : "Start chatting"}
      </button>
      {isChatting && (
        <div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />{" "}
          <button>Send</button>
        </div>
      )}
    </div>
  );
}

function createChatConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log("✅ Connecting to chat...");
    },
    disconnect() {
      console.log("❌ Disconnected from chat.");
    },
  };
}
