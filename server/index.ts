import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  // Send WhatsApp message via WhatsApp Cloud API
  try {
    // lazy import handler
    const { handleSendWhatsapp } = require("./routes/sendWhatsapp");
    app.post("/api/send-whatsapp", handleSendWhatsapp);
  } catch (err) {
    // ignore if file missing
  }

  return app;
}
