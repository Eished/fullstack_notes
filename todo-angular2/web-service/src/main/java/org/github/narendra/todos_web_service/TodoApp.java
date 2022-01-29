package org.github.narendra.todos_web_service;

import org.github.narendra.todos_web_service.domain.Todo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

@Configuration
@ComponentScan
@Import(RepositoryRestMvcConfiguration.class)
@EnableAutoConfiguration
@PropertySource("classpath:application.properties")
public class TodoApp extends RepositoryRestConfigurerAdapter {
	
	public static void main(String[] args) {
		SpringApplication springApplication = new SpringApplication(TodoApp.class);
		springApplication.run(args);
	}
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		 config.exposeIdsFor(Todo.class);
	}
}
