// ZeroToCode Academy — Go (Golang) curriculum (16 lessons)
// Explanations expanded for deeper beginner comprehension
window.GO_COURSE = {
  "id": "go",
  "name": "Go (Golang)",
  "icon": "🐹",
  "color": "cyan",
  "subtitle": "Simple, fast backends and CLIs",
  "globalName": "GO_COURSE",
  "lessons": [
    {
      "id": "go-01",
      "title": "1.1 Why Go & Hello World",
      "module": "Getting Started",
      "objective": "Write and run a basic Go program.",
      "why": "Go powers Docker, many cloud CLIs, and fast APIs — simple syntax, great concurrency later.",
      "explanation": "<p><strong>What you will learn.</strong> Write and run a basic Go program. By the end of this lesson you should be able to explain <em>Why Go &amp; Hello World</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Go powers Docker, many cloud CLIs, and fast APIs — simple syntax, great concurrency later. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Foundations look small but they support everything else: tooling, syntax rules, and how you display results. If these feel shaky, every later topic becomes harder than it needs to be.</p>\n<p><strong>Core explanation.</strong> package main + func main() go run . or go run file.go fmt.Println for output Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Write and run a basic Go program.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Why Go &amp; Hello World</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Personal hello”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello from Go!\")\n    fmt.Println(\"Ready to build reliable tools\")\n}",
      "exercises": [
        {
          "title": "Personal hello",
          "instruction": "Print your name and city.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"I am Ada from Lagos\")\n}",
          "hint": "fmt.Println",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Entry point function in Go?",
          "options": [
            "start",
            "main in package main",
            "init only",
            "run"
          ],
          "correct": 1,
          "explanation": "package main + main()"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-02",
      "title": "1.2 go mod & Project Layout",
      "module": "Getting Started",
      "objective": "Initialize a module with go mod.",
      "why": "Modules track dependencies like a shopping list for packages.",
      "explanation": "<p><strong>What you will learn.</strong> Initialize a module with go mod. By the end of this lesson you should be able to explain <em>go mod &amp; Project Layout</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Modules track dependencies like a shopping list for packages. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Foundations look small but they support everything else: tooling, syntax rules, and how you display results. If these feel shaky, every later topic becomes harder than it needs to be.</p>\n<p><strong>Core explanation.</strong> go mod init github.com/you/app go run . go build Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Initialize a module with go mod.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>go mod &amp; Project Layout</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Mod name”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "// Terminal:\n// go mod init example.com/hello\n// go run .\n\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"module ready\")\n}",
      "exercises": [
        {
          "title": "Mod name",
          "instruction": "Print a valid go mod init path for a CLI named shopctl.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"go mod init example.com/shopctl\")\n}",
          "hint": "module path",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "go mod init does?",
          "options": [
            "Deletes cache",
            "Creates module metadata go.mod",
            "Formats only",
            "Starts server"
          ],
          "correct": 1,
          "explanation": "Initializes module"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-03",
      "title": "1.3 Variables & Types",
      "module": "Basics",
      "objective": "Declare variables with var and :=.",
      "why": "Static types catch bugs at compile time — before customers see them.",
      "explanation": "<p><strong>What you will learn.</strong> Declare variables with var and :=. By the end of this lesson you should be able to explain <em>Variables &amp; Types</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Static types catch bugs at compile time — before customers see them. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A variable is a <em>named box</em> that holds a value. The name is for humans; the value is what the computer uses in calculations. Good names read like English (<code>total_price</code> beats <code>x</code>).</p>\n<p><strong>Core explanation.</strong> var name string = \"Ada\" age := 28 type inferred const Pi = 3.14 basic types: string int float64 bool Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Declare variables with var and :=.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Variables &amp; Types</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Account vars”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    var shop string = \"City Mart\"\n    revenue := 125000.5\n    open := true\n    fmt.Println(shop, revenue, open)\n}",
      "exercises": [
        {
          "title": "Account vars",
          "instruction": "owner string, balance float64, active bool — print them.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    owner := \"Chidi\"\n    balance := 15000.0\n    active := true\n    fmt.Println(owner, balance, active)\n}",
          "hint": ":= inside functions",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": ":= can be used?",
          "options": [
            "At package level always",
            "Inside functions for short declare",
            "Only for const",
            "Never with ints"
          ],
          "correct": 1,
          "explanation": "Short variable declaration"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-04",
      "title": "1.4 Constants & Conversion",
      "module": "Basics",
      "objective": "Use typed/untyped constants and conversions.",
      "why": "Money math needs intentional conversions — Go will not auto-mix types.",
      "explanation": "<p><strong>What you will learn.</strong> Use typed/untyped constants and conversions. By the end of this lesson you should be able to explain <em>Constants &amp; Conversion</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Money math needs intentional conversions — Go will not auto-mix types. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> <strong>Constants &amp; Conversion</strong> is a building block in the <em>Basics</em> module. Master the vocabulary first, then the mechanics, then a tiny variation of the example. That three-step habit works for almost every advanced topic.</p>\n<p><strong>Core explanation.</strong> const StatusOpen = \"open\" float64(i) conversions explicit Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use typed/untyped constants and conversions.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Constants &amp; Conversion</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Convert”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    const TaxRate = 0.075\n    price := 10000\n    total := float64(price) * (1 + TaxRate)\n    fmt.Println(total)\n}",
      "exercises": [
        {
          "title": "Convert",
          "instruction": "Convert int 42 to float64 and divide by 2.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(float64(42) / 2)\n}",
          "hint": "float64(n)",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Go automatic type coercion like JS?",
          "options": [
            "Yes always",
            "No — conversions are explicit",
            "Only for strings",
            "Only in loops"
          ],
          "correct": 1,
          "explanation": "Explicit conversions"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-05",
      "title": "1.5 Control Flow",
      "module": "Basics",
      "objective": "Use if, for, and switch.",
      "why": "Business rules: if err, retry loops, status switches.",
      "explanation": "<p><strong>What you will learn.</strong> Use if, for, and switch. By the end of this lesson you should be able to explain <em>Control Flow</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Business rules: if err, retry loops, status switches. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> <strong>Control Flow</strong> is a building block in the <em>Basics</em> module. Master the vocabulary first, then the mechanics, then a tiny variation of the example. That three-step habit works for almost every advanced topic.</p>\n<p><strong>Core explanation.</strong> if with optional short statement for is the only loop switch without break auto Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use if, for, and switch.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 21 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Control Flow</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Even numbers”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    score := 73\n    if score >= 70 {\n        fmt.Println(\"A\")\n    } else if score >= 50 {\n        fmt.Println(\"Pass\")\n    } else {\n        fmt.Println(\"Fail\")\n    }\n    for i := 1; i <= 3; i++ {\n        fmt.Println(\"tick\", i)\n    }\n    switch score / 10 {\n    case 10, 9, 8, 7:\n        fmt.Println(\"Strong\")\n    default:\n        fmt.Println(\"Keep practicing\")\n    }\n}",
      "exercises": [
        {
          "title": "Even numbers",
          "instruction": "for loop print even numbers 2..10.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    for i := 2; i <= 10; i += 2 {\n        fmt.Println(i)\n    }\n}",
          "hint": "step by 2",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "How many loop keywords in Go?",
          "options": [
            "three: for while do",
            "only for",
            "only while",
            "foreach only"
          ],
          "correct": 1,
          "explanation": "for covers all"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-06",
      "title": "2.1 Functions & Multiple Returns",
      "module": "Functions",
      "objective": "Write functions with multiple return values.",
      "why": "Go style: return result, error — callers must handle failures.",
      "explanation": "<p><strong>What you will learn.</strong> Write functions with multiple return values. By the end of this lesson you should be able to explain <em>Functions &amp; Multiple Returns</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Go style: return result, error — callers must handle failures. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. You write it once and reuse it many times — fewer bugs, easier testing.</p>\n<p><strong>Core explanation.</strong> func add(a, b int) int func div(a, b float64) (float64, error) Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Name the action; list inputs; write the body; return or print a result; call it twice with different inputs. If the second call works without rewriting the body, the function is doing its job.</p>\n<p><strong>Walking through the example.</strong> The sample has about 22 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Functions &amp; Multiple Returns</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Area func”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Ignoring err with _ blindly hides bugs.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\nfunc add(a, b int) int {\n    return a + b\n}\n\nfunc divide(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, errors.New(\"divide by zero\")\n    }\n    return a / b, nil\n}\n\nfunc main() {\n    fmt.Println(add(2, 3))\n    if res, err := divide(10, 2); err != nil {\n        fmt.Println(\"err\", err)\n    } else {\n        fmt.Println(res)\n    }\n}",
      "exercises": [
        {
          "title": "Area func",
          "instruction": "area(length, width float64) float64.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc area(length, width float64) float64 {\n    return length * width\n}\n\nfunc main() {\n    fmt.Println(area(4, 5))\n}",
          "hint": "simple return",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Idiomatic second return often is?",
          "options": [
            "string always",
            "error",
            "chan",
            "mutex"
          ],
          "correct": 1,
          "explanation": "error handling"
        }
      ],
      "pitfalls": "Ignoring err with _ blindly hides bugs.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-07",
      "title": "2.2 Packages & Imports",
      "module": "Functions",
      "objective": "Import fmt and organize code in packages.",
      "why": "Reusable libraries keep main small — like departments in a company.",
      "explanation": "<p><strong>What you will learn.</strong> Import fmt and organize code in packages. By the end of this lesson you should be able to explain <em>Packages &amp; Imports</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Reusable libraries keep main small — like departments in a company. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. You write it once and reuse it many times — fewer bugs, easier testing.</p>\n<p><strong>Core explanation.</strong> import \"fmt\" import alias exported Names start with Capital letter Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Name the action; list inputs; write the body; return or print a result; call it twice with different inputs. If the second call works without rewriting the body, the function is doing its job.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Packages &amp; Imports</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Title-ish”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    fmt.Println(strings.ToUpper(\"lagos\"))\n    fmt.Println(strings.Contains(\"hello\", \"ell\"))\n}",
      "exercises": [
        {
          "title": "Title-ish",
          "instruction": "Use strings.ToLower on a shop name.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    fmt.Println(strings.ToLower(\"CITY MART\"))\n}",
          "hint": "strings package",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Exported name starts with?",
          "options": [
            "underscore",
            "lowercase only",
            "Uppercase letter",
            "digit"
          ],
          "correct": 2,
          "explanation": "Capital = exported"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-08",
      "title": "2.3 Error Handling Patterns",
      "module": "Functions",
      "objective": "Handle errors with if err != nil.",
      "why": "Reliable services never ignore failures — they log and respond.",
      "explanation": "<p><strong>What you will learn.</strong> Handle errors with if err != nil. By the end of this lesson you should be able to explain <em>Error Handling Patterns</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Reliable services never ignore failures — they log and respond. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. You write it once and reuse it many times — fewer bugs, easier testing.</p>\n<p><strong>Core explanation.</strong> if err != nil { return err } bubble up fmt.Errorf wrap Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Name the action; list inputs; write the body; return or print a result; call it twice with different inputs. If the second call works without rewriting the body, the function is doing its job.</p>\n<p><strong>Walking through the example.</strong> The sample has about 17 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Error Handling Patterns</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Pattern”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n    \"os\"\n)\n\nfunc readConfig(path string) error {\n    _, err := os.ReadFile(path)\n    if err != nil {\n        return fmt.Errorf(\"read config: %w\", err)\n    }\n    return nil\n}\n\nfunc main() {\n    if err := readConfig(\"missing.json\"); err != nil {\n        fmt.Println(\"could not start:\", err)\n    }\n}",
      "exercises": [
        {
          "title": "Pattern",
          "instruction": "Write lines showing if err != nil return err pattern in a comment function.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc work() error {\n    var err error = nil\n    if err != nil {\n        return err\n    }\n    return nil\n}\n\nfunc main() { fmt.Println(work()) }",
          "hint": "check err early",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Best default when err != nil?",
          "options": [
            "panic always",
            "handle or return err",
            "ignore",
            "sleep"
          ],
          "correct": 1,
          "explanation": "Handle or propagate"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-09",
      "title": "3.1 Structs & Methods",
      "module": "Data",
      "objective": "Define structs and methods with receivers.",
      "why": "Customer, Order, Product — structs model business data.",
      "explanation": "<p><strong>What you will learn.</strong> Define structs and methods with receivers. By the end of this lesson you should be able to explain <em>Structs &amp; Methods</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Customer, Order, Product — structs model business data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. You write it once and reuse it many times — fewer bugs, easier testing.</p>\n<p><strong>Core explanation.</strong> type Product struct { Name string; Price float64 } func (p Product) Total(qty int) float64 Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Name the action; list inputs; write the body; return or print a result; call it twice with different inputs. If the second call works without rewriting the body, the function is doing its job.</p>\n<p><strong>Walking through the example.</strong> The sample has about 13 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Structs &amp; Methods</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Student struct”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\ntype Product struct {\n    Name  string\n    Price float64\n}\n\nfunc (p Product) LineTotal(qty int) float64 {\n    return p.Price * float64(qty)\n}\n\nfunc main() {\n    rice := Product{Name: \"Rice\", Price: 45000}\n    fmt.Println(rice.Name, rice.LineTotal(2))\n}",
      "exercises": [
        {
          "title": "Student struct",
          "instruction": "name string score int + method Passed() bool score>=50.",
          "solution": "package main\n\nimport \"fmt\"\n\ntype Student struct {\n    Name  string\n    Score int\n}\n\nfunc (s Student) Passed() bool {\n    return s.Score >= 50\n}\n\nfunc main() {\n    s := Student{\"Ada\", 72}\n    fmt.Println(s.Passed())\n}",
          "hint": "method receiver",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Method receiver appears?",
          "options": [
            "After func name only",
            "Before func name in parentheses",
            "In import",
            "In go.mod"
          ],
          "correct": 1,
          "explanation": "(r Type) Name()"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-10",
      "title": "3.2 Slices",
      "module": "Data",
      "objective": "Use slices for dynamic lists.",
      "why": "Orders today: grow/shrink — slices not fixed arrays.",
      "explanation": "<p><strong>What you will learn.</strong> Use slices for dynamic lists. By the end of this lesson you should be able to explain <em>Slices</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Orders today: grow/shrink — slices not fixed arrays. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, and grow/shrink the collection as the program runs.</p>\n<p><strong>Core explanation.</strong> s := []int{1,2,3} append, len, cap, slicing a[1:3] Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Create the collection with sample items; access one item by position; add/remove an item; loop through all items to compute a total or print a report. If you can do those four moves, you “own” the structure.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Slices</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Sum slice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    orders := []string{\"jollof\", \"suya\"}\n    orders = append(orders, \"zobo\")\n    fmt.Println(len(orders), orders)\n    fmt.Println(orders[1:])\n}",
      "exercises": [
        {
          "title": "Sum slice",
          "instruction": "Sum []int{10,20,30}.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    nums := []int{10, 20, 30}\n    sum := 0\n    for _, n := range nums {\n        sum += n\n    }\n    fmt.Println(sum)\n}",
          "hint": "range loop",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "append may return?",
          "options": [
            "same backing always",
            "new slice header (must reassign)",
            "only errors",
            "maps"
          ],
          "correct": 1,
          "explanation": "orders = append(orders, x)"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-11",
      "title": "3.3 Maps",
      "module": "Data",
      "objective": "Store key-value data with maps.",
      "why": "Phonebook, inventory counts — maps are hash tables.",
      "explanation": "<p><strong>What you will learn.</strong> Store key-value data with maps. By the end of this lesson you should be able to explain <em>Maps</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Phonebook, inventory counts — maps are hash tables. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> <strong>Maps</strong> is a building block in the <em>Data</em> module. Master the vocabulary first, then the mechanics, then a tiny variation of the example. That three-step habit works for almost every advanced topic.</p>\n<p><strong>Core explanation.</strong> m := map[string]int{} value, ok := m[key] Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Create a record with clear keys; read one field; update a field; loop through keys/values for a summary. Always decide what should happen when a key is missing.</p>\n<p><strong>Walking through the example.</strong> The sample has about 10 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Maps</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Word count lite”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Assuming a key always exists. Plan for missing keys with defaults or explicit checks.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    stock := map[string]int{\"rice\": 20, \"beans\": 5}\n    stock[\"oil\"] = 12\n    qty, ok := stock[\"beans\"]\n    fmt.Println(qty, ok)\n    delete(stock, \"beans\")\n    fmt.Println(stock)\n}",
      "exercises": [
        {
          "title": "Word count lite",
          "instruction": "map count for words []string{\"a\",\"b\",\"a\"}.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    words := []string{\"a\", \"b\", \"a\"}\n    count := map[string]int{}\n    for _, w := range words {\n        count[w]++\n    }\n    fmt.Println(count)\n}",
          "hint": "m[k]++",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Comma-ok idiom checks?",
          "options": [
            "channel closed only",
            "key existence in map",
            "goroutine id",
            "file lock"
          ],
          "correct": 1,
          "explanation": "val, ok := m[k]"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-12",
      "title": "3.4 Interfaces (Gentle)",
      "module": "Data",
      "objective": "Accept interfaces for flexible APIs.",
      "why": "fmt.Stringer — anything with String() can print nicely.",
      "explanation": "<p><strong>What you will learn.</strong> Accept interfaces for flexible APIs. By the end of this lesson you should be able to explain <em>Interfaces (Gentle)</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: fmt.Stringer — anything with String() can print nicely. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Values often arrive as text from users or files. Conversion turns them into numbers (or other types) so math and comparisons work correctly. Invalid conversions must be handled.</p>\n<p><strong>Core explanation.</strong> interface { Method() } implicit implementation Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Accept interfaces for flexible APIs.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 10 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Interfaces (Gentle)</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Stringer idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\ntype Naira float64\n\nfunc (n Naira) String() string {\n    return fmt.Sprintf(\"₦%.2f\", float64(n))\n}\n\nfunc main() {\n    var amount Naira = 2500\n    fmt.Println(amount)\n}",
      "exercises": [
        {
          "title": "Stringer idea",
          "instruction": "Explain in a Println why String() helps formatting.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"String() customizes fmt printing for a type\")\n}",
          "hint": "fmt looks for Stringer",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Go interfaces are satisfied?",
          "options": [
            "explicit implements keyword only",
            "implicitly by having methods",
            "via inheritance",
            "YAML"
          ],
          "correct": 1,
          "explanation": "Duck typing"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-13",
      "title": "4.1 Goroutines Intro",
      "module": "Concurrency",
      "objective": "Start a goroutine with go keyword.",
      "why": "Handle many light tasks — not threads you manage manually.",
      "explanation": "<p><strong>What you will learn.</strong> Start a goroutine with go keyword. By the end of this lesson you should be able to explain <em>Goroutines Intro</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Handle many light tasks — not threads you manage manually. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Concurrency means overlapping work in time. You must coordinate tasks so they do not corrupt shared data — channels and clear ownership of data help.</p>\n<p><strong>Core explanation.</strong> go f() main must wait or program exits use sync.WaitGroup intro Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Start a goroutine with go keyword.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 12 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Goroutines Intro</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Caution”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n    \"time\"\n)\n\nfunc main() {\n    go func() {\n        fmt.Println(\"work in background\")\n    }()\n    time.Sleep(100 * time.Millisecond)\n    fmt.Println(\"main done\")\n}",
      "exercises": [
        {
          "title": "Caution",
          "instruction": "Why might main end before goroutine prints? Print answer.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Main can exit before goroutines finish unless you wait\")\n}",
          "hint": "lifecycle",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "go keyword starts?",
          "options": [
            "OS process always",
            "goroutine",
            "SQL txn",
            "HTTP only"
          ],
          "correct": 1,
          "explanation": "Lightweight concurrent function"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "intermediate"
    },
    {
      "id": "go-14",
      "title": "4.2 Channels Basics",
      "module": "Concurrency",
      "objective": "Send/receive on channels.",
      "why": "Safe communication between goroutines — \"don't communicate by sharing memory\".",
      "explanation": "<p><strong>What you will learn.</strong> Send/receive on channels. By the end of this lesson you should be able to explain <em>Channels Basics</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Safe communication between goroutines — \"don't communicate by sharing memory\". Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Concurrency means overlapping work in time. You must coordinate tasks so they do not corrupt shared data — channels and clear ownership of data help.</p>\n<p><strong>Core explanation.</strong> Send/receive on channels. This lesson focuses on <strong>Channels Basics</strong> inside the <em>Concurrency</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Send/receive on channels.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 10 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Channels Basics</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Ping”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    ch := make(chan string)\n    go func() {\n        ch <- \"order ready\"\n    }()\n    msg := <-ch\n    fmt.Println(msg)\n}",
      "exercises": [
        {
          "title": "Ping",
          "instruction": "Send \"ping\" on channel and print received value.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    ch := make(chan string)\n    go func() { ch <- \"ping\" }()\n    fmt.Println(<-ch)\n}",
          "hint": "receive blocks until send",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Unbuffered send blocks until?",
          "options": [
            "timeout always",
            "receiver ready",
            "GC runs",
            "compile ends"
          ],
          "correct": 1,
          "explanation": "Synchronization point"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "intermediate"
    },
    {
      "id": "go-15",
      "title": "5.1 Mini Project: CLI Expense Tracker",
      "module": "Projects",
      "objective": "Build a simple in-memory expense CLI logic.",
      "why": "Track daily spend — classic CLI portfolio piece.",
      "explanation": "<p><strong>What you will learn.</strong> Build a simple in-memory expense CLI logic. By the end of this lesson you should be able to explain <em>Mini Project: CLI Expense Tracker</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Track daily spend — classic CLI portfolio piece. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful mini-app you can show someone.</p>\n<p><strong>Core explanation.</strong> struct Expense, slice store, add + total functions Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Build a simple in-memory expense CLI logic.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 17 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Mini Project: CLI Expense Tracker</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Add food”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\ntype Expense struct {\n    Label  string\n    Amount float64\n}\n\nfunc total(items []Expense) float64 {\n    var sum float64\n    for _, e := range items {\n        sum += e.Amount\n    }\n    return sum\n}\n\nfunc main() {\n    items := []Expense{{\"fuel\", 12000}, {\"data\", 2000}}\n    fmt.Println(\"Total:\", total(items))\n}",
      "exercises": [
        {
          "title": "Add food",
          "instruction": "Append food 3500 and print new total.",
          "solution": "package main\n\nimport \"fmt\"\n\ntype Expense struct {\n    Label  string\n    Amount float64\n}\n\nfunc total(items []Expense) float64 {\n    var sum float64\n    for _, e := range items {\n        sum += e.Amount\n    }\n    return sum\n}\n\nfunc main() {\n    items := []Expense{{\"fuel\", 12000}, {\"data\", 2000}, {\"food\", 3500}}\n    fmt.Println(total(items))\n}",
          "hint": "append struct",
          "level": "medium"
        }
      ],
      "quiz": [],
      "pitfalls": "",
      "path": "builder",
      "project": true,
      "difficulty": "beginner"
    },
    {
      "id": "go-16",
      "title": "5.2 Capstone: Tiny HTTP Handler",
      "module": "Projects",
      "objective": "Write a minimal net/http hello server pattern.",
      "why": "APIs are how mobile apps talk to backends.",
      "explanation": "<p><strong>What you will learn.</strong> Write a minimal net/http hello server pattern. By the end of this lesson you should be able to explain <em>Capstone: Tiny HTTP Handler</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: APIs are how mobile apps talk to backends. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs exchange structured data (often JSON) between browser, server, and files. Learn to create, parse, and validate that data.</p>\n<p><strong>Core explanation.</strong> Write a minimal net/http hello server pattern. This lesson focuses on <strong>Capstone: Tiny HTTP Handler</strong> inside the <em>Projects</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Write a minimal net/http hello server pattern.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 13 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Capstone: Tiny HTTP Handler</em>.</p>\n<p><strong>How to practice (important).</strong> On your computer: put the code in a file (for example <code>main.go</code>), then run <code>go run .</code> in that folder. Change a value and run again. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Route idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n    \"net/http\"\n)\n\nfunc hello(w http.ResponseWriter, r *http.Request) {\n    fmt.Fprintln(w, \"ZeroToCode Go API is live\")\n}\n\nfunc main() {\n    http.HandleFunc(\"/\", hello)\n    // http.ListenAndServe(\":8080\", nil)\n    fmt.Println(\"Server pattern ready — uncomment ListenAndServe to run\")\n}",
      "exercises": [
        {
          "title": "Route idea",
          "instruction": "HandleFunc path /health returns OK — sketch the handler.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n    \"net/http\"\n)\n\nfunc health(w http.ResponseWriter, r *http.Request) {\n    fmt.Fprintln(w, \"OK\")\n}\n\nfunc main() {\n    http.HandleFunc(\"/health\", health)\n    fmt.Println(\"registered /health\")\n}",
          "hint": "HandleFunc",
          "level": "medium"
        }
      ],
      "quiz": [],
      "pitfalls": "",
      "path": "builder",
      "project": true,
      "difficulty": "intermediate"
    }
  ],
  "totalLessons": 16
};
