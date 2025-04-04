package com.study.ExCalc;

import lombok.Data;

@Data
public class ReqDTO {
    private int num1;
    private int num2;

    public int plus(int num1, int num2) {
        return num1 + num2;
    }

    public int minus(int num1, int num2) {
        return num1 - num2;
    }

    public int mul(int num1, int num2) {
        return num1 * num2;
    }

    public int div(int num1, int num2) {
        if(num2 ==0) {
            return 0;
        }
        return num1 / num2;
    }
}

