package com.study.Ex03Auwired;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Primary
@Component("cardToss")
public class TossCard implements ICard{
    @Override
    public void buy(String itemName) {
        System.out.println("TossCard itemName = " + itemName);
    }
}
