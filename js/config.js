// ===========================================================
// CONFIGURATION — edit these values for your own club.
// See README.md for step-by-step setup instructions.
// ===========================================================

const CONFIG = {

  // The CSV export link from Excel Online's "Publish to the web" feature.
  // (A direct OneDrive share link was tried first but blocked by CORS —
  // Publish to the web is specifically built to allow cross-site fetches.)
  // Columns must be, in this exact order:
  // 1) Age Range   2) Weekday   3) Start Time (HH:MM, 24hr)
  // 4) End Time (HH:MM, 24hr)   5) Max Capacity   6) Current Signups
  CSV_URL: "https://YOUR-ONEDRIVE-PUBLISHED-CSV-LINK-HERE",

  // EmailJS credentials (from emailjs.com — Account > General, and
  // Email Services / Email Templates in your EmailJS dashboard).
  EMAILJS_PUBLIC_KEY: "YOUR_EMAILJS_PUBLIC_KEY",
  EMAILJS_SERVICE_ID: "YOUR_EMAILJS_SERVICE_ID",
  EMAILJS_TEMPLATE_ID: "YOUR_EMAILJS_TEMPLATE_ID",

  // How often (in minutes) to automatically re-check the spreadsheet
  // for updated availability while someone has the page open.
  REFRESH_MINUTES: 5,

  // Calendar display window (24hr). Adjust to match your club's hours.
  CALENDAR_START_HOUR: 8,
  CALENDAR_END_HOUR: 21,

  // Once spaces left drops to this number or below, the calendar switches
  // from "Open" to "Only X left" so it reads as urgency rather than a
  // slightly odd-looking countdown from the very first booking.
  LOW_AVAILABILITY_THRESHOLD: 5,
};
