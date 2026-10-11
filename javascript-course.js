// ZeroToCode Academy — JavaScript curriculum
// Comprehensive guide structure is documented in docs/LESSON-STANDARD.md.
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
      "objective": "Explain where JavaScript runs, execute console instructions, and distinguish code from its output.",
      "why": "JavaScript can react to actions and update information in a web application. Before working with a page, you need to understand how a JavaScript runtime executes instructions and how to inspect their results.",
      "explanation": "<h4>JavaScript is a language; a browser is one place it runs</h4><p>JavaScript is a programming language for expressing instructions and working with values. A <strong>JavaScript engine</strong> is software that executes those instructions. Modern browsers include an engine, which is why a website can run JavaScript on your device without asking you to install a separate language runtime.</p>\n<p>JavaScript also runs outside browsers in environments such as Node.js. The language and its surrounding environment are different things. A browser can provide access to a web page; a server runtime can provide other capabilities. Code that depends on a particular environment may not work unchanged in another one.</p>\n<h4>Separate structure, presentation, and behavior</h4><p>On a web page, <strong>HTML</strong> gives content its structure, such as headings, paragraphs, and buttons. <strong>CSS</strong> controls presentation, such as spacing and colors. JavaScript can add behavior: responding to a button, validating an entry, or updating a displayed total.</p>\n<p>For example, HTML can create an Add item button, CSS can style it, and JavaScript can respond when someone presses it. These roles cooperate, but learning JavaScript does not automatically create the corresponding HTML elements. Later DOM lessons will explain how code finds and changes elements in a page.</p>\n<h4>Understand the console instruction</h4><p>The expression <code>console.log(\"Hello from JavaScript!\")</code> calls a method named <code>log</code> on an object named <code>console</code>. For now, think of console as a collection of tools for reporting information, and log as the tool that writes a message. The dot connects the collection to the tool being used.</p>\n<p>The parentheses enclose the arguments supplied to log. The quotes mark a string: text to display. The final semicolon explicitly ends this statement. JavaScript can insert semicolons in many situations, but writing them here gives you a consistent, visible boundary between instructions.</p>\n<h4>Predict strings and calculated values</h4><p><code>console.log(2 + 2)</code> evaluates the addition and displays 4. In contrast, <code>console.log(\"2 + 2\")</code> displays the text 2 + 2 because the quotes make the entire expression a string. A number and a string containing digits can look similar in output while representing different kinds of value.</p>\n<p>Read the main example from top to bottom. The first statement reports a message, then the second reports a calculated value. Before pressing Run JS, predict those two output lines. Change one number, run again, and check whether only the calculated result changes.</p>\n<h4>Use the right practice environment</h4><p>The academy’s <strong>Run JS</strong> console executes JavaScript in a background Worker. A Worker is a separate execution context that helps keep a long-running program from freezing the learning interface. This console does not have a page document, so code referring to <code>document</code> or <code>window</code> will not behave as it would in a normal page script.</p>\n<p>For this lesson, plain console instructions are exactly what you need. Later, page exercises should include their HTML elements and a script in <strong>Preview HTML</strong>. Do not paste an HTML <code>&lt;script&gt;</code> tag into Run JS: the tag belongs to HTML, not to JavaScript source. The Worker console also has a five-second lifetime; it is intended for small learning examples.</p>\n<h4>Read feedback and know what logging does not do</h4><p>If you misspell <code>console</code>, omit a closing quote, or leave a parenthesis unfinished, inspect the reported error and repair one detail. JavaScript names are case-sensitive, so <code>Console</code> and <code>console</code> are not interchangeable. An error is information about the code, not a verdict on your ability.</p>\n<p>Logging helps you inspect values, but it does not automatically show a message in a website’s visible content. In browser developer tools, evaluating a statement can also display its return value, sometimes undefined; that is different from the message logged by console.log. The academy console focuses on captured log output. In all environments, distinguish the instruction you wrote, the value it computed, and where that value was displayed.</p>",
      "codeExample": "console.log(\"Hello from JavaScript!\");\nconsole.log(2 + 2);",
      "exercises": [
        {
          "title": "Guided: a name and a goal",
          "instruction": "Log your name and one goal for learning JavaScript on separate lines.",
          "hint": "Use two console.log calls with quoted text.",
          "solution": "console.log(\"My name is Ada\");\nconsole.log(\"I want to build interactive websites\");",
          "expectedOutput": "My name is Ada\nI want to build interactive websites",
          "solutionExplanation": "Each statement calls the same method with a different string. The statements run in order. Your own name and goal are valid alternatives to the sample wording.",
          "successCriteria": [
            "Two messages appear in the correct order.",
            "The code runs in Run JS without an HTML wrapper."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: spelling and syntax",
          "instruction": "Repair Console.log(\"Ready\"); so it works in this console, and explain what changed.",
          "hint": "The method name is already correct; inspect the object name.",
          "solution": "console.log(\"Ready\");",
          "expectedOutput": "Ready",
          "solutionExplanation": "The capital C named an object that the environment does not define. Lowercase console selects the provided reporting object. The quotes, parentheses, and semicolon were already correctly paired.",
          "successCriteria": [
            "The output is Ready.",
            "You explain why letter case matters."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: a labelled calculation",
          "instruction": "Show a message identifying a calculation, then log a labelled result for 7 + 5. Make the result an actual arithmetic expression.",
          "hint": "Keep the label quoted and the arithmetic unquoted; separate arguments with commas.",
          "solution": "console.log(\"Practice calculation\");\nconsole.log(\"Result:\", 7 + 5);",
          "expectedOutput": "Practice calculation\nResult: 12",
          "solutionExplanation": "The addition is evaluated to the number 12 before it is logged with the label. Quoting 7 + 5 would instead display the written calculation, which would not satisfy the task.",
          "successCriteria": [
            "The result is 12.",
            "The output explains what the number represents.",
            "You can predict what would change if the expression were quoted."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Where does JavaScript run natively?",
          "options": [
            "Only in a browser tab, never in another environment",
            "In modern browsers, and also in runtimes such as Node.js",
            "Only after CSS starts a JavaScript engine",
            "Only inside an HTML document with a visible button"
          ],
          "correct": 1,
          "explanation": "Browsers include a JS engine (V8, SpiderMonkey, etc.). JavaScript can also run in other environments such as Node.js."
        },
        {
          "q": "What does console.log(2 + 2) report?",
          "options": [
            "2 + 2",
            "22",
            "4",
            "The name console"
          ],
          "correct": 2,
          "explanation": "The unquoted numeric expression is evaluated before its result is passed to log."
        },
        {
          "q": "What does HTML mainly contribute to a page?",
          "options": [
            "Content structure and meaning",
            "Text colors and spacing rules",
            "Instructions that respond to a button click",
            "The rules for evaluating numeric JavaScript expressions"
          ],
          "correct": 0,
          "explanation": "HTML structures and labels content. CSS handles presentation, while JavaScript can add behavior."
        },
        {
          "q": "Why does document fail in this lesson’s Run JS console?",
          "options": [
            "All JavaScript environments provide exactly the same page APIs",
            "Adding a semicolon makes document available in any environment",
            "Printing text first creates a document for the console",
            "This console runs in a Worker without a page DOM"
          ],
          "correct": 3,
          "explanation": "The surrounding environment determines which APIs exist. Page DOM work needs an actual page context, such as the HTML preview."
        }
      ],
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "No previous JavaScript knowledge is required.",
          "Use Run JS for this lesson; no local installation or HTML document is needed."
        ],
        "outcomes": [
          "Distinguish JavaScript from HTML and CSS.",
          "Identify the method, string argument, and statement boundary in a console call.",
          "Predict text and arithmetic output and explain why the Worker console has no document."
        ],
        "expectedOutput": "Hello from JavaScript!\n4",
        "walkthrough": [
          {
            "code": "console.log(\"Hello from JavaScript!\");",
            "explanation": "console identifies the reporting object, the dot selects its log method, and the parentheses supply a string argument. The method reports the string; the quotes and semicolon do not appear in the output."
          },
          {
            "code": "console.log(2 + 2);",
            "explanation": "JavaScript evaluates the numeric expression as 4, then passes that number to log. This statement runs after the greeting statement."
          }
        ],
        "variations": [
          {
            "title": "Compare literal text with a calculation",
            "code": "console.log(\"Calculation:\", \"2 + 2\");\nconsole.log(\"Result:\", 2 + 2);",
            "expectedOutput": "Calculation: 2 + 2\nResult: 4",
            "explanation": "Each call supplies two arguments separated by a comma. The playground shows them separated by a space. The first call keeps the calculation as quoted text; the second evaluates the addition before logging its result."
          }
        ],
        "mistakes": [
          {
            "symptom": "ReferenceError mentions Console",
            "cause": "JavaScript names are case-sensitive; the environment provides console with a lowercase c.",
            "fix": "Use console.log with the exact spelling."
          },
          {
            "symptom": "SyntaxError appears after pasting a script tag",
            "cause": "Run JS expects JavaScript source, not an HTML wrapper.",
            "fix": "Remove the script tags for console practice. Use Preview HTML when writing an HTML document."
          },
          {
            "symptom": "ReferenceError mentions document",
            "cause": "The Worker console does not expose a page DOM.",
            "fix": "For a DOM exercise, provide the necessary HTML and JavaScript together in Preview HTML. Basic console practice does not need document."
          },
          {
            "symptom": "Changing the code does not update the output",
            "cause": "The panel still contains the result of the earlier run.",
            "fix": "Run the edited program again and compare the new result with your prediction."
          }
        ],
        "summary": [
          "JavaScript instructions run in an engine within a particular environment.",
          "console.log reports values; quotes produce strings and unquoted arithmetic produces a calculated number.",
          "Browser page APIs are not available in every JavaScript environment. Next, variables let you name and reuse values."
        ],
        "references": [
          {
            "title": "MDN: what is JavaScript?",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript"
          },
          {
            "title": "MDN: console.log()",
            "url": "https://developer.mozilla.org/en-US/docs/Web/API/console/log_static"
          },
          {
            "title": "MDN: using Web Workers",
            "url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
          }
        ]
      }
    },
    {
      "id": "js-02",
      "title": "1.2 Variables: let, const, var",
      "module": "Getting Started",
      "objective": "Declare named values with const and let, trace reassignment, and recognise the scope differences of var.",
      "why": "A budget needs a fixed currency and a changing balance. Appropriate declarations make that distinction visible.",
      "explanation": "<h4>Give values meaningful names</h4><p>A variable associates a name with a value. In <code>const currency = \"NGN\";</code>, const declares a binding, currency names it, and the equals sign supplies its initial value. A binding is the connection between a name and its current value. Later uses of currency read that value. A meaningful name such as balance preserves context that the bare number 5000 cannot.</p>\n<p>Names are case-sensitive: balance and Balance are different. Begin with a letter, underscore, or dollar sign; later characters can include digits. Use camelCase for several words, such as ticketPrice. Reserved words cannot be names. Prefer names describing the value’s role rather than generic names such as data.</p>\n<h4>Choose const or let deliberately</h4><p>Const requires an initial value and prevents reassigning its binding. Let allows reassignment, so it suits a balance reduced after a purchase. Prefer const until a value actually needs reassignment: readers then have less changing state to track. Const does not freeze object contents; arrays and objects will demonstrate that distinction later.</p>\n<p>Assignment is not algebraic equality. <code>balance = balance - 1200</code> evaluates the right side using the old balance, then stores the new result on the left. <code>balance -= 300</code> abbreviates subtraction followed by reassignment. Merely logging balance - 1200 computes a result without changing balance.</p>\n<h4>Understand the region where a name exists</h4><p>Braces create blocks. Let and const declarations belong to the block containing them and are available to nested blocks. Declaring another name inside can hide an outer name, called shadowing; this does not update the outer binding. The variation makes that distinction visible, though avoiding unnecessary shadowing usually improves readability.</p>\n<p>Older code often uses var, which is scoped to a containing function or script rather than an ordinary brace block. Var also permits repeated declarations that let and const reject. Recognise it when reading existing programs, but prefer let and const here. Reading a let or const before its declaration executes causes a ReferenceError.</p>\n<h4>Trace updates and interpret errors</h4><p>Write down balance after each assignment in the worked example: 5000, 3800, then 3500. A later purchase should update balance without writing let again in the same scope. Repeating the declaration is a syntax error; reassignment intentionally changes an existing binding. Different error categories therefore point to different repairs.</p>\n<p>The academy console starts a fresh context on each run. A browser developer console may retain previous declarations, so rerunning a declaration there can produce an already-declared error. Reload the page or use a fresh block when experimenting. Do not switch to var just to conceal a tooling detail; choose declarations according to the program’s intent.</p>",
      "codeExample": "const currency = \"NGN\";\nlet balance = 5000;\nbalance = balance - 1200;\nbalance -= 300;\nconsole.log(currency, balance);",
      "exercises": [
        {
          "title": "Guided: fare payment",
          "instruction": "Start with wallet 2000 and fixed currency NGN, subtract 450, then log both.",
          "hint": "Choose let only for the changing balance.",
          "solution": "const currency = \"NGN\";\nlet wallet = 2000;\nwallet -= 450;\nconsole.log(currency, wallet);",
          "expectedOutput": "NGN 1550",
          "solutionExplanation": "The currency binding stays stable while reassignment records payment.",
          "successCriteria": [
            "Uses const and let appropriately.",
            "Logs the remaining 1550."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: increasing score",
          "instruction": "Repair const score = 3; score = score + 2; and log 5.",
          "hint": "The binding that changes needs another declaration keyword.",
          "solution": "let score = 3;\nscore = score + 2;\nconsole.log(score);",
          "expectedOutput": "5",
          "solutionExplanation": "Let permits the intended reassignment; the arithmetic was already correct.",
          "successCriteria": [
            "Runs without an assignment error.",
            "Explains why let is appropriate."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: two purchases",
          "instruction": "Start a budget at 9000, subtract 2100 and 650, and print a labelled balance with a fixed shop name.",
          "hint": "Keep one running balance.",
          "solution": "const shopName = \"City Mart\";\nlet balance = 9000;\nbalance -= 2100;\nbalance -= 650;\nconsole.log(shopName, \"balance:\", balance);",
          "expectedOutput": "City Mart balance: 6250",
          "solutionExplanation": "Two state updates apply to the same balance, producing 6250.",
          "successCriteria": [
            "Both purchases affect the result.",
            "Names explain their roles.",
            "The shop binding is not reassigned."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Which declaration suits a changing balance?",
          "options": [
            "const balance = 100;",
            "let balance = 100;",
            "balance == 100;",
            "const = balance;"
          ],
          "correct": 1,
          "explanation": "Let permits reassignment; == is comparison rather than declaration."
        },
        {
          "q": "What is logged after let n = 4; n = n + 3?",
          "options": [
            "4",
            "3",
            "7",
            "An error"
          ],
          "correct": 2,
          "explanation": "The old value is read before the new value 7 is stored."
        },
        {
          "q": "What does const guarantee?",
          "options": [
            "The binding cannot be reassigned",
            "Nested object contents are frozen",
            "The value must be numeric",
            "The name escapes its block"
          ],
          "correct": 0,
          "explanation": "Const protects the binding, not the contents of objects."
        },
        {
          "q": "Why prefer let for a block temporary?",
          "options": [
            "It ignores misspellings",
            "Var cannot store text",
            "It rounds numbers",
            "It is scoped to the block"
          ],
          "correct": 3,
          "explanation": "Let respects brace-block scope; var does not."
        }
      ],
      "pitfalls": "Assignment to constant variable: A const binding receives another value. Use let if reassignment is intended. Identifier already declared: The same scope declares a let name twice. Declare once and then assign without let. ReferenceError for balance: The name is misspelled, read too early, or outside its block. Match spelling and use the name after declaration within its scope.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Run console.log and recognise strings and arithmetic (js-01)."
        ],
        "outcomes": [
          "Choose const or let from a value’s role.",
          "Trace assignments that read and replace a previous value.",
          "Explain block scope and why var behaves differently."
        ],
        "expectedOutput": "NGN 3500",
        "walkthrough": [
          {
            "code": "const currency = \"NGN\";",
            "explanation": "Bind an unchanged text label."
          },
          {
            "code": "let balance = 5000;",
            "explanation": "Start a numeric value that will change."
          },
          {
            "code": "balance = balance - 1200;",
            "explanation": "Read 5000 and store 3800."
          },
          {
            "code": "balance -= 300;",
            "explanation": "Subtract again and store 3500."
          },
          {
            "code": "console.log(currency, balance);",
            "explanation": "Read the final values; multiple arguments appear separated by spaces."
          }
        ],
        "variations": [
          {
            "title": "Shadowing is not reassignment",
            "code": "let balance = 5000;\n{\n  const balance = 200;\n  console.log(balance);\n}\nconsole.log(balance);",
            "expectedOutput": "200\n5000",
            "explanation": "The inner binding hides the outer name inside its block; the original value never changes."
          }
        ],
        "mistakes": [
          {
            "symptom": "Assignment to constant variable",
            "cause": "A const binding receives another value.",
            "fix": "Use let if reassignment is intended."
          },
          {
            "symptom": "Identifier already declared",
            "cause": "The same scope declares a let name twice.",
            "fix": "Declare once and then assign without let."
          },
          {
            "symptom": "ReferenceError for balance",
            "cause": "The name is misspelled, read too early, or outside its block.",
            "fix": "Match spelling and use the name after declaration within its scope."
          }
        ],
        "summary": [
          "Declare names once and reassign deliberately.",
          "Const protects bindings; let supports changing state.",
          "Types next explain how stored values behave in operations."
        ],
        "references": [
          {
            "title": "MDN: let",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"
          },
          {
            "title": "MDN: const",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
          },
          {
            "title": "MDN: var",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var"
          }
        ],
        "validation": {
          "runtime": "javascript",
          "environment": "Modern JavaScript in the academy Worker console or Node.js 20+."
        }
      }
    },
    {
      "id": "js-03",
      "title": "1.3 Data Types & typeof",
      "module": "Getting Started",
      "objective": "Identify value types with typeof and use specific checks for null, arrays, and failed numeric conversion.",
      "why": "The text \"42\" and the number 42 look similar in output but behave differently in calculations.",
      "explanation": "<h4>Types describe values</h4><p>JavaScript values belong to types. A string contains text, a number represents ordinary numeric values, and a boolean is exactly true or false. Quotes matter: \"42\" is a string, while 42 is a number. A let binding can later receive another type, but using one name for unrelated kinds of data makes code harder to understand.</p>\n<p>The typeof operator returns a string describing a broad category. <code>typeof 42</code> produces \"number\" without modifying 42. Log a value beside its type when investigating surprising behavior. Separate names such as priceText and price make the boundary between incoming text and numeric data visible.</p>\n<h4>Represent absence deliberately</h4><p>A let variable without an initializer contains undefined. Reading a missing object property also produces undefined. Null is a separate primitive commonly used for intentional absence, such as no selected item. Neither is the same as zero, an empty string, or the text \"null\". Those other values can be meaningful data rather than missing information.</p>\n<p>Because of a historical language quirk, <code>typeof null</code> returns \"object\". Null is nevertheless not an ordinary object and has no properties to read. Check it directly with <code>value === null</code>. A typeof check that says object cannot by itself establish that property access is safe.</p>\n<h4>Choose checks that answer the real question</h4><p>Objects group named properties using braces; arrays hold ordered values using brackets. You will study them in detail soon. Both report \"object\" with typeof, so use <code>Array.isArray(value)</code> to ask specifically whether a value is an array. The answer is a boolean. An empty array is still an array and does not become undefined.</p>\n<p>Functions report \"function\" with typeof; bigint and symbol are additional primitive types used for specialised purposes. You need not use them yet. The essential habit is matching the check to the question: typeof for a broad category, Array.isArray for list shape, and direct comparison for null. A type check does not establish every application rule, such as a price being nonnegative.</p>\n<h4>Conversion and validation are separate</h4><p><code>Number(\"42\")</code> returns the numeric value 42; it leaves the original string unchanged. <code>Number(\"forty\")</code> returns NaN, meaning Not-a-Number. Despite its name, NaN belongs to the number type. <code>Number.isNaN(value)</code> detects that invalid numeric result. Checking typeof alone would not reject it.</p>\n<p>An empty string converts to zero. That may be inappropriate for a required quantity, even though the conversion produces a number. First decide whether input is present, then convert it, then test your domain rules. These examples use fixed values so you can observe each step. Later form validation will also reject infinities, out-of-range values, and inappropriate fractions.</p>",
      "codeExample": "const priceText = \"42\";\nconst price = Number(priceText);\nlet coupon;\nconst selection = null;\nconsole.log(typeof priceText, typeof price);\nconsole.log(typeof coupon);\nconsole.log(typeof selection, selection === null);\nconsole.log(typeof [1, 2], Array.isArray([1, 2]));",
      "exercises": [
        {
          "title": "Guided: inspect three literals",
          "instruction": "Log typeof for \"false\", false, and 0.",
          "hint": "Quoted characters remain text.",
          "solution": "console.log(typeof \"false\");\nconsole.log(typeof false);\nconsole.log(typeof 0);",
          "expectedOutput": "string\nboolean\nnumber",
          "solutionExplanation": "Literal syntax determines type rather than the apparent meaning of the characters.",
          "successCriteria": [
            "All three types are correct.",
            "Explains quoted versus unquoted false."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: missing selection",
          "instruction": "Replace an unreliable typeof null check with a direct comparison that reports true for no selection.",
          "hint": "Use strict equality.",
          "solution": "const selection = null;\nconsole.log(selection === null);",
          "expectedOutput": "true",
          "solutionExplanation": "Direct comparison identifies the null primitive despite the typeof quirk.",
          "successCriteria": [
            "Reports true.",
            "Does not access a null property."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: quantity inspection",
          "instruction": "Convert \"12\" to a number, log value and type, then check whether [12] is an array.",
          "hint": "Keep the source and converted value separate.",
          "solution": "const rawQuantity = \"12\";\nconst quantity = Number(rawQuantity);\nconsole.log(quantity, typeof quantity);\nconsole.log(Array.isArray([quantity]));",
          "expectedOutput": "12 number\ntrue",
          "solutionExplanation": "Conversion establishes numeric data; Array.isArray answers a separate shape question.",
          "successCriteria": [
            "Logs 12 number.",
            "Uses the array-specific check.",
            "Explains why typeof alone is insufficient."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "What is typeof \"7\"?",
          "options": [
            "number",
            "string",
            "boolean",
            "undefined"
          ],
          "correct": 1,
          "explanation": "Quoted digits are text."
        },
        {
          "q": "Which statement about null is accurate?",
          "options": [
            "It equals zero",
            "It is an empty object",
            "It represents absence despite typeof returning object",
            "It is the text null"
          ],
          "correct": 2,
          "explanation": "Null is a primitive absence value."
        },
        {
          "q": "How do you identify an array?",
          "options": [
            "Array.isArray(value)",
            "typeof value === \"array\"",
            "value === \"array\"",
            "Number(value)"
          ],
          "correct": 0,
          "explanation": "Typeof has no array result."
        },
        {
          "q": "What does Number.isNaN(Number(\"bread\")) return?",
          "options": [
            "\"bread\"",
            "0",
            "undefined",
            "true"
          ],
          "correct": 3,
          "explanation": "The failed numeric conversion produces NaN."
        }
      ],
      "pitfalls": "Digits join instead of add: The value is numeric text. Convert deliberately before arithmetic. Reading a null property fails: The historical object result was treated as proof of usable data. Check for null directly before accessing properties. An array is mistaken for a record: typeof reports object for both. Use Array.isArray when collection shape matters.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Understand const, let, and console output (js-02)."
        ],
        "outcomes": [
          "Predict typeof for common values.",
          "Distinguish null, undefined, zero, and empty text.",
          "Convert numeric text and detect arrays or NaN with the appropriate checks."
        ],
        "expectedOutput": "string number\nundefined\nobject true\nobject true",
        "walkthrough": [
          {
            "code": "const price = Number(priceText);",
            "explanation": "Explicitly convert text to a separate numeric value."
          },
          {
            "code": "let coupon;",
            "explanation": "The uninitialised variable contains undefined."
          },
          {
            "code": "const selection = null;",
            "explanation": "Represent intentional absence."
          },
          {
            "code": "typeof selection, selection === null",
            "explanation": "The historical typeof result needs a direct null check."
          },
          {
            "code": "Array.isArray([1, 2])",
            "explanation": "Distinguish a list from other object-like values."
          }
        ],
        "variations": [
          {
            "title": "Failed conversion and empty input",
            "code": "const value = Number(\"forty\");\nconsole.log(value, typeof value);\nconsole.log(Number.isNaN(value));\nconsole.log(Number(\"\"));",
            "expectedOutput": "NaN number\ntrue\n0",
            "explanation": "NaN is still a number-type value, while empty input becomes zero. Neither behavior proves valid user input."
          }
        ],
        "mistakes": [
          {
            "symptom": "Digits join instead of add",
            "cause": "The value is numeric text.",
            "fix": "Convert deliberately before arithmetic."
          },
          {
            "symptom": "Reading a null property fails",
            "cause": "The historical object result was treated as proof of usable data.",
            "fix": "Check for null directly before accessing properties."
          },
          {
            "symptom": "An array is mistaken for a record",
            "cause": "typeof reports object for both.",
            "fix": "Use Array.isArray when collection shape matters."
          }
        ],
        "summary": [
          "Types belong to values, and numeric text differs from numbers.",
          "Use specialised checks where typeof is too broad.",
          "Conversion must be followed by appropriate validation; operators next show why these distinctions matter."
        ],
        "references": [
          {
            "title": "MDN: typeof",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof"
          },
          {
            "title": "MDN: types",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures"
          }
        ],
        "validation": {
          "runtime": "javascript",
          "environment": "Modern JavaScript in the academy Worker console or Node.js 20+."
        }
      }
    },
    {
      "id": "js-04",
      "title": "1.4 Operators & Comparisons",
      "module": "Getting Started",
      "objective": "Combine arithmetic, strict comparisons, and boolean operators with clear precedence and boundary rules.",
      "why": "Checkout eligibility combines prices, quantities, spending thresholds, and membership; each operator expresses a different part of that decision.",
      "explanation": "<h4>Compute quantities with appropriate operators</h4><p>Arithmetic uses +, -, *, /, and % for addition, subtraction, multiplication, division, and remainder. A line total is unit price multiplied by quantity, not price plus quantity. Names and units help preserve that distinction: a count of items and an amount of money describe different things even when both are numbers.</p>\n<p>Multiplication and division take precedence over addition and subtraction. Therefore 2 + 3 * 4 is 14, while (2 + 3) * 4 is 20. Parentheses document intended grouping. Remainder describes what remains after division: 7 % 2 is 1. It is useful for divisibility checks, but is not a percentage operator.</p>\n<h4>Compare without assigning or silently converting</h4><p>A comparison returns a boolean. Use &gt;, &gt;=, &lt;, and &lt;= for numeric ordering and === or !== for strict equality or inequality. A single = assigns instead of comparing. Reading <code>total === 5000</code> as “is total exactly 5000?” helps distinguish a question from an instruction that changes total.</p>\n<p>Strict equality does not convert types, so 5 === \"5\" is false. Loose equality, ==, can convert operands and conceal inconsistent data. Prefer explicit conversion at an input boundary and strict comparison afterward. Relational comparison between two strings compares text order, so \"10\" &lt; \"2\" is true; do not mistake text ordering for numeric ordering.</p>\n<h4>Combine facts into readable decisions</h4><p>With boolean operands, &amp;&amp; requires both facts, || requires at least one, and ! negates the result. The main example requires membership AND spending at least 5000. Exactly 5000 qualifies because &gt;= includes equality. Test the threshold itself rather than assuming results above and below it establish correctness.</p>\n<p>These operators short-circuit. AND skips its right operand when the left is falsy; OR skips it when the left is truthy. More generally, &amp;&amp; and || return one of their operands rather than always a boolean. Here the operands are booleans so the result is easy to reason about. Parenthesise mixed AND/OR expressions to make the business rule unambiguous.</p>\n<h4>Separate calculation, policy, and display</h4><p>Name intermediate facts such as meetsMinimum before combining them. When a discount is wrong, log total, membership, and meetsMinimum separately to identify the mistaken assumption. Changing an operator from &amp;&amp; to || changes the policy; it is not simply another spelling of the same condition.</p>\n<p>Ordinary JavaScript numbers use binary floating-point. Some decimal fractions are approximate, so 0.1 + 0.2 is not exactly 0.3. Integer values at this lesson’s scale avoid that issue. Money applications commonly calculate in integer minor units and define rounding rules explicitly. Display formatting such as two decimal places does not itself establish a correct calculation policy.</p>",
      "codeExample": "const price = 2500;\nconst quantity = 2;\nconst vip = true;\nconst total = price * quantity;\nconst meetsMinimum = total >= 5000;\nconsole.log(\"Total:\", total);\nconsole.log(\"Discount:\", vip && meetsMinimum);\nconsole.log(5 === \"5\");\nconsole.log((2 + 3) * 4, 7 % 2);",
      "exercises": [
        {
          "title": "Guided: divisibility",
          "instruction": "For 14, log the remainder on division by 3 and whether it is zero.",
          "hint": "Compare the remainder using ===.",
          "solution": "const remainder = 14 % 3;\nconsole.log(remainder, remainder === 0);",
          "expectedOutput": "2 false",
          "solutionExplanation": "Four groups of three leave two, so the number is not divisible by three.",
          "successCriteria": [
            "Logs 2 false.",
            "Uses remainder rather than division."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: numeric equality",
          "instruction": "Make a strict comparison between \"12\" and 12 true using explicit conversion.",
          "hint": "Repair the types rather than switching to ==.",
          "solution": "const quantity = Number(\"12\");\nconsole.log(quantity === 12);",
          "expectedOutput": "true",
          "solutionExplanation": "Both operands are numbers after conversion.",
          "successCriteria": [
            "Keeps strict equality.",
            "Makes conversion visible."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: free delivery",
          "instruction": "Compute a total of 1500 times 3. Free delivery applies at 6000 or with a delivery pass; this customer has a pass. Log total and eligibility.",
          "hint": "Either qualifying condition is sufficient.",
          "solution": "const total = 1500 * 3;\nconst deliveryPass = true;\nconsole.log(total, total >= 6000 || deliveryPass);",
          "expectedOutput": "4500 true",
          "solutionExplanation": "The pass satisfies the alternative condition despite the lower total.",
          "successCriteria": [
            "Computes 4500.",
            "Uses OR.",
            "Can predict the result without a pass."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "What is 2 + 3 * 4?",
          "options": [
            "20",
            "14",
            "24",
            "9"
          ],
          "correct": 1,
          "explanation": "Multiplication has higher precedence."
        },
        {
          "q": "Which comparison includes exactly 5000?",
          "options": [
            "total > 5000",
            "total < 5000",
            "total >= 5000",
            "total = 5000"
          ],
          "correct": 2,
          "explanation": "Greater than or equal includes the boundary."
        },
        {
          "q": "Why is 5 === \"5\" false?",
          "options": [
            "Strict equality does not convert types",
            "Numbers cannot be compared",
            "Quotes are ignored",
            "The expression assigns"
          ],
          "correct": 0,
          "explanation": "The operands have different types."
        },
        {
          "q": "What is false && true?",
          "options": [
            "true",
            "undefined",
            "null",
            "false"
          ],
          "correct": 3,
          "explanation": "Both facts would have to hold; the false left operand short-circuits."
        }
      ],
      "pitfalls": "The result joins digits: One + operand is text. Convert input deliberately and choose arithmetic matching the units. The exact threshold fails: The condition uses > instead of >=. Use inclusive comparison and test the boundary. A nonmember qualifies unexpectedly: OR was used when both facts were required. Use AND and test all combinations.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Understand number, string, and boolean values and explicit Number conversion."
        ],
        "outcomes": [
          "Evaluate arithmetic with parentheses and remainder.",
          "Choose strict equality and inclusive comparisons correctly.",
          "Combine boolean facts and explain short-circuit evaluation."
        ],
        "expectedOutput": "Total: 5000\nDiscount: true\nfalse\n20 1",
        "walkthrough": [
          {
            "code": "price * quantity",
            "explanation": "Multiply unit price by item count."
          },
          {
            "code": "total >= 5000",
            "explanation": "Accept the inclusive spending threshold."
          },
          {
            "code": "vip && meetsMinimum",
            "explanation": "Both facts must hold."
          },
          {
            "code": "5 === \"5\"",
            "explanation": "Different types are not strictly equal."
          },
          {
            "code": "(2 + 3) * 4, 7 % 2",
            "explanation": "Grouping produces 20; remainder produces 1."
          }
        ],
        "variations": [
          {
            "title": "Compare AND with OR",
            "code": "const vip = false;\nconst sufficient = true;\nconsole.log(vip && sufficient);\nconsole.log(vip || sufficient);\nconsole.log(!vip);",
            "expectedOutput": "false\ntrue\ntrue",
            "explanation": "A sufficient total cannot meet the AND policy without membership; OR accepts either fact."
          }
        ],
        "mistakes": [
          {
            "symptom": "The result joins digits",
            "cause": "One + operand is text.",
            "fix": "Convert input deliberately and choose arithmetic matching the units."
          },
          {
            "symptom": "The exact threshold fails",
            "cause": "The condition uses > instead of >=.",
            "fix": "Use inclusive comparison and test the boundary."
          },
          {
            "symptom": "A nonmember qualifies unexpectedly",
            "cause": "OR was used when both facts were required.",
            "fix": "Use AND and test all combinations."
          }
        ],
        "summary": [
          "Arithmetic calculates; comparison asks; assignment changes state.",
          "Use deliberate conversion and strict equality.",
          "Boolean rules deserve boundary tests; strings next turn their results into messages."
        ],
        "references": [
          {
            "title": "MDN: operators",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators"
          },
          {
            "title": "MDN: strict equality",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality"
          }
        ],
        "validation": {
          "runtime": "javascript",
          "environment": "Modern JavaScript in the academy Worker console or Node.js 20+."
        }
      }
    },
    {
      "id": "js-05",
      "title": "1.5 Strings & Template Literals",
      "module": "Getting Started",
      "objective": "Interpolate values with template literals and transform strings using methods that return new text.",
      "why": "Receipts and search features combine variable values with fixed wording while keeping display text separate from cleaned input.",
      "explanation": "<h4>Construct a message from text and expressions</h4><p>Strings use matching single quotes, double quotes, or backticks. Backticks create template literals, allowing expressions inside ${...}. JavaScript evaluates the expression and inserts its text representation into the final string. The braces and backticks belong to source syntax and do not appear in the output.</p>\n<p>A receipt can contain <code>${price * quantity}</code> to calculate a total while constructing text. Keep those expressions short. If a calculation involves several decisions, give its result a meaningful name first. Template literals make composition readable; they do not validate input or make inserted content safe for every destination.</p>\n<h4>Transform strings without changing the original</h4><p>The dot selects a method associated with a value, and parentheses call it. <code>rawName.trim()</code> returns text without leading or trailing whitespace. Interior spaces remain. <code>toLowerCase()</code> returns lowercase text. These methods do not alter the string they were called on because JavaScript strings are immutable.</p>\n<p>To keep transformed text, store the return value in a new binding or reassign an existing let binding. Chained calls process each previous result: source.trim().toLowerCase() first trims, then lowercases the cleaned result. The example logs original and cleaned lengths to demonstrate that the source retains its spaces.</p>\n<h4>Search and slice with explicit boundaries</h4><p>Includes reports whether a substring exists and is case-sensitive. \"LAGOS\" does not include \"lag\" until an intentional normalisation step lowercases the source. For a case-insensitive policy with variable inputs, normalise both the source and search term. Do not automatically lowercase a person’s name for display just because searching should ignore case.</p>\n<p>Slice returns text from a zero-based start position up to, but excluding, an optional end position. Leaving end out reads to the end; a negative start counts backward from the end. The variation uses slice(-4) to display the final four digits. This changes displayed text without deleting or protecting the original identifier.</p>\n<h4>Interpret length and exact output carefully</h4><p>The length property counts UTF-16 code units, not necessarily human-perceived characters. Simple Latin letters and spaces in this lesson each occupy one unit. Some emoji and combined characters occupy more. A user-facing character limit may therefore need a more specialised approach than checking length alone.</p>\n<p>Predict exact spaces, punctuation, and symbols before running the example. If ${name} appears literally, inspect whether you used ordinary quotes rather than backticks. If trim seems ineffective, check that its returned value is used. Preserve the display form when presentation matters and derive separate normalised values for search; these are distinct requirements, not competing versions of one supposedly correct string.</p>",
      "codeExample": "const rawName = \"  Amaka  \";\nconst name = rawName.trim();\nconst price = 1500;\nconst quantity = 2;\nconsole.log(`Hello ${name}, total is ₦${price * quantity}.`);\nconsole.log(\"LAGOS\".toLowerCase().includes(\"lag\"));\nconsole.log(rawName.length, name.length);",
      "exercises": [
        {
          "title": "Guided: receipt",
          "instruction": "Print Bread: 3 × 800 = 2400 with item, price, and quantity variables.",
          "hint": "Calculate the total inside one interpolation.",
          "solution": "const item = \"Bread\";\nconst price = 800;\nconst quantity = 3;\nconsole.log(`${item}: ${quantity} × ${price} = ${price * quantity}`);",
          "expectedOutput": "Bread: 3 × 800 = 2400",
          "solutionExplanation": "Values and computed arithmetic enter the fixed sentence through placeholders.",
          "successCriteria": [
            "Uses a template literal.",
            "Calculates rather than hardcodes 2400."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: ignored trim",
          "instruction": "Repair a program that calls city.trim() but logs the original \"  Lagos  \".",
          "hint": "Capture the method result.",
          "solution": "const city = \"  Lagos  \";\nconst cleaned = city.trim();\nconsole.log(cleaned);",
          "expectedOutput": "Lagos",
          "solutionExplanation": "The new binding receives the transformed immutable string.",
          "successCriteria": [
            "No outer spaces remain in output.",
            "Explains why city itself is unchanged."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: title search",
          "instruction": "Clean \"  Learn JavaScript  \" for display and test whether it contains \"javascript\" ignoring case.",
          "hint": "Preserve display case and derive search text.",
          "solution": "const title = \"  Learn JavaScript  \".trim();\nconsole.log(title);\nconsole.log(title.toLowerCase().includes(\"javascript\"));",
          "expectedOutput": "Learn JavaScript\ntrue",
          "solutionExplanation": "The display retains intended capitalisation while searching a normalised copy.",
          "successCriteria": [
            "Displays the cleaned title.",
            "Search returns true.",
            "Does not lowercase the display value."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Which interpolates total?",
          "options": [
            "\"Total ${total}\"",
            "`Total ${total}`",
            "'Total ${total}'",
            "\"Total {total}\""
          ],
          "correct": 1,
          "explanation": "Backticks enable interpolation."
        },
        {
          "q": "What does \" a b \".trim() return?",
          "options": [
            "\"ab\"",
            "\" a b \"",
            "\"a b\"",
            "\"a b \""
          ],
          "correct": 2,
          "explanation": "Only outer whitespace is removed."
        },
        {
          "q": "What happens if trim’s result is ignored?",
          "options": [
            "The source stays unchanged",
            "All spaces disappear",
            "The binding becomes null",
            "Trim always throws"
          ],
          "correct": 0,
          "explanation": "Strings are immutable."
        },
        {
          "q": "What is \"JavaScript\".includes(\"javascript\")?",
          "options": [
            "true",
            "10",
            "undefined",
            "false"
          ],
          "correct": 3,
          "explanation": "Includes compares case-sensitively."
        }
      ],
      "pitfalls": "The placeholder prints literally: The string uses ordinary quotes. Use backticks around the template. Trim has no visible effect: The returned string was ignored. Store or directly use the returned value. A matching search returns false: Source and needle differ in case. Apply a deliberate case-normalisation policy to both.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Use variables, arithmetic, and boolean results."
        ],
        "outcomes": [
          "Build messages using backticks and ${...}.",
          "Apply trim, toLowerCase, includes, slice, and length.",
          "Explain immutability and choose a case-normalisation policy."
        ],
        "expectedOutput": "Hello Amaka, total is ₦3000.\ntrue\n9 5",
        "walkthrough": [
          {
            "code": "rawName.trim()",
            "explanation": "Return cleaned text and preserve rawName."
          },
          {
            "code": "${price * quantity}",
            "explanation": "Evaluate multiplication before inserting the result."
          },
          {
            "code": "toLowerCase().includes(\"lag\")",
            "explanation": "Search the lowercase derived string."
          },
          {
            "code": "rawName.length, name.length",
            "explanation": "Compare nine original code units with five cleaned units."
          }
        ],
        "variations": [
          {
            "title": "Display the final digits",
            "code": "const account = \"1234567890\";\nconsole.log(`Account ending ${account.slice(-4)}`);\nconsole.log(account);",
            "expectedOutput": "Account ending 7890\n1234567890",
            "explanation": "Negative indexing selects the suffix without changing the source."
          }
        ],
        "mistakes": [
          {
            "symptom": "The placeholder prints literally",
            "cause": "The string uses ordinary quotes.",
            "fix": "Use backticks around the template."
          },
          {
            "symptom": "Trim has no visible effect",
            "cause": "The returned string was ignored.",
            "fix": "Store or directly use the returned value."
          },
          {
            "symptom": "A matching search returns false",
            "cause": "Source and needle differ in case.",
            "fix": "Apply a deliberate case-normalisation policy to both."
          }
        ],
        "summary": [
          "Template literals combine wording and evaluated values.",
          "Methods return new strings, so use their results.",
          "Separate display and search policies; conditionals next choose which message applies."
        ],
        "references": [
          {
            "title": "MDN: template literals",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
          },
          {
            "title": "MDN: String",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
          }
        ],
        "validation": {
          "runtime": "javascript",
          "environment": "Modern JavaScript in the academy Worker console or Node.js 20+."
        }
      }
    },
    {
      "id": "js-06",
      "title": "1.6 Conditionals if / else",
      "module": "Control Flow",
      "objective": "Translate mutually exclusive rules into ordered if, else-if, and else branches with explicit boundaries.",
      "why": "Grades and delivery charges need one clear result for each input, including thresholds and invalid cases.",
      "explanation": "<h4>Choose one branch from several possibilities</h4><p>If evaluates a condition in parentheses and runs its brace-delimited block when the result is truthy. Comparisons already produce booleans and usually express a domain rule more clearly than an implicit truthiness check. An optional else handles the remaining case. Braces make the extent of each block explicit even when it contains one statement.</p>\n<p>Else if introduces another condition considered only when earlier conditions failed. The chain stops at the first match. Separate if statements are different: every condition is evaluated, so several blocks may execute. Choose a chain when exactly one grade should result, and independent conditions when several unrelated actions may be appropriate.</p>\n<h4>Rule order is part of the program</h4><p>A score of 85 satisfies both &gt;= 70 and &gt;= 60. Checking the lower threshold first would stop the chain too early and award B instead of A. In a descending grade system, test the highest threshold first. The source order encodes priority rather than merely organising the page.</p>\n<p>The main example checks values outside 0–100 before testing valid grade bands. This gives clearly invalid inputs a separate result. The examples assume score is already a finite number. Form input requires presence checks, numeric conversion, and finite-number validation; range comparisons alone are not a complete input-validation system.</p>\n<h4>Make boundaries and fallbacks explicit</h4><p>“70 and above” means &gt;= 70; “above 70” means &gt; 70. Try 69, 70, and 71 to verify that boundary. Repeat the same reasoning at every threshold. Ordinary middle values cannot establish that exact boundary cases behave correctly. A final else supplies a result for remaining valid scores.</p>\n<p>Declare a shared result outside the branch blocks using let when each branch assigns it and later code reads it. Declaring separate const grade names inside each block would keep them inside those blocks. A complete chain avoids leaving the shared result undefined, which would indicate that no branch assigned it.</p>\n<h4>Do not confuse truthiness with validity</h4><p>False, zero, empty text, null, undefined, and NaN are falsy. A nonempty string such as \"false\" is truthy. Thus if (score) would reject a legitimate numeric zero but accept many unsuitable strings. Explicit comparisons are more informative for grading than a generic truthiness test.</p>\n<p>Trace the example by writing down each condition until the first true one. When the result surprises you, log the input and inspect threshold order before changing several operators at once. As decisions grow, named booleans can describe their intent, and functions can later package repeated logic. Deep nesting is not automatically wrong, but it often makes the remaining cases difficult to see.</p>",
      "codeExample": "const score = 63;\nlet grade;\nif (score < 0 || score > 100) {\n  grade = \"Invalid score\";\n} else if (score >= 70) {\n  grade = \"A\";\n} else if (score >= 60) {\n  grade = \"B\";\n} else if (score >= 50) {\n  grade = \"C\";\n} else {\n  grade = \"F\";\n}\nconsole.log(grade);",
      "exercises": [
        {
          "title": "Guided: stock",
          "instruction": "Print Sold out for stock 0 and Available otherwise.",
          "hint": "Compare stock explicitly with zero.",
          "solution": "const stock = 0;\nif (stock === 0) {\n  console.log(\"Sold out\");\n} else {\n  console.log(\"Available\");\n}",
          "expectedOutput": "Sold out",
          "solutionExplanation": "The equality check gives zero its intended domain meaning.",
          "successCriteria": [
            "Zero produces Sold out.",
            "Positive stock follows the alternative."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: grade priority",
          "instruction": "Correct a chain that gives 85 a B by checking >= 60 before >= 70. Include F as fallback.",
          "hint": "The first true condition wins.",
          "solution": "const score = 85;\nif (score >= 70) {\n  console.log(\"A\");\n} else if (score >= 60) {\n  console.log(\"B\");\n} else {\n  console.log(\"F\");\n}",
          "expectedOutput": "A",
          "solutionExplanation": "Ordering the higher threshold first prevents premature classification.",
          "successCriteria": [
            "85 receives A.",
            "Explains why order matters."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: delivery zones",
          "instruction": "For distance 12, charge 500 for 0–5 inclusive, 900 above 5 through 15, and Outside area above 15. Reject negatives.",
          "hint": "Check invalid input, then increasing upper bounds.",
          "solution": "const distance = 12;\nlet result;\nif (distance < 0) result = \"Invalid distance\";\nelse if (distance <= 5) result = \"500\";\nelse if (distance <= 15) result = \"900\";\nelse result = \"Outside area\";\nconsole.log(result);",
          "expectedOutput": "900",
          "solutionExplanation": "Earlier cases exclude negative and smaller values, so <=15 covers the intended second band.",
          "successCriteria": [
            "12 prints 900.",
            "5 and 15 are handled inclusively.",
            "Negative and distant inputs have explicit results."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "How many blocks execute in one complete if/else-if/else chain?",
          "options": [
            "Every true block",
            "Exactly one",
            "Always two",
            "Only the else block"
          ],
          "correct": 1,
          "explanation": "The first match or final fallback executes."
        },
        {
          "q": "Why check >=70 before >=60?",
          "options": [
            "The smaller number is invalid syntax",
            "JavaScript sorts conditions",
            "High scores satisfy both",
            "Else cannot follow comparisons"
          ],
          "correct": 2,
          "explanation": "The higher-priority category must be selected first."
        },
        {
          "q": "Which includes exactly 70?",
          "options": [
            "score >= 70",
            "score > 70",
            "score < 70",
            "score = 70"
          ],
          "correct": 0,
          "explanation": "The equality part includes the boundary."
        },
        {
          "q": "Why is if(score) unsuitable when zero is valid?",
          "options": [
            "All numbers are truthy",
            "It assigns score",
            "It checks string type",
            "Zero is falsy"
          ],
          "correct": 3,
          "explanation": "Truthiness does not encode domain validity."
        }
      ],
      "pitfalls": "High scores get low grades: A broad lower threshold is first. Check higher thresholds before lower ones. The result is undefined: No branch assigned it. Provide a complete fallback for remaining cases. Zero is rejected as missing: Truthiness is used as a validity check. Use explicit presence and range checks.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Understand comparisons, boolean operators, and block-scoped variables."
        ],
        "outcomes": [
          "Trace the first matching branch.",
          "Order overlapping thresholds correctly.",
          "Test boundaries and distinguish a chain from independent if statements."
        ],
        "expectedOutput": "B",
        "walkthrough": [
          {
            "code": "let grade;",
            "explanation": "Create a shared result binding."
          },
          {
            "code": "score < 0 || score > 100",
            "explanation": "Reject the invalid range before grading."
          },
          {
            "code": "score >= 70",
            "explanation": "63 fails the A threshold."
          },
          {
            "code": "score >= 60",
            "explanation": "63 meets B; remaining branches are skipped."
          },
          {
            "code": "console.log(grade);",
            "explanation": "Read the selected result after the chain."
          }
        ],
        "variations": [
          {
            "title": "Inclusive delivery boundary",
            "code": "const total = 5000;\nlet fee;\nif (total >= 5000) {\n  fee = 0;\n} else {\n  fee = 500;\n}\nconsole.log(fee);",
            "expectedOutput": "0",
            "explanation": "Exactly 5000 qualifies. Changing >= to > would charge the boundary case."
          }
        ],
        "mistakes": [
          {
            "symptom": "High scores get low grades",
            "cause": "A broad lower threshold is first.",
            "fix": "Check higher thresholds before lower ones."
          },
          {
            "symptom": "The result is undefined",
            "cause": "No branch assigned it.",
            "fix": "Provide a complete fallback for remaining cases."
          },
          {
            "symptom": "Zero is rejected as missing",
            "cause": "Truthiness is used as a validity check.",
            "fix": "Use explicit presence and range checks."
          }
        ],
        "summary": [
          "A chain selects its first matching branch.",
          "Rule order and inclusive boundaries determine correctness.",
          "Complete fallbacks cover remaining cases; loops next repeat these decisions."
        ],
        "references": [
          {
            "title": "MDN: if...else",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else"
          },
          {
            "title": "MDN: truthy",
            "url": "https://developer.mozilla.org/en-US/docs/Glossary/Truthy"
          }
        ],
        "validation": {
          "runtime": "javascript",
          "environment": "Modern JavaScript in the academy Worker console or Node.js 20+."
        }
      }
    },
    {
      "id": "js-07",
      "title": "1.7 Loops: for & while",
      "module": "Control Flow",
      "objective": "Write terminating for and while loops and trace counters, accumulators, and loop boundaries.",
      "why": "Repeated calculations should express a rule once instead of copying statements for every item or attempt.",
      "explanation": "<h4>Repeat a rule while a condition holds</h4><p>A loop repeats a block of statements. Use it when the same operation applies to a sequence of numbers or when work continues until a condition changes. Before writing syntax, identify the initial state, the repeated operation, and the stopping rule. A loop without a reachable stopping rule can run forever.</p>\n<p>The main example totals three daily deposits. A counter identifies the current day, and an accumulator stores the running total. These are separate roles: changing the counter moves through the repetitions, while changing the accumulator records the calculation. Mixing their roles is a common reason totals or iteration counts become incorrect.</p>\n<h4>Read the four stages of a for loop</h4><p>The header <code>for (let day = 1; day &lt;= 3; day++)</code> has initialisation, condition, and update separated by semicolons. Initialisation runs once. Before each iteration the condition is checked; a false result exits. The body then executes, and the update runs afterward before the next check. The ++ operator adds one to day.</p>\n<p>The condition &lt;=3 includes day three, so the body executes with 1, 2, and 3. A condition &lt;3 would execute only twice. Draw a small trace table with day and total to verify boundaries. The day binding belongs to the loop; an accumulator needed afterward must be declared outside it.</p>\n<h4>Use while when the stopping condition drives repetition</h4><p>A while loop checks its condition before every iteration, including the first. If the initial condition is false, its body executes zero times. Put an update inside the body that makes progress toward stopping. The countdown variation starts at three, logs the remaining count, and subtracts one until zero makes the condition false.</p>\n<p>For and while can often express the same algorithm. A for header is convenient when initialisation and a regular counter update belong together. While is useful when the condition is the central idea, such as remaining attempts. Neither syntax automatically guarantees termination: an update in the wrong direction can keep the condition true indefinitely.</p>\n<h4>Control early exits without losing progress</h4><p>Break exits the nearest loop immediately. Continue skips the rest of the current iteration; in a for loop its update still runs before the next condition check. In a while loop, continue can accidentally skip a manual update, causing a repeated state forever. Place required progress updates carefully.</p>\n<p>The academy Worker has a limited execution lifetime, but timing out is not a substitute for a sound stopping rule. Practise with small bounds and predict the number of iterations before running. Arrays in the next lesson will introduce ordered lists; then for...of will let you repeat work for each value without manually managing its index.</p>",
      "codeExample": "let total = 0;\nfor (let day = 1; day <= 3; day++) {\n  total += 200;\n  console.log(\"Day\", day, \"total\", total);\n}\nconsole.log(\"Saved:\", total);",
      "exercises": [
        {
          "title": "Guided: count invitations",
          "instruction": "Log Guest 1, Guest 2, and Guest 3 using one for loop.",
          "hint": "Begin at one and include three.",
          "solution": "for (let guest = 1; guest <= 3; guest++) {\n  console.log(\"Guest\", guest);\n}",
          "expectedOutput": "Guest 1\nGuest 2\nGuest 3",
          "solutionExplanation": "One body executes for each intended counter value.",
          "successCriteria": [
            "Three lines appear.",
            "No repeated copied log statements."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: stalled countdown",
          "instruction": "Repair while (remaining > 0) when remaining starts at 2 and the body only logs it.",
          "hint": "A stopping condition needs a changing value.",
          "solution": "let remaining = 2;\nwhile (remaining > 0) {\n  console.log(remaining);\n  remaining--;\n}",
          "expectedOutput": "2\n1",
          "solutionExplanation": "Decrementing after each log reaches zero and exits.",
          "successCriteria": [
            "Terminates.",
            "Logs two then one.",
            "Explains the missing progress step."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: sum even numbers",
          "instruction": "Sum even numbers from 2 through 10 inclusive using a loop, then log the sum once.",
          "hint": "Advance by two and keep the total outside the loop.",
          "solution": "let total = 0;\nfor (let value = 2; value <= 10; value += 2) {\n  total += value;\n}\nconsole.log(total);",
          "expectedOutput": "30",
          "solutionExplanation": "The sequence 2,4,6,8,10 is accumulated without resetting the total.",
          "successCriteria": [
            "Includes both endpoints.",
            "Logs 30.",
            "Can trace each partial sum."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "When is a for loop condition checked?",
          "options": [
            "Only after the last iteration",
            "Before each body execution",
            "Only once",
            "Only when break appears"
          ],
          "correct": 1,
          "explanation": "The condition decides whether every iteration starts."
        },
        {
          "q": "Why declare an accumulator outside the body?",
          "options": [
            "To make it constant",
            "To skip the update",
            "To preserve accumulated state across iterations",
            "To hide it after the loop"
          ],
          "correct": 2,
          "explanation": "Reinitialising inside would discard previous work."
        },
        {
          "q": "How many times does while(false) run?",
          "options": [
            "Zero",
            "One",
            "Two",
            "Forever"
          ],
          "correct": 0,
          "explanation": "While checks before executing its body."
        },
        {
          "q": "What does break do?",
          "options": [
            "Skips only the next log",
            "Restarts the loop",
            "Resets the counter",
            "Exits the nearest loop"
          ],
          "correct": 3,
          "explanation": "Break ends that loop immediately."
        }
      ],
      "pitfalls": "The loop never stops: The state is unchanged or moves away from the stopping boundary. Trace the update and ensure the condition eventually becomes false. One iteration is missing: An exclusive comparison was used for an inclusive requirement. Test the first and final intended counter values. Only the last deposit remains: The accumulator is reset inside the body. Initialise it once before the loop.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Understand let, reassignment, comparisons, and if statements."
        ],
        "outcomes": [
          "Trace initialisation, condition, body, and update in a for loop.",
          "Write a while loop that makes progress toward termination.",
          "Choose correct bounds and explain break versus continue."
        ],
        "expectedOutput": "Day 1 total 200\nDay 2 total 400\nDay 3 total 600\nSaved: 600",
        "walkthrough": [
          {
            "code": "let total = 0;",
            "explanation": "Initialise the accumulator before any deposits."
          },
          {
            "code": "let day = 1; day <= 3; day++",
            "explanation": "Visit the three inclusive day numbers and advance after each body."
          },
          {
            "code": "total += 200;",
            "explanation": "Add one deposit per iteration."
          },
          {
            "code": "console.log(\"Saved:\", total);",
            "explanation": "Read the accumulator after the loop completes."
          }
        ],
        "variations": [
          {
            "title": "Count down with while",
            "code": "let remaining = 3;\nwhile (remaining > 0) {\n  console.log(remaining);\n  remaining--;\n}\nconsole.log(\"Ready\");",
            "expectedOutput": "3\n2\n1\nReady",
            "explanation": "The decreasing state eventually makes >0 false. Starting at zero would skip the body."
          }
        ],
        "mistakes": [
          {
            "symptom": "The loop never stops",
            "cause": "The state is unchanged or moves away from the stopping boundary.",
            "fix": "Trace the update and ensure the condition eventually becomes false."
          },
          {
            "symptom": "One iteration is missing",
            "cause": "An exclusive comparison was used for an inclusive requirement.",
            "fix": "Test the first and final intended counter values."
          },
          {
            "symptom": "Only the last deposit remains",
            "cause": "The accumulator is reset inside the body.",
            "fix": "Initialise it once before the loop."
          }
        ],
        "summary": [
          "Identify initial state, repeated work, and a reachable stopping rule.",
          "Counters advance repetitions; accumulators preserve results.",
          "Arrays next provide ordered collections to iterate."
        ],
        "references": [
          {
            "title": "MDN: loops",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
          }
        ],
        "validation": {
          "runtime": "javascript",
          "environment": "Modern JavaScript in the academy Worker console or Node.js 20+."
        }
      }
    },
    {
      "id": "js-08",
      "title": "2.1 Arrays",
      "module": "Data Structures",
      "objective": "Store ordered values in arrays, read zero-based indices, mutate list contents deliberately, and iterate with for...of.",
      "why": "A shopping list needs an ordered collection that can grow, shrink, and supply values to repeated work.",
      "explanation": "<h4>An array is an ordered collection</h4><p>An array groups values between square brackets, separated by commas. <code>const cart = [\"rice\", \"beans\"]</code> stores two strings in order. Arrays may contain mixed types, but a consistent kind of value often makes processing clearer. An empty list is written [] and has length zero; it is still a usable array.</p>\n<p>Positions are zero-based: cart[0] is the first value and cart[1] the second. The final valid index is length - 1. Reading beyond the end normally returns undefined rather than throwing an index error. That does not make the result useful; check your bounds before using a value that may be missing.</p>\n<h4>Distinguish the array binding from its contents</h4><p>A const array binding cannot be reassigned to a different array, but the array’s contents can change. <code>cart.push(\"oil\")</code> adds a value to the end of the existing array. Push returns the new length, not the modified array. Assigning cart.push(...) to a new variable therefore stores a number.</p>\n<p>Pop removes and returns the last value, or returns undefined for an empty array. Shift removes from the beginning and unshift adds there, moving existing indices. Those methods mutate the collection. Mutating an array changes what every reference to that same array observes, which matters when values are shared between parts of a program.</p>\n<h4>Inspect membership and visit values</h4><p>Includes checks whether a value occurs and returns a boolean. For strings it compares the whole value case-sensitively; \"Rice\" differs from \"rice\". IndexOf returns the first matching index or -1 when absent. Since index zero is valid, do not use the numeric index itself as a truthiness check for membership.</p>\n<p>A for...of loop visits values in order: <code>for (const item of cart)</code> binds each current value to item for that iteration. Use an indexed for loop when position matters, with i &lt; cart.length. For...in enumerates property keys rather than supplying list values and is not the appropriate default for ordinary array traversal.</p>\n<h4>Keep early list processing explicit</h4><p>The example adds oil, removes it, then visits the remaining values. Predict both the list state and the method return values. Array output in the academy console uses JSON notation, so strings appear quoted inside brackets. This is a display representation of the collection, not extra quote characters added to each stored string.</p>\n<p>Methods such as map, filter, and reduce accept callback functions. They are useful, but reading them before learning functions hides an important prerequisite. This lesson uses straightforward iteration; js-10 teaches functions and js-11 then introduces callback-based transformations. When changing a list while iterating, be careful: shifted indices can cause skipped values. Prefer building a separate result for filtering tasks.</p>",
      "codeExample": "const cart = [\"rice\", \"beans\"];\nconst newLength = cart.push(\"oil\");\nconsole.log(newLength, cart[0]);\nconst removed = cart.pop();\nconsole.log(\"Removed:\", removed);\nconsole.log(cart.includes(\"beans\"));\nfor (const item of cart) {\n  console.log(\"Buy:\", item);\n}",
      "exercises": [
        {
          "title": "Guided: packing list",
          "instruction": "Create [\"shirt\", \"shoes\"], append \"hat\", then log length and final value.",
          "hint": "The last index is length - 1.",
          "solution": "const packing = [\"shirt\", \"shoes\"];\npacking.push(\"hat\");\nconsole.log(packing.length, packing[packing.length - 1]);",
          "expectedOutput": "3 hat",
          "solutionExplanation": "Appending changes contents without reassigning the const binding.",
          "successCriteria": [
            "Three items remain.",
            "Reads the last value using a valid index."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: missing first match",
          "instruction": "A test treats indexOf(\"rice\") as a boolean and misses index zero. Use includes to report membership correctly.",
          "hint": "Membership already has a boolean method.",
          "solution": "const cart = [\"rice\", \"beans\"];\nconsole.log(cart.includes(\"rice\"));",
          "expectedOutput": "true",
          "solutionExplanation": "Includes avoids confusing a valid zero index with false.",
          "successCriteria": [
            "Reports true for the first item.",
            "Explains why index zero is valid."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: positive stock",
          "instruction": "From [0,5,2,0,8], build and log a new array containing only positive quantities using a loop and push.",
          "hint": "Keep the source separate from the result.",
          "solution": "const stock = [0, 5, 2, 0, 8];\nconst available = [];\nfor (const quantity of stock) {\n  if (quantity > 0) available.push(quantity);\n}\nconsole.log(available);\nconsole.log(stock.length);",
          "expectedOutput": "[5,2,8]\n5",
          "solutionExplanation": "The condition selects values and push builds a separate list, leaving all five source entries intact.",
          "successCriteria": [
            "Result is [5,2,8].",
            "Source length remains five.",
            "No callback syntax is needed."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Which reads the first item?",
          "options": [
            "items[1]",
            "items[0]",
            "items[length]",
            "items.first()"
          ],
          "correct": 1,
          "explanation": "Array indexing begins at zero."
        },
        {
          "q": "What does push return?",
          "options": [
            "The removed item",
            "A new array",
            "The new length",
            "Always undefined"
          ],
          "correct": 2,
          "explanation": "Push mutates the array and returns its length."
        },
        {
          "q": "Can a const array be pushed into?",
          "options": [
            "Yes, const protects the binding",
            "No, all contents are frozen",
            "Only with strings",
            "Only if empty"
          ],
          "correct": 0,
          "explanation": "Mutating contents is different from reassigning the binding."
        },
        {
          "q": "What does for...of supply for an array?",
          "options": [
            "Property names",
            "Only indices",
            "The length repeatedly",
            "Each value in order"
          ],
          "correct": 3,
          "explanation": "For...of iterates values."
        }
      ],
      "pitfalls": "The first value is skipped: Index one was treated as the first index. Start at zero or use for...of. A variable contains 3 instead of the list: The return value of push was mistaken for the array. Keep the original array binding; push returns length. Deleting during iteration skips entries: Removing elements shifts later indices. Build a separate result or deliberately account for index changes.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Understand variables, loops, and comparisons. Functions are not required; callback methods wait until js-11."
        ],
        "outcomes": [
          "Read array length and valid indices.",
          "Distinguish push/pop mutation from reassignment and method return values.",
          "Use includes and for...of to inspect and process list values."
        ],
        "expectedOutput": "3 rice\nRemoved: oil\ntrue\nBuy: rice\nBuy: beans",
        "walkthrough": [
          {
            "code": "[\"rice\", \"beans\"]",
            "explanation": "Create an ordered list with two elements."
          },
          {
            "code": "cart.push(\"oil\")",
            "explanation": "Mutate the list and return its new length, three."
          },
          {
            "code": "cart.pop()",
            "explanation": "Remove and return oil, restoring the original two values."
          },
          {
            "code": "cart.includes(\"beans\")",
            "explanation": "Return true because the exact string occurs."
          },
          {
            "code": "for (const item of cart)",
            "explanation": "Visit values in their existing order."
          }
        ],
        "variations": [
          {
            "title": "Build a total from a numeric list",
            "code": "const prices = [500, 1200, 300];\nlet total = 0;\nfor (const price of prices) total += price;\nconsole.log(total);\nconsole.log(prices[prices.length - 1]);",
            "expectedOutput": "2000\n300",
            "explanation": "The loop accumulates each value without changing the source list; length minus one selects the final item."
          }
        ],
        "mistakes": [
          {
            "symptom": "The first value is skipped",
            "cause": "Index one was treated as the first index.",
            "fix": "Start at zero or use for...of."
          },
          {
            "symptom": "A variable contains 3 instead of the list",
            "cause": "The return value of push was mistaken for the array.",
            "fix": "Keep the original array binding; push returns length."
          },
          {
            "symptom": "Deleting during iteration skips entries",
            "cause": "Removing elements shifts later indices.",
            "fix": "Build a separate result or deliberately account for index changes."
          }
        ],
        "summary": [
          "Arrays preserve order and use zero-based indices.",
          "Mutating contents differs from reassigning a binding.",
          "Objects next give related values descriptive property names; callback methods follow functions."
        ],
        "references": [
          {
            "title": "MDN: Array",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
          },
          {
            "title": "MDN: for...of",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"
          }
        ],
        "validation": {
          "runtime": "javascript",
          "environment": "Modern JavaScript in the academy Worker console or Node.js 20+."
        }
      }
    },
    {
      "id": "js-09",
      "title": "2.2 Objects",
      "module": "Data Structures",
      "objective": "Model records with object properties, choose dot or bracket access, and distinguish shared references from shallow copies.",
      "why": "A product’s name, price, and stock belong together and are clearer as named fields than unrelated variables or numeric array positions.",
      "explanation": "<h4>Describe one entity with named fields</h4><p>An object literal uses braces around key-value pairs separated by commas. In <code>{ name: \"Milk\", price: 1800 }</code>, name and price are property keys, and the values describe one product. A colon separates each key from its value. This syntax differs from assignment, which uses an equals sign outside the literal.</p>\n<p>Choose field names that express meaning. An object fits one record with several attributes; an array fits a sequence of records. These structures can combine: an array of product objects represents a catalogue. The structure should follow the questions your program needs to ask, rather than putting every value into a large unrelated object.</p>\n<h4>Read and update properties deliberately</h4><p>Dot notation such as product.price uses a literal property name. Bracket notation such as product[field] evaluates an expression to obtain the key. If field contains \"price\", product[field] reads price, whereas product.field looks for a property literally named field. Brackets are also required for names containing spaces or punctuation.</p>\n<p>Assigning product.price = 1900 changes that property. Const prevents reassignment of product itself but does not freeze its properties. Reading an absent property returns undefined. Reading a property from null or undefined throws instead, so distinguish an existing record with a missing field from no record at all.</p>\n<h4>Recognise references and shared mutation</h4><p>Objects are reference values. <code>const alias = product</code> makes alias refer to the same object; it does not duplicate the fields. A change through alias is visible through product because both names reach the same record. This can be intentional shared state or an unexpected source of bugs.</p>\n<p>Object spread, <code>{ ...product }</code>, creates a new outer object by copying enumerable own properties. For the flat numeric and string fields here, updating the copied price leaves the original price unchanged. The copy is shallow: if a field contains a nested object or array, both outer objects still reference that nested value. Do not call this a universal deep copy.</p>\n<h4>Keep data shape and display separate</h4><p>The worked example reads a dynamically selected field, updates a price, and constructs a sentence from the current record. Logging fields explicitly often makes debugging clearer than assuming object property order communicates business meaning. The academy renders whole objects using JSON-like output, which differs from the expandable object inspector in browser developer tools.</p>\n<p>As records become nested, access one level at a time and inspect assumptions. A product with no supplier cannot safely support product.supplier.name without a presence check. Later functions will package transformations, and array methods will process many records. For now, practise explaining which object a name refers to and whether each assignment changes a field, an outer binding, or a separate copy.</p>",
      "codeExample": "const product = { name: \"Milk\", price: 1800, inStock: true };\nconst field = \"price\";\nconsole.log(product.name, product[field]);\nproduct.price = 1900;\nconsole.log(`${product.name}: ${product.price}`);\nconsole.log(product.missing);",
      "exercises": [
        {
          "title": "Guided: student record",
          "instruction": "Create a student with name Yusuf, course JS, and score 88; print a sentence using all fields.",
          "hint": "Read fields with dot notation.",
          "solution": "const student = { name: \"Yusuf\", course: \"JS\", score: 88 };\nconsole.log(`${student.name} scored ${student.score} in ${student.course}`);",
          "expectedOutput": "Yusuf scored 88 in JS",
          "solutionExplanation": "Named properties keep related attributes together and supply the message.",
          "successCriteria": [
            "All three fields are used.",
            "Sentence is built from values."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: dynamic access",
          "instruction": "Given key = \"city\", repair user.key so it reads Lagos from the record.",
          "hint": "Brackets evaluate the key expression.",
          "solution": "const user = { city: \"Lagos\" };\nconst key = \"city\";\nconsole.log(user[key]);",
          "expectedOutput": "Lagos",
          "solutionExplanation": "The bracket expression selects city rather than a literal key property.",
          "successCriteria": [
            "Prints Lagos.",
            "Explains dot versus bracket behavior."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: price proposal",
          "instruction": "Copy {name:\"Bread\",price:800}, change only the copy’s price to 900, and log original and proposed prices.",
          "hint": "Spread makes a sufficient copy for these flat fields.",
          "solution": "const original = { name: \"Bread\", price: 800 };\nconst proposed = { ...original };\nproposed.price = 900;\nconsole.log(original.price, proposed.price);",
          "expectedOutput": "800 900",
          "solutionExplanation": "The new outer object separates price updates while retaining the name.",
          "successCriteria": [
            "Original stays 800.",
            "Proposal is 900.",
            "Can explain why nested objects need more care."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "How do you read the key stored in field?",
          "options": [
            "object.field",
            "object[field]",
            "object->field",
            "field.object"
          ],
          "correct": 1,
          "explanation": "Brackets evaluate a variable to obtain a property name."
        },
        {
          "q": "What does a missing property on an existing object yield?",
          "options": [
            "Always throws",
            "null",
            "undefined",
            "An empty object"
          ],
          "correct": 2,
          "explanation": "The absent field yields undefined; accessing through null is a separate error."
        },
        {
          "q": "What does const alias = original copy?",
          "options": [
            "The reference",
            "All nested data independently",
            "Only the first field",
            "A JSON string"
          ],
          "correct": 0,
          "explanation": "Both bindings refer to the same object."
        },
        {
          "q": "What kind of copy does {...original} make?",
          "options": [
            "A frozen copy",
            "A deep copy",
            "No copy at all",
            "A shallow outer copy"
          ],
          "correct": 3,
          "explanation": "Nested object references remain shared."
        }
      ],
      "pitfalls": "A dynamic lookup returns undefined: Dot notation looked for the literal variable name. Use object[keyVariable] for computed keys. A supposedly separate record also changes: Assignment copied a reference. Create a new object when independent outer fields are needed. A nested copy still changes the source: Spread copied nested references shallowly. Copy each level that must change independently; do not assume a deep clone.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Understand variables, arrays, strings, and loops."
        ],
        "outcomes": [
          "Create and update object properties.",
          "Use bracket notation for dynamic property names.",
          "Explain aliasing and the limits of a shallow object spread copy."
        ],
        "expectedOutput": "Milk 1800\nMilk: 1900\nundefined",
        "walkthrough": [
          {
            "code": "{ name: \"Milk\", price: 1800, inStock: true }",
            "explanation": "Group three named attributes into one record."
          },
          {
            "code": "product[field]",
            "explanation": "Evaluate field to read the property named price."
          },
          {
            "code": "product.price = 1900;",
            "explanation": "Mutate an existing property without reassigning product."
          },
          {
            "code": "product.missing",
            "explanation": "An absent property on an existing object yields undefined."
          }
        ],
        "variations": [
          {
            "title": "An alias versus a shallow copy",
            "code": "const original = { price: 100 };\nconst alias = original;\nconst copy = { ...original };\nalias.price = 120;\ncopy.price = 150;\nconsole.log(original.price, alias.price, copy.price);",
            "expectedOutput": "120 120 150",
            "explanation": "Alias and original share one record; spread creates an independent outer record for these primitive fields."
          }
        ],
        "mistakes": [
          {
            "symptom": "A dynamic lookup returns undefined",
            "cause": "Dot notation looked for the literal variable name.",
            "fix": "Use object[keyVariable] for computed keys."
          },
          {
            "symptom": "A supposedly separate record also changes",
            "cause": "Assignment copied a reference.",
            "fix": "Create a new object when independent outer fields are needed."
          },
          {
            "symptom": "A nested copy still changes the source",
            "cause": "Spread copied nested references shallowly.",
            "fix": "Copy each level that must change independently; do not assume a deep clone."
          }
        ],
        "summary": [
          "Objects name related fields; arrays order collections.",
          "Brackets support computed keys.",
          "Track references when mutating or copying; functions next package reusable transformations."
        ],
        "references": [
          {
            "title": "MDN: working with objects",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects"
          },
          {
            "title": "MDN: spread syntax",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
          }
        ],
        "validation": {
          "runtime": "javascript",
          "environment": "Modern JavaScript in the academy Worker console or Node.js 20+."
        }
      }
    },
    {
      "id": "js-10",
      "title": "2.3 Functions & Arrow Functions",
      "module": "Functions",
      "objective": "Define and call functions with parameters, return values, defaults, and arrow syntax.",
      "why": "One reusable delivery-fee calculation prevents several copies of a rule from drifting apart.",
      "explanation": "<h4>A function packages an operation</h4><p>A function groups statements under a reusable operation. A declaration such as <code>function deliveryFee(km, rate = 150)</code> introduces a name and parameter bindings. Parameters are local names used inside the function; arguments are the values supplied at a call, such as deliveryFee(8). Defining the function does not execute its body.</p>\n<p>A call creates a fresh set of parameter bindings and executes the body. This allows the same rule to work with different inputs without changing global variables. Choose names that describe the result or action. A small calculation function is easiest to inspect when all required data arrives through parameters and its result leaves through return.</p>\n<h4>Return a value instead of only displaying it</h4><p>Return sends a value back to the caller and immediately ends the current function call. The caller can store, combine, compare, or log that value. Console.log displays information but returns undefined; replacing return with logging makes a calculation unavailable to later arithmetic. A function that reaches its end without return also produces undefined.</p>\n<p>The main function returns km multiplied by rate. The separate console call decides how to display the result. Keeping calculation and display separate makes the function reusable in a page, another calculation, or a check. Statements after an executed return are unreachable in that call.</p>\n<h4>Defaults handle omitted or undefined arguments</h4><p>A default parameter is used when the corresponding argument is omitted or explicitly undefined. It is not substituted for every falsy value. Passing zero as the rate deliberately produces a zero fee; passing null also does not trigger the default. Decide which inputs your contract accepts rather than treating every unusual value as missing.</p>\n<p>Local parameter and variable names are scoped to the call. A function can also read outer bindings, but hidden dependencies make its behavior harder to predict. These exercises use direct inputs so that calling with the same accepted values produces the same result. Input validation is a separate responsibility that should be documented rather than assumed.</p>\n<h4>Read arrow syntax and its boundaries</h4><p>An arrow such as <code>(name) =&gt; \"Hello \" + name</code> is a function expression. When its body is one expression without braces, that expression is returned automatically. A brace body, <code>(name) =&gt; { return \"Hello \" + name; }</code>, requires an explicit return. Braces containing a calculation alone execute it and discard its value.</p>\n<p>Arrow functions differ from ordinary functions in their handling of this and cannot be used as constructors. Those topics are beyond these simple calculations; do not assume the syntaxes are interchangeable in every context. For callback methods next, arrows provide a concise way to supply an operation as a value. First practise calling functions and explaining exactly which result returns to the caller.</p>",
      "codeExample": "function deliveryFee(km, rate = 150) {\n  return km * rate;\n}\nconst greet = (name) => `Hello, ${name}!`;\nconst fee = deliveryFee(8);\nconsole.log(fee);\nconsole.log(deliveryFee(8, 0));\nconsole.log(greet(\"Ngozi\"));",
      "exercises": [
        {
          "title": "Guided: VAT helper",
          "instruction": "Return amount including tax from addVAT(amount, rate=0.075), then log addVAT(10000).",
          "hint": "Multiply by one plus the rate.",
          "solution": "function addVAT(amount, rate = 0.075) {\n  return amount * (1 + rate);\n}\nconsole.log(addVAT(10000));",
          "expectedOutput": "10750",
          "solutionExplanation": "The rate adds a fraction of the base amount and the return preserves a reusable number.",
          "successCriteria": [
            "Returns rather than only logs.",
            "Produces 10750."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: discarded sum",
          "instruction": "Repair const add = (a,b) => { a+b; }; so add(2,3) returns 5.",
          "hint": "A statement body needs an explicit return.",
          "solution": "const add = (a, b) => {\n  return a + b;\n};\nconsole.log(add(2, 3));",
          "expectedOutput": "5",
          "solutionExplanation": "Return sends the calculation back instead of discarding it.",
          "successCriteria": [
            "Produces 5.",
            "Explains the difference from an expression body."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: subtotal function",
          "instruction": "Write subtotal(price, quantity=1). Log calls for (800), (800,3), and (800,0).",
          "hint": "A zero quantity is explicit input and must remain zero.",
          "solution": "function subtotal(price, quantity = 1) {\n  return price * quantity;\n}\nconsole.log(subtotal(800));\nconsole.log(subtotal(800, 3));\nconsole.log(subtotal(800, 0));",
          "expectedOutput": "800\n2400\n0",
          "solutionExplanation": "Defaulting only missing arguments preserves the meaningful zero case.",
          "successCriteria": [
            "Handles default quantity.",
            "Handles three items.",
            "Does not turn zero into one."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "What is a parameter?",
          "options": [
            "The final printed line",
            "A local input name in a function definition",
            "The function’s filename",
            "Only a numeric literal"
          ],
          "correct": 1,
          "explanation": "Arguments supply values to the parameter names."
        },
        {
          "q": "What does a function without return produce?",
          "options": [
            "The last calculation automatically",
            "null",
            "undefined",
            "Its source code"
          ],
          "correct": 2,
          "explanation": "Ordinary block bodies need return to supply a value."
        },
        {
          "q": "When is a default parameter used?",
          "options": [
            "When omitted or undefined",
            "For every falsy value",
            "Only for zero",
            "Only for null"
          ],
          "correct": 0,
          "explanation": "Explicit zero, false, and null do not trigger the default."
        },
        {
          "q": "Which arrow returns a+b?",
          "options": [
            "(a,b) => { a+b; }",
            "(a,b) -> a+b",
            "=> function(a,b)",
            "(a,b) => a+b"
          ],
          "correct": 3,
          "explanation": "An expression body returns implicitly."
        }
      ],
      "pitfalls": "The caller receives undefined: The function logs a result or omits return. Return the computed value and log at the call site. An arrow silently returns undefined: A block body contains an expression without return. Add return or use an expression body without braces. A zero rate is replaced unexpectedly: A manual fallback uses rate || default. Use a default parameter when only omitted or undefined arguments should default.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Understand variables, arithmetic, conditionals, and objects."
        ],
        "outcomes": [
          "Distinguish parameters, arguments, return values, and logging.",
          "Use default parameters and test explicit zero values.",
          "Translate an expression arrow into a block body with an explicit return."
        ],
        "expectedOutput": "1200\n0\nHello, Ngozi!",
        "walkthrough": [
          {
            "code": "function deliveryFee(km, rate = 150)",
            "explanation": "Declare two parameters, one with a default for missing input."
          },
          {
            "code": "return km * rate;",
            "explanation": "Return a number to the caller."
          },
          {
            "code": "const greet = (name) => ...",
            "explanation": "Bind an expression-body arrow that implicitly returns text."
          },
          {
            "code": "deliveryFee(8)",
            "explanation": "Use default rate 150."
          },
          {
            "code": "deliveryFee(8, 0)",
            "explanation": "Preserve explicit zero rather than replacing it with the default."
          }
        ],
        "variations": [
          {
            "title": "A block arrow needs return",
            "code": "const add = (a, b) => {\n  return a + b;\n};\nconsole.log(add(2, 3));\nconsole.log(add(10, -2));",
            "expectedOutput": "5\n8",
            "explanation": "An explicit return is required because braces make this a statement body. Different arguments reuse the same operation."
          }
        ],
        "mistakes": [
          {
            "symptom": "The caller receives undefined",
            "cause": "The function logs a result or omits return.",
            "fix": "Return the computed value and log at the call site."
          },
          {
            "symptom": "An arrow silently returns undefined",
            "cause": "A block body contains an expression without return.",
            "fix": "Add return or use an expression body without braces."
          },
          {
            "symptom": "A zero rate is replaced unexpectedly",
            "cause": "A manual fallback uses rate || default.",
            "fix": "Use a default parameter when only omitted or undefined arguments should default."
          }
        ],
        "summary": [
          "Definitions describe operations; calls execute them with arguments.",
          "Return makes a result reusable independently of display.",
          "Defaults preserve explicit zero; callbacks next pass functions into array operations."
        ],
        "references": [
          {
            "title": "MDN: functions",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
          },
          {
            "title": "MDN: arrow functions",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
          }
        ],
        "validation": {
          "runtime": "javascript",
          "environment": "Modern JavaScript in the academy Worker console or Node.js 20+."
        }
      }
    },
    {
      "id": "js-11",
      "title": "2.4 Array Methods Deep Dive",
      "module": "Functions",
      "objective": "Select map, filter, reduce, find, some, and every according to the result shape required.",
      "why": "An order report needs different operations for transforming records, selecting records, finding one, and calculating totals.",
      "explanation": "<h4>A callback describes work for one value</h4><p>Array methods can receive a function as an argument. That function is called a callback because the method invokes it while processing elements. In orders.map(order =&gt; order.id), order is a parameter for the current record, not a special keyword. The method controls iteration; the callback describes the operation.</p>\n<p>The return value matters. An expression arrow returns automatically, while a brace body needs return. A callback that only logs may look active but return undefined, producing unusable map results or false filtering decisions. Name the intended output shape before choosing a method.</p>\n<h4>Transform, select, or find</h4><p>Map creates a new array containing one callback result per present source element. Use it to turn records into labels or numbers. Filter creates a new array containing original elements whose predicate returns a truthy value. It selects; it does not transform the selected records. Both leave the outer source array unchanged.</p>\n<p>Find returns the first matching element, or undefined when nothing matches. Filter always returns an array, even when there is one or zero matches. Do not immediately read a property of find’s result without considering absence. Also remember that selected object elements still refer to the original records; a new array does not imply deep-cloned contents.</p>\n<h4>Combine a sequence or ask a yes/no question</h4><p>Reduce combines values through an accumulator. In <code>reduce((sum, order) =&gt; sum + order.total, 0)</code>, sum is the prior combined result, order is the current record, and zero is the explicit initial value. Returning the updated sum supplies the accumulator for the next step. An empty array with this initial value yields zero safely.</p>\n<p>Some asks whether at least one element passes; every asks whether all elements pass. Both return booleans and stop as soon as the result is known. On an empty array, some returns false and every returns true: no counterexample violates “all.” If a requirement needs at least one record and all records valid, check length as well as every.</p>\n<h4>Make transformations easy to inspect</h4><p>The worked report maps IDs, filters substantial orders, totals spending, finds one ID, and checks two predicates. Each call demonstrates a different result shape. Logging separate lines makes those shapes visible. The academy serialises arrays and objects as JSON, so a list of IDs appears as [1,2,3].</p>\n<p>Chaining filter followed by map is often clear: select relevant records, then project their labels. Avoid long chains that hide intermediate assumptions. These methods are synchronous; passing an async callback to map produces promises rather than awaited values. Asynchronous coordination arrives later. For now, focus on correct callback returns, unchanged source structure, and empty-input behavior.</p>",
      "codeExample": "const orders = [\n  { id: 1, total: 2000 },\n  { id: 2, total: 5000 },\n  { id: 3, total: 1500 }\n];\nconsole.log(orders.map(order => order.id));\nconsole.log(orders.filter(order => order.total >= 2000).map(order => order.id));\nconsole.log(orders.reduce((sum, order) => sum + order.total, 0));\nconsole.log(orders.find(order => order.id === 2).total);\nconsole.log(orders.some(order => order.total >= 5000));\nconsole.log(orders.every(order => order.total > 0));",
      "exercises": [
        {
          "title": "Guided: names",
          "instruction": "Map [{name:\"Ada\"},{name:\"Bisi\"}] into names.",
          "hint": "Return one name for each record.",
          "solution": "const people = [{ name: \"Ada\" }, { name: \"Bisi\" }];\nconsole.log(people.map(person => person.name));",
          "expectedOutput": "[\"Ada\",\"Bisi\"]",
          "solutionExplanation": "Map changes the element representation while preserving order and count.",
          "successCriteria": [
            "Returns a new array of strings.",
            "Keeps source order."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: empty total",
          "instruction": "Repair [].reduce((sum,n)=>sum+n) so it returns zero without throwing.",
          "hint": "Choose an additive starting value.",
          "solution": "const values = [];\nconsole.log(values.reduce((sum, value) => sum + value, 0));",
          "expectedOutput": "0",
          "solutionExplanation": "The explicit seed is the result when there are no elements.",
          "successCriteria": [
            "Handles the empty array.",
            "Explains why zero is the correct seed."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: available catalogue",
          "instruction": "From [{name:\"Rice\",stock:0},{name:\"Beans\",stock:4},{name:\"Oil\",stock:2}], list available names and calculate total stock.",
          "hint": "Filter and map answer a list question; reduce answers a total question.",
          "solution": "const products = [{ name: \"Rice\", stock: 0 }, { name: \"Beans\", stock: 4 }, { name: \"Oil\", stock: 2 }];\nconsole.log(products.filter(product => product.stock > 0).map(product => product.name));\nconsole.log(products.reduce((sum, product) => sum + product.stock, 0));",
          "expectedOutput": "[\"Beans\",\"Oil\"]\n6",
          "solutionExplanation": "Selection excludes zero stock; projection extracts names; aggregation combines all quantities.",
          "successCriteria": [
            "Names are Beans and Oil.",
            "Total stock is six.",
            "Uses methods matching each output shape."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Which method returns the first matching element?",
          "options": [
            "filter",
            "find",
            "map",
            "every"
          ],
          "correct": 1,
          "explanation": "Find returns a single element or undefined."
        },
        {
          "q": "Why supply reduce with zero for a numeric sum?",
          "options": [
            "It skips the first element",
            "It sorts numbers",
            "It handles empty input and sets the accumulator type",
            "It mutates the source"
          ],
          "correct": 2,
          "explanation": "An explicit seed defines the starting and empty result."
        },
        {
          "q": "What does filter return with no matches?",
          "options": [
            "An empty array",
            "undefined",
            "false",
            "null"
          ],
          "correct": 0,
          "explanation": "Filter always returns an array."
        },
        {
          "q": "What is [].every(predicate)?",
          "options": [
            "Always false",
            "undefined",
            "An error",
            "true"
          ],
          "correct": 3,
          "explanation": "There is no element that violates the predicate."
        }
      ],
      "pitfalls": "Map produces undefined entries: A block callback forgot return. Return the transformed value explicitly. Reduce fails on an empty list: No initial accumulator was supplied. Provide a seed with the intended result type. Reading find(...).name throws: No element matched, so find returned undefined. Check the result before reading properties.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Complete js-08 arrays, js-09 objects, and js-10 functions including arrow returns."
        ],
        "outcomes": [
          "Write callbacks that return the value or predicate each method expects.",
          "Choose the correct method for list, single-value, and boolean results.",
          "Handle empty arrays and absent matches deliberately."
        ],
        "expectedOutput": "[1,2,3]\n[1,2]\n8500\n5000\ntrue\ntrue",
        "walkthrough": [
          {
            "code": "map(order => order.id)",
            "explanation": "Produce one numeric ID per record."
          },
          {
            "code": "filter(...).map(...)",
            "explanation": "Keep qualifying records, then extract their IDs."
          },
          {
            "code": "reduce((sum, order) => sum + order.total, 0)",
            "explanation": "Accumulate 2000, 7000, then 8500."
          },
          {
            "code": "find(order => order.id === 2)",
            "explanation": "This known fixture contains ID 2, so reading total is safe here."
          },
          {
            "code": "some(...), every(...)",
            "explanation": "Ask whether any reaches 5000 and whether all totals are positive."
          }
        ],
        "variations": [
          {
            "title": "Empty collections and absent matches",
            "code": "const orders = [];\nconsole.log(orders.reduce((sum, order) => sum + order.total, 0));\nconsole.log(orders.find(order => order.id === 2));\nconsole.log(orders.some(order => order.total > 0));\nconsole.log(orders.every(order => order.total > 0));",
            "expectedOutput": "0\nundefined\nfalse\ntrue",
            "explanation": "An explicit reduce seed handles emptiness. Find has no result, some finds no witness, and every has no failing element."
          }
        ],
        "mistakes": [
          {
            "symptom": "Map produces undefined entries",
            "cause": "A block callback forgot return.",
            "fix": "Return the transformed value explicitly."
          },
          {
            "symptom": "Reduce fails on an empty list",
            "cause": "No initial accumulator was supplied.",
            "fix": "Provide a seed with the intended result type."
          },
          {
            "symptom": "Reading find(...).name throws",
            "cause": "No element matched, so find returned undefined.",
            "fix": "Check the result before reading properties."
          }
        ],
        "summary": [
          "Choose a method from the result shape.",
          "Callbacks must return the value or decision the method expects.",
          "Handle empty lists and absent matches; DOM lessons next connect values to visible pages."
        ],
        "references": [
          {
            "title": "MDN: Array methods",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
          },
          {
            "title": "MDN: reduce",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
          }
        ],
        "validation": {
          "runtime": "javascript",
          "environment": "Modern JavaScript in the academy Worker console or Node.js 20+."
        }
      }
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
