package com.study.Ex03Auwired;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
    @GetMapping("/")
    @ResponseBody
    public String main() {
        return "스프링부트 웹서버입니다.";
    }
    
    // 1. 필드 주입
    @Autowired
    private Member member;
    
    @GetMapping("/member")
    @ResponseBody
    public String member() {
        member.setName("이순신");
        return "member.getName() = " + member.getName();
    }

    @Autowired
//    @Qualifier("tossCard")
    ICard iCard;    // 인터페이스 구현객체를 주입해달라.
                    // 구현객체 : BCCard, TossCard 2개가 있다. (지금은 둘 중 뭐를 가져올지 몰라서 오류발생함)
    // BCCard / TossCard 둘 중 구현객체를 선택하는 방법은 2가지임
    // 구현객체를 선택하는 방법 : @Qualifier @Primary
    @GetMapping("/card")
    @ResponseBody
    public String card() {
        member.setiCard(iCard);
        member.getiCard().buy("Bag");
        return "Maincontroller.card()";
    }
}
