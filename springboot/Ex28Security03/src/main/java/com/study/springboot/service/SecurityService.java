package com.study.springboot.service;

import com.study.springboot.UserRole;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SecurityService implements UserDetailsService {

    //스프링 시큐리티의 권한 코드는 항상 "ROLE_" 로 시작해야합니다
    //hasRole(String) : 사용자가 주어진 역할이 있다면 접근을 허용 (인가)
    //hasAuthority(String) : 사용자가 주어진 권한이 있다면 접근을 허용 (인증)
    //예) hasRole("USER")
    //예) hasAuthority("ROLE_USER")

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        // 사용자 아이디를 통해, 사용자 정보와 권한을 스프링 시큐리티에 전달해주는 코드
        List<GrantedAuthority> authorities = new ArrayList<>();
        //테스트로  ADMIN 권한/역할을 넣어주자
        authorities.add( new SimpleGrantedAuthority(UserRole.ADMIN.getValue()));
        //username(아이디) : "hong"
        // pasword(암호) : "1234" 문자열을 Bctypt 사이트(bcrypt-generator.com)에서 암호 생성 후 넣는다.
        return new User("hong", "$2a$12$V5nn32em2CvkqTLS2MTGpuBoJpH0wD75y6Q8LbXRfZrfJxMQChHJq", authorities);

    }
}
