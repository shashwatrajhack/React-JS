import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [trigger, setTrigger] = useState(0); // Used to re-run useEffect on click

  useEffect(() => {
    async function fetchJoke() {
      try {
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        const data = response.data;
        setJoke({ setup: data.setup, punchline: data.punchline });
      } catch (error) {
        console.error("Error fetching joke:", error);
        setJoke({ setup: "Failed to fetch joke.", punchline: "" });
      }
    }

    fetchJoke();
  }, [trigger]);

  return (
    <div>
      <h2>Random Joke</h2>
      <p><strong>{joke.setup}</strong></p>
      <p>{joke.punchline}</p>
      <button onClick={() => setTrigger(prev => prev + 1)}>
        Get New Joke
      </button>
    </div>
  );
}

export default App;
