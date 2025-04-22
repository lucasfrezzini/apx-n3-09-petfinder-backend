import { Resend } from "resend";
import "dotenv/config";

const resend = new Resend(process.env.RESEND_API_KEY!);

export function sendEmailByResend(
  from: string,
  to: string,
  subject: string,
  html: string
) {
  console.log("Sending email to", to);
  console.log("Sending email from", from);

  resend.emails.send({
    from: `${from} <onboarding@resend.dev>`,
    to: to,
    // to: "luquiitas.f@gmail.com",
    subject,
    html,
  });
}
