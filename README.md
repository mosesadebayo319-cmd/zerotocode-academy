# ZeroToCode Academy

Free, self-paced coding lessons for complete beginners. Learn a concept, practise it, check your understanding, and build something useful.

Live site: https://zerotocode-teal.vercel.app

This branch implements the first learner-foundations milestone. See [the LMS assessment and roadmap](docs/LMS-ASSESSMENT.md) for the evidence, launch gaps, and next product milestones. Changes are not live until the branch is merged and deployed.

## Current learning experience

| Track | Lessons | Practice |
|---|---:|---|
| Python | 144 | Browser Python, including program input; some advanced lessons need local tools |
| JavaScript | 25 | Worker console; DOM exercises can use HTML with a script in the preview |
| HTML & CSS | 18 | Sandboxed HTML preview |
| Go | 16 | Local Go setup |
| Rust | 14 | Local Rust setup |

The Python Beginner Builder path contains 60 lessons. Its first five lessons have been rewritten around a first-time learner's experience. Remaining curriculum still needs editorial and practical review.

- Quiz feedback explains answers, allows retries, and preserves the best score. Lessons with quizzes require at least 70%; lessons without quizzes explicitly use self-review.
- Completion awards 65 XP once; a passing quiz contributes 15 XP once. Streaks use local calendar days and advance on a newly completed lesson.
- Lesson URLs, previous/next navigation, resume, and per-lesson code drafts work across refreshes.
- Progress stays on the current browser. Download/restore JSON backups to move or preserve it. There is no account or automatic device sync.
- Existing `zerotocode_progress`, `zerotocode_quiz`, and `zerotocode_streak_data` records migrate into versioned browser state. Legacy data is retained until reset.
- Restoring a backup combines completed lessons, keeps the highest scores, and restores missing drafts; current browser drafts win conflicts.
- The Python completion certificate is a personal learning record, not an accredited or independently verified qualification.

## Run and verify

Requires Node.js 22+ and Python 3 for the local static server.

```bash
npm ci
npm run build
npm run dev
# Open http://localhost:8080
```

The committed stylesheet allows basic static serving without a package install. Rebuild after changing utility classes or `styles.css`.

```bash
npm test
npx playwright install chromium
npm run test:e2e
```

Browser tests build and serve the production `dist/` directory on port 8081. Set `CHROMIUM_PATH=/path/to/chromium` to use an installed Chromium instead of the Playwright download. Tests cover quiz retries and scoring, navigation, drafts, backup restore, broken storage, mobile layout, runner isolation from the page, and timeouts.

The optional real-Python test uses the pinned Pyodide distribution fetched over verified HTTPS. This separates runtime behavior from external CDN availability and browser proxy trust:

```bash
python3 scripts/cache-python-runtime.py /tmp/zerotocode-pyodide
PYODIDE_ASSET_DIR=/tmp/zerotocode-pyodide npm run test:e2e -- python.spec.cjs
```

GitHub Actions runs the build, stylesheet freshness check, data tests, and core browser tests. The optional Python smoke test is skipped unless its assets are supplied.

## Runtime boundaries

JavaScript console code runs in a dedicated Worker, with a five-second lifetime and bounded output. Python runs in its own Worker, with a 90-second download/preparation limit and a 15-second execution limit. Stop, navigation, or a new run terminates the worker. Each Python run has a fresh runtime and temporary files; loaded distribution files may be reused by the browser cache.

HTML uses `iframe.srcdoc` with `sandbox="allow-scripts"`, without same-origin access. Console messages are accepted only from that preview frame. HTML scripts are not executed in a Worker: runaway DOM scripts do not have the console runner's guaranteed timeout. The preview can make network requests. These are local practice tools, not a hardened service for executing other people's submissions.

Pyodide 0.26.4 loads on demand from jsDelivr. A first run needs connectivity and roughly 14 MB of runtime assets before additional packages. Common supported packages are loaded from imports; database servers, desktop windows, and arbitrary native packages require a local environment. The browser console has no DOM; DOM examples require matching HTML in the HTML preview. Go and Rust remain local-only.

## Files and deployment

- `index.html`, `styles.css`, `assets/styles.css`: interface and locally compiled styles.
- `app.js`: routing, rendering, quizzes, completion, and backup controls.
- `learning-state.js`: validation, legacy migration, backups, and local calendar streaks.
- `runners.js`, `runner-worker.js`: practice execution and HTML preview.
- `*-course.js`: trusted, repository-authored course content.
- `scripts/build-static.cjs`: copies only the 11 runtime files into `dist/`.
- `tests/`, `.github/workflows/checks.yml`: regression checks.

`vercel.json` sets `npm run build` and output directory `dist`. Hash-based lesson URLs need no SPA rewrite. The existing Git integration can create a branch preview; merging to the configured production branch may deploy production. Verify the preview and checks before merging. This change does not add a backend, credentials, or a deployment workflow.
