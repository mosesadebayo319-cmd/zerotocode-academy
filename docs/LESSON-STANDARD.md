# Comprehensive lesson standard

The primary product requirement is that **every lesson is detailed and comprehensive**. This applies to all 217 existing lessons and every future lesson across Python, JavaScript, HTML/CSS, Go, and Rust. Platform features support that requirement.

Comprehensive means a learner can understand the stated topic, explain how its code works, recognise common failures, and apply it independently. It does not mean a fixed word count, repeated encouragement, or copying the same paragraph into every topic. A simple introductory topic still deserves careful explanation; advanced topics may require substantially more depth.

## Required teaching coverage

1. **Prerequisites and outcomes.** State what the learner should already know or install, explain new terminology, and list observable things they should be able to do afterward.
2. **Purpose and mental model.** Explain what the concept is, why it exists, when to use it, and relevant limitations. Connect it to a concrete real-world task.
3. **Step-by-step explanation.** Teach the syntax and behavior in a sensible sequence. Explain symbols, assumptions, and vocabulary when introduced. Use descriptive sections and keep substantive explanations visible.
4. **Worked example.** Include a complete runnable example, its expected output or visible behavior, and a walkthrough explaining every meaningful line or logical block. Explain why each part is necessary.
5. **A meaningful variation.** Change a case, input, or approach; predict and explain the different result. Examples must teach something additional rather than repeat the same code with another name.
6. **Troubleshooting.** Provide topic-specific symptoms, causes, and fixes. Distinguish syntax, environment, and reasoning problems where relevant. Do not give unrelated advice simply because a keyword matches.
7. **Progressive practice.** Include guided application, a repair or prediction task, and independent transfer. State success criteria and provide hints, a complete reference solution, and an explanation of the solution. Projects may use a rubric with equivalent coverage.
8. **Understanding checks.** Ask learners to predict, explain, debug, and apply. Use plausible distractors and explanations. Check all outcomes; four questions are a baseline for these reference lessons, not a substitute for practical assessment.
9. **Recap and next connection.** Restate the key ideas precisely, indicate what the learner should now be able to demonstrate, and connect to the following topic without assuming it has been taught.
10. **Authoritative references.** Link the relevant official documentation and name the execution environment or version when it changes behavior.

## Content representation

Existing lesson IDs and progress keys stay stable. Expanded lessons retain the current core fields and add `guide.version: 1` with `prerequisites`, `outcomes`, `expectedOutput`, `walkthrough`, `variations`, `mistakes`, `summary`, and `references`. Each exercise adds `successCriteria`, `expectedOutput`, and `solutionExplanation`. The explanation contains descriptive `h4` subsections, which the interface turns into a local contents list.

`guide` is authoring data, not a quality certification. Automated checks can establish that components exist and selected code produces the advertised output. They cannot establish that prose is accurate, examples are representative, or learners understand the material.

## Review before calling a lesson comprehensive

- Read the entire lesson at the stated prerequisite level. Remove unexplained jumps, circular definitions, generic padding, and contradictions.
- Run the main example, variations, and reference solutions in the advertised environment. For browser UI examples, inspect the visible behavior; for external services, document required setup and validate it separately.
- Compare the explanation and walkthrough against actual behavior. Verify whitespace, formatting, error categories, and version-dependent claims where they matter.
- Ensure exercises require understanding, cover the outcomes, and admit reasonable alternative solutions. Hints must help without immediately revealing the answer.
- Check keyboard access, narrow-screen readability, navigation through the detailed explanation, and code overflow.
- Record the remaining editorial work. Structural coverage and word counts are diagnostic signals, not pass/fail evidence of teaching quality.

## Catalog completion

The standard applies to the whole catalog. `npm run audit:curriculum` regenerates [the per-lesson coverage report](CURRICULUM-AUDIT.md). The report lists missing components for every lesson and shows how many have the reference structure. A lesson without the new structure remains in the editorial backlog; it is not silently labelled complete.

Work module by module across the catalog, keeping every lesson in scope. Beginner prerequisites determine the order of work, not which lessons receive depth. Accounts, visual redesigns, and additional tracks are secondary to this content work unless they block learners from studying or practising.
