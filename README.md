# NotaCrypta Client-Side Encryption

NotaCrypta is a zero-knowledge encryption system that encrypts all data
locally in the browser before anything is sent or stored.

> **Note:** This project was previously named **Evercrypt** and has been renamed to **NotaCrypta** to match the new domain/branding (notacrypta.com). The underlying format/versioning (**EV1**) is unchanged.
>
> The name **NotaCrypta** comes from two roots — *nota* (“note” / written record) and *crypta* (“crypt” / vault). It represents a simple idea: a place where your secrets stay hidden, protected, and yours alone.

## Core Principles

- Plaintext never leaves the browser
- Encryption keys never leave the browser
- Servers only ever see encrypted data
- No accounts, no tracking, no recovery

You can verify this by disconnecting your internet connection.
Encryption and decryption continue to work offline.

## Cryptographic Standards

NotaCrypta uses modern, well-established standards:

- **AES-256-GCM** (Authenticated Encryption)
- **PBKDF2 (SHA-256)** with 250,000 iterations
- Cryptographically secure randomness from the browser
- Versioned, self-contained encryption format

These standards are widely used in secure messaging,
password managers, and enterprise systems.

## Security Properties

- Confidentiality: encrypted data cannot be read
- Integrity: tampering is automatically detected
- Zero-knowledge: Evercrypt cannot decrypt user data
- Forward compatibility via format versioning

## Threat Model

Protected against:
- Server compromise
- Database leaks
- Admin access
- Backups or logs

Not protected against:
- Malware on the user device
- Keyloggers
- Malicious browser extensions
- Weak passwords

## License

MIT License
