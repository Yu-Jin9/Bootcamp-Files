package com.study.springboot;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {
    @Bean
    public RestTemplate restTemplate() {    // RestTemplate를 주입 받아서 사용하면 됨?
        return new RestTemplate();
    }
}
