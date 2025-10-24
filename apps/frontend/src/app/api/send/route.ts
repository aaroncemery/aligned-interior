import { EmailTemplate } from "@/components/Forms/EmailTemplate";
import { Resend } from "resend";
import * as React from "react";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await request.json();

    console.log("Form data received:", formData);
    console.log("Resend API Key exists:", !!process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Contact Submission <amanda@alignedinterior.com>",
      to: ["amanda@alignedinterior.com"],
      subject: "Hello world",
      react: EmailTemplate(formData) as React.ReactElement,
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    console.error("Caught error in API route:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
