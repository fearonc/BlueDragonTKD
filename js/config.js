// ===========================================================
// CONFIGURATION — edit these values for your own club.
// See README.md for step-by-step setup instructions.
// ===========================================================

const CONFIG = {

  // Direct-download link to the OneDrive Excel file (not a "Publish to the
  // web" CSV link — this reads the .xlsx file itself, which works from the
  // OneDrive mobile app's normal Share link with ?download=1 added).
  // Columns must be, in this exact order, on the FIRST sheet of the workbook:
  // 1) Age Range   2) Weekday   3) Start Time (HH:MM, 24hr)
  // 4) End Time (HH:MM, 24hr)   5) Max Capacity   6) Current Signups
  DATA_URL: "https://1drv.ms/x/c/868b1b6402e70eec/IQCDVVsW4PzjToSvwWA3RjL0AWJxf3bDbaQaJt80E_7_i_E?download=1",

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
};
