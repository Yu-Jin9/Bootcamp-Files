package com.study.Ex08Param;

import lombok.Value;
import org.springframework.stereotype.Component;

// lombok의 @Value
// final, private, getter, setter, equals, toString 이 자동 생성됨
// setter가 빠짐 => 나중에 효율이나 오류가 생김 (Entity 할 때)

@Value
public class Member2 {
    String username;
    String password;
}
