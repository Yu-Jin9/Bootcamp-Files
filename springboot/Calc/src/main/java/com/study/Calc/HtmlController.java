package com.study.Calc;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HtmlController {
    @GetMapping("/")
    public String main(){
        return "index";
    }
    @GetMapping("/calc-submit")
    public String calcSubmit(@RequestParam("num1") String number1,
                             @RequestParam("num2") String number2,
                             @RequestParam("calType") String calType,
                             Model model) {
        System.out.println("number1 = " + number1 + ", number2 = " + number2 + ", calType = " + calType );

//        if( calType == "add") 이렇게 하면 주소 비교임.
       // 이렇게 .equals("비교할 문자열") 이게 문자열 비교임.
        int result = 0;
        if(calType.equals("add")) {
            int num1 = Integer.parseInt(number1);
            int num2 = Integer.parseInt(number2);
            result = num1 + num2;
        }

        model.addAttribute("num1", number1);
        model.addAttribute("num2", number2);
        model.addAttribute("result", result);
        return "index";
    }


}