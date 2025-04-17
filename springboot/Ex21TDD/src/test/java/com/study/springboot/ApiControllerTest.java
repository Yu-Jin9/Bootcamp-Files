package com.study.springboot;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;

import static org.mockito.BDDMockito.given;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ApiController.class)
class ApiControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockitoBean // 실제 Service클래스를 bean으로 끌어와 줌
    // ApiController에서 주입받은 Bean객체에 대해서 Mock형태로 객체 생성
    MemberService memberService;

    @Autowired
    // api 호출할 때 필요함 ?? 가상으로 호출할 때 ??
    WebApplicationContext context;

    @BeforeEach
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(context)
                .addFilter(new CharacterEncodingFilter("UTF-8", true))
                .alwaysDo(print())
                .build();
    }

    @Test
    void loginAction() throws Exception{
        //given when
        // 아래의 given() 주의 -> import static org.mockito.BDDMockito.given;
        given(memberService.loginAction(new MemberDto("hong", "1234")));
        // loginAciton 함수가 제대로 동작하는 조건을 기술한다.

        //then
        // 기대하는 응답 DTO 객체 생성
        ResDto resDto = ResDto.builder()
                .status("ok")
                .message("로그인 성공")
                .build();
        MemberDto dto = MemberDto.builder()
                .loginId("hong")
                .loginPw("1234")
                .build();
        Gson gson = new Gson(); // 문자열로 바꿔줌?
        String jsonString = gson.toJson(dto);
        // Jacson 라이브러리가 Springboot의 공식 라이브러리이다.
        // @ModelAttribute, @RequestBody, @ResponseBody
        // *기본생성자가 없으면 오류!!!!!!!!!! (Jackson lib가 기본생성자를 사용함)
        String jsonString2 = new ObjectMapper().writeValueAsString(dto);

        mockMvc.perform(post("/api/v1/loginAction")
                    // dto객체에 있는 것을 gson이 json으로 바꿔줌
                    .content(gson.toJson(dto)) // JSON 문자열로 넣어줘야 함 (Body에)
                    .contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.status").value("ok"))
                .andExpect(jsonPath("$.message").exists())
                .andExpect(status().isOk())
                .andDo(print());

        // verify : 해당 객체의 메소드가 실행되었는지를 체크해 줌
        verify(memberService).loginAction(new MemberDto("hong", "1324"));

    }
}