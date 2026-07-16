/**
 * Utility to generate WhatsApp links that work flawlessly across all devices
 * and in-app browsers (e.g., Pinterest, Instagram, Facebook).
 */
export const getWhatsAppLink = (phoneNumber: string = "201050300190", text: string = "") => {
  // Ensure the phone number contains only digits
  const cleanPhone = phoneNumber.replace(/\D/g, "");

  // Detect mobile devices and common social media in-app browsers
  const isMobile = typeof navigator !== "undefined" && 
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
     /Pinterest|Instagram|FBAV|FBAN|Messenger|Snapchat|TikTok/i.test(navigator.userAgent));

  if (isMobile) {
    // Mobile deep link (forces the device to open the native WhatsApp application,
    // bypassing Pinterest/Instagram in-app browser redirect limitations).
    return `whatsapp://send?phone=${cleanPhone}${text ? `&text=${encodeURIComponent(text)}` : ""}`;
  } else {
    // Desktop/web link (redirects smoothly to WhatsApp Web or desktop app).
    return `https://wa.me/${cleanPhone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
  }
};
