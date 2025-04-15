package com.study.springboot.dto;

// html 입력폼(post) <-> DTO <-> DAO(Entity) <-> Mapper XML(Repo 인터페이스) <-> DB

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberDto {

    private Long id;
    private String userId;
    private String userPw;
    private String userName;
    private String userRole;
    @DateTimeFormat(pattern = "yyy-MM-dd")
    private LocalDate joinDate;


}
