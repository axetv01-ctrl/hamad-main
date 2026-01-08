import { RequestHandler } from "express";
import fetch from "node-fetch";

// Expects environment variables:
// WHATSAPP_PHONE_NUMBER_ID - the WhatsApp Business phone number ID (Facebook Graph)
// WHATSAPP_TOKEN - Bearer token for WhatsApp Cloud API
// WHATSAPP_RECIPIENT - destination phone number in international format (e.g. 923321588393)

export const handleSendWhatsapp: RequestHandler = async (req, res) => {
  const { name, email, subject, message } = req.body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!process.env.WHATSAPP_PHONE_NUMBER_ID || !process.env.WHATSAPP_TOKEN) {
    return res.status(500).json({ error: "WhatsApp not configured on server" });
  }

  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_TOKEN;
  const recipient = process.env.WHATSAPP_RECIPIENT;

  // Build message body
  const bodyText = `New contact form submission:\nName: ${name || "(none)"}\nEmail: ${email || "(none)"}\nProject: ${subject || "(none)"}\nMessage: ${message || "(none)"}`;

  try {
    const url = `https://graph.facebook.com/v17.0/${phoneNumberId}/messages`;
    const payload = {
      messaging_product: "whatsapp",
      to: recipient,
      type: "text",
      text: { body: bodyText },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(500).json({ error: "WhatsApp API error", detail: text });
    }

    const data = await response.json();
    return res.status(200).json({ ok: true, data });
  } catch (err) {
    return res.status(500).json({ error: "Request failed", detail: String(err) });
  }
};
