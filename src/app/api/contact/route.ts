import { NextResponse } from 'next/server';
import { mailer } from '@/lib/mailer';

export const runtime = 'nodejs';

type Body = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  website?: string;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Partial<Body>;

    // Honeypot: if filled, treat as spam
    if (data.website) return NextResponse.json({ ok: true });

    // Minimal validation
    const name = (data.name || '').trim();
    const email = (data.email || '').trim();
    const message = (data.message || '').trim();
    const phone = (data.phone || '').trim();
    const subject =
      (data.subject || 'Website Enquiry').trim() || 'Website Enquiry';

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing fields' },
        { status: 400 }
      );
    }

    const to = process.env.MAIL_TO!;
    const from = process.env.MAIL_FROM || process.env.SMTP_USER!;

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      '',
      message,
    ].filter(Boolean);

    const transporter = mailer();
    await transporter.sendMail({
      to,
      from,
      replyTo: `${name} <${email}>`,
      subject,
      text: lines.join('\n'),
    });

    return NextResponse.json({ ok: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: 'Mail failed' },
      { status: 500 }
    );
  }
}
