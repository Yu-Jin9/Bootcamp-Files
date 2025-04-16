package com.example.springboot;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.slf4j.LoggerFactory; // slf4j => 이게 호환성이 제일 높음
// 현업에서 slf4j 많이 사용
import org.slf4j.Logger;

@Slf4j
public class LogTest extends Ex20LoggerApplicationTests{

    static int count = 0;

    @Test
    public void testSlf4j() {
        log.trace("slf4j trace 로깅 {}", count++);
        log.debug("slf4j trace 로깅 {}", count++);
        log.info("slf4j trace 로깅 {}", count++);
        log.warn("slf4j trace 로깅 {}", count++);
        log.error ("slf4j trace 로깅 {}", count++);
    }

    @Test
    public void TestLogger() {
        Class myClass = LogTest.class;
        // class 객체는 클래스에 대한 모든 정보(멤버함수, 필드, 어노테이션, 생성자)
        // 담고 있다.
        Logger logger = LoggerFactory.getLogger(LogTest.class);
        logger.trace("trace 로깅 {}", count++);   // console에는 안뜸
        logger.debug("debug 로깅 {}", count++);
        logger.info("info 로깅 {}", count++);
        logger.warn("warn 로깅 {}", count++);
        logger.error("error 로깅 {}", count++);   // console에는 안뜸
    }

}
