# Pathway Decision Console

A decision-prep web app that helps international high school students compare university pathways by country, major, cost, visa, timeline, and career fit.

---

## Problem

International students often face too much university information and struggle to turn it into a personal decision. Country options, tuition ranges, visa rules, test requirements, and application deadlines arrive from too many directions at once — making it hard to think clearly about what actually matters for their specific situation.

## Solution

The app brings everything into one place. Students can compare pathways side by side, understand trade-offs, plan application steps by grade, and record where their thinking currently stands — so they can walk into a counselor meeting with better questions instead of starting from scratch.

---

## MVP Features

- **Student Profile** — captures goal, majors, target countries, grade, budget, risk tolerance, visa priority, and family/language context
- **Decision Priorities** — six weighted sliders (Career Fit, Cost Fit, Visa Fit, Academic Fit, Future Flexibility, Backup Strength) that re-sort the comparison table live
- **Pathway Comparison** — scored table across five routes (Canada, US, UK, Australia, Japan) with weighted Overall score
- **Selected Route Analysis** — per-route breakdown of fit reasons, trade-offs, risks, and best next action
- **Grade-based Application Timeline & Test Strategy** — grouped timeline cards that update based on current grade (Grade 10 / 11 / 12)
- **Decision Log** — freeform fields to record current decision, reasoning, concerns, trade-offs accepted, sources checked, and next action
- **Friend Feedback** — structured questions to collect prototype feedback from peer testers
- **localStorage save / load** — decision log and feedback persist across browser sessions
- **.txt export** — one-click export of full summary or feedback to a plain text file

---

## Tech Stack

| Layer | Choice |
|---|---|
| Markup | HTML |
| Styles | CSS |
| Logic | Vanilla JavaScript |
| Persistence | localStorage |
| Backend | None |

No build step. No dependencies. No server required.

---

## Current Status

MVP demo — ready for testing with 3–5 students. Not yet a finished product.

> **Important:** This tool does not replace a university counselor. It helps students prepare better questions and organize their thinking before or after counselor meetings.

---

## How to Run Locally

Open `index.html` directly in any browser — no install needed.

For a local server (optional, avoids some browser file-protocol quirks):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Deployment

Static site — no build required. Deploy to any of the following:

- **GitHub Pages** — push to a public repo and enable Pages in Settings
- **Vercel** — drag and drop the project folder or connect the GitHub repo
- **Netlify** — same as Vercel; drag-and-drop or GitHub integration
