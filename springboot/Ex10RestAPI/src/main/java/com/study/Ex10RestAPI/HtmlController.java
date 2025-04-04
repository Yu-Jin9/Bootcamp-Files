package com.study.Ex10RestAPI;
// html로 응답함

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HtmlController {
    @GetMapping("/")
    public String main() {
        return "login";
    }
}