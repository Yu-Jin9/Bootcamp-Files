import "./Home.css";
import "../../index.css";

import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <div className="body">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
