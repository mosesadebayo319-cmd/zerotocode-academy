# ZeroToCode Academy

**From zero knowledge to building real things — bit by bit, completely free.**

Live: https://zerotocode-teal.vercel.app

## What’s included

| Track | Lessons | Practice |
|-------|---------|----------|
| **Python** | 144 (paths: Beginner / Data / Backend / DSA) | Pyodide live runner, quizzes, mini-projects |
| **JavaScript** | 25 | Live JS console + exercises |
| **HTML & CSS** | 18 | Live HTML preview |
| **Go** | 16 | Local `go run` guided |
| **Rust** | 14 | Local `cargo run` guided |

### Teaching design
- Real-life scenarios (shops, banking, delivery, school)
- Common-mistakes callouts
- Hints before solutions
- Multi-level exercises where available
- Quiz mastery gate (≥70% to complete lesson)
- Real calendar day streak
- Python Beginner certificate when path is finished
- Mini-projects between modules

## Project structure

```
zerotocode/
├── index.html              # UI shell
├── app.js                  # Platform logic (runners, mastery, paths)
├── python-course.js        # Python curriculum
├── javascript-course.js
├── web-course.js
├── go-course.js
├── rust-course.js
├── vercel.json
└── README.md
```

## Run locally

Open `index.html` via any static server (needed for ES modules / CORS on some browsers):

```bash
cd zerotocode
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

Connected to Vercel + GitHub. Push to `main` to redeploy.

```bash
vercel --prod
```
