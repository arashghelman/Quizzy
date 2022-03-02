import "./App.css";
import QuizEditor from "./components/QuizEditor/QuizEditor";
import UserProfile from "./components/UserProfile/UserProfile";
import QuizPlayer from "./components/QuizPlayer/QuizPlayer";

function App() {
  return (
    <div className="App">
      <div className="mx-32 h-full">
        <QuizEditor />
        {/* <UserProfile /> */}
      </div>
      {/* <QuizPlayer /> */}
    </div>
  );
}

export default App;
