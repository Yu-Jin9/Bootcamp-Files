package com.study.springboot;

import lombok.Getter;
import lombok.Setter;

// 두개만 있어도 된다네??
@Getter // @RequestBody
@Setter
public class ReqDto {
    private String loginId;
    private String loginPw;
}
