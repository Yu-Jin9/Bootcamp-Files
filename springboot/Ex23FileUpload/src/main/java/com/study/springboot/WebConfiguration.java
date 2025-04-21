package com.study.springboot;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Configuration
public class WebConfiguration extends WebMvcConfigurationSuppor {

    @Override
    protected void addResourcehandlers (ResourceHandlerRegistry registry) {
        //super.addResourceHandler(registry)
        registry.addResourceHandler("/**")
                .addResourceLocations("file:src/main/reaources/templates/",
                        "file:src/main/resources/static/");
        // 위에서 주소 작성할 때 끝에 "/" 꼭 붙여줘야 함;; 주의하기

    }
}
