# Security Policy

## Security Headers
All responses include the following HTTP security headers configured in `next.config.ts`:
- `Content-Security-Policy`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Strict-Transport-Security`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`

## Reporting Vulnerabilities
To report a security vulnerability, contact: [maintainer contact]

## External Links
All external links use `target="_blank" rel="noopener noreferrer"`.

## Known Accepted Risks
- `script-src 'unsafe-inline'` is required for Next.js hydration. Mitigation via nonce is pending.
