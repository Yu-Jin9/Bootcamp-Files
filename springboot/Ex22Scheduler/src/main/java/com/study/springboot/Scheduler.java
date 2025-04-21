package com.study.springboot;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.util.Date;

@Component
@Slf4j
@EnableAsync // 비동기적으로 처리하도록 제공하는 스프링 어노테이션
             // 각기 다른 쓰레드에서 실행된다.
public class Scheduler {

    /*
    @Scheduled(fixedRate = 1000) // 1초마다 주기적으로 실행
    public void task1() {
        // currentTimeMillis : time stamp - 1970.00.00.00.00 부터 시작된 밀리초
        log.info("FiexedRate task - {}", System.currentTimeMillis()/1000);
        log.info("FiexedRate task2 - {}", LocalTime.now());
    }
     */

//    @Scheduled(fixedRate = 1000)
//    public void task2() throws InterruptedException {
//        log.info("FixedRate task - {}", LocalTime.now());
//        Thread.sleep(5000); //5초 동안 멈춤
//        log.info("dead!");
//    }


//    static int threadId = 0;
//    @Async  // 비동기적으로 스레드 (task)동작하도록 함
//    @Scheduled(fixedRate = 1000*60*60*24, initialDelay = 5000)
//    public void task3() throws InterruptedException {
//        log.info("FixedRate task - {} -{}",threadId,  LocalTime.now());
//        Thread.sleep(2000); // 2초 동안 멈춤
//        log.info("dead! {} ", threadId++);
//    }


    // Cron 표현식
    // 초(0~59) 분(0~59) 시간(0~23) 일(1~31) 일(1~12) 요일(0~6)
    // spring에서는 리눅스 cron과 달리 연도 설도 설정은 할 수 없다.//
    //                0초 15분 10시 15일 매달 알 수 없는 요일
   // @Scheduled(cron = "0 15 10 15 * ?")
   // @Scheduled(cron = "* * * * * *")
    @Scheduled(cron = "0 45 11 * * *")
    public void task4() {
        SimpleDateFormat sdf= new SimpleDateFormat("yyy-MM-dd HH:mm:ss");
        Date now = new Date();
        String strDate = sdf.format( now );
        log.info("cron task -{}", strDate);
    }

    @Autowired  // 필드 주입
    RestTemplate restTemplate;

    @Scheduled(fixedRate = 5000)
    public void task5() {
        log.info("task5 - {}", LocalTime.now());

        String url = "http://localhost:8080/api/batch-job";
        ResponseEntity response =
                restTemplate.getForEntity(url, String.class);
        log.info((String) response.getBody() );

    }
    

}
