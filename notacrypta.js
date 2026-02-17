/* ==========================================================
   NotaCrypta – Client-Side Encryption Library
   Version: EV1
   License: MIT
   ========================================================== */

const NotaCrypta = (() => {

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    // Keep EV1 for backward/format compatibility (you can rename later if desired)
    const VERSION = "EV1";
    const SALT_LENGTH = 16;
    const IV_LENGTH = 12;
    const PBKDF2_ITERATIONS = 250000;

    /* ---------- Utilities ---------- */

    function bytesToHex(bytes) {
        return Array.from(bytes)
            .map(b => b.toString(16).padStart(2, "0"))
            .join("");
    }

    function hexToBytes(hex) {
        if (hex.length % 2 !== 0) {
            throw new Error("Invalid hex input");
        }
        const bytes = new Uint8Array(hex.length / 2);
        for (let i = 0; i < bytes.length; i++) {
            bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
        }
        return bytes;
    }

    function concatBytes(...arrays) {
        const totalLength = arrays.reduce((sum, a) => sum + a.length, 0);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const a of arrays) {
            result.set(a, offset);
            offset += a.length;
        }
        return result;
    }

    /* ---------- Key Derivation ---------- */

    async function deriveKey(password, salt) {
        const baseKey = await crypto.subtle.importKey(
            "raw",
            encoder.encode(password),
            "PBKDF2",
            false,
            ["deriveKey"]
        );

        return crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: salt,
                iterations: PBKDF2_ITERATIONS,
                hash: "SHA-256"
            },
            baseKey,
            { name: "AES-GCM", length: 256 },
            false,
            ["encrypt", "decrypt"]
        );
    }

    /* ---------- Encrypt ---------- */

    async function encrypt(plaintext, password) {
        if (!plaintext || !password) {
            throw new Error("Plaintext and password are required");
        }

        const salt = crypto.getRandomValues(new Uint8Array(SALT_LENGTH));
        const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
        const key = await deriveKey(password, salt);

        const encrypted = new Uint8Array(
            await crypto.subtle.encrypt(
                { name: "AES-GCM", iv },
                key,
                encoder.encode(plaintext)
            )
        );

        const payload = concatBytes(
            encoder.encode(VERSION),
            salt,
            iv,
            encrypted
        );

        return bytesToHex(payload);
    }

    /* ---------- Decrypt ---------- */

    async function decrypt(hexData, password) {
        if (!hexData || !password) {
            throw new Error("Ciphertext and password are required");
        }

        const data = hexToBytes(hexData);

        const version = decoder.decode(data.slice(0, 3));
        if (version !== VERSION) {
            throw new Error("Unsupported NotaCrypta format");
        }

        const salt = data.slice(3, 3 + SALT_LENGTH);
        const iv = data.slice(3 + SALT_LENGTH, 3 + SALT_LENGTH + IV_LENGTH);
        const ciphertext = data.slice(3 + SALT_LENGTH + IV_LENGTH);

        const key = await deriveKey(password, salt);

        const decrypted = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv },
            key,
            ciphertext
        );

        return decoder.decode(decrypted);
    }

    return {
        encrypt,
        decrypt
    };

})();
