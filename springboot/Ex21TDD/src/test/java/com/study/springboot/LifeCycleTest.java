package com.study.springboot;


import org.junit.jupiter.api.*;

public class LifeCycleTest {

    @Test
    @DisplayName("테스트1")
    void test1() {
        System.out.println(" 테스트1 ");
    }

    @Test
    @DisplayName("테스트2 - 비활성화")
    @Disabled // LifeCycleTest.class로 Test 전체 실행 시, 이 표시가 들어간 Test는 건너뜀
    void test2() {
        System.out.println("테스트2");
    }

    @BeforeAll //테스트 클래스 기준으로 테스트 메소드들이 실행되기 전에 한번 실행
    static void before() {
        System.out.println("beforeAll");
    }

    @AfterAll //테스트 클래스 기준으로 테스트 메소드들이 실행된 후에 한번 실행
    static void afterAll() {
        System.out.println("afterAll");
    }

    @BeforeEach // 각 테스트 메소드가 실행되기 전에 매번 실행
    void beforeEach() {
        System.out.println("beforeEach");
    }

    @Test
    @DisplayName("테스트3")
    void test3() {
        System.out.println(" 테스트3 ");
    }

    @AfterEach  // 각 테스트 메소드가 실행된 후에 매번 실행
    void afterEach() {
        System.out.println("afterEach");
    }
}
