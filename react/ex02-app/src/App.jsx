import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import MainArea from "./MainArea";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="body">
        <Header />
        <Nav />
        <MainArea />
        <Footer />
      </div>
    </>
  );
}

export default App;
