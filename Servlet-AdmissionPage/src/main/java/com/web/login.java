package com.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class login extends HttpServlet{
	 String email, password;
	 
	 public void service(HttpServletRequest req, HttpServletResponse res) {
			email = req.getParameter("email");
			
			password = req.getParameter("password");
			
		
			
			try {
				
				PrintWriter out = res.getWriter();
				
				// ...

				if (email != null && password != null) {
				    if (email.equalsIgnoreCase("iteka@gmail.com") && password.equalsIgnoreCase("pass")) {
				        
				        HttpSession session = req.getSession(true); 
				        session.setAttribute("userEmail", email);

				        // Display the username from the session
				        out.println("Your Email is " + email + " and Your Password is " + password);

				        
				        String storedEmail = (String) session.getAttribute("userEmail");
				        if (storedEmail != null) {
				            out.println("Username from Session: " + storedEmail);
				        }

				        res.sendRedirect("welcome.html");
				    } else {
				        out.println("Invalid email");
				        res.sendRedirect("forgotPassword.html");
				    }
				}

			

				
				
				
			} catch (IOException e) {
				
				e.printStackTrace();
			}
			
			
	 }
	

}
