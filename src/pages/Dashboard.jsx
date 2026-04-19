import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [aiResponse, setAiResponse] = useState("");

  const analyzeCar = async () => {
    const res = await axios.post("/api/ai", {
      message: "Car fuel is low and engine temperature is rising"
    });
    setAiResponse(res.data.reply);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🚗 SmartCar Dashboard</h2>

      <div style={{ background: "#eef", padding: 15, borderRadius: 10 }}>
        <p>Fuel: 30%</p>
        <p>Status: ⚠️ Warning</p>
      </div>

      <button onClick={analyzeCar} style={{ marginTop: 10 }}>
        🤖 Analyze with AI
      </button>

      <p>{aiResponse}</p>
    </div>
  );
}

const startVoice = () => {
  const recognition = new window.webkitSpeechRecognition();
  recognition.onresult = (event) => {
    alert("You said: " + event.results[0][0].transcript);
  };
  recognition.start();
};

<button onClick={startVoice}>🎤 Voice Command</button>

setTimeout(() => {
  alert("Time for oil change!");
}, 5000);

<button>🚪 Open Garage</button>

