// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, organization, subject, message } =
      await request.json();

    const response = await fetch("https://yourwordpresssite.com/wp-json/custom/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, organization, subject, message }),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } else {
      const errorText = await response.text();
      console.error("WordPress API error:", errorText);
      return NextResponse.json({ error: "Failed to send email" }, { status: response.status });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}