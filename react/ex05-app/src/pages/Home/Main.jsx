import "../../index.css";
import { Link } from "react-router-dom";

function Main() {
  const mainList = [
    {
      id: 1,
      src: "/images/fastfood.png",
      alt: "패스트푸드",
      color: "bg-orange-500",
      url: "/fastfood",
    },
    { id: 2, src: "/images/cafe.png", alt: "카페", color: "bg-stone-400" },
    { id: 3, src: "/images/hospital.png", alt: "병원", color: "bg-green-400" },
    { id: 4, src: "/images/atm.png", alt: "ATM", color: "bg-violet-400" },
    { id: 5, src: "/images/ktx.png", alt: "KTX", color: "bg-sky-400" },
    { id: 6, src: "/images/bus.png", alt: "버스", color: "bg-teal-500" },
  ];

  return (
    <main className="flex flex-wrap items-center justify-center w-full h-[80%] gap-5 py-3 overflow-x-auto">
      {mainList.map((items) => {
        return (
          <Link
            className={`${items.color} flex flex-col justify-center items-center w-[40%] h-[29%]`}
            key={items.id}
            to={items.url}
          >
            <img
              src={items.src}
              alt={items.alt}
              className={`${items.color}flex w-[50%] h-auto m-0`}
            />
            <h6 className="text-center w-[100%] mt-3 bg-white ">
              <b>{items.alt}</b>
            </h6>
          </Link>
        );
      })}
    </main>
  );
}

export default Main;
