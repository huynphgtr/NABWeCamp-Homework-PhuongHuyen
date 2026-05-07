# Homework: Basic Command Line Essentials

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

## Exercises

### Exercise 1: JavaScript Basics 
- Write and run basic JavaScript code
- Practice variable declaration and data types
- Create functions and understand scope

### Exercise 2: Command Line Practice
- Navigate your file system
- Create files and directories
- Run JavaScript files from the terminal

### Exercise 3: Git & GitHub Basics 
- Initialize a local repository
- Create commits for your code changes
- Push your code to GitHub

---

## Additional Resources

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

## Troubleshooting

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
