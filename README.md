# unify-labs-practice
🚀 My Unify Labs Internship Practice Code

# Git & GitHub – Hello World Project

## 🎯 Learning Objectives
- Install and verify Git Bash
- Configure global Git user identity
- Generate and use a Personal Access Token
- Create and push a Hello World repository to GitHub

---

## 📌 Step 1: Local Setup

### Install Git
Download Git from:
https://git-scm.com

### Verify Installation
```bash
git --version
```

### Configure Global User Identity
```bash
git config --global user.name "Your Name"
git config --global user.email "yourmail@example.com"
```

---

## 📌 Step 2: GitHub Presence

1. Create a GitHub account (https://github.com)
2. Go to **Settings → Developer Settings → Personal Access Tokens**
3. Generate a token with **repo** permission
4. Save the token securely (Notes / Password Manager)

---

## 📌 Step 3: The First Link (Hello World Repo)

### Create Project Folder
```bash
mkdir git-practice
cd git-practice
```

### Initialize Git
```bash
git init
```

### Create README.md
```bash
echo "# Hello World" > README.md
```

### Commit Changes
```bash
git add .
git commit -m "Initial Hello World commit"
```

### Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/USERNAME/git-practice.git
git push -u origin main
```

---

## ✅ Output
- Git installed and verified
- Global user identity configured
- Repository successfully pushed to GitHub
- Authentication completed using Personal Access Token

---

## 📷 Screenshots (Add if required)
- Git version check
- GitHub repository page
- Successful push output
