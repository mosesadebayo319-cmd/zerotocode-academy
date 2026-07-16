// ZeroToCode Academy — HTML & CSS curriculum (18 lessons)
// Explanations expanded for deeper beginner comprehension
window.WEB_COURSE = {
  "id": "web",
  "name": "HTML & CSS",
  "icon": "🌐",
  "color": "sky",
  "subtitle": "Build beautiful, responsive websites from scratch",
  "globalName": "WEB_COURSE",
  "lessons": [
    {
      "id": "web-01",
      "title": "1.1 How the Web Works",
      "module": "Foundations",
      "objective": "Describe HTML, CSS, and the browser’s role.",
      "why": "When you open a shop website, the browser requests HTML (structure), CSS (style), and JS (behavior).",
      "explanation": "<p><strong>What you will learn.</strong> Describe HTML, CSS, and the browser’s role. By the end of this lesson you should be able to explain <em>How the Web Works</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: When you open a shop website, the browser requests HTML (structure), CSS (style), and JS (behavior). Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Browsers request HTML for structure, CSS for presentation, and JavaScript for behavior. Understanding that trio makes every web topic easier.</p>\n<p><strong>Core explanation.</strong> HTML = structure/content CSS = look and layout JS = interactivity Browser downloads files and paints the page. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Describe HTML, CSS, and the browser’s role.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 12 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>How the Web Works</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Name the trio”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "<!-- index.html -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <title>My Shop</title>\n  <link rel=\"stylesheet\" href=\"styles.css\" />\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>\n</html>",
      "exercises": [
        {
          "title": "Name the trio",
          "instruction": "In a comment-like sentence, state what HTML/CSS/JS each do.",
          "solution": "// HTML structure, CSS style, JS behavior",
          "hint": "Keep it simple",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "CSS is responsible for?",
          "options": [
            "Database queries",
            "Visual style and layout",
            "Server RAM",
            "DNS only"
          ],
          "correct": 1,
          "explanation": "Look and layout."
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-02",
      "title": "1.2 Document Structure",
      "module": "Foundations",
      "objective": "Build a valid HTML5 document skeleton.",
      "why": "Every professional page starts with doctype, html, head, body.",
      "explanation": "<p><strong>What you will learn.</strong> Build a valid HTML5 document skeleton. By the end of this lesson you should be able to explain <em>Document Structure</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Every professional page starts with doctype, html, head, body. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle <em>data</em> (what something knows) with <em>behavior</em> (what it can do). Blueprints (classes/structs) describe the shape; instances are the real things your program uses.</p>\n<p><strong>Core explanation.</strong> Required pieces: DOCTYPE, html lang, head (charset, title, meta viewport), body. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Model the real-world noun (fields); attach verbs (methods); create two instances; change one instance and prove the other is unaffected. That demonstrates object identity.</p>\n<p><strong>Walking through the example.</strong> The sample has about 11 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Document Structure</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Your page shell”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>City Bakery</title>\n</head>\n<body>\n  <p>Fresh bread daily.</p>\n</body>\n</html>",
      "exercises": [
        {
          "title": "Your page shell",
          "instruction": "Write a full skeleton with title about your business idea.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Ada Fashion Hub</title>\n</head>\n<body>\n  <h1>Ada Fashion Hub</h1>\n</body>\n</html>",
          "hint": "Include viewport meta",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "viewport meta helps with?",
          "options": [
            "SEO only",
            "Mobile scaling/responsive layout",
            "Python speed",
            "SQL joins"
          ],
          "correct": 1,
          "explanation": "Critical for mobile."
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-03",
      "title": "1.3 Text, Headings, Paragraphs, Lists",
      "module": "Content",
      "objective": "Use headings, paragraphs, and lists correctly.",
      "why": "Product pages need clear titles, descriptions, and bullet feature lists.",
      "explanation": "<p><strong>What you will learn.</strong> Use headings, paragraphs, and lists correctly. By the end of this lesson you should be able to explain <em>Text, Headings, Paragraphs, Lists</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Product pages need clear titles, descriptions, and bullet feature lists. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Text is a sequence of characters. Almost everything users see (names, messages, receipts, SMS) is text — so string skills show up in every app. Learn to build, cut, clean, and format text carefully.</p>\n<p><strong>Core explanation.</strong> h1–h6 (one h1 per page ideally), p, ul/ol/li, strong/em Do not skip heading levels randomly. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Create the collection with sample items; access one item by position; add/remove an item; loop through all items to compute a total or print a report. If you can do those four moves, you “own” the structure.</p>\n<p><strong>Walking through the example.</strong> The sample has about 12 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Text, Headings, Paragraphs, Lists</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Service list”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Quote mismatches, forgetting that indexing starts at 0, or assuming string methods edit text in place (many return a new string).</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "<h1>Mama Nkechi Provisions</h1>\n<p>Quality foodstuff at fair prices.</p>\n<h2>Why shop with us</h2>\n<ul>\n  <li>Fresh stock weekly</li>\n  <li>Same-day delivery in Lagos</li>\n</ul>\n<ol>\n  <li>Add items</li>\n  <li>Checkout</li>\n  <li>Receive order</li>\n</ol>",
      "exercises": [
        {
          "title": "Service list",
          "instruction": "Create h1, intro p, and ul with 3 services.",
          "solution": "<h1>QuickFix Repairs</h1>\n<p>We fix phones and laptops.</p>\n<ul>\n  <li>Screen replacement</li>\n  <li>Battery service</li>\n  <li>Data recovery</li>\n</ul>",
          "hint": "ul for unordered",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "ul is for?",
          "options": [
            "Ordered steps only",
            "Unordered bullet lists",
            "Images",
            "Tables"
          ],
          "correct": 1,
          "explanation": "Unordered list."
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-04",
      "title": "1.4 Links & Images",
      "module": "Content",
      "objective": "Add navigation links and accessible images.",
      "why": "Users click links to WhatsApp, products, and contact pages. Images need alt text.",
      "explanation": "<p><strong>What you will learn.</strong> Add navigation links and accessible images. By the end of this lesson you should be able to explain <em>Links &amp; Images</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Users click links to WhatsApp, products, and contact pages. Images need alt text. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> HTML describes structure and meaning (headings, forms, landmarks, links). Clear structure helps browsers, assistive tech, SEO, and your future self.</p>\n<p><strong>Core explanation.</strong> a href=\"...\" img src alt width/height Open new tab: target=\"_blank\" rel=\"noopener\" Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Add navigation links and accessible images.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 3 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Links &amp; Images</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Product image”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Empty or missing alt hurts accessibility.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "<a href=\"https://wa.me/2348012345678\">Chat on WhatsApp</a>\n<a href=\"about.html\">About us</a>\n<img src=\"bread.jpg\" alt=\"Fresh agege bread on a tray\" width=\"400\" />",
      "exercises": [
        {
          "title": "Product image",
          "instruction": "Write an img tag with descriptive alt for a shoe product.",
          "solution": "<img src=\"shoe.jpg\" alt=\"Black leather sneakers size 42\" />",
          "hint": "Alt describes the image",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "alt attribute is important for?",
          "options": [
            "Faster CPU",
            "Accessibility & SEO when image fails",
            "Only print CSS",
            "Fonts"
          ],
          "correct": 1,
          "explanation": "Screen readers + fallback."
        }
      ],
      "pitfalls": "Empty or missing alt hurts accessibility.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-05",
      "title": "1.5 Semantic Layout Tags",
      "module": "Content",
      "objective": "Structure pages with header, nav, main, article, section, footer.",
      "why": "Semantic HTML helps SEO and screen readers — better than div soup.",
      "explanation": "<p><strong>What you will learn.</strong> Structure pages with header, nav, main, article, section, footer. By the end of this lesson you should be able to explain <em>Semantic Layout Tags</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Semantic HTML helps SEO and screen readers — better than div soup. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> HTML describes structure and meaning (headings, forms, landmarks, links). Clear structure helps browsers, assistive tech, SEO, and your future self.</p>\n<p><strong>Core explanation.</strong> header, nav, main, article, section, aside, footer Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Structure pages with header, nav, main, article, section, footer.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 11 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Semantic Layout Tags</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Blog shell”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "<header>\n  <h1>Green Farms</h1>\n  <nav>\n    <a href=\"#products\">Products</a>\n    <a href=\"#contact\">Contact</a>\n  </nav>\n</header>\n<main>\n  <section id=\"products\"><h2>Products</h2></section>\n</main>\n<footer>© 2026 Green Farms</footer>",
      "exercises": [
        {
          "title": "Blog shell",
          "instruction": "Semantic header, main with article, footer.",
          "solution": "<header><h1>My Blog</h1></header>\n<main><article><h2>Post title</h2><p>Body...</p></article></main>\n<footer>Contact</footer>",
          "hint": "Prefer semantic tags",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "main should contain?",
          "options": [
            "Site footer links only",
            "Primary page content",
            "Only CSS",
            "Scripts only"
          ],
          "correct": 1,
          "explanation": "One main landmark."
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-06",
      "title": "1.6 Forms & Inputs",
      "module": "Content",
      "objective": "Build forms with labels, inputs, and buttons.",
      "why": "Contact forms, checkout, signup — business sites collect data safely.",
      "explanation": "<p><strong>What you will learn.</strong> Build forms with labels, inputs, and buttons. By the end of this lesson you should be able to explain <em>Forms &amp; Inputs</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Contact forms, checkout, signup — business sites collect data safely. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> In the browser, HTML becomes a live tree of elements (the DOM). JavaScript finds nodes and updates them when users click, type, or submit forms.</p>\n<p><strong>Core explanation.</strong> form, label, input, textarea, select, button Always link label via for/id type=email, tel, number, submit Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Build forms with labels, inputs, and buttons.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 9 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Forms &amp; Inputs</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Order form”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "<form action=\"#\" method=\"post\">\n  <label for=\"name\">Full name</label>\n  <input id=\"name\" name=\"name\" type=\"text\" required />\n\n  <label for=\"email\">Email</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required />\n\n  <label for=\"msg\">Message</label>\n  <textarea id=\"msg\" name=\"message\" rows=\"4\"></textarea>\n\n  <button type=\"submit\">Send</button>\n</form>",
      "exercises": [
        {
          "title": "Order form",
          "instruction": "Form with name, phone (tel), and submit button.",
          "solution": "<form>\n  <label for=\"n\">Name</label>\n  <input id=\"n\" name=\"name\" required />\n  <label for=\"p\">Phone</label>\n  <input id=\"p\" name=\"phone\" type=\"tel\" required />\n  <button type=\"submit\">Order</button>\n</form>",
          "hint": "Labels for each input",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Why associate label with input?",
          "options": [
            "Decoration",
            "Click/tap usability & accessibility",
            "Faster JS",
            "HTTPS"
          ],
          "correct": 1,
          "explanation": "Larger hit target + screen readers."
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-07",
      "title": "2.1 CSS Selectors & Units",
      "module": "CSS Basics",
      "objective": "Target elements with selectors; use rem/px/% units.",
      "why": "Style all buttons the same with one rule — selectors are power tools.",
      "explanation": "<p><strong>What you will learn.</strong> Target elements with selectors; use rem/px/% units. By the end of this lesson you should be able to explain <em>CSS Selectors &amp; Units</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Style all buttons the same with one rule — selectors are power tools. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern layout tools (Flexbox/Grid) replace fragile positioning hacks and help pages work on phones.</p>\n<p><strong>Core explanation.</strong> element, .class, #id, descendant units: px, rem, em, %, vh/vw Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Identify the element structure; select the node; update content or style; respond to a user event; verify on a narrow phone-sized width when layout is involved.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>CSS Selectors &amp; Units</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Card class”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "/* element */\nh1 { color: #0f172a; }\n\n/* class */\n.btn { padding: 0.75rem 1.25rem; }\n\n/* id */\n#hero { min-height: 50vh; }\n\np { font-size: 1rem; line-height: 1.6; }",
      "exercises": [
        {
          "title": "Card class",
          "instruction": ".card with padding 1.5rem and white background.",
          "solution": ".card {\n  padding: 1.5rem;\n  background: white;\n}",
          "hint": "class selector uses dot",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": ".btn selects?",
          "options": [
            "id btn",
            "class btn",
            "tag btn",
            "All buttons always"
          ],
          "correct": 1,
          "explanation": "Dot = class."
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-08",
      "title": "2.2 Colors, Typography, Box Model",
      "module": "CSS Basics",
      "objective": "Apply color, fonts, margin, border, padding.",
      "why": "Professional brands feel consistent via type and spacing systems.",
      "explanation": "<p><strong>What you will learn.</strong> Apply color, fonts, margin, border, padding. By the end of this lesson you should be able to explain <em>Colors, Typography, Box Model</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Professional brands feel consistent via type and spacing systems. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern layout tools (Flexbox/Grid) replace fragile positioning hacks and help pages work on phones.</p>\n<p><strong>Core explanation.</strong> color, background, font-family, font-size, font-weight box model: content + padding + border + margin box-sizing: border-box recommended Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Identify the element structure; select the node; update content or style; respond to a user event; verify on a narrow phone-sized width when layout is involved.</p>\n<p><strong>Walking through the example.</strong> The sample has about 13 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Colors, Typography, Box Model</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Button look”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "* { box-sizing: border-box; }\nbody {\n  margin: 0;\n  font-family: system-ui, sans-serif;\n  color: #0f172a;\n  background: #f8fafc;\n}\n.card {\n  padding: 1.5rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 1rem;\n  margin-bottom: 1rem;\n}",
      "exercises": [
        {
          "title": "Button look",
          "instruction": "Style .btn-primary with background teal, white text, padding, radius. ",
          "solution": ".btn-primary {\n  background: #0d9488;\n  color: white;\n  padding: 0.75rem 1.25rem;\n  border-radius: 0.75rem;\n  border: none;\n}",
          "hint": "padding + radius",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "box-sizing: border-box means?",
          "options": [
            "Ignore padding",
            "Width includes padding/border",
            "Only margins count",
            "No borders allowed"
          ],
          "correct": 1,
          "explanation": "Easier layouts."
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-09",
      "title": "2.3 Specificity & Cascade",
      "module": "CSS Basics",
      "objective": "Predict which CSS rule wins.",
      "why": "When styles “don’t apply”, specificity or order is usually why.",
      "explanation": "<p><strong>What you will learn.</strong> Predict which CSS rule wins. By the end of this lesson you should be able to explain <em>Specificity &amp; Cascade</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: When styles “don’t apply”, specificity or order is usually why. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Programs make decisions. A condition is a yes/no question; different branches run depending on the answer. Clear conditions prevent “mystery behavior”.</p>\n<p><strong>Core explanation.</strong> Inline &gt; id &gt; class &gt; element Later rules win if equal specificity !important is a last resort Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Identify the element structure; select the node; update content or style; respond to a user event; verify on a narrow phone-sized width when layout is involved.</p>\n<p><strong>Walking through the example.</strong> The sample has about 4 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Specificity &amp; Cascade</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Who wins?”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Overusing !important makes CSS hard to maintain.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "p { color: black; }\n.text { color: blue; }\n#note { color: red; }\n/* <p id=\"note\" class=\"text\"> → red */",
      "exercises": [
        {
          "title": "Who wins?",
          "instruction": "Explain which color wins for p#x.y with rules p, .y, #x.",
          "solution": "// #x wins (id > class > element) → use that color",
          "hint": "Id highest among those",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Highest specificity among these?",
          "options": [
            ".card",
            "div",
            "#main",
            "p span"
          ],
          "correct": 2,
          "explanation": "IDs beat classes/elements."
        }
      ],
      "pitfalls": "Overusing !important makes CSS hard to maintain.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-10",
      "title": "2.4 Flexbox Layout",
      "module": "Layout",
      "objective": "Build rows/columns with flexbox.",
      "why": "Nav bars, card rows, centering — flexbox solves everyday layout.",
      "explanation": "<p><strong>What you will learn.</strong> Build rows/columns with flexbox. By the end of this lesson you should be able to explain <em>Flexbox Layout</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Nav bars, card rows, centering — flexbox solves everyday layout. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern layout tools (Flexbox/Grid) replace fragile positioning hacks and help pages work on phones.</p>\n<p><strong>Core explanation.</strong> display:flex justify-content, align-items, gap, flex-wrap, flex-direction Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Build rows/columns with flexbox.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 11 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Flexbox Layout</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Center box”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": ".row {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  justify-content: space-between;\n}\n.nav {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}",
      "exercises": [
        {
          "title": "Center box",
          "instruction": "Flex container min-height 200px centering a child both ways.",
          "solution": ".stage {\n  display: flex;\n  min-height: 200px;\n  justify-content: center;\n  align-items: center;\n}",
          "hint": "justify + align center",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "justify-content mainly controls?",
          "options": [
            "Font weight",
            "Main axis spacing",
            "Image format",
            "Z-index only"
          ],
          "correct": 1,
          "explanation": "Along main axis."
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-11",
      "title": "2.5 CSS Grid",
      "module": "Layout",
      "objective": "Create 2D layouts with CSS Grid.",
      "why": "Product galleries and page dashboards fit grid naturally.",
      "explanation": "<p><strong>What you will learn.</strong> Create 2D layouts with CSS Grid. By the end of this lesson you should be able to explain <em>CSS Grid</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Product galleries and page dashboards fit grid naturally. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern layout tools (Flexbox/Grid) replace fragile positioning hacks and help pages work on phones.</p>\n<p><strong>Core explanation.</strong> display:grid grid-template-columns, gap, fr unit, media queries for responsive columns Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Identify the element structure; select the node; update content or style; respond to a user event; verify on a narrow phone-sized width when layout is involved.</p>\n<p><strong>Walking through the example.</strong> The sample has about 8 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>CSS Grid</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Two columns”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": ".products {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n@media (max-width: 700px) {\n  .products { grid-template-columns: 1fr; }\n}",
      "exercises": [
        {
          "title": "Two columns",
          "instruction": "Grid with 2 equal columns and 1rem gap.",
          "solution": ".grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}",
          "hint": "1fr 1fr",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "1fr means?",
          "options": [
            "1 pixel",
            "One fraction of free space",
            "1 font size",
            "Fixed 100% always"
          ],
          "correct": 1,
          "explanation": "Flexible fraction."
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-12",
      "title": "2.6 Responsive Design",
      "module": "Layout",
      "objective": "Make pages work on phone and desktop.",
      "why": "Most Nigerian users browse on mobile first — design for small screens.",
      "explanation": "<p><strong>What you will learn.</strong> Make pages work on phone and desktop. By the end of this lesson you should be able to explain <em>Responsive Design</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Most Nigerian users browse on mobile first — design for small screens. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern layout tools (Flexbox/Grid) replace fragile positioning hacks and help pages work on phones.</p>\n<p><strong>Core explanation.</strong> viewport meta (required) fluid widths, rem, media queries mobile-first: base styles then min-width breakpoints Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Make pages work on phone and desktop.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Responsive Design</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Breakpoint”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "/* Mobile first */\n.container { padding: 1rem; }\n@media (min-width: 768px) {\n  .container { padding: 2rem; max-width: 1100px; margin: 0 auto; }\n}\nimg { max-width: 100%; height: auto; }",
      "exercises": [
        {
          "title": "Breakpoint",
          "instruction": "Write a media query that sets .nav to display flex from 768px up.",
          "solution": "@media (min-width: 768px) {\n  .nav { display: flex; }\n}",
          "hint": "min-width mobile-first",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Mobile-first means?",
          "options": [
            "Desktop CSS only",
            "Base styles for small screens, enhance upward",
            "No CSS",
            "Images disabled"
          ],
          "correct": 1,
          "explanation": "Progressive enhancement."
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-13",
      "title": "3.1 Navigation & Header Patterns",
      "module": "Components",
      "objective": "Style a practical site header and nav links.",
      "why": "Users need clear paths: Home, Services, Contact.",
      "explanation": "<p><strong>What you will learn.</strong> Style a practical site header and nav links. By the end of this lesson you should be able to explain <em>Navigation &amp; Header Patterns</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Users need clear paths: Home, Services, Contact. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern layout tools (Flexbox/Grid) replace fragile positioning hacks and help pages work on phones.</p>\n<p><strong>Core explanation.</strong> Flex header, logo, nav links, CTA button, spacing and hover states Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Style a practical site header and nav links.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 13 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Navigation &amp; Header Patterns</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Hover state”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": ".header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.nav a {\n  margin-left: 1rem;\n  text-decoration: none;\n  color: #334155;\n}\n.nav a:hover { color: #059669; }",
      "exercises": [
        {
          "title": "Hover state",
          "instruction": "a.nav-link hover underline and color change.",
          "solution": "a.nav-link:hover {\n  color: #059669;\n  text-decoration: underline;\n}",
          "hint": ":hover pseudo",
          "level": "easy"
        }
      ],
      "quiz": [],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-14",
      "title": "3.2 Cards & Buttons",
      "module": "Components",
      "objective": "Design reusable card and button components.",
      "why": "Product cards and CTAs drive sales on landing pages.",
      "explanation": "<p><strong>What you will learn.</strong> Design reusable card and button components. By the end of this lesson you should be able to explain <em>Cards &amp; Buttons</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Product cards and CTAs drive sales on landing pages. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern layout tools (Flexbox/Grid) replace fragile positioning hacks and help pages work on phones.</p>\n<p><strong>Core explanation.</strong> Shadow, radius, padding scale, primary/secondary buttons, disabled state Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Design reusable card and button components.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 17 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Cards &amp; Buttons</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Secondary button”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": ".card {\n  background: white;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 10px 25px rgb(15 23 42 / 0.08);\n}\n.btn {\n  display: inline-block;\n  padding: 0.75rem 1.25rem;\n  border-radius: 999px;\n  background: #059669;\n  color: white;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n}\n.btn:disabled { opacity: 0.5; cursor: not-allowed; }",
      "exercises": [
        {
          "title": "Secondary button",
          "instruction": "Outline style button with transparent bg and green border.",
          "solution": ".btn-secondary {\n  background: transparent;\n  color: #059669;\n  border: 2px solid #059669;\n  border-radius: 999px;\n  padding: 0.75rem 1.25rem;\n}",
          "hint": "Transparent + border",
          "level": "medium"
        }
      ],
      "quiz": [],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-15",
      "title": "3.3 Accessibility Basics",
      "module": "Quality",
      "objective": "Ship accessible pages: labels, alt, contrast, focus.",
      "why": "Accessible sites reach more customers and often rank better.",
      "explanation": "<p><strong>What you will learn.</strong> Ship accessible pages: labels, alt, contrast, focus. By the end of this lesson you should be able to explain <em>Accessibility Basics</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Accessible sites reach more customers and often rank better. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Accessibility means more people can use your product — keyboard users, screen-reader users, and people on small screens. Good HTML/CSS is the foundation.</p>\n<p><strong>Core explanation.</strong> Label inputs, alt text, sufficient color contrast, visible :focus styles, semantic HTML, do not remove outlines without replacement Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Ship accessible pages: labels, alt, contrast, focus.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 5 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Accessibility Basics</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Focus style”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "a:focus, button:focus {\n  outline: 3px solid #34d399;\n  outline-offset: 2px;\n}\n/* Bad: outline: none; without alternative */",
      "exercises": [
        {
          "title": "Focus style",
          "instruction": "Write :focus style for buttons with outline.",
          "solution": "button:focus {\n  outline: 3px solid #34d399;\n  outline-offset: 2px;\n}",
          "hint": "Keep focus visible",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Removing focus outlines without replacement is?",
          "options": [
            "Best practice",
            "Bad for keyboard users",
            "Required by HTML5",
            "Faster rendering only goal"
          ],
          "correct": 1,
          "explanation": "Keyboard accessibility."
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "web-16",
      "title": "4.1 Mini Project: Business Landing Page",
      "module": "Projects",
      "objective": "Build a one-page site: hero, services, contact form.",
      "why": "Portfolio-ready page for a real local business.",
      "explanation": "<p><strong>What you will learn.</strong> Build a one-page site: hero, services, contact form. By the end of this lesson you should be able to explain <em>Mini Project: Business Landing Page</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Portfolio-ready page for a real local business. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> HTML describes structure and meaning (headings, forms, landmarks, links). Clear structure helps browsers, assistive tech, SEO, and your future self.</p>\n<p><strong>Core explanation.</strong> Sections: header/nav, hero, 3 service cards (grid/flex), about, contact form, footer. Mobile responsive. Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Build a one-page site: hero, services, contact form.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Mini Project: Business Landing Page</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Outline HTML”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "<!-- Structure sketch -->\n<header>...</header>\n<section class=\"hero\"><h1>Business name</h1><a class=\"btn\" href=\"#contact\">Contact</a></section>\n<section class=\"services\"><!-- 3 cards --></section>\n<section id=\"contact\"><form>...</form></section>\n<footer>...</footer>",
      "exercises": [
        {
          "title": "Outline HTML",
          "instruction": "Write the section skeleton comments/tags for the landing page.",
          "solution": "<header></header>\n<main>\n  <section class=\"hero\"></section>\n  <section class=\"services\"></section>\n  <section id=\"contact\"></section>\n</main>\n<footer></footer>",
          "hint": "Semantic sections",
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
      "id": "web-17",
      "title": "4.2 Polish: Spacing, Consistency, Performance",
      "module": "Projects",
      "objective": "Improve visual rhythm and basic performance habits.",
      "why": "Consistent spacing makes a site feel premium even with simple colors.",
      "explanation": "<p><strong>What you will learn.</strong> Improve visual rhythm and basic performance habits. By the end of this lesson you should be able to explain <em>Polish: Spacing, Consistency, Performance</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Consistent spacing makes a site feel premium even with simple colors. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> In the browser, HTML becomes a live tree of elements (the DOM). JavaScript finds nodes and updates them when users click, type, or submit forms.</p>\n<p><strong>Core explanation.</strong> 8px spacing scale, limit fonts (1–2 families), compress images, min CSS, descriptive titles Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Use this micro-plan: (1) restate the objective — “Improve visual rhythm and basic performance habits.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) implement the exercise using only the docs in this lesson.</p>\n<p><strong>Walking through the example.</strong> The sample has about 7 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Polish: Spacing, Consistency, Performance</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “CSS variables”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Only reading without typing. Passive alone creates false confidence. Also: ignoring error messages instead of using them as feedback.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": ":root {\n  --space-1: 0.5rem;\n  --space-2: 1rem;\n  --space-3: 2rem;\n  --brand: #059669;\n}\n.section { padding: var(--space-3) var(--space-2); }",
      "exercises": [
        {
          "title": "CSS variables",
          "instruction": "Define --brand and use it on h1 color.",
          "solution": ":root { --brand: #059669; }\nh1 { color: var(--brand); }",
          "hint": "var(--name)",
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
      "id": "web-18",
      "title": "4.3 Capstone Checklist & Launch",
      "module": "Projects",
      "objective": "Self-review a page before sharing the link.",
      "why": "Pros use checklists: mobile, links, form labels, contrast, title.",
      "explanation": "<p><strong>What you will learn.</strong> Self-review a page before sharing the link. By the end of this lesson you should be able to explain <em>Capstone Checklist &amp; Launch</em> in your own words and use it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> In real life: Pros use checklists: mobile, links, form labels, contrast, title. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful mini-app you can show someone.</p>\n<p><strong>Core explanation.</strong> Checklist: valid structure, working links, alt texts, form labels, responsive, favicon optional, proofread copy Do not rush past this: if any sentence is unclear, re-read it after you run the code example once. Then connect each sentence to a line in the example.</p>\n<p><strong>Break it into smaller pieces.</strong> Create the collection with sample items; access one item by position; add/remove an item; loop through all items to compute a total or print a report. If you can do those four moves, you “own” the structure.</p>\n<p><strong>Walking through the example.</strong> The sample has about 6 non-empty lines. Read top to bottom and narrate each line out loud: “this creates…”, “this calculates…”, “this shows…”. If you cannot narrate a line, pause there — that is the exact place to re-read the explanation. After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error message slowly.</p>\n<p><strong>Pattern to remember.</strong> Most solid examples follow <em>prepare data → transform or decide → output or return</em>. Find those three phases in this lesson so you can reuse the pattern in the exercise for <em>Capstone Checklist &amp; Launch</em>.</p>\n<p><strong>How to practice (important).</strong> Use the <strong>live playground</strong> on this page. For HTML/CSS choose <strong>Preview HTML</strong>; for pure JS choose <strong>Run JS</strong> and read the console output. Then try the exercise. Use the hint only after you attempt a solution for a few minutes. Struggle (a little) is how memory forms.</p>\n<p><strong>Check your understanding.</strong> Before opening the solution, write down: required inputs, expected output, and which lines of the example you will reuse. Then implement “Your checklist”. If stuck after several minutes, open the hint — not the full solution.</p>\n<p><strong>Watch out.</strong> Off-by-one errors and modifying a list while iterating incorrectly.</p>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can (1) state the objective without looking, (2) predict what the example prints or builds, and (3) change the example slightly and still know what should happen. If not, re-run the example and re-read the “plain language” section above.</p>",
      "codeExample": "<!-- Pre-launch checklist (put in README) -->\n<!-- [ ] Title unique and clear -->\n<!-- [ ] All images have alt -->\n<!-- [ ] Form inputs have labels -->\n<!-- [ ] Works at 360px width -->\n<!-- [ ] Contact details correct -->",
      "exercises": [
        {
          "title": "Your checklist",
          "instruction": "Write 5 checkbox items for your site QA.",
          "solution": "// [ ] Mobile layout\n// [ ] Contrast\n// [ ] Links work\n// [ ] Labels present\n// [ ] Spelling",
          "hint": "Quality bar",
          "level": "easy"
        }
      ],
      "quiz": [],
      "pitfalls": "",
      "path": "builder",
      "project": true,
      "difficulty": "beginner"
    }
  ],
  "totalLessons": 18
};
