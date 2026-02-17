# NotaCrypta Client-Side Encryption

**Website:** https://notacrypta.com  
**FAQ:** https://notacrypta.com/faq.aspx  

NotaCrypta is a **zero-knowledge** client-side encryption tool. Text is encrypted and decrypted **locally in your browser** — NotaCrypta never receives your plaintext or your encryption key.

## What this repository is
This repository contains the JavaScript encryption code used by NotaCrypta (AES-256-GCM + PBKDF2).  
If you just want to use the tool, open: https://notacrypta.com

## Core principles
- **Plaintext stays in the browser**
- **Encryption keys stay in the browser**
- The encryption service only ever handles **ciphertext**
- No tracking, no analytics, no ads

You can verify the local-only behavior by loading the page, then disconnecting from the internet — encryption and decryption still work offline.

## Cryptographic standards
NotaCrypta uses well-established primitives:
- **AES-256-GCM** (authenticated encryption)
- **PBKDF2 (SHA-256)** with **250,000 iterations**
- Cryptographically secure randomness from the browser (`crypto.getRandomValues`)
- Versioned, self-contained ciphertext format (for compatibility over time)

## Security properties
- **Confidentiality:** ciphertext cannot be read without the key
- **Integrity:** tampering is detected automatically (GCM authentication)
- **Zero-knowledge:** NotaCrypta cannot decrypt user data
- **Format versioning:** supports upgrades over time

## Threat model
**Protected against:**
- Server compromise
- Database leaks
- Admin access to stored ciphertext
- Backups or logs containing ciphertext

**Not protected against:**
- Malware on the user device
- Keyloggers
- Malicious browser extensions
- Weak passwords / low-entropy keys

## License
MIT License
