package com.study.springboot.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// 회원가입 / 로그인 관련
@Controller
public class MemberController {

    @GetMapping("/loginForm")
    public String loginForm() {
        return "loginForm";
    }
}
