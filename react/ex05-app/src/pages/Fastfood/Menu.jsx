import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="flex flex-col w-full h-screen bg-green-800">
      <div
        id="header"
        className="flex flex-row justify-between items-center w-full h-[10%] bg-white"
      >
        <Link to="/" className="flex w-[35%] h-[70%]">
          <img src="/images/logo2.png" alt="logo" className="w-full" />
        </Link>
        <Link to="/" className="flex justify-end items-center w-fit h-fit">
          <img
            id="home"
            src="/images/home.png"
            alt="home"
            className="w-[10%] h-[10%] "
          />
          <label id="home" className="flex p-2 text-green-800">
            Home
          </label>
        </Link>
      </div>
      <hr />
      <div className="main"></div>
      <div className="text">
        <b>주문내역</b>
      </div>
      <div className="footer">
        <div>
          <div className=""></div>
          <button></button>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
