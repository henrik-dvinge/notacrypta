# NotaCrypta Encryption Format (EV1)

Encrypted data is self-contained and versioned.

## Byte layout (before hex encoding)

| Field               | Size (bytes) |
|--------------------|--------------|
| Version            | 3 (`"EV1"`)  |
| Salt               | 16           |
| IV / nonce         | 12           |
| Ciphertext + tag   | Variable     |

**Note:** In AES-GCM (WebCrypto), the authentication tag is appended to the ciphertext output (typically 16 bytes).

## Encoding

The full byte sequence is encoded as:

- Base16 (hex)
- Lowercase letters only
- ASCII-only and copy/paste friendly  
- Suitable for URLs when **URL-encoded** (recommended)

## Conceptual example

`EV1 | salt | iv | (ciphertext || authTag)`

## Versioning

Future versions may:
- Increase PBKDF2 iterations
- Change key derivation parameters
- Add optional metadata fields

Older encrypted data should remain decryptable where feasible.
