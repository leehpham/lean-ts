# Contribution Guidelines

1. There's a **stable main branch**.
2. Create a **feature branch** for every change:

    ```bash
    git checkout -b feat/LT-<number>
    ```

3. Commit to the feature branch using this message format
  `feat: [LT-<number>] <message>`
4. Push to GitHub:

    ```bash
    git push -u origin feat/LT-<number>
    ```

5. Open a **pull request (PR)** on GitHub.
6. Code is **reviewed + tested**.
7. Merge the PR into `main`.
8. **Deploy** from `main`.
