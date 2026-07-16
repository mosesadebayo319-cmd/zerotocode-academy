// ZeroToCode Academy — Python curriculum (144 lessons)
// Topic-specific explanations for deeper beginner comprehension
window.PYTHON_COURSE = {
  "id": "python",
  "name": "Python",
  "icon": "🐍",
  "color": "emerald",
  "subtitle": "Paths: Beginner → Data → Backend → DSA • Real-life projects • Run code in browser",
  "totalLessons": 144,
  "lessons": [
    {
      "id": "py-01",
      "title": "1.1 Python Intro — Why Python Wins",
      "module": "Getting Started",
      "objective": "Understand what Python is and where it is used in real life.",
      "why": "Banks, hospitals, online shops, and AI tools all run Python behind the scenes. Learning it opens doors to automation, data, and web apps.",
      "explanation": "<p><strong>What you will learn.</strong> Understand what Python is and where it is used in real life. By the end you should explain <em>Why Python Wins</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Banks, hospitals, online shops, and AI tools all run Python behind the scenes. Learning it opens doors to automation, data, and web apps. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Every program is a set of clear instructions a computer can follow. Your job is to write those instructions so they match the real-world job you care about.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Python is a <strong>high-level, readable programming language</strong>. You write instructions in plain English-like syntax; the computer runs them.</p><p><strong>Real uses:</strong> automate WhatsApp business reports, analyse sales data, build websites (Django), train AI models, control robots.</p><p>It is free, has huge community support, and is the #1 first language for beginners.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Understand what Python is and where it is used in real life.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"Welcome to ZeroToCode Academy\")</code> — shows output so you can verify the result.</li><li><code>print(\"Python powers Netflix recommendations, Instagram, and local ba…</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Why Python Wins</em> solve?</li><li>Which line in the example most directly achieves: “Understand what Python is and where it is used in real life.”?</li><li>If you change one value in <code>print(\"Welcome to ZeroToCode Academy\")</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# Python is readable — almost like English\nprint(\"Welcome to ZeroToCode Academy\")\nprint(\"Python powers Netflix recommendations, Instagram, and local bank apps\")",
      "exercises": [
        {
          "title": "Where will YOU use Python?",
          "instruction": "Write 3 print() lines: (1) your name, (2) one problem you want to solve with code, (3) one career or business goal.",
          "solution": "print(\"My name is Adaora\")\nprint(\"I want to automate my shop's daily sales summary\")\nprint(\"I want to become a data analyst or freelancing developer\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Write 3 print() lines: (1) your name, (2) one problem you want to solve with code, (3) one career or business goal. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Which statement about Python is TRUE?",
          "options": [
            "It only runs on Windows",
            "It is free and beginner-friendly",
            "It cannot work with data",
            "You must pay for a license"
          ],
          "correct": 1,
          "explanation": "Python is free, open source, and designed to be readable for beginners."
        },
        {
          "q": "When would you use “Why Python Wins” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Understand what Python is and where it is used in real life.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Understand what Python is and where it is used in real life."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-02",
      "title": "1.2 Get Started — Install & First Run",
      "module": "Getting Started",
      "objective": "Set up Python and run your first script on your computer.",
      "why": "Like installing a POS machine before selling, you need Python installed before you can build programs.",
      "explanation": "<p><strong>What you will learn.</strong> Set up Python and run your first script on your computer. By the end you should explain <em>Install &amp; First Run</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Like installing a POS machine before selling, you need Python installed before you can build programs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, add/remove, and pass the whole group around.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>On most systems: download from <code>python.org</code> or use your package manager.</p><p>Check installation in a terminal:<br>\n  <code>python3 --version</code></p><p>Run a file: save as <code>hello.py</code>, then <code>python3 hello.py</code>.</p><p><strong>Online option:</strong> Use replit.com or Google Colab if you cannot install yet.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Set up Python and run your first script on your computer.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"Setup complete!\")</code> — shows output so you can verify the result.</li><li><code>print(\"Python version check: open terminal and run python3 --version\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Install &amp; First Run</em> solve?</li><li>Which line in the example most directly achieves: “Set up Python and run your first script on your computer.”?</li><li>If you change one value in <code>print(\"Setup complete!\")</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# hello.py\nprint(\"Setup complete!\")\nprint(\"Python version check: open terminal and run python3 --version\")\n\n# Interactive mode (REPL): type python3 and try:\n# >>> 2 + 2\n# 4",
      "exercises": [
        {
          "title": "Verify your environment",
          "instruction": "Write a script that prints \"Python is ready!\" and the result of 15 * 3. Save mentally as first_run.py.",
          "solution": "print(\"Python is ready!\")\nprint(15 * 3)  # 45",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Write a script that prints \"Python is ready!\" and the result of 15 * 3. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "How do you run a Python file named shop.py?",
          "options": [
            "open shop.py",
            "python3 shop.py",
            "run shop",
            "execute shop.py as admin only"
          ],
          "correct": 1,
          "explanation": "In the terminal: python3 shop.py (or python shop.py on some systems)."
        },
        {
          "q": "When would you use “Install & First Run” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Set up Python and run your first script on your computer.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Set up Python and run your first script on your computer."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-03",
      "title": "1.3 Python Syntax — The Rules of the Road",
      "module": "Getting Started",
      "objective": "Write valid Python code using indentation, colons, and clear structure.",
      "why": "Traffic rules keep roads safe. Syntax rules keep programs working. Break them and you get errors.",
      "explanation": "<p><strong>What you will learn.</strong> Write valid Python code using indentation, colons, and clear structure. By the end you should explain <em>The Rules of the Road</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Traffic rules keep roads safe. Syntax rules keep programs working. Break them and you get errors. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Syntax is the grammar of a language. The computer is strict: one missing quote or wrong indent and it refuses the whole program. Comments are notes for humans; print/log statements are how you see results.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><strong>Key rules:</strong><br>\n  • Indentation (usually 4 spaces) groups code blocks<br>\n  • Colons <code>:</code> start blocks (if, for, def)<br>\n  • Case-sensitive: <code>Name</code> ≠ <code>name</code><br>\n  • One statement per line (or use <code>;</code> sparingly)<br>\n  • Parentheses for function calls: <code>print()</code><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Write valid Python code using indentation, colons, and clear structure.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>age = 20</code> — stores or updates a value.</li><li><code>if age &gt;= 18:</code> — branches based on a condition.</li><li><code>print(\"Adult\")      # indented — inside the if</code> — shows output so you can verify the result.</li><li><code>print(\"Can vote\")</code> — shows output so you can verify the result.</li><li><code>else:</code> — branches based on a condition.</li><li><code>print(\"Minor\")      # indented — inside the else</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>The Rules of the Road</em> solve?</li><li>Which line in the example most directly achieves: “Write valid Python code using indentation, colons, and clear structure.”?</li><li>If you change one value in <code>age = 20</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "age = 20\n\nif age >= 18:\n    print(\"Adult\")      # indented — inside the if\n    print(\"Can vote\")\nelse:\n    print(\"Minor\")      # indented — inside the else\n\nprint(\"Done\")           # not indented — always runs",
      "exercises": [
        {
          "title": "Fix the structure",
          "instruction": "Write an if/else that prints \"Open shop\" if hour is between 8 and 20, else \"Closed\". Use proper indentation.",
          "solution": "hour = 14\nif hour >= 8 and hour <= 20:\n    print(\"Open shop\")\nelse:\n    print(\"Closed\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Write an if/else that prints \"Open shop\" if hour is between 8 and 20, else \"Closed\". Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What does indentation do in Python?",
          "options": [
            "It is only for decoration",
            "It defines which code belongs to a block",
            "It speeds up the program",
            "It is optional always"
          ],
          "correct": 1,
          "explanation": "Indentation defines code blocks (if, loops, functions)."
        },
        {
          "q": "When would you use “The Rules of the Road” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Write valid Python code using indentation, colons, and clear structure.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Write valid Python code using indentation, colons, and clear structure."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-04",
      "title": "1.4 Output — Talking to the User with print()",
      "module": "Getting Started",
      "objective": "Display text, numbers, and multiple values using print().",
      "why": "A shop receipt, SMS alert, or dashboard all show output. print() is your first way to communicate results.",
      "explanation": "<p><strong>What you will learn.</strong> Display text, numbers, and multiple values using print(). By the end you should explain <em>Talking to the User with print()</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> A shop receipt, SMS alert, or dashboard all show output. print() is your first way to communicate results. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Types describe what kind of value you have (text, number, true/false, nothing). Operations only make sense when the type matches — you cannot average a list of names the same way you average prices.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>print() can show strings, numbers, variables, and multiple items separated by commas.<br>\n  Use <code>sep</code> and <code>end</code> to control separators and newlines.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Display text, numbers, and multiple values using print().” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>shop = \"Mama Nkechi Provisions\"</code> — stores or updates a value.</li><li><code>sales = 125000</code> — stores or updates a value.</li><li><code>print(\"Shop:\", shop)</code> — shows output so you can verify the result.</li><li><code>print(\"Today's sales:\", sales, \"naira\")</code> — shows output so you can verify the result.</li><li><code>print(\"A\", \"B\", \"C\", sep=\"-\")       # A-B-C</code> — shows output so you can verify the result.</li><li><code>print(\"Loading\", end=\"...\")         # no newline</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Talking to the User with print()</em> solve?</li><li>Which line in the example most directly achieves: “Display text, numbers, and multiple values using print().”?</li><li>If you change one value in <code>shop = \"Mama Nkechi Provisions\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "shop = \"Mama Nkechi Provisions\"\nsales = 125000\nprint(\"Shop:\", shop)\nprint(\"Today's sales:\", sales, \"naira\")\nprint(\"A\", \"B\", \"C\", sep=\"-\")       # A-B-C\nprint(\"Loading\", end=\"...\")         # no newline\nprint(\" done\")",
      "exercises": [
        {
          "title": "Daily sales line",
          "instruction": "Print a one-line summary: business name, number of customers, and total sales (use variables).",
          "solution": "business = \"City Buka\"\ncustomers = 48\ntotal = 87500\nprint(business, \"| customers:\", customers, \"| sales: ₦\", total)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Print a one-line summary: business name, number of customers, and total sales (use variables). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What does print(\"Hi\", end=\"\") do?",
          "options": [
            "Crashes",
            "Prints Hi without moving to a new line",
            "Prints Hi twice",
            "Deletes Hi"
          ],
          "correct": 1,
          "explanation": "end=\"\" replaces the default newline so the next print continues on the same line."
        },
        {
          "q": "When would you use “Talking to the User with print()” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Display text, numbers, and multiple values using print().",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Display text, numbers, and multiple values using print()."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-05",
      "title": "1.5 Comments — Notes for Future You",
      "module": "Getting Started",
      "objective": "Write clear comments and docstrings so code stays understandable.",
      "why": "When you reopen code after 3 months (or hand it to a teammate), comments save hours of confusion.",
      "explanation": "<p><strong>What you will learn.</strong> Write clear comments and docstrings so code stays understandable. By the end you should explain <em>Notes for Future You</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> When you reopen code after 3 months (or hand it to a teammate), comments save hours of confusion. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Syntax is the grammar of a language. The computer is strict: one missing quote or wrong indent and it refuses the whole program. Comments are notes for humans; print/log statements are how you see results.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Use <code>#</code> for single-line comments.<br>\n  Use triple quotes <code>\"\"\" ... \"\"\"</code> for multi-line notes or function docs.<br>\n  Comment the <em>why</em>, not the obvious <em>what</em>.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Write clear comments and docstrings so code stays understandable.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>base_fee = 500</code> — stores or updates a value.</li><li><code>extra_per_km = 100</code> — stores or updates a value.</li><li><code>\"\"\"</code> — does a step in the overall recipe.</li><li><code>Business rule:</code> — does a step in the overall recipe.</li><li><code>Free delivery if order total &gt; 15000</code> — branches based on a condition.</li><li><code>\"\"\"</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Notes for Future You</em> solve?</li><li>Which line in the example most directly achieves: “Write clear comments and docstrings so code stays understandable.”?</li><li>If you change one value in <code>base_fee = 500</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# Calculate delivery fee for orders outside Lagos\nbase_fee = 500\n# Extra charge per km beyond 5km\nextra_per_km = 100\n\n\"\"\"\nBusiness rule:\nFree delivery if order total > 15000\n\"\"\"\norder_total = 18000\nif order_total > 15000:\n    delivery = 0  # promo: free delivery\nelse:\n    delivery = base_fee",
      "exercises": [
        {
          "title": "Document a price rule",
          "instruction": "Write a short script with comments explaining a 5% VAT calculation on a product price.",
          "solution": "# Product price before tax\nprice = 10000\n# VAT rate in many businesses is 7.5% or 5% for practice\nvat_rate = 0.05  # 5%\nvat = price * vat_rate\ntotal = price + vat\nprint(\"Total with VAT:\", total)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Write a short script with comments explaining a 5% VAT calculation on a product price. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Which is a valid Python comment?",
          "options": [
            "// note",
            "/* note */",
            "# note",
            "-- note"
          ],
          "correct": 2,
          "explanation": "Python uses # for single-line comments."
        },
        {
          "q": "When would you use “Notes for Future You” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Write clear comments and docstrings so code stays understandable.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Write clear comments and docstrings so code stays understandable."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-06",
      "title": "2.1 Variables — Labeled Boxes for Data",
      "module": "Variables & Types",
      "objective": "Create, update, and name variables clearly.",
      "why": "A POS system stores item names, prices, and stock. Variables are labeled boxes holding those values.",
      "explanation": "<p><strong>What you will learn.</strong> Create, update, and name variables clearly. By the end you should explain <em>Labeled Boxes for Data</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> A POS system stores item names, prices, and stock. Variables are labeled boxes holding those values. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A variable is a named box that holds a value. You choose a clear name so future-you (and teammates) know what the data means without guessing.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Assign with <code>=</code>. Names: letters, numbers, underscores; cannot start with a number.<br>\n  Prefer <code>snake_case</code>: <code>total_sales</code> not <code>x</code>.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create, update, and name variables clearly.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>customer_name = \"Bola\"</code> — stores or updates a value.</li><li><code>balance = 45000</code> — stores or updates a value.</li><li><code>balance = balance + 5000   # deposit</code> — stores or updates a value.</li><li><code>print(customer_name, \"new balance:\", balance)</code> — shows output so you can verify the result.</li><li><code>x, y = 10, 20</code> — stores or updates a value.</li><li><code>a = b = 0</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Labeled Boxes for Data</em> solve?</li><li>Which line in the example most directly achieves: “Create, update, and name variables clearly.”?</li><li>If you change one value in <code>customer_name = \"Bola\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "customer_name = \"Bola\"\nbalance = 45000\nbalance = balance + 5000   # deposit\nprint(customer_name, \"new balance:\", balance)\n\n# Multiple assignment\nx, y = 10, 20\na = b = 0",
      "exercises": [
        {
          "title": "Mini bank account",
          "instruction": "Create variables for account_name, balance. Simulate a 2000 withdrawal and print remaining balance.",
          "solution": "account_name = \"Chidi Okeke\"\nbalance = 15000\nwithdrawal = 2000\nbalance = balance - withdrawal\nprint(account_name, \"balance left:\", balance)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Create variables for account_name, balance. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Which is a valid variable name?",
          "options": [
            "2total",
            "total-sales",
            "total_sales",
            "class"
          ],
          "correct": 2,
          "explanation": "Use letters/numbers/underscores; no hyphens; avoid reserved words like class."
        },
        {
          "q": "When would you use “Labeled Boxes for Data” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create, update, and name variables clearly.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create, update, and name variables clearly."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-07",
      "title": "2.2 Data Types — What Kind of Value Is It?",
      "module": "Variables & Types",
      "objective": "Identify and use str, int, float, bool, and check types with type().",
      "why": "Money needs decimals (float), ages are whole numbers (int), names are text (str). Wrong type = wrong bills and bugs.",
      "explanation": "<p><strong>What you will learn.</strong> Identify and use str, int, float, bool, and check types with type(). By the end you should explain <em>What Kind of Value Is It?</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Money needs decimals (float), ages are whole numbers (int), names are text (str). Wrong type = wrong bills and bugs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Types describe what kind of value you have (text, number, true/false, nothing). Operations only make sense when the type matches — you cannot average a list of names the same way you average prices.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Common types: <strong>str</strong>, <strong>int</strong>, <strong>float</strong>, <strong>bool</strong>, <strong>list</strong>, <strong>dict</strong>, <strong>None</strong>.<br>\n  Use <code>type(value)</code> to inspect.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Identify and use str, int, float, bool, and check types with type().” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>name = \"Fatima\"       # str</code> — stores or updates a value.</li><li><code>age = 27              # int</code> — stores or updates a value.</li><li><code>height_m = 1.65       # float</code> — stores or updates a value.</li><li><code>is_member = True      # bool</code> — stores or updates a value.</li><li><code>print(type(name), type(age), type(height_m), type(is_member))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>What Kind of Value Is It?</em> solve?</li><li>Which line in the example most directly achieves: “Identify and use str, int, float, bool, and check types with type().”?</li><li>If you change one value in <code>name = \"Fatima\"       # str</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "name = \"Fatima\"       # str\nage = 27              # int\nheight_m = 1.65       # float\nis_member = True      # bool\nprint(type(name), type(age), type(height_m), type(is_member))",
      "exercises": [
        {
          "title": "Type audit for a product",
          "instruction": "Create variables for product name, price, quantity, and in_stock (True/False). Print each type().",
          "solution": "product = \"Peak Milk 400g\"\nprice = 1850.50\nqty = 24\nin_stock = True\nprint(type(product), type(price), type(qty), type(in_stock))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Create variables for product name, price, quantity, and in_stock (True/False). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What type is 3.14?",
          "options": [
            "int",
            "str",
            "float",
            "bool"
          ],
          "correct": 2,
          "explanation": "Numbers with decimals are float."
        },
        {
          "q": "When would you use “What Kind of Value Is It?” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Identify and use str, int, float, bool, and check types with type().",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Identify and use str, int, float, bool, and check types with type()."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-08",
      "title": "2.3 Numbers — int, float & Everyday Math",
      "module": "Variables & Types",
      "objective": "Perform arithmetic with integers and floats for real calculations.",
      "why": "Salaries, fuel cost, and market profit all need reliable number math.",
      "explanation": "<p><strong>What you will learn.</strong> Perform arithmetic with integers and floats for real calculations. By the end you should explain <em>int, float &amp; Everyday Math</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Salaries, fuel cost, and market profit all need reliable number math. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Operators are short symbols for common actions: calculate, compare, combine conditions. Master the common ones and most business rules become readable code.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Operators: <code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>//</code> (floor) <code>%</code> (remainder) <code>**</code> (power).<br>\n  Watch float precision for money — often store kobo as int or use decimal later.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Perform arithmetic with integers and floats for real calculations.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>bags_of_rice = 12</code> — stores or updates a value.</li><li><code>price_each = 45000</code> — stores or updates a value.</li><li><code>total = bags_of_rice * price_each</code> — stores or updates a value.</li><li><code>print(\"Total:\", total)</code> — shows output so you can verify the result.</li><li><code>bill = 15000</code> — stores or updates a value.</li><li><code>each = bill / 3</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>int, float &amp; Everyday Math</em> solve?</li><li>Which line in the example most directly achieves: “Perform arithmetic with integers and floats for real calculations.”?</li><li>If you change one value in <code>bags_of_rice = 12</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "bags_of_rice = 12\nprice_each = 45000\ntotal = bags_of_rice * price_each\nprint(\"Total:\", total)\n\n# Split bill among 3 friends\nbill = 15000\neach = bill / 3\nprint(\"Each pays:\", each)\n\nprint(17 // 5)  # 3\nprint(17 % 5)   # 2 remainder\nprint(2 ** 10)  # 1024",
      "exercises": [
        {
          "title": "Fuel cost calculator",
          "instruction": "A car uses 12 litres/100km. Diesel is ₦1200/L. Distance = 80km. Print estimated fuel cost.",
          "solution": "litres_per_100 = 12\nprice_per_litre = 1200\ndistance = 80\nlitres_needed = (litres_per_100 / 100) * distance\ncost = litres_needed * price_per_litre\nprint(\"Fuel needed (L):\", litres_needed)\nprint(\"Estimated cost: ₦\", cost)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: A car uses 12 litres/100km. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is 10 // 3 in Python?",
          "options": [
            "3.33",
            "3",
            "1",
            "0"
          ],
          "correct": 1,
          "explanation": "// is floor division: 10//3 = 3."
        },
        {
          "q": "When would you use “int, float & Everyday Math” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Perform arithmetic with integers and floats for real calculations.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Perform arithmetic with integers and floats for real calculations."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-09",
      "title": "2.4 Casting — Convert Types Safely",
      "module": "Variables & Types",
      "objective": "Convert between str, int, and float with int(), float(), str().",
      "why": "User input arrives as text. To add prices you must cast \"2500\" to a number first.",
      "explanation": "<p><strong>What you will learn.</strong> Convert between str, int, and float with int(), float(), str(). By the end you should explain <em>Convert Types Safely</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> User input arrives as text. To add prices you must cast \"2500\" to a number first. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Types describe what kind of value you have (text, number, true/false, nothing). Operations only make sense when the type matches — you cannot average a list of names the same way you average prices.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Common casts: <code>int(\"42\")</code>, <code>float(\"3.5\")</code>, <code>str(100)</code>.<br>\n  Invalid casts raise errors: <code>int(\"hello\")</code> fails.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Convert between str, int, and float with int(), float(), str().” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>price_text = \"2500\"</code> — stores or updates a value.</li><li><code>qty_text = \"3\"</code> — stores or updates a value.</li><li><code>total = int(price_text) * int(qty_text)</code> — stores or updates a value.</li><li><code>print(\"Total:\", total)</code> — shows output so you can verify the result.</li><li><code>print(\"Receipt line: \" + str(total) + \" naira\")</code> — shows output so you can verify the result.</li><li><code>score = float(\"85.5\")</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Convert Types Safely</em> solve?</li><li>Which line in the example most directly achieves: “Convert between str, int, and float with int(), float(), str().”?</li><li>If you change one value in <code>price_text = \"2500\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "price_text = \"2500\"\nqty_text = \"3\"\ntotal = int(price_text) * int(qty_text)\nprint(\"Total:\", total)\nprint(\"Receipt line: \" + str(total) + \" naira\")\n\nscore = float(\"85.5\")\nprint(score + 4.5)",
      "exercises": [
        {
          "title": "String math fix",
          "instruction": "Variables a=\"40\" and b=\"12.5\". Convert them and print their sum as a float.",
          "solution": "a = \"40\"\nb = \"12.5\"\nprint(int(a) + float(b))  # 52.5",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Variables a=\"40\" and b=\"12. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What does int(\"10\") return?",
          "options": [
            "\"10\"",
            "10",
            "10.0",
            "Error always"
          ],
          "correct": 1,
          "explanation": "int() converts a numeric string to an integer."
        },
        {
          "q": "When would you use “Convert Types Safely” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Convert between str, int, and float with int(), float(), str().",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Convert between str, int, and float with int(), float(), str()."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-10",
      "title": "3.1 Strings — Working with Text",
      "module": "Strings",
      "objective": "Create and print strings with single, double, and triple quotes.",
      "why": "Names, addresses, SMS messages, and invoices are all text (strings).",
      "explanation": "<p><strong>What you will learn.</strong> Create and print strings with single, double, and triple quotes. By the end you should explain <em>Working with Text</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Names, addresses, SMS messages, and invoices are all text (strings). Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see — names, messages, receipts, SMS — is text, so string skills show up in every real app.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Strings hold text. Use <code>'...'</code>, <code>\"...\"</code>, or <code>'''...'''</code> for multi-line.<br>\n  Length: <code>len(s)</code>. Index: <code>s[0]</code> is first character.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create and print strings with single, double, and triple quotes.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>customer = \"Amina Yusuf\"</code> — stores or updates a value.</li><li><code>message = 'Your order is ready'</code> — stores or updates a value.</li><li><code>poem = \"\"\"Thank you for shopping</code> — stores or updates a value.</li><li><code>See you next week!\"\"\"</code> — does a step in the overall recipe.</li><li><code>print(customer)</code> — shows output so you can verify the result.</li><li><code>print(len(customer))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Working with Text</em> solve?</li><li>Which line in the example most directly achieves: “Create and print strings with single, double, and triple quotes.”?</li><li>If you change one value in <code>customer = \"Amina Yusuf\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "customer = \"Amina Yusuf\"\nmessage = 'Your order is ready'\npoem = \"\"\"Thank you for shopping\nSee you next week!\"\"\"\nprint(customer)\nprint(len(customer))\nprint(customer[0])   # A\nprint(customer[-1])  # f (last char)",
      "exercises": [
        {
          "title": "Business SMS",
          "instruction": "Create a multi-line string thanking a customer by name and print its length.",
          "solution": "name = \"Tunde\"\nsms = f\"\"\"Hello {name},\nThanks for buying from us today!\n— MoTechy Store\"\"\"\nprint(sms)\nprint(\"Characters:\", len(sms))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Create a multi-line string thanking a customer by name and print its length. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What does len(\"Hi\") return?",
          "options": [
            "1",
            "2",
            "3",
            "0"
          ],
          "correct": 1,
          "explanation": "H and i — two characters."
        },
        {
          "q": "When would you use “Working with Text” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create and print strings with single, double, and triple quotes.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create and print strings with single, double, and triple quotes."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-11",
      "title": "3.2 Slicing Strings — Cut Out Pieces",
      "module": "Strings",
      "objective": "Extract parts of a string using slice notation [start:stop:step].",
      "why": "Need only the first 3 digits of a phone number or a product code prefix? Slicing extracts it.",
      "explanation": "<p><strong>What you will learn.</strong> Extract parts of a string using slice notation [start:stop:step]. By the end you should explain <em>Cut Out Pieces</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Need only the first 3 digits of a phone number or a product code prefix? Slicing extracts it. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, add/remove, and pass the whole group around.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Syntax: <code>s[start:stop]</code> — stop is exclusive.<br>\n  <code>s[:3]</code> first 3 chars. <code>s[2:]</code> from index 2 to end. <code>s[::-1]</code> reverse.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Extract parts of a string using slice notation [start:stop:step].” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>phone = \"08031234567\"</code> — stores or updates a value.</li><li><code>print(phone[:4])      # 0803 network prefix area</code> — shows output so you can verify the result.</li><li><code>print(phone[4:])      # rest of number</code> — shows output so you can verify the result.</li><li><code>print(phone[0:7])     # 0803123</code> — shows output so you can verify the result.</li><li><code>code = \"INV-2026-0042\"</code> — stores or updates a value.</li><li><code>print(code[4:8])      # 2026 year</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Cut Out Pieces</em> solve?</li><li>Which line in the example most directly achieves: “Extract parts of a string using slice notation [start:stop:step].”?</li><li>If you change one value in <code>phone = \"08031234567\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "phone = \"08031234567\"\nprint(phone[:4])      # 0803 network prefix area\nprint(phone[4:])      # rest of number\nprint(phone[0:7])     # 0803123\ncode = \"INV-2026-0042\"\nprint(code[4:8])      # 2026 year\nprint(code[::-1])     # reverse",
      "exercises": [
        {
          "title": "Extract order year",
          "instruction": "order_id = \"ORD-2026-LAG-778\". Print the year portion using slicing.",
          "solution": "order_id = \"ORD-2026-LAG-778\"\nyear = order_id[4:8]\nprint(year)  # 2026",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: order_id = \"ORD-2026-LAG-778\". Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "For s=\"Python\", what is s[1:4]?",
          "options": [
            "Pyt",
            "yth",
            "ytho",
            "thon"
          ],
          "correct": 1,
          "explanation": "Indexes 1,2,3 → y,t,h → \"yth\"."
        },
        {
          "q": "When would you use “Cut Out Pieces” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Extract parts of a string using slice notation [start:stop:step].",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Extract parts of a string using slice notation [start:stop:step]."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-12",
      "title": "3.3 Modify Strings — upper, lower, strip, replace",
      "module": "Strings",
      "objective": "Clean and transform text with common string methods.",
      "why": "Customer types \"  LAGOS  \" or \"lagos\". You normalize to \"Lagos\" before saving to a database.",
      "explanation": "<p><strong>What you will learn.</strong> Clean and transform text with common string methods. By the end you should explain <em>upper, lower, strip, replace</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Customer types \"  LAGOS  \" or \"lagos\". You normalize to \"Lagos\" before saving to a database. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see — names, messages, receipts, SMS — is text, so string skills show up in every real app.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Strings are immutable — methods return <em>new</em> strings.<br>\n  Useful: <code>upper()</code>, <code>lower()</code>, <code>title()</code>, <code>strip()</code>, <code>replace()</code>.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Clean and transform text with common string methods.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>city = \"  lagos  \"</code> — stores or updates a value.</li><li><code>clean = city.strip().title()</code> — stores or updates a value.</li><li><code>print(clean)  # Lagos</code> — shows output so you can verify the result.</li><li><code>msg = \"Order pending\"</code> — stores or updates a value.</li><li><code>print(msg.replace(\"pending\", \"shipped\"))</code> — shows output so you can verify the result.</li><li><code>print(\"HELLO\".lower())</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>upper, lower, strip, replace</em> solve?</li><li>Which line in the example most directly achieves: “Clean and transform text with common string methods.”?</li><li>If you change one value in <code>city = \"  lagos  \"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "city = \"  lagos  \"\nclean = city.strip().title()\nprint(clean)  # Lagos\n\nmsg = \"Order pending\"\nprint(msg.replace(\"pending\", \"shipped\"))\nprint(\"HELLO\".lower())\nprint(\"ada\".upper())",
      "exercises": [
        {
          "title": "Clean form input",
          "instruction": "raw = \"  CHINEDU OKAFOR \". Strip spaces and convert to title case.",
          "solution": "raw = \"  CHINEDU OKAFOR \"\nclean = raw.strip().title()\nprint(clean)  # Chinedu Okafor",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: raw = \"  CHINEDU OKAFOR \". Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What does \" hi \".strip() return?",
          "options": [
            "\" hi \"",
            "\"hi\"",
            "\"hi \"",
            "error"
          ],
          "correct": 1,
          "explanation": "strip() removes leading and trailing whitespace."
        },
        {
          "q": "When would you use “upper, lower, strip, replace” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Clean and transform text with common string methods.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Clean and transform text with common string methods."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-13",
      "title": "3.4 Concatenate Strings — Join Text Together",
      "module": "Strings",
      "objective": "Combine strings with + and join().",
      "why": "Building a full address or a WhatsApp message means joining several text pieces.",
      "explanation": "<p><strong>What you will learn.</strong> Combine strings with + and join(). By the end you should explain <em>Join Text Together</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Building a full address or a WhatsApp message means joining several text pieces. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Use <code>+</code> for simple joins (all must be strings).<br>\n  Use <code>\" \".join(list)</code> for lists of words — faster and cleaner.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Combine strings with + and join().” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>first = \"Ngozi\"</code> — stores or updates a value.</li><li><code>last = \"Eze\"</code> — stores or updates a value.</li><li><code>full = first + \" \" + last</code> — stores or updates a value.</li><li><code>print(full)</code> — shows output so you can verify the result.</li><li><code>parts = [\"12\", \"Adeniyi Jones\", \"Ikeja\", \"Lagos\"]</code> — stores or updates a value.</li><li><code>address = \", \".join(parts)</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Join Text Together</em> solve?</li><li>Which line in the example most directly achieves: “Combine strings with + and join().”?</li><li>If you change one value in <code>first = \"Ngozi\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "first = \"Ngozi\"\nlast = \"Eze\"\nfull = first + \" \" + last\nprint(full)\n\nparts = [\"12\", \"Adeniyi Jones\", \"Ikeja\", \"Lagos\"]\naddress = \", \".join(parts)\nprint(address)\n\n# Careful: cannot do \"Age: \" + 25  → use str(25)",
      "exercises": [
        {
          "title": "Full receipt header",
          "instruction": "Join shop_name, branch, and date into one header string separated by \" | \".",
          "solution": "shop_name = \"FreshMart\"\nbranch = \"Yaba\"\ndate = \"2026-07-16\"\nheader = \" | \".join([shop_name, branch, date])\nprint(header)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Join shop_name, branch, and date into one header string separated by \" | \". Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the best way to join many words from a list?",
          "options": [
            "Using + in a loop only",
            "\" \".join(words)",
            "print(words)",
            "int(words)"
          ],
          "correct": 1,
          "explanation": "str.join() is the idiomatic way to combine a list of strings."
        },
        {
          "q": "When would you use “Join Text Together” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Combine strings with + and join().",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Combine strings with + and join()."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-14",
      "title": "3.5 Format Strings — f-strings & Placeholders",
      "module": "Strings",
      "objective": "Insert variables into strings cleanly with f-strings.",
      "why": "Customer messages like \"Hello Amina, your balance is ₦12,000\" need clean formatting.",
      "explanation": "<p><strong>What you will learn.</strong> Insert variables into strings cleanly with f-strings. By the end you should explain <em>f-strings &amp; Placeholders</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Customer messages like \"Hello Amina, your balance is ₦12,000\" need clean formatting. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see — names, messages, receipts, SMS — is text, so string skills show up in every real app.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Preferred modern style: <code>f\"Hello {name}\"</code>.<br>\n  Also: <code>\"Hello {}\".format(name)</code> and old <code>%s</code> style.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Insert variables into strings cleanly with f-strings.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>name = \"Ifeanyi\"</code> — stores or updates a value.</li><li><code>balance = 12500.5</code> — stores or updates a value.</li><li><code>print(f\"Hello {name}, balance: ₦{balance:,.2f}\")</code> — shows output so you can verify the result.</li><li><code>print(\"Hello {}, balance: ₦{}\".format(name, balance))</code> — shows output so you can verify the result.</li><li><code>print(\"Hello %s\" % name)</code> — shows output so you can verify the result.</li><li><code>qty = 3</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>f-strings &amp; Placeholders</em> solve?</li><li>Which line in the example most directly achieves: “Insert variables into strings cleanly with f-strings.”?</li><li>If you change one value in <code>name = \"Ifeanyi\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "name = \"Ifeanyi\"\nbalance = 12500.5\nprint(f\"Hello {name}, balance: ₦{balance:,.2f}\")\nprint(\"Hello {}, balance: ₦{}\".format(name, balance))\nprint(\"Hello %s\" % name)\n\n# Expressions inside f-strings\nqty = 3\nprice = 500\nprint(f\"Line total: ₦{qty * price}\")",
      "exercises": [
        {
          "title": "Invoice line",
          "instruction": "item=\"Bread\", qty=4, price=800. Print: \"4 x Bread = ₦3200\" using an f-string.",
          "solution": "item = \"Bread\"\nqty = 4\nprice = 800\nprint(f\"{qty} x {item} = ₦{qty * price}\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: item=\"Bread\", qty=4, price=800. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Which is a valid f-string?",
          "options": [
            "f\"Hi {name}\"",
            "f\"Hi [name]\"",
            "\"Hi {name}\"f",
            "fmt\"Hi {name}\""
          ],
          "correct": 0,
          "explanation": "Prefix the string with f and put expressions in {}."
        },
        {
          "q": "When would you use “f-strings & Placeholders” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Insert variables into strings cleanly with f-strings.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Insert variables into strings cleanly with f-strings."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-15",
      "title": "3.6 Escape Characters — Special Symbols in Text",
      "module": "Strings",
      "objective": "Use escape sequences like \\n, \\t, and \\\" correctly.",
      "why": "When printing multi-line receipts or quotes inside quotes, escapes control special characters.",
      "explanation": "<p><strong>What you will learn.</strong> Use escape sequences like \\n, \\t, and \\\" correctly. By the end you should explain <em>Special Symbols in Text</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> When printing multi-line receipts or quotes inside quotes, escapes control special characters. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see — names, messages, receipts, SMS — is text, so string skills show up in every real app.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Common escapes: <code>\\n</code> newline, <code>\\t</code> tab, <code>\\\\</code> backslash, <code>\\'</code> / <code>\\\"</code> quotes.<br>\n  Raw strings: <code>r\"C:\\Users\\data\"</code> (paths, regex).</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use escape sequences like \\n, \\t, and \\\" correctly.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"Line1\\nLine2\")</code> — shows output so you can verify the result.</li><li><code>print(\"Name:\\tAda\")</code> — shows output so you can verify the result.</li><li><code>print(\"She said \\\"Welcome\\\" to the shop\")</code> — shows output so you can verify the result.</li><li><code>print('It\\'s open')</code> — shows output so you can verify the result.</li><li><code>path = r\"C:\\Users\\Shop\\sales.csv\"</code> — stores or updates a value.</li><li><code>print(path)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Special Symbols in Text</em> solve?</li><li>Which line in the example most directly achieves: “Use escape sequences like \\n, \\t, and \\\" correctly.”?</li><li>If you change one value in <code>print(\"Line1\\nLine2\")</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print(\"Line1\\nLine2\")\nprint(\"Name:\\tAda\")\nprint(\"She said \\\"Welcome\\\" to the shop\")\nprint('It\\'s open')\npath = r\"C:\\Users\\Shop\\sales.csv\"\nprint(path)",
      "exercises": [
        {
          "title": "Pretty receipt",
          "instruction": "Print three lines using one string with \\n: shop name, dashed line, thank you.",
          "solution": "print(\"City Mart\\n-----------\\nThank you for shopping!\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Print three lines using one string with \\n: shop name, dashed line, thank you. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What does \\n mean in a string?",
          "options": [
            "New name",
            "Newline",
            "Null",
            "Number"
          ],
          "correct": 1,
          "explanation": "\\n inserts a newline character."
        },
        {
          "q": "When would you use “Special Symbols in Text” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use escape sequences like \\n, \\t, and \\\" correctly.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use escape sequences like \\n, \\t, and \\\" correctly."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-16",
      "title": "3.7 String Methods — find, split, startswith & More",
      "module": "Strings",
      "objective": "Use powerful string methods for search and parsing.",
      "why": "Parsing CSV lines, checking if a message starts with \"PAY\", or splitting a full name — methods do the heavy lifting.",
      "explanation": "<p><strong>What you will learn.</strong> Use powerful string methods for search and parsing. By the end you should explain <em>find, split, startswith &amp; More</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Parsing CSV lines, checking if a message starts with \"PAY\", or splitting a full name — methods do the heavy lifting. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see — names, messages, receipts, SMS — is text, so string skills show up in every real app.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Handy methods: <code>split()</code>, <code>find()</code>, <code>startswith()</code>, <code>endswith()</code>, <code>count()</code>, <code>isdigit()</code>, <code>isalpha()</code>.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use powerful string methods for search and parsing.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>row = \"Rice,2500,10\"</code> — stores or updates a value.</li><li><code>parts = row.split(\",\")</code> — stores or updates a value.</li><li><code>print(parts)  # ['Rice', '2500', '10']</code> — shows output so you can verify the result.</li><li><code>msg = \"PAY 5000 to MTN\"</code> — stores or updates a value.</li><li><code>print(msg.startswith(\"PAY\"))</code> — shows output so you can verify the result.</li><li><code>print(msg.find(\"5000\"))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>find, split, startswith &amp; More</em> solve?</li><li>Which line in the example most directly achieves: “Use powerful string methods for search and parsing.”?</li><li>If you change one value in <code>row = \"Rice,2500,10\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "row = \"Rice,2500,10\"\nparts = row.split(\",\")\nprint(parts)  # ['Rice', '2500', '10']\n\nmsg = \"PAY 5000 to MTN\"\nprint(msg.startswith(\"PAY\"))\nprint(msg.find(\"5000\"))\nprint(\"0803\".isdigit())\nprint(\"Hello world\".count(\"l\"))",
      "exercises": [
        {
          "title": "Parse sales CSV line",
          "instruction": "line = \"Beans,1800,5\". Split and print product name and total value (price*qty).",
          "solution": "line = \"Beans,1800,5\"\nname, price, qty = line.split(\",\")\ntotal = int(price) * int(qty)\nprint(name, \"total ₦\", total)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: line = \"Beans,1800,5\". Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What does \"a,b,c\".split(\",\") return?",
          "options": [
            "\"a b c\"",
            "['a','b','c']",
            "3",
            "Error"
          ],
          "correct": 1,
          "explanation": "split returns a list of pieces."
        },
        {
          "q": "When would you use “find, split, startswith & More” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use powerful string methods for search and parsing.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use powerful string methods for search and parsing."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-17",
      "title": "3.8 String Exercises — Mini Text Toolkit",
      "module": "Strings",
      "objective": "Practice string skills on realistic text problems.",
      "why": "Customer support tools constantly clean, search, and reformat text.",
      "explanation": "<p><strong>What you will learn.</strong> Practice string skills on realistic text problems. By the end you should explain <em>Mini Text Toolkit</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Customer support tools constantly clean, search, and reformat text. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see — names, messages, receipts, SMS — is text, so string skills show up in every real app.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Combine slicing, methods, and f-strings to solve small business text tasks.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Practice string skills on realistic text problems.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>phone = \"08031234567\"</code> — stores or updates a value.</li><li><code>masked = phone[:3] + \"****\" + phone[-4:]</code> — stores or updates a value.</li><li><code>print(masked)</code> — shows output so you can verify the result.</li><li><code>email = \"User@Email.COM\".lower().strip()</code> — stores or updates a value.</li><li><code>print(email)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Mini Text Toolkit</em> solve?</li><li>Which line in the example most directly achieves: “Practice string skills on realistic text problems.”?</li><li>If you change one value in <code>phone = \"08031234567\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# Mask phone number: 080****4567\nphone = \"08031234567\"\nmasked = phone[:3] + \"****\" + phone[-4:]\nprint(masked)\n\nemail = \"User@Email.COM\".lower().strip()\nprint(email)",
      "exercises": [
        {
          "title": "Username from email",
          "instruction": "email = \"chidi.okeke@gmail.com\". Extract the part before @ as username (lowercase).",
          "solution": "email = \"chidi.okeke@gmail.com\"\nusername = email.split(\"@\")[0].lower()\nprint(username)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: email = \"chidi. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Best method to split a sentence into words?",
          "options": [
            "sentence.cut()",
            "sentence.split()",
            "sentence.break()",
            "list(sentence) only"
          ],
          "correct": 1,
          "explanation": "split() without args splits on whitespace."
        },
        {
          "q": "When would you use “Mini Text Toolkit” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Practice string skills on realistic text problems.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Practice string skills on realistic text problems."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-18",
      "title": "3.9 Code Challenge — Customer Message Builder",
      "module": "Strings",
      "objective": "Build a complete customer notification string from variables.",
      "why": "E-commerce and logistics apps generate SMS/email from templates + data.",
      "explanation": "<p><strong>What you will learn.</strong> Build a complete customer notification string from variables. By the end you should explain <em>Customer Message Builder</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> E-commerce and logistics apps generate SMS/email from templates + data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see — names, messages, receipts, SMS — is text, so string skills show up in every real app.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Challenge: given customer, item, qty, price, and status — produce a polished multi-line message.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Build a complete customer notification string from variables.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>customer = \"Amaka\"</code> — stores or updates a value.</li><li><code>item = \"Indomie carton\"</code> — stores or updates a value.</li><li><code>qty = 2</code> — stores or updates a value.</li><li><code>price = 6500</code> — stores or updates a value.</li><li><code>status = \"shipped\"</code> — stores or updates a value.</li><li><code>total = qty * price</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Customer Message Builder</em> solve?</li><li>Which line in the example most directly achieves: “Build a complete customer notification string from variables.”?</li><li>If you change one value in <code>customer = \"Amaka\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "customer = \"Amaka\"\nitem = \"Indomie carton\"\nqty = 2\nprice = 6500\nstatus = \"shipped\"\ntotal = qty * price\nmessage = f\"\"\"Hello {customer},\nYour order of {qty} x {item} (₦{total:,}) is now {status.upper()}.\nTrack anytime. — ZeroToCode Shop\"\"\"\nprint(message)",
      "exercises": [
        {
          "title": "Your turn",
          "instruction": "Change the variables to a pharmacy order (drugs/item of your choice) and print a similar message with status \"ready for pickup\".",
          "solution": "customer = \"Mr. Bello\"\nitem = \"Paracetamol pack\"\nqty = 3\nprice = 500\nstatus = \"ready for pickup\"\ntotal = qty * price\nprint(f\"\"\"Hello {customer},\nYour order of {qty} x {item} (₦{total:,}) is {status}.\n— City Pharmacy\"\"\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Change the variables to a pharmacy order (drugs/item of your choice) and print a similar message with status \"ready for . Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Code Challenge — Customer Message Builder”?",
          "options": [
            "Build a complete customer notification string from variables.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Customer Message Builder” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Build a complete customer notification string from variables.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Build a complete customer notification string from variables."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-19",
      "title": "4.1 Booleans — True, False & Truthiness",
      "module": "Booleans & Operators",
      "objective": "Use True/False values and understand truthy/falsy values.",
      "why": "Is the door open? Is payment confirmed? Software decisions are yes/no (boolean) questions.",
      "explanation": "<p><strong>What you will learn.</strong> Use True/False values and understand truthy/falsy values. By the end you should explain <em>True, False &amp; Truthiness</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Is the door open? Is payment confirmed? Software decisions are yes/no (boolean) questions. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer — just like a shop discount rule.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><code>True</code> and <code>False</code> are bools.<br>\n  Falsy: <code>0</code>, <code>\"\"</code>, <code>[]</code>, <code>{}</code>, <code>None</code>, <code>False</code>. Everything else is truthy.<p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use True/False values and understand truthy/falsy values.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>is_open = True</code> — stores or updates a value.</li><li><code>has_stock = False</code> — stores or updates a value.</li><li><code>print(is_open and has_stock)  # False</code> — shows output so you can verify the result.</li><li><code>print(is_open or has_stock)   # True</code> — shows output so you can verify the result.</li><li><code>print(not has_stock)          # True</code> — shows output so you can verify the result.</li><li><code>print(bool(0), bool(15), bool(\"\"), bool(\"yes\"))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>True, False &amp; Truthiness</em> solve?</li><li>Which line in the example most directly achieves: “Use True/False values and understand truthy/falsy values.”?</li><li>If you change one value in <code>is_open = True</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "is_open = True\nhas_stock = False\nprint(is_open and has_stock)  # False\nprint(is_open or has_stock)   # True\nprint(not has_stock)          # True\n\nprint(bool(0), bool(15), bool(\"\"), bool(\"yes\"))",
      "exercises": [
        {
          "title": "Shop open logic",
          "instruction": "Variables: has_power=True, staff_present=True. Print whether the shop can open (both must be True).",
          "solution": "has_power = True\nstaff_present = True\ncan_open = has_power and staff_present\nprint(\"Can open?\", can_open)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Variables: has_power=True, staff_present=True. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is bool([])?",
          "options": [
            "True",
            "False",
            "None",
            "Error"
          ],
          "correct": 1,
          "explanation": "Empty list is falsy → False."
        },
        {
          "q": "When would you use “True, False & Truthiness” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use True/False values and understand truthy/falsy values.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use True/False values and understand truthy/falsy values."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-20",
      "title": "4.2 Operators — Math, Compare & Logic",
      "module": "Booleans & Operators",
      "objective": "Use arithmetic, comparison, and logical operators correctly.",
      "why": "Price checks, eligibility rules, and discounts are all operator combinations.",
      "explanation": "<p><strong>What you will learn.</strong> Use arithmetic, comparison, and logical operators correctly. By the end you should explain <em>Math, Compare &amp; Logic</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Price checks, eligibility rules, and discounts are all operator combinations. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer — just like a shop discount rule.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Comparison: <code>== != < > <= >=</code><br>\n  Logic: <code>and or not</code><br>\n  Membership: <code>in</code>, <code>not in</code><br>\n  Identity: <code>is</code>, <code>is not</code> (for None etc.)</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use arithmetic, comparison, and logical operators correctly.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>age = 22</code> — stores or updates a value.</li><li><code>income = 80000</code> — stores or updates a value.</li><li><code>eligible = age &gt;= 18 and income &gt;= 50000</code> — does a step in the overall recipe.</li><li><code>print(\"Loan eligible?\", eligible)</code> — shows output so you can verify the result.</li><li><code>product = \"milk\"</code> — stores or updates a value.</li><li><code>cart = [\"bread\", \"milk\", \"eggs\"]</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Math, Compare &amp; Logic</em> solve?</li><li>Which line in the example most directly achieves: “Use arithmetic, comparison, and logical operators correctly.”?</li><li>If you change one value in <code>age = 22</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "age = 22\nincome = 80000\neligible = age >= 18 and income >= 50000\nprint(\"Loan eligible?\", eligible)\n\nproduct = \"milk\"\ncart = [\"bread\", \"milk\", \"eggs\"]\nprint(product in cart)\n\nprint(5 == 5, 5 != 3, 10 > 2)",
      "exercises": [
        {
          "title": "Discount rule",
          "instruction": "Give 10% off if total > 10000 OR customer is_vip. Compute final price for total=9000, is_vip=True.",
          "solution": "total = 9000\nis_vip = True\nif total > 10000 or is_vip:\n    final = total * 0.9\nelse:\n    final = total\nprint(\"Final:\", final)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Give 10% off if total > 10000 OR customer is_vip. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is True and False?",
          "options": [
            "True",
            "False",
            "None",
            "Error"
          ],
          "correct": 1,
          "explanation": "and requires both sides True."
        },
        {
          "q": "When would you use “Math, Compare & Logic” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use arithmetic, comparison, and logical operators correctly.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use arithmetic, comparison, and logical operators correctly."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-21",
      "title": "5.1 Lists — Ordered Shopping Lists",
      "module": "Collections",
      "objective": "Create, index, append, remove, and loop over lists.",
      "why": "A market shopping list, queue of orders, or student roster is a list — ordered and changeable.",
      "explanation": "<p><strong>What you will learn.</strong> Create, index, append, remove, and loop over lists. By the end you should explain <em>Ordered Shopping Lists</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> A market shopping list, queue of orders, or student roster is a list — ordered and changeable. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, add/remove, and pass the whole group around.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Lists: <code>[item1, item2]</code>. Mutable. Methods: <code>append</code>, <code>insert</code>, <code>remove</code>, <code>pop</code>, <code>sort</code>.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create, index, append, remove, and loop over lists.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>orders = [\"jollof\", \"suya\", \"zobo\"]</code> — stores or updates a value.</li><li><code>orders.append(\"puff-puff\")</code> — changes a collection.</li><li><code>print(orders[0])</code> — shows output so you can verify the result.</li><li><code>orders[1] = \"kilishi\"</code> — stores or updates a value.</li><li><code>print(len(orders))</code> — shows output so you can verify the result.</li><li><code>for item in orders:</code> — repeats work over items or until a condition ends.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Ordered Shopping Lists</em> solve?</li><li>Which line in the example most directly achieves: “Create, index, append, remove, and loop over lists.”?</li><li>If you change one value in <code>orders = [\"jollof\", \"suya\", \"zobo\"]</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "orders = [\"jollof\", \"suya\", \"zobo\"]\norders.append(\"puff-puff\")\nprint(orders[0])\norders[1] = \"kilishi\"\nprint(len(orders))\nfor item in orders:\n    print(\"-\", item)",
      "exercises": [
        {
          "title": "Todo for the day",
          "instruction": "Create a list of 4 tasks. Add one more, remove the first, print remaining.",
          "solution": "tasks = [\"buy data\", \"call supplier\", \"update prices\", \"close books\"]\ntasks.append(\"backup sales file\")\ntasks.pop(0)\nprint(tasks)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Create a list of 4 tasks. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What does append do?",
          "options": [
            "Sorts the list",
            "Adds item at the end",
            "Deletes last item",
            "Reverses list"
          ],
          "correct": 1,
          "explanation": "append adds to the end of the list."
        },
        {
          "q": "When would you use “Ordered Shopping Lists” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create, index, append, remove, and loop over lists.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create, index, append, remove, and loop over lists."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-22",
      "title": "5.2 Tuples — Fixed Records",
      "module": "Collections",
      "objective": "Use tuples for fixed collections that should not change.",
      "why": "GPS coordinates, RGB colors, or (latitude, longitude) of a shop should stay fixed — use tuples.",
      "explanation": "<p><strong>What you will learn.</strong> Use tuples for fixed collections that should not change. By the end you should explain <em>Fixed Records</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> GPS coordinates, RGB colors, or (latitude, longitude) of a shop should stay fixed — use tuples. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, add/remove, and pass the whole group around.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Tuples: <code>(a, b)</code>. Ordered, immutable.<br>\n  Good for dictionary keys and fixed records.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use tuples for fixed collections that should not change.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>lagos_coords = (6.5244, 3.3792)</code> — stores or updates a value.</li><li><code>print(lagos_coords[0])</code> — shows output so you can verify the result.</li><li><code>lat, lon = lagos_coords</code> — stores or updates a value.</li><li><code>print(lat, lon)</code> — shows output so you can verify the result.</li><li><code>singleton = (42,)</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Fixed Records</em> solve?</li><li>Which line in the example most directly achieves: “Use tuples for fixed collections that should not change.”?</li><li>If you change one value in <code>lagos_coords = (6.5244, 3.3792)</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "lagos_coords = (6.5244, 3.3792)\nprint(lagos_coords[0])\n\n# Unpacking\nlat, lon = lagos_coords\nprint(lat, lon)\n\n# Single-item tuple needs comma\nsingleton = (42,)",
      "exercises": [
        {
          "title": "RGB brand color",
          "instruction": "Store your brand color as an RGB tuple and print each component with labels.",
          "solution": "brand = (16, 185, 129)  # emerald-ish\nr, g, b = brand\nprint(\"R:\", r, \"G:\", g, \"B:\", b)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Store your brand color as an RGB tuple and print each component with labels. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Can you change an element of a tuple?",
          "options": [
            "Yes always",
            "No — tuples are immutable",
            "Only if numbers",
            "Only first element"
          ],
          "correct": 1,
          "explanation": "Tuples cannot be modified after creation."
        },
        {
          "q": "When would you use “Fixed Records” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use tuples for fixed collections that should not change.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use tuples for fixed collections that should not change."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-23",
      "title": "5.3 Sets — Unique Items Only",
      "module": "Collections",
      "objective": "Store unique values and use set operations (union, intersection).",
      "why": "Which phone numbers are unique leads? Who attended both events? Sets remove duplicates fast.",
      "explanation": "<p><strong>What you will learn.</strong> Store unique values and use set operations (union, intersection). By the end you should explain <em>Unique Items Only</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Which phone numbers are unique leads? Who attended both events? Sets remove duplicates fast. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, add/remove, and pass the whole group around.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Sets: <code>{1, 2, 3}</code>. Unordered, unique members.<br>\n  Ops: <code>|</code> union, <code>&</code> intersection, <code>-</code> difference.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Store unique values and use set operations (union, intersection).” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>visitors = {\"Ada\", \"Bola\", \"Ada\", \"Chidi\"}</code> — stores or updates a value.</li><li><code>print(visitors)  # Ada once only</code> — shows output so you can verify the result.</li><li><code>vip = {\"Ada\", \"Emeka\"}</code> — stores or updates a value.</li><li><code>print(visitors &amp; vip)   # intersection</code> — shows output so you can verify the result.</li><li><code>print(visitors | vip)   # union</code> — shows output so you can verify the result.</li><li><code>visitors.add(\"Fatima\")</code> — changes a collection.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Unique Items Only</em> solve?</li><li>Which line in the example most directly achieves: “Store unique values and use set operations (union, intersection).”?</li><li>If you change one value in <code>visitors = {\"Ada\", \"Bola\", \"Ada\", \"Chidi\"}</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "visitors = {\"Ada\", \"Bola\", \"Ada\", \"Chidi\"}\nprint(visitors)  # Ada once only\n\nvip = {\"Ada\", \"Emeka\"}\nprint(visitors & vip)   # intersection\nprint(visitors | vip)   # union\nvisitors.add(\"Fatima\")",
      "exercises": [
        {
          "title": "Unique tags",
          "instruction": "tags list has duplicates. Convert to a set and print how many unique tags.",
          "solution": "tags = [\"python\", \"data\", \"python\", \"web\", \"data\", \"ai\"]\nunique = set(tags)\nprint(unique)\nprint(\"Unique count:\", len(unique))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: tags list has duplicates. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is special about sets?",
          "options": [
            "They keep order always",
            "They only store unique items",
            "They allow duplicates",
            "They are strings"
          ],
          "correct": 1,
          "explanation": "Sets automatically store each unique value once."
        },
        {
          "q": "When would you use “Unique Items Only” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Store unique values and use set operations (union, intersection).",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Store unique values and use set operations (union, intersection)."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-24",
      "title": "5.4 Dictionaries — Key → Value Maps",
      "module": "Collections",
      "objective": "Store and retrieve data with keys (like a real dictionary or contact book).",
      "why": "A student profile, product catalog, or settings file is naturally a dictionary.",
      "explanation": "<p><strong>What you will learn.</strong> Store and retrieve data with keys (like a real dictionary or contact book). By the end you should explain <em>Key → Value Maps</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> A student profile, product catalog, or settings file is naturally a dictionary. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Key–value maps store labeled data (like a form: name → value). They shine when you look things up by a name instead of by position.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Dicts: <code>{\"name\": \"Ada\", \"age\": 20}</code>. Access with keys. Methods: <code>keys()</code>, <code>values()</code>, <code>items()</code>, <code>get()</code>.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Store and retrieve data with keys (like a real dictionary or contact book).” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>student = {</code> — stores or updates a value.</li><li><code>\"name\": \"Emeka\",</code> — does a step in the overall recipe.</li><li><code>\"course\": \"Python\",</code> — does a step in the overall recipe.</li><li><code>\"score\": 88</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>print(student[\"name\"])</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Key → Value Maps</em> solve?</li><li>Which line in the example most directly achieves: “Store and retrieve data with keys (like a real dictionary or contact book).”?</li><li>If you change one value in <code>student = {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Missing keys return errors/undefined — print keys or use safe get/default patterns.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "student = {\n    \"name\": \"Emeka\",\n    \"course\": \"Python\",\n    \"score\": 88\n}\nprint(student[\"name\"])\nprint(student.get(\"email\", \"not provided\"))\nstudent[\"score\"] = 91\nfor key, value in student.items():\n    print(key, \"→\", value)",
      "exercises": [
        {
          "title": "Product record",
          "instruction": "Create a dict for a phone: brand, model, price, in_stock. Print a sales sentence using the values.",
          "solution": "phone = {\"brand\": \"Tecno\", \"model\": \"Camon\", \"price\": 185000, \"in_stock\": True}\nprint(f\"{phone['brand']} {phone['model']} costs ₦{phone['price']:,}. In stock: {phone['in_stock']}\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Create a dict for a phone: brand, model, price, in_stock. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "How do you safely get a key that might be missing?",
          "options": [
            "dict[key]",
            "dict.get(key, default)",
            "dict.pop only",
            "dict + key"
          ],
          "correct": 1,
          "explanation": "get() returns default instead of crashing if key is missing."
        },
        {
          "q": "When would you use “Key → Value Maps” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Store and retrieve data with keys (like a real dictionary or contact book).",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Store and retrieve data with keys (like a real dictionary or contact book)."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Missing keys return errors/undefined — print keys or use safe get/default patterns.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-mp-01",
      "title": "5.5 Mini Project — Contact Book",
      "module": "Collections",
      "path": "beginner",
      "project": true,
      "difficulty": "beginner",
      "objective": "Build an in-memory contact book with dicts and lists.",
      "why": "Every business keeps customer names and phones — this is CRUD in miniature.",
      "explanation": "<p><strong>What you will learn.</strong> Build an in-memory contact book with dicts and lists. By the end you should explain <em>Contact Book</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Every business keeps customer names and phones — this is CRUD in miniature. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Store contacts as a list of dicts with name and phone. Support add, list, and find by name. This glues lists, dicts, loops, and functions.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Build an in-memory contact book with dicts and lists.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>12</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>contacts = []</code> — stores or updates a value.</li><li><code>def add_contact(name, phone):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>contacts.append({\"name\": name, \"phone\": phone})</code> — changes a collection.</li><li><code>def find_contact(name):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>for c in contacts:</code> — repeats work over items or until a condition ends.</li><li><code>if c[\"name\"].lower() == name.lower():</code> — branches based on a condition.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Contact Book</em> solve?</li><li>Which line in the example most directly achieves: “Build an in-memory contact book with dicts and lists.”?</li><li>If you change one value in <code>contacts = []</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "contacts = []\n\ndef add_contact(name, phone):\n    contacts.append({\"name\": name, \"phone\": phone})\n\ndef find_contact(name):\n    for c in contacts:\n        if c[\"name\"].lower() == name.lower():\n            return c\n    return None\n\nadd_contact(\"Ada\", \"0803...\")\nadd_contact(\"Bola\", \"0901...\")\nprint(find_contact(\"ada\"))\nprint(len(contacts), \"contacts saved\")",
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "exercises": [
        {
          "title": "Delete contact",
          "instruction": "Write remove_contact(name) that removes the first match.",
          "hint": "Rebuild list with a comprehension or use index",
          "level": "medium",
          "solution": "def remove_contact(name):\n    global contacts\n    contacts = [c for c in contacts if c[\"name\"].lower() != name.lower()]\n\nremove_contact(\"Bola\")\nprint(contacts)"
        },
        {
          "title": "List all",
          "instruction": "Print each contact as \"Name — phone\".",
          "hint": "for loop",
          "level": "easy",
          "solution": "for c in contacts:\n    print(f\"{c['name']} — {c['phone']}\")"
        }
      ],
      "quiz": [
        {
          "q": "Why list of dicts?",
          "options": [
            "Faster than CPU always",
            "Models many records with fields",
            "Required by Python syntax",
            "Only works offline"
          ],
          "correct": 1,
          "explanation": "Each dict is one contact with fields."
        }
      ]
    },
    {
      "id": "py-25",
      "title": "6.1 If...Else — Decisions in Code",
      "module": "Control Flow",
      "objective": "Branch logic with if, elif, and else.",
      "why": "ATMs: if PIN correct and balance enough → dispense cash. Same idea in every app.",
      "explanation": "<p><strong>What you will learn.</strong> Branch logic with if, elif, and else. By the end you should explain <em>Decisions in Code</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> ATMs: if PIN correct and balance enough → dispense cash. Same idea in every app. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer — just like a shop discount rule.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Structure: <code>if condition:</code> / <code>elif</code> / <code>else</code>. Indent the body.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Branch logic with if, elif, and else.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>balance = 8000</code> — stores or updates a value.</li><li><code>withdraw = 5000</code> — stores or updates a value.</li><li><code>if withdraw &gt; balance:</code> — branches based on a condition.</li><li><code>print(\"Insufficient funds\")</code> — shows output so you can verify the result.</li><li><code>elif withdraw &lt;= 0:</code> — does a step in the overall recipe.</li><li><code>print(\"Invalid amount\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Decisions in Code</em> solve?</li><li>Which line in the example most directly achieves: “Branch logic with if, elif, and else.”?</li><li>If you change one value in <code>balance = 8000</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "balance = 8000\nwithdraw = 5000\nif withdraw > balance:\n    print(\"Insufficient funds\")\nelif withdraw <= 0:\n    print(\"Invalid amount\")\nelse:\n    balance -= withdraw\n    print(\"Take your cash. New balance:\", balance)",
      "exercises": [
        {
          "title": "Exam grade",
          "instruction": "score 0-100 → A(70+), B(60-69), C(50-59), else Fail. Print the grade for score=63.",
          "solution": "score = 63\nif score >= 70:\n    grade = \"A\"\nelif score >= 60:\n    grade = \"B\"\nelif score >= 50:\n    grade = \"C\"\nelse:\n    grade = \"Fail\"\nprint(\"Grade:\", grade)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: score 0-100 → A(70+), B(60-69), C(50-59), else Fail. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What keyword means \"else if\" in Python?",
          "options": [
            "elseif",
            "elif",
            "else if",
            "elsif"
          ],
          "correct": 1,
          "explanation": "Python uses elif."
        },
        {
          "q": "When would you use “Decisions in Code” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Branch logic with if, elif, and else.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Branch logic with if, elif, and else."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Use comparison operators (== / ===), not assignment (=). Keep branches small and readable.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-26",
      "title": "6.2 Match — Structural Pattern Matching",
      "module": "Control Flow",
      "objective": "Use match/case (Python 3.10+) for clean multi-way decisions.",
      "why": "Order status: pending, shipped, delivered, cancelled — match handles each case clearly.",
      "explanation": "<p><strong>What you will learn.</strong> Use match/case (Python 3.10+) for clean multi-way decisions. By the end you should explain <em>Structural Pattern Matching</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Order status: pending, shipped, delivered, cancelled — match handles each case clearly. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Control Flow module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><code>match value:</code> then <code>case pattern:</code>. Use <code>case _</code> as default.<p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use match/case (Python 3.10+) for clean multi-way decisions.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>status = \"shipped\"</code> — stores or updates a value.</li><li><code>match status:</code> — branches based on a condition.</li><li><code>case \"pending\":</code> — does a step in the overall recipe.</li><li><code>print(\"We are packing your order\")</code> — shows output so you can verify the result.</li><li><code>case \"shipped\":</code> — does a step in the overall recipe.</li><li><code>print(\"On the way — track your parcel\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Structural Pattern Matching</em> solve?</li><li>Which line in the example most directly achieves: “Use match/case (Python 3.10+) for clean multi-way decisions.”?</li><li>If you change one value in <code>status = \"shipped\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "status = \"shipped\"\nmatch status:\n    case \"pending\":\n        print(\"We are packing your order\")\n    case \"shipped\":\n        print(\"On the way — track your parcel\")\n    case \"delivered\":\n        print(\"Enjoy! Please rate us\")\n    case _:\n        print(\"Unknown status\")",
      "exercises": [
        {
          "title": "Payment method",
          "instruction": "Match method \"card\"/\"transfer\"/\"cash\" and print processing instructions. Default: invalid.",
          "solution": "method = \"transfer\"\nmatch method:\n    case \"card\":\n        print(\"Swipe or insert card\")\n    case \"transfer\":\n        print(\"Send to account 0123456789\")\n    case \"cash\":\n        print(\"Pay the cashier\")\n    case _:\n        print(\"Invalid payment method\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Match method \"card\"/\"transfer\"/\"cash\" and print processing instructions. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the default case in match?",
          "options": [
            "case default",
            "case _",
            "case *",
            "case else"
          ],
          "correct": 1,
          "explanation": "case _ catches everything else."
        },
        {
          "q": "When would you use “Structural Pattern Matching” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use match/case (Python 3.10+) for clean multi-way decisions.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use match/case (Python 3.10+) for clean multi-way decisions."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-27",
      "title": "6.3 While Loops — Repeat Until Done",
      "module": "Control Flow",
      "objective": "Repeat actions while a condition stays True.",
      "why": "PIN attempts, menu systems, and \"keep asking until valid input\" use while loops.",
      "explanation": "<p><strong>What you will learn.</strong> Repeat actions while a condition stays True. By the end you should explain <em>Repeat Until Done</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> PIN attempts, menu systems, and \"keep asking until valid input\" use while loops. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Loops repeat work. Instead of copying the same steps 100 times, you write them once and run them for every item or until a condition ends.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>while condition: body. Avoid infinite loops — update the condition.<br>\n  <code>break</code> exits, <code>continue</code> skips to next iteration.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Repeat actions while a condition stays True.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>attempts = 0</code> — stores or updates a value.</li><li><code>pin = \"2468\"</code> — stores or updates a value.</li><li><code>while attempts &lt; 3:</code> — repeats work over items or until a condition ends.</li><li><code>guess = \"2468\"  # pretend input</code> — stores or updates a value.</li><li><code>if guess == pin:</code> — branches based on a condition.</li><li><code>print(\"Access granted\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Repeat Until Done</em> solve?</li><li>Which line in the example most directly achieves: “Repeat actions while a condition stays True.”?</li><li>If you change one value in <code>attempts = 0</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Infinite loops forget to update the loop variable or break condition. Always know what stops the loop.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "attempts = 0\npin = \"2468\"\nwhile attempts < 3:\n    guess = \"2468\"  # pretend input\n    if guess == pin:\n        print(\"Access granted\")\n        break\n    attempts += 1\nelse:\n    print(\"Card blocked\")  # runs if no break",
      "exercises": [
        {
          "title": "Countdown",
          "instruction": "Use while to count from 5 down to 1, then print \"Go!\".",
          "solution": "n = 5\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Go!\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Use while to count from 5 down to 1, then print \"Go!\". Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What does break do in a loop?",
          "options": [
            "Pauses forever",
            "Exits the loop immediately",
            "Skips one line only",
            "Restarts Python"
          ],
          "correct": 1,
          "explanation": "break jumps out of the nearest loop."
        },
        {
          "q": "When would you use “Repeat Until Done” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Repeat actions while a condition stays True.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Repeat actions while a condition stays True."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Infinite loops forget to update the loop variable or break condition. Always know what stops the loop.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-28",
      "title": "6.4 For Loops — Walk Through Collections",
      "module": "Control Flow",
      "objective": "Iterate over lists, strings, and other sequences with for.",
      "why": "Send SMS to every customer, or total every line on a receipt — for loops shine here.",
      "explanation": "<p><strong>What you will learn.</strong> Iterate over lists, strings, and other sequences with for. By the end you should explain <em>Walk Through Collections</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Send SMS to every customer, or total every line on a receipt — for loops shine here. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Loops repeat work. Instead of copying the same steps 100 times, you write them once and run them for every item or until a condition ends.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>for item in collection: process item.<br>\n  Combine with <code>enumerate</code> for index + value.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Iterate over lists, strings, and other sequences with for.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>prices = [500, 1200, 300]</code> — stores or updates a value.</li><li><code>total = 0</code> — stores or updates a value.</li><li><code>for p in prices:</code> — repeats work over items or until a condition ends.</li><li><code>total += p</code> — stores or updates a value.</li><li><code>print(\"Sum:\", total)</code> — shows output so you can verify the result.</li><li><code>for i, p in enumerate(prices, start=1):</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Walk Through Collections</em> solve?</li><li>Which line in the example most directly achieves: “Iterate over lists, strings, and other sequences with for.”?</li><li>If you change one value in <code>prices = [500, 1200, 300]</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>Infinite loops forget to update the loop variable or break condition. Always know what stops the loop.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "prices = [500, 1200, 300]\ntotal = 0\nfor p in prices:\n    total += p\nprint(\"Sum:\", total)\n\nfor i, p in enumerate(prices, start=1):\n    print(f\"Item {i}: ₦{p}\")",
      "exercises": [
        {
          "title": "Name badges",
          "instruction": "names = [\"Ada\", \"Bola\", \"Chika\"]. Print \"Hello, <name>!\" for each.",
          "solution": "names = [\"Ada\", \"Bola\", \"Chika\"]\nfor name in names:\n    print(f\"Hello, {name}!\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: names = [\"Ada\", \"Bola\", \"Chika\"]. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "for x in \"Hi\": how many iterations?",
          "options": [
            "1",
            "2",
            "3",
            "0"
          ],
          "correct": 1,
          "explanation": "One iteration per character: H, i."
        },
        {
          "q": "When would you use “Walk Through Collections” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Iterate over lists, strings, and other sequences with for.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Iterate over lists, strings, and other sequences with for."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; Index out of range happens when index ≥ length. Check length before you index.; Infinite loops forget to update the loop variable or break condition. Always know what stops the loop."
    },
    {
      "id": "py-29",
      "title": "6.5 Range — Sequences of Numbers",
      "module": "Control Flow",
      "objective": "Generate number sequences with range(start, stop, step).",
      "why": "Print pages 1–10, seat numbers, or run a loop N times without a manual list.",
      "explanation": "<p><strong>What you will learn.</strong> Generate number sequences with range(start, stop, step). By the end you should explain <em>Sequences of Numbers</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Print pages 1–10, seat numbers, or run a loop N times without a manual list. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Loops repeat work. Instead of copying the same steps 100 times, you write them once and run them for every item or until a condition ends.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><code>range(5)</code> → 0..4. <code>range(1, 6)</code> → 1..5. <code>range(0, 10, 2)</code> even numbers.<br>\n  Convert to list: <code>list(range(5))</code>.<p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Generate number sequences with range(start, stop, step).” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>for i in range(1, 6):</code> — repeats work over items or until a condition ends.</li><li><code>print(\"Day\", i)</code> — shows output so you can verify the result.</li><li><code>print(list(range(0, 11, 2)))  # [0,2,4,6,8,10]</code> — shows output so you can verify the result.</li><li><code>for n in range(1, 13):</code> — repeats work over items or until a condition ends.</li><li><code>print(f\"5 x {n} = {5 * n}\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Sequences of Numbers</em> solve?</li><li>Which line in the example most directly achieves: “Generate number sequences with range(start, stop, step).”?</li><li>If you change one value in <code>for i in range(1, 6):</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Infinite loops forget to update the loop variable or break condition. Always know what stops the loop.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "for i in range(1, 6):\n    print(\"Day\", i)\n\nprint(list(range(0, 11, 2)))  # [0,2,4,6,8,10]\n\n# 5 times table\nfor n in range(1, 13):\n    print(f\"5 x {n} = {5 * n}\")",
      "exercises": [
        {
          "title": "Even seats",
          "instruction": "Print even seat numbers from 2 to 20 inclusive using range.",
          "solution": "for seat in range(2, 21, 2):\n    print(\"Seat\", seat)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Print even seat numbers from 2 to 20 inclusive using range. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "list(range(3)) is?",
          "options": [
            "[1,2,3]",
            "[0,1,2]",
            "[0,1,2,3]",
            "[3]"
          ],
          "correct": 1,
          "explanation": "range(3) yields 0,1,2."
        },
        {
          "q": "When would you use “Sequences of Numbers” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Generate number sequences with range(start, stop, step).",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Generate number sequences with range(start, stop, step)."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Infinite loops forget to update the loop variable or break condition. Always know what stops the loop.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-30",
      "title": "7.1 Functions — Write Once, Reuse Forever",
      "module": "Functions",
      "objective": "Define functions with def, parameters, and return values.",
      "why": "Calculating delivery fee in 10 places? Put it in one function — fix bugs once.",
      "explanation": "<p><strong>What you will learn.</strong> Define functions with def, parameters, and return values. By the end you should explain <em>Write Once, Reuse Forever</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Calculating delivery fee in 10 places? Put it in one function — fix bugs once. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. Write it once, reuse it many times, and test it in isolation.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><code>def name(params):</code> then body. <code>return</code> sends a result back.<br>\n  Default args: <code>def fee(km, rate=100):</code><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Define functions with def, parameters, and return values.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>def delivery_fee(distance_km, rate=150):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if distance_km &lt;= 0:</code> — branches based on a condition.</li><li><code>return 0</code> — sends a result back to the caller.</li><li><code>return distance_km * rate</code> — sends a result back to the caller.</li><li><code>print(delivery_fee(8))</code> — shows output so you can verify the result.</li><li><code>print(delivery_fee(8, rate=200))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Write Once, Reuse Forever</em> solve?</li><li>Which line in the example most directly achieves: “Define functions with def, parameters, and return values.”?</li><li>If you change one value in <code>def delivery_fee(distance_km, rate=150):</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "def delivery_fee(distance_km, rate=150):\n    if distance_km <= 0:\n        return 0\n    return distance_km * rate\n\nprint(delivery_fee(8))\nprint(delivery_fee(8, rate=200))\n\ndef greet(name=\"friend\"):\n    return f\"Hello, {name}!\"\nprint(greet(\"Zainab\"))",
      "exercises": [
        {
          "title": "VAT function",
          "instruction": "Write add_vat(amount, rate=0.075) that returns amount including VAT.",
          "solution": "def add_vat(amount, rate=0.075):\n    return amount * (1 + rate)\n\nprint(add_vat(10000))\nprint(add_vat(10000, 0.05))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Write add_vat(amount, rate=0. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What keyword sends a value back from a function?",
          "options": [
            "send",
            "return",
            "yield only",
            "pass"
          ],
          "correct": 1,
          "explanation": "return provides the function result."
        },
        {
          "q": "When would you use “Write Once, Reuse Forever” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Define functions with def, parameters, and return values.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Define functions with def, parameters, and return values."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-31",
      "title": "7.2 Arrays — Array Module & List as Arrays",
      "module": "Functions",
      "objective": "Understand Python arrays (array module) vs everyday lists.",
      "why": "Scientific sensors store many numbers efficiently. For most apps, lists are enough; array is for typed numeric storage.",
      "explanation": "<p><strong>What you will learn.</strong> Understand Python arrays (array module) vs everyday lists. By the end you should explain <em>Array Module &amp; List as Arrays</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Scientific sensors store many numbers efficiently. For most apps, lists are enough; array is for typed numeric storage. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Libraries and modules save you from reinventing the wheel. You import proven tools, then focus on your business logic.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Python has no fixed C-style array built-in. Use <strong>lists</strong> for general work.<br>\n  <code>array.array</code> stores one type compactly. NumPy arrays (later) for data science.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Understand Python arrays (array module) vs everyday lists.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from array import array</code> — sets up a name, type, import, or definition you will use next.</li><li><code>temps = array('f', [32.1, 33.0, 31.5, 34.2])  # float array</code> — stores or updates a value.</li><li><code>print(temps[0])</code> — shows output so you can verify the result.</li><li><code>temps.append(30.8)</code> — changes a collection.</li><li><code>print(list(temps))</code> — shows output so you can verify the result.</li><li><code>scores = [70, 85, 90]</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Array Module &amp; List as Arrays</em> solve?</li><li>Which line in the example most directly achieves: “Understand Python arrays (array module) vs everyday lists.”?</li><li>If you change one value in <code>from array import array</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from array import array\ntemps = array('f', [32.1, 33.0, 31.5, 34.2])  # float array\nprint(temps[0])\ntemps.append(30.8)\nprint(list(temps))\n\n# Most of the time, just use a list:\nscores = [70, 85, 90]\nprint(sum(scores) / len(scores))",
      "exercises": [
        {
          "title": "Sensor average",
          "instruction": "Use a list (or array) of 5 temperature readings and print the average.",
          "solution": "readings = [28.5, 29.0, 30.2, 27.8, 29.5]\navg = sum(readings) / len(readings)\nprint(\"Average °C:\", round(avg, 2))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Use a list (or array) of 5 temperature readings and print the average. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "For mixed types (text + numbers), prefer:",
          "options": [
            "array.array only",
            "list",
            "set of ints only",
            "tuple of floats only"
          ],
          "correct": 1,
          "explanation": "lists hold any mix of types easily."
        },
        {
          "q": "When would you use “Array Module & List as Arrays” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Understand Python arrays (array module) vs everyday lists.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Understand Python arrays (array module) vs everyday lists."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-32",
      "title": "7.3 Iterators — next() and iter()",
      "module": "Functions",
      "objective": "Use iterators to walk through data lazily.",
      "why": "Reading a huge sales log line-by-line without loading everything into memory uses iterators.",
      "explanation": "<p><strong>What you will learn.</strong> Use iterators to walk through data lazily. By the end you should explain <em>next() and iter()</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Reading a huge sales log line-by-line without loading everything into memory uses iterators. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. Write it once, reuse it many times, and test it in isolation.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>iter(obj) gets an iterator. next(it) yields the next value. StopIteration when done.<br>\n  for-loops use iterators under the hood.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use iterators to walk through data lazily.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>nums = [10, 20, 30]</code> — stores or updates a value.</li><li><code>it = iter(nums)</code> — stores or updates a value.</li><li><code>print(next(it))</code> — shows output so you can verify the result.</li><li><code>print(next(it))</code> — shows output so you can verify the result.</li><li><code>print(next(it))</code> — shows output so you can verify the result.</li><li><code>def countdown(n):</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>next() and iter()</em> solve?</li><li>Which line in the example most directly achieves: “Use iterators to walk through data lazily.”?</li><li>If you change one value in <code>nums = [10, 20, 30]</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Infinite loops forget to update the loop variable or break condition. Always know what stops the loop.</li><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "nums = [10, 20, 30]\nit = iter(nums)\nprint(next(it))\nprint(next(it))\nprint(next(it))\n\n# Custom simple counter iterator idea via generator\ndef countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor x in countdown(3):\n    print(x)",
      "exercises": [
        {
          "title": "Manual next",
          "instruction": "Create an iterator over [\"a\",\"b\"] and print both values with next().",
          "solution": "it = iter([\"a\", \"b\"])\nprint(next(it))\nprint(next(it))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Create an iterator over [\"a\",\"b\"] and print both values with next(). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What exception does next() raise when exhausted?",
          "options": [
            "ValueError",
            "StopIteration",
            "KeyError",
            "EOFError"
          ],
          "correct": 1,
          "explanation": "StopIteration signals no more items."
        },
        {
          "q": "When would you use “next() and iter()” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use iterators to walk through data lazily.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use iterators to walk through data lazily."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Infinite loops forget to update the loop variable or break condition. Always know what stops the loop.; Wrong argument count or forgetting return are the most common function mistakes.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-33",
      "title": "8.1 Modules — Import Superpowers",
      "module": "Intermediate",
      "objective": "Import and use standard library and your own modules.",
      "why": "You do not invent math from scratch — import tools. Same for dates, random IDs, JSON.",
      "explanation": "<p><strong>What you will learn.</strong> Import and use standard library and your own modules. By the end you should explain <em>Import Superpowers</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> You do not invent math from scratch — import tools. Same for dates, random IDs, JSON. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Libraries and modules save you from reinventing the wheel. You import proven tools, then focus on your business logic.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>import math<br>\n  from random import randint<br>\n  import mymodule (your .py file)</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Import and use standard library and your own modules.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import math</code> — sets up a name, type, import, or definition you will use next.</li><li><code>from random import choice</code> — sets up a name, type, import, or definition you will use next.</li><li><code>print(math.sqrt(16))</code> — shows output so you can verify the result.</li><li><code>print(math.pi)</code> — shows output so you can verify the result.</li><li><code>prizes = [\"free delivery\", \"10% off\", \"// keyring\"]</code> — stores or updates a value.</li><li><code>print(\"You won:\", choice([\"free delivery\", \"10% off\", \"keyring\"]))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Import Superpowers</em> solve?</li><li>Which line in the example most directly achieves: “Import and use standard library and your own modules.”?</li><li>If you change one value in <code>import math</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import math\nfrom random import choice\n\nprint(math.sqrt(16))\nprint(math.pi)\n\nprizes = [\"free delivery\", \"10% off\", \"// keyring\"]\nprint(\"You won:\", choice([\"free delivery\", \"10% off\", \"keyring\"]))",
      "exercises": [
        {
          "title": "Circle area",
          "instruction": "Import math and compute area of circle radius 7 (pi * r^2).",
          "solution": "import math\nr = 7\narea = math.pi * r ** 2\nprint(round(area, 2))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Import math and compute area of circle radius 7 (pi * r^2). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "How do you import only sqrt from math?",
          "options": [
            "import math.sqrt",
            "from math import sqrt",
            "include math sqrt",
            "using math.sqrt"
          ],
          "correct": 1,
          "explanation": "from math import sqrt"
        },
        {
          "q": "When would you use “Import Superpowers” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Import and use standard library and your own modules.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Import and use standard library and your own modules."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-34",
      "title": "8.2 Dates — datetime for Real Schedules",
      "module": "Intermediate",
      "objective": "Work with dates and times using the datetime module.",
      "why": "Delivery ETAs, payroll periods, and “member since” stamps all need dates.",
      "explanation": "<p><strong>What you will learn.</strong> Work with dates and times using the datetime module. By the end you should explain <em>datetime for Real Schedules</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Delivery ETAs, payroll periods, and “member since” stamps all need dates. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Libraries and modules save you from reinventing the wheel. You import proven tools, then focus on your business logic.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>from datetime import datetime, timedelta, date</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Work with dates and times using the datetime module.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from datetime import datetime, timedelta</code> — sets up a name, type, import, or definition you will use next.</li><li><code>now = datetime.now()</code> — stores or updates a value.</li><li><code>print(now.strftime(\"%Y-%m-%d %H:%M\"))</code> — shows output so you can verify the result.</li><li><code>delivery = now + timedelta(days=3)</code> — stores or updates a value.</li><li><code>print(\"Deliver by:\", delivery.date())</code> — shows output so you can verify the result.</li><li><code>born = datetime(1998, 5, 12)</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>datetime for Real Schedules</em> solve?</li><li>Which line in the example most directly achieves: “Work with dates and times using the datetime module.”?</li><li>If you change one value in <code>from datetime import datetime, timedelta</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from datetime import datetime, timedelta\n\nnow = datetime.now()\nprint(now.strftime(\"%Y-%m-%d %H:%M\"))\n\ndelivery = now + timedelta(days=3)\nprint(\"Deliver by:\", delivery.date())\n\nborn = datetime(1998, 5, 12)\nage_days = (now - born).days\nprint(\"Days alive:\", age_days)",
      "exercises": [
        {
          "title": "Membership expiry",
          "instruction": "Today + 30 days as expiry date. Print it as YYYY-MM-DD.",
          "solution": "from datetime import datetime, timedelta\nexpiry = datetime.now() + timedelta(days=30)\nprint(expiry.strftime(\"%Y-%m-%d\"))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Today + 30 days as expiry date. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Which module is standard for dates?",
          "options": [
            "timeonly",
            "datetime",
            "calendar_only",
            "dateutil required always"
          ],
          "correct": 1,
          "explanation": "datetime is in the standard library."
        },
        {
          "q": "When would you use “datetime for Real Schedules” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Work with dates and times using the datetime module.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Work with dates and times using the datetime module."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-35",
      "title": "8.3 Math Module — Beyond Basic Operators",
      "module": "Intermediate",
      "objective": "Use math for roots, rounding modes, constants, and more.",
      "why": "Loan interest, distance between map points, and scientific tools need math helpers.",
      "explanation": "<p><strong>What you will learn.</strong> Use math for roots, rounding modes, constants, and more. By the end you should explain <em>Beyond Basic Operators</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Loan interest, distance between map points, and scientific tools need math helpers. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Libraries and modules save you from reinventing the wheel. You import proven tools, then focus on your business logic.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>import math — ceil, floor, sqrt, pow, factorial, pi, e, ...</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use math for roots, rounding modes, constants, and more.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import math</code> — sets up a name, type, import, or definition you will use next.</li><li><code>print(math.ceil(4.2))</code> — shows output so you can verify the result.</li><li><code>print(math.floor(4.8))</code> — shows output so you can verify the result.</li><li><code>print(math.factorial(5))</code> — shows output so you can verify the result.</li><li><code>print(math.hypot(3, 4))  # distance from origin = 5</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Beyond Basic Operators</em> solve?</li><li>Which line in the example most directly achieves: “Use math for roots, rounding modes, constants, and more.”?</li><li>If you change one value in <code>import math</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Clear names beat short names. Avoid reusing one variable for unrelated meanings.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import math\nprint(math.ceil(4.2))\nprint(math.floor(4.8))\nprint(math.factorial(5))\nprint(math.hypot(3, 4))  # distance from origin = 5",
      "exercises": [
        {
          "title": "Hypotenuse",
          "instruction": "A right triangle has legs 9 and 12. Print hypotenuse with math.hypot.",
          "solution": "import math\nprint(math.hypot(9, 12))  # 15.0",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: A right triangle has legs 9 and 12. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "math.ceil(2.1) is?",
          "options": [
            "2",
            "2.1",
            "3",
            "0"
          ],
          "correct": 2,
          "explanation": "ceil rounds up to 3."
        },
        {
          "q": "When would you use “Beyond Basic Operators” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use math for roots, rounding modes, constants, and more.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use math for roots, rounding modes, constants, and more."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Clear names beat short names. Avoid reusing one variable for unrelated meanings.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-36",
      "title": "8.4 JSON — Data Language of the Web",
      "module": "Intermediate",
      "objective": "Convert between Python objects and JSON strings.",
      "why": "APIs, config files, and mobile apps exchange JSON constantly.",
      "explanation": "<p><strong>What you will learn.</strong> Convert between Python objects and JSON strings. By the end you should explain <em>Data Language of the Web</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> APIs, config files, and mobile apps exchange JSON constantly. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Key–value maps store labeled data (like a form: name → value). They shine when you look things up by a name instead of by position.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>import json<br>\n  json.dumps(obj) → string<br>\n  json.loads(s) → Python object<br>\n  dump/load for files</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Convert between Python objects and JSON strings.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import json</code> — sets up a name, type, import, or definition you will use next.</li><li><code>order = {\"id\": 101, \"item\": \"fan\", \"qty\": 2, \"paid\": True}</code> — stores or updates a value.</li><li><code>text = json.dumps(order)</code> — stores or updates a value.</li><li><code>print(text)</code> — shows output so you can verify the result.</li><li><code>data = json.loads(text)</code> — stores or updates a value.</li><li><code>print(data[\"item\"])</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Data Language of the Web</em> solve?</li><li>Which line in the example most directly achieves: “Convert between Python objects and JSON strings.”?</li><li>If you change one value in <code>import json</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>Missing keys return errors/undefined — print keys or use safe get/default patterns.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import json\norder = {\"id\": 101, \"item\": \"fan\", \"qty\": 2, \"paid\": True}\ntext = json.dumps(order)\nprint(text)\ndata = json.loads(text)\nprint(data[\"item\"])",
      "exercises": [
        {
          "title": "Serialize a user",
          "instruction": "Create a dict user with name and city. Convert to JSON string and print it.",
          "solution": "import json\nuser = {\"name\": \"Kemi\", \"city\": \"Ibadan\"}\nprint(json.dumps(user))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Create a dict user with name and city. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "json.loads converts:",
          "options": [
            "Python → JSON text",
            "JSON text → Python object",
            "XML → JSON",
            "CSV → list only"
          ],
          "correct": 1,
          "explanation": "loads parses a JSON string into Python."
        },
        {
          "q": "When would you use “Data Language of the Web” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Convert between Python objects and JSON strings.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Convert between Python objects and JSON strings."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; Missing keys return errors/undefined — print keys or use safe get/default patterns.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-37",
      "title": "8.5 RegEx — Find Patterns in Text",
      "module": "Intermediate",
      "objective": "Use regular expressions to validate and extract text patterns.",
      "why": "Is this a valid Nigerian phone number? Extract all emails from a document — RegEx.",
      "explanation": "<p><strong>What you will learn.</strong> Use regular expressions to validate and extract text patterns. By the end you should explain <em>Find Patterns in Text</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Is this a valid Nigerian phone number? Extract all emails from a document — RegEx. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> These building blocks show up constantly: calculate, generate, parse, validate, and package your environment so projects stay reproducible.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>import re<br>\n  re.search, re.findall, re.sub, re.match</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use regular expressions to validate and extract text patterns.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import re</code> — sets up a name, type, import, or definition you will use next.</li><li><code>text = \"Call 08031234567 or 09011112222 today\"</code> — stores or updates a value.</li><li><code>phones = re.findall(r\"0\\d{10}\", text)</code> — stores or updates a value.</li><li><code>print(phones)</code> — shows output so you can verify the result.</li><li><code>email = \"ada@company.com\"</code> — stores or updates a value.</li><li><code>if re.match(r\"[\\w.-]+@[\\w.-]+\\.\\w+\", email):</code> — branches based on a condition.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Find Patterns in Text</em> solve?</li><li>Which line in the example most directly achieves: “Use regular expressions to validate and extract text patterns.”?</li><li>If you change one value in <code>import re</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import re\ntext = \"Call 08031234567 or 09011112222 today\"\nphones = re.findall(r\"0\\d{10}\", text)\nprint(phones)\n\nemail = \"ada@company.com\"\nif re.match(r\"[\\w.-]+@[\\w.-]+\\.\\w+\", email):\n    print(\"Valid email format\")",
      "exercises": [
        {
          "title": "Find hashtags",
          "instruction": "text = \"Love #Python and #DataScience\". Find all hashtags with re.findall.",
          "solution": "import re\ntext = \"Love #Python and #DataScience\"\nprint(re.findall(r\"#\\w+\", text))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: text = \"Love #Python and #DataScience\". Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Which module provides regex?",
          "options": [
            "regexlib",
            "re",
            "pattern",
            "stringre"
          ],
          "correct": 1,
          "explanation": "The standard module is re."
        },
        {
          "q": "When would you use “Find Patterns in Text” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use regular expressions to validate and extract text patterns.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use regular expressions to validate and extract text patterns."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-38",
      "title": "8.6 PIP — Install Packages",
      "module": "Intermediate",
      "objective": "Install third-party libraries with pip.",
      "why": "Need charts or Excel? pip installs community packages in seconds.",
      "explanation": "<p><strong>What you will learn.</strong> Install third-party libraries with pip. By the end you should explain <em>Install Packages</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Need charts or Excel? pip installs community packages in seconds. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Libraries and modules save you from reinventing the wheel. You import proven tools, then focus on your business logic.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>pip is Python’s package installer.<br>\n  <code>pip install requests</code><br>\n  <code>pip freeze > requirements.txt</code><br>\n  <code>pip install -r requirements.txt</code></p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Install third-party libraries with pip.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>1</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"Use: python3 -m pip install package_name\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Install Packages</em> solve?</li><li>Which line in the example most directly achieves: “Install third-party libraries with pip.”?</li><li>If you change one value in <code>print(\"Use: python3 -m pip install package_name\")</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# Terminal commands (run outside Python):\n# python3 -m pip install requests\n# python3 -m pip list\n# python3 -m pip uninstall requests\n\n# After install, use in code:\n# import requests\n# r = requests.get(\"https://api.github.com\")\n# print(r.status_code)\n\nprint(\"Use: python3 -m pip install package_name\")",
      "exercises": [
        {
          "title": "Requirements mindset",
          "instruction": "Write a requirements.txt content (as a multi-line string) listing requests and python-dateutil.",
          "solution": "requirements = \"\"\"requests\npython-dateutil\n\"\"\"\nprint(requirements)\nprint(\"Save that text as requirements.txt and run: pip install -r requirements.txt\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Write a requirements. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Recommended install command?",
          "options": [
            "pip download only",
            "python3 -m pip install name",
            "apt install python-package always",
            "npm install"
          ],
          "correct": 1,
          "explanation": "python3 -m pip ensures you use the right Python."
        },
        {
          "q": "When would you use “Install Packages” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Install third-party libraries with pip.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Install third-party libraries with pip."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-39",
      "title": "8.7 Try...Except — Handle Errors Gracefully",
      "module": "Intermediate",
      "objective": "Catch exceptions so programs do not crash on bad input.",
      "why": "User types \"abc\" as price. Without try/except, the whole POS freezes. With it, you show a friendly error.",
      "explanation": "<p><strong>What you will learn.</strong> Catch exceptions so programs do not crash on bad input. By the end you should explain <em>Handle Errors Gracefully</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> User types \"abc\" as price. Without try/except, the whole POS freezes. With it, you show a friendly error. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Intermediate module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>try: risky code<br>\n  except ErrorType: handle<br>\n  else: if no error<br>\n  finally: always runs</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Catch exceptions so programs do not crash on bad input.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>raw = \"not-a-number\"</code> — stores or updates a value.</li><li><code>try:</code> — does a step in the overall recipe.</li><li><code>price = float(raw)</code> — stores or updates a value.</li><li><code>print(\"Price:\", price)</code> — shows output so you can verify the result.</li><li><code>except ValueError:</code> — does a step in the overall recipe.</li><li><code>print(\"Please enter a valid number\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Handle Errors Gracefully</em> solve?</li><li>Which line in the example most directly achieves: “Catch exceptions so programs do not crash on bad input.”?</li><li>If you change one value in <code>raw = \"not-a-number\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "raw = \"not-a-number\"\ntry:\n    price = float(raw)\n    print(\"Price:\", price)\nexcept ValueError:\n    print(\"Please enter a valid number\")\nfinally:\n    print(\"Ready for next input\")",
      "exercises": [
        {
          "title": "Safe divide",
          "instruction": "Write try/except that divides 100 by user-provided divisor; handle ZeroDivisionError and ValueError (use divisor=\"0\" then \"2\" as tests in comments).",
          "solution": "def safe_divide(a, b_text):\n    try:\n        b = float(b_text)\n        return a / b\n    except ValueError:\n        return \"Not a number\"\n    except ZeroDivisionError:\n        return \"Cannot divide by zero\"\n\nprint(safe_divide(100, \"0\"))\nprint(safe_divide(100, \"4\"))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Write try/except that divides 100 by user-provided divisor; handle ZeroDivisionError and ValueError (use divisor=\"0\" the. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Which block always runs?",
          "options": [
            "else",
            "except",
            "finally",
            "try only"
          ],
          "correct": 2,
          "explanation": "finally runs whether or not an error occurred."
        },
        {
          "q": "When would you use “Handle Errors Gracefully” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Catch exceptions so programs do not crash on bad input.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Catch exceptions so programs do not crash on bad input."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-40",
      "title": "8.8 String Formatting — Advanced Display",
      "module": "Intermediate",
      "objective": "Format numbers, alignment, and percentages for reports.",
      "why": "Financial reports need ₦1,250,000.00 not 1250000. Formatting builds trust.",
      "explanation": "<p><strong>What you will learn.</strong> Format numbers, alignment, and percentages for reports. By the end you should explain <em>Advanced Display</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Financial reports need ₦1,250,000.00 not 1250000. Formatting builds trust. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see — names, messages, receipts, SMS — is text, so string skills show up in every real app.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>f\"{value:,.2f}\", alignment <code>{name:>10}</code>, percent <code>{x:.1%}</code></p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Format numbers, alignment, and percentages for reports.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sales = 1250000.5</code> — stores or updates a value.</li><li><code>print(f\"Sales: ₦{sales:,.2f}\")</code> — shows output so you can verify the result.</li><li><code>print(f\"{'Item':&lt;12}{'Qty':&gt;6}\")</code> — shows output so you can verify the result.</li><li><code>print(f\"{'Rice':&lt;12}{10:&gt;6}\")</code> — shows output so you can verify the result.</li><li><code>rate = 0.155</code> — stores or updates a value.</li><li><code>print(f\"Growth: {rate:.1%}\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Advanced Display</em> solve?</li><li>Which line in the example most directly achieves: “Format numbers, alignment, and percentages for reports.”?</li><li>If you change one value in <code>sales = 1250000.5</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sales = 1250000.5\nprint(f\"Sales: ₦{sales:,.2f}\")\nprint(f\"{'Item':<12}{'Qty':>6}\")\nprint(f\"{'Rice':<12}{10:>6}\")\nrate = 0.155\nprint(f\"Growth: {rate:.1%}\")",
      "exercises": [
        {
          "title": "Table row",
          "instruction": "Print product \"Sugar\" left-aligned 15 chars and price 4500 as currency with 2 decimals.",
          "solution": "product = \"Sugar\"\nprice = 4500\nprint(f\"{product:<15}₦{price:,.2f}\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Print product \"Sugar\" left-aligned 15 chars and price 4500 as currency with 2 decimals. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "f\"{0.25:.0%}\" shows?",
          "options": [
            "0.25",
            "25%",
            "25.0",
            "1/4"
          ],
          "correct": 1,
          "explanation": "Percentage format multiplies by 100 and adds %."
        },
        {
          "q": "When would you use “Advanced Display” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Format numbers, alignment, and percentages for reports.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Format numbers, alignment, and percentages for reports."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Mismatched quotes and forgetting indexes start at 0 are the #1 string bugs.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-41",
      "title": "8.9 None — The Absence of a Value",
      "module": "Intermediate",
      "objective": "Use None correctly and check with is None.",
      "why": "Optional middle name, missing email, or “not yet calculated” — represent “nothing” with None.",
      "explanation": "<p><strong>What you will learn.</strong> Use None correctly and check with is None. By the end you should explain <em>The Absence of a Value</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Optional middle name, missing email, or “not yet calculated” — represent “nothing” with None. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Types describe what kind of value you have (text, number, true/false, nothing). Operations only make sense when the type matches — you cannot average a list of names the same way you average prices.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>None is a special singleton. Check with <code>is None</code> / <code>is not None</code> (not ==).</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use None correctly and check with is None.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>email = None</code> — stores or updates a value.</li><li><code>if email is None:</code> — branches based on a condition.</li><li><code>print(\"No email on file — ask customer\")</code> — shows output so you can verify the result.</li><li><code>else:</code> — branches based on a condition.</li><li><code>print(\"Send to\", email)</code> — shows output so you can verify the result.</li><li><code>def find_user(users, name):</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>The Absence of a Value</em> solve?</li><li>Which line in the example most directly achieves: “Use None correctly and check with is None.”?</li><li>If you change one value in <code>email = None</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "email = None\nif email is None:\n    print(\"No email on file — ask customer\")\nelse:\n    print(\"Send to\", email)\n\ndef find_user(users, name):\n    for u in users:\n        if u == name:\n            return u\n    return None  # not found\n\nprint(find_user([\"Ada\", \"Bola\"], \"Chidi\"))",
      "exercises": [
        {
          "title": "Default city",
          "instruction": "city = None. If None, use \"Lagos\". Print the city to use.",
          "solution": "city = None\ndisplay = \"Lagos\" if city is None else city\nprint(display)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: city = None. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Correct check for None?",
          "options": [
            "if x == None only always best",
            "if x is None",
            "if x equals null",
            "if none(x)"
          ],
          "correct": 1,
          "explanation": "PEP 8 recommends is None."
        },
        {
          "q": "When would you use “The Absence of a Value” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use None correctly and check with is None.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use None correctly and check with is None."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-42",
      "title": "8.10 User Input — input() for Interactive Programs",
      "module": "Intermediate",
      "objective": "Read user input and convert types safely.",
      "why": "CLI tools, quizzes, and simple POS menus all need input from humans.",
      "explanation": "<p><strong>What you will learn.</strong> Read user input and convert types safely. By the end you should explain <em>input() for Interactive Programs</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> CLI tools, quizzes, and simple POS menus all need input from humans. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> These building blocks show up constantly: calculate, generate, parse, validate, and package your environment so projects stay reproducible.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>input(prompt) always returns a string. Cast with int/float. Validate with try/except.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Read user input and convert types safely.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>name = \"Guest\"</code> — stores or updates a value.</li><li><code>age = 21</code> — stores or updates a value.</li><li><code>print(f\"Welcome {name}, age {age}\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>input() for Interactive Programs</em> solve?</li><li>Which line in the example most directly achieves: “Read user input and convert types safely.”?</li><li>If you change one value in <code>name = \"Guest\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# Interactive example (works in real terminal):\n# name = input(\"Your name: \")\n# age = int(input(\"Your age: \"))\n\n# Simulated for lesson:\nname = \"Guest\"\nage = 21\nprint(f\"Welcome {name}, age {age}\")",
      "exercises": [
        {
          "title": "Simulated checkout",
          "instruction": "Pretend inputs: item=\"Soap\", price_text=\"350\", qty_text=\"2\". Compute and print total.",
          "solution": "item = \"Soap\"\nprice = float(\"350\")\nqty = int(\"2\")\nprint(f\"{qty} x {item} = ₦{price * qty}\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Pretend inputs: item=\"Soap\", price_text=\"350\", qty_text=\"2\". Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "input() returns what type?",
          "options": [
            "int",
            "float",
            "str",
            "bool"
          ],
          "correct": 2,
          "explanation": "Always str — cast if you need numbers."
        },
        {
          "q": "When would you use “input() for Interactive Programs” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Read user input and convert types safely.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Read user input and convert types safely."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-43",
      "title": "8.11 VirtualEnv — Isolated Project Environments",
      "module": "Intermediate",
      "objective": "Create virtual environments so project packages do not clash.",
      "why": "Project A needs Django 4, Project B needs Django 5. Virtual envs keep them separate — like separate kitchens.",
      "explanation": "<p><strong>What you will learn.</strong> Create virtual environments so project packages do not clash. By the end you should explain <em>Isolated Project Environments</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Project A needs Django 4, Project B needs Django 5. Virtual envs keep them separate — like separate kitchens. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Libraries and modules save you from reinventing the wheel. You import proven tools, then focus on your business logic.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>python3 -m venv .venv<br>\n  source .venv/bin/activate  (Windows: .venv\\Scripts\\activate)<br>\n  pip install ...<br>\n  deactivate</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create virtual environments so project packages do not clash.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"Rule: one virtual environment per project\")</code> — shows output so you can verify the result.</li><li><code>print(\"Commit requirements.txt, not the whole .venv folder\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Isolated Project Environments</em> solve?</li><li>Which line in the example most directly achieves: “Create virtual environments so project packages do not clash.”?</li><li>If you change one value in <code>print(\"Rule: one virtual environment per project\")</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# Commands (shell, not Python):\n# python3 -m venv .venv\n# source .venv/bin/activate\n# python -m pip install requests\n# deactivate\n\nprint(\"Rule: one virtual environment per project\")\nprint(\"Commit requirements.txt, not the whole .venv folder\")",
      "exercises": [
        {
          "title": "Remember the steps",
          "instruction": "Print a numbered checklist of: create venv, activate, install packages, freeze requirements.",
          "solution": "steps = [\n    \"1. python3 -m venv .venv\",\n    \"2. source .venv/bin/activate\",\n    \"3. pip install <packages>\",\n    \"4. pip freeze > requirements.txt\",\n]\nfor s in steps:\n    print(s)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Print a numbered checklist of: create venv, activate, install packages, freeze requirements. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Why use virtual environments?",
          "options": [
            "Make Python faster always",
            "Isolate dependencies per project",
            "Replace pip",
            "Only for Windows"
          ],
          "correct": 1,
          "explanation": "Isolation avoids version conflicts between projects."
        },
        {
          "q": "When would you use “Isolated Project Environments” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create virtual environments so project packages do not clash.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create virtual environments so project packages do not clash."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-44",
      "title": "9.1 OOP Intro — Modeling the Real World",
      "module": "OOP",
      "objective": "Explain objects, classes, and why OOP helps large programs.",
      "why": "A bank app has Accounts, Customers, Transactions — OOP models real things as objects with data + behavior.",
      "explanation": "<p><strong>What you will learn.</strong> Explain objects, classes, and why OOP helps large programs. By the end you should explain <em>Modeling the Real World</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> A bank app has Accounts, Customers, Transactions — OOP models real things as objects with data + behavior. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><strong>Class</strong> = blueprint. <strong>Object</strong> = instance built from the blueprint.<br>\n  Benefits: organization, reuse (inheritance), encapsulation.<p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Explain objects, classes, and why OOP helps large programs.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class Dog:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>pass</code> — does a step in the overall recipe.</li><li><code>a = Dog()</code> — stores or updates a value.</li><li><code>b = Dog()</code> — stores or updates a value.</li><li><code>print(type(a))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Modeling the Real World</em> solve?</li><li>Which line in the example most directly achieves: “Explain objects, classes, and why OOP helps large programs.”?</li><li>If you change one value in <code>class Dog:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# Blueprint\nclass Dog:\n    pass\n\n# Objects (instances)\na = Dog()\nb = Dog()\nprint(type(a))",
      "exercises": [
        {
          "title": "Name three objects",
          "instruction": "Print 3 real-world things you could model as classes for a school system.",
          "solution": "print(\"Student\")\nprint(\"Course\")\nprint(\"Teacher\")\n# or Classroom, Grade, Attendance",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Print 3 real-world things you could model as classes for a school system. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "A class is best described as a:",
          "options": [
            "Running program",
            "Blueprint for objects",
            "Database only",
            "Loop"
          ],
          "correct": 1,
          "explanation": "Classes describe structure and behavior; objects are concrete instances."
        },
        {
          "q": "When would you use “Modeling the Real World” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Explain objects, classes, and why OOP helps large programs.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Explain objects, classes, and why OOP helps large programs."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-45",
      "title": "9.2 Classes & Objects — Build Your First Class",
      "module": "OOP",
      "objective": "Define a class and create objects with attributes.",
      "why": "A Product class can represent every item in your inventory with the same structure.",
      "explanation": "<p><strong>What you will learn.</strong> Define a class and create objects with attributes. By the end you should explain <em>Build Your First Class</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> A Product class can represent every item in your inventory with the same structure. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>class Name: body. Attach data as attributes on self.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Define a class and create objects with attributes.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class Product:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>pass</code> — does a step in the overall recipe.</li><li><code>p = Product()</code> — stores or updates a value.</li><li><code>p.name = \"Peak Milk\"</code> — stores or updates a value.</li><li><code>p.price = 1800</code> — stores or updates a value.</li><li><code>print(p.name, p.price)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Build Your First Class</em> solve?</li><li>Which line in the example most directly achieves: “Define a class and create objects with attributes.”?</li><li>If you change one value in <code>class Product:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class Product:\n    pass\n\np = Product()\np.name = \"Peak Milk\"\np.price = 1800\nprint(p.name, p.price)",
      "exercises": [
        {
          "title": "Student object",
          "instruction": "Create a Student class, instance with name and score attributes, print them.",
          "solution": "class Student:\n    pass\n\ns = Student()\ns.name = \"Yusuf\"\ns.score = 77\nprint(s.name, s.score)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Create a Student class, instance with name and score attributes, print them. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Classes & Objects — Build Your First Class”?",
          "options": [
            "Define a class and create objects with attributes.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Build Your First Class” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Define a class and create objects with attributes.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Define a class and create objects with attributes."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-46",
      "title": "9.3 __init__ Method — Constructors",
      "module": "OOP",
      "objective": "Initialize object state with __init__.",
      "why": "When a new bank account opens, it must start with owner name and balance — __init__ sets that up automatically.",
      "explanation": "<p><strong>What you will learn.</strong> Initialize object state with __init__. By the end you should explain <em>Constructors</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> When a new bank account opens, it must start with owner name and balance — __init__ sets that up automatically. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>__init__ runs on object creation. First parameter is always self.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Initialize object state with __init__.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class BankAccount:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self, owner, balance=0):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.owner = owner</code> — stores or updates a value.</li><li><code>self.balance = balance</code> — stores or updates a value.</li><li><code>acc = BankAccount(\"Ngozi\", 5000)</code> — stores or updates a value.</li><li><code>print(acc.owner, acc.balance)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Constructors</em> solve?</li><li>Which line in the example most directly achieves: “Initialize object state with __init__.”?</li><li>If you change one value in <code>class BankAccount:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\nacc = BankAccount(\"Ngozi\", 5000)\nprint(acc.owner, acc.balance)",
      "exercises": [
        {
          "title": "Book class",
          "instruction": "Class Book with __init__(self, title, author). Create one book and print title by author.",
          "solution": "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n\nb = Book(\"Things Fall Apart\", \"Chinua Achebe\")\nprint(f\"{b.title} by {b.author}\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Class Book with __init__(self, title, author). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "__init__ is called when:",
          "options": [
            "Object is deleted",
            "Object is created",
            "Program ends",
            "Import fails"
          ],
          "correct": 1,
          "explanation": "It initializes a new instance."
        },
        {
          "q": "When would you use “Constructors” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Initialize object state with __init__.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Initialize object state with __init__."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-47",
      "title": "9.4 self Parameter — The Object Itself",
      "module": "OOP",
      "objective": "Understand why methods take self and how it works.",
      "why": "self is “this account” or “this product” — the specific object you are working with.",
      "explanation": "<p><strong>What you will learn.</strong> Understand why methods take self and how it works. By the end you should explain <em>The Object Itself</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> self is “this account” or “this product” — the specific object you are working with. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>self is the instance. You do not pass it manually: Python injects it.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Understand why methods take self and how it works.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class Counter:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.value = 0</code> — stores or updates a value.</li><li><code>def bump(self):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.value += 1</code> — stores or updates a value.</li><li><code>c = Counter()</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>The Object Itself</em> solve?</li><li>Which line in the example most directly achieves: “Understand why methods take self and how it works.”?</li><li>If you change one value in <code>class Counter:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class Counter:\n    def __init__(self):\n        self.value = 0\n    def bump(self):\n        self.value += 1\n\nc = Counter()\nc.bump()\nc.bump()\nprint(c.value)  # 2",
      "exercises": [
        {
          "title": "Greeter",
          "instruction": "Class Greeter with __init__(self, name) and method hello(self) printing Hello, name.",
          "solution": "class Greeter:\n    def __init__(self, name):\n        self.name = name\n    def hello(self):\n        print(f\"Hello, {self.name}\")\n\nGreeter(\"Amaka\").hello()",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Class Greeter with __init__(self, name) and method hello(self) printing Hello, name. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Who passes self into methods?",
          "options": [
            "You always type it at call site",
            "Python automatically",
            "The OS",
            "pip"
          ],
          "correct": 1,
          "explanation": "Python passes the instance as self automatically."
        },
        {
          "q": "When would you use “The Object Itself” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Understand why methods take self and how it works.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Understand why methods take self and how it works."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-48",
      "title": "9.5 Class Properties — Attributes & Encapsulation Basics",
      "module": "OOP",
      "objective": "Use instance attributes and simple property-style access.",
      "why": "Hide internal details (like PIN hash) while exposing safe data (account name).",
      "explanation": "<p><strong>What you will learn.</strong> Use instance attributes and simple property-style access. By the end you should explain <em>Attributes &amp; Encapsulation Basics</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Hide internal details (like PIN hash) while exposing safe data (account name). Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Attributes store state. Convention: <code>_internal</code> means “please don’t touch”. properties can add getters/setters.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use instance attributes and simple property-style access.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class Employee:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self, name, salary):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.name = name</code> — stores or updates a value.</li><li><code>self._salary = salary  # \"protected\" by convention</code> — stores or updates a value.</li><li><code>@property</code> — does a step in the overall recipe.</li><li><code>def salary(self):</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Attributes &amp; Encapsulation Basics</em> solve?</li><li>Which line in the example most directly achieves: “Use instance attributes and simple property-style access.”?</li><li>If you change one value in <code>class Employee:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self._salary = salary  # \"protected\" by convention\n\n    @property\n    def salary(self):\n        return self._salary\n\ne = Employee(\"Tola\", 150000)\nprint(e.name, e.salary)",
      "exercises": [
        {
          "title": "Temperature",
          "instruction": "Class with _celsius. Property celsius returns it. Create Temp(36.5) and print.",
          "solution": "class Temp:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    @property\n    def celsius(self):\n        return self._celsius\n\nprint(Temp(36.5).celsius)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Class with _celsius. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Class Properties — Attributes & Encapsulation Basics”?",
          "options": [
            "Use instance attributes and simple property-style access.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Attributes & Encapsulation Basics” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use instance attributes and simple property-style access.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use instance attributes and simple property-style access."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-49",
      "title": "9.6 Class Methods — Behavior on Objects",
      "module": "OOP",
      "objective": "Write instance methods that use and update object state.",
      "why": "deposit() and withdraw() on a bank account are methods — actions the object can perform.",
      "explanation": "<p><strong>What you will learn.</strong> Write instance methods that use and update object state. By the end you should explain <em>Behavior on Objects</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> deposit() and withdraw() on a bank account are methods — actions the object can perform. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>def method(self, ...): updates self...</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Write instance methods that use and update object state.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class Cart:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.items = []</code> — stores or updates a value.</li><li><code>def add(self, name, price):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.items.append({\"name\": name, \"price\": price})</code> — changes a collection.</li><li><code>def total(self):</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Behavior on Objects</em> solve?</li><li>Which line in the example most directly achieves: “Write instance methods that use and update object state.”?</li><li>If you change one value in <code>class Cart:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class Cart:\n    def __init__(self):\n        self.items = []\n    def add(self, name, price):\n        self.items.append({\"name\": name, \"price\": price})\n    def total(self):\n        return sum(i[\"price\"] for i in self.items)\n\nc = Cart()\nc.add(\"Bread\", 800)\nc.add(\"Eggs\", 1500)\nprint(c.total())",
      "exercises": [
        {
          "title": "Wallet",
          "instruction": "Class Wallet with balance, methods credit(amount) and debit(amount). Demo both.",
          "solution": "class Wallet:\n    def __init__(self, balance=0):\n        self.balance = balance\n    def credit(self, amount):\n        self.balance += amount\n    def debit(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n        else:\n            print(\"Insufficient\")\n\nw = Wallet(1000)\nw.credit(500)\nw.debit(200)\nprint(w.balance)  # 1300",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Class Wallet with balance, methods credit(amount) and debit(amount). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Class Methods — Behavior on Objects”?",
          "options": [
            "Write instance methods that use and update object state.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Behavior on Objects” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Write instance methods that use and update object state.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Write instance methods that use and update object state."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-50",
      "title": "9.7 Inheritance — Reuse Through Hierarchy",
      "module": "OOP",
      "objective": "Create child classes that extend parent classes.",
      "why": "SavingsAccount and CurrentAccount both inherit from Account — share code, specialize behavior.",
      "explanation": "<p><strong>What you will learn.</strong> Create child classes that extend parent classes. By the end you should explain <em>Reuse Through Hierarchy</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> SavingsAccount and CurrentAccount both inherit from Account — share code, specialize behavior. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>class Child(Parent): ... use super().__init__()</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create child classes that extend parent classes.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>13</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class Account:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self, owner, balance=0):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.owner = owner</code> — stores or updates a value.</li><li><code>self.balance = balance</code> — stores or updates a value.</li><li><code>def deposit(self, amount):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.balance += amount</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Reuse Through Hierarchy</em> solve?</li><li>Which line in the example most directly achieves: “Create child classes that extend parent classes.”?</li><li>If you change one value in <code>class Account:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n    def deposit(self, amount):\n        self.balance += amount\n\nclass SavingsAccount(Account):\n    def add_interest(self, rate=0.05):\n        self.balance += self.balance * rate\n\ns = SavingsAccount(\"Uche\", 10000)\ns.deposit(2000)\ns.add_interest()\nprint(s.balance)",
      "exercises": [
        {
          "title": "Animal → Dog",
          "instruction": "Animal has speak() returning \"...\". Dog inherits and overrides speak to \"Woof\". Print Dog().speak().",
          "solution": "class Animal:\n    def speak(self):\n        return \"...\"\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof\"\nprint(Dog().speak())",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Animal has speak() returning \". Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "super() is used to:",
          "options": [
            "Delete parent",
            "Call parent methods/init",
            "Install packages",
            "Stop inheritance"
          ],
          "correct": 1,
          "explanation": "super() accesses the parent class implementation."
        },
        {
          "q": "When would you use “Reuse Through Hierarchy” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create child classes that extend parent classes.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create child classes that extend parent classes."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-51",
      "title": "9.8 Polymorphism — One Interface, Many Forms",
      "module": "OOP",
      "objective": "Call the same method on different objects to get type-specific behavior.",
      "why": "notify(user) might SMS, email, or push — same call shape, different classes.",
      "explanation": "<p><strong>What you will learn.</strong> Call the same method on different objects to get type-specific behavior. By the end you should explain <em>One Interface, Many Forms</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> notify(user) might SMS, email, or push — same call shape, different classes. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Different classes implement the same method name; code using them does not care which type.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Call the same method on different objects to get type-specific behavior.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class SMS:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def send(self, msg):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>print(\"SMS:\", msg)</code> — shows output so you can verify the result.</li><li><code>class Email:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def send(self, msg):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>print(\"Email:\", msg)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>One Interface, Many Forms</em> solve?</li><li>Which line in the example most directly achieves: “Call the same method on different objects to get type-specific behavior.”?</li><li>If you change one value in <code>class SMS:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class SMS:\n    def send(self, msg):\n        print(\"SMS:\", msg)\nclass Email:\n    def send(self, msg):\n        print(\"Email:\", msg)\n\ndef notify(channel, msg):\n    channel.send(msg)\n\nnotify(SMS(), \"OTP 4455\")\nnotify(Email(), \"Welcome!\")",
      "exercises": [
        {
          "title": "Shapes area",
          "instruction": "Classes Square(side) and Circle(r) both have area(). Print both areas. (use 3.14 for pi)",
          "solution": "class Square:\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        return self.side ** 2\nclass Circle:\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return 3.14 * self.r ** 2\nfor shape in (Square(4), Circle(3)):\n    print(shape.area())",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Classes Square(side) and Circle(r) both have area(). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Polymorphism — One Interface, Many Forms”?",
          "options": [
            "Call the same method on different objects to get type-specific behavior.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “One Interface, Many Forms” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Call the same method on different objects to get type-specific behavior.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Call the same method on different objects to get type-specific behavior."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-52",
      "title": "9.9 Encapsulation — Protect Internal State",
      "module": "OOP",
      "objective": "Hide internal details and expose safe methods.",
      "why": "Customers should not set balance = 1_000_000 directly — only deposit/withdraw with rules.",
      "explanation": "<p><strong>What you will learn.</strong> Hide internal details and expose safe methods. By the end you should explain <em>Protect Internal State</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Customers should not set balance = 1_000_000 directly — only deposit/withdraw with rules. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Use _protected / __private naming and public methods for controlled access.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Hide internal details and expose safe methods.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>14</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class Vault:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.__pin = \"1234\"</code> — stores or updates a value.</li><li><code>self.__balance = 0</code> — stores or updates a value.</li><li><code>def deposit(self, amount, pin):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if pin == self.__pin and amount &gt; 0:</code> — branches based on a condition.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Protect Internal State</em> solve?</li><li>Which line in the example most directly achieves: “Hide internal details and expose safe methods.”?</li><li>If you change one value in <code>class Vault:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class Vault:\n    def __init__(self):\n        self.__pin = \"1234\"\n        self.__balance = 0\n    def deposit(self, amount, pin):\n        if pin == self.__pin and amount > 0:\n            self.__balance += amount\n    def get_balance(self, pin):\n        if pin == self.__pin:\n            return self.__balance\n        return None\n\nv = Vault()\nv.deposit(5000, \"1234\")\nprint(v.get_balance(\"1234\"))",
      "exercises": [
        {
          "title": "Why encapsulation?",
          "instruction": "Print two sentences: one risk of public balance attribute, one benefit of deposit() method.",
          "solution": "print(\"Risk: anyone could set balance to any number\")\nprint(\"Benefit: deposit() can validate amount and log the transaction\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Print two sentences: one risk of public balance attribute, one benefit of deposit() method. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Encapsulation — Protect Internal State”?",
          "options": [
            "Hide internal details and expose safe methods.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Protect Internal State” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Hide internal details and expose safe methods.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Hide internal details and expose safe methods."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-53",
      "title": "9.10 Inner Classes — Classes Inside Classes",
      "module": "OOP",
      "objective": "Define nested classes when a helper type belongs only to one outer class.",
      "why": "A Car might have an Engine class only meaningful inside Car — nested classes keep code tidy.",
      "explanation": "<p><strong>What you will learn.</strong> Define nested classes when a helper type belongs only to one outer class. By the end you should explain <em>Classes Inside Classes</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> A Car might have an Engine class only meaningful inside Car — nested classes keep code tidy. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Define nested classes when a helper type belongs only to one outer class.</p><p>This lesson focuses on <strong>Classes Inside Classes</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Define nested classes when a helper type belongs only to one outer class.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class University:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self, name):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.name = name</code> — stores or updates a value.</li><li><code>class Department:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self, title):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.title = title</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Classes Inside Classes</em> solve?</li><li>Which line in the example most directly achieves: “Define nested classes when a helper type belongs only to one outer class.”?</li><li>If you change one value in <code>class University:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class University:\n    def __init__(self, name):\n        self.name = name\n    class Department:\n        def __init__(self, title):\n            self.title = title\n\nuni = University(\"Unilag\")\ncs = University.Department(\"Computer Science\")\nprint(uni.name, cs.title)",
      "exercises": [
        {
          "title": "House.Room",
          "instruction": "Create House with nested Room(name). Instantiate a Kitchen room and print its name.",
          "solution": "class House:\n    class Room:\n        def __init__(self, name):\n            self.name = name\nkitchen = House.Room(\"Kitchen\")\nprint(kitchen.name)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Create House with nested Room(name). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Inner Classes — Classes Inside Classes”?",
          "options": [
            "Define nested classes when a helper type belongs only to one outer class.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Classes Inside Classes” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Define nested classes when a helper type belongs only to one outer class.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Define nested classes when a helper type belongs only to one outer class."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-54",
      "title": "10.1 File Handling Intro",
      "module": "File Handling",
      "objective": "Understand file modes and the with statement.",
      "why": "Sales logs, customer exports, and config files live on disk — programs must read/write them safely.",
      "explanation": "<p><strong>What you will learn.</strong> Understand file modes and the with statement. By the end you should explain <em>File Handling Intro</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Sales logs, customer exports, and config files live on disk — programs must read/write them safely. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Files are how programs remember data after they close. Reading loads data in; writing saves results out — for reports, logs, and backups.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Modes: r read, w write (overwrite), a append, x create, b binary, + update.<br>\n  Prefer <code>with open(...) as f:</code> so files always close.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Understand file modes and the with statement.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"Always prefer with-open to auto-close files\")</code> — shows output so you can verify the result.</li><li><code>print(\"Modes: r, w, a, x, b, +\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>File Handling Intro</em> solve?</li><li>Which line in the example most directly achieves: “Understand file modes and the with statement.”?</li><li>If you change one value in <code>print(\"Always prefer with-open to auto-close files\")</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong file path is a classic crash. Confirm the file exists and print the path you are using.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# Pattern\n# with open(\"sales.txt\", \"w\") as f:\n#     f.write(\"day1,10000\\n\")\n\nprint(\"Always prefer with-open to auto-close files\")\nprint(\"Modes: r, w, a, x, b, +\")",
      "exercises": [
        {
          "title": "Mode quiz in code",
          "instruction": "Print which mode you use to add lines to an existing log without erasing it.",
          "solution": "print(\"a  # append mode\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Print which mode you use to add lines to an existing log without erasing it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Which mode appends without wiping the file?",
          "options": [
            "w",
            "r",
            "a",
            "x"
          ],
          "correct": 2,
          "explanation": "a = append."
        },
        {
          "q": "When would you use “File Handling Intro” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Understand file modes and the with statement.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Understand file modes and the with statement."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Wrong file path is a classic crash. Confirm the file exists and print the path you are using.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-55",
      "title": "10.2 Read Files — load Data from Disk",
      "module": "File Handling",
      "objective": "Read whole files, lines, and iterate efficiently.",
      "why": "Import yesterday’s CSV sales export and analyze it.",
      "explanation": "<p><strong>What you will learn.</strong> Read whole files, lines, and iterate efficiently. By the end you should explain <em>load Data from Disk</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Import yesterday’s CSV sales export and analyze it. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Files are how programs remember data after they close. Reading loads data in; writing saves results out — for reports, logs, and backups.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>read(), readline(), readlines(), or for line in f:</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Read whole files, lines, and iterate efficiently.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sample = \"Rice,10\\nBeans,5\\n\"</code> — stores or updates a value.</li><li><code>for line in sample.splitlines():</code> — repeats work over items or until a condition ends.</li><li><code>item, qty = line.split(\",\")</code> — stores or updates a value.</li><li><code>print(item, \"→\", qty)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>load Data from Disk</em> solve?</li><li>Which line in the example most directly achieves: “Read whole files, lines, and iterate efficiently.”?</li><li>If you change one value in <code>sample = \"Rice,10\\nBeans,5\\n\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong file path is a classic crash. Confirm the file exists and print the path you are using.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# with open(\"note.txt\", \"r\") as f:\n#     content = f.read()\n# with open(\"note.txt\") as f:\n#     for line in f:\n#         print(line.strip())\n\n# Demo without real file:\nsample = \"Rice,10\\nBeans,5\\n\"\nfor line in sample.splitlines():\n    item, qty = line.split(\",\")\n    print(item, \"→\", qty)",
      "exercises": [
        {
          "title": "Parse sample log",
          "instruction": "data = \"Mon,100\\nTue,150\". Split lines and print each day total.",
          "solution": "data = \"Mon,100\\nTue,150\"\nfor line in data.splitlines():\n    day, total = line.split(\",\")\n    print(day, total)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: data = \"Mon,100\\nTue,150\". Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Read Files — load Data from Disk”?",
          "options": [
            "Read whole files, lines, and iterate efficiently.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “load Data from Disk” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Read whole files, lines, and iterate efficiently.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Read whole files, lines, and iterate efficiently."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Wrong file path is a classic crash. Confirm the file exists and print the path you are using.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-56",
      "title": "10.3 Write & Create Files",
      "module": "File Handling",
      "objective": "Create files and write text reports.",
      "why": "Generate a daily sales report file you can email or backup.",
      "explanation": "<p><strong>What you will learn.</strong> Create files and write text reports. By the end you should explain <em>Write &amp; Create Files</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Generate a daily sales report file you can email or backup. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Files are how programs remember data after they close. Reading loads data in; writing saves results out — for reports, logs, and backups.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>write() and writelines(). w creates/overwrites; a appends.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create files and write text reports.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>lines = [\"Daily Sales Report\\n\", \"Total: 45000\\n\"]</code> — stores or updates a value.</li><li><code>print(\"\".join(lines))</code> — shows output so you can verify the result.</li><li><code>print(\"(In real code, write these lines into report.txt)\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Write &amp; Create Files</em> solve?</li><li>Which line in the example most directly achieves: “Create files and write text reports.”?</li><li>If you change one value in <code>lines = [\"Daily Sales Report\\n\", \"Total: 45000\\n\"]</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong file path is a classic crash. Confirm the file exists and print the path you are using.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# with open(\"report.txt\", \"w\") as f:\n#     f.write(\"Daily Sales Report\\n\")\n#     f.write(\"Total: 45000\\n\")\n\nlines = [\"Daily Sales Report\\n\", \"Total: 45000\\n\"]\nprint(\"\".join(lines))\nprint(\"(In real code, write these lines into report.txt)\")",
      "exercises": [
        {
          "title": "Build report string",
          "instruction": "Create a multi-line report for shop \"GoodFood\" with total 88000 and print it (simulate file content).",
          "solution": "report = \"\"\"Shop: GoodFood\nTotal sales: ₦88000\nStatus: CLOSED OUT\n\"\"\"\nprint(report)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Create a multi-line report for shop \"GoodFood\" with total 88000 and print it (simulate file content). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Write & Create Files”?",
          "options": [
            "Create files and write text reports.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Write & Create Files” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create files and write text reports.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create files and write text reports."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Wrong file path is a classic crash. Confirm the file exists and print the path you are using.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-57",
      "title": "10.4 Delete Files — os.remove",
      "module": "File Handling",
      "objective": "Delete files safely with os and check existence first.",
      "why": "Clean up temp exports so disks do not fill with stale reports.",
      "explanation": "<p><strong>What you will learn.</strong> Delete files safely with os and check existence first. By the end you should explain <em>os.remove</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Clean up temp exports so disks do not fill with stale reports. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Files are how programs remember data after they close. Reading loads data in; writing saves results out — for reports, logs, and backups.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>import os<br>\n  os.path.exists(path)<br>\n  os.remove(path)</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Delete files safely with os and check existence first.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import os</code> — sets up a name, type, import, or definition you will use next.</li><li><code>path = \"temp_report.txt\"</code> — stores or updates a value.</li><li><code>print(\"Always check exists() before remove()\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>os.remove</em> solve?</li><li>Which line in the example most directly achieves: “Delete files safely with os and check existence first.”?</li><li>If you change one value in <code>import os</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong file path is a classic crash. Confirm the file exists and print the path you are using.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import os\npath = \"temp_report.txt\"\n# if os.path.exists(path):\n#     os.remove(path)\n#     print(\"Deleted\")\n# else:\n#     print(\"Nothing to delete\")\nprint(\"Always check exists() before remove()\")",
      "exercises": [
        {
          "title": "Safe delete helper",
          "instruction": "Write a function safe_delete(path) that prints Deleted or Missing (use os.path.exists logic; you may simulate with a variable exists=False).",
          "solution": "def safe_delete(path, exists=False):\n    if exists:\n        print(\"Deleted\", path)\n    else:\n        print(\"Missing\", path)\n\nsafe_delete(\"old.csv\", exists=False)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Write a function safe_delete(path) that prints Deleted or Missing (use os. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Delete Files — os.remove”?",
          "options": [
            "Delete files safely with os and check existence first.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “os.remove” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Delete files safely with os and check existence first.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Delete files safely with os and check existence first."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Wrong file path is a classic crash. Confirm the file exists and print the path you are using.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-mp-02",
      "title": "10.5 Mini Project — Daily Sales Log",
      "module": "File Handling",
      "path": "beginner",
      "project": true,
      "objective": "Append sales lines and compute a total from text data.",
      "why": "Shops close the day by totaling a log file — automation saves hours.",
      "explanation": "<p><strong>What you will learn.</strong> Append sales lines and compute a total from text data. By the end you should explain <em>Daily Sales Log</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Shops close the day by totaling a log file — automation saves hours. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Simulate a log with multiple lines \"item,amount\". Parse, sum amounts, and print a report. In real life you write to sales.txt with open(..., \"a\").</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Append sales lines and compute a total from text data.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>log = \"\"\"rice,45000</code> — stores or updates a value.</li><li><code>beans,9000</code> — does a step in the overall recipe.</li><li><code>oil,12000\"\"\"</code> — does a step in the overall recipe.</li><li><code>total = 0</code> — stores or updates a value.</li><li><code>for line in log.splitlines():</code> — repeats work over items or until a condition ends.</li><li><code>item, amount = line.split(\",\")</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Daily Sales Log</em> solve?</li><li>Which line in the example most directly achieves: “Append sales lines and compute a total from text data.”?</li><li>If you change one value in <code>log = \"\"\"rice,45000</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong file path is a classic crash. Confirm the file exists and print the path you are using.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "log = \"\"\"rice,45000\nbeans,9000\noil,12000\"\"\"\n\ntotal = 0\nfor line in log.splitlines():\n    item, amount = line.split(\",\")\n    total += float(amount)\n    print(f\"- {item}: ₦{float(amount):,.0f}\")\nprint(f\"TOTAL: ₦{total:,.0f}\")",
      "pitfalls": "Wrong file path is a classic crash. Confirm the file exists and print the path you are using.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "exercises": [
        {
          "title": "Count lines",
          "instruction": "Print how many sales entries are in the log.",
          "hint": "splitlines length",
          "level": "easy",
          "solution": "log = \"rice,45000\\nbeans,9000\\noil,12000\"\nprint(len(log.splitlines()))"
        },
        {
          "title": "Filter big sales",
          "instruction": "Print only items with amount >= 10000.",
          "hint": "if float(amount) >= 10000",
          "level": "medium",
          "solution": "log = \"rice,45000\\nbeans,9000\\noil,12000\"\nfor line in log.splitlines():\n    item, amount = line.split(\",\")\n    if float(amount) >= 10000:\n        print(item, amount)"
        }
      ],
      "quiz": [
        {
          "q": "Append mode for files is?",
          "options": [
            "w",
            "a",
            "r",
            "x only"
          ],
          "correct": 1,
          "explanation": "a appends without wiping."
        }
      ]
    },
    {
      "id": "py-58",
      "title": "11.1 NumPy — Fast Numerical Arrays",
      "module": "Data Libraries",
      "objective": "Create NumPy arrays and compute basic statistics.",
      "why": "Analyze thousands of sensor readings or prices in milliseconds — NumPy is the foundation of data science.",
      "explanation": "<p><strong>What you will learn.</strong> Create NumPy arrays and compute basic statistics. By the end you should explain <em>Fast Numerical Arrays</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Analyze thousands of sensor readings or prices in milliseconds — NumPy is the foundation of data science. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>import numpy as np<br>\n  Arrays are faster than lists for numeric work. Vectorized ops apply to whole arrays.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create NumPy arrays and compute basic statistics.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>sales = np.array([12000, 15000, 9000, 18000, 11000])</code> — stores or updates a value.</li><li><code>print(sales.mean())</code> — shows output so you can verify the result.</li><li><code>print(sales.max(), sales.min())</code> — shows output so you can verify the result.</li><li><code>print(sales * 1.1)  # 10% boost all days</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Fast Numerical Arrays</em> solve?</li><li>Which line in the example most directly achieves: “Create NumPy arrays and compute basic statistics.”?</li><li>If you change one value in <code>import numpy as np</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import numpy as np\nsales = np.array([12000, 15000, 9000, 18000, 11000])\nprint(sales.mean())\nprint(sales.max(), sales.min())\nprint(sales * 1.1)  # 10% boost all days",
      "exercises": [
        {
          "title": "Weekly average",
          "instruction": "np.array of 7 daily customers counts. Print mean and sum.",
          "solution": "import numpy as np\ncustomers = np.array([40, 55, 38, 60, 72, 90, 85])\nprint(\"Average:\", customers.mean())\nprint(\"Total:\", customers.sum())",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: np. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "NumPy main data structure?",
          "options": [
            "DataFrame",
            "ndarray",
            "Series",
            "list only"
          ],
          "correct": 1,
          "explanation": "ndarray is the core NumPy array type."
        },
        {
          "q": "When would you use “Fast Numerical Arrays” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create NumPy arrays and compute basic statistics.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create NumPy arrays and compute basic statistics."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-59",
      "title": "11.2 Pandas — Tables for Real Data",
      "module": "Data Libraries",
      "objective": "Use DataFrames to load, filter, and summarize tabular data.",
      "why": "Excel sales sheets become superpowered with Pandas — filter Lagos rows, group by product, export CSV.",
      "explanation": "<p><strong>What you will learn.</strong> Use DataFrames to load, filter, and summarize tabular data. By the end you should explain <em>Tables for Real Data</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Excel sales sheets become superpowered with Pandas — filter Lagos rows, group by product, export CSV. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> HTML describes structure and meaning (headings, forms, landmarks, links). Clear structure helps browsers, screen readers, and search engines.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>import pandas as pd<br>\n  DataFrame = table. Series = column.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use DataFrames to load, filter, and summarize tabular data.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import pandas as pd</code> — sets up a name, type, import, or definition you will use next.</li><li><code>df = pd.DataFrame({</code> — stores or updates a value.</li><li><code>\"product\": [\"Rice\", \"Beans\", \"Rice\"],</code> — does a step in the overall recipe.</li><li><code>\"qty\": [10, 5, 7],</code> — does a step in the overall recipe.</li><li><code>\"city\": [\"Lagos\", \"Abuja\", \"Lagos\"]</code> — does a step in the overall recipe.</li><li><code>})</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Tables for Real Data</em> solve?</li><li>Which line in the example most directly achieves: “Use DataFrames to load, filter, and summarize tabular data.”?</li><li>If you change one value in <code>import pandas as pd</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import pandas as pd\ndf = pd.DataFrame({\n    \"product\": [\"Rice\", \"Beans\", \"Rice\"],\n    \"qty\": [10, 5, 7],\n    \"city\": [\"Lagos\", \"Abuja\", \"Lagos\"]\n})\nprint(df)\nprint(df[df[\"city\"] == \"Lagos\"])\nprint(df.groupby(\"product\")[\"qty\"].sum())",
      "exercises": [
        {
          "title": "Filter high qty",
          "instruction": "From a small DataFrame of products/qty, print rows where qty >= 10.",
          "solution": "import pandas as pd\ndf = pd.DataFrame({\"product\": [\"A\", \"B\", \"C\"], \"qty\": [12, 4, 20]})\nprint(df[df[\"qty\"] >= 10])",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: From a small DataFrame of products/qty, print rows where qty >= 10. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "pd.read_csv is used to:",
          "options": [
            "Train AI only",
            "Load CSV into a DataFrame",
            "Delete files",
            "Draw charts only"
          ],
          "correct": 1,
          "explanation": "read_csv loads tabular CSV data."
        },
        {
          "q": "When would you use “Tables for Real Data” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use DataFrames to load, filter, and summarize tabular data.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use DataFrames to load, filter, and summarize tabular data."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-60",
      "title": "11.3 SciPy — Scientific Computing Toolkit",
      "module": "Data Libraries",
      "objective": "Know when to use SciPy for stats, optimization, and signal tools.",
      "why": "Engineers and researchers use SciPy for advanced math on top of NumPy.",
      "explanation": "<p><strong>What you will learn.</strong> Know when to use SciPy for stats, optimization, and signal tools. By the end you should explain <em>Scientific Computing Toolkit</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Engineers and researchers use SciPy for advanced math on top of NumPy. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Data Libraries module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>import scipy<br>\n  Subpackages: scipy.stats, optimize, integrate, signal, ...</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Know when to use SciPy for stats, optimization, and signal tools.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from scipy import stats</code> — sets up a name, type, import, or definition you will use next.</li><li><code>data = [12, 15, 14, 10, 18, 15, 13]</code> — stores or updates a value.</li><li><code>print(\"Describe:\", stats.describe(data))</code> — shows output so you can verify the result.</li><li><code>print(\"Mode:\", stats.mode(data, keepdims=True))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Scientific Computing Toolkit</em> solve?</li><li>Which line in the example most directly achieves: “Know when to use SciPy for stats, optimization, and signal tools.”?</li><li>If you change one value in <code>from scipy import stats</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from scipy import stats\ndata = [12, 15, 14, 10, 18, 15, 13]\nprint(\"Describe:\", stats.describe(data))\nprint(\"Mode:\", stats.mode(data, keepdims=True))",
      "exercises": [
        {
          "title": "Quick stat",
          "instruction": "Using scipy.stats or pure Python, print mean of [2,4,6,8].",
          "solution": "import numpy as np\nprint(np.mean([2, 4, 6, 8]))  # 5.0\n# or from scipy import stats; stats.tmean([2,4,6,8])",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Using scipy. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “SciPy — Scientific Computing Toolkit”?",
          "options": [
            "Know when to use SciPy for stats, optimization, and signal tools.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Scientific Computing Toolkit” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Know when to use SciPy for stats, optimization, and signal tools.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Know when to use SciPy for stats, optimization, and signal tools."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-61",
      "title": "11.4 Django Intro — Python Web Framework",
      "module": "Data Libraries",
      "objective": "Understand Django’s role for building secure web apps quickly.",
      "why": "Need a full website with login, admin, and database? Django is a batteries-included web framework.",
      "explanation": "<p><strong>What you will learn.</strong> Understand Django’s role for building secure web apps quickly. By the end you should explain <em>Python Web Framework</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Need a full website with login, admin, and database? Django is a batteries-included web framework. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Backend code runs on a server: receive a request, run logic, talk to storage, return a response. Frameworks organize that work.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Django uses MVT (Model-View-Template). Famous for admin panel and ORM.<br>\n  Install: pip install django. Start: django-admin startproject mysite</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Understand Django’s role for building secure web apps quickly.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"Django = models (DB) + views (logic) + templates (HTML)\")</code> — shows output so you can verify the result.</li><li><code>print(\"Great for: portals, e-commerce, dashboards\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Python Web Framework</em> solve?</li><li>Which line in the example most directly achieves: “Understand Django’s role for building secure web apps quickly.”?</li><li>If you change one value in <code>print(\"Django = models (DB) + views (logic) + templates </code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# Shell workflow:\n# pip install django\n# django-admin startproject myshop\n# cd myshop\n# python manage.py runserver\n\nprint(\"Django = models (DB) + views (logic) + templates (HTML)\")\nprint(\"Great for: portals, e-commerce, dashboards\")",
      "exercises": [
        {
          "title": "Name three Django use cases",
          "instruction": "Print 3 web apps you could build with Django for a local business.",
          "solution": "print(\"1. Online store with orders\")\nprint(\"2. School results portal\")\nprint(\"3. Clinic appointment booking\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Print 3 web apps you could build with Django for a local business. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Django is primarily a:",
          "options": [
            "Game engine",
            "Web framework",
            "Phone OS",
            "Spreadsheet"
          ],
          "correct": 1,
          "explanation": "Django is a high-level Python web framework."
        },
        {
          "q": "When would you use “Python Web Framework” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Understand Django’s role for building secure web apps quickly.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Understand Django’s role for building secure web apps quickly."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-mp-03",
      "title": "11.5 Mini Project — Pandas Sales Summary",
      "module": "Data Libraries",
      "path": "data",
      "project": true,
      "objective": "Summarize a small sales table with Pandas.",
      "why": "Managers ask: total by product and city — Pandas answers in seconds.",
      "explanation": "<p><strong>What you will learn.</strong> Summarize a small sales table with Pandas. By the end you should explain <em>Pandas Sales Summary</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Managers ask: total by product and city — Pandas answers in seconds. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Create a DataFrame, filter, groupby sum. This is the core of business analytics.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Summarize a small sales table with Pandas.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import pandas as pd</code> — sets up a name, type, import, or definition you will use next.</li><li><code>df = pd.DataFrame({</code> — stores or updates a value.</li><li><code>\"product\": [\"Rice\", \"Beans\", \"Rice\", \"Oil\"],</code> — does a step in the overall recipe.</li><li><code>\"city\": [\"Lagos\", \"Lagos\", \"Abuja\", \"Lagos\"],</code> — does a step in the overall recipe.</li><li><code>\"amount\": [45000, 9000, 40000, 12000]</code> — does a step in the overall recipe.</li><li><code>})</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Pandas Sales Summary</em> solve?</li><li>Which line in the example most directly achieves: “Summarize a small sales table with Pandas.”?</li><li>If you change one value in <code>import pandas as pd</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import pandas as pd\ndf = pd.DataFrame({\n    \"product\": [\"Rice\", \"Beans\", \"Rice\", \"Oil\"],\n    \"city\": [\"Lagos\", \"Lagos\", \"Abuja\", \"Lagos\"],\n    \"amount\": [45000, 9000, 40000, 12000]\n})\nprint(df.groupby(\"product\")[\"amount\"].sum())\nprint(\"Lagos total:\", df[df.city==\"Lagos\"][\"amount\"].sum())",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "exercises": [
        {
          "title": "City summary",
          "instruction": "groupby city sum amount.",
          "hint": "groupby(\"city\")",
          "level": "medium",
          "solution": "import pandas as pd\ndf = pd.DataFrame({\"product\":[\"Rice\",\"Beans\",\"Rice\"],\"city\":[\"Lagos\",\"Lagos\",\"Abuja\"],\"amount\":[45000,9000,40000]})\nprint(df.groupby(\"city\")[\"amount\"].sum())"
        }
      ],
      "quiz": [
        {
          "q": "groupby is for?",
          "options": [
            "Plot only",
            "Split-apply-combine aggregations",
            "Deleting CSV",
            "Installing pip"
          ],
          "correct": 1,
          "explanation": "Classic aggregate pattern."
        }
      ]
    },
    {
      "id": "py-62",
      "title": "12.1 Matplotlib Intro",
      "module": "Matplotlib",
      "objective": "Know what Matplotlib is and when to use it.",
      "why": "Charts tell stories numbers hide — trends in sales at a glance.",
      "explanation": "<p><strong>What you will learn.</strong> Know what Matplotlib is and when to use it. By the end you should explain <em>Matplotlib Intro</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Charts tell stories numbers hide — trends in sales at a glance. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Matplotlib is the classic Python plotting library. Works with NumPy/Pandas.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Know what Matplotlib is and when to use it.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>print(\"plt.plot / scatter / bar / hist / pie\")</code> — shows output so you can verify the result.</li><li><code>print(\"plt.show() displays the figure\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Matplotlib Intro</em> solve?</li><li>Which line in the example most directly achieves: “Know what Matplotlib is and when to use it.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nprint(\"plt.plot / scatter / bar / hist / pie\")\nprint(\"plt.show() displays the figure\")",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nprint(\"plt.plot / scatter / bar / hist / pie\")\nprint(\"plt.show() displays the figure\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Matplotlib Intro”?",
          "options": [
            "Know what Matplotlib is and when to use it.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Matplotlib Intro” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Know what Matplotlib is and when to use it.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Know what Matplotlib is and when to use it."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-63",
      "title": "12.2 Get Started — First Plot",
      "module": "Matplotlib",
      "objective": "Create and display a simple line plot.",
      "why": "Managers understand a line chart faster than a spreadsheet dump.",
      "explanation": "<p><strong>What you will learn.</strong> Create and display a simple line plot. By the end you should explain <em>First Plot</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Managers understand a line chart faster than a spreadsheet dump. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Use pyplot API: plot x/y, labels, show.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create and display a simple line plot.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>days = [1, 2, 3, 4, 5]</code> — stores or updates a value.</li><li><code>sales = [20, 35, 30, 50, 45]</code> — stores or updates a value.</li><li><code>plt.plot(days, sales)</code> — does a step in the overall recipe.</li><li><code>plt.title(\"Sales This Week\")</code> — does a step in the overall recipe.</li><li><code>plt.xlabel(\"Day\")</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>First Plot</em> solve?</li><li>Which line in the example most directly achieves: “Create and display a simple line plot.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\ndays = [1, 2, 3, 4, 5]\nsales = [20, 35, 30, 50, 45]\nplt.plot(days, sales)\nplt.title(\"Sales This Week\")\nplt.xlabel(\"Day\")\nplt.ylabel(\"Units\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\ndays = [1, 2, 3, 4, 5]\nsales = [20, 35, 30, 50, 45]\nplt.plot(days, sales)\nplt.title(\"Sales This Week\")\nplt.xlabel(\"Day\")\nplt.ylabel(\"Units\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Get Started — First Plot”?",
          "options": [
            "Create and display a simple line plot.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “First Plot” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create and display a simple line plot.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create and display a simple line plot."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-64",
      "title": "12.3 Pyplot Basics",
      "module": "Matplotlib",
      "objective": "Use plt state-machine style plotting.",
      "why": "Pyplot is the quick interface for everyday charts.",
      "explanation": "<p><strong>What you will learn.</strong> Use plt state-machine style plotting. By the end you should explain <em>Pyplot Basics</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Pyplot is the quick interface for everyday charts. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>plt.figure, plot, title, legend, grid, show.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use plt state-machine style plotting.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>plt.figure(figsize=(6, 4))</code> — stores or updates a value.</li><li><code>plt.plot([1, 2, 3], [3, 1, 4], label=\"A\")</code> — stores or updates a value.</li><li><code>plt.legend()</code> — does a step in the overall recipe.</li><li><code>plt.grid(True)</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Pyplot Basics</em> solve?</li><li>Which line in the example most directly achieves: “Use plt state-machine style plotting.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.figure(figsize=(6, 4))\nplt.plot([1, 2, 3], [3, 1, 4], label=\"A\")\nplt.legend()\nplt.grid(True)\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.figure(figsize=(6, 4))\nplt.plot([1, 2, 3], [3, 1, 4], label=\"A\")\nplt.legend()\nplt.grid(True)\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Pyplot Basics”?",
          "options": [
            "Use plt state-machine style plotting.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Pyplot Basics” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use plt state-machine style plotting.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use plt state-machine style plotting."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-65",
      "title": "12.4 Plotting Multiple Lines",
      "module": "Matplotlib",
      "objective": "Plot multiple datasets together.",
      "why": "Compare this month vs last month on one chart.",
      "explanation": "<p><strong>What you will learn.</strong> Plot multiple datasets together. By the end you should explain <em>Plotting Multiple Lines</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Compare this month vs last month on one chart. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Call plot() several times before show().</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Plot multiple datasets together.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>x = [1, 2, 3, 4]</code> — stores or updates a value.</li><li><code>plt.plot(x, [10, 12, 11, 15], label=\"June\")</code> — stores or updates a value.</li><li><code>plt.plot(x, [9, 10, 13, 14], label=\"July\")</code> — stores or updates a value.</li><li><code>plt.legend()</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Plotting Multiple Lines</em> solve?</li><li>Which line in the example most directly achieves: “Plot multiple datasets together.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4]\nplt.plot(x, [10, 12, 11, 15], label=\"June\")\nplt.plot(x, [9, 10, 13, 14], label=\"July\")\nplt.legend()\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4]\nplt.plot(x, [10, 12, 11, 15], label=\"June\")\nplt.plot(x, [9, 10, 13, 14], label=\"July\")\nplt.legend()\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Plotting Multiple Lines”?",
          "options": [
            "Plot multiple datasets together.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Plotting Multiple Lines” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Plot multiple datasets together.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Plot multiple datasets together."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-66",
      "title": "12.5 Markers",
      "module": "Matplotlib",
      "objective": "Customize point markers on plots.",
      "why": "Highlight key points like peak sales days.",
      "explanation": "<p><strong>What you will learn.</strong> Customize point markers on plots. By the end you should explain <em>Markers</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Highlight key points like peak sales days. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Customize point markers on plots.</p><p>This lesson focuses on <strong>Markers</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Customize point markers on plots.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>plt.plot([1, 2, 3], [2, 5, 3], marker=\"o\")</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Markers</em> solve?</li><li>Which line in the example most directly achieves: “Customize point markers on plots.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 5, 3], marker=\"o\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 5, 3], marker=\"o\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Markers”?",
          "options": [
            "Customize point markers on plots.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Markers” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Customize point markers on plots.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Customize point markers on plots."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-67",
      "title": "12.6 Line Styles",
      "module": "Matplotlib",
      "objective": "Change line style and width.",
      "why": "Dashed vs solid lines distinguish forecast vs actual.",
      "explanation": "<p><strong>What you will learn.</strong> Change line style and width. By the end you should explain <em>Line Styles</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Dashed vs solid lines distinguish forecast vs actual. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>linestyle='--', linewidth=2, color='green'</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Change line style and width.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>plt.plot([1, 2, 3], [1, 4, 2], linestyle=\"--\", linewidth=2, color=\"gr…</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Line Styles</em> solve?</li><li>Which line in the example most directly achieves: “Change line style and width.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [1, 4, 2], linestyle=\"--\", linewidth=2, color=\"green\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [1, 4, 2], linestyle=\"--\", linewidth=2, color=\"green\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Line Styles”?",
          "options": [
            "Change line style and width.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Line Styles” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Change line style and width.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Change line style and width."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-68",
      "title": "12.7 Labels & Titles",
      "module": "Matplotlib",
      "objective": "Add title, xlabel, ylabel, legend.",
      "why": "Unlabeled charts confuse stakeholders — always name axes.",
      "explanation": "<p><strong>What you will learn.</strong> Add title, xlabel, ylabel, legend. By the end you should explain <em>Labels &amp; Titles</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Unlabeled charts confuse stakeholders — always name axes. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Clear labels = professional reports.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Add title, xlabel, ylabel, legend.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>plt.plot([1, 2, 3], [3, 5, 4])</code> — does a step in the overall recipe.</li><li><code>plt.title(\"Weekly Revenue\")</code> — does a step in the overall recipe.</li><li><code>plt.xlabel(\"Week\")</code> — does a step in the overall recipe.</li><li><code>plt.ylabel(\"₦ thousands\")</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Labels &amp; Titles</em> solve?</li><li>Which line in the example most directly achieves: “Add title, xlabel, ylabel, legend.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [3, 5, 4])\nplt.title(\"Weekly Revenue\")\nplt.xlabel(\"Week\")\nplt.ylabel(\"₦ thousands\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [3, 5, 4])\nplt.title(\"Weekly Revenue\")\nplt.xlabel(\"Week\")\nplt.ylabel(\"₦ thousands\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Labels & Titles”?",
          "options": [
            "Add title, xlabel, ylabel, legend.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Labels & Titles” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Add title, xlabel, ylabel, legend.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Add title, xlabel, ylabel, legend."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-69",
      "title": "12.8 Grid",
      "module": "Matplotlib",
      "objective": "Toggle and style grid lines.",
      "why": "Grids help people read values off a chart accurately.",
      "explanation": "<p><strong>What you will learn.</strong> Toggle and style grid lines. By the end you should explain <em>Grid</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Grids help people read values off a chart accurately. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Toggle and style grid lines.</p><p>This lesson focuses on <strong>Grid</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Toggle and style grid lines.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>plt.plot([0, 1, 2], [0, 1, 4])</code> — does a step in the overall recipe.</li><li><code>plt.grid(True, linestyle=\":\")</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Grid</em> solve?</li><li>Which line in the example most directly achieves: “Toggle and style grid lines.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([0, 1, 2], [0, 1, 4])\nplt.grid(True, linestyle=\":\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([0, 1, 2], [0, 1, 4])\nplt.grid(True, linestyle=\":\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Grid”?",
          "options": [
            "Toggle and style grid lines.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Grid” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Toggle and style grid lines.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Toggle and style grid lines."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-70",
      "title": "12.9 Subplots",
      "module": "Matplotlib",
      "objective": "Create multi-panel figures with subplot.",
      "why": "Show sales and expenses side by side in one figure.",
      "explanation": "<p><strong>What you will learn.</strong> Create multi-panel figures with subplot. By the end you should explain <em>Subplots</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Show sales and expenses side by side in one figure. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>plt.subplot(rows, cols, index)</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create multi-panel figures with subplot.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>plt.subplot(1, 2, 1)</code> — does a step in the overall recipe.</li><li><code>plt.plot([1, 2, 3], [3, 2, 5])</code> — does a step in the overall recipe.</li><li><code>plt.title(\"Sales\")</code> — does a step in the overall recipe.</li><li><code>plt.subplot(1, 2, 2)</code> — does a step in the overall recipe.</li><li><code>plt.bar([1, 2, 3], [2, 4, 3])</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Subplots</em> solve?</li><li>Which line in the example most directly achieves: “Create multi-panel figures with subplot.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.subplot(1, 2, 1)\nplt.plot([1, 2, 3], [3, 2, 5])\nplt.title(\"Sales\")\nplt.subplot(1, 2, 2)\nplt.bar([1, 2, 3], [2, 4, 3])\nplt.title(\"Expenses\")\nplt.tight_layout()\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.subplot(1, 2, 1)\nplt.plot([1, 2, 3], [3, 2, 5])\nplt.title(\"Sales\")\nplt.subplot(1, 2, 2)\nplt.bar([1, 2, 3], [2, 4, 3])\nplt.title(\"Expenses\")\nplt.tight_layout()\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Subplots”?",
          "options": [
            "Create multi-panel figures with subplot.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Subplots” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create multi-panel figures with subplot.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create multi-panel figures with subplot."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-71",
      "title": "12.10 Scatter Plots",
      "module": "Matplotlib",
      "objective": "Use scatter for correlation-style views.",
      "why": "Spot relationship between ad spend and customers.",
      "explanation": "<p><strong>What you will learn.</strong> Use scatter for correlation-style views. By the end you should explain <em>Scatter Plots</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Spot relationship between ad spend and customers. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Use scatter for correlation-style views.</p><p>This lesson focuses on <strong>Scatter Plots</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use scatter for correlation-style views.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>ad = [1, 2, 3, 4, 5]</code> — stores or updates a value.</li><li><code>customers = [20, 28, 30, 45, 50]</code> — stores or updates a value.</li><li><code>plt.scatter(ad, customers)</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Scatter Plots</em> solve?</li><li>Which line in the example most directly achieves: “Use scatter for correlation-style views.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nad = [1, 2, 3, 4, 5]\ncustomers = [20, 28, 30, 45, 50]\nplt.scatter(ad, customers)\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nad = [1, 2, 3, 4, 5]\ncustomers = [20, 28, 30, 45, 50]\nplt.scatter(ad, customers)\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Scatter Plots”?",
          "options": [
            "Use scatter for correlation-style views.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Scatter Plots” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use scatter for correlation-style views.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use scatter for correlation-style views."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-72",
      "title": "12.11 Bar Charts",
      "module": "Matplotlib",
      "objective": "Create vertical bar charts.",
      "why": "Compare product categories at a glance.",
      "explanation": "<p><strong>What you will learn.</strong> Create vertical bar charts. By the end you should explain <em>Bar Charts</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Compare product categories at a glance. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Create vertical bar charts.</p><p>This lesson focuses on <strong>Bar Charts</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create vertical bar charts.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>products = [\"Rice\", \"Beans\", \"Oil\"]</code> — stores or updates a value.</li><li><code>qty = [50, 30, 20]</code> — stores or updates a value.</li><li><code>plt.bar(products, qty, color=\"teal\")</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Bar Charts</em> solve?</li><li>Which line in the example most directly achieves: “Create vertical bar charts.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nproducts = [\"Rice\", \"Beans\", \"Oil\"]\nqty = [50, 30, 20]\nplt.bar(products, qty, color=\"teal\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nproducts = [\"Rice\", \"Beans\", \"Oil\"]\nqty = [50, 30, 20]\nplt.bar(products, qty, color=\"teal\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Bar Charts”?",
          "options": [
            "Create vertical bar charts.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Bar Charts” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create vertical bar charts.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create vertical bar charts."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-73",
      "title": "12.12 Histograms",
      "module": "Matplotlib",
      "objective": "Plot frequency distributions with hist.",
      "why": "See how exam scores or ages are distributed.",
      "explanation": "<p><strong>What you will learn.</strong> Plot frequency distributions with hist. By the end you should explain <em>Histograms</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> See how exam scores or ages are distributed. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Plot frequency distributions with hist.</p><p>This lesson focuses on <strong>Histograms</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Plot frequency distributions with hist.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>scores = [55, 60, 61, 70, 72, 72, 75, 80, 90, 95]</code> — stores or updates a value.</li><li><code>plt.hist(scores, bins=5)</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Histograms</em> solve?</li><li>Which line in the example most directly achieves: “Plot frequency distributions with hist.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nscores = [55, 60, 61, 70, 72, 72, 75, 80, 90, 95]\nplt.hist(scores, bins=5)\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nscores = [55, 60, 61, 70, 72, 72, 75, 80, 90, 95]\nplt.hist(scores, bins=5)\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Histograms”?",
          "options": [
            "Plot frequency distributions with hist.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Histograms” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Plot frequency distributions with hist.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Plot frequency distributions with hist."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-74",
      "title": "12.13 Pie Charts",
      "module": "Matplotlib",
      "objective": "Create pie charts with labels and autopct.",
      "why": "Show market share or budget split.",
      "explanation": "<p><strong>What you will learn.</strong> Create pie charts with labels and autopct. By the end you should explain <em>Pie Charts</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Show market share or budget split. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>plt.pie(sizes, labels=..., autopct=\"%1.1f%%\")</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create pie charts with labels and autopct.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>labels = [\"Rent\", \"Salaries\", \"Ads\", \"Other\"]</code> — stores or updates a value.</li><li><code>sizes = [40, 35, 15, 10]</code> — stores or updates a value.</li><li><code>plt.pie(sizes, labels=labels, autopct=\"%1.1f%%\")</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Pie Charts</em> solve?</li><li>Which line in the example most directly achieves: “Create pie charts with labels and autopct.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nlabels = [\"Rent\", \"Salaries\", \"Ads\", \"Other\"]\nsizes = [40, 35, 15, 10]\nplt.pie(sizes, labels=labels, autopct=\"%1.1f%%\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nlabels = [\"Rent\", \"Salaries\", \"Ads\", \"Other\"]\nsizes = [40, 35, 15, 10]\nplt.pie(sizes, labels=labels, autopct=\"%1.1f%%\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Reproduce the idea of the code example with your own 4 data points and a clear title. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Pie Charts”?",
          "options": [
            "Create pie charts with labels and autopct.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Pie Charts” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create pie charts with labels and autopct.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create pie charts with labels and autopct."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-75",
      "title": "13.1 ML Getting Started",
      "module": "Machine Learning",
      "objective": "Define ML, supervised vs unsupervised, and the workflow.",
      "why": "Predict demand, detect fraud, recommend products — ML learns patterns from data.",
      "explanation": "<p><strong>What you will learn.</strong> Define ML, supervised vs unsupervised, and the workflow. By the end you should explain <em>ML Getting Started</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Predict demand, detect fraud, recommend products — ML learns patterns from data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Machine Learning module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Workflow: collect data → clean → train → evaluate → deploy. Libraries: scikit-learn, pandas, numpy.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Define ML, supervised vs unsupervised, and the workflow.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"Supervised: labeled data (price prediction)\")</code> — shows output so you can verify the result.</li><li><code>print(\"Unsupervised: find groups (customer segments)\")</code> — shows output so you can verify the result.</li><li><code>print(\"Pipeline: data → model → metrics → improve\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>ML Getting Started</em> solve?</li><li>Which line in the example most directly achieves: “Define ML, supervised vs unsupervised, and the workflow.”?</li><li>If you change one value in <code>print(\"Supervised: labeled data (price prediction)\")</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print(\"Supervised: labeled data (price prediction)\")\nprint(\"Unsupervised: find groups (customer segments)\")\nprint(\"Pipeline: data → model → metrics → improve\")",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "print(\"Supervised: labeled data (price prediction)\")\nprint(\"Unsupervised: find groups (customer segments)\")\nprint(\"Pipeline: data → model → metrics → improve\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “ML Getting Started”?",
          "options": [
            "Define ML, supervised vs unsupervised, and the workflow.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “ML Getting Started” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Define ML, supervised vs unsupervised, and the workflow.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Define ML, supervised vs unsupervised, and the workflow."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-76",
      "title": "13.2 Mean, Median, Mode",
      "module": "Machine Learning",
      "objective": "Compute central tendency measures.",
      "why": "Average salary vs typical salary — different stats tell different stories.",
      "explanation": "<p><strong>What you will learn.</strong> Compute central tendency measures. By the end you should explain <em>Mean, Median, Mode</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Average salary vs typical salary — different stats tell different stories. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>mean average, median middle, mode most frequent.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Compute central tendency measures.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>from statistics import mode</code> — sets up a name, type, import, or definition you will use next.</li><li><code>x = [3, 5, 5, 7, 9]</code> — stores or updates a value.</li><li><code>print(np.mean(x), np.median(x), mode(x))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Mean, Median, Mode</em> solve?</li><li>Which line in the example most directly achieves: “Compute central tendency measures.”?</li><li>If you change one value in <code>import numpy as np</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import numpy as np\nfrom statistics import mode\nx = [3, 5, 5, 7, 9]\nprint(np.mean(x), np.median(x), mode(x))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\nfrom statistics import mode\nx = [3, 5, 5, 7, 9]\nprint(np.mean(x), np.median(x), mode(x))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Mean, Median, Mode”?",
          "options": [
            "Compute central tendency measures.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Mean, Median, Mode” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Compute central tendency measures.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Compute central tendency measures."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-77",
      "title": "13.3 Standard Deviation",
      "module": "Machine Learning",
      "objective": "Measure spread with standard deviation.",
      "why": "How spread out are delivery times? Std dev answers.",
      "explanation": "<p><strong>What you will learn.</strong> Measure spread with standard deviation. By the end you should explain <em>Standard Deviation</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> How spread out are delivery times? Std dev answers. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Low std → consistent. High std → volatile.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Measure spread with standard deviation.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>times = [30, 32, 31, 90, 29]</code> — stores or updates a value.</li><li><code>print(np.std(times))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Standard Deviation</em> solve?</li><li>Which line in the example most directly achieves: “Measure spread with standard deviation.”?</li><li>If you change one value in <code>import numpy as np</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import numpy as np\ntimes = [30, 32, 31, 90, 29]\nprint(np.std(times))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\ntimes = [30, 32, 31, 90, 29]\nprint(np.std(times))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Standard Deviation”?",
          "options": [
            "Measure spread with standard deviation.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Standard Deviation” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Measure spread with standard deviation.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Measure spread with standard deviation."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-78",
      "title": "13.4 Percentile",
      "module": "Machine Learning",
      "objective": "Compute percentiles with NumPy.",
      "why": "90th percentile delivery time is your worst-case promise to customers.",
      "explanation": "<p><strong>What you will learn.</strong> Compute percentiles with NumPy. By the end you should explain <em>Percentile</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> 90th percentile delivery time is your worst-case promise to customers. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Compute percentiles with NumPy.</p><p>This lesson focuses on <strong>Percentile</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Compute percentiles with NumPy.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>data = [10, 20, 30, 40, 50, 60, 70]</code> — stores or updates a value.</li><li><code>print(np.percentile(data, 90))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Percentile</em> solve?</li><li>Which line in the example most directly achieves: “Compute percentiles with NumPy.”?</li><li>If you change one value in <code>import numpy as np</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import numpy as np\ndata = [10, 20, 30, 40, 50, 60, 70]\nprint(np.percentile(data, 90))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\ndata = [10, 20, 30, 40, 50, 60, 70]\nprint(np.percentile(data, 90))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Percentile”?",
          "options": [
            "Compute percentiles with NumPy.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Percentile” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Compute percentiles with NumPy.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Compute percentiles with NumPy."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-79",
      "title": "13.5 Data Distribution",
      "module": "Machine Learning",
      "objective": "Describe uniform vs skewed distributions conceptually.",
      "why": "Understanding how data is spread guides model choice.",
      "explanation": "<p><strong>What you will learn.</strong> Describe uniform vs skewed distributions conceptually. By the end you should explain <em>Data Distribution</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Understanding how data is spread guides model choice. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Visualize with histograms; summarize with describe().</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Describe uniform vs skewed distributions conceptually.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>uniform = np.random.uniform(0, 1, 5)</code> — stores or updates a value.</li><li><code>print(uniform)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Data Distribution</em> solve?</li><li>Which line in the example most directly achieves: “Describe uniform vs skewed distributions conceptually.”?</li><li>If you change one value in <code>import numpy as np</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import numpy as np\nuniform = np.random.uniform(0, 1, 5)\nprint(uniform)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\nuniform = np.random.uniform(0, 1, 5)\nprint(uniform)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Data Distribution”?",
          "options": [
            "Describe uniform vs skewed distributions conceptually.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Data Distribution” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Describe uniform vs skewed distributions conceptually.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Describe uniform vs skewed distributions conceptually."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-80",
      "title": "13.6 Normal Distribution",
      "module": "Machine Learning",
      "objective": "Generate and recognize normal data.",
      "why": "Heights, exam scores often form a bell curve.",
      "explanation": "<p><strong>What you will learn.</strong> Generate and recognize normal data. By the end you should explain <em>Normal Distribution</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Heights, exam scores often form a bell curve. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>np.random.normal(mean, std, size)</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Generate and recognize normal data.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>sample = np.random.normal(100, 15, 5)</code> — stores or updates a value.</li><li><code>print(sample)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Normal Distribution</em> solve?</li><li>Which line in the example most directly achieves: “Generate and recognize normal data.”?</li><li>If you change one value in <code>import numpy as np</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import numpy as np\nsample = np.random.normal(100, 15, 5)\nprint(sample)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\nsample = np.random.normal(100, 15, 5)\nprint(sample)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Normal Distribution”?",
          "options": [
            "Generate and recognize normal data.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Normal Distribution” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Generate and recognize normal data.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Generate and recognize normal data."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-81",
      "title": "13.7 Scatter Plot for ML",
      "module": "Machine Learning",
      "objective": "Plot feature vs target as scatter.",
      "why": "Visualize relationship before fitting a model.",
      "explanation": "<p><strong>What you will learn.</strong> Plot feature vs target as scatter. By the end you should explain <em>Scatter Plot for ML</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Visualize relationship before fitting a model. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → visualize → model. Each tool is one step that turns raw numbers into decisions.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Patterns suggest linear vs nonlinear models.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Plot feature vs target as scatter.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import matplotlib.pyplot as plt</code> — sets up a name, type, import, or definition you will use next.</li><li><code>x = [1, 2, 3, 4, 5]</code> — stores or updates a value.</li><li><code>y = [2, 4, 5, 4, 5]</code> — stores or updates a value.</li><li><code>plt.scatter(x, y)</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Scatter Plot for ML</em> solve?</li><li>Which line in the example most directly achieves: “Plot feature vs target as scatter.”?</li><li>If you change one value in <code>import matplotlib.pyplot as plt</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 5, 4, 5]\nplt.scatter(x, y)\n# plt.show()",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 5, 4, 5]\nplt.scatter(x, y)\n# plt.show()",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Scatter Plot for ML”?",
          "options": [
            "Plot feature vs target as scatter.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Scatter Plot for ML” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Plot feature vs target as scatter.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Plot feature vs target as scatter."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-82",
      "title": "13.8 Linear Regression",
      "module": "Machine Learning",
      "objective": "Fit a simple linear regression with scikit-learn.",
      "why": "Predict house price from size — classic straight-line model.",
      "explanation": "<p><strong>What you will learn.</strong> Fit a simple linear regression with scikit-learn. By the end you should explain <em>Linear Regression</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Predict house price from size — classic straight-line model. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>y ≈ mx + b. Use LinearRegression().fit</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Fit a simple linear regression with scikit-learn.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.linear_model import LinearRegression</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = np.array([[1], [2], [3], [4]])</code> — stores or updates a value.</li><li><code>y = np.array([2, 4, 6, 8])</code> — stores or updates a value.</li><li><code>model = LinearRegression().fit(X, y)</code> — stores or updates a value.</li><li><code>print(model.predict([[5]]))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Linear Regression</em> solve?</li><li>Which line in the example most directly achieves: “Fit a simple linear regression with scikit-learn.”?</li><li>If you change one value in <code>from sklearn.linear_model import LinearRegression</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([2, 4, 6, 8])\nmodel = LinearRegression().fit(X, y)\nprint(model.predict([[5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([2, 4, 6, 8])\nmodel = LinearRegression().fit(X, y)\nprint(model.predict([[5]]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Linear Regression”?",
          "options": [
            "Fit a simple linear regression with scikit-learn.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Linear Regression” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Fit a simple linear regression with scikit-learn.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Fit a simple linear regression with scikit-learn."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-83",
      "title": "13.9 Polynomial Regression",
      "module": "Machine Learning",
      "objective": "Use polynomial features for curved relationships.",
      "why": "When growth curves bend, straight lines underfit.",
      "explanation": "<p><strong>What you will learn.</strong> Use polynomial features for curved relationships. By the end you should explain <em>Polynomial Regression</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> When growth curves bend, straight lines underfit. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>PolynomialFeatures + LinearRegression pipeline.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use polynomial features for curved relationships.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.preprocessing import PolynomialFeatures</code> — sets up a name, type, import, or definition you will use next.</li><li><code>from sklearn.linear_model import LinearRegression</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = np.array([[1], [2], [3], [4]])</code> — stores or updates a value.</li><li><code>y = np.array([1, 4, 9, 16])</code> — stores or updates a value.</li><li><code>Z = PolynomialFeatures(2).fit_transform(X)</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Polynomial Regression</em> solve?</li><li>Which line in the example most directly achieves: “Use polynomial features for curved relationships.”?</li><li>If you change one value in <code>from sklearn.preprocessing import PolynomialFeatures</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.preprocessing import PolynomialFeatures\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([1, 4, 9, 16])\nZ = PolynomialFeatures(2).fit_transform(X)\nmodel = LinearRegression().fit(Z, y)\nprint(model.coef_)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.preprocessing import PolynomialFeatures\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([1, 4, 9, 16])\nZ = PolynomialFeatures(2).fit_transform(X)\nmodel = LinearRegression().fit(Z, y)\nprint(model.coef_)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Polynomial Regression”?",
          "options": [
            "Use polynomial features for curved relationships.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Polynomial Regression” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use polynomial features for curved relationships.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use polynomial features for curved relationships."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-84",
      "title": "13.10 Multiple Regression",
      "module": "Machine Learning",
      "objective": "Regress with multiple input features.",
      "why": "Predict sales from ads + price + season together.",
      "explanation": "<p><strong>What you will learn.</strong> Regress with multiple input features. By the end you should explain <em>Multiple Regression</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Predict sales from ads + price + season together. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>X has several columns; same LinearRegression API.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Regress with multiple input features.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.linear_model import LinearRegression</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = np.array([[1, 10], [2, 12], [3, 14], [4, 15]])</code> — stores or updates a value.</li><li><code>y = np.array([20, 25, 30, 32])</code> — stores or updates a value.</li><li><code>print(LinearRegression().fit(X, y).predict([[5, 16]]))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Multiple Regression</em> solve?</li><li>Which line in the example most directly achieves: “Regress with multiple input features.”?</li><li>If you change one value in <code>from sklearn.linear_model import LinearRegression</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1, 10], [2, 12], [3, 14], [4, 15]])\ny = np.array([20, 25, 30, 32])\nprint(LinearRegression().fit(X, y).predict([[5, 16]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1, 10], [2, 12], [3, 14], [4, 15]])\ny = np.array([20, 25, 30, 32])\nprint(LinearRegression().fit(X, y).predict([[5, 16]]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Multiple Regression”?",
          "options": [
            "Regress with multiple input features.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Multiple Regression” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Regress with multiple input features.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Regress with multiple input features."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-85",
      "title": "13.11 Feature Scaling",
      "module": "Machine Learning",
      "objective": "Apply StandardScaler or MinMaxScaler.",
      "why": "Income and age are different scales — scaling keeps models fair.",
      "explanation": "<p><strong>What you will learn.</strong> Apply StandardScaler or MinMaxScaler. By the end you should explain <em>Feature Scaling</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Income and age are different scales — scaling keeps models fair. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Machine Learning module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Fit on train data only, then transform.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Apply StandardScaler or MinMaxScaler.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.preprocessing import StandardScaler</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = np.array([[1., 1000.], [2., 2000.], [3., 3000.]])</code> — stores or updates a value.</li><li><code>print(StandardScaler().fit_transform(X))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Feature Scaling</em> solve?</li><li>Which line in the example most directly achieves: “Apply StandardScaler or MinMaxScaler.”?</li><li>If you change one value in <code>from sklearn.preprocessing import StandardScaler</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.preprocessing import StandardScaler\nimport numpy as np\nX = np.array([[1., 1000.], [2., 2000.], [3., 3000.]])\nprint(StandardScaler().fit_transform(X))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.preprocessing import StandardScaler\nimport numpy as np\nX = np.array([[1., 1000.], [2., 2000.], [3., 3000.]])\nprint(StandardScaler().fit_transform(X))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Feature Scaling”?",
          "options": [
            "Apply StandardScaler or MinMaxScaler.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Feature Scaling” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Apply StandardScaler or MinMaxScaler.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Apply StandardScaler or MinMaxScaler."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-86",
      "title": "13.12 Train / Test Split",
      "module": "Machine Learning",
      "objective": "Split data to evaluate generalization.",
      "why": "Never grade a student on questions they memorized — hold out a test set.",
      "explanation": "<p><strong>What you will learn.</strong> Split data to evaluate generalization. By the end you should explain <em>Train / Test Split</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Never grade a student on questions they memorized — hold out a test set. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Machine Learning module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>train_test_split from sklearn.model_selection</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Split data to evaluate generalization.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.model_selection import train_test_split</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = np.arange(20).reshape(10, 2)</code> — stores or updates a value.</li><li><code>y = np.arange(10)</code> — stores or updates a value.</li><li><code>Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_sta…</code> — stores or updates a value.</li><li><code>print(len(Xtr), len(Xte))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Train / Test Split</em> solve?</li><li>Which line in the example most directly achieves: “Split data to evaluate generalization.”?</li><li>If you change one value in <code>from sklearn.model_selection import train_test_split</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.model_selection import train_test_split\nimport numpy as np\nX = np.arange(20).reshape(10, 2)\ny = np.arange(10)\nXtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=42)\nprint(len(Xtr), len(Xte))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.model_selection import train_test_split\nimport numpy as np\nX = np.arange(20).reshape(10, 2)\ny = np.arange(10)\nXtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=42)\nprint(len(Xtr), len(Xte))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Train / Test Split”?",
          "options": [
            "Split data to evaluate generalization.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Train / Test Split” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Split data to evaluate generalization.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Split data to evaluate generalization."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-87",
      "title": "13.13 Decision Tree",
      "module": "Machine Learning",
      "objective": "Train a DecisionTreeClassifier on simple data.",
      "why": "Loan yes/no rules that humans can inspect.",
      "explanation": "<p><strong>What you will learn.</strong> Train a DecisionTreeClassifier on simple data. By the end you should explain <em>Decision Tree</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Loan yes/no rules that humans can inspect. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Trees split features to predict labels.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Train a DecisionTreeClassifier on simple data.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.tree import DecisionTreeClassifier</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = [[0], [1], [2], [3]]</code> — stores or updates a value.</li><li><code>y = [0, 0, 1, 1]</code> — stores or updates a value.</li><li><code>clf = DecisionTreeClassifier().fit(X, y)</code> — stores or updates a value.</li><li><code>print(clf.predict([[1.5]]))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Decision Tree</em> solve?</li><li>Which line in the example most directly achieves: “Train a DecisionTreeClassifier on simple data.”?</li><li>If you change one value in <code>from sklearn.tree import DecisionTreeClassifier</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nclf = DecisionTreeClassifier().fit(X, y)\nprint(clf.predict([[1.5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nclf = DecisionTreeClassifier().fit(X, y)\nprint(clf.predict([[1.5]]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Decision Tree”?",
          "options": [
            "Train a DecisionTreeClassifier on simple data.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Decision Tree” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Train a DecisionTreeClassifier on simple data.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Train a DecisionTreeClassifier on simple data."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-88",
      "title": "13.14 Confusion Matrix",
      "module": "Machine Learning",
      "objective": "Evaluate classification with a confusion matrix.",
      "why": "How many fraud cases did we catch vs miss?",
      "explanation": "<p><strong>What you will learn.</strong> Evaluate classification with a confusion matrix. By the end you should explain <em>Confusion Matrix</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> How many fraud cases did we catch vs miss? Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>TP, FP, TN, FN — sklearn.metrics.confusion_matrix</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Evaluate classification with a confusion matrix.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.metrics import confusion_matrix</code> — sets up a name, type, import, or definition you will use next.</li><li><code>y_true = [1, 0, 1, 1, 0]</code> — stores or updates a value.</li><li><code>y_pred = [1, 0, 0, 1, 0]</code> — stores or updates a value.</li><li><code>print(confusion_matrix(y_true, y_pred))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Confusion Matrix</em> solve?</li><li>Which line in the example most directly achieves: “Evaluate classification with a confusion matrix.”?</li><li>If you change one value in <code>from sklearn.metrics import confusion_matrix</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.metrics import confusion_matrix\ny_true = [1, 0, 1, 1, 0]\ny_pred = [1, 0, 0, 1, 0]\nprint(confusion_matrix(y_true, y_pred))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.metrics import confusion_matrix\ny_true = [1, 0, 1, 1, 0]\ny_pred = [1, 0, 0, 1, 0]\nprint(confusion_matrix(y_true, y_pred))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Confusion Matrix”?",
          "options": [
            "Evaluate classification with a confusion matrix.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Confusion Matrix” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Evaluate classification with a confusion matrix.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Evaluate classification with a confusion matrix."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-89",
      "title": "13.15 Hierarchical Clustering",
      "module": "Machine Learning",
      "objective": "Introduce agglomerative clustering concept.",
      "why": "Group similar customers without pre-labeled segments.",
      "explanation": "<p><strong>What you will learn.</strong> Introduce agglomerative clustering concept. By the end you should explain <em>Hierarchical Clustering</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Group similar customers without pre-labeled segments. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Unsupervised: builds a tree of clusters.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Introduce agglomerative clustering concept.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.cluster import AgglomerativeClustering</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])</code> — stores or updates a value.</li><li><code>print(AgglomerativeClustering(n_clusters=2).fit_predict(X))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Hierarchical Clustering</em> solve?</li><li>Which line in the example most directly achieves: “Introduce agglomerative clustering concept.”?</li><li>If you change one value in <code>from sklearn.cluster import AgglomerativeClustering</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.cluster import AgglomerativeClustering\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(AgglomerativeClustering(n_clusters=2).fit_predict(X))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.cluster import AgglomerativeClustering\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(AgglomerativeClustering(n_clusters=2).fit_predict(X))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Hierarchical Clustering”?",
          "options": [
            "Introduce agglomerative clustering concept.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Hierarchical Clustering” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Introduce agglomerative clustering concept.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Introduce agglomerative clustering concept."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-90",
      "title": "13.16 Logistic Regression",
      "module": "Machine Learning",
      "objective": "Use LogisticRegression for classification.",
      "why": "Predict yes/no outcomes like churn or pass/fail.",
      "explanation": "<p><strong>What you will learn.</strong> Use LogisticRegression for classification. By the end you should explain <em>Logistic Regression</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Predict yes/no outcomes like churn or pass/fail. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Outputs class probabilities despite the name “regression”.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use LogisticRegression for classification.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.linear_model import LogisticRegression</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = np.array([[1], [2], [3], [4]])</code> — stores or updates a value.</li><li><code>y = np.array([0, 0, 1, 1])</code> — stores or updates a value.</li><li><code>print(LogisticRegression().fit(X, y).predict([[3.5]]))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Logistic Regression</em> solve?</li><li>Which line in the example most directly achieves: “Use LogisticRegression for classification.”?</li><li>If you change one value in <code>from sklearn.linear_model import LogisticRegression</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([0, 0, 1, 1])\nprint(LogisticRegression().fit(X, y).predict([[3.5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([0, 0, 1, 1])\nprint(LogisticRegression().fit(X, y).predict([[3.5]]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Logistic Regression”?",
          "options": [
            "Use LogisticRegression for classification.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Logistic Regression” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use LogisticRegression for classification.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use LogisticRegression for classification."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-91",
      "title": "13.17 Grid Search",
      "module": "Machine Learning",
      "objective": "Use GridSearchCV to tune models.",
      "why": "Systematically try hyperparameters to improve a model.",
      "explanation": "<p><strong>What you will learn.</strong> Use GridSearchCV to tune models. By the end you should explain <em>Grid Search</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Systematically try hyperparameters to improve a model. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Machine Learning module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Define param grid + cross-validation.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use GridSearchCV to tune models.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.model_selection import GridSearchCV</code> — sets up a name, type, import, or definition you will use next.</li><li><code>from sklearn.tree import DecisionTreeClassifier</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = np.array([[0], [1], [2], [3], [4], [5]])</code> — stores or updates a value.</li><li><code>y = np.array([0, 0, 0, 1, 1, 1])</code> — stores or updates a value.</li><li><code>grid = GridSearchCV(DecisionTreeClassifier(), {\"max_depth\": [1, 2, 3]…</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Grid Search</em> solve?</li><li>Which line in the example most directly achieves: “Use GridSearchCV to tune models.”?</li><li>If you change one value in <code>from sklearn.model_selection import GridSearchCV</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\ngrid = GridSearchCV(DecisionTreeClassifier(), {\"max_depth\": [1, 2, 3]}, cv=2)\ngrid.fit(X, y)\nprint(grid.best_params_)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\ngrid = GridSearchCV(DecisionTreeClassifier(), {\"max_depth\": [1, 2, 3]}, cv=2)\ngrid.fit(X, y)\nprint(grid.best_params_)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Grid Search”?",
          "options": [
            "Use GridSearchCV to tune models.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Grid Search” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use GridSearchCV to tune models.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use GridSearchCV to tune models."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-92",
      "title": "13.18 Categorical Data",
      "module": "Machine Learning",
      "objective": "Encode categories with OneHotEncoder or get_dummies.",
      "why": "City names must become numbers before most models train.",
      "explanation": "<p><strong>What you will learn.</strong> Encode categories with OneHotEncoder or get_dummies. By the end you should explain <em>Categorical Data</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> City names must become numbers before most models train. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Never feed raw strings into linear models.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Encode categories with OneHotEncoder or get_dummies.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import pandas as pd</code> — sets up a name, type, import, or definition you will use next.</li><li><code>df = pd.DataFrame({\"city\": [\"Lagos\", \"Abuja\", \"Lagos\"]})</code> — stores or updates a value.</li><li><code>print(pd.get_dummies(df))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Categorical Data</em> solve?</li><li>Which line in the example most directly achieves: “Encode categories with OneHotEncoder or get_dummies.”?</li><li>If you change one value in <code>import pandas as pd</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"Lagos\", \"Abuja\", \"Lagos\"]})\nprint(pd.get_dummies(df))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"Lagos\", \"Abuja\", \"Lagos\"]})\nprint(pd.get_dummies(df))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Categorical Data”?",
          "options": [
            "Encode categories with OneHotEncoder or get_dummies.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Categorical Data” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Encode categories with OneHotEncoder or get_dummies.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Encode categories with OneHotEncoder or get_dummies."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-93",
      "title": "13.19 K-Means Clustering",
      "module": "Machine Learning",
      "objective": "Run KMeans to find clusters.",
      "why": "Split customers into K spending groups automatically.",
      "explanation": "<p><strong>What you will learn.</strong> Run KMeans to find clusters. By the end you should explain <em>K-Means Clustering</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Split customers into K spending groups automatically. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Choose K; algorithm assigns each point a group.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Run KMeans to find clusters.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.cluster import KMeans</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])</code> — stores or updates a value.</li><li><code>print(KMeans(n_clusters=2, n_init=10).fit_predict(X))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>K-Means Clustering</em> solve?</li><li>Which line in the example most directly achieves: “Run KMeans to find clusters.”?</li><li>If you change one value in <code>from sklearn.cluster import KMeans</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.cluster import KMeans\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(KMeans(n_clusters=2, n_init=10).fit_predict(X))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.cluster import KMeans\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(KMeans(n_clusters=2, n_init=10).fit_predict(X))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “K-Means Clustering”?",
          "options": [
            "Run KMeans to find clusters.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “K-Means Clustering” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Run KMeans to find clusters.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Run KMeans to find clusters."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-94",
      "title": "13.20 Bootstrap Aggregation (Bagging)",
      "module": "Machine Learning",
      "objective": "Understand bagging and RandomForest as example.",
      "why": "Many weak models vote — often more stable predictions.",
      "explanation": "<p><strong>What you will learn.</strong> Understand bagging and RandomForest as example. By the end you should explain <em>Bootstrap Aggregation (Bagging)</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Many weak models vote — often more stable predictions. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Train on random subsets; average votes.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Understand bagging and RandomForest as example.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.ensemble import BaggingClassifier</code> — sets up a name, type, import, or definition you will use next.</li><li><code>from sklearn.tree import DecisionTreeClassifier</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = np.array([[0], [1], [2], [3], [4], [5]])</code> — stores or updates a value.</li><li><code>y = np.array([0, 0, 0, 1, 1, 1])</code> — stores or updates a value.</li><li><code>clf = BaggingClassifier(DecisionTreeClassifier(), n_estimators=5, ran…</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Bootstrap Aggregation (Bagging)</em> solve?</li><li>Which line in the example most directly achieves: “Understand bagging and RandomForest as example.”?</li><li>If you change one value in <code>from sklearn.ensemble import BaggingClassifier</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.ensemble import BaggingClassifier\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\nclf = BaggingClassifier(DecisionTreeClassifier(), n_estimators=5, random_state=0)\nprint(clf.fit(X, y).predict([[2.5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.ensemble import BaggingClassifier\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\nclf = BaggingClassifier(DecisionTreeClassifier(), n_estimators=5, random_state=0)\nprint(clf.fit(X, y).predict([[2.5]]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Bootstrap Aggregation (Bagging)”?",
          "options": [
            "Understand bagging and RandomForest as example.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Bootstrap Aggregation (Bagging)” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Understand bagging and RandomForest as example.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Understand bagging and RandomForest as example."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-95",
      "title": "13.21 Cross Validation",
      "module": "Machine Learning",
      "objective": "Use cross_val_score for robust evaluation.",
      "why": "Rotate train/test folds for a more honest score.",
      "explanation": "<p><strong>What you will learn.</strong> Use cross_val_score for robust evaluation. By the end you should explain <em>Cross Validation</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Rotate train/test folds for a more honest score. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>K-fold CV reduces luck of a single split.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use cross_val_score for robust evaluation.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.model_selection import cross_val_score</code> — sets up a name, type, import, or definition you will use next.</li><li><code>from sklearn.linear_model import LogisticRegression</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import numpy as np</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = np.array([[0], [1], [2], [3], [4], [5], [6], [7]])</code> — stores or updates a value.</li><li><code>y = np.array([0, 0, 0, 0, 1, 1, 1, 1])</code> — stores or updates a value.</li><li><code>print(cross_val_score(LogisticRegression(), X, y, cv=2))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Cross Validation</em> solve?</li><li>Which line in the example most directly achieves: “Use cross_val_score for robust evaluation.”?</li><li>If you change one value in <code>from sklearn.model_selection import cross_val_score</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5], [6], [7]])\ny = np.array([0, 0, 0, 0, 1, 1, 1, 1])\nprint(cross_val_score(LogisticRegression(), X, y, cv=2))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5], [6], [7]])\ny = np.array([0, 0, 0, 0, 1, 1, 1, 1])\nprint(cross_val_score(LogisticRegression(), X, y, cv=2))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Cross Validation”?",
          "options": [
            "Use cross_val_score for robust evaluation.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Cross Validation” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use cross_val_score for robust evaluation.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use cross_val_score for robust evaluation."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-96",
      "title": "13.22 AUC - ROC Curve",
      "module": "Machine Learning",
      "objective": "Compute ROC AUC score.",
      "why": "Measure ranking quality of a classifier across thresholds.",
      "explanation": "<p><strong>What you will learn.</strong> Compute ROC AUC score. By the end you should explain <em>AUC - ROC Curve</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Measure ranking quality of a classifier across thresholds. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>1.0 perfect ranking; 0.5 random.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Compute ROC AUC score.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.metrics import roc_auc_score</code> — sets up a name, type, import, or definition you will use next.</li><li><code>y_true = [0, 0, 1, 1]</code> — stores or updates a value.</li><li><code>y_score = [0.1, 0.4, 0.35, 0.8]</code> — stores or updates a value.</li><li><code>print(roc_auc_score(y_true, y_score))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>AUC - ROC Curve</em> solve?</li><li>Which line in the example most directly achieves: “Compute ROC AUC score.”?</li><li>If you change one value in <code>from sklearn.metrics import roc_auc_score</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.metrics import roc_auc_score\ny_true = [0, 0, 1, 1]\ny_score = [0.1, 0.4, 0.35, 0.8]\nprint(roc_auc_score(y_true, y_score))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.metrics import roc_auc_score\ny_true = [0, 0, 1, 1]\ny_score = [0.1, 0.4, 0.35, 0.8]\nprint(roc_auc_score(y_true, y_score))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “AUC - ROC Curve”?",
          "options": [
            "Compute ROC AUC score.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “AUC - ROC Curve” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Compute ROC AUC score.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Compute ROC AUC score."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-97",
      "title": "13.23 K-Nearest Neighbors",
      "module": "Machine Learning",
      "objective": "Train a KNN classifier.",
      "why": "Classify a new point by its nearest neighbors’ votes.",
      "explanation": "<p><strong>What you will learn.</strong> Train a KNN classifier. By the end you should explain <em>K-Nearest Neighbors</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Classify a new point by its nearest neighbors’ votes. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Statistics and ML turn past data into patterns you can use carefully. Always ask: is this model useful for a real decision, and how do I check it?</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Simple, distance-based, good baseline.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Train a KNN classifier.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from sklearn.neighbors import KNeighborsClassifier</code> — sets up a name, type, import, or definition you will use next.</li><li><code>X = [[0], [1], [2], [3]]</code> — stores or updates a value.</li><li><code>y = [0, 0, 1, 1]</code> — stores or updates a value.</li><li><code>print(KNeighborsClassifier(n_neighbors=3).fit(X, y).predict([[1.1]]))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>K-Nearest Neighbors</em> solve?</li><li>Which line in the example most directly achieves: “Train a KNN classifier.”?</li><li>If you change one value in <code>from sklearn.neighbors import KNeighborsClassifier</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Shape mismatches and missing values silently ruin results. Inspect data before modeling.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from sklearn.neighbors import KNeighborsClassifier\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nprint(KNeighborsClassifier(n_neighbors=3).fit(X, y).predict([[1.1]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.neighbors import KNeighborsClassifier\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nprint(KNeighborsClassifier(n_neighbors=3).fit(X, y).predict([[1.1]]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: In your own words + code, adapt the example to a tiny real scenario (shop, school, or health). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “K-Nearest Neighbors”?",
          "options": [
            "Train a KNN classifier.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “K-Nearest Neighbors” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Train a KNN classifier.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Train a KNN classifier."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Shape mismatches and missing values silently ruin results. Inspect data before modeling.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-98",
      "title": "14.1 DSA Intro",
      "module": "DSA",
      "objective": "Know why DSA matters and Big-O at a glance.",
      "why": "Apps must stay fast as users grow — data structures & algorithms make that possible.",
      "explanation": "<p><strong>What you will learn.</strong> Know why DSA matters and Big-O at a glance. By the end you should explain <em>DSA Intro</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Apps must stay fast as users grow — data structures &amp; algorithms make that possible. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Choose structures for speed/memory tradeoffs. Big-O describes growth of time/space.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Know why DSA matters and Big-O at a glance.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"O(1) constant  O(n) linear  O(n log n) sort-like  O(n^2) neste…</code> — shows output so you can verify the result.</li><li><code>print(\"Right structure = faster apps at scale\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>DSA Intro</em> solve?</li><li>Which line in the example most directly achieves: “Know why DSA matters and Big-O at a glance.”?</li><li>If you change one value in <code>print(\"O(1) constant  O(n) linear  O(n log n) sort-like </code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print(\"O(1) constant  O(n) linear  O(n log n) sort-like  O(n^2) nested loops\")\nprint(\"Right structure = faster apps at scale\")",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "print(\"O(1) constant  O(n) linear  O(n log n) sort-like  O(n^2) nested loops\")\nprint(\"Right structure = faster apps at scale\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “DSA Intro”?",
          "options": [
            "Know why DSA matters and Big-O at a glance.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “DSA Intro” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Know why DSA matters and Big-O at a glance.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Know why DSA matters and Big-O at a glance."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-99",
      "title": "14.2 Lists & Arrays in DSA",
      "module": "DSA",
      "objective": "Use list operations with complexity awareness.",
      "why": "Random access to the 1000th order is O(1) with arrays/lists.",
      "explanation": "<p><strong>What you will learn.</strong> Use list operations with complexity awareness. By the end you should explain <em>Lists &amp; Arrays in DSA</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Random access to the 1000th order is O(1) with arrays/lists. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Index O(1), append amortized O(1), insert front O(n).</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use list operations with complexity awareness.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>orders = [101, 102, 103]</code> — stores or updates a value.</li><li><code>orders.append(104)      # end</code> — changes a collection.</li><li><code>orders.insert(0, 100)   # front slower</code> — changes a collection.</li><li><code>print(orders[2])</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Lists &amp; Arrays in DSA</em> solve?</li><li>Which line in the example most directly achieves: “Use list operations with complexity awareness.”?</li><li>If you change one value in <code>orders = [101, 102, 103]</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "orders = [101, 102, 103]\norders.append(104)      # end\norders.insert(0, 100)   # front slower\nprint(orders[2])",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "orders = [101, 102, 103]\norders.append(104)      # end\norders.insert(0, 100)   # front slower\nprint(orders[2])",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Lists & Arrays in DSA”?",
          "options": [
            "Use list operations with complexity awareness.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Lists & Arrays in DSA” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use list operations with complexity awareness.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use list operations with complexity awareness."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-100",
      "title": "14.3 Stacks — LIFO",
      "module": "DSA",
      "objective": "Implement a stack with a list.",
      "why": "Undo buttons and browser back use stacks (last in, first out).",
      "explanation": "<p><strong>What you will learn.</strong> Implement a stack with a list. By the end you should explain <em>LIFO</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Undo buttons and browser back use stacks (last in, first out). Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>push=append, pop=pop(), peek=[-1]</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Implement a stack with a list.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>stack = []</code> — stores or updates a value.</li><li><code>stack.append(\"page1\")</code> — changes a collection.</li><li><code>stack.append(\"page2\")</code> — changes a collection.</li><li><code>print(stack.pop())  # page2</code> — shows output so you can verify the result.</li><li><code>print(stack[-1])    # page1</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>LIFO</em> solve?</li><li>Which line in the example most directly achieves: “Implement a stack with a list.”?</li><li>If you change one value in <code>stack = []</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "stack = []\nstack.append(\"page1\")\nstack.append(\"page2\")\nprint(stack.pop())  # page2\nprint(stack[-1])    # page1",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "stack = []\nstack.append(\"page1\")\nstack.append(\"page2\")\nprint(stack.pop())  # page2\nprint(stack[-1])    # page1",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Stacks — LIFO”?",
          "options": [
            "Implement a stack with a list.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “LIFO” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Implement a stack with a list.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Implement a stack with a list."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-101",
      "title": "14.4 Queues — FIFO",
      "module": "DSA",
      "objective": "Implement a queue with collections.deque.",
      "why": "Print jobs and customer service lines are queues (first in, first out).",
      "explanation": "<p><strong>What you will learn.</strong> Implement a queue with collections.deque. By the end you should explain <em>FIFO</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Print jobs and customer service lines are queues (first in, first out). Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>enqueue right, dequeue left — deque is efficient.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Implement a queue with collections.deque.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>from collections import deque</code> — sets up a name, type, import, or definition you will use next.</li><li><code>q = deque()</code> — stores or updates a value.</li><li><code>q.append(\"customer A\")</code> — changes a collection.</li><li><code>q.append(\"customer B\")</code> — changes a collection.</li><li><code>print(q.popleft())  # A first</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>FIFO</em> solve?</li><li>Which line in the example most directly achieves: “Implement a queue with collections.deque.”?</li><li>If you change one value in <code>from collections import deque</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "from collections import deque\nq = deque()\nq.append(\"customer A\")\nq.append(\"customer B\")\nprint(q.popleft())  # A first",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "from collections import deque\nq = deque()\nq.append(\"customer A\")\nq.append(\"customer B\")\nprint(q.popleft())  # A first",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Queues — FIFO”?",
          "options": [
            "Implement a queue with collections.deque.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “FIFO” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Implement a queue with collections.deque.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Implement a queue with collections.deque."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-102",
      "title": "14.5 Linked Lists",
      "module": "DSA",
      "objective": "Build a simple singly linked list node.",
      "why": "Insert/delete in the middle without shifting a whole array.",
      "explanation": "<p><strong>What you will learn.</strong> Build a simple singly linked list node. By the end you should explain <em>Linked Lists</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Insert/delete in the middle without shifting a whole array. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Node has value + next pointer.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Build a simple singly linked list node.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class Node:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self, value):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.value = value</code> — stores or updates a value.</li><li><code>self.next = None</code> — stores or updates a value.</li><li><code>head = Node(1)</code> — stores or updates a value.</li><li><code>head.next = Node(2)</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Linked Lists</em> solve?</li><li>Which line in the example most directly achieves: “Build a simple singly linked list node.”?</li><li>If you change one value in <code>class Node:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)\ncur = head\nwhile cur:\n    print(cur.value)\n    cur = cur.next",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)\ncur = head\nwhile cur:\n    print(cur.value)\n    cur = cur.next",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Linked Lists”?",
          "options": [
            "Build a simple singly linked list node.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Linked Lists” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Build a simple singly linked list node.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Build a simple singly linked list node."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-103",
      "title": "14.6 Hash Tables — dict",
      "module": "DSA",
      "objective": "Use dict as a hash map for O(1) average lookups.",
      "why": "Instant lookup of customer by phone number.",
      "explanation": "<p><strong>What you will learn.</strong> Use dict as a hash map for O(1) average lookups. By the end you should explain <em>dict</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Instant lookup of customer by phone number. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> HTML describes structure and meaning (headings, forms, landmarks, links). Clear structure helps browsers, screen readers, and search engines.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Keys must be hashable (str, int, tuple...).</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use dict as a hash map for O(1) average lookups.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>phonebook = {\"Ada\": \"0803...\", \"Bola\": \"0901...\"}</code> — stores or updates a value.</li><li><code>print(phonebook.get(\"Ada\"))</code> — shows output so you can verify the result.</li><li><code>phonebook[\"Chidi\"] = \"0701...\"</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>dict</em> solve?</li><li>Which line in the example most directly achieves: “Use dict as a hash map for O(1) average lookups.”?</li><li>If you change one value in <code>phonebook = {\"Ada\": \"0803...\", \"Bola\": \"0901...\"}</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Missing keys return errors/undefined — print keys or use safe get/default patterns.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "phonebook = {\"Ada\": \"0803...\", \"Bola\": \"0901...\"}\nprint(phonebook.get(\"Ada\"))\nphonebook[\"Chidi\"] = \"0701...\"",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "phonebook = {\"Ada\": \"0803...\", \"Bola\": \"0901...\"}\nprint(phonebook.get(\"Ada\"))\nphonebook[\"Chidi\"] = \"0701...\"",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Hash Tables — dict”?",
          "options": [
            "Use dict as a hash map for O(1) average lookups.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “dict” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use dict as a hash map for O(1) average lookups.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use dict as a hash map for O(1) average lookups."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Missing keys return errors/undefined — print keys or use safe get/default patterns.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-104",
      "title": "14.7 Trees Intro",
      "module": "DSA",
      "objective": "Understand root, parent, child, leaf.",
      "why": "Org charts and folder systems are trees.",
      "explanation": "<p><strong>What you will learn.</strong> Understand root, parent, child, leaf. By the end you should explain <em>Trees Intro</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Org charts and folder systems are trees. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Hierarchical data beyond flat lists.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Understand root, parent, child, leaf.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class TreeNode:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self, val):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.val = val</code> — stores or updates a value.</li><li><code>self.children = []</code> — stores or updates a value.</li><li><code>root = TreeNode(\"CEO\")</code> — stores or updates a value.</li><li><code>root.children.append(TreeNode(\"CTO\"))</code> — changes a collection.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Trees Intro</em> solve?</li><li>Which line in the example most directly achieves: “Understand root, parent, child, leaf.”?</li><li>If you change one value in <code>class TreeNode:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.children = []\nroot = TreeNode(\"CEO\")\nroot.children.append(TreeNode(\"CTO\"))\nprint(root.val, [c.val for c in root.children])",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.children = []\nroot = TreeNode(\"CEO\")\nroot.children.append(TreeNode(\"CTO\"))\nprint(root.val, [c.val for c in root.children])",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Trees Intro”?",
          "options": [
            "Understand root, parent, child, leaf.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Trees Intro” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Understand root, parent, child, leaf.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Understand root, parent, child, leaf."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-105",
      "title": "14.8 Binary Trees",
      "module": "DSA",
      "objective": "Create a binary tree node with left/right.",
      "why": "Each node has up to two children — foundation for search trees & heaps.",
      "explanation": "<p><strong>What you will learn.</strong> Create a binary tree node with left/right. By the end you should explain <em>Binary Trees</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Each node has up to two children — foundation for search trees &amp; heaps. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Traverse: inorder, preorder, postorder.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create a binary tree node with left/right.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class BNode:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self, val):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.val = val</code> — stores or updates a value.</li><li><code>self.left = None</code> — stores or updates a value.</li><li><code>self.right = None</code> — stores or updates a value.</li><li><code>root = BNode(10)</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Binary Trees</em> solve?</li><li>Which line in the example most directly achieves: “Create a binary tree node with left/right.”?</li><li>If you change one value in <code>class BNode:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class BNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\nroot = BNode(10)\nroot.left = BNode(5)\nroot.right = BNode(15)",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class BNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\nroot = BNode(10)\nroot.left = BNode(5)\nroot.right = BNode(15)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Binary Trees”?",
          "options": [
            "Create a binary tree node with left/right.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Binary Trees” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create a binary tree node with left/right.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create a binary tree node with left/right."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-106",
      "title": "14.9 Binary Search Trees",
      "module": "DSA",
      "objective": "Insert into a BST preserving left < node < right.",
      "why": "Keep numbers sorted for fast search like a phone directory.",
      "explanation": "<p><strong>What you will learn.</strong> Insert into a BST preserving left &lt; node &lt; right. By the end you should explain <em>Binary Search Trees</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Keep numbers sorted for fast search like a phone directory. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Average search O(log n) if balanced.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Insert into a BST preserving left &lt; node &lt; right.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>16</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>class BST:</code> — sets up a name, type, import, or definition you will use next.</li><li><code>def __init__(self, val):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>self.val = val</code> — stores or updates a value.</li><li><code>self.left = None</code> — stores or updates a value.</li><li><code>self.right = None</code> — stores or updates a value.</li><li><code>def insert(self, val):</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Binary Search Trees</em> solve?</li><li>Which line in the example most directly achieves: “Insert into a BST preserving left &lt; node &lt; right.”?</li><li>If you change one value in <code>class BST:</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "class BST:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n    def insert(self, val):\n        if val < self.val:\n            if self.left: self.left.insert(val)\n            else: self.left = BST(val)\n        elif val > self.val:\n            if self.right: self.right.insert(val)\n            else: self.right = BST(val)\nroot = BST(10)\nfor v in [5, 15, 2, 7]:\n    root.insert(v)\nprint(root.left.val, root.right.val)",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class BST:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n    def insert(self, val):\n        if val < self.val:\n            if self.left: self.left.insert(val)\n            else: self.left = BST(val)\n        elif val > self.val:\n            if self.right: self.right.insert(val)\n            else: self.right = BST(val)\nroot = BST(10)\nfor v in [5, 15, 2, 7]:\n    root.insert(v)\nprint(root.left.val, root.right.val)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Binary Search Trees”?",
          "options": [
            "Insert into a BST preserving left < node < right.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Binary Search Trees” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Insert into a BST preserving left < node < right.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Insert into a BST preserving left < node < right."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-107",
      "title": "14.10 AVL Trees",
      "module": "DSA",
      "objective": "Know why AVL balances and what rotations achieve.",
      "why": "Self-balancing trees keep searches fast even after many inserts.",
      "explanation": "<p><strong>What you will learn.</strong> Know why AVL balances and what rotations achieve. By the end you should explain <em>AVL Trees</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Self-balancing trees keep searches fast even after many inserts. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Height difference of children at most 1. Used when you need guaranteed log n.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Know why AVL balances and what rotations achieve.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"AVL = BST + balance factor check + rotations\")</code> — shows output so you can verify the result.</li><li><code>print(\"Use case: in-memory indexes needing predictable speed\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>AVL Trees</em> solve?</li><li>Which line in the example most directly achieves: “Know why AVL balances and what rotations achieve.”?</li><li>If you change one value in <code>print(\"AVL = BST + balance factor check + rotations\")</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print(\"AVL = BST + balance factor check + rotations\")\nprint(\"Use case: in-memory indexes needing predictable speed\")",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "print(\"AVL = BST + balance factor check + rotations\")\nprint(\"Use case: in-memory indexes needing predictable speed\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “AVL Trees”?",
          "options": [
            "Know why AVL balances and what rotations achieve.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “AVL Trees” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Know why AVL balances and what rotations achieve.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Know why AVL balances and what rotations achieve."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-108",
      "title": "14.11 Graphs",
      "module": "DSA",
      "objective": "Represent a graph with an adjacency list.",
      "why": "Maps, social networks, and delivery routes are graphs.",
      "explanation": "<p><strong>What you will learn.</strong> Represent a graph with an adjacency list. By the end you should explain <em>Graphs</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Maps, social networks, and delivery routes are graphs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Nodes + edges; directed or undirected.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Represent a graph with an adjacency list.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>graph = {</code> — stores or updates a value.</li><li><code>\"Lagos\": [\"Ibadan\", \"Abeokuta\"],</code> — does a step in the overall recipe.</li><li><code>\"Ibadan\": [\"Lagos\", \"Ife\"],</code> — does a step in the overall recipe.</li><li><code>\"Abeokuta\": [\"Lagos\"],</code> — does a step in the overall recipe.</li><li><code>\"Ife\": [\"Ibadan\"],</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Graphs</em> solve?</li><li>Which line in the example most directly achieves: “Represent a graph with an adjacency list.”?</li><li>If you change one value in <code>graph = {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "graph = {\n  \"Lagos\": [\"Ibadan\", \"Abeokuta\"],\n  \"Ibadan\": [\"Lagos\", \"Ife\"],\n  \"Abeokuta\": [\"Lagos\"],\n  \"Ife\": [\"Ibadan\"],\n}\nprint(graph[\"Lagos\"])",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "graph = {\n  \"Lagos\": [\"Ibadan\", \"Abeokuta\"],\n  \"Ibadan\": [\"Lagos\", \"Ife\"],\n  \"Abeokuta\": [\"Lagos\"],\n  \"Ife\": [\"Ibadan\"],\n}\nprint(graph[\"Lagos\"])",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Graphs”?",
          "options": [
            "Represent a graph with an adjacency list.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Graphs” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Represent a graph with an adjacency list.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Represent a graph with an adjacency list."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-109",
      "title": "14.12 Linear Search",
      "module": "DSA",
      "objective": "Implement linear search.",
      "why": "Scan a list item by item — simple but slow on huge data.",
      "explanation": "<p><strong>What you will learn.</strong> Implement linear search. By the end you should explain <em>Linear Search</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Scan a list item by item — simple but slow on huge data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>O(n) time — fine for small lists.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Implement linear search.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>def linear_search(items, target):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>for i, x in enumerate(items):</code> — repeats work over items or until a condition ends.</li><li><code>if x == target:</code> — branches based on a condition.</li><li><code>return i</code> — sends a result back to the caller.</li><li><code>return -1</code> — sends a result back to the caller.</li><li><code>print(linear_search([4, 2, 9, 1], 9))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Linear Search</em> solve?</li><li>Which line in the example most directly achieves: “Implement linear search.”?</li><li>If you change one value in <code>def linear_search(items, target):</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "def linear_search(items, target):\n    for i, x in enumerate(items):\n        if x == target:\n            return i\n    return -1\nprint(linear_search([4, 2, 9, 1], 9))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def linear_search(items, target):\n    for i, x in enumerate(items):\n        if x == target:\n            return i\n    return -1\nprint(linear_search([4, 2, 9, 1], 9))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Linear Search”?",
          "options": [
            "Implement linear search.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Linear Search” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Implement linear search.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Implement linear search."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-110",
      "title": "14.13 Binary Search",
      "module": "DSA",
      "objective": "Binary search on a sorted list.",
      "why": "Guess a number 1–100 in ~7 tries — divide and conquer.",
      "explanation": "<p><strong>What you will learn.</strong> Binary search on a sorted list. By the end you should explain <em>Binary Search</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Guess a number 1–100 in ~7 tries — divide and conquer. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>O(log n). Data must be sorted.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Binary search on a sorted list.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>def binary_search(arr, target):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>lo, hi = 0, len(arr) - 1</code> — stores or updates a value.</li><li><code>while lo &lt;= hi:</code> — repeats work over items or until a condition ends.</li><li><code>mid = (lo + hi) // 2</code> — stores or updates a value.</li><li><code>if arr[mid] == target: return mid</code> — branches based on a condition.</li><li><code>if arr[mid] &lt; target: lo = mid + 1</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Binary Search</em> solve?</li><li>Which line in the example most directly achieves: “Binary search on a sorted list.”?</li><li>If you change one value in <code>def binary_search(arr, target):</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: return mid\n        if arr[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1\nprint(binary_search([1, 3, 5, 7, 9], 7))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: return mid\n        if arr[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1\nprint(binary_search([1, 3, 5, 7, 9], 7))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Binary Search”?",
          "options": [
            "Binary search on a sorted list.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Binary Search” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Binary search on a sorted list.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Binary search on a sorted list."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-111",
      "title": "14.14 Bubble Sort",
      "module": "DSA",
      "objective": "Implement bubble sort for learning (not production).",
      "why": "See how sorting works by swapping neighbors.",
      "explanation": "<p><strong>What you will learn.</strong> Implement bubble sort for learning (not production). By the end you should explain <em>Bubble Sort</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> See how sorting works by swapping neighbors. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Implement bubble sort for learning (not production).</p><p>This lesson focuses on <strong>Bubble Sort</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Implement bubble sort for learning (not production).” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>def bubble(arr):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>a = arr[:]</code> — stores or updates a value.</li><li><code>n = len(a)</code> — stores or updates a value.</li><li><code>for i in range(n):</code> — repeats work over items or until a condition ends.</li><li><code>for j in range(0, n - i - 1):</code> — repeats work over items or until a condition ends.</li><li><code>if a[j] &gt; a[j + 1]:</code> — branches based on a condition.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Bubble Sort</em> solve?</li><li>Which line in the example most directly achieves: “Implement bubble sort for learning (not production).”?</li><li>If you change one value in <code>def bubble(arr):</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "def bubble(arr):\n    a = arr[:]\n    n = len(a)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if a[j] > a[j + 1]:\n                a[j], a[j + 1] = a[j + 1], a[j]\n    return a\nprint(bubble([5, 1, 4, 2]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def bubble(arr):\n    a = arr[:]\n    n = len(a)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if a[j] > a[j + 1]:\n                a[j], a[j + 1] = a[j + 1], a[j]\n    return a\nprint(bubble([5, 1, 4, 2]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Bubble Sort”?",
          "options": [
            "Implement bubble sort for learning (not production).",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Bubble Sort” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Implement bubble sort for learning (not production).",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Implement bubble sort for learning (not production)."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-112",
      "title": "14.15 Selection Sort",
      "module": "DSA",
      "objective": "Implement selection sort.",
      "why": "Repeatedly select the minimum and place it next.",
      "explanation": "<p><strong>What you will learn.</strong> Implement selection sort. By the end you should explain <em>Selection Sort</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Repeatedly select the minimum and place it next. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Implement selection sort.</p><p>This lesson focuses on <strong>Selection Sort</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Implement selection sort.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>def selection(arr):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>a = arr[:]</code> — stores or updates a value.</li><li><code>for i in range(len(a)):</code> — repeats work over items or until a condition ends.</li><li><code>m = i</code> — stores or updates a value.</li><li><code>for j in range(i + 1, len(a)):</code> — repeats work over items or until a condition ends.</li><li><code>if a[j] &lt; a[m]: m = j</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Selection Sort</em> solve?</li><li>Which line in the example most directly achieves: “Implement selection sort.”?</li><li>If you change one value in <code>def selection(arr):</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "def selection(arr):\n    a = arr[:]\n    for i in range(len(a)):\n        m = i\n        for j in range(i + 1, len(a)):\n            if a[j] < a[m]: m = j\n        a[i], a[m] = a[m], a[i]\n    return a\nprint(selection([64, 25, 12, 22]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def selection(arr):\n    a = arr[:]\n    for i in range(len(a)):\n        m = i\n        for j in range(i + 1, len(a)):\n            if a[j] < a[m]: m = j\n        a[i], a[m] = a[m], a[i]\n    return a\nprint(selection([64, 25, 12, 22]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Selection Sort”?",
          "options": [
            "Implement selection sort.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Selection Sort” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Implement selection sort.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Implement selection sort."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-113",
      "title": "14.16 Insertion Sort",
      "module": "DSA",
      "objective": "Implement insertion sort.",
      "why": "Like sorting cards in your hand — good for nearly sorted data.",
      "explanation": "<p><strong>What you will learn.</strong> Implement insertion sort. By the end you should explain <em>Insertion Sort</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Like sorting cards in your hand — good for nearly sorted data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>O(n^2) worst, fast on small/nearly sorted.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Implement insertion sort.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>def insertion(arr):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>a = arr[:]</code> — stores or updates a value.</li><li><code>for i in range(1, len(a)):</code> — repeats work over items or until a condition ends.</li><li><code>key = a[i]</code> — stores or updates a value.</li><li><code>j = i - 1</code> — stores or updates a value.</li><li><code>while j &gt;= 0 and a[j] &gt; key:</code> — repeats work over items or until a condition ends.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Insertion Sort</em> solve?</li><li>Which line in the example most directly achieves: “Implement insertion sort.”?</li><li>If you change one value in <code>def insertion(arr):</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "def insertion(arr):\n    a = arr[:]\n    for i in range(1, len(a)):\n        key = a[i]\n        j = i - 1\n        while j >= 0 and a[j] > key:\n            a[j + 1] = a[j]\n            j -= 1\n        a[j + 1] = key\n    return a\nprint(insertion([12, 11, 13, 5, 6]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def insertion(arr):\n    a = arr[:]\n    for i in range(1, len(a)):\n        key = a[i]\n        j = i - 1\n        while j >= 0 and a[j] > key:\n            a[j + 1] = a[j]\n            j -= 1\n        a[j + 1] = key\n    return a\nprint(insertion([12, 11, 13, 5, 6]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Insertion Sort”?",
          "options": [
            "Implement insertion sort.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Insertion Sort” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Implement insertion sort.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Implement insertion sort."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-114",
      "title": "14.17 Quick Sort",
      "module": "DSA",
      "objective": "Implement a simple recursive quicksort.",
      "why": "Industry favorite average-case O(n log n) sort.",
      "explanation": "<p><strong>What you will learn.</strong> Implement a simple recursive quicksort. By the end you should explain <em>Quick Sort</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Industry favorite average-case O(n log n) sort. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Implement a simple recursive quicksort.</p><p>This lesson focuses on <strong>Quick Sort</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Implement a simple recursive quicksort.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>def quicksort(arr):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if len(arr) &lt;= 1: return arr</code> — branches based on a condition.</li><li><code>pivot = arr[len(arr) // 2]</code> — stores or updates a value.</li><li><code>left = [x for x in arr if x &lt; pivot]</code> — stores or updates a value.</li><li><code>mid = [x for x in arr if x == pivot]</code> — repeats work over items or until a condition ends.</li><li><code>right = [x for x in arr if x &gt; pivot]</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Quick Sort</em> solve?</li><li>Which line in the example most directly achieves: “Implement a simple recursive quicksort.”?</li><li>If you change one value in <code>def quicksort(arr):</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "def quicksort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    mid = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + mid + quicksort(right)\nprint(quicksort([3, 6, 8, 10, 1, 2, 1]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def quicksort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    mid = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + mid + quicksort(right)\nprint(quicksort([3, 6, 8, 10, 1, 2, 1]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Quick Sort”?",
          "options": [
            "Implement a simple recursive quicksort.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Quick Sort” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Implement a simple recursive quicksort.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Implement a simple recursive quicksort."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-115",
      "title": "14.18 Counting Sort",
      "module": "DSA",
      "objective": "Implement counting sort for non-negative ints.",
      "why": "Sort integers in a known small range in linear time.",
      "explanation": "<p><strong>What you will learn.</strong> Implement counting sort for non-negative ints. By the end you should explain <em>Counting Sort</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Sort integers in a known small range in linear time. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Great for grades 0–100 style data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Implement counting sort for non-negative ints.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>def counting_sort(arr):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if not arr: return []</code> — branches based on a condition.</li><li><code>m = max(arr)</code> — stores or updates a value.</li><li><code>count = [0] * (m + 1)</code> — stores or updates a value.</li><li><code>for x in arr: count[x] += 1</code> — stores or updates a value.</li><li><code>out = []</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Counting Sort</em> solve?</li><li>Which line in the example most directly achieves: “Implement counting sort for non-negative ints.”?</li><li>If you change one value in <code>def counting_sort(arr):</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "def counting_sort(arr):\n    if not arr: return []\n    m = max(arr)\n    count = [0] * (m + 1)\n    for x in arr: count[x] += 1\n    out = []\n    for val, c in enumerate(count):\n        out.extend([val] * c)\n    return out\nprint(counting_sort([4, 2, 2, 8, 3, 3, 1]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def counting_sort(arr):\n    if not arr: return []\n    m = max(arr)\n    count = [0] * (m + 1)\n    for x in arr: count[x] += 1\n    out = []\n    for val, c in enumerate(count):\n        out.extend([val] * c)\n    return out\nprint(counting_sort([4, 2, 2, 8, 3, 3, 1]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Counting Sort”?",
          "options": [
            "Implement counting sort for non-negative ints.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Counting Sort” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Implement counting sort for non-negative ints.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Implement counting sort for non-negative ints."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-116",
      "title": "14.19 Radix Sort",
      "module": "DSA",
      "objective": "Understand radix sort idea (LSD).",
      "why": "Sort large integers digit by digit.",
      "explanation": "<p><strong>What you will learn.</strong> Understand radix sort idea (LSD). By the end you should explain <em>Radix Sort</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Sort large integers digit by digit. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Uses counting sort as a subroutine per digit.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Understand radix sort idea (LSD).” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"Radix sort: process digits from least to most significant\")</code> — shows output so you can verify the result.</li><li><code>print(\"Useful for fixed-length IDs and large integer keys\")</code> — shows output so you can verify the result.</li><li><code>nums = [170, 45, 75, 90, 802, 24, 2, 66]</code> — stores or updates a value.</li><li><code>print(sorted(nums))  # practical stand-in; implement full radix as ch…</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Radix Sort</em> solve?</li><li>Which line in the example most directly achieves: “Understand radix sort idea (LSD).”?</li><li>If you change one value in <code>print(\"Radix sort: process digits from least to most sig</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print(\"Radix sort: process digits from least to most significant\")\nprint(\"Useful for fixed-length IDs and large integer keys\")\nnums = [170, 45, 75, 90, 802, 24, 2, 66]\nprint(sorted(nums))  # practical stand-in; implement full radix as challenge",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "print(\"Radix sort: process digits from least to most significant\")\nprint(\"Useful for fixed-length IDs and large integer keys\")\nnums = [170, 45, 75, 90, 802, 24, 2, 66]\nprint(sorted(nums))  # practical stand-in; implement full radix as challenge",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Radix Sort”?",
          "options": [
            "Understand radix sort idea (LSD).",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Radix Sort” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Understand radix sort idea (LSD).",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Understand radix sort idea (LSD)."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-117",
      "title": "14.20 Merge Sort",
      "module": "DSA",
      "objective": "Implement merge sort by divide and conquer.",
      "why": "Stable O(n log n) sort used widely in libraries.",
      "explanation": "<p><strong>What you will learn.</strong> Implement merge sort by divide and conquer. By the end you should explain <em>Merge Sort</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Stable O(n log n) sort used widely in libraries. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The right structure can turn a slow app into a fast one.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Implement merge sort by divide and conquer.</p><p>This lesson focuses on <strong>Merge Sort</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Implement merge sort by divide and conquer.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>17</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>def merge_sort(arr):</code> — sets up a name, type, import, or definition you will use next.</li><li><code>if len(arr) &lt;= 1: return arr</code> — branches based on a condition.</li><li><code>mid = len(arr) // 2</code> — stores or updates a value.</li><li><code>left = merge_sort(arr[:mid])</code> — stores or updates a value.</li><li><code>right = merge_sort(arr[mid:])</code> — stores or updates a value.</li><li><code>return merge(left, right)</code> — sends a result back to the caller.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Merge Sort</em> solve?</li><li>Which line in the example most directly achieves: “Implement merge sort by divide and conquer.”?</li><li>If you change one value in <code>def merge_sort(arr):</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(a, b):\n    i = j = 0\n    out = []\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            out.append(a[i]); i += 1\n        else:\n            out.append(b[j]); j += 1\n    out.extend(a[i:]); out.extend(b[j:])\n    return out\nprint(merge_sort([38, 27, 43, 3, 9, 82, 10]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(a, b):\n    i = j = 0\n    out = []\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            out.append(a[i]); i += 1\n        else:\n            out.append(b[j]); j += 1\n    out.extend(a[i:]); out.extend(b[j:])\n    return out\nprint(merge_sort([38, 27, 43, 3, 9, 82, 10]))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Run the idea with your own sample data (list of 5–8 items) and print the result. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Merge Sort”?",
          "options": [
            "Implement merge sort by divide and conquer.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Merge Sort” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Implement merge sort by divide and conquer.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Implement merge sort by divide and conquer."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-118",
      "title": "15.1 MySQL Get Started",
      "module": "MySQL",
      "objective": "Connect Python to MySQL conceptually and install drivers.",
      "why": "Business data needs a reliable database — MySQL is a popular choice.",
      "explanation": "<p><strong>What you will learn.</strong> Connect Python to MySQL conceptually and install drivers. By the end you should explain <em>MySQL Get Started</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Business data needs a reliable database — MySQL is a popular choice. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>pip install mysql-connector-python (or PyMySQL). Create connection with host, user, password.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Connect Python to MySQL conceptually and install drivers.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>import mysql.connector</code> — sets up a name, type, import, or definition you will use next.</li><li><code>print(\"Connected pattern: connect → cursor → execute → commit → close\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>MySQL Get Started</em> solve?</li><li>Which line in the example most directly achieves: “Connect Python to MySQL conceptually and install drivers.”?</li><li>If you change one value in <code>import mysql.connector</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# pip install mysql-connector-python\nimport mysql.connector\n# conn = mysql.connector.connect(host=\"localhost\", user=\"root\", password=\"secret\")\nprint(\"Connected pattern: connect → cursor → execute → commit → close\")",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "# pip install mysql-connector-python\nimport mysql.connector\n# conn = mysql.connector.connect(host=\"localhost\", user=\"root\", password=\"secret\")\nprint(\"Connected pattern: connect → cursor → execute → commit → close\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “MySQL Get Started”?",
          "options": [
            "Connect Python to MySQL conceptually and install drivers.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “MySQL Get Started” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Connect Python to MySQL conceptually and install drivers.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Connect Python to MySQL conceptually and install drivers."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-119",
      "title": "15.2 Create Database",
      "module": "MySQL",
      "objective": "Create a database with SQL via Python.",
      "why": "Each product (shop, school) often gets its own database.",
      "explanation": "<p><strong>What you will learn.</strong> Create a database with SQL via Python. By the end you should explain <em>Create Database</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Each product (shop, school) often gets its own database. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Create a database with SQL via Python.</p><p>This lesson focuses on <strong>Create Database</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create a database with SQL via Python.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sql = \"CREATE DATABASE IF NOT EXISTS shop_db\"</code> — stores or updates a value.</li><li><code>print(sql)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Create Database</em> solve?</li><li>Which line in the example most directly achieves: “Create a database with SQL via Python.”?</li><li>If you change one value in <code>sql = \"CREATE DATABASE IF NOT EXISTS shop_db\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sql = \"CREATE DATABASE IF NOT EXISTS shop_db\"\nprint(sql)\n# cursor.execute(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"CREATE DATABASE IF NOT EXISTS shop_db\"\nprint(sql)\n# cursor.execute(sql)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Create Database”?",
          "options": [
            "Create a database with SQL via Python.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Create Database” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Create a database with SQL via Python.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Create a database with SQL via Python."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-120",
      "title": "15.3 Create Table",
      "module": "MySQL",
      "objective": "Define a table schema with CREATE TABLE.",
      "why": "Tables hold structured rows — customers, products, orders.",
      "explanation": "<p><strong>What you will learn.</strong> Define a table schema with CREATE TABLE. By the end you should explain <em>Create Table</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Tables hold structured rows — customers, products, orders. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Columns + types + primary key.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Define a table schema with CREATE TABLE.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sql = \"\"\"</code> — stores or updates a value.</li><li><code>CREATE TABLE IF NOT EXISTS products (</code> — branches based on a condition.</li><li><code>id INT AUTO_INCREMENT PRIMARY KEY,</code> — does a step in the overall recipe.</li><li><code>name VARCHAR(100),</code> — does a step in the overall recipe.</li><li><code>price DECIMAL(10,2),</code> — does a step in the overall recipe.</li><li><code>qty INT</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Create Table</em> solve?</li><li>Which line in the example most directly achieves: “Define a table schema with CREATE TABLE.”?</li><li>If you change one value in <code>sql = \"\"\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sql = \"\"\"\nCREATE TABLE IF NOT EXISTS products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100),\n  price DECIMAL(10,2),\n  qty INT\n)\n\"\"\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"\"\"\nCREATE TABLE IF NOT EXISTS products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100),\n  price DECIMAL(10,2),\n  qty INT\n)\n\"\"\"\nprint(sql)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Create Table”?",
          "options": [
            "Define a table schema with CREATE TABLE.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Create Table” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Define a table schema with CREATE TABLE.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Define a table schema with CREATE TABLE."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-121",
      "title": "15.4 Insert Rows",
      "module": "MySQL",
      "objective": "INSERT INTO table VALUES / parameterized queries.",
      "why": "Add new products or customers as they register.",
      "explanation": "<p><strong>What you will learn.</strong> INSERT INTO table VALUES / parameterized queries. By the end you should explain <em>Insert Rows</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Add new products or customers as they register. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Always parameterize to avoid SQL injection.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “INSERT INTO table VALUES / parameterized queries.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sql = \"INSERT INTO products (name, price, qty) VALUES (%s, %s, %s)\"</code> — stores or updates a value.</li><li><code>data = (\"Rice 50kg\", 45000, 20)</code> — stores or updates a value.</li><li><code>print(sql, data)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Insert Rows</em> solve?</li><li>Which line in the example most directly achieves: “INSERT INTO table VALUES / parameterized queries.”?</li><li>If you change one value in <code>sql = \"INSERT INTO products (name, price, qty) VALUES (%</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sql = \"INSERT INTO products (name, price, qty) VALUES (%s, %s, %s)\"\ndata = (\"Rice 50kg\", 45000, 20)\nprint(sql, data)\n# cursor.execute(sql, data); conn.commit()",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"INSERT INTO products (name, price, qty) VALUES (%s, %s, %s)\"\ndata = (\"Rice 50kg\", 45000, 20)\nprint(sql, data)\n# cursor.execute(sql, data); conn.commit()",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Insert Rows”?",
          "options": [
            "INSERT INTO table VALUES / parameterized queries.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Insert Rows” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: INSERT INTO table VALUES / parameterized queries.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: INSERT INTO table VALUES / parameterized queries."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-122",
      "title": "15.5 Select Data",
      "module": "MySQL",
      "objective": "SELECT columns FROM table.",
      "why": "Fetch inventory lists for your dashboard.",
      "explanation": "<p><strong>What you will learn.</strong> SELECT columns FROM table. By the end you should explain <em>Select Data</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Fetch inventory lists for your dashboard. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>SELECT columns FROM table.</p><p>This lesson focuses on <strong>Select Data</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “SELECT columns FROM table.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sql = \"SELECT id, name, price FROM products\"</code> — stores or updates a value.</li><li><code>print(sql)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Select Data</em> solve?</li><li>Which line in the example most directly achieves: “SELECT columns FROM table.”?</li><li>If you change one value in <code>sql = \"SELECT id, name, price FROM products\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sql = \"SELECT id, name, price FROM products\"\nprint(sql)\n# cursor.execute(sql)\n# for row in cursor.fetchall(): print(row)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT id, name, price FROM products\"\nprint(sql)\n# cursor.execute(sql)\n# for row in cursor.fetchall(): print(row)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Select Data”?",
          "options": [
            "SELECT columns FROM table.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Select Data” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: SELECT columns FROM table.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: SELECT columns FROM table."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-123",
      "title": "15.6 WHERE Filters",
      "module": "MySQL",
      "objective": "Filter with WHERE and comparisons.",
      "why": "Show only products under ₦5000 — filter rows.",
      "explanation": "<p><strong>What you will learn.</strong> Filter with WHERE and comparisons. By the end you should explain <em>WHERE Filters</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Show only products under ₦5000 — filter rows. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Filter with WHERE and comparisons.</p><p>This lesson focuses on <strong>WHERE Filters</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Filter with WHERE and comparisons.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sql = \"SELECT * FROM products WHERE price &lt; %s AND qty &gt; 0\"</code> — stores or updates a value.</li><li><code>print(sql, (5000,))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>WHERE Filters</em> solve?</li><li>Which line in the example most directly achieves: “Filter with WHERE and comparisons.”?</li><li>If you change one value in <code>sql = \"SELECT * FROM products WHERE price &lt; %s AND qty &gt;</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sql = \"SELECT * FROM products WHERE price < %s AND qty > 0\"\nprint(sql, (5000,))",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT * FROM products WHERE price < %s AND qty > 0\"\nprint(sql, (5000,))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “WHERE Filters”?",
          "options": [
            "Filter with WHERE and comparisons.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “WHERE Filters” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Filter with WHERE and comparisons.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Filter with WHERE and comparisons."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-124",
      "title": "15.7 ORDER BY",
      "module": "MySQL",
      "objective": "Order results ascending/descending.",
      "why": "Sort top-selling items for a report.",
      "explanation": "<p><strong>What you will learn.</strong> Order results ascending/descending. By the end you should explain <em>ORDER BY</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Sort top-selling items for a report. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Order results ascending/descending.</p><p>This lesson focuses on <strong>ORDER BY</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Order results ascending/descending.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sql = \"SELECT name, price FROM products ORDER BY price DESC\"</code> — stores or updates a value.</li><li><code>print(sql)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>ORDER BY</em> solve?</li><li>Which line in the example most directly achieves: “Order results ascending/descending.”?</li><li>If you change one value in <code>sql = \"SELECT name, price FROM products ORDER BY price D</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sql = \"SELECT name, price FROM products ORDER BY price DESC\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT name, price FROM products ORDER BY price DESC\"\nprint(sql)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “ORDER BY”?",
          "options": [
            "Order results ascending/descending.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “ORDER BY” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Order results ascending/descending.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Order results ascending/descending."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-125",
      "title": "15.8 DELETE Rows",
      "module": "MySQL",
      "objective": "DELETE FROM with WHERE (never forget WHERE!).",
      "why": "Remove discontinued products carefully.",
      "explanation": "<p><strong>What you will learn.</strong> DELETE FROM with WHERE (never forget WHERE!). By the end you should explain <em>DELETE Rows</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Remove discontinued products carefully. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Missing WHERE can wipe the whole table.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “DELETE FROM with WHERE (never forget WHERE!).” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sql = \"DELETE FROM products WHERE id = %s\"</code> — stores or updates a value.</li><li><code>print(sql, (42,))</code> — shows output so you can verify the result.</li><li><code>print(\"WARNING: always include WHERE in production deletes\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>DELETE Rows</em> solve?</li><li>Which line in the example most directly achieves: “DELETE FROM with WHERE (never forget WHERE!).”?</li><li>If you change one value in <code>sql = \"DELETE FROM products WHERE id = %s\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sql = \"DELETE FROM products WHERE id = %s\"\nprint(sql, (42,))\nprint(\"WARNING: always include WHERE in production deletes\")",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"DELETE FROM products WHERE id = %s\"\nprint(sql, (42,))\nprint(\"WARNING: always include WHERE in production deletes\")",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “DELETE Rows”?",
          "options": [
            "DELETE FROM with WHERE (never forget WHERE!).",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “DELETE Rows” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: DELETE FROM with WHERE (never forget WHERE!).",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: DELETE FROM with WHERE (never forget WHERE!)."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-126",
      "title": "15.9 DROP Table",
      "module": "MySQL",
      "objective": "DROP TABLE statement awareness.",
      "why": "Drop removes the table structure — rare and dangerous.",
      "explanation": "<p><strong>What you will learn.</strong> DROP TABLE statement awareness. By the end you should explain <em>DROP Table</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Drop removes the table structure — rare and dangerous. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Prefer soft-delete columns when possible.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “DROP TABLE statement awareness.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sql = \"DROP TABLE IF EXISTS old_temp_products\"</code> — stores or updates a value.</li><li><code>print(sql)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>DROP Table</em> solve?</li><li>Which line in the example most directly achieves: “DROP TABLE statement awareness.”?</li><li>If you change one value in <code>sql = \"DROP TABLE IF EXISTS old_temp_products\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sql = \"DROP TABLE IF EXISTS old_temp_products\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"DROP TABLE IF EXISTS old_temp_products\"\nprint(sql)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “DROP Table”?",
          "options": [
            "DROP TABLE statement awareness.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “DROP Table” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: DROP TABLE statement awareness.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: DROP TABLE statement awareness."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-127",
      "title": "15.10 UPDATE Rows",
      "module": "MySQL",
      "objective": "UPDATE SET ... WHERE ...",
      "why": "Change prices during a promo weekend.",
      "explanation": "<p><strong>What you will learn.</strong> UPDATE SET ... WHERE ... By the end you should explain <em>UPDATE Rows</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Change prices during a promo weekend. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>UPDATE SET ... WHERE ...</p><p>This lesson focuses on <strong>UPDATE Rows</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “UPDATE SET ... WHERE ...” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sql = \"UPDATE products SET price = %s WHERE id = %s\"</code> — stores or updates a value.</li><li><code>print(sql, (39999, 7))</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>UPDATE Rows</em> solve?</li><li>Which line in the example most directly achieves: “UPDATE SET ... WHERE ...”?</li><li>If you change one value in <code>sql = \"UPDATE products SET price = %s WHERE id = %s\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sql = \"UPDATE products SET price = %s WHERE id = %s\"\nprint(sql, (39999, 7))",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"UPDATE products SET price = %s WHERE id = %s\"\nprint(sql, (39999, 7))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “UPDATE Rows”?",
          "options": [
            "UPDATE SET ... WHERE ...",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “UPDATE Rows” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: UPDATE SET ... WHERE ...",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: UPDATE SET ... WHERE ..."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-128",
      "title": "15.11 LIMIT",
      "module": "MySQL",
      "objective": "LIMIT and OFFSET for paging.",
      "why": "Paginate API results — first 10 customers.",
      "explanation": "<p><strong>What you will learn.</strong> LIMIT and OFFSET for paging. By the end you should explain <em>LIMIT</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Paginate API results — first 10 customers. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>LIMIT 10 OFFSET 20 → page 3 if page size 10.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “LIMIT and OFFSET for paging.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sql = \"SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 0\"</code> — stores or updates a value.</li><li><code>print(sql)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>LIMIT</em> solve?</li><li>Which line in the example most directly achieves: “LIMIT and OFFSET for paging.”?</li><li>If you change one value in <code>sql = \"SELECT * FROM products ORDER BY id LIMIT 10 OFFSE</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sql = \"SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 0\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 0\"\nprint(sql)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “LIMIT”?",
          "options": [
            "LIMIT and OFFSET for paging.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “LIMIT” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: LIMIT and OFFSET for paging.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: LIMIT and OFFSET for paging."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-129",
      "title": "15.12 JOIN Tables",
      "module": "MySQL",
      "objective": "INNER JOIN related tables on keys.",
      "why": "Combine orders with customer names in one query.",
      "explanation": "<p><strong>What you will learn.</strong> INNER JOIN related tables on keys. By the end you should explain <em>JOIN Tables</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Combine orders with customer names in one query. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> HTML describes structure and meaning (headings, forms, landmarks, links). Clear structure helps browsers, screen readers, and search engines.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Join is how relational data becomes useful reports.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “INNER JOIN related tables on keys.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sql = \"\"\"</code> — stores or updates a value.</li><li><code>SELECT o.id, c.name, o.total</code> — does a step in the overall recipe.</li><li><code>FROM orders o</code> — sets up a name, type, import, or definition you will use next.</li><li><code>INNER JOIN customers c ON o.customer_id = c.id</code> — stores or updates a value.</li><li><code>\"\"\"</code> — does a step in the overall recipe.</li><li><code>print(sql)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>JOIN Tables</em> solve?</li><li>Which line in the example most directly achieves: “INNER JOIN related tables on keys.”?</li><li>If you change one value in <code>sql = \"\"\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sql = \"\"\"\nSELECT o.id, c.name, o.total\nFROM orders o\nINNER JOIN customers c ON o.customer_id = c.id\n\"\"\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"\"\"\nSELECT o.id, c.name, o.total\nFROM orders o\nINNER JOIN customers c ON o.customer_id = c.id\n\"\"\"\nprint(sql)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Adapt the sample SQL to a students/courses school scenario and print it. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “JOIN Tables”?",
          "options": [
            "INNER JOIN related tables on keys.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “JOIN Tables” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: INNER JOIN related tables on keys.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: INNER JOIN related tables on keys."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-130",
      "title": "16.1 MongoDB Get Started",
      "module": "MongoDB",
      "objective": "Connect to MongoDB from Python with PyMongo.",
      "why": "Flexible document storage fits product catalogs that change shape often.",
      "explanation": "<p><strong>What you will learn.</strong> Connect to MongoDB from Python with PyMongo. By the end you should explain <em>MongoDB Get Started</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Flexible document storage fits product catalogs that change shape often. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>pip install pymongo. Documents ≈ JSON. Collections ≈ tables.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Connect to MongoDB from Python with PyMongo.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>1</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print(\"MongoDB stores BSON documents in collections\")</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>MongoDB Get Started</em> solve?</li><li>Which line in the example most directly achieves: “Connect to MongoDB from Python with PyMongo.”?</li><li>If you change one value in <code>print(\"MongoDB stores BSON documents in collections\")</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "# from pymongo import MongoClient\n# client = MongoClient(\"mongodb://localhost:27017/\")\nprint(\"MongoDB stores BSON documents in collections\")",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Design a dict for a \"student\" document with name, courses (list), and active (bool). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “MongoDB Get Started”?",
          "options": [
            "Connect to MongoDB from Python with PyMongo.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “MongoDB Get Started” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Connect to MongoDB from Python with PyMongo.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Connect to MongoDB from Python with PyMongo."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-131",
      "title": "16.2 Create Database",
      "module": "MongoDB",
      "objective": "Access a database handle via client.",
      "why": "In MongoDB, DBs appear when you first store data.",
      "explanation": "<p><strong>What you will learn.</strong> Access a database handle via client. By the end you should explain <em>Create Database</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In MongoDB, DBs appear when you first store data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Access a database handle via client.</p><p>This lesson focuses on <strong>Create Database</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Access a database handle via client.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>1</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print('db = client[\"shop_db\"]  # created on first write')</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Create Database</em> solve?</li><li>Which line in the example most directly achieves: “Access a database handle via client.”?</li><li>If you change one value in <code>print('db = client[\"shop_db\"]  # created on first write'</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print('db = client[\"shop_db\"]  # created on first write')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Design a dict for a \"student\" document with name, courses (list), and active (bool). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Create Database”?",
          "options": [
            "Access a database handle via client.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Create Database” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Access a database handle via client.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Access a database handle via client."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-132",
      "title": "16.3 Collections",
      "module": "MongoDB",
      "objective": "Get a collection reference.",
      "why": "A collection holds many related documents (e.g., products).",
      "explanation": "<p><strong>What you will learn.</strong> Get a collection reference. By the end you should explain <em>Collections</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> A collection holds many related documents (e.g., products). Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Get a collection reference.</p><p>This lesson focuses on <strong>Collections</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Get a collection reference.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>1</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print('products = db[\"products\"]')</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Collections</em> solve?</li><li>Which line in the example most directly achieves: “Get a collection reference.”?</li><li>If you change one value in <code>print('products = db[\"products\"]')</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print('products = db[\"products\"]')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Design a dict for a \"student\" document with name, courses (list), and active (bool). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Collections”?",
          "options": [
            "Get a collection reference.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Collections” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Get a collection reference.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Get a collection reference."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-133",
      "title": "16.4 Insert Documents",
      "module": "MongoDB",
      "objective": "insert_one / insert_many",
      "why": "Add one or many product documents.",
      "explanation": "<p><strong>What you will learn.</strong> insert_one / insert_many By the end you should explain <em>Insert Documents</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Add one or many product documents. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>insert_one / insert_many</p><p>This lesson focuses on <strong>Insert Documents</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “insert_one / insert_many” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>doc = {\"name\": \"Blender\", \"price\": 35000, \"tags\": [\"kitchen\", \"electr…</code> — stores or updates a value.</li><li><code>print(\"insert_one(doc) →\", doc)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Insert Documents</em> solve?</li><li>Which line in the example most directly achieves: “insert_one / insert_many”?</li><li>If you change one value in <code>doc = {\"name\": \"Blender\", \"price\": 35000, \"tags\": [\"kitc</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "doc = {\"name\": \"Blender\", \"price\": 35000, \"tags\": [\"kitchen\", \"electric\"]}\nprint(\"insert_one(doc) →\", doc)",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Design a dict for a \"student\" document with name, courses (list), and active (bool). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Insert Documents”?",
          "options": [
            "insert_one / insert_many",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Insert Documents” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: insert_one / insert_many",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: insert_one / insert_many"
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-134",
      "title": "16.5 Find Documents",
      "module": "MongoDB",
      "objective": "find, find_one",
      "why": "List items or fetch one by filter.",
      "explanation": "<p><strong>What you will learn.</strong> find, find_one By the end you should explain <em>Find Documents</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> List items or fetch one by filter. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>No filter → all docs (careful at scale).</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “find, find_one” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print('find_one({\"name\": \"Blender\"})')</code> — shows output so you can verify the result.</li><li><code>print('for d in products.find(): print(d)')</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Find Documents</em> solve?</li><li>Which line in the example most directly achieves: “find, find_one”?</li><li>If you change one value in <code>print('find_one({\"name\": \"Blender\"})')</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print('find_one({\"name\": \"Blender\"})')\nprint('for d in products.find(): print(d)')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Design a dict for a \"student\" document with name, courses (list), and active (bool). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Find Documents”?",
          "options": [
            "find, find_one",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Find Documents” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: find, find_one",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: find, find_one"
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-135",
      "title": "16.6 Query Filters",
      "module": "MongoDB",
      "objective": "Use query operators like $lt, $gt, $in.",
      "why": "Find products cheaper than ₦20k with a tag.",
      "explanation": "<p><strong>What you will learn.</strong> Use query operators like $lt, $gt, $in. By the end you should explain <em>Query Filters</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Find products cheaper than ₦20k with a tag. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Mongo query language is dict-based.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use query operators like $lt, $gt, $in.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>query = {\"price\": {\"$lt\": 20000}, \"tags\": \"kitchen\"}</code> — stores or updates a value.</li><li><code>print(query)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Query Filters</em> solve?</li><li>Which line in the example most directly achieves: “Use query operators like $lt, $gt, $in.”?</li><li>If you change one value in <code>query = {\"price\": {\"$lt\": 20000}, \"tags\": \"kitchen\"}</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "query = {\"price\": {\"$lt\": 20000}, \"tags\": \"kitchen\"}\nprint(query)",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Design a dict for a \"student\" document with name, courses (list), and active (bool). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Query Filters”?",
          "options": [
            "Use query operators like $lt, $gt, $in.",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Query Filters” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Use query operators like $lt, $gt, $in.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Use query operators like $lt, $gt, $in."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-136",
      "title": "16.7 Sort",
      "module": "MongoDB",
      "objective": "sort([(field, 1|-1)])",
      "why": "Show newest reviews first.",
      "explanation": "<p><strong>What you will learn.</strong> sort([(field, 1|-1)]) By the end you should explain <em>Sort</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Show newest reviews first. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>sort([(field, 1|-1)])</p><p>This lesson focuses on <strong>Sort</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “sort([(field, 1|-1)])” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>1</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print('products.find().sort(\"price\", -1)')</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Sort</em> solve?</li><li>Which line in the example most directly achieves: “sort([(field, 1|-1)])”?</li><li>If you change one value in <code>print('products.find().sort(\"price\", -1)')</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print('products.find().sort(\"price\", -1)')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Design a dict for a \"student\" document with name, courses (list), and active (bool). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Sort”?",
          "options": [
            "sort([(field, 1|-1)])",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Sort” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: sort([(field, 1|-1)])",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: sort([(field, 1|-1)])"
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-137",
      "title": "16.8 Delete Documents",
      "module": "MongoDB",
      "objective": "delete_one / delete_many",
      "why": "Remove discontinued SKUs.",
      "explanation": "<p><strong>What you will learn.</strong> delete_one / delete_many By the end you should explain <em>Delete Documents</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Remove discontinued SKUs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>delete_one / delete_many</p><p>This lesson focuses on <strong>Delete Documents</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “delete_one / delete_many” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>1</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print('delete_many({\"discontinued\": True})')</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Delete Documents</em> solve?</li><li>Which line in the example most directly achieves: “delete_one / delete_many”?</li><li>If you change one value in <code>print('delete_many({\"discontinued\": True})')</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print('delete_many({\"discontinued\": True})')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Design a dict for a \"student\" document with name, courses (list), and active (bool). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Delete Documents”?",
          "options": [
            "delete_one / delete_many",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Delete Documents” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: delete_one / delete_many",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: delete_one / delete_many"
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-138",
      "title": "16.9 Drop Collection",
      "module": "MongoDB",
      "objective": "collection.drop()",
      "why": "Drop an entire collection when restructuring.",
      "explanation": "<p><strong>What you will learn.</strong> collection.drop() By the end you should explain <em>Drop Collection</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Drop an entire collection when restructuring. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Destructive — prefer delete_many for partial cleans.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “collection.drop()” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>1</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print('products.drop()  # removes whole collection')</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Drop Collection</em> solve?</li><li>Which line in the example most directly achieves: “collection.drop()”?</li><li>If you change one value in <code>print('products.drop()  # removes whole collection')</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print('products.drop()  # removes whole collection')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Design a dict for a \"student\" document with name, courses (list), and active (bool). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Drop Collection”?",
          "options": [
            "collection.drop()",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Drop Collection” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: collection.drop()",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: collection.drop()"
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-139",
      "title": "16.10 Update Documents",
      "module": "MongoDB",
      "objective": "update_one with $set",
      "why": "Update prices or stock counts in place.",
      "explanation": "<p><strong>What you will learn.</strong> update_one with $set By the end you should explain <em>Update Documents</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Update prices or stock counts in place. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>update_one with $set</p><p>This lesson focuses on <strong>Update Documents</strong>. Study the example until you can rewrite it from memory with different data.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “update_one with $set” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print('update_one({\"name\": \"Blender\"}, {\"$set\": {\"price\": 33000}})')</code> — shows output so you can verify the result.</li><li><code>print('update_one({\"name\": \"Blender\"}, {\"$inc\": {\"qty\": -1}})')</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Update Documents</em> solve?</li><li>Which line in the example most directly achieves: “update_one with $set”?</li><li>If you change one value in <code>print('update_one({\"name\": \"Blender\"}, {\"$set\": {\"price\"</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print('update_one({\"name\": \"Blender\"}, {\"$set\": {\"price\": 33000}})')\nprint('update_one({\"name\": \"Blender\"}, {\"$inc\": {\"qty\": -1}})')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Design a dict for a \"student\" document with name, courses (list), and active (bool). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Update Documents”?",
          "options": [
            "update_one with $set",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Update Documents” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: update_one with $set",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: update_one with $set"
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-140",
      "title": "16.11 Limit Results",
      "module": "MongoDB",
      "objective": "limit(n) on cursor",
      "why": "Return top 5 results for a mobile screen.",
      "explanation": "<p><strong>What you will learn.</strong> limit(n) on cursor By the end you should explain <em>Limit Results</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Return top 5 results for a mobile screen. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files by hand.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Combine with sort for top-N queries.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “limit(n) on cursor” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>1</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>print('products.find().sort(\"price\", 1).limit(5)')</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Limit Results</em> solve?</li><li>Which line in the example most directly achieves: “limit(n) on cursor”?</li><li>If you change one value in <code>print('products.find().sort(\"price\", 1).limit(5)')</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Never concatenate untrusted user input into queries — use parameters/placeholders.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "print('products.find().sort(\"price\", 1).limit(5)')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Design a dict for a \"student\" document with name, courses (list), and active (bool). Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "What is the main focus of “Limit Results”?",
          "options": [
            "limit(n) on cursor",
            "Only deleting files permanently",
            "Only designing CSS layouts",
            "Only configuring DNS records"
          ],
          "correct": 0,
          "explanation": "Match the learning objective for this lesson."
        },
        {
          "q": "When would you use “Limit Results” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: limit(n) on cursor",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: limit(n) on cursor"
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Never concatenate untrusted user input into queries — use parameters/placeholders.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run."
    },
    {
      "id": "py-141",
      "title": "17.1 Capstone — Shop Analytics Mini Project",
      "module": "Capstone",
      "objective": "Combine Python basics, data structures, and analysis ideas into one mini project plan.",
      "why": "Real junior roles ask you to glue skills: read data, clean it, compute metrics, show a chart.",
      "explanation": "<p><strong>What you will learn.</strong> Combine Python basics, data structures, and analysis ideas into one mini project plan. By the end you should explain <em>Shop Analytics Mini Project</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Real junior roles ask you to glue skills: read data, clean it, compute metrics, show a chart. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Project brief:<br>\n  1) Represent a week of sales as a list of dicts<br>\n  2) Compute total and best day<br>\n  3) (Optional) Plot with matplotlib<br>\n  4) (Optional) Save JSON report</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Combine Python basics, data structures, and analysis ideas into one mini project plan.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>sales = [</code> — stores or updates a value.</li><li><code>{\"day\": \"Mon\", \"amount\": 12000},</code> — does a step in the overall recipe.</li><li><code>{\"day\": \"Tue\", \"amount\": 15000},</code> — does a step in the overall recipe.</li><li><code>{\"day\": \"Wed\", \"amount\": 9000},</code> — does a step in the overall recipe.</li><li><code>{\"day\": \"Thu\", \"amount\": 18000},</code> — does a step in the overall recipe.</li><li><code>{\"day\": \"Fri\", \"amount\": 21000},</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the in-browser <strong>Python runner</strong> (Pyodide). Run the example unchanged first, then change one value and predict the new output before you run again. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Shop Analytics Mini Project</em> solve?</li><li>Which line in the example most directly achieves: “Combine Python basics, data structures, and analysis ideas into one mini project plan.”?</li><li>If you change one value in <code>sales = [</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "sales = [\n    {\"day\": \"Mon\", \"amount\": 12000},\n    {\"day\": \"Tue\", \"amount\": 15000},\n    {\"day\": \"Wed\", \"amount\": 9000},\n    {\"day\": \"Thu\", \"amount\": 18000},\n    {\"day\": \"Fri\", \"amount\": 21000},\n]\ntotal = sum(s[\"amount\"] for s in sales)\nbest = max(sales, key=lambda s: s[\"amount\"])\nprint(\"Total:\", total)\nprint(\"Best day:\", best[\"day\"], best[\"amount\"])",
      "exercises": [
        {
          "title": "Extend it",
          "instruction": "Add Saturday and Sunday, recompute total and best day, print average daily sales.",
          "solution": "sales = [\n    {\"day\": \"Mon\", \"amount\": 12000},\n    {\"day\": \"Tue\", \"amount\": 15000},\n    {\"day\": \"Wed\", \"amount\": 9000},\n    {\"day\": \"Thu\", \"amount\": 18000},\n    {\"day\": \"Fri\", \"amount\": 21000},\n    {\"day\": \"Sat\", \"amount\": 25000},\n    {\"day\": \"Sun\", \"amount\": 16000},\n]\ntotal = sum(s[\"amount\"] for s in sales)\nbest = max(sales, key=lambda s: s[\"amount\"])\navg = total / len(sales)\nprint(\"Total:\", total)\nprint(\"Best:\", best)\nprint(\"Average:\", round(avg, 2))",
          "level": "easy",
          "hint": "Start from the lesson example. Goal: Add Saturday and Sunday, recompute total and best day, print average daily sales. Change names/values first; only then restructure."
        }
      ],
      "quiz": [
        {
          "q": "Which structure best stores day+amount pairs?",
          "options": [
            "Only an int",
            "List of dicts (or DataFrame)",
            "A single string",
            "A boolean"
          ],
          "correct": 1,
          "explanation": "List of dicts (or pandas DataFrame) models tabular daily sales well."
        },
        {
          "q": "When would you use “Shop Analytics Mini Project” in a real project?",
          "options": [
            "Only when the computer restarts",
            "When you need to: Combine Python basics, data structures, and analysis ideas into one mini project plan.",
            "Never — theory only",
            "Only for choosing font colors"
          ],
          "correct": 1,
          "explanation": "This lesson’s skill is practical: Combine Python basics, data structures, and analysis ideas into one mini project plan."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "project": true
    }
  ],
  "paths": {
    "beginner": {
      "id": "beginner",
      "name": "Beginner Builder",
      "desc": "Zero → scripts, files, OOP basics, shop projects",
      "modules": null
    },
    "data": {
      "id": "data",
      "name": "Data & ML",
      "desc": "NumPy, Pandas, charts, machine learning",
      "modules": null
    },
    "backend": {
      "id": "backend",
      "name": "Backend Data",
      "desc": "MySQL & MongoDB for apps",
      "modules": null
    },
    "dsa": {
      "id": "dsa",
      "name": "CS & DSA",
      "desc": "Structures, search, sort — optional deep dive",
      "modules": null
    },
    "all": {
      "id": "all",
      "name": "Full Catalog",
      "desc": "Every Python lesson in order",
      "modules": null
    }
  }
};
