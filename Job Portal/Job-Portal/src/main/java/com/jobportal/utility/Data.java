package com.jobportal.utility;

public class Data {
    public static String getMessageBody(String otp, String name){
        return "<!DOCTYPE html>" +
        "<html>" +
        "<head>" +
        "<title>Your OTP Code</title>" +
        "<style>" +
        "body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }" +
        ".email-container { max-width: 500px; margin: 0 auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); text-align: center; }" +
        ".header { font-size: 22px; font-weight: bold; color: #333; }" +
        ".otp-code { font-size: 24px; font-weight: bold; color: #e63946; background: #ffe5e5; padding: 10px 20px; display: inline-block; border-radius: 5px; margin: 10px 0; }" +
        ".footer { font-size: 14px; color: #777; margin-top: 20px; }" +
        ".footer a { color: #007bff; text-decoration: none; }" +
        "</style>" +
        "</head>" +
        "<body>" +
        "<div class='email-container'>" +
        "<div class='header'>Your OTP Code</div>" +
        "<p>Hello "+name+",</p>" +
        "<p>Use the following One-Time Password (OTP) to complete your verification process:</p>" +
        "<div class='otp-code'>" + otp + "</div>" +
        "<p>This OTP is valid for <b>10 minutes</b>. Please do not share it with anyone.</p>" +
        "<p>If you did not request this code, please ignore this email.</p>" +
        "<div class='footer'>" +
        "<p>Best Regards,</p>" +
        "<p>Job Portal Team</p>" +
        "</div>" +
        "</div>" +
        "</body>" +
        "</html>";

    }
}
// $2a$10$yQxZlymxdLhuIh6XyVZ3Du.u.DerIrofN3cB68nh6JO/VrGFNP/FO