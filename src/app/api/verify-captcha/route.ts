import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { captchaValue } = await request.json();

  const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;

  try {
    const { data } = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${captchaValue}`,
      {}
    ).then((res) => res.json());

    if (data.success) {
      return NextResponse.json({
        success: data.success,
        message: "Captcha verified",
      });
    } else {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 500 }
      );
    }
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
