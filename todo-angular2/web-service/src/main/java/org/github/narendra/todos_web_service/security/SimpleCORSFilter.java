package org.github.narendra.todos_web_service.security;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

@Component
public class SimpleCORSFilter implements Filter {

	public SimpleCORSFilter() {
	
	}

	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse = (HttpServletResponse) response;

		httpResponse.setHeader("Access-Control-Allow-Origin", httpRequest.getHeader("Origin"));
		httpResponse.setHeader("Access-Control-Allow-Credentials", "true");
		httpResponse.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
		httpResponse.setHeader("Access-Control-Max-Age", "3600");
		httpResponse.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");

		chain.doFilter(request, response);
	}

	public void destroy() {
		
	}
}

