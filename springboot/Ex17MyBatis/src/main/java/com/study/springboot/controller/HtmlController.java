package com.study.springboot.controller;

import com.study.springboot.dao.IMemberDao;
import com.study.springboot.dto.MemberDto;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class HtmlController {

    // 생성자 주입
    final IMemberDao memberDao;
    // 위 필드 선언하고 final이기 때문에 생성자에서 꼭 초기화 해줘야 함.
    // 그래서 생성자 작성은 필수임
    // 롬복에서 @RequiredArgsConstructor 클래스 위에 써주면 생성자를 자동으로 만들어주기 때문에 굳이 생성자 코드를 안써도 됨
//    public HtmlController(IMemberDao memberDao) {
//        this.memberDao = memberDao;
//    }


    @GetMapping("/")
    public String main(){
        return "redirect:/list";
    }
    @GetMapping("/list")
    public String list(Model model){
        List<MemberDto> list = memberDao.list();
        model.addAttribute("list", list);
        int listcount = memberDao.count();
        model.addAttribute("listcount", listcount);
        return "index";
    }
    @GetMapping("/joinForm")
    public String joinForm(){
        return "joinForm";
    }
    //Content-Type	                    처리 방식   어노테이션
    //application/x-www-form-urlencoded	폼 데이터	   @ModelAttribute 또는 @RequestParam
    //application/json	                JSON 본문   @RequestBody
    @PostMapping("/joinAction")
    @ResponseBody
    //public String joinAction(@RequestParam String userId){
    public String joinAction(@ModelAttribute MemberDto dto){
        System.out.println("dto = " + dto.getUserId());

        try {
            int result = memberDao.insert(dto);
            System.out.println("result = " + result);
            if (result != 1) {
                return "<script>alert('회원가입실패');history.back();</script>";
            }
        }
        catch (Exception e){
            e.printStackTrace();
            return "<script>alert('회원가입실패');history.back();</script>";
        }

        return "<script>alert('회원가입성공');location.href='/list';</script>";
    }


}

