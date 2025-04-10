package com.study.Calc.API;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@xmlns/RestController //@Controller + @ResponseBody
@RequestMapping("/api/v1")
public class ApiController {
    @PostMapping("/calc-submit")
    public @ResponseBody ResDto calcSubmit(@RequestBody ReqDto dto) {

        return null;
    }
}