import "./App.css";
import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-supabase";
import QuizEditor from "./components/QuizEditor/QuizEditor";
import UserProfile from "./components/UserProfile/UserProfile";
import QuizPlayer from "./components/QuizPlayer/QuizPlayer";

const client = createClient(
  "https://magomretapvzwepvnkiv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hZ29tcmV0YXB2endlcHZua2l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ2NjgwMzgsImV4cCI6MTk2MDI0NDAzOH0.f2Cmnv4Fxwsp1DdV-zujupT9cGgj9Q-Cg0AMlwkUWGk"
);

function App() {
  return (
    <Provider value={client}>
      <div className="App">
        <div className="mx-32 h-full">
          <QuizEditor />
          {/* <UserProfile /> */}
        </div>
        {/* <QuizPlayer /> */}
      </div>
    </Provider>
  );
}

export default App;
