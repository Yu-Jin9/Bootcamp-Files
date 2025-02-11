import "./App.css";
import "./index.css";

import ProductBox from "./ProductBox";

function Main() {
  return (
    <>
      <div className="main-wrap">
        <div className="main-title">추천 제품</div>
        <ProductBox />
      </div>
    </>
  );
}

export default Main;
