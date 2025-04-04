package com.study.Ex08Param;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
//import org.springframework.beans.factory.annotation.Value;


// @Value의 용도
// 1. springframework의 @Value
//  1) application의 설정값을 주입하는 용도
// 2. lombok의 @Value
//  1) final, private, getter, equals, toString등이 생성됨

@Component
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Member {
    // @Value()
    @Value("${my.username}")
    String username;
    @Value("${my.password}")
    String password;
}
