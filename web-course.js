// ZeroToCode Academy — HTML & CSS curriculum
// Comprehensive guide structure is documented in docs/LESSON-STANDARD.md.
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
      "objective": "Explain how a browser displays a web document and create a complete page with a meaningful heading and paragraph.",
      "why": "Every web interface begins with content people can understand. Knowing how a document reaches the browser and how HTML describes its structure makes later styling and interaction much easier to reason about.",
      "explanation": "<h4>Follow a page from its address to the screen</h4><p>A <strong>web browser</strong> is an application that retrieves and displays web content. When you open a website address, the browser typically asks a server for the resource identified by that address. A <strong>server</strong> is software that receives requests and returns responses. The response may contain an HTML document, and that document may refer to additional resources such as images and stylesheets.</p>\n<p>A <strong>URL</strong> identifies a resource and how to access it. In an address such as <code>https://example.com/about</code>, https identifies the access scheme, example.com identifies the host, and /about is a path. You do not need to run a server to start this lesson: Preview HTML displays the document you provide directly inside the academy page.</p>\n<h4>Give HTML, CSS, and JavaScript distinct jobs</h4><p><strong>HTML</strong>, HyperText Markup Language, describes the structure and meaning of content. A heading says what a section is about; a paragraph groups prose; a link identifies another resource. <strong>CSS</strong>, Cascading Style Sheets, controls presentation such as color, spacing, and layout. <strong>JavaScript</strong> can add behavior such as responding to a button or updating content.</p>\n<p>A page does not need custom CSS or JavaScript to be useful. Browsers have default styles, so a heading is usually larger and bolder than a paragraph even in plain HTML. Begin with understandable content and correct structure. Adding decoration before the content makes sense does not make the page easier to use.</p>\n<h4>Read tags as boundaries around content</h4><p>In <code>&lt;h1&gt;Welcome&lt;/h1&gt;</code>, the opening tag starts a level-one heading, the closing tag ends it, and Welcome is its text content. Together these form an <strong>element</strong>. The slash distinguishes the closing tag. A paragraph uses the same pattern with <code>&lt;p&gt;</code> and <code>&lt;/p&gt;</code>.</p>\n<p>Some elements, such as <code>&lt;meta&gt;</code>, are void elements and do not wrap text or require a closing tag in HTML. Do not apply the paired-tag rule blindly to every element. The document below uses meta to declare character encoding and paired elements to organise the visible content.</p>\n<h4>Understand the complete document skeleton</h4><p><code>&lt;!DOCTYPE html&gt;</code> tells the browser to use modern HTML standards mode. The outer <code>&lt;html&gt;</code> element contains the document, and <code>lang=\"en\"</code> declares that its main language is English. An <strong>attribute</strong> such as lang adds information to an element through a name and value.</p>\n<p>The <code>&lt;head&gt;</code> contains document information, including a character encoding and title. The <code>&lt;body&gt;</code> contains the main visible content. The title is document metadata, usually shown in a browser tab when the document is opened on its own. The h1 is a heading inside the page. These are related descriptions of the document, but they are not interchangeable.</p>\n<h4>Let meaning guide the structure</h4><p>Use a heading because text introduces the page or a section, not merely because you want a large font. Use a paragraph for prose. Meaningful elements help browsers and assistive technologies interpret the document, and they provide a sound basis for later CSS.</p>\n<p>Indent nested elements to make the source easier for a person to read. HTML normally collapses runs of ordinary whitespace in text, so indentation is not a reliable way to create page layout. Likewise, a missing closing tag might be repaired by the browser and still look plausible. A page rendering something is not proof that its structure is correct.</p>\n<h4>Preview, compare, and make one controlled change</h4><p>Copy the complete example into the editor and choose <strong>Preview HTML</strong>. You should see a heading followed by a paragraph. The embedded preview may not change the academy’s browser-tab title, because it is a separate document inside a frame. Inspect the visible heading and paragraph to verify this lesson’s behavior.</p>\n<p>Change the paragraph to describe your own club, then preview again. Next, inspect the variation, which adds a tiny internal stylesheet. Its CSS changes presentation while retaining the same heading and paragraph roles. Later lessons will explain selectors and declarations in detail; here the important connection is that HTML describes the content and CSS affects how it looks.</p>",
      "codeExample": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Study Club</title>\n</head>\n<body>\n  <h1>Welcome to the Study Club</h1>\n  <p>We learn one new thing at a time.</p>\n</body>\n</html>",
      "exercises": [
        {
          "title": "Guided: personalise the page",
          "instruction": "Change the example to describe a Reading Club. Keep a complete document with a title, an h1, and a paragraph.",
          "hint": "Change the text inside title, h1, and p; preserve their surrounding tags.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Reading Club</title></head>\n<body><h1>Welcome to the Reading Club</h1><p>We discuss one book each month.</p></body>\n</html>",
          "expectedOutput": "A Reading Club heading and a paragraph about discussing a book each month.",
          "solutionExplanation": "The document skeleton stays intact while the content changes. The title supplies metadata, and the h1 and p supply visible content. Indentation can differ without changing these roles.",
          "successCriteria": [
            "The page has one clear main heading.",
            "A paragraph describes the club.",
            "The title and content refer to the same club."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: a title is not a page heading",
          "instruction": "A page has a title of My Shop but an empty body. Add a visible My Shop heading and a short welcome paragraph.",
          "hint": "Keep title in head and put h1 and p in body.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>My Shop</title></head>\n<body><h1>My Shop</h1><p>Welcome to our local store.</p></body>\n</html>",
          "expectedOutput": "A visible My Shop heading followed by Welcome to our local store.",
          "solutionExplanation": "Adding body content makes the message visible in the page. Changing the title alone would not create a body heading. The repair respects the different roles of metadata and content.",
          "successCriteria": [
            "My Shop is visible inside the preview.",
            "A visible paragraph follows it.",
            "The document still includes its title metadata."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: an announcement page",
          "instruction": "Create a complete page announcing a school or community event. Include a meaningful document title, a main heading, and a paragraph stating what the event is and when it happens.",
          "hint": "Use the complete skeleton, but choose your own event and wording.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><title>Community Art Day</title></head>\n<body><h1>Community Art Day</h1><p>Join us on Saturday to draw and share your work.</p></body>\n</html>",
          "expectedOutput": "An event heading and a paragraph describing the activity and its day.",
          "solutionExplanation": "This transfers the same document structure to a new communication task. The content makes the announcement useful; HTML identifies its title, heading, and prose. Many event descriptions are valid.",
          "successCriteria": [
            "The title describes the event.",
            "The visible content explains what and when.",
            "The page can be previewed without missing external files."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "The heading text is correct, but it should appear in teal. Which change addresses that?",
          "options": [
            "Rename the title element to h1",
            "Add a CSS color rule for the heading",
            "Change lang=\"en\" to lang=\"teal\"",
            "Replace the doctype with the desired color"
          ],
          "correct": 1,
          "explanation": "CSS controls presentation: an h1 color rule can change the heading to teal while keeping its text and meaning. The title, language attribute, and doctype have different jobs."
        },
        {
          "q": "Which element creates a visible main heading?",
          "options": [
            "title inside head",
            "meta charset",
            "h1 inside body",
            "The doctype declaration"
          ],
          "correct": 2,
          "explanation": "h1 is a heading element in the page content. title supplies document metadata."
        },
        {
          "q": "What does a browser usually do when you open a website URL?",
          "options": [
            "Request a resource from its host and interpret the response",
            "Treat the URL itself as the HTML body",
            "Execute the server’s application source directly inside the page",
            "Read every page from the learner’s local disk"
          ],
          "correct": 0,
          "explanation": "For a typical website URL, the browser requests a resource from the host and interprets the response. A URL identifies a resource; it is not the document’s visible contents or the server’s source code."
        },
        {
          "q": "A page appears even with a missing closing tag. What follows?",
          "options": [
            "The displayed page proves the source nesting is correct",
            "Adding CSS will fix the source nesting automatically",
            "The doctype supplies all missing closing tags",
            "The browser may have repaired the markup; inspect the structure"
          ],
          "correct": 3,
          "explanation": "Browser error recovery can hide markup mistakes. Check intended nesting and semantics as well as appearance."
        }
      ],
      "pitfalls": "Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.; Every input needs a visible label; images need alt text. Invalid nesting breaks accessibility and SEO.; If stuck more than 10 minutes: restate the objective in one sentence, change only one",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "You can type or paste text into the playground. No HTML, CSS, or JavaScript knowledge is required.",
          "Use Preview HTML for this lesson. Run JS is for JavaScript source, not HTML documents."
        ],
        "outcomes": [
          "Describe the browser/request/response relationship at a basic level.",
          "Distinguish an HTML document title from a visible page heading.",
          "Build and preview a complete document containing a heading and paragraph."
        ],
        "expectedOutput": "A visible heading: Welcome to the Study Club\nA paragraph below it: We learn one new thing at a time.",
        "walkthrough": [
          {
            "code": "<!DOCTYPE html>",
            "explanation": "Selects modern standards mode; it is a declaration, not visible page text."
          },
          {
            "code": "<html lang=\"en\">",
            "explanation": "Begins the document element and declares English as the main content language."
          },
          {
            "code": "<head> ... </head>",
            "explanation": "Groups document metadata. The meta charset declaration identifies UTF-8 text, and title names the document. This block is not the page’s main visible content."
          },
          {
            "code": "<body> ... </body>",
            "explanation": "Contains the visible heading and paragraph. These are the elements a visitor reads in this example."
          },
          {
            "code": "<h1>Welcome to the Study Club</h1>",
            "explanation": "Marks the page’s main heading. Opening and closing tags surround the actual heading text."
          },
          {
            "code": "<p>We learn one new thing at a time.</p>",
            "explanation": "Marks one paragraph of prose below the heading. The closing body and html tags then finish the enclosing elements."
          }
        ],
        "variations": [
          {
            "title": "The same content, with presentation added",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Study Club</title>\n  <style>h1 { color: teal; }</style>\n</head>\n<body>\n  <h1>Welcome to the Study Club</h1>\n  <p>We learn one new thing at a time.</p>\n</body>\n</html>",
            "expectedOutput": "The same heading and paragraph are visible. The heading is teal.",
            "explanation": "The style element contains CSS. The selector h1 identifies the heading, and color: teal changes its text color. It does not replace the heading text or its HTML meaning. This introduces the separation between content and presentation; later lessons teach the CSS syntax in detail."
          }
        ],
        "mistakes": [
          {
            "symptom": "Run JS reports an unexpected < character",
            "cause": "HTML markup was sent to the JavaScript console.",
            "fix": "Select Preview HTML when the editor contains a document."
          },
          {
            "symptom": "Changing title does not change the visible page heading",
            "cause": "title is metadata in the head; h1 is visible content in the body.",
            "fix": "Edit the h1 text when you want to change the main visible heading."
          },
          {
            "symptom": "The page looks almost right despite a missing closing tag",
            "cause": "Browsers repair some malformed markup, which can hide mistakes.",
            "fix": "Check the intended nesting and closing tags rather than relying only on appearance."
          },
          {
            "symptom": "The example cannot find styles.css",
            "cause": "An external stylesheet was referenced without providing that file.",
            "fix": "This lesson’s examples are self-contained; keep the small demonstration style inside the supplied document."
          }
        ],
        "summary": [
          "A browser retrieves and interprets resources; the preview can display your supplied HTML directly.",
          "HTML describes content structure, CSS presentation, and JavaScript behavior.",
          "A complete document separates metadata in head from visible content in body. Next, examine document structure in more detail."
        ],
        "references": [
          {
            "title": "MDN: how the web works",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"
          },
          {
            "title": "MDN: basic HTML syntax",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          }
        ]
      }
    },
    {
      "id": "web-02",
      "title": "1.2 Document Structure",
      "module": "Foundations",
      "objective": "Build a valid HTML5 document skeleton.",
      "why": "Every professional page starts with doctype, html, head, body.",
      "explanation": "<p><strong>What you will learn.</strong> Build a valid HTML5 document skeleton. By the end you should explain <em>Document Structure</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Every professional page starts with doctype, html, head, body. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Foundations module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Required pieces: DOCTYPE, html lang, head (charset, title, meta viewport), body.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Build a valid HTML5 document skeleton.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>&lt;!DOCTYPE html&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;html lang=\"en\"&gt;</code> — stores or updates a value.</li><li><code>&lt;head&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;meta charset=\"UTF-8\" /&gt;</code> — stores or updates a value.</li><li><code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"…</code> — stores or updates a value.</li><li><code>&lt;title&gt;City Bakery&lt;/title&gt;</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Document Structure</em> solve?</li><li>Which line in the example most directly achieves: “Build a valid HTML5 document skeleton.”?</li><li>If you change one value in <code>&lt;!DOCTYPE html&gt;</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Use headings, paragraphs, and lists correctly. By the end you should explain <em>Text, Headings, Paragraphs, Lists</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Product pages need clear titles, descriptions, and bullet feature lists. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, add/remove, and pass the whole group around.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>h1–h6 (one h1 per page ideally), p, ul/ol/li, strong/em<br>Do not skip heading levels randomly.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use headings, paragraphs, and lists correctly.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>12</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>&lt;h1&gt;Mama Nkechi Provisions&lt;/h1&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;p&gt;Quality foodstuff at fair prices.&lt;/p&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;h2&gt;Why shop with us&lt;/h2&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;ul&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;li&gt;Fresh stock weekly&lt;/li&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;li&gt;Same-day delivery in Lagos&lt;/li&gt;</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Text, Headings, Paragraphs, Lists</em> solve?</li><li>Which line in the example most directly achieves: “Use headings, paragraphs, and lists correctly.”?</li><li>If you change one value in <code>&lt;h1&gt;Mama Nkechi Provisions&lt;/h1&gt;</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Add navigation links and accessible images. By the end you should explain <em>Links &amp; Images</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Users click links to WhatsApp, products, and contact pages. Images need alt text. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Content module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>a href=\"...\"<br>img src alt width/height<br>Open new tab: target=\"_blank\" rel=\"noopener\"</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Add navigation links and accessible images.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>&lt;a href=\"https://wa.me/2348012345678\"&gt;Chat on WhatsApp&lt;/a&gt;</code> — stores or updates a value.</li><li><code>&lt;a href=\"about.html\"&gt;About us&lt;/a&gt;</code> — stores or updates a value.</li><li><code>&lt;img src=\"bread.jpg\" alt=\"Fresh agege bread on a tray\" width=\"400\" /&gt;</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Links &amp; Images</em> solve?</li><li>Which line in the example most directly achieves: “Add navigation links and accessible images.”?</li><li>If you change one value in <code>&lt;a href=\"https://wa.me/2348012345678\"&gt;Chat on WhatsApp&lt;/</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Structure pages with header, nav, main, article, section, footer. By the end you should explain <em>Semantic Layout Tags</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Semantic HTML helps SEO and screen readers — better than div soup. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> HTML describes structure and meaning (headings, forms, landmarks, links). Clear structure helps browsers, screen readers, and search engines.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>header, nav, main, article, section, aside, footer</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Structure pages with header, nav, main, article, section, footer.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>&lt;header&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;h1&gt;Green Farms&lt;/h1&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;nav&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;a href=\"#products\"&gt;Products&lt;/a&gt;</code> — stores or updates a value.</li><li><code>&lt;a href=\"#contact\"&gt;Contact&lt;/a&gt;</code> — stores or updates a value.</li><li><code>&lt;/nav&gt;</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Semantic Layout Tags</em> solve?</li><li>Which line in the example most directly achieves: “Structure pages with header, nav, main, article, section, footer.”?</li><li>If you change one value in <code>&lt;header&gt;</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Every input needs a visible label; images need alt text. Invalid nesting breaks accessibility and SEO.</li><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Every input needs a visible label; images need alt text. Invalid nesting breaks accessibility and SEO.; Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-",
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
      "explanation": "<p><strong>What you will learn.</strong> Build forms with labels, inputs, and buttons. By the end you should explain <em>Forms &amp; Inputs</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Contact forms, checkout, signup — business sites collect data safely. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Content module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>form, label, input, textarea, select, button<br>Always link label via for/id<br>type=email, tel, number, submit</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Build forms with labels, inputs, and buttons.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>9</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>&lt;form action=\"#\" method=\"post\"&gt;</code> — stores or updates a value.</li><li><code>&lt;label for=\"name\"&gt;Full name&lt;/label&gt;</code> — stores or updates a value.</li><li><code>&lt;input id=\"name\" name=\"name\" type=\"text\" required /&gt;</code> — stores or updates a value.</li><li><code>&lt;label for=\"email\"&gt;Email&lt;/label&gt;</code> — stores or updates a value.</li><li><code>&lt;input id=\"email\" name=\"email\" type=\"email\" required /&gt;</code> — stores or updates a value.</li><li><code>&lt;label for=\"msg\"&gt;Message&lt;/label&gt;</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Forms &amp; Inputs</em> solve?</li><li>Which line in the example most directly achieves: “Build forms with labels, inputs, and buttons.”?</li><li>If you change one value in <code>&lt;form action=\"#\" method=\"post\"&gt;</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Target elements with selectors; use rem/px/% units. By the end you should explain <em>CSS Selectors &amp; Units</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Style all buttons the same with one rule — selectors are power tools. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern tools (Flexbox/Grid) replace fragile float hacks with clear row/column rules.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>element, .class, #id, descendant<br>units: px, rem, em, %, vh/vw</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Target elements with selectors; use rem/px/% units.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>3</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>h1 { color: #0f172a; }</code> — does a step in the overall recipe.</li><li><code>.btn { padding: 0.75rem 1.25rem; }</code> — does a step in the overall recipe.</li><li><code>p { font-size: 1rem; line-height: 1.6; }</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>CSS Selectors &amp; Units</em> solve?</li><li>Which line in the example most directly achieves: “Target elements with selectors; use rem/px/% units.”?</li><li>If you change one value in <code>h1 { color: #0f172a; }</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Apply color, fonts, margin, border, padding. By the end you should explain <em>Colors, Typography, Box Model</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Professional brands feel consistent via type and spacing systems. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern tools (Flexbox/Grid) replace fragile float hacks with clear row/column rules.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>color, background, font-family, font-size, font-weight<br>box model: content + padding + border + margin<br>box-sizing: border-box recommended</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Apply color, fonts, margin, border, padding.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>12</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>body {</code> — does a step in the overall recipe.</li><li><code>margin: 0;</code> — does a step in the overall recipe.</li><li><code>font-family: system-ui, sans-serif;</code> — does a step in the overall recipe.</li><li><code>color: #0f172a;</code> — does a step in the overall recipe.</li><li><code>background: #f8fafc;</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Colors, Typography, Box Model</em> solve?</li><li>Which line in the example most directly achieves: “Apply color, fonts, margin, border, padding.”?</li><li>If you change one value in <code>body {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Predict which CSS rule wins. By the end you should explain <em>Specificity &amp; Cascade</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> When styles “don’t apply”, specificity or order is usually why. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern tools (Flexbox/Grid) replace fragile float hacks with clear row/column rules.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Inline > id > class > element<br>Later rules win if equal specificity<br>!important is a last resort</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Predict which CSS rule wins.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>2</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>p { color: black; }</code> — does a step in the overall recipe.</li><li><code>.text { color: blue; }</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Specificity &amp; Cascade</em> solve?</li><li>Which line in the example most directly achieves: “Predict which CSS rule wins.”?</li><li>If you change one value in <code>p { color: black; }</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Build rows/columns with flexbox. By the end you should explain <em>Flexbox Layout</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Nav bars, card rows, centering — flexbox solves everyday layout. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern tools (Flexbox/Grid) replace fragile float hacks with clear row/column rules.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>display:flex<br>justify-content, align-items, gap, flex-wrap, flex-direction</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Build rows/columns with flexbox.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>11</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>.row {</code> — does a step in the overall recipe.</li><li><code>display: flex;</code> — does a step in the overall recipe.</li><li><code>gap: 1rem;</code> — does a step in the overall recipe.</li><li><code>align-items: center;</code> — does a step in the overall recipe.</li><li><code>justify-content: space-between;</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Flexbox Layout</em> solve?</li><li>Which line in the example most directly achieves: “Build rows/columns with flexbox.”?</li><li>If you change one value in <code>.row {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Create 2D layouts with CSS Grid. By the end you should explain <em>CSS Grid</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Product galleries and page dashboards fit grid naturally. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern tools (Flexbox/Grid) replace fragile float hacks with clear row/column rules.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>display:grid<br>grid-template-columns, gap, fr unit, media queries for responsive columns</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Create 2D layouts with CSS Grid.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>.products {</code> — does a step in the overall recipe.</li><li><code>display: grid;</code> — does a step in the overall recipe.</li><li><code>grid-template-columns: repeat(3, 1fr);</code> — does a step in the overall recipe.</li><li><code>gap: 1.25rem;</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>@media (max-width: 700px) {</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>CSS Grid</em> solve?</li><li>Which line in the example most directly achieves: “Create 2D layouts with CSS Grid.”?</li><li>If you change one value in <code>.products {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Make pages work on phone and desktop. By the end you should explain <em>Responsive Design</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Most Nigerian users browse on mobile first — design for small screens. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> CSS controls look and layout: color, space, fonts, alignment. Modern tools (Flexbox/Grid) replace fragile float hacks with clear row/column rules.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>viewport meta (required)<br>fluid widths, rem, media queries<br>mobile-first: base styles then min-width breakpoints</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Make pages work on phone and desktop.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>5</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>.container { padding: 1rem; }</code> — does a step in the overall recipe.</li><li><code>@media (min-width: 768px) {</code> — does a step in the overall recipe.</li><li><code>.container { padding: 2rem; max-width: 1100px; margin: 0 auto; }</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li><li><code>img { max-width: 100%; height: auto; }</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Responsive Design</em> solve?</li><li>Which line in the example most directly achieves: “Make pages work on phone and desktop.”?</li><li>If you change one value in <code>.container { padding: 1rem; }</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Layout bugs often mean the parent is not display:flex/grid, or a width is constrained by the wrong container.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Style a practical site header and nav links. By the end you should explain <em>Navigation &amp; Header Patterns</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Users need clear paths: Home, Services, Contact. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Components module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Flex header, logo, nav links, CTA button, spacing and hover states</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Style a practical site header and nav links.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>13</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>.header {</code> — does a step in the overall recipe.</li><li><code>display: flex;</code> — does a step in the overall recipe.</li><li><code>justify-content: space-between;</code> — does a step in the overall recipe.</li><li><code>align-items: center;</code> — does a step in the overall recipe.</li><li><code>padding: 1rem 1.5rem;</code> — does a step in the overall recipe.</li><li><code>border-bottom: 1px solid #e2e8f0;</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Navigation &amp; Header Patterns</em> solve?</li><li>Which line in the example most directly achieves: “Style a practical site header and nav links.”?</li><li>If you change one value in <code>.header {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Design reusable card and button components. By the end you should explain <em>Cards &amp; Buttons</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Product cards and CTAs drive sales on landing pages. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Components module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Shadow, radius, padding scale, primary/secondary buttons, disabled state</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Design reusable card and button components.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>17</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>.card {</code> — does a step in the overall recipe.</li><li><code>background: white;</code> — does a step in the overall recipe.</li><li><code>border-radius: 1rem;</code> — does a step in the overall recipe.</li><li><code>padding: 1.5rem;</code> — does a step in the overall recipe.</li><li><code>box-shadow: 0 10px 25px rgb(15 23 42 / 0.08);</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Cards &amp; Buttons</em> solve?</li><li>Which line in the example most directly achieves: “Design reusable card and button components.”?</li><li>If you change one value in <code>.card {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Ship accessible pages: labels, alt, contrast, focus. By the end you should explain <em>Accessibility Basics</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Accessible sites reach more customers and often rank better. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> HTML describes structure and meaning (headings, forms, landmarks, links). Clear structure helps browsers, screen readers, and search engines.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Label inputs, alt text, sufficient color contrast, visible :focus styles, semantic HTML, do not remove outlines without replacement</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Ship accessible pages: labels, alt, contrast, focus.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>4</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>a:focus, button:focus {</code> — does a step in the overall recipe.</li><li><code>outline: 3px solid #34d399;</code> — does a step in the overall recipe.</li><li><code>outline-offset: 2px;</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Accessibility Basics</em> solve?</li><li>Which line in the example most directly achieves: “Ship accessible pages: labels, alt, contrast, focus.”?</li><li>If you change one value in <code>a:focus, button:focus {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Every input needs a visible label; images need alt text. Invalid nesting breaks accessibility and SEO.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Every input needs a visible label; images need alt text. Invalid nesting breaks accessibility and SEO.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Build a one-page site: hero, services, contact form. By the end you should explain <em>Mini Project: Business Landing Page</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Portfolio-ready page for a real local business. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Sections: header/nav, hero, 3 service cards (grid/flex), about, contact form, footer. Mobile responsive.</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Build a one-page site: hero, services, contact form.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>&lt;!-- Structure sketch --&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;header&gt;...&lt;/header&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;section class=\"hero\"&gt;&lt;h1&gt;Business name&lt;/h1&gt;&lt;a class=\"btn\" href=\"#con…</code> — stores or updates a value.</li><li><code>&lt;section class=\"services\"&gt;&lt;!-- 3 cards --&gt;&lt;/section&gt;</code> — stores or updates a value.</li><li><code>&lt;section id=\"contact\"&gt;&lt;form&gt;...&lt;/form&gt;&lt;/section&gt;</code> — stores or updates a value.</li><li><code>&lt;footer&gt;...&lt;/footer&gt;</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Mini Project: Business Landing Page</em> solve?</li><li>Which line in the example most directly achieves: “Build a one-page site: hero, services, contact form.”?</li><li>If you change one value in <code>&lt;!-- Structure sketch --&gt;</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Improve visual rhythm and basic performance habits. By the end you should explain <em>Polish: Spacing, Consistency, Performance</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Consistent spacing makes a site feel premium even with simple colors. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Projects module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>8px spacing scale, limit fonts (1–2 families), compress images, min CSS, descriptive titles</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Improve visual rhythm and basic performance habits.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>7</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>:root {</code> — does a step in the overall recipe.</li><li><code>--space-1: 0.5rem;</code> — does a step in the overall recipe.</li><li><code>--space-2: 1rem;</code> — does a step in the overall recipe.</li><li><code>--space-3: 2rem;</code> — does a step in the overall recipe.</li><li><code>--brand: #059669;</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Polish: Spacing, Consistency, Performance</em> solve?</li><li>Which line in the example most directly achieves: “Improve visual rhythm and basic performance habits.”?</li><li>If you change one value in <code>:root {</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
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
      "explanation": "<p><strong>What you will learn.</strong> Self-review a page before sharing the link. By the end you should explain <em>Capstone Checklist &amp; Launch</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Pros use checklists: mobile, links, form labels, contrast, title. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>Checklist: valid structure, working links, alt texts, form labels, responsive, favicon optional, proofread copy</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Self-review a page before sharing the link.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>6</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>&lt;!-- Pre-launch checklist (put in README) --&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;!-- [ ] Title unique and clear --&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;!-- [ ] All images have alt --&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;!-- [ ] Form inputs have labels --&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;!-- [ ] Works at 360px width --&gt;</code> — does a step in the overall recipe.</li><li><code>&lt;!-- [ ] Contact details correct --&gt;</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> Use the live <strong>HTML/CSS preview</strong>. Change one CSS property or HTML tag at a time and watch the layout update. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Capstone Checklist &amp; Launch</em> solve?</li><li>Which line in the example most directly achieves: “Self-review a page before sharing the link.”?</li><li>If you change one value in <code>&lt;!-- Pre-launch checklist (put in README) --&gt;</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Type carefully; read error messages from the bottom up; compare with the example line by line.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
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
      "pitfalls": "Type carefully; read error messages from the bottom up; compare with the example line by line.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": true,
      "difficulty": "beginner"
    }
  ],
  "totalLessons": 18
};
