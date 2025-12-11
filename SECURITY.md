# Security Policy

## Overview

Security is a top priority for the Soff Monorepo project. We appreciate the efforts of security researchers and users who report vulnerabilities to help keep our packages and users safe.

## Supported Versions

We provide security updates for the following versions:

| Package    | Current Version | Supported | Status             |
| ---------- | --------------- | --------- | ------------------ |
| soff-cron  | 0.x             | ✅        | Active development |
| soff-date  | 0.x             | ✅        | Active development |
| soff-geo   | 0.x             | ✅        | Active development |
| soff-id    | 0.x             | ✅        | Active development |
| soff-mask  | 0.x             | ✅        | Active development |
| soff-money | 0.x             | ✅        | Active development |
| soff-phone | 0.x             | ✅        | Active development |

> **Note**: All packages in this monorepo are currently in pre-1.0 versions (0.x). We provide security updates for the latest minor version of each package. Once we reach version 1.0, we will adopt a more formal support policy.

## Automated Security Measures

This repository implements several automated security measures:

- **Dependabot**: Automatically checks for dependency updates and security vulnerabilities weekly
- **npm audit**: Runs on every push and pull request to detect known vulnerabilities
- **Dependency Review**: Reviews all dependency changes in pull requests
- **CodeQL Analysis**: Static code analysis to detect security issues in the codebase
- **Security Workflow**: Weekly security scans (every Monday at 9:00 UTC)

You can view the security workflows in [`.github/workflows/security.yml`](.github/workflows/security.yml).

## Reporting a Vulnerability

We take the security of our packages seriously. If you believe you have found a security vulnerability in any package within the Soff Monorepo, please report it to us responsibly.

### ⚠️ Please do NOT

- Open a public GitHub issue for security vulnerabilities
- Disclose the vulnerability publicly before we've had a chance to address it
- Exploit the vulnerability beyond what is necessary to demonstrate it

### ✅ Please DO

1. **Email us directly** at [luisc.rojas@hotmail.com](mailto:luisc.rojas@hotmail.com) with:
   - A clear description of the vulnerability
   - The affected package(s) and version(s)
   - Steps to reproduce the issue
   - Potential impact of the vulnerability
   - Any suggested fixes (optional)

2. **Use GitHub Security Advisories** (preferred):
   - Go to the [Security tab](https://github.com/bledxs/soff-monorepo/security/advisories)
   - Click "Report a vulnerability"
   - Fill out the form with details about the vulnerability

### Response Timeline

- **Initial Response**: Within 48 hours of receiving your report
- **Status Update**: Within 7 days with an assessment and expected timeline
- **Fix Timeline**: We aim to release patches within 30 days for critical vulnerabilities
- **Public Disclosure**: After a fix is released and users have had time to update

If you don't receive a response within 48 hours, please follow up via email to ensure we received your original message.

## Security Best Practices for Users

When using packages from this monorepo:

### 1. Keep Dependencies Updated

```bash
# Check for outdated packages
npm outdated

# Update to latest versions
npm update
```

### 2. Regular Security Audits

```bash
# Run security audit
npm audit

# Fix vulnerabilities automatically
npm audit fix
```

### 3. Use Specific Versions

In production, pin to specific versions rather than using ranges:

```json
{
  "dependencies": {
    "soff-date": "0.1.5", // ✅ Specific version
    "soff-id": "^0.1.0" // ⚠️ Range (auto-updates)
  }
}
```

### 4. Monitor Security Advisories

- Watch this repository for security updates
- Subscribe to GitHub Security Advisories
- Check our [CHANGELOG.md](CHANGELOG.md) for security-related releases

## Scope

### In Scope

- Security vulnerabilities in package code
- Dependency vulnerabilities
- Build process security issues
- Documentation that could lead to insecure usage
- Regular expression DoS (ReDoS)
- Prototype pollution
- Code injection vulnerabilities

### Out of Scope

- Vulnerabilities in third-party dependencies (report to the respective maintainers)
- Issues requiring physical access to a user's device
- Social engineering attacks
- Issues in outdated/unsupported versions
- Theoretical vulnerabilities without proof of concept

## Recognition

We appreciate responsible disclosure and will acknowledge security researchers who report valid vulnerabilities:

- Credit in the security advisory (if desired)
- Recognition in the [CONTRIBUTORS.md](CONTRIBUTORS.md) file
- Mention in the relevant CHANGELOG.md

## Contact

- **Security Email**: [luisc.rojas@hotmail.com](mailto:luisc.rojas@hotmail.com)
- **General Contact**: [Luis C. Rojas](https://github.com/bledxs)
- **Repository**: [https://github.com/bledxs/soff-monorepo](https://github.com/bledxs/soff-monorepo)

## Additional Resources

- [GitHub Security Documentation](https://docs.github.com/en/code-security)
- [npm Security Best Practices](https://docs.npmjs.com/security-best-practices)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

---

**Last Updated**: December 2025

Thank you for helping keep Soff Monorepo and our users safe! 🔒
