import "./index.css";
import "./App.css";
import Header from "./Header";
import Main from "./ExMain";

function App() {
  return (
    <>
      <div className="bg-slate-100 h-screen">
        <div className="body">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
