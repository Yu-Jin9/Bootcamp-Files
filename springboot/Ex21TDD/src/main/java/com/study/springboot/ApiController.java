package com.study.springboot;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class ApiController {
    @Autowired
    MemberService memberService;
    
    // 로그인 액션(아이디, 암호)
    // 1. DB에서 동일한 아이디와 암호를 가진 행(레코드)이 있는가?
    // 2. 있으면, 로그인 성공
    // 3. 없으면, 로그인 실패

    @PostMapping("/loginAction1")
    public ResDto loginAction(@RequestBody ReqDto reqDto) {

        // controller layer에서는 reqDto사용
        
        MemberDto memberDto = MemberDto.builder()
                .loginId(reqDto.getLoginId())
                .loginPw(reqDto.getLoginPw())
                .build();
        
        // service layer에서는 memberDto 사용
        int result = memberService.loginAction(memberDto);

        ResDto resDto = null;
        if(result == 1) {
            // loginSuccess
            resDto = ResDto.builder()
                    .status("ok")
                    .message("로그인 성공")
                    .build();
        } else {
            // loginFail
            resDto = ResDto.builder()
                    .status("ok")   // 통신은 성공했지만
                    .message("로그인 실패")  // 로그인은 실패했다.
                    .build();
        }

        return resDto;
    }
}
