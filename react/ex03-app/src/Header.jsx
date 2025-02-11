import "./App.css";
import "./index.css";

function Header() {
  return (
    <>
      <div className="navigation">
        <div className="title">
          <h1>TechStore</h1>
        </div>
        <div id="nav-wrap">
          <ul className="nav-menu">
            <li className="nav-item">
              <a>제품</a>
              <ul className="dropdown">
                <li>
                  <a href="#">전자기기</a>
                </li>
                <li>
                  <a href="#">의류</a>
                </li>
                <li>
                  <a href="#">도시</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a>서비스</a>
              <ul className="dropdown">
                <li>
                  <a href="#">컨설팅</a>
                </li>
                <li>
                  <a href="#">교육</a>
                </li>
                <li>
                  <a href="#">고객지원</a>
                </li>
                <li>
                  <a href="#">유지보수</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a>회사소개</a>
              <ul className="dropdown">
                <li>
                  <a href="#">회사정보</a>
                </li>
                <li>
                  <a href="#">팀 소개</a>
                </li>
                <li>
                  <a href="#">채용정보</a>
                </li>
                <li>
                  <a href="#">연락처</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
