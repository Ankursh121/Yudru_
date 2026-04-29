export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8178422103";
export const WHATSAPP_MESSAGE = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Hello Yudru Drone Solutions, I'm interested in your services and would like to get in touch.";
export const WHATSAPP_URL = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@yudru.com";
export const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 8178422103";
export const CONTACT_ADDRESS = process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "Ganesh Nagar, New Delhi, 110092";
