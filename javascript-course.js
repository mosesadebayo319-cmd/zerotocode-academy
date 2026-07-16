// ZeroToCode Academy — JavaScript curriculum (25 lessons)
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
      "explanation": "JavaScript makes pages interactive. You can write it in a <code>&lt;script&gt;</code> tag, an external .js file, or the browser console (F12).<br><br><strong>Real life:</strong> show/hide a mobile menu, validate a payment form, update a cart total without reloading.",
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
      "pitfalls": "Confusing JavaScript with Java — they are different languages.",
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
      "explanation": "Prefer <code>const</code> by default. Use <code>let</code> when the value must change. Avoid <code>var</code> (function-scoped, older style).<br>Names: camelCase — <code>totalPrice</code>.",
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
      "pitfalls": "Reassigning const throws TypeError. Redeclaring let/const in same scope is illegal.",
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
      "explanation": "Primitive types: string, number, boolean, null, undefined, symbol, bigint.<br>Objects include arrays and plain objects.<br>Use <code>typeof value</code> (note: typeof null === \"object\" — historical quirk).",
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
      "pitfalls": "\"5\" + 1 → \"51\" (string concat). Use Number(\"5\") + 1.",
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
      "explanation": "Arithmetic: + - * / % **<br>Compare: === !== &lt; &gt; &lt;=<br>Prefer <code>===</code> over <code>==</code> (avoids type coercion surprises).<br>Logic: &amp;&amp; || !",
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
      "pitfalls": "",
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
      "explanation": "Template literals use backticks: <code>`Hello ${name}`</code>.<br>Methods: length, toUpperCase(), includes(), trim(), split().",
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
      "pitfalls": "",
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
      "explanation": "if (condition) { ... } else if (...) { ... } else { ... }",
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
      "pitfalls": "Missing braces with multi-line bodies causes bugs.",
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
      "explanation": "for (let i=0; i&lt;n; i++) { }<br>while (condition) { }<br>for...of for arrays.",
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
      "pitfalls": "",
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
      "explanation": "const arr = [1,2,3]<br>push, pop, shift, unshift, includes, indexOf<br>map/filter/find return new data (non-mutating style).",
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
      "pitfalls": "",
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
      "explanation": "const user = { name: \"Ada\", age: 22 }<br>Access: user.name or user[\"name\"]<br>Nested objects and arrays of objects are common.",
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
      "pitfalls": "",
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
      "explanation": "function add(a,b) { return a+b }<br>const add = (a,b) => a+b<br>Default params: function greet(name=\"friend\")",
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
      "pitfalls": "",
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
      "explanation": "map → transform each<br>filter → keep some<br>reduce → combine to one value<br>find → first match",
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
      "pitfalls": "",
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
      "explanation": "document.querySelector(\"css selector\") → first match<br>querySelectorAll → NodeList<br>getElementById(\"id\")",
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
      "pitfalls": "",
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
      "explanation": "el.textContent = \"...\" (safe for text)<br>el.innerHTML = \"...\" (HTML — careful XSS)<br>el.classList.add/remove/toggle<br>el.style.color = \"...\"",
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
      "pitfalls": "innerHTML with user input can enable XSS attacks.",
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
      "explanation": "el.addEventListener(\"click\", handler)<br>event.preventDefault() on forms<br>event.target",
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
      "pitfalls": "",
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
      "explanation": "input.value<br>Check length, includes(\"@\"), simple regex<br>Show error messages in the DOM",
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
      "pitfalls": "",
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
      "explanation": "localStorage.setItem(key, string)<br>getItem, removeItem<br>JSON.stringify / parse for objects",
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
      "pitfalls": "",
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
      "explanation": "JSON.stringify(obj)<br>JSON.parse(text)",
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
      "pitfalls": "",
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
      "explanation": "const res = await fetch(url)<br>const data = await res.json()<br>Handle errors with try/catch",
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
      "pitfalls": "Forgetting await — you get a Promise, not data.",
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
      "explanation": "new Promise((resolve, reject) => ...)<br>then/catch/finally<br>Prefer async/await for readability",
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
      "pitfalls": "",
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
      "explanation": "export function add(){}<br>export default ...<br>import { add } from \"./math.js\"<br>type=\"module\" on script tag",
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
      "pitfalls": "",
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
      "explanation": "Inputs: bill, tip percent. Output: tip amount + grand total. Use functions and clear UI updates.",
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
      "pitfalls": "",
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
      "explanation": "todos = [{id, text, done}]<br>addTodo, toggleTodo, removeTodo",
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
      "pitfalls": "",
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
      "explanation": "cart lines: {id, name, price, qty}<br>subtotal = sum price*qty",
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
      "pitfalls": "",
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
      "explanation": "console.log / table / error<br>Breakpoints in DevTools<br>Pitfalls: == coercion, const reassign, async without await, null DOM nodes",
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
      "pitfalls": "Assuming querySelector always finds an element.",
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
      "explanation": "Features: menu open/close, form validate name/email, success message, optional localStorage draft.",
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
      "pitfalls": "",
      "path": "builder",
      "project": true,
      "difficulty": "intermediate"
    }
  ],
  "totalLessons": 25
};
