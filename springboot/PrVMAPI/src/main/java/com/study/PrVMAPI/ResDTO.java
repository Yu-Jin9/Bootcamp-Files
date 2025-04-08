package com.study.PrVMAPI;

import lombok.Data;

@Data
public class ResDTO<T> {
    private String status;
    private String message;
    private T result;
}
