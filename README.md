# 🛠 2-Person Git Workflow (Frontend & Backend)

Follow this guide to avoid Git conflicts and keep work moving smoothly.

---

## 📌 1. Always Pull Before Starting Work

```bash
git pull origin main
```

This ensures you have the latest version before making changes.

---

## 📌 2. Work on Small, Manageable Chunks

- Focus on **one task at a time** (e.g., "Add login form", "Fix API route").
- Avoid working on huge features in a single commit.

---

## 📌 3. Commit Your Changes

When your task is done:

```bash
git add .
git commit -m "Short, clear description (e.g., 'Add login form')"
```

---

## 📌 4. Push to the `main` Branch

```bash
git push origin main
```

---

## 📌 5. Handling Merge Conflicts

If Git warns about conflicts when pushing:

1. Pull the latest changes:
   ```bash
   git pull origin main
   ```
2. Fix any conflicts in the files shown.
3. Stage and commit the resolved files:
   ```bash
   git add .
   git commit -m "Resolve merge conflicts"
   ```
4. Push again:
   ```bash
   git push origin main
   ```

---

## 📌 6. Bigger or Risky Features → Use a Feature Branch

If you’re making bigger changes:

```bash
git checkout main
git pull origin main
git checkout -b my-feature-branch
```

Work and commit as usual, then push:

```bash
git push origin my-feature-branch
```

When ready, merge your feature branch into `main` via a Pull Request.

---

## 📌 7. Communication Rules

- **Tell the other person before making big changes**.
- Keep commits small and frequent.
- Reply when someone asks about changes you made.
- Avoid pushing code that **breaks the project** without warning.

---

## 💡 Pro Tips

- **Frontend guy**: Don’t break backend APIs without telling backend dev.
- **Backend guy**: Don’t change frontend routes/API responses without telling frontend dev.
- Test locally before pushing.

---

By following this workflow, we can **both work on frontend & backend at the same time without stepping on each other’s toes**.
