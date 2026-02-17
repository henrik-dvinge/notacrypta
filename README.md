# NotaCrypta Client-Side Encryption

**Website:** https://notacrypta.com  
**FAQ:** https://notacrypta.com/faq.aspx  

NotaCrypta is a **zero-knowledge** client-side encryption system. Text is encrypted and decrypted **locally in your browser** before anything is sent or stored.

## What this repository is
This repository contains the JavaScript encryption code used by NotaCrypta (AES-256-GCM + PBKDF2).  
If you just want to use the tool, open: https://notacrypta.com

## Core principles
- **Plaintext never leaves the browser**
- **Encryption keys never leave the browser**
- Servers only ever see **ciphertext**
- No tracking, no analytics, no ads

You can verify the “local-only” behavior by disconnecting your internet connection — encryption and decryption still work offline.

## Cryptographic standards
NotaCrypta uses modern, well-established primitives:
- **AES-256-GCM** (authenticated encryption)
- **PBKDF2 (SHA-256)** with **250,000 iterations**
- Cryptographically secure randomness from the browser
- Versioned, self-contained encryption format (for forward compatibility)

## Security properties
- **Confidentiality:** ciphertext cannot be read without the key
- **Integrity:** tampering is detected automatically (GCM authentication)
- **Zero-knowledge:** NotaCrypta cannot decrypt user data
- **Forward compatibility:** format versioning supports upgrades over time

## Threat model
**Protected against:**
- Server compromise
- Database leaks
- Admin access
- Backups or logs

**Not protected against:**
- Malware on the user device
- Keyloggers
- Malicious browser extensions
- Weak passwords / low-entropy keys

## License
MIT License

