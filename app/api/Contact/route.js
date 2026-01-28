import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables");
      return Response.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send notification to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(18, 113, 255, 0.3);">
                  
                  <!-- Header with Gradient -->
                  <tr>
                    <td style="background: linear-gradient(90deg, rgb(18, 113, 255) 0%, rgb(221, 74, 255) 50%, rgb(100, 220, 255) 100%); padding: 2px;">
                      <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; text-align: center;">
                        <h1 style="margin: 0; font-size: 32px; font-weight: 700; background: linear-gradient(90deg, rgb(18, 113, 255), rgb(221, 74, 255), rgb(100, 220, 255)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                          New Portfolio Message
                        </h1>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      
                      <!-- Name Section -->
                      <div style="margin-bottom: 25px; padding: 20px; background: rgba(18, 113, 255, 0.1); border-left: 4px solid rgb(18, 113, 255); border-radius: 8px;">
                        <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: rgb(100, 220, 255); font-weight: 600;">
                          From
                        </p>
                        <p style="margin: 0; font-size: 20px; color: #ffffff; font-weight: 600;">
                          ${name}
                        </p>
                      </div>
                      
                      <!-- Email Section -->
                      <div style="margin-bottom: 25px; padding: 20px; background: rgba(221, 74, 255, 0.1); border-left: 4px solid rgb(221, 74, 255); border-radius: 8px;">
                        <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: rgb(221, 74, 255); font-weight: 600;">
                          Email Address
                        </p>
                        <p style="margin: 0; font-size: 18px; color: #ffffff;">
                          <a href="mailto:${email}" style="color: rgb(100, 220, 255); text-decoration: none; transition: color 0.3s;">
                            ${email}
                          </a>
                        </p>
                      </div>
                      
                      <!-- Message Section -->
                      <div style="margin-bottom: 25px; padding: 20px; background: rgba(100, 220, 255, 0.1); border-left: 4px solid rgb(100, 220, 255); border-radius: 8px;">
                        <p style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: rgb(100, 220, 255); font-weight: 600;">
                          Message
                        </p>
                        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #e0e0e0; white-space: pre-wrap;">
                          ${message}
                        </p>
                      </div>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 25px 30px; background: rgba(0, 0, 0, 0.3); text-align: center; border-top: 1px solid rgba(100, 220, 255, 0.2);">
                      <p style="margin: 0; font-size: 13px; color: #888; line-height: 1.5;">
                        This message was sent from your portfolio contact form
                      </p>
                      <p style="margin: 8px 0 0 0; font-size: 11px; color: #666;">
                        ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    // Send thank you email to the sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Reaching Out!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(221, 74, 255, 0.3);">
                  
                  <!-- Header with Gradient -->
                  <tr>
                    <td style="background: linear-gradient(90deg, rgb(18, 113, 255) 0%, rgb(221, 74, 255) 50%, rgb(100, 220, 255) 100%); padding: 2px;">
                      <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; text-align: center;">
                        <h1 style="margin: 0; font-size: 32px; font-weight: 700; background: linear-gradient(90deg, rgb(18, 113, 255), rgb(221, 74, 255), rgb(100, 220, 255)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                          Thank You!
                        </h1>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      
                      <!-- Greeting -->
                      <div style="margin-bottom: 30px;">
                        <h2 style="margin: 0 0 20px 0; font-size: 24px; color: rgb(100, 220, 255); font-weight: 600;">
                          Hi ${name}! 👋
                        </h2>
                        <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #e0e0e0;">
                          Thank you for reaching out through my portfolio! I really appreciate you taking the time to connect with me.
                        </p>
                      </div>
                      
                      <!-- Confirmation Box -->
                      <div style="margin-bottom: 30px; padding: 25px; background: rgba(18, 113, 255, 0.15); border-left: 4px solid rgb(18, 113, 255); border-radius: 8px;">
                        <p style="margin: 0 0 15px 0; font-size: 14px; color: rgb(100, 220, 255); font-weight: 600;">
                          ✓ Your message has been received
                        </p>
                        <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #d0d0d0;">
                          I've received your message and will get back to you as soon as possible. I typically respond within 24-48 hours.
                        </p>
                      </div>
                      
                      <!-- Message Copy -->
                      <div style="margin-bottom: 30px; padding: 20px; background: rgba(100, 220, 255, 0.08); border-radius: 8px; border: 1px solid rgba(100, 220, 255, 0.2);">
                        <p style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: rgb(221, 74, 255); font-weight: 600;">
                          Your Message
                        </p>
                        <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #c0c0c0; white-space: pre-wrap;">
                          ${message}
                        </p>
                      </div>
                      
                      <!-- Closing -->
                      <div style="margin-top: 30px;">
                        <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.6; color: #e0e0e0;">
                          Looking forward to connecting with you!
                        </p>
                        <p style="margin: 0; font-size: 18px; font-weight: 600; background: linear-gradient(90deg, rgb(18, 113, 255), rgb(221, 74, 255)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                          Best regards
                        </p>
                      </div>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 25px 30px; background: rgba(0, 0, 0, 0.3); text-align: center; border-top: 1px solid rgba(100, 220, 255, 0.2);">
                      <p style="margin: 0; font-size: 13px; color: #888; line-height: 1.5;">
                        This is an automated confirmation email from my portfolio
                      </p>
                      <p style="margin: 8px 0 0 0; font-size: 11px; color: #666;">
                        Please do not reply to this email
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
