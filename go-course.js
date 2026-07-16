// ZeroToCode Academy — Go (Golang) curriculum (16 lessons)
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
      "objective": "Write and run a basic Go program.",
      "why": "Go powers Docker, many cloud CLIs, and fast APIs — simple syntax, great concurrency later.",
      "explanation": "package main + func main()<br>go run . or go run file.go<br>fmt.Println for output",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello from Go!\")\n    fmt.Println(\"Ready to build reliable tools\")\n}",
      "exercises": [
        {
          "title": "Personal hello",
          "instruction": "Print your name and city.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"I am Ada from Lagos\")\n}",
          "hint": "fmt.Println",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Entry point function in Go?",
          "options": [
            "start",
            "main in package main",
            "init only",
            "run"
          ],
          "correct": 1,
          "explanation": "package main + main()"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-02",
      "title": "1.2 go mod & Project Layout",
      "module": "Getting Started",
      "objective": "Initialize a module with go mod.",
      "why": "Modules track dependencies like a shopping list for packages.",
      "explanation": "go mod init github.com/you/app<br>go run .<br>go build",
      "codeExample": "// Terminal:\n// go mod init example.com/hello\n// go run .\n\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"module ready\")\n}",
      "exercises": [
        {
          "title": "Mod name",
          "instruction": "Print a valid go mod init path for a CLI named shopctl.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"go mod init example.com/shopctl\")\n}",
          "hint": "module path",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "go mod init does?",
          "options": [
            "Deletes cache",
            "Creates module metadata go.mod",
            "Formats only",
            "Starts server"
          ],
          "correct": 1,
          "explanation": "Initializes module"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-03",
      "title": "1.3 Variables & Types",
      "module": "Basics",
      "objective": "Declare variables with var and :=.",
      "why": "Static types catch bugs at compile time — before customers see them.",
      "explanation": "var name string = \"Ada\"<br>age := 28 type inferred<br>const Pi = 3.14<br>basic types: string int float64 bool",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    var shop string = \"City Mart\"\n    revenue := 125000.5\n    open := true\n    fmt.Println(shop, revenue, open)\n}",
      "exercises": [
        {
          "title": "Account vars",
          "instruction": "owner string, balance float64, active bool — print them.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    owner := \"Chidi\"\n    balance := 15000.0\n    active := true\n    fmt.Println(owner, balance, active)\n}",
          "hint": ":= inside functions",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": ":= can be used?",
          "options": [
            "At package level always",
            "Inside functions for short declare",
            "Only for const",
            "Never with ints"
          ],
          "correct": 1,
          "explanation": "Short variable declaration"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-04",
      "title": "1.4 Constants & Conversion",
      "module": "Basics",
      "objective": "Use typed/untyped constants and conversions.",
      "why": "Money math needs intentional conversions — Go will not auto-mix types.",
      "explanation": "const StatusOpen = \"open\"<br>float64(i) conversions explicit",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    const TaxRate = 0.075\n    price := 10000\n    total := float64(price) * (1 + TaxRate)\n    fmt.Println(total)\n}",
      "exercises": [
        {
          "title": "Convert",
          "instruction": "Convert int 42 to float64 and divide by 2.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(float64(42) / 2)\n}",
          "hint": "float64(n)",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Go automatic type coercion like JS?",
          "options": [
            "Yes always",
            "No — conversions are explicit",
            "Only for strings",
            "Only in loops"
          ],
          "correct": 1,
          "explanation": "Explicit conversions"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-05",
      "title": "1.5 Control Flow",
      "module": "Basics",
      "objective": "Use if, for, and switch.",
      "why": "Business rules: if err, retry loops, status switches.",
      "explanation": "if with optional short statement<br>for is the only loop<br>switch without break auto",
      "codeExample": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    score := 73\n    if score >= 70 {\n        fmt.Println(\"A\")\n    } else if score >= 50 {\n        fmt.Println(\"Pass\")\n    } else {\n        fmt.Println(\"Fail\")\n    }\n    for i := 1; i <= 3; i++ {\n        fmt.Println(\"tick\", i)\n    }\n    switch score / 10 {\n    case 10, 9, 8, 7:\n        fmt.Println(\"Strong\")\n    default:\n        fmt.Println(\"Keep practicing\")\n    }\n}",
      "exercises": [
        {
          "title": "Even numbers",
          "instruction": "for loop print even numbers 2..10.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    for i := 2; i <= 10; i += 2 {\n        fmt.Println(i)\n    }\n}",
          "hint": "step by 2",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "How many loop keywords in Go?",
          "options": [
            "three: for while do",
            "only for",
            "only while",
            "foreach only"
          ],
          "correct": 1,
          "explanation": "for covers all"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-06",
      "title": "2.1 Functions & Multiple Returns",
      "module": "Functions",
      "objective": "Write functions with multiple return values.",
      "why": "Go style: return result, error — callers must handle failures.",
      "explanation": "func add(a, b int) int<br>func div(a, b float64) (float64, error)",
      "codeExample": "package main\n\nimport (\n    \"errors\"\n    \"fmt\"\n)\n\nfunc add(a, b int) int {\n    return a + b\n}\n\nfunc divide(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, errors.New(\"divide by zero\")\n    }\n    return a / b, nil\n}\n\nfunc main() {\n    fmt.Println(add(2, 3))\n    if res, err := divide(10, 2); err != nil {\n        fmt.Println(\"err\", err)\n    } else {\n        fmt.Println(res)\n    }\n}",
      "exercises": [
        {
          "title": "Area func",
          "instruction": "area(length, width float64) float64.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc area(length, width float64) float64 {\n    return length * width\n}\n\nfunc main() {\n    fmt.Println(area(4, 5))\n}",
          "hint": "simple return",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Idiomatic second return often is?",
          "options": [
            "string always",
            "error",
            "chan",
            "mutex"
          ],
          "correct": 1,
          "explanation": "error handling"
        }
      ],
      "pitfalls": "Ignoring err with _ blindly hides bugs.",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-07",
      "title": "2.2 Packages & Imports",
      "module": "Functions",
      "objective": "Import fmt and organize code in packages.",
      "why": "Reusable libraries keep main small — like departments in a company.",
      "explanation": "import \"fmt\"<br>import alias<br>exported Names start with Capital letter",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    fmt.Println(strings.ToUpper(\"lagos\"))\n    fmt.Println(strings.Contains(\"hello\", \"ell\"))\n}",
      "exercises": [
        {
          "title": "Title-ish",
          "instruction": "Use strings.ToLower on a shop name.",
          "solution": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    fmt.Println(strings.ToLower(\"CITY MART\"))\n}",
          "hint": "strings package",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Exported name starts with?",
          "options": [
            "underscore",
            "lowercase only",
            "Uppercase letter",
            "digit"
          ],
          "correct": 2,
          "explanation": "Capital = exported"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-08",
      "title": "2.3 Error Handling Patterns",
      "module": "Functions",
      "objective": "Handle errors with if err != nil.",
      "why": "Reliable services never ignore failures — they log and respond.",
      "explanation": "if err != nil { return err } bubble up<br>fmt.Errorf wrap",
      "codeExample": "package main\n\nimport (\n    \"fmt\"\n    \"os\"\n)\n\nfunc readConfig(path string) error {\n    _, err := os.ReadFile(path)\n    if err != nil {\n        return fmt.Errorf(\"read config: %w\", err)\n    }\n    return nil\n}\n\nfunc main() {\n    if err := readConfig(\"missing.json\"); err != nil {\n        fmt.Println(\"could not start:\", err)\n    }\n}",
      "exercises": [
        {
          "title": "Pattern",
          "instruction": "Write lines showing if err != nil return err pattern in a comment function.",
          "solution": "package main\n\nimport \"fmt\"\n\nfunc work() error {\n    var err error = nil\n    if err != nil {\n        return err\n    }\n    return nil\n}\n\nfunc main() { fmt.Println(work()) }",
          "hint": "check err early",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Best default when err != nil?",
          "options": [
            "panic always",
            "handle or return err",
            "ignore",
            "sleep"
          ],
          "correct": 1,
          "explanation": "Handle or propagate"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "go-09",
      "title": "3.1 Structs & Methods",
      "module": "Data",
      "objective": "Define structs and methods with receivers.",
      "why": "Customer, Order, Product — structs model business data.",
      "explanation": "type Product struct { Name string; Price float64 }<br>func (p Product) Total(qty int) float64",
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
      "pitfalls": "",
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
      "explanation": "s := []int{1,2,3}<br>append, len, cap, slicing a[1:3]",
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
      "pitfalls": "",
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
      "explanation": "m := map[string]int{}<br>value, ok := m[key]",
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
      "pitfalls": "",
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
      "explanation": "interface { Method() }<br>implicit implementation",
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
      "pitfalls": "",
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
      "explanation": "go f()<br>main must wait or program exits<br>use sync.WaitGroup intro",
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
      "pitfalls": "",
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
      "explanation": "ch := make(chan int)<br>ch <- 1; v := <-ch",
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
      "pitfalls": "",
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
      "explanation": "struct Expense, slice store, add + total functions",
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
      "pitfalls": "",
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
      "explanation": "http.HandleFunc, ListenAndServe",
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
      "pitfalls": "",
      "path": "builder",
      "project": true,
      "difficulty": "intermediate"
    }
  ],
  "totalLessons": 16
};
