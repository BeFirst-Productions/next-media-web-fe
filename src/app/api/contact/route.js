import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message, service, serviceOther } = body;

    // Determine actual service text
    const serviceText = service === "Others" ? serviceOther : service;

    // Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Consider using environment variable instead
      },
    });

    // Email template
    const htmlTemplate = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f7fb; padding: 30px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(90deg, #6a11cb, #2575fc); padding: 20px; text-align: center;">
            <h2 style="margin: 0; color: #fff; font-size: 22px;">📩 New Website Enquiry</h2>
          </div>

          <!-- Body -->
          <div style="padding: 25px;">
            <p style="font-size: 16px; margin-bottom: 20px;">
              You have received a new enquiry from your website contact form. Here are the details:
            </p>

            <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 15px;">
              <tr>
                <td style="padding: 10px;font-weight: bold; width: 30%;">First Name</td>
                <td style="padding: 10px; background: #fff;">${firstName}</td>
              </tr>
              <tr>
                <td style="padding: 10px;font-weight: bold;">Last Name</td>
                <td style="padding: 10px; background: #fff;">${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px;font-weight: bold;">Email</td>
                <td style="padding: 10px; background: #fff;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px;font-weight: bold;">Service</td>
                <td style="padding: 10px; background: #fff;">${serviceText}</td>
              </tr>
              <tr>
                <td style="padding: 10px;font-weight: bold;">Message</td>
                <td style="padding: 10px; background: #fff;">${message}</td>
              </tr>
            </table>
          </div>

          <!-- Footer -->
          <div style="background: #f1f3f6; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            <p style="margin: 0;">This message was sent automatically from your website contact form.</p>
            <p style="margin: 5px 0 0;">© ${new Date().getFullYear()} Next Digital Marketing. All rights reserved.</p>
          </div>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: email, // Show user's email in "from"
      to: process.env.EMAIL_USER,
      subject: "📩 New Website Contact Form Submission",
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
