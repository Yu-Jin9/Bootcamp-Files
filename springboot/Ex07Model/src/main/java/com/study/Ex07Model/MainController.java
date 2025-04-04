package com.study.Ex07Model;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

//import java.net.http.HttpResponse; => 잘못된 것

// Servlet : 자바로 웹 서버에서 실행되는 프로그램 -> 클라이언트의 요청을 처리, 응답 생성해줌

@Controller
public class MainController {   // httpservlet클래스를 상속받아서, 서블릿으로 등록됨
    
//    개발자에 따라서 index, root, main 등 다양하게 명칭함
//    public String index()
//    public String root()
    @GetMapping("/")    // request mapping 코드
    public String main() {  // Servlet Method
        //return "index"; //index.html로 응답함
        return "redirect:/index"; // => 주소줄이 바뀜 "/index"
        //return "forward:/index"; // => 주소줄이 안바뀜
    }

    @GetMapping("/index")
    // 이렇게 주입 받아서 사용할 수 있음
    public String index(HttpServletRequest request, HttpServletResponse response, HttpSession session) {
        return "index";
    }

    @RequestMapping("/model1") // 모든 타입 (GET/POST/PUT/SELETE) 요쳥을 받을 수 있다.
    public String model1(HttpServletRequest request) {
        request.setAttribute("name", "홍길동");
        request.setAttribute("age", "30");

        request.getSession().setAttribute("isLogin", "true");

        return "index";
    }

    @GetMapping("/post-form")
    public String postForm() {
        return "postForm";  //postForm.html 파일을 반환
    }
    @GetMapping("/model2") // Get localhost:8080/model2?name=홍길동&age=40
    @PostMapping("/model2")
    public String model2(HttpServletRequest request) {
        String param_name = request.getParameter("name"); // Input 태그 name 속성의 값
        String param_age = request.getParameter("age");
        request.setAttribute("name", param_name);
        request.setAttribute("age", param_age);
        return "index";
    }
    // ModelAndView : 모델(데이터)와 View(HTML)을 동시에 저장하는 객체
    @RequestMapping("/model3") //localhost:8080/model3
    public ModelAndView model3(ModelAndView mv){
        mv.addObject("name", "춘향이");
        mv.addObject("age", "18");
        mv.setViewName("index");
        return mv;
    }
}


