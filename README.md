# 🛡️ CodeAlpha Phishing Awareness Training Platform

> **CodeAlpha Cyber Security Internship — Task 2**

An interactive, responsive, modern cybersecurity training module built to educate employees, students, and organizations about phishing attacks, social engineering tactics, recognition techniques, real-world case studies, and defense best practices. Includes a 10-question interactive knowledge assessment and automated Certificate of Completion.

---

## 📋 Table of Contents

- [Features](#-features)
- [Modules & Curriculum](#-modules--curriculum)
- [Live Demo & How to Run](#-how-to-run)
- [Screenshots & UI Walkthrough](#-screenshots--ui-walkthrough)
- [Interactive Quiz & Scoring](#-interactive-quiz--scoring)
- [Certificate Generator](#-certificate-generator)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Author](#-author)

---

## ✨ Features

- **Cybersecurity Dark Mode Design** — Neon accent visual styling inspired by SOC monitoring dashboards.
- **8 Comprehensive Training Modules** — From fundamentals to deep real-world post-mortems.
- **Live Phishing Red Flags Checklist** — Explaining typosquatting, deceptive subdomains, fake login portals, and malicious attachments.
- **Notable Case Studies** — Analysis of Google/Facebook $100M invoice fraud, 2020 Twitter Bitcoin hack, and Sony Pictures breach.
- **Psychological Triggers Guide** — Analysis of Urgency, Fear, Authority, Greed, and Curiosity.
- **Dynamic Reading Progress Bar** — Tracks user progress in real-time.
- **Interactive 10-Question Quiz** — Features immediate scoring, detailed question-by-question explanations, and review breakdown.
- **Dynamic Certificate of Completion** — Issues a unique verification ID and printable PDF/hard-copy certificate upon achieving ≥ 70%.
- **Zero External Dependencies** — 100% vanilla HTML5, CSS3, and JavaScript. Runs offline and instantly in any modern web browser.

---

## 📚 Modules & Curriculum

1. **Module 01: Welcome & Introduction** — The scale of phishing, economic impact, and human-element vulnerability.
2. **Module 02: Types of Phishing** — Email Phishing, Spear Phishing, Whaling (BEC), Smishing, Vishing, and Clone Phishing.
3. **Module 03: How to Recognize Phishing Attacks** — Domain inspection, sender mismatch, spoofed headers, and urgent language.
4. **Module 04: Real-World Case Studies** — In-depth breakdown of high-profile phishing intrusions.
5. **Module 05: Social Engineering Principles** — Psychological manipulation levers and cognitive biases exploited by adversaries.
6. **Module 06: Defense-in-Depth Best Practices** — MFA enforcement, out-of-band verification, reporting protocols, and password management.
7. **Module 07: Knowledge Assessment Quiz** — 10 scenario-based questions evaluating comprehension.
8. **Module 08: Certificate Verification** — Dynamic credential generation with unique serial codes.

---

## 🚀 How to Run

No installations, build steps, or servers required!

### Option 1: Direct File Opening
Double-click `index.html` or open it directly in Chrome, Firefox, Safari, or Edge.

### Option 2: Local HTTP Server (Python)
```bash
cd CodeAlpha_PhishingAwareness
python3 -m http.server 8000
```
Then navigate to: `http://localhost:8000`

---

## 🧠 Interactive Quiz & Scoring

- **Passing Score:** 70% (7 out of 10 correct)
- **Instant Explanations:** Explains the underlying cybersecurity concept for every answer chosen.
- **Retake Mechanism:** Allows retesting to reinforce awareness concepts.

---

## 🎓 Certificate Generator

Upon passing the quiz:
1. Enter your name in the verification prompt.
2. An official, cybersecurity-themed **Certificate of Completion** is rendered with a timestamp and unique tracking ID (`CA-PHISH-XXXXXX`).
3. Click **Print Certificate** to save as PDF or print.

---

## 🛠️ Technologies Used

- **HTML5:** Semantic architecture, accessible forms, and structured layouts.
- **CSS3:** Flexbox, CSS Grid, custom variables, smooth keyframe animations, responsive media queries, and print stylesheets.
- **JavaScript (ES6+):** Dynamic DOM rendering, scroll-spy navigation, quiz engine, state management, and certificate generation.

---

## 📁 Project Structure

```
CodeAlpha_PhishingAwareness/
├── index.html       # Single-page application structure & content
├── style.css        # Cybersecurity styling, animations, and print media
├── script.js        # Dynamic quiz logic, score calculation, and certificate engine
└── README.md        # Documentation and guide
```

---

## 👤 Author

- **Intern:** Dhanya
- **Internship:** CodeAlpha Cyber Security Internship
- **Task:** Task 2 — Phishing Awareness Training
