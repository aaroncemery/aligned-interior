import { EmailTemplate } from "@/components/Forms/EmailTemplate";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log("process.env.RESEND_API_KEY", process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Contact Submission <amanda@alignedinterior.com>",
      to: ["amanda@alignedinterior.com"],
      subject: "Hello world",
      react: EmailTemplate(formData) as React.ReactElement,
    });

    console.log(data);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
