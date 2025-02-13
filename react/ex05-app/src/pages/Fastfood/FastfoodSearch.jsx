import { Link } from "react-router-dom";

function FastfoodSearch() {
  return (
    <div className="flex flex-col w-full h-screen  bg-green-900">
      <div className="flex flex-col w-full h-[70%] bg-[url('/images/potatoStick.png')] bg-cover bg-center">
        <div className="relative flex w-full">
          <div className="absolute top-44 left-5 flex flex-col w-fit h-fit">
            <div className="flex w-16 h-3 bg-yellow-500 mb-4" />
            <div>
              <b>포테이토 치즈스틱</b>
            </div>
            <div>Potato Cheese Stick</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full h-[10%] p-3 bg-yellow-400">
        <ul className="list-disc pl-3">
          {/* li에 flex를 적용하면 ul에서 설정한 list-disc를 flex가 덮어 씌워서 안나옴 */}
          <li className=" text-xs tracking-tighter text-gray-600 ">
            <b>쿠폰 및 모바일 상품권 사용은 카운터에 문의해 주세요.</b>
          </li>
          <li className=" text-xs tracking-tighter mt-1 text-gray-600">
            <b>
              현금 결제는 카운터에서만 가능 Please pay at Front Counter for Cash
            </b>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-between w-full h-[20%]">
        <Link
          to="/fastfood-choice"
          className="flex justify-center items-center w-[60%] h-12 border border-white rounded-full mt-4 text-white "
        >
          <button>
            <b>주문하시려면 터치하세요</b>
          </button>
        </Link>
        <Link to="/fastfood" className="flex w-[60%] h-[40%]">
          <img src="/images/logo2.png" alt="logo" className="w-full" />
        </Link>
      </div>
    </div>
  );
}
export default FastfoodSearch;
