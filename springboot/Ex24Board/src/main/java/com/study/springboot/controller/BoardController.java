package com.study.springboot.controller;

import com.study.springboot.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    // repository를 바로 쓰는게 아니라 Service를 거쳐서 가는 코드가 좋음
    // Service는 커질 수 있기 때문에..
    // 생성자 주입
    private final BoardService boardService;

    @GetMapping("/")
    public String main(){
        return "redirect:/board/listForm";
    }

    @GetMapping("listForm")
    public String listForm() {
        return "listForm";
    }
}
