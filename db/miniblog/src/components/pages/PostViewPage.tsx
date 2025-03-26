import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import TextInput from '../ui/TextInput'
import Button from '../ui/Button'

// 게시글 및 댓글 타입 정의
interface Comment {
  comment_no: number
  comment_content: string
}

interface Post {
  post_no: number
  post_title: string
  post_content: string
  comments: Comment[]
}

// 스타일 정의
const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`

const ContentText = styled.p`
  font-size: 16px;
  line-height: 32px;
  white-space: pre-wrap;
`

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`

const CommentContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 8px;
`

const PostViewPage: React.FC = () => {
  const navigate = useNavigate()
  const { postId } = useParams<{ postId: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [comment, setComment] = useState<string>('')

  // 게시글과 댓글 불러오기
  useEffect(() => {
    fetch(`http://localhost:5000/posts/${postId}`)
      .then((res) => res.json())
      .then((data: Post) => {
        if (data) {
          setPost(data)
        } else {
          console.error('Post not found')
        }
      })
      .catch((err) => console.error('Error fetching post:', err))
  }, [postId])

  // 댓글 추가 함수
  const handleAddComment = () => {
    if (!comment.trim()) return

    fetch(`http://localhost:5000/posts/${postId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: comment }),
    })
      .then((res) => res.json())
      .then(() => {
        setComment('')
        window.location.reload() // 댓글 추가 후 새로고침
      })
      .catch((err) => console.error('Error adding comment:', err))
  }

  const handleDeletePost = () => {
    console.log(typeof postId)
    console.log(postId)
    if (!window.confirm('정말로 삭제하시겠습니까?')) return
    fetch(`http://localhost:5000/posts/${postId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('게시글 삭제 실패')
        }
        return res.json()
      })
      .then((data) => {
        console.log(data.message) // "Post deleted" 메시지 출력
        alert('게시글이 삭제되었습니다.')
        navigate('/') // 홈으로 이동
      })
      .catch((err) => console.error('Error deleting post:', err))
  }

  return (
    <Wrapper>
      <Container>
        <Button title="뒤로 가기" onClick={() => navigate('/')} />

        {post && (
          <PostContainer>
            <TitleText>{post.post_title}</TitleText>
            <ContentText>{post.post_content}</ContentText>
          </PostContainer>
        )}

        {post?.comments?.length > 0 && <CommentLabel>댓글</CommentLabel>}
        {post?.comments?.map((comment) => (
          <CommentContainer key={comment.comment_no}>
            <ContentText>{comment.comment_content}</ContentText>
          </CommentContainer>
        ))}

        <TextInput
          height={40}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <Button title="댓글 작성하기" onClick={handleAddComment} />
        <Button title="게시글 삭제하기" onClick={handleDeletePost} />
        <Button title="게시글 하기" onClick={handleDeletePost} />
      </Container>
    </Wrapper>
  )
}

export default PostViewPage
