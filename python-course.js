// Auto-generated comprehensive Python curriculum for ZeroToCode Academy
// 141 lessons with real-life applicable scenarios
window.PYTHON_COURSE = {
  "id": "python",
  "name": "Python",
  "icon": "🐍",
  "color": "emerald",
  "subtitle": "From zero to data, web, ML & databases — with real-life scenarios",
  "totalLessons": 141,
  "lessons": [
    {
      "id": "py-01",
      "title": "1.1 Python Intro — Why Python Wins",
      "module": "Getting Started",
      "objective": "Understand what Python is and where it is used in real life.",
      "why": "Banks, hospitals, online shops, and AI tools all run Python behind the scenes. Learning it opens doors to automation, data, and web apps.",
      "explanation": "Python is a <strong>high-level, readable programming language</strong>. You write instructions in plain English-like syntax; the computer runs them.<br><br>\n  <strong>Real uses:</strong> automate WhatsApp business reports, analyse sales data, build websites (Django), train AI models, control robots.<br><br>\n  It is free, has huge community support, and is the #1 first language for beginners.",
      "codeExample": "# Python is readable — almost like English\nprint(\"Welcome to ZeroToCode Academy\")\nprint(\"Python powers Netflix recommendations, Instagram, and local bank apps\")",
      "exercises": [
        {
          "title": "Where will YOU use Python?",
          "instruction": "Write 3 print() lines: (1) your name, (2) one problem you want to solve with code, (3) one career or business goal.",
          "solution": "print(\"My name is Adaora\")\nprint(\"I want to automate my shop's daily sales summary\")\nprint(\"I want to become a data analyst or freelancing developer\")"
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
        }
      ]
    },
    {
      "id": "py-02",
      "title": "1.2 Get Started — Install & First Run",
      "module": "Getting Started",
      "objective": "Set up Python and run your first script on your computer.",
      "why": "Like installing a POS machine before selling, you need Python installed before you can build programs.",
      "explanation": "On most systems: download from <code>python.org</code> or use your package manager.<br><br>\n  Check installation in a terminal:<br>\n  <code>python3 --version</code><br><br>\n  Run a file: save as <code>hello.py</code>, then <code>python3 hello.py</code>.<br><br>\n  <strong>Online option:</strong> Use replit.com or Google Colab if you cannot install yet.",
      "codeExample": "# hello.py\nprint(\"Setup complete!\")\nprint(\"Python version check: open terminal and run python3 --version\")\n\n# Interactive mode (REPL): type python3 and try:\n# >>> 2 + 2\n# 4",
      "exercises": [
        {
          "title": "Verify your environment",
          "instruction": "Write a script that prints \"Python is ready!\" and the result of 15 * 3. Save mentally as first_run.py.",
          "solution": "print(\"Python is ready!\")\nprint(15 * 3)  # 45"
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
        }
      ]
    },
    {
      "id": "py-03",
      "title": "1.3 Python Syntax — The Rules of the Road",
      "module": "Getting Started",
      "objective": "Write valid Python code using indentation, colons, and clear structure.",
      "why": "Traffic rules keep roads safe. Syntax rules keep programs working. Break them and you get errors.",
      "explanation": "<strong>Key rules:</strong><br>\n  • Indentation (usually 4 spaces) groups code blocks<br>\n  • Colons <code>:</code> start blocks (if, for, def)<br>\n  • Case-sensitive: <code>Name</code> ≠ <code>name</code><br>\n  • One statement per line (or use <code>;</code> sparingly)<br>\n  • Parentheses for function calls: <code>print()</code>",
      "codeExample": "age = 20\n\nif age >= 18:\n    print(\"Adult\")      # indented — inside the if\n    print(\"Can vote\")\nelse:\n    print(\"Minor\")      # indented — inside the else\n\nprint(\"Done\")           # not indented — always runs",
      "exercises": [
        {
          "title": "Fix the structure",
          "instruction": "Write an if/else that prints \"Open shop\" if hour is between 8 and 20, else \"Closed\". Use proper indentation.",
          "solution": "hour = 14\nif hour >= 8 and hour <= 20:\n    print(\"Open shop\")\nelse:\n    print(\"Closed\")"
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
        }
      ]
    },
    {
      "id": "py-04",
      "title": "1.4 Output — Talking to the User with print()",
      "module": "Getting Started",
      "objective": "Display text, numbers, and multiple values using print().",
      "why": "A shop receipt, SMS alert, or dashboard all show output. print() is your first way to communicate results.",
      "explanation": "print() can show strings, numbers, variables, and multiple items separated by commas.<br>\n  Use <code>sep</code> and <code>end</code> to control separators and newlines.",
      "codeExample": "shop = \"Mama Nkechi Provisions\"\nsales = 125000\nprint(\"Shop:\", shop)\nprint(\"Today's sales:\", sales, \"naira\")\nprint(\"A\", \"B\", \"C\", sep=\"-\")       # A-B-C\nprint(\"Loading\", end=\"...\")         # no newline\nprint(\" done\")",
      "exercises": [
        {
          "title": "Daily sales line",
          "instruction": "Print a one-line summary: business name, number of customers, and total sales (use variables).",
          "solution": "business = \"City Buka\"\ncustomers = 48\ntotal = 87500\nprint(business, \"| customers:\", customers, \"| sales: ₦\", total)"
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
        }
      ]
    },
    {
      "id": "py-05",
      "title": "1.5 Comments — Notes for Future You",
      "module": "Getting Started",
      "objective": "Write clear comments and docstrings so code stays understandable.",
      "why": "When you reopen code after 3 months (or hand it to a teammate), comments save hours of confusion.",
      "explanation": "Use <code>#</code> for single-line comments.<br>\n  Use triple quotes <code>\"\"\" ... \"\"\"</code> for multi-line notes or function docs.<br>\n  Comment the <em>why</em>, not the obvious <em>what</em>.",
      "codeExample": "# Calculate delivery fee for orders outside Lagos\nbase_fee = 500\n# Extra charge per km beyond 5km\nextra_per_km = 100\n\n\"\"\"\nBusiness rule:\nFree delivery if order total > 15000\n\"\"\"\norder_total = 18000\nif order_total > 15000:\n    delivery = 0  # promo: free delivery\nelse:\n    delivery = base_fee",
      "exercises": [
        {
          "title": "Document a price rule",
          "instruction": "Write a short script with comments explaining a 5% VAT calculation on a product price.",
          "solution": "# Product price before tax\nprice = 10000\n# VAT rate in many businesses is 7.5% or 5% for practice\nvat_rate = 0.05  # 5%\nvat = price * vat_rate\ntotal = price + vat\nprint(\"Total with VAT:\", total)"
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
        }
      ]
    },
    {
      "id": "py-06",
      "title": "2.1 Variables — Labeled Boxes for Data",
      "module": "Variables & Types",
      "objective": "Create, update, and name variables clearly.",
      "why": "A POS system stores item names, prices, and stock. Variables are labeled boxes holding those values.",
      "explanation": "Assign with <code>=</code>. Names: letters, numbers, underscores; cannot start with a number.<br>\n  Prefer <code>snake_case</code>: <code>total_sales</code> not <code>x</code>.",
      "codeExample": "customer_name = \"Bola\"\nbalance = 45000\nbalance = balance + 5000   # deposit\nprint(customer_name, \"new balance:\", balance)\n\n# Multiple assignment\nx, y = 10, 20\na = b = 0",
      "exercises": [
        {
          "title": "Mini bank account",
          "instruction": "Create variables for account_name, balance. Simulate a 2000 withdrawal and print remaining balance.",
          "solution": "account_name = \"Chidi Okeke\"\nbalance = 15000\nwithdrawal = 2000\nbalance = balance - withdrawal\nprint(account_name, \"balance left:\", balance)"
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
        }
      ]
    },
    {
      "id": "py-07",
      "title": "2.2 Data Types — What Kind of Value Is It?",
      "module": "Variables & Types",
      "objective": "Identify and use str, int, float, bool, and check types with type().",
      "why": "Money needs decimals (float), ages are whole numbers (int), names are text (str). Wrong type = wrong bills and bugs.",
      "explanation": "Common types: <strong>str</strong>, <strong>int</strong>, <strong>float</strong>, <strong>bool</strong>, <strong>list</strong>, <strong>dict</strong>, <strong>None</strong>.<br>\n  Use <code>type(value)</code> to inspect.",
      "codeExample": "name = \"Fatima\"       # str\nage = 27              # int\nheight_m = 1.65       # float\nis_member = True      # bool\nprint(type(name), type(age), type(height_m), type(is_member))",
      "exercises": [
        {
          "title": "Type audit for a product",
          "instruction": "Create variables for product name, price, quantity, and in_stock (True/False). Print each type().",
          "solution": "product = \"Peak Milk 400g\"\nprice = 1850.50\nqty = 24\nin_stock = True\nprint(type(product), type(price), type(qty), type(in_stock))"
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
        }
      ]
    },
    {
      "id": "py-08",
      "title": "2.3 Numbers — int, float & Everyday Math",
      "module": "Variables & Types",
      "objective": "Perform arithmetic with integers and floats for real calculations.",
      "why": "Salaries, fuel cost, and market profit all need reliable number math.",
      "explanation": "Operators: <code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>//</code> (floor) <code>%</code> (remainder) <code>**</code> (power).<br>\n  Watch float precision for money — often store kobo as int or use decimal later.",
      "codeExample": "bags_of_rice = 12\nprice_each = 45000\ntotal = bags_of_rice * price_each\nprint(\"Total:\", total)\n\n# Split bill among 3 friends\nbill = 15000\neach = bill / 3\nprint(\"Each pays:\", each)\n\nprint(17 // 5)  # 3\nprint(17 % 5)   # 2 remainder\nprint(2 ** 10)  # 1024",
      "exercises": [
        {
          "title": "Fuel cost calculator",
          "instruction": "A car uses 12 litres/100km. Diesel is ₦1200/L. Distance = 80km. Print estimated fuel cost.",
          "solution": "litres_per_100 = 12\nprice_per_litre = 1200\ndistance = 80\nlitres_needed = (litres_per_100 / 100) * distance\ncost = litres_needed * price_per_litre\nprint(\"Fuel needed (L):\", litres_needed)\nprint(\"Estimated cost: ₦\", cost)"
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
        }
      ]
    },
    {
      "id": "py-09",
      "title": "2.4 Casting — Convert Types Safely",
      "module": "Variables & Types",
      "objective": "Convert between str, int, and float with int(), float(), str().",
      "why": "User input arrives as text. To add prices you must cast \"2500\" to a number first.",
      "explanation": "Common casts: <code>int(\"42\")</code>, <code>float(\"3.5\")</code>, <code>str(100)</code>.<br>\n  Invalid casts raise errors: <code>int(\"hello\")</code> fails.",
      "codeExample": "price_text = \"2500\"\nqty_text = \"3\"\ntotal = int(price_text) * int(qty_text)\nprint(\"Total:\", total)\nprint(\"Receipt line: \" + str(total) + \" naira\")\n\nscore = float(\"85.5\")\nprint(score + 4.5)",
      "exercises": [
        {
          "title": "String math fix",
          "instruction": "Variables a=\"40\" and b=\"12.5\". Convert them and print their sum as a float.",
          "solution": "a = \"40\"\nb = \"12.5\"\nprint(int(a) + float(b))  # 52.5"
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
        }
      ]
    },
    {
      "id": "py-10",
      "title": "3.1 Strings — Working with Text",
      "module": "Strings",
      "objective": "Create and print strings with single, double, and triple quotes.",
      "why": "Names, addresses, SMS messages, and invoices are all text (strings).",
      "explanation": "Strings hold text. Use <code>'...'</code>, <code>\"...\"</code>, or <code>'''...'''</code> for multi-line.<br>\n  Length: <code>len(s)</code>. Index: <code>s[0]</code> is first character.",
      "codeExample": "customer = \"Amina Yusuf\"\nmessage = 'Your order is ready'\npoem = \"\"\"Thank you for shopping\nSee you next week!\"\"\"\nprint(customer)\nprint(len(customer))\nprint(customer[0])   # A\nprint(customer[-1])  # f (last char)",
      "exercises": [
        {
          "title": "Business SMS",
          "instruction": "Create a multi-line string thanking a customer by name and print its length.",
          "solution": "name = \"Tunde\"\nsms = f\"\"\"Hello {name},\nThanks for buying from us today!\n— MoTechy Store\"\"\"\nprint(sms)\nprint(\"Characters:\", len(sms))"
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
        }
      ]
    },
    {
      "id": "py-11",
      "title": "3.2 Slicing Strings — Cut Out Pieces",
      "module": "Strings",
      "objective": "Extract parts of a string using slice notation [start:stop:step].",
      "why": "Need only the first 3 digits of a phone number or a product code prefix? Slicing extracts it.",
      "explanation": "Syntax: <code>s[start:stop]</code> — stop is exclusive.<br>\n  <code>s[:3]</code> first 3 chars. <code>s[2:]</code> from index 2 to end. <code>s[::-1]</code> reverse.",
      "codeExample": "phone = \"08031234567\"\nprint(phone[:4])      # 0803 network prefix area\nprint(phone[4:])      # rest of number\nprint(phone[0:7])     # 0803123\ncode = \"INV-2026-0042\"\nprint(code[4:8])      # 2026 year\nprint(code[::-1])     # reverse",
      "exercises": [
        {
          "title": "Extract order year",
          "instruction": "order_id = \"ORD-2026-LAG-778\". Print the year portion using slicing.",
          "solution": "order_id = \"ORD-2026-LAG-778\"\nyear = order_id[4:8]\nprint(year)  # 2026"
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
        }
      ]
    },
    {
      "id": "py-12",
      "title": "3.3 Modify Strings — upper, lower, strip, replace",
      "module": "Strings",
      "objective": "Clean and transform text with common string methods.",
      "why": "Customer types \"  LAGOS  \" or \"lagos\". You normalize to \"Lagos\" before saving to a database.",
      "explanation": "Strings are immutable — methods return <em>new</em> strings.<br>\n  Useful: <code>upper()</code>, <code>lower()</code>, <code>title()</code>, <code>strip()</code>, <code>replace()</code>.",
      "codeExample": "city = \"  lagos  \"\nclean = city.strip().title()\nprint(clean)  # Lagos\n\nmsg = \"Order pending\"\nprint(msg.replace(\"pending\", \"shipped\"))\nprint(\"HELLO\".lower())\nprint(\"ada\".upper())",
      "exercises": [
        {
          "title": "Clean form input",
          "instruction": "raw = \"  CHINEDU OKAFOR \". Strip spaces and convert to title case.",
          "solution": "raw = \"  CHINEDU OKAFOR \"\nclean = raw.strip().title()\nprint(clean)  # Chinedu Okafor"
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
        }
      ]
    },
    {
      "id": "py-13",
      "title": "3.4 Concatenate Strings — Join Text Together",
      "module": "Strings",
      "objective": "Combine strings with + and join().",
      "why": "Building a full address or a WhatsApp message means joining several text pieces.",
      "explanation": "Use <code>+</code> for simple joins (all must be strings).<br>\n  Use <code>\" \".join(list)</code> for lists of words — faster and cleaner.",
      "codeExample": "first = \"Ngozi\"\nlast = \"Eze\"\nfull = first + \" \" + last\nprint(full)\n\nparts = [\"12\", \"Adeniyi Jones\", \"Ikeja\", \"Lagos\"]\naddress = \", \".join(parts)\nprint(address)\n\n# Careful: cannot do \"Age: \" + 25  → use str(25)",
      "exercises": [
        {
          "title": "Full receipt header",
          "instruction": "Join shop_name, branch, and date into one header string separated by \" | \".",
          "solution": "shop_name = \"FreshMart\"\nbranch = \"Yaba\"\ndate = \"2026-07-16\"\nheader = \" | \".join([shop_name, branch, date])\nprint(header)"
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
        }
      ]
    },
    {
      "id": "py-14",
      "title": "3.5 Format Strings — f-strings & Placeholders",
      "module": "Strings",
      "objective": "Insert variables into strings cleanly with f-strings.",
      "why": "Customer messages like \"Hello Amina, your balance is ₦12,000\" need clean formatting.",
      "explanation": "Preferred modern style: <code>f\"Hello {name}\"</code>.<br>\n  Also: <code>\"Hello {}\".format(name)</code> and old <code>%s</code> style.",
      "codeExample": "name = \"Ifeanyi\"\nbalance = 12500.5\nprint(f\"Hello {name}, balance: ₦{balance:,.2f}\")\nprint(\"Hello {}, balance: ₦{}\".format(name, balance))\nprint(\"Hello %s\" % name)\n\n# Expressions inside f-strings\nqty = 3\nprice = 500\nprint(f\"Line total: ₦{qty * price}\")",
      "exercises": [
        {
          "title": "Invoice line",
          "instruction": "item=\"Bread\", qty=4, price=800. Print: \"4 x Bread = ₦3200\" using an f-string.",
          "solution": "item = \"Bread\"\nqty = 4\nprice = 800\nprint(f\"{qty} x {item} = ₦{qty * price}\")"
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
        }
      ]
    },
    {
      "id": "py-15",
      "title": "3.6 Escape Characters — Special Symbols in Text",
      "module": "Strings",
      "objective": "Use escape sequences like \\n, \\t, and \\\" correctly.",
      "why": "When printing multi-line receipts or quotes inside quotes, escapes control special characters.",
      "explanation": "Common escapes: <code>\\n</code> newline, <code>\\t</code> tab, <code>\\\\</code> backslash, <code>\\'</code> / <code>\\\"</code> quotes.<br>\n  Raw strings: <code>r\"C:\\Users\\data\"</code> (paths, regex).",
      "codeExample": "print(\"Line1\\nLine2\")\nprint(\"Name:\\tAda\")\nprint(\"She said \\\"Welcome\\\" to the shop\")\nprint('It\\'s open')\npath = r\"C:\\Users\\Shop\\sales.csv\"\nprint(path)",
      "exercises": [
        {
          "title": "Pretty receipt",
          "instruction": "Print three lines using one string with \\n: shop name, dashed line, thank you.",
          "solution": "print(\"City Mart\\n-----------\\nThank you for shopping!\")"
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
        }
      ]
    },
    {
      "id": "py-16",
      "title": "3.7 String Methods — find, split, startswith & More",
      "module": "Strings",
      "objective": "Use powerful string methods for search and parsing.",
      "why": "Parsing CSV lines, checking if a message starts with \"PAY\", or splitting a full name — methods do the heavy lifting.",
      "explanation": "Handy methods: <code>split()</code>, <code>find()</code>, <code>startswith()</code>, <code>endswith()</code>, <code>count()</code>, <code>isdigit()</code>, <code>isalpha()</code>.",
      "codeExample": "row = \"Rice,2500,10\"\nparts = row.split(\",\")\nprint(parts)  # ['Rice', '2500', '10']\n\nmsg = \"PAY 5000 to MTN\"\nprint(msg.startswith(\"PAY\"))\nprint(msg.find(\"5000\"))\nprint(\"0803\".isdigit())\nprint(\"Hello world\".count(\"l\"))",
      "exercises": [
        {
          "title": "Parse sales CSV line",
          "instruction": "line = \"Beans,1800,5\". Split and print product name and total value (price*qty).",
          "solution": "line = \"Beans,1800,5\"\nname, price, qty = line.split(\",\")\ntotal = int(price) * int(qty)\nprint(name, \"total ₦\", total)"
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
        }
      ]
    },
    {
      "id": "py-17",
      "title": "3.8 String Exercises — Mini Text Toolkit",
      "module": "Strings",
      "objective": "Practice string skills on realistic text problems.",
      "why": "Customer support tools constantly clean, search, and reformat text.",
      "explanation": "Combine slicing, methods, and f-strings to solve small business text tasks.",
      "codeExample": "# Mask phone number: 080****4567\nphone = \"08031234567\"\nmasked = phone[:3] + \"****\" + phone[-4:]\nprint(masked)\n\nemail = \"User@Email.COM\".lower().strip()\nprint(email)",
      "exercises": [
        {
          "title": "Username from email",
          "instruction": "email = \"chidi.okeke@gmail.com\". Extract the part before @ as username (lowercase).",
          "solution": "email = \"chidi.okeke@gmail.com\"\nusername = email.split(\"@\")[0].lower()\nprint(username)"
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
        }
      ]
    },
    {
      "id": "py-18",
      "title": "3.9 Code Challenge — Customer Message Builder",
      "module": "Strings",
      "objective": "Build a complete customer notification string from variables.",
      "why": "E-commerce and logistics apps generate SMS/email from templates + data.",
      "explanation": "Challenge: given customer, item, qty, price, and status — produce a polished multi-line message.",
      "codeExample": "customer = \"Amaka\"\nitem = \"Indomie carton\"\nqty = 2\nprice = 6500\nstatus = \"shipped\"\ntotal = qty * price\nmessage = f\"\"\"Hello {customer},\nYour order of {qty} x {item} (₦{total:,}) is now {status.upper()}.\nTrack anytime. — ZeroToCode Shop\"\"\"\nprint(message)",
      "exercises": [
        {
          "title": "Your turn",
          "instruction": "Change the variables to a pharmacy order (drugs/item of your choice) and print a similar message with status \"ready for pickup\".",
          "solution": "customer = \"Mr. Bello\"\nitem = \"Paracetamol pack\"\nqty = 3\nprice = 500\nstatus = \"ready for pickup\"\ntotal = qty * price\nprint(f\"\"\"Hello {customer},\nYour order of {qty} x {item} (₦{total:,}) is {status}.\n— City Pharmacy\"\"\")"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-19",
      "title": "4.1 Booleans — True, False & Truthiness",
      "module": "Booleans & Operators",
      "objective": "Use True/False values and understand truthy/falsy values.",
      "why": "Is the door open? Is payment confirmed? Software decisions are yes/no (boolean) questions.",
      "explanation": "<code>True</code> and <code>False</code> are bools.<br>\n  Falsy: <code>0</code>, <code>\"\"</code>, <code>[]</code>, <code>{}</code>, <code>None</code>, <code>False</code>. Everything else is truthy.",
      "codeExample": "is_open = True\nhas_stock = False\nprint(is_open and has_stock)  # False\nprint(is_open or has_stock)   # True\nprint(not has_stock)          # True\n\nprint(bool(0), bool(15), bool(\"\"), bool(\"yes\"))",
      "exercises": [
        {
          "title": "Shop open logic",
          "instruction": "Variables: has_power=True, staff_present=True. Print whether the shop can open (both must be True).",
          "solution": "has_power = True\nstaff_present = True\ncan_open = has_power and staff_present\nprint(\"Can open?\", can_open)"
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
        }
      ]
    },
    {
      "id": "py-20",
      "title": "4.2 Operators — Math, Compare & Logic",
      "module": "Booleans & Operators",
      "objective": "Use arithmetic, comparison, and logical operators correctly.",
      "why": "Price checks, eligibility rules, and discounts are all operator combinations.",
      "explanation": "Comparison: <code>== != < > <= >=</code><br>\n  Logic: <code>and or not</code><br>\n  Membership: <code>in</code>, <code>not in</code><br>\n  Identity: <code>is</code>, <code>is not</code> (for None etc.)",
      "codeExample": "age = 22\nincome = 80000\neligible = age >= 18 and income >= 50000\nprint(\"Loan eligible?\", eligible)\n\nproduct = \"milk\"\ncart = [\"bread\", \"milk\", \"eggs\"]\nprint(product in cart)\n\nprint(5 == 5, 5 != 3, 10 > 2)",
      "exercises": [
        {
          "title": "Discount rule",
          "instruction": "Give 10% off if total > 10000 OR customer is_vip. Compute final price for total=9000, is_vip=True.",
          "solution": "total = 9000\nis_vip = True\nif total > 10000 or is_vip:\n    final = total * 0.9\nelse:\n    final = total\nprint(\"Final:\", final)"
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
        }
      ]
    },
    {
      "id": "py-21",
      "title": "5.1 Lists — Ordered Shopping Lists",
      "module": "Collections",
      "objective": "Create, index, append, remove, and loop over lists.",
      "why": "A market shopping list, queue of orders, or student roster is a list — ordered and changeable.",
      "explanation": "Lists: <code>[item1, item2]</code>. Mutable. Methods: <code>append</code>, <code>insert</code>, <code>remove</code>, <code>pop</code>, <code>sort</code>.",
      "codeExample": "orders = [\"jollof\", \"suya\", \"zobo\"]\norders.append(\"puff-puff\")\nprint(orders[0])\norders[1] = \"kilishi\"\nprint(len(orders))\nfor item in orders:\n    print(\"-\", item)",
      "exercises": [
        {
          "title": "Todo for the day",
          "instruction": "Create a list of 4 tasks. Add one more, remove the first, print remaining.",
          "solution": "tasks = [\"buy data\", \"call supplier\", \"update prices\", \"close books\"]\ntasks.append(\"backup sales file\")\ntasks.pop(0)\nprint(tasks)"
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
        }
      ]
    },
    {
      "id": "py-22",
      "title": "5.2 Tuples — Fixed Records",
      "module": "Collections",
      "objective": "Use tuples for fixed collections that should not change.",
      "why": "GPS coordinates, RGB colors, or (latitude, longitude) of a shop should stay fixed — use tuples.",
      "explanation": "Tuples: <code>(a, b)</code>. Ordered, immutable.<br>\n  Good for dictionary keys and fixed records.",
      "codeExample": "lagos_coords = (6.5244, 3.3792)\nprint(lagos_coords[0])\n\n# Unpacking\nlat, lon = lagos_coords\nprint(lat, lon)\n\n# Single-item tuple needs comma\nsingleton = (42,)",
      "exercises": [
        {
          "title": "RGB brand color",
          "instruction": "Store your brand color as an RGB tuple and print each component with labels.",
          "solution": "brand = (16, 185, 129)  # emerald-ish\nr, g, b = brand\nprint(\"R:\", r, \"G:\", g, \"B:\", b)"
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
        }
      ]
    },
    {
      "id": "py-23",
      "title": "5.3 Sets — Unique Items Only",
      "module": "Collections",
      "objective": "Store unique values and use set operations (union, intersection).",
      "why": "Which phone numbers are unique leads? Who attended both events? Sets remove duplicates fast.",
      "explanation": "Sets: <code>{1, 2, 3}</code>. Unordered, unique members.<br>\n  Ops: <code>|</code> union, <code>&</code> intersection, <code>-</code> difference.",
      "codeExample": "visitors = {\"Ada\", \"Bola\", \"Ada\", \"Chidi\"}\nprint(visitors)  # Ada once only\n\nvip = {\"Ada\", \"Emeka\"}\nprint(visitors & vip)   # intersection\nprint(visitors | vip)   # union\nvisitors.add(\"Fatima\")",
      "exercises": [
        {
          "title": "Unique tags",
          "instruction": "tags list has duplicates. Convert to a set and print how many unique tags.",
          "solution": "tags = [\"python\", \"data\", \"python\", \"web\", \"data\", \"ai\"]\nunique = set(tags)\nprint(unique)\nprint(\"Unique count:\", len(unique))"
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
        }
      ]
    },
    {
      "id": "py-24",
      "title": "5.4 Dictionaries — Key → Value Maps",
      "module": "Collections",
      "objective": "Store and retrieve data with keys (like a real dictionary or contact book).",
      "why": "A student profile, product catalog, or settings file is naturally a dictionary.",
      "explanation": "Dicts: <code>{\"name\": \"Ada\", \"age\": 20}</code>. Access with keys. Methods: <code>keys()</code>, <code>values()</code>, <code>items()</code>, <code>get()</code>.",
      "codeExample": "student = {\n    \"name\": \"Emeka\",\n    \"course\": \"Python\",\n    \"score\": 88\n}\nprint(student[\"name\"])\nprint(student.get(\"email\", \"not provided\"))\nstudent[\"score\"] = 91\nfor key, value in student.items():\n    print(key, \"→\", value)",
      "exercises": [
        {
          "title": "Product record",
          "instruction": "Create a dict for a phone: brand, model, price, in_stock. Print a sales sentence using the values.",
          "solution": "phone = {\"brand\": \"Tecno\", \"model\": \"Camon\", \"price\": 185000, \"in_stock\": True}\nprint(f\"{phone['brand']} {phone['model']} costs ₦{phone['price']:,}. In stock: {phone['in_stock']}\")"
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
        }
      ]
    },
    {
      "id": "py-25",
      "title": "6.1 If...Else — Decisions in Code",
      "module": "Control Flow",
      "objective": "Branch logic with if, elif, and else.",
      "why": "ATMs: if PIN correct and balance enough → dispense cash. Same idea in every app.",
      "explanation": "Structure: <code>if condition:</code> / <code>elif</code> / <code>else</code>. Indent the body.",
      "codeExample": "balance = 8000\nwithdraw = 5000\nif withdraw > balance:\n    print(\"Insufficient funds\")\nelif withdraw <= 0:\n    print(\"Invalid amount\")\nelse:\n    balance -= withdraw\n    print(\"Take your cash. New balance:\", balance)",
      "exercises": [
        {
          "title": "Exam grade",
          "instruction": "score 0-100 → A(70+), B(60-69), C(50-59), else Fail. Print the grade for score=63.",
          "solution": "score = 63\nif score >= 70:\n    grade = \"A\"\nelif score >= 60:\n    grade = \"B\"\nelif score >= 50:\n    grade = \"C\"\nelse:\n    grade = \"Fail\"\nprint(\"Grade:\", grade)"
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
        }
      ]
    },
    {
      "id": "py-26",
      "title": "6.2 Match — Structural Pattern Matching",
      "module": "Control Flow",
      "objective": "Use match/case (Python 3.10+) for clean multi-way decisions.",
      "why": "Order status: pending, shipped, delivered, cancelled — match handles each case clearly.",
      "explanation": "<code>match value:</code> then <code>case pattern:</code>. Use <code>case _</code> as default.",
      "codeExample": "status = \"shipped\"\nmatch status:\n    case \"pending\":\n        print(\"We are packing your order\")\n    case \"shipped\":\n        print(\"On the way — track your parcel\")\n    case \"delivered\":\n        print(\"Enjoy! Please rate us\")\n    case _:\n        print(\"Unknown status\")",
      "exercises": [
        {
          "title": "Payment method",
          "instruction": "Match method \"card\"/\"transfer\"/\"cash\" and print processing instructions. Default: invalid.",
          "solution": "method = \"transfer\"\nmatch method:\n    case \"card\":\n        print(\"Swipe or insert card\")\n    case \"transfer\":\n        print(\"Send to account 0123456789\")\n    case \"cash\":\n        print(\"Pay the cashier\")\n    case _:\n        print(\"Invalid payment method\")"
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
        }
      ]
    },
    {
      "id": "py-27",
      "title": "6.3 While Loops — Repeat Until Done",
      "module": "Control Flow",
      "objective": "Repeat actions while a condition stays True.",
      "why": "PIN attempts, menu systems, and \"keep asking until valid input\" use while loops.",
      "explanation": "while condition: body. Avoid infinite loops — update the condition.<br>\n  <code>break</code> exits, <code>continue</code> skips to next iteration.",
      "codeExample": "attempts = 0\npin = \"2468\"\nwhile attempts < 3:\n    guess = \"2468\"  # pretend input\n    if guess == pin:\n        print(\"Access granted\")\n        break\n    attempts += 1\nelse:\n    print(\"Card blocked\")  # runs if no break",
      "exercises": [
        {
          "title": "Countdown",
          "instruction": "Use while to count from 5 down to 1, then print \"Go!\".",
          "solution": "n = 5\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Go!\")"
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
        }
      ]
    },
    {
      "id": "py-28",
      "title": "6.4 For Loops — Walk Through Collections",
      "module": "Control Flow",
      "objective": "Iterate over lists, strings, and other sequences with for.",
      "why": "Send SMS to every customer, or total every line on a receipt — for loops shine here.",
      "explanation": "for item in collection: process item.<br>\n  Combine with <code>enumerate</code> for index + value.",
      "codeExample": "prices = [500, 1200, 300]\ntotal = 0\nfor p in prices:\n    total += p\nprint(\"Sum:\", total)\n\nfor i, p in enumerate(prices, start=1):\n    print(f\"Item {i}: ₦{p}\")",
      "exercises": [
        {
          "title": "Name badges",
          "instruction": "names = [\"Ada\", \"Bola\", \"Chika\"]. Print \"Hello, <name>!\" for each.",
          "solution": "names = [\"Ada\", \"Bola\", \"Chika\"]\nfor name in names:\n    print(f\"Hello, {name}!\")"
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
        }
      ]
    },
    {
      "id": "py-29",
      "title": "6.5 Range — Sequences of Numbers",
      "module": "Control Flow",
      "objective": "Generate number sequences with range(start, stop, step).",
      "why": "Print pages 1–10, seat numbers, or run a loop N times without a manual list.",
      "explanation": "<code>range(5)</code> → 0..4. <code>range(1, 6)</code> → 1..5. <code>range(0, 10, 2)</code> even numbers.<br>\n  Convert to list: <code>list(range(5))</code>.",
      "codeExample": "for i in range(1, 6):\n    print(\"Day\", i)\n\nprint(list(range(0, 11, 2)))  # [0,2,4,6,8,10]\n\n# 5 times table\nfor n in range(1, 13):\n    print(f\"5 x {n} = {5 * n}\")",
      "exercises": [
        {
          "title": "Even seats",
          "instruction": "Print even seat numbers from 2 to 20 inclusive using range.",
          "solution": "for seat in range(2, 21, 2):\n    print(\"Seat\", seat)"
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
        }
      ]
    },
    {
      "id": "py-30",
      "title": "7.1 Functions — Write Once, Reuse Forever",
      "module": "Functions",
      "objective": "Define functions with def, parameters, and return values.",
      "why": "Calculating delivery fee in 10 places? Put it in one function — fix bugs once.",
      "explanation": "<code>def name(params):</code> then body. <code>return</code> sends a result back.<br>\n  Default args: <code>def fee(km, rate=100):</code>",
      "codeExample": "def delivery_fee(distance_km, rate=150):\n    if distance_km <= 0:\n        return 0\n    return distance_km * rate\n\nprint(delivery_fee(8))\nprint(delivery_fee(8, rate=200))\n\ndef greet(name=\"friend\"):\n    return f\"Hello, {name}!\"\nprint(greet(\"Zainab\"))",
      "exercises": [
        {
          "title": "VAT function",
          "instruction": "Write add_vat(amount, rate=0.075) that returns amount including VAT.",
          "solution": "def add_vat(amount, rate=0.075):\n    return amount * (1 + rate)\n\nprint(add_vat(10000))\nprint(add_vat(10000, 0.05))"
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
        }
      ]
    },
    {
      "id": "py-31",
      "title": "7.2 Arrays — Array Module & List as Arrays",
      "module": "Functions",
      "objective": "Understand Python arrays (array module) vs everyday lists.",
      "why": "Scientific sensors store many numbers efficiently. For most apps, lists are enough; array is for typed numeric storage.",
      "explanation": "Python has no fixed C-style array built-in. Use <strong>lists</strong> for general work.<br>\n  <code>array.array</code> stores one type compactly. NumPy arrays (later) for data science.",
      "codeExample": "from array import array\ntemps = array('f', [32.1, 33.0, 31.5, 34.2])  # float array\nprint(temps[0])\ntemps.append(30.8)\nprint(list(temps))\n\n# Most of the time, just use a list:\nscores = [70, 85, 90]\nprint(sum(scores) / len(scores))",
      "exercises": [
        {
          "title": "Sensor average",
          "instruction": "Use a list (or array) of 5 temperature readings and print the average.",
          "solution": "readings = [28.5, 29.0, 30.2, 27.8, 29.5]\navg = sum(readings) / len(readings)\nprint(\"Average °C:\", round(avg, 2))"
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
        }
      ]
    },
    {
      "id": "py-32",
      "title": "7.3 Iterators — next() and iter()",
      "module": "Functions",
      "objective": "Use iterators to walk through data lazily.",
      "why": "Reading a huge sales log line-by-line without loading everything into memory uses iterators.",
      "explanation": "iter(obj) gets an iterator. next(it) yields the next value. StopIteration when done.<br>\n  for-loops use iterators under the hood.",
      "codeExample": "nums = [10, 20, 30]\nit = iter(nums)\nprint(next(it))\nprint(next(it))\nprint(next(it))\n\n# Custom simple counter iterator idea via generator\ndef countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor x in countdown(3):\n    print(x)",
      "exercises": [
        {
          "title": "Manual next",
          "instruction": "Create an iterator over [\"a\",\"b\"] and print both values with next().",
          "solution": "it = iter([\"a\", \"b\"])\nprint(next(it))\nprint(next(it))"
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
        }
      ]
    },
    {
      "id": "py-33",
      "title": "8.1 Modules — Import Superpowers",
      "module": "Intermediate",
      "objective": "Import and use standard library and your own modules.",
      "why": "You do not invent math from scratch — import tools. Same for dates, random IDs, JSON.",
      "explanation": "import math<br>\n  from random import randint<br>\n  import mymodule (your .py file)",
      "codeExample": "import math\nfrom random import choice\n\nprint(math.sqrt(16))\nprint(math.pi)\n\nprizes = [\"free delivery\", \"10% off\", \"// keyring\"]\nprint(\"You won:\", choice([\"free delivery\", \"10% off\", \"keyring\"]))",
      "exercises": [
        {
          "title": "Circle area",
          "instruction": "Import math and compute area of circle radius 7 (pi * r^2).",
          "solution": "import math\nr = 7\narea = math.pi * r ** 2\nprint(round(area, 2))"
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
        }
      ]
    },
    {
      "id": "py-34",
      "title": "8.2 Dates — datetime for Real Schedules",
      "module": "Intermediate",
      "objective": "Work with dates and times using the datetime module.",
      "why": "Delivery ETAs, payroll periods, and “member since” stamps all need dates.",
      "explanation": "from datetime import datetime, timedelta, date",
      "codeExample": "from datetime import datetime, timedelta\n\nnow = datetime.now()\nprint(now.strftime(\"%Y-%m-%d %H:%M\"))\n\ndelivery = now + timedelta(days=3)\nprint(\"Deliver by:\", delivery.date())\n\nborn = datetime(1998, 5, 12)\nage_days = (now - born).days\nprint(\"Days alive:\", age_days)",
      "exercises": [
        {
          "title": "Membership expiry",
          "instruction": "Today + 30 days as expiry date. Print it as YYYY-MM-DD.",
          "solution": "from datetime import datetime, timedelta\nexpiry = datetime.now() + timedelta(days=30)\nprint(expiry.strftime(\"%Y-%m-%d\"))"
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
        }
      ]
    },
    {
      "id": "py-35",
      "title": "8.3 Math Module — Beyond Basic Operators",
      "module": "Intermediate",
      "objective": "Use math for roots, rounding modes, constants, and more.",
      "why": "Loan interest, distance between map points, and scientific tools need math helpers.",
      "explanation": "import math — ceil, floor, sqrt, pow, factorial, pi, e, ...",
      "codeExample": "import math\nprint(math.ceil(4.2))\nprint(math.floor(4.8))\nprint(math.factorial(5))\nprint(math.hypot(3, 4))  # distance from origin = 5",
      "exercises": [
        {
          "title": "Hypotenuse",
          "instruction": "A right triangle has legs 9 and 12. Print hypotenuse with math.hypot.",
          "solution": "import math\nprint(math.hypot(9, 12))  # 15.0"
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
        }
      ]
    },
    {
      "id": "py-36",
      "title": "8.4 JSON — Data Language of the Web",
      "module": "Intermediate",
      "objective": "Convert between Python objects and JSON strings.",
      "why": "APIs, config files, and mobile apps exchange JSON constantly.",
      "explanation": "import json<br>\n  json.dumps(obj) → string<br>\n  json.loads(s) → Python object<br>\n  dump/load for files",
      "codeExample": "import json\norder = {\"id\": 101, \"item\": \"fan\", \"qty\": 2, \"paid\": True}\ntext = json.dumps(order)\nprint(text)\ndata = json.loads(text)\nprint(data[\"item\"])",
      "exercises": [
        {
          "title": "Serialize a user",
          "instruction": "Create a dict user with name and city. Convert to JSON string and print it.",
          "solution": "import json\nuser = {\"name\": \"Kemi\", \"city\": \"Ibadan\"}\nprint(json.dumps(user))"
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
        }
      ]
    },
    {
      "id": "py-37",
      "title": "8.5 RegEx — Find Patterns in Text",
      "module": "Intermediate",
      "objective": "Use regular expressions to validate and extract text patterns.",
      "why": "Is this a valid Nigerian phone number? Extract all emails from a document — RegEx.",
      "explanation": "import re<br>\n  re.search, re.findall, re.sub, re.match",
      "codeExample": "import re\ntext = \"Call 08031234567 or 09011112222 today\"\nphones = re.findall(r\"0\\d{10}\", text)\nprint(phones)\n\nemail = \"ada@company.com\"\nif re.match(r\"[\\w.-]+@[\\w.-]+\\.\\w+\", email):\n    print(\"Valid email format\")",
      "exercises": [
        {
          "title": "Find hashtags",
          "instruction": "text = \"Love #Python and #DataScience\". Find all hashtags with re.findall.",
          "solution": "import re\ntext = \"Love #Python and #DataScience\"\nprint(re.findall(r\"#\\w+\", text))"
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
        }
      ]
    },
    {
      "id": "py-38",
      "title": "8.6 PIP — Install Packages",
      "module": "Intermediate",
      "objective": "Install third-party libraries with pip.",
      "why": "Need charts or Excel? pip installs community packages in seconds.",
      "explanation": "pip is Python’s package installer.<br>\n  <code>pip install requests</code><br>\n  <code>pip freeze > requirements.txt</code><br>\n  <code>pip install -r requirements.txt</code>",
      "codeExample": "# Terminal commands (run outside Python):\n# python3 -m pip install requests\n# python3 -m pip list\n# python3 -m pip uninstall requests\n\n# After install, use in code:\n# import requests\n# r = requests.get(\"https://api.github.com\")\n# print(r.status_code)\n\nprint(\"Use: python3 -m pip install package_name\")",
      "exercises": [
        {
          "title": "Requirements mindset",
          "instruction": "Write a requirements.txt content (as a multi-line string) listing requests and python-dateutil.",
          "solution": "requirements = \"\"\"requests\npython-dateutil\n\"\"\"\nprint(requirements)\nprint(\"Save that text as requirements.txt and run: pip install -r requirements.txt\")"
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
        }
      ]
    },
    {
      "id": "py-39",
      "title": "8.7 Try...Except — Handle Errors Gracefully",
      "module": "Intermediate",
      "objective": "Catch exceptions so programs do not crash on bad input.",
      "why": "User types \"abc\" as price. Without try/except, the whole POS freezes. With it, you show a friendly error.",
      "explanation": "try: risky code<br>\n  except ErrorType: handle<br>\n  else: if no error<br>\n  finally: always runs",
      "codeExample": "raw = \"not-a-number\"\ntry:\n    price = float(raw)\n    print(\"Price:\", price)\nexcept ValueError:\n    print(\"Please enter a valid number\")\nfinally:\n    print(\"Ready for next input\")",
      "exercises": [
        {
          "title": "Safe divide",
          "instruction": "Write try/except that divides 100 by user-provided divisor; handle ZeroDivisionError and ValueError (use divisor=\"0\" then \"2\" as tests in comments).",
          "solution": "def safe_divide(a, b_text):\n    try:\n        b = float(b_text)\n        return a / b\n    except ValueError:\n        return \"Not a number\"\n    except ZeroDivisionError:\n        return \"Cannot divide by zero\"\n\nprint(safe_divide(100, \"0\"))\nprint(safe_divide(100, \"4\"))"
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
        }
      ]
    },
    {
      "id": "py-40",
      "title": "8.8 String Formatting — Advanced Display",
      "module": "Intermediate",
      "objective": "Format numbers, alignment, and percentages for reports.",
      "why": "Financial reports need ₦1,250,000.00 not 1250000. Formatting builds trust.",
      "explanation": "f\"{value:,.2f}\", alignment <code>{name:>10}</code>, percent <code>{x:.1%}</code>",
      "codeExample": "sales = 1250000.5\nprint(f\"Sales: ₦{sales:,.2f}\")\nprint(f\"{'Item':<12}{'Qty':>6}\")\nprint(f\"{'Rice':<12}{10:>6}\")\nrate = 0.155\nprint(f\"Growth: {rate:.1%}\")",
      "exercises": [
        {
          "title": "Table row",
          "instruction": "Print product \"Sugar\" left-aligned 15 chars and price 4500 as currency with 2 decimals.",
          "solution": "product = \"Sugar\"\nprice = 4500\nprint(f\"{product:<15}₦{price:,.2f}\")"
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
        }
      ]
    },
    {
      "id": "py-41",
      "title": "8.9 None — The Absence of a Value",
      "module": "Intermediate",
      "objective": "Use None correctly and check with is None.",
      "why": "Optional middle name, missing email, or “not yet calculated” — represent “nothing” with None.",
      "explanation": "None is a special singleton. Check with <code>is None</code> / <code>is not None</code> (not ==).",
      "codeExample": "email = None\nif email is None:\n    print(\"No email on file — ask customer\")\nelse:\n    print(\"Send to\", email)\n\ndef find_user(users, name):\n    for u in users:\n        if u == name:\n            return u\n    return None  # not found\n\nprint(find_user([\"Ada\", \"Bola\"], \"Chidi\"))",
      "exercises": [
        {
          "title": "Default city",
          "instruction": "city = None. If None, use \"Lagos\". Print the city to use.",
          "solution": "city = None\ndisplay = \"Lagos\" if city is None else city\nprint(display)"
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
        }
      ]
    },
    {
      "id": "py-42",
      "title": "8.10 User Input — input() for Interactive Programs",
      "module": "Intermediate",
      "objective": "Read user input and convert types safely.",
      "why": "CLI tools, quizzes, and simple POS menus all need input from humans.",
      "explanation": "input(prompt) always returns a string. Cast with int/float. Validate with try/except.",
      "codeExample": "# Interactive example (works in real terminal):\n# name = input(\"Your name: \")\n# age = int(input(\"Your age: \"))\n\n# Simulated for lesson:\nname = \"Guest\"\nage = 21\nprint(f\"Welcome {name}, age {age}\")",
      "exercises": [
        {
          "title": "Simulated checkout",
          "instruction": "Pretend inputs: item=\"Soap\", price_text=\"350\", qty_text=\"2\". Compute and print total.",
          "solution": "item = \"Soap\"\nprice = float(\"350\")\nqty = int(\"2\")\nprint(f\"{qty} x {item} = ₦{price * qty}\")"
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
        }
      ]
    },
    {
      "id": "py-43",
      "title": "8.11 VirtualEnv — Isolated Project Environments",
      "module": "Intermediate",
      "objective": "Create virtual environments so project packages do not clash.",
      "why": "Project A needs Django 4, Project B needs Django 5. Virtual envs keep them separate — like separate kitchens.",
      "explanation": "python3 -m venv .venv<br>\n  source .venv/bin/activate  (Windows: .venv\\Scripts\\activate)<br>\n  pip install ...<br>\n  deactivate",
      "codeExample": "# Commands (shell, not Python):\n# python3 -m venv .venv\n# source .venv/bin/activate\n# python -m pip install requests\n# deactivate\n\nprint(\"Rule: one virtual environment per project\")\nprint(\"Commit requirements.txt, not the whole .venv folder\")",
      "exercises": [
        {
          "title": "Remember the steps",
          "instruction": "Print a numbered checklist of: create venv, activate, install packages, freeze requirements.",
          "solution": "steps = [\n    \"1. python3 -m venv .venv\",\n    \"2. source .venv/bin/activate\",\n    \"3. pip install <packages>\",\n    \"4. pip freeze > requirements.txt\",\n]\nfor s in steps:\n    print(s)"
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
        }
      ]
    },
    {
      "id": "py-44",
      "title": "9.1 OOP Intro — Modeling the Real World",
      "module": "OOP",
      "objective": "Explain objects, classes, and why OOP helps large programs.",
      "why": "A bank app has Accounts, Customers, Transactions — OOP models real things as objects with data + behavior.",
      "explanation": "<strong>Class</strong> = blueprint. <strong>Object</strong> = instance built from the blueprint.<br>\n  Benefits: organization, reuse (inheritance), encapsulation.",
      "codeExample": "# Blueprint\nclass Dog:\n    pass\n\n# Objects (instances)\na = Dog()\nb = Dog()\nprint(type(a))",
      "exercises": [
        {
          "title": "Name three objects",
          "instruction": "Print 3 real-world things you could model as classes for a school system.",
          "solution": "print(\"Student\")\nprint(\"Course\")\nprint(\"Teacher\")\n# or Classroom, Grade, Attendance"
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
        }
      ]
    },
    {
      "id": "py-45",
      "title": "9.2 Classes & Objects — Build Your First Class",
      "module": "OOP",
      "objective": "Define a class and create objects with attributes.",
      "why": "A Product class can represent every item in your inventory with the same structure.",
      "explanation": "class Name: body. Attach data as attributes on self.",
      "codeExample": "class Product:\n    pass\n\np = Product()\np.name = \"Peak Milk\"\np.price = 1800\nprint(p.name, p.price)",
      "exercises": [
        {
          "title": "Student object",
          "instruction": "Create a Student class, instance with name and score attributes, print them.",
          "solution": "class Student:\n    pass\n\ns = Student()\ns.name = \"Yusuf\"\ns.score = 77\nprint(s.name, s.score)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-46",
      "title": "9.3 __init__ Method — Constructors",
      "module": "OOP",
      "objective": "Initialize object state with __init__.",
      "why": "When a new bank account opens, it must start with owner name and balance — __init__ sets that up automatically.",
      "explanation": "__init__ runs on object creation. First parameter is always self.",
      "codeExample": "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\nacc = BankAccount(\"Ngozi\", 5000)\nprint(acc.owner, acc.balance)",
      "exercises": [
        {
          "title": "Book class",
          "instruction": "Class Book with __init__(self, title, author). Create one book and print title by author.",
          "solution": "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n\nb = Book(\"Things Fall Apart\", \"Chinua Achebe\")\nprint(f\"{b.title} by {b.author}\")"
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
        }
      ]
    },
    {
      "id": "py-47",
      "title": "9.4 self Parameter — The Object Itself",
      "module": "OOP",
      "objective": "Understand why methods take self and how it works.",
      "why": "self is “this account” or “this product” — the specific object you are working with.",
      "explanation": "self is the instance. You do not pass it manually: Python injects it.",
      "codeExample": "class Counter:\n    def __init__(self):\n        self.value = 0\n    def bump(self):\n        self.value += 1\n\nc = Counter()\nc.bump()\nc.bump()\nprint(c.value)  # 2",
      "exercises": [
        {
          "title": "Greeter",
          "instruction": "Class Greeter with __init__(self, name) and method hello(self) printing Hello, name.",
          "solution": "class Greeter:\n    def __init__(self, name):\n        self.name = name\n    def hello(self):\n        print(f\"Hello, {self.name}\")\n\nGreeter(\"Amaka\").hello()"
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
        }
      ]
    },
    {
      "id": "py-48",
      "title": "9.5 Class Properties — Attributes & Encapsulation Basics",
      "module": "OOP",
      "objective": "Use instance attributes and simple property-style access.",
      "why": "Hide internal details (like PIN hash) while exposing safe data (account name).",
      "explanation": "Attributes store state. Convention: <code>_internal</code> means “please don’t touch”. properties can add getters/setters.",
      "codeExample": "class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self._salary = salary  # \"protected\" by convention\n\n    @property\n    def salary(self):\n        return self._salary\n\ne = Employee(\"Tola\", 150000)\nprint(e.name, e.salary)",
      "exercises": [
        {
          "title": "Temperature",
          "instruction": "Class with _celsius. Property celsius returns it. Create Temp(36.5) and print.",
          "solution": "class Temp:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    @property\n    def celsius(self):\n        return self._celsius\n\nprint(Temp(36.5).celsius)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-49",
      "title": "9.6 Class Methods — Behavior on Objects",
      "module": "OOP",
      "objective": "Write instance methods that use and update object state.",
      "why": "deposit() and withdraw() on a bank account are methods — actions the object can perform.",
      "explanation": "def method(self, ...): updates self...",
      "codeExample": "class Cart:\n    def __init__(self):\n        self.items = []\n    def add(self, name, price):\n        self.items.append({\"name\": name, \"price\": price})\n    def total(self):\n        return sum(i[\"price\"] for i in self.items)\n\nc = Cart()\nc.add(\"Bread\", 800)\nc.add(\"Eggs\", 1500)\nprint(c.total())",
      "exercises": [
        {
          "title": "Wallet",
          "instruction": "Class Wallet with balance, methods credit(amount) and debit(amount). Demo both.",
          "solution": "class Wallet:\n    def __init__(self, balance=0):\n        self.balance = balance\n    def credit(self, amount):\n        self.balance += amount\n    def debit(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n        else:\n            print(\"Insufficient\")\n\nw = Wallet(1000)\nw.credit(500)\nw.debit(200)\nprint(w.balance)  # 1300"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-50",
      "title": "9.7 Inheritance — Reuse Through Hierarchy",
      "module": "OOP",
      "objective": "Create child classes that extend parent classes.",
      "why": "SavingsAccount and CurrentAccount both inherit from Account — share code, specialize behavior.",
      "explanation": "class Child(Parent): ... use super().__init__()",
      "codeExample": "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n    def deposit(self, amount):\n        self.balance += amount\n\nclass SavingsAccount(Account):\n    def add_interest(self, rate=0.05):\n        self.balance += self.balance * rate\n\ns = SavingsAccount(\"Uche\", 10000)\ns.deposit(2000)\ns.add_interest()\nprint(s.balance)",
      "exercises": [
        {
          "title": "Animal → Dog",
          "instruction": "Animal has speak() returning \"...\". Dog inherits and overrides speak to \"Woof\". Print Dog().speak().",
          "solution": "class Animal:\n    def speak(self):\n        return \"...\"\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof\"\nprint(Dog().speak())"
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
        }
      ]
    },
    {
      "id": "py-51",
      "title": "9.8 Polymorphism — One Interface, Many Forms",
      "module": "OOP",
      "objective": "Call the same method on different objects to get type-specific behavior.",
      "why": "notify(user) might SMS, email, or push — same call shape, different classes.",
      "explanation": "Different classes implement the same method name; code using them does not care which type.",
      "codeExample": "class SMS:\n    def send(self, msg):\n        print(\"SMS:\", msg)\nclass Email:\n    def send(self, msg):\n        print(\"Email:\", msg)\n\ndef notify(channel, msg):\n    channel.send(msg)\n\nnotify(SMS(), \"OTP 4455\")\nnotify(Email(), \"Welcome!\")",
      "exercises": [
        {
          "title": "Shapes area",
          "instruction": "Classes Square(side) and Circle(r) both have area(). Print both areas. (use 3.14 for pi)",
          "solution": "class Square:\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        return self.side ** 2\nclass Circle:\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return 3.14 * self.r ** 2\nfor shape in (Square(4), Circle(3)):\n    print(shape.area())"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-52",
      "title": "9.9 Encapsulation — Protect Internal State",
      "module": "OOP",
      "objective": "Hide internal details and expose safe methods.",
      "why": "Customers should not set balance = 1_000_000 directly — only deposit/withdraw with rules.",
      "explanation": "Use _protected / __private naming and public methods for controlled access.",
      "codeExample": "class Vault:\n    def __init__(self):\n        self.__pin = \"1234\"\n        self.__balance = 0\n    def deposit(self, amount, pin):\n        if pin == self.__pin and amount > 0:\n            self.__balance += amount\n    def get_balance(self, pin):\n        if pin == self.__pin:\n            return self.__balance\n        return None\n\nv = Vault()\nv.deposit(5000, \"1234\")\nprint(v.get_balance(\"1234\"))",
      "exercises": [
        {
          "title": "Why encapsulation?",
          "instruction": "Print two sentences: one risk of public balance attribute, one benefit of deposit() method.",
          "solution": "print(\"Risk: anyone could set balance to any number\")\nprint(\"Benefit: deposit() can validate amount and log the transaction\")"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-53",
      "title": "9.10 Inner Classes — Classes Inside Classes",
      "module": "OOP",
      "objective": "Define nested classes when a helper type belongs only to one outer class.",
      "why": "A Car might have an Engine class only meaningful inside Car — nested classes keep code tidy.",
      "explanation": "class Outer: class Inner: ...",
      "codeExample": "class University:\n    def __init__(self, name):\n        self.name = name\n    class Department:\n        def __init__(self, title):\n            self.title = title\n\nuni = University(\"Unilag\")\ncs = University.Department(\"Computer Science\")\nprint(uni.name, cs.title)",
      "exercises": [
        {
          "title": "House.Room",
          "instruction": "Create House with nested Room(name). Instantiate a Kitchen room and print its name.",
          "solution": "class House:\n    class Room:\n        def __init__(self, name):\n            self.name = name\nkitchen = House.Room(\"Kitchen\")\nprint(kitchen.name)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-54",
      "title": "10.1 File Handling Intro",
      "module": "File Handling",
      "objective": "Understand file modes and the with statement.",
      "why": "Sales logs, customer exports, and config files live on disk — programs must read/write them safely.",
      "explanation": "Modes: r read, w write (overwrite), a append, x create, b binary, + update.<br>\n  Prefer <code>with open(...) as f:</code> so files always close.",
      "codeExample": "# Pattern\n# with open(\"sales.txt\", \"w\") as f:\n#     f.write(\"day1,10000\\n\")\n\nprint(\"Always prefer with-open to auto-close files\")\nprint(\"Modes: r, w, a, x, b, +\")",
      "exercises": [
        {
          "title": "Mode quiz in code",
          "instruction": "Print which mode you use to add lines to an existing log without erasing it.",
          "solution": "print(\"a  # append mode\")"
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
        }
      ]
    },
    {
      "id": "py-55",
      "title": "10.2 Read Files — load Data from Disk",
      "module": "File Handling",
      "objective": "Read whole files, lines, and iterate efficiently.",
      "why": "Import yesterday’s CSV sales export and analyze it.",
      "explanation": "read(), readline(), readlines(), or for line in f:",
      "codeExample": "# with open(\"note.txt\", \"r\") as f:\n#     content = f.read()\n# with open(\"note.txt\") as f:\n#     for line in f:\n#         print(line.strip())\n\n# Demo without real file:\nsample = \"Rice,10\\nBeans,5\\n\"\nfor line in sample.splitlines():\n    item, qty = line.split(\",\")\n    print(item, \"→\", qty)",
      "exercises": [
        {
          "title": "Parse sample log",
          "instruction": "data = \"Mon,100\\nTue,150\". Split lines and print each day total.",
          "solution": "data = \"Mon,100\\nTue,150\"\nfor line in data.splitlines():\n    day, total = line.split(\",\")\n    print(day, total)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-56",
      "title": "10.3 Write & Create Files",
      "module": "File Handling",
      "objective": "Create files and write text reports.",
      "why": "Generate a daily sales report file you can email or backup.",
      "explanation": "write() and writelines(). w creates/overwrites; a appends.",
      "codeExample": "# with open(\"report.txt\", \"w\") as f:\n#     f.write(\"Daily Sales Report\\n\")\n#     f.write(\"Total: 45000\\n\")\n\nlines = [\"Daily Sales Report\\n\", \"Total: 45000\\n\"]\nprint(\"\".join(lines))\nprint(\"(In real code, write these lines into report.txt)\")",
      "exercises": [
        {
          "title": "Build report string",
          "instruction": "Create a multi-line report for shop \"GoodFood\" with total 88000 and print it (simulate file content).",
          "solution": "report = \"\"\"Shop: GoodFood\nTotal sales: ₦88000\nStatus: CLOSED OUT\n\"\"\"\nprint(report)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-57",
      "title": "10.4 Delete Files — os.remove",
      "module": "File Handling",
      "objective": "Delete files safely with os and check existence first.",
      "why": "Clean up temp exports so disks do not fill with stale reports.",
      "explanation": "import os<br>\n  os.path.exists(path)<br>\n  os.remove(path)",
      "codeExample": "import os\npath = \"temp_report.txt\"\n# if os.path.exists(path):\n#     os.remove(path)\n#     print(\"Deleted\")\n# else:\n#     print(\"Nothing to delete\")\nprint(\"Always check exists() before remove()\")",
      "exercises": [
        {
          "title": "Safe delete helper",
          "instruction": "Write a function safe_delete(path) that prints Deleted or Missing (use os.path.exists logic; you may simulate with a variable exists=False).",
          "solution": "def safe_delete(path, exists=False):\n    if exists:\n        print(\"Deleted\", path)\n    else:\n        print(\"Missing\", path)\n\nsafe_delete(\"old.csv\", exists=False)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-58",
      "title": "11.1 NumPy — Fast Numerical Arrays",
      "module": "Data Libraries",
      "objective": "Create NumPy arrays and compute basic statistics.",
      "why": "Analyze thousands of sensor readings or prices in milliseconds — NumPy is the foundation of data science.",
      "explanation": "import numpy as np<br>\n  Arrays are faster than lists for numeric work. Vectorized ops apply to whole arrays.",
      "codeExample": "import numpy as np\nsales = np.array([12000, 15000, 9000, 18000, 11000])\nprint(sales.mean())\nprint(sales.max(), sales.min())\nprint(sales * 1.1)  # 10% boost all days",
      "exercises": [
        {
          "title": "Weekly average",
          "instruction": "np.array of 7 daily customers counts. Print mean and sum.",
          "solution": "import numpy as np\ncustomers = np.array([40, 55, 38, 60, 72, 90, 85])\nprint(\"Average:\", customers.mean())\nprint(\"Total:\", customers.sum())"
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
        }
      ]
    },
    {
      "id": "py-59",
      "title": "11.2 Pandas — Tables for Real Data",
      "module": "Data Libraries",
      "objective": "Use DataFrames to load, filter, and summarize tabular data.",
      "why": "Excel sales sheets become superpowered with Pandas — filter Lagos rows, group by product, export CSV.",
      "explanation": "import pandas as pd<br>\n  DataFrame = table. Series = column.",
      "codeExample": "import pandas as pd\ndf = pd.DataFrame({\n    \"product\": [\"Rice\", \"Beans\", \"Rice\"],\n    \"qty\": [10, 5, 7],\n    \"city\": [\"Lagos\", \"Abuja\", \"Lagos\"]\n})\nprint(df)\nprint(df[df[\"city\"] == \"Lagos\"])\nprint(df.groupby(\"product\")[\"qty\"].sum())",
      "exercises": [
        {
          "title": "Filter high qty",
          "instruction": "From a small DataFrame of products/qty, print rows where qty >= 10.",
          "solution": "import pandas as pd\ndf = pd.DataFrame({\"product\": [\"A\", \"B\", \"C\"], \"qty\": [12, 4, 20]})\nprint(df[df[\"qty\"] >= 10])"
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
        }
      ]
    },
    {
      "id": "py-60",
      "title": "11.3 SciPy — Scientific Computing Toolkit",
      "module": "Data Libraries",
      "objective": "Know when to use SciPy for stats, optimization, and signal tools.",
      "why": "Engineers and researchers use SciPy for advanced math on top of NumPy.",
      "explanation": "import scipy<br>\n  Subpackages: scipy.stats, optimize, integrate, signal, ...",
      "codeExample": "from scipy import stats\ndata = [12, 15, 14, 10, 18, 15, 13]\nprint(\"Describe:\", stats.describe(data))\nprint(\"Mode:\", stats.mode(data, keepdims=True))",
      "exercises": [
        {
          "title": "Quick stat",
          "instruction": "Using scipy.stats or pure Python, print mean of [2,4,6,8].",
          "solution": "import numpy as np\nprint(np.mean([2, 4, 6, 8]))  # 5.0\n# or from scipy import stats; stats.tmean([2,4,6,8])"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-61",
      "title": "11.4 Django Intro — Python Web Framework",
      "module": "Data Libraries",
      "objective": "Understand Django’s role for building secure web apps quickly.",
      "why": "Need a full website with login, admin, and database? Django is a batteries-included web framework.",
      "explanation": "Django uses MVT (Model-View-Template). Famous for admin panel and ORM.<br>\n  Install: pip install django. Start: django-admin startproject mysite",
      "codeExample": "# Shell workflow:\n# pip install django\n# django-admin startproject myshop\n# cd myshop\n# python manage.py runserver\n\nprint(\"Django = models (DB) + views (logic) + templates (HTML)\")\nprint(\"Great for: portals, e-commerce, dashboards\")",
      "exercises": [
        {
          "title": "Name three Django use cases",
          "instruction": "Print 3 web apps you could build with Django for a local business.",
          "solution": "print(\"1. Online store with orders\")\nprint(\"2. School results portal\")\nprint(\"3. Clinic appointment booking\")"
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
        }
      ]
    },
    {
      "id": "py-62",
      "title": "12.1 Matplotlib Intro",
      "module": "Matplotlib",
      "objective": "Know what Matplotlib is and when to use it.",
      "why": "Charts tell stories numbers hide — trends in sales at a glance.",
      "explanation": "Matplotlib is the classic Python plotting library. Works with NumPy/Pandas.",
      "codeExample": "import matplotlib.pyplot as plt\nprint(\"plt.plot / scatter / bar / hist / pie\")\nprint(\"plt.show() displays the figure\")",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nprint(\"plt.plot / scatter / bar / hist / pie\")\nprint(\"plt.show() displays the figure\")"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-63",
      "title": "12.2 Get Started — First Plot",
      "module": "Matplotlib",
      "objective": "Create and display a simple line plot.",
      "why": "Managers understand a line chart faster than a spreadsheet dump.",
      "explanation": "Use pyplot API: plot x/y, labels, show.",
      "codeExample": "import matplotlib.pyplot as plt\ndays = [1, 2, 3, 4, 5]\nsales = [20, 35, 30, 50, 45]\nplt.plot(days, sales)\nplt.title(\"Sales This Week\")\nplt.xlabel(\"Day\")\nplt.ylabel(\"Units\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\ndays = [1, 2, 3, 4, 5]\nsales = [20, 35, 30, 50, 45]\nplt.plot(days, sales)\nplt.title(\"Sales This Week\")\nplt.xlabel(\"Day\")\nplt.ylabel(\"Units\")\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-64",
      "title": "12.3 Pyplot Basics",
      "module": "Matplotlib",
      "objective": "Use plt state-machine style plotting.",
      "why": "Pyplot is the quick interface for everyday charts.",
      "explanation": "plt.figure, plot, title, legend, grid, show.",
      "codeExample": "import matplotlib.pyplot as plt\nplt.figure(figsize=(6, 4))\nplt.plot([1, 2, 3], [3, 1, 4], label=\"A\")\nplt.legend()\nplt.grid(True)\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.figure(figsize=(6, 4))\nplt.plot([1, 2, 3], [3, 1, 4], label=\"A\")\nplt.legend()\nplt.grid(True)\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-65",
      "title": "12.4 Plotting Multiple Lines",
      "module": "Matplotlib",
      "objective": "Plot multiple datasets together.",
      "why": "Compare this month vs last month on one chart.",
      "explanation": "Call plot() several times before show().",
      "codeExample": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4]\nplt.plot(x, [10, 12, 11, 15], label=\"June\")\nplt.plot(x, [9, 10, 13, 14], label=\"July\")\nplt.legend()\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4]\nplt.plot(x, [10, 12, 11, 15], label=\"June\")\nplt.plot(x, [9, 10, 13, 14], label=\"July\")\nplt.legend()\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-66",
      "title": "12.5 Markers",
      "module": "Matplotlib",
      "objective": "Customize point markers on plots.",
      "why": "Highlight key points like peak sales days.",
      "explanation": "marker='o', '*', 's', etc.",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 5, 3], marker=\"o\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 5, 3], marker=\"o\")\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-67",
      "title": "12.6 Line Styles",
      "module": "Matplotlib",
      "objective": "Change line style and width.",
      "why": "Dashed vs solid lines distinguish forecast vs actual.",
      "explanation": "linestyle='--', linewidth=2, color='green'",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [1, 4, 2], linestyle=\"--\", linewidth=2, color=\"green\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [1, 4, 2], linestyle=\"--\", linewidth=2, color=\"green\")\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-68",
      "title": "12.7 Labels & Titles",
      "module": "Matplotlib",
      "objective": "Add title, xlabel, ylabel, legend.",
      "why": "Unlabeled charts confuse stakeholders — always name axes.",
      "explanation": "Clear labels = professional reports.",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [3, 5, 4])\nplt.title(\"Weekly Revenue\")\nplt.xlabel(\"Week\")\nplt.ylabel(\"₦ thousands\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [3, 5, 4])\nplt.title(\"Weekly Revenue\")\nplt.xlabel(\"Week\")\nplt.ylabel(\"₦ thousands\")\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-69",
      "title": "12.8 Grid",
      "module": "Matplotlib",
      "objective": "Toggle and style grid lines.",
      "why": "Grids help people read values off a chart accurately.",
      "explanation": "plt.grid(True)",
      "codeExample": "import matplotlib.pyplot as plt\nplt.plot([0, 1, 2], [0, 1, 4])\nplt.grid(True, linestyle=\":\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.plot([0, 1, 2], [0, 1, 4])\nplt.grid(True, linestyle=\":\")\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-70",
      "title": "12.9 Subplots",
      "module": "Matplotlib",
      "objective": "Create multi-panel figures with subplot.",
      "why": "Show sales and expenses side by side in one figure.",
      "explanation": "plt.subplot(rows, cols, index)",
      "codeExample": "import matplotlib.pyplot as plt\nplt.subplot(1, 2, 1)\nplt.plot([1, 2, 3], [3, 2, 5])\nplt.title(\"Sales\")\nplt.subplot(1, 2, 2)\nplt.bar([1, 2, 3], [2, 4, 3])\nplt.title(\"Expenses\")\nplt.tight_layout()\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nplt.subplot(1, 2, 1)\nplt.plot([1, 2, 3], [3, 2, 5])\nplt.title(\"Sales\")\nplt.subplot(1, 2, 2)\nplt.bar([1, 2, 3], [2, 4, 3])\nplt.title(\"Expenses\")\nplt.tight_layout()\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-71",
      "title": "12.10 Scatter Plots",
      "module": "Matplotlib",
      "objective": "Use scatter for correlation-style views.",
      "why": "Spot relationship between ad spend and customers.",
      "explanation": "plt.scatter(x, y)",
      "codeExample": "import matplotlib.pyplot as plt\nad = [1, 2, 3, 4, 5]\ncustomers = [20, 28, 30, 45, 50]\nplt.scatter(ad, customers)\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nad = [1, 2, 3, 4, 5]\ncustomers = [20, 28, 30, 45, 50]\nplt.scatter(ad, customers)\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-72",
      "title": "12.11 Bar Charts",
      "module": "Matplotlib",
      "objective": "Create vertical bar charts.",
      "why": "Compare product categories at a glance.",
      "explanation": "plt.bar(categories, values)",
      "codeExample": "import matplotlib.pyplot as plt\nproducts = [\"Rice\", \"Beans\", \"Oil\"]\nqty = [50, 30, 20]\nplt.bar(products, qty, color=\"teal\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nproducts = [\"Rice\", \"Beans\", \"Oil\"]\nqty = [50, 30, 20]\nplt.bar(products, qty, color=\"teal\")\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-73",
      "title": "12.12 Histograms",
      "module": "Matplotlib",
      "objective": "Plot frequency distributions with hist.",
      "why": "See how exam scores or ages are distributed.",
      "explanation": "plt.hist(data, bins=n)",
      "codeExample": "import matplotlib.pyplot as plt\nscores = [55, 60, 61, 70, 72, 72, 75, 80, 90, 95]\nplt.hist(scores, bins=5)\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nscores = [55, 60, 61, 70, 72, 72, 75, 80, 90, 95]\nplt.hist(scores, bins=5)\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-74",
      "title": "12.13 Pie Charts",
      "module": "Matplotlib",
      "objective": "Create pie charts with labels and autopct.",
      "why": "Show market share or budget split.",
      "explanation": "plt.pie(sizes, labels=..., autopct=\"%1.1f%%\")",
      "codeExample": "import matplotlib.pyplot as plt\nlabels = [\"Rent\", \"Salaries\", \"Ads\", \"Other\"]\nsizes = [40, 35, 15, 10]\nplt.pie(sizes, labels=labels, autopct=\"%1.1f%%\")\n# plt.show()",
      "exercises": [
        {
          "title": "Try it",
          "instruction": "Reproduce the idea of the code example with your own 4 data points and a clear title.",
          "solution": "import matplotlib.pyplot as plt\nlabels = [\"Rent\", \"Salaries\", \"Ads\", \"Other\"]\nsizes = [40, 35, 15, 10]\nplt.pie(sizes, labels=labels, autopct=\"%1.1f%%\")\n# plt.show()  # uncomment locally"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-75",
      "title": "13.1 ML Getting Started",
      "module": "Machine Learning",
      "objective": "Define ML, supervised vs unsupervised, and the workflow.",
      "why": "Predict demand, detect fraud, recommend products — ML learns patterns from data.",
      "explanation": "Workflow: collect data → clean → train → evaluate → deploy. Libraries: scikit-learn, pandas, numpy.",
      "codeExample": "print(\"Supervised: labeled data (price prediction)\")\nprint(\"Unsupervised: find groups (customer segments)\")\nprint(\"Pipeline: data → model → metrics → improve\")",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "print(\"Supervised: labeled data (price prediction)\")\nprint(\"Unsupervised: find groups (customer segments)\")\nprint(\"Pipeline: data → model → metrics → improve\")"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-76",
      "title": "13.2 Mean, Median, Mode",
      "module": "Machine Learning",
      "objective": "Compute central tendency measures.",
      "why": "Average salary vs typical salary — different stats tell different stories.",
      "explanation": "mean average, median middle, mode most frequent.",
      "codeExample": "import numpy as np\nfrom statistics import mode\nx = [3, 5, 5, 7, 9]\nprint(np.mean(x), np.median(x), mode(x))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\nfrom statistics import mode\nx = [3, 5, 5, 7, 9]\nprint(np.mean(x), np.median(x), mode(x))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-77",
      "title": "13.3 Standard Deviation",
      "module": "Machine Learning",
      "objective": "Measure spread with standard deviation.",
      "why": "How spread out are delivery times? Std dev answers.",
      "explanation": "Low std → consistent. High std → volatile.",
      "codeExample": "import numpy as np\ntimes = [30, 32, 31, 90, 29]\nprint(np.std(times))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\ntimes = [30, 32, 31, 90, 29]\nprint(np.std(times))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-78",
      "title": "13.4 Percentile",
      "module": "Machine Learning",
      "objective": "Compute percentiles with NumPy.",
      "why": "90th percentile delivery time is your worst-case promise to customers.",
      "explanation": "np.percentile(data, 75)",
      "codeExample": "import numpy as np\ndata = [10, 20, 30, 40, 50, 60, 70]\nprint(np.percentile(data, 90))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\ndata = [10, 20, 30, 40, 50, 60, 70]\nprint(np.percentile(data, 90))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-79",
      "title": "13.5 Data Distribution",
      "module": "Machine Learning",
      "objective": "Describe uniform vs skewed distributions conceptually.",
      "why": "Understanding how data is spread guides model choice.",
      "explanation": "Visualize with histograms; summarize with describe().",
      "codeExample": "import numpy as np\nuniform = np.random.uniform(0, 1, 5)\nprint(uniform)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\nuniform = np.random.uniform(0, 1, 5)\nprint(uniform)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-80",
      "title": "13.6 Normal Distribution",
      "module": "Machine Learning",
      "objective": "Generate and recognize normal data.",
      "why": "Heights, exam scores often form a bell curve.",
      "explanation": "np.random.normal(mean, std, size)",
      "codeExample": "import numpy as np\nsample = np.random.normal(100, 15, 5)\nprint(sample)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import numpy as np\nsample = np.random.normal(100, 15, 5)\nprint(sample)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-81",
      "title": "13.7 Scatter Plot for ML",
      "module": "Machine Learning",
      "objective": "Plot feature vs target as scatter.",
      "why": "Visualize relationship before fitting a model.",
      "explanation": "Patterns suggest linear vs nonlinear models.",
      "codeExample": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 5, 4, 5]\nplt.scatter(x, y)\n# plt.show()",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import matplotlib.pyplot as plt\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 5, 4, 5]\nplt.scatter(x, y)\n# plt.show()"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-82",
      "title": "13.8 Linear Regression",
      "module": "Machine Learning",
      "objective": "Fit a simple linear regression with scikit-learn.",
      "why": "Predict house price from size — classic straight-line model.",
      "explanation": "y ≈ mx + b. Use LinearRegression().fit",
      "codeExample": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([2, 4, 6, 8])\nmodel = LinearRegression().fit(X, y)\nprint(model.predict([[5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([2, 4, 6, 8])\nmodel = LinearRegression().fit(X, y)\nprint(model.predict([[5]]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-83",
      "title": "13.9 Polynomial Regression",
      "module": "Machine Learning",
      "objective": "Use polynomial features for curved relationships.",
      "why": "When growth curves bend, straight lines underfit.",
      "explanation": "PolynomialFeatures + LinearRegression pipeline.",
      "codeExample": "from sklearn.preprocessing import PolynomialFeatures\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([1, 4, 9, 16])\nZ = PolynomialFeatures(2).fit_transform(X)\nmodel = LinearRegression().fit(Z, y)\nprint(model.coef_)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.preprocessing import PolynomialFeatures\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([1, 4, 9, 16])\nZ = PolynomialFeatures(2).fit_transform(X)\nmodel = LinearRegression().fit(Z, y)\nprint(model.coef_)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-84",
      "title": "13.10 Multiple Regression",
      "module": "Machine Learning",
      "objective": "Regress with multiple input features.",
      "why": "Predict sales from ads + price + season together.",
      "explanation": "X has several columns; same LinearRegression API.",
      "codeExample": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1, 10], [2, 12], [3, 14], [4, 15]])\ny = np.array([20, 25, 30, 32])\nprint(LinearRegression().fit(X, y).predict([[5, 16]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1, 10], [2, 12], [3, 14], [4, 15]])\ny = np.array([20, 25, 30, 32])\nprint(LinearRegression().fit(X, y).predict([[5, 16]]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-85",
      "title": "13.11 Feature Scaling",
      "module": "Machine Learning",
      "objective": "Apply StandardScaler or MinMaxScaler.",
      "why": "Income and age are different scales — scaling keeps models fair.",
      "explanation": "Fit on train data only, then transform.",
      "codeExample": "from sklearn.preprocessing import StandardScaler\nimport numpy as np\nX = np.array([[1., 1000.], [2., 2000.], [3., 3000.]])\nprint(StandardScaler().fit_transform(X))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.preprocessing import StandardScaler\nimport numpy as np\nX = np.array([[1., 1000.], [2., 2000.], [3., 3000.]])\nprint(StandardScaler().fit_transform(X))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-86",
      "title": "13.12 Train / Test Split",
      "module": "Machine Learning",
      "objective": "Split data to evaluate generalization.",
      "why": "Never grade a student on questions they memorized — hold out a test set.",
      "explanation": "train_test_split from sklearn.model_selection",
      "codeExample": "from sklearn.model_selection import train_test_split\nimport numpy as np\nX = np.arange(20).reshape(10, 2)\ny = np.arange(10)\nXtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=42)\nprint(len(Xtr), len(Xte))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.model_selection import train_test_split\nimport numpy as np\nX = np.arange(20).reshape(10, 2)\ny = np.arange(10)\nXtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=42)\nprint(len(Xtr), len(Xte))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-87",
      "title": "13.13 Decision Tree",
      "module": "Machine Learning",
      "objective": "Train a DecisionTreeClassifier on simple data.",
      "why": "Loan yes/no rules that humans can inspect.",
      "explanation": "Trees split features to predict labels.",
      "codeExample": "from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nclf = DecisionTreeClassifier().fit(X, y)\nprint(clf.predict([[1.5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nclf = DecisionTreeClassifier().fit(X, y)\nprint(clf.predict([[1.5]]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-88",
      "title": "13.14 Confusion Matrix",
      "module": "Machine Learning",
      "objective": "Evaluate classification with a confusion matrix.",
      "why": "How many fraud cases did we catch vs miss?",
      "explanation": "TP, FP, TN, FN — sklearn.metrics.confusion_matrix",
      "codeExample": "from sklearn.metrics import confusion_matrix\ny_true = [1, 0, 1, 1, 0]\ny_pred = [1, 0, 0, 1, 0]\nprint(confusion_matrix(y_true, y_pred))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.metrics import confusion_matrix\ny_true = [1, 0, 1, 1, 0]\ny_pred = [1, 0, 0, 1, 0]\nprint(confusion_matrix(y_true, y_pred))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-89",
      "title": "13.15 Hierarchical Clustering",
      "module": "Machine Learning",
      "objective": "Introduce agglomerative clustering concept.",
      "why": "Group similar customers without pre-labeled segments.",
      "explanation": "Unsupervised: builds a tree of clusters.",
      "codeExample": "from sklearn.cluster import AgglomerativeClustering\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(AgglomerativeClustering(n_clusters=2).fit_predict(X))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.cluster import AgglomerativeClustering\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(AgglomerativeClustering(n_clusters=2).fit_predict(X))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-90",
      "title": "13.16 Logistic Regression",
      "module": "Machine Learning",
      "objective": "Use LogisticRegression for classification.",
      "why": "Predict yes/no outcomes like churn or pass/fail.",
      "explanation": "Outputs class probabilities despite the name “regression”.",
      "codeExample": "from sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([0, 0, 1, 1])\nprint(LogisticRegression().fit(X, y).predict([[3.5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[1], [2], [3], [4]])\ny = np.array([0, 0, 1, 1])\nprint(LogisticRegression().fit(X, y).predict([[3.5]]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-91",
      "title": "13.17 Grid Search",
      "module": "Machine Learning",
      "objective": "Use GridSearchCV to tune models.",
      "why": "Systematically try hyperparameters to improve a model.",
      "explanation": "Define param grid + cross-validation.",
      "codeExample": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\ngrid = GridSearchCV(DecisionTreeClassifier(), {\"max_depth\": [1, 2, 3]}, cv=2)\ngrid.fit(X, y)\nprint(grid.best_params_)",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.model_selection import GridSearchCV\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\ngrid = GridSearchCV(DecisionTreeClassifier(), {\"max_depth\": [1, 2, 3]}, cv=2)\ngrid.fit(X, y)\nprint(grid.best_params_)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-92",
      "title": "13.18 Categorical Data",
      "module": "Machine Learning",
      "objective": "Encode categories with OneHotEncoder or get_dummies.",
      "why": "City names must become numbers before most models train.",
      "explanation": "Never feed raw strings into linear models.",
      "codeExample": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"Lagos\", \"Abuja\", \"Lagos\"]})\nprint(pd.get_dummies(df))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"Lagos\", \"Abuja\", \"Lagos\"]})\nprint(pd.get_dummies(df))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-93",
      "title": "13.19 K-Means Clustering",
      "module": "Machine Learning",
      "objective": "Run KMeans to find clusters.",
      "why": "Split customers into K spending groups automatically.",
      "explanation": "Choose K; algorithm assigns each point a group.",
      "codeExample": "from sklearn.cluster import KMeans\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(KMeans(n_clusters=2, n_init=10).fit_predict(X))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.cluster import KMeans\nimport numpy as np\nX = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])\nprint(KMeans(n_clusters=2, n_init=10).fit_predict(X))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-94",
      "title": "13.20 Bootstrap Aggregation (Bagging)",
      "module": "Machine Learning",
      "objective": "Understand bagging and RandomForest as example.",
      "why": "Many weak models vote — often more stable predictions.",
      "explanation": "Train on random subsets; average votes.",
      "codeExample": "from sklearn.ensemble import BaggingClassifier\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\nclf = BaggingClassifier(DecisionTreeClassifier(), n_estimators=5, random_state=0)\nprint(clf.fit(X, y).predict([[2.5]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.ensemble import BaggingClassifier\nfrom sklearn.tree import DecisionTreeClassifier\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\nclf = BaggingClassifier(DecisionTreeClassifier(), n_estimators=5, random_state=0)\nprint(clf.fit(X, y).predict([[2.5]]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-95",
      "title": "13.21 Cross Validation",
      "module": "Machine Learning",
      "objective": "Use cross_val_score for robust evaluation.",
      "why": "Rotate train/test folds for a more honest score.",
      "explanation": "K-fold CV reduces luck of a single split.",
      "codeExample": "from sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5], [6], [7]])\ny = np.array([0, 0, 0, 0, 1, 1, 1, 1])\nprint(cross_val_score(LogisticRegression(), X, y, cv=2))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import LogisticRegression\nimport numpy as np\nX = np.array([[0], [1], [2], [3], [4], [5], [6], [7]])\ny = np.array([0, 0, 0, 0, 1, 1, 1, 1])\nprint(cross_val_score(LogisticRegression(), X, y, cv=2))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-96",
      "title": "13.22 AUC - ROC Curve",
      "module": "Machine Learning",
      "objective": "Compute ROC AUC score.",
      "why": "Measure ranking quality of a classifier across thresholds.",
      "explanation": "1.0 perfect ranking; 0.5 random.",
      "codeExample": "from sklearn.metrics import roc_auc_score\ny_true = [0, 0, 1, 1]\ny_score = [0.1, 0.4, 0.35, 0.8]\nprint(roc_auc_score(y_true, y_score))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.metrics import roc_auc_score\ny_true = [0, 0, 1, 1]\ny_score = [0.1, 0.4, 0.35, 0.8]\nprint(roc_auc_score(y_true, y_score))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-97",
      "title": "13.23 K-Nearest Neighbors",
      "module": "Machine Learning",
      "objective": "Train a KNN classifier.",
      "why": "Classify a new point by its nearest neighbors’ votes.",
      "explanation": "Simple, distance-based, good baseline.",
      "codeExample": "from sklearn.neighbors import KNeighborsClassifier\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nprint(KNeighborsClassifier(n_neighbors=3).fit(X, y).predict([[1.1]]))",
      "exercises": [
        {
          "title": "Apply the idea",
          "instruction": "In your own words + code, adapt the example to a tiny real scenario (shop, school, or health).",
          "solution": "from sklearn.neighbors import KNeighborsClassifier\nX = [[0], [1], [2], [3]]\ny = [0, 0, 1, 1]\nprint(KNeighborsClassifier(n_neighbors=3).fit(X, y).predict([[1.1]]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-98",
      "title": "14.1 DSA Intro",
      "module": "DSA",
      "objective": "Know why DSA matters and Big-O at a glance.",
      "why": "Apps must stay fast as users grow — data structures & algorithms make that possible.",
      "explanation": "Choose structures for speed/memory tradeoffs. Big-O describes growth of time/space.",
      "codeExample": "print(\"O(1) constant  O(n) linear  O(n log n) sort-like  O(n^2) nested loops\")\nprint(\"Right structure = faster apps at scale\")",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "print(\"O(1) constant  O(n) linear  O(n log n) sort-like  O(n^2) nested loops\")\nprint(\"Right structure = faster apps at scale\")"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-99",
      "title": "14.2 Lists & Arrays in DSA",
      "module": "DSA",
      "objective": "Use list operations with complexity awareness.",
      "why": "Random access to the 1000th order is O(1) with arrays/lists.",
      "explanation": "Index O(1), append amortized O(1), insert front O(n).",
      "codeExample": "orders = [101, 102, 103]\norders.append(104)      # end\norders.insert(0, 100)   # front slower\nprint(orders[2])",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "orders = [101, 102, 103]\norders.append(104)      # end\norders.insert(0, 100)   # front slower\nprint(orders[2])"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-100",
      "title": "14.3 Stacks — LIFO",
      "module": "DSA",
      "objective": "Implement a stack with a list.",
      "why": "Undo buttons and browser back use stacks (last in, first out).",
      "explanation": "push=append, pop=pop(), peek=[-1]",
      "codeExample": "stack = []\nstack.append(\"page1\")\nstack.append(\"page2\")\nprint(stack.pop())  # page2\nprint(stack[-1])    # page1",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "stack = []\nstack.append(\"page1\")\nstack.append(\"page2\")\nprint(stack.pop())  # page2\nprint(stack[-1])    # page1"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-101",
      "title": "14.4 Queues — FIFO",
      "module": "DSA",
      "objective": "Implement a queue with collections.deque.",
      "why": "Print jobs and customer service lines are queues (first in, first out).",
      "explanation": "enqueue right, dequeue left — deque is efficient.",
      "codeExample": "from collections import deque\nq = deque()\nq.append(\"customer A\")\nq.append(\"customer B\")\nprint(q.popleft())  # A first",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "from collections import deque\nq = deque()\nq.append(\"customer A\")\nq.append(\"customer B\")\nprint(q.popleft())  # A first"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-102",
      "title": "14.5 Linked Lists",
      "module": "DSA",
      "objective": "Build a simple singly linked list node.",
      "why": "Insert/delete in the middle without shifting a whole array.",
      "explanation": "Node has value + next pointer.",
      "codeExample": "class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)\ncur = head\nwhile cur:\n    print(cur.value)\n    cur = cur.next",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\nhead = Node(1)\nhead.next = Node(2)\nhead.next.next = Node(3)\ncur = head\nwhile cur:\n    print(cur.value)\n    cur = cur.next"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-103",
      "title": "14.6 Hash Tables — dict",
      "module": "DSA",
      "objective": "Use dict as a hash map for O(1) average lookups.",
      "why": "Instant lookup of customer by phone number.",
      "explanation": "Keys must be hashable (str, int, tuple...).",
      "codeExample": "phonebook = {\"Ada\": \"0803...\", \"Bola\": \"0901...\"}\nprint(phonebook.get(\"Ada\"))\nphonebook[\"Chidi\"] = \"0701...\"",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "phonebook = {\"Ada\": \"0803...\", \"Bola\": \"0901...\"}\nprint(phonebook.get(\"Ada\"))\nphonebook[\"Chidi\"] = \"0701...\""
        }
      ],
      "quiz": []
    },
    {
      "id": "py-104",
      "title": "14.7 Trees Intro",
      "module": "DSA",
      "objective": "Understand root, parent, child, leaf.",
      "why": "Org charts and folder systems are trees.",
      "explanation": "Hierarchical data beyond flat lists.",
      "codeExample": "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.children = []\nroot = TreeNode(\"CEO\")\nroot.children.append(TreeNode(\"CTO\"))\nprint(root.val, [c.val for c in root.children])",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class TreeNode:\n    def __init__(self, val):\n        self.val = val\n        self.children = []\nroot = TreeNode(\"CEO\")\nroot.children.append(TreeNode(\"CTO\"))\nprint(root.val, [c.val for c in root.children])"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-105",
      "title": "14.8 Binary Trees",
      "module": "DSA",
      "objective": "Create a binary tree node with left/right.",
      "why": "Each node has up to two children — foundation for search trees & heaps.",
      "explanation": "Traverse: inorder, preorder, postorder.",
      "codeExample": "class BNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\nroot = BNode(10)\nroot.left = BNode(5)\nroot.right = BNode(15)",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class BNode:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\nroot = BNode(10)\nroot.left = BNode(5)\nroot.right = BNode(15)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-106",
      "title": "14.9 Binary Search Trees",
      "module": "DSA",
      "objective": "Insert into a BST preserving left < node < right.",
      "why": "Keep numbers sorted for fast search like a phone directory.",
      "explanation": "Average search O(log n) if balanced.",
      "codeExample": "class BST:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n    def insert(self, val):\n        if val < self.val:\n            if self.left: self.left.insert(val)\n            else: self.left = BST(val)\n        elif val > self.val:\n            if self.right: self.right.insert(val)\n            else: self.right = BST(val)\nroot = BST(10)\nfor v in [5, 15, 2, 7]:\n    root.insert(v)\nprint(root.left.val, root.right.val)",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "class BST:\n    def __init__(self, val):\n        self.val = val\n        self.left = None\n        self.right = None\n    def insert(self, val):\n        if val < self.val:\n            if self.left: self.left.insert(val)\n            else: self.left = BST(val)\n        elif val > self.val:\n            if self.right: self.right.insert(val)\n            else: self.right = BST(val)\nroot = BST(10)\nfor v in [5, 15, 2, 7]:\n    root.insert(v)\nprint(root.left.val, root.right.val)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-107",
      "title": "14.10 AVL Trees",
      "module": "DSA",
      "objective": "Know why AVL balances and what rotations achieve.",
      "why": "Self-balancing trees keep searches fast even after many inserts.",
      "explanation": "Height difference of children at most 1. Used when you need guaranteed log n.",
      "codeExample": "print(\"AVL = BST + balance factor check + rotations\")\nprint(\"Use case: in-memory indexes needing predictable speed\")",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "print(\"AVL = BST + balance factor check + rotations\")\nprint(\"Use case: in-memory indexes needing predictable speed\")"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-108",
      "title": "14.11 Graphs",
      "module": "DSA",
      "objective": "Represent a graph with an adjacency list.",
      "why": "Maps, social networks, and delivery routes are graphs.",
      "explanation": "Nodes + edges; directed or undirected.",
      "codeExample": "graph = {\n  \"Lagos\": [\"Ibadan\", \"Abeokuta\"],\n  \"Ibadan\": [\"Lagos\", \"Ife\"],\n  \"Abeokuta\": [\"Lagos\"],\n  \"Ife\": [\"Ibadan\"],\n}\nprint(graph[\"Lagos\"])",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "graph = {\n  \"Lagos\": [\"Ibadan\", \"Abeokuta\"],\n  \"Ibadan\": [\"Lagos\", \"Ife\"],\n  \"Abeokuta\": [\"Lagos\"],\n  \"Ife\": [\"Ibadan\"],\n}\nprint(graph[\"Lagos\"])"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-109",
      "title": "14.12 Linear Search",
      "module": "DSA",
      "objective": "Implement linear search.",
      "why": "Scan a list item by item — simple but slow on huge data.",
      "explanation": "O(n) time — fine for small lists.",
      "codeExample": "def linear_search(items, target):\n    for i, x in enumerate(items):\n        if x == target:\n            return i\n    return -1\nprint(linear_search([4, 2, 9, 1], 9))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def linear_search(items, target):\n    for i, x in enumerate(items):\n        if x == target:\n            return i\n    return -1\nprint(linear_search([4, 2, 9, 1], 9))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-110",
      "title": "14.13 Binary Search",
      "module": "DSA",
      "objective": "Binary search on a sorted list.",
      "why": "Guess a number 1–100 in ~7 tries — divide and conquer.",
      "explanation": "O(log n). Data must be sorted.",
      "codeExample": "def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: return mid\n        if arr[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1\nprint(binary_search([1, 3, 5, 7, 9], 7))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: return mid\n        if arr[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1\nprint(binary_search([1, 3, 5, 7, 9], 7))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-111",
      "title": "14.14 Bubble Sort",
      "module": "DSA",
      "objective": "Implement bubble sort for learning (not production).",
      "why": "See how sorting works by swapping neighbors.",
      "explanation": "O(n^2) — educational.",
      "codeExample": "def bubble(arr):\n    a = arr[:]\n    n = len(a)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if a[j] > a[j + 1]:\n                a[j], a[j + 1] = a[j + 1], a[j]\n    return a\nprint(bubble([5, 1, 4, 2]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def bubble(arr):\n    a = arr[:]\n    n = len(a)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if a[j] > a[j + 1]:\n                a[j], a[j + 1] = a[j + 1], a[j]\n    return a\nprint(bubble([5, 1, 4, 2]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-112",
      "title": "14.15 Selection Sort",
      "module": "DSA",
      "objective": "Implement selection sort.",
      "why": "Repeatedly select the minimum and place it next.",
      "explanation": "O(n^2), few swaps.",
      "codeExample": "def selection(arr):\n    a = arr[:]\n    for i in range(len(a)):\n        m = i\n        for j in range(i + 1, len(a)):\n            if a[j] < a[m]: m = j\n        a[i], a[m] = a[m], a[i]\n    return a\nprint(selection([64, 25, 12, 22]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def selection(arr):\n    a = arr[:]\n    for i in range(len(a)):\n        m = i\n        for j in range(i + 1, len(a)):\n            if a[j] < a[m]: m = j\n        a[i], a[m] = a[m], a[i]\n    return a\nprint(selection([64, 25, 12, 22]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-113",
      "title": "14.16 Insertion Sort",
      "module": "DSA",
      "objective": "Implement insertion sort.",
      "why": "Like sorting cards in your hand — good for nearly sorted data.",
      "explanation": "O(n^2) worst, fast on small/nearly sorted.",
      "codeExample": "def insertion(arr):\n    a = arr[:]\n    for i in range(1, len(a)):\n        key = a[i]\n        j = i - 1\n        while j >= 0 and a[j] > key:\n            a[j + 1] = a[j]\n            j -= 1\n        a[j + 1] = key\n    return a\nprint(insertion([12, 11, 13, 5, 6]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def insertion(arr):\n    a = arr[:]\n    for i in range(1, len(a)):\n        key = a[i]\n        j = i - 1\n        while j >= 0 and a[j] > key:\n            a[j + 1] = a[j]\n            j -= 1\n        a[j + 1] = key\n    return a\nprint(insertion([12, 11, 13, 5, 6]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-114",
      "title": "14.17 Quick Sort",
      "module": "DSA",
      "objective": "Implement a simple recursive quicksort.",
      "why": "Industry favorite average-case O(n log n) sort.",
      "explanation": "Partition around a pivot.",
      "codeExample": "def quicksort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    mid = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + mid + quicksort(right)\nprint(quicksort([3, 6, 8, 10, 1, 2, 1]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def quicksort(arr):\n    if len(arr) <= 1: return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    mid = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + mid + quicksort(right)\nprint(quicksort([3, 6, 8, 10, 1, 2, 1]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-115",
      "title": "14.18 Counting Sort",
      "module": "DSA",
      "objective": "Implement counting sort for non-negative ints.",
      "why": "Sort integers in a known small range in linear time.",
      "explanation": "Great for grades 0–100 style data.",
      "codeExample": "def counting_sort(arr):\n    if not arr: return []\n    m = max(arr)\n    count = [0] * (m + 1)\n    for x in arr: count[x] += 1\n    out = []\n    for val, c in enumerate(count):\n        out.extend([val] * c)\n    return out\nprint(counting_sort([4, 2, 2, 8, 3, 3, 1]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def counting_sort(arr):\n    if not arr: return []\n    m = max(arr)\n    count = [0] * (m + 1)\n    for x in arr: count[x] += 1\n    out = []\n    for val, c in enumerate(count):\n        out.extend([val] * c)\n    return out\nprint(counting_sort([4, 2, 2, 8, 3, 3, 1]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-116",
      "title": "14.19 Radix Sort",
      "module": "DSA",
      "objective": "Understand radix sort idea (LSD).",
      "why": "Sort large integers digit by digit.",
      "explanation": "Uses counting sort as a subroutine per digit.",
      "codeExample": "print(\"Radix sort: process digits from least to most significant\")\nprint(\"Useful for fixed-length IDs and large integer keys\")\nnums = [170, 45, 75, 90, 802, 24, 2, 66]\nprint(sorted(nums))  # practical stand-in; implement full radix as challenge",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "print(\"Radix sort: process digits from least to most significant\")\nprint(\"Useful for fixed-length IDs and large integer keys\")\nnums = [170, 45, 75, 90, 802, 24, 2, 66]\nprint(sorted(nums))  # practical stand-in; implement full radix as challenge"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-117",
      "title": "14.20 Merge Sort",
      "module": "DSA",
      "objective": "Implement merge sort by divide and conquer.",
      "why": "Stable O(n log n) sort used widely in libraries.",
      "explanation": "Split, sort halves, merge.",
      "codeExample": "def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(a, b):\n    i = j = 0\n    out = []\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            out.append(a[i]); i += 1\n        else:\n            out.append(b[j]); j += 1\n    out.extend(a[i:]); out.extend(b[j:])\n    return out\nprint(merge_sort([38, 27, 43, 3, 9, 82, 10]))",
      "exercises": [
        {
          "title": "Practice",
          "instruction": "Run the idea with your own sample data (list of 5–8 items) and print the result.",
          "solution": "def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(a, b):\n    i = j = 0\n    out = []\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            out.append(a[i]); i += 1\n        else:\n            out.append(b[j]); j += 1\n    out.extend(a[i:]); out.extend(b[j:])\n    return out\nprint(merge_sort([38, 27, 43, 3, 9, 82, 10]))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-118",
      "title": "15.1 MySQL Get Started",
      "module": "MySQL",
      "objective": "Connect Python to MySQL conceptually and install drivers.",
      "why": "Business data needs a reliable database — MySQL is a popular choice.",
      "explanation": "pip install mysql-connector-python (or PyMySQL). Create connection with host, user, password.",
      "codeExample": "# pip install mysql-connector-python\nimport mysql.connector\n# conn = mysql.connector.connect(host=\"localhost\", user=\"root\", password=\"secret\")\nprint(\"Connected pattern: connect → cursor → execute → commit → close\")",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "# pip install mysql-connector-python\nimport mysql.connector\n# conn = mysql.connector.connect(host=\"localhost\", user=\"root\", password=\"secret\")\nprint(\"Connected pattern: connect → cursor → execute → commit → close\")"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-119",
      "title": "15.2 Create Database",
      "module": "MySQL",
      "objective": "Create a database with SQL via Python.",
      "why": "Each product (shop, school) often gets its own database.",
      "explanation": "CREATE DATABASE name;",
      "codeExample": "sql = \"CREATE DATABASE IF NOT EXISTS shop_db\"\nprint(sql)\n# cursor.execute(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"CREATE DATABASE IF NOT EXISTS shop_db\"\nprint(sql)\n# cursor.execute(sql)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-120",
      "title": "15.3 Create Table",
      "module": "MySQL",
      "objective": "Define a table schema with CREATE TABLE.",
      "why": "Tables hold structured rows — customers, products, orders.",
      "explanation": "Columns + types + primary key.",
      "codeExample": "sql = \"\"\"\nCREATE TABLE IF NOT EXISTS products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100),\n  price DECIMAL(10,2),\n  qty INT\n)\n\"\"\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"\"\"\nCREATE TABLE IF NOT EXISTS products (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100),\n  price DECIMAL(10,2),\n  qty INT\n)\n\"\"\"\nprint(sql)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-121",
      "title": "15.4 Insert Rows",
      "module": "MySQL",
      "objective": "INSERT INTO table VALUES / parameterized queries.",
      "why": "Add new products or customers as they register.",
      "explanation": "Always parameterize to avoid SQL injection.",
      "codeExample": "sql = \"INSERT INTO products (name, price, qty) VALUES (%s, %s, %s)\"\ndata = (\"Rice 50kg\", 45000, 20)\nprint(sql, data)\n# cursor.execute(sql, data); conn.commit()",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"INSERT INTO products (name, price, qty) VALUES (%s, %s, %s)\"\ndata = (\"Rice 50kg\", 45000, 20)\nprint(sql, data)\n# cursor.execute(sql, data); conn.commit()"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-122",
      "title": "15.5 Select Data",
      "module": "MySQL",
      "objective": "SELECT columns FROM table.",
      "why": "Fetch inventory lists for your dashboard.",
      "explanation": "fetchall(), fetchone()",
      "codeExample": "sql = \"SELECT id, name, price FROM products\"\nprint(sql)\n# cursor.execute(sql)\n# for row in cursor.fetchall(): print(row)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT id, name, price FROM products\"\nprint(sql)\n# cursor.execute(sql)\n# for row in cursor.fetchall(): print(row)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-123",
      "title": "15.6 WHERE Filters",
      "module": "MySQL",
      "objective": "Filter with WHERE and comparisons.",
      "why": "Show only products under ₦5000 — filter rows.",
      "explanation": "AND, OR, LIKE, IN",
      "codeExample": "sql = \"SELECT * FROM products WHERE price < %s AND qty > 0\"\nprint(sql, (5000,))",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT * FROM products WHERE price < %s AND qty > 0\"\nprint(sql, (5000,))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-124",
      "title": "15.7 ORDER BY",
      "module": "MySQL",
      "objective": "Order results ascending/descending.",
      "why": "Sort top-selling items for a report.",
      "explanation": "ORDER BY col ASC|DESC",
      "codeExample": "sql = \"SELECT name, price FROM products ORDER BY price DESC\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT name, price FROM products ORDER BY price DESC\"\nprint(sql)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-125",
      "title": "15.8 DELETE Rows",
      "module": "MySQL",
      "objective": "DELETE FROM with WHERE (never forget WHERE!).",
      "why": "Remove discontinued products carefully.",
      "explanation": "Missing WHERE can wipe the whole table.",
      "codeExample": "sql = \"DELETE FROM products WHERE id = %s\"\nprint(sql, (42,))\nprint(\"WARNING: always include WHERE in production deletes\")",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"DELETE FROM products WHERE id = %s\"\nprint(sql, (42,))\nprint(\"WARNING: always include WHERE in production deletes\")"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-126",
      "title": "15.9 DROP Table",
      "module": "MySQL",
      "objective": "DROP TABLE statement awareness.",
      "why": "Drop removes the table structure — rare and dangerous.",
      "explanation": "Prefer soft-delete columns when possible.",
      "codeExample": "sql = \"DROP TABLE IF EXISTS old_temp_products\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"DROP TABLE IF EXISTS old_temp_products\"\nprint(sql)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-127",
      "title": "15.10 UPDATE Rows",
      "module": "MySQL",
      "objective": "UPDATE SET ... WHERE ...",
      "why": "Change prices during a promo weekend.",
      "explanation": "Parameterize values.",
      "codeExample": "sql = \"UPDATE products SET price = %s WHERE id = %s\"\nprint(sql, (39999, 7))",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"UPDATE products SET price = %s WHERE id = %s\"\nprint(sql, (39999, 7))"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-128",
      "title": "15.11 LIMIT",
      "module": "MySQL",
      "objective": "LIMIT and OFFSET for paging.",
      "why": "Paginate API results — first 10 customers.",
      "explanation": "LIMIT 10 OFFSET 20 → page 3 if page size 10.",
      "codeExample": "sql = \"SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 0\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 0\"\nprint(sql)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-129",
      "title": "15.12 JOIN Tables",
      "module": "MySQL",
      "objective": "INNER JOIN related tables on keys.",
      "why": "Combine orders with customer names in one query.",
      "explanation": "Join is how relational data becomes useful reports.",
      "codeExample": "sql = \"\"\"\nSELECT o.id, c.name, o.total\nFROM orders o\nINNER JOIN customers c ON o.customer_id = c.id\n\"\"\"\nprint(sql)",
      "exercises": [
        {
          "title": "Write the SQL idea",
          "instruction": "Adapt the sample SQL to a students/courses school scenario and print it.",
          "solution": "sql = \"\"\"\nSELECT o.id, c.name, o.total\nFROM orders o\nINNER JOIN customers c ON o.customer_id = c.id\n\"\"\"\nprint(sql)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-130",
      "title": "16.1 MongoDB Get Started",
      "module": "MongoDB",
      "objective": "Connect to MongoDB from Python with PyMongo.",
      "why": "Flexible document storage fits product catalogs that change shape often.",
      "explanation": "pip install pymongo. Documents ≈ JSON. Collections ≈ tables.",
      "codeExample": "# from pymongo import MongoClient\n# client = MongoClient(\"mongodb://localhost:27017/\")\nprint(\"MongoDB stores BSON documents in collections\")",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-131",
      "title": "16.2 Create Database",
      "module": "MongoDB",
      "objective": "Access a database handle via client.",
      "why": "In MongoDB, DBs appear when you first store data.",
      "explanation": "db = client[\"shop_db\"]",
      "codeExample": "print('db = client[\"shop_db\"]  # created on first write')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-132",
      "title": "16.3 Collections",
      "module": "MongoDB",
      "objective": "Get a collection reference.",
      "why": "A collection holds many related documents (e.g., products).",
      "explanation": "products = db[\"products\"]",
      "codeExample": "print('products = db[\"products\"]')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-133",
      "title": "16.4 Insert Documents",
      "module": "MongoDB",
      "objective": "insert_one / insert_many",
      "why": "Add one or many product documents.",
      "explanation": "Documents are Python dicts.",
      "codeExample": "doc = {\"name\": \"Blender\", \"price\": 35000, \"tags\": [\"kitchen\", \"electric\"]}\nprint(\"insert_one(doc) →\", doc)",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-134",
      "title": "16.5 Find Documents",
      "module": "MongoDB",
      "objective": "find, find_one",
      "why": "List items or fetch one by filter.",
      "explanation": "No filter → all docs (careful at scale).",
      "codeExample": "print('find_one({\"name\": \"Blender\"})')\nprint('for d in products.find(): print(d)')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-135",
      "title": "16.6 Query Filters",
      "module": "MongoDB",
      "objective": "Use query operators like $lt, $gt, $in.",
      "why": "Find products cheaper than ₦20k with a tag.",
      "explanation": "Mongo query language is dict-based.",
      "codeExample": "query = {\"price\": {\"$lt\": 20000}, \"tags\": \"kitchen\"}\nprint(query)",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-136",
      "title": "16.7 Sort",
      "module": "MongoDB",
      "objective": "sort([(field, 1|-1)])",
      "why": "Show newest reviews first.",
      "explanation": "1 ascending, -1 descending.",
      "codeExample": "print('products.find().sort(\"price\", -1)')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-137",
      "title": "16.8 Delete Documents",
      "module": "MongoDB",
      "objective": "delete_one / delete_many",
      "why": "Remove discontinued SKUs.",
      "explanation": "Filter carefully.",
      "codeExample": "print('delete_many({\"discontinued\": True})')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-138",
      "title": "16.9 Drop Collection",
      "module": "MongoDB",
      "objective": "collection.drop()",
      "why": "Drop an entire collection when restructuring.",
      "explanation": "Destructive — prefer delete_many for partial cleans.",
      "codeExample": "print('products.drop()  # removes whole collection')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-139",
      "title": "16.10 Update Documents",
      "module": "MongoDB",
      "objective": "update_one with $set",
      "why": "Update prices or stock counts in place.",
      "explanation": "Also $inc for counters.",
      "codeExample": "print('update_one({\"name\": \"Blender\"}, {\"$set\": {\"price\": 33000}})')\nprint('update_one({\"name\": \"Blender\"}, {\"$inc\": {\"qty\": -1}})')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-140",
      "title": "16.11 Limit Results",
      "module": "MongoDB",
      "objective": "limit(n) on cursor",
      "why": "Return top 5 results for a mobile screen.",
      "explanation": "Combine with sort for top-N queries.",
      "codeExample": "print('products.find().sort(\"price\", 1).limit(5)')",
      "exercises": [
        {
          "title": "Document design",
          "instruction": "Design a dict for a \"student\" document with name, courses (list), and active (bool). Print it.",
          "solution": "student = {\"name\": \"Aisha\", \"courses\": [\"Python\", \"Math\"], \"active\": True}\nprint(student)"
        }
      ],
      "quiz": []
    },
    {
      "id": "py-141",
      "title": "17.1 Capstone — Shop Analytics Mini Project",
      "module": "Capstone",
      "objective": "Combine Python basics, data structures, and analysis ideas into one mini project plan.",
      "why": "Real junior roles ask you to glue skills: read data, clean it, compute metrics, show a chart.",
      "explanation": "Project brief:<br>\n  1) Represent a week of sales as a list of dicts<br>\n  2) Compute total and best day<br>\n  3) (Optional) Plot with matplotlib<br>\n  4) (Optional) Save JSON report",
      "codeExample": "sales = [\n    {\"day\": \"Mon\", \"amount\": 12000},\n    {\"day\": \"Tue\", \"amount\": 15000},\n    {\"day\": \"Wed\", \"amount\": 9000},\n    {\"day\": \"Thu\", \"amount\": 18000},\n    {\"day\": \"Fri\", \"amount\": 21000},\n]\ntotal = sum(s[\"amount\"] for s in sales)\nbest = max(sales, key=lambda s: s[\"amount\"])\nprint(\"Total:\", total)\nprint(\"Best day:\", best[\"day\"], best[\"amount\"])",
      "exercises": [
        {
          "title": "Extend it",
          "instruction": "Add Saturday and Sunday, recompute total and best day, print average daily sales.",
          "solution": "sales = [\n    {\"day\": \"Mon\", \"amount\": 12000},\n    {\"day\": \"Tue\", \"amount\": 15000},\n    {\"day\": \"Wed\", \"amount\": 9000},\n    {\"day\": \"Thu\", \"amount\": 18000},\n    {\"day\": \"Fri\", \"amount\": 21000},\n    {\"day\": \"Sat\", \"amount\": 25000},\n    {\"day\": \"Sun\", \"amount\": 16000},\n]\ntotal = sum(s[\"amount\"] for s in sales)\nbest = max(sales, key=lambda s: s[\"amount\"])\navg = total / len(sales)\nprint(\"Total:\", total)\nprint(\"Best:\", best)\nprint(\"Average:\", round(avg, 2))"
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
        }
      ]
    }
  ]
};
