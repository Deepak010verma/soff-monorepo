# Contributing to Soff Cron

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Adding a New Language](#adding-a-new-language)
- [Styleguides](#styleguides)
  - [Commit Messages](#commit-messages)

## Code of Conduct

This project and everyone participating in it is governed by the
[Soff Cron Code of Conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.

## I Have a Question

Before you ask a question:

- Read the [Documentation](README.md)
- Search for existing [Issues](https://github.com/bledxs/soff-monorepo/issues)
- Search the internet for answers

If you still need clarification, open an issue with your question.

## I Want To Contribute

### Reporting Bugs

- Use the latest version
- Check if the bug has already been reported
- Provide a clear title, description, and reproduction steps
- Include relevant information (OS, Node version, etc.)

### Suggesting Enhancements

- Open a new issue
- Describe the enhancement in detail
- Explain why it would be useful

### Your First Code Contribution

1. **Fork the repository**
2. **Clone your fork**
3. **Create a branch**: `git checkout -b feature/your-feature-name`
4. **Make your changes**
5. **Run tests**: `npm test`
6. **Run linting**: `npm run lint`
7. **Commit your changes**: Follow [Conventional Commits](https://www.conventionalcommits.org/)
8. **Push to your fork**
9. **Open a Pull Request**

### Adding a New Language

We welcome translations! To add a new language:

1. Create a new file in `src/i18n/` (e.g., `pt.ts` for Portuguese)
2. Copy the structure from `src/i18n/es.ts`
3. Translate all strings to your target language
4. Add the new language to `Locale` type in `src/core/types.ts`
5. Update `src/core/formatter.ts` to import and use your translation
6. Add tests in `tests/core/formatter.test.ts`
7. Update the README with the new language
8. Create a changeset: `npx changeset`

Example structure for `pt.ts`:

```typescript
import type { I18nStrings } from './es.js';

export const pt: I18nStrings = {
  at: 'às',
  every: 'cada',
  everyMinute: 'cada minuto',
  // ... translate all strings
};
```

## Styleguides

### Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

Format: `<type>(<scope>): <description>`

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `refactor`: Code refactoring
- `style`: Code style changes (formatting, etc.)
- `chore`: Other changes (dependencies, config, etc.)

**Examples:**

```bash
feat(formatter): add verbose mode for detailed descriptions
fix(validator): correct range validation for day of month
docs: update README with Portuguese examples
test(parser): add tests for 6-field cron expressions
```

---

Thank you for contributing to Soff Cron! 🎉
