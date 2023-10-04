package com.web;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import com.web.EmailSender;



public class RegistrationServlet extends HttpServlet {
	 public void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	        // Retrieve the session associated with the current user
	        HttpSession session = request.getSession();

	        String email = request.getParameter("email");
	        String sender = "itekanice@gmail.com";

	        // Check if the email is provided and not empty
	        if (email != null && !email.isEmpty()) {
	        	EmailSender sendEmail = new EmailSender(sender, "xfelncfwkfbdffbc");
	            String recipient = email; // Variable name should start with a lowercase letter
	            String subject = "CONFIRMATION Email";
	            String message = "Hello, your form was successfully submitted.";

	            try {
	                sendEmail.sendEmail(recipient, subject, message);
	                System.out.println("Email sent successfully");

	                // Store email in the session for future use (if needed)
	                session.setAttribute("userEmail", email);

	                // Set the content type to HTML
	                response.setContentType("text/html");

	                // Get the PrintWriter to write the response
	                PrintWriter out = response.getWriter();

	                // Display the session-related message in the response
	                String userEmail = (String) session.getAttribute("userEmail");
	                if (userEmail != null) {
	                    out.println("<html><body>");
	                    out.println("<h1>Session is working. User email: " + userEmail + "</h1>");
	                    out.println("</body></html>");
	                } else {
	                    out.println("<html><body>");
	                    out.println("<h1>Session is not working. User email is not found in the session.</h1>");
	                    out.println("</body></html>");
	                }
	            } catch (Exception e) {
	                e.printStackTrace();
	                System.err.println("Error sending email");
	            }
	        } else {
	            // Handle the case where the email address is missing or empty
	            System.err.println("Invalid or missing email address");
	        }
	    }
}
