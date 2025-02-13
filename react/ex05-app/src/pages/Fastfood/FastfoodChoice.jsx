import { Link } from "react-router-dom";

function FastfoodChoice() {
  return (
    <div className="flex flex-col w-full h-screen bg-green-800">
      <div className="flex justify-center items-end  w-full h-[15%]">
        <img
          src="/images/logo2.png"
          alt="logo"
          className="flex  w-[60%] h-[60%]"
        />
      </div>
      <div className="flex justify-center items-end w-full h-[15%] pb-5 text-white text-xl">
        <b>식사하실 장소를 선택해 주세요.</b>
      </div>
      <div className="flex flex-row justify-evenly items-center w-full h-[40%]">
        <Link
          to="/menu"
          className="flex flex-col justify-center items-center w-[35%] h-[80%] bg-white rounded-xl"
        >
          <img src="/images/hambuger.png" alt="햄버거" className="flex" />
          <b className="text-red-800">매장에서 식사</b>
        </Link>
        <Link
          to="/menu"
          className="flex flex-col justify-center items-center w-[35%] h-[80%] bg-white rounded-xl"
        >
          <img src="/images/hambuger.png" alt="포장" className="flex" />
          <b className="text-red-800">테이크 아웃</b>
        </Link>
      </div>
      <div className="flex justify-center items-center w-full h-[30%]">
        <Link
          to="/"
          className="flex flex-col justify-center items-center w-fit h-fit"
        >
          <img src="/images/kiosk.png" alt="" className="flex w-[25%] " />
          <div className="flex text-center mt-2 text-white">
            kiosk 메인으로
            <br />
            돌아가기
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FastfoodChoice;
