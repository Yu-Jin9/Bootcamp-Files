package com.study.springboot;

//단정(Assert) 메서드 : 테스트 케이스의 수행 결과를 판별하는 용도로 사용.
//종류
//assertArrayEquals(a, b) : 배열 a와 b가 일치함을 확인한다.
//assertEquals(a, b) : 객체 a와 b가 일치함을 확인한다. (객체에 정의되어 있는 equals를 통해 비교한다.)
//assertSame(a, b) : 객체 a와 b 가 같은 객체임을 확인 한다. (객체 자체를 비교한다. == )
//assertTrue(a) : 조건 a가 참인지를 확인한다.
//assertFalse(a) : 조건 a가 거짓인지를 확인한다.
//assertNotNull(a) : 객체 a가 null인지 확인한다.
//assertAll() : 모든 종류의 assert를 각각 다 실행한다. 중간에 멈추지 않음.

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Adder {
    public int add(int x, int y) {
        return x + y;
    }
}

public class AssertTest {

    // adder와 adder2는 참조하는 주소값이 다른. 서로 다른 객체이다.
    private final Adder adder = new Adder();
    private final Adder adder2 = new Adder();

    private final String[] arr1 = {"a", "b"};
    private final String[] arr2 = {"a", "b"};

    @Test
    void assertTest() {
        assertArrayEquals( arr1, arr2);
    }

    @Test
    void test2() {
        assertEquals(3, adder.add(1,2));
    }

    @Test
    void assert3() { // 주소값 비교
        assertSame(adder, adder);   // 통과
        
        // 둘은 다른 객체기 때문에 여기서 테스트를 통과하지 못함
        assertSame(adder, adder2);  // 실패
    }
    @Test
    void assert4() {  // 조건이 true냐??
        assertTrue(3<10);   // true면 통과
//        assertTrue(3>10); // => 여기서 실패
        assertFalse(3>10);  // false면 통과
        
    }

    @Test
    void test5() {  
        assertNotNull(adder); // null이 아니면 통과
    }

    @Test
    void test6() {
        assertAll (
                // 람다식 테스트 코드 (람다식 지원 됨)
                (  ) -> { assertTrue(true, "assertTrue fail."); },
                // (아래)여기서 실패
                (  ) -> { assertTrue(false, "assertTrue fail."); },
                (  ) -> {
                    Object obj = new Object();
                    assertNotNull (obj, "obj Not Null.");
                }
        );
    }

}
