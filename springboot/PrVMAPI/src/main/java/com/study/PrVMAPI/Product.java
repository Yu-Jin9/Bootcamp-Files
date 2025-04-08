package com.study.PrVMAPI;

import lombok.Data;

import java.time.LocalDate;

@Data
public class Product {
    private String name; // 상품명
    private int price; // 가격
    private LocalDate limit_date; // 유통기한

    
}
