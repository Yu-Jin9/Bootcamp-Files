package com.study.Ex12H2DBTest;

import org.hibernate.annotations.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

// ====== 정리 ======
// JPA 함수 정리
// 1. 쿼리 (Select)
//  - 간단한 쿼리 JPA기본 함수, 사용자 정의 함수
//  - JPQL, NativeQuery
//  - MyBatis (SQL을 XML 기반으로 사용하는 템플릿 라이브러리)
// 2. DML (Update, Insert, Delete)문
//  - JPA 기본 함수 (save() : update, insert 와 delete())


@Repository
public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
    //JpaRepository의 기본함수
    //1. findAll() : SQL(Select * from Table)문을 실행한다.
    //2. save() : SQL의 insert문과 update문을 실행한다. id값을 보고 없으면 추가,
    //           있으면 수정한다.
    //3. delete() : SQL delete문을 수행한다.

    //사용자 정의 JPA 함수들을 추가해서 사용한다.
    //쿼리메소드
    //findBy열이름() : SQL - select 열이름 from 테이블 문으로 실행
    //  예) findById(2L) : select * from member where id=2
    //  예) findByUserId("hong") : select * from where user_id='hong'

    // user_id가 일치하는 모든 MemberEntity 리스트
    // SQL: SELECT * FROM member WHERE user_id = ?

//    List<MemberEntity> findByUserId(String userId);

    Optional<MemberEntity> findByUserId(String userId);

    // 최대 5개 id와 이름이 일치하는 멤버들을 id 기준으로 내림차순 정렬
    // SQL :
    // SELECT * FROM member
    // WHERE user_id = ? AND user_name = ?
    // ORDER BY id DESC
    // LIMIT 5
    List<MemberEntity> findFirst5ByUserIdAndUserNameOrderByIdDesc(
            String userid, String username
    );

    // 특정 날짜 이전(또는 같음)에 가입한 멤버가 존재하는지 여부를 반환
    // SQL: SELECT EXISTS(SELECT * FROM member WHERE joindate <= ?)
    Boolean existsByJoindateLessThanEqual(LocalDate date);

    // SQL: SELECT COUNT(*) FROM member WHERE LOWER(user_name) LIKE LOWER(?)
    // IgnoreCaseLike → 대소문자 무시 + LIKE 사용
    long countByUserNameIgnoreCaseLike(String username);

    //JPA에서 SQL을 사용할 방법
    //1. JPQL
    //   - 표준 ANSI SQL을 지원한다.
    //   - 특정 데이터베이스에 종속적이지 않다.
    //   - from절 뒤에는 엔티티 클래스이름을 넣어준다.(소문자로 하면 에러)
    @Query(value = "SELECT m FROM MemberEntity m WHERE m.userId = :userid")
    List<MemberEntity> findByUserId_JPQL(@Param("userid") String userid);

    //2. Native SQL
    // -  특정 DBMS에 종속적인 기능을 제공한다.
    // 예) MySql : LIMIT 5, now(), AUTO_INCREMENT
    //     Oracle : sysdate, sequence
    // Update, Insert, Delete문 @Modify, @Transaction을 추가해야 됨
    //:userid처럼 data 바인당하는 부분만 좀 다르고 나머지는 기존 sql과 거의 유사
    @Query(value = "SELECT * FROM member WHERE User_id = :userid",
            nativeQuery = true)
    // versionUp되면서 @Param("userid") 이것을 꼭  써줘야 매칭이 되는듯 (원래는 똑같이 써놓으면 알아서 매칭됐었음)
    List<MemberEntity> findByUserId_Native(@Param("userid") String userid);

    @Modifying
    @Transactional
    @Query(value = "UPDATE member SET user_id = :userid WHERE id = :id",
            nativeQuery = true)
    int updateById_Native(@Param("id")Long id,@Param("userid") String userid);


    
    // ============= 연습문제 ==================
    
    // 1. member table안에 암호가 "1234"인 회원이 있는지 테스트. (JPA)
    Boolean existByUserPw(String userPw);
    Boolean existByUserId(String userPw);

    // 2. 23년도 3우러에 가입한 회원의 수가 1인지 테스트
    Boolean existByJoindateBetween(LocalDate start, LocalDate end);

    // 3. "lee"라는 아이디로 회원가입하고자 할 때, 아이디 중복인지 테스트
//    Boolean existByUserId(String userpw);

    // 4.
    @Modifying
    @Transactional
    @Query(value = "UPDATE member SET user_id, user_name, user_pw = :userid , :userName, :userPw WHERE id = :id",
            nativeQuery = true)
    int updateById_Native(@Param("userid") String userid, @Param("userPw") String userPw, @Param("userName") String userName );

}