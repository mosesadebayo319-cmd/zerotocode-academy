# ZeroToCode Academy

**From zero knowledge to building real things — bit by bit, completely free.**

A modern, scaffolded, interactive learning platform designed specifically for absolute beginners (zero prior knowledge) in Python, JavaScript, HTML & CSS, Go, and Rust.

**Python track:** 141 lessons covering basics → OOP → files → NumPy/Pandas/SciPy/Django → Matplotlib → Machine Learning → DSA → MySQL → MongoDB, each with real-life scenarios (shops, banking, delivery, school systems).

## Why ZeroToCode is Better

After analyzing CodeCademy (great interactivity but can feel shallow/paywalled), W3Schools (excellent examples & Try-It editors but more reference than guided path), and Alison (structured but less hands-on coding), we built something superior for true beginners:

- **True bit-by-bit scaffolding**: Every lesson builds directly on the last. No jumps.
- **"Why + Analogy" first**: Every concept starts with real-life why it matters + simple analogies (market stall, shop calculator, etc.).
- **Learn → See → Do → Build cycle** in every lesson.
- **Hybrid interactivity**: Full live editors + preview for web technologies. Smart exercises + solutions for Python/Go/Rust.
- **Zero friction**: No signup, no install to start. Progress saved in your browser (localStorage). Works great on mobile.
- **Projects early**: Mini real-world projects every few lessons so you *build* something useful fast.
- **Encouraging & culturally aware**: Simple English, positive tone, examples relevant to Nigerian entrepreneurs/SMEs where helpful.
- **Mastery + celebration**: Quizzes, XP, streaks, progress bars, completion certificates you can print/save.
- **Consistent experience** across all 5 languages so you don't re-learn the platform.

## Project Structure

```
zerotocode/
├── index.html          # The SPA shell (UI + multi-language courses)
├── python-course.js    # Full Python curriculum (141 lessons)
├── README.md           # This file
└── (expandable: you can split into /css, /js, multiple HTML later)
```

## How to Run Locally (Linux / any computer)

1. Download/unzip the folder.
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Edge, Safari).
   - Or for better experience: `cd zerotocode && python3 -m http.server 8000` then visit http://localhost:8000

## How to Deploy to Vercel (Recommended - Free & Easy)

Vercel is perfect for this static site and gives you a free custom domain + HTTPS instantly.

### Option 1: Drag & Drop (Fastest)
1. Go to https://vercel.com and sign up/login with GitHub/Google.
2. On dashboard, click **"Add New Project"** → **"Import Third-Party Git Repository"** or simply drag the entire `zerotocode` folder onto the page.
3. Vercel auto-detects it's a static site and deploys in ~30 seconds.
4. Done! You get a live URL like `https://zerotocode-xxx.vercel.app`

### Option 2: Git + Vercel CLI (for updates)
```bash
cd zerotocode
git init
git add .
git commit -m "Initial ZeroToCode Academy"
# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/zerotocode.git
git push -u origin main

# Then on Vercel: Import the GitHub repo (one-click)
```

After deploy, share the link — learners can start immediately for free.

## How to Expand / Customize Content

The entire platform is driven by JavaScript data in `index.html`.

1. Open `index.html` in a code editor (VS Code recommended).
2. Find the big `const courseData = { ... }` object near the top of the `<script>`.
3. Add/edit lessons inside each language's `lessons` array.
4. Each lesson object has: `id`, `title`, `objective`, `why`, `explanation`, `codeExample`, `exercises[]`, `quiz[]`.
5. The UI, progress tracking, quizzes, and playgrounds are fully dynamic — new lessons appear automatically.
6. For advanced: Add Pyodide for real Python execution in-browser, user accounts (Firebase), etc.

## Current Content Status (MVP - Ready to Use)

- **Python**: 8 high-quality bite-sized lessons (Foundations → Control Flow → Functions & Data → Mini Project). Fully interactive exercises + quizzes.
- **JavaScript**: Full structure + 4 lessons + live code playground.
- **HTML & CSS (Web Fundamentals)**: Strong interactive live preview playground + 4 lessons.
- **Go**: Complete intro module (5 lessons) — great for CLI/tools.
- **Rust**: Complete intro module (5 lessons) — gentle intro to ownership & safety.

All lessons follow the same high standard. You can start learning Python or Web today and have a clear path.

## Tech Stack & Philosophy

- 100% static (HTML + Tailwind via CDN + vanilla JS) → Blazing fast, free hosting, no backend needed to start.
- Fully responsive (mobile-first).
- Accessible, keyboard friendly where possible.
- No tracking, no ads, learner-owned progress.
- Designed for Nigerian context + global beginners (low data usage friendly).

## Future Roadmap (You or Community Can Add)

- Real in-browser Python execution with Pyodide
- More projects & capstones per language
- Spaced repetition review mode
- Dark/light toggle (already prepared)
- Multi-language UI (Hausa, Yoruba, Igbo translations)
- Simple backend for global leaderboards / certificates
- AI hint button (using your own Grok key or open source)

## License & Contribution

MIT License. Free forever for learners. Built to empower.

Created with ❤️ for absolute beginners who want to build, not just watch.

---

**Next step for you (Moses / MoTechy / Heroes Help context):**  
This platform can become a flagship free offering under MoTechy or a new social enterprise arm. You can brand it, add your logo, and use it to onboard Nigerian youth/SME founders into tech skills.

Run `open index.html` or deploy to Vercel now and test the full experience.

If you want me to:
- Add more lessons to any language
- Improve the live playgrounds
- Add printable certificates
- Create a separate admin/content editor page
- Integrate real code execution
- Make a PWA version

Just say the word and I'll iterate on the files here in the sandbox.

Enjoy building the next generation of Nigerian developers! 🚀
