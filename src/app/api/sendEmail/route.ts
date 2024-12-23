import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { to, subject, html }: IEmailRequest = await req.json();

  if (!to || !subject || !html) {
    return new Response(
      JSON.stringify({ message: 'Missing required fields' }),
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), {
      status: 500,
    });
  }
}
