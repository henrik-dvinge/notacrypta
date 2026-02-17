# NotaCrypta Behavioral Tests

These tests allow independent verification of correct encryption and decryption behavior.

## Test 1

Plaintext:
```
Hello NotaCrypta
```

Password:
```
correct horse battery staple
```

Expected behavior:
- Encryption returns a lowercase hex string starting with `455631` (`"EV1"`)
- Decryption with the same password returns the original plaintext
- Decryption with a wrong password fails

## Test 2

Plaintext:
```
1234567890
```

Password:
```
test123
```

Expected behavior:
- Ciphertext differs across runs (random salt + IV)
- Decryption succeeds only with the correct password

## Notes

Because NotaCrypta uses random salt and IV:
- Ciphertext output is non-deterministic
- Correctness is verified by successful decryption
- Tampering causes decryption failure (AES-GCM authentication)
