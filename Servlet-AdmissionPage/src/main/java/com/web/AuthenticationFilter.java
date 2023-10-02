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

        // Check if the user is logged in by checking the session
        HttpSession session = httpRequest.getSession(false);

        // Check if email and password are provided
        String email = httpRequest.getParameter("email");
        String password = httpRequest.getParameter("password");

        if (session != null && session.getAttribute("userEmail") != null) {
            // User is already authenticated, allow access
            chain.doFilter(request, response);
        } else if (isValidCredentials(email, password)) {
            // Valid credentials, create a session and redirect to "welcome.html"
            session = httpRequest.getSession(true);
            session.setAttribute("userEmail", email);
            httpResponse.sendRedirect("welcome.html");
        } else {
            // Invalid credentials, redirect to login page
            httpResponse.sendRedirect("login.html"); // Change to your login page
        }
    }

    private boolean isValidCredentials(String email, String password) {
        // Implement your logic to validate the credentials here
        // You can check against a database, hard-coded values, etc.
        return email != null && password != null &&
               email.equalsIgnoreCase("iteka@gmail.com") && password.equalsIgnoreCase("pass");
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Initialization code if needed
    }

    @Override
    public void destroy() {
        // Cleanup code if needed
    }
}
