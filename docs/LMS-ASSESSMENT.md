# ZeroToCode Academy: assessment and product roadmap

Assessment started 9 October 2026; branch status updated 11 October 2026. Baseline: commit `5357993` on `main`. Direction confirmed by the owner: **complete beginners**, **self-paced courses**, **practical projects**, with **detailed, comprehensive content in every lesson** as the primary product requirement.

## Product judgment

The repository has a useful foundation: practical scenarios, five tracks, editable examples, exercises, and free access. It is currently a static learning prototype. It is not yet a complete LMS with accounts, durable server records, assessed projects, course publishing, or measured learning outcomes.

The strongest product teaches each topic thoroughly enough for learners to understand, troubleshoot, and apply it independently. All 217 lessons across the five tracks are in scope. Work through their prerequisites in order, deepen the teaching, and connect it to practical projects before adding more tracks or social features. Lesson count or explanation length alone does not demonstrate that learners can build independently.

## Scope and evidence

The platform code, HTML shell, hosting configuration, and curriculum structure across all five tracks were inspected. The current branch includes 63 lessons with the reference structure across Python, JavaScript, HTML/CSS, Go, and Rust. They include prerequisites, outcomes, sectioned explanations, worked examples, expected results, walkthroughs, variations, troubleshooting, progressive practice with explained solutions, quizzes, recaps, and official references. The interface makes this material readable and navigable.

The [lesson standard](LESSON-STANDARD.md) defines the requirement for every lesson. The [catalog audit](CURRICULUM-AUDIT.md) records structural coverage for all 217 lessons: 63 have the reference structure and **154 remain in the expansion backlog**. Automated curriculum validation checks identifiers, required content, exercises, quiz option indexes, and guide structure. It does not establish the instructional quality of every lesson or certify learner mastery.

The public repository [`daily-coding-practice`](https://github.com/shaikhtaha258-maker/daily-coding-practice) was inspected as an exercise-pattern reference. Its prompts on strings, collections, decisions, loops, functions, and files inform independently authored Python practice. [The source inspection and adaptation notes](PYTHON-PRACTICE-ADAPTATIONS.md) document useful patterns and answer issues to guard against.

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
| High | The catalog lacks a consistent standard for comprehensive teaching; brief examples and sparse assessments leave learners to fill gaps. | Define the standard for every track, audit every lesson, expand 63 lessons, and add walkthroughs, troubleshooting, solution explanations, and a contents list. The remaining 154 still need expansion. |
| Medium | Main navigation disappears on mobile, the long sidebar precedes the lesson, and many actions are pointer-only. | Add mobile navigation, collapsible outline, keyboard actions, focus styles, labels, feedback announcements, and reduced-motion support. |
| Medium | Critical styling needs an external script; no build or regression checks exist. | Compile local CSS, package runtime files into `dist/`, and add state, curriculum, browser, and CI checks. |
| Medium | Streaks use UTC dates; certificates imply completion without independent verification. | Use local calendar days and identify certificates as personal learning records. |

## Recommended milestones

### 1. Reliable first learning session — implemented for review

A learner starts Python, edits and runs code, repairs a mistake, gets quiz feedback, completes a lesson, continues, and resumes after refreshing. Mobile learners can reach the dashboard and course outline. A backup can transfer progress and drafts to a fresh browser.

This milestone establishes a working learning loop; it does not make all 217 lessons launch-ready.

### 2. Comprehensive lessons across every track — current priority

Expand the remaining 154 lessons module by module, using the [lesson standard](LESSON-STANDARD.md) and recording progress in the [catalog audit](CURRICULUM-AUDIT.md). Prerequisite order determines the sequence of work; it does not reduce the scope to Python or beginner introductions. Explain terminology, syntax, mental models, limitations, and every meaningful step in a worked example. Include different cases, expected output, specific debugging guidance, and practice that progresses from guided work to independent application. Use as much explanation as the topic needs, without generic padding or an arbitrary word target. Declare prerequisites, outcomes, study-time estimates, and execution requirements; validate timing with learners.

Introduce projects after coherent groups of lessons. A suitable first project is a receipt or budget calculator: accept quantities and prices, calculate a total, and handle invalid input. Provide starter code, examples, a rubric, and multiple valid solutions. Check observable behavior against several cases rather than matching source text. Copying a solution should not be treated as mastery.

DOM lessons need a workspace with HTML, CSS, and JavaScript files containing the exact elements the example expects. Data/database lessons need an explicit local setup or an intentionally provisioned remote environment. Validate every example in its advertised environment.

Acceptance for each lesson: it covers the stated outcomes, examples and reference solutions work in the advertised environment, practice checks understanding, and editorial review finds no unexplained prerequisite jumps. Acceptance for catalog completion: every lesson has received this review, with no remaining expansion backlog. An observed beginner pilot must still establish whether learners can apply the material and complete projects independently.

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

- Current revision: `npm test` passed with all 315 worked examples, variations, and exercise solutions checked against their expected output across Python, package-based Python, JavaScript, Go, and Rust. This run enabled the optional Python dependencies and used installed Go/Rust toolchains.
- Browser: 13 Chromium scenarios passed, including all five track renderers, mobile reading, legacy lesson compatibility, and every expanded HTML example and exercise. The optional real-Pyodide test was skipped because `PYODIDE_ASSET_DIR` was not configured in this run.
- Build: `npm run build` produced local CSS and 11 files in `dist/`. Curriculum audit regenerated at 63/217. `git diff --check` passed.
- State/curriculum coverage includes migration, invalid/blocked storage, backup merge/rejection, malformed state, local-day streaks, reset, five course schemas, expanded guide coverage, and audit freshness.
- The source repository `daily-coding-practice` supplied exercise patterns, not copied lesson content. Adaptations and repository attribution are documented in [the Python practice notes](PYTHON-PRACTICE-ADAPTATIONS.md).
- No remote workflow run has yet been observed for this revision. Check the pull request status after pushing; optional runtime coverage in GitHub Actions depends on installed toolchains and curriculum packages.

Review the branch preview before merging. The existing Git integration may publish production on a main-branch merge. No production release is part of this assessment milestone.
