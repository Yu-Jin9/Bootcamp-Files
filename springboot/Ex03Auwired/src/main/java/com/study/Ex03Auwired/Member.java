package com.study.Ex03Auwired;

import org.springframework.stereotype.Component;

@Component("member")  // 빈의 이름을 직접 지정가능
public class Member {
    private String name;
    private ICard iCard;

    //기본 생성자
    public Member() { }
    //매개변수 생성자
    public Member(String name, ICard iCard) {
        this.name = name;
        this.iCard = iCard;
    }
    //Getter/Setter
    public ICard getiCard() {
        return iCard;
    }

    public String getName() {
        return name;
    }

    public void setiCard(ICard iCard) {
        this.iCard = iCard;
    }

    public void setName(String name) {
        this.name = name;
    }
}
