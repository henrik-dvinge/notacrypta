# Evercrypt Test Vectors

These vectors allow independent verification
of correct encryption and decryption behavior.

---

## Test Vector 1

Plaintext:
```
Hello Evercrypt
```

Password:
```
correct horse battery staple
```

Expected behavior:
- Encryption produces a hex string starting with `455631` (EV1)
- Decryption with the same password returns original plaintext
- Decryption with wrong password fails

---

## Test Vector 2

Plaintext:
```
1234567890
```

Password:
```
test123
```

Expected behavior:
- Different ciphertext every time (random salt + IV)
- Decryption succeeds only with correct password

---

## Verification Notes

Because Evercrypt uses random salt and IV:
- Ciphertext output is non-deterministic
- Correctness is verified by successful decryption
- Tampering causes decryption failure
