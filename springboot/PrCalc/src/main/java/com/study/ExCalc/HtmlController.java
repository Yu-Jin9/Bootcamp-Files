package com.study.ExCalc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HtmlController {

    @GetMapping("/")
    public String main() {
        return "calc";
    }
}
