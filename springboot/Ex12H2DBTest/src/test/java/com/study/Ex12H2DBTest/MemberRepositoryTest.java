package com.study.Ex12H2DBTest;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

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
    @BeforeEach //@Test 메소드 호출시마다 한번 수행
    void init(){
        System.out.println("@BeforeEach");
    }
    @Test //테스트 메소드(단위 테스트)
    @DisplayName("save 테스트")
    public void save() {
        System.out.println("save()");

//        memberRepository.save(
//                new MemberEntity(null,"hong", "1234", "홍길동", " )
//        )
    }

    @Test
    @DisplayName("findById 테스트")
    public void findById() {
        // id가 1인 행을 검색(select)하여 행(레코드) 정보를 가져온다.
        Optional<MemberEntity> optionalMemberEntity = memberRepository.findById(1L);
        optionalMemberEntity.ifPresent(unwrapped -> {

            System.out.println("unwrapped = " + unwrapped.getuserName());
            assertEquals("홍길동" , unwrapped.getUserName());
        });
        
        optional.ifPresentorElse((unwrapped)-> {
            //null이 아닐 때 호출되는 람다식
            System.out.println("unwrapped = "+ unwrapped.getUserName());
            assertEquals();
        });
    }
    
    @Test
    @DisplayName("count 테스트")
    public void count() {

    }
    
    @Test
    @DisplayName("쿼리 테스트")
    public void query() {
        // JPA 쿼리 함수 패턴 : find + By + 필드 이름 + And +  필드 이름
//        List<MemberEntity> list =
//                memberRepository.findAll();
//        assertEquals(3, list.size());
//
//        List<MemberEntity> list2 =
//                memberRepository.findFirstByUserIdAndUserNameOrderByIdDesc(
//                        "hong", "홍길동"
//                );
//        assertEquals(1, list2.size());

        List<MemberEntity> list3 =
                memberRepository.findFirstByUserIdAndUserNameOrderByIdDesc(
                        "hong", "홍길동"
                );
        assertEquals(1, list3.size());

        Boolean isExist =
                memberRepository.existsByJoindateLessThanEqual(LocalDate.now());
        System.out.println("isExist = " + isExist);
        
        long count = memberRepository.countByUserNameIgnoreCaseLike("%길%");
        System.out.println("count = " + count);

        @Test
        @DisplayName("SPQL 테스트")
        public void jpqlQuery() {
            List<MemberEntity> list =
                    memberRepository.findByUserId_JPQL("hong");
            assertEquals(1, list.size());
        }

    }
}