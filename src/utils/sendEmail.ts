import staticData from '@/data/common.json';

const { recipient, subjectPlaceholder } = staticData;

export const sendEmail = async ({
  to = recipient,
  subject = subjectPlaceholder,
  html,
}: ISendEmailPayload) => {
  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to,
      subject,
      html,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    console.log('Email sent:', data.message);
  } else {
    console.error('Failed to send email:', data.message);
  }
};
