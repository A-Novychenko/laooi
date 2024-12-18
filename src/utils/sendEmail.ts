export const sendEmail = async ({ to, subject, text }: ISendEmailPayload) => {
  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to,
      subject,
      text,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    console.log('Email sent:', data.message);
  } else {
    console.error('Failed to send email:', data.message);
  }
};
