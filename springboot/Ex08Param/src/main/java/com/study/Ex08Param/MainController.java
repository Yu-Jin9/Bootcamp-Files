package com.study.Ex08Param;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@Controller
public class MainController {
    @GetMapping("/")
    public String main() {
        return "redirect:loginform";
    }
    @RequestMapping("/loginform")
    public String loginForm() {
        return "login_form";
    }
    @RequestMapping("loginAction1")
    public String loginAction1(HttpServletRequest req,
                               // 매개변수가 Member객체에 매핑된다.
                               Member member,
                               Model model) {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        System.out.println("username = " + username);
        System.out.println("password = " + password);

        System.out.println("username = " + member.getUsername());

        model.addAttribute("member", member);

        return "loginResult2";
    }

    // @PathVariable : 호출 경로를 매개 변수로 받을 수 있다.
    // url에 "http://localhost:8080/loginAction1/Hong/1234" 이렇게 주면 결과 확인 가능
    @RequestMapping("/loginAction1/{username}/{password}")
    public String loginAction1(@PathVariable("username") String username /*String username에서 username은 꼭 이거 아니어도 됨*/
                                ,@PathVariable("password") String password
                               , Model model) {
        System.out.println("username = " + username + ", password = " + password + ", model = " + model);
        model.addAttribute("username", username);
        model.addAttribute("password", password);
        return "loginResult";
    }

    // 이 경우는 login_form.html에서 loginAction4로 바꿔주고
    // localhost:8080/loginform에서 로그인 하면 결과 확인 가능
    @RequestMapping("/loginAction4")
    public String loginAction2(@RequestParam Map<String, Object> map,
                               Model model) {
        System.out.println("map = " + map + ", model = " + model);
        System.out.println("username = " + map.get("username"));
        System.out.println("password = " + map.get("password"));
        model.addAttribute("map", map);
        return "loginResult3";  // map 객체를 전달
    }
}
/*  FE에서 fetch함수 (form태그)의 파라미터 값을 받는 방법
*   1. request.getParameter()
*   2. Member 객체 매핑
*   3. Map 객체 매핑
*/


