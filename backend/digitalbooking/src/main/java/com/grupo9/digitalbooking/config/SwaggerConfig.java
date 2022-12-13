package com.grupo9.digitalbooking.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;


import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Configuration
public class SwaggerConfig implements WebMvcConfigurer {
    @Bean
    public Docket api(){
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .securityContexts(Arrays.asList(securityContext()))
                .securitySchemes(Arrays.asList(apiKey()))
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .tags(new Tag("Products", "Product Controller"))
                .tags(new Tag("Categories", "Category Controller"))
                .tags(new Tag("Cities", "City Controller"))
                .tags(new Tag("Users", "User Controller"))
                .tags(new Tag("Roles", "Role Controller"))
                .tags(new Tag("Authentication", "Authentication Controller"))
                .tags(new Tag("Reservations", "Reservation Controller"))
                .tags(new Tag("Attributes", "Product Attribute Controller"))
                .tags(new Tag("Images", "Images Controller"));
    }

    private ApiKey apiKey(){
        return new ApiKey("JWT","Authorization", "header");
    }
    private SecurityContext securityContext(){
        return SecurityContext.builder().securityReferences(defaultAuth()).build();
    }
    private List<SecurityReference> defaultAuth(){
        AuthorizationScope authorizationScope = new AuthorizationScope("global","accessEverything");
        AuthorizationScope[] authorizationScopes=new AuthorizationScope[1];
        authorizationScopes[0]=authorizationScope;
        return Arrays.asList(new SecurityReference("JWT", authorizationScopes));
    }

    private ApiInfo apiInfo(){
        return new ApiInfo("Airc2c",
                "Aplicación desarrollada para aplicar los conocimientos adquiridos a lo largo del primer track de la carrera de CTD. Este documento contiene toda la información para utilizar la API de Airc2c.\n" +
                        "Grupo 9\n" +
                        "   - Cardenas, Giovanny\n" +
                        "   - Diaz, Cristian\n" +
                        "   - De la Ossa, Martha\n" +
                        "   - Gutierrez, Henry\n" +
                        "   - Iójimo, Virginia \n" +
                        "   - Justel, Carlos Ignacio",
                "V.0.0.1",
                "Terms of service",
                new Contact("Airc2c", "http://0521ptc2n2-grupo9-airc2cfronts3.s3-website.us-east-2.amazonaws.com/","airc2c@gmail.com"),
                "Licencia",
                "licencia.com",
                Collections.emptyList());
    }
}
