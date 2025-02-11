import "./App.css";
import Section from "./Section";
import Aside from "./Aside";

function MainArea() {
  return (
    <>
      <div className="mainArea">
        <Section />
        <Aside />
      </div>
    </>
  );
}

export default MainArea;
