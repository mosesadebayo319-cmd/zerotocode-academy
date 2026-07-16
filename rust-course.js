// ZeroToCode Academy — Rust curriculum (14 lessons)
// Topic-specific explanations for deeper beginner comprehension
window.RUST_COURSE = {
  "id": "rust",
  "name": "Rust",
  "icon": "🦀",
  "color": "orange",
  "subtitle": "Memory-safe systems programming, step by step",
  "globalName": "RUST_COURSE",
  "lessons": [
    {
      "id": "rs-01",
      "title": "1.1 Why Rust & Hello",
      "module": "Getting Started",
      "objective": "Install cargo mindset and print Hello.",
      "why": "Rust prevents memory bugs at compile time — used in browsers, OS tools, and fast APIs.",
      "explanation": "<p><strong>What you will learn.</strong> Install cargo mindset and print Hello. By the end you should explain <em>Why Rust &amp; Hello</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Rust prevents memory bugs at compile time — used in browsers, OS tools, and fast APIs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Libraries and modules save you from reinventing the wheel. You import proven tools, then focus on your business logic.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>cargo new app<br>cargo run<br>fn main() { println!(...); }</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Install cargo mindset and print Hello.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>fn main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>println!(\"Hello from Rust!\");</code> — shows output so you can verify the result.</li><li><code>println!(\"Safety + speed\");</code> — shows output so you can verify the result.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Why Rust &amp; Hello</em> solve?</li><li>Which line in the example most directly achieves: “Install cargo mindset and print Hello.”?</li><li>If you change one value in <code>fn main() {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "fn main() {\n    println!(\"Hello from Rust!\");\n    println!(\"Safety + speed\");\n}",
      "exercises": [
        {
          "title": "Greeting",
          "instruction": "Print your name with println!.",
          "solution": "fn main() {\n    println!(\"Hello, I am Tunde\");\n}",
          "hint": "println! macro",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Rust package tool?",
          "options": [
            "npm",
            "cargo",
            "pip",
            "gem"
          ],
          "correct": 1,
          "explanation": "cargo"
        }
      ],
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-02",
      "title": "1.2 Cargo Project Structure",
      "module": "Getting Started",
      "objective": "Know src/main.rs and Cargo.toml.",
      "why": "Projects are organized so builds are reproducible.",
      "explanation": "<p><strong>What you will learn.</strong> Know src/main.rs and Cargo.toml. By the end you should explain <em>Cargo Project Structure</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Projects are organized so builds are reproducible. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Libraries and modules save you from reinventing the wheel. You import proven tools, then focus on your business logic.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Cargo.toml dependencies<br>src/main.rs binary entry</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Know src/main.rs and Cargo.toml.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>fn main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>println!(\"cargo project ok\");</code> — shows output so you can verify the result.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Cargo Project Structure</em> solve?</li><li>Which line in the example most directly achieves: “Know src/main.rs and Cargo.toml.”?</li><li>If you change one value in <code>fn main() {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "// Cargo.toml\n// [package]\n// name = \"hello\"\n// version = \"0.1.0\"\n// edition = \"2021\"\n\nfn main() {\n    println!(\"cargo project ok\");\n}",
      "exercises": [
        {
          "title": "List parts",
          "instruction": "Print Cargo.toml and src/main.rs as key files.",
          "solution": "fn main() {\n    println!(\"Cargo.toml\");\n    println!(\"src/main.rs\");\n}",
          "hint": "standard layout",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Binary entry file usually?",
          "options": [
            "lib.rs only",
            "src/main.rs",
            "index.js",
            "main.py"
          ],
          "correct": 1,
          "explanation": "main.rs"
        }
      ],
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-03",
      "title": "1.3 Variables & Mutability",
      "module": "Basics",
      "objective": "Use let and let mut.",
      "why": "Immutable by default reduces accidental changes — like locked cells in a ledger.",
      "explanation": "<p><strong>What you will learn.</strong> Use let and let mut. By the end you should explain <em>Variables &amp; Mutability</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Immutable by default reduces accidental changes — like locked cells in a ledger. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A variable is a named box that holds a value. You choose a clear name so future-you (and teammates) know what the data means without guessing.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>let x = 5;<br>let mut y = 5; y = 6;</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use let and let mut.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>fn main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let shop = \"City Mart\";</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let mut sales = 0;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>sales += 1500;</code> — stores or updates a value.</li><li><code>println!(\"{shop} sales={sales}\");</code> — shows output so you can verify the result.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Variables &amp; Mutability</em> solve?</li><li>Which line in the example most directly achieves: “Use let and let mut.”?</li><li>If you change one value in <code>fn main() {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "fn main() {\n    let shop = \"City Mart\";\n    let mut sales = 0;\n    sales += 1500;\n    println!(\"{shop} sales={sales}\");\n}",
      "exercises": [
        {
          "title": "Counter",
          "instruction": "mut count start 0, add 1 twice, print.",
          "solution": "fn main() {\n    let mut count = 0;\n    count += 1;\n    count += 1;\n    println!(\"{count}\");\n}",
          "hint": "let mut",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Default binding mutability?",
          "options": [
            "mutable",
            "immutable",
            "static only",
            "volatile"
          ],
          "correct": 1,
          "explanation": "need mut to reassign"
        }
      ],
      "pitfalls": "Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-04",
      "title": "1.4 Types & Conversion",
      "module": "Basics",
      "objective": "Work with i32, f64, bool, char and parse.",
      "why": "User input is text — parse to numbers carefully.",
      "explanation": "<p><strong>What you will learn.</strong> Work with i32, f64, bool, char and parse. By the end you should explain <em>Types &amp; Conversion</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> User input is text — parse to numbers carefully. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Basics module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>let n: i32 = 42;<br>\"42\".parse::<i32>()</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Work with i32, f64, bool, char and parse.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>fn main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let price: f64 = 19.99;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let qty: i32 = 3;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let total = price * f64::from(qty);</code> — sets up a name, type, import, or definition you will use next.</li><li><code>println!(\"total={total}\");</code> — shows output so you can verify the result.</li><li><code>let n: i32 = \"42\".parse().expect(\"not a number\");</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Types &amp; Conversion</em> solve?</li><li>Which line in the example most directly achieves: “Work with i32, f64, bool, char and parse.”?</li><li>If you change one value in <code>fn main() {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "fn main() {\n    let price: f64 = 19.99;\n    let qty: i32 = 3;\n    let total = price * f64::from(qty);\n    println!(\"total={total}\");\n    let n: i32 = \"42\".parse().expect(\"not a number\");\n    println!(\"{n}\");\n}",
      "exercises": [
        {
          "title": "Parse",
          "instruction": "Parse \"100\" to i32 and print.",
          "solution": "fn main() {\n    let n: i32 = \"100\".parse().expect(\"num\");\n    println!(\"{n}\");\n}",
          "hint": "parse + type annotate",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "parse returns?",
          "options": [
            "i32 always",
            "Result",
            "only panic",
            "float only"
          ],
          "correct": 1,
          "explanation": "Result needs handle"
        }
      ],
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-05",
      "title": "1.5 Functions",
      "module": "Basics",
      "objective": "Define functions with types and return values.",
      "why": "Typed signatures document contracts clearly.",
      "explanation": "<p><strong>What you will learn.</strong> Define functions with types and return values. By the end you should explain <em>Functions</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Typed signatures document contracts clearly. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. Write it once, reuse it many times, and test it in isolation.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>fn add(a: i32, b: i32) -&gt; i32 { a + b }</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Define functions with types and return values.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>fn add(a: i32, b: i32) -&gt; i32 {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>a + b // last expression returns</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>fn main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>println!(\"{}\", add(2, 40));</code> — shows output so you can verify the result.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Functions</em> solve?</li><li>Which line in the example most directly achieves: “Define functions with types and return values.”?</li><li>If you change one value in <code>fn add(a: i32, b: i32) -&gt; i32 {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "fn add(a: i32, b: i32) -> i32 {\n    a + b // last expression returns\n}\n\nfn main() {\n    println!(\"{}\", add(2, 40));\n}",
      "exercises": [
        {
          "title": "Area",
          "instruction": "fn area(l: f64, w: f64) -> f64.",
          "solution": "fn area(l: f64, w: f64) -> f64 {\n    l * w\n}\nfn main() {\n    println!(\"{}\", area(3.0, 4.0));\n}",
          "hint": "no semicolon on return expr",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Return type syntax?",
          "options": [
            "fn f() : int",
            "fn f() -> i32",
            "fn f() returns i32",
            "fn f(i32)"
          ],
          "correct": 1,
          "explanation": "-> Type"
        }
      ],
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-06",
      "title": "1.6 Control Flow",
      "module": "Basics",
      "objective": "if expressions and loops.",
      "why": "if is an expression — can assign results.",
      "explanation": "<p><strong>What you will learn.</strong> if expressions and loops. By the end you should explain <em>Control Flow</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> if is an expression — can assign results. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Basics module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>loop / while / for item in 1..5</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “if expressions and loops.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>fn main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let score = 80;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let grade = if score &gt;= 70 { \"A\" } else { \"B\" };</code> — sets up a name, type, import, or definition you will use next.</li><li><code>println!(\"{grade}\");</code> — shows output so you can verify the result.</li><li><code>for i in 1..=3 {</code> — stores or updates a value.</li><li><code>println!(\"i={i}\");</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Control Flow</em> solve?</li><li>Which line in the example most directly achieves: “if expressions and loops.”?</li><li>If you change one value in <code>fn main() {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "fn main() {\n    let score = 80;\n    let grade = if score >= 70 { \"A\" } else { \"B\" };\n    println!(\"{grade}\");\n    for i in 1..=3 {\n        println!(\"i={i}\");\n    }\n}",
      "exercises": [
        {
          "title": "Even loop",
          "instruction": "for 1..=10 print evens.",
          "solution": "fn main() {\n    for i in 1..=10 {\n        if i % 2 == 0 {\n            println!(\"{i}\");\n        }\n    }\n}",
          "hint": "%=",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "1..=3 includes?",
          "options": [
            "1,2",
            "1,2,3",
            "2,3",
            "empty"
          ],
          "correct": 1,
          "explanation": "inclusive end"
        }
      ],
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-07",
      "title": "2.1 Ownership",
      "module": "Ownership",
      "objective": "Explain move semantics with String.",
      "why": "Each value has one owner — free memory safely without GC pauses.",
      "explanation": "<p><strong>What you will learn.</strong> Explain move semantics with String. By the end you should explain <em>Ownership</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Each value has one owner — free memory safely without GC pauses. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Rust’s ownership rules answer: who may use this memory, and when is it freed? That prevents entire classes of crashes and security bugs.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>String heap data moves on assign<br>use clone if you need deep copy</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Explain move semantics with String.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>fn main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let s1 = String::from(\"hello\");</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let s2 = s1; // move</code> — sets up a name, type, import, or definition you will use next.</li><li><code>println!(\"{s2}\");</code> — shows output so you can verify the result.</li><li><code>let s3 = s2.clone();</code> — sets up a name, type, import, or definition you will use next.</li><li><code>println!(\"{s2} {s3}\");</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Ownership</em> solve?</li><li>Which line in the example most directly achieves: “Explain move semantics with String.”?</li><li>If you change one value in <code>fn main() {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>Every input needs a visible label; images need alt text. Invalid nesting breaks accessibility and SEO.</li><li>You cannot mix one &mut with other borrows of the same data. Clone only when you truly need independent ownership.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "fn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1; // move\n    // println!(\"{s1}\"); // error: moved\n    println!(\"{s2}\");\n    let s3 = s2.clone();\n    println!(\"{s2} {s3}\");\n}",
      "exercises": [
        {
          "title": "Predict",
          "instruction": "Does this compile? let a = String::from(\"x\"); let b=a; println!(\"{a}\"). Answer in println.",
          "solution": "fn main() {\n    println!(\"No — a was moved into b\");\n}",
          "hint": "move invalidates a",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "After move of String, original binding is?",
          "options": [
            "usable",
            "invalid (moved from)",
            "copied auto",
            "static"
          ],
          "correct": 1,
          "explanation": "use clone or restructure"
        }
      ],
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; Every input needs a visible label; images need alt text. Invalid nesting breaks accessibility and SEO.; You cannot mix one &mut with other borrows of the same data. Clone only when you truly need independent ownership.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-08",
      "title": "2.2 References & Borrowing",
      "module": "Ownership",
      "objective": "Borrow with & and &mut.",
      "why": "Lend data without giving up ownership — like sharing a view on a ledger.",
      "explanation": "<p><strong>What you will learn.</strong> Borrow with &amp; and &amp;mut. By the end you should explain <em>References &amp; Borrowing</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Lend data without giving up ownership — like sharing a view on a ledger. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Rust’s ownership rules answer: who may use this memory, and when is it freed? That prevents entire classes of crashes and security bugs.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>fn len(s: &String) -> usize<br>one &mut XOR many &</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Borrow with &amp; and &amp;mut.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>14</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>fn length(s: &amp;String) -&gt; usize {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>s.len()</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>fn main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let s = String::from(\"shop\");</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let n = length(&amp;s);</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>References &amp; Borrowing</em> solve?</li><li>Which line in the example most directly achieves: “Borrow with &amp; and &amp;mut.”?</li><li>If you change one value in <code>fn length(s: &amp;String) -&gt; usize {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>You cannot mix one &mut with other borrows of the same data. Clone only when you truly need independent ownership.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "fn length(s: &String) -> usize {\n    s.len()\n}\n\nfn main() {\n    let s = String::from(\"shop\");\n    let n = length(&s);\n    println!(\"{s} len={n}\");\n    let mut name = String::from(\"Ada\");\n    change(&mut name);\n    println!(\"{name}\");\n}\n\nfn change(s: &mut String) {\n    s.push_str(\" Okafor\");\n}",
      "exercises": [
        {
          "title": "Borrow print",
          "instruction": "Function takes &str or &String and prints it.",
          "solution": "fn show(s: &str) {\n    println!(\"{s}\");\n}\nfn main() {\n    let name = String::from(\"Bola\");\n    show(&name);\n}",
          "hint": "& to borrow",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Many immutable borrows allowed?",
          "options": [
            "No never",
            "Yes simultaneously",
            "Only with GC",
            "Only on i32"
          ],
          "correct": 1,
          "explanation": "shared XOR mutable"
        }
      ],
      "pitfalls": "You cannot mix one &mut with other borrows of the same data. Clone only when you truly need independent ownership.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "intermediate"
    },
    {
      "id": "rs-09",
      "title": "2.3 Slices",
      "module": "Ownership",
      "objective": "Use &str string slices.",
      "why": "First word of a sentence without copying whole string.",
      "explanation": "<p><strong>What you will learn.</strong> Use &amp;str string slices. By the end you should explain <em>Slices</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> First word of a sentence without copying whole string. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Rust’s ownership rules answer: who may use this memory, and when is it freed? That prevents entire classes of crashes and security bugs.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>&s[0..5]<br>fn first_word(s: &str) -> &str</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use &amp;str string slices.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>fn first_word(s: &amp;str) -&gt; &amp;str {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>match s.find(' ') {</code> — branches based on a condition.</li><li><code>Some(i) =&gt; &amp;s[..i],</code> — stores or updates a value.</li><li><code>None =&gt; s,</code> — stores or updates a value.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Slices</em> solve?</li><li>Which line in the example most directly achieves: “Use &amp;str string slices.”?</li><li>If you change one value in <code>fn first_word(s: &amp;str) -&gt; &amp;str {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>You cannot mix one &mut with other borrows of the same data. Clone only when you truly need independent ownership.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "fn first_word(s: &str) -> &str {\n    match s.find(' ') {\n        Some(i) => &s[..i],\n        None => s,\n    }\n}\n\nfn main() {\n    let text = String::from(\"zero to code\");\n    println!(\"{}\", first_word(&text));\n}",
      "exercises": [
        {
          "title": "Slice",
          "instruction": "Print slice of \"abcdef\" first 3 chars.",
          "solution": "fn main() {\n    let s = \"abcdef\";\n    println!(\"{}\", &s[..3]);\n}",
          "hint": "&s[..3]",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "&str is?",
          "options": [
            "owned heap string",
            "string slice/view",
            "integer",
            "thread"
          ],
          "correct": 1,
          "explanation": "view into str data"
        }
      ],
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; Index out of range happens when index ≥ length. Check length before you index.; You cannot mix one &mut with other borrows of the same data. Clone only when you truly need independent ownership.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-10",
      "title": "3.1 Structs",
      "module": "Structs & Enums",
      "objective": "Define structs and impl blocks.",
      "why": "Product { name, price } with methods — model inventory.",
      "explanation": "<p><strong>What you will learn.</strong> Define structs and impl blocks. By the end you should explain <em>Structs</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Product { name, price } with methods — model inventory. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>struct + impl Type { fn method(&amp;self) }</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Define structs and impl blocks.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>13</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>struct Product {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>name: String,</code> — does a step in the overall recipe.</li><li><code>price: f64,</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>impl Product {</code> — does a step in the overall recipe.</li><li><code>fn line_total(&amp;self, qty: u32) -&gt; f64 {</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Structs</em> solve?</li><li>Which line in the example most directly achieves: “Define structs and impl blocks.”?</li><li>If you change one value in <code>struct Product {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "struct Product {\n    name: String,\n    price: f64,\n}\n\nimpl Product {\n    fn line_total(&self, qty: u32) -> f64 {\n        self.price * f64::from(qty)\n    }\n}\n\nfn main() {\n    let p = Product { name: String::from(\"Rice\"), price: 45000.0 };\n    println!(\"{} => {}\", p.name, p.line_total(2));\n}",
      "exercises": [
        {
          "title": "Rect",
          "instruction": "struct Rect w/h + area method.",
          "solution": "struct Rect { w: f64, h: f64 }\nimpl Rect {\n    fn area(&self) -> f64 { self.w * self.h }\n}\nfn main() {\n    let r = Rect { w: 3.0, h: 4.0 };\n    println!(\"{}\", r.area());\n}",
          "hint": "&self",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "&self in method means?",
          "options": [
            "steal ownership",
            "borrow self immutably",
            "thread local",
            "static mut"
          ],
          "correct": 1,
          "explanation": "read-only borrow of struct"
        }
      ],
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-11",
      "title": "3.2 Enums & match",
      "module": "Structs & Enums",
      "objective": "Model variants with enum and match.",
      "why": "Order status: Pending | Shipped | Delivered — enums beat magic strings.",
      "explanation": "<p><strong>What you will learn.</strong> Model variants with enum and match. By the end you should explain <em>Enums &amp; match</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Order status: Pending | Shipped | Delivered — enums beat magic strings. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>enum Status { ... } match s { ... }</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Model variants with enum and match.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>15</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>enum Status {</code> — does a step in the overall recipe.</li><li><code>Pending,</code> — does a step in the overall recipe.</li><li><code>Shipped,</code> — does a step in the overall recipe.</li><li><code>Delivered,</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>fn label(s: Status) -&gt; &amp;'static str {</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Enums &amp; match</em> solve?</li><li>Which line in the example most directly achieves: “Model variants with enum and match.”?</li><li>If you change one value in <code>enum Status {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "enum Status {\n    Pending,\n    Shipped,\n    Delivered,\n}\n\nfn label(s: Status) -> &'static str {\n    match s {\n        Status::Pending => \"packing\",\n        Status::Shipped => \"on the way\",\n        Status::Delivered => \"done\",\n    }\n}\n\nfn main() {\n    println!(\"{}\", label(Status::Shipped));\n}",
      "exercises": [
        {
          "title": "Coin",
          "instruction": "enum Coin Naira variants + match value.",
          "solution": "enum Coin { N50, N100, N200 }\nfn value(c: Coin) -> u32 {\n    match c {\n        Coin::N50 => 50,\n        Coin::N100 => 100,\n        Coin::N200 => 200,\n    }\n}\nfn main() {\n    println!(\"{}\", value(Coin::N100));\n}",
          "hint": "exhaustive match",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "match must be?",
          "options": [
            "optional arms",
            "exhaustive for enum",
            "runtime only",
            "JS-like fallthrough default"
          ],
          "correct": 1,
          "explanation": "compiler enforces"
        }
      ],
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-12",
      "title": "3.3 Option & Result",
      "module": "Structs & Enums",
      "objective": "Handle missing values and errors without null.",
      "why": "No null pointer crashes — Option/Result force you to handle absence.",
      "explanation": "<p><strong>What you will learn.</strong> Handle missing values and errors without null. By the end you should explain <em>Option &amp; Result</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> No null pointer crashes — Option/Result force you to handle absence. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Option&lt;T&gt; Some/None<br>Result&lt;T,E&gt; Ok/Err<br>? operator later</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Handle missing values and errors without null.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>fn find_price(name: &amp;str) -&gt; Option&lt;f64&gt; {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if name == \"rice\" { Some(45000.0) } else { None }</code> — branches based on a condition.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>fn main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>match find_price(\"rice\") {</code> — branches based on a condition.</li><li><code>Some(p) =&gt; println!(\"₦{p}\"),</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Option &amp; Result</em> solve?</li><li>Which line in the example most directly achieves: “Handle missing values and errors without null.”?</li><li>If you change one value in <code>fn find_price(name: &amp;str) -&gt; Option&lt;f64&gt; {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "fn find_price(name: &str) -> Option<f64> {\n    if name == \"rice\" { Some(45000.0) } else { None }\n}\n\nfn main() {\n    match find_price(\"rice\") {\n        Some(p) => println!(\"₦{p}\"),\n        None => println!(\"not found\"),\n    }\n    let n: Result<i32, _> = \"12\".parse();\n    println!(\"{:?}\", n);\n}",
      "exercises": [
        {
          "title": "Divide",
          "instruction": "fn div(a,b)->Option&lt;f64&gt; None if b==0.",
          "solution": "fn div(a: f64, b: f64) -> Option<f64> {\n    if b == 0.0 { None } else { Some(a / b) }\n}\nfn main() {\n    println!(\"{:?}\", div(10.0, 2.0));\n}",
          "hint": "Option",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Rust null?",
          "options": [
            "null keyword widely",
            "prefer Option instead of null",
            "undefined",
            "NoneType like Python only"
          ],
          "correct": 1,
          "explanation": "Option replaces null"
        }
      ],
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "intermediate"
    },
    {
      "id": "rs-13",
      "title": "4.1 Vec & HashMap",
      "module": "Collections",
      "objective": "Grow lists and maps.",
      "why": "Dynamic order lists and inventory counts.",
      "explanation": "<p><strong>What you will learn.</strong> Grow lists and maps. By the end you should explain <em>Vec &amp; HashMap</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Dynamic order lists and inventory counts. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, add/remove, and pass the whole group around.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Grow lists and maps.</p><p>This lesson focuses on <strong>Vec &amp; HashMap</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Grow lists and maps.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>use std::collections::HashMap;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>fn main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let mut cart = vec![\"bread\", \"milk\"];</code> — sets up a name, type, import, or definition you will use next.</li><li><code>cart.push(\"eggs\");</code> — changes a collection.</li><li><code>println!(\"{:?}\", cart);</code> — shows output so you can verify the result.</li><li><code>let mut stock = HashMap::new();</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Vec &amp; HashMap</em> solve?</li><li>Which line in the example most directly achieves: “Grow lists and maps.”?</li><li>If you change one value in <code>use std::collections::HashMap;</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "use std::collections::HashMap;\n\nfn main() {\n    let mut cart = vec![\"bread\", \"milk\"];\n    cart.push(\"eggs\");\n    println!(\"{:?}\", cart);\n\n    let mut stock = HashMap::new();\n    stock.insert(\"rice\", 20);\n    println!(\"{:?}\", stock.get(\"rice\"));\n}",
      "exercises": [
        {
          "title": "Sum vec",
          "instruction": "Sum vec![10,20,30].",
          "solution": "fn main() {\n    let v = vec![10, 20, 30];\n    let sum: i32 = v.iter().sum();\n    println!(\"{sum}\");\n}",
          "hint": "iter().sum",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "vec! macro creates?",
          "options": [
            "array only fixed",
            "Vec (growable)",
            "HashMap",
            "String slice"
          ],
          "correct": 1,
          "explanation": "heap vector"
        }
      ],
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-14",
      "title": "5.1 Capstone: CLI Notes Logic",
      "module": "Projects",
      "objective": "Combine structs, Vec, and methods for a notes app core.",
      "why": "Portfolio CLI: add/list notes in memory.",
      "explanation": "<p><strong>What you will learn.</strong> Combine structs, Vec, and methods for a notes app core. By the end you should explain <em>Capstone: CLI Notes Logic</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Portfolio CLI: add/list notes in memory. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>struct Note + Vec storage + list fn</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Combine structs, Vec, and methods for a notes app core.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>14</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>struct Note {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>title: String,</code> — does a step in the overall recipe.</li><li><code>body: String,</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>fn main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let mut notes: Vec&lt;Note&gt; = Vec::new();</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: <code>cargo new lesson && cd lesson</code>, paste into <code>src/main.rs</code>, then <code>cargo run</code>. Ownership errors are teachers — read them fully. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Capstone: CLI Notes Logic</em> solve?</li><li>Which line in the example most directly achieves: “Combine structs, Vec, and methods for a notes app core.”?</li><li>If you change one value in <code>struct Note {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "struct Note {\n    title: String,\n    body: String,\n}\n\nfn main() {\n    let mut notes: Vec<Note> = Vec::new();\n    notes.push(Note {\n        title: String::from(\"Buy data\"),\n        body: String::from(\"1GB MTN\"),\n    });\n    for n in &notes {\n        println!(\"- {}: {}\", n.title, n.body);\n    }\n}",
      "exercises": [
        {
          "title": "Add note",
          "instruction": "Push a second note and print count.",
          "solution": "struct Note { title: String, body: String }\nfn main() {\n    let mut notes = vec![Note { title: \"A\".into(), body: \"B\".into() }];\n    notes.push(Note { title: \"C\".into(), body: \"D\".into() });\n    println!(\"{}\", notes.len());\n}",
          "hint": "Vec push",
          "level": "medium"
        }
      ],
      "quiz": [],
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": true,
      "difficulty": "beginner"
    }
  ],
  "totalLessons": 14
};
