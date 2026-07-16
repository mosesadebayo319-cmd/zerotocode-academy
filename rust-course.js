// ZeroToCode Academy — Rust curriculum (14 lessons)
// Explanations expanded for deeper beginner comprehension
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
      "explanation": "<p><strong>What you will learn.</strong> Install cargo mindset and print Hello. By the end of this lesson you should be able to explain <em>Why Rust &amp; Hello</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Rust prevents memory bugs at compile time — used in browsers, OS tools, and fast APIs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Foundations look small but they support everything else: tooling, syntax rules, and how you display results. If these feel shaky, every later topic becomes harder than it needs to be.</p>\n<p><strong>Core explanation.</strong> cargo new app cargo run fn main() { println!(...); } Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Install cargo mindset and print Hello.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Why Rust &amp; Hello</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Greeting”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> Know src/main.rs and Cargo.toml. By the end of this lesson you should be able to explain <em>Cargo Project Structure</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Projects are organized so builds are reproducible. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle <em>data</em> (what something knows) with <em>behavior</em> (what it can do). Blueprints (classes/structs) describe the shape; instances are the real things your program uses.</p>\n<p><strong>Core explanation.</strong> Cargo.toml dependencies src/main.rs binary entry Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Cargo Project Structure</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “List parts”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> Use let and let mut. By the end of this lesson you should be able to explain <em>Variables &amp; Mutability</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Immutable by default reduces accidental changes — like locked cells in a ledger. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A variable is a <em>named box</em> that holds a value. The name is for humans; the value is what the computer uses in calculations. Good names read like English (<code>total_price</code> beats <code>x</code>).</p>\n<p><strong>Core explanation.</strong> Use let and let mut. This lesson focuses on <strong>Variables &amp; Mutability</strong> inside the <em>Basics</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use let and let mut.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Variables &amp; Mutability</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Counter”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> Work with i32, f64, bool, char and parse. By the end of this lesson you should be able to explain <em>Types &amp; Conversion</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: User input is text — parse to numbers carefully. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Types tell the computer <em>what kind</em> of value it is holding (text, number, true/false, list, object, etc.). Mixing kinds without converting them is a common source of bugs — especially with user input, which often arrives as text.</p>\n<p><strong>Core explanation.</strong> Work with i32, f64, bool, char and parse. This lesson focuses on <strong>Types &amp; Conversion</strong> inside the <em>Basics</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Work with i32, f64, bool, char and parse.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Types &amp; Conversion</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Parse”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> Define functions with types and return values. By the end of this lesson you should be able to explain <em>Functions</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Typed signatures document contracts clearly. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. You write it once and reuse it many times — fewer bugs, easier testing.</p>\n<p><strong>Core explanation.</strong> Define functions with types and return values. This lesson focuses on <strong>Functions</strong> inside the <em>Basics</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Name the action; list inputs; write the body; return or print a result; call it twice with different inputs. If the second call works without rewriting the body, the function is doing its job.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Functions</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Area”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> if expressions and loops. By the end of this lesson you should be able to explain <em>Control Flow</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: if is an expression — can assign results. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> <strong>Control Flow</strong> is a building block in the <em>Basics</em> module. Master the vocabulary first, then the mechanics, then a tiny variation of the example. That three-step habit works for almost every advanced topic.</p>\n<p><strong>Core explanation.</strong> if expressions and loops. This lesson focuses on <strong>Control Flow</strong> inside the <em>Basics</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “if expressions and loops.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Control Flow</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Even loop”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> Explain move semantics with String. By the end of this lesson you should be able to explain <em>Ownership</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Each value has one owner — free memory safely without GC pauses. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Rust’s ownership rules answer: who may use this memory, and when is it freed? That prevents entire classes of crashes and security bugs at compile time.</p>\n<p><strong>Core explanation.</strong> String heap data moves on assign use clone if you need deep copy Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Track who owns the value; notice when ownership moves; prefer borrowing when you only need to read; use mutable borrow only when you must change data; re-read compiler errors as instructions.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Ownership</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Predict”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Confusing Copy types (i32) with move types (String).</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "Confusing Copy types (i32) with move types (String).",
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
      "explanation": "<p><strong>What you will learn.</strong> Borrow with &amp; and &amp;mut. By the end of this lesson you should be able to explain <em>References &amp; Borrowing</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Lend data without giving up ownership — like sharing a view on a ledger. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Rust’s ownership rules answer: who may use this memory, and when is it freed? That prevents entire classes of crashes and security bugs at compile time.</p>\n<p><strong>Core explanation.</strong> fn len(s: &amp;String) -&gt; usize one &amp;mut XOR many &amp; Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Track who owns the value; notice when ownership moves; prefer borrowing when you only need to read; use mutable borrow only when you must change data; re-read compiler errors as instructions.</p>\n<p><strong>Walking through the example.</strong> The sample has about 14 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>References &amp; Borrowing</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Borrow print”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Using a value after it was moved, or combining borrows illegally — the compiler message is usually precise; read it fully.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> Use &amp;str string slices. By the end of this lesson you should be able to explain <em>Slices</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: First word of a sentence without copying whole string. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, and grow/shrink the collection as the program runs.</p>\n<p><strong>Core explanation.</strong> Use &str string slices. This lesson focuses on <strong>Slices</strong> inside the <em>Ownership</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Create the collection with sample items; access one item by position; add/remove an item; loop through all items to compute a total or print a report. If you can do those four moves, you “own” the structure.</p>\n<p><strong>Walking through the example.</strong> The sample has about 10 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Slices</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Slice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> Define structs and impl blocks. By the end of this lesson you should be able to explain <em>Structs</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Product { name, price } with methods — model inventory. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle <em>data</em> (what something knows) with <em>behavior</em> (what it can do). Blueprints (classes/structs) describe the shape; instances are the real things your program uses.</p>\n<p><strong>Core explanation.</strong> Define structs and impl blocks. This lesson focuses on <strong>Structs</strong> inside the <em>Structs &amp; Enums</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 13 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Structs</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Rect”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> Model variants with enum and match. By the end of this lesson you should be able to explain <em>Enums &amp; match</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Order status: Pending | Shipped | Delivered — enums beat magic strings. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer. Clear conditions prevent “mystery behavior”.</p>\n<p><strong>Core explanation.</strong> Model variants with enum and match. This lesson focuses on <strong>Enums &amp; match</strong> inside the <em>Structs &amp; Enums</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 15 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Enums &amp; match</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Coin”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> Handle missing values and errors without null. By the end of this lesson you should be able to explain <em>Option &amp; Result</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: No null pointer crashes — Option/Result force you to handle absence. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle <em>data</em> (what something knows) with <em>behavior</em> (what it can do). Blueprints (classes/structs) describe the shape; instances are the real things your program uses.</p>\n<p><strong>Core explanation.</strong> Option&amp;lt;T&amp;gt; Some/None Result&amp;lt;T,E&amp;gt; Ok/Err ? operator later Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 11 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Option &amp; Result</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Divide”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> Grow lists and maps. By the end of this lesson you should be able to explain <em>Vec &amp; HashMap</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Dynamic order lists and inventory counts. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, and grow/shrink the collection as the program runs.</p>\n<p><strong>Core explanation.</strong> Grow lists and maps. This lesson focuses on <strong>Vec &amp; HashMap</strong> inside the <em>Collections</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Create the collection with sample items; access one item by position; add/remove an item; loop through all items to compute a total or print a report. If you can do those four moves, you “own” the structure.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Vec &amp; HashMap</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Sum vec”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Assuming a key always exists. Plan for missing keys with defaults or explicit checks.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
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
      "explanation": "<p><strong>What you will learn.</strong> Combine structs, Vec, and methods for a notes app core. By the end of this lesson you should be able to explain <em>Capstone: CLI Notes Logic</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Portfolio CLI: add/list notes in memory. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful mini-app you can show someone.</p>\n<p><strong>Core explanation.</strong> Combine structs, Vec, and methods for a notes app core. This lesson focuses on <strong>Capstone: CLI Notes Logic</strong> inside the <em>Projects</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Combine structs, Vec, and methods for a notes app core.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 14 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Capstone: CLI Notes Logic</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in <code>src/main.rs</code> inside a Cargo project and run <code>cargo run</code>. Read compiler messages carefully — Rust’s errors are teaching tools. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Add note”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
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
      "pitfalls": "",
      "path": "builder",
      "project": true,
      "difficulty": "beginner"
    }
  ],
  "totalLessons": 14
};
