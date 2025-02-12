// import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import "../../index.css";
import AdminModal from "../../components/Modal/AdminModal";
import logoSrc from "../../images/logo2.png";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="body head-wrap">
      <div style={{ display: "flex" }}>
        <img
          src={logoSrc}
          alt="로고"
          onClick={handleLogoClick}
          className="logo"
        />
        {isModalOpen && (
          <AdminModal isModalOpen={isModalOpen} onClose={handleCloseModal} />
        )}
      </div>
      <div className="switch">
        <button type="button" onClick={handleLogoClick}>
          +
        </button>
        {isModalOpen && (
          <AdminModal isModalOpen={isModalOpen} onClose={handleCloseModal} />
        )}
      </div>
    </header>
  );
}

export default Header;
