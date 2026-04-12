# Security Policy

## HTTP Security Headers

All responses include the following headers configured in `next.config.js`:

| Header | Value |
|---|---|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=()` |
| `Content-Security-Policy` | See below |

## Content Security Policy

```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: blob:;
connect-src 'self';
frame-ancestors 'none';
base-uri 'self';
form-action 'self'
```

### Known accepted risk

`script-src 'unsafe-inline'` is required for Next.js 14 client-side hydration.
This weakens XSS protection from the CSP. Mitigation via nonce is pending and
requires middleware configuration. This risk is documented and accepted.

## External Links

All external links use `target="_blank" rel="noopener noreferrer"` to prevent
tabnapping and referrer leakage.

## Attack Surface

This is a static landing page with no forms, no user input, no API routes,
and no database. The attack surface is minimal.

## Reporting Vulnerabilities

Contact the maintainer directly to report vulnerabilities.
