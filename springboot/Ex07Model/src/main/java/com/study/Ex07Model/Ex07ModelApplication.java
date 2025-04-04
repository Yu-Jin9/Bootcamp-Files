package com.study.Ex07Model;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Java코드에서 UI템플릿(타임리프,JSP,머스테치)으로 데이타 전달
//1. request객체, session객체
//2. GET, POST 파라미터
//3. Model 객체
//4. ModelAndView 객체

//내장객체별 수명주기
//applicaton : 웹브라우저를 닫을 때까지
//session : 로그아웃하기 까지
//request : 요청에 대한 응답하기까지
//model : request와 동일함.

@SpringBootApplication
public class Ex07ModelApplication {

	public static void main(String[] args) {
		SpringApplication.run(Ex07ModelApplication.class, args);
	}

}
