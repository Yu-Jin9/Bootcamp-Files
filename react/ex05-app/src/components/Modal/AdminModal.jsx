import { useState } from "react";
import "./AdminModal.css";

function AdminModal(isModalOpen, onClose) {
  const [password, setPassword] = useState("");

  const handleClose = () => {
    onClose;
    console.log("닫기");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 비밀번호 처리 로직 추가
    alert(`입력한 비밀번호: ${password}`);
    handleClose();
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>비밀번호 입력</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                required
              />
              <button type="submit">제출</button>
              <button type="button" onClick={handleClose}>
                닫기
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminModal;
