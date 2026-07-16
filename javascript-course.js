// ZeroToCode Academy — JavaScript curriculum (25 lessons)
// Topic-specific explanations for deeper beginner comprehension
window.JAVASCRIPT_COURSE = {
  "id": "javascript",
  "name": "JavaScript",
  "icon": "🟨",
  "color": "yellow",
  "subtitle": "Make websites interactive — DOM, events, APIs",
  "globalName": "JAVASCRIPT_COURSE",
  "lessons": [
    {
      "id": "js-01",
      "title": "1.1 What is JavaScript?",
      "module": "Getting Started",
      "objective": "Explain what JS does in the browser and where it runs.",
      "why": "Every interactive website (buttons, menus, forms) uses JavaScript. It is the only language that runs natively in every browser.",
      "explanation": "<p><strong>What you will learn.</strong> Explain what JS does in the browser and where it runs. By the end you should explain <em>What is JavaScript?</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Every interactive website (buttons, menus, forms) uses JavaScript. It is the only language that runs natively in every browser. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Every program is a set of clear instructions a computer can follow. Your job is to write those instructions so they match the real-world job you care about.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>JavaScript makes pages interactive. You can write it in a <code>&lt;script&gt;</code> tag, an external .js file, or the browser console (F12).</p><p><strong>Real life:</strong> show/hide a mobile menu, validate a payment form, update a cart total without reloading.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Explain what JS does in the browser and where it runs.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>console.log(\"Hello from JavaScript!\");</code> — shows output so you can verify the result.</li><li><code>console.log(2 + 2);</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>What is JavaScript?</em> solve?</li><li>Which line in the example most directly achieves: “Explain what JS does in the browser and where it runs.”?</li><li>If you change one value in <code>console.log(\"Hello from JavaScript!\");</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "// Open browser console (F12) and try:\nconsole.log(\"Hello from JavaScript!\");\nconsole.log(2 + 2);\n\n// On a webpage:\n// <script>\n//   console.log(\"Page loaded\");\n// </script>",
      "exercises": [
        {
          "title": "Console hello",
          "instruction": "Log your name and one goal for learning JS.",
          "solution": "console.log(\"My name is Ada\");\nconsole.log(\"I want to build interactive websites\");",
          "hint": "Use console.log(\"text\")",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Where does JavaScript run natively?",
          "options": [
            "Only on servers",
            "In every modern browser",
            "Only in Python",
            "Only on Android"
          ],
          "correct": 1,
          "explanation": "Browsers include a JS engine (V8, SpiderMonkey, etc.)."
        }
      ],
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-02",
      "title": "1.2 Variables: let, const, var",
      "module": "Getting Started",
      "objective": "Declare variables safely with let and const.",
      "why": "Cart totals change (let). Your shop name should not (const). Choosing correctly prevents bugs.",
      "explanation": "<p><strong>What you will learn.</strong> Declare variables safely with let and const. By the end you should explain <em>Variables: let, const, var</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Cart totals change (let). Your shop name should not (const). Choosing correctly prevents bugs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A variable is a named box that holds a value. You choose a clear name so future-you (and teammates) know what the data means without guessing.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Prefer <code>const</code> by default. Use <code>let</code> when the value must change. Avoid <code>var</code> (function-scoped, older style).<br>Names: camelCase — <code>totalPrice</code>.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Declare variables safely with let and const.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const shopName = \"City Mart\";</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let cartTotal = 0;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>cartTotal = cartTotal + 1500;</code> — stores or updates a value.</li><li><code>console.log(shopName, cartTotal);</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Variables: let, const, var</em> solve?</li><li>Which line in the example most directly achieves: “Declare variables safely with let and const.”?</li><li>If you change one value in <code>const shopName = \"City Mart\";</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const shopName = \"City Mart\";\nlet cartTotal = 0;\ncartTotal = cartTotal + 1500;\n// shopName = \"Other\"; // Error!\n\nconsole.log(shopName, cartTotal);",
      "exercises": [
        {
          "title": "Budget tracker",
          "instruction": "Create const currency = \"NGN\" and let balance = 5000. Subtract 1200 and log both.",
          "solution": "const currency = \"NGN\";\nlet balance = 5000;\nbalance = balance - 1200;\nconsole.log(currency, balance);",
          "hint": "const for fixed values, let for changing ones",
          "level": "easy"
        },
        {
          "title": "Fix the bug",
          "instruction": "This should fail if you use const for age and reassign. Rewrite correctly with let.",
          "solution": "let age = 20;\nage = 21;\nconsole.log(age);",
          "hint": "If it changes, use let",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Which is best for a value that never changes?",
          "options": [
            "var",
            "let",
            "const",
            "function"
          ],
          "correct": 2,
          "explanation": "const prevents reassignment."
        }
      ],
      "pitfalls": "Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-03",
      "title": "1.3 Data Types & typeof",
      "module": "Getting Started",
      "objective": "Identify string, number, boolean, null, undefined, object.",
      "why": "Price must be a number to calculate tax. If it is the string \"100\", \"100\" + 50 becomes \"10050\".",
      "explanation": "<p><strong>What you will learn.</strong> Identify string, number, boolean, null, undefined, object. By the end you should explain <em>Data Types &amp; typeof</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Price must be a number to calculate tax. If it is the string \"100\", \"100\" + 50 becomes \"10050\". Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer — just like a shop discount rule.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Primitive types: string, number, boolean, null, undefined, symbol, bigint.<br>Objects include arrays and plain objects.<br>Use <code>typeof value</code> (note: typeof null === \"object\" — historical quirk).</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Identify string, number, boolean, null, undefined, object.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>console.log(typeof \"hello\");   // string</code> — shows output so you can verify the result.</li><li><code>console.log(typeof 42);        // number</code> — shows output so you can verify the result.</li><li><code>console.log(typeof true);      // boolean</code> — shows output so you can verify the result.</li><li><code>console.log(typeof undefined); // undefined</code> — shows output so you can verify the result.</li><li><code>console.log(typeof null);      // object (quirk!)</code> — shows output so you can verify the result.</li><li><code>console.log(typeof {a:1});     // object</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Data Types &amp; typeof</em> solve?</li><li>Which line in the example most directly achieves: “Identify string, number, boolean, null, undefined, object.”?</li><li>If you change one value in <code>console.log(typeof \"hello\");   // string</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "console.log(typeof \"hello\");   // string\nconsole.log(typeof 42);        // number\nconsole.log(typeof true);      // boolean\nconsole.log(typeof undefined); // undefined\nconsole.log(typeof null);      // object (quirk!)\nconsole.log(typeof {a:1});     // object\nconsole.log(typeof [1,2]);     // object",
      "exercises": [
        {
          "title": "Type audit",
          "instruction": "Create 4 variables of different types and log typeof for each.",
          "solution": "const name = \"Bola\";\nconst age = 28;\nconst active = true;\nconst meta = null;\nconsole.log(typeof name, typeof age, typeof active, typeof meta);",
          "hint": "null will show as object",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "typeof null is?",
          "options": [
            "null",
            "undefined",
            "object",
            "boolean"
          ],
          "correct": 2,
          "explanation": "Known JS quirk: typeof null === \"object\"."
        }
      ],
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-04",
      "title": "1.4 Operators & Comparisons",
      "module": "Getting Started",
      "objective": "Use arithmetic, comparison, and logical operators correctly.",
      "why": "Discounts, age checks, and “in stock AND paid” rules are all operators.",
      "explanation": "<p><strong>What you will learn.</strong> Use arithmetic, comparison, and logical operators correctly. By the end you should explain <em>Operators &amp; Comparisons</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Discounts, age checks, and “in stock AND paid” rules are all operators. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Operators are short symbols for common actions: calculate, compare, combine conditions. Master the common ones and most business rules become readable code.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Arithmetic: + - * / % **<br>Compare: === !== &lt; &gt; &lt;=<br>Prefer <code>===</code> over <code>==</code> (avoids type coercion surprises).<br>Logic: &amp;&amp; || !</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use arithmetic, comparison, and logical operators correctly.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const price = 2500;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>const qty = 3;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>const total = price * qty;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>const vip = true;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>const discount = vip &amp;&amp; total &gt; 5000;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>console.log(total, discount);</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Operators &amp; Comparisons</em> solve?</li><li>Which line in the example most directly achieves: “Use arithmetic, comparison, and logical operators correctly.”?</li><li>If you change one value in <code>const price = 2500;</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const price = 2500;\nconst qty = 3;\nconst total = price * qty;\nconst vip = true;\nconst discount = vip && total > 5000;\nconsole.log(total, discount);\nconsole.log(5 === \"5\"); // false\nconsole.log(5 == \"5\");  // true (avoid)",
      "exercises": [
        {
          "title": "Eligibility",
          "instruction": "age=19, hasID=true. Log whether they can enter (age>=18 && hasID).",
          "solution": "const age = 19;\nconst hasID = true;\nconsole.log(age >= 18 && hasID);",
          "hint": "Use && for both conditions",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Why prefer === over ==?",
          "options": [
            "Faster always",
            "No type coercion surprises",
            "Required by HTML",
            "Only works on strings"
          ],
          "correct": 1,
          "explanation": "=== checks value and type."
        }
      ],
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-05",
      "title": "1.5 Strings & Template Literals",
      "module": "Getting Started",
      "objective": "Build dynamic text with template literals.",
      "why": "SMS and receipts need: \"Hello Ada, total is ₦3,000\".",
      "explanation": "<p><strong>What you will learn.</strong> Build dynamic text with template literals. By the end you should explain <em>Strings &amp; Template Literals</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> SMS and receipts need: \"Hello Ada, total is ₦3,000\". Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see — names, messages, receipts, SMS — is text, so string skills show up in every real app.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Template literals use backticks: <code>`Hello ${name}`</code>.<br>Methods: length, toUpperCase(), includes(), trim(), split().</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Build dynamic text with template literals.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const name = \"Amaka\";</code> — sets up a name, type, import, or definition you will use next.</li><li><code>const total = 3000;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>console.log(`Hello ${name}, total is ₦${total}`);</code> — shows output so you can verify the result.</li><li><code>console.log(\"  Lagos  \".trim());</code> — shows output so you can verify the result.</li><li><code>console.log(\"hello\".includes(\"ell\"));</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Strings &amp; Template Literals</em> solve?</li><li>Which line in the example most directly achieves: “Build dynamic text with template literals.”?</li><li>If you change one value in <code>const name = \"Amaka\";</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const name = \"Amaka\";\nconst total = 3000;\nconsole.log(`Hello ${name}, total is ₦${total}`);\nconsole.log(\"  Lagos  \".trim());\nconsole.log(\"hello\".includes(\"ell\"));",
      "exercises": [
        {
          "title": "Order SMS",
          "instruction": "Build a template message with customer, item, and qty.",
          "solution": "const customer = \"Chidi\";\nconst item = \"Rice\";\nconst qty = 2;\nconsole.log(`Hi ${customer}, your ${qty} x ${item} is ready.`);",
          "hint": "Use backticks and ${}",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Template literals use which quotes?",
          "options": [
            "Single only",
            "Double only",
            "Backticks `",
            "No quotes"
          ],
          "correct": 2,
          "explanation": "Backticks enable ${expression}."
        }
      ],
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-06",
      "title": "1.6 Conditionals if / else",
      "module": "Control Flow",
      "objective": "Branch logic with if, else if, else.",
      "why": "ATM: if PIN ok and balance enough → pay out.",
      "explanation": "<p><strong>What you will learn.</strong> Branch logic with if, else if, else. By the end you should explain <em>Conditionals if / else</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> ATM: if PIN ok and balance enough → pay out. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer — just like a shop discount rule.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>if (condition) { ... } else if (...) { ... } else { ... }</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Branch logic with if, else if, else.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const score = 63;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>let grade;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if (score &gt;= 70) grade = \"A\";</code> — branches based on a condition.</li><li><code>else if (score &gt;= 60) grade = \"B\";</code> — branches based on a condition.</li><li><code>else if (score &gt;= 50) grade = \"C\";</code> — branches based on a condition.</li><li><code>else grade = \"F\";</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Conditionals if / else</em> solve?</li><li>Which line in the example most directly achieves: “Branch logic with if, else if, else.”?</li><li>If you change one value in <code>const score = 63;</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const score = 63;\nlet grade;\nif (score >= 70) grade = \"A\";\nelse if (score >= 60) grade = \"B\";\nelse if (score >= 50) grade = \"C\";\nelse grade = \"F\";\nconsole.log(grade);",
      "exercises": [
        {
          "title": "Shipping fee",
          "instruction": "If total >= 15000 free shipping else fee 1500. total=12000.",
          "solution": "const total = 12000;\nconst fee = total >= 15000 ? 0 : 1500;\nconsole.log(\"Shipping:\", fee);",
          "hint": "You can use if/else or ternary",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "else if runs when?",
          "options": [
            "Always",
            "When previous if was false and its condition is true",
            "Never",
            "Only on errors"
          ],
          "correct": 1,
          "explanation": "Chained conditions."
        }
      ],
      "pitfalls": "Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-07",
      "title": "1.7 Loops: for & while",
      "module": "Control Flow",
      "objective": "Repeat work with for and while loops.",
      "why": "Print every item on a receipt or retry a network call.",
      "explanation": "<p><strong>What you will learn.</strong> Repeat work with for and while loops. By the end you should explain <em>Loops: for &amp; while</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Print every item on a receipt or retry a network call. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Loops repeat work. Instead of copying the same steps 100 times, you write them once and run them for every item or until a condition ends.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>for (let i=0; i&lt;n; i++) { }<br>while (condition) { }<br>for...of for arrays.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Repeat work with for and while loops.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const items = [\"bread\", \"milk\", \"eggs\"];</code> — sets up a name, type, import, or definition you will use next.</li><li><code>for (let i = 0; i &lt; items.length; i++) {</code> — stores or updates a value.</li><li><code>console.log(i + 1, items[i]);</code> — shows output so you can verify the result.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>for (const item of items) {</code> — repeats work over items or until a condition ends.</li><li><code>console.log(\"-\", item);</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Loops: for &amp; while</em> solve?</li><li>Which line in the example most directly achieves: “Repeat work with for and while loops.”?</li><li>If you change one value in <code>const items = [\"bread\", \"milk\", \"eggs\"];</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Infinite loops forget to update the loop variable or break condition. Always know what stops the loop.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const items = [\"bread\", \"milk\", \"eggs\"];\nfor (let i = 0; i < items.length; i++) {\n  console.log(i + 1, items[i]);\n}\nfor (const item of items) {\n  console.log(\"-\", item);\n}",
      "exercises": [
        {
          "title": "Times table",
          "instruction": "Log 7 x 1 through 7 x 12.",
          "solution": "for (let i = 1; i <= 12; i++) {\n  console.log(`7 x ${i} = ${7 * i}`);\n}",
          "hint": "Loop i from 1 to 12",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "for...of is best for?",
          "options": [
            "Object keys only",
            "Iterating array values",
            "Declaring constants",
            "CSS"
          ],
          "correct": 1,
          "explanation": "for...of walks iterable values."
        }
      ],
      "pitfalls": "Infinite loops forget to update the loop variable or break condition. Always know what stops the loop.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-08",
      "title": "2.1 Arrays",
      "module": "Data Structures",
      "objective": "Store ordered lists; push, map, filter, find.",
      "why": "Order list, todo list, queue of messages — arrays.",
      "explanation": "<p><strong>What you will learn.</strong> Store ordered lists; push, map, filter, find. By the end you should explain <em>Arrays</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Order list, todo list, queue of messages — arrays. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, add/remove, and pass the whole group around.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>const arr = [1,2,3]<br>push, pop, shift, unshift, includes, indexOf<br>map/filter/find return new data (non-mutating style).</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Store ordered lists; push, map, filter, find.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const cart = [\"rice\", \"beans\"];</code> — sets up a name, type, import, or definition you will use next.</li><li><code>cart.push(\"oil\");</code> — changes a collection.</li><li><code>console.log(cart.length);</code> — shows output so you can verify the result.</li><li><code>const prices = [500, 1200, 300];</code> — sets up a name, type, import, or definition you will use next.</li><li><code>const total = prices.reduce((sum, p) =&gt; sum + p, 0);</code> — sets up a name, type, import, or definition you will use next.</li><li><code>console.log(total);</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Arrays</em> solve?</li><li>Which line in the example most directly achieves: “Store ordered lists; push, map, filter, find.”?</li><li>If you change one value in <code>const cart = [\"rice\", \"beans\"];</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const cart = [\"rice\", \"beans\"];\ncart.push(\"oil\");\nconsole.log(cart.length);\nconst prices = [500, 1200, 300];\nconst total = prices.reduce((sum, p) => sum + p, 0);\nconsole.log(total);\nconst expensive = prices.filter(p => p >= 500);\nconsole.log(expensive);",
      "exercises": [
        {
          "title": "Filter stock",
          "instruction": "qty = [0,5,2,0,8]. Log only items with qty > 0 (the numbers).",
          "solution": "const qty = [0, 5, 2, 0, 8];\nconsole.log(qty.filter(q => q > 0));",
          "hint": "filter keeps items where callback is true",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "arr.push(x) does what?",
          "options": [
            "Removes last",
            "Adds to end",
            "Sorts",
            "Clears array"
          ],
          "correct": 1,
          "explanation": "push appends."
        }
      ],
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-09",
      "title": "2.2 Objects",
      "module": "Data Structures",
      "objective": "Model real entities with key-value objects.",
      "why": "A product {name, price, stock} matches how shops think.",
      "explanation": "<p><strong>What you will learn.</strong> Model real entities with key-value objects. By the end you should explain <em>Objects</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> A product {name, price, stock} matches how shops think. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Key–value maps store labeled data (like a form: name → value). They shine when you look things up by a name instead of by position.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>const user = { name: \"Ada\", age: 22 }<br>Access: user.name or user[\"name\"]<br>Nested objects and arrays of objects are common.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Model real entities with key-value objects.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const product = {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>name: \"Peak Milk\",</code> — does a step in the overall recipe.</li><li><code>price: 1800,</code> — does a step in the overall recipe.</li><li><code>inStock: true</code> — does a step in the overall recipe.</li><li><code>};</code> — does a step in the overall recipe.</li><li><code>console.log(product.name);</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Objects</em> solve?</li><li>Which line in the example most directly achieves: “Model real entities with key-value objects.”?</li><li>If you change one value in <code>const product = {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Missing keys return errors/undefined — print keys or use safe get/default patterns.</li><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const product = {\n  name: \"Peak Milk\",\n  price: 1800,\n  inStock: true\n};\nconsole.log(product.name);\nproduct.price = 1900;\nconsole.log(product[\"price\"]);",
      "exercises": [
        {
          "title": "Student record",
          "instruction": "Create student with name, course, score. Log a sentence using all fields.",
          "solution": "const student = { name: \"Yusuf\", course: \"JS\", score: 88 };\nconsole.log(`${student.name} scored ${student.score} in ${student.course}`);",
          "hint": "Use object literal {}",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "How do you read property name?",
          "options": [
            "obj->name",
            "obj.name",
            "obj::name",
            "name(obj)"
          ],
          "correct": 1,
          "explanation": "Dot notation is standard."
        }
      ],
      "pitfalls": "Missing keys return errors/undefined — print keys or use safe get/default patterns.; Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-10",
      "title": "2.3 Functions & Arrow Functions",
      "module": "Functions",
      "objective": "Write reusable functions and arrow functions.",
      "why": "Delivery fee calculated in 10 places? One function, one fix.",
      "explanation": "<p><strong>What you will learn.</strong> Write reusable functions and arrow functions. By the end you should explain <em>Functions &amp; Arrow Functions</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Delivery fee calculated in 10 places? One function, one fix. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. Write it once, reuse it many times, and test it in isolation.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>function add(a,b) { return a+b }<br>const add = (a,b) => a+b<br>Default params: function greet(name=\"friend\")</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Write reusable functions and arrow functions.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>function deliveryFee(km, rate = 150) {</code> — stores or updates a value.</li><li><code>return km * rate;</code> — sends a result back to the caller.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>const greet = (name) =&gt; `Hello, ${name}!`;</code> — sets up a name, type, import, or definition you will use next.</li><li><code>console.log(deliveryFee(8));</code> — shows output so you can verify the result.</li><li><code>console.log(greet(\"Ngozi\"));</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Functions &amp; Arrow Functions</em> solve?</li><li>Which line in the example most directly achieves: “Write reusable functions and arrow functions.”?</li><li>If you change one value in <code>function deliveryFee(km, rate = 150) {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "function deliveryFee(km, rate = 150) {\n  return km * rate;\n}\nconst greet = (name) => `Hello, ${name}!`;\nconsole.log(deliveryFee(8));\nconsole.log(greet(\"Ngozi\"));",
      "exercises": [
        {
          "title": "VAT helper",
          "instruction": "Write addVAT(amount, rate=0.075) returning amount with VAT.",
          "solution": "function addVAT(amount, rate = 0.075) {\n  return amount * (1 + rate);\n}\nconsole.log(addVAT(10000));",
          "hint": "Default param for rate",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Arrow function short form for return?",
          "options": [
            "=> { a+b }",
            "(a,b) => a + b",
            "function =>",
            "-> a+b"
          ],
          "correct": 1,
          "explanation": "Expression body returns implicitly."
        }
      ],
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-11",
      "title": "2.4 Array Methods Deep Dive",
      "module": "Functions",
      "objective": "Use map, filter, reduce, find, some, every.",
      "why": "Transform a list of orders into totals and reports without manual loops.",
      "explanation": "<p><strong>What you will learn.</strong> Use map, filter, reduce, find, some, every. By the end you should explain <em>Array Methods Deep Dive</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Transform a list of orders into totals and reports without manual loops. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. Write it once, reuse it many times, and test it in isolation.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>map → transform each<br>filter → keep some<br>reduce → combine to one value<br>find → first match</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use map, filter, reduce, find, some, every.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const orders = [</code> — sets up a name, type, import, or definition you will use next.</li><li><code>{ id: 1, total: 2000 },</code> — does a step in the overall recipe.</li><li><code>{ id: 2, total: 5000 },</code> — does a step in the overall recipe.</li><li><code>{ id: 3, total: 1500 }</code> — does a step in the overall recipe.</li><li><code>];</code> — does a step in the overall recipe.</li><li><code>const ids = orders.map(o =&gt; o.id);</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Array Methods Deep Dive</em> solve?</li><li>Which line in the example most directly achieves: “Use map, filter, reduce, find, some, every.”?</li><li>If you change one value in <code>const orders = [</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const orders = [\n  { id: 1, total: 2000 },\n  { id: 2, total: 5000 },\n  { id: 3, total: 1500 }\n];\nconst ids = orders.map(o => o.id);\nconst big = orders.filter(o => o.total >= 2000);\nconst sum = orders.reduce((s, o) => s + o.total, 0);\nconsole.log(ids, big, sum);",
      "exercises": [
        {
          "title": "Names list",
          "instruction": "people = [{name:\"A\"},{name:\"B\"}]. map to array of names.",
          "solution": "const people = [{ name: \"A\" }, { name: \"B\" }];\nconsole.log(people.map(p => p.name));",
          "hint": "map returns new array",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "reduce is for?",
          "options": [
            "Removing items only",
            "Combining array into single value",
            "Sorting strings",
            "DOM only"
          ],
          "correct": 1,
          "explanation": "Classic: sum, group, flatten."
        }
      ],
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-12",
      "title": "3.1 DOM Selection",
      "module": "DOM",
      "objective": "Select elements with querySelector and querySelectorAll.",
      "why": "To change a button label or price on the page, you must find the element first.",
      "explanation": "<p><strong>What you will learn.</strong> Select elements with querySelector and querySelectorAll. By the end you should explain <em>DOM Selection</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> To change a button label or price on the page, you must find the element first. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> In the browser, HTML becomes a live tree of elements (the DOM). JavaScript finds nodes and updates them when the user clicks, types, or submits.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>document.querySelector(\"css selector\") → first match<br>querySelectorAll → NodeList<br>getElementById(\"id\")</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Select elements with querySelector and querySelectorAll.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const title = document.querySelector(\"#title\");</code> — sets up a name, type, import, or definition you will use next.</li><li><code>const prices = document.querySelectorAll(\".price\");</code> — sets up a name, type, import, or definition you will use next.</li><li><code>console.log(title, prices.length);</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>DOM Selection</em> solve?</li><li>Which line in the example most directly achieves: “Select elements with querySelector and querySelectorAll.”?</li><li>If you change one value in <code>const title = document.querySelector(\"#title\");</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "// HTML: <h1 id=\"title\">Hello</h1>\n// <p class=\"price\">0</p>\nconst title = document.querySelector(\"#title\");\nconst prices = document.querySelectorAll(\".price\");\nconsole.log(title, prices.length);",
      "exercises": [
        {
          "title": "Select practice",
          "instruction": "Write code that would select #app and all buttons.",
          "solution": "const app = document.querySelector(\"#app\");\nconst buttons = document.querySelectorAll(\"button\");\nconsole.log(app, buttons);",
          "hint": "# for id, tag name for buttons",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "querySelector(\".card\") finds?",
          "options": [
            "id card",
            "first element with class card",
            "all cards only as array always",
            "CSS file"
          ],
          "correct": 1,
          "explanation": "First matching element."
        }
      ],
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-13",
      "title": "3.2 Change the Page (text, HTML, styles)",
      "module": "DOM",
      "objective": "Update textContent, innerHTML, and style/classList.",
      "why": "After payment, change “Pending” to “Paid” and green color.",
      "explanation": "<p><strong>What you will learn.</strong> Update textContent, innerHTML, and style/classList. By the end you should explain <em>Change the Page (text, HTML, styles)</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> After payment, change “Pending” to “Paid” and green color. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> In the browser, HTML becomes a live tree of elements (the DOM). JavaScript finds nodes and updates them when the user clicks, types, or submits.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>el.textContent = \"...\" (safe for text)<br>el.innerHTML = \"...\" (HTML — careful XSS)<br>el.classList.add/remove/toggle<br>el.style.color = \"...\"</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Update textContent, innerHTML, and style/classList.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const status = document.querySelector(\"#status\");</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if (status) {</code> — branches based on a condition.</li><li><code>status.textContent = \"Paid\";</code> — stores or updates a value.</li><li><code>status.classList.add(\"text-green\");</code> — changes a collection.</li><li><code>status.style.fontWeight = \"bold\";</code> — stores or updates a value.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Change the Page (text, HTML, styles)</em> solve?</li><li>Which line in the example most directly achieves: “Update textContent, innerHTML, and style/classList.”?</li><li>If you change one value in <code>const status = document.querySelector(\"#status\");</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const status = document.querySelector(\"#status\");\nif (status) {\n  status.textContent = \"Paid\";\n  status.classList.add(\"text-green\");\n  status.style.fontWeight = \"bold\";\n}",
      "exercises": [
        {
          "title": "Update heading",
          "instruction": "Set an element #hero textContent to \"Welcome to ZeroToCode\".",
          "solution": "const hero = document.querySelector(\"#hero\");\nif (hero) hero.textContent = \"Welcome to ZeroToCode\";",
          "hint": "Check element exists",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Safer for user-provided text?",
          "options": [
            "innerHTML",
            "textContent",
            "document.write",
            "eval"
          ],
          "correct": 1,
          "explanation": "textContent does not parse HTML."
        }
      ],
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-14",
      "title": "3.3 Events: click, input, submit",
      "module": "DOM",
      "objective": "Respond to user actions with addEventListener.",
      "why": "Click “Add to cart”, type in search, submit a form — all events.",
      "explanation": "<p><strong>What you will learn.</strong> Respond to user actions with addEventListener. By the end you should explain <em>Events: click, input, submit</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Click “Add to cart”, type in search, submit a form — all events. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> In the browser, HTML becomes a live tree of elements (the DOM). JavaScript finds nodes and updates them when the user clicks, types, or submits.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>el.addEventListener(\"click\", handler)<br>event.preventDefault() on forms<br>event.target</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Respond to user actions with addEventListener.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>13</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const btn = document.querySelector(\"#buy\");</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if (btn) {</code> — branches based on a condition.</li><li><code>btn.addEventListener(\"click\", () =&gt; {</code> — stores or updates a value.</li><li><code>console.log(\"Added to cart\");</code> — shows output so you can verify the result.</li><li><code>});</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Events: click, input, submit</em> solve?</li><li>Which line in the example most directly achieves: “Respond to user actions with addEventListener.”?</li><li>If you change one value in <code>const btn = document.querySelector(\"#buy\");</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const btn = document.querySelector(\"#buy\");\nif (btn) {\n  btn.addEventListener(\"click\", () => {\n    console.log(\"Added to cart\");\n  });\n}\n\nconst form = document.querySelector(\"#checkout\");\nif (form) {\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    console.log(\"Form submitted\");\n  });\n}",
      "exercises": [
        {
          "title": "Click counter idea",
          "instruction": "Write a click handler that increments let count and logs it.",
          "solution": "let count = 0;\nfunction onClick() {\n  count++;\n  console.log(count);\n}\n// button.addEventListener(\"click\", onClick);",
          "hint": "Closure keeps count",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "preventDefault is used to?",
          "options": [
            "Delete DOM",
            "Stop default browser action (e.g. form reload)",
            "Install packages",
            "Pause JS forever"
          ],
          "correct": 1,
          "explanation": "Common on submit/link click."
        }
      ],
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-15",
      "title": "3.4 Forms & Validation",
      "module": "DOM",
      "objective": "Read inputs and validate before accepting data.",
      "why": "Wrong phone number or empty email wastes business time — validate early.",
      "explanation": "<p><strong>What you will learn.</strong> Read inputs and validate before accepting data. By the end you should explain <em>Forms &amp; Validation</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Wrong phone number or empty email wastes business time — validate early. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> In the browser, HTML becomes a live tree of elements (the DOM). JavaScript finds nodes and updates them when the user clicks, types, or submits.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>input.value<br>Check length, includes(\"@\"), simple regex<br>Show error messages in the DOM</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Read inputs and validate before accepting data.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>function isValidEmail(email) {</code> — does a step in the overall recipe.</li><li><code>return email.includes(\"@\") &amp;&amp; email.includes(\".\");</code> — sends a result back to the caller.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>const email = \"ada@shop.com\";</code> — sets up a name, type, import, or definition you will use next.</li><li><code>console.log(isValidEmail(email));</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Forms &amp; Validation</em> solve?</li><li>Which line in the example most directly achieves: “Read inputs and validate before accepting data.”?</li><li>If you change one value in <code>function isValidEmail(email) {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "function isValidEmail(email) {\n  return email.includes(\"@\") && email.includes(\".\");\n}\nconst email = \"ada@shop.com\";\nconsole.log(isValidEmail(email));\n// if (!isValidEmail(value)) show error else continue",
      "exercises": [
        {
          "title": "Phone check",
          "instruction": "Write isNaijaPhone(s) true if string starts with 0 and length 11.",
          "solution": "function isNaijaPhone(s) {\n  return typeof s === \"string\" && s.startsWith(\"0\") && s.length === 11;\n}\nconsole.log(isNaijaPhone(\"08031234567\"));",
          "hint": "startsWith + length",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "input.value returns?",
          "options": [
            "Number always",
            "String",
            "Boolean",
            "File only"
          ],
          "correct": 1,
          "explanation": "Values from inputs are strings."
        }
      ],
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-16",
      "title": "4.1 localStorage",
      "module": "Browser APIs",
      "objective": "Persist small data in the browser with localStorage.",
      "why": "Remember cart or theme after refresh — no backend required.",
      "explanation": "<p><strong>What you will learn.</strong> Persist small data in the browser with localStorage. By the end you should explain <em>localStorage</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Remember cart or theme after refresh — no backend required. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Browser APIs module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>localStorage.setItem(key, string)<br>getItem, removeItem<br>JSON.stringify / parse for objects</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Persist small data in the browser with localStorage.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const cart = [{ name: \"Rice\", qty: 2 }];</code> — sets up a name, type, import, or definition you will use next.</li><li><code>localStorage.setItem(\"cart\", JSON.stringify(cart));</code> — does a step in the overall recipe.</li><li><code>const loaded = JSON.parse(localStorage.getItem(\"cart\") || \"[]\");</code> — sets up a name, type, import, or definition you will use next.</li><li><code>console.log(loaded);</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>localStorage</em> solve?</li><li>Which line in the example most directly achieves: “Persist small data in the browser with localStorage.”?</li><li>If you change one value in <code>const cart = [{ name: \"Rice\", qty: 2 }];</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const cart = [{ name: \"Rice\", qty: 2 }];\nlocalStorage.setItem(\"cart\", JSON.stringify(cart));\nconst loaded = JSON.parse(localStorage.getItem(\"cart\") || \"[]\");\nconsole.log(loaded);",
      "exercises": [
        {
          "title": "Save theme",
          "instruction": "Save theme \"dark\" and read it back.",
          "solution": "localStorage.setItem(\"theme\", \"dark\");\nconsole.log(localStorage.getItem(\"theme\"));",
          "hint": "setItem / getItem",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "localStorage stores?",
          "options": [
            "Only numbers",
            "Strings (serialize objects with JSON)",
            "SQL tables",
            "Files only"
          ],
          "correct": 1,
          "explanation": "Always strings."
        }
      ],
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-17",
      "title": "4.2 JSON",
      "module": "Browser APIs",
      "objective": "Convert objects to JSON and back.",
      "why": "APIs and localStorage exchange JSON text.",
      "explanation": "<p><strong>What you will learn.</strong> Convert objects to JSON and back. By the end you should explain <em>JSON</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> APIs and localStorage exchange JSON text. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Key–value maps store labeled data (like a form: name → value). They shine when you look things up by a name instead of by position.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>JSON.stringify(obj)<br>JSON.parse(text)</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Convert objects to JSON and back.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const user = { name: \"Kemi\", city: \"Ibadan\" };</code> — sets up a name, type, import, or definition you will use next.</li><li><code>const text = JSON.stringify(user);</code> — sets up a name, type, import, or definition you will use next.</li><li><code>console.log(text);</code> — shows output so you can verify the result.</li><li><code>console.log(JSON.parse(text).city);</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>JSON</em> solve?</li><li>Which line in the example most directly achieves: “Convert objects to JSON and back.”?</li><li>If you change one value in <code>const user = { name: \"Kemi\", city: \"Ibadan\" };</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Missing keys return errors/undefined — print keys or use safe get/default patterns.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const user = { name: \"Kemi\", city: \"Ibadan\" };\nconst text = JSON.stringify(user);\nconsole.log(text);\nconsole.log(JSON.parse(text).city);",
      "exercises": [
        {
          "title": "Round-trip",
          "instruction": "Stringify {ok:true} then parse and log ok.",
          "solution": "const t = JSON.stringify({ ok: true });\nconsole.log(JSON.parse(t).ok);",
          "hint": "stringify then parse",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "JSON.parse does?",
          "options": [
            "Object → text",
            "Text → object",
            "Sort arrays",
            "Fetch URLs"
          ],
          "correct": 1,
          "explanation": "Parses JSON string."
        }
      ],
      "pitfalls": "Missing keys return errors/undefined — print keys or use safe get/default patterns.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-18",
      "title": "4.3 fetch & APIs",
      "module": "Async",
      "objective": "Load data from a URL with fetch and async/await.",
      "why": "Weather, payments, product lists — modern apps talk to APIs.",
      "explanation": "<p><strong>What you will learn.</strong> Load data from a URL with fetch and async/await. By the end you should explain <em>fetch &amp; APIs</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Weather, payments, product lists — modern apps talk to APIs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Modern apps talk to servers. You request data, wait for a reply, then update the UI — carefully handling loading and errors.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>const res = await fetch(url)<br>const data = await res.json()<br>Handle errors with try/catch</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Load data from a URL with fetch and async/await.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>async function loadTodos() {</code> — does a step in the overall recipe.</li><li><code>try {</code> — does a step in the overall recipe.</li><li><code>const res = await fetch(\"https://jsonplaceholder.typicode.com/todos/1…</code> — sets up a name, type, import, or definition you will use next.</li><li><code>const data = await res.json();</code> — sets up a name, type, import, or definition you will use next.</li><li><code>console.log(data.title);</code> — shows output so you can verify the result.</li><li><code>} catch (err) {</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>fetch &amp; APIs</em> solve?</li><li>Which line in the example most directly achieves: “Load data from a URL with fetch and async/await.”?</li><li>If you change one value in <code>async function loadTodos() {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Forgetting await (or not handling errors) makes code look like it “did nothing.” Always handle failure.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "async function loadTodos() {\n  try {\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/todos/1\");\n    const data = await res.json();\n    console.log(data.title);\n  } catch (err) {\n    console.error(\"Network error\", err);\n  }\n}\n// loadTodos();",
      "exercises": [
        {
          "title": "Async function shape",
          "instruction": "Write async function getJson(url) that fetch+json and returns data.",
          "solution": "async function getJson(url) {\n  const res = await fetch(url);\n  return res.json();\n}",
          "hint": "await fetch then .json()",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "await can be used in?",
          "options": [
            "Any function",
            "async functions only",
            "CSS",
            "HTML attributes"
          ],
          "correct": 1,
          "explanation": "Mark function async."
        }
      ],
      "pitfalls": "Forgetting await (or not handling errors) makes code look like it “did nothing.” Always handle failure.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-19",
      "title": "4.4 Promises & Error Handling",
      "module": "Async",
      "objective": "Understand Promise states and .then/.catch vs async/await.",
      "why": "Payments and uploads finish later — Promises model “eventual” results.",
      "explanation": "<p><strong>What you will learn.</strong> Understand Promise states and .then/.catch vs async/await. By the end you should explain <em>Promises &amp; Error Handling</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Payments and uploads finish later — Promises model “eventual” results. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Modern apps talk to servers. You request data, wait for a reply, then update the UI — carefully handling loading and errors.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>new Promise((resolve, reject) => ...)<br>then/catch/finally<br>Prefer async/await for readability</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Understand Promise states and .then/.catch vs async/await.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>function wait(ms) {</code> — does a step in the overall recipe.</li><li><code>return new Promise(resolve =&gt; setTimeout(resolve, ms));</code> — stores or updates a value.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>async function demo() {</code> — does a step in the overall recipe.</li><li><code>console.log(\"start\");</code> — shows output so you can verify the result.</li><li><code>await wait(100);</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Promises &amp; Error Handling</em> solve?</li><li>Which line in the example most directly achieves: “Understand Promise states and .then/.catch vs async/await.”?</li><li>If you change one value in <code>function wait(ms) {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Forgetting await (or not handling errors) makes code look like it “did nothing.” Always handle failure.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "function wait(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\nasync function demo() {\n  console.log(\"start\");\n  await wait(100);\n  console.log(\"done\");\n}\n// demo();",
      "exercises": [
        {
          "title": "Make a Promise",
          "instruction": "Return a Promise that resolves to \"ok\".",
          "solution": "function ok() {\n  return Promise.resolve(\"ok\");\n}\nok().then(console.log);",
          "hint": "Promise.resolve",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Rejected Promise should be handled with?",
          "options": [
            "only console.log",
            "catch / try-catch",
            "localStorage",
            "CSS"
          ],
          "correct": 1,
          "explanation": "Always handle failures."
        }
      ],
      "pitfalls": "Forgetting await (or not handling errors) makes code look like it “did nothing.” Always handle failure.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-20",
      "title": "4.5 Modules (import/export)",
      "module": "Tooling",
      "objective": "Split code into modules with export/import.",
      "why": "Large apps stay maintainable when cart logic is not all in one file.",
      "explanation": "<p><strong>What you will learn.</strong> Split code into modules with export/import. By the end you should explain <em>Modules (import/export)</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Large apps stay maintainable when cart logic is not all in one file. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Libraries and modules save you from reinventing the wheel. You import proven tools, then focus on your business logic.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>export function add(){}<br>export default ...<br>import { add } from \"./math.js\"<br>type=\"module\" on script tag</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Split code into modules with export/import.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>1</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>console.log(\"Use type=module and export/import in real projects\");</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Modules (import/export)</em> solve?</li><li>Which line in the example most directly achieves: “Split code into modules with export/import.”?</li><li>If you change one value in <code>console.log(\"Use type=module and export/import in real p</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "// math.js\n// export function add(a, b) { return a + b; }\n\n// main.js\n// import { add } from \"./math.js\";\n// console.log(add(2, 3));\n\nconsole.log(\"Use type=module and export/import in real projects\");",
      "exercises": [
        {
          "title": "Design modules",
          "instruction": "List 3 module files you would create for a shop site.",
          "solution": "console.log(\"cart.js, products.js, ui.js\");",
          "hint": "Separation of concerns",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "ES modules need which script attribute often?",
          "options": [
            "defer only",
            "type=\"module\"",
            "async css",
            "nomodule always required"
          ],
          "correct": 1,
          "explanation": "type=module enables import."
        }
      ],
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-21",
      "title": "5.1 Mini Project: Tip Calculator",
      "module": "Projects",
      "objective": "Build a tip calculator using variables, functions, and DOM ideas.",
      "why": "Restaurants and delivery apps compute tips and totals constantly.",
      "explanation": "<p><strong>What you will learn.</strong> Build a tip calculator using variables, functions, and DOM ideas. By the end you should explain <em>Mini Project: Tip Calculator</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Restaurants and delivery apps compute tips and totals constantly. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Inputs: bill, tip percent. Output: tip amount + grand total. Use functions and clear UI updates.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Build a tip calculator using variables, functions, and DOM ideas.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>function calcTip(bill, tipPercent) {</code> — does a step in the overall recipe.</li><li><code>const tip = bill * (tipPercent / 100);</code> — sets up a name, type, import, or definition you will use next.</li><li><code>return { tip, total: bill + tip };</code> — sends a result back to the caller.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>console.log(calcTip(10000, 10)); // tip 1000, total 11000</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Mini Project: Tip Calculator</em> solve?</li><li>Which line in the example most directly achieves: “Build a tip calculator using variables, functions, and DOM ideas.”?</li><li>If you change one value in <code>function calcTip(bill, tipPercent) {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "function calcTip(bill, tipPercent) {\n  const tip = bill * (tipPercent / 100);\n  return { tip, total: bill + tip };\n}\nconsole.log(calcTip(10000, 10)); // tip 1000, total 11000",
      "exercises": [
        {
          "title": "Complete calculator",
          "instruction": "Write calcTip and log results for bill=8500 tip=15%.",
          "solution": "function calcTip(bill, tipPercent) {\n  const tip = bill * (tipPercent / 100);\n  return { tip, total: bill + tip };\n}\nconsole.log(calcTip(8500, 15));",
          "hint": "Percent / 100",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Why extract calcTip as a function?",
          "options": [
            "Slower code",
            "Reusable and testable logic",
            "Required by HTML",
            "Blocks DOM"
          ],
          "correct": 1,
          "explanation": "Separation of UI and logic."
        }
      ],
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": true,
      "difficulty": "beginner"
    },
    {
      "id": "js-22",
      "title": "5.2 Mini Project: Todo List Logic",
      "module": "Projects",
      "objective": "Model a todo list with array of objects and pure functions.",
      "why": "Task apps teach CRUD: create, read, update, delete in memory.",
      "explanation": "<p><strong>What you will learn.</strong> Model a todo list with array of objects and pure functions. By the end you should explain <em>Mini Project: Todo List Logic</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Task apps teach CRUD: create, read, update, delete in memory. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>todos = [{id, text, done}]<br>addTodo, toggleTodo, removeTodo</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Model a todo list with array of objects and pure functions.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>let todos = [];</code> — sets up a name, type, import, or definition you will use next.</li><li><code>function addTodo(text) {</code> — does a step in the overall recipe.</li><li><code>todos.push({ id: Date.now(), text, done: false });</code> — changes a collection.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>function toggleTodo(id) {</code> — does a step in the overall recipe.</li><li><code>const t = todos.find(x =&gt; x.id === id);</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Mini Project: Todo List Logic</em> solve?</li><li>Which line in the example most directly achieves: “Model a todo list with array of objects and pure functions.”?</li><li>If you change one value in <code>let todos = [];</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "let todos = [];\nfunction addTodo(text) {\n  todos.push({ id: Date.now(), text, done: false });\n}\nfunction toggleTodo(id) {\n  const t = todos.find(x => x.id === id);\n  if (t) t.done = !t.done;\n}\naddTodo(\"Learn JS\");\ntoggleTodo(todos[0].id);\nconsole.log(todos);",
      "exercises": [
        {
          "title": "Remove todo",
          "instruction": "Write removeTodo(id) filtering todos.",
          "solution": "function removeTodo(id) {\n  todos = todos.filter(t => t.id !== id);\n}",
          "hint": "filter keeps others",
          "level": "medium"
        }
      ],
      "quiz": [],
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": true,
      "difficulty": "beginner"
    },
    {
      "id": "js-23",
      "title": "5.3 Mini Project: Shop Cart",
      "module": "Projects",
      "objective": "Implement cart add/remove/total with objects.",
      "why": "E-commerce core: line items and totals.",
      "explanation": "<p><strong>What you will learn.</strong> Implement cart add/remove/total with objects. By the end you should explain <em>Mini Project: Shop Cart</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> E-commerce core: line items and totals. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>cart lines: {id, name, price, qty}<br>subtotal = sum price*qty</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Implement cart add/remove/total with objects.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>12</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const cart = [];</code> — sets up a name, type, import, or definition you will use next.</li><li><code>function addItem(item) {</code> — does a step in the overall recipe.</li><li><code>const existing = cart.find(x =&gt; x.id === item.id);</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if (existing) existing.qty += item.qty || 1;</code> — stores or updates a value.</li><li><code>else cart.push({ ...item, qty: item.qty || 1 });</code> — branches based on a condition.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Mini Project: Shop Cart</em> solve?</li><li>Which line in the example most directly achieves: “Implement cart add/remove/total with objects.”?</li><li>If you change one value in <code>const cart = [];</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const cart = [];\nfunction addItem(item) {\n  const existing = cart.find(x => x.id === item.id);\n  if (existing) existing.qty += item.qty || 1;\n  else cart.push({ ...item, qty: item.qty || 1 });\n}\nfunction cartTotal() {\n  return cart.reduce((s, i) => s + i.price * i.qty, 0);\n}\naddItem({ id: 1, name: \"Bread\", price: 800 });\naddItem({ id: 1, name: \"Bread\", price: 800 });\nconsole.log(cart, cartTotal());",
      "exercises": [
        {
          "title": "Clear cart",
          "instruction": "Write clearCart() that empties the cart array.",
          "solution": "function clearCart() {\n  cart.length = 0;\n}",
          "hint": "length = 0 or cart = [] if let",
          "level": "easy"
        }
      ],
      "quiz": [],
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": true,
      "difficulty": "beginner"
    },
    {
      "id": "js-24",
      "title": "6.1 Common Mistakes & Debugging",
      "module": "Polish",
      "objective": "Debug with console and avoid classic JS pitfalls.",
      "why": "Pros spend lots of time debugging — learn the tools early.",
      "explanation": "<p><strong>What you will learn.</strong> Debug with console and avoid classic JS pitfalls. By the end you should explain <em>Common Mistakes &amp; Debugging</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Pros spend lots of time debugging — learn the tools early. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Polish module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>console.log / table / error<br>Breakpoints in DevTools<br>Pitfalls: == coercion, const reassign, async without await, null DOM nodes</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Debug with console and avoid classic JS pitfalls.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>const el = document.querySelector(\"#missing\");</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if (!el) {</code> — branches based on a condition.</li><li><code>console.warn(\"Element not found — check selector/HTML\");</code> — does a step in the overall recipe.</li><li><code>} else {</code> — branches based on a condition.</li><li><code>el.textContent = \"OK\";</code> — stores or updates a value.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Common Mistakes &amp; Debugging</em> solve?</li><li>Which line in the example most directly achieves: “Debug with console and avoid classic JS pitfalls.”?</li><li>If you change one value in <code>const el = document.querySelector(\"#missing\");</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "const el = document.querySelector(\"#missing\");\nif (!el) {\n  console.warn(\"Element not found — check selector/HTML\");\n} else {\n  el.textContent = \"OK\";\n}\n\ntry {\n  JSON.parse(\"{bad\");\n} catch (e) {\n  console.error(\"Invalid JSON\", e.message);\n}",
      "exercises": [
        {
          "title": "Safe query",
          "instruction": "Write function setText(sel, text) that no-ops if missing.",
          "solution": "function setText(sel, text) {\n  const el = document.querySelector(sel);\n  if (el) el.textContent = text;\n}",
          "hint": "Always null-check",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Best first debug tool?",
          "options": [
            "Delete all code",
            "console.log / DevTools",
            "Reinstall OS",
            "Random rewrite"
          ],
          "correct": 1,
          "explanation": "Inspect values and stack traces."
        }
      ],
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "js-25",
      "title": "6.2 Capstone: Interactive Landing Page JS",
      "module": "Projects",
      "objective": "Combine DOM, events, and validation on a small page script.",
      "why": "Portfolio piece: mobile nav toggle + contact form validation.",
      "explanation": "<p><strong>What you will learn.</strong> Combine DOM, events, and validation on a small page script. By the end you should explain <em>Capstone: Interactive Landing Page JS</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Portfolio piece: mobile nav toggle + contact form validation. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Features: menu open/close, form validate name/email, success message, optional localStorage draft.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Combine DOM, events, and validation on a small page script.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>21</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>function initNav() {</code> — does a step in the overall recipe.</li><li><code>const btn = document.querySelector(\"#menuBtn\");</code> — sets up a name, type, import, or definition you will use next.</li><li><code>const nav = document.querySelector(\"#nav\");</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if (!btn || !nav) return;</code> — branches based on a condition.</li><li><code>btn.addEventListener(\"click\", () =&gt; nav.classList.toggle(\"open\"));</code> — stores or updates a value.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>JS runner</strong>. Also try the same snippet in the browser console (F12) to build speed. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Capstone: Interactive Landing Page JS</em> solve?</li><li>Which line in the example most directly achieves: “Combine DOM, events, and validation on a small page script.”?</li><li>If you change one value in <code>function initNav() {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "// Pseudo structure for your page script\nfunction initNav() {\n  const btn = document.querySelector(\"#menuBtn\");\n  const nav = document.querySelector(\"#nav\");\n  if (!btn || !nav) return;\n  btn.addEventListener(\"click\", () => nav.classList.toggle(\"open\"));\n}\nfunction initForm() {\n  const form = document.querySelector(\"#contact\");\n  if (!form) return;\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const email = form.email.value.trim();\n    if (!email.includes(\"@\")) {\n      alert(\"Enter a valid email\");\n      return;\n    }\n    alert(\"Thanks! We will contact you.\");\n  });\n}\ninitNav();\ninitForm();",
      "exercises": [
        {
          "title": "Checklist",
          "instruction": "Log a checklist of 5 features your capstone page will include.",
          "solution": "[\"Mobile nav toggle\",\"Form validation\",\"Success message\",\"localStorage draft\",\"Accessible labels\"].forEach(x => console.log(\"-\", x));",
          "hint": "Plan before coding",
          "level": "easy"
        }
      ],
      "quiz": [],
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": true,
      "difficulty": "intermediate"
    }
  ],
  "totalLessons": 25
};
