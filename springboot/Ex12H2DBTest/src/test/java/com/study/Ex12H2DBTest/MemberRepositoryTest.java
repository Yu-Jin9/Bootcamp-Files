package com.study.Ex12H2DBTest;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.lang.reflect.Member;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

//@SpringBootTest : 테스트환경을 기본설정해주는 어노테이션
@SpringBootTest
class MemberRepositoryTest {
    @Autowired
    MemberRepository memberRepository;

    @BeforeAll //static메소드, 모든 테스트 케이스 전에 호출
    static void setup(){
        System.out.println("@BeforeAll");
    }
    @BeforeEach //@Test 메소드 호출시만다 한번 수행
    void init(){
        System.out.println("@BeforeEach");

        save(); //레코드 추가
    }
    @Test //테스트 메소드(단위 테스트)
    @DisplayName("save 테스트")
    public void save() {
        System.out.println("save()");

        memberRepository.save(
                new MemberEntity(null, "hong", "1234", "홍길동", "ROLE_USER",
                        LocalDate.parse("2025-04-10")));
        memberRepository.save(
                new MemberEntity(null, "tom", "1234", "톰아저씨", "ROLE_USER",
                        LocalDate.parse("2025-04-10")));
        memberRepository.save(
                new MemberEntity(null, "admin", "1234", "관리자", "ROLE_USER",
                        LocalDate.parse("2025-04-10")));

        List<MemberEntity> list = memberRepository.findAll();

        //단정함수(Assert Function)
        //assertEquals( 3, list.size() );

    }
    @Test
    @DisplayName("findById 테스트")
    public void findById() {
        // id가 1인 행을 검색(select)하여 행(레코드) 정보를 가져온다.
        Optional<MemberEntity> optional = memberRepository.findById(100L);
        optional.ifPresent( unwrapped -> {
            //null이 아닐 때 호출되는 람다식
            System.out.println("unwrapped. = " + unwrapped.getUserName() );
            assertEquals("홍길동", unwrapped.getUserName());
        } );
        optional.ifPresentOrElse( (unwrapped) -> {
            //null이 아닐 때 호출되는 람다식
            System.out.println("unwrapped. = " + unwrapped.getUserName() );
            assertEquals("홍길동", unwrapped.getUserName());
        }, () -> fail("member 엔티티가 null입니다.") );
    }
    @Test
    @DisplayName("count 테스트")
    public void count(){
        Long count = memberRepository.count(); //select count(*) from member
        assertEquals(3, count);
    }
    @Test
    @DisplayName("쿼리 테스트")
    public void query() {
        //JPA 쿼리함수 패턴 : find + By + 필드이름 + And + 필드이름
        //        List<MemberEntity> list =
        //                memberRepository.findAll();
        //        assertEquals(3, list.size());

        //        List<MemberEntity> list2 =
        //                //사용자 정의 쿼리 함수
        //                memberRepository.findByUserId("hong");
        //        assertEquals(1, list2.size());

        List<MemberEntity> list3 =
                memberRepository.findFirst5ByUserIdAndUserNameOrderByIdDesc(
                        "hong", "홍길동"
                );
        assertEquals(1, list3.size());

        Boolean isExist =
                memberRepository.existsByJoindateLessThanEqual( LocalDate.now() );
        System.out.println("isExist = " + isExist);

        long count = memberRepository.countByUserNameIgnoreCaseLike("%길%");
        System.out.println("count = " + count);
    }

    // 추가로 작성된거 확인하기
    @Test
    @DisplayName("update")
    public void update() {
        Optional<MemberEntity> optional = memberRepository.findById(1L);
        optional.ifPresentOrElse(
                (memberEntity) -> {
                    memberEntity.update("hong2",
                            memberEntity.getUserPw(),
                            memberEntity.getUserName(),
                            memberEntity.getUserRole());
                    memberRepository.save(memberEntity); // 동일한 ID값이 있으므로, UPDATE됨. (없으면 새로 생성해줌)
                },
                ()-> {
                    fail("memberEntity가 null입니다.");
                }
        );
    }

    // 변수 확인하기
    @Test
    @DisplayName("delete")
    public void delete() {
        Optional<MemberEntity> optional = memberRepository.findById(1L);
        optional.ifPresentOrElse( ()->{
            memberRepository.delete(entity);

            Optional<MemberEntity> optinal2 = memberRepository.findById(1L);
            assertEquals(false, optional2.isPresent());
        }, ()->{
            fail("entity가 null입니다.");
        });
    }

    @Test
    @DisplayName("JPQL 테스트")
    public void jpqlQuery(){
        List<MemberEntity> list =
                memberRepository.findByUserId_JPQL("hong");
        assertEquals(1, list.size());
    }

    @Test
    @DisplayName("Native Query Test")
    public void nativeQuery() {
        List<MemberEntity> list =
                memberRepository.findByUserId_Native("admin");
        assertEquals(1, list.size());

        int count = memberRepository.updateById_Native(1L, "gildong");
        assertEquals(1,count);

        Optional<MemberEntity> optional = memberRepository.findById(1L);
        optional.ifPresentOrElse(unwrapped -> {
            assertEquals("gildong", unwrapped.getUserId());
        }, () -> {
            fail("1L 엔티티를 찾지 못했습니다."); // 오류할 때는 이렇게 fail로 해주는 것임
        });
    }

    // ========== 연습문제 풀이 ===========

    // 1. member table안에 암호가 "1234"인 회원이 있는지 테스트. (JPA)
    @Test
    @DisplayName("Q.1")
    public void ex01() {
        boolean isExists = memberRepository.existByUserPw("1234");
        assertEquals(true, isExists);
    }

    // 2.
    @Test
    @DisplayName("Q.2")
    public void ex02() {
        LocalDate start = LocalDate.of(2023, 3, 1);
        LocalDate end = LocalDate.of(2023, 3, 31);
        boolean isExists = memberRepository.existByJoindateBetween(start, end);
        assertEquals(true, isExists);
    }

    // 3.
    @Test
    @DisplayName("Q.3")
    public void ex03() {
        boolean isExists = memberRepository.existByUserId("hong");
        assertEquals(true, isExists);
    }

    @Test
    @DisplayName("Q.3-2")   // 통과 못하면 맞는 것임
    public void ex03_2() {
        boolean isExists = memberRepository.existByUserId("lee");
        assertEquals(true, isExists);
    }

    // 확인하기
    @Test
    @DisplayName("Q.4")
    public void ex04() {
        int count = memberRepository.updateById_Native("tom", "마이클", "3456");
        assertEquals(1,count);

        // 실제 data를 넣어서 test해보는 경우
        Optional<MemberEntity> optional = memberRepository.findById("tom");
        optional.ifPresentOrElse(unwrapped -> {
            assertEquals("마이클", unwrapped.getUserId());
        }, () -> {
            fail("UserId (\"tom\") 엔티티를 찾지 못했습니다.");
        });
    }


}