import "./App.css";

function Aside() {
  return (
    <>
      <div className="aside">
        <div className="title">Golden Retriever</div>
        <img
          className="img"
          src="https://www.fitpetmall.com/wp-content/uploads/2022/11/shutterstock_196467692-1024x819.jpg"
          alt="리트리버"
        />
        <ul>
          <li>기본 특성</li>
          <li>단점</li>
          <li>키울 시 주의점</li>
          <li>파생 혼종견</li>
        </ul>
      </div>
    </>
  );
}

export default Aside;
