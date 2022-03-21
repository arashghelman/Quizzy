import { supabase } from "supabaseClient";
import { Provider } from "react-supabase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, QuizEditor, QuizPlayer, NotFound } from "pages";

function App() {
  return (
    <Provider value={supabase}>
      <Router>
        <div className="text-center h-screen text-blue-1000">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/editor/:quizId"} element={<QuizEditor />} />
            <Route path={"/player/:quizId"} element={<QuizPlayer />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
