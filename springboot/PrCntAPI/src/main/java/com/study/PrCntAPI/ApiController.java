package com.study.PrCntAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
//                                  응답을 body에 넣어서 하겠다.
@RestController // @Controller + @ResponseBody
@RequestMapping("/api/v1")
 class ApiController {

    // 서버의 응답은 JSON 문자열로
    // { count : 1 }
    @GetMapping("/")    // localhost:8080/api/v1/
    public String main() {
        return "Api Server OK";
    }

    @Autowired
    private Counter counter;

    // @ResponseBody 여기에 써도 되고 Counter 옆에 써도 됨
    @GetMapping("/plus")
    public @ResponseBody Counter plus() {
        counter.setCount(counter.getCount() + 1);
        return counter;
        // { count : 1 } => 이렇게 JSON 으로 보냄
    }

    @GetMapping("/minus")
    public @ResponseBody Counter minus() {
        counter.setCount(counter.getCount() - 1);
        return counter;
    }

}
