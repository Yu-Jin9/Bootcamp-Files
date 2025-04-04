package com.study.Ex10RestAPI;

import lombok.Data;

@Data
public class ResDTO {
    // {status : "OK", message : "로그인 되었습니다."} 이건 그냥 원하는거 적기 (자동X)
    private String status;
    private String message;
}
