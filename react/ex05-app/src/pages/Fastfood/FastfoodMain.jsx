import { Link } from "react-router-dom";

function FastfoodMain() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen p-5 gap-7 bg-green-900">
      <Link
        to="/fastfood-search"
        className="flex justify-center items-center w-[80%] h-12  bg-yellow-400 rounded-lg"
      >
        <b>둘러보기</b>
      </Link>
      <Link className="flex justify-center items-center w-[80%] h-12  bg-yellow-400 rounded-lg">
        <b>미션 1</b>
      </Link>
      <Link className="flex justify-center items-center w-[80%] h-12  bg-yellow-400 rounded-lg">
        <b>미션 2</b>
      </Link>
      <Link className="flex justify-center items-center w-[80%] h-12  bg-yellow-400 rounded-lg">
        <b>미션 3</b>
      </Link>
      <Link className="flex justify-center items-center w-[80%] h-12  bg-yellow-400 rounded-lg">
        <b>자유학습</b>
      </Link>
      <img
        src="/images/logo2.png"
        alt="logo2.png"
        className="flex w-[80%] mt-5"
      />
    </div>
  );
}

export default FastfoodMain;
