package com.study.ExCalc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calc")
public class CalcController {

    @PostMapping("/{operation}")
    @ResponseBody
    public ResDTO calc( @PathVariable String operation,@RequestBody ReqDTO reqDto) {
        int num1 = reqDto.getNum1();
        int num2 = reqDto.getNum2();
        Integer result = null;

        System.out.println("operation = " + operation + ", reqDto = " + reqDto);

        switch (operation) {
            case "plus" :
                result = reqDto.plus(num1, num2);
                break;
            case "minus" :
                result = reqDto.minus(num1, num2);
                break;
            case "mul" :
                result = reqDto.mul(num1, num2);
                break;
            case "div" :
                result = reqDto.div(num1, num2);
                break;
        }

        ResDTO resDto = new ResDTO();
        resDto.setResult(result);
        resDto.setStatus("Ok");
        resDto.setMessage("연산 완료");
        return resDto;
    }
}
