import nodemailer from 'nodemailer';

export function mailer() {
  const host = process.env.SMTP_HOST!;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = String(process.env.SMTP_SECURE || 'true') === 'true';
  const user = process.env.SMTP_USER!;
  const pass = process.env.SMTP_PASS!;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}
