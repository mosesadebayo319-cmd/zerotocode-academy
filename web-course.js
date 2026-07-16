// ZeroToCode Academy — HTML & CSS curriculum (18 lessons)
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
      "explanation": "<strong>HTML</strong> = structure/content<br><strong>CSS</strong> = look and layout<br><strong>JS</strong> = interactivity<br>Browser downloads files and paints the page.",
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
      "explanation": "Required pieces: DOCTYPE, html lang, head (charset, title, meta viewport), body.",
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
      "explanation": "h1–h6 (one h1 per page ideally), p, ul/ol/li, strong/em<br>Do not skip heading levels randomly.",
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
      "explanation": "a href=\"...\"<br>img src alt width/height<br>Open new tab: target=\"_blank\" rel=\"noopener\"",
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
      "explanation": "header, nav, main, article, section, aside, footer",
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
      "explanation": "form, label, input, textarea, select, button<br>Always link label via for/id<br>type=email, tel, number, submit",
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
      "explanation": "element, .class, #id, descendant<br>units: px, rem, em, %, vh/vw",
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
      "explanation": "color, background, font-family, font-size, font-weight<br>box model: content + padding + border + margin<br>box-sizing: border-box recommended",
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
      "explanation": "Inline > id > class > element<br>Later rules win if equal specificity<br>!important is a last resort",
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
      "explanation": "display:flex<br>justify-content, align-items, gap, flex-wrap, flex-direction",
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
      "explanation": "display:grid<br>grid-template-columns, gap, fr unit, media queries for responsive columns",
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
      "explanation": "viewport meta (required)<br>fluid widths, rem, media queries<br>mobile-first: base styles then min-width breakpoints",
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
      "explanation": "Flex header, logo, nav links, CTA button, spacing and hover states",
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
      "explanation": "Shadow, radius, padding scale, primary/secondary buttons, disabled state",
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
      "explanation": "Label inputs, alt text, sufficient color contrast, visible :focus styles, semantic HTML, do not remove outlines without replacement",
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
      "explanation": "Sections: header/nav, hero, 3 service cards (grid/flex), about, contact form, footer. Mobile responsive.",
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
      "explanation": "8px spacing scale, limit fonts (1–2 families), compress images, min CSS, descriptive titles",
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
      "explanation": "Checklist: valid structure, working links, alt texts, form labels, responsive, favicon optional, proofread copy",
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
