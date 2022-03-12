import { supabase } from "supabaseClient";
import { Provider } from "react-supabase";
import Home from "pages/Home/Home";
import QuizEditor from "./pages/QuizEditor/QuizEditor";
import QuizPlayer from "./pages/QuizPlayer/QuizPlayer";

function App() {
  return (
    <Provider value={supabase}>
      <div className="text-center h-screen text-blue-1000">
        <div className="mx-32 h-full">
          <QuizEditor />
          {/* <Home /> */}
        </div>
        {/* <QuizPlayer /> */}
      </div>
    </Provider>
  );
}

export default App;
