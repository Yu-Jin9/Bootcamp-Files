package com.study.Ex03Auwired;

import org.springframework.stereotype.Component;

@Component ("cardBC")
public class BCCard implements ICard{
    @Override
    public void buy(String itemName) {
        System.out.println("BCCard itemName : " +itemName);
    }
}
