package com.study.springboot;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;

@Slf4j
@Configuration  // Config 클래스에서 외부 라이브러리에 대한 설정을 한다.
public class SchedulerConfig implements SchedulingConfigurer {

    // SchedulingConfigurer에 커서 올려서 메소드 자동생성 기능 사용
    @Override
    public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
        // Thread Pool 설정 (메모리 양, 스레드를 얼마나 만들 수 있는지 설정)
        ThreadPoolTaskScheduler threadPool =
                new ThreadPoolTaskScheduler();

        // Thread 개수 설정
        int n = Runtime.getRuntime().availableProcessors(); // cpu의 코어 갯수
        log.info("core갯수 - {}", n);
        threadPool.setPoolSize(n);
        threadPool.initialize();

        taskRegistrar.setScheduler(threadPool);
    }
}
