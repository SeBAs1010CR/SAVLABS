"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppBubble() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black text-[#25D366] shadow-[0_0_30px_rgba(37,211,102,0.25)]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  );
}
