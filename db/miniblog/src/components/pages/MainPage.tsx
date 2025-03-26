import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../ui/Button'
import PostList from '../list/PostList'

// 게시글 타입 정의
interface Post {
  post_no: number
  post_title: string
  post_content: string
  comments: Comment[]
}

interface Comment {
  comment_no: number
  comment_content: string
}

// 모든 콘텐츠를 감싸는 최상위 DIV
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
`

const MainPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const navigate = useNavigate()

  // 백엔드에서 게시글 목록 가져오기
  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then((res) => res.json())
      .then((data: Post[]) => {
        if (Array.isArray(data)) {
          setPosts(data)
        } else {
          console.error('Received unexpected data format:', data)
          setPosts([])
        }
      })
      .catch((err) => {
        console.error('Error fetching posts:', err)
        setPosts([]) // 에러 발생 시 빈 배열로 설정
      })
  }, [])

  return (
    <Wrapper>
      <Container>
        <Button title="글 작성하기" onClick={() => navigate('/post-write')} />
        <div style={{ height: '10px' }}></div>
        <PostList
          posts={posts}
          onClickItem={(item: Post) => navigate(`/post/${item.post_no}`)}
        />
      </Container>
    </Wrapper>
  )
}

export default MainPage
