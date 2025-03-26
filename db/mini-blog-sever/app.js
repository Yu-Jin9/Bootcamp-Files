const express = require("express");
const cors = require("cors");
const pool = require("./config/database");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware 설정
app.use(cors());
app.use(express.json());

// restful api는 react로 테스트 하지 말고 postman이나 썬더로 먼저 해야됨

// 📌 1. 게시글 목록 조회
app.get("/posts", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM post");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching posts:", err.message); // 에러 로그 추가
    res.status(500).json({ error: err.message });
  }
});

// 📌 2. 특정 게시글 조회
app.get("/posts/:id", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM post WHERE post_no = ?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ message: "Post not found" });

    // 댓글 조회
    const [comments] = await pool.query(
      "SELECT * FROM comment WHERE comment_post_no = ?",
      [req.params.id]
    );
    res.json({ ...rows[0], comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 3. 새 게시글 작성
app.post("/posts", async (req, res) => {
  try {
    // 변수명이 req.body에 담겨오는 변수명과 일치해야 함
    const { post_title, post_content } = req.body;
    const [result] = await pool.query(
      "INSERT INTO post (post_title, post_content) VALUES (?, ?)",
      [post_title, post_content]
    );
    res.status(201).json({ id: result.insertId, title, content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 4. 게시글 수정
app.put("/posts/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const [result] = await pool.query(
      "UPDATE post SET post_title = ?, post_content = ? WHERE post_no = ?",
      [title, content, req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 5. 게시글 삭제
app.delete("/posts/:postId", async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM post WHERE post_no = ?", [
      Number(req.params.postId),
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 6. 댓글 추가
app.post("/posts/:id/comments", async (req, res) => {
  try {
    const { content } = req.body;
    const [result] = await pool.query(
      "INSERT INTO comment (comment_content, comment_post_no) VALUES (?, ?)",
      [content, req.params.id]
    );
    res.json({ message: "Comment added", id: result.insertId, content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
