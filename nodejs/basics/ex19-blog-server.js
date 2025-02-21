// ex19-blog-server.js
// npm i mongoose cors : 몽고 db 연결 모듈, 크로스오리진 처리 (동일 기원인지)

// 리액트 localhost:5173 -> localhost:3000

const express = require('express') /// express : 서버,api 구축하기 위한 node.js의 프레임워크
const mongoose = require('mongoose') /// mongoose : mongodb와 애플리케이션 간의 db연결 및 작업을 쉽게 해주는 ObjectDataModeling lib
const cors = require('cors') /// 서로 다른 도메인 또는 포트 간의 요청을 허용하기 위한 라이브러리 (ex:react앱에서 api호출)

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors()) // 모든 도메인 (포트)의 요청을 허용 (테스트 서버용)
app.use(express.json())

//MongoDB Atlas 연결
const MONGO_URI =
  'mongodb+srv://ujh50188:godqhr921!@mongodb-cluster.xxjgj.mongodb.net/blog'
mongoose
  //{ useNewUrlParser: true, useUnifiedTopology: true }
  .connect(MONGO_URI)
  .then(() => console.log('MognoDB Connected'))
  .catch((err) => console.log(err))

// MOngoose 모델 정의
// 이렇게 정해두면 하나의 Doc가 이 구조로 생성됨
const PostSchema = new mongoose.Schema(
  {
    // _id: String|Number, => MongoDB가 자동으로 생성해줌
    title: String,
    content: String,
    comments: [{ content: String }],
  },
  { collection: 'posts' } // 컬렉션 이름 강제 지정
)

// 몽고DB 도큐먼트 객체
const Post = mongoose.model('Post', PostSchema)

// 게시글 목록 조회
// async -> 비동기식 처리를 할거다,, async 가 끝날 때까지 await.기다려줌
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find() //posts db의 모든 도큐먼트를 가져옴 = Select * from posts
    res.json(posts)
  } catch (err) {
    res.status(500).json({ errer: err.message })
  }
})

// 게시글 단건 조회
app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ message: 'Post Not Found' })
    }
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json({ errer: err.message })
  }
})

// 게시글 추가
app.post('/posts', async (req, res) => {
  try {
    const { title, content } = req.body
    // 새로운 도큐먼트 객체 생성
    const newPost = new Post({ title, content, comments: [] })
    await newPost.save() // 도큐먼트 객체에 새로운거 만들 때 .save()로 저장
    res.status(200).json(newPost)
  } catch (err) {
    res.status(500).json({ errer: err.message })
  }
})

// 게시글 수정
app.put('/posts/:id', async (req, res) => {
  try {
    const { title, content } = req.body
    const UpdatePost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true } // 업데이트된 도큐먼트를 리턴한다.
    )
    if (!UpdatePost) {
      return res.status(404).json({ message: 'Post Not found' })
    }
    res.status(200).json(UpdatePost)
  } catch (err) {
    res.status(500).json({ errer: err.message })
  }
})

// 게시글 삭제
app.delete('/posts/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id)
    res.json({ message: 'Post Deleted' })
  } catch (err) {
    res.status(500).json({ errer: err.message })
  }
})

// 댓글 추가
app.post('/posts/:id/comments', async (req, res) => {
  try {
    const { content } = req.body
    const post = await Post.findById(req.params.id)
    if (!post) {
      res.status(404).json({ message: 'Post Nolt Found' })
    }
    post.comments.push({ content })
    await post.save()
    res.json(post)
  } catch (err) {
    res.status(500).json({ errer: err.message })
  }
})

// 댓글 삭제 (예시)
app.delete('/posts/:id/comments/:commentId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ message: 'Post Not Found' })
    }
    post.comments = post.comments.filter(
      (comment) => comment._id.toString() !== req.params.commentId
    )
    await post.save()
    res.json(post)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// 서버 실행
app.listen(PORT, () => {
  console.log(`블로그 REST API 서버(${PORT}) 실행중,,,`)
})
