import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, spotifyLink, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Check if external Formspree or Resend webhook is provided
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (formspreeEndpoint) {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          spotifyLink,
          message,
          _subject: `New Application from ${name} - NAIVEN DISTRIBUTION`,
        }),
      });

      if (!res.ok) {
        throw new Error("Formspree delivery failed");
      }
    } else if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Naiven Submissions <submissions@naivendistribution.com>",
          to: ["contact@naivendistribution.com"],
          reply_to: email,
          subject: `New Artist Submission: ${name}`,
          text: `Artist Name: ${name}\nEmail: ${email}\nSpotify: ${spotifyLink || "N/A"}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Resend delivery failed");
      }
    }

    // Log for internal tracking
    console.log("New artist submission received for contact@naivendistribution.com:", {
      name,
      email,
      spotifyLink,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (err: unknown) {
    console.error("Submission error:", err);
    return NextResponse.json(
      { error: "Failed to submit application. Please email directly." },
      { status: 500 }
    );
  }
}
