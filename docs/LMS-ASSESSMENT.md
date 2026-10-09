# ZeroToCode Academy: assessment and product roadmap

Assessment date: 9 October 2026. Baseline: commit `5357993` on `main`. Direction confirmed by the owner: **complete beginners**, **self-paced courses**, **practical projects**.

## Product judgment

The repository has a useful foundation: practical scenarios, five tracks, editable examples, exercises, and free access. It is currently a static learning prototype. It is not yet a complete LMS with accounts, durable server records, assessed projects, course publishing, or measured learning outcomes.

The strongest first product is a small beginner journey that learners can finish successfully. Retain the broader catalog, but prioritise a reviewed Python foundation and one achievable project before expanding languages or social features. Lesson count alone does not demonstrate that learners can build independently.

## Scope and evidence

The platform code, HTML shell, hosting configuration, and curriculum structure across all five files were inspected. The introductory Python module was reviewed and rewritten in depth. Automated curriculum validation checks every lesson's identifiers, required content, exercises, and quiz option indexes. It does not establish the instructional quality of every lesson.

The original HTML preview failure was reproduced in Chromium: the sandboxed iframe's `contentDocument` was null, so `doc.open()` threw. The styling CDN also failed in the test browser, exposing the dependency on an external script for basic layout and visibility. This does not establish that the public production site experienced the same outage.

No production analytics, real learner records, account database, or instructor workflow were available to assess. This is not a production penetration test or exhaustive accessibility audit.

## Baseline inventory

| Track | Lessons | Flagged projects | No quiz | One-question quizzes |
|---|---:|---:|---:|---:|
| Python | 144 | 4 | 0 | 3 |
| JavaScript | 25 | 4 | 3 | 22 |
| HTML & CSS | 18 | 3 | 5 | 13 |
| Go | 16 | 2 | 2 | 14 |
| Rust | 14 | 1 | 1 | 13 |
| Total | 217 | 14 | 11 | 65 |

Python paths contain 60 beginner, 41 data, 23 backend, and 20 DSA lessons. Most Python lessons had two questions, often including a generic question that repeated the objective alongside obviously unrelated distractors. Most non-Python quizzes had one question. Eleven lessons allowed completion without a quiz. These are distinct assessment weaknesses.

## Findings and first-milestone response

| Priority | Finding and learner impact | Response in this branch |
|---|---|---|
| Critical | `runWeb(true)` writes to an inaccessible sandboxed iframe document; HTML practice fails. | Use sandboxed `srcdoc`; verify rendering, interaction, console output, and denied parent access. |
| Critical | JavaScript runs with `new Function` in the academy page, exposing the page and its browser progress; loops freeze the interface. Python also runs on the UI thread. | Move console JS and Python to stoppable Workers. Bound output and execution time. Document separate HTML-preview limitations. |
| High | `checkQuiz` removes radios, leaves submit active, and overwrites the stored score. Another submit can erase a pass; retry requires reopening the lesson. | Keep answers and explanations, require a complete attempt, provide retry, and retain the highest score. |
| High | Unguarded JSON parsing crashes on corrupt storage; there is no saved code or progress backup. | Validate and migrate state, show storage failures, save drafts, and support export/merge-restore. Storage remains browser-only. |
| High | Refresh loses the lesson; completion has no implemented next-step control. | Add lesson URLs, browser history, resume, previous/next, and clear completion feedback. |
| High | Early Python lessons mix installation, conditionals, and advanced examples before basic concepts. Repetitive filler obscures explanations. | Rewrite `py-01`–`py-05`, retaining stable IDs. Each now has focused practice and four substantive questions. |
| Medium | Main navigation disappears on mobile, the long sidebar precedes the lesson, and many actions are pointer-only. | Add mobile navigation, collapsible outline, keyboard actions, focus styles, labels, feedback announcements, and reduced-motion support. |
| Medium | Critical styling needs an external script; no build or regression checks exist. | Compile local CSS, package runtime files into `dist/`, and add state, curriculum, browser, and CI checks. |
| Medium | Streaks use UTC dates; certificates imply completion without independent verification. | Use local calendar days and identify certificates as personal learning records. |

## Recommended milestones

### 1. Reliable first learning session — implemented for review

A learner starts Python, edits and runs code, repairs a mistake, gets quiz feedback, completes a lesson, continues, and resumes after refreshing. Mobile learners can reach the dashboard and course outline. A backup can transfer progress and drafts to a fresh browser.

This milestone establishes a working learning loop; it does not make all 217 lessons launch-ready.

### 2. Reviewed beginner curriculum and a meaningful first project

Review the remaining Beginner Builder lessons in prerequisite order. Use short explanations, concrete expected output, progressive hints, and exercises that require a variation instead of copying a solution. Remove generic paragraphs and irrelevant pitfalls. Declare prerequisites, outcomes, estimated study time, and execution requirements.

Introduce projects after coherent groups of lessons. A suitable first project is a receipt or budget calculator: accept quantities and prices, calculate a total, and handle invalid input. Provide starter code, examples, a rubric, and multiple valid solutions. Check observable behavior against several cases rather than matching source text. Copying a solution should not be treated as mastery.

DOM lessons need a workspace with HTML, CSS, and JavaScript files containing the exact elements the example expects. Data/database lessons need an explicit local setup or an intentionally provisioned remote environment. Validate every example in its advertised environment.

Acceptance: a new learner can finish a first project without undocumented setup, examples and solutions run, and reviewers approve the learning objectives and assessments.

### 3. Accounts and durable learner records

Keep guest learning available and offer an account after learners have made progress. Use a backend with managed authentication and PostgreSQL; choose and provision the provider when this milestone begins. Model users, course/lesson versions, enrollments, progress, quiz attempts, code drafts, project submissions, rubric results, and certificate records. Preserve stable lesson IDs and explicitly migrate guest records.

The server must own completion and assessment rules. Duplicate requests must not inflate progress. Learners can access only their own records. Course versions prevent edits from silently changing earned outcomes. Include account recovery, authorization, migration, and restore tests.

Acceptance: progress follows the learner across devices, drafts recover after reconnection, repeat requests are idempotent, and tests prevent one learner from accessing another's records.

### 4. Course publishing and an observed beginner pilot

Add draft → review → publish stages with previews, validation, version history, and rollback. Repository-based authoring may be sufficient initially; a visual editor should follow demonstrated editorial need. Provide a way to report confusing lessons and broken examples.

Run a small observed beginner pilot before broad promotion. Measure first-lesson starts/completions, code-run success/failure, quiz retries, first-project attempts and rubric results, and return visits. Define denominators and collection rules before numeric targets: there is no measured baseline yet. Prioritise independent project completion and learners' explanations over XP or time spent.

Acceptance: the team can identify the largest learning blockage, publish a reviewed fix, and observe whether the next group succeeds more often. Check keyboard access, supported browsers, mobile layout, recovery, and monitoring before releases.

## Architecture and remaining boundaries

The static architecture is inexpensive and sufficient for proving the introductory experience. A framework rewrite alone would not solve missing pedagogy, assessment, or durable records. Keep learner-state and execution code separate so a backend can replace browser persistence without replacing the curriculum and interface together.

Progress, quiz scores, XP, and certificates remain user-controlled local records. Backups are a convenience, not verified credentials. Concurrent tabs are not a transactional sync system. There is no instructor review or server-side grading.

Workers keep console execution off the UI thread; they are not a hardened multi-tenant execution service. HTML scripts run in a sandboxed iframe without parent-origin access, but their runaway loops do not have a guaranteed worker timeout and they can contact the network. Before shared submissions or authoritative grading, isolate execution on a dedicated origin or service with explicit resource and network limits.

Python needs an initial external download. Advanced package compatibility, desktop graphics, databases, file persistence between runs, and mobile memory budgets need targeted validation. Go and Rust require local tooling. Check CDN availability on the deployment preview using real devices and networks.

The site still loads the whole catalog eagerly. Measure the introductory experience on a slower device/network, then split course loading and establish a performance budget. No engagement or performance gain is claimed without measurements.

## Verification and release handoff

- Build: local CSS and 11 runtime files in `dist/`; syntax and whitespace checks.
- State/curriculum: 11 named tests covering migration, invalid/blocked storage, backup merge/rejection, malformed state, local-day streaks, reset, and five course schemas.
- Core browser: fail/retry/pass and best-score retention; completion counted once; async JS and newline output; timeout recovery; stop/navigation cleanup; HTML rendering, DOM interaction, and source-checked messages; deep links/draft reload/history/resume; mobile outline and overflow; backup restore in a fresh browser; operation without external styling.
- Python: real Pyodide 0.26.4 fetched using verified HTTPS. Tested `input()`, output, syntax errors, infinite-loop timeout, and a successful subsequent run. Locally cached files were used because Chromium did not trust the environment's proxy certificate.
- CI: build, committed-style freshness, state/curriculum tests, and core browser checks. Local success does not imply remote CI has run; check the pull request status.

Review the branch preview before merging. The existing Git integration may publish production on a main-branch merge. No production release is part of this assessment milestone.
