// ZeroToCode Academy — Python curriculum (144 lessons)
// Explanations expanded for deeper beginner comprehension
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
      "explanation": "<p><strong>What you will learn.</strong> Understand what Python is and where it is used in real life. By the end of this lesson you should be able to explain <em>Python Intro</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Banks, hospitals, online shops, and AI tools all run Python behind the scenes. Learning it opens doors to automation, data, and web apps. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Values often arrive as text from users or files. Conversion turns them into numbers (or other types) so math and comparisons work correctly. Invalid conversions must be handled.</p>\n<p><strong>Core explanation.</strong> Python is a high-level, readable programming language . You write instructions in plain English-like syntax; the computer runs them. Real uses: automate WhatsApp business reports, analyse sales data, build websites (Django), train AI models, control robots. It is free, has huge community support, and is the #1 first language for beginners. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Understand what Python is and where it is used in real life.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Python Intro</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Where will YOU use Python?”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# Python is readable — almost like English\nprint(\"Welcome to ZeroToCode Academy\")\nprint(\"Python powers Netflix recommendations, Instagram, and local bank apps\")",
      "exercises": [
        {
          "title": "Where will YOU use Python?",
          "instruction": "Write 3 print() lines: (1) your name, (2) one problem you want to solve with code, (3) one career or business goal.",
          "solution": "print(\"My name is Adaora\")\nprint(\"I want to automate my shop's daily sales summary\")\nprint(\"I want to become a data analyst or freelancing developer\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-02",
      "title": "1.2 Get Started — Install & First Run",
      "module": "Getting Started",
      "objective": "Set up Python and run your first script on your computer.",
      "why": "Like installing a POS machine before selling, you need Python installed before you can build programs.",
      "explanation": "<p><strong>What you will learn.</strong> Set up Python and run your first script on your computer. By the end of this lesson you should be able to explain <em>Get Started</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Like installing a POS machine before selling, you need Python installed before you can build programs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Foundations look small but they support everything else: tooling, syntax rules, and how you display results. If these feel shaky, every later topic becomes harder than it needs to be.</p>\n<p><strong>Core explanation.</strong> On most systems: download from python.org or use your package manager. Check installation in a terminal: python3 --version Run a file: save as hello.py , then python3 hello.py . Online option: Use replit.com or Google Colab if you cannot install yet. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Set up Python and run your first script on your computer.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Get Started</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Verify your environment”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# hello.py\nprint(\"Setup complete!\")\nprint(\"Python version check: open terminal and run python3 --version\")\n\n# Interactive mode (REPL): type python3 and try:\n# >>> 2 + 2\n# 4",
      "exercises": [
        {
          "title": "Verify your environment",
          "instruction": "Write a script that prints \"Python is ready!\" and the result of 15 * 3. Save mentally as first_run.py.",
          "solution": "print(\"Python is ready!\")\nprint(15 * 3)  # 45",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-03",
      "title": "1.3 Python Syntax — The Rules of the Road",
      "module": "Getting Started",
      "objective": "Write valid Python code using indentation, colons, and clear structure.",
      "why": "Traffic rules keep roads safe. Syntax rules keep programs working. Break them and you get errors.",
      "explanation": "<p><strong>What you will learn.</strong> Write valid Python code using indentation, colons, and clear structure. By the end of this lesson you should be able to explain <em>Python Syntax</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Traffic rules keep roads safe. Syntax rules keep programs working. Break them and you get errors. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Foundations look small but they support everything else: tooling, syntax rules, and how you display results. If these feel shaky, every later topic becomes harder than it needs to be.</p>\n<p><strong>Core explanation.</strong> Key rules: • Indentation (usually 4 spaces) groups code blocks • Colons : start blocks (if, for, def) • Case-sensitive: Name ≠ name • One statement per line (or use ; sparingly) • Parentheses for function calls: print() Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Write valid Python code using indentation, colons, and clear structure.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Python Syntax</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Fix the structure”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "age = 20\n\nif age >= 18:\n    print(\"Adult\")      # indented — inside the if\n    print(\"Can vote\")\nelse:\n    print(\"Minor\")      # indented — inside the else\n\nprint(\"Done\")           # not indented — always runs",
      "exercises": [
        {
          "title": "Fix the structure",
          "instruction": "Write an if/else that prints \"Open shop\" if hour is between 8 and 20, else \"Closed\". Use proper indentation.",
          "solution": "hour = 14\nif hour >= 8 and hour <= 20:\n    print(\"Open shop\")\nelse:\n    print(\"Closed\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-04",
      "title": "1.4 Output — Talking to the User with print()",
      "module": "Getting Started",
      "objective": "Display text, numbers, and multiple values using print().",
      "why": "A shop receipt, SMS alert, or dashboard all show output. print() is your first way to communicate results.",
      "explanation": "<p><strong>What you will learn.</strong> Display text, numbers, and multiple values using print(). By the end of this lesson you should be able to explain <em>Output</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: A shop receipt, SMS alert, or dashboard all show output. print() is your first way to communicate results. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Foundations look small but they support everything else: tooling, syntax rules, and how you display results. If these feel shaky, every later topic becomes harder than it needs to be.</p>\n<p><strong>Core explanation.</strong> print() can show strings, numbers, variables, and multiple items separated by commas. Use sep and end to control separators and newlines. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Display text, numbers, and multiple values using print().” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Output</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Daily sales line”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "shop = \"Mama Nkechi Provisions\"\nsales = 125000\nprint(\"Shop:\", shop)\nprint(\"Today's sales:\", sales, \"naira\")\nprint(\"A\", \"B\", \"C\", sep=\"-\")       # A-B-C\nprint(\"Loading\", end=\"...\")         # no newline\nprint(\" done\")",
      "exercises": [
        {
          "title": "Daily sales line",
          "instruction": "Print a one-line summary: business name, number of customers, and total sales (use variables).",
          "solution": "business = \"City Buka\"\ncustomers = 48\ntotal = 87500\nprint(business, \"| customers:\", customers, \"| sales: ₦\", total)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-05",
      "title": "1.5 Comments — Notes for Future You",
      "module": "Getting Started",
      "objective": "Write clear comments and docstrings so code stays understandable.",
      "why": "When you reopen code after 3 months (or hand it to a teammate), comments save hours of confusion.",
      "explanation": "<p><strong>What you will learn.</strong> Write clear comments and docstrings so code stays understandable. By the end of this lesson you should be able to explain <em>Comments</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: When you reopen code after 3 months (or hand it to a teammate), comments save hours of confusion. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Foundations look small but they support everything else: tooling, syntax rules, and how you display results. If these feel shaky, every later topic becomes harder than it needs to be.</p>\n<p><strong>Core explanation.</strong> Use # for single-line comments. Use triple quotes \"\"\" ... \"\"\" for multi-line notes or function docs. Comment the why , not the obvious what . Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Write clear comments and docstrings so code stays understandable.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 13 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Comments</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document a price rule”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# Calculate delivery fee for orders outside Lagos\nbase_fee = 500\n# Extra charge per km beyond 5km\nextra_per_km = 100\n\n\"\"\"\nBusiness rule:\nFree delivery if order total > 15000\n\"\"\"\norder_total = 18000\nif order_total > 15000:\n    delivery = 0  # promo: free delivery\nelse:\n    delivery = base_fee",
      "exercises": [
        {
          "title": "Document a price rule",
          "instruction": "Write a short script with comments explaining a 5% VAT calculation on a product price.",
          "solution": "# Product price before tax\nprice = 10000\n# VAT rate in many businesses is 7.5% or 5% for practice\nvat_rate = 0.05  # 5%\nvat = price * vat_rate\ntotal = price + vat\nprint(\"Total with VAT:\", total)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-06",
      "title": "2.1 Variables — Labeled Boxes for Data",
      "module": "Variables & Types",
      "objective": "Create, update, and name variables clearly.",
      "why": "A POS system stores item names, prices, and stock. Variables are labeled boxes holding those values.",
      "explanation": "<p><strong>What you will learn.</strong> Create, update, and name variables clearly. By the end of this lesson you should be able to explain <em>Variables</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: A POS system stores item names, prices, and stock. Variables are labeled boxes holding those values. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A variable is a <em>named box</em> that holds a value. The name is for humans; the value is what the computer uses in calculations. Good names read like English (<code>total_price</code> beats <code>x</code>).</p>\n<p><strong>Core explanation.</strong> Assign with = . Names: letters, numbers, underscores; cannot start with a number. Prefer snake_case : total_sales not x . Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Create, update, and name variables clearly.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Variables</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Mini bank account”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "customer_name = \"Bola\"\nbalance = 45000\nbalance = balance + 5000   # deposit\nprint(customer_name, \"new balance:\", balance)\n\n# Multiple assignment\nx, y = 10, 20\na = b = 0",
      "exercises": [
        {
          "title": "Mini bank account",
          "instruction": "Create variables for account_name, balance. Simulate a 2000 withdrawal and print remaining balance.",
          "solution": "account_name = \"Chidi Okeke\"\nbalance = 15000\nwithdrawal = 2000\nbalance = balance - withdrawal\nprint(account_name, \"balance left:\", balance)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-07",
      "title": "2.2 Data Types — What Kind of Value Is It?",
      "module": "Variables & Types",
      "objective": "Identify and use str, int, float, bool, and check types with type().",
      "why": "Money needs decimals (float), ages are whole numbers (int), names are text (str). Wrong type = wrong bills and bugs.",
      "explanation": "<p><strong>What you will learn.</strong> Identify and use str, int, float, bool, and check types with type(). By the end of this lesson you should be able to explain <em>Data Types</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Money needs decimals (float), ages are whole numbers (int), names are text (str). Wrong type = wrong bills and bugs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A variable is a <em>named box</em> that holds a value. The name is for humans; the value is what the computer uses in calculations. Good names read like English (<code>total_price</code> beats <code>x</code>).</p>\n<p><strong>Core explanation.</strong> Common types: str , int , float , bool , list , dict , None . Use type(value) to inspect. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Identify and use str, int, float, bool, and check types with type().” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Data Types</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Type audit for a product”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "name = \"Fatima\"       # str\nage = 27              # int\nheight_m = 1.65       # float\nis_member = True      # bool\nprint(type(name), type(age), type(height_m), type(is_member))",
      "exercises": [
        {
          "title": "Type audit for a product",
          "instruction": "Create variables for product name, price, quantity, and in_stock (True/False). Print each type().",
          "solution": "product = \"Peak Milk 400g\"\nprice = 1850.50\nqty = 24\nin_stock = True\nprint(type(product), type(price), type(qty), type(in_stock))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-08",
      "title": "2.3 Numbers — int, float & Everyday Math",
      "module": "Variables & Types",
      "objective": "Perform arithmetic with integers and floats for real calculations.",
      "why": "Salaries, fuel cost, and market profit all need reliable number math.",
      "explanation": "<p><strong>What you will learn.</strong> Perform arithmetic with integers and floats for real calculations. By the end of this lesson you should be able to explain <em>Numbers</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Salaries, fuel cost, and market profit all need reliable number math. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A variable is a <em>named box</em> that holds a value. The name is for humans; the value is what the computer uses in calculations. Good names read like English (<code>total_price</code> beats <code>x</code>).</p>\n<p><strong>Core explanation.</strong> Operators: + - * / // (floor) % (remainder) ** (power). Watch float precision for money — often store kobo as int or use decimal later. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Perform arithmetic with integers and floats for real calculations.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 11 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Numbers</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Fuel cost calculator”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "bags_of_rice = 12\nprice_each = 45000\ntotal = bags_of_rice * price_each\nprint(\"Total:\", total)\n\n# Split bill among 3 friends\nbill = 15000\neach = bill / 3\nprint(\"Each pays:\", each)\n\nprint(17 // 5)  # 3\nprint(17 % 5)   # 2 remainder\nprint(2 ** 10)  # 1024",
      "exercises": [
        {
          "title": "Fuel cost calculator",
          "instruction": "A car uses 12 litres/100km. Diesel is ₦1200/L. Distance = 80km. Print estimated fuel cost.",
          "solution": "litres_per_100 = 12\nprice_per_litre = 1200\ndistance = 80\nlitres_needed = (litres_per_100 / 100) * distance\ncost = litres_needed * price_per_litre\nprint(\"Fuel needed (L):\", litres_needed)\nprint(\"Estimated cost: ₦\", cost)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-09",
      "title": "2.4 Casting — Convert Types Safely",
      "module": "Variables & Types",
      "objective": "Convert between str, int, and float with int(), float(), str().",
      "why": "User input arrives as text. To add prices you must cast \"2500\" to a number first.",
      "explanation": "<p><strong>What you will learn.</strong> Convert between str, int, and float with int(), float(), str(). By the end of this lesson you should be able to explain <em>Casting</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: User input arrives as text. To add prices you must cast \"2500\" to a number first. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A variable is a <em>named box</em> that holds a value. The name is for humans; the value is what the computer uses in calculations. Good names read like English (<code>total_price</code> beats <code>x</code>).</p>\n<p><strong>Core explanation.</strong> Common casts: int(\"42\") , float(\"3.5\") , str(100) . Invalid casts raise errors: int(\"hello\") fails. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Convert between str, int, and float with int(), float(), str().” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Casting</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “String math fix”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "price_text = \"2500\"\nqty_text = \"3\"\ntotal = int(price_text) * int(qty_text)\nprint(\"Total:\", total)\nprint(\"Receipt line: \" + str(total) + \" naira\")\n\nscore = float(\"85.5\")\nprint(score + 4.5)",
      "exercises": [
        {
          "title": "String math fix",
          "instruction": "Variables a=\"40\" and b=\"12.5\". Convert them and print their sum as a float.",
          "solution": "a = \"40\"\nb = \"12.5\"\nprint(int(a) + float(b))  # 52.5",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-10",
      "title": "3.1 Strings — Working with Text",
      "module": "Strings",
      "objective": "Create and print strings with single, double, and triple quotes.",
      "why": "Names, addresses, SMS messages, and invoices are all text (strings).",
      "explanation": "<p><strong>What you will learn.</strong> Create and print strings with single, double, and triple quotes. By the end of this lesson you should be able to explain <em>Strings</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Names, addresses, SMS messages, and invoices are all text (strings). Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see (names, messages, receipts, SMS) is text — so string skills show up in every app. Learn to build, cut, clean, and format text carefully.</p>\n<p><strong>Core explanation.</strong> Strings hold text. Use '...' , \"...\" , or '''...''' for multi-line. Length: len(s) . Index: s[0] is first character. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> First create text; second measure or inspect it (length, index); third transform it (upper/lower/slice/replace); fourth insert it into a larger message. Most string bugs happen when step 2 is skipped.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Strings</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Business SMS”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "customer = \"Amina Yusuf\"\nmessage = 'Your order is ready'\npoem = \"\"\"Thank you for shopping\nSee you next week!\"\"\"\nprint(customer)\nprint(len(customer))\nprint(customer[0])   # A\nprint(customer[-1])  # f (last char)",
      "exercises": [
        {
          "title": "Business SMS",
          "instruction": "Create a multi-line string thanking a customer by name and print its length.",
          "solution": "name = \"Tunde\"\nsms = f\"\"\"Hello {name},\nThanks for buying from us today!\n— MoTechy Store\"\"\"\nprint(sms)\nprint(\"Characters:\", len(sms))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-11",
      "title": "3.2 Slicing Strings — Cut Out Pieces",
      "module": "Strings",
      "objective": "Extract parts of a string using slice notation [start:stop:step].",
      "why": "Need only the first 3 digits of a phone number or a product code prefix? Slicing extracts it.",
      "explanation": "<p><strong>What you will learn.</strong> Extract parts of a string using slice notation [start:stop:step]. By the end of this lesson you should be able to explain <em>Slicing Strings</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Need only the first 3 digits of a phone number or a product code prefix? Slicing extracts it. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see (names, messages, receipts, SMS) is text — so string skills show up in every app. Learn to build, cut, clean, and format text carefully.</p>\n<p><strong>Core explanation.</strong> Syntax: s[start:stop] — stop is exclusive. s[:3] first 3 chars. s[2:] from index 2 to end. s[::-1] reverse. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> First create text; second measure or inspect it (length, index); third transform it (upper/lower/slice/replace); fourth insert it into a larger message. Most string bugs happen when step 2 is skipped.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Slicing Strings</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Extract order year”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "phone = \"08031234567\"\nprint(phone[:4])      # 0803 network prefix area\nprint(phone[4:])      # rest of number\nprint(phone[0:7])     # 0803123\ncode = \"INV-2026-0042\"\nprint(code[4:8])      # 2026 year\nprint(code[::-1])     # reverse",
      "exercises": [
        {
          "title": "Extract order year",
          "instruction": "order_id = \"ORD-2026-LAG-778\". Print the year portion using slicing.",
          "solution": "order_id = \"ORD-2026-LAG-778\"\nyear = order_id[4:8]\nprint(year)  # 2026",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-12",
      "title": "3.3 Modify Strings — upper, lower, strip, replace",
      "module": "Strings",
      "objective": "Clean and transform text with common string methods.",
      "why": "Customer types \"  LAGOS  \" or \"lagos\". You normalize to \"Lagos\" before saving to a database.",
      "explanation": "<p><strong>What you will learn.</strong> Clean and transform text with common string methods. By the end of this lesson you should be able to explain <em>Modify Strings</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Customer types \" LAGOS \" or \"lagos\". You normalize to \"Lagos\" before saving to a database. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see (names, messages, receipts, SMS) is text — so string skills show up in every app. Learn to build, cut, clean, and format text carefully.</p>\n<p><strong>Core explanation.</strong> Strings are immutable — methods return new strings. Useful: upper() , lower() , title() , strip() , replace() . Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> First create text; second measure or inspect it (length, index); third transform it (upper/lower/slice/replace); fourth insert it into a larger message. Most string bugs happen when step 2 is skipped.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Modify Strings</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Clean form input”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "city = \"  lagos  \"\nclean = city.strip().title()\nprint(clean)  # Lagos\n\nmsg = \"Order pending\"\nprint(msg.replace(\"pending\", \"shipped\"))\nprint(\"HELLO\".lower())\nprint(\"ada\".upper())",
      "exercises": [
        {
          "title": "Clean form input",
          "instruction": "raw = \"  CHINEDU OKAFOR \". Strip spaces and convert to title case.",
          "solution": "raw = \"  CHINEDU OKAFOR \"\nclean = raw.strip().title()\nprint(clean)  # Chinedu Okafor",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-13",
      "title": "3.4 Concatenate Strings — Join Text Together",
      "module": "Strings",
      "objective": "Combine strings with + and join().",
      "why": "Building a full address or a WhatsApp message means joining several text pieces.",
      "explanation": "<p><strong>What you will learn.</strong> Combine strings with + and join(). By the end of this lesson you should be able to explain <em>Concatenate Strings</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Building a full address or a WhatsApp message means joining several text pieces. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see (names, messages, receipts, SMS) is text — so string skills show up in every app. Learn to build, cut, clean, and format text carefully.</p>\n<p><strong>Core explanation.</strong> Use + for simple joins (all must be strings). Use \" \".join(list) for lists of words — faster and cleaner. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> First create text; second measure or inspect it (length, index); third transform it (upper/lower/slice/replace); fourth insert it into a larger message. Most string bugs happen when step 2 is skipped.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Concatenate Strings</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Full receipt header”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "first = \"Ngozi\"\nlast = \"Eze\"\nfull = first + \" \" + last\nprint(full)\n\nparts = [\"12\", \"Adeniyi Jones\", \"Ikeja\", \"Lagos\"]\naddress = \", \".join(parts)\nprint(address)\n\n# Careful: cannot do \"Age: \" + 25  → use str(25)",
      "exercises": [
        {
          "title": "Full receipt header",
          "instruction": "Join shop_name, branch, and date into one header string separated by \" | \".",
          "solution": "shop_name = \"FreshMart\"\nbranch = \"Yaba\"\ndate = \"2026-07-16\"\nheader = \" | \".join([shop_name, branch, date])\nprint(header)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-14",
      "title": "3.5 Format Strings — f-strings & Placeholders",
      "module": "Strings",
      "objective": "Insert variables into strings cleanly with f-strings.",
      "why": "Customer messages like \"Hello Amina, your balance is ₦12,000\" need clean formatting.",
      "explanation": "<p><strong>What you will learn.</strong> Insert variables into strings cleanly with f-strings. By the end of this lesson you should be able to explain <em>Format Strings</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Customer messages like \"Hello Amina, your balance is ₦12,000\" need clean formatting. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see (names, messages, receipts, SMS) is text — so string skills show up in every app. Learn to build, cut, clean, and format text carefully.</p>\n<p><strong>Core explanation.</strong> Preferred modern style: f\"Hello {name}\" . Also: \"Hello {}\".format(name) and old %s style. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> First create text; second measure or inspect it (length, index); third transform it (upper/lower/slice/replace); fourth insert it into a larger message. Most string bugs happen when step 2 is skipped.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Format Strings</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Invoice line”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "name = \"Ifeanyi\"\nbalance = 12500.5\nprint(f\"Hello {name}, balance: ₦{balance:,.2f}\")\nprint(\"Hello {}, balance: ₦{}\".format(name, balance))\nprint(\"Hello %s\" % name)\n\n# Expressions inside f-strings\nqty = 3\nprice = 500\nprint(f\"Line total: ₦{qty * price}\")",
      "exercises": [
        {
          "title": "Invoice line",
          "instruction": "item=\"Bread\", qty=4, price=800. Print: \"4 x Bread = ₦3200\" using an f-string.",
          "solution": "item = \"Bread\"\nqty = 4\nprice = 800\nprint(f\"{qty} x {item} = ₦{qty * price}\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-15",
      "title": "3.6 Escape Characters — Special Symbols in Text",
      "module": "Strings",
      "objective": "Use escape sequences like \\n, \\t, and \\\" correctly.",
      "why": "When printing multi-line receipts or quotes inside quotes, escapes control special characters.",
      "explanation": "<p><strong>What you will learn.</strong> Use escape sequences like \\n, \\t, and \\\" correctly. By the end of this lesson you should be able to explain <em>Escape Characters</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: When printing multi-line receipts or quotes inside quotes, escapes control special characters. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see (names, messages, receipts, SMS) is text — so string skills show up in every app. Learn to build, cut, clean, and format text carefully.</p>\n<p><strong>Core explanation.</strong> Common escapes: \\n newline, \\t tab, \\\\ backslash, \\' / \\\" quotes. Raw strings: r\"C:\\Users\\data\" (paths, regex). Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> First create text; second measure or inspect it (length, index); third transform it (upper/lower/slice/replace); fourth insert it into a larger message. Most string bugs happen when step 2 is skipped.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Escape Characters</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Pretty receipt”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print(\"Line1\\nLine2\")\nprint(\"Name:\\tAda\")\nprint(\"She said \\\"Welcome\\\" to the shop\")\nprint('It\\'s open')\npath = r\"C:\\Users\\Shop\\sales.csv\"\nprint(path)",
      "exercises": [
        {
          "title": "Pretty receipt",
          "instruction": "Print three lines using one string with \\n: shop name, dashed line, thank you.",
          "solution": "print(\"City Mart\\n-----------\\nThank you for shopping!\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-16",
      "title": "3.7 String Methods — find, split, startswith & More",
      "module": "Strings",
      "objective": "Use powerful string methods for search and parsing.",
      "why": "Parsing CSV lines, checking if a message starts with \"PAY\", or splitting a full name — methods do the heavy lifting.",
      "explanation": "<p><strong>What you will learn.</strong> Use powerful string methods for search and parsing. By the end of this lesson you should be able to explain <em>String Methods</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Parsing CSV lines, checking if a message starts with \"PAY\", or splitting a full name — methods do the heavy lifting. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see (names, messages, receipts, SMS) is text — so string skills show up in every app. Learn to build, cut, clean, and format text carefully.</p>\n<p><strong>Core explanation.</strong> Handy methods: split() , find() , startswith() , endswith() , count() , isdigit() , isalpha() . Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> First create text; second measure or inspect it (length, index); third transform it (upper/lower/slice/replace); fourth insert it into a larger message. Most string bugs happen when step 2 is skipped.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>String Methods</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Parse sales CSV line”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "row = \"Rice,2500,10\"\nparts = row.split(\",\")\nprint(parts)  # ['Rice', '2500', '10']\n\nmsg = \"PAY 5000 to MTN\"\nprint(msg.startswith(\"PAY\"))\nprint(msg.find(\"5000\"))\nprint(\"0803\".isdigit())\nprint(\"Hello world\".count(\"l\"))",
      "exercises": [
        {
          "title": "Parse sales CSV line",
          "instruction": "line = \"Beans,1800,5\". Split and print product name and total value (price*qty).",
          "solution": "line = \"Beans,1800,5\"\nname, price, qty = line.split(\",\")\ntotal = int(price) * int(qty)\nprint(name, \"total ₦\", total)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-17",
      "title": "3.8 String Exercises — Mini Text Toolkit",
      "module": "Strings",
      "objective": "Practice string skills on realistic text problems.",
      "why": "Customer support tools constantly clean, search, and reformat text.",
      "explanation": "<p><strong>What you will learn.</strong> Practice string skills on realistic text problems. By the end of this lesson you should be able to explain <em>String Exercises</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Customer support tools constantly clean, search, and reformat text. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see (names, messages, receipts, SMS) is text — so string skills show up in every app. Learn to build, cut, clean, and format text carefully.</p>\n<p><strong>Core explanation.</strong> Combine slicing, methods, and f-strings to solve small business text tasks. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> First create text; second measure or inspect it (length, index); third transform it (upper/lower/slice/replace); fourth insert it into a larger message. Most string bugs happen when step 2 is skipped.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>String Exercises</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Username from email”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# Mask phone number: 080****4567\nphone = \"08031234567\"\nmasked = phone[:3] + \"****\" + phone[-4:]\nprint(masked)\n\nemail = \"User@Email.COM\".lower().strip()\nprint(email)",
      "exercises": [
        {
          "title": "Username from email",
          "instruction": "email = \"chidi.okeke@gmail.com\". Extract the part before @ as username (lowercase).",
          "solution": "email = \"chidi.okeke@gmail.com\"\nusername = email.split(\"@\")[0].lower()\nprint(username)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-18",
      "title": "3.9 Code Challenge — Customer Message Builder",
      "module": "Strings",
      "objective": "Build a complete customer notification string from variables.",
      "why": "E-commerce and logistics apps generate SMS/email from templates + data.",
      "explanation": "<p><strong>What you will learn.</strong> Build a complete customer notification string from variables. By the end of this lesson you should be able to explain <em>Code Challenge</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: E-commerce and logistics apps generate SMS/email from templates + data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see (names, messages, receipts, SMS) is text — so string skills show up in every app. Learn to build, cut, clean, and format text carefully.</p>\n<p><strong>Core explanation.</strong> Challenge: given customer, item, qty, price, and status — produce a polished multi-line message. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> First create text; second measure or inspect it (length, index); third transform it (upper/lower/slice/replace); fourth insert it into a larger message. Most string bugs happen when step 2 is skipped.</p>\n<p><strong>Walking through the example.</strong> The sample has about 10 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Code Challenge</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Your turn”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "customer = \"Amaka\"\nitem = \"Indomie carton\"\nqty = 2\nprice = 6500\nstatus = \"shipped\"\ntotal = qty * price\nmessage = f\"\"\"Hello {customer},\nYour order of {qty} x {item} (₦{total:,}) is now {status.upper()}.\nTrack anytime. — ZeroToCode Shop\"\"\"\nprint(message)",
      "exercises": [
        {
          "title": "Your turn",
          "instruction": "Change the variables to a pharmacy order (drugs/item of your choice) and print a similar message with status \"ready for pickup\".",
          "solution": "customer = \"Mr. Bello\"\nitem = \"Paracetamol pack\"\nqty = 3\nprice = 500\nstatus = \"ready for pickup\"\ntotal = qty * price\nprint(f\"\"\"Hello {customer},\nYour order of {qty} x {item} (₦{total:,}) is {status}.\n— City Pharmacy\"\"\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-19",
      "title": "4.1 Booleans — True, False & Truthiness",
      "module": "Booleans & Operators",
      "objective": "Use True/False values and understand truthy/falsy values.",
      "why": "Is the door open? Is payment confirmed? Software decisions are yes/no (boolean) questions.",
      "explanation": "<p><strong>What you will learn.</strong> Use True/False values and understand truthy/falsy values. By the end of this lesson you should be able to explain <em>Booleans</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Is the door open? Is payment confirmed? Software decisions are yes/no (boolean) questions. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer. Clear conditions prevent “mystery behavior”.</p>\n<p><strong>Core explanation.</strong> True and False are bools. Falsy: 0 , \"\" , [] , {} , None , False . Everything else is truthy. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use True/False values and understand truthy/falsy values.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Booleans</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Shop open logic”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "is_open = True\nhas_stock = False\nprint(is_open and has_stock)  # False\nprint(is_open or has_stock)   # True\nprint(not has_stock)          # True\n\nprint(bool(0), bool(15), bool(\"\"), bool(\"yes\"))",
      "exercises": [
        {
          "title": "Shop open logic",
          "instruction": "Variables: has_power=True, staff_present=True. Print whether the shop can open (both must be True).",
          "solution": "has_power = True\nstaff_present = True\ncan_open = has_power and staff_present\nprint(\"Can open?\", can_open)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-20",
      "title": "4.2 Operators — Math, Compare & Logic",
      "module": "Booleans & Operators",
      "objective": "Use arithmetic, comparison, and logical operators correctly.",
      "why": "Price checks, eligibility rules, and discounts are all operator combinations.",
      "explanation": "<p><strong>What you will learn.</strong> Use arithmetic, comparison, and logical operators correctly. By the end of this lesson you should be able to explain <em>Operators</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Price checks, eligibility rules, and discounts are all operator combinations. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer. Clear conditions prevent “mystery behavior”.</p>\n<p><strong>Core explanation.</strong> Comparison: == != = Logic: and or not Membership: in , not in Identity: is , is not (for None etc.) Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use arithmetic, comparison, and logical operators correctly.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Operators</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Discount rule”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "age = 22\nincome = 80000\neligible = age >= 18 and income >= 50000\nprint(\"Loan eligible?\", eligible)\n\nproduct = \"milk\"\ncart = [\"bread\", \"milk\", \"eggs\"]\nprint(product in cart)\n\nprint(5 == 5, 5 != 3, 10 > 2)",
      "exercises": [
        {
          "title": "Discount rule",
          "instruction": "Give 10% off if total > 10000 OR customer is_vip. Compute final price for total=9000, is_vip=True.",
          "solution": "total = 9000\nis_vip = True\nif total > 10000 or is_vip:\n    final = total * 0.9\nelse:\n    final = total\nprint(\"Final:\", final)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-21",
      "title": "5.1 Lists — Ordered Shopping Lists",
      "module": "Collections",
      "objective": "Create, index, append, remove, and loop over lists.",
      "why": "A market shopping list, queue of orders, or student roster is a list — ordered and changeable.",
      "explanation": "<p><strong>What you will learn.</strong> Create, index, append, remove, and loop over lists. By the end of this lesson you should be able to explain <em>Lists</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: A market shopping list, queue of orders, or student roster is a list — ordered and changeable. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Lists: [item1, item2] . Mutable. Methods: append , insert , remove , pop , sort . Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Create the collection with sample items; access one item by position; add/remove an item; loop through all items to compute a total or print a report. If you can do those four moves, you “own” the structure.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Lists</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Todo for the day”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "orders = [\"jollof\", \"suya\", \"zobo\"]\norders.append(\"puff-puff\")\nprint(orders[0])\norders[1] = \"kilishi\"\nprint(len(orders))\nfor item in orders:\n    print(\"-\", item)",
      "exercises": [
        {
          "title": "Todo for the day",
          "instruction": "Create a list of 4 tasks. Add one more, remove the first, print remaining.",
          "solution": "tasks = [\"buy data\", \"call supplier\", \"update prices\", \"close books\"]\ntasks.append(\"backup sales file\")\ntasks.pop(0)\nprint(tasks)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-22",
      "title": "5.2 Tuples — Fixed Records",
      "module": "Collections",
      "objective": "Use tuples for fixed collections that should not change.",
      "why": "GPS coordinates, RGB colors, or (latitude, longitude) of a shop should stay fixed — use tuples.",
      "explanation": "<p><strong>What you will learn.</strong> Use tuples for fixed collections that should not change. By the end of this lesson you should be able to explain <em>Tuples</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: GPS coordinates, RGB colors, or (latitude, longitude) of a shop should stay fixed — use tuples. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Tuples: (a, b) . Ordered, immutable. Good for dictionary keys and fixed records. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use tuples for fixed collections that should not change.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Tuples</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “RGB brand color”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "lagos_coords = (6.5244, 3.3792)\nprint(lagos_coords[0])\n\n# Unpacking\nlat, lon = lagos_coords\nprint(lat, lon)\n\n# Single-item tuple needs comma\nsingleton = (42,)",
      "exercises": [
        {
          "title": "RGB brand color",
          "instruction": "Store your brand color as an RGB tuple and print each component with labels.",
          "solution": "brand = (16, 185, 129)  # emerald-ish\nr, g, b = brand\nprint(\"R:\", r, \"G:\", g, \"B:\", b)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-23",
      "title": "5.3 Sets — Unique Items Only",
      "module": "Collections",
      "objective": "Store unique values and use set operations (union, intersection).",
      "why": "Which phone numbers are unique leads? Who attended both events? Sets remove duplicates fast.",
      "explanation": "<p><strong>What you will learn.</strong> Store unique values and use set operations (union, intersection). By the end of this lesson you should be able to explain <em>Sets</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Which phone numbers are unique leads? Who attended both events? Sets remove duplicates fast. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Sets: {1, 2, 3} . Unordered, unique members. Ops: | union, &amp; intersection, - difference. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Store unique values and use set operations (union, intersection).” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Sets</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Unique tags”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "visitors = {\"Ada\", \"Bola\", \"Ada\", \"Chidi\"}\nprint(visitors)  # Ada once only\n\nvip = {\"Ada\", \"Emeka\"}\nprint(visitors & vip)   # intersection\nprint(visitors | vip)   # union\nvisitors.add(\"Fatima\")",
      "exercises": [
        {
          "title": "Unique tags",
          "instruction": "tags list has duplicates. Convert to a set and print how many unique tags.",
          "solution": "tags = [\"python\", \"data\", \"python\", \"web\", \"data\", \"ai\"]\nunique = set(tags)\nprint(unique)\nprint(\"Unique count:\", len(unique))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-24",
      "title": "5.4 Dictionaries — Key → Value Maps",
      "module": "Collections",
      "objective": "Store and retrieve data with keys (like a real dictionary or contact book).",
      "why": "A student profile, product catalog, or settings file is naturally a dictionary.",
      "explanation": "<p><strong>What you will learn.</strong> Store and retrieve data with keys (like a real dictionary or contact book). By the end of this lesson you should be able to explain <em>Dictionaries</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: A student profile, product catalog, or settings file is naturally a dictionary. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A key→value structure is like a labeled filing cabinet: look up a key (name, id, product code) and get the related value quickly. Perfect for records and configurations.</p>\n<p><strong>Core explanation.</strong> Dicts: {\"name\": \"Ada\", \"age\": 20} . Access with keys. Methods: keys() , values() , items() , get() . Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Create a record with clear keys; read one field; update a field; loop through keys/values for a summary. Always decide what should happen when a key is missing.</p>\n<p><strong>Walking through the example.</strong> The sample has about 10 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Dictionaries</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Product record”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "student = {\n    \"name\": \"Emeka\",\n    \"course\": \"Python\",\n    \"score\": 88\n}\nprint(student[\"name\"])\nprint(student.get(\"email\", \"not provided\"))\nstudent[\"score\"] = 91\nfor key, value in student.items():\n    print(key, \"→\", value)",
      "exercises": [
        {
          "title": "Product record",
          "instruction": "Create a dict for a phone: brand, model, price, in_stock. Print a sales sentence using the values.",
          "solution": "phone = {\"brand\": \"Tecno\", \"model\": \"Camon\", \"price\": 185000, \"in_stock\": True}\nprint(f\"{phone['brand']} {phone['model']} costs ₦{phone['price']:,}. In stock: {phone['in_stock']}\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
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
      "explanation": "<p><strong>What you will learn.</strong> Build an in-memory contact book with dicts and lists. By the end of this lesson you should be able to explain <em>Mini Project</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Every business keeps customer names and phones — this is CRUD in miniature. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Store contacts as a list of dicts with name and phone. Support add, list, and find by name. This glues lists, dicts, loops, and functions. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Build an in-memory contact book with dicts and lists.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 12 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Mini Project</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Delete contact”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Searching without .lower() misses case differences.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "contacts = []\n\ndef add_contact(name, phone):\n    contacts.append({\"name\": name, \"phone\": phone})\n\ndef find_contact(name):\n    for c in contacts:\n        if c[\"name\"].lower() == name.lower():\n            return c\n    return None\n\nadd_contact(\"Ada\", \"0803...\")\nadd_contact(\"Bola\", \"0901...\")\nprint(find_contact(\"ada\"))\nprint(len(contacts), \"contacts saved\")",
      "pitfalls": "Searching without .lower() misses case differences.",
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
      "explanation": "<p><strong>What you will learn.</strong> Branch logic with if, elif, and else. By the end of this lesson you should be able to explain <em>If...Else</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: ATMs: if PIN correct and balance enough → dispense cash. Same idea in every app. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer. Clear conditions prevent “mystery behavior”.</p>\n<p><strong>Core explanation.</strong> Structure: if condition: / elif / else . Indent the body. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Branch logic with if, elif, and else.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>If...Else</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Exam grade”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "balance = 8000\nwithdraw = 5000\nif withdraw > balance:\n    print(\"Insufficient funds\")\nelif withdraw <= 0:\n    print(\"Invalid amount\")\nelse:\n    balance -= withdraw\n    print(\"Take your cash. New balance:\", balance)",
      "exercises": [
        {
          "title": "Exam grade",
          "instruction": "score 0-100 → A(70+), B(60-69), C(50-59), else Fail. Print the grade for score=63.",
          "solution": "score = 63\nif score >= 70:\n    grade = \"A\"\nelif score >= 60:\n    grade = \"B\"\nelif score >= 50:\n    grade = \"C\"\nelse:\n    grade = \"Fail\"\nprint(\"Grade:\", grade)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-26",
      "title": "6.2 Match — Structural Pattern Matching",
      "module": "Control Flow",
      "objective": "Use match/case (Python 3.10+) for clean multi-way decisions.",
      "why": "Order status: pending, shipped, delivered, cancelled — match handles each case clearly.",
      "explanation": "<p><strong>What you will learn.</strong> Use match/case (Python 3.10+) for clean multi-way decisions. By the end of this lesson you should be able to explain <em>Match</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Order status: pending, shipped, delivered, cancelled — match handles each case clearly. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer. Clear conditions prevent “mystery behavior”.</p>\n<p><strong>Core explanation.</strong> match value: then case pattern: . Use case _ as default. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use match/case (Python 3.10+) for clean multi-way decisions.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 10 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Match</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Payment method”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "status = \"shipped\"\nmatch status:\n    case \"pending\":\n        print(\"We are packing your order\")\n    case \"shipped\":\n        print(\"On the way — track your parcel\")\n    case \"delivered\":\n        print(\"Enjoy! Please rate us\")\n    case _:\n        print(\"Unknown status\")",
      "exercises": [
        {
          "title": "Payment method",
          "instruction": "Match method \"card\"/\"transfer\"/\"cash\" and print processing instructions. Default: invalid.",
          "solution": "method = \"transfer\"\nmatch method:\n    case \"card\":\n        print(\"Swipe or insert card\")\n    case \"transfer\":\n        print(\"Send to account 0123456789\")\n    case \"cash\":\n        print(\"Pay the cashier\")\n    case _:\n        print(\"Invalid payment method\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-27",
      "title": "6.3 While Loops — Repeat Until Done",
      "module": "Control Flow",
      "objective": "Repeat actions while a condition stays True.",
      "why": "PIN attempts, menu systems, and \"keep asking until valid input\" use while loops.",
      "explanation": "<p><strong>What you will learn.</strong> Repeat actions while a condition stays True. By the end of this lesson you should be able to explain <em>While Loops</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: PIN attempts, menu systems, and \"keep asking until valid input\" use while loops. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Loops repeat work so you do not copy-paste the same line 100 times. You always need a clear stop condition or a finite collection to walk through.</p>\n<p><strong>Core explanation.</strong> while condition: body. Avoid infinite loops — update the condition. break exits, continue skips to next iteration. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 10 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>While Loops</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Countdown”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "attempts = 0\npin = \"2468\"\nwhile attempts < 3:\n    guess = \"2468\"  # pretend input\n    if guess == pin:\n        print(\"Access granted\")\n        break\n    attempts += 1\nelse:\n    print(\"Card blocked\")  # runs if no break",
      "exercises": [
        {
          "title": "Countdown",
          "instruction": "Use while to count from 5 down to 1, then print \"Go!\".",
          "solution": "n = 5\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Go!\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-28",
      "title": "6.4 For Loops — Walk Through Collections",
      "module": "Control Flow",
      "objective": "Iterate over lists, strings, and other sequences with for.",
      "why": "Send SMS to every customer, or total every line on a receipt — for loops shine here.",
      "explanation": "<p><strong>What you will learn.</strong> Iterate over lists, strings, and other sequences with for. By the end of this lesson you should be able to explain <em>For Loops</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Send SMS to every customer, or total every line on a receipt — for loops shine here. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Loops repeat work so you do not copy-paste the same line 100 times. You always need a clear stop condition or a finite collection to walk through.</p>\n<p><strong>Core explanation.</strong> for item in collection: process item. Combine with enumerate for index + value. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>For Loops</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Name badges”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "prices = [500, 1200, 300]\ntotal = 0\nfor p in prices:\n    total += p\nprint(\"Sum:\", total)\n\nfor i, p in enumerate(prices, start=1):\n    print(f\"Item {i}: ₦{p}\")",
      "exercises": [
        {
          "title": "Name badges",
          "instruction": "names = [\"Ada\", \"Bola\", \"Chika\"]. Print \"Hello, <name>!\" for each.",
          "solution": "names = [\"Ada\", \"Bola\", \"Chika\"]\nfor name in names:\n    print(f\"Hello, {name}!\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-29",
      "title": "6.5 Range — Sequences of Numbers",
      "module": "Control Flow",
      "objective": "Generate number sequences with range(start, stop, step).",
      "why": "Print pages 1–10, seat numbers, or run a loop N times without a manual list.",
      "explanation": "<p><strong>What you will learn.</strong> Generate number sequences with range(start, stop, step). By the end of this lesson you should be able to explain <em>Range</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Print pages 1–10, seat numbers, or run a loop N times without a manual list. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Loops repeat work so you do not copy-paste the same line 100 times. You always need a clear stop condition or a finite collection to walk through.</p>\n<p><strong>Core explanation.</strong> range(5) → 0..4. range(1, 6) → 1..5. range(0, 10, 2) even numbers. Convert to list: list(range(5)) . Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Generate number sequences with range(start, stop, step).” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Range</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Even seats”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "for i in range(1, 6):\n    print(\"Day\", i)\n\nprint(list(range(0, 11, 2)))  # [0,2,4,6,8,10]\n\n# 5 times table\nfor n in range(1, 13):\n    print(f\"5 x {n} = {5 * n}\")",
      "exercises": [
        {
          "title": "Even seats",
          "instruction": "Print even seat numbers from 2 to 20 inclusive using range.",
          "solution": "for seat in range(2, 21, 2):\n    print(\"Seat\", seat)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-30",
      "title": "7.1 Functions — Write Once, Reuse Forever",
      "module": "Functions",
      "objective": "Define functions with def, parameters, and return values.",
      "why": "Calculating delivery fee in 10 places? Put it in one function — fix bugs once.",
      "explanation": "<p><strong>What you will learn.</strong> Define functions with def, parameters, and return values. By the end of this lesson you should be able to explain <em>Functions</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Calculating delivery fee in 10 places? Put it in one function — fix bugs once. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. You write it once and reuse it many times — fewer bugs, easier testing.</p>\n<p><strong>Core explanation.</strong> def name(params): then body. return sends a result back. Default args: def fee(km, rate=100): Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Name the action; list inputs; write the body; return or print a result; call it twice with different inputs. If the second call works without rewriting the body, the function is doing its job.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Functions</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “VAT function”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "def delivery_fee(distance_km, rate=150):\n    if distance_km <= 0:\n        return 0\n    return distance_km * rate\n\nprint(delivery_fee(8))\nprint(delivery_fee(8, rate=200))\n\ndef greet(name=\"friend\"):\n    return f\"Hello, {name}!\"\nprint(greet(\"Zainab\"))",
      "exercises": [
        {
          "title": "VAT function",
          "instruction": "Write add_vat(amount, rate=0.075) that returns amount including VAT.",
          "solution": "def add_vat(amount, rate=0.075):\n    return amount * (1 + rate)\n\nprint(add_vat(10000))\nprint(add_vat(10000, 0.05))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-31",
      "title": "7.2 Arrays — Array Module & List as Arrays",
      "module": "Functions",
      "objective": "Understand Python arrays (array module) vs everyday lists.",
      "why": "Scientific sensors store many numbers efficiently. For most apps, lists are enough; array is for typed numeric storage.",
      "explanation": "<p><strong>What you will learn.</strong> Understand Python arrays (array module) vs everyday lists. By the end of this lesson you should be able to explain <em>Arrays</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Scientific sensors store many numbers efficiently. For most apps, lists are enough; array is for typed numeric storage. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, and grow/shrink the collection as the program runs.</p>\n<p><strong>Core explanation.</strong> Python has no fixed C-style array built-in. Use lists for general work. array.array stores one type compactly. NumPy arrays (later) for data science. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Create the collection with sample items; access one item by position; add/remove an item; loop through all items to compute a total or print a report. If you can do those four moves, you “own” the structure.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Arrays</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Sensor average”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from array import array\ntemps = array('f', [32.1, 33.0, 31.5, 34.2])  # float array\nprint(temps[0])\ntemps.append(30.8)\nprint(list(temps))\n\n# Most of the time, just use a list:\nscores = [70, 85, 90]\nprint(sum(scores) / len(scores))",
      "exercises": [
        {
          "title": "Sensor average",
          "instruction": "Use a list (or array) of 5 temperature readings and print the average.",
          "solution": "readings = [28.5, 29.0, 30.2, 27.8, 29.5]\navg = sum(readings) / len(readings)\nprint(\"Average °C:\", round(avg, 2))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-32",
      "title": "7.3 Iterators — next() and iter()",
      "module": "Functions",
      "objective": "Use iterators to walk through data lazily.",
      "why": "Reading a huge sales log line-by-line without loading everything into memory uses iterators.",
      "explanation": "<p><strong>What you will learn.</strong> Use iterators to walk through data lazily. By the end of this lesson you should be able to explain <em>Iterators</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Reading a huge sales log line-by-line without loading everything into memory uses iterators. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Loops repeat work so you do not copy-paste the same line 100 times. You always need a clear stop condition or a finite collection to walk through.</p>\n<p><strong>Core explanation.</strong> iter(obj) gets an iterator. next(it) yields the next value. StopIteration when done. for-loops use iterators under the hood. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Name the action; list inputs; write the body; return or print a result; call it twice with different inputs. If the second call works without rewriting the body, the function is doing its job.</p>\n<p><strong>Walking through the example.</strong> The sample has about 12 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Iterators</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Manual next”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "nums = [10, 20, 30]\nit = iter(nums)\nprint(next(it))\nprint(next(it))\nprint(next(it))\n\n# Custom simple counter iterator idea via generator\ndef countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor x in countdown(3):\n    print(x)",
      "exercises": [
        {
          "title": "Manual next",
          "instruction": "Create an iterator over [\"a\",\"b\"] and print both values with next().",
          "solution": "it = iter([\"a\", \"b\"])\nprint(next(it))\nprint(next(it))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-33",
      "title": "8.1 Modules — Import Superpowers",
      "module": "Intermediate",
      "objective": "Import and use standard library and your own modules.",
      "why": "You do not invent math from scratch — import tools. Same for dates, random IDs, JSON.",
      "explanation": "<p><strong>What you will learn.</strong> Import and use standard library and your own modules. By the end of this lesson you should be able to explain <em>Modules</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: You do not invent math from scratch — import tools. Same for dates, random IDs, JSON. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> You do not invent everything. Modules and packages let you reuse trusted code and split your project into clear files. Environments keep dependencies from conflicting.</p>\n<p><strong>Core explanation.</strong> import math from random import randint import mymodule (your .py file) Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Import and use standard library and your own modules.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Modules</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Circle area”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import math\nfrom random import choice\n\nprint(math.sqrt(16))\nprint(math.pi)\n\nprizes = [\"free delivery\", \"10% off\", \"// keyring\"]\nprint(\"You won:\", choice([\"free delivery\", \"10% off\", \"keyring\"]))",
      "exercises": [
        {
          "title": "Circle area",
          "instruction": "Import math and compute area of circle radius 7 (pi * r^2).",
          "solution": "import math\nr = 7\narea = math.pi * r ** 2\nprint(round(area, 2))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-34",
      "title": "8.2 Dates — datetime for Real Schedules",
      "module": "Intermediate",
      "objective": "Work with dates and times using the datetime module.",
      "why": "Delivery ETAs, payroll periods, and “member since” stamps all need dates.",
      "explanation": "<p><strong>What you will learn.</strong> Work with dates and times using the datetime module. By the end of this lesson you should be able to explain <em>Dates</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Delivery ETAs, payroll periods, and “member since” stamps all need dates. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Values often arrive as text from users or files. Conversion turns them into numbers (or other types) so math and comparisons work correctly. Invalid conversions must be handled.</p>\n<p><strong>Core explanation.</strong> from datetime import datetime, timedelta, date Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Work with dates and times using the datetime module.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Dates</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Membership expiry”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from datetime import datetime, timedelta\n\nnow = datetime.now()\nprint(now.strftime(\"%Y-%m-%d %H:%M\"))\n\ndelivery = now + timedelta(days=3)\nprint(\"Deliver by:\", delivery.date())\n\nborn = datetime(1998, 5, 12)\nage_days = (now - born).days\nprint(\"Days alive:\", age_days)",
      "exercises": [
        {
          "title": "Membership expiry",
          "instruction": "Today + 30 days as expiry date. Print it as YYYY-MM-DD.",
          "solution": "from datetime import datetime, timedelta\nexpiry = datetime.now() + timedelta(days=30)\nprint(expiry.strftime(\"%Y-%m-%d\"))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-35",
      "title": "8.3 Math Module — Beyond Basic Operators",
      "module": "Intermediate",
      "objective": "Use math for roots, rounding modes, constants, and more.",
      "why": "Loan interest, distance between map points, and scientific tools need math helpers.",
      "explanation": "<p><strong>What you will learn.</strong> Use math for roots, rounding modes, constants, and more. By the end of this lesson you should be able to explain <em>Math Module</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Loan interest, distance between map points, and scientific tools need math helpers. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> You do not invent everything. Modules and packages let you reuse trusted code and split your project into clear files. Environments keep dependencies from conflicting.</p>\n<p><strong>Core explanation.</strong> import math — ceil, floor, sqrt, pow, factorial, pi, e, ... Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use math for roots, rounding modes, constants, and more.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Math Module</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Hypotenuse”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import math\nprint(math.ceil(4.2))\nprint(math.floor(4.8))\nprint(math.factorial(5))\nprint(math.hypot(3, 4))  # distance from origin = 5",
      "exercises": [
        {
          "title": "Hypotenuse",
          "instruction": "A right triangle has legs 9 and 12. Print hypotenuse with math.hypot.",
          "solution": "import math\nprint(math.hypot(9, 12))  # 15.0",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-36",
      "title": "8.4 JSON — Data Language of the Web",
      "module": "Intermediate",
      "objective": "Convert between Python objects and JSON strings.",
      "why": "APIs, config files, and mobile apps exchange JSON constantly.",
      "explanation": "<p><strong>What you will learn.</strong> Convert between Python objects and JSON strings. By the end of this lesson you should be able to explain <em>JSON</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: APIs, config files, and mobile apps exchange JSON constantly. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs exchange structured data (often JSON) between browser, server, and files. Learn to create, parse, and validate that data.</p>\n<p><strong>Core explanation.</strong> import json json.dumps(obj) → string json.loads(s) → Python object dump/load for files Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Convert between Python objects and JSON strings.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>JSON</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Serialize a user”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import json\norder = {\"id\": 101, \"item\": \"fan\", \"qty\": 2, \"paid\": True}\ntext = json.dumps(order)\nprint(text)\ndata = json.loads(text)\nprint(data[\"item\"])",
      "exercises": [
        {
          "title": "Serialize a user",
          "instruction": "Create a dict user with name and city. Convert to JSON string and print it.",
          "solution": "import json\nuser = {\"name\": \"Kemi\", \"city\": \"Ibadan\"}\nprint(json.dumps(user))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-37",
      "title": "8.5 RegEx — Find Patterns in Text",
      "module": "Intermediate",
      "objective": "Use regular expressions to validate and extract text patterns.",
      "why": "Is this a valid Nigerian phone number? Extract all emails from a document — RegEx.",
      "explanation": "<p><strong>What you will learn.</strong> Use regular expressions to validate and extract text patterns. By the end of this lesson you should be able to explain <em>RegEx</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Is this a valid Nigerian phone number? Extract all emails from a document — RegEx. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Regular expressions describe text patterns (phone numbers, emails, codes). They are powerful; start with simple patterns and test them on real examples.</p>\n<p><strong>Core explanation.</strong> import re re.search, re.findall, re.sub, re.match Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use regular expressions to validate and extract text patterns.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>RegEx</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Find hashtags”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import re\ntext = \"Call 08031234567 or 09011112222 today\"\nphones = re.findall(r\"0\\d{10}\", text)\nprint(phones)\n\nemail = \"ada@company.com\"\nif re.match(r\"[\\w.-]+@[\\w.-]+\\.\\w+\", email):\n    print(\"Valid email format\")",
      "exercises": [
        {
          "title": "Find hashtags",
          "instruction": "text = \"Love #Python and #DataScience\". Find all hashtags with re.findall.",
          "solution": "import re\ntext = \"Love #Python and #DataScience\"\nprint(re.findall(r\"#\\w+\", text))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-38",
      "title": "8.6 PIP — Install Packages",
      "module": "Intermediate",
      "objective": "Install third-party libraries with pip.",
      "why": "Need charts or Excel? pip installs community packages in seconds.",
      "explanation": "<p><strong>What you will learn.</strong> Install third-party libraries with pip. By the end of this lesson you should be able to explain <em>PIP</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Need charts or Excel? pip installs community packages in seconds. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> You do not invent everything. Modules and packages let you reuse trusted code and split your project into clear files. Environments keep dependencies from conflicting.</p>\n<p><strong>Core explanation.</strong> pip is Python’s package installer. pip install requests pip freeze &gt; requirements.txt pip install -r requirements.txt Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Install third-party libraries with pip.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>PIP</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Requirements mindset”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# Terminal commands (run outside Python):\n# python3 -m pip install requests\n# python3 -m pip list\n# python3 -m pip uninstall requests\n\n# After install, use in code:\n# import requests\n# r = requests.get(\"https://api.github.com\")\n# print(r.status_code)\n\nprint(\"Use: python3 -m pip install package_name\")",
      "exercises": [
        {
          "title": "Requirements mindset",
          "instruction": "Write a requirements.txt content (as a multi-line string) listing requests and python-dateutil.",
          "solution": "requirements = \"\"\"requests\npython-dateutil\n\"\"\"\nprint(requirements)\nprint(\"Save that text as requirements.txt and run: pip install -r requirements.txt\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-39",
      "title": "8.7 Try...Except — Handle Errors Gracefully",
      "module": "Intermediate",
      "objective": "Catch exceptions so programs do not crash on bad input.",
      "why": "User types \"abc\" as price. Without try/except, the whole POS freezes. With it, you show a friendly error.",
      "explanation": "<p><strong>What you will learn.</strong> Catch exceptions so programs do not crash on bad input. By the end of this lesson you should be able to explain <em>Try...Except</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: User types \"abc\" as price. Without try/except, the whole POS freezes. With it, you show a friendly error. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Real programs fail: bad input, missing files, network issues. Good code detects failure and handles it instead of crashing or ignoring problems.</p>\n<p><strong>Core explanation.</strong> try: risky code except ErrorType: handle else: if no error finally: always runs Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Catch exceptions so programs do not crash on bad input.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Try...Except</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Safe divide”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "raw = \"not-a-number\"\ntry:\n    price = float(raw)\n    print(\"Price:\", price)\nexcept ValueError:\n    print(\"Please enter a valid number\")\nfinally:\n    print(\"Ready for next input\")",
      "exercises": [
        {
          "title": "Safe divide",
          "instruction": "Write try/except that divides 100 by user-provided divisor; handle ZeroDivisionError and ValueError (use divisor=\"0\" then \"2\" as tests in comments).",
          "solution": "def safe_divide(a, b_text):\n    try:\n        b = float(b_text)\n        return a / b\n    except ValueError:\n        return \"Not a number\"\n    except ZeroDivisionError:\n        return \"Cannot divide by zero\"\n\nprint(safe_divide(100, \"0\"))\nprint(safe_divide(100, \"4\"))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-40",
      "title": "8.8 String Formatting — Advanced Display",
      "module": "Intermediate",
      "objective": "Format numbers, alignment, and percentages for reports.",
      "why": "Financial reports need ₦1,250,000.00 not 1250000. Formatting builds trust.",
      "explanation": "<p><strong>What you will learn.</strong> Format numbers, alignment, and percentages for reports. By the end of this lesson you should be able to explain <em>String Formatting</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Financial reports need ₦1,250,000.00 not 1250000. Formatting builds trust. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see (names, messages, receipts, SMS) is text — so string skills show up in every app. Learn to build, cut, clean, and format text carefully.</p>\n<p><strong>Core explanation.</strong> f\"{value:,.2f}\", alignment {name:&gt;10} , percent {x:.1%} Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> First create text; second measure or inspect it (length, index); third transform it (upper/lower/slice/replace); fourth insert it into a larger message. Most string bugs happen when step 2 is skipped.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>String Formatting</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Table row”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sales = 1250000.5\nprint(f\"Sales: ₦{sales:,.2f}\")\nprint(f\"{'Item':<12}{'Qty':>6}\")\nprint(f\"{'Rice':<12}{10:>6}\")\nrate = 0.155\nprint(f\"Growth: {rate:.1%}\")",
      "exercises": [
        {
          "title": "Table row",
          "instruction": "Print product \"Sugar\" left-aligned 15 chars and price 4500 as currency with 2 decimals.",
          "solution": "product = \"Sugar\"\nprice = 4500\nprint(f\"{product:<15}₦{price:,.2f}\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-41",
      "title": "8.9 None — The Absence of a Value",
      "module": "Intermediate",
      "objective": "Use None correctly and check with is None.",
      "why": "Optional middle name, missing email, or “not yet calculated” — represent “nothing” with None.",
      "explanation": "<p><strong>What you will learn.</strong> Use None correctly and check with is None. By the end of this lesson you should be able to explain <em>None</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Optional middle name, missing email, or “not yet calculated” — represent “nothing” with None. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Values often arrive as text from users or files. Conversion turns them into numbers (or other types) so math and comparisons work correctly. Invalid conversions must be handled.</p>\n<p><strong>Core explanation.</strong> None is a special singleton. Check with is None / is not None (not ==). Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use None correctly and check with is None.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 11 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>None</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Default city”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "email = None\nif email is None:\n    print(\"No email on file — ask customer\")\nelse:\n    print(\"Send to\", email)\n\ndef find_user(users, name):\n    for u in users:\n        if u == name:\n            return u\n    return None  # not found\n\nprint(find_user([\"Ada\", \"Bola\"], \"Chidi\"))",
      "exercises": [
        {
          "title": "Default city",
          "instruction": "city = None. If None, use \"Lagos\". Print the city to use.",
          "solution": "city = None\ndisplay = \"Lagos\" if city is None else city\nprint(display)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-42",
      "title": "8.10 User Input — input() for Interactive Programs",
      "module": "Intermediate",
      "objective": "Read user input and convert types safely.",
      "why": "CLI tools, quizzes, and simple POS menus all need input from humans.",
      "explanation": "<p><strong>What you will learn.</strong> Read user input and convert types safely. By the end of this lesson you should be able to explain <em>User Input</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: CLI tools, quizzes, and simple POS menus all need input from humans. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Values often arrive as text from users or files. Conversion turns them into numbers (or other types) so math and comparisons work correctly. Invalid conversions must be handled.</p>\n<p><strong>Core explanation.</strong> input(prompt) always returns a string. Cast with int/float. Validate with try/except. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Read user input and convert types safely.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>User Input</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Simulated checkout”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# Interactive example (works in real terminal):\n# name = input(\"Your name: \")\n# age = int(input(\"Your age: \"))\n\n# Simulated for lesson:\nname = \"Guest\"\nage = 21\nprint(f\"Welcome {name}, age {age}\")",
      "exercises": [
        {
          "title": "Simulated checkout",
          "instruction": "Pretend inputs: item=\"Soap\", price_text=\"350\", qty_text=\"2\". Compute and print total.",
          "solution": "item = \"Soap\"\nprice = float(\"350\")\nqty = int(\"2\")\nprint(f\"{qty} x {item} = ₦{price * qty}\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-43",
      "title": "8.11 VirtualEnv — Isolated Project Environments",
      "module": "Intermediate",
      "objective": "Create virtual environments so project packages do not clash.",
      "why": "Project A needs Django 4, Project B needs Django 5. Virtual envs keep them separate — like separate kitchens.",
      "explanation": "<p><strong>What you will learn.</strong> Create virtual environments so project packages do not clash. By the end of this lesson you should be able to explain <em>VirtualEnv</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Project A needs Django 4, Project B needs Django 5. Virtual envs keep them separate — like separate kitchens. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> You do not invent everything. Modules and packages let you reuse trusted code and split your project into clear files. Environments keep dependencies from conflicting.</p>\n<p><strong>Core explanation.</strong> python3 -m venv .venv source .venv/bin/activate (Windows: .venv\\Scripts\\activate) pip install ... deactivate Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Create virtual environments so project packages do not clash.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>VirtualEnv</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Remember the steps”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# Commands (shell, not Python):\n# python3 -m venv .venv\n# source .venv/bin/activate\n# python -m pip install requests\n# deactivate\n\nprint(\"Rule: one virtual environment per project\")\nprint(\"Commit requirements.txt, not the whole .venv folder\")",
      "exercises": [
        {
          "title": "Remember the steps",
          "instruction": "Print a numbered checklist of: create venv, activate, install packages, freeze requirements.",
          "solution": "steps = [\n    \"1. python3 -m venv .venv\",\n    \"2. source .venv/bin/activate\",\n    \"3. pip install <packages>\",\n    \"4. pip freeze > requirements.txt\",\n]\nfor s in steps:\n    print(s)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-44",
      "title": "9.1 OOP Intro — Modeling the Real World",
      "module": "OOP",
      "objective": "Explain objects, classes, and why OOP helps large programs.",
      "why": "A bank app has Accounts, Customers, Transactions — OOP models real things as objects with data + behavior.",
      "explanation": "<p><strong>What you will learn.</strong> Explain objects, classes, and why OOP helps large programs. By the end of this lesson you should be able to explain <em>OOP Intro</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: A bank app has Accounts, Customers, Transactions — OOP models real things as objects with data + behavior. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle <em>data</em> (what something knows) with <em>behavior</em> (what it can do). Blueprints (classes/structs) describe the shape; instances are the real things your program uses.</p>\n<p><strong>Core explanation.</strong> Class = blueprint. Object = instance built from the blueprint. Benefits: organization, reuse (inheritance), encapsulation. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>OOP Intro</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Name three objects”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# Blueprint\nclass Dog:\n    pass\n\n# Objects (instances)\na = Dog()\nb = Dog()\nprint(type(a))",
      "exercises": [
        {
          "title": "Name three objects",
          "instruction": "Print 3 real-world things you could model as classes for a school system.",
          "solution": "print(\"Student\")\nprint(\"Course\")\nprint(\"Teacher\")\n# or Classroom, Grade, Attendance",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-45",
      "title": "9.2 Classes & Objects — Build Your First Class",
      "module": "OOP",
      "objective": "Define a class and create objects with attributes.",
      "why": "A Product class can represent every item in your inventory with the same structure.",
      "explanation": "<p><strong>What you will learn.</strong> Define a class and create objects with attributes. By the end of this lesson you should be able to explain <em>Classes &amp; Objects</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: A Product class can represent every item in your inventory with the same structure. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A key→value structure is like a labeled filing cabinet: look up a key (name, id, product code) and get the related value quickly. Perfect for records and configurations.</p>\n<p><strong>Core explanation.</strong> class Name: body. Attach data as attributes on self. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Create a record with clear keys; read one field; update a field; loop through keys/values for a summary. Always decide what should happen when a key is missing.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Classes &amp; Objects</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Student object”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class Product:\n    pass\n\np = Product()\np.name = \"Peak Milk\"\np.price = 1800\nprint(p.name, p.price)",
      "exercises": [
        {
          "title": "Student object",
          "instruction": "Create a Student class, instance with name and score attributes, print them.",
          "solution": "class Student:\n    pass\n\ns = Student()\ns.name = \"Yusuf\"\ns.score = 77\nprint(s.name, s.score)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-46",
      "title": "9.3 __init__ Method — Constructors",
      "module": "OOP",
      "objective": "Initialize object state with __init__.",
      "why": "When a new bank account opens, it must start with owner name and balance — __init__ sets that up automatically.",
      "explanation": "<p><strong>What you will learn.</strong> Initialize object state with __init__. By the end of this lesson you should be able to explain <em>__init__ Method</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: When a new bank account opens, it must start with owner name and balance — __init__ sets that up automatically. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. You write it once and reuse it many times — fewer bugs, easier testing.</p>\n<p><strong>Core explanation.</strong> __init__ runs on object creation. First parameter is always self. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Name the action; list inputs; write the body; return or print a result; call it twice with different inputs. If the second call works without rewriting the body, the function is doing its job.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>__init__ Method</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Book class”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\nacc = BankAccount(\"Ngozi\", 5000)\nprint(acc.owner, acc.balance)",
      "exercises": [
        {
          "title": "Book class",
          "instruction": "Class Book with __init__(self, title, author). Create one book and print title by author.",
          "solution": "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n\nb = Book(\"Things Fall Apart\", \"Chinua Achebe\")\nprint(f\"{b.title} by {b.author}\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-47",
      "title": "9.4 self Parameter — The Object Itself",
      "module": "OOP",
      "objective": "Understand why methods take self and how it works.",
      "why": "self is “this account” or “this product” — the specific object you are working with.",
      "explanation": "<p><strong>What you will learn.</strong> Understand why methods take self and how it works. By the end of this lesson you should be able to explain <em>self Parameter</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: self is “this account” or “this product” — the specific object you are working with. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle <em>data</em> (what something knows) with <em>behavior</em> (what it can do). Blueprints (classes/structs) describe the shape; instances are the real things your program uses.</p>\n<p><strong>Core explanation.</strong> self is the instance. You do not pass it manually: Python injects it. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>self Parameter</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Greeter”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class Counter:\n    def __init__(self):\n        self.value = 0\n    def bump(self):\n        self.value += 1\n\nc = Counter()\nc.bump()\nc.bump()\nprint(c.value)  # 2",
      "exercises": [
        {
          "title": "Greeter",
          "instruction": "Class Greeter with __init__(self, name) and method hello(self) printing Hello, name.",
          "solution": "class Greeter:\n    def __init__(self, name):\n        self.name = name\n    def hello(self):\n        print(f\"Hello, {self.name}\")\n\nGreeter(\"Amaka\").hello()",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-48",
      "title": "9.5 Class Properties — Attributes & Encapsulation Basics",
      "module": "OOP",
      "objective": "Use instance attributes and simple property-style access.",
      "why": "Hide internal details (like PIN hash) while exposing safe data (account name).",
      "explanation": "<p><strong>What you will learn.</strong> Use instance attributes and simple property-style access. By the end of this lesson you should be able to explain <em>Class Properties</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Hide internal details (like PIN hash) while exposing safe data (account name). Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle <em>data</em> (what something knows) with <em>behavior</em> (what it can do). Blueprints (classes/structs) describe the shape; instances are the real things your program uses.</p>\n<p><strong>Core explanation.</strong> Attributes store state. Convention: _internal means “please don’t touch”. properties can add getters/setters. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Class Properties</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Temperature”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self._salary = salary  # \"protected\" by convention\n\n    @property\n    def salary(self):\n        return self._salary\n\ne = Employee(\"Tola\", 150000)\nprint(e.name, e.salary)",
      "exercises": [
        {
          "title": "Temperature",
          "instruction": "Class with _celsius. Property celsius returns it. Create Temp(36.5) and print.",
          "solution": "class Temp:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    @property\n    def celsius(self):\n        return self._celsius\n\nprint(Temp(36.5).celsius)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-49",
      "title": "9.6 Class Methods — Behavior on Objects",
      "module": "OOP",
      "objective": "Write instance methods that use and update object state.",
      "why": "deposit() and withdraw() on a bank account are methods — actions the object can perform.",
      "explanation": "<p><strong>What you will learn.</strong> Write instance methods that use and update object state. By the end of this lesson you should be able to explain <em>Class Methods</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: deposit() and withdraw() on a bank account are methods — actions the object can perform. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A function packages a recipe: inputs go in, a result (or action) comes out. You write it once and reuse it many times — fewer bugs, easier testing.</p>\n<p><strong>Core explanation.</strong> Write instance methods that use and update object state. This lesson focuses on <strong>Class Methods</strong> inside the <em>OOP</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Name the action; list inputs; write the body; return or print a result; call it twice with different inputs. If the second call works without rewriting the body, the function is doing its job.</p>\n<p><strong>Walking through the example.</strong> The sample has about 11 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Class Methods</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Wallet”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class Cart:\n    def __init__(self):\n        self.items = []\n    def add(self, name, price):\n        self.items.append({\"name\": name, \"price\": price})\n    def total(self):\n        return sum(i[\"price\"] for i in self.items)\n\nc = Cart()\nc.add(\"Bread\", 800)\nc.add(\"Eggs\", 1500)\nprint(c.total())",
      "exercises": [
        {
          "title": "Wallet",
          "instruction": "Class Wallet with balance, methods credit(amount) and debit(amount). Demo both.",
          "solution": "class Wallet:\n    def __init__(self, balance=0):\n        self.balance = balance\n    def credit(self, amount):\n        self.balance += amount\n    def debit(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n        else:\n            print(\"Insufficient\")\n\nw = Wallet(1000)\nw.credit(500)\nw.debit(200)\nprint(w.balance)  # 1300",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-50",
      "title": "9.7 Inheritance — Reuse Through Hierarchy",
      "module": "OOP",
      "objective": "Create child classes that extend parent classes.",
      "why": "SavingsAccount and CurrentAccount both inherit from Account — share code, specialize behavior.",
      "explanation": "<p><strong>What you will learn.</strong> Create child classes that extend parent classes. By the end of this lesson you should be able to explain <em>Inheritance</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: SavingsAccount and CurrentAccount both inherit from Account — share code, specialize behavior. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle <em>data</em> (what something knows) with <em>behavior</em> (what it can do). Blueprints (classes/structs) describe the shape; instances are the real things your program uses.</p>\n<p><strong>Core explanation.</strong> class Child(Parent): ... use super().__init__() Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 13 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Inheritance</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Animal → Dog”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n    def deposit(self, amount):\n        self.balance += amount\n\nclass SavingsAccount(Account):\n    def add_interest(self, rate=0.05):\n        self.balance += self.balance * rate\n\ns = SavingsAccount(\"Uche\", 10000)\ns.deposit(2000)\ns.add_interest()\nprint(s.balance)",
      "exercises": [
        {
          "title": "Animal → Dog",
          "instruction": "Animal has speak() returning \"...\". Dog inherits and overrides speak to \"Woof\". Print Dog().speak().",
          "solution": "class Animal:\n    def speak(self):\n        return \"...\"\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof\"\nprint(Dog().speak())",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-51",
      "title": "9.8 Polymorphism — One Interface, Many Forms",
      "module": "OOP",
      "objective": "Call the same method on different objects to get type-specific behavior.",
      "why": "notify(user) might SMS, email, or push — same call shape, different classes.",
      "explanation": "<p><strong>What you will learn.</strong> Call the same method on different objects to get type-specific behavior. By the end of this lesson you should be able to explain <em>Polymorphism</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: notify(user) might SMS, email, or push — same call shape, different classes. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle <em>data</em> (what something knows) with <em>behavior</em> (what it can do). Blueprints (classes/structs) describe the shape; instances are the real things your program uses.</p>\n<p><strong>Core explanation.</strong> Different classes implement the same method name; code using them does not care which type. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 10 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Polymorphism</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Shapes area”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class SMS:\n    def send(self, msg):\n        print(\"SMS:\", msg)\nclass Email:\n    def send(self, msg):\n        print(\"Email:\", msg)\n\ndef notify(channel, msg):\n    channel.send(msg)\n\nnotify(SMS(), \"OTP 4455\")\nnotify(Email(), \"Welcome!\")",
      "exercises": [
        {
          "title": "Shapes area",
          "instruction": "Classes Square(side) and Circle(r) both have area(). Print both areas. (use 3.14 for pi)",
          "solution": "class Square:\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        return self.side ** 2\nclass Circle:\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return 3.14 * self.r ** 2\nfor shape in (Square(4), Circle(3)):\n    print(shape.area())",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-52",
      "title": "9.9 Encapsulation — Protect Internal State",
      "module": "OOP",
      "objective": "Hide internal details and expose safe methods.",
      "why": "Customers should not set balance = 1_000_000 directly — only deposit/withdraw with rules.",
      "explanation": "<p><strong>What you will learn.</strong> Hide internal details and expose safe methods. By the end of this lesson you should be able to explain <em>Encapsulation</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Customers should not set balance = 1_000_000 directly — only deposit/withdraw with rules. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle <em>data</em> (what something knows) with <em>behavior</em> (what it can do). Blueprints (classes/structs) describe the shape; instances are the real things your program uses.</p>\n<p><strong>Core explanation.</strong> Use _protected / __private naming and public methods for controlled access. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 14 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Encapsulation</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Why encapsulation?”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class Vault:\n    def __init__(self):\n        self.__pin = \"1234\"\n        self.__balance = 0\n    def deposit(self, amount, pin):\n        if pin == self.__pin and amount > 0:\n            self.__balance += amount\n    def get_balance(self, pin):\n        if pin == self.__pin:\n            return self.__balance\n        return None\n\nv = Vault()\nv.deposit(5000, \"1234\")\nprint(v.get_balance(\"1234\"))",
      "exercises": [
        {
          "title": "Why encapsulation?",
          "instruction": "Print two sentences: one risk of public balance attribute, one benefit of deposit() method.",
          "solution": "print(\"Risk: anyone could set balance to any number\")\nprint(\"Benefit: deposit() can validate amount and log the transaction\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-53",
      "title": "9.10 Inner Classes — Classes Inside Classes",
      "module": "OOP",
      "objective": "Define nested classes when a helper type belongs only to one outer class.",
      "why": "A Car might have an Engine class only meaningful inside Car — nested classes keep code tidy.",
      "explanation": "<p><strong>What you will learn.</strong> Define nested classes when a helper type belongs only to one outer class. By the end of this lesson you should be able to explain <em>Inner Classes</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: A Car might have an Engine class only meaningful inside Car — nested classes keep code tidy. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle <em>data</em> (what something knows) with <em>behavior</em> (what it can do). Blueprints (classes/structs) describe the shape; instances are the real things your program uses.</p>\n<p><strong>Core explanation.</strong> Define nested classes when a helper type belongs only to one outer class. This lesson focuses on <strong>Inner Classes</strong> inside the <em>OOP</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Inner Classes</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “House.Room”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class University:\n    def __init__(self, name):\n        self.name = name\n    class Department:\n        def __init__(self, title):\n            self.title = title\n\nuni = University(\"Unilag\")\ncs = University.Department(\"Computer Science\")\nprint(uni.name, cs.title)",
      "exercises": [
        {
          "title": "House.Room",
          "instruction": "Create House with nested Room(name). Instantiate a Kitchen room and print its name.",
          "solution": "class House:\n    class Room:\n        def __init__(self, name):\n            self.name = name\nkitchen = House.Room(\"Kitchen\")\nprint(kitchen.name)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-54",
      "title": "10.1 File Handling Intro",
      "module": "File Handling",
      "objective": "Understand file modes and the with statement.",
      "why": "Sales logs, customer exports, and config files live on disk — programs must read/write them safely.",
      "explanation": "<p><strong>What you will learn.</strong> Understand file modes and the with statement. By the end of this lesson you should be able to explain <em>File Handling Intro</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Sales logs, customer exports, and config files live on disk — programs must read/write them safely. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Files are how data survives after the program closes. The usual flow is open → read or write → close (or use a construct that closes automatically). Always think about encoding and paths.</p>\n<p><strong>Core explanation.</strong> Modes: r read, w write (overwrite), a append, x create, b binary, + update. Prefer with open(...) as f: so files always close. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Understand file modes and the with statement.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>File Handling Intro</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Mode quiz in code”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# Pattern\n# with open(\"sales.txt\", \"w\") as f:\n#     f.write(\"day1,10000\\n\")\n\nprint(\"Always prefer with-open to auto-close files\")\nprint(\"Modes: r, w, a, x, b, +\")",
      "exercises": [
        {
          "title": "Mode quiz in code",
          "instruction": "Print which mode you use to add lines to an existing log without erasing it.",
          "solution": "print(\"a  # append mode\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-55",
      "title": "10.2 Read Files — load Data from Disk",
      "module": "File Handling",
      "objective": "Read whole files, lines, and iterate efficiently.",
      "why": "Import yesterday’s CSV sales export and analyze it.",
      "explanation": "<p><strong>What you will learn.</strong> Read whole files, lines, and iterate efficiently. By the end of this lesson you should be able to explain <em>Read Files</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Import yesterday’s CSV sales export and analyze it. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Files are how data survives after the program closes. The usual flow is open → read or write → close (or use a construct that closes automatically). Always think about encoding and paths.</p>\n<p><strong>Core explanation.</strong> read(), readline(), readlines(), or for line in f: Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Read whole files, lines, and iterate efficiently.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 10 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Read Files</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Parse sample log”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# with open(\"note.txt\", \"r\") as f:\n#     content = f.read()\n# with open(\"note.txt\") as f:\n#     for line in f:\n#         print(line.strip())\n\n# Demo without real file:\nsample = \"Rice,10\\nBeans,5\\n\"\nfor line in sample.splitlines():\n    item, qty = line.split(\",\")\n    print(item, \"→\", qty)",
      "exercises": [
        {
          "title": "Parse sample log",
          "instruction": "data = \"Mon,100\\nTue,150\". Split lines and print each day total.",
          "solution": "data = \"Mon,100\\nTue,150\"\nfor line in data.splitlines():\n    day, total = line.split(\",\")\n    print(day, total)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-56",
      "title": "10.3 Write & Create Files",
      "module": "File Handling",
      "objective": "Create files and write text reports.",
      "why": "Generate a daily sales report file you can email or backup.",
      "explanation": "<p><strong>What you will learn.</strong> Create files and write text reports. By the end of this lesson you should be able to explain <em>Write &amp; Create Files</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Generate a daily sales report file you can email or backup. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Files are how data survives after the program closes. The usual flow is open → read or write → close (or use a construct that closes automatically). Always think about encoding and paths.</p>\n<p><strong>Core explanation.</strong> write() and writelines(). w creates/overwrites; a appends. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Create files and write text reports.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Write &amp; Create Files</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Build report string”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# with open(\"report.txt\", \"w\") as f:\n#     f.write(\"Daily Sales Report\\n\")\n#     f.write(\"Total: 45000\\n\")\n\nlines = [\"Daily Sales Report\\n\", \"Total: 45000\\n\"]\nprint(\"\".join(lines))\nprint(\"(In real code, write these lines into report.txt)\")",
      "exercises": [
        {
          "title": "Build report string",
          "instruction": "Create a multi-line report for shop \"GoodFood\" with total 88000 and print it (simulate file content).",
          "solution": "report = \"\"\"Shop: GoodFood\nTotal sales: ₦88000\nStatus: CLOSED OUT\n\"\"\"\nprint(report)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-57",
      "title": "10.4 Delete Files — os.remove",
      "module": "File Handling",
      "objective": "Delete files safely with os and check existence first.",
      "why": "Clean up temp exports so disks do not fill with stale reports.",
      "explanation": "<p><strong>What you will learn.</strong> Delete files safely with os and check existence first. By the end of this lesson you should be able to explain <em>Delete Files</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Clean up temp exports so disks do not fill with stale reports. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Files are how data survives after the program closes. The usual flow is open → read or write → close (or use a construct that closes automatically). Always think about encoding and paths.</p>\n<p><strong>Core explanation.</strong> import os os.path.exists(path) os.remove(path) Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Delete files safely with os and check existence first.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Delete Files</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Safe delete helper”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import os\npath = \"temp_report.txt\"\n# if os.path.exists(path):\n#     os.remove(path)\n#     print(\"Deleted\")\n# else:\n#     print(\"Nothing to delete\")\nprint(\"Always check exists() before remove()\")",
      "exercises": [
        {
          "title": "Safe delete helper",
          "instruction": "Write a function safe_delete(path) that prints Deleted or Missing (use os.path.exists logic; you may simulate with a variable exists=False).",
          "solution": "def safe_delete(path, exists=False):\n    if exists:\n        print(\"Deleted\", path)\n    else:\n        print(\"Missing\", path)\n\nsafe_delete(\"old.csv\", exists=False)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-mp-02",
      "title": "10.5 Mini Project — Daily Sales Log",
      "module": "File Handling",
      "path": "beginner",
      "project": true,
      "objective": "Append sales lines and compute a total from text data.",
      "why": "Shops close the day by totaling a log file — automation saves hours.",
      "explanation": "<p><strong>What you will learn.</strong> Append sales lines and compute a total from text data. By the end of this lesson you should be able to explain <em>Mini Project</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Shops close the day by totaling a log file — automation saves hours. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Files are how data survives after the program closes. The usual flow is open → read or write → close (or use a construct that closes automatically). Always think about encoding and paths.</p>\n<p><strong>Core explanation.</strong> Simulate a log with multiple lines \"item,amount\". Parse, sum amounts, and print a report. In real life you write to sales.txt with open(..., \"a\"). Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Append sales lines and compute a total from text data.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Mini Project</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Count lines”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Forgetting to convert amount to float leaves you concatenating strings.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "log = \"\"\"rice,45000\nbeans,9000\noil,12000\"\"\"\n\ntotal = 0\nfor line in log.splitlines():\n    item, amount = line.split(\",\")\n    total += float(amount)\n    print(f\"- {item}: ₦{float(amount):,.0f}\")\nprint(f\"TOTAL: ₦{total:,.0f}\")",
      "pitfalls": "Forgetting to convert amount to float leaves you concatenating strings.",
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
      "explanation": "<p><strong>What you will learn.</strong> Create NumPy arrays and compute basic statistics. By the end of this lesson you should be able to explain <em>NumPy</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Analyze thousands of sensor readings or prices in milliseconds — NumPy is the foundation of data science. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> import numpy as np Arrays are faster than lists for numeric work. Vectorized ops apply to whole arrays. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>NumPy</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Weekly average”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import numpy as np\nsales = np.array([12000, 15000, 9000, 18000, 11000])\nprint(sales.mean())\nprint(sales.max(), sales.min())\nprint(sales * 1.1)  # 10% boost all days",
      "exercises": [
        {
          "title": "Weekly average",
          "instruction": "np.array of 7 daily customers counts. Print mean and sum.",
          "solution": "import numpy as np\ncustomers = np.array([40, 55, 38, 60, 72, 90, 85])\nprint(\"Average:\", customers.mean())\nprint(\"Total:\", customers.sum())",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-59",
      "title": "11.2 Pandas — Tables for Real Data",
      "module": "Data Libraries",
      "objective": "Use DataFrames to load, filter, and summarize tabular data.",
      "why": "Excel sales sheets become superpowered with Pandas — filter Lagos rows, group by product, export CSV.",
      "explanation": "<p><strong>What you will learn.</strong> Use DataFrames to load, filter, and summarize tabular data. By the end of this lesson you should be able to explain <em>Pandas</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Excel sales sheets become superpowered with Pandas — filter Lagos rows, group by product, export CSV. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> import pandas as pd DataFrame = table. Series = column. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Pandas</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Filter high qty”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import pandas as pd\ndf = pd.DataFrame({\n    \"product\": [\"Rice\", \"Beans\", \"Rice\"],\n    \"qty\": [10, 5, 7],\n    \"city\": [\"Lagos\", \"Abuja\", \"Lagos\"]\n})\nprint(df)\nprint(df[df[\"city\"] == \"Lagos\"])\nprint(df.groupby(\"product\")[\"qty\"].sum())",
      "exercises": [
        {
          "title": "Filter high qty",
          "instruction": "From a small DataFrame of products/qty, print rows where qty >= 10.",
          "solution": "import pandas as pd\ndf = pd.DataFrame({\"product\": [\"A\", \"B\", \"C\"], \"qty\": [12, 4, 20]})\nprint(df[df[\"qty\"] >= 10])",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-60",
      "title": "11.3 SciPy — Scientific Computing Toolkit",
      "module": "Data Libraries",
      "objective": "Know when to use SciPy for stats, optimization, and signal tools.",
      "why": "Engineers and researchers use SciPy for advanced math on top of NumPy.",
      "explanation": "<p><strong>What you will learn.</strong> Know when to use SciPy for stats, optimization, and signal tools. By the end of this lesson you should be able to explain <em>SciPy</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Engineers and researchers use SciPy for advanced math on top of NumPy. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> import scipy Subpackages: scipy.stats, optimize, integrate, signal, ... Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Know when to use SciPy for stats, optimization, and signal tools.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>SciPy</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Quick stat”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from scipy import stats\ndata = [12, 15, 14, 10, 18, 15, 13]\nprint(\"Describe:\", stats.describe(data))\nprint(\"Mode:\", stats.mode(data, keepdims=True))",
      "exercises": [
        {
          "title": "Quick stat",
          "instruction": "Using scipy.stats or pure Python, print mean of [2,4,6,8].",
          "solution": "import numpy as np\nprint(np.mean([2, 4, 6, 8]))  # 5.0\n# or from scipy import stats; stats.tmean([2,4,6,8])",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-61",
      "title": "11.4 Django Intro — Python Web Framework",
      "module": "Data Libraries",
      "objective": "Understand Django’s role for building secure web apps quickly.",
      "why": "Need a full website with login, admin, and database? Django is a batteries-included web framework.",
      "explanation": "<p><strong>What you will learn.</strong> Understand Django’s role for building secure web apps quickly. By the end of this lesson you should be able to explain <em>Django Intro</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Need a full website with login, admin, and database? Django is a batteries-included web framework. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs exchange structured data (often JSON) between browser, server, and files. Learn to create, parse, and validate that data.</p>\n<p><strong>Core explanation.</strong> Django uses MVT (Model-View-Template). Famous for admin panel and ORM. Install: pip install django. Start: django-admin startproject mysite Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Understand Django’s role for building secure web apps quickly.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Django Intro</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Name three Django use cases”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# Shell workflow:\n# pip install django\n# django-admin startproject myshop\n# cd myshop\n# python manage.py runserver\n\nprint(\"Django = models (DB) + views (logic) + templates (HTML)\")\nprint(\"Great for: portals, e-commerce, dashboards\")",
      "exercises": [
        {
          "title": "Name three Django use cases",
          "instruction": "Print 3 web apps you could build with Django for a local business.",
          "solution": "print(\"1. Online store with orders\")\nprint(\"2. School results portal\")\nprint(\"3. Clinic appointment booking\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-mp-03",
      "title": "11.5 Mini Project — Pandas Sales Summary",
      "module": "Data Libraries",
      "path": "data",
      "project": true,
      "objective": "Summarize a small sales table with Pandas.",
      "why": "Managers ask: total by product and city — Pandas answers in seconds.",
      "explanation": "<p><strong>What you will learn.</strong> Summarize a small sales table with Pandas. By the end of this lesson you should be able to explain <em>Mini Project</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Managers ask: total by product and city — Pandas answers in seconds. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful mini-app you can show someone.</p>\n<p><strong>Core explanation.</strong> Create a DataFrame, filter, groupby sum. This is the core of business analytics. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Summarize a small sales table with Pandas.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Mini Project</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “City summary”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Column name typos cause KeyError.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import pandas as pd\ndf = pd.DataFrame({\n    \"product\": [\"Rice\", \"Beans\", \"Rice\", \"Oil\"],\n    \"city\": [\"Lagos\", \"Lagos\", \"Abuja\", \"Lagos\"],\n    \"amount\": [45000, 9000, 40000, 12000]\n})\nprint(df.groupby(\"product\")[\"amount\"].sum())\nprint(\"Lagos total:\", df[df.city==\"Lagos\"][\"amount\"].sum())",
      "pitfalls": "Column name typos cause KeyError.",
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
      "explanation": "<p><strong>What you will learn.</strong> Know what Matplotlib is and when to use it. By the end of this lesson you should be able to explain <em>Matplotlib Intro</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Charts tell stories numbers hide — trends in sales at a glance. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> Matplotlib is the classic Python plotting library. Works with NumPy/Pandas. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Matplotlib Intro</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nprint(\"plt.plot / scatter / bar / hist / pie\")\nprint(\"plt.show() displays the figure\")",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nprint(\"plt.plot / scatter / bar / hist / pie\")\nprint(\"plt.show() displays the figure\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-63",
      "title": "12.2 Get Started — First Plot",
      "module": "Matplotlib",
      "objective": "Create and display a simple line plot.",
      "why": "Managers understand a line chart faster than a spreadsheet dump.",
      "explanation": "<p><strong>What you will learn.</strong> Create and display a simple line plot. By the end of this lesson you should be able to explain <em>Get Started</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Managers understand a line chart faster than a spreadsheet dump. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> Create and display a simple line plot. This lesson focuses on <strong>Get Started</strong> inside the <em>Matplotlib</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Get Started</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\ndays = [1, 2, 3, 4, 5]\nsales = [20, 35, 30, 50, 45]\nplt.plot(days, sales)\nplt.title(\"Sales This Week\")\nplt.xlabel(\"Day\")\nplt.ylabel(\"Units\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\ndays = [1, 2, 3, 4, 5]\nsales = [20, 35, 30, 50, 45]\nplt.plot(days, sales)\nplt.title(\"Sales This Week\")\nplt.xlabel(\"Day\")\nplt.ylabel(\"Units\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-64",
      "title": "12.3 Pyplot Basics",
      "module": "Matplotlib",
      "objective": "Use plt state-machine style plotting.",
      "why": "Pyplot is the quick interface for everyday charts.",
      "explanation": "<p><strong>What you will learn.</strong> Use plt state-machine style plotting. By the end of this lesson you should be able to explain <em>Pyplot Basics</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Pyplot is the quick interface for everyday charts. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> plt.figure, plot, title, legend, grid, show. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Pyplot Basics</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.figure(figsize=(6, 4))\nplt.plot([1, 2, 3], [3, 1, 4], label=\"A\")\nplt.legend()\nplt.grid(True)\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.figure(figsize=(6, 4))\nplt.plot([1, 2, 3], [3, 1, 4], label=\"A\")\nplt.legend()\nplt.grid(True)\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-65",
      "title": "12.4 Plotting Multiple Lines",
      "module": "Matplotlib",
      "objective": "Plot multiple datasets together.",
      "why": "Compare this month vs last month on one chart.",
      "explanation": "<p><strong>What you will learn.</strong> Plot multiple datasets together. By the end of this lesson you should be able to explain <em>Plotting Multiple Lines</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Compare this month vs last month on one chart. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> Plot multiple datasets together. This lesson focuses on <strong>Plotting Multiple Lines</strong> inside the <em>Matplotlib</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Plotting Multiple Lines</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4]\nplt.plot(x, [10, 12, 11, 15], label=\"June\")\nplt.plot(x, [9, 10, 13, 14], label=\"July\")\nplt.legend()\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4]\nplt.plot(x, [10, 12, 11, 15], label=\"June\")\nplt.plot(x, [9, 10, 13, 14], label=\"July\")\nplt.legend()\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-66",
      "title": "12.5 Markers",
      "module": "Matplotlib",
      "objective": "Customize point markers on plots.",
      "why": "Highlight key points like peak sales days.",
      "explanation": "<p><strong>What you will learn.</strong> Customize point markers on plots. By the end of this lesson you should be able to explain <em>Markers</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Highlight key points like peak sales days. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> Customize point markers on plots. This lesson focuses on <strong>Markers</strong> inside the <em>Matplotlib</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Markers</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 5, 3], marker=\"o\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 5, 3], marker=\"o\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-67",
      "title": "12.6 Line Styles",
      "module": "Matplotlib",
      "objective": "Change line style and width.",
      "why": "Dashed vs solid lines distinguish forecast vs actual.",
      "explanation": "<p><strong>What you will learn.</strong> Change line style and width. By the end of this lesson you should be able to explain <em>Line Styles</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Dashed vs solid lines distinguish forecast vs actual. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> linestyle='--', linewidth=2, color='green' Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Line Styles</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [1, 4, 2], linestyle=\"--\", linewidth=2, color=\"green\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [1, 4, 2], linestyle=\"--\", linewidth=2, color=\"green\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-68",
      "title": "12.7 Labels & Titles",
      "module": "Matplotlib",
      "objective": "Add title, xlabel, ylabel, legend.",
      "why": "Unlabeled charts confuse stakeholders — always name axes.",
      "explanation": "<p><strong>What you will learn.</strong> Add title, xlabel, ylabel, legend. By the end of this lesson you should be able to explain <em>Labels &amp; Titles</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Unlabeled charts confuse stakeholders — always name axes. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> Add title, xlabel, ylabel, legend. This lesson focuses on <strong>Labels &amp; Titles</strong> inside the <em>Matplotlib</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Labels &amp; Titles</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [3, 5, 4])\nplt.title(\"Weekly Revenue\")\nplt.xlabel(\"Week\")\nplt.ylabel(\"₦ thousands\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [3, 5, 4])\nplt.title(\"Weekly Revenue\")\nplt.xlabel(\"Week\")\nplt.ylabel(\"₦ thousands\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-69",
      "title": "12.8 Grid",
      "module": "Matplotlib",
      "objective": "Toggle and style grid lines.",
      "why": "Grids help people read values off a chart accurately.",
      "explanation": "<p><strong>What you will learn.</strong> Toggle and style grid lines. By the end of this lesson you should be able to explain <em>Grid</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Grids help people read values off a chart accurately. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern layout tools (Flexbox/Grid) replace fragile positioning hacks and help pages work on phones.</p>\n<p><strong>Core explanation.</strong> Toggle and style grid lines. This lesson focuses on <strong>Grid</strong> inside the <em>Matplotlib</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Grid</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([0, 1, 2], [0, 1, 4])\nplt.grid(True, linestyle=\":\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([0, 1, 2], [0, 1, 4])\nplt.grid(True, linestyle=\":\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-70",
      "title": "12.9 Subplots",
      "module": "Matplotlib",
      "objective": "Create multi-panel figures with subplot.",
      "why": "Show sales and expenses side by side in one figure.",
      "explanation": "<p><strong>What you will learn.</strong> Create multi-panel figures with subplot. By the end of this lesson you should be able to explain <em>Subplots</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Show sales and expenses side by side in one figure. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> Create multi-panel figures with subplot. This lesson focuses on <strong>Subplots</strong> inside the <em>Matplotlib</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Subplots</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nplt.subplot(1, 2, 1)\nplt.plot([1, 2, 3], [3, 2, 5])\nplt.title(\"Sales\")\nplt.subplot(1, 2, 2)\nplt.bar([1, 2, 3], [2, 4, 3])\nplt.title(\"Expenses\")\nplt.tight_layout()\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.subplot(1, 2, 1)\nplt.plot([1, 2, 3], [3, 2, 5])\nplt.title(\"Sales\")\nplt.subplot(1, 2, 2)\nplt.bar([1, 2, 3], [2, 4, 3])\nplt.title(\"Expenses\")\nplt.tight_layout()\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-71",
      "title": "12.10 Scatter Plots",
      "module": "Matplotlib",
      "objective": "Use scatter for correlation-style views.",
      "why": "Spot relationship between ad spend and customers.",
      "explanation": "<p><strong>What you will learn.</strong> Use scatter for correlation-style views. By the end of this lesson you should be able to explain <em>Scatter Plots</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Spot relationship between ad spend and customers. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> Use scatter for correlation-style views. This lesson focuses on <strong>Scatter Plots</strong> inside the <em>Matplotlib</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Scatter Plots</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nad = [1, 2, 3, 4, 5]\ncustomers = [20, 28, 30, 45, 50]\nplt.scatter(ad, customers)\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nad = [1, 2, 3, 4, 5]\ncustomers = [20, 28, 30, 45, 50]\nplt.scatter(ad, customers)\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-72",
      "title": "12.11 Bar Charts",
      "module": "Matplotlib",
      "objective": "Create vertical bar charts.",
      "why": "Compare product categories at a glance.",
      "explanation": "<p><strong>What you will learn.</strong> Create vertical bar charts. By the end of this lesson you should be able to explain <em>Bar Charts</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Compare product categories at a glance. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> Create vertical bar charts. This lesson focuses on <strong>Bar Charts</strong> inside the <em>Matplotlib</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Bar Charts</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nproducts = [\"Rice\", \"Beans\", \"Oil\"]\nqty = [50, 30, 20]\nplt.bar(products, qty, color=\"teal\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nproducts = [\"Rice\", \"Beans\", \"Oil\"]\nqty = [50, 30, 20]\nplt.bar(products, qty, color=\"teal\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-73",
      "title": "12.12 Histograms",
      "module": "Matplotlib",
      "objective": "Plot frequency distributions with hist.",
      "why": "See how exam scores or ages are distributed.",
      "explanation": "<p><strong>What you will learn.</strong> Plot frequency distributions with hist. By the end of this lesson you should be able to explain <em>Histograms</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: See how exam scores or ages are distributed. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> Plot frequency distributions with hist. This lesson focuses on <strong>Histograms</strong> inside the <em>Matplotlib</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Histograms</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nscores = [55, 60, 61, 70, 72, 72, 75, 80, 90, 95]\nplt.hist(scores, bins=5)\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nscores = [55, 60, 61, 70, 72, 72, 75, 80, 90, 95]\nplt.hist(scores, bins=5)\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-74",
      "title": "12.13 Pie Charts",
      "module": "Matplotlib",
      "objective": "Create pie charts with labels and autopct.",
      "why": "Show market share or budget split.",
      "explanation": "<p><strong>What you will learn.</strong> Create pie charts with labels and autopct. By the end of this lesson you should be able to explain <em>Pie Charts</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Show market share or budget split. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Charts turn tables of numbers into pictures. Trends, comparisons, and outliers become obvious — but only if axes and titles are clear.</p>\n<p><strong>Core explanation.</strong> plt.pie(sizes, labels=..., autopct=\"%1.1f%%\") Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Pie Charts</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Try it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nlabels = [\"Rent\", \"Salaries\", \"Ads\", \"Other\"]\nsizes = [40, 35, 15, 10]\nplt.pie(sizes, labels=labels, autopct=\"%1.1f%%\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nlabels = [\"Rent\", \"Salaries\", \"Ads\", \"Other\"]\nsizes = [40, 35, 15, 10]\nplt.pie(sizes, labels=labels, autopct=\"%1.1f%%\")\n# plt.show()  # uncomment locally",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-75",
      "title": "13.1 ML Getting Started",
      "module": "Machine Learning",
      "objective": "Define ML, supervised vs unsupervised, and the workflow.",
      "why": "Predict demand, detect fraud, recommend products — ML learns patterns from data.",
      "explanation": "<p><strong>What you will learn.</strong> Define ML, supervised vs unsupervised, and the workflow. By the end of this lesson you should be able to explain <em>ML Getting Started</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Predict demand, detect fraud, recommend products — ML learns patterns from data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Workflow: collect data → clean → train → evaluate → deploy. Libraries: scikit-learn, pandas, numpy. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>ML Getting Started</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print(\"Supervised: labeled data (price prediction)\")\nprint(\"Unsupervised: find groups (customer segments)\")\nprint(\"Pipeline: data → model → metrics → improve\")",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "print(\"Supervised: labeled data (price prediction)\")\nprint(\"Unsupervised: find groups (customer segments)\")\nprint(\"Pipeline: data → model → metrics → improve\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-76",
      "title": "13.2 Mean, Median, Mode",
      "module": "Machine Learning",
      "objective": "Compute central tendency measures.",
      "why": "Average salary vs typical salary — different stats tell different stories.",
      "explanation": "<p><strong>What you will learn.</strong> Compute central tendency measures. By the end of this lesson you should be able to explain <em>Mean, Median, Mode</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Average salary vs typical salary — different stats tell different stories. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> mean average, median middle, mode most frequent. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Compute central tendency measures.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Mean, Median, Mode</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import numpy as np\nfrom statistics import mode\nx = [3, 5, 5, 7, 9]\nprint(np.mean(x), np.median(x), mode(x))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\nfrom statistics import mode\nx = [3, 5, 5, 7, 9]\nprint(np.mean(x), np.median(x), mode(x))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-77",
      "title": "13.3 Standard Deviation",
      "module": "Machine Learning",
      "objective": "Measure spread with standard deviation.",
      "why": "How spread out are delivery times? Std dev answers.",
      "explanation": "<p><strong>What you will learn.</strong> Measure spread with standard deviation. By the end of this lesson you should be able to explain <em>Standard Deviation</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: How spread out are delivery times? Std dev answers. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Low std → consistent. High std → volatile. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Measure spread with standard deviation.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Standard Deviation</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import numpy as np\ntimes = [30, 32, 31, 90, 29]\nprint(np.std(times))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\ntimes = [30, 32, 31, 90, 29]\nprint(np.std(times))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-78",
      "title": "13.4 Percentile",
      "module": "Machine Learning",
      "objective": "Compute percentiles with NumPy.",
      "why": "90th percentile delivery time is your worst-case promise to customers.",
      "explanation": "<p><strong>What you will learn.</strong> Compute percentiles with NumPy. By the end of this lesson you should be able to explain <em>Percentile</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: 90th percentile delivery time is your worst-case promise to customers. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Compute percentiles with NumPy. This lesson focuses on <strong>Percentile</strong> inside the <em>Machine Learning</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Compute percentiles with NumPy.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Percentile</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import numpy as np\ndata = [10, 20, 30, 40, 50, 60, 70]\nprint(np.percentile(data, 90))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\ndata = [10, 20, 30, 40, 50, 60, 70]\nprint(np.percentile(data, 90))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-79",
      "title": "13.5 Data Distribution",
      "module": "Machine Learning",
      "objective": "Describe uniform vs skewed distributions conceptually.",
      "why": "Understanding how data is spread guides model choice.",
      "explanation": "<p><strong>What you will learn.</strong> Describe uniform vs skewed distributions conceptually. By the end of this lesson you should be able to explain <em>Data Distribution</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Understanding how data is spread guides model choice. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Visualize with histograms; summarize with describe(). Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Describe uniform vs skewed distributions conceptually.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Data Distribution</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import numpy as np\nuniform = np.random.uniform(0, 1, 5)\nprint(uniform)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\nuniform = np.random.uniform(0, 1, 5)\nprint(uniform)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-80",
      "title": "13.6 Normal Distribution",
      "module": "Machine Learning",
      "objective": "Generate and recognize normal data.",
      "why": "Heights, exam scores often form a bell curve.",
      "explanation": "<p><strong>What you will learn.</strong> Generate and recognize normal data. By the end of this lesson you should be able to explain <em>Normal Distribution</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Heights, exam scores often form a bell curve. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Generate and recognize normal data. This lesson focuses on <strong>Normal Distribution</strong> inside the <em>Machine Learning</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Generate and recognize normal data.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Normal Distribution</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import numpy as np\nsample = np.random.normal(100, 15, 5)\nprint(sample)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\nsample = np.random.normal(100, 15, 5)\nprint(sample)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-81",
      "title": "13.7 Scatter Plot for ML",
      "module": "Machine Learning",
      "objective": "Plot feature vs target as scatter.",
      "why": "Visualize relationship before fitting a model.",
      "explanation": "<p><strong>What you will learn.</strong> Plot feature vs target as scatter. By the end of this lesson you should be able to explain <em>Scatter Plot for ML</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Visualize relationship before fitting a model. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Loops repeat work so you do not copy-paste the same line 100 times. You always need a clear stop condition or a finite collection to walk through.</p>\n<p><strong>Core explanation.</strong> Patterns suggest linear vs nonlinear models. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Scatter Plot for ML</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 5, 4, 5]\nplt.scatter(x, y)\n# plt.show()",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 5, 4, 5]\nplt.scatter(x, y)\n# plt.show()",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-82",
      "title": "13.8 Linear Regression",
      "module": "Machine Learning",
      "objective": "Fit a simple linear regression with scikit-learn.",
      "why": "Predict house price from size — classic straight-line model.",
      "explanation": "<p><strong>What you will learn.</strong> Fit a simple linear regression with scikit-learn. By the end of this lesson you should be able to explain <em>Linear Regression</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Predict house price from size — classic straight-line model. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Fit a simple linear regression with scikit-learn. This lesson focuses on <strong>Linear Regression</strong> inside the <em>Machine Learning</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Linear Regression</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([2, 4, 6, 8])\nmodel = LinearRegression().fit(X, y)\nprint(model.predict([[5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([2, 4, 6, 8])\nmodel = LinearRegression().fit(X, y)\nprint(model.predict([[5]]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-83",
      "title": "13.9 Polynomial Regression",
      "module": "Machine Learning",
      "objective": "Use polynomial features for curved relationships.",
      "why": "When growth curves bend, straight lines underfit.",
      "explanation": "<p><strong>What you will learn.</strong> Use polynomial features for curved relationships. By the end of this lesson you should be able to explain <em>Polynomial Regression</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: When growth curves bend, straight lines underfit. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> PolynomialFeatures + LinearRegression pipeline. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Polynomial Regression</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.preprocessing import PolynomialFeatures\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([1, 4, 9, 16])\nZ = PolynomialFeatures(2).fit_transform(X)\nmodel = LinearRegression().fit(Z, y)\nprint(model.coef_)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.preprocessing import PolynomialFeatures\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([1, 4, 9, 16])\nZ = PolynomialFeatures(2).fit_transform(X)\nmodel = LinearRegression().fit(Z, y)\nprint(model.coef_)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-84",
      "title": "13.10 Multiple Regression",
      "module": "Machine Learning",
      "objective": "Regress with multiple input features.",
      "why": "Predict sales from ads + price + season together.",
      "explanation": "<p><strong>What you will learn.</strong> Regress with multiple input features. By the end of this lesson you should be able to explain <em>Multiple Regression</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Predict sales from ads + price + season together. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> X has several columns; same LinearRegression API. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Multiple Regression</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1, 10], [2, 12], [3, 14], [4, 15]])\ny = np.array([20, 25, 30, 32])\nprint(LinearRegression().fit(X, y).predict([[5, 16]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1, 10], [2, 12], [3, 14], [4, 15]])\ny = np.array([20, 25, 30, 32])\nprint(LinearRegression().fit(X, y).predict([[5, 16]]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-85",
      "title": "13.11 Feature Scaling",
      "module": "Machine Learning",
      "objective": "Apply StandardScaler or MinMaxScaler.",
      "why": "Income and age are different scales — scaling keeps models fair.",
      "explanation": "<p><strong>What you will learn.</strong> Apply StandardScaler or MinMaxScaler. By the end of this lesson you should be able to explain <em>Feature Scaling</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Income and age are different scales — scaling keeps models fair. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Apply StandardScaler or MinMaxScaler. This lesson focuses on <strong>Feature Scaling</strong> inside the <em>Machine Learning</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Apply StandardScaler or MinMaxScaler.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Feature Scaling</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.preprocessing import StandardScaler\nimport numpy as np\nX = np.array([[1., 1000.], [2., 2000.], [3., 3000.]])\nprint(StandardScaler().fit_transform(X))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.preprocessing import StandardScaler\nimport numpy as np\nX = np.array([[1., 1000.], [2., 2000.], [3., 3000.]])\nprint(StandardScaler().fit_transform(X))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-86",
      "title": "13.12 Train / Test Split",
      "module": "Machine Learning",
      "objective": "Split data to evaluate generalization.",
      "why": "Never grade a student on questions they memorized — hold out a test set.",
      "explanation": "<p><strong>What you will learn.</strong> Split data to evaluate generalization. By the end of this lesson you should be able to explain <em>Train / Test Split</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Never grade a student on questions they memorized — hold out a test set. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> train_test_split from sklearn.model_selection Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Train / Test Split</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.model_selection import train_test_split\nimport numpy as np\nX = np.arange(20).reshape(10, 2)\ny = np.arange(10)\nXtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=42)\nprint(len(Xtr), len(Xte))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.model_selection import train_test_split\nimport numpy as np\nX = np.arange(20).reshape(10, 2)\ny = np.arange(10)\nXtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=42)\nprint(len(Xtr), len(Xte))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-87",
      "title": "13.13 Decision Tree",
      "module": "Machine Learning",
      "objective": "Train a DecisionTreeClassifier on simple data.",
      "why": "Loan yes/no rules that humans can inspect.",
      "explanation": "<p><strong>What you will learn.</strong> Train a DecisionTreeClassifier on simple data. By the end of this lesson you should be able to explain <em>Decision Tree</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Loan yes/no rules that humans can inspect. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer. Clear conditions prevent “mystery behavior”.</p>\n<p><strong>Core explanation.</strong> Train a DecisionTreeClassifier on simple data. This lesson focuses on <strong>Decision Tree</strong> inside the <em>Machine Learning</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Decision Tree</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nclf = DecisionTreeClassifier().fit(X, y)\nprint(clf.predict([[1.5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nclf = DecisionTreeClassifier().fit(X, y)\nprint(clf.predict([[1.5]]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-88",
      "title": "13.14 Confusion Matrix",
      "module": "Machine Learning",
      "objective": "Evaluate classification with a confusion matrix.",
      "why": "How many fraud cases did we catch vs miss?",
      "explanation": "<p><strong>What you will learn.</strong> Evaluate classification with a confusion matrix. By the end of this lesson you should be able to explain <em>Confusion Matrix</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: How many fraud cases did we catch vs miss? Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> TP, FP, TN, FN — sklearn.metrics.confusion_matrix Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Evaluate classification with a confusion matrix.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Confusion Matrix</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.metrics import confusion_matrix\ny_true = [1, 0, 1, 1, 0]\ny_pred = [1, 0, 0, 1, 0]\nprint(confusion_matrix(y_true, y_pred))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.metrics import confusion_matrix\ny_true = [1, 0, 1, 1, 0]\ny_pred = [1, 0, 0, 1, 0]\nprint(confusion_matrix(y_true, y_pred))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-89",
      "title": "13.15 Hierarchical Clustering",
      "module": "Machine Learning",
      "objective": "Introduce agglomerative clustering concept.",
      "why": "Group similar customers without pre-labeled segments.",
      "explanation": "<p><strong>What you will learn.</strong> Introduce agglomerative clustering concept. By the end of this lesson you should be able to explain <em>Hierarchical Clustering</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Group similar customers without pre-labeled segments. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Introduce agglomerative clustering concept. This lesson focuses on <strong>Hierarchical Clustering</strong> inside the <em>Machine Learning</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Hierarchical Clustering</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.cluster import AgglomerativeClustering\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(AgglomerativeClustering(n_clusters=2).fit_predict(X))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.cluster import AgglomerativeClustering\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(AgglomerativeClustering(n_clusters=2).fit_predict(X))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-90",
      "title": "13.16 Logistic Regression",
      "module": "Machine Learning",
      "objective": "Use LogisticRegression for classification.",
      "why": "Predict yes/no outcomes like churn or pass/fail.",
      "explanation": "<p><strong>What you will learn.</strong> Use LogisticRegression for classification. By the end of this lesson you should be able to explain <em>Logistic Regression</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Predict yes/no outcomes like churn or pass/fail. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Outputs class probabilities despite the name “regression”. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Logistic Regression</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([0, 0, 1, 1])\nprint(LogisticRegression().fit(X, y).predict([[3.5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([0, 0, 1, 1])\nprint(LogisticRegression().fit(X, y).predict([[3.5]]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-91",
      "title": "13.17 Grid Search",
      "module": "Machine Learning",
      "objective": "Use GridSearchCV to tune models.",
      "why": "Systematically try hyperparameters to improve a model.",
      "explanation": "<p><strong>What you will learn.</strong> Use GridSearchCV to tune models. By the end of this lesson you should be able to explain <em>Grid Search</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Systematically try hyperparameters to improve a model. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern layout tools (Flexbox/Grid) replace fragile positioning hacks and help pages work on phones.</p>\n<p><strong>Core explanation.</strong> Use GridSearchCV to tune models. This lesson focuses on <strong>Grid Search</strong> inside the <em>Machine Learning</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use GridSearchCV to tune models.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Grid Search</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\ngrid = GridSearchCV(DecisionTreeClassifier(), {\"max_depth\": [1, 2, 3]}, cv=2)\ngrid.fit(X, y)\nprint(grid.best_params_)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\ngrid = GridSearchCV(DecisionTreeClassifier(), {\"max_depth\": [1, 2, 3]}, cv=2)\ngrid.fit(X, y)\nprint(grid.best_params_)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-92",
      "title": "13.18 Categorical Data",
      "module": "Machine Learning",
      "objective": "Encode categories with OneHotEncoder or get_dummies.",
      "why": "City names must become numbers before most models train.",
      "explanation": "<p><strong>What you will learn.</strong> Encode categories with OneHotEncoder or get_dummies. By the end of this lesson you should be able to explain <em>Categorical Data</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: City names must become numbers before most models train. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Never feed raw strings into linear models. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Encode categories with OneHotEncoder or get_dummies.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Categorical Data</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"Lagos\", \"Abuja\", \"Lagos\"]})\nprint(pd.get_dummies(df))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"Lagos\", \"Abuja\", \"Lagos\"]})\nprint(pd.get_dummies(df))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-93",
      "title": "13.19 K-Means Clustering",
      "module": "Machine Learning",
      "objective": "Run KMeans to find clusters.",
      "why": "Split customers into K spending groups automatically.",
      "explanation": "<p><strong>What you will learn.</strong> Run KMeans to find clusters. By the end of this lesson you should be able to explain <em>K-Means Clustering</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Split customers into K spending groups automatically. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Choose K; algorithm assigns each point a group. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>K-Means Clustering</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.cluster import KMeans\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(KMeans(n_clusters=2, n_init=10).fit_predict(X))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.cluster import KMeans\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(KMeans(n_clusters=2, n_init=10).fit_predict(X))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-94",
      "title": "13.20 Bootstrap Aggregation (Bagging)",
      "module": "Machine Learning",
      "objective": "Understand bagging and RandomForest as example.",
      "why": "Many weak models vote — often more stable predictions.",
      "explanation": "<p><strong>What you will learn.</strong> Understand bagging and RandomForest as example. By the end of this lesson you should be able to explain <em>Bootstrap Aggregation (Bagging)</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Many weak models vote — often more stable predictions. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Understand bagging and RandomForest as example. This lesson focuses on <strong>Bootstrap Aggregation (Bagging)</strong> inside the <em>Machine Learning</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Understand bagging and RandomForest as example.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Bootstrap Aggregation (Bagging)</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.ensemble import BaggingClassifier\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\nclf = BaggingClassifier(DecisionTreeClassifier(), n_estimators=5, random_state=0)\nprint(clf.fit(X, y).predict([[2.5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.ensemble import BaggingClassifier\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\nclf = BaggingClassifier(DecisionTreeClassifier(), n_estimators=5, random_state=0)\nprint(clf.fit(X, y).predict([[2.5]]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-95",
      "title": "13.21 Cross Validation",
      "module": "Machine Learning",
      "objective": "Use cross_val_score for robust evaluation.",
      "why": "Rotate train/test folds for a more honest score.",
      "explanation": "<p><strong>What you will learn.</strong> Use cross_val_score for robust evaluation. By the end of this lesson you should be able to explain <em>Cross Validation</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Rotate train/test folds for a more honest score. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> K-fold CV reduces luck of a single split. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use cross_val_score for robust evaluation.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Cross Validation</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5], [6], [7]])\ny = np.array([0, 0, 0, 0, 1, 1, 1, 1])\nprint(cross_val_score(LogisticRegression(), X, y, cv=2))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5], [6], [7]])\ny = np.array([0, 0, 0, 0, 1, 1, 1, 1])\nprint(cross_val_score(LogisticRegression(), X, y, cv=2))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-96",
      "title": "13.22 AUC - ROC Curve",
      "module": "Machine Learning",
      "objective": "Compute ROC AUC score.",
      "why": "Measure ranking quality of a classifier across thresholds.",
      "explanation": "<p><strong>What you will learn.</strong> Compute ROC AUC score. By the end of this lesson you should be able to explain <em>AUC - ROC Curve</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Measure ranking quality of a classifier across thresholds. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Compute ROC AUC score. This lesson focuses on <strong>AUC - ROC Curve</strong> inside the <em>Machine Learning</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Compute ROC AUC score.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>AUC - ROC Curve</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.metrics import roc_auc_score\ny_true = [0, 0, 1, 1]\ny_score = [0.1, 0.4, 0.35, 0.8]\nprint(roc_auc_score(y_true, y_score))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.metrics import roc_auc_score\ny_true = [0, 0, 1, 1]\ny_score = [0.1, 0.4, 0.35, 0.8]\nprint(roc_auc_score(y_true, y_score))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-97",
      "title": "13.23 K-Nearest Neighbors",
      "module": "Machine Learning",
      "objective": "Train a KNN classifier.",
      "why": "Classify a new point by its nearest neighbors’ votes.",
      "explanation": "<p><strong>What you will learn.</strong> Train a KNN classifier. By the end of this lesson you should be able to explain <em>K-Nearest Neighbors</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Classify a new point by its nearest neighbors’ votes. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data work is a pipeline: collect → clean → explore → model → evaluate. Each concept is one tool in that pipeline. Always ask what question the numbers answer for a real business or research decision.</p>\n<p><strong>Core explanation.</strong> Train a KNN classifier. This lesson focuses on <strong>K-Nearest Neighbors</strong> inside the <em>Machine Learning</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Train a KNN classifier.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>K-Nearest Neighbors</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Apply the idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from sklearn.neighbors import KNeighborsClassifier\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nprint(KNeighborsClassifier(n_neighbors=3).fit(X, y).predict([[1.1]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.neighbors import KNeighborsClassifier\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nprint(KNeighborsClassifier(n_neighbors=3).fit(X, y).predict([[1.1]]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "data",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-98",
      "title": "14.1 DSA Intro",
      "module": "DSA",
      "objective": "Know why DSA matters and Big-O at a glance.",
      "why": "Apps must stay fast as users grow — data structures & algorithms make that possible.",
      "explanation": "<p><strong>What you will learn.</strong> Know why DSA matters and Big-O at a glance. By the end of this lesson you should be able to explain <em>DSA Intro</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Apps must stay fast as users grow — data structures &amp; algorithms make that possible. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Choose structures for speed/memory tradeoffs. Big-O describes growth of time/space. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Know why DSA matters and Big-O at a glance.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 2 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>DSA Intro</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print(\"O(1) constant  O(n) linear  O(n log n) sort-like  O(n^2) nested loops\")\nprint(\"Right structure = faster apps at scale\")",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "print(\"O(1) constant  O(n) linear  O(n log n) sort-like  O(n^2) nested loops\")\nprint(\"Right structure = faster apps at scale\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-99",
      "title": "14.2 Lists & Arrays in DSA",
      "module": "DSA",
      "objective": "Use list operations with complexity awareness.",
      "why": "Random access to the 1000th order is O(1) with arrays/lists.",
      "explanation": "<p><strong>What you will learn.</strong> Use list operations with complexity awareness. By the end of this lesson you should be able to explain <em>Lists &amp; Arrays in DSA</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Random access to the 1000th order is O(1) with arrays/lists. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, and grow/shrink the collection as the program runs.</p>\n<p><strong>Core explanation.</strong> Index O(1), append amortized O(1), insert front O(n). Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Create the collection with sample items; access one item by position; add/remove an item; loop through all items to compute a total or print a report. If you can do those four moves, you “own” the structure.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Lists &amp; Arrays in DSA</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "orders = [101, 102, 103]\norders.append(104)      # end\norders.insert(0, 100)   # front slower\nprint(orders[2])",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "orders = [101, 102, 103]\norders.append(104)      # end\norders.insert(0, 100)   # front slower\nprint(orders[2])",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-100",
      "title": "14.3 Stacks — LIFO",
      "module": "DSA",
      "objective": "Implement a stack with a list.",
      "why": "Undo buttons and browser back use stacks (last in, first out).",
      "explanation": "<p><strong>What you will learn.</strong> Implement a stack with a list. By the end of this lesson you should be able to explain <em>Stacks</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Undo buttons and browser back use stacks (last in, first out). Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Implement a stack with a list. This lesson focuses on <strong>Stacks</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Implement a stack with a list.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Stacks</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "stack = []\nstack.append(\"page1\")\nstack.append(\"page2\")\nprint(stack.pop())  # page2\nprint(stack[-1])    # page1",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "stack = []\nstack.append(\"page1\")\nstack.append(\"page2\")\nprint(stack.pop())  # page2\nprint(stack[-1])    # page1",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-101",
      "title": "14.4 Queues — FIFO",
      "module": "DSA",
      "objective": "Implement a queue with collections.deque.",
      "why": "Print jobs and customer service lines are queues (first in, first out).",
      "explanation": "<p><strong>What you will learn.</strong> Implement a queue with collections.deque. By the end of this lesson you should be able to explain <em>Queues</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Print jobs and customer service lines are queues (first in, first out). Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> enqueue right, dequeue left — deque is efficient. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Implement a queue with collections.deque.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Queues</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "from collections import deque\nq = deque()\nq.append(\"customer A\")\nq.append(\"customer B\")\nprint(q.popleft())  # A first",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "from collections import deque\nq = deque()\nq.append(\"customer A\")\nq.append(\"customer B\")\nprint(q.popleft())  # A first",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-102",
      "title": "14.5 Linked Lists",
      "module": "DSA",
      "objective": "Build a simple singly linked list node.",
      "why": "Insert/delete in the middle without shifting a whole array.",
      "explanation": "<p><strong>What you will learn.</strong> Build a simple singly linked list node. By the end of this lesson you should be able to explain <em>Linked Lists</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Insert/delete in the middle without shifting a whole array. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> HTML describes structure and meaning (headings, forms, landmarks, links). Clear structure helps browsers, assistive tech, SEO, and your future self.</p>\n<p><strong>Core explanation.</strong> Build a simple singly linked list node. This lesson focuses on <strong>Linked Lists</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Build a simple singly linked list node.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 11 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Linked Lists</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)\ncur = head\nwhile cur:\n    print(cur.value)\n    cur = cur.next",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)\ncur = head\nwhile cur:\n    print(cur.value)\n    cur = cur.next",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-103",
      "title": "14.6 Hash Tables — dict",
      "module": "DSA",
      "objective": "Use dict as a hash map for O(1) average lookups.",
      "why": "Instant lookup of customer by phone number.",
      "explanation": "<p><strong>What you will learn.</strong> Use dict as a hash map for O(1) average lookups. By the end of this lesson you should be able to explain <em>Hash Tables</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Instant lookup of customer by phone number. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> A key→value structure is like a labeled filing cabinet: look up a key (name, id, product code) and get the related value quickly. Perfect for records and configurations.</p>\n<p><strong>Core explanation.</strong> Keys must be hashable (str, int, tuple...). Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Use dict as a hash map for O(1) average lookups.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Hash Tables</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "phonebook = {\"Ada\": \"0803...\", \"Bola\": \"0901...\"}\nprint(phonebook.get(\"Ada\"))\nphonebook[\"Chidi\"] = \"0701...\"",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "phonebook = {\"Ada\": \"0803...\", \"Bola\": \"0901...\"}\nprint(phonebook.get(\"Ada\"))\nphonebook[\"Chidi\"] = \"0701...\"",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-104",
      "title": "14.7 Trees Intro",
      "module": "DSA",
      "objective": "Understand root, parent, child, leaf.",
      "why": "Org charts and folder systems are trees.",
      "explanation": "<p><strong>What you will learn.</strong> Understand root, parent, child, leaf. By the end of this lesson you should be able to explain <em>Trees Intro</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Org charts and folder systems are trees. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Understand root, parent, child, leaf. This lesson focuses on <strong>Trees Intro</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Trees Intro</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.children = []\nroot = TreeNode(\"CEO\")\nroot.children.append(TreeNode(\"CTO\"))\nprint(root.val, [c.val for c in root.children])",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.children = []\nroot = TreeNode(\"CEO\")\nroot.children.append(TreeNode(\"CTO\"))\nprint(root.val, [c.val for c in root.children])",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-105",
      "title": "14.8 Binary Trees",
      "module": "DSA",
      "objective": "Create a binary tree node with left/right.",
      "why": "Each node has up to two children — foundation for search trees & heaps.",
      "explanation": "<p><strong>What you will learn.</strong> Create a binary tree node with left/right. By the end of this lesson you should be able to explain <em>Binary Trees</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Each node has up to two children — foundation for search trees &amp; heaps. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Create a binary tree node with left/right. This lesson focuses on <strong>Binary Trees</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Binary Trees</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class BNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\nroot = BNode(10)\nroot.left = BNode(5)\nroot.right = BNode(15)",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class BNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\nroot = BNode(10)\nroot.left = BNode(5)\nroot.right = BNode(15)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-106",
      "title": "14.9 Binary Search Trees",
      "module": "DSA",
      "objective": "Insert into a BST preserving left < node < right.",
      "why": "Keep numbers sorted for fast search like a phone directory.",
      "explanation": "<p><strong>What you will learn.</strong> Insert into a BST preserving left &lt; node &lt; right. By the end of this lesson you should be able to explain <em>Binary Search Trees</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Keep numbers sorted for fast search like a phone directory. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Insert into a BST preserving left < node < right. This lesson focuses on <strong>Binary Search Trees</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 16 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Binary Search Trees</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "class BST:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n    def insert(self, val):\n        if val < self.val:\n            if self.left: self.left.insert(val)\n            else: self.left = BST(val)\n        elif val > self.val:\n            if self.right: self.right.insert(val)\n            else: self.right = BST(val)\nroot = BST(10)\nfor v in [5, 15, 2, 7]:\n    root.insert(v)\nprint(root.left.val, root.right.val)",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class BST:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n    def insert(self, val):\n        if val < self.val:\n            if self.left: self.left.insert(val)\n            else: self.left = BST(val)\n        elif val > self.val:\n            if self.right: self.right.insert(val)\n            else: self.right = BST(val)\nroot = BST(10)\nfor v in [5, 15, 2, 7]:\n    root.insert(v)\nprint(root.left.val, root.right.val)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-107",
      "title": "14.10 AVL Trees",
      "module": "DSA",
      "objective": "Know why AVL balances and what rotations achieve.",
      "why": "Self-balancing trees keep searches fast even after many inserts.",
      "explanation": "<p><strong>What you will learn.</strong> Know why AVL balances and what rotations achieve. By the end of this lesson you should be able to explain <em>AVL Trees</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Self-balancing trees keep searches fast even after many inserts. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Height difference of children at most 1. Used when you need guaranteed log n. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> State the business question; identify the columns/features; run a minimal example on tiny data you understand; interpret the number or chart in plain language; only then scale up.</p>\n<p><strong>Walking through the example.</strong> The sample has about 2 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>AVL Trees</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print(\"AVL = BST + balance factor check + rotations\")\nprint(\"Use case: in-memory indexes needing predictable speed\")",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "print(\"AVL = BST + balance factor check + rotations\")\nprint(\"Use case: in-memory indexes needing predictable speed\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-108",
      "title": "14.11 Graphs",
      "module": "DSA",
      "objective": "Represent a graph with an adjacency list.",
      "why": "Maps, social networks, and delivery routes are graphs.",
      "explanation": "<p><strong>What you will learn.</strong> Represent a graph with an adjacency list. By the end of this lesson you should be able to explain <em>Graphs</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Maps, social networks, and delivery routes are graphs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Represent a graph with an adjacency list. This lesson focuses on <strong>Graphs</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Represent a graph with an adjacency list.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Graphs</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "graph = {\n  \"Lagos\": [\"Ibadan\", \"Abeokuta\"],\n  \"Ibadan\": [\"Lagos\", \"Ife\"],\n  \"Abeokuta\": [\"Lagos\"],\n  \"Ife\": [\"Ibadan\"],\n}\nprint(graph[\"Lagos\"])",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "graph = {\n  \"Lagos\": [\"Ibadan\", \"Abeokuta\"],\n  \"Ibadan\": [\"Lagos\", \"Ife\"],\n  \"Abeokuta\": [\"Lagos\"],\n  \"Ife\": [\"Ibadan\"],\n}\nprint(graph[\"Lagos\"])",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-109",
      "title": "14.12 Linear Search",
      "module": "DSA",
      "objective": "Implement linear search.",
      "why": "Scan a list item by item — simple but slow on huge data.",
      "explanation": "<p><strong>What you will learn.</strong> Implement linear search. By the end of this lesson you should be able to explain <em>Linear Search</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Scan a list item by item — simple but slow on huge data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Implement linear search. This lesson focuses on <strong>Linear Search</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Implement linear search.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Linear Search</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "def linear_search(items, target):\n    for i, x in enumerate(items):\n        if x == target:\n            return i\n    return -1\nprint(linear_search([4, 2, 9, 1], 9))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def linear_search(items, target):\n    for i, x in enumerate(items):\n        if x == target:\n            return i\n    return -1\nprint(linear_search([4, 2, 9, 1], 9))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-110",
      "title": "14.13 Binary Search",
      "module": "DSA",
      "objective": "Binary search on a sorted list.",
      "why": "Guess a number 1–100 in ~7 tries — divide and conquer.",
      "explanation": "<p><strong>What you will learn.</strong> Binary search on a sorted list. By the end of this lesson you should be able to explain <em>Binary Search</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Guess a number 1–100 in ~7 tries — divide and conquer. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Binary search on a sorted list. This lesson focuses on <strong>Binary Search</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Binary search on a sorted list.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Binary Search</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: return mid\n        if arr[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1\nprint(binary_search([1, 3, 5, 7, 9], 7))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: return mid\n        if arr[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1\nprint(binary_search([1, 3, 5, 7, 9], 7))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-111",
      "title": "14.14 Bubble Sort",
      "module": "DSA",
      "objective": "Implement bubble sort for learning (not production).",
      "why": "See how sorting works by swapping neighbors.",
      "explanation": "<p><strong>What you will learn.</strong> Implement bubble sort for learning (not production). By the end of this lesson you should be able to explain <em>Bubble Sort</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: See how sorting works by swapping neighbors. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Implement bubble sort for learning (not production). This lesson focuses on <strong>Bubble Sort</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Implement bubble sort for learning (not production).” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Bubble Sort</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "def bubble(arr):\n    a = arr[:]\n    n = len(a)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if a[j] > a[j + 1]:\n                a[j], a[j + 1] = a[j + 1], a[j]\n    return a\nprint(bubble([5, 1, 4, 2]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def bubble(arr):\n    a = arr[:]\n    n = len(a)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if a[j] > a[j + 1]:\n                a[j], a[j + 1] = a[j + 1], a[j]\n    return a\nprint(bubble([5, 1, 4, 2]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-112",
      "title": "14.15 Selection Sort",
      "module": "DSA",
      "objective": "Implement selection sort.",
      "why": "Repeatedly select the minimum and place it next.",
      "explanation": "<p><strong>What you will learn.</strong> Implement selection sort. By the end of this lesson you should be able to explain <em>Selection Sort</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Repeatedly select the minimum and place it next. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Implement selection sort. This lesson focuses on <strong>Selection Sort</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Implement selection sort.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Selection Sort</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "def selection(arr):\n    a = arr[:]\n    for i in range(len(a)):\n        m = i\n        for j in range(i + 1, len(a)):\n            if a[j] < a[m]: m = j\n        a[i], a[m] = a[m], a[i]\n    return a\nprint(selection([64, 25, 12, 22]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def selection(arr):\n    a = arr[:]\n    for i in range(len(a)):\n        m = i\n        for j in range(i + 1, len(a)):\n            if a[j] < a[m]: m = j\n        a[i], a[m] = a[m], a[i]\n    return a\nprint(selection([64, 25, 12, 22]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-113",
      "title": "14.16 Insertion Sort",
      "module": "DSA",
      "objective": "Implement insertion sort.",
      "why": "Like sorting cards in your hand — good for nearly sorted data.",
      "explanation": "<p><strong>What you will learn.</strong> Implement insertion sort. By the end of this lesson you should be able to explain <em>Insertion Sort</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Like sorting cards in your hand — good for nearly sorted data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> O(n^2) worst, fast on small/nearly sorted. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Implement insertion sort.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 11 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Insertion Sort</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "def insertion(arr):\n    a = arr[:]\n    for i in range(1, len(a)):\n        key = a[i]\n        j = i - 1\n        while j >= 0 and a[j] > key:\n            a[j + 1] = a[j]\n            j -= 1\n        a[j + 1] = key\n    return a\nprint(insertion([12, 11, 13, 5, 6]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def insertion(arr):\n    a = arr[:]\n    for i in range(1, len(a)):\n        key = a[i]\n        j = i - 1\n        while j >= 0 and a[j] > key:\n            a[j + 1] = a[j]\n            j -= 1\n        a[j + 1] = key\n    return a\nprint(insertion([12, 11, 13, 5, 6]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-114",
      "title": "14.17 Quick Sort",
      "module": "DSA",
      "objective": "Implement a simple recursive quicksort.",
      "why": "Industry favorite average-case O(n log n) sort.",
      "explanation": "<p><strong>What you will learn.</strong> Implement a simple recursive quicksort. By the end of this lesson you should be able to explain <em>Quick Sort</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Industry favorite average-case O(n log n) sort. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Implement a simple recursive quicksort. This lesson focuses on <strong>Quick Sort</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Implement a simple recursive quicksort.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Quick Sort</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "def quicksort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    mid = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + mid + quicksort(right)\nprint(quicksort([3, 6, 8, 10, 1, 2, 1]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def quicksort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    mid = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + mid + quicksort(right)\nprint(quicksort([3, 6, 8, 10, 1, 2, 1]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-115",
      "title": "14.18 Counting Sort",
      "module": "DSA",
      "objective": "Implement counting sort for non-negative ints.",
      "why": "Sort integers in a known small range in linear time.",
      "explanation": "<p><strong>What you will learn.</strong> Implement counting sort for non-negative ints. By the end of this lesson you should be able to explain <em>Counting Sort</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Sort integers in a known small range in linear time. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Implement counting sort for non-negative ints. This lesson focuses on <strong>Counting Sort</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Implement counting sort for non-negative ints.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 10 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Counting Sort</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "def counting_sort(arr):\n    if not arr: return []\n    m = max(arr)\n    count = [0] * (m + 1)\n    for x in arr: count[x] += 1\n    out = []\n    for val, c in enumerate(count):\n        out.extend([val] * c)\n    return out\nprint(counting_sort([4, 2, 2, 8, 3, 3, 1]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def counting_sort(arr):\n    if not arr: return []\n    m = max(arr)\n    count = [0] * (m + 1)\n    for x in arr: count[x] += 1\n    out = []\n    for val, c in enumerate(count):\n        out.extend([val] * c)\n    return out\nprint(counting_sort([4, 2, 2, 8, 3, 3, 1]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-116",
      "title": "14.19 Radix Sort",
      "module": "DSA",
      "objective": "Understand radix sort idea (LSD).",
      "why": "Sort large integers digit by digit.",
      "explanation": "<p><strong>What you will learn.</strong> Understand radix sort idea (LSD). By the end of this lesson you should be able to explain <em>Radix Sort</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Sort large integers digit by digit. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Uses counting sort as a subroutine per digit. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Understand radix sort idea (LSD).” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Radix Sort</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print(\"Radix sort: process digits from least to most significant\")\nprint(\"Useful for fixed-length IDs and large integer keys\")\nnums = [170, 45, 75, 90, 802, 24, 2, 66]\nprint(sorted(nums))  # practical stand-in; implement full radix as challenge",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "print(\"Radix sort: process digits from least to most significant\")\nprint(\"Useful for fixed-length IDs and large integer keys\")\nnums = [170, 45, 75, 90, 802, 24, 2, 66]\nprint(sorted(nums))  # practical stand-in; implement full radix as challenge",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-117",
      "title": "14.20 Merge Sort",
      "module": "DSA",
      "objective": "Implement merge sort by divide and conquer.",
      "why": "Stable O(n log n) sort used widely in libraries.",
      "explanation": "<p><strong>What you will learn.</strong> Implement merge sort by divide and conquer. By the end of this lesson you should be able to explain <em>Merge Sort</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Stable O(n log n) sort used widely in libraries. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Data structures and algorithms are about organization and speed as data grows. The “right” structure can turn a slow process into an instant one — and the wrong one can freeze an app.</p>\n<p><strong>Core explanation.</strong> Implement merge sort by divide and conquer. This lesson focuses on <strong>Merge Sort</strong> inside the <em>DSA</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Implement merge sort by divide and conquer.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 17 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Merge Sort</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Practice”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(a, b):\n    i = j = 0\n    out = []\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            out.append(a[i]); i += 1\n        else:\n            out.append(b[j]); j += 1\n    out.extend(a[i:]); out.extend(b[j:])\n    return out\nprint(merge_sort([38, 27, 43, 3, 9, 82, 10]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(a, b):\n    i = j = 0\n    out = []\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            out.append(a[i]); i += 1\n        else:\n            out.append(b[j]); j += 1\n    out.extend(a[i:]); out.extend(b[j:])\n    return out\nprint(merge_sort([38, 27, 43, 3, 9, 82, 10]))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "dsa",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-118",
      "title": "15.1 MySQL Get Started",
      "module": "MySQL",
      "objective": "Connect Python to MySQL conceptually and install drivers.",
      "why": "Business data needs a reliable database — MySQL is a popular choice.",
      "explanation": "<p><strong>What you will learn.</strong> Connect Python to MySQL conceptually and install drivers. By the end of this lesson you should be able to explain <em>MySQL Get Started</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Business data needs a reliable database — MySQL is a popular choice. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> pip install mysql-connector-python (or PyMySQL). Create connection with host, user, password. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>MySQL Get Started</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# pip install mysql-connector-python\nimport mysql.connector\n# conn = mysql.connector.connect(host=\"localhost\", user=\"root\", password=\"secret\")\nprint(\"Connected pattern: connect → cursor → execute → commit → close\")",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "# pip install mysql-connector-python\nimport mysql.connector\n# conn = mysql.connector.connect(host=\"localhost\", user=\"root\", password=\"secret\")\nprint(\"Connected pattern: connect → cursor → execute → commit → close\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-119",
      "title": "15.2 Create Database",
      "module": "MySQL",
      "objective": "Create a database with SQL via Python.",
      "why": "Each product (shop, school) often gets its own database.",
      "explanation": "<p><strong>What you will learn.</strong> Create a database with SQL via Python. By the end of this lesson you should be able to explain <em>Create Database</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Each product (shop, school) often gets its own database. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Create a database with SQL via Python. This lesson focuses on <strong>Create Database</strong> inside the <em>MySQL</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Create Database</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sql = \"CREATE DATABASE IF NOT EXISTS shop_db\"\nprint(sql)\n# cursor.execute(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"CREATE DATABASE IF NOT EXISTS shop_db\"\nprint(sql)\n# cursor.execute(sql)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-120",
      "title": "15.3 Create Table",
      "module": "MySQL",
      "objective": "Define a table schema with CREATE TABLE.",
      "why": "Tables hold structured rows — customers, products, orders.",
      "explanation": "<p><strong>What you will learn.</strong> Define a table schema with CREATE TABLE. By the end of this lesson you should be able to explain <em>Create Table</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Tables hold structured rows — customers, products, orders. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Define a table schema with CREATE TABLE. This lesson focuses on <strong>Create Table</strong> inside the <em>MySQL</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Create Table</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sql = \"\"\"\nCREATE TABLE IF NOT EXISTS products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100),\n  price DECIMAL(10,2),\n  qty INT\n)\n\"\"\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"\"\"\nCREATE TABLE IF NOT EXISTS products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100),\n  price DECIMAL(10,2),\n  qty INT\n)\n\"\"\"\nprint(sql)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-121",
      "title": "15.4 Insert Rows",
      "module": "MySQL",
      "objective": "INSERT INTO table VALUES / parameterized queries.",
      "why": "Add new products or customers as they register.",
      "explanation": "<p><strong>What you will learn.</strong> INSERT INTO table VALUES / parameterized queries. By the end of this lesson you should be able to explain <em>Insert Rows</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Add new products or customers as they register. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Always parameterize to avoid SQL injection. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Insert Rows</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sql = \"INSERT INTO products (name, price, qty) VALUES (%s, %s, %s)\"\ndata = (\"Rice 50kg\", 45000, 20)\nprint(sql, data)\n# cursor.execute(sql, data); conn.commit()",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"INSERT INTO products (name, price, qty) VALUES (%s, %s, %s)\"\ndata = (\"Rice 50kg\", 45000, 20)\nprint(sql, data)\n# cursor.execute(sql, data); conn.commit()",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-122",
      "title": "15.5 Select Data",
      "module": "MySQL",
      "objective": "SELECT columns FROM table.",
      "why": "Fetch inventory lists for your dashboard.",
      "explanation": "<p><strong>What you will learn.</strong> SELECT columns FROM table. By the end of this lesson you should be able to explain <em>Select Data</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Fetch inventory lists for your dashboard. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> SELECT columns FROM table. This lesson focuses on <strong>Select Data</strong> inside the <em>MySQL</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Select Data</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sql = \"SELECT id, name, price FROM products\"\nprint(sql)\n# cursor.execute(sql)\n# for row in cursor.fetchall(): print(row)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT id, name, price FROM products\"\nprint(sql)\n# cursor.execute(sql)\n# for row in cursor.fetchall(): print(row)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-123",
      "title": "15.6 WHERE Filters",
      "module": "MySQL",
      "objective": "Filter with WHERE and comparisons.",
      "why": "Show only products under ₦5000 — filter rows.",
      "explanation": "<p><strong>What you will learn.</strong> Filter with WHERE and comparisons. By the end of this lesson you should be able to explain <em>WHERE Filters</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Show only products under ₦5000 — filter rows. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Filter with WHERE and comparisons. This lesson focuses on <strong>WHERE Filters</strong> inside the <em>MySQL</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 2 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>WHERE Filters</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sql = \"SELECT * FROM products WHERE price < %s AND qty > 0\"\nprint(sql, (5000,))",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT * FROM products WHERE price < %s AND qty > 0\"\nprint(sql, (5000,))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-124",
      "title": "15.7 ORDER BY",
      "module": "MySQL",
      "objective": "Order results ascending/descending.",
      "why": "Sort top-selling items for a report.",
      "explanation": "<p><strong>What you will learn.</strong> Order results ascending/descending. By the end of this lesson you should be able to explain <em>ORDER BY</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Sort top-selling items for a report. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Order results ascending/descending. This lesson focuses on <strong>ORDER BY</strong> inside the <em>MySQL</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 2 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>ORDER BY</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sql = \"SELECT name, price FROM products ORDER BY price DESC\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT name, price FROM products ORDER BY price DESC\"\nprint(sql)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-125",
      "title": "15.8 DELETE Rows",
      "module": "MySQL",
      "objective": "DELETE FROM with WHERE (never forget WHERE!).",
      "why": "Remove discontinued products carefully.",
      "explanation": "<p><strong>What you will learn.</strong> DELETE FROM with WHERE (never forget WHERE!). By the end of this lesson you should be able to explain <em>DELETE Rows</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Remove discontinued products carefully. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> DELETE FROM with WHERE (never forget WHERE!). This lesson focuses on <strong>DELETE Rows</strong> inside the <em>MySQL</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>DELETE Rows</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sql = \"DELETE FROM products WHERE id = %s\"\nprint(sql, (42,))\nprint(\"WARNING: always include WHERE in production deletes\")",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"DELETE FROM products WHERE id = %s\"\nprint(sql, (42,))\nprint(\"WARNING: always include WHERE in production deletes\")",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-126",
      "title": "15.9 DROP Table",
      "module": "MySQL",
      "objective": "DROP TABLE statement awareness.",
      "why": "Drop removes the table structure — rare and dangerous.",
      "explanation": "<p><strong>What you will learn.</strong> DROP TABLE statement awareness. By the end of this lesson you should be able to explain <em>DROP Table</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Drop removes the table structure — rare and dangerous. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Prefer soft-delete columns when possible. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 2 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>DROP Table</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sql = \"DROP TABLE IF EXISTS old_temp_products\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"DROP TABLE IF EXISTS old_temp_products\"\nprint(sql)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-127",
      "title": "15.10 UPDATE Rows",
      "module": "MySQL",
      "objective": "UPDATE SET ... WHERE ...",
      "why": "Change prices during a promo weekend.",
      "explanation": "<p><strong>What you will learn.</strong> UPDATE SET ... WHERE ... By the end of this lesson you should be able to explain <em>UPDATE Rows</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Change prices during a promo weekend. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> UPDATE SET ... WHERE ... This lesson focuses on <strong>UPDATE Rows</strong> inside the <em>MySQL</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 2 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>UPDATE Rows</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sql = \"UPDATE products SET price = %s WHERE id = %s\"\nprint(sql, (39999, 7))",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"UPDATE products SET price = %s WHERE id = %s\"\nprint(sql, (39999, 7))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-128",
      "title": "15.11 LIMIT",
      "module": "MySQL",
      "objective": "LIMIT and OFFSET for paging.",
      "why": "Paginate API results — first 10 customers.",
      "explanation": "<p><strong>What you will learn.</strong> LIMIT and OFFSET for paging. By the end of this lesson you should be able to explain <em>LIMIT</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Paginate API results — first 10 customers. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> LIMIT 10 OFFSET 20 → page 3 if page size 10. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 2 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>LIMIT</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sql = \"SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 0\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 0\"\nprint(sql)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-129",
      "title": "15.12 JOIN Tables",
      "module": "MySQL",
      "objective": "INNER JOIN related tables on keys.",
      "why": "Combine orders with customer names in one query.",
      "explanation": "<p><strong>What you will learn.</strong> INNER JOIN related tables on keys. By the end of this lesson you should be able to explain <em>JOIN Tables</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Combine orders with customer names in one query. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Join is how relational data becomes useful reports. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>JOIN Tables</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Write the SQL idea”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sql = \"\"\"\nSELECT o.id, c.name, o.total\nFROM orders o\nINNER JOIN customers c ON o.customer_id = c.id\n\"\"\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"\"\"\nSELECT o.id, c.name, o.total\nFROM orders o\nINNER JOIN customers c ON o.customer_id = c.id\n\"\"\"\nprint(sql)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-130",
      "title": "16.1 MongoDB Get Started",
      "module": "MongoDB",
      "objective": "Connect to MongoDB from Python with PyMongo.",
      "why": "Flexible document storage fits product catalogs that change shape often.",
      "explanation": "<p><strong>What you will learn.</strong> Connect to MongoDB from Python with PyMongo. By the end of this lesson you should be able to explain <em>MongoDB Get Started</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Flexible document storage fits product catalogs that change shape often. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> pip install pymongo. Documents ≈ JSON. Collections ≈ tables. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>MongoDB Get Started</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document design”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "# from pymongo import MongoClient\n# client = MongoClient(\"mongodb://localhost:27017/\")\nprint(\"MongoDB stores BSON documents in collections\")",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-131",
      "title": "16.2 Create Database",
      "module": "MongoDB",
      "objective": "Access a database handle via client.",
      "why": "In MongoDB, DBs appear when you first store data.",
      "explanation": "<p><strong>What you will learn.</strong> Access a database handle via client. By the end of this lesson you should be able to explain <em>Create Database</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: In MongoDB, DBs appear when you first store data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Access a database handle via client. This lesson focuses on <strong>Create Database</strong> inside the <em>MongoDB</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 1 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Create Database</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document design”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print('db = client[\"shop_db\"]  # created on first write')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-132",
      "title": "16.3 Collections",
      "module": "MongoDB",
      "objective": "Get a collection reference.",
      "why": "A collection holds many related documents (e.g., products).",
      "explanation": "<p><strong>What you will learn.</strong> Get a collection reference. By the end of this lesson you should be able to explain <em>Collections</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: A collection holds many related documents (e.g., products). Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Get a collection reference. This lesson focuses on <strong>Collections</strong> inside the <em>MongoDB</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 1 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Collections</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document design”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print('products = db[\"products\"]')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-133",
      "title": "16.4 Insert Documents",
      "module": "MongoDB",
      "objective": "insert_one / insert_many",
      "why": "Add one or many product documents.",
      "explanation": "<p><strong>What you will learn.</strong> insert_one / insert_many By the end of this lesson you should be able to explain <em>Insert Documents</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Add one or many product documents. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> In the browser, HTML becomes a live tree of elements (the DOM). JavaScript finds nodes and updates them when users click, type, or submit forms.</p>\n<p><strong>Core explanation.</strong> insert_one / insert_many This lesson focuses on <strong>Insert Documents</strong> inside the <em>MongoDB</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 2 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Insert Documents</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document design”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "doc = {\"name\": \"Blender\", \"price\": 35000, \"tags\": [\"kitchen\", \"electric\"]}\nprint(\"insert_one(doc) →\", doc)",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-134",
      "title": "16.5 Find Documents",
      "module": "MongoDB",
      "objective": "find, find_one",
      "why": "List items or fetch one by filter.",
      "explanation": "<p><strong>What you will learn.</strong> find, find_one By the end of this lesson you should be able to explain <em>Find Documents</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: List items or fetch one by filter. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> In the browser, HTML becomes a live tree of elements (the DOM). JavaScript finds nodes and updates them when users click, type, or submit forms.</p>\n<p><strong>Core explanation.</strong> find, find_one This lesson focuses on <strong>Find Documents</strong> inside the <em>MongoDB</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 2 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Find Documents</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document design”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print('find_one({\"name\": \"Blender\"})')\nprint('for d in products.find(): print(d)')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-135",
      "title": "16.6 Query Filters",
      "module": "MongoDB",
      "objective": "Use query operators like $lt, $gt, $in.",
      "why": "Find products cheaper than ₦20k with a tag.",
      "explanation": "<p><strong>What you will learn.</strong> Use query operators like $lt, $gt, $in. By the end of this lesson you should be able to explain <em>Query Filters</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Find products cheaper than ₦20k with a tag. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Use query operators like $lt, $gt, $in. This lesson focuses on <strong>Query Filters</strong> inside the <em>MongoDB</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 2 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Query Filters</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document design”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "query = {\"price\": {\"$lt\": 20000}, \"tags\": \"kitchen\"}\nprint(query)",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-136",
      "title": "16.7 Sort",
      "module": "MongoDB",
      "objective": "sort([(field, 1|-1)])",
      "why": "Show newest reviews first.",
      "explanation": "<p><strong>What you will learn.</strong> sort([(field, 1|-1)]) By the end of this lesson you should be able to explain <em>Sort</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Show newest reviews first. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> sort([(field, 1|-1)]) This lesson focuses on <strong>Sort</strong> inside the <em>MongoDB</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 1 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Sort</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document design”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print('products.find().sort(\"price\", -1)')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-137",
      "title": "16.8 Delete Documents",
      "module": "MongoDB",
      "objective": "delete_one / delete_many",
      "why": "Remove discontinued SKUs.",
      "explanation": "<p><strong>What you will learn.</strong> delete_one / delete_many By the end of this lesson you should be able to explain <em>Delete Documents</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Remove discontinued SKUs. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> In the browser, HTML becomes a live tree of elements (the DOM). JavaScript finds nodes and updates them when users click, type, or submit forms.</p>\n<p><strong>Core explanation.</strong> delete_one / delete_many This lesson focuses on <strong>Delete Documents</strong> inside the <em>MongoDB</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 1 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Delete Documents</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document design”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print('delete_many({\"discontinued\": True})')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-138",
      "title": "16.9 Drop Collection",
      "module": "MongoDB",
      "objective": "collection.drop()",
      "why": "Drop an entire collection when restructuring.",
      "explanation": "<p><strong>What you will learn.</strong> collection.drop() By the end of this lesson you should be able to explain <em>Drop Collection</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Drop an entire collection when restructuring. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Databases store large amounts of data safely. You ask questions with queries instead of scanning huge files manually. Always filter carefully on updates/deletes.</p>\n<p><strong>Core explanation.</strong> Destructive — prefer delete_many for partial cleans. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 1 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Drop Collection</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document design”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print('products.drop()  # removes whole collection')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-139",
      "title": "16.10 Update Documents",
      "module": "MongoDB",
      "objective": "update_one with $set",
      "why": "Update prices or stock counts in place.",
      "explanation": "<p><strong>What you will learn.</strong> update_one with $set By the end of this lesson you should be able to explain <em>Update Documents</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Update prices or stock counts in place. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> In the browser, HTML becomes a live tree of elements (the DOM). JavaScript finds nodes and updates them when users click, type, or submit forms.</p>\n<p><strong>Core explanation.</strong> update_one with $set This lesson focuses on <strong>Update Documents</strong> inside the <em>MongoDB</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 2 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Update Documents</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document design”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print('update_one({\"name\": \"Blender\"}, {\"$set\": {\"price\": 33000}})')\nprint('update_one({\"name\": \"Blender\"}, {\"$inc\": {\"qty\": -1}})')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-140",
      "title": "16.11 Limit Results",
      "module": "MongoDB",
      "objective": "limit(n) on cursor",
      "why": "Return top 5 results for a mobile screen.",
      "explanation": "<p><strong>What you will learn.</strong> limit(n) on cursor By the end of this lesson you should be able to explain <em>Limit Results</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Return top 5 results for a mobile screen. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Real programs fail: bad input, missing files, network issues. Good code detects failure and handles it instead of crashing or ignoring problems.</p>\n<p><strong>Core explanation.</strong> limit(n) on cursor This lesson focuses on <strong>Limit Results</strong> inside the <em>MongoDB</em> module. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Picture the data as tables/collections; write the intent in English (“get unpaid orders for Ada”); only then translate to a query; finally check the result count and a sample row.</p>\n<p><strong>Walking through the example.</strong> The sample has about 1 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Limit Results</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Document design”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "print('products.find().sort(\"price\", 1).limit(5)')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "backend",
      "difficulty": "intermediate",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example."
    },
    {
      "id": "py-141",
      "title": "17.1 Capstone — Shop Analytics Mini Project",
      "module": "Capstone",
      "objective": "Combine Python basics, data structures, and analysis ideas into one mini project plan.",
      "why": "Real junior roles ask you to glue skills: read data, clean it, compute metrics, show a chart.",
      "explanation": "<p><strong>What you will learn.</strong> Combine Python basics, data structures, and analysis ideas into one mini project plan. By the end of this lesson you should be able to explain <em>Capstone</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Real junior roles ask you to glue skills: read data, clean it, compute metrics, show a chart. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful mini-app you can show someone.</p>\n<p><strong>Core explanation.</strong> Project brief: 1) Represent a week of sales as a list of dicts 2) Compute total and best day 3) (Optional) Plot with matplotlib 4) (Optional) Save JSON report Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Combine Python basics, data structures, and analysis ideas into one mini project plan.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 11 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Capstone</em>.</p>\n<p><strong>How to practice (important).</strong> Type or paste the example into the <strong>Python playground</strong> on this page and press <strong>Run</strong>. Change one value, run again, and watch the output change — that is how the idea “clicks”. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Extend it”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Type carefully; read error messages from the bottom up; compare with the example.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "sales = [\n    {\"day\": \"Mon\", \"amount\": 12000},\n    {\"day\": \"Tue\", \"amount\": 15000},\n    {\"day\": \"Wed\", \"amount\": 9000},\n    {\"day\": \"Thu\", \"amount\": 18000},\n    {\"day\": \"Fri\", \"amount\": 21000},\n]\ntotal = sum(s[\"amount\"] for s in sales)\nbest = max(sales, key=lambda s: s[\"amount\"])\nprint(\"Total:\", total)\nprint(\"Best day:\", best[\"day\"], best[\"amount\"])",
      "exercises": [
        {
          "title": "Extend it",
          "instruction": "Add Saturday and Sunday, recompute total and best day, print average daily sales.",
          "solution": "sales = [\n    {\"day\": \"Mon\", \"amount\": 12000},\n    {\"day\": \"Tue\", \"amount\": 15000},\n    {\"day\": \"Wed\", \"amount\": 9000},\n    {\"day\": \"Thu\", \"amount\": 18000},\n    {\"day\": \"Fri\", \"amount\": 21000},\n    {\"day\": \"Sat\", \"amount\": 25000},\n    {\"day\": \"Sun\", \"amount\": 16000},\n]\ntotal = sum(s[\"amount\"] for s in sales)\nbest = max(sales, key=lambda s: s[\"amount\"])\navg = total / len(sales)\nprint(\"Total:\", total)\nprint(\"Best:\", best)\nprint(\"Average:\", round(avg, 2))",
          "level": "easy",
          "hint": "Re-read the code example, change one piece at a time, then re-check."
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
          "q": "Best way to learn this lesson?",
          "options": [
            "Only read without typing",
            "Run/type the example, then do the exercise",
            "Skip to ML immediately",
            "Memorize without understanding why"
          ],
          "correct": 1,
          "explanation": "Practice + why + code beats passive reading."
        }
      ],
      "path": "beginner",
      "difficulty": "beginner",
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example.",
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
