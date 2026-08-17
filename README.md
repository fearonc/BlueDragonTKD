# Riverside Sports Club — Booking Site

A two-page, no-backend booking site for GitHub Pages:

- `index.html` — home page describing your classes, with a **Book Now** button
- `booking.html` — age-range filter + weekly calendar with live spaces, and a
  sign-up popup that emails you the booking details
- `css/style.css` — all styling
- `js/config.js` — **the only file you need to edit** to connect your spreadsheet and email
- `js/app.js` — calendar + booking logic (no editing needed)

There is no server involved. Two free third-party services do the two jobs a
static site can't do on its own:

| Job | Service |
|---|---|
| Read live spreadsheet data | Excel Online's **Publish to the web** (CSV export link) |
| Send the sign-up email | **EmailJS** (free tier: 200 emails/month) |

---

## 1. Set up your spreadsheet

Your OneDrive Excel file needs **exactly these six columns, in this order**,
starting from row 1 (a header row is fine — the site ignores any row where
column 3 isn't a time):

| Age Range | Weekday | Start Time | End Time | Max Capacity | Signups |
|---|---|---|---|---|---|
| Under 8s | Monday | 16:00 | 17:00 | 12 | 7 |
| 9–12 years | Tuesday | 17:00 | 18:00 | 14 | 14 |
| Adults | Friday | 19:00 | 20:30 | 20 | 3 |

Notes:
- **Times must be 24-hour `HH:MM`** (e.g. `16:00`, not `4pm`).
- Your original 4-column plan didn't include a time — I added **Start Time**
  and **End Time** as columns 3 and 4 (shifting Max Capacity and Signups to
  5 and 6), since the calendar needs a time to place each class in the grid.
- One row = one weekly class slot. A class that runs twice a week (e.g.
  Under 8s on both Monday and Wednesday) needs two rows.

### Publish it to the web as CSV

1. Open the file in **Excel Online** (via OneDrive).
2. **File → Share → Publish to web**.
3. Choose the relevant sheet, and set the format dropdown to
   **Comma Separated Values (.csv)**.
4. Click **Publish**, then copy the generated link.
5. Paste that link into `js/config.js` as `CSV_URL`.

This link is a public, read-only, always-current CSV snapshot of that sheet —
anyone with the link can view the data (not edit it), so don't put anything
sensitive in that spreadsheet.

**Updating availability:** when you get the "New Class Sign Up" email, open
the spreadsheet and increase the **Signups** number for that class as usual.
The published link updates automatically within a few minutes, and the site
re-checks it every 5 minutes (configurable via `REFRESH_MINUTES`), or
instantly if a visitor clicks **Refresh availability**.

---

## 2. Set up EmailJS (sends the booking email)

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. **Email Services → Add New Service** and connect the inbox you want
   bookings sent to (Gmail, Outlook, etc.). Note the **Service ID**.
3. **Email Templates → Create New Template**. Set:
   - **Subject:** `{{subject}}` (this will render as "New Class Sign Up")
   - **Content**, using these variable names (they match what `app.js` sends):

     ```
     New booking request

     From: {{booker_name}} ({{email_address}}, {{contact_number}})
     Participant: {{participant_name}}

     Class: {{class_age_range}} — {{class_day}}, {{class_time}}
     Spaces left at time of booking: {{spaces_left_at_booking}}

     Note: {{note}}
     ```
   - Set the **To email** field to your own booking inbox address.
   - Note the **Template ID**.
4. **Account → General** and copy your **Public Key**.
5. Paste all three values into `js/config.js`:
   `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`.

Test it by submitting a booking on `booking.html` yourself once it's live.

---

## 3. Deploy to GitHub Pages

1. Create a new GitHub repository and add all these files, keeping the
   folder structure (`css/`, `js/` as subfolders).
2. Go to the repo's **Settings → Pages**.
3. Under **Source**, choose the branch (usually `main`) and root folder,
   then **Save**.
4. GitHub gives you a URL like `https://yourusername.github.io/reponame/`
   — that's your live site. `index.html` loads by default.

---

## Things worth knowing

- **This isn't fully automatic end-to-end.** The email tells you a booking
  happened; you still update the Signups column yourself, exactly as you
  described. If you'd rather have signups counted automatically, that would
  need a small backend (e.g. a serverless function) since GitHub Pages alone
  can't write back to Excel.
- **No double-booking protection.** Two people could both submit for the last
  space before you update the sheet. For a small club this is usually fine to
  handle manually (first email wins); flag it if you'd like a stronger
  safeguard later.
- **Editing the home page:** the class list on `index.html` is written by
  hand in the HTML, not pulled from the spreadsheet — update it whenever your
  weekly schedule changes.
- **Calendar hours:** adjust `CALENDAR_START_HOUR` / `CALENDAR_END_HOUR` in
  `config.js` if your classes run outside the current 8am–9pm window.
