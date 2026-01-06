# Evercrypt Encryption Format (EV1)

Evercrypt encrypted data is fully self-contained and versioned.

## Byte Layout

| Field        | Size (bytes) |
|--------------|--------------|
| Version      | 3 ("EV1")    |
| Salt         | 16           |
| IV (nonce)   | 12           |
| Ciphertext   | Variable     |
| Auth Tag     | Included     |

AES-GCM appends the authentication tag to the ciphertext automatically.

## Encoding

The full byte sequence is encoded as:

- Base16 (hexadecimal)
- Lowercase letters only
- URL-safe and copy/paste safe

## Example (conceptual)

EV1 | salt | iv | encrypted data + auth tag

## Versioning

Future versions may:
- Increase PBKDF2 iterations
- Change key derivation method
- Add metadata fields

Older encrypted data remains decryptable.
