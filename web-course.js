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
      "objective": "Build a complete HTML document and explain how metadata, language, viewport, and visible content serve different purposes.",
      "why": "A reliable document skeleton prevents subtle encoding and mobile-display problems before a page gains styling or interaction.",
      "explanation": "<h4>Start with standards mode and the document root</h4><p>An HTML document is a tree: elements contain other elements in a defined hierarchy. The outer html element is the document root. Its two main children are head and body, which have different jobs. Begin the file with &lt;!DOCTYPE html&gt;. This declaration asks the browser to use standards mode, the modern rules for interpreting layout. It is not an opening tag and has no matching closing tag. Omitting it may select compatibility behavior intended for old websites.</p>\n<p>Write lang=\"en\" on html when the main language is English. This helps pronunciation and language-sensitive processing; it does not translate the words. If one passage uses another language, mark that passage with its own lang attribute, as the variation does for a French welcome. Use actual language codes rather than country names.</p>\n<h4>Put information about the page in head</h4><p>The head is a container for metadata: information describing or configuring the document. A meta charset=\"UTF-8\" declaration tells the browser how text bytes are encoded. Put it near the start of head. UTF-8 supports characters such as the dash in the opening hours without changing encoding for each language. Meta is a void element, so it does not wrap text and does not need &lt;/meta&gt;.</p>\n<p>The title names the document for browser tabs, bookmarks, and other contexts. Use a useful label such as City Bakery — opening hours instead of Untitled. Title is not the large heading visitors read in the page. In the academy, the preview is an embedded document, so its title may not replace the outer application’s tab title. Inspect the source or open the file separately to check that metadata.</p>\n<h4>Let mobile browsers use their actual viewport</h4><p>The viewport is the area in which a browser lays out a page. The declaration meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" asks mobile browsers to use the device width in CSS pixels and an initial scale of one. Without it, a phone may lay out the page as a much wider desktop page and shrink the result.</p>\n<p>This metadata is preparation for responsive CSS, not a complete responsive design. A fixed-width element can still overflow a correctly configured viewport. Do not add user-scalable=no or a maximum scale that stops readers zooming. Resizing, zooming, and readable content will remain part of our checks when we introduce layout.</p>\n<h4>Keep visible content in body and nest deliberately</h4><p>Body contains the content the visitor sees. Here h1 announces the bakery and two p elements describe its service and hours. Closing tags should finish the innermost element before its parent: finish a paragraph before closing body, then close html. Indentation makes this relationship easy to inspect; ordinary spaces and line breaks in source usually collapse when displayed.</p>\n<p>A browser often repairs missing or misplaced tags and still displays something. That does not prove the source is correct. For example, a heading written between head tags may be moved into body by the parser. Compare source with the Elements panel in developer tools: the panel shows the parsed document tree, which can differ from malformed source.</p>\n<h4>Verify one responsibility at a time</h4><p>Preview the complete example and confirm one main heading and both paragraphs. Change title and observe that the visible h1 does not change. Next change the h1 and preview again. These controlled edits establish the distinction between metadata and page content. Open the browser’s responsive view at about 360 CSS pixels to check wrapping, keeping in mind that this plain document has no custom layout.</p>\n<p>Treat this skeleton as a starting point rather than a magical incantation. You should be able to explain every declaration and container before copying it into a new page. Future lessons will add lists, navigation, and styles inside this same structure.</p>",
      "codeExample": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>City Bakery — opening hours</title>\n</head>\n<body>\n  <h1>City Bakery</h1>\n  <p>Fresh bread every morning.</p>\n  <p>Open Monday–Saturday, 7 am–3 pm.</p>\n</body>\n</html>",
      "exercises": [
        {
          "title": "Guided: library opening hours",
          "instruction": "Create a complete Harbour Library page with a descriptive title, one h1, and the hours Tuesday–Saturday, 9 am–5 pm. Retain the language, encoding, and viewport declarations.",
          "hint": "Start from the skeleton; change title and body text separately.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Harbour Library — opening hours</title>\n</head>\n<body>\n  <h1>Harbour Library</h1>\n  <p>Open Tuesday–Saturday, 9 am–5 pm.</p>\n</body>\n</html>",
          "expectedOutput": "Harbour Library and its opening hours appear in the preview.",
          "solutionExplanation": "The title describes the page for tabs; h1 and p make the same subject and useful hours visible. All metadata remains in head.",
          "successCriteria": [
            "One h1 names the library.",
            "The hours are visible in a paragraph.",
            "The document contains lang, charset, viewport, and title."
          ],
          "level": "easy",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "h1",
                "text": "Harbour Library",
                "count": 1
              },
              {
                "selector": "p",
                "text": "Open Tuesday–Saturday, 9 am–5 pm.",
                "count": 1
              }
            ]
          }
        },
        {
          "title": "Repair: metadata cannot replace content",
          "instruction": "A file contains <head><title>Garden Club</title><h1>Garden Club</h1></head><body></body>. Rebuild a complete valid document, placing the heading in body and adding a Saturday meeting paragraph.",
          "hint": "The browser may display the invalid version after repairing it; repair the source, not just its appearance.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Garden Club — monthly meeting</title>\n</head>\n<body>\n  <h1>Garden Club</h1>\n  <p>Our next meeting is on Saturday.</p>\n</body>\n</html>",
          "expectedOutput": "Garden Club appears as a heading, followed by the meeting sentence.",
          "solutionExplanation": "The repaired source places h1 and p in body. A title in head remains useful metadata, and no visible content is left inside head.",
          "successCriteria": [
            "Head contains only metadata.",
            "Body contains the heading and meeting paragraph.",
            "Closing tags follow their nesting order."
          ],
          "level": "easy",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "body > h1",
                "text": "Garden Club",
                "count": 1
              },
              {
                "selector": "p",
                "text": "Our next meeting is on Saturday.",
                "count": 1
              }
            ]
          }
        },
        {
          "title": "Independent: workshop announcement",
          "instruction": "Build a standalone announcement for a beginner cycle workshop. Include what people will learn, when to attend, and whether they should bring equipment. Choose a descriptive title and preserve the complete skeleton.",
          "hint": "Separate the announcement’s main heading from its supporting paragraphs.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Cycle Workshop — beginner session</title>\n</head>\n<body>\n  <h1>Learn to repair a puncture</h1>\n  <p>Bring your bicycle on Sunday at 10 am.</p>\n  <p>Tools are provided.</p>\n</body>\n</html>",
          "expectedOutput": "A puncture-repair heading and two paragraphs state Sunday at 10 am, bringing a bicycle, and supplied tools.",
          "solutionExplanation": "The source transfers the skeleton to a new communication task. Metadata describes the same workshop as the visible content; wording can differ if all requested facts remain clear.",
          "successCriteria": [
            "One main heading announces the activity.",
            "When and what to bring are explicit.",
            "The complete file previews without other resources."
          ],
          "level": "medium",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "h1",
                "text": "Learn to repair a puncture",
                "count": 1
              },
              {
                "selector": "p",
                "text": null,
                "count": 2
              }
            ]
          }
        }
      ],
      "quiz": [
        {
          "q": "Where should a visible welcome heading go?",
          "options": [
            "Inside title",
            "Inside body as h1",
            "Inside meta content",
            "Before the doctype"
          ],
          "correct": 1,
          "explanation": "Body contains page content. Title and meta describe the document; the doctype precedes the root."
        },
        {
          "q": "What does lang=\"fr\" on a paragraph do?",
          "options": [
            "Translates the paragraph into French",
            "Changes its font to a French font",
            "Identifies that paragraph’s language",
            "Changes the whole browser language"
          ],
          "correct": 2,
          "explanation": "It supplies language metadata for that element and its descendants, without translating or styling the words."
        },
        {
          "q": "Why can an incorrectly placed heading still appear?",
          "options": [
            "Browsers can repair malformed markup",
            "Head is intended for all visible headings",
            "Doctype ignores nesting rules",
            "The viewport moves all headings"
          ],
          "correct": 0,
          "explanation": "Error recovery may move or infer elements. Correct appearance alone does not validate the source hierarchy."
        },
        {
          "q": "Which change helps a phone use its actual layout width?",
          "options": [
            "Adding another h1",
            "Replacing UTF-8 with mobile",
            "Removing title",
            "Adding width=device-width in viewport metadata"
          ],
          "correct": 3,
          "explanation": "Viewport metadata controls mobile layout sizing. Responsive CSS is still needed for content whose widths are too large."
        }
      ],
      "pitfalls": "The tab has a name but the page is blank: Only title was filled in; body contains no visible content. Keep title in head and add h1 and p in body. Accented text appears corrupted: The file encoding and the declared encoding disagree. Save the actual file as UTF-8 and keep the UTF-8 declaration near the top of head. A phone shows a tiny desktop-sized page: The viewport declaration is missing or misspelled. Use the supplied viewport declaration; later inspect CSS widths if overflow remains. A heading appears even though it was placed in head: The parser repaired invalid placement. Move visible content into body rather than relying on browser recovery.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Complete How the Web Works: distinguish HTML, CSS, and JavaScript and recognise paired tags.",
          "Use Preview HTML or save the entire example as index.html and open it in a modern browser. No server or other files are needed."
        ],
        "outcomes": [
          "Place document metadata in head and visible content in body.",
          "Explain the jobs of doctype, lang, charset, title, and viewport.",
          "Repair a document with misplaced content and verify its parsed structure."
        ],
        "expectedOutput": "A City Bakery heading, followed by “Fresh bread every morning.” and “Open Monday–Saturday, 7 am–3 pm.” Browser default text styling is expected.",
        "walkthrough": [
          {
            "code": "<!DOCTYPE html>",
            "explanation": "Selects standards mode before the document root begins."
          },
          {
            "code": "<html lang=\"en\">",
            "explanation": "Contains the whole document and identifies English as its main language."
          },
          {
            "code": "<meta charset=\"UTF-8\">",
            "explanation": "Declares the encoding; it has no closing tag because meta is void."
          },
          {
            "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "explanation": "Sets an appropriate mobile layout viewport while retaining zoom."
          },
          {
            "code": "<title>City Bakery — opening hours</title>",
            "explanation": "Names the document without creating visible page content."
          },
          {
            "code": "<body> ... </body>",
            "explanation": "Contains the visible heading and the two paragraphs, then closes before html."
          }
        ],
        "variations": [
          {
            "title": "A passage in a second language",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>City Bakery — visiting us</title>\n</head>\n<body>\n  <h1>Visit City Bakery</h1>\n  <p>Find us beside the public library.</p>\n  <p lang=\"fr\">Bienvenue !</p>\n</body>\n</html>",
            "expectedOutput": "Visit City Bakery appears above a location paragraph and the French welcome “Bienvenue !”.",
            "explanation": "The document stays English, while lang=\"fr\" gives the French paragraph its own language. Neither language attribute translates or styles the text.",
            "validation": {
              "environment": "Modern Chromium; Preview HTML",
              "browserChecks": [
                {
                  "selector": "h1",
                  "text": "Visit City Bakery",
                  "count": 1
                },
                {
                  "selector": "p[lang=\"fr\"]",
                  "text": "Bienvenue !",
                  "count": 1
                }
              ]
            }
          }
        ],
        "mistakes": [
          {
            "symptom": "The tab has a name but the page is blank",
            "cause": "Only title was filled in; body contains no visible content.",
            "fix": "Keep title in head and add h1 and p in body."
          },
          {
            "symptom": "Accented text appears corrupted",
            "cause": "The file encoding and the declared encoding disagree.",
            "fix": "Save the actual file as UTF-8 and keep the UTF-8 declaration near the top of head."
          },
          {
            "symptom": "A phone shows a tiny desktop-sized page",
            "cause": "The viewport declaration is missing or misspelled.",
            "fix": "Use the supplied viewport declaration; later inspect CSS widths if overflow remains."
          },
          {
            "symptom": "A heading appears even though it was placed in head",
            "cause": "The parser repaired invalid placement.",
            "fix": "Move visible content into body rather than relying on browser recovery."
          }
        ],
        "summary": [
          "A complete HTML document separates head metadata from body content.",
          "Doctype, language, encoding, title, and viewport each solve a different problem.",
          "Verify source structure as well as rendering; next use meaningful text elements inside body."
        ],
        "references": [
          {
            "title": "MDN: html",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/html"
          },
          {
            "title": "MDN: head",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head"
          },
          {
            "title": "MDN: Viewport_meta_element",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Viewport_meta_element"
          }
        ],
        "validation": {
          "environment": "Modern Chromium; Preview HTML",
          "browserChecks": [
            {
              "selector": "h1",
              "text": "City Bakery",
              "count": 1
            },
            {
              "selector": "p",
              "text": null,
              "count": 2
            },
            {
              "selector": "meta[name=\"viewport\"]",
              "text": null,
              "count": 1,
              "attribute": {
                "name": "content",
                "value": "width=device-width, initial-scale=1"
              }
            }
          ]
        }
      }
    },
    {
      "id": "web-03",
      "title": "1.3 Text, Headings, Paragraphs, Lists",
      "module": "Content",
      "objective": "Organise prose, headings, grouped items, and ordered steps so a reader can understand the content hierarchy.",
      "why": "Visitors scan a page before reading it. Meaningful headings and lists make instructions easier to find, follow, and navigate with assistive technology.",
      "explanation": "<h4>Headings describe the outline</h4><p>A heading names the page or a section within it. Use h1 for this page’s main subject, then h2 for its major sections. If one of those sections needs subsections, use h3 beneath it. The number expresses rank, not the size you happen to prefer. A heading that looks too large can be styled later; replacing h2 with h5 merely for a smaller font would describe the wrong relationship.</p>\n<p>The worked example has one main subject, Community Kitchen, and two equal sections: ingredients and cooking method. Both section headings are h2. This logical sequence lets a visitor scan visually and lets people navigating by headings understand where they are. A short page does not need every possible heading level.</p>\n<h4>Paragraphs are units of prose</h4><p>Use p to group related sentences, such as the introduction to a class. Start a new paragraph for a new thought. Typing extra spaces or blank lines in source does not reliably add space in the rendered page because ordinary whitespace collapses. Avoid empty paragraphs used as spacers; CSS will provide spacing when we reach it.</p>\n<p>Paragraphs contain phrasing content such as text, links, strong, and em. They should not wrap headings or lists. Strong marks importance, as in the allergy warning; em marks stress emphasis that can alter how a sentence is read. Browser defaults often make these bold or italic, but meaning is the reason to choose them. Use br only when a line break belongs in the content itself, such as lines of a postal address.</p>\n<h4>Choose a list based on whether order matters</h4><p>An unordered list, ul, groups items whose sequence is not essential: carrots, onion, and stock can be gathered in any order. Each item is an li element. An ordered list, ol, represents a sequence in which position matters, such as washing vegetables before cooking. The browser supplies the bullets or numbers, so do not type them into each li.</p>\n<p>Use real lists instead of paragraphs beginning with hyphens. A real list carries its grouping and item count to accessibility tools and keeps numbering correct if an item is inserted. Every ordinary direct child of ul or ol should be a list item. An li may contain a whole paragraph or a nested list when the content requires it.</p>\n<h4>Nest related detail and define terms accurately</h4><p>A nested list belongs inside the li whose detail it describes. In the variation, Preparation tools contains its own list of a chopping board and covered knife. Closing the parent li before that inner ul would detach the tools from their category. Indent the nested list to make the relationship visible in source.</p>\n<p>A description list, dl, pairs terms with descriptions. Dt identifies a term and dd its explanation, such as Simmer and its definition. It does not use li, and it is not a replacement for arbitrary two-column layout. Choose it when the relationship really is a term and description; the browser can display it usefully without custom CSS.</p>\n<h4>Check hierarchy by reading the page without its styling</h4><p>Read only the headings first. They should tell you what the page is about and how it is organised. Then read only the list items. The ingredient list should name things, while the method should contain actionable steps in a safe order. Mixing supplies and instructions into one list makes the task harder even if every tag is valid.</p>\n<p>For this lesson, browser default margins and markers are intentional. Focus on useful content structure before changing appearance. In the exercises, preserve complete documents and check that numbering is generated by ol, each item belongs to its list, and warnings remain understandable as words rather than decoration alone.</p>",
      "codeExample": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Community Kitchen — cooking class</title>\n</head>\n<body>\n<main>\n  <h1>Community Kitchen</h1>\n  <p>Learn to cook an affordable vegetable soup.</p>\n  <h2>Bring these ingredients</h2>\n  <ul><li>Two carrots</li><li>One onion</li><li>Vegetable stock</li></ul>\n  <h2>Cooking method</h2>\n  <ol><li>Wash and chop the vegetables.</li><li>Simmer in stock for 20 minutes.</li><li>Taste before serving.</li></ol>\n  <p><strong>Important:</strong> ask about allergies before sharing food.</p>\n</main>\n</body>\n</html>",
      "exercises": [
        {
          "title": "Guided: library supplies and steps",
          "instruction": "Create a first-visit library guide with a main heading, a supplies section containing two unordered items, and a borrowing section containing three ordered steps.",
          "hint": "Ask whether changing the order would change the task before choosing ul or ol.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Library visit plan</title>\n</head>\n<body>\n<main><h1>Your first library visit</h1><h2>Bring with you</h2><ul><li>A library card</li><li>A book bag</li></ul><h2>Borrow a book</h2><ol><li>Choose a book.</li><li>Take it to the desk.</li><li>Check its return date.</li></ol></main>\n</body>\n</html>",
          "expectedOutput": "Two bulleted supplies appear above three numbered borrowing steps.",
          "solutionExplanation": "Supplies are a set, but the borrowing steps form a sequence. Equal h2 headings organise both beneath one h1.",
          "successCriteria": [
            "One h1 and two h2 headings form the outline.",
            "Supplies use ul with two li children.",
            "Borrowing uses ol with three li children."
          ],
          "level": "easy",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "ul > li",
                "text": null,
                "count": 2
              },
              {
                "selector": "ol > li",
                "text": null,
                "count": 3
              }
            ]
          }
        },
        {
          "title": "Repair: fake headings and numbering",
          "instruction": "An arrival guide uses <p>REPAIR CAFÉ</p> and paragraphs reading “1. Check in”, “2. Explain the problem”, “3. Wait”. Replace the title with a real main heading, add a section heading, and turn the steps into an automatically numbered list.",
          "hint": "Choose semantics from the role each piece of text plays, then remove typed numbers.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Repair café — arrival</title>\n</head>\n<body>\n<main><h1>Repair café</h1><p>Volunteers help with small household repairs.</p><h2>When you arrive</h2><ol><li>Check in at reception.</li><li>Explain the problem.</li><li>Wait for a volunteer.</li></ol></main>\n</body>\n</html>",
          "expectedOutput": "Repair café is a main heading; When you arrive introduces three numbered steps.",
          "solutionExplanation": "Headings become navigable structure and ol preserves sequence without manual renumbering. The introduction stays a paragraph because it is prose.",
          "successCriteria": [
            "The title is h1.",
            "The step group follows h2.",
            "All three steps are li elements inside one ol."
          ],
          "level": "easy",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "h1",
                "text": "Repair café",
                "count": 1
              },
              {
                "selector": "h2",
                "text": "When you arrive",
                "count": 1
              },
              {
                "selector": "ol > li",
                "text": null,
                "count": 3
              }
            ]
          }
        },
        {
          "title": "Independent: a safe community activity guide",
          "instruction": "Write a clean-up guide with a meeting time and place, equipment list, ordered collection steps, and one important safety warning. Use at least two logical section headings.",
          "hint": "Separate supplies from actions; use strong for the warning’s importance, not for every paragraph.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Neighbourhood clean-up guide</title>\n</head>\n<body>\n<main><h1>Neighbourhood clean-up</h1><p>Meet at the park gate on Saturday at 9 am.</p><h2>Equipment</h2><ul><li>Reusable gloves</li><li>A refillable water bottle</li><li>Closed shoes</li></ul><h2>Safe collection steps</h2><ol><li>Join a team.</li><li>Collect ordinary litter.</li><li>Return filled bags to the collection point.</li></ol><p><strong>Safety:</strong> report sharp objects to the organiser.</p></main>\n</body>\n</html>",
          "expectedOutput": "The clean-up guide shows the meeting details, three supplies, three steps, and a warning about sharp objects.",
          "solutionExplanation": "The structure supports a real task: people know where to go, what to bring, and what to do. The warning uses meaningful emphasis while its words explain the risk.",
          "successCriteria": [
            "Meeting details are visible prose.",
            "Equipment and steps use different appropriate list types.",
            "Heading ranks and nesting are logical.",
            "The safety message remains understandable without styling."
          ],
          "level": "medium",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "h1",
                "text": "Neighbourhood clean-up",
                "count": 1
              },
              {
                "selector": "ul > li",
                "text": null,
                "count": 3
              },
              {
                "selector": "ol > li",
                "text": null,
                "count": 3
              },
              {
                "selector": "strong",
                "text": "Safety:",
                "count": 1
              }
            ]
          }
        }
      ],
      "quiz": [
        {
          "q": "Which list suits a recipe’s cooking steps?",
          "options": [
            "ul, because all lists are interchangeable",
            "ol, because sequence matters",
            "dl, because steps contain verbs",
            "A p with manually typed numbers"
          ],
          "correct": 1,
          "explanation": "Ordered lists express sequence and maintain numbering when steps change."
        },
        {
          "q": "A heading is visually too large. What should determine its rank?",
          "options": [
            "The number of words",
            "The available screen width",
            "Its place in the content hierarchy",
            "The desired font size"
          ],
          "correct": 2,
          "explanation": "Heading ranks describe relationships. CSS can adjust appearance independently."
        },
        {
          "q": "Where should a nested ul describing one item be placed?",
          "options": [
            "Inside that item’s li",
            "Between the list and its closing ul",
            "Inside a preceding p",
            "Outside every list"
          ],
          "correct": 0,
          "explanation": "The inner list belongs to the parent item it expands, so it is nested within that li."
        },
        {
          "q": "Which markup best represents a short glossary?",
          "options": [
            "ol with typed term numbers",
            "A separate h1 for every term",
            "br between all words",
            "dl containing dt terms and dd descriptions"
          ],
          "correct": 3,
          "explanation": "Description lists express term-description relationships. They are distinct from item sets and ordered procedures."
        }
      ],
      "pitfalls": "Numbers are duplicated beside every step: The author typed numbers inside items already numbered by ol. Remove the typed prefixes and let the browser create markers. A subsection is read as unrelated or has a confusing level: A heading rank was chosen for its visual size. Choose ranks from the outline and style size separately later. The browser splits a paragraph unexpectedly: A list or heading was placed inside p, which cannot contain it. Close the paragraph before the heading or list. Nested bullets appear detached from their category: The inner ul was placed after the parent li closed. Move the inner list inside the relevant li.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Build the complete document skeleton from Document Structure.",
          "Recognise opening tags, closing tags, and nested elements; preview a complete HTML file."
        ],
        "outcomes": [
          "Choose heading levels from the content hierarchy rather than visual size.",
          "Choose paragraphs, unordered lists, ordered lists, and description lists for appropriate content.",
          "Repair invalid list nesting and produce clear step-by-step instructions."
        ],
        "expectedOutput": "Community Kitchen appears above an introduction, a bulleted three-item ingredient list, a numbered three-step method, and an important allergy warning.",
        "walkthrough": [
          {
            "code": "<main>",
            "explanation": "Groups the page’s principal content; later lessons examine landmarks in detail."
          },
          {
            "code": "<h1>Community Kitchen</h1>",
            "explanation": "Names the single main subject."
          },
          {
            "code": "<h2>Bring these ingredients</h2>",
            "explanation": "Introduces one of two equal-level sections."
          },
          {
            "code": "<ul><li> ... </li></ul>",
            "explanation": "Groups supplies using browser-generated bullet markers."
          },
          {
            "code": "<ol><li> ... </li></ol>",
            "explanation": "Encodes cooking steps whose order matters; numbering is automatic."
          },
          {
            "code": "<strong>Important:</strong>",
            "explanation": "Marks the warning label as important within a complete paragraph."
          }
        ],
        "variations": [
          {
            "title": "Nested categories and a glossary",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Community Kitchen — equipment</title>\n</head>\n<body>\n<main><h1>Kitchen equipment</h1><p>Pack the tools that match your job.</p>\n<ul><li>Preparation tools<ul><li>Chopping board</li><li>Knife with a cover</li></ul></li><li>Serving tools<ul><li>Ladle</li><li>Bowls</li></ul></li></ul>\n<h2>Food terms</h2><dl><dt>Simmer</dt><dd>Cook gently just below boiling.</dd><dt>Dice</dt><dd>Cut into small cubes.</dd></dl></main>\n</body>\n</html>",
            "expectedOutput": "A two-category equipment list with two items nested under each category, followed by definitions for Simmer and Dice.",
            "explanation": "The nested ul elements stay inside their parent li elements; dl uses dt/dd pairs because glossary entries are terms and descriptions.",
            "validation": {
              "environment": "Modern Chromium; Preview HTML",
              "browserChecks": [
                {
                  "selector": "ul > li > ul",
                  "text": null,
                  "count": 2
                },
                {
                  "selector": "dl dt",
                  "text": null,
                  "count": 2
                },
                {
                  "selector": "h2",
                  "text": "Food terms",
                  "count": 1
                }
              ]
            }
          }
        ],
        "mistakes": [
          {
            "symptom": "Numbers are duplicated beside every step",
            "cause": "The author typed numbers inside items already numbered by ol.",
            "fix": "Remove the typed prefixes and let the browser create markers."
          },
          {
            "symptom": "A subsection is read as unrelated or has a confusing level",
            "cause": "A heading rank was chosen for its visual size.",
            "fix": "Choose ranks from the outline and style size separately later."
          },
          {
            "symptom": "The browser splits a paragraph unexpectedly",
            "cause": "A list or heading was placed inside p, which cannot contain it.",
            "fix": "Close the paragraph before the heading or list."
          },
          {
            "symptom": "Nested bullets appear detached from their category",
            "cause": "The inner ul was placed after the parent li closed.",
            "fix": "Move the inner list inside the relevant li."
          }
        ],
        "summary": [
          "Heading rank describes hierarchy; paragraphs group prose.",
          "Use ul for unordered sets, ol for sequences, and dl for terms with descriptions.",
          "Nest related lists inside their owning li. Next, connect content with links and meaningful images."
        ],
        "references": [
          {
            "title": "MDN: Heading_Elements",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements"
          },
          {
            "title": "MDN: ul",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul"
          },
          {
            "title": "MDN: dl",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl"
          }
        ],
        "validation": {
          "environment": "Modern Chromium; Preview HTML",
          "browserChecks": [
            {
              "selector": "h1",
              "text": "Community Kitchen",
              "count": 1
            },
            {
              "selector": "h2",
              "text": null,
              "count": 2
            },
            {
              "selector": "ul > li",
              "text": null,
              "count": 3
            },
            {
              "selector": "ol > li",
              "text": null,
              "count": 3
            }
          ]
        }
      }
    },
    {
      "id": "web-04",
      "title": "1.4 Links & Images",
      "module": "Content",
      "objective": "Create descriptive links, reliable in-page destinations, and accessible images with appropriate text alternatives and dimensions.",
      "why": "Links connect a page to useful destinations, while images need both reliable loading and a meaningful alternative when someone cannot see them.",
      "explanation": "<h4>Make links identify their destination</h4><p>An anchor element, a, becomes a hyperlink when it has an href attribute. Its visible content should tell people what they will reach: Read the route details is more useful than Click here. Links are naturally keyboard reachable and normally activate with Enter. Use them for navigation; a button is the appropriate element for an action within the current interface, such as submitting a form.</p>\n<p>An absolute URL includes a scheme and host, such as https://developer.mozilla.org/. A relative URL such as about.html is resolved against the document’s location and requires that destination file to exist there. The academy preview does not magically create sibling files. This lesson uses real external documentation links and local fragments so every internal destination exists in the supplied document.</p>\n<h4>Connect fragments to unique IDs</h4><p>An href beginning with # refers to an element ID in the current document. The example’s href=\"#route\" matches id=\"route\" on the route heading. IDs must be unique in the document, and spelling and case must match. Following the link updates the fragment and moves to the target when scrolling is necessary. On a short page, the target may already be visible, so a dramatic scroll is not guaranteed.</p>\n<p>Avoid href=\"#\" as a placeholder for a real destination: it commonly moves toward the top without communicating a useful purpose. By default, links open in the same browsing context. If a design genuinely needs a new tab, explain that behavior in link text and use target=\"_blank\" with rel=\"noopener\". Extra tabs are not required merely because a link leaves your site.</p>\n<h4>Give every image the right alternative</h4><p>The img element is void. Src identifies the image resource; alt supplies its text alternative. Write alt according to what the image contributes in this context, rather than mechanically describing every pixel. The main illustration communicates a landscape, so its alternative describes green mountain peaks and a yellow sun. The caption adds a separate fact: the illustration is not a route map.</p>\n<p>A decorative image should have alt=\"\" so it is not redundantly announced. Omitting alt is different: assistive technology may fall back to an unhelpful file name. When an image is the only content of a link, its alternative must describe the link’s purpose. In the variation, visible link text already names that purpose, so the image inside the same link has an empty alternative to avoid repetition.</p>\n<h4>Handle dimensions and resource reliability</h4><p>Width and height attributes give the image an intrinsic aspect ratio, helping the browser reserve space before it loads. Our image is 320 by 180 units. The CSS max-width: 100% prevents it from exceeding its container, and height: auto preserves proportions if it becomes narrower. Giving an arbitrary CSS width and height can stretch an image even when its original aspect ratio is correct.</p>\n<p>The long data URI contains a tiny original SVG drawing directly in the file. It makes these examples self-contained; you can copy the entire src unchanged while practising links and alternatives. Normal production photographs usually belong in separate optimised files. A broken source cannot be repaired by alt text: the text offers an alternative, but you must still fix the actual resource path.</p>\n<h4>Verify the journey and the fallback</h4><p>Preview the example, Tab to the route link, and press Enter. Confirm that the URL fragment identifies route and that a matching heading exists. Inspect the loaded image, its caption, and the source alternative. At a narrow viewport, the illustration should shrink without horizontal scrolling.</p>\n<p>You can use developer tools to temporarily disable the image and consider whether the alternative conveys the needed information. Also read the links alone: each should remain understandable without a preceding sentence. These checks assess both successful loading and the meaning available when the visual is unavailable.</p>",
      "codeExample": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Ridge Walk — visitor guide</title>\n  <style>\nimg { max-width: 100%; height: auto; } figure { margin-inline: 0; }\n  </style>\n</head>\n<body>\n<main><h1>Ridge Walk</h1>\n<p><a href=\"#route\">Read the route details</a></p>\n<figure><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23e8f5e9%22%2F%3E%3Cpath%20d%3D%22M40%20150%20125%2035%20180%20110%20220%2065%20285%20150Z%22%20fill%3D%22%23186c50%22%2F%3E%3Ccircle%20cx%3D%22270%22%20cy%3D%2235%22%20r%3D%2218%22%20fill%3D%22%23f0b429%22%2F%3E%3C%2Fsvg%3E\" alt=\"Two green mountain peaks below a yellow sun\" width=\"320\" height=\"180\" ><figcaption>An illustration of the landscape, not a route map.</figcaption></figure>\n<h2 id=\"route\">Route details</h2><p>The easy loop begins at the visitor centre and takes one hour.</p>\n<p><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a\">Learn about HTML links on MDN</a></p></main>\n</body>\n</html>",
      "exercises": [
        {
          "title": "Guided: park directions",
          "instruction": "Build a park page with a Get walking directions link to a matching heading, an embedded landscape image with a useful alternative, and the instruction to use the south gate beside the library.",
          "hint": "Keep the complete image src; connect href=\"#directions\" to one matching ID.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Park visit — directions</title>\n  <style>\nimg { max-width: 100%; height: auto; }\n  </style>\n</head>\n<body>\n<main><h1>Plan your park visit</h1><p><a href=\"#directions\">Get walking directions</a></p><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23e8f5e9%22%2F%3E%3Cpath%20d%3D%22M40%20150%20125%2035%20180%20110%20220%2065%20285%20150Z%22%20fill%3D%22%23186c50%22%2F%3E%3Ccircle%20cx%3D%22270%22%20cy%3D%2235%22%20r%3D%2218%22%20fill%3D%22%23f0b429%22%2F%3E%3C%2Fsvg%3E\" alt=\"Two green mountain peaks below a yellow sun\" width=\"320\" height=\"180\" ><h2 id=\"directions\">Walking directions</h2><p>Enter through the south gate beside the library.</p></main>\n</body>\n</html>",
          "expectedOutput": "A park heading, directions link, mountain image, and south-gate directions appear.",
          "solutionExplanation": "The fragment target exists in the same file, and the image has a descriptive alternative plus proportional sizing.",
          "successCriteria": [
            "The link and target ID match.",
            "The image loads and has accurate alt text.",
            "The page has no horizontal overflow at 360px."
          ],
          "level": "easy",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "a[href=\"#directions\"]",
                "text": "Get walking directions",
                "count": 1
              },
              {
                "selector": "#directions",
                "text": "Walking directions",
                "count": 1
              },
              {
                "selector": "img",
                "text": null,
                "count": 1
              }
            ]
          }
        },
        {
          "title": "Repair: a broken local destination",
          "instruction": "A link uses href=\"#meeting-point\" but the heading uses id=\"meeting\" and the link text is “here”. Repair the mismatch and improve the link text. Include meeting details in a complete page.",
          "hint": "Choose one identifier for both ends; name the destination in the link text.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Hill trail — meeting point</title>\n</head>\n<body>\n<main><h1>Hill trail</h1><p><a href=\"#meeting\">Find the meeting point</a></p><h2 id=\"meeting\">Meeting point</h2><p>Meet outside the visitor centre at 9 am.</p></main>\n</body>\n</html>",
          "expectedOutput": "Find the meeting point links to Meeting point, followed by the 9 am visitor-centre instruction.",
          "solutionExplanation": "The repair fixes both behavior and meaning. A matching fragment is functional, while descriptive words make the destination understandable out of context.",
          "successCriteria": [
            "The link targets a real unique ID.",
            "Its text identifies the meeting point.",
            "The time and place are visible."
          ],
          "level": "easy",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "a[href=\"#meeting\"]",
                "text": "Find the meeting point",
                "count": 1
              },
              {
                "selector": "#meeting",
                "text": "Meeting point",
                "count": 1
              }
            ]
          }
        },
        {
          "title": "Independent: an accessible exhibit entry",
          "instruction": "Create an outdoor exhibit entry with the supplied illustration, a caption naming the work, a useful alt, an internal access-information link, and a descriptive external link to the MDN image reference.",
          "hint": "Give the image description and caption different jobs; do not repeat the caption word for word in alt.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Outdoor art exhibit</title>\n  <style>\nimg { max-width: 100%; height: auto; } figure { margin-inline: 0; }\n  </style>\n</head>\n<body>\n<main><h1>Outdoor art exhibit</h1><figure><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23e8f5e9%22%2F%3E%3Cpath%20d%3D%22M40%20150%20125%2035%20180%20110%20220%2065%20285%20150Z%22%20fill%3D%22%23186c50%22%2F%3E%3Ccircle%20cx%3D%22270%22%20cy%3D%2235%22%20r%3D%2218%22%20fill%3D%22%23f0b429%22%2F%3E%3C%2Fsvg%3E\" alt=\"Illustration of angular green mountains and a yellow sun\" width=\"320\" height=\"180\" ><figcaption>Mountain Study, a digital illustration made for this lesson.</figcaption></figure><p><a href=\"#access\">Read access information</a></p><h2 id=\"access\">Access information</h2><p>The exhibit is on a paved, step-free path beside the library.</p><p><a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img\">Read MDN’s image element reference</a></p></main>\n</body>\n</html>",
          "expectedOutput": "An artwork heading and captioned mountain illustration precede a link to step-free access information and an MDN reference link.",
          "solutionExplanation": "The illustration’s alternative describes its visual subject; the caption supplies its title and authorship context. Link text names each destination.",
          "successCriteria": [
            "The illustration loads without external files.",
            "Alt and caption provide useful complementary information.",
            "Internal and external links have clear text and correct destinations.",
            "The image fits a narrow viewport."
          ],
          "level": "medium",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "figcaption",
                "text": "Mountain Study, a digital illustration made for this lesson.",
                "count": 1
              },
              {
                "selector": "a[href=\"#access\"]",
                "text": "Read access information",
                "count": 1
              },
              {
                "selector": "#access",
                "text": "Access information",
                "count": 1
              }
            ]
          }
        }
      ],
      "quiz": [
        {
          "q": "Which link text is most useful when read alone?",
          "options": [
            "Click here",
            "Read the route details",
            "More",
            "This one"
          ],
          "correct": 1,
          "explanation": "It names the destination, making the link understandable without nearby context."
        },
        {
          "q": "An image decorates a link that already says Read the route. Which alt is appropriate?",
          "options": [
            "alt=\"Read the route\" again",
            "No alt attribute",
            "alt=\"\"",
            "alt=\"image\""
          ],
          "correct": 2,
          "explanation": "Empty alt excludes redundant decoration from the link’s name; omitting alt can expose an unhelpful fallback."
        },
        {
          "q": "What must href=\"#hours\" match?",
          "options": [
            "One element’s id=\"hours\"",
            "The page’s title text",
            "A CSS class called hours",
            "The image file name"
          ],
          "correct": 0,
          "explanation": "A fragment identifies an element by its unique ID in this document."
        },
        {
          "q": "Why supply accurate width and height attributes alongside responsive CSS?",
          "options": [
            "To prevent zoom",
            "To force the image to overflow",
            "To remove the need for alt",
            "To reserve its aspect ratio before loading"
          ],
          "correct": 3,
          "explanation": "Dimensions help reserve space. max-width and automatic height let the displayed image shrink proportionally."
        }
      ],
      "pitfalls": "A fragment link does not reach the intended section: The href fragment and ID differ, or the target ID is absent. Match their spelling and give each target a unique ID. Only a broken-image icon appears: Src points to a missing resource or a data URI was cut off. Restore the complete embedded src here; in a project verify the real file path and request. A linked image is announced with no useful destination name: It has empty alt and no visible text inside the link. Give the image a purpose-based alternative or add descriptive text to the same link. The picture looks squashed or causes horizontal scroll: Both display dimensions were forced or no maximum width was set. Use max-width: 100% and height: auto while retaining accurate width/height attributes.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Use a complete HTML skeleton and logical headings, paragraphs, and lists.",
          "Understand that attributes add information to an element. No image files are required: examples include an original embedded SVG illustration."
        ],
        "outcomes": [
          "Choose a working URL or fragment and meaningful text for an anchor.",
          "Write image alt text according to the image’s purpose in context.",
          "Reserve an image’s aspect ratio and keep it inside a narrow viewport."
        ],
        "expectedOutput": "A Ridge Walk heading, a route link, the green mountain illustration with a caption, route details, and a descriptive MDN link. The illustration remains proportional at narrow widths.",
        "walkthrough": [
          {
            "code": "<a href=\"#route\">Read the route details</a>",
            "explanation": "Creates a keyboard-operable in-page link whose text names its destination."
          },
          {
            "code": "<figure> ... <figcaption> ...",
            "explanation": "Groups the illustration with its visible explanatory caption."
          },
          {
            "code": "<img src=\"data:image/svg+xml,...\" alt=\"...\" width=\"320\" height=\"180\">",
            "explanation": "Loads the embedded drawing, supplies its alternative, and reserves its 16:9 proportions."
          },
          {
            "code": "img { max-width: 100%; height: auto; }",
            "explanation": "Allows shrinking while preserving aspect ratio; the figure margin rule leaves space on narrow screens."
          },
          {
            "code": "<h2 id=\"route\">Route details</h2>",
            "explanation": "Defines the unique destination named by the link fragment."
          },
          {
            "code": "href=\"https://developer.mozilla.org/...\"",
            "explanation": "Uses an absolute URL for an external authoritative reference."
          }
        ],
        "variations": [
          {
            "title": "Avoid repeating the name of an image link",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Ridge Walk — linked illustration</title>\n  <style>\nimg { display: block; max-width: 100%; height: auto; }\n  </style>\n</head>\n<body>\n<main><h1>Choose the easy route</h1><a href=\"#easy\"><img src=\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23e8f5e9%22%2F%3E%3Cpath%20d%3D%22M40%20150%20125%2035%20180%20110%20220%2065%20285%20150Z%22%20fill%3D%22%23186c50%22%2F%3E%3Ccircle%20cx%3D%22270%22%20cy%3D%2235%22%20r%3D%2218%22%20fill%3D%22%23f0b429%22%2F%3E%3C%2Fsvg%3E\" alt=\"\" width=\"320\" height=\"180\" ><span>Read the easy loop description</span></a><h2 id=\"easy\">Easy loop</h2><p>This one-hour walk starts at the visitor centre.</p></main>\n</body>\n</html>",
            "expectedOutput": "A landscape illustration and “Read the easy loop description” form one link to the Easy loop section.",
            "explanation": "The image is decorative within this link because the visible text supplies the destination name. Empty alt avoids adding a redundant landscape description to that accessible name.",
            "validation": {
              "environment": "Modern Chromium; Preview HTML",
              "browserChecks": [
                {
                  "selector": "a[href=\"#easy\"]",
                  "text": "Read the easy loop description",
                  "count": 1
                },
                {
                  "selector": "img",
                  "text": null,
                  "count": 1,
                  "attribute": {
                    "name": "alt",
                    "value": ""
                  }
                }
              ]
            }
          }
        ],
        "mistakes": [
          {
            "symptom": "A fragment link does not reach the intended section",
            "cause": "The href fragment and ID differ, or the target ID is absent.",
            "fix": "Match their spelling and give each target a unique ID."
          },
          {
            "symptom": "Only a broken-image icon appears",
            "cause": "Src points to a missing resource or a data URI was cut off.",
            "fix": "Restore the complete embedded src here; in a project verify the real file path and request."
          },
          {
            "symptom": "A linked image is announced with no useful destination name",
            "cause": "It has empty alt and no visible text inside the link.",
            "fix": "Give the image a purpose-based alternative or add descriptive text to the same link."
          },
          {
            "symptom": "The picture looks squashed or causes horizontal scroll",
            "cause": "Both display dimensions were forced or no maximum width was set.",
            "fix": "Use max-width: 100% and height: auto while retaining accurate width/height attributes."
          }
        ],
        "summary": [
          "Links need meaningful text and real destinations; fragments match unique IDs.",
          "Alt depends on an image’s purpose, including its role inside a link.",
          "Use accurate dimensions and proportional responsive sizing. Next, organise these elements into meaningful page regions."
        ],
        "references": [
          {
            "title": "MDN: a",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a"
          },
          {
            "title": "MDN: img",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img"
          },
          {
            "title": "MDN: HTML",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML"
          }
        ],
        "validation": {
          "environment": "Modern Chromium; Preview HTML",
          "browserChecks": [
            {
              "selector": "h1",
              "text": "Ridge Walk",
              "count": 1
            },
            {
              "selector": "img",
              "text": null,
              "count": 1
            },
            {
              "selector": "figcaption",
              "text": "An illustration of the landscape, not a route map.",
              "count": 1
            },
            {
              "selector": "#route",
              "text": "Route details",
              "count": 1
            }
          ]
        }
      }
    },
    {
      "id": "web-05",
      "title": "1.5 Semantic Layout Tags",
      "module": "Content",
      "objective": "Choose semantic page regions and distinguish a reusable article from a thematic section or a purely visual container.",
      "why": "Meaningful HTML regions help people navigate a page and help future maintainers understand its organisation without depending on class names or visual position.",
      "explanation": "<h4>Give the page recognisable regions</h4><p>Semantic HTML means choosing elements for their meaning. A page header commonly contains a site identity and introductory navigation, while main contains the document’s principal content. A footer commonly contains closing information, such as credits or practical details. These elements do not automatically create a particular layout: without CSS they generally appear in normal document flow.</p>\n<p>Use one visible main region for this lesson’s page. Repeating the same site header and footer on several pages does not make those regions the principal unique content of each page. A header inside an article can introduce that article instead of the whole site; meaning depends on its context. The variation demonstrates an article header and footer inside the main page structure.</p>\n<h4>Reserve nav for a useful navigation group</h4><p>Nav identifies a major navigation section, such as the primary site menu or a table of contents. It is not necessary around every isolated link. Put real anchors inside it so normal browser navigation and keyboard behavior remain available. The example links to produce and farm news, both of which are actual section IDs in the same document.</p>\n<p>When a page has multiple navigation regions, give them distinct accessible labels, such as Primary and Article contents. Here aria-label=\"Primary\" supplies a name for the navigation landmark without adding visible text. Do not add a redundant role=\"navigation\" to nav: its native semantics already supply that role. Landmarks supplement headings; they do not remove the need for understandable section titles.</p>\n<h4>Distinguish a thematic section from a self-contained article</h4><p>A section groups content about a theme and normally has a heading that names that theme. Seasonal produce and Farm news are thematic sections beneath the main page heading. Do not use section just because you want a border around a box. When a container exists only for CSS grouping and has no special meaning, a div is often the honest choice.</p>\n<p>An article is a self-contained composition that could reasonably be reused or distributed independently, such as a news story, forum post, or complete blog entry. New herb beds planted is an article within the news section. A card shape does not automatically make something an article: ask whether its content is a meaningful standalone item. A whole article may itself contain several sections.</p>\n<h4>Use headings and related material deliberately</h4><p>Sectioning elements do not excuse confusing heading levels. Keep one clear h1 for the page, h2 for major themes, and h3 for stories within an h2 news section. Browsers and assistive technologies do not reliably manufacture the heading outline you intended from nested section tags alone. Write the correct levels explicitly.</p>\n<p>Aside contains content related to, but separate from, its surrounding main discussion. The variation uses it for a related composting workshop beside a compost article. Aside does not guarantee a visual sidebar, and a sidebar-shaped box is not necessarily an aside. Decide whether the content is tangential, then use CSS later to decide where it appears.</p>\n<h4>Review the structure before arranging it</h4><p>Preview the farm page and identify its header, navigation, main content, and footer in the source. Follow each menu link. Read the heading sequence alone: This week at Green Farms, Seasonal produce, Farm news, New herb beds planted. That sequence should describe the actual nesting of ideas.</p>\n<p>Use the browser’s accessibility or Elements tools to inspect native roles when available. Adding more landmark tags is not always better: excessive regions with no useful purpose can make navigation noisy. Keep the structure as simple as the content allows, and preserve normal reading order when we later arrange the same regions with CSS.</p>",
      "codeExample": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Green Farms — market news</title>\n</head>\n<body>\n<header><p>Green Farms</p><nav aria-label=\"Primary\"><a href=\"#produce\">Produce</a> · <a href=\"#news\">Farm news</a></nav></header>\n<main><h1>This week at Green Farms</h1><section id=\"produce\"><h2>Seasonal produce</h2><p>Carrots, spinach, and tomatoes are ready for Saturday’s market.</p></section>\n<section id=\"news\"><h2>Farm news</h2><article><h3>New herb beds planted</h3><p>Volunteers planted mint and basil in the teaching garden.</p></article></section></main>\n<footer><p>Green Farms · Saturday market, 9 am–1 pm.</p></footer>\n</body>\n</html>",
      "exercises": [
        {
          "title": "Guided: museum page regions",
          "instruction": "Create a museum visitor page with site header, primary nav, one main region, a Visit section with opening hours, and a footer giving the accessible entrance.",
          "hint": "Build the reading order first, then connect the nav link to the section ID.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Harbour Museum — visit</title>\n</head>\n<body>\n<header><p>Harbour Museum</p><nav aria-label=\"Primary\"><a href=\"#visit\">Plan your visit</a></nav></header><main><h1>Discover harbour history</h1><section id=\"visit\"><h2>Plan your visit</h2><p>Open Wednesday–Sunday, 10 am–4 pm.</p></section></main><footer><p>Step-free entrance on Quay Street.</p></footer>\n</body>\n</html>",
          "expectedOutput": "A museum identity and Plan your visit link precede the main heading, opening hours, and step-free entrance information.",
          "solutionExplanation": "The regions communicate purpose even with default styling. The navigation target is real and the footer contains practical closing information.",
          "successCriteria": [
            "One visible main wraps the unique page content.",
            "Nav links to the visit section.",
            "Heading levels move from h1 to h2.",
            "Footer identifies the entrance."
          ],
          "level": "easy",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "main",
                "text": null,
                "count": 1
              },
              {
                "selector": "nav a[href=\"#visit\"]",
                "text": "Plan your visit",
                "count": 1
              },
              {
                "selector": "footer p",
                "text": "Step-free entrance on Quay Street.",
                "count": 1
              }
            ]
          }
        },
        {
          "title": "Repair: several competing main regions",
          "instruction": "A repair journal gives a news story and workshop times their own separate main elements. Rebuild the document with one main, a self-contained advice article, and a thematic workshop section.",
          "hint": "Keep main once; choose the nested element by the content’s job.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Repair Journal — bicycle lights</title>\n</head>\n<body>\n<header><p>Repair Journal</p></header><main><h1>Repair advice</h1><article><h2>Check your bicycle lights</h2><p>Check both lights before travelling after dark.</p></article><section><h2>Workshop times</h2><p>Drop in on Saturday morning.</p></section></main><footer><p>Published by the repair café volunteers.</p></footer>\n</body>\n</html>",
          "expectedOutput": "Repair advice contains a bicycle-light article and a workshop-times section beneath the site header.",
          "solutionExplanation": "One main identifies principal content. The advice item can stand alone as an article, while practical schedule information forms a section.",
          "successCriteria": [
            "Only one main is present.",
            "The advice has an article heading.",
            "Workshop times have their own section heading."
          ],
          "level": "easy",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "main",
                "text": null,
                "count": 1
              },
              {
                "selector": "article h2",
                "text": "Check your bicycle lights",
                "count": 1
              },
              {
                "selector": "section h2",
                "text": "Workshop times",
                "count": 1
              }
            ]
          }
        },
        {
          "title": "Independent: learning-day programme",
          "instruction": "Build a community learning-day page with a primary navigation, schedule section containing two self-contained session descriptions, access section, and footer with the event location and price.",
          "hint": "Sessions can be articles within the schedule theme; keep their headings one rank below Schedule.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Community Learning Day</title>\n</head>\n<body>\n<header><p>Community Learning Day</p><nav aria-label=\"Primary\"><a href=\"#schedule\">Schedule</a> · <a href=\"#access\">Access</a></nav></header><main><h1>Learn something together</h1><section id=\"schedule\"><h2>Schedule</h2><article><h3>10 am: Beginner drawing</h3><p>Try simple sketching with supplied materials.</p></article><article><h3>11 am: Bike care</h3><p>Practise checking tyres and brakes.</p></article></section><section id=\"access\"><h2>Access</h2><p>All sessions take place on the ground floor.</p></section></main><footer><p>Saturday at the community hall. Entry is free.</p></footer>\n</body>\n</html>",
          "expectedOutput": "A programme page shows two session articles, ground-floor access information, and free-entry event details.",
          "solutionExplanation": "The nested structure matches the information: schedule is a theme, each session is a reusable item, and access is an equal major theme.",
          "successCriteria": [
            "Primary links reach existing IDs.",
            "One h1 introduces the page.",
            "Schedule/access use h2 and sessions use h3.",
            "The footer supplies location and price."
          ],
          "level": "medium",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "section#schedule article",
                "text": null,
                "count": 2
              },
              {
                "selector": "section#access h2",
                "text": "Access",
                "count": 1
              },
              {
                "selector": "nav a",
                "text": null,
                "count": 2
              }
            ]
          }
        }
      ],
      "quiz": [
        {
          "q": "Which element fits the page’s principal unique content?",
          "options": [
            "header",
            "main",
            "aside",
            "nav"
          ],
          "correct": 1,
          "explanation": "Main identifies the dominant content of the document rather than repeated site navigation or tangential material."
        },
        {
          "q": "A box exists only to align two decorative shapes. Which wrapper is usually appropriate?",
          "options": [
            "article",
            "nav",
            "div",
            "section with no topic"
          ],
          "correct": 2,
          "explanation": "A neutral div does not invent a semantic section when the wrapper exists only for presentation."
        },
        {
          "q": "Which is the strongest reason to choose article?",
          "options": [
            "The content is a self-contained composition",
            "The box has a shadow",
            "The content is on the right",
            "The text has three paragraphs"
          ],
          "correct": 0,
          "explanation": "Article expresses independent content meaning, not visual position or a required paragraph count."
        },
        {
          "q": "Does nesting a section automatically fix its heading level?",
          "options": [
            "Yes, every heading can be h1",
            "Yes, if the section has an ID",
            "Only on mobile screens",
            "No; choose explicit heading ranks"
          ],
          "correct": 3,
          "explanation": "Use the actual h1–h6 ranks to express hierarchy; do not rely on an inferred outline that may not exist for users."
        }
      ],
      "pitfalls": "Every coloured box is a section but many have no topic: Section was chosen only as a styling hook. Use a heading-led section for a theme, or div for a neutral visual wrapper. Several visible main landmarks make the primary content unclear: Main was repeated for each part of the page. Use one visible main and place appropriate sections or articles inside it. A story heading jumps straight from h1 to h4: The author assumed nested semantic tags would supply heading ranks automatically. Write explicit h2/h3 levels that reflect the actual content hierarchy. A side-positioned navigation menu was marked aside: A visual position was confused with tangential content. Use nav for navigation; use aside only for related supplementary material.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Create headings with a logical hierarchy and links to unique IDs.",
          "Know the document skeleton and understand that tags express meaning before styling."
        ],
        "outcomes": [
          "Build a page with appropriate header, navigation, main, and footer regions.",
          "Choose article, section, aside, or a neutral div according to content purpose.",
          "Keep a meaningful heading hierarchy and working navigation inside semantic regions."
        ],
        "expectedOutput": "A Green Farms header with two navigation links, one main heading, produce details, a news section containing a herb-planting article, and market hours in the footer.",
        "walkthrough": [
          {
            "code": "<header> ... <nav aria-label=\"Primary\">",
            "explanation": "Introduces the site and gives its major navigation group an accessible name."
          },
          {
            "code": "<a href=\"#produce\"> ... <a href=\"#news\">",
            "explanation": "Connects to real sections by their unique IDs."
          },
          {
            "code": "<main><h1>This week at Green Farms</h1>",
            "explanation": "Begins the principal page content with its main heading."
          },
          {
            "code": "<section id=\"produce\"><h2>Seasonal produce</h2>",
            "explanation": "Groups produce information under its own theme."
          },
          {
            "code": "<section id=\"news\"> ... <article><h3>",
            "explanation": "Places a self-contained news item within the broader news theme, with a correct nested heading rank."
          },
          {
            "code": "<footer>",
            "explanation": "Contains closing market details for the page, outside main."
          }
        ],
        "variations": [
          {
            "title": "An article can contain its own sections",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Garden Journal — compost article</title>\n</head>\n<body>\n<header><p>Garden Journal</p></header><main><article><header><h1>Starting a compost pile</h1><p>By the community garden team</p></header><section><h2>Choose a spot</h2><p>Use a level, well-drained area.</p></section><section><h2>Balance materials</h2><p>Mix green scraps with dry leaves.</p></section><footer><p>Updated for the autumn garden programme.</p></footer></article><aside><h2>Related workshop</h2><p>Composting practice takes place on Saturday.</p></aside></main><footer><p>Garden Journal · Local growing notes</p></footer>\n</body>\n</html>",
            "expectedOutput": "A compost article has its own title, author introduction, two sections, and update note. A separate related-workshop aside follows it.",
            "explanation": "Header and footer can belong to a containing article. The aside is related supplementary information, while the final footer closes the overall page.",
            "validation": {
              "environment": "Modern Chromium; Preview HTML",
              "browserChecks": [
                {
                  "selector": "main > article",
                  "text": null,
                  "count": 1
                },
                {
                  "selector": "article > section",
                  "text": null,
                  "count": 2
                },
                {
                  "selector": "aside h2",
                  "text": "Related workshop",
                  "count": 1
                }
              ]
            }
          }
        ],
        "mistakes": [
          {
            "symptom": "Every coloured box is a section but many have no topic",
            "cause": "Section was chosen only as a styling hook.",
            "fix": "Use a heading-led section for a theme, or div for a neutral visual wrapper."
          },
          {
            "symptom": "Several visible main landmarks make the primary content unclear",
            "cause": "Main was repeated for each part of the page.",
            "fix": "Use one visible main and place appropriate sections or articles inside it."
          },
          {
            "symptom": "A story heading jumps straight from h1 to h4",
            "cause": "The author assumed nested semantic tags would supply heading ranks automatically.",
            "fix": "Write explicit h2/h3 levels that reflect the actual content hierarchy."
          },
          {
            "symptom": "A side-positioned navigation menu was marked aside",
            "cause": "A visual position was confused with tangential content.",
            "fix": "Use nav for navigation; use aside only for related supplementary material."
          }
        ],
        "summary": [
          "Choose regions from meaning rather than appearance.",
          "Main holds principal content, section groups a theme, and article represents a self-contained composition.",
          "Headings and real navigation remain necessary inside semantic regions. Next, collect user input with labelled native controls."
        ],
        "references": [
          {
            "title": "MDN: main",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main"
          },
          {
            "title": "MDN: section",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section"
          },
          {
            "title": "MDN: article",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article"
          },
          {
            "title": "MDN: nav",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav"
          }
        ],
        "validation": {
          "environment": "Modern Chromium; Preview HTML",
          "browserChecks": [
            {
              "selector": "main",
              "text": null,
              "count": 1
            },
            {
              "selector": "nav a",
              "text": null,
              "count": 2
            },
            {
              "selector": "#produce h2",
              "text": "Seasonal produce",
              "count": 1
            },
            {
              "selector": "#news article h3",
              "text": "New herb beds planted",
              "count": 1
            }
          ]
        }
      }
    },
    {
      "id": "web-06",
      "title": "1.6 Forms & Inputs",
      "module": "Content",
      "objective": "Build usable native forms with labels, appropriate input types, grouped choices, and honest local-only validation behavior.",
      "why": "A form is a conversation with a visitor. Clear labels and predictable controls reduce mistakes, while distinguishing validation from delivery prevents misleading success messages.",
      "explanation": "<h4>Start with a form and a clear promise</h4><p>Form groups related input controls. In a production form, action identifies a receiving URL and method controls how a request carries data, commonly get for retrieval or post for changes. HTML fields alone do not create an inbox, database, or delivery service. A real receiver must validate and process submitted data on the server.</p>\n<p>These examples deliberately run locally. The visible note says nothing is sent or saved, and a supplied submit listener calls event.preventDefault() to stop navigation. After native validation passes, it updates a status paragraph with a local-check message. Keep this handler when copying the examples. “Practice check complete” means only that the browser accepted the fields, not that a booking or message reached anybody.</p>\n<h4>Connect labels, IDs, and names</h4><p>A visible label tells a person what to enter and remains available after they type. Its for attribute must match the control’s unique id. Clicking the label should focus that control. A placeholder is a temporary hint inside the field, not a replacement for a label, because it can disappear and may have weak contrast.</p>\n<p>Name has a separate purpose from id: it supplies the key associated with a value during normal form submission or FormData collection. Our full-name control uses id=\"full-name\" for its label and name=\"fullName\" for its data key. Autocomplete=\"name\" and autocomplete=\"email\" help compatible browsers identify common personal-information fields. Do not invent unrelated autocomplete tokens.</p>\n<h4>Choose controls that match the question</h4><p>A plain text input is suitable for a name. Type=\"email\" asks the browser to check basic email syntax and can improve the mobile keyboard. It does not prove that the address exists or belongs to the person entering it. A textarea supports multiple lines, with rows suggesting an initial height. Never use a number input merely because a value contains digits: phone numbers and identifiers are not quantities to increment.</p>\n<p>Select offers one choice from named options. Radio inputs with the same name form a mutually exclusive group; different value attributes identify which option was selected. A checkbox represents an independent yes/no choice. Put related radios in fieldset with a legend that names the question, then label each individual option. The variation combines all three patterns.</p>\n<h4>Use constraints as assistance, not security</h4><p>Required makes an empty required control invalid. On an ordinary submit attempt, browsers usually focus an invalid control and show their own validation message before firing the submit event. Email syntax is checked when the field is nonempty; add required when an empty email must also be rejected. Error-message wording varies by browser and language.</p>\n<p>Native validation improves feedback, but it is not a security boundary. A client can change markup or send a request without using the page. Production servers must enforce their own rules. State required fields in visible text as well as attributes, and avoid communicating errors through colour alone. Never claim that a browser syntax check verified delivery.</p>\n<h4>Test the form through the keyboard</h4><p>Tab through the example from name to email to question to submit. Each control should have a visible focus indicator and a readable label. Submit empty fields and confirm validation prevents the local completion message. Enter a sample name and malformed email, then correct the email and submit. The status should explicitly say that nothing was sent or saved.</p>\n<p>Use sample data rather than private information while practising. The demonstration does not persist values after a reload. The small CSS block provides readable spacing and field widths; the next lessons explain selectors and units so you can style controls intentionally while preserving their native behavior.</p>",
      "codeExample": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Workshop enquiry — form practice</title>\n  <style>\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172b35; background: #f4f7f8; line-height: 1.6; }\nmain, .wrap { width: min(100% - 2rem, 64rem); margin-inline: auto; padding-block: 2rem; }\nimg { max-width: 100%; height: auto; }\na { color: #075e58; }\n:focus-visible { outline: 3px solid #a63e00; outline-offset: 4px; }\nh1, h2, h3 { line-height: 1.2; }\nbutton, input, select, textarea { font: inherit; }\ninput, textarea, select { max-width: 100%; }\nbutton { cursor: pointer; }\nlabel { display: block; margin-top: 1rem; }\ninput, textarea, select { display: block; width: 100%; padding: .6rem; border: 1px solid #52646d; border-radius: .25rem; }\ninput[type=\"checkbox\"], input[type=\"radio\"] { display: inline; width: auto; }\nform { max-width: 30rem; }\nfieldset { margin-block: 1rem; border: 1px solid #52646d; }\nbutton { margin-top: 1rem; padding: .7rem 1rem; color: white; background: #075e58; border: 2px solid #075e58; border-radius: .3rem; }\n.help { color: #42545e; }\n  </style>\n</head>\n<body>\n<main><h1>Ask about a workshop</h1><p id=\"practice-note\">Practice form only. Nothing is sent or saved.</p><form aria-describedby=\"practice-note\"><label for=\"full-name\">Full name (required)</label><input id=\"full-name\" name=\"fullName\" autocomplete=\"name\" required><label for=\"email\">Email (required)</label><input id=\"email\" name=\"email\" type=\"email\" autocomplete=\"email\" required><label for=\"message\">Your question</label><textarea id=\"message\" name=\"message\" rows=\"4\"></textarea><button type=\"submit\">Check practice form</button></form><p id=\"status\" role=\"status\"></p></main>\n<script>\ndocument.querySelector('form').addEventListener('submit', function (event) {\n  event.preventDefault();\n  document.querySelector('#status').textContent = 'Practice check complete. Nothing was sent or saved.';\n});\n</script>\n</body>\n</html>",
      "exercises": [
        {
          "title": "Guided: labelled reading-group fields",
          "instruction": "Create a local reading-group interest form with required name and email fields, visible labels, appropriate autocomplete hints, and a submit button. Keep the practice note and supplied handler.",
          "hint": "Match each label for to an id; name controls independently for their data keys.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Reading group — form practice</title>\n  <style>\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172b35; background: #f4f7f8; line-height: 1.6; }\nmain, .wrap { width: min(100% - 2rem, 64rem); margin-inline: auto; padding-block: 2rem; }\nimg { max-width: 100%; height: auto; }\na { color: #075e58; }\n:focus-visible { outline: 3px solid #a63e00; outline-offset: 4px; }\nh1, h2, h3 { line-height: 1.2; }\nbutton, input, select, textarea { font: inherit; }\ninput, textarea, select { max-width: 100%; }\nbutton { cursor: pointer; }\nlabel { display: block; margin-top: 1rem; }\ninput, textarea, select { display: block; width: 100%; padding: .6rem; border: 1px solid #52646d; border-radius: .25rem; }\ninput[type=\"checkbox\"], input[type=\"radio\"] { display: inline; width: auto; }\nform { max-width: 30rem; }\nfieldset { margin-block: 1rem; border: 1px solid #52646d; }\nbutton { margin-top: 1rem; padding: .7rem 1rem; color: white; background: #075e58; border: 2px solid #075e58; border-radius: .3rem; }\n.help { color: #42545e; }\n  </style>\n</head>\n<body>\n<main><h1>Reading group interest</h1><p id=\"practice-note\">Practice form only. Nothing is sent or saved.</p><form aria-describedby=\"practice-note\"><label for=\"name\">Name (required)</label><input id=\"name\" name=\"name\" autocomplete=\"name\" required><label for=\"email\">Email (required)</label><input id=\"email\" name=\"email\" type=\"email\" autocomplete=\"email\" required><button type=\"submit\">Check details</button></form><p id=\"status\" role=\"status\"></p></main>\n<script>\ndocument.querySelector('form').addEventListener('submit', function (event) {\n  event.preventDefault();\n  document.querySelector('#status').textContent = 'Practice check complete. Nothing was sent or saved.';\n});\n</script>\n</body>\n</html>",
          "expectedOutput": "Two required labelled fields and a Check details button appear; valid sample input produces the explicit local-only status.",
          "solutionExplanation": "Native constraints handle missing or malformed input. The handler only updates status and prevents sending.",
          "successCriteria": [
            "Both labels focus the correct controls.",
            "Empty name and invalid email block submission.",
            "Valid input changes status without a network request.",
            "The page never claims registration occurred."
          ],
          "level": "easy",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "h1",
                "text": "Reading group interest",
                "count": 1
              },
              {
                "selector": "input[required]",
                "text": null,
                "count": 2
              },
              {
                "selector": "button[type=\"submit\"]",
                "text": "Check details",
                "count": 1
              }
            ]
          }
        },
        {
          "title": "Repair: a placeholder is not a label",
          "instruction": "A contact form has <input id=\"mail\" placeholder=\"Email\"> and a label with for=\"email\". Replace it with a correctly labelled required email control that has a data name. Add an item textarea and retain local-only behavior.",
          "hint": "Repair the relationship, type, required constraint, and name; they solve different problems.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Repair café — contact practice</title>\n  <style>\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172b35; background: #f4f7f8; line-height: 1.6; }\nmain, .wrap { width: min(100% - 2rem, 64rem); margin-inline: auto; padding-block: 2rem; }\nimg { max-width: 100%; height: auto; }\na { color: #075e58; }\n:focus-visible { outline: 3px solid #a63e00; outline-offset: 4px; }\nh1, h2, h3 { line-height: 1.2; }\nbutton, input, select, textarea { font: inherit; }\ninput, textarea, select { max-width: 100%; }\nbutton { cursor: pointer; }\nlabel { display: block; margin-top: 1rem; }\ninput, textarea, select { display: block; width: 100%; padding: .6rem; border: 1px solid #52646d; border-radius: .25rem; }\ninput[type=\"checkbox\"], input[type=\"radio\"] { display: inline; width: auto; }\nform { max-width: 30rem; }\nfieldset { margin-block: 1rem; border: 1px solid #52646d; }\nbutton { margin-top: 1rem; padding: .7rem 1rem; color: white; background: #075e58; border: 2px solid #075e58; border-radius: .3rem; }\n.help { color: #42545e; }\n  </style>\n</head>\n<body>\n<main><h1>Repair café contact practice</h1><p id=\"practice-note\">Practice form only. Nothing is sent or saved.</p><form aria-describedby=\"practice-note\"><label for=\"contact-email\">Email (required)</label><input id=\"contact-email\" name=\"email\" type=\"email\" autocomplete=\"email\" required><label for=\"item\">Item to repair</label><textarea id=\"item\" name=\"item\" rows=\"3\"></textarea><button type=\"submit\">Check repair details</button></form><p id=\"status\" role=\"status\"></p></main>\n<script>\ndocument.querySelector('form').addEventListener('submit', function (event) {\n  event.preventDefault();\n  document.querySelector('#status').textContent = 'Practice check complete. Nothing was sent or saved.';\n});\n</script>\n</body>\n</html>",
          "expectedOutput": "An Email (required) label focuses the email field; Item to repair labels a multiline field.",
          "solutionExplanation": "The visible label persists while typing. Matching for/id supplies its association; type=email and required provide distinct native checks.",
          "successCriteria": [
            "The email label matches its control ID.",
            "The control has name=\"email\", type=\"email\", and required.",
            "The textarea also has a persistent label.",
            "The check remains explicitly local."
          ],
          "level": "easy",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "label[for=\"contact-email\"]",
                "text": "Email (required)",
                "count": 1
              },
              {
                "selector": "input[type=\"email\"][required]",
                "text": null,
                "count": 1
              },
              {
                "selector": "textarea[name=\"item\"]",
                "text": null,
                "count": 1
              }
            ]
          }
        },
        {
          "title": "Independent: volunteer preference form",
          "instruction": "Build a volunteer preference form with required name and email, a required two-choice task radio group, optional scheduling notes, visible required/optional wording, and a local-only check.",
          "hint": "Use fieldset and legend for the task question, one shared radio name, and a label for every option.",
          "solution": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Volunteer preferences — form practice</title>\n  <style>\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172b35; background: #f4f7f8; line-height: 1.6; }\nmain, .wrap { width: min(100% - 2rem, 64rem); margin-inline: auto; padding-block: 2rem; }\nimg { max-width: 100%; height: auto; }\na { color: #075e58; }\n:focus-visible { outline: 3px solid #a63e00; outline-offset: 4px; }\nh1, h2, h3 { line-height: 1.2; }\nbutton, input, select, textarea { font: inherit; }\ninput, textarea, select { max-width: 100%; }\nbutton { cursor: pointer; }\nlabel { display: block; margin-top: 1rem; }\ninput, textarea, select { display: block; width: 100%; padding: .6rem; border: 1px solid #52646d; border-radius: .25rem; }\ninput[type=\"checkbox\"], input[type=\"radio\"] { display: inline; width: auto; }\nform { max-width: 30rem; }\nfieldset { margin-block: 1rem; border: 1px solid #52646d; }\nbutton { margin-top: 1rem; padding: .7rem 1rem; color: white; background: #075e58; border: 2px solid #075e58; border-radius: .3rem; }\n.help { color: #42545e; }\n  </style>\n</head>\n<body>\n<main><h1>Volunteer preferences</h1><p id=\"practice-note\">Practice form only. Nothing is sent or saved.</p><form aria-describedby=\"practice-note\"><label for=\"volunteer-name\">Name (required)</label><input id=\"volunteer-name\" name=\"name\" autocomplete=\"name\" required><label for=\"volunteer-email\">Email (required)</label><input id=\"volunteer-email\" name=\"email\" type=\"email\" autocomplete=\"email\" required><fieldset><legend>Preferred task</legend><label><input type=\"radio\" name=\"task\" value=\"welcome\" required> Welcome visitors</label><label><input type=\"radio\" name=\"task\" value=\"setup\"> Set up tables</label></fieldset><label for=\"notes\">Access or scheduling notes (optional)</label><textarea id=\"notes\" name=\"notes\" rows=\"4\"></textarea><button type=\"submit\">Check preferences</button></form><p id=\"status\" role=\"status\"></p></main>\n<script>\ndocument.querySelector('form').addEventListener('submit', function (event) {\n  event.preventDefault();\n  document.querySelector('#status').textContent = 'Practice check complete. Nothing was sent or saved.';\n});\n</script>\n</body>\n</html>",
          "expectedOutput": "The form shows personal details, mutually exclusive Welcome visitors/Set up tables choices, and optional notes. Only valid details and a task allow the local check.",
          "solutionExplanation": "The fieldset names the group while individual labels name choices. The shared name ensures exclusivity and required ensures a task is chosen; no server receives the values.",
          "successCriteria": [
            "All controls have meaningful labels and names.",
            "Choosing a second task clears the first.",
            "Missing required information blocks completion.",
            "The final message states nothing was sent or saved."
          ],
          "level": "medium",
          "validation": {
            "environment": "Modern Chromium; Preview HTML",
            "browserChecks": [
              {
                "selector": "legend",
                "text": "Preferred task",
                "count": 1
              },
              {
                "selector": "input[type=\"radio\"][name=\"task\"]",
                "text": null,
                "count": 2
              },
              {
                "selector": "textarea[name=\"notes\"]",
                "text": null,
                "count": 1
              }
            ]
          }
        }
      ],
      "quiz": [
        {
          "q": "What links a separate label to its input?",
          "options": [
            "Equal label text and placeholder",
            "Matching label for and input id",
            "Equal input name and type",
            "A nearby line break"
          ],
          "correct": 1,
          "explanation": "The explicit for/id association supplies the accessible label and click-to-focus behavior."
        },
        {
          "q": "What does type=\"email\" establish?",
          "options": [
            "That an address exists",
            "That a message was delivered",
            "Basic browser-side email syntax checking",
            "That the address belongs to the visitor"
          ],
          "correct": 2,
          "explanation": "It checks format, not ownership, deliverability, or whether the server processed anything."
        },
        {
          "q": "How do two radio options become one exclusive group?",
          "options": [
            "Give them the same name and different values",
            "Give them the same id",
            "Put both in separate forms",
            "Remove all labels"
          ],
          "correct": 0,
          "explanation": "The shared name groups radios; IDs must remain unique when used. Fieldset/legend adds the group’s descriptive context."
        },
        {
          "q": "The local status says the practice check is complete. What happened?",
          "options": [
            "A booking was created",
            "A database stored the answers",
            "An email was sent",
            "The browser accepted the fields and the local script updated text"
          ],
          "correct": 3,
          "explanation": "The supplied listener prevents sending. Valid data and a visible success-like message do not imply a backend operation."
        }
      ],
      "pitfalls": "Clicking a label does not focus its input: The label’s for value differs from the control ID. Match them exactly and keep IDs unique. A visible field is absent from collected form data: It has an ID but no name, or is disabled. Give submitted controls meaningful names; remember disabled controls are excluded. Both session choices can remain selected: They use different radio names, so they are separate groups. Use the same name and distinct values for one exclusive choice group. The page claims a message was delivered after a browser check: Client-side validation was mistaken for server processing. Label the result as a local practice check and connect a real validated backend before claiming delivery.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Understand semantic HTML, attributes, and complete document structure.",
          "Use Preview HTML in a modern browser. The supplied small JavaScript handler is infrastructure for this local demonstration; no backend service or account is required."
        ],
        "outcomes": [
          "Associate each control with a persistent visible label and meaningful submission name.",
          "Choose email, text, textarea, select, radio, and checkbox controls for appropriate data.",
          "Demonstrate required/email validation and explain why a local check does not send or save data."
        ],
        "expectedOutput": "A labelled name field, required email field, optional question textarea, and Check practice form button appear. Empty or malformed required data is rejected by the browser. Valid sample entries produce “Practice check complete. Nothing was sent or saved.” without navigating.",
        "walkthrough": [
          {
            "code": "<form aria-describedby=\"practice-note\">",
            "explanation": "Groups the fields and associates the local-only explanation with the form."
          },
          {
            "code": "<label for=\"full-name\"> ... <input id=\"full-name\" name=\"fullName\" ...>",
            "explanation": "Matches the visible label to the field while separately assigning its data key."
          },
          {
            "code": "type=\"email\" autocomplete=\"email\" required",
            "explanation": "Requests email-shaped input, an email autofill hint, and a nonempty value."
          },
          {
            "code": "<textarea ... rows=\"4\">",
            "explanation": "Provides a labelled multiline optional question field."
          },
          {
            "code": "<button type=\"submit\">",
            "explanation": "Uses native submit behavior, including constraint validation before a successful submit event."
          },
          {
            "code": "event.preventDefault(); ... '#status'",
            "explanation": "The supplied script cancels sending and writes an explicit local-only result into a polite status region. It is not a backend."
          }
        ],
        "variations": [
          {
            "title": "Group exclusive and independent choices",
            "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Workshop preferences — form practice</title>\n  <style>\n* { box-sizing: border-box; }\nbody { margin: 0; font-family: system-ui, sans-serif; color: #172b35; background: #f4f7f8; line-height: 1.6; }\nmain, .wrap { width: min(100% - 2rem, 64rem); margin-inline: auto; padding-block: 2rem; }\nimg { max-width: 100%; height: auto; }\na { color: #075e58; }\n:focus-visible { outline: 3px solid #a63e00; outline-offset: 4px; }\nh1, h2, h3 { line-height: 1.2; }\nbutton, input, select, textarea { font: inherit; }\ninput, textarea, select { max-width: 100%; }\nbutton { cursor: pointer; }\nlabel { display: block; margin-top: 1rem; }\ninput, textarea, select { display: block; width: 100%; padding: .6rem; border: 1px solid #52646d; border-radius: .25rem; }\ninput[type=\"checkbox\"], input[type=\"radio\"] { display: inline; width: auto; }\nform { max-width: 30rem; }\nfieldset { margin-block: 1rem; border: 1px solid #52646d; }\nbutton { margin-top: 1rem; padding: .7rem 1rem; color: white; background: #075e58; border: 2px solid #075e58; border-radius: .3rem; }\n.help { color: #42545e; }\n  </style>\n</head>\n<body>\n<main><h1>Choose a workshop</h1><p id=\"practice-note\">Practice form only. Nothing is sent or saved.</p><form aria-describedby=\"practice-note\"><fieldset><legend>Preferred session</legend><label><input type=\"radio\" name=\"session\" value=\"morning\" required> Morning</label><label><input type=\"radio\" name=\"session\" value=\"afternoon\"> Afternoon</label></fieldset><label for=\"experience\">Experience level</label><select id=\"experience\" name=\"experience\"><option value=\"new\">New to the topic</option><option value=\"some\">Some experience</option></select><label><input type=\"checkbox\" name=\"materials\" value=\"yes\"> I need to borrow materials</label><button type=\"submit\">Check preferences</button></form><p id=\"status\" role=\"status\"></p></main>\n<script>\ndocument.querySelector('form').addEventListener('submit', function (event) {\n  event.preventDefault();\n  document.querySelector('#status').textContent = 'Practice check complete. Nothing was sent or saved.';\n});\n</script>\n</body>\n</html>",
            "expectedOutput": "Morning and Afternoon are one radio group, a select offers experience levels, and an independent materials checkbox can be toggled. A session is required before the local check can complete.",
            "explanation": "Shared radio names create exclusivity. Fieldset/legend name the group, whereas the checkbox answers a separate question. The same local-only submit handler remains in place.",
            "validation": {
              "environment": "Modern Chromium; Preview HTML",
              "browserChecks": [
                {
                  "selector": "fieldset legend",
                  "text": "Preferred session",
                  "count": 1
                },
                {
                  "selector": "input[type=\"radio\"][name=\"session\"]",
                  "text": null,
                  "count": 2
                },
                {
                  "selector": "select option",
                  "text": null,
                  "count": 2
                },
                {
                  "selector": "input[type=\"checkbox\"]",
                  "text": null,
                  "count": 1
                }
              ]
            }
          }
        ],
        "mistakes": [
          {
            "symptom": "Clicking a label does not focus its input",
            "cause": "The label’s for value differs from the control ID.",
            "fix": "Match them exactly and keep IDs unique."
          },
          {
            "symptom": "A visible field is absent from collected form data",
            "cause": "It has an ID but no name, or is disabled.",
            "fix": "Give submitted controls meaningful names; remember disabled controls are excluded."
          },
          {
            "symptom": "Both session choices can remain selected",
            "cause": "They use different radio names, so they are separate groups.",
            "fix": "Use the same name and distinct values for one exclusive choice group."
          },
          {
            "symptom": "The page claims a message was delivered after a browser check",
            "cause": "Client-side validation was mistaken for server processing.",
            "fix": "Label the result as a local practice check and connect a real validated backend before claiming delivery."
          }
        ],
        "summary": [
          "Labels, IDs, and names have distinct jobs; choose controls that match the question.",
          "Native validation assists the visitor but does not replace server validation.",
          "The examples check locally and send nothing. Next, style this semantic HTML with CSS selectors and deliberate units."
        ],
        "references": [
          {
            "title": "MDN: Your_first_form",
            "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form"
          },
          {
            "title": "MDN: label",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label"
          },
          {
            "title": "MDN: Constraint_validation",
            "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation"
          }
        ],
        "validation": {
          "environment": "Modern Chromium; Preview HTML",
          "browserChecks": [
            {
              "selector": "h1",
              "text": "Ask about a workshop",
              "count": 1
            },
            {
              "selector": "input[required]",
              "text": null,
              "count": 2
            },
            {
              "selector": "textarea[name=\"message\"]",
              "text": null,
              "count": 1
            },
            {
              "selector": "#practice-note",
              "text": "Practice form only. Nothing is sent or saved.",
              "count": 1
            }
          ]
        }
      }
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
