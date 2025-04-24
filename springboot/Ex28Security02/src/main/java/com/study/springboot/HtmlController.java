package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HtmlController {

    @GetMapping("/")
    @ResponseBody
    public String main() {
        return "시큐리티 활용";
    }

    @GetMapping("/loginForm")
    public String loginForm() {
        return "loginForm";
    }
}
