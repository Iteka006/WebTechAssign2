package com.web;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebFilter("/login")
public class AuthenticationFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
    	HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        HttpSession session = httpRequest.getSession(false);

        String email = httpRequest.getParameter("email");
        String password = httpRequest.getParameter("password");

        System.out.println("Filter: Filter applied to URL: " + httpRequest.getRequestURI());

        if (session != null && session.getAttribute("userEmail") != null) {
            // User is already authenticated, allow access..
            System.out.println("Filter: Allowing access for user with session: " + session.getAttribute("userEmail"));
            chain.doFilter(request, response);
        } else if (isValidCredentials(email, password)) {
            // Valid credentials, session and redirect to "welcome.html"
            session = httpRequest.getSession(true);
            session.setAttribute("userEmail", email);
            System.out.println("Filter: Creating a new session for user: " + email);
            httpResponse.sendRedirect("welcome.html");
        } else {
            // Invalid credentials, redirect to login page
            System.out.println("Filter: Redirecting to login page due to invalid credentials.");
            httpResponse.sendRedirect("index.html");
        }
    }

    private boolean isValidCredentials(String email, String password) {
        
        return email != null && password != null &&
               email.equalsIgnoreCase("iteka@gmail.com") && password.equalsIgnoreCase("pass");
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
      
    }

    @Override
    public void destroy() {
       
    }
}
