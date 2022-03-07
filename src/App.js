import { supabase } from "supabaseClient";
import { Provider } from "react-supabase";
import QuizEditor from "./pages/QuizEditor/QuizEditor";
import QuizPlayer from "./pages/QuizPlayer/QuizPlayer";

function App() {
  return (
    <Provider value={supabase}>
      <div className="text-center h-screen">
        <div className="mx-32 h-full">
          <QuizEditor />
        </div>
        {/* <QuizPlayer /> */}
      </div>
    </Provider>
  );
}

export default App;
