interface IEmailRequest {
  to: string;
  subject: string;
  text: string;
}

interface ISendEmailPayload {
  to?: string;
  subject?: string;
  text: string;
}
