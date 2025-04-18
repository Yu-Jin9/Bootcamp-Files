import "../../index.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
