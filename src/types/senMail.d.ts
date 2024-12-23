interface IEmailRequest {
  to: string;
  subject: string;
  html: string;
}

interface ISendEmailPayload {
  to?: string;
  subject?: string;
  html: string;
}
