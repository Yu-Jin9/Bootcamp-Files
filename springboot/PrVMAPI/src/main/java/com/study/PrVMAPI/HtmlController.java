package com.study.PrVMAPI;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HtmlController {

    @GetMapping("/")
    public String main() {
        return "main";
    }

    @GetMapping("/addPage")
    public String addPage() {
        return "addPage";
    }

    @GetMapping("/modifyPage")
    public String modifyPage() {
        return "modifyPage";
    }
}
