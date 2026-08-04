import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "missing fields" },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO ?? "proyectos@savlabscr.com";

  if (!host || !user || !pass) {
    return NextResponse.json(
      { error: "SMTP not configured" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"SAVLABS Web" <${user}>`,
      to,
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — savlabscr.com`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;background:#f5f5f5;padding:24px">
          <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;padding:24px">
            <h2 style="margin:0 0 16px;color:#111">Nuevo mensaje — savlabscr.com</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
            <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
            <div style="margin-top:16px;padding:16px;background:#fafafa;border-radius:6px;color:#333">
              ${escapeHtml(message).replace(/\n/g, "<br/>")}
            </div>
          </div>
        </div>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send error:", error);
    return NextResponse.json(
      { error: "send failed" },
      { status: 500 }
    );
  }
}
