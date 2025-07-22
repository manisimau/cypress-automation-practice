# Git Branching Strategy

## Branch Types

### Main Branch
- The stable production-ready branch
- Only updated via **pull requests (PRs)** from feature branches
- Requires code review before merging
- Should always be in a deployable state

### Feature Branches
- Created from `main` branch
- Naming convention: `feature/<task_name>`
- Used for developing new features or fixing bugs
- Should be short-lived (1-2 weeks maximum)
- Must be up-to-date with `main` before creating PR

## Workflow

1. Create a new feature branch from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-task-name
   ```

2. Develop your feature:
   - Make regular commits
   - Keep commits focused and meaningful
   - Write clear commit messages

3. Keep your branch up-to-date with `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout feature/your-task-name
   git merge main
   ```

4. Create a Pull Request:
   - From your feature branch to `main`
   - Include a clear description of changes
   - Request code review
   - Address any review comments

5. After approval:
   - Merge the PR into `main`
   - Delete the feature branch

## Best Practices

- Never commit directly to `main`
- Keep feature branches focused on a single task
- Regular commits with clear messages
- Keep branches up-to-date with `main`
- Delete feature branches after merging
- Use meaningful branch names that reflect the task