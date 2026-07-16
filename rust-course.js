// ZeroToCode Academy — Rust curriculum (14 lessons)
window.RUST_COURSE = {
  "id": "rust",
  "name": "Rust",
  "icon": "🦀",
  "color": "orange",
  "subtitle": "Memory-safe systems programming, step by step",
  "globalName": "RUST_COURSE",
  "lessons": [
    {
      "id": "rs-01",
      "title": "1.1 Why Rust & Hello",
      "module": "Getting Started",
      "objective": "Install cargo mindset and print Hello.",
      "why": "Rust prevents memory bugs at compile time — used in browsers, OS tools, and fast APIs.",
      "explanation": "cargo new app<br>cargo run<br>fn main() { println!(...); }",
      "codeExample": "fn main() {\n    println!(\"Hello from Rust!\");\n    println!(\"Safety + speed\");\n}",
      "exercises": [
        {
          "title": "Greeting",
          "instruction": "Print your name with println!.",
          "solution": "fn main() {\n    println!(\"Hello, I am Tunde\");\n}",
          "hint": "println! macro",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Rust package tool?",
          "options": [
            "npm",
            "cargo",
            "pip",
            "gem"
          ],
          "correct": 1,
          "explanation": "cargo"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-02",
      "title": "1.2 Cargo Project Structure",
      "module": "Getting Started",
      "objective": "Know src/main.rs and Cargo.toml.",
      "why": "Projects are organized so builds are reproducible.",
      "explanation": "Cargo.toml dependencies<br>src/main.rs binary entry",
      "codeExample": "// Cargo.toml\n// [package]\n// name = \"hello\"\n// version = \"0.1.0\"\n// edition = \"2021\"\n\nfn main() {\n    println!(\"cargo project ok\");\n}",
      "exercises": [
        {
          "title": "List parts",
          "instruction": "Print Cargo.toml and src/main.rs as key files.",
          "solution": "fn main() {\n    println!(\"Cargo.toml\");\n    println!(\"src/main.rs\");\n}",
          "hint": "standard layout",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Binary entry file usually?",
          "options": [
            "lib.rs only",
            "src/main.rs",
            "index.js",
            "main.py"
          ],
          "correct": 1,
          "explanation": "main.rs"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-03",
      "title": "1.3 Variables & Mutability",
      "module": "Basics",
      "objective": "Use let and let mut.",
      "why": "Immutable by default reduces accidental changes — like locked cells in a ledger.",
      "explanation": "let x = 5;<br>let mut y = 5; y = 6;",
      "codeExample": "fn main() {\n    let shop = \"City Mart\";\n    let mut sales = 0;\n    sales += 1500;\n    println!(\"{shop} sales={sales}\");\n}",
      "exercises": [
        {
          "title": "Counter",
          "instruction": "mut count start 0, add 1 twice, print.",
          "solution": "fn main() {\n    let mut count = 0;\n    count += 1;\n    count += 1;\n    println!(\"{count}\");\n}",
          "hint": "let mut",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Default binding mutability?",
          "options": [
            "mutable",
            "immutable",
            "static only",
            "volatile"
          ],
          "correct": 1,
          "explanation": "need mut to reassign"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-04",
      "title": "1.4 Types & Conversion",
      "module": "Basics",
      "objective": "Work with i32, f64, bool, char and parse.",
      "why": "User input is text — parse to numbers carefully.",
      "explanation": "let n: i32 = 42;<br>\"42\".parse::<i32>()",
      "codeExample": "fn main() {\n    let price: f64 = 19.99;\n    let qty: i32 = 3;\n    let total = price * f64::from(qty);\n    println!(\"total={total}\");\n    let n: i32 = \"42\".parse().expect(\"not a number\");\n    println!(\"{n}\");\n}",
      "exercises": [
        {
          "title": "Parse",
          "instruction": "Parse \"100\" to i32 and print.",
          "solution": "fn main() {\n    let n: i32 = \"100\".parse().expect(\"num\");\n    println!(\"{n}\");\n}",
          "hint": "parse + type annotate",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "parse returns?",
          "options": [
            "i32 always",
            "Result",
            "only panic",
            "float only"
          ],
          "correct": 1,
          "explanation": "Result needs handle"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-05",
      "title": "1.5 Functions",
      "module": "Basics",
      "objective": "Define functions with types and return values.",
      "why": "Typed signatures document contracts clearly.",
      "explanation": "fn add(a: i32, b: i32) -> i32 { a + b }",
      "codeExample": "fn add(a: i32, b: i32) -> i32 {\n    a + b // last expression returns\n}\n\nfn main() {\n    println!(\"{}\", add(2, 40));\n}",
      "exercises": [
        {
          "title": "Area",
          "instruction": "fn area(l: f64, w: f64) -> f64.",
          "solution": "fn area(l: f64, w: f64) -> f64 {\n    l * w\n}\nfn main() {\n    println!(\"{}\", area(3.0, 4.0));\n}",
          "hint": "no semicolon on return expr",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "Return type syntax?",
          "options": [
            "fn f() : int",
            "fn f() -> i32",
            "fn f() returns i32",
            "fn f(i32)"
          ],
          "correct": 1,
          "explanation": "-> Type"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-06",
      "title": "1.6 Control Flow",
      "module": "Basics",
      "objective": "if expressions and loops.",
      "why": "if is an expression — can assign results.",
      "explanation": "loop / while / for item in 1..5",
      "codeExample": "fn main() {\n    let score = 80;\n    let grade = if score >= 70 { \"A\" } else { \"B\" };\n    println!(\"{grade}\");\n    for i in 1..=3 {\n        println!(\"i={i}\");\n    }\n}",
      "exercises": [
        {
          "title": "Even loop",
          "instruction": "for 1..=10 print evens.",
          "solution": "fn main() {\n    for i in 1..=10 {\n        if i % 2 == 0 {\n            println!(\"{i}\");\n        }\n    }\n}",
          "hint": "%=",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "1..=3 includes?",
          "options": [
            "1,2",
            "1,2,3",
            "2,3",
            "empty"
          ],
          "correct": 1,
          "explanation": "inclusive end"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-07",
      "title": "2.1 Ownership",
      "module": "Ownership",
      "objective": "Explain move semantics with String.",
      "why": "Each value has one owner — free memory safely without GC pauses.",
      "explanation": "String heap data moves on assign<br>use clone if you need deep copy",
      "codeExample": "fn main() {\n    let s1 = String::from(\"hello\");\n    let s2 = s1; // move\n    // println!(\"{s1}\"); // error: moved\n    println!(\"{s2}\");\n    let s3 = s2.clone();\n    println!(\"{s2} {s3}\");\n}",
      "exercises": [
        {
          "title": "Predict",
          "instruction": "Does this compile? let a = String::from(\"x\"); let b=a; println!(\"{a}\"). Answer in println.",
          "solution": "fn main() {\n    println!(\"No — a was moved into b\");\n}",
          "hint": "move invalidates a",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "After move of String, original binding is?",
          "options": [
            "usable",
            "invalid (moved from)",
            "copied auto",
            "static"
          ],
          "correct": 1,
          "explanation": "use clone or restructure"
        }
      ],
      "pitfalls": "Confusing Copy types (i32) with move types (String).",
      "path": "beginner",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-08",
      "title": "2.2 References & Borrowing",
      "module": "Ownership",
      "objective": "Borrow with & and &mut.",
      "why": "Lend data without giving up ownership — like sharing a view on a ledger.",
      "explanation": "fn len(s: &String) -> usize<br>one &mut XOR many &",
      "codeExample": "fn length(s: &String) -> usize {\n    s.len()\n}\n\nfn main() {\n    let s = String::from(\"shop\");\n    let n = length(&s);\n    println!(\"{s} len={n}\");\n    let mut name = String::from(\"Ada\");\n    change(&mut name);\n    println!(\"{name}\");\n}\n\nfn change(s: &mut String) {\n    s.push_str(\" Okafor\");\n}",
      "exercises": [
        {
          "title": "Borrow print",
          "instruction": "Function takes &str or &String and prints it.",
          "solution": "fn show(s: &str) {\n    println!(\"{s}\");\n}\nfn main() {\n    let name = String::from(\"Bola\");\n    show(&name);\n}",
          "hint": "& to borrow",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Many immutable borrows allowed?",
          "options": [
            "No never",
            "Yes simultaneously",
            "Only with GC",
            "Only on i32"
          ],
          "correct": 1,
          "explanation": "shared XOR mutable"
        }
      ],
      "pitfalls": "",
      "path": "beginner",
      "project": false,
      "difficulty": "intermediate"
    },
    {
      "id": "rs-09",
      "title": "2.3 Slices",
      "module": "Ownership",
      "objective": "Use &str string slices.",
      "why": "First word of a sentence without copying whole string.",
      "explanation": "&s[0..5]<br>fn first_word(s: &str) -> &str",
      "codeExample": "fn first_word(s: &str) -> &str {\n    match s.find(' ') {\n        Some(i) => &s[..i],\n        None => s,\n    }\n}\n\nfn main() {\n    let text = String::from(\"zero to code\");\n    println!(\"{}\", first_word(&text));\n}",
      "exercises": [
        {
          "title": "Slice",
          "instruction": "Print slice of \"abcdef\" first 3 chars.",
          "solution": "fn main() {\n    let s = \"abcdef\";\n    println!(\"{}\", &s[..3]);\n}",
          "hint": "&s[..3]",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "&str is?",
          "options": [
            "owned heap string",
            "string slice/view",
            "integer",
            "thread"
          ],
          "correct": 1,
          "explanation": "view into str data"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-10",
      "title": "3.1 Structs",
      "module": "Structs & Enums",
      "objective": "Define structs and impl blocks.",
      "why": "Product { name, price } with methods — model inventory.",
      "explanation": "struct + impl Type { fn method(&self) }",
      "codeExample": "struct Product {\n    name: String,\n    price: f64,\n}\n\nimpl Product {\n    fn line_total(&self, qty: u32) -> f64 {\n        self.price * f64::from(qty)\n    }\n}\n\nfn main() {\n    let p = Product { name: String::from(\"Rice\"), price: 45000.0 };\n    println!(\"{} => {}\", p.name, p.line_total(2));\n}",
      "exercises": [
        {
          "title": "Rect",
          "instruction": "struct Rect w/h + area method.",
          "solution": "struct Rect { w: f64, h: f64 }\nimpl Rect {\n    fn area(&self) -> f64 { self.w * self.h }\n}\nfn main() {\n    let r = Rect { w: 3.0, h: 4.0 };\n    println!(\"{}\", r.area());\n}",
          "hint": "&self",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "&self in method means?",
          "options": [
            "steal ownership",
            "borrow self immutably",
            "thread local",
            "static mut"
          ],
          "correct": 1,
          "explanation": "read-only borrow of struct"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-11",
      "title": "3.2 Enums & match",
      "module": "Structs & Enums",
      "objective": "Model variants with enum and match.",
      "why": "Order status: Pending | Shipped | Delivered — enums beat magic strings.",
      "explanation": "enum Status { ... } match s { ... }",
      "codeExample": "enum Status {\n    Pending,\n    Shipped,\n    Delivered,\n}\n\nfn label(s: Status) -> &'static str {\n    match s {\n        Status::Pending => \"packing\",\n        Status::Shipped => \"on the way\",\n        Status::Delivered => \"done\",\n    }\n}\n\nfn main() {\n    println!(\"{}\", label(Status::Shipped));\n}",
      "exercises": [
        {
          "title": "Coin",
          "instruction": "enum Coin Naira variants + match value.",
          "solution": "enum Coin { N50, N100, N200 }\nfn value(c: Coin) -> u32 {\n    match c {\n        Coin::N50 => 50,\n        Coin::N100 => 100,\n        Coin::N200 => 200,\n    }\n}\nfn main() {\n    println!(\"{}\", value(Coin::N100));\n}",
          "hint": "exhaustive match",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "match must be?",
          "options": [
            "optional arms",
            "exhaustive for enum",
            "runtime only",
            "JS-like fallthrough default"
          ],
          "correct": 1,
          "explanation": "compiler enforces"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-12",
      "title": "3.3 Option & Result",
      "module": "Structs & Enums",
      "objective": "Handle missing values and errors without null.",
      "why": "No null pointer crashes — Option/Result force you to handle absence.",
      "explanation": "Option&lt;T&gt; Some/None<br>Result&lt;T,E&gt; Ok/Err<br>? operator later",
      "codeExample": "fn find_price(name: &str) -> Option<f64> {\n    if name == \"rice\" { Some(45000.0) } else { None }\n}\n\nfn main() {\n    match find_price(\"rice\") {\n        Some(p) => println!(\"₦{p}\"),\n        None => println!(\"not found\"),\n    }\n    let n: Result<i32, _> = \"12\".parse();\n    println!(\"{:?}\", n);\n}",
      "exercises": [
        {
          "title": "Divide",
          "instruction": "fn div(a,b)->Option&lt;f64&gt; None if b==0.",
          "solution": "fn div(a: f64, b: f64) -> Option<f64> {\n    if b == 0.0 { None } else { Some(a / b) }\n}\nfn main() {\n    println!(\"{:?}\", div(10.0, 2.0));\n}",
          "hint": "Option",
          "level": "medium"
        }
      ],
      "quiz": [
        {
          "q": "Rust null?",
          "options": [
            "null keyword widely",
            "prefer Option instead of null",
            "undefined",
            "NoneType like Python only"
          ],
          "correct": 1,
          "explanation": "Option replaces null"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "intermediate"
    },
    {
      "id": "rs-13",
      "title": "4.1 Vec & HashMap",
      "module": "Collections",
      "objective": "Grow lists and maps.",
      "why": "Dynamic order lists and inventory counts.",
      "explanation": "vec![1,2]<br>HashMap::new()",
      "codeExample": "use std::collections::HashMap;\n\nfn main() {\n    let mut cart = vec![\"bread\", \"milk\"];\n    cart.push(\"eggs\");\n    println!(\"{:?}\", cart);\n\n    let mut stock = HashMap::new();\n    stock.insert(\"rice\", 20);\n    println!(\"{:?}\", stock.get(\"rice\"));\n}",
      "exercises": [
        {
          "title": "Sum vec",
          "instruction": "Sum vec![10,20,30].",
          "solution": "fn main() {\n    let v = vec![10, 20, 30];\n    let sum: i32 = v.iter().sum();\n    println!(\"{sum}\");\n}",
          "hint": "iter().sum",
          "level": "easy"
        }
      ],
      "quiz": [
        {
          "q": "vec! macro creates?",
          "options": [
            "array only fixed",
            "Vec (growable)",
            "HashMap",
            "String slice"
          ],
          "correct": 1,
          "explanation": "heap vector"
        }
      ],
      "pitfalls": "",
      "path": "builder",
      "project": false,
      "difficulty": "beginner"
    },
    {
      "id": "rs-14",
      "title": "5.1 Capstone: CLI Notes Logic",
      "module": "Projects",
      "objective": "Combine structs, Vec, and methods for a notes app core.",
      "why": "Portfolio CLI: add/list notes in memory.",
      "explanation": "struct Note + Vec storage + list fn",
      "codeExample": "struct Note {\n    title: String,\n    body: String,\n}\n\nfn main() {\n    let mut notes: Vec<Note> = Vec::new();\n    notes.push(Note {\n        title: String::from(\"Buy data\"),\n        body: String::from(\"1GB MTN\"),\n    });\n    for n in &notes {\n        println!(\"- {}: {}\", n.title, n.body);\n    }\n}",
      "exercises": [
        {
          "title": "Add note",
          "instruction": "Push a second note and print count.",
          "solution": "struct Note { title: String, body: String }\nfn main() {\n    let mut notes = vec![Note { title: \"A\".into(), body: \"B\".into() }];\n    notes.push(Note { title: \"C\".into(), body: \"D\".into() });\n    println!(\"{}\", notes.len());\n}",
          "hint": "Vec push",
          "level": "medium"
        }
      ],
      "quiz": [],
      "pitfalls": "",
      "path": "builder",
      "project": true,
      "difficulty": "beginner"
    }
  ],
  "totalLessons": 14
};
