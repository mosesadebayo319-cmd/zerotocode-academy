// ZeroToCode Academy — Go (Golang) curriculum (16 lessons)
// Topic-specific explanations for deeper beginner comprehension
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
      "explanation": "<p><strong>What you will learn.</strong> Write and run a basic Go program. By the end you should explain <em>Why Go &amp; Hello World</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Go powers Docker, many cloud CLIs, and fast APIs — simple syntax, great concurrency later. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Syntax is the grammar of a language. The computer is strict: one missing quote or wrong indent and it refuses the whole program. Comments are notes for humans; print/log statements are how you see results.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>package main + func main()<br>go run . or go run file.go<br>fmt.Println for output</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Write and run a basic Go program.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>fmt.Println(\"Hello from Go!\")</code> — shows output so you can verify the result.</li><li><code>fmt.Println(\"Ready to build reliable tools\")</code> — shows output so you can verify the result.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Why Go &amp; Hello World</em> solve?</li><li>Which line in the example most directly achieves: “Write and run a basic Go program.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Initialize a module with go mod. By the end you should explain <em>go mod &amp; Project Layout</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Modules track dependencies like a shopping list for packages. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Libraries and modules save you from reinventing the wheel. You import proven tools, then focus on your business logic.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>go mod init github.com/you/app<br>go run .<br>go build</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Initialize a module with go mod.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>fmt.Println(\"module ready\")</code> — shows output so you can verify the result.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>go mod &amp; Project Layout</em> solve?</li><li>Which line in the example most directly achieves: “Initialize a module with go mod.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Declare variables with var and :=. By the end you should explain <em>Variables &amp; Types</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Static types catch bugs at compile time — before customers see them. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A variable is a named box that holds a value. You choose a clear name so future-you (and teammates) know what the data means without guessing.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>var name string = \"Ada\"<br>age := 28 type inferred<br>const Pi = 3.14<br>basic types: string int float64 bool</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Declare variables with var and :=.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>var shop string = \"City Mart\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>revenue := 125000.5</code> — stores or updates a value.</li><li><code>open := true</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Variables &amp; Types</em> solve?</li><li>Which line in the example most directly achieves: “Declare variables with var and :=.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Use typed/untyped constants and conversions. By the end you should explain <em>Constants &amp; Conversion</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Money math needs intentional conversions — Go will not auto-mix types. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A variable is a named box that holds a value. You choose a clear name so future-you (and teammates) know what the data means without guessing.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>const StatusOpen = \"open\"<br>float64(i) conversions explicit</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use typed/untyped constants and conversions.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>const TaxRate = 0.075</code> — sets up a name, type, import, or definition you will use next.</li><li><code>price := 10000</code> — stores or updates a value.</li><li><code>total := float64(price) * (1 + TaxRate)</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Constants &amp; Conversion</em> solve?</li><li>Which line in the example most directly achieves: “Use typed/untyped constants and conversions.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Use if, for, and switch. By the end you should explain <em>Control Flow</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Business rules: if err, retry loops, status switches. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer — just like a shop discount rule.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>if with optional short statement<br>for is the only loop<br>switch without break auto</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use if, for, and switch.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>21</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>score := 73</code> — stores or updates a value.</li><li><code>if score &gt;= 70 {</code> — branches based on a condition.</li><li><code>fmt.Println(\"A\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Control Flow</em> solve?</li><li>Which line in the example most directly achieves: “Use if, for, and switch.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Write functions with multiple return values. By the end you should explain <em>Functions &amp; Multiple Returns</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Go style: return result, error — callers must handle failures. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. Write it once, reuse it many times, and test it in isolation.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>func add(a, b int) int<br>func div(a, b float64) (float64, error)</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Write functions with multiple return values.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>22</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import (</code> — sets up a name, type, import, or definition you will use next.</li><li><code>\"errors\"</code> — does a step in the overall recipe.</li><li><code>\"fmt\"</code> — does a step in the overall recipe.</li><li><code>)</code> — does a step in the overall recipe.</li><li><code>func add(a, b int) int {</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Functions &amp; Multiple Returns</em> solve?</li><li>Which line in the example most directly achieves: “Write functions with multiple return values.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Import fmt and organize code in packages. By the end you should explain <em>Packages &amp; Imports</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Reusable libraries keep main small — like departments in a company. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Libraries and modules save you from reinventing the wheel. You import proven tools, then focus on your business logic.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>import \"fmt\"<br>import alias<br>exported Names start with Capital letter</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Import fmt and organize code in packages.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import (</code> — sets up a name, type, import, or definition you will use next.</li><li><code>\"fmt\"</code> — does a step in the overall recipe.</li><li><code>\"strings\"</code> — does a step in the overall recipe.</li><li><code>)</code> — does a step in the overall recipe.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Packages &amp; Imports</em> solve?</li><li>Which line in the example most directly achieves: “Import fmt and organize code in packages.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Handle errors with if err != nil. By the end you should explain <em>Error Handling Patterns</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Reliable services never ignore failures — they log and respond. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Real systems fail: bad input, missing files, network issues. Good code expects failure and handles it instead of crashing for users.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>if err != nil { return err } bubble up<br>fmt.Errorf wrap</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Handle errors with if err != nil.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>17</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import (</code> — sets up a name, type, import, or definition you will use next.</li><li><code>\"fmt\"</code> — does a step in the overall recipe.</li><li><code>\"os\"</code> — does a step in the overall recipe.</li><li><code>)</code> — does a step in the overall recipe.</li><li><code>func readConfig(path string) error {</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Error Handling Patterns</em> solve?</li><li>Which line in the example most directly achieves: “Handle errors with if err != nil.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Define structs and methods with receivers. By the end you should explain <em>Structs &amp; Methods</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Customer, Order, Product — structs model business data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>type Product struct { Name string; Price float64 }<br>func (p Product) Total(qty int) float64</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Define structs and methods with receivers.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>13</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>type Product struct {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>Name  string</code> — does a step in the overall recipe.</li><li><code>Price float64</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Structs &amp; Methods</em> solve?</li><li>Which line in the example most directly achieves: “Define structs and methods with receivers.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Use slices for dynamic lists. By the end you should explain <em>Slices</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Orders today: grow/shrink — slices not fixed arrays. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, add/remove, and pass the whole group around.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>s := []int{1,2,3}<br>append, len, cap, slicing a[1:3]</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use slices for dynamic lists.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>orders := []string{\"jollof\", \"suya\"}</code> — stores or updates a value.</li><li><code>orders = append(orders, \"zobo\")</code> — stores or updates a value.</li><li><code>fmt.Println(len(orders), orders)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Slices</em> solve?</li><li>Which line in the example most directly achieves: “Use slices for dynamic lists.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Store key-value data with maps. By the end you should explain <em>Maps</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Phonebook, inventory counts — maps are hash tables. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Key–value maps store labeled data (like a form: name → value). They shine when you look things up by a name instead of by position.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>m := map[string]int{}<br>value, ok := m[key]</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Store key-value data with maps.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>stock := map[string]int{\"rice\": 20, \"beans\": 5}</code> — stores or updates a value.</li><li><code>stock[\"oil\"] = 12</code> — stores or updates a value.</li><li><code>qty, ok := stock[\"beans\"]</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Maps</em> solve?</li><li>Which line in the example most directly achieves: “Store key-value data with maps.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Missing keys return errors/undefined — print keys or use safe get/default patterns.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Missing keys return errors/undefined — print keys or use safe get/default patterns.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Accept interfaces for flexible APIs. By the end you should explain <em>Interfaces (Gentle)</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> fmt.Stringer — anything with String() can print nicely. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Data module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>interface { Method() }<br>implicit implementation</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Accept interfaces for flexible APIs.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>type Naira float64</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func (n Naira) String() string {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>return fmt.Sprintf(\"₦%.2f\", float64(n))</code> — shows output so you can verify the result.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Interfaces (Gentle)</em> solve?</li><li>Which line in the example most directly achieves: “Accept interfaces for flexible APIs.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Start a goroutine with go keyword. By the end you should explain <em>Goroutines Intro</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Handle many light tasks — not threads you manage manually. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Concurrency means overlapping work in time. You must coordinate tasks so they do not corrupt shared data — like multiple cashiers updating one stock count.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>go f()<br>main must wait or program exits<br>use sync.WaitGroup intro</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Start a goroutine with go keyword.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>12</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import (</code> — sets up a name, type, import, or definition you will use next.</li><li><code>\"fmt\"</code> — does a step in the overall recipe.</li><li><code>\"time\"</code> — does a step in the overall recipe.</li><li><code>)</code> — does a step in the overall recipe.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Goroutines Intro</em> solve?</li><li>Which line in the example most directly achieves: “Start a goroutine with go keyword.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Send/receive on channels. By the end you should explain <em>Channels Basics</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Safe communication between goroutines — \"don't communicate by sharing memory\". Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Concurrency means overlapping work in time. You must coordinate tasks so they do not corrupt shared data — like multiple cashiers updating one stock count.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>ch := make(chan int)<br>ch <- 1; v := <-ch</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Send/receive on channels.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>ch := make(chan string)</code> — stores or updates a value.</li><li><code>go func() {</code> — does a step in the overall recipe.</li><li><code>ch &lt;- \"order ready\"</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Channels Basics</em> solve?</li><li>Which line in the example most directly achieves: “Send/receive on channels.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Build a simple in-memory expense CLI logic. By the end you should explain <em>Mini Project: CLI Expense Tracker</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Track daily spend — classic CLI portfolio piece. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>struct Expense, slice store, add + total functions</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Build a simple in-memory expense CLI logic.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>17</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>type Expense struct {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>Label  string</code> — does a step in the overall recipe.</li><li><code>Amount float64</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Mini Project: CLI Expense Tracker</em> solve?</li><li>Which line in the example most directly achieves: “Build a simple in-memory expense CLI logic.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Write a minimal net/http hello server pattern. By the end you should explain <em>Capstone: Tiny HTTP Handler</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> APIs are how mobile apps talk to backends. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>http.HandleFunc, ListenAndServe</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Write a minimal net/http hello server pattern.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>12</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import (</code> — sets up a name, type, import, or definition you will use next.</li><li><code>\"fmt\"</code> — does a step in the overall recipe.</li><li><code>\"net/http\"</code> — does a step in the overall recipe.</li><li><code>)</code> — does a step in the overall recipe.</li><li><code>func hello(w http.ResponseWriter, r *http.Request) {</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Capstone: Tiny HTTP Handler</em> solve?</li><li>Which line in the example most directly achieves: “Write a minimal net/http hello server pattern.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": true,
      "difficulty": "intermediate"
    }
  ],
  "totalLessons": 16
};
