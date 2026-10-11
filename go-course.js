// ZeroToCode Academy — Go (Golang) curriculum
// Comprehensive guide structure is documented in docs/LESSON-STANDARD.md.
window.GO_COURSE = {
  "id": "go",
  "name": "Go (Golang)",
  "icon": "🐹",
  "color": "cyan",
  "subtitle": "Simple, fast backends and CLIs",
  "globalName": "GO_COURSE",
  "lessons": [
    {
      "id": "go-01",
      "title": "1.1 Why Go & Hello World",
      "module": "Getting Started",
      "objective": "Set up a Go practice folder, run a complete program, and explain its package, import, and main function.",
      "why": "Go is used to build command-line tools and network services. Understanding the complete path from source file to running program gives you a reliable foundation before learning variables, functions, or concurrency.",
      "explanation": "<h4>Understand the language and the toolchain</h4><p>Go is a programming language designed for building software with a relatively small language surface and a standard toolchain. A <strong>toolchain</strong> is the collection of tools used to check, build, run, and format a program. The <code>go</code> command is the main entry point to these tasks.</p>\n<p>Go is compiled: source code is translated into an executable program. <code>go run</code> performs a build step and then runs the result, which makes it convenient during learning. <code>go build</code> builds an executable without immediately running it. A compiler error therefore happens before your program starts; it is not output from the program itself.</p>\n<h4>Prepare a local practice environment</h4><p>Install Go using the official installation instructions for your operating system. Open a terminal and run <code>go version</code> to confirm that the command is available. A terminal is a place to issue commands to your operating system; it is separate from the Go source file you will write.</p>\n<p>Create a folder named <code>go-practice</code>, open a terminal in that folder, and run <code>go mod init example.com/go-practice</code>. This creates a <code>go.mod</code> file describing the module. A <strong>module</strong> groups packages and their dependency information. The example.com name is a local module identifier in this exercise; you do not need to register that website to run the program.</p>\n<h4>Save and run the complete program</h4><p>Create a plain-text file called <code>main.go</code> in that folder and copy the full example into it. Save the file, then run <code>go run .</code> from the same folder. The dot means the package in the current directory. Alternatively, <code>go run main.go</code> can run this single-file example.</p>\n<p>The academy does not run Go in the browser. Its editor examples and reference solutions are material to copy into your local project. If a command fails because go is not found, fix the installation or terminal environment first; changing a print statement cannot repair a missing toolchain.</p>\n<h4>Read the package and import declarations</h4><p><code>package main</code> declares that this file belongs to a package named main. For an executable Go program, this package contains the entry-point function that begins execution. A <strong>package</strong> is a way to group related source code and the names it provides.</p>\n<p><code>import \"fmt\"</code> makes the standard formatting package available to this file. The quotes identify the package import path. The name fmt is then used to access operations from that package, such as Println. Imports are not arbitrary decoration: if you use fmt without importing it, the name is undefined; if you import a package and never use it, Go reports an error.</p>\n<h4>Find the entry point and follow the output calls</h4><p><code>func main() { ... }</code> defines a function named main. The word func introduces a function declaration. The empty parentheses mean this function takes no declared parameters, and the braces enclose its body. The Go runtime invokes main when this executable starts.</p>\n<p>Inside the body, <code>fmt.Println(\"Hello from Go!\")</code> calls the exported Println function from fmt. The dot selects the package member; the capital P is significant. A quoted string supplies the message, and Println ends the output with a newline. The next call produces the second line. At this stage, keep the complete wrapper around your printing instructions so you have a valid executable.</p>\n<h4>Format, inspect, and distinguish failures</h4><p>Run <code>go fmt ./...</code> from the module folder to apply standard Go formatting to its packages. Formatting makes indentation consistent; it does not prove that the program meets its requirements. Compare the actual output with the expected output and change one thing at a time.</p>\n<p>Go generally handles statement-ending semicolons for you through its lexical rules, so these ordinary lines do not need visible semicolons. Keep an opening function brace on the same line as the declaration, as shown. If you move it carelessly to the next line, the compiler may reject the structure. Read the first compiler error before chasing later ones that may follow from it.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello from Go!\")\n    fmt.Println(\"Ready to build reliable tools\")\n}",
      "exercises": [
        {
          "title": "Guided: a personal greeting",
          "instruction": "Copy the complete program into main.go and change its output to identify your name and city.",
          "hint": "Keep package main, the fmt import, and the main function. Change the string argument.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"I am Ada from Lagos\")\n}",
          "expectedOutput": "I am Ada from Lagos",
          "solutionExplanation": "Only the message changes. The surrounding declarations are still required to give Go an executable entry point and make fmt.Println available. Your own name and city are valid alternatives.",
          "successCriteria": [
            "go run . succeeds from the module folder.",
            "Your greeting appears once.",
            "You can identify the package, import, and function in the source."
          ],
          "level": "easy"
        },
        {
          "title": "Repair: restore the missing import",
          "instruction": "A file begins with package main and calls fmt.Println(\"Ready\") in main, but has no import declaration. Supply a complete working program.",
          "hint": "Declare the fmt import between the package line and the function.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Ready\")\n}",
          "expectedOutput": "Ready",
          "solutionExplanation": "The repair connects the fmt name used in the function body to the standard package that provides Println. Merely changing the printed message would not resolve an undefined package name.",
          "successCriteria": [
            "The compiler no longer reports undefined: fmt.",
            "The output is Ready."
          ],
          "level": "easy"
        },
        {
          "title": "Independent: a simple event notice",
          "instruction": "Write a complete Go program that displays an event name on one line and its activity on another. Then format and run it locally.",
          "hint": "Use two Println calls inside one main function.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Community Coding Day\")\n    fmt.Println(\"Today: write a small program\")\n}",
          "expectedOutput": "Community Coding Day\nToday: write a small program",
          "solutionExplanation": "Both calls belong inside the same entry-point function and use the same imported package. Their order determines the order of the notice. go fmt changes source formatting, not the messages.",
          "successCriteria": [
            "The program is complete and compiles.",
            "The event name appears before its activity.",
            "Formatting the source leaves the intended output unchanged."
          ],
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "What is the entry point of this executable Go program?",
          "options": [
            "The first function listed in any package",
            "main() in package main",
            "The import declaration alone",
            "Println() in package fmt"
          ],
          "correct": 1,
          "explanation": "The executable main package provides the main function that begins the program’s own execution."
        },
        {
          "q": "Why does this file import fmt?",
          "options": [
            "To apply standard indentation to the source file",
            "To declare which function is the entry point",
            "To make formatting functions such as Println available in this file",
            "To download the Go compiler every time the program runs"
          ],
          "correct": 2,
          "explanation": "The import makes the standard fmt package available to this file. Its Println function writes output. Source formatting is a separate go fmt command, and func main declares the entry point."
        },
        {
          "q": "What does go run . do in this module folder?",
          "options": [
            "Build and run the current package",
            "Build an executable without running it",
            "Reformat the source files without running them",
            "Create go.mod without running the program"
          ],
          "correct": 0,
          "explanation": "go run . builds and runs the current package. go build builds without immediately running, go fmt formats source, and go mod init creates a module manifest."
        },
        {
          "q": "The terminal cannot find go. What should you inspect first?",
          "options": [
            "Add an fmt import before retrying the same unavailable command",
            "Rename main.go before checking the tool installation",
            "Move the function’s opening brace before checking the terminal",
            "Check the Go installation and terminal search path"
          ],
          "correct": 3,
          "explanation": "A command-not-found message means the terminal cannot start Go. The source has not been compiled yet; check installation and the terminal search path before editing the program."
        }
      ],
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "No previous Go knowledge is required.",
          "Install Go, confirm go version, and prepare a module folder containing main.go. This track uses local execution."
        ],
        "outcomes": [
          "Explain the jobs of package main, import \"fmt\", and func main().",
          "Run the complete example with go run . from its module folder.",
          "Distinguish a missing toolchain, a compiler error, and an incorrect displayed message."
        ],
        "expectedOutput": "Hello from Go!\nReady to build reliable tools",
        "walkthrough": [
          {
            "code": "package main",
            "explanation": "Assigns the file to the executable package named main. It appears before the import and function declarations."
          },
          {
            "code": "import \"fmt\"",
            "explanation": "Brings the standard formatting package into this file’s scope so fmt.Println can be used."
          },
          {
            "code": "func main() {",
            "explanation": "Declares the entry-point function and opens its body. The opening brace belongs on this line."
          },
          {
            "code": "fmt.Println(\"Hello from Go!\")",
            "explanation": "Calls fmt’s Println with one string argument, producing the first output line."
          },
          {
            "code": "fmt.Println(\"Ready to build reliable tools\")",
            "explanation": "Produces the second output line after the first call completes."
          },
          {
            "code": "}",
            "explanation": "Closes the main function body. Reaching the end of main ends this simple program."
          }
        ],
        "variations": [
          {
            "title": "Print a computed result with a label",
            "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Items:\", 2 + 3)\n}",
            "expectedOutput": "Items: 5",
            "explanation": "The package, import, and main wrapper stay the same. Inside the body, Go evaluates 2 + 3 as an integer expression and passes the result with the string label to Println. Println places a space between these arguments and ends the line."
          }
        ],
        "mistakes": [
          {
            "symptom": "The terminal says go is not found",
            "cause": "The Go command is not installed or is not available on this terminal’s search path.",
            "fix": "Follow the official installation steps, reopen the terminal if necessary, and check go version before editing the program."
          },
          {
            "symptom": "undefined: fmt",
            "cause": "The source uses fmt.Println without importing fmt.",
            "fix": "Restore import \"fmt\" after the package declaration."
          },
          {
            "symptom": "An import is reported as unused",
            "cause": "The file imports fmt but no executable code refers to it.",
            "fix": "Use the imported package in the intended output instruction, or remove an import you genuinely do not need."
          },
          {
            "symptom": "The compiler objects near the function brace",
            "cause": "The function structure is incomplete or the opening brace was put on a separate line.",
            "fix": "Restore func main() { on one line and make sure the final closing brace is present."
          }
        ],
        "summary": [
          "The go tool can build and run a program; installation problems occur before your source can execute.",
          "An executable main package supplies a main function; imported fmt supplies Println.",
          "Keep the complete program structure and verify the output. Next, study modules and project layout more closely."
        ],
        "references": [
          {
            "title": "Go: download and install",
            "url": "https://go.dev/doc/install"
          },
          {
            "title": "Go tutorial: get started",
            "url": "https://go.dev/doc/tutorial/getting-started"
          },
          {
            "title": "Go standard library: fmt.Println",
            "url": "https://pkg.go.dev/fmt#Println"
          }
        ]
      }
    },
    {
      "id": "go-02",
      "title": "1.2 go mod & Project Layout",
      "module": "Getting Started",
      "objective": "Create a Go module, distinguish a module from a package, and run, format, and build its entry point.",
      "why": "A predictable project layout makes tools find your code and prevents confusing file-mode experiments with a reproducible application.",
      "explanation": "<h4>Give a project a stable identity</h4><p>A module is a collection of Go packages released and versioned together. Its root directory contains go.mod. A package is the group of Go source files in one directory that compile together. A small command often starts with one module and one package, so the terms can appear interchangeable; they describe different boundaries. The module path is the prefix used when another package imports your code. The package declaration inside a source file names the package, not the project folder. An executable uses package main even if its module is named example.com/receipt.</p>\n<h4>Create the directory and manifest</h4><p>In a terminal run <code>mkdir receipt</code>, then <code>cd receipt</code>, then <code>go mod init example.com/receipt</code>. Use a new directory so you do not initialise a second module inside an unrelated project. This command creates go.mod with a module line and a go directive recording the language/toolchain minimum. Inspect the file; the exact version depends on your installed Go. The example.com identifier is suitable for local learning and does not require a website or network access. Do not paste terminal commands into main.go: the shell and the Go compiler understand different languages.</p>\n<h4>Place source at the package boundary</h4><p>Save the worked example as receipt/main.go alongside go.mod. The complete starting layout is receipt/go.mod and receipt/main.go. The fmt package supplies Println; import makes its exported name available to this source file. func main is the entry point called when the compiled command runs. Braces surround the statements, which execute in order. Keep just one main function in this package. A second file in the same directory can add helpers under package main, but a second func main declaration conflicts. A subdirectory creates a different package rather than automatically joining this one.</p>\n<h4>Use commands for distinct jobs</h4><p>Run <code>go fmt ./...</code> to format all packages below the current module, <code>go run .</code> to build and execute the current package, and <code>go build -o receipt-app .</code> to create an executable. On macOS/Linux run <code>./receipt-app</code>; on Windows build receipt-app.exe and run it with the shell’s executable syntax. The dot means the package in the working directory. In contrast, <code>go run main.go</code> selects the listed file and may omit helper files. Build creates a binary without printing the greeting until that binary runs.</p>\n<h4>Grow the layout only when needed</h4><p>The variation adds a helper function in the same complete file so you can run it directly. To practise a multi-file package, move that function to totals.go with its own package main line and keep main.go’s import and entry point. Then use go run .; no import is needed between files in the same package. Later a reusable package could live under a subdirectory and be imported with the module path plus that directory. No external dependencies are required here, so go mod tidy should not need to add dependencies or a go.sum file.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    fmt.Println(\"Receipt project ready\")\n}",
      "exercises": [
        {
          "title": "Guided: build a status command",
          "instruction": "Create example.com/status, save a complete main.go, and build a command that prints Status: ready.",
          "hint": "Initialise the module in the folder containing main.go; build with go build -o status .",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    fmt.Println(\"Status: ready\")\n}",
          "expectedOutput": "Status: ready",
          "solutionExplanation": "package main provides the command entry point; the built binary prints only when executed.",
          "successCriteria": "go.mod has the chosen module path; go run . and the built binary both print the same line.",
          "level": "easy"
        },
        {
          "title": "Repair: include a helper file",
          "instruction": "A project’s main calls message but go run main.go cannot find the helper in message.go. Explain the fix and reproduce the complete working program.",
          "hint": "Use package mode. The reference keeps both declarations together for copying.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc message() string { return \"All files included\" }\n\nfunc main() {\n    fmt.Println(message())\n}",
          "expectedOutput": "All files included",
          "solutionExplanation": "The helper returns text. With a separate message.go containing the same package declaration, go run . compiles both files.",
          "successCriteria": "Explain why changing an import is unnecessary; run the package with the helper in a separate file.",
          "level": "easy"
        },
        {
          "title": "Independent: a two-line release command",
          "instruction": "Create a module whose command prints Release: local and Build: complete, format it, and build a named executable.",
          "hint": "Keep output in main and record the three commands used.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    fmt.Println(\"Release: local\")\n    fmt.Println(\"Build: complete\")\n}",
          "expectedOutput": "Release: local\nBuild: complete",
          "solutionExplanation": "Two statements run in order. Use go fmt ./..., go build -o release ., then ./release on Unix.",
          "successCriteria": "Both lines match; source is formatted; running the binary works without go run.",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Which file marks the module root?",
          "options": [
            "main.go",
            "go.mod",
            "go.sum"
          ],
          "correct": 1,
          "explanation": "go.mod records module identity and version requirements; main.go is an ordinary source filename."
        },
        {
          "q": "Why might go run main.go fail while go run . succeeds?",
          "options": [
            "The dot enables the network",
            "The dot includes other files in the package",
            "The dot disables checks"
          ],
          "correct": 1,
          "explanation": "Package mode includes helper source files that a one-file invocation omits."
        },
        {
          "q": "What does go build do here?",
          "options": [
            "Prints the greeting immediately",
            "Creates a compiled executable",
            "Creates the module path on the Internet"
          ],
          "correct": 1,
          "explanation": "You execute the resulting binary separately."
        },
        {
          "q": "Can totals.go use package main in the same directory?",
          "options": [
            "Yes, it contributes to the same package",
            "No, filenames must equal package names",
            "Only if it has another func main"
          ],
          "correct": 0,
          "explanation": "Files share a package; duplicate entry points would be an error."
        }
      ],
      "pitfalls": "go.mod file not found: The terminal is outside the module or initialisation never ran. Change into receipt and inspect go.mod; initialise only if this is truly a new project. main redeclared in this block: Two copied examples define func main in the same package. Keep one entry point, replacing the previous example or using separate module directories. A helper is undefined in file mode: go run main.go excludes the file defining the helper. Run go run . from the module directory to include the package’s source files.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Install the official Go toolchain and confirm go version in a terminal.",
          "Run the complete Hello World program and recognise package main, imports, and func main."
        ],
        "outcomes": [
          "Create and inspect a go.mod file.",
          "Explain which files go run . builds and where package boundaries occur.",
          "Format source and build an executable from a module directory."
        ],
        "expectedOutput": "Receipt project ready",
        "walkthrough": [
          {
            "code": "go mod init example.com/receipt",
            "explanation": "Creates project metadata once at the root; it is a terminal command, not a Go statement."
          },
          {
            "code": "package main / import \"fmt\"",
            "explanation": "Declares an executable package and the standard printing dependency."
          },
          {
            "code": "func main / fmt.Println",
            "explanation": "Starts execution and prints one line. go run . compiles the package before invoking it."
          }
        ],
        "variations": [
          {
            "title": "Call a helper in the package",
            "code": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc total() int {\n    return 4 + 6\n}\n\nfunc main() {\n    fmt.Println(total())\n}",
            "expectedOutput": "10",
            "explanation": "total returns an integer; main prints it. Moving total to totals.go in the same directory still works with go run . because package compilation includes both files."
          }
        ],
        "mistakes": [
          {
            "symptom": "go.mod file not found",
            "cause": "The terminal is outside the module or initialisation never ran.",
            "fix": "Change into receipt and inspect go.mod; initialise only if this is truly a new project."
          },
          {
            "symptom": "main redeclared in this block",
            "cause": "Two copied examples define func main in the same package.",
            "fix": "Keep one entry point, replacing the previous example or using separate module directories."
          },
          {
            "symptom": "A helper is undefined in file mode",
            "cause": "go run main.go excludes the file defining the helper.",
            "fix": "Run go run . from the module directory to include the package’s source files."
          }
        ],
        "summary": "A module supplies identity and dependency metadata; a package is a directory of related source. Initialise once, format source, run the package, and build a binary. Variables next make that command compute useful values.",
        "references": [
          {
            "title": "Go: create a module",
            "url": "https://go.dev/doc/tutorial/create-module"
          },
          {
            "title": "Go command documentation",
            "url": "https://go.dev/cmd/go/"
          }
        ]
      }
    },
    {
      "id": "go-03",
      "title": "1.3 Variables & Types",
      "module": "Basics",
      "objective": "Declare and update typed variables, predict zero values, and choose explicit or inferred declarations.",
      "why": "Names let a program retain changing information, while types constrain which operations make sense for that information.",
      "explanation": "<h4>Model a changing value</h4><p>A variable is a named storage location with a type. A checkout program might track a customer name, a quantity, and whether payment succeeded. These are different kinds of information: string represents text, int represents whole numbers, float64 represents approximate fractional values, and bool has only true and false. A type determines permitted operations. Adding two integers is arithmetic; adding two strings joins text. Go does not silently turn an integer into text just because another value is a string. Treat compiler feedback as evidence that a representation decision is missing.</p>\n<h4>Declare with var or infer locally</h4><p>Write <code>var quantity int = 2</code> to state a name, type, and initial value. Inside a function, <code>customer := \"Ada\"</code> declares a new variable and infers string from the right side. The colon is part of the short declaration operator. This form requires at least one new non-blank variable in the current block and cannot be used at package scope. Inference does not make the variable dynamically typed: after quantity becomes an int, later assignments must remain compatible with int. Use explicit types when they clarify an interface or a zero-valued declaration.</p>\n<h4>Separate initialisation from later assignment</h4><p>After a name exists, use <code>quantity = quantity + 1</code> to replace its stored value. The right side is evaluated using the old value before the result is assigned. <code>quantity += 1</code> abbreviates that same update, and <code>quantity++</code> increments as a statement. It is not an expression you can place inside Println. Trying quantity := 3 in the same block without a new name produces a declaration error rather than a second assignment. This distinction is especially useful when reading code that deliberately changes a running count.</p>\n<h4>Know what exists before an explicit value</h4><p>A declaration such as <code>var paid bool</code> creates a usable variable with the zero value for its type. Numeric zero values are 0, the bool zero value is false, and the string zero value is the empty string. These defaults are defined behavior rather than uninitialised memory. Zero is not always meaningful business data: a zero age may mean missing input, while zero stock may mean genuinely empty. If those states need different treatment, later lessons introduce data structures that make the distinction explicit. In this example paid starts false and is printed to verify that assumption.</p>\n<h4>Read values without confusing formatting and types</h4><p>fmt.Println accepts several arguments, prints their values separated by spaces, and adds a newline. The labels in our output are strings; they do not change the type of the following variable. fmt.Printf can show <code>%T</code> for a value’s type when investigating inference, but type inspection is a debugging tool rather than the program’s purpose. Go rejects unused local variables, so every variable in the example contributes to visible behavior. Prefer descriptive names like quantity over letters that hide meaning, and keep the scope as small as the calculation allows.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    customer := \"Ada\"\n    var quantity int = 2\n    var paid bool\n    quantity = quantity + 1\n    fmt.Println(\"Customer:\", customer)\n    fmt.Println(\"Quantity:\", quantity)\n    fmt.Println(\"Paid:\", paid)\n}",
      "exercises": [
        {
          "title": "Guided: update stock",
          "instruction": "Declare stock as 8, subtract 3, and print Stock: 5.",
          "hint": "Use := once, then = or -=.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    stock := 8\n    stock -= 3\n    fmt.Println(\"Stock:\", stock)\n}",
          "expectedOutput": "Stock: 5",
          "solutionExplanation": "The update preserves the int type and records the remaining quantity.",
          "successCriteria": "Uses a variable and an update; output is Stock: 5.",
          "level": "easy"
        },
        {
          "title": "Repair: a repeated declaration",
          "instruction": "Repair `score := 10; score := 12` in a single block and print score.",
          "hint": "The second statement changes an existing name.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    score := 10\n    score = 12\n    fmt.Println(score)\n}",
          "expectedOutput": "12",
          "solutionExplanation": "= assigns without requesting a new local name.",
          "successCriteria": "Program compiles; explain why := was invalid the second time.",
          "level": "easy"
        },
        {
          "title": "Independent: shipment status",
          "instruction": "Track item \"book\", count 2, and initially false shipped. Set shipped true and count to 3; print all three.",
          "hint": "Give each independent fact its own typed variable.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    item := \"book\"\n    count := 2\n    var shipped bool\n    count++\n    shipped = true\n    fmt.Println(item, count, shipped)\n}",
          "expectedOutput": "book 3 true",
          "solutionExplanation": "The string remains unchanged while the int and bool are updated independently.",
          "successCriteria": "Demonstrates string, int, and bool; no unused locals; final state matches.",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "What is var ready bool before assignment?",
          "options": [
            "true",
            "false",
            "undefined"
          ],
          "correct": 1,
          "explanation": "bool has a defined zero value of false."
        },
        {
          "q": "What does n := 2 followed by n = 3 do?",
          "options": [
            "Changes n to a string",
            "Updates an int",
            "Creates two names"
          ],
          "correct": 1,
          "explanation": "Assignment changes the value and preserves the inferred type."
        },
        {
          "q": "Where is := permitted?",
          "options": [
            "Inside functions",
            "Only at package scope",
            "Only in imports"
          ],
          "correct": 0,
          "explanation": "Short variable declarations are for local function scopes."
        },
        {
          "q": "Why does n := 2; n = \"two\" fail?",
          "options": [
            "Names cannot be updated",
            "The inferred int type rejects a string",
            "Strings require single quotes"
          ],
          "correct": 1,
          "explanation": "Inference still gives n a fixed type."
        }
      ],
      "pitfalls": "no new variables on left side of :=: A short declaration attempts to redeclare only existing names in the same block. Use = for an update. Cannot assign text to an int: Inference chose int from the original integer and the later value is a string. Keep the value numeric or declare a separate text variable; use deliberate formatting if displaying it. declared and not used: A local variable is never read. Use the value in the calculation or output, or remove the unnecessary declaration.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Run a Go module containing package main and fmt.Println.",
          "Understand that statements inside main execute in order."
        ],
        "outcomes": [
          "Use var and := in their allowed contexts.",
          "Predict zero values and distinguish declaration from assignment.",
          "Explain why unlike numeric and text types need deliberate conversion."
        ],
        "expectedOutput": "Customer: Ada\nQuantity: 3\nPaid: false",
        "walkthrough": [
          {
            "code": "customer := \"Ada\"",
            "explanation": "Creates an inferred string local variable."
          },
          {
            "code": "var quantity int = 2; var paid bool",
            "explanation": "Initialises an int explicitly and a bool with its zero value false."
          },
          {
            "code": "quantity = quantity + 1",
            "explanation": "Reads 2, computes 3, and stores it back without changing the type."
          },
          {
            "code": "fmt.Println calls",
            "explanation": "Labels and values are separate arguments; Println adds the spaces."
          }
        ],
        "variations": [
          {
            "title": "Inspect three zero values",
            "code": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    var count int\n    var name string\n    var active bool\n    fmt.Printf(\"%d %q %t\\n\", count, name, active)\n}",
            "expectedOutput": "0 \"\" false",
            "explanation": "%q quotes the empty string so its presence is visible; %d formats an integer and %t a boolean."
          }
        ],
        "mistakes": [
          {
            "symptom": "no new variables on left side of :=",
            "cause": "A short declaration attempts to redeclare only existing names in the same block.",
            "fix": "Use = for an update."
          },
          {
            "symptom": "Cannot assign text to an int",
            "cause": "Inference chose int from the original integer and the later value is a string.",
            "fix": "Keep the value numeric or declare a separate text variable; use deliberate formatting if displaying it."
          },
          {
            "symptom": "declared and not used",
            "cause": "A local variable is never read.",
            "fix": "Use the value in the calculation or output, or remove the unnecessary declaration."
          }
        ],
        "summary": "Use declarations to create typed names, assignment to update them, and zero values deliberately. Next, constants and conversions clarify values that should stay fixed and operations across numeric types.",
        "references": [
          {
            "title": "Go tour: variables",
            "url": "https://go.dev/tour/basics/8"
          },
          {
            "title": "Go specification: declarations",
            "url": "https://go.dev/ref/spec#Declarations_and_scope"
          }
        ]
      }
    },
    {
      "id": "go-04",
      "title": "1.4 Constants & Conversion",
      "module": "Basics",
      "objective": "Use constants for fixed values and explicit conversions for numeric calculations without confusing conversion with parsing.",
      "why": "Units, rounding, and representation choices determine whether arithmetic produces the result a real application needs.",
      "explanation": "<h4>Name a fixed rule with const</h4><p>A constant is a value fixed at compile time. <code>const minutesPerHour = 60</code> gives a unit conversion a name and prevents later assignment. Constants may represent numbers, strings, or booleans, but not values computed by arbitrary runtime function calls. An untyped numeric constant can adapt to a compatible type when used; this differs from a variable that already has a concrete type. Giving a literal a name is most helpful when that name conveys a rule or unit. A constant does not turn an approximate decimal fraction into an exact financial data model.</p>\n<h4>Convert before the operation that needs it</h4><p>Go generally requires compatible operand types instead of choosing an implicit numeric conversion for you. <code>float64(total)</code> creates a floating-point value from total; it does not alter total’s declared type. With integer variables, <code>5 / 2</code> produces integer 2. Converting that result afterward gives 2.0, not the lost half. To retain the fractional result, convert an operand before division: <code>float64(total) / float64(count)</code>. Parentheses in this expression call conversions rather than ordinary functions. Decide which representation the operation requires before doing the calculation.</p>\n<h4>Understand truncation and representable ranges</h4><p>Converting a floating-point value to int discards its fractional part toward zero; 7.9 becomes 7 and -7.9 becomes -7. That is truncation, not rounding to the nearest integer. Conversions do not automatically validate the application’s accepted range. A smaller integer type cannot represent every larger value, and conversions can produce surprising results outside the intended domain. Use explicit checks when narrowing data. For average durations in this lesson, float64 is suitable. For exact money, later projects use integer cents to avoid depending on binary floating-point representation of decimal amounts.</p>\n<h4>Separate numeric conversion from text parsing</h4><p>Text such as \"18\" is a string containing characters, not a number waiting to participate in arithmetic. <code>strconv.Atoi</code> parses a decimal string and returns two results: an int and an error. An error is a value describing failure; nil means no error occurred. The variation checks <code>err != nil</code> before using the parsed number, prints a controlled message if parsing fails, and returns from main. This small error branch is introduced here because untrusted text requires it; the dedicated error lesson will explore reusable error patterns. Converting int to string directly does not format its decimal digits.</p>\n<h4>Make displayed precision an explicit choice</h4><p>The main example computes hours from whole minutes using a constant and two conversions. <code>fmt.Printf(\"Hours: %.2f\\n\", hours)</code> formats a float with two digits after the decimal point; the backslash-n escape requests a newline. Formatting rounds the displayed representation, while the underlying float remains unchanged. <code>%d</code> displays the integer result of truncation. Check both computation and presentation: a nicely formatted wrong average is still wrong. Save the complete program as main.go and run it using go run . in the existing module; all imports are from the standard library.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    const minutesPerHour = 60\n    minutes := 95\n    hours := float64(minutes) / float64(minutesPerHour)\n    fmt.Printf(\"Hours: %.2f\\n\", hours)\n    fmt.Println(\"Whole hours:\", int(hours))\n}",
      "exercises": [
        {
          "title": "Guided: average scores",
          "instruction": "Compute the average of an integer total 17 over 4 items and print two decimal places.",
          "hint": "Convert total and count before dividing.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    total, count := 17, 4\n    average := float64(total) / float64(count)\n    fmt.Printf(\"%.2f\\n\", average)\n}",
          "expectedOutput": "4.25",
          "solutionExplanation": "Converting operands prevents integer truncation. Formatting sets the visible precision.",
          "successCriteria": "Uses numeric variables; output is 4.25 rather than 4.00.",
          "level": "easy"
        },
        {
          "title": "Repair: distinguish truncation from rounding",
          "instruction": "Predict int(-3.8), then write a complete program printing it and int(3.8) using float variables.",
          "hint": "Conversions of runtime float values truncate toward zero; a nonintegral constant cannot be converted directly to int.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    negative, positive := -3.8, 3.8\n    fmt.Println(int(negative), int(positive))\n}",
          "expectedOutput": "-3 3",
          "solutionExplanation": "Variables hold float64 values and convert at runtime; both fractions are discarded toward zero.",
          "successCriteria": "Prints -3 3; explains why this is not floor or nearest rounding.",
          "level": "easy"
        },
        {
          "title": "Independent: reject malformed input",
          "instruction": "Parse \"12x\" as an integer and print Invalid quantity rather than using the unsuccessful result.",
          "hint": "Check the second return value from strconv.Atoi.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc main() {\n    count, err := strconv.Atoi(\"12x\")\n    if err != nil {\n        fmt.Println(\"Invalid quantity\")\n        return\n    }\n    fmt.Println(count)\n}",
          "expectedOutput": "Invalid quantity",
          "solutionExplanation": "A nondecimal suffix causes parsing to fail. The early return stops the success path.",
          "successCriteria": "The invalid value is never used; changing input to 12 prints 12.",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "For integer a=5 and b=2, what is float64(a/b)?",
          "options": [
            "2.5",
            "2.0",
            "A compile error"
          ],
          "correct": 1,
          "explanation": "Integer division happens first, losing the fraction."
        },
        {
          "q": "What does converting a float variable containing -2.9 to int yield?",
          "options": [
            "-3",
            "-2",
            "3"
          ],
          "correct": 1,
          "explanation": "Truncation moves toward zero."
        },
        {
          "q": "Which turns decimal text into an int?",
          "options": [
            "int(\"12\")",
            "strconv.Atoi(\"12\")",
            "string(12)"
          ],
          "correct": 1,
          "explanation": "Atoi parses text and also returns an error that must be checked."
        },
        {
          "q": "Why use a constant for secondsPerMinute?",
          "options": [
            "It can change on each loop",
            "It documents a fixed unit relationship",
            "It automatically validates all durations"
          ],
          "correct": 1,
          "explanation": "A name communicates the rule and assignment is disallowed; validation remains separate."
        }
      ],
      "pitfalls": "An average is unexpectedly whole: Integer division happened before conversion. Convert an operand before division rather than converting the already-truncated quotient. Cannot assign to a constant: Code attempts to update a const. Use a variable for changing state; keep constants for fixed rules. Converting 65 to string produces A: string(number) interprets the integer as a Unicode code point. Use strconv.Itoa(number) for decimal text, or Println to display the numeric value.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Declare int, float64, and string variables.",
          "Distinguish := from assignment and read fmt.Println output."
        ],
        "outcomes": [
          "Declare an appropriately named constant.",
          "Predict integer division and truncating numeric conversions.",
          "Parse numeric text using strconv and check errors before using the value."
        ],
        "expectedOutput": "Hours: 1.58\nWhole hours: 1",
        "walkthrough": [
          {
            "code": "const minutesPerHour = 60",
            "explanation": "Names the fixed relationship between two units."
          },
          {
            "code": "float64(minutes) / float64(minutesPerHour)",
            "explanation": "Both operands are floating point before division, preserving a fractional hour."
          },
          {
            "code": "%.2f and int(hours)",
            "explanation": "The first controls display precision; the second truncates the numeric value to a whole hour."
          }
        ],
        "variations": [
          {
            "title": "Parse a quantity safely",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc main() {\n    quantity, err := strconv.Atoi(\"18\")\n    if err != nil {\n        fmt.Println(\"Invalid quantity\")\n        return\n    }\n    fmt.Println(quantity + 2)\n}",
            "expectedOutput": "20",
            "explanation": "Atoi turns decimal text into int. The failure branch avoids treating an invalid parse as a valid zero; changing the input to eighteen prints Invalid quantity."
          }
        ],
        "mistakes": [
          {
            "symptom": "An average is unexpectedly whole",
            "cause": "Integer division happened before conversion.",
            "fix": "Convert an operand before division rather than converting the already-truncated quotient."
          },
          {
            "symptom": "Cannot assign to a constant",
            "cause": "Code attempts to update a const.",
            "fix": "Use a variable for changing state; keep constants for fixed rules."
          },
          {
            "symptom": "Converting 65 to string produces A",
            "cause": "string(number) interprets the integer as a Unicode code point.",
            "fix": "Use strconv.Itoa(number) for decimal text, or Println to display the numeric value."
          }
        ],
        "summary": "Constants express fixed rules. Explicit conversion chooses an arithmetic representation, parsing interprets text, and formatting controls display. Branches next let programs choose what to do when values differ.",
        "references": [
          {
            "title": "Go tour: type conversions",
            "url": "https://go.dev/tour/basics/13"
          },
          {
            "title": "strconv package",
            "url": "https://go.dev/pkg/strconv/"
          }
        ]
      }
    },
    {
      "id": "go-05",
      "title": "1.5 Control Flow",
      "module": "Basics",
      "objective": "Choose branches and loops that classify values, repeat work, and terminate at the intended boundary.",
      "why": "A useful program follows rules that depend on data rather than always executing the same statements.",
      "explanation": "<h4>Turn a rule into a boolean decision</h4><p>An if statement executes its block when a boolean condition is true. Comparisons such as <code>score &gt;= 50</code> produce bool values. Use <code>==</code> to compare values and <code>=</code> to assign a value; those operators answer different questions. Go requires a boolean condition rather than treating a number as true or false. Braces are required, and else belongs on the same line as the preceding closing brace in standard formatting. When several conditions overlap, the order of an if/else if chain matters because the first matching branch wins.</p>\n<h4>Make boundaries visible</h4><p>A shipping rule might charge nothing at 50 units or above and 5 below that threshold. Write &gt;= 50 if exactly 50 qualifies; &gt; 50 expresses a different policy. Before implementing a branch, list the boundary, one value below, and one above. For a chain of ranges, decide where equality belongs so no value falls into an accidental gap. Logical operators &amp;&amp; and || combine conditions, while ! negates a boolean. Short-circuit evaluation means the right condition is only evaluated when necessary, which later helps guard operations that require a valid input.</p>\n<h4>Repeat with a finite for loop</h4><p>Go uses for for its basic looping forms. In <code>for n := 1; n &lt;= 5; n++</code>, the initialiser creates n once, the condition is checked before each iteration, and the post statement increments after the body. The body therefore sees 1 through 5. The variable n belongs to the loop scope. A condition-only loop such as <code>for remaining &gt; 0</code> is useful when the update is more naturally inside the body. A loop with no condition repeats forever unless a return or break exits it. Always identify what makes progress toward termination.</p>\n<h4>Accumulate and choose inside the loop</h4><p>The worked example checks each integer from 1 through 5 and adds only even values to total. Remainder <code>%</code> tells whether division leaves anything over; n%2 == 0 identifies an even integer. The accumulator starts outside the loop so its value survives each iteration. Placing total := 0 inside the body would reset it repeatedly. continue skips the rest of the current iteration, whereas break exits the nearest loop; neither should replace a clearly stated condition without a reason. For collections introduced later, range supplies elements without manually controlling an index.</p>\n<h4>Use switch for a discrete choice</h4><p>A switch selects among case labels. Unlike some languages, Go ends a selected case automatically; an ordinary case does not run the next case’s body. default handles values not named by a case. The variation uses a switch on a string command because a small set of exact commands reads more clearly than several equality branches. For intervals or compound conditions, an if chain may be simpler. Predict a program by tracing state one iteration at a time, then confirm by running it; this finds logic errors the compiler cannot identify.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    total := 0\n    for n := 1; n <= 5; n++ {\n        if n%2 == 0 {\n            total += n\n        }\n    }\n    fmt.Println(\"Even total:\", total)\n    if total >= 6 {\n        fmt.Println(\"Target reached\")\n    } else {\n        fmt.Println(\"Keep going\")\n    }\n}",
      "exercises": [
        {
          "title": "Guided: countdown",
          "instruction": "Print 3, 2, 1, then Go! using a loop.",
          "hint": "Start at 3 and decrement while n is positive.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    for n := 3; n > 0; n-- {\n        fmt.Println(n)\n    }\n    fmt.Println(\"Go!\")\n}",
          "expectedOutput": "3\n2\n1\nGo!",
          "solutionExplanation": "The post statement reduces n; when it becomes zero the condition fails.",
          "successCriteria": "Exactly three numeric lines appear, in descending order, followed by Go!.",
          "level": "easy"
        },
        {
          "title": "Repair: inclusive threshold",
          "instruction": "A free-shipping rule says orders of 50 or more qualify. Repair a condition that excludes exactly 50.",
          "hint": "Trace the equality case explicitly.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    order := 50\n    if order >= 50 {\n        fmt.Println(\"Free shipping\")\n    } else {\n        fmt.Println(\"Shipping: 5\")\n    }\n}",
          "expectedOutput": "Free shipping",
          "solutionExplanation": ">= includes equality, matching the written rule.",
          "successCriteria": "50 qualifies; explain predictions for 49 and 51.",
          "level": "easy"
        },
        {
          "title": "Independent: classify a range",
          "instruction": "Visit 1 through 4 and print each value followed by odd or even.",
          "hint": "Use a finite loop and remainder inside an if/else.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    for n := 1; n <= 4; n++ {\n        if n%2 == 0 {\n            fmt.Println(n, \"even\")\n        } else {\n            fmt.Println(n, \"odd\")\n        }\n    }\n}",
          "expectedOutput": "1 odd\n2 even\n3 odd\n4 even",
          "solutionExplanation": "A single branch runs for each value, so every input gets exactly one label.",
          "successCriteria": "No hardcoded four-output sequence; both labels and both endpoints are correct.",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "How many iterations does n:=0; n<3; n++ perform?",
          "options": [
            "2",
            "3",
            "4"
          ],
          "correct": 1,
          "explanation": "The body sees 0, 1, and 2."
        },
        {
          "q": "When total is 6, does total >= 6 match?",
          "options": [
            "Yes",
            "No, only greater values match",
            "Only in a loop"
          ],
          "correct": 0,
          "explanation": ">= explicitly includes equality."
        },
        {
          "q": "Does a normal Go switch case run the following case too?",
          "options": [
            "Always",
            "No",
            "Only for strings"
          ],
          "correct": 1,
          "explanation": "Go ends the selected case automatically unless explicitly directed otherwise."
        },
        {
          "q": "Where should a sum start at zero when accumulating a loop?",
          "options": [
            "Inside every iteration",
            "Before the loop",
            "After printing"
          ],
          "correct": 1,
          "explanation": "The accumulator must preserve its value between iterations."
        }
      ],
      "pitfalls": "A loop visits one extra item: The condition uses <= when the upper bound was meant to be excluded. Write the first and last intended values and choose < or <= accordingly. An accumulator never grows: Its declaration is inside the repeating block. Initialise before the loop and update inside it. A loop never ends: No state change makes the condition false. Update the controlling state on every relevant path or supply an explicit terminating break.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Declare and update numeric and boolean variables.",
          "Use arithmetic and read comparisons such as == and <."
        ],
        "outcomes": [
          "Write an if/else chain with explicit boundaries.",
          "Use for and range for finite iteration.",
          "Predict switch selection and avoid an off-by-one loop."
        ],
        "expectedOutput": "Even total: 6\nTarget reached",
        "walkthrough": [
          {
            "code": "total := 0",
            "explanation": "Creates persistent accumulation before the loop."
          },
          {
            "code": "for n := 1; n <= 5; n++",
            "explanation": "Visits exactly 1, 2, 3, 4, and 5."
          },
          {
            "code": "if n%2 == 0 / total += n",
            "explanation": "Adds 2 and 4, leaving total at 6."
          },
          {
            "code": "if total >= 6",
            "explanation": "Equality satisfies the boundary, so the first message is selected."
          }
        ],
        "variations": [
          {
            "title": "Choose one command with switch",
            "code": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc main() {\n    command := \"list\"\n    switch command {\n    case \"add\":\n        fmt.Println(\"Add an item\")\n    case \"list\":\n        fmt.Println(\"Show items\")\n    default:\n        fmt.Println(\"Unknown command\")\n    }\n}",
            "expectedOutput": "Show items",
            "explanation": "Only list matches; Go does not fall through into default. Change command to remove to exercise the fallback."
          }
        ],
        "mistakes": [
          {
            "symptom": "A loop visits one extra item",
            "cause": "The condition uses <= when the upper bound was meant to be excluded.",
            "fix": "Write the first and last intended values and choose < or <= accordingly."
          },
          {
            "symptom": "An accumulator never grows",
            "cause": "Its declaration is inside the repeating block.",
            "fix": "Initialise before the loop and update inside it."
          },
          {
            "symptom": "A loop never ends",
            "cause": "No state change makes the condition false.",
            "fix": "Update the controlling state on every relevant path or supply an explicit terminating break."
          }
        ],
        "summary": "Conditions encode boundaries, loops repeat while making progress, and switch selects discrete cases. Functions next give these calculations names and reusable interfaces.",
        "references": [
          {
            "title": "Go tour: flow control",
            "url": "https://go.dev/tour/flowcontrol/1"
          },
          {
            "title": "Go specification: statements",
            "url": "https://go.dev/ref/spec#Statements"
          }
        ]
      }
    },
    {
      "id": "go-06",
      "title": "2.1 Functions & Multiple Returns",
      "module": "Functions",
      "objective": "Define typed functions, return several related values, and make success or failure visible to callers.",
      "why": "Functions isolate a calculation so multiple callers can use it without duplicating rules or guessing what its output means.",
      "explanation": "<h4>Name a computation and its boundary</h4><p>A function groups statements behind a name and a typed interface. <code>func rectangleArea(width int, height int) int</code> says callers supply two ints and receive one int. Parameter names describe the inputs inside the function; a caller can use differently named variables or literal values. The body belongs between braces. return sends a value back to the caller and ends that call. Printing and returning are separate choices: returning lets another function decide how to display, compare, or combine the result. Keep arithmetic helpers free of unnecessary printing to make them reusable.</p>\n<h4>Read the signature left to right</h4><p>After func come the function name, parentheses containing parameters, then the result type. Consecutive parameters of the same type may be shortened to <code>width, height int</code>. Multiple return types go inside another pair of parentheses, such as <code>(int, bool)</code>. This syntax declares two results, not one collection. The function’s return statement must supply compatible values in the declared order. At the call site, <code>value, ok := safeDivide(12, 3)</code> creates one variable for each result. The names can differ from any names used inside the helper.</p>\n<h4>Keep caller state and local state distinct</h4><p>Arguments are passed by value in Go: the function receives values assigned to its local parameters. For simple integers, changing a parameter does not change the caller’s integer variable. Later, slices and pointers introduce values that can refer to shared storage, so pass-by-value does not always imply deep copying. A local name declared inside the function is unavailable outside its scope. Use a return value when information must cross the boundary, rather than expecting the caller to access the helper’s local variables or relying on hidden package-level state.</p>\n<h4>Return a success indicator with a value</h4><p>The worked example divides whole numbers. A denominator of zero cannot produce a valid quotient, so safeDivide returns 0 and false for that input. For valid input it returns the integer quotient and true. The bool explains how the caller should interpret the int; zero alone would be ambiguous because a valid quotient may also be zero. This is a small form of explicit failure handling. Later lessons replace a bool with error when callers need a reason. Check the indicator before using the result as if it were successful.</p>\n<h4>Trace calls independently and test boundaries</h4><p>Every function call gets its own parameters and local variables. Calling safeDivide twice does not carry the previous quotient into the next invocation. The main example captures and prints both results so the contract is visible. The variation returns quotient and remainder for a known nonzero divisor, illustrating that multiple returns can also represent two successful outputs. Its prerequisite is that the divisor is nonzero; a production helper must document or validate such assumptions. Verify ordinary input and a boundary such as zero, because a compiler checks return types but cannot choose the correct application contract for you.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc safeDivide(a, b int) (int, bool) {\n    if b == 0 {\n        return 0, false\n    }\n    return a / b, true\n}\n\nfunc main() {\n    value, ok := safeDivide(12, 3)\n    fmt.Println(value, ok)\n    value, ok = safeDivide(12, 0)\n    fmt.Println(value, ok)\n}",
      "exercises": [
        {
          "title": "Guided: area helper",
          "instruction": "Write rectangleArea taking two ints and returning their product; print the area of 4 by 6.",
          "hint": "The result type follows the closing parameter parenthesis.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc rectangleArea(width, height int) int {\n    return width * height\n}\n\nfunc main() {\n    fmt.Println(rectangleArea(4, 6))\n}",
          "expectedOutput": "24",
          "solutionExplanation": "The helper returns a reusable integer; main prints the returned result.",
          "successCriteria": "A function accepts both dimensions; the call produces 24.",
          "level": "easy"
        },
        {
          "title": "Repair: capture two results",
          "instruction": "A caller tries `answer := safeDivide(7, 0)`. Repair it and display Cannot divide on failure.",
          "hint": "Capture the boolean and branch before printing the quotient.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc safeDivide(a, b int) (int, bool) {\n    if b == 0 { return 0, false }\n    return a / b, true\n}\n\nfunc main() {\n    answer, ok := safeDivide(7, 0)\n    if !ok {\n        fmt.Println(\"Cannot divide\")\n        return\n    }\n    fmt.Println(answer)\n}",
          "expectedOutput": "Cannot divide",
          "solutionExplanation": "The call has two targets and failure stops the success path.",
          "successCriteria": "No panic; a failed result is not displayed as a valid quotient.",
          "level": "easy"
        },
        {
          "title": "Independent: min and max",
          "instruction": "Define bounds for two ints returning smaller then larger; call it with 9 and 2 and with two equal values 4.",
          "hint": "Choose return order with an if; equality can use either branch.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc bounds(a, b int) (int, int) {\n    if a < b { return a, b }\n    return b, a\n}\n\nfunc main() {\n    low, high := bounds(9, 2)\n    fmt.Println(low, high)\n    low, high = bounds(4, 4)\n    fmt.Println(low, high)\n}",
          "expectedOutput": "2 9\n4 4",
          "solutionExplanation": "Both branches maintain the smaller-first contract, including equality.",
          "successCriteria": "Both results are captured; reversed and equal inputs work.",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "What does (int, bool) after parameters mean?",
          "options": [
            "An int parameter and bool parameter",
            "Two returned values",
            "A string format"
          ],
          "correct": 1,
          "explanation": "Result types follow the parameter list."
        },
        {
          "q": "Why is 0 alone insufficient to signal division failure?",
          "options": [
            "Zero can be a valid quotient",
            "Go cannot return zero",
            "Zero always panics"
          ],
          "correct": 0,
          "explanation": "A separate flag distinguishes a successful zero from failure."
        },
        {
          "q": "Does changing a plain int parameter change the caller’s int?",
          "options": [
            "Yes",
            "No",
            "Only if names match"
          ],
          "correct": 1,
          "explanation": "The argument value is copied into the parameter."
        },
        {
          "q": "Which statement ends a function call and supplies its result?",
          "options": [
            "fmt.Println",
            "return",
            "import"
          ],
          "correct": 1,
          "explanation": "return transfers control and optional values to the caller."
        }
      ],
      "pitfalls": "Assignment mismatch at a call: The function returns two values but the caller provides only one target. Capture both results; use _ only when discarding a result is justified. A function prints but cannot be used in arithmetic: Its signature has no returned value. Return the computed int and let main choose how to display it. Integer divide by zero panic: Division happens before checking the denominator. Test the denominator first and return an explicit failure result.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Use variables, arithmetic, and if statements.",
          "Recognise int, bool, and string types and return from main."
        ],
        "outcomes": [
          "Read parameter and return types in a function signature.",
          "Call a function and capture multiple results in order.",
          "Use an explicit success indicator to handle an invalid calculation."
        ],
        "expectedOutput": "4 true\n0 false",
        "walkthrough": [
          {
            "code": "func safeDivide(a, b int) (int, bool)",
            "explanation": "Accepts two integers and promises a quotient plus a success flag."
          },
          {
            "code": "if b == 0 / return 0, false",
            "explanation": "Checks the invalid case before evaluating division."
          },
          {
            "code": "return a / b, true",
            "explanation": "Supplies the successful value and flag in signature order."
          },
          {
            "code": "value, ok = safeDivide(12, 0)",
            "explanation": "Reuses both variables, then reveals that the second call failed."
          }
        ],
        "variations": [
          {
            "title": "Return quotient and remainder",
            "code": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc split(total, size int) (int, int) {\n    return total / size, total % size\n}\n\nfunc main() {\n    whole, remainder := split(17, 5)\n    fmt.Println(whole, remainder)\n}",
            "expectedOutput": "3 2",
            "explanation": "For the documented nonzero size, 17 consists of three groups of five with two left. Both results are meaningful data rather than a success flag."
          }
        ],
        "mistakes": [
          {
            "symptom": "Assignment mismatch at a call",
            "cause": "The function returns two values but the caller provides only one target.",
            "fix": "Capture both results; use _ only when discarding a result is justified."
          },
          {
            "symptom": "A function prints but cannot be used in arithmetic",
            "cause": "Its signature has no returned value.",
            "fix": "Return the computed int and let main choose how to display it."
          },
          {
            "symptom": "Integer divide by zero panic",
            "cause": "Division happens before checking the denominator.",
            "fix": "Test the denominator first and return an explicit failure result."
          }
        ],
        "summary": "A signature tells callers which values enter and leave. Return results instead of hiding them in printing, and interpret multiple results together. Packages next organise these functions across reusable boundaries.",
        "references": [
          {
            "title": "Go tour: functions",
            "url": "https://go.dev/tour/basics/4"
          },
          {
            "title": "Go tour: multiple results",
            "url": "https://go.dev/tour/basics/6"
          }
        ]
      }
    },
    {
      "id": "go-07",
      "title": "2.2 Packages & Imports",
      "module": "Functions",
      "objective": "Import standard and local packages, recognise exported names, and organise reusable code without creating import cycles.",
      "why": "Packages let applications reuse tested operations and give related functions a clear namespace and dependency boundary.",
      "explanation": "<h4>Use a package as a named collection</h4><p>A package groups related declarations such as functions and types. The standard strings package provides text operations; fmt provides formatting. Importing a package makes its exported identifiers available through a package qualifier: <code>strings.TrimSpace(text)</code> selects TrimSpace from strings. The dot is part of the qualified name, not a filesystem path. Each source file declares its own imports even when other files share its package. Imports are dependencies the compiler checks, not text pasted into your source. An unused import is rejected because it no longer describes something the file actually uses.</p>\n<h4>Understand paths and exported names</h4><p>The quoted string in <code>import \"strings\"</code> is an import path identifying the package. The name used in expressions normally comes from that package’s declaration. An identifier beginning with an uppercase letter is exported and can be used by other packages. TrimSpace is exported; a hypothetical trimSpace helper is private to its defining package. Exported does not mean globally available without an import. Two packages can expose the same function name because the qualifier separates their namespaces. An import alias such as <code>text \"strings\"</code> changes the local qualifier to text without changing the package itself.</p>\n<h4>Compose small text operations</h4><p>The main example first removes whitespace around a user-provided label, then converts the remaining text to uppercase. strings.TrimSpace returns a new string value representing the trimmed text; assigning it to clean makes that result available to the next statement. strings.ToUpper returns the uppercase version. Neither operation updates a string variable by magic, so ignoring a returned value would lose the transformation. The order communicates the intended normalisation pipeline. A real identifier policy may need more rules than trimming and case conversion; these functions perform specific text operations rather than validating every possible name.</p>\n<h4>Create and import a local package</h4><p>From a module created with <code>go mod init example.com/catalog</code>, make a directory label containing label.go. Its contents can be <code>package label</code> followed by <code>func Prefix(name string) string { return \"Item: \" + name }</code>. In the root main.go, import fmt and <code>example.com/catalog/label</code>, then call <code>fmt.Println(label.Prefix(\"book\"))</code> inside main. The complete layout is go.mod, main.go, and label/label.go. Run <code>go run .</code> from the root; it prints Item: book. The import path combines the module identity and subdirectory, while Prefix must be uppercase to cross the package boundary.</p>\n<h4>Keep dependency direction understandable</h4><p>The executable may import label, but label should not import the executable back. Go rejects import cycles because package dependencies must have a buildable direction. Move genuinely shared behavior into a lower-level package used by both callers instead of making two packages depend on each other. For this lesson no third-party downloads are needed: strings and fmt ship with Go, and the local module resolves your helper. Use <code>go fmt ./...</code> and <code>go test ./...</code> to check all packages as the project grows; go test also builds packages even before you add tests.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    raw := \"  River Guide  \"\n    clean := strings.TrimSpace(raw)\n    fmt.Println(strings.ToUpper(clean))\n}",
      "exercises": [
        {
          "title": "Guided: trim a command",
          "instruction": "Use strings.TrimSpace to turn \"  list\\n\" into list and print it.",
          "hint": "Remember the strings import and use its returned value.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    command := strings.TrimSpace(\"  list\\n\")\n    fmt.Println(command)\n}",
          "expectedOutput": "list",
          "solutionExplanation": "TrimSpace removes surrounding whitespace including a newline. The assigned return value is printed.",
          "successCriteria": "Import is used; the output has no leading spaces or extra blank line.",
          "level": "easy"
        },
        {
          "title": "Repair: keep a returned transformation",
          "instruction": "A program calls strings.ToLower(name) but prints the original name. Repair it for name \"BOOK\".",
          "hint": "Strings are not modified in place by ToLower.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    name := \"BOOK\"\n    name = strings.ToLower(name)\n    fmt.Println(name)\n}",
          "expectedOutput": "book",
          "solutionExplanation": "The returned string replaces the previous variable value.",
          "successCriteria": "The transformation result is stored or passed onward; output is lowercase.",
          "level": "easy"
        },
        {
          "title": "Independent: package boundary",
          "instruction": "Build the documented example.com/catalog module with the label subpackage and Prefix function; print Item: book. The standalone reference combines the behavior for a quick run, then move Prefix into label/label.go and import it.",
          "hint": "The reusable function must be exported; its file uses package label.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc Prefix(name string) string {\n    return \"Item: \" + name\n}\n\nfunc main() {\n    fmt.Println(Prefix(\"book\"))\n}",
          "expectedOutput": "Item: book",
          "solutionExplanation": "Moving the function to package label changes the call to label.Prefix and requires the module-qualified import; the calculation remains identical.",
          "successCriteria": "The final two-package layout builds with go run .; Prefix is uppercase and dependencies have no cycle.",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "What makes a package identifier exported?",
          "options": [
            "An uppercase first letter",
            "A special public keyword",
            "Its file is main.go"
          ],
          "correct": 0,
          "explanation": "Go uses identifier capitalisation for export visibility."
        },
        {
          "q": "What is example.com/catalog/label in an import?",
          "options": [
            "A required live website",
            "An import path based on module and package directory",
            "The local variable name"
          ],
          "correct": 1,
          "explanation": "A local package resolves through the module path; no website is needed here."
        },
        {
          "q": "What happens if strings.ToUpper(s) is called and its result ignored?",
          "options": [
            "s changes automatically",
            "s retains its old value",
            "The package is removed"
          ],
          "correct": 1,
          "explanation": "ToUpper returns a transformed string rather than changing the variable."
        },
        {
          "q": "How should two packages sharing utilities avoid a cycle?",
          "options": [
            "Import each other twice",
            "Put common operations in a lower-level package",
            "Rename main.go"
          ],
          "correct": 1,
          "explanation": "A shared dependency gives both callers a one-way build relationship."
        }
      ],
      "pitfalls": "Undefined name after importing: Code uses a name without its package qualifier or with the wrong alias. Use strings.TrimSpace, or the explicit alias chosen by the import. Cannot access a helper from another package: The helper begins with a lowercase letter. Export the intended API with an uppercase name and update the call. import cycle not allowed: Two packages depend on one another directly or indirectly. Extract shared operations into a third package or change the dependency direction.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Create a module with go mod init and run go run .",
          "Define and call a typed Go function."
        ],
        "outcomes": [
          "Use an imported package through its declared name.",
          "Distinguish import paths, package names, and exported identifiers.",
          "Describe and build a local helper package under a module."
        ],
        "expectedOutput": "RIVER GUIDE",
        "walkthrough": [
          {
            "code": "import fmt and strings",
            "explanation": "Makes two standard library namespaces available to this file."
          },
          {
            "code": "strings.TrimSpace(raw)",
            "explanation": "Returns the label with surrounding whitespace removed."
          },
          {
            "code": "strings.ToUpper(clean)",
            "explanation": "Returns uppercase text and passes it to Println."
          }
        ],
        "variations": [
          {
            "title": "Alias an import and split fields",
            "code": "package main\n\nimport (\n    \"fmt\"\n    text \"strings\"\n)\n\nfunc main() {\n    words := text.Fields(\"  red   blue\\tgreen \")\n    fmt.Println(len(words))\n    fmt.Println(words[1])\n}",
            "expectedOutput": "3\nblue",
            "explanation": "The alias text qualifies Fields, which splits on runs of whitespace and returns a slice of strings. len counts elements; index 1 selects the second, using zero-based indexing."
          }
        ],
        "mistakes": [
          {
            "symptom": "Undefined name after importing",
            "cause": "Code uses a name without its package qualifier or with the wrong alias.",
            "fix": "Use strings.TrimSpace, or the explicit alias chosen by the import."
          },
          {
            "symptom": "Cannot access a helper from another package",
            "cause": "The helper begins with a lowercase letter.",
            "fix": "Export the intended API with an uppercase name and update the call."
          },
          {
            "symptom": "import cycle not allowed",
            "cause": "Two packages depend on one another directly or indirectly.",
            "fix": "Extract shared operations into a third package or change the dependency direction."
          }
        ],
        "summary": "Import paths locate packages, qualifiers name their operations, and capital letters expose APIs. Keep reusable transformations explicit and dependencies one-way. Error handling next makes package failures part of a clear contract.",
        "references": [
          {
            "title": "Go: call code in an external package",
            "url": "https://go.dev/doc/tutorial/call-module-code"
          },
          {
            "title": "strings package",
            "url": "https://go.dev/pkg/strings/"
          }
        ]
      }
    },
    {
      "id": "go-08",
      "title": "2.3 Error Handling Patterns",
      "module": "Functions",
      "objective": "Return and inspect error values, add useful context, and distinguish expected failure from a panic.",
      "why": "Real inputs can be malformed even when the program is correct; callers need a predictable way to decide how to respond.",
      "explanation": "<h4>Treat failure as part of the return contract</h4><p>Go commonly represents an operation that may fail with two results: a useful value and an error. The built-in error type describes values with an Error method that returns a message. You do not need to implement that method yourself for ordinary validation; errors.New and fmt.Errorf construct error values. A nil error means the operation succeeded. A non-nil error means the caller must follow the documented failure contract instead of assuming the accompanying value is valid. This approach makes expected failures visible in the function’s signature and call site.</p>\n<h4>Check first, then use the result</h4><p>The standard pattern is <code>value, err := operation()</code> followed immediately by <code>if err != nil { ... }</code>. Handle or return the error before entering the success path. Continuing with an unsuccessful parse can accidentally use zero as if it were genuine input. The main example parses a positive quantity: strconv.Atoi handles syntax, then the helper checks the domain rule that the quantity must exceed zero. Those are distinct failures. Text may be syntactically valid as an integer but still invalid for the business rule. Validation therefore needs more than a successful parser.</p>\n<h4>Return useful context without losing the cause</h4><p>The helper uses <code>fmt.Errorf(\"quantity %q: %w\", text, err)</code> when parsing fails. %q quotes the input, and %w wraps the underlying error so later code can inspect its identity or type. With an ordinary %v the message would be displayed but the underlying error relationship would not be preserved. Error messages should explain what failed and provide actionable context without adding an entire narration at every layer. The caller can then decide whether to ask for another input, skip a record, or stop. This lesson prints the message and continues to demonstrate independent inputs.</p>\n<h4>Prefer explicit branches for expected failures</h4><p>A panic interrupts ordinary control flow and is not the default response to a mistyped quantity. Use error returns for expected failures such as parsing and validation. A small command may choose to print a message and return; a reusable package should usually return the error so its caller controls presentation. Early returns also keep the successful calculation at the normal indentation level. Do not add a success message after an error branch unless that branch truly recovers. Logging an error and then returning it to a caller that also logs it can create duplicate, confusing output.</p>\n<h4>Exercise valid, invalid, and boundary cases</h4><p>The worked program uses \"3\" and \"0\": the first succeeds, the second parses but violates the positive rule. The variation uses malformed text to show parsing failure and deliberately prints a stable user-facing message rather than depending on the exact parser diagnostic. Toolchain versions may refine diagnostic wording, so test stable application behavior separately from raw library error strings. Blank input, zero, negative numbers, and very large integers are useful additional checks. If callers need to recognise a particular category later, use errors.Is or errors.As with documented errors instead of comparing arbitrary message text.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc parseQuantity(text string) (int, error) {\n    quantity, err := strconv.Atoi(text)\n    if err != nil {\n        return 0, fmt.Errorf(\"quantity %q: %w\", text, err)\n    }\n    if quantity <= 0 {\n        return 0, fmt.Errorf(\"quantity must be positive\")\n    }\n    return quantity, nil\n}\n\nfunc main() {\n    for _, text := range []string{\"3\", \"0\"} {\n        quantity, err := parseQuantity(text)\n        if err != nil {\n            fmt.Println(\"Error:\", err)\n            continue\n        }\n        fmt.Println(\"Accepted:\", quantity)\n    }\n}",
      "exercises": [
        {
          "title": "Guided: validate a denominator",
          "instruction": "Create divide(a,b int) (int,error), reject b==0, and print a successful call for 10 and 2.",
          "hint": "Return nil alongside the successful quotient.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc divide(a, b int) (int, error) {\n    if b == 0 { return 0, fmt.Errorf(\"denominator is zero\") }\n    return a / b, nil\n}\n\nfunc main() {\n    value, err := divide(10, 2)\n    if err != nil { fmt.Println(err); return }\n    fmt.Println(value)\n}",
          "expectedOutput": "5",
          "solutionExplanation": "Checking before division prevents a panic; nil explicitly marks success.",
          "successCriteria": "Invalid denominator returns an error; caller checks it before printing the value.",
          "level": "easy"
        },
        {
          "title": "Repair: ignored parser error",
          "instruction": "Repair a parser for \"8x\" that currently discards its error and prints the returned number. Print Invalid age on failure.",
          "hint": "The blank identifier should become err.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc main() {\n    age, err := strconv.Atoi(\"8x\")\n    if err != nil {\n        fmt.Println(\"Invalid age\")\n        return\n    }\n    fmt.Println(age)\n}",
          "expectedOutput": "Invalid age",
          "solutionExplanation": "The failure result is detected and the early return blocks use of a misleading zero.",
          "successCriteria": "No success value appears for invalid text; valid text still reaches the success path.",
          "level": "easy"
        },
        {
          "title": "Independent: validate a discount",
          "instruction": "Write a helper accepting an int percentage and returning it with nil only from 0 through 100 inclusive. Demonstrate 100 and 101.",
          "hint": "Validate both ends of the interval before the success return.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n)\n\nfunc discount(value int) (int, error) {\n    if value < 0 || value > 100 {\n        return 0, fmt.Errorf(\"discount out of range\")\n    }\n    return value, nil\n}\n\nfunc main() {\n    for _, input := range []int{100, 101} {\n        value, err := discount(input)\n        if err != nil { fmt.Println(err); continue }\n        fmt.Println(\"Discount:\", value)\n    }\n}",
          "expectedOutput": "Discount: 100\ndiscount out of range",
          "solutionExplanation": "Both boundaries are inclusive; 101 follows the failure path and does not produce Discount: 0.",
          "successCriteria": "Checks both lower and upper bounds; demonstrates successful boundary and rejected input.",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "What does err == nil conventionally mean?",
          "options": [
            "The operation succeeded",
            "The returned number is zero",
            "The caller must panic"
          ],
          "correct": 0,
          "explanation": "nil is the conventional absence of failure."
        },
        {
          "q": "Why check the error from Atoi?",
          "options": [
            "Every string is valid",
            "A numeric zero result alone cannot prove parsing succeeded",
            "It changes the string"
          ],
          "correct": 1,
          "explanation": "Malformed input may return a zero value with an error."
        },
        {
          "q": "What does %w add in fmt.Errorf?",
          "options": [
            "Automatic recovery",
            "A preserved underlying error relationship",
            "A stack trace in every case"
          ],
          "correct": 1,
          "explanation": "Wrapping allows later inspection of the original cause."
        },
        {
          "q": "What should normally handle a user’s mistyped number?",
          "options": [
            "An explicit error path",
            "A deliberate panic",
            "Ignoring the input and claiming success"
          ],
          "correct": 0,
          "explanation": "Expected input failures belong in normal control flow."
        }
      ],
      "pitfalls": "Invalid text becomes a quantity of zero: The error result from Atoi was discarded. Capture err and handle it before using the int. The caller cannot inspect the original cause: Context was added with %v when wrapping was intended. Use %w with fmt.Errorf; later inspect using errors.Is or errors.As. Success appears after an error: The failure branch prints but control continues into successful processing. Return, continue, or otherwise make the recovery path explicit.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner",
      "guide": {
        "version": 1,
        "prerequisites": [
          "Call functions that return more than one value.",
          "Use if statements and understand nil as the absence of an error."
        ],
        "outcomes": [
          "Check err before trusting a returned value.",
          "Return an error explaining a validation failure.",
          "Wrap an error with context using %w and identify when early return simplifies control flow."
        ],
        "expectedOutput": "Accepted: 3\nError: quantity must be positive",
        "walkthrough": [
          {
            "code": "strconv.Atoi(text)",
            "explanation": "Parses decimal syntax and returns an int plus error."
          },
          {
            "code": "fmt.Errorf with %w",
            "explanation": "Attaches quantity context while retaining the underlying parse error."
          },
          {
            "code": "quantity <= 0",
            "explanation": "Rejects a syntactically valid but disallowed number."
          },
          {
            "code": "range []string / continue",
            "explanation": "Visits each input; an error prints once and skips only that input’s success path."
          }
        ],
        "variations": [
          {
            "title": "Malformed syntax reaches the error branch",
            "code": "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc main() {\n    quantity, err := strconv.Atoi(\"three\")\n    if err != nil {\n        fmt.Println(\"Enter a whole number\")\n        return\n    }\n    fmt.Println(quantity)\n}",
            "expectedOutput": "Enter a whole number",
            "explanation": "The stable message comes from the application. The unsuccessful numeric result is never used."
          }
        ],
        "mistakes": [
          {
            "symptom": "Invalid text becomes a quantity of zero",
            "cause": "The error result from Atoi was discarded.",
            "fix": "Capture err and handle it before using the int."
          },
          {
            "symptom": "The caller cannot inspect the original cause",
            "cause": "Context was added with %v when wrapping was intended.",
            "fix": "Use %w with fmt.Errorf; later inspect using errors.Is or errors.As."
          },
          {
            "symptom": "Success appears after an error",
            "cause": "The failure branch prints but control continues into successful processing.",
            "fix": "Return, continue, or otherwise make the recovery path explicit."
          }
        ],
        "summary": "Check errors before values, distinguish syntax from domain validation, and return context that callers can act on. Structs next group the validated values and their related behavior.",
        "references": [
          {
            "title": "Go blog: error handling",
            "url": "https://go.dev/blog/error-handling-and-go"
          },
          {
            "title": "Go blog: working with errors",
            "url": "https://go.dev/blog/go1.13-errors"
          }
        ]
      }
    },
    {
      "id": "go-09",
      "title": "3.1 Structs & Methods",
      "module": "Data",
      "objective": "Define structs and methods with receivers.",
      "why": "Customer, Order, Product — structs model business data.",
      "explanation": "<p><strong>What you will learn.</strong> Define structs and methods with receivers. By the end you should explain <em>Structs &amp; Methods</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Customer, Order, Product — structs model business data. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Objects bundle data (what something knows) with behavior (what it can do). Blueprints (classes/structs) let you create many similar things cleanly.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>type Product struct { Name string; Price float64 }<br>func (p Product) Total(qty int) float64</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Define structs and methods with receivers.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>13</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>type Product struct {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>Name  string</code> — does a step in the overall recipe.</li><li><code>Price float64</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Structs &amp; Methods</em> solve?</li><li>Which line in the example most directly achieves: “Define structs and methods with receivers.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Wrong argument count or forgetting return are the most common function mistakes.</li><li>Keep data and methods that belong together on the same type; avoid god-objects that do everything.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\ntype Product struct {\n    Name  string\n    Price float64\n}\n\nfunc (p Product) LineTotal(qty int) float64 {\n    return p.Price * float64(qty)\n}\n\nfunc main() {\n    rice := Product{Name: \"Rice\", Price: 45000}\n    fmt.Println(rice.Name, rice.LineTotal(2))\n}",
      "exercises": [
        {
          "title": "Student struct",
          "instruction": "name string score int + method Passed() bool score>=50.",
          "solution": "package main\n\nimport \"fmt\"\n\ntype Student struct {\n    Name  string\n    Score int\n}\n\nfunc (s Student) Passed() bool {\n    return s.Score >= 50\n}\n\nfunc main() {\n    s := Student{\"Ada\", 72}\n    fmt.Println(s.Passed())\n}",
          "hint": "method receiver",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Method receiver appears?",
          "options": [
            "After func name only",
            "Before func name in parentheses",
            "In import",
            "In go.mod"
          ],
          "correct": 1,
          "explanation": "(r Type) Name()"
        }
      ],
      "pitfalls": "Wrong argument count or forgetting return are the most common function mistakes.; Keep data and methods that belong together on the same type; avoid god-objects that do everything.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-10",
      "title": "3.2 Slices",
      "module": "Data",
      "objective": "Use slices for dynamic lists.",
      "why": "Orders today: grow/shrink — slices not fixed arrays.",
      "explanation": "<p><strong>What you will learn.</strong> Use slices for dynamic lists. By the end you should explain <em>Slices</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Orders today: grow/shrink — slices not fixed arrays. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> An ordered collection stores many values under one name. You can loop through items, pick one by position, add/remove, and pass the whole group around.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>s := []int{1,2,3}<br>append, len, cap, slicing a[1:3]</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Use slices for dynamic lists.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>8</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>orders := []string{\"jollof\", \"suya\"}</code> — stores or updates a value.</li><li><code>orders = append(orders, \"zobo\")</code> — stores or updates a value.</li><li><code>fmt.Println(len(orders), orders)</code> — shows output so you can verify the result.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Slices</em> solve?</li><li>Which line in the example most directly achieves: “Use slices for dynamic lists.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Index out of range happens when index ≥ length. Check length before you index.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    orders := []string{\"jollof\", \"suya\"}\n    orders = append(orders, \"zobo\")\n    fmt.Println(len(orders), orders)\n    fmt.Println(orders[1:])\n}",
      "exercises": [
        {
          "title": "Sum slice",
          "instruction": "Sum []int{10,20,30}.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    nums := []int{10, 20, 30}\n    sum := 0\n    for _, n := range nums {\n        sum += n\n    }\n    fmt.Println(sum)\n}",
          "hint": "range loop",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "append may return?",
          "options": [
            "same backing always",
            "new slice header (must reassign)",
            "only errors",
            "maps"
          ],
          "correct": 1,
          "explanation": "orders = append(orders, x)"
        }
      ],
      "pitfalls": "Index out of range happens when index ≥ length. Check length before you index.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-11",
      "title": "3.3 Maps",
      "module": "Data",
      "objective": "Store key-value data with maps.",
      "why": "Phonebook, inventory counts — maps are hash tables.",
      "explanation": "<p><strong>What you will learn.</strong> Store key-value data with maps. By the end you should explain <em>Maps</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Phonebook, inventory counts — maps are hash tables. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Key–value maps store labeled data (like a form: name → value). They shine when you look things up by a name instead of by position.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>m := map[string]int{}<br>value, ok := m[key]</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Store key-value data with maps.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>stock := map[string]int{\"rice\": 20, \"beans\": 5}</code> — stores or updates a value.</li><li><code>stock[\"oil\"] = 12</code> — stores or updates a value.</li><li><code>qty, ok := stock[\"beans\"]</code> — stores or updates a value.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Maps</em> solve?</li><li>Which line in the example most directly achieves: “Store key-value data with maps.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Missing keys return errors/undefined — print keys or use safe get/default patterns.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    stock := map[string]int{\"rice\": 20, \"beans\": 5}\n    stock[\"oil\"] = 12\n    qty, ok := stock[\"beans\"]\n    fmt.Println(qty, ok)\n    delete(stock, \"beans\")\n    fmt.Println(stock)\n}",
      "exercises": [
        {
          "title": "Word count lite",
          "instruction": "map count for words []string{\"a\",\"b\",\"a\"}.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    words := []string{\"a\", \"b\", \"a\"}\n    count := map[string]int{}\n    for _, w := range words {\n        count[w]++\n    }\n    fmt.Println(count)\n}",
          "hint": "m[k]++",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Comma-ok idiom checks?",
          "options": [
            "channel closed only",
            "key existence in map",
            "goroutine id",
            "file lock"
          ],
          "correct": 1,
          "explanation": "val, ok := m[k]"
        }
      ],
      "pitfalls": "Missing keys return errors/undefined — print keys or use safe get/default patterns.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-12",
      "title": "3.4 Interfaces (Gentle)",
      "module": "Data",
      "objective": "Accept interfaces for flexible APIs.",
      "why": "fmt.Stringer — anything with String() can print nicely.",
      "explanation": "<p><strong>What you will learn.</strong> Accept interfaces for flexible APIs. By the end you should explain <em>Interfaces (Gentle)</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> fmt.Stringer — anything with String() can print nicely. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> This lesson is a building block in the Data module. Master it with a small example, then reuse the pattern in your own scenario.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>interface { Method() }<br>implicit implementation</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Accept interfaces for flexible APIs.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>type Naira float64</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func (n Naira) String() string {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>return fmt.Sprintf(\"₦%.2f\", float64(n))</code> — shows output so you can verify the result.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Interfaces (Gentle)</em> solve?</li><li>Which line in the example most directly achieves: “Accept interfaces for flexible APIs.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\ntype Naira float64\n\nfunc (n Naira) String() string {\n    return fmt.Sprintf(\"₦%.2f\", float64(n))\n}\n\nfunc main() {\n    var amount Naira = 2500\n    fmt.Println(amount)\n}",
      "exercises": [
        {
          "title": "Stringer idea",
          "instruction": "Explain in a Println why String() helps formatting.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"String() customizes fmt printing for a type\")\n}",
          "hint": "fmt looks for Stringer",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Go interfaces are satisfied?",
          "options": [
            "explicit implements keyword only",
            "implicitly by having methods",
            "via inheritance",
            "YAML"
          ],
          "correct": 1,
          "explanation": "Duck typing"
        }
      ],
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-13",
      "title": "4.1 Goroutines Intro",
      "module": "Concurrency",
      "objective": "Start a goroutine with go keyword.",
      "why": "Handle many light tasks — not threads you manage manually.",
      "explanation": "<p><strong>What you will learn.</strong> Start a goroutine with go keyword. By the end you should explain <em>Goroutines Intro</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Handle many light tasks — not threads you manage manually. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Concurrency means overlapping work in time. You must coordinate tasks so they do not corrupt shared data — like multiple cashiers updating one stock count.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>go f()<br>main must wait or program exits<br>use sync.WaitGroup intro</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Start a goroutine with go keyword.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>12</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import (</code> — sets up a name, type, import, or definition you will use next.</li><li><code>\"fmt\"</code> — does a step in the overall recipe.</li><li><code>\"time\"</code> — does a step in the overall recipe.</li><li><code>)</code> — does a step in the overall recipe.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Goroutines Intro</em> solve?</li><li>Which line in the example most directly achieves: “Start a goroutine with go keyword.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n    \"time\"\n)\n\nfunc main() {\n    go func() {\n        fmt.Println(\"work in background\")\n    }()\n    time.Sleep(100 * time.Millisecond)\n    fmt.Println(\"main done\")\n}",
      "exercises": [
        {
          "title": "Caution",
          "instruction": "Why might main end before goroutine prints? Print answer.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Main can exit before goroutines finish unless you wait\")\n}",
          "hint": "lifecycle",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "go keyword starts?",
          "options": [
            "OS process always",
            "goroutine",
            "SQL txn",
            "HTTP only"
          ],
          "correct": 1,
          "explanation": "Lightweight concurrent function"
        }
      ],
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "intermediate"
    },
    {
      "id": "go-14",
      "title": "4.2 Channels Basics",
      "module": "Concurrency",
      "objective": "Send/receive on channels.",
      "why": "Safe communication between goroutines — \"don't communicate by sharing memory\".",
      "explanation": "<p><strong>What you will learn.</strong> Send/receive on channels. By the end you should explain <em>Channels Basics</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Safe communication between goroutines — \"don't communicate by sharing memory\". Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Concurrency means overlapping work in time. You must coordinate tasks so they do not corrupt shared data — like multiple cashiers updating one stock count.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>ch := make(chan int)<br>ch <- 1; v := <-ch</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Send/receive on channels.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>10</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>func main() {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>ch := make(chan string)</code> — stores or updates a value.</li><li><code>go func() {</code> — does a step in the overall recipe.</li><li><code>ch &lt;- \"order ready\"</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Channels Basics</em> solve?</li><li>Which line in the example most directly achieves: “Send/receive on channels.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    ch := make(chan string)\n    go func() {\n        ch <- \"order ready\"\n    }()\n    msg := <-ch\n    fmt.Println(msg)\n}",
      "exercises": [
        {
          "title": "Ping",
          "instruction": "Send \"ping\" on channel and print received value.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    ch := make(chan string)\n    go func() { ch <- \"ping\" }()\n    fmt.Println(<-ch)\n}",
          "hint": "receive blocks until send",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Unbuffered send blocks until?",
          "options": [
            "timeout always",
            "receiver ready",
            "GC runs",
            "compile ends"
          ],
          "correct": 1,
          "explanation": "Synchronization point"
        }
      ],
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": false,
      "difficulty": "intermediate"
    },
    {
      "id": "go-15",
      "title": "5.1 Mini Project: CLI Expense Tracker",
      "module": "Projects",
      "objective": "Build a simple in-memory expense CLI logic.",
      "why": "Track daily spend — classic CLI portfolio piece.",
      "explanation": "<p><strong>What you will learn.</strong> Build a simple in-memory expense CLI logic. By the end you should explain <em>Mini Project: CLI Expense Tracker</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> Track daily spend — classic CLI portfolio piece. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>struct Expense, slice store, add + total functions</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Build a simple in-memory expense CLI logic.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>17</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import \"fmt\"</code> — sets up a name, type, import, or definition you will use next.</li><li><code>type Expense struct {</code> — sets up a name, type, import, or definition you will use next.</li><li><code>Label  string</code> — does a step in the overall recipe.</li><li><code>Amount float64</code> — does a step in the overall recipe.</li><li><code>}</code> — does a step in the overall recipe.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Mini Project: CLI Expense Tracker</em> solve?</li><li>Which line in the example most directly achieves: “Build a simple in-memory expense CLI logic.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "package main\n\nimport \"fmt\"\n\ntype Expense struct {\n    Label  string\n    Amount float64\n}\n\nfunc total(items []Expense) float64 {\n    var sum float64\n    for _, e := range items {\n        sum += e.Amount\n    }\n    return sum\n}\n\nfunc main() {\n    items := []Expense{{\"fuel\", 12000}, {\"data\", 2000}}\n    fmt.Println(\"Total:\", total(items))\n}",
      "exercises": [
        {
          "title": "Add food",
          "instruction": "Append food 3500 and print new total.",
          "solution": "package main\n\nimport \"fmt\"\n\ntype Expense struct {\n    Label  string\n    Amount float64\n}\n\nfunc total(items []Expense) float64 {\n    var sum float64\n    for _, e := range items {\n        sum += e.Amount\n    }\n    return sum\n}\n\nfunc main() {\n    items := []Expense{{\"fuel\", 12000}, {\"data\", 2000}, {\"food\", 3500}}\n    fmt.Println(total(items))\n}",
          "hint": "append struct",
          "level": "medium"
        }
      ],
      "quiz": [],
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": true,
      "difficulty": "beginner"
    },
    {
      "id": "go-16",
      "title": "5.2 Capstone: Tiny HTTP Handler",
      "module": "Projects",
      "objective": "Write a minimal net/http hello server pattern.",
      "why": "APIs are how mobile apps talk to backends.",
      "explanation": "<p><strong>What you will learn.</strong> Write a minimal net/http hello server pattern. By the end you should explain <em>Capstone: Tiny HTTP Handler</em> in your own words and reuse it in a small example without copying blindly.</p>\n<p><strong>Why it matters.</strong> APIs are how mobile apps talk to backends. Keep that picture in mind while you study the code — every line should serve a purpose you can explain to a non-programmer.</p>\n<p><strong>The idea in plain language.</strong> Projects glue skills together. You combine inputs, decisions, collections, and functions into one useful tool someone could actually use.</p>\n<div class=\"core-teach\"><p><strong>Core explanation.</strong></p><p>http.HandleFunc, ListenAndServe</p><p>Do not rush past this: if any sentence is unclear, re-read it after you run the code once, then connect each sentence to a line in the example.</p></div>\n<p><strong>Break it into smaller pieces.</strong> (1) Restate the objective — “Write a minimal net/http hello server pattern.” — in simpler words, (2) run the example unchanged, (3) change one input and predict the new result before running, (4) complete the exercise using only this lesson’s ideas.</p>\n<div><p><strong>Walk through the example.</strong></p>The sample has about <strong>12</strong> meaningful line(s). Read top to bottom and narrate each line out loud:<ul><li><code>package main</code> — sets up a name, type, import, or definition you will use next.</li><li><code>import (</code> — sets up a name, type, import, or definition you will use next.</li><li><code>\"fmt\"</code> — does a step in the overall recipe.</li><li><code>\"net/http\"</code> — does a step in the overall recipe.</li><li><code>)</code> — does a step in the overall recipe.</li><li><code>func hello(w http.ResponseWriter, r *http.Request) {</code> — sets up a name, type, import, or definition you will use next.</li></ul>After one successful run, break the example on purpose (wrong name, missing quote, bad indent) and read the error slowly — that is how professionals debug.</div>\n<p><strong>How to practice.</strong> On your machine: put the code in <code>main.go</code>, then run <code>go run .</code>. Keep a notes file of errors you hit and how you fixed them. Then attempt the exercise. Use the hint only after a real try; open the solution last.</p>\n<p><strong>Check your understanding</strong> (answer before looking at solutions):</p><ol><li>In one sentence, what problem does <em>Capstone: Tiny HTTP Handler</em> solve?</li><li>Which line in the example most directly achieves: “Write a minimal net/http hello server pattern.”?</li><li>If you change one value in <code>package main</code>, what output do you expect and why?</li><li>What is one common mistake here, and how would the error message guide you to fix it?</li></ol>\n<p><strong>Watch out.</strong></p><ul><li>Compile errors are normal — read the first error carefully; later errors often cascade from it.</li><li>If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.</li></ul>\n<p><strong>Before you continue.</strong> You are ready for the next lesson when you can: (1) restate the objective without looking, (2) predict the example’s output, (3) complete the exercise, and (4) pass the quiz at ≥70%. If any step fails, loop back to the core explanation and the example.</p>",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n    \"net/http\"\n)\n\nfunc hello(w http.ResponseWriter, r *http.Request) {\n    fmt.Fprintln(w, \"ZeroToCode Go API is live\")\n}\n\nfunc main() {\n    http.HandleFunc(\"/\", hello)\n    // http.ListenAndServe(\":8080\", nil)\n    fmt.Println(\"Server pattern ready — uncomment ListenAndServe to run\")\n}",
      "exercises": [
        {
          "title": "Route idea",
          "instruction": "HandleFunc path /health returns OK — sketch the handler.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n    \"net/http\"\n)\n\nfunc health(w http.ResponseWriter, r *http.Request) {\n    fmt.Fprintln(w, \"OK\")\n}\n\nfunc main() {\n    http.HandleFunc(\"/health\", health)\n    fmt.Println(\"registered /health\")\n}",
          "hint": "HandleFunc",
          "level": "medium"
        }
      ],
      "quiz": [],
      "pitfalls": "Compile errors are normal — read the first error carefully; later errors often cascade from it.; If stuck more than 10 minutes: restate the objective in one sentence, change only one thing, re-run.",
      "path": "builder",
      "project": true,
      "difficulty": "intermediate"
    }
  ],
  "totalLessons": 16
};
