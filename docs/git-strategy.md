# Git Workflow Strategy

## Branching Strategy
We use a **Gitflow-inspired** branching model with the following branches:

### 1. `main`
- The stable production-ready branch.
- Only updated via **pull requests (PRs)** from `develop`.
- Requires code review and successful CI/CD pipeline before merging.

### 2. `develop`
- The main integration branch for ongoing development.
- New features and fixes are merged here before being released.
- Updated via feature branches (`feature/*`) and bugfix branches (`bugfix/*`).

### 3. `feature/*`
- Used for developing new features.
- Branch off from `develop`.
- Merged back into `develop` after completion via PR.
- Naming convention: `feature/<feature-name>`.

### 4. `bugfix/*`
- Used for fixing bugs found in `develop` before release.
- Branch off from `develop`.
- Merged back into `develop` via PR.
- Naming convention: `bugfix/<bug-name>`.

### 5. `hotfix/*`
- Used for critical fixes in production.
- Branch off from `main`.
- Merged back into `main` **and** `develop`.
- Naming convention: `hotfix/<hotfix-name>`.

### 6. `release/*`
- Used to prepare a new production release.
- Branch off from `develop`.
- Merged into `main` and `develop` after testing.
- Naming convention: `release/<version>`.

## Git Rules

### General Rules
- Use **meaningful commit messages**.
- Keep commits **small and focused**.
- Use **rebase instead of merge** when updating feature branches.
- Ensure **all tests pass** before merging.
- Every PR must be **reviewed by at least one team member**.

### Pull Request Guidelines
- PRs should have **clear descriptions** and link to relevant issues.
- PRs should be **small and focused** (avoid large PRs).
- PRs should be **assigned reviewers**.
- CI/CD pipeline must pass before merging.

### Branch Deletion Policy
- Feature, bugfix, hotfix, and release branches should be deleted after merging.
- Use `git branch -d <branch>` locally and `git push origin --delete <branch>` remotely.