# Stacks Testnet Wallet Generator

Minimal, production-ready Stacks testnet wallet generator following official [@stacks/wallet-sdk](https://github.com/hirosystems/stacks.js) patterns.

## Features

- ✅ Cryptographically secure wallet generation
- ✅ BIP39 24-word mnemonic seed phrases
- ✅ Testnet address derivation
- ✅ Direct Hiro faucet integration
- ✅ Error handling and validation
- ✅ ESM/Node.js compatibility
- ✅ Zero configuration required

## Requirements

- Node.js ≥18.0.0
- npm or yarn

## Installation

```bash
npm install
```

## Usage

### Generate Wallet

```bash
npm start
```

### Run Tests

```bash
npm test
```

### Programmatic Usage

```javascript
import { createTestnetWallet } from './wallet.js';

await createTestnetWallet();
```

## Output

```
🔑 Stacks Testnet Wallet Generated
================================
Secret Key (24-word): drill lake chalk step buzz...
Private Key: 1c0077ec6116a5d8b45f24fbd4cc464c...
Testnet Address: ST1S791NSNW0EXMMYD6RTX4H4891C3XQWANFT07HT

🚰 Get testnet STX tokens:
https://explorer.stacks.co/sandbox/faucet?chain=testnet&address=ST1S791...
```

## Security

- Secret keys generated with 256 bits of entropy
- Passwords use cryptographically secure random bytes
- Never logs sensitive data to disk
- Follows Stacks.js official patterns

## Dependencies

- `@stacks/wallet-sdk` - Official Stacks wallet SDK
- `@stacks/transactions` - Transaction utilities

## Development

This boilerplate follows enterprise-grade practices:

- Comprehensive error handling
- Input validation
- Cross-platform compatibility (Windows/macOS/Linux)
- ESM module support
- Test coverage
- Semantic versioning

## License

MIT