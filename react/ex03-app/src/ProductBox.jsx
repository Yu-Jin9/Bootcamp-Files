import "./App.css";
import "./index.css";

function ProductBox() {
  // const products = [
  //   {
  //     name: "프리미엄 노트북",
  //     price: "1,599,000",
  //     explain: "최신 사양의 고성능 노트북",
  //     categoty: "전자기기",
  //   },
  //   {
  //     name: "무선 헤드폰",
  //     price: "299,000",
  //     explain: "프리미엄 사운드의 노이즈 캔슬링 헤드폰",
  //     categoty: "전자기기",
  //   },
  //   {
  //     name: "스마트 워치",
  //     price: "399,000",
  //     explain: "피트니스 트래킹과 스마트 연결 기능",
  //     categoty: "악세서리",
  //   },
  // ];

  return (
    <>
      <div className="product-wrap">
        {/* 첫번째 제품 */}
        <div className="product-box">
          <div className="box-header">
            <span className="product-name">프리미엄 노트북</span>
            <span className="product-price"> 1,599,000원</span>
          </div>
          <div className="box-main">
            <span className="product-ex">최신 사양의 고성능 노트북</span>
          </div>
          <div className="box-footer">
            <div className="product-type">전자기기</div>
            <button className="product-addButton" type="button">
              <a href="#">장바구니 담기</a>
            </button>
          </div>
        </div>

        {/* 두번째 제품 */}
        <div className="product-box">
          <div className="box-header">
            <span className="product-name">무선 헤드폰</span>
            <span className="product-price">299,000원</span>
          </div>
          <div className="box-main">
            <span className="product-ex">
              프리미엄 사운드의 노이즈 캔슬링 헤드폰
            </span>
          </div>
          <div className="box-footer">
            <div className="product-type">전자기기</div>
            <button className="product-addButton" type="button">
              <a href="#">장바구니 담기</a>
            </button>
          </div>
        </div>

        {/* 세번째 제품 */}
        <div className="product-box">
          <div className="box-header">
            <span className="product-name">스마트 워치</span>
            <span className="product-price">399,000원</span>
          </div>
          <div className="box-main">
            <span className="product-ex">
              피트니스 트래킹과 스마트 연결 기능
            </span>
          </div>
          <div className="box-footer">
            <div className="product-type">액세서리</div>

            <button className="product-addButton" type="button">
              <a href="#">장바구니 담기</a>
            </button>
          </div>
        </div>

        {/*  */}
      </div>
    </>
  );
}

export default ProductBox;
