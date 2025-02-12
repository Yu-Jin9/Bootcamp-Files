import "./Main.css";
import "../../index.css";

function Main() {
  const mainList = [
    {
      src: "../images/fastfood.png",
      alt: "패스트푸드",
      color: "bg-orange-500",
    },
    { src: "../images/cafe.png", alt: "카페", color: "bg-stone-400" },
    { src: "../images/hospital.png", alt: "병원", color: "bg-green-400" },
    { src: "../images/atm.png", alt: "ATM", color: "bg-violet-400" },
    { src: "../images/ktx.png", alt: "KTX", color: "bg-sky-400" },
    { src: "../images/bus.png", alt: "버스", color: "bg-teal-500" },
  ];

  return (
    <main className="body">
      {mainList.map((items) => {
        <div className="box-wrap">
          <image
            src={items.src}
            alt={items.alt}
            className={items.color}
            id="box-image"
          />
          <h6 id="box-text">{items.alt}</h6>
        </div>;
      })}
    </main>
  );
}

export default Main;
