package com.study.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling // 두개를 한번에 혼용해서 사용할 수 없음
// 스케줄링 앱을 사용하고 싶으면 프로젝틀를 두개를 만들어서 두개를 사용해야 됨
@SpringBootApplication
public class Ex22SchedulerApplication {

	public static void main(String[] args) {
		SpringApplication.run(Ex22SchedulerApplication.class, args);
	}

}
