# Session 1: JavaScript Overview, Command Line & GitHub

Hi I'm Phuong Huyen Tran. Welcome to Session 1 of the NAB-WECAMP training program! This session introduces the fundamentals of web development, focusing on JavaScript basics, command-line tools, and version control with GitHub.

## 📚 Learning Objectives

By the end of this session, you will be able to:
- Understand JavaScript fundamentals and syntax
- Navigate and use the command line effectively
- Use Git and GitHub for version control and collaboration

---

## 1. JavaScript Overview

### What is JavaScript?
JavaScript is a lightweight, interpreted programming language that runs in web browsers and servers. It's essential for creating interactive web applications.

### Key Features
- **Dynamic Typing**: Variables can hold any data type
- **Event-Driven**: Responds to user interactions
- **Functional Programming**: Supports first-class functions and callbacks
- **Object-Oriented**: Supports objects and prototypes

### JavaScript Fundamentals

#### Variables & Data Types
```javascript
// Variable declaration
let name = "John";
const age = 25;
var city = "New York";

// Data Types
let string = "Hello";
let number = 42;
let boolean = true;
let array = [1, 2, 3];
let object = { name: "John", age: 25 };
let nullValue = null;
let undefined;
```

#### Functions
```javascript
// Function declaration
function greet(name) {
  return "Hello, " + name;
}

// Arrow function (ES6+)
const add = (a, b) => a + b;

// Function call
console.log(greet("Alice"));
console.log(add(5, 3));
```

#### Control Structures
```javascript
// If-else
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (condition) {
  // code block
}
```

#### Objects & Arrays
```javascript
// Objects
const person = {
  name: "John",
  age: 25,
  greet: function() {
    console.log("Hello!");
  }
};

// Arrays
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.map(n => n * 2);
```

### Best Practices
- Use `const` by default, `let` when reassignment is needed, avoid `var`
- Write descriptive variable names
- Keep functions small and focused
- Use comments to explain complex logic

---

## 2. Command Line Essentials

The command line (terminal/console) is a text-based interface for interacting with your computer.

### Basic Commands

#### Navigation
```bash
# Print working directory
pwd

# Change directory
cd path/to/folder
cd ..          # Go to parent directory
cd ~           # Go to home directory

# List files
ls             # macOS/Linux
dir            # Windows
```

#### File Operations
```bash
# Create a file
touch filename.js
echo "content" > file.txt

# Create a directory
mkdir folder-name

# Copy files
cp source.js destination.js

# Move/rename files
mv old-name.js new-name.js

# Remove files
rm filename.js

# Remove directory
rmdir empty-folder
rm -r folder-with-contents
```

#### Viewing Content
```bash
# Display file content
cat filename.js
type filename.js      # Windows

# View file with pagination
less filename.js
```

### Running JavaScript

```bash
# Run a JavaScript file with Node.js
node script.js

# Start interactive mode
node

# Run with arguments
node script.js arg1 arg2
```

### Useful Tips
- Use `Tab` to auto-complete file/folder names
- Press `↑` arrow key to recall previous commands
- Use `Ctrl+C` to stop running programs
- Clear screen with `clear` (macOS/Linux) or `cls` (Windows)

---

## 3. Git & GitHub

### What is Git?
Git is a distributed version control system that tracks changes in your code, allowing collaboration and version management.

### What is GitHub?
GitHub is a cloud-based platform for hosting Git repositories, enabling collaboration and code sharing.

### Core Concepts

#### Repository
A folder containing all project files and Git history.

#### Commit
A snapshot of your code at a specific point in time.

#### Branch
An independent line of development (default: `main` or `master`).

#### Remote
A version of your repository hosted on GitHub.

### Basic Git Workflow

#### 1. Initialize a Repository
```bash
# Create a new repository locally
git init

# Clone an existing repository
git clone https://github.com/username/repo.git
```

#### 2. Check Status
```bash
# View changes
git status

# View detailed changes
git diff
```

#### 3. Stage Changes
```bash
# Stage specific file
git add filename.js

# Stage all changes
git add .
```

#### 4. Commit Changes
```bash
# Create a commit with a message
git commit -m "Add JavaScript overview to README"

# View commit history
git log
```

#### 5. Push to GitHub
```bash
# Push commits to remote repository
git push origin main

# Pull latest changes from remote
git pull origin main
```

#### 6. Create & Switch Branches
```bash
# Create a new branch
git branch feature-name

# Switch to a branch
git checkout feature-name

# Create and switch in one command
git checkout -b feature-name

# List all branches
git branch
```

### GitHub Workflow

1. **Fork** a repository (create your own copy)
2. **Clone** your fork to your local machine
3. **Create a branch** for your feature/fix
4. **Make changes** and commit them
5. **Push** your branch to GitHub
6. **Create a Pull Request** to propose changes
7. **Review & merge** when approved

### Common Git Commands Reference
```bash
git init                          # Initialize repository
git clone <url>                   # Clone repository
git add <file>                    # Stage changes
git commit -m "message"           # Commit changes
git push origin <branch>          # Push to GitHub
git pull origin <branch>          # Pull from GitHub
git branch <branch-name>          # Create branch
git checkout <branch-name>        # Switch branch
git merge <branch-name>           # Merge branch
git status                        # Check status
git log                           # View history
```

---

## 📁 Session Files

```
SESSION1-220426/
├── README.md                 # This file
├── session1.js              # Main JavaScript exercises
└── training-demo/
    └── lab1.js              # Lab 1 exercises
```

---

## 🎯 Exercises

### Exercise 1: JavaScript Basics (session1.js)
- Write and run basic JavaScript code
- Practice variable declaration and data types
- Create functions and understand scope

### Exercise 2: Command Line Practice
- Navigate your file system
- Create files and directories
- Run JavaScript files from the terminal

### Exercise 3: Git & GitHub Basics (training-demo/lab1.js)
- Initialize a local repository
- Create commits for your code changes
- Push your code to GitHub

---

## 📖 Additional Resources

### JavaScript
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)

### Command Line
- [Command Line Cheat Sheet](https://www.git-tower.com/blog/command-line-cheat-sheet/)

### Git & GitHub
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Pro Git Book](https://git-scm.com/book/en/v2)

---

## 💡 Tips for Success

1. **Practice Regularly**: Spend time experimenting with code in the console
2. **Use the Terminal**: Become comfortable with command-line operations
3. **Make Meaningful Commits**: Write clear commit messages that describe what changed
4. **Read Error Messages**: They provide valuable information about what went wrong
5. **Break Problems Down**: Divide complex tasks into smaller steps
6. **Collaborate**: Use GitHub to share code and learn from others

---

## ❓ Troubleshooting

### Node.js not found
```bash
# Check if Node.js is installed
node --version

# Install from nodejs.org if needed
```

### Git not recognized
```bash
# Check if Git is installed
git --version

# Install from git-scm.com if needed
```

### Permission Denied Error
```bash
# May need to configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

**Last Updated**: 22nd April 2026  
**Session**: 1 - JavaScript Overview, Command Line & GitHub

